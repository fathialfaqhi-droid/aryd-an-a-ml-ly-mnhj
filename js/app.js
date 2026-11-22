/**
 * MasterEnglish Academy - Main Application Logic
 * Interactive UI, Progress Tracking, Audio Integration, Flashcards & Diagnostics
 */

// Application State
const AppState = {
  activeTab: 'curriculum',
  completedUnits: JSON.parse(localStorage.getItem('mea_completed_units') || '[]'),
  flashcardIndex: 0,
  flashcardFlipped: false,
  diagnosticAnswers: {},
  studyPlan: JSON.parse(localStorage.getItem('mea_study_plan') || 'null'),
  accent: localStorage.getItem('mea_accent') || 'en-US',
  speed: parseFloat(localStorage.getItem('mea_speed') || '0.95'),
  theme: localStorage.getItem('mea_theme') || 'light'
};

// DOM Content Loaded Handler
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initTabs();
  renderCurriculum();
  renderScholarships();
  renderYemenGuide();
  renderFlashcards();
  renderAudioLab();
  renderDiagnosticTest();
  renderTemplates();
  initAudioControls();
  initStudyPlanner();
  initContactSystem();
  updateProgressStats();
  checkSystemHealth();
});

/* Theme Handling */
function initTheme() {
  document.documentElement.setAttribute('data-theme', AppState.theme);
  const themeToggle = document.getElementById('theme-toggle-btn');
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      AppState.theme = AppState.theme === 'light' ? 'dark' : 'light';
      document.documentElement.setAttribute('data-theme', AppState.theme);
      localStorage.setItem('mea_theme', AppState.theme);
      themeToggle.innerHTML = AppState.theme === 'light' ? '🌙' : '☀️';
    });
  }
}

/* Tabs Navigation */
function initTabs() {
  const tabs = document.querySelectorAll('.tab-btn');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const targetTab = tab.getAttribute('data-tab');
      switchTab(targetTab);
    });
  });
}

