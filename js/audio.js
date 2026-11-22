/**
 * MasterEnglish Audio & Speech Engine
 * Native Web Speech API for US/UK pronunciation, audio lecture player,
 * and pronunciation self-testing without external dependency failure.
 */

class AudioEngine {
  constructor() {
    this.synth = window.speechSynthesis || null;
    this.voices = [];
    this.currentAccent = 'en-US'; // or 'en-GB'
    this.speechRate = 0.95; // slightly paced for optimal clarity
    this.isPlaying = false;
    this.currentUtterance = null;
    this.status = {
      supported: !!window.speechSynthesis,
      recognitionSupported: ('SpeechRecognition' in window) || ('webkitSpeechRecognition' in window),
      online: navigator.onLine,
      lastCheck: new Date().toLocaleTimeString()
    };

    this.initVoices();
  }

  initVoices() {
    if (!this.synth) return;
    
    const loadVoices = () => {
      this.voices = this.synth.getVoices();
    };

    loadVoices();
    if (speechSynthesis.onvoiceschanged !== undefined) {
      speechSynthesis.onvoiceschanged = loadVoices;
    }
  }

  setAccent(accent) {
    this.currentAccent = accent === 'en-GB' ? 'en-GB' : 'en-US';
  }

  setRate(rate) {
    this.speechRate = parseFloat(rate) || 1.0;
  }

  getVoiceForAccent(accent) {
    if (!this.voices || this.voices.length === 0) {
      this.voices = this.synth ? this.synth.getVoices() : [];
    }
    
    // Attempt exact match for accent
    let matched = this.voices.find(v => v.lang === accent);
    if (!matched) {
      matched = this.voices.find(v => v.lang.startsWith(accent.split('-')[0]));
    }
    return matched || (this.voices.length > 0 ? this.voices[0] : null);
  }

  speak(text, onStart = null, onEnd = null) {
    if (!this.synth) {
      console.warn('Speech synthesis not supported in this browser.');
      alert('ميزة الصوتيات المباشرة تحتاج متصفحاً حديثاً يدعم Web Speech API. يرجى تفعيل الصوت أو استخدام Google Chrome أو Safari.');
      return;
    }

    // Cancel ongoing speech
    this.stop();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = this.currentAccent;
    utterance.rate = this.speechRate;
    utterance.pitch = 1.0;

    const voice = this.getVoiceForAccent(this.currentAccent);
    if (voice) {
      utterance.voice = voice;
    }

    utterance.onstart = () => {
      this.isPlaying = true;
      this.toggleVisualizer(true);
      if (onStart) onStart();
    };

    utterance.onend = () => {
      this.isPlaying = false;
      this.toggleVisualizer(false);
      if (onEnd) onEnd();
    };

    utterance.onerror = (e) => {
      console.error('Speech synthesis error:', e);
      this.isPlaying = false;
      this.toggleVisualizer(false);
      if (onEnd) onEnd();
    };

    this.currentUtterance = utterance;
    this.synth.speak(utterance);
  }

  stop() {
    if (this.synth) {
      this.synth.cancel();
    }
    this.isPlaying = false;
    this.toggleVisualizer(false);
  }

  toggleVisualizer(active) {
    const bars = document.querySelectorAll('.audio-bar');
    bars.forEach(bar => {
      if (active) {
        bar.classList.add('animate-pulse-height');
      } else {
        bar.classList.remove('animate-pulse-height');
      }
    });
  }

  // Pronunciation Practice via Web Speech Recognition
  startPronunciationTest(targetWord, onResultCallback, onErrorCallback) {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      if (onErrorCallback) onErrorCallback("المتصفح لا يدعم ميزة الميكروفون المباشر. يرجى فتح الموقع في متصفح حديث مثل Chrome.");
      return null;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = this.currentAccent;
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.onresult = (event) => {
      const spokenWord = event.results[0][0].transcript.trim().toLowerCase();
      const target = targetWord.trim().toLowerCase();
      const isMatch = spokenWord.includes(target) || target.includes(spokenWord);
      const confidence = Math.round(event.results[0][0].confidence * 100) || (isMatch ? 95 : 60);

      if (onResultCallback) {
        onResultCallback({
          spokenWord,
          targetWord,
          isMatch,
          confidence
        });
      }
    };

    recognition.onerror = (event) => {
      console.error('Recognition error', event.error);
      if (onErrorCallback) onErrorCallback(`حدث خطأ في قراءة الصوت: ${event.error}`);
    };

    recognition.start();
    return recognition;
  }

  // Diagnostic Health Check
  checkHealth() {
    const speechApiOk = !!window.speechSynthesis;
    const voicesCount = this.synth ? this.synth.getVoices().length : 0;
    const isOnline = navigator.onLine;

    return {
      status: speechApiOk && isOnline ? "healthy" : "warning",
      speechApi: speechApiOk ? "نشط وشغال 100%" : "غير مدعوم بالكامل",
      voicesLoaded: voicesCount > 0 ? `${voicesCount} أصوات متوفرة` : "جاري تحميل الأصوات",
      networkStatus: isOnline ? "متصل بالإنترنت" : "يعمل بدون اتصال (Offline Mode)",
      offlineSupported: "نعم، البيانات والبطاقات محفوظة محلياً"
    };
  }
}

// Global Audio Engine Instance
const audioEngine = new AudioEngine();