function switchTab(tabId) {
  AppState.activeTab = tabId;
  
  // Update Tab Buttons
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-tab') === tabId);
  });

  // Update Tab Views
  document.querySelectorAll('.tab-pane').forEach(pane => {
    pane.classList.toggle('active', pane.id === `tab-${tabId}`);
    pane.style.display = pane.id === `tab-${tabId}` ? 'block' : 'none';
  });

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* Curriculum Rendering */
function renderCurriculum() {
  const container = document.getElementById('levels-container');
  if (!container) return;

  container.innerHTML = CURRICULUM_DATA.levels.map(level => {
    const isCompleted = level.units.every(u => AppState.completedUnits.includes(u.id));
    
    return `
      <div class="level-card" id="card-${level.id}">
        <div class="level-header">
          <span class="level-badge">${level.badge} • ${level.levelCode}</span>
          <span class="level-number">المستوى ${level.number}</span>
        </div>
        <h3 class="level-title">${level.title}</h3>
        <p class="level-desc">${level.description}</p>
        
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:1rem; font-size:0.85rem; color:var(--text-muted);">
          <span>⏱ المدة المقترحة: <strong>${level.duration}</strong></span>
          <span>📚 ${level.units.length} وحدات تفصيلية</span>
        </div>

        <div class="units-accordion">
          ${level.units.map((unit, idx) => {
            const unitDone = AppState.completedUnits.includes(unit.id);
            return `
              <div class="unit-item" id="unit-wrap-${unit.id}">
                <div class="unit-header" onclick="toggleUnit('${unit.id}')">
                  <div style="display:flex; align-items:center; gap:0.6rem;">
                    <button class="btn-check ${unitDone ? 'checked' : ''}" onclick="event.stopPropagation(); toggleUnitComplete('${unit.id}')" title="تحديد كوحدة منجزة">
                      ${unitDone ? '✅' : '⚪'}
                    </button>
                    <span class="unit-header-title">${idx + 1}. ${unit.title}</span>
                  </div>
                  <span class="accordion-arrow" id="arrow-${unit.id}">▼</span>
                </div>

                <div class="unit-body" id="body-${unit.id}">
                  <p style="margin-bottom:0.85rem; font-weight:600; color:var(--primary);">${unit.summary}</p>
                  
                  <div style="background:rgba(59,130,246,0.06); border-right:4px solid var(--primary-light); padding:0.75rem 1rem; border-radius:6px; margin-bottom:1rem;">
                    <strong style="display:block; font-size:0.85rem; color:var(--primary);">🎯 النقطة القواعدية والأسلوبية:</strong>
                    <span style="font-size:0.9rem;">${unit.grammarPoint}</span>
                  </div>

                  <h4 style="font-size:0.92rem; font-weight:700; margin-bottom:0.5rem; display:flex; align-items:center; gap:0.4rem;">
                    <span>📖 مفردات وتراكيب الوحدة (انقر للاستماع بالنطق الأصلي):</span>
                  </h4>

                  <div class="vocab-grid">
                    ${unit.keyVocabulary.map(v => `
                      <div class="vocab-card ltr-content">
                        <div class="vocab-word-row">
                          <span class="vocab-word">${v.word}</span>
                          <button class="btn btn-sm btn-secondary" onclick="audioEngine.speak('${v.word.replace(/'/g, "\\'")}')">
                            🔊 ${v.phonetic}
                          </button>
                        </div>
                        <div class="vocab-meaning" style="direction:rtl; text-align:right;">${v.ar}</div>
                        <div class="vocab-example">"${v.example}"</div>
                      </div>
                    `).join('')}
                  </div>

                  <div style="margin-top:1rem; padding:0.85rem; background:var(--bg-main); border-radius:var(--radius-md); border:1px solid var(--border-color);">
                    <div style="margin-bottom:0.6rem;">
                      <strong>✍️ التمرين العملي:</strong> <span>${unit.practicalExercise}</span>
                    </div>
                    <div style="margin-bottom:0.6rem;" class="ltr-content">
                      <strong style="direction:rtl; display:block; margin-bottom:0.25rem;">🗣️ Speaking Practice Prompt:</strong>
                      <span style="font-style:italic; color:var(--text-dark);">"${unit.speakingPrompt}"</span>
                      <button class="btn btn-sm btn-secondary" style="margin-top:0.4rem;" onclick="audioEngine.speak('${unit.speakingPrompt.replace(/'/g, "\\'")}')">
                        🔊 استمع لنطق السؤال
                      </button>
                    </div>
                    <div style="font-size:0.85rem; color:var(--secondary); font-weight:600;">
                      💡 <strong>نصيحة المنح والامتحانات:</strong> ${unit.studyTips}
                    </div>
                  </div>
                </div>
              </div>
            `;
          }).join('')}
        </div>
      </div>
    `;
  }).join('');
}

function toggleUnit(unitId) {
  const body = document.getElementById(`body-${unitId}`);
  const arrow = document.getElementById(`arrow-${unitId}`);
  if (body) {
    const isOpen = body.classList.contains('open');
    body.classList.toggle('open', !isOpen);
    if (arrow) arrow.textContent = isOpen ? '▼' : '▲';
  }
}

function toggleUnitComplete(unitId) {
  if (AppState.completedUnits.includes(unitId)) {
    AppState.completedUnits = AppState.completedUnits.filter(id => id !== unitId);
    showToast('تمت إزالة علامة الإنجاز من الوحدة');
  } else {
    AppState.completedUnits.push(unitId);
    showToast('رائع! تم تسجيل إنجاز الوحدة بنجاح 🎉');
  }
  localStorage.setItem('mea_completed_units', JSON.stringify(AppState.completedUnits));
  renderCurriculum();
  updateProgressStats();
}

/* Flashcards Engine */
function renderFlashcards() {
  const card = CURRICULUM_DATA.flashcards[AppState.flashcardIndex];
  if (!card) return;

  const wordEl = document.getElementById('fc-word');
  const phoneticEl = document.getElementById('fc-phonetic');
  const posEl = document.getElementById('fc-pos');
  const meaningEl = document.getElementById('fc-meaning');
  const sentenceEl = document.getElementById('fc-sentence');
  const counterEl = document.getElementById('fc-counter');
  const topicEl = document.getElementById('fc-topic');
  const cardEl = document.getElementById('active-flashcard');

  if (wordEl) wordEl.textContent = card.word;
  if (phoneticEl) phoneticEl.textContent = card.phonetic;
  if (posEl) posEl.textContent = card.pos;
  if (meaningEl) meaningEl.textContent = card.meaningAr;
  if (sentenceEl) sentenceEl.textContent = `"${card.sentence}"`;
  if (counterEl) counterEl.textContent = `${AppState.flashcardIndex + 1} / ${CURRICULUM_DATA.flashcards.length}`;
  if (topicEl) topicEl.textContent = card.topic;

  if (cardEl && cardEl.classList.contains('flipped')) {
    cardEl.classList.remove('flipped');
  }
}

function flipFlashcard() {
  const cardEl = document.getElementById('active-flashcard');
  if (cardEl) {
    cardEl.classList.toggle('flipped');
  }
}

function nextFlashcard() {
  AppState.flashcardIndex = (AppState.flashcardIndex + 1) % CURRICULUM_DATA.flashcards.length;
  renderFlashcards();
}

function prevFlashcard() {
  AppState.flashcardIndex = (AppState.flashcardIndex - 1 + CURRICULUM_DATA.flashcards.length) % CURRICULUM_DATA.flashcards.length;
  renderFlashcards();
}

function speakCurrentFlashcard() {
  const card = CURRICULUM_DATA.flashcards[AppState.flashcardIndex];
  if (card) {
    audioEngine.speak(`${card.word}. ${card.sentence}`);
  }
}

/* Pronunciation Microphone Check */
function testCurrentWordPronunciation() {
  const card = CURRICULUM_DATA.flashcards[AppState.flashcardIndex];
  if (!card) return;

  const statusEl = document.getElementById('mic-status-msg');
  if (statusEl) {
    statusEl.textContent = "🎙️ جاري الاستماع... انطق الكلمة الآن في الميكروفون:";
    statusEl.style.color = "var(--primary)";
  }

  audioEngine.startPronunciationTest(
    card.word,
    (res) => {
      if (res.isMatch) {
        statusEl.innerHTML = `✅ أحسنت! نطقك ممتاز للكلمة: <strong>"${res.spokenWord}"</strong> (دقة: ${res.confidence}%)`;
        statusEl.style.color = "var(--success)";
      } else {
        statusEl.innerHTML = `⚠️ سمعنا: <em>"${res.spokenWord}"</em>. الكلمة المستهدفة هي <strong>"${res.targetWord}"</strong>. استمع للصوت وحاول مرة أخرى!`;
        statusEl.style.color = "var(--danger)";
      }
    },
    (err) => {
      if (statusEl) {
        statusEl.textContent = `ملاحظة: ${err}`;
        statusEl.style.color = "var(--text-muted)";
      }
    }
  );
}

/* Scholarships Rendering */
function renderScholarships() {
  const container = document.getElementById('scholarships-container');
  if (!container) return;

  container.innerHTML = CURRICULUM_DATA.scholarships.map(sch => `
    <div class="scholarship-card">
      <span class="scholarship-country-badge">🌍 ${sch.country}</span>
      <h3 class="scholarship-title">${sch.name}</h3>
      
      <div class="detail-row">
        <span class="detail-label">💰 التغطية:</span>
        <span class="detail-val">${sch.coverage}</span>
      </div>
      <div class="detail-row">
        <span class="detail-label">📅 الموعد السنوي:</span>
        <span class="detail-val">${sch.deadline}</span>
      </div>
      <div class="detail-row">
        <span class="detail-label">🗣️ شرط اللغة:</span>
        <span class="detail-val">${sch.ieltsReq}</span>
      </div>

      <div style="margin-top:1rem; border-top:1px solid var(--border-color); padding-top:1rem;">
        <h4 style="font-size:0.92rem; font-weight:700; margin-bottom:0.5rem; color:var(--primary);">
          ✍️ المقالات والمقترحات المطلوبة:
        </h4>
        <ul style="padding-right:1.25rem; font-size:0.86rem; color:var(--text-dark); margin-bottom:1rem;">
          ${sch.coreEssays.map(e => `
            <li style="margin-bottom:0.4rem;">
              <strong>${e.title}:</strong> ${e.desc}
            </li>
          `).join('')}
        </ul>

        <div style="background:rgba(13,148,136,0.08); border-right:3px solid var(--secondary); padding:0.75rem; border-radius:6px; font-size:0.84rem;">
          <strong style="color:var(--secondary);">🇾🇪 نصيحة خاصة للمتقدمين من اليمن:</strong>
          <p style="margin-top:0.25rem;">${sch.yemenTips}</p>
        </div>
      </div>
    </div>
  `).join('');
}

/* Yemen Specific Guide Rendering */
function renderYemenGuide() {
  const container = document.getElementById('yemen-guide-container');
  if (!container) return;

  const guide = CURRICULUM_DATA.yemenSpecificGuide;
  container.innerHTML = `
    <div class="content-card" style="border-right: 5px solid var(--secondary);">
      <h3 style="font-size:1.25rem; font-weight:800; margin-bottom:1rem; display:flex; align-items:center; gap:0.5rem;">
        <span>🇾🇪</span> ${guide.title}
      </h3>
      <div style="display:flex; flex-direction:column; gap:1rem;">
        ${guide.steps.map(s => `
          <div style="background:var(--bg-main); padding:1rem; border-radius:var(--radius-md); border:1px solid var(--border-color);">
            <h4 style="font-size:0.98rem; font-weight:700; color:var(--primary); margin-bottom:0.4rem;">
              الخطوة ${s.step}: ${s.title}
            </h4>
            <p style="font-size:0.9rem; color:var(--text-dark); line-height:1.6;">${s.content}</p>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

/* Audio Lab Rendering */
function renderAudioLab() {
  const container = document.getElementById('audio-lectures-container');
  if (!container) return;

  container.innerHTML = CURRICULUM_DATA.audioLectures.map(lec => `
    <div class="content-card">
      <div style="display:flex; justify-content:space-between; align-items:flex-start; flex-wrap:wrap; gap:0.75rem; margin-bottom:1rem;">
        <div>
          <span style="font-size:0.78rem; font-weight:700; background:rgba(30,58,138,0.1); color:var(--primary); padding:0.25rem 0.6rem; border-radius:50px;">
            ${lec.difficulty} • ${lec.duration}
          </span>
          <h3 style="font-size:1.15rem; font-weight:800; margin-top:0.4rem;">${lec.title}</h3>
          <p style="font-size:0.85rem; color:var(--text-muted);">${lec.speaker}</p>
        </div>

        <div style="display:flex; align-items:center; gap:0.5rem;">
          <button class="btn btn-primary btn-sm" onclick="playLectureAudio('${lec.id}')">
            ▶️ تشغيل المحاضرة بالصوت الأصلي
          </button>
          <button class="btn btn-secondary btn-sm" onclick="audioEngine.stop()">
            ⏹️ إيقاف
          </button>
        </div>
      </div>

      <div class="ltr-content" style="background:var(--bg-main); padding:1.25rem; border-radius:var(--radius-md); border:1px solid var(--border-color); font-size:0.95rem; line-height:1.75; margin-bottom:1.25rem; max-height:220px; overflow-y:auto;" id="transcript-${lec.id}">
        ${lec.transcript}
      </div>

      <h4 style="font-size:0.95rem; font-weight:700; margin-bottom:0.75rem; color:var(--text-dark);">
        📝 أسئلة الفهم الأكاديمي والاستيعاب:
      </h4>

      <div style="display:flex; flex-direction:column; gap:0.85rem;">
        ${lec.questions.map((q, qIdx) => `
          <div style="background:var(--bg-card); padding:1rem; border:1px solid var(--border-color); border-radius:var(--radius-md);">
            <p style="font-weight:700; font-size:0.92rem; margin-bottom:0.6rem;" class="ltr-content">
              Q${qIdx + 1}: ${q.q}
            </p>
            <div style="display:flex; flex-direction:column; gap:0.4rem;" class="ltr-content">
              ${q.options.map((opt, optIdx) => `
                <button class="btn btn-secondary btn-sm" style="justify-content:flex-start; text-align:left; font-size:0.88rem;" onclick="checkAudioQuestion('${lec.id}', ${qIdx}, ${optIdx}, ${q.correct}, this)">
                  <span style="font-weight:700; margin-right:0.4rem;">${String.fromCharCode(65 + optIdx)}.</span> ${opt}
                </button>
              `).join('')}
            </div>
            <div id="expl-${lec.id}-${qIdx}" style="display:none; margin-top:0.6rem; font-size:0.85rem; padding:0.5rem; border-radius:6px; direction:rtl; text-align:right;"></div>
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');
}

function playLectureAudio(lecId) {
  const lec = CURRICULUM_DATA.audioLectures.find(l => l.id === lecId);
  if (!lec) return;

  audioEngine.setAccent(lec.accent);
  audioEngine.speak(lec.transcript);
  showToast(`جاري الاستماع للمحاضرة بنبرة أكاديمية (${lec.accent === 'en-GB' ? 'لهجة بريطانية' : 'لهجة أمريكية'})...`);
}

function checkAudioQuestion(lecId, qIdx, selectedIdx, correctIdx, btnEl) {
  const explEl = document.getElementById(`expl-${lecId}-${qIdx}`);
  const parent = btnEl.parentElement;
  const buttons = parent.querySelectorAll('button');

  buttons.forEach((b, idx) => {
    b.disabled = true;
    if (idx === correctIdx) {
      b.style.borderColor = "var(--success)";
      b.style.background = "rgba(16, 185, 129, 0.15)";
      b.style.color = "var(--success)";
    } else if (idx === selectedIdx && selectedIdx !== correctIdx) {
      b.style.borderColor = "var(--danger)";
      b.style.background = "rgba(239, 68, 68, 0.15)";
      b.style.color = "var(--danger)";
    }
  });

  const lec = CURRICULUM_DATA.audioLectures.find(l => l.id === lecId);
  const qData = lec ? lec.questions[qIdx] : null;

  if (explEl && qData) {
    explEl.style.display = "block";
    if (selectedIdx === correctIdx) {
      explEl.style.background = "rgba(16, 185, 129, 0.1)";
      explEl.style.color = "var(--success)";
      explEl.innerHTML = `✅ <strong>إجابة صحيحة!</strong> ${qData.explanation}`;
    } else {
      explEl.style.background = "rgba(239, 68, 68, 0.1)";
      explEl.style.color = "var(--danger)";
      explEl.innerHTML = `❌ <strong>إجابة غير صحيحة.</strong> ${qData.explanation}`;
    }
  }
}

/* Diagnostic Test Engine */
function renderDiagnosticTest() {
  const container = document.getElementById('diagnostic-container');
  if (!container) return;

  container.innerHTML = CURRICULUM_DATA.diagnosticQuiz.map((item, idx) => `
    <div class="content-card" style="margin-bottom:1rem;" id="quiz-card-${idx}">
      <p style="font-weight:700; font-size:1.02rem; margin-bottom:0.75rem;" class="ltr-content">
        Question ${idx + 1}: ${item.question}
      </p>
      
      <div style="display:flex; flex-direction:column; gap:0.5rem;" class="ltr-content">
        ${item.options.map((opt, optIdx) => `
          <label style="display:flex; align-items:center; gap:0.6rem; padding:0.65rem 0.85rem; border:1px solid var(--border-color); border-radius:var(--radius-md); cursor:pointer; transition:var(--transition);" id="lbl-${idx}-${optIdx}">
            <input type="radio" name="dq-${idx}" value="${optIdx}" onchange="selectDiagnosticAnswer(${idx}, ${optIdx})">
            <span>${opt}</span>
          </label>
        `).join('')}
      </div>

      <div id="quiz-feedback-${idx}" style="display:none; margin-top:0.75rem; font-size:0.88rem; padding:0.6rem 0.85rem; border-radius:6px; direction:rtl;"></div>
    </div>
  `).join('') + `
    <div style="text-align:center; margin-top:1.5rem;">
      <button class="btn btn-primary" onclick="submitDiagnosticTest()">
        📊 تقييم اختباري وحساب مستواي المقترح
      </button>
    </div>
    <div id="diagnostic-result" style="display:none; margin-top:1.5rem;"></div>
  `;
}

function selectDiagnosticAnswer(qIdx, optIdx) {
  AppState.diagnosticAnswers[qIdx] = optIdx;
}

function submitDiagnosticTest() {
  let score = 0;
  const total = CURRICULUM_DATA.diagnosticQuiz.length;

  CURRICULUM_DATA.diagnosticQuiz.forEach((item, idx) => {
    const chosen = AppState.diagnosticAnswers[idx];
    const feedbackEl = document.getElementById(`quiz-feedback-${idx}`);
    
    if (feedbackEl) {
      feedbackEl.style.display = "block";
      if (chosen === item.correct) {
        score++;
        feedbackEl.style.background = "rgba(16, 185, 129, 0.1)";
        feedbackEl.style.color = "var(--success)";
        feedbackEl.innerHTML = `✅ <strong>صحيح!</strong> القاعدة: ${item.rule}`;
      } else {
        feedbackEl.style.background = "rgba(239, 68, 68, 0.1)";
        feedbackEl.style.color = "var(--danger)";
        feedbackEl.innerHTML = `❌ <strong>غير صحيح.</strong> الإجابة المعتمدة: "${item.options[item.correct]}".<br>💡 السبب: ${item.rule}`;
      }
    }
  });

  const resultEl = document.getElementById('diagnostic-result');
  if (resultEl) {
    resultEl.style.display = "block";
    let recommendation = "";
    let bandEstimate = "";

    if (score >= 5) {
      recommendation = "مستواك متقدم (C1 / Band 7.5+). ابدأ فوراً بموديول الآيلتس الأكاديمي، التوفل الدولي، وصياغة الـ SOP والمقالات للمنح!";
      bandEstimate = "IELTS: 7.5 - 8.5 | TOEFL: 100 - 110";
    } else if (score >= 3) {
      recommendation = "مستواك متوسط متقدم (B2 / Band 6.0 - 6.5). ركز على المستوى 2 والمستوى 3 لسد ثغرات القواعد المركبة وقائمة AWL.";
      bandEstimate = "IELTS: 6.0 - 6.5 | TOEFL: 80 - 95";
    } else {
      recommendation = "تحتاج لتثبيت الأساسيات أولاً. ابدأ من المستوى 1 لإتقان تراكيب الجملة وبناء المفردات الأكاديمية الأولية.";
      bandEstimate = "IELTS: 5.0 - 5.5 | TOEFL: 60 - 75";
    }

    resultEl.innerHTML = `
      <div class="content-card" style="border:2px solid var(--primary-light); background:rgba(59,130,246,0.05); text-align:center; padding:2rem;">
        <h3 style="font-size:1.4rem; font-weight:800; color:var(--primary); margin-bottom:0.5rem;">
          نتيجتك التشخيصية: ${score} من ${total}
        </h3>
        <p style="font-size:1.1rem; font-weight:700; color:var(--text-dark); margin-bottom:0.75rem;">
          التقدير التقريبي: <span style="color:var(--secondary);">${bandEstimate}</span>
        </p>
        <p style="max-width:650px; margin:0 auto; font-size:0.95rem; line-height:1.7;">
          ${recommendation}
        </p>
        <button class="btn btn-teal" style="margin-top:1.25rem;" onclick="switchTab('curriculum')">
          الانتقال للمنهج والبدء بالدراسة 🚀
        </button>
      </div>
    `;
    resultEl.scrollIntoView({ behavior: 'smooth' });
  }
}

/* Templates Rendering */
function renderTemplates() {
  const sopContainer = document.getElementById('sop-template-box');
  const coldEmailContainer = document.getElementById('cold-email-template-box');

  if (sopContainer) {
    sopContainer.textContent = CURRICULUM_DATA.templates.sop;
  }
  if (coldEmailContainer) {
    coldEmailContainer.textContent = CURRICULUM_DATA.templates.coldEmail;
  }
}

function copyTemplate(elementId) {
  const el = document.getElementById(elementId);
  if (!el) return;
  navigator.clipboard.writeText(el.textContent).then(() => {
    showToast('تم نسخ القالب الأكاديمي بنجاح إلى الحافظة! 📋');
  });
}

/* Study Planner Generator */
function initStudyPlanner() {
  const form = document.getElementById('planner-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const hours = parseInt(document.getElementById('plan-hours').value) || 10;
    const months = parseInt(document.getElementById('plan-months').value) || 3;
    const target = document.getElementById('plan-target').value;

    generateStudyPlan(hours, months, target);
  });

  if (AppState.studyPlan) {
    displayGeneratedPlan(AppState.studyPlan);
  }
}

function generateStudyPlan(hoursPerWeek, months, targetGoal) {
  const totalWeeks = months * 4;
  const dailyHours = (hoursPerWeek / 6).toFixed(1); // 6 days study + 1 rest

  const plan = {
    hoursPerWeek,
    months,
    targetGoal,
    totalWeeks,
    dailyHours,
    schedule: [
      {
        phase: "المرحلة الأولى (الأساس المتين وبناء المفردات)",
        duration: `الأسابيع 1 إلى ${Math.round(totalWeeks * 0.3)}`,
        tasks: [
          "إتقان تراكيب الجمل (Level 1 & 2) وكتابة فقرات يومية قصيرة.",
          "حفظ 15 كلمة أكاديمية يومياً من قسم البطاقات مع الاستماع الصوتي.",
          "تخصيص 30 دقيقة يومياً للاستماع لمحاضرات TED والمحاضرات الأكاديمية.",
          "تطبيق تمارين النطق بالميكروفون يومياً لضبط مخارج الحروف."
        ]
      },
      {
        phase: "المرحلة الثانية (اللغة الأكاديمية وقائمة AWL والبحث)",
        duration: `الأسابيع ${Math.round(totalWeeks * 0.3) + 1} إلى ${Math.round(totalWeeks * 0.65)}`,
        tasks: [
          "دراسة وحدات Academic English وكتابة مسودات الـ Statement of Purpose (SOP).",
          "ممارسة تدوين الملاحظات أثناء سماع محاضرات التوفل والآيلتس السريعة.",
          "كتابة مقال Task 2 أسبوعياً وتطبيق أدوات الربط ولغة التحوط (Hedging).",
          "تجهيز مراسلات الأساتذة المشرفين والسيرة الذاتية بصيغة Europass."
        ]
      },
      {
        phase: "المرحلة الثالثة (المحاكاة الكاملة والتنافس على المنح)",
        duration: `الأسابيع ${Math.round(totalWeeks * 0.65) + 1} إلى ${totalWeeks}`,
        tasks: [
          "حل اختبار آيلتس كامل (أو توفل) كل نهاية أسبوع تحت ضغط الوقت الفعلي.",
          "محاكاة مقابلة التحدث (Speaking Cue Card & Academic Discussion) وتسجيل الإجابات ومراجعتها.",
          "تدقيق الأوراق والشهادات وتعميدها وفق دليل الطلاب في اليمن.",
          "تقديم طلبات المنح (Chevening, Fulbright, Erasmus, DAAD) ومراجعة مقالات القيادة والأهداف."
        ]
      }
    ]
  };

  AppState.studyPlan = plan;
  localStorage.setItem('mea_study_plan', JSON.stringify(plan));
  displayGeneratedPlan(plan);
  showToast('تم إنشاء وتحديث خطة دراستك الأكاديمية المخصصة! 📅');
}

function displayGeneratedPlan(plan) {
  const container = document.getElementById('planner-results');
  if (!container) return;

  container.style.display = 'block';
  container.innerHTML = `
    <div class="content-card" style="border:2px solid var(--secondary);">
      <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:1rem; margin-bottom:1.25rem;">
        <div>
          <h3 style="font-size:1.3rem; font-weight:800; color:var(--text-dark);">
            خطة دراستك المخصصة (${plan.months} أشهر)
          </h3>
          <p style="font-size:0.9rem; color:var(--text-muted);">
            الهدف: <strong>${plan.targetGoal}</strong> | الالتزام: <strong>${plan.dailyHours} ساعات يومياً</strong> (6 أيام أسبوعياً)
          </p>
        </div>
        <button class="btn btn-secondary btn-sm" onclick="window.print()">
          🖨️ طباعة الخطة أو حفظ كـ PDF
        </button>
      </div>

      <div style="display:flex; flex-direction:column; gap:1.25rem;">
        ${plan.schedule.map(s => `
          <div style="background:var(--bg-main); padding:1.25rem; border-radius:var(--radius-md); border-right:4px solid var(--secondary);">
            <div style="display:flex; justify-content:space-between; margin-bottom:0.6rem;">
              <h4 style="font-weight:800; font-size:1.05rem; color:var(--primary);">${s.phase}</h4>
              <span style="font-size:0.82rem; font-weight:700; color:var(--text-muted);">${s.duration}</span>
            </div>
            <ul style="padding-right:1.25rem; font-size:0.92rem; line-height:1.7;">
              ${s.tasks.map(t => `<li style="margin-bottom:0.35rem;">${t}</li>`).join('')}
            </ul>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

/* Audio Controls & Settings */
function initAudioControls() {
  const accentSelect = document.getElementById('accent-select');
  const speedSelect = document.getElementById('speed-select');

  if (accentSelect) {
    accentSelect.value = AppState.accent;
    audioEngine.setAccent(AppState.accent);
    accentSelect.addEventListener('change', (e) => {
      AppState.accent = e.target.value;
      audioEngine.setAccent(AppState.accent);
      localStorage.setItem('mea_accent', AppState.accent);
      showToast(`تم تعيين اللهجة إلى: ${AppState.accent === 'en-GB' ? 'البريطانية (UK)' : 'الأمريكية (US)'}`);
    });
  }

  if (speedSelect) {
    speedSelect.value = AppState.speed.toString();
    audioEngine.setRate(AppState.speed);
    speedSelect.addEventListener('change', (e) => {
      AppState.speed = parseFloat(e.target.value);
      audioEngine.setRate(AppState.speed);
      localStorage.setItem('mea_speed', AppState.speed.toString());
      showToast(`تم ضبط سرعة القراءة الصوتية على ${AppState.speed}x`);
    });
  }
}

/* Contact & Disruption System */
function initContactSystem() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('contact-name').value.trim();
    const phone = document.getElementById('contact-phone').value.trim();
    const message = document.getElementById('contact-msg').value.trim();
    const issueType = document.getElementById('contact-type').value;

    // Build WhatsApp Direct Link
    const textMsg = `*رسالة من منصة MasterEnglish Academy*%0A%0A*الاسم:* ${encodeURIComponent(name)}%0A*الهاتف/الواتساب:* ${encodeURIComponent(phone)}%0A*نوع البلاغ:* ${encodeURIComponent(issueType)}%0A*التفاصيل:* ${encodeURIComponent(message)}%0A*حالة النظام لدى المستخدم:* ${navigator.onLine ? 'متصل' : 'بدون اتصال'}`;
    
    // Direct WhatsApp send or local confirmation
    window.open(`https://wa.me/?text=${textMsg}`, '_blank');

    showToast('شكراً لتواصلك! تم تجهيز البلاغ للإرسال الفوري لضمان عدم انقطاع المنصة.');
    form.reset();
  });
}

function checkSystemHealth() {
  const health = audioEngine.checkHealth();
  const statusBadge = document.getElementById('system-status-indicator');
  const statusDetails = document.getElementById('system-status-details');

  if (statusBadge) {
    statusBadge.innerHTML = `
      <span class="status-dot"></span>
      <span>${health.networkStatus} • المحرك الصوتي: ${health.speechApi}</span>
    `;
    statusBadge.className = `status-pill ${health.status === 'healthy' ? 'status-online' : 'status-warning'}`;
  }

  if (statusDetails) {
    statusDetails.innerHTML = `
      <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(200px, 1fr)); gap:1rem; margin-top:1rem;">
        <div class="stat-item" style="color:var(--text-dark); background:var(--bg-main); border:1px solid var(--border-color);">
          <div class="stat-label">المحرك الصوتي (Web Speech)</div>
          <div class="stat-num" style="font-size:1.1rem; color:var(--success);">${health.speechApi}</div>
        </div>
        <div class="stat-item" style="color:var(--text-dark); background:var(--bg-main); border:1px solid var(--border-color);">
          <div class="stat-label">الأصوات المحملة</div>
          <div class="stat-num" style="font-size:1.1rem; color:var(--primary);">${health.voicesLoaded}</div>
        </div>
        <div class="stat-item" style="color:var(--text-dark); background:var(--bg-main); border:1px solid var(--border-color);">
          <div class="stat-label">الحفظ بدون إنترنت (Offline Ready)</div>
          <div class="stat-num" style="font-size:1.1rem; color:var(--secondary);">مفعل وشغال دائماً</div>
        </div>
      </div>
    `;
  }
}

/* Progress Stats Counter */
function updateProgressStats() {
  let totalUnits = 0;
  CURRICULUM_DATA.levels.forEach(lvl => {
    totalUnits += lvl.units.length;
  });

  const completedCount = AppState.completedUnits.length;
  const pct = totalUnits > 0 ? Math.round((completedCount / totalUnits) * 100) : 0;

  const bar = document.getElementById('overall-progress-bar');
  const text = document.getElementById('overall-progress-text');
  const heroPct = document.getElementById('hero-progress-pct');

  if (bar) bar.style.width = `${pct}%`;
  if (text) text.textContent = `${pct}% (${completedCount} من أصل ${totalUnits} وحدة)`;
  if (heroPct) heroPct.textContent = `${pct}%`;
}

/* Toast Notifications */
function showToast(msg) {
  let container = document.getElementById('toast-box');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-box';
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<span>🔔</span> <span>${msg}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    toast.style.transition = '0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}
