/**
 * MasterEnglish Academy - Complete Curriculum & Scholarship Knowledge Base
 * Developed for learners aiming for Academic English, IELTS 7.5+, TOEFL 100+,
 * and Master's Scholarships (Chevening, Fulbright, Erasmus, DAAD, Türkiye Bursları).
 */

const CURRICULUM_DATA = {
  levels: [
    {
      id: "lvl-1",
      number: 1,
      title: "تأسيس الطلاقة والقواعد المتقدمة (Foundations & Fluency)",
      levelCode: "A2 - B1+",
      badge: "الأساس المتين",
      color: "from-blue-600 to-indigo-700",
      description: "بناء التراكيب اللغوية القوية، والتخلص من الترجمة الحرفية، والسيطرة على المحادثة اليومية والمهنية بثقة.",
      duration: "4 - 6 أسابيع",
      topicsCount: 12,
      units: [
        {
          id: "u1-1",
          title: "هندسة الجملة الإنجليزية وبناء الفقرات (Sentence Architecture)",
          summary: "كيف تركب جملة احترافية خالية من الأخطاء من Simple إلى Compound & Complex sentences.",
          grammarPoint: "Independent vs Dependent Clauses & Conjunctions (FANBOYS, Subordinating)",
          keyVocabulary: [
            { word: "Structure", phonetic: "/ˈstrʌktʃər/", ar: "بنية / هيكل", example: "A solid sentence structure prevents grammatical ambiguity." },
            { word: "Convey", phonetic: "/kənˈveɪ/", ar: "يُوصل / ينقل فكرة", example: "Use precise verbs to convey your exact message." },
            { word: "Clarity", phonetic: "/ˈklærəti/", ar: "وضوح", example: "Academic writing prioritizes clarity over excessive complexity." },
            { word: "Ambiguity", phonetic: "/ˌæmbɪˈɡjuːəti/", ar: "غموض / التباس", example: "Proper punctuation eliminates ambiguity in arguments." }
          ],
          practicalExercise: "تحويل 5 جمل بسيطة إلى جمل مركبة ومعقدة باستخدام روابط منطقية (Although, Furthermore, Whereas).",
          speakingPrompt: "Describe your background and your future academic ambitions using at least two complex sentences.",
          studyTips: "لا تكتب جملاً طويلة جداً تفقد معناها. الجملة الأكاديمية المثالية تتراوح بين 15 إلى 25 كلمة."
        },
        {
          id: "u1-2",
          title: "الأزمنة في سياق البحث الأكاديمي والعمل (Tenses in Academic Context)",
          summary: "إتقان استخدام Present Perfect vs Past Simple و Past Perfect في الأبحاث والمقابلات الشخصية.",
          grammarPoint: "Present Perfect for experiences and ongoing research; Past Simple for specific past experiments.",
          keyVocabulary: [
            { word: "Accomplish", phonetic: "/əˈkʌmplɪʃ/", ar: "يُنجز / يُحقق", example: "I have accomplished several milestone projects this year." },
            { word: "Demonstrate", phonetic: "/ˈdemənstreɪt/", ar: "يُبرهن / يُوضّح", example: "The data demonstrated a clear correlation." },
            { word: "Initiate", phonetic: "/ɪˈnɪʃieɪt/", ar: "يبدأ / يُطلق مبادرة", example: "Our team initiated a community literacy program in 2023." },
            { word: "Substantiate", phonetic: "/səbˈstænʃieɪt/", ar: "يدعم بالدليل والبرهان", example: "Always substantiate your claims with empirical evidence." }
          ],
          practicalExercise: "صياغة فقرة من 80 كلمة عن إنجازاتك السابقة باستخدام الزمن الماضي والمضارع التام بشكل صحيح.",
          speakingPrompt: "Talk about a project you have initiated or contributed to, and how it impacted your community.",
          studyTips: "في أوراق الماجستير والمنح: استخدم الماضي عند الحديث عما فعلته أنت أو باحث محدد، والمضارع التام عند الحديث عن حالة المعرفة العامة الحالية."
        },
        {
          id: "u1-3",
          title: "أدوات الربط والانتقال الفكري (Cohesive Devices & Discourse Markers)",
          summary: "الربط المنطقي بين الأفكار لإعطاء المقال والمحادثة تدفقاً سلساً (Cohesion & Coherence).",
          grammarPoint: "Transitions for contrast (However, Nevertheless, On the other hand), addition (Moreover, Furthermore), and causality (Consequently, Hence).",
          keyVocabulary: [
            { word: "Furthermore", phonetic: "/ˌfɜːrðərˈmɔːr/", ar: "علاوة على ذلك", example: "Furthermore, learning English opens doors to global scholarships." },
            { word: "Consequently", phonetic: "/ˈkɑːnsəkwentli/", ar: "ونتيجة لذلك / بالتالي", example: "He published three papers; consequently, his application was prioritized." },
            { word: "Nevertheless", phonetic: "/ˌnevərðəˈles/", ar: "ومع ذلك / على الرغم من ذلك", example: "The challenge was immense; nevertheless, we met the deadline." },
            { word: "Whereas", phonetic: "/ˌwerˈæz/", ar: "في حين أن / بينما", example: "Some prefer studying alone, whereas others thrive in collaborative groups." }
          ],
          practicalExercise: "إعادة كتابة نص مفكك لجعله مترابطاً باستخدام 4 أدوات ربط مختلفة.",
          speakingPrompt: "Discuss the pros and cons of studying abroad versus local university education using discourse markers.",
          studyTips: "في معايير تقييم IELTS و TOEFL، تمثل أدوات الربط (Coherence & Cohesion) 25% من درجتك الكلية في الكتابة والتحدث."
        }
      ]
    },
    {
      id: "lvl-2",
      number: 2,
      title: "الإتقان اللغوي المتقدم والطلاقة (Advanced Fluency & Grammar)",
      levelCode: "B2 - B2+",
      badge: "الطلاقة المتقدمة",
      color: "from-emerald-600 to-teal-700",
      description: "الانتقال إلى مستوى التحدث العفوي، استخدام التعبيرات الاصطلاحية الراقية، وإتقان القواعد المركبة كالتوكيد والمبني للمجهول.",
      duration: "6 - 8 أسابيع",
      topicsCount: 14,
      units: [
        {
          id: "u2-1",
          title: "القواعد الاحترافية: التقديم والتأخير والشرط المتقدم (Inversion & Advanced Conditionals)",
          summary: "استخدام تراكيب بلاغية قوية لرفع مستوى لغتك إلى مصاف المتحدثين الأصليين وكتاب المقالات المرموقة.",
          grammarPoint: "Negative inversion (Not only... but also, Rarely have I, Under no circumstances) and Mixed Conditionals.",
          keyVocabulary: [
            { word: "Imperative", phonetic: "/ɪmˈperətɪv/", ar: "ضروري وحاسم", example: "It is imperative that applicants submit certified transcripts." },
            { word: "Comprehensive", phonetic: "/ˌkɑːmprɪˈhensɪv/", ar: "شامل ومتكامل", example: "We designed a comprehensive roadmap for Yemeni students." },
            { word: "Pivotal", phonetic: "/ˈpɪvətl/", ar: "محوري / جوهري", example: "Language proficiency plays a pivotal role in scholarship acceptance." },
            { word: "Resilience", phonetic: "/rɪˈzɪliəns/", ar: "صمود ومرونة ومقاومة الصعاب", example: "Yemeni youth demonstrate unparalleled resilience and determination." }
          ],
          practicalExercise: "تحويل 3 جمل عادية إلى صيغة Inversion لتعزيز القوة التعبيرية.",
          speakingPrompt: "Explain a situation where adaptability proved pivotal to overcoming an unexpected setback.",
          studyTips: "استخدام تركيبة Inversion واحدة أو اثنتين في مقال IELTS Task 2 يثبت للمصحح أنك تمتلك مدى قواعد واسع (Wide Grammatical Range)."
        },
        {
          id: "u2-2",
          title: "التلازمات اللفظية والأفعال المركبة الأكاديمية (Collocations & Phrasal Verbs)",
          summary: "تعلّم الكلمات التي تأتي معاً طبيعياً للتحدث بسلاسة تامة دون تفكير باللغة الأم.",
          grammarPoint: "Academic Verb + Noun collocations (Conduct an inquiry, Bridge the gap, Spearhead an initiative).",
          keyVocabulary: [
            { word: "Spearhead", phonetic: "/ˈspɪrhed/", ar: "يقود مبادرة / يتصدر", example: "She spearheaded an initiative to tutor underprivileged students." },
            { word: "Bridge the gap", phonetic: "/brɪdʒ ðə ɡæp/", ar: "يسد الفجوة", example: "International scholarships bridge the educational gap for developing nations." },
            { word: "Shed light on", phonetic: "/ʃed laɪt ɑːn/", ar: "يُسلط الضوء على", example: "This study sheds light on renewable energy potential." },
            { word: "Cater to", phonetic: "/ˈkeɪtər tuː/", ar: "يُلبي احتياجات", example: "The curriculum caters to diverse proficiency levels." }
          ],
          practicalExercise: "استبدال كلمات عامة بأفعال وتلازمات متقدمة في 5 فقرات.",
          speakingPrompt: "How can technology bridge the educational divide in developing regions?",
          studyTips: "المتحدث الأصلي يعرف الكلمات كـ 'كتل' (Chunks) وتلازمات، احفظ الكلمة دائماً مع الاسم أو حرف الجر المرتبط بها."
        },
        {
          id: "u2-3",
          title: "التفكير النقدي والمناظرات باللغة الإنجليزية (Critical Thinking & Debating)",
          summary: "بناء الحجج، تفنيد الآراء المعارضة (Counter-arguments)، والتعبير عن الشك والاحتمالية (Hedging).",
          grammarPoint: "Hedging language (It appears that, The evidence tends to suggest, Might arguably indicate).",
          keyVocabulary: [
            { word: "Plausible", phonetic: "/ˈplɔːzəbl/", ar: "معقول / قابل للتصديق", example: "Researchers proposed a plausible explanation for the anomaly." },
            { word: "Contend", phonetic: "/kənˈtend/", ar: "يزعم / يجادل بأن", example: "Critics contend that the proposed policy is economically unsustainable." },
            { word: "Substantial", phonetic: "/səbˈstænʃl/", ar: "كبير / ذو بال / ملحوظ", example: "The project generated a substantial improvement in community health." },
            { word: "Paradox", phonetic: "/ˈpærədɑːks/", ar: "مفارقة / تناقض ظاهري", example: "The digital age presents a paradox of increased connection yet greater isolation." }
          ],
          practicalExercise: "كتابة فقرة تفنيد (Rebuttal) لرأي شائع حول التعليم عن بعد باستخدام لغة التحوط (Hedging).",
          speakingPrompt: "Debate: Should university education be completely free for everyone? Present both sides and state your conclusion.",
          studyTips: "في المقالات والامتحانات الأكاديمية تجنب التعميم المطلق (لا تقل All people do X، بل قل Most studies suggest that people tend to do X)."
        }
      ]
    },
    {
      id: "lvl-3",
      number: 3,
      title: "اللغة الإنجليزية الأكاديمية والبحث العلمي (Academic English & AWL)",
      levelCode: "B2+ - C1",
      badge: "المستوى الأكاديمي",
      color: "from-purple-600 to-violet-800",
      description: "إتقان مفردات قائمة الكلمات الأكاديمية (AWL)، قراءة الأبحاث المعقدة، وكتابة الأوراق الأكاديمية والتواصل مع الجامعات والمشرفين.",
      duration: "6 - 8 أسابيع",
      topicsCount: 16,
      units: [
        {
          id: "u3-1",
          title: "قائمة الكلمات الأكاديمية الشاملة (Academic Word List - AWL Mastery)",
          summary: "المفردات الـ 570 الأكثر تكراراً في جميع التخصصات الأكاديمية العالمية التي لا غنى عنها لاجتياز التوفل والآيلتس والماجستير.",
          grammarPoint: "Nominalization (تحويل الأفعال والصفات إلى أسماء أكاديمية مجردة، مثل: analyse -> analysis, efficient -> efficiency).",
          keyVocabulary: [
            { word: "Methodology", phonetic: "/ˌmeθəˈdɑːlədʒi/", ar: "منهجية البحث العلمي", example: "The methodology relied on mixed qualitative and quantitative metrics." },
            { word: "Phenomenon", phonetic: "/fəˈnɑːmɪnən/", ar: "ظاهرة علمية أو اجتماعية", example: "Climate change is a multifaceted global phenomenon." },
            { word: "Correlation", phonetic: "/ˌkɔːrəˈleɪʃn/", ar: "ارتباط وثيق / علاقة تبادلية", example: "There is a significant correlation between reading habit and exam performance." },
            { word: "Synthesize", phonetic: "/ˈsɪnθəsaɪz/", ar: "يُركّب ويُدمج أفكاراً متعددة", example: "Scholars synthesize multiple sources to form cohesive theories." }
          ],
          practicalExercise: "تطبيق Nominalization على 5 جمل لجعل أسلوبها رسمياً وأكاديمياً بحتاً.",
          speakingPrompt: "Explain the methodology you would adopt to solve an engineering or social challenge in your home country.",
          studyTips: "الـ Nominalization تمنح كتابتك نبرة رصينة ومحايدة تناسب لجان تقييم المنح الدولية وأساتذة الجامعات."
        },
        {
          id: "u3-2",
          title: "كتابة ملخصات الأبحاث والرسائل الرسمية (Abstracts & Formal University Correspondence)",
          summary: "كيف تراسل بروفيسوراً في بريطانيا أو أمريكا أو ألمانيا للحصول على قبول وإشراف (Cold Emailing for Supervisors).",
          grammarPoint: "Formal Register, Modals of Politeness (Would you be amenable to, I would be profoundly grateful).",
          keyVocabulary: [
            { word: "Prospective", phonetic: "/prəˈspektɪv/", ar: "محتمل / مستقبلي", example: "Contacting prospective thesis supervisors requires thorough preparation." },
            { word: "Align", phonetic: "/əˈlaɪn/", ar: "يتوافق ويتماشى مع", example: "My research interests align directly with your laboratory's ongoing projects." },
            { word: "Credentials", phonetic: "/krəˈdenʃlz/", ar: "مؤهلات وشهادات معتمدة", example: "Please find attached my CV detailing my academic credentials." },
            { word: "Supervision", phonetic: "/ˌsuːpərˈvɪʒn/", ar: "إشراف أكاديمي", example: "I am seeking master's thesis supervision in renewable energy systems." }
          ],
          practicalExercise: "صياغة إيميل رسمي احترافي من 180 كلمة لطلب إشراف ماجستير يتضمن ملخصاً لأهدافك وخبراتك.",
          speakingPrompt: "Simulate a 2-minute elevator pitch to a university dean explaining why they should fund your research.",
          studyTips: "لا ترسل إيميلاً عاماً منسوخاً لمئات الأساتذة. اذكر ورقة بحثية واحدة على الأقل نشرها الأستاذ وبين كيف يتوافق شغفك معها."
        }
      ]
    },
    {
      id: "lvl-4",
      number: 4,
      title: "منهج احتراف اختبار الآيلتس الأكاديمي (IELTS Academic Mastery 7.5+)",
      levelCode: "Band 7.5 - 8.5",
      badge: "درب الآيلتس الأكاديمي",
      color: "from-amber-600 to-orange-700",
      description: "تحليل استراتيجيات الأقسام الأربعة: الاستماع، القراءة الأكاديمية، كتابة المهمة 1 و 2، ومقابلة المحادثة مع معايير التصحيح الدقيقة.",
      duration: "8 - 10 أسابيع",
      topicsCount: 20,
      units: [
        {
          id: "u4-1",
          title: "الاستماع الأكاديمي للآيلتس (IELTS Listening: Form, Map & Section 4 Lectures)",
          summary: "التعامل مع اللهجات البريطانية والأسترالية، خرائط التوجيه، وإكمال المحاضرات الأكاديمية السريعة دون تشتت.",
          grammarPoint: "Predicting word class (noun, verb, adjective, number) and identifying distractors (e.g., 'actually, no, let me check that again').",
          keyVocabulary: [
            { word: "Distractor", phonetic: "/dɪˈstræktər/", ar: "مشتت / فخ سمعي لتغيير الإجابة", example: "Watch out for distractors in IELTS Section 1 where numbers are corrected." },
            { word: "Enclosure", phonetic: "/ɪnˈkloʊʒər/", ar: "منطقة محاطة بسياج في خريطة", example: "The pedestrian path leads directly to the botanical enclosure." },
            { word: "Monologue", phonetic: "/ˈmɑːnəlɔːɡ/", ar: "حديث منفرد (محاضرة أكاديمية)", example: "Section 4 is an uninterrupted academic monologue on a scientific topic." },
            { word: "Abbreviation", phonetic: "/əˌbriːviˈeɪʃn/", ar: "اختصار للكلمات", example: "Use standard abbreviations while taking quick notes during the audio." }
          ],
          practicalExercise: "حل اختبار استماع تجريبي في خريطة ومحاضرة أكاديمية مع تحديد المشتتات.",
          speakingPrompt: "Summarize a 3-minute lecture on urban architecture in your own words without reading notes.",
          studyTips: "اقرأ الأسئلة مسبقاً وضع خطاً تحت الكلمات المفتاحية وحدد نوع الكلمة المطلوبة (هل الفراغ يحتاج اسماً مفرداً أم جمعاً أم رقماً؟)."
        },
        {
          id: "u4-2",
          title: "القراءة الأكاديمية للآيلتس (IELTS Reading: True/False/Not Given & Matching Headings)",
          summary: "السيطرة على النصوص الثلاثة المعقدة خلال 60 دقيقة بدقة وسرعة عبر تقنيات Skimming & Scanning.",
          grammarPoint: "Paraphrasing and Synonyms in Questions vs Original Texts.",
          keyVocabulary: [
            { word: "Skimming", phonetic: "/ˈskɪmɪŋ/", ar: "القراءة السريعة لأخذ الفكرة العامة", example: "Skim the first paragraph to understand the main thesis of the passage." },
            { word: "Scanning", phonetic: "/ˈskænɪŋ/", ar: "المسح البصري للبحث عن معلومة محددة", example: "Scan specifically for dates, names, and numerical statistics." },
            { word: "Not Given", phonetic: "/nɑːt ˈɡɪvn/", ar: "غير مذكور في النص", example: "If the author doesn't confirm or contradict the statement, choose NOT GIVEN." },
            { word: "Deduce", phonetic: "/dɪˈduːs/", ar: "يستنتج فكرة من السياق", example: "Deduce the meaning of unfamiliar terms from surrounding sentences." }
          ],
          practicalExercise: "حل 6 أسئلة True / False / Not Given على نص بيئي متخصص وشرح سبب كل إجابة.",
          speakingPrompt: "Explain the difference between 'False' and 'Not Given' with a concrete example.",
          studyTips: "إذا كانت المعلومة غير موجودة صراحة أو ضمنياً، لا تستخدم معلوماتك العامة السابقة أبداً! اختر NOT GIVEN فوراً."
        },
        {
          id: "u4-3",
          title: "كتابة الآيلتس: المهمة الأولى والثانية (IELTS Writing Task 1 & Task 2 Band 9 Strategy)",
          summary: "وصف الرسوم البيانية والخرائط (Task 1) + كتابة مقال رأي أو نقاش من 4 فقرات متكاملة مع أمثلة مقنعة (Task 2).",
          grammarPoint: "Complex sentences, passive voice in processes, and varied vocabulary for trends (skyrocketed, plummeted, plateaued).",
          keyVocabulary: [
            { word: "Fluctuate", phonetic: "/ˈflʌktʃueɪt/", ar: "يتذبذب صعوداً وهبوطاً", example: "The unemployment rate fluctuated between 12% and 18% over the decade." },
            { word: "Plateau", phonetic: "/plæˈtoʊ/", ar: "يستقر عند مستوى ثابت", example: "Solar energy adoption plateaued briefly before experiencing a resurgence." },
            { word: "Exponential", phonetic: "/ˌekspəˈnenʃl/", ar: "تصاعدي متسارع جداً", example: "The country witnessed an exponential surge in international student enrollment." },
            { word: "Unprecedented", phonetic: "/ʌnˈpresɪdentɪd/", ar: "غير مسبوق في التاريخ", example: "This era offers unprecedented opportunities for cross-border research." }
          ],
          practicalExercise: "كتابة فقرة Overview للمهمة 1 وكتابة مقدمة وأطروحة (Thesis statement) للمهمة 2.",
          speakingPrompt: "Give a 2-minute oral presentation describing the demographic changes in urban centers.",
          studyTips: "في Task 1، لا تضع رأيك الشخصي ولا تذكر أسباباً من عندك. اكتب فقط ما هو موجود في الرسم البياني! والفقرة الأهم هي Overview."
        },
        {
          id: "u4-4",
          title: "المحادثة في الآيلتس (IELTS Speaking: Part 1, 2 Cue Card & Part 3 Analytical)",
          summary: "التحدث بطلاقة لمدة دقيقتين متواصلتين في بطاقة المهام (Cue Card) ومناقشة قضايا فكرية عميقة في الجزء الثالث.",
          grammarPoint: "Discourse markers, idiomatic expressions, natural fillers (Well, honestly speaking, to put it into perspective).",
          keyVocabulary: [
            { word: "Fluency", phonetic: "/ˈfluːənsi/", ar: "طلاقة وانسيابية الحديث دون توقف", example: "Fluency does not mean speaking fast; it means speaking without unnatural hesitations." },
            { word: "Coherent", phonetic: "/koʊˈhɪrənt/", ar: "مترابط فكرياً ومنطقياً", example: "His answer was articulate, structured, and entirely coherent." },
            { word: "Elaborate", phonetic: "/ɪˈlæbəreɪt/", ar: "يتوسع في الشرح ويفصّل", example: "Always elaborate on your answers in Part 1 by adding reasons and examples." },
            { word: "Spontaneous", phonetic: "/spɑːnˈteɪniəs/", ar: "عفوي وغير محفوظ", example: "Examiners penalize memorized answers; strive for spontaneous articulation." }
          ],
          practicalExercise: "تسجيل صوتي لمدة دقيقتين للإجابة على بطاقة: 'Describe an ambition you have not yet achieved.'",
          speakingPrompt: "Describe an achievement you are proud of. Explain why it was meaningful and what skills it taught you.",
          studyTips: "لا تحفظ إجابات جاهزة، لأن الممتحن سيكتشف ذلك فوراً ويسألك أسئلة غير متوقعة. ركز على التحدث بتنغيم طبيعي (Intonation)."
        }
      ]
    },
    {
      id: "lvl-5",
      number: 5,
      title: "منهج احتراف اختبار التوفل الدولي (TOEFL iBT Mastery 100+)",
      levelCode: "Score 100 - 115",
      badge: "درب التوفل الدولي",
      color: "from-rose-600 to-red-700",
      description: "التفوق في اختبار التوفل على الكمبيوتر: المحاضرات الأكاديمية الطويلة، التحدث المدمج مع الميكروفون، ومهمة الكتابة للنقاش الأكاديمي.",
      duration: "6 - 8 أسابيع",
      topicsCount: 16,
      units: [
        {
          id: "u5-1",
          title: "قراءة واستماع التوفل المدمج (Integrated Reading & Academic Lectures)",
          summary: "استيعاب المحاضرات الجامعية الأمريكية في الجيولوجيا وعلم النفس والتاريخ وتدوين الملاحظات السريعة (Cornell Notes).",
          grammarPoint: "Recognizing lecture organization signals (e.g., 'Now let's turn to...', 'The drawback here is...').",
          keyVocabulary: [
            { word: "Hypothesis", phonetic: "/haɪˈpɑːθəsɪs/", ar: "فرضية علمية قابلة للاختبار", example: "The professor examined whether empirical data supported the hypothesis." },
            { word: "Ecosystem", phonetic: "/ˈiːkoʊsɪstəm/", ar: "نظام بيئي", example: "Wetlands constitute an indispensable component of the local ecosystem." },
            { word: "Inference", phonetic: "/ˈɪnfərəns/", ar: "استنتاج لما لم يُقل صراحة", example: "Inference questions require reading between the lines based on lecture hints." },
            { word: "Evolutionary", phonetic: "/ˌevəˈluːʃəneri/", ar: "تطوري / ناتج عن التكيف", example: "Certain species exhibit remarkable evolutionary adaptations." }
          ],
          practicalExercise: "تدوين ملاحظات من محاضرة استماع في التوفل من 5 دقائق والإجابة على 6 أسئلة تشخيصية.",
          speakingPrompt: "Explain the central concept of natural selection based on an introductory biology lecture.",
          studyTips: "نظام تدوين الملاحظات في التوفل هو سلاحك الأقوى. استخدم رموزاً وأسهماً واختصارات ولا تكتب جملاً كاملة أثناء الاستماع."
        },
        {
          id: "u5-2",
          title: "التحدث المدمج أمام الكمبيوتر (TOEFL Integrated Speaking Tasks 1-4)",
          summary: "الإجابة في 45 إلى 60 ثانية بعد قراءة نص وسماع حوار أو محاضرة جامعية دون تردد وبصوت واضح.",
          grammarPoint: "Synthesizing two viewpoints: 'The student disagrees with the university announcement because...'",
          keyVocabulary: [
            { word: "Concise", phonetic: "/kənˈsaɪs/", ar: "موجز ومباشر ودقيق", example: "Your 60-second response must be concise and hit all prompt requirements." },
            { word: "Articulate", phonetic: "/ɑːrˈtɪkjuleɪt/", ar: "يُعرب بوضوح وفصاحة", example: "She articulated her perspective with commanding confidence." },
            { word: "Pronunciation", phonetic: "/prəˌnʌnsiˈeɪʃn/", ar: "النطق الصحيح ومخارج الحروف", example: "Clear pronunciation ensures speech recognition software scores your audio high." },
            { word: "Transition", phonetic: "/trænˈzɪʃn/", ar: "انتقال منظم بين الأفكار", example: "Smooth transitions between the reading and the listening are essential." }
          ],
          practicalExercise: "تسجيل إجابة مدتها 60 ثانية تلخص رأي طالب في قرار جامعي مع ذكر سببين.",
          speakingPrompt: "The university plans to eliminate parking on campus. Explain the policy and the student's reaction.",
          studyTips: "تحدث بإيقاع واثق وثابت ومباشر في الميكروفون. الهدوء والوضوح أهم من السرعة، والتوقف الطويل هو ما يخفض الدرجة."
        },
        {
          id: "u5-3",
          title: "كتابة التوفل الجديدة: النقاش الأكاديمي (Writing for Academic Discussion)",
          summary: "المهمة الجديدة المعتمدة في التوفل (10 دقائق لكتابة 100+ كلمة تساهم في نقاش أكاديمي بين أستاذ وطالبين).",
          grammarPoint: "Persuasive justification, building on peers' ideas ('While Sarah makes a valid point, I would argue that...').",
          keyVocabulary: [
            { word: "Standpoint", phonetic: "/ˈstændpɔɪnt/", ar: "وجهة نظر / موقف فكري", example: "From an environmental standpoint, investing in rail transit is optimal." },
            { word: "Compelling", phonetic: "/kəmˈpelɪŋ/", ar: "مقنع جداً وقوي الحجة", example: "The student presented a compelling rationale for hybrid workplace models." },
            { word: "Viable", phonetic: "/ˈvaɪəbl/", ar: "قابل للتطبيق والنجاح عملياً", example: "Subsidizing renewable technologies is a viable economic strategy." },
            { word: "Contribution", phonetic: "/ˌkɑːntrɪˈbjuːʃn/", ar: "مساهمة فكرية في النقاش", example: "Your response should offer a novel contribution to the professor's question." }
          ],
          practicalExercise: "كتابة رد أكاديمي خلال 10 دقائق على مسألة: 'هل يجب على الحكومات تمويل الفنون أم البنية التحتية؟'",
          speakingPrompt: "Defend which is more essential for modern students: learning to code or learning financial literacy.",
          studyTips: "في مهمة Academic Discussion لا تكرر كلام زملائك، بل قدم حجة جديدة مع مثال شخصي أو واقعي محدد يثبت رأيك."
        }
      ]
    }
  ],

  scholarships: [
    {
      id: "chevening",
      name: "منحة تشيفنينغ البريطانية (Chevening Scholarship - UK)",
      country: "المملكة المتحدة (UK)",
      coverage: "تمويل كامل 100% (الرسوم الدراسية كاملة، راتب شهري، تذاكر الطيران، التأشيرة، بدل وصول)",
      deadline: "تفتح في أغسطس وتغلق في أوائل نوفمبر سنوياً",
      ieltsReq: "لا تشترط المنحة درجة لغة مسبقة للتقديم، لكن يجب الحصول على قبول جامعي غير مشروط يستلزم عادة 6.5 إلى 7.5 آيلتس",
      coreEssays: [
        { title: "القيادة والتأثير (Leadership & Influence)", desc: "كتابة مواقف حقيقية استخدمت فيها مهاراتك القيادية وأثرت إيجابياً في محيطك ومؤسستك." },
        { title: "بناء العلاقات والشبكات (Relationship Building & Networking)", desc: "كيف تبني علاقات مهنية وأكاديمية وكيف ستستفيد من شبكة خريجي تشيفنينغ العالمية." },
        { title: "الدراسة في بريطانيا (Studying in the UK)", desc: "شرح اختيار 3 برامج ماجستير في بريطانيا وتوافقها مع خطتك وطموحك الأكاديمي." },
        { title: "الخطة المهنية المستقبلية (Career Plan)", desc: "أهدافك قصيرة ومتوسطة وطويلة المدى بعد التخرج وكيف ستساهم في تنمية اليمن ومجتمعك." }
      ],
      yemenTips: "المنحة مفتوحة للمواطنين اليمنيين سنوياً! التركيز الأكبر هو على شغفك بالتغيير وامتلاكك عامين من الخبرة العملية (أو ما يعادلها في التطوع والعمل الجزئي). المقابلات تجري عبر الإنترنت للطلاب في اليمن أو في سفارة بريطانيا بالدول المجاورة كالأردن أو مصر."
    },
    {
      id: "fulbright",
      name: "برنامج فولبرايت الأمريكي (Fulbright Foreign Student Program - USA)",
      country: "الولايات المتحدة الأمريكية (USA)",
      coverage: "تمويل كامل 100% (تكاليف الدراسة، السكن، التأمين الصحي، تذاكر السفر، مصروف شهري)",
      deadline: "تختلف حسب السفارة الأمريكية لليمن (عادة بين أبريل ويونيو سنوياً)",
      ieltsReq: "TOEFL iBT 80+ أو IELTS Academic 6.5+ (البرنامج يوفر أحياناً تمويلاً لاختبار التوفل للمرشحين المتفوقين)",
      coreEssays: [
        { title: "بيان الأهداف الدراسية (Study Objective / Academic Proposal)", desc: "تحديد مشروعك البحثي وتخصصك الدقيق وأسباب دراسته في الجامعات الأمريكية." },
        { title: "البيان الشخصي (Personal Statement)", desc: "قصتك الإنسانية، دوافعك، التحديات التي تغلبت عليها، وما يشكل هويتك وشغفك العلمي." }
      ],
      yemenTips: "يتم إدارة البرنامج للطلاب اليمنيين عبر مكتب Amideast ومكتب شؤون اليمن بالسفارة الأمريكية. يمكنك التقديم وأنت داخل اليمن، ويتم تنظيم المقابلات والاختبارات افتراضياً."
    },
    {
      id: "erasmus",
      name: "منح إيراسموس موندوس الأوروبية (Erasmus Mundus Joint Masters - EMJM)",
      country: "الاتحاد الأوروبي (الدراسة في 2 إلى 3 دول أوروبية مختلفة)",
      coverage: "تمويل كامل (1400 يورو شهرياً + إعفاء كامل من رسوم الدراسة + التأمين + تذاكر الطيران)",
      deadline: "بين أكتوبر وفبراير سنوياً حسب كل برنامج ماجستير",
      ieltsReq: "عادة IELTS 6.5 أو 7.0 (بعض البرامج تقبل إثبات الدراسة باللغة الإنجليزية في البكالوريوس)",
      coreEssays: [
        { title: "رسالة الدوافع المخصصة (Motivation Letter)", desc: "تخصيص الرسالة بدقة متناهية للمسار العلمي وربط خبراتك السابقة بالوحدات الدراسية للماجستير." },
        { title: "السيرة الذاتية بصيغة يوروباس (Europass CV)", desc: "سيرة ذاتية أكاديمية واضحة تبرز المهارات التقنية، والأبحاث، والمشاريع الجامعية." }
      ],
      yemenTips: "من أروع الفرص للطلاب اليمنيين لأنك تقدم على ما يصل إلى 3 برامج مختلفة في نفس العام، والتقييم يعتمد بشكل شبه كامل على ملفك الأكاديمي ورسالة الدوافع وقوة التوصيات دون الحاجة لمقابلات معقدة في معظم البرامج."
    },
    {
      id: "daad",
      name: "منح داد الألمانية (DAAD EPOS / Helmut-Schmidt - Germany)",
      country: "ألمانيا (برامج ماجستير تُدرس باللغة الإنجليزية 100%)",
      coverage: "راتب شهري 934 يورو + تأمين صحي + تذاكر سفر + دورة لغة ألمانية تحضيرية مجانية",
      deadline: "أغسطس إلى أكتوبر سنوياً للمنح التنموية EPOS",
      ieltsReq: "IELTS 6.0 إلى 6.5 أو TOEFL iBT 80+",
      coreEssays: [
        { title: "رسالة الدوافع التنموية (Development-related Motivation Letter)", desc: "كيف سيرتبط تخصصك بحل مشاكل التنمية المستدامة (المياه، الطاقة، الصحة، الإدارة، التعليم) في اليمن." },
        { title: "سيرة ذاتية زمنية مفصلة (Chronological CV)", desc: "سيرة ذاتية دقيقة توضح سنتين من الخبرة العملية بعد التخرج للمنح التنموية." }
      ],
      yemenTips: "ألمانيا لا تفرض رسوماً دراسية، ومنح DAAD تركز على الكفاءات التي تساهم في إعادة بناء وتطوير أوطانهم. تأكد من إثبات خبرتك المهنية أو التطوعية عبر شهادات خبرة رسمية ومترجمة."
    },
    {
      id: "turkiye",
      name: "المنحة التركية الحكومية (Türkiye Bursları)",
      country: "تركيا",
      coverage: "تمويل كامل (راتب شهري، سكن جامعي مجاني، تذاكر طيران، سنة لغة تركية تحضيرية مجانية)",
      deadline: "تفتح في 10 يناير وتغلق في 20 فبراير سنوياً",
      ieltsReq: "ليست إلزامية للبرامج باللغة التركية، ولكنها مطلوبة للبرامج باللغة الإنجليزية (عادة TOEFL iBT أو اختبارات مماثلة)",
      coreEssays: [
        { title: "المقترح البحثي (Research Proposal)", desc: "صياغة فكرة بحثية لماجستير: العنوان، المشكلة البحثية، المنهجية، والأهمية العلمية." },
        { title: "خطاب النوايا (Letter of Intent)", desc: "شرح أسباب اختيار تركيا والجامعات المختارة، وتطلعاتك المهنية بعد التخرج." }
      ],
      yemenTips: "تحظى اليمن بمقاعد مخصصة سنوياً في المنحة التركية. احرص على توثيق كافة أنشطتك المجتمعية وشهادات التفوق وتقديم مقترح بحثي متين يمس قضايا حيوية."
    }
  ],

  yemenSpecificGuide: {
    title: "الدليل الشامل للطلاب والباحثين من اليمن (Yemeni Scholar's Playbook)",
    steps: [
      {
        step: 1,
        title: "توثيق وتعميد الشهادات الأكاديمية",
        content: "قم بتعميد وثيقة التخرج وبيان الدرجات (Transcript) باللغة الإنجليزية من: 1) الجامعة المتخرج منها، 2) وزارة التعليم العالي والبحث العلمي، 3) وزارة الخارجية اليمنية. احتفظ بنسخ سكانر ملونة عالية الدقة بصيغة PDF."
      },
      {
        step: 2,
        title: "حجز اختبارات اللغة (IELTS & TOEFL)",
        content: "يمكن حجز اختبار IELTS عبر المركز الثقافي البريطاني (British Council) في عدن أو صنعاء، أو التقديم عبر الاختبار الإلكتروني IELTS Online إن أتيح للمنحة، أو السفر إلى دول الجوار مثل مصر (القاهرة)، الأردن (عمان)، أو سلطنة عمان. كما توفر بعض المنح فرصة اختبار Duolingo English Test (DET) الذي يمكن إجراؤه من المنزل ببطاقة بنكية إنترنتية."
      },
      {
        step: 3,
        title: "التعامل مع انقطاع الكهرباء والإنترنت أثناء الدراسة",
        content: "استخدم ميزة هذه المنصة الذاتية Offline-Ready: قم بحفظ الدروس والبطاقات الصوتية والمصادر على جهازك لتعمل دون اتصال مباشر. ننصح بتوفير بطارية شحن (Power Bank) وشريحة إنترنت 4G كخطة طوارئ عند إجراء الاختبارات والمقابلات."
      },
      {
        step: 4,
        title: "خطابات التوصية الأكاديمية (LORs)",
        content: "تواصل مبكراً مع دكاترتك في الجامعة. جهز لهم مسودة مقترحة تسلط الضوء على شغفك، حضورك، تفوقك في مشروع التخرج، وأنشطتك البحثية، واطلب منهم استخدام إيميلهم الجامعي الرسمي إن وجد أو إيميل رسمي مع توقيع وختم الجامعة."
      },
      {
        step: 5,
        title: "رسالة الدوافع: كيف تتحدث عن الظروف بذكاء؟",
        content: "لا تجعل رسالة الدوافع خطاب استعطاف! لجان المنح العالمية تبحث عن 'المرونة والصلابة' (Resilience). اذكر التحديات في جملة أو اثنتين فقط كخلفية تثبت كيف استطعت الإنجاز والتعلم الذاتي رغم كل المعوقات لتثبت جدارتك واستحقاقك الكامل للمنحة."
      }
    ]
  },

  flashcards: [
    { word: "Advocate", phonetic: "/ˈædvəkeɪt/", pos: "verb / noun", meaningAr: "يؤيد ويدافع عن / محامي لقضية", sentence: "She advocates for educational equity for marginalized students.", topic: "Academic & Society" },
    { word: "Alleviate", phonetic: "/əˈliːvieɪt/", pos: "verb", meaningAr: "يخفف من وطأة المعاناة أو الألم", sentence: "The new policy aims to alleviate rural poverty.", topic: "Development" },
    { word: "Benchmark", phonetic: "/ˈbentʃmɑːrk/", pos: "noun", meaningAr: "معيار قياس ومستوى مرجعي", sentence: "This score serves as a benchmark for university admissions.", topic: "Testing & Evaluation" },
    { word: "Cohesive", phonetic: "/koʊˈhiːsɪv/", pos: "adj", meaningAr: "متماسك ومترابط بإحكام", sentence: "Write cohesive paragraphs using appropriate linking adverbs.", topic: "Writing" },
    { word: "Discrepancy", phonetic: "/dɪˈskrepənsi/", pos: "noun", meaningAr: "تفاوت أو اختلاف بين معلومتين", sentence: "Auditors identified a significant discrepancy in the financial report.", topic: "Research & Analysis" },
    { word: "Empirical", phonetic: "/ɪmˈpɪrɪkl/", pos: "adj", meaningAr: "تجريبي مبني على الملاحظة والبيانات", sentence: "Scholars require empirical data before validating a theory.", topic: "Scientific Methodology" },
    { word: "Foster", phonetic: "/ˈfɔːstər/", pos: "verb", meaningAr: "يُعزز ويشجع على النمو والتطور", sentence: "Scholarships foster cross-cultural collaboration.", topic: "Academic Growth" },
    { word: "Hierarchy", phonetic: "/ˈhaɪərɑːrki/", pos: "noun", meaningAr: "تسلسل هرمي وتدرج إداري أو فكري", sentence: "Modern organizations strive for flat structures rather than rigid hierarchy.", topic: "Management" },
    { word: "Implement", phonetic: "/ˈɪmplɪment/", pos: "verb", meaningAr: "يُنفذ ويضع حيز التطبيق", sentence: "Governments must implement resilient water management strategies.", topic: "Action & Policy" },
    { word: "Justify", phonetic: "/ˈdʒʌstɪfaɪ/", pos: "verb", meaningAr: "يُبرر ويقدم أسباباً مقنعة", sentence: "You must justify your methodological choices in your master's thesis.", topic: "Academic Defense" },
    { word: "Manifest", phonetic: "/ˈmænɪfest/", pos: "verb / adj", meaningAr: "يتجلى ويظهر بوضوح", sentence: "Dedication manifests in continuous self-improvement.", topic: "Fluency" },
    { word: "Nuance", phonetic: "/ˈnuːɑːns/", pos: "noun", meaningAr: "فارق دقيق جداً في المعنى أو الأسلوب", sentence: "Advanced speakers appreciate cultural nuances in formal English.", topic: "Advanced Fluency" },
    { word: "Optimize", phonetic: "/ˈɑːptɪmaɪz/", pos: "verb", meaningAr: "يُحسّن لأقصى كفاءة ممكنة", sentence: "Optimize your daily study schedule for maximum focus.", topic: "Productivity" },
    { word: "Perceive", phonetic: "/pərˈsiːv/", pos: "verb", meaningAr: "يُدرك ويستشعر ويفهم", sentence: "How international panels perceive your application depends on clarity.", topic: "Psychology & Perception" },
    { word: "Quantitative", phonetic: "/ˈkwɑːntəteɪtɪv/", pos: "adj", meaningAr: "كمّي مبني على الأرقام والإحصاء", sentence: "A quantitative study was conducted involving 500 respondents.", topic: "Research Methods" },
    { word: "Qualitative", phonetic: "/ˈkwɑːləteɪtɪv/", pos: "adj", meaningAr: "نوعي كيفي مبني على المقابلات والتحليل", sentence: "Qualitative insights revealed deep psychological motivations.", topic: "Research Methods" },
    { word: "Robust", phonetic: "/roʊˈbʌst/", pos: "adj", meaningAr: "قوي ومتين ومحصن ضد الأخطاء", sentence: "We need a robust framework to evaluate sustainable development.", topic: "Engineering & Logic" },
    { word: "Scrutinize", phonetic: "/ˈskruːtənaɪz/", pos: "verb", meaningAr: "يدقق ويمحص بدقة متناهية", sentence: "Scholarship committees closely scrutinize personal statements.", topic: "Evaluation" },
    { word: "Tangible", phonetic: "/ˈtændʒəbl/", pos: "adj", meaningAr: "ملموس ومحسوس وعملي", sentence: "We aim to deliver tangible benefits to society through this research.", topic: "Impact" },
    { word: "Unprecedented", phonetic: "/ʌnˈpresɪdentɪd/", pos: "adj", meaningAr: "فريد وغير مسبوق", sentence: "The team achieved unprecedented breakthroughs in renewable energy.", topic: "Achievement" }
  ],

  audioLectures: [
    {
      id: "lec-1",
      title: "محاضرة أكاديمية: مستقبل الطاقة المتجددة في الدول النامية (Academic Lecture on Renewable Energy)",
      speaker: "Dr. Eleanor Vance, Department of Sustainable Engineering",
      accent: "en-US",
      duration: "3 mins",
      difficulty: "IELTS 7.0+ / TOEFL 95+",
      transcript: `Good morning, everyone. Today, I want to direct our attention toward a transformative shift in global energy systems, specifically decentralised renewable energy infrastructure in developing regions. Traditionally, large-scale industrialization required centralised national power grids, primarily dependent on fossil fuels. However, in countries with mountainous geography or infrastructural disruptions—such as certain regions in the Arabian Peninsula and Sub-Saharan Africa—centralized grids often suffer from substantial transmission losses and chronic instability.

In contrast, modular micro-grids powered by photovoltaic solar cells and wind micro-turbines offer an unprecedented opportunity. Not only are the deployment costs declining exponentially, but these localized setups also empower rural communities to achieve self-sufficiency. Research indicates that when a community gains reliable clean electricity, educational attainment surges by nearly thirty-five percent within two academic years. Therefore, the strategic transition to renewable energy is not merely an environmental obligation; it is fundamentally an educational and socio-economic catalyst. In our next seminar, we will examine the financial models required to attract international green investment to fund these local micro-grids.`,
      questions: [
        {
          q: "What is the main drawback of traditional centralized power grids mentioned in the lecture?",
          options: [
            "They are completely impossible to build anywhere in the world.",
            "They suffer from high transmission losses and chronic instability in difficult terrain.",
            "They require no financial investment from local governments.",
            "They are cheaper than modern solar micro-grids."
          ],
          correct: 1,
          explanation: "ذكرت المحاضرة صراحة أن الشبكات المركزية التقليدية في المناطق الوعرة تعاني من 'substantial transmission losses and chronic instability'."
        },
        {
          q: "According to the speaker, what happens when a community gains reliable clean electricity?",
          options: [
            "Educational attainment increases by almost 35% within two years.",
            "People immediately abandon university education.",
            "Energy consumption drops to zero.",
            "Solar cells become completely obsolete."
          ],
          correct: 0,
          explanation: "أشارت الباحثة إلى أن: 'educational attainment surges by nearly thirty-five percent within two academic years'."
        }
      ]
    },
    {
      id: "lec-2",
      title: "محاكاة مقابلة منحة تشيفنينغ وفولبرايت (Scholarship Interview Simulation: Leadership Dilemma)",
      speaker: "Panel Chair & Applicant",
      accent: "en-GB",
      duration: "2.5 mins",
      difficulty: "Scholarship Ready (C1)",
      transcript: `Panel Chair: Welcome. Could you tell us about a time when you had to lead a project in an environment with severe resource constraints, and what was the outcome?

Applicant: Thank you for this question. Two years ago, amidst widespread electrical outages and scarce internet connectivity in my hometown, my colleagues and I noticed that high school students were falling drastically behind in their STEM education. Rather than viewing these constraints as an insurmountable barrier, I spearheaded a community initiative called 'Offline Scholars'. 

I coordinated with three volunteer educators to digitize curriculum modules onto localized, low-power micro-servers that did not require continuous internet access. As the project lead, my role was twofold: first, negotiating with community centers to secure space and battery-backed power; second, maintaining morale across our volunteer team when logistical hurdles arose. 

Over six months, we supported over four hundred students, seventy percent of whom successfully passed their national matriculation exams with honors. This experience solidified my conviction that true leadership is not about managing ideal circumstances; it is about cultivating resilience and mobilizing collective creativity when resources are scarce.`,
      questions: [
        {
          q: "How did the applicant address the lack of continuous internet access?",
          options: [
            "By waiting for the national internet provider to fix the cables.",
            "By cancelling the educational program entirely.",
            "By digitizing curriculum modules onto localized low-power micro-servers.",
            "By asking students to travel abroad."
          ],
          correct: 2,
          explanation: "المتقدم قاد مبادرة لرقمنة المناهج على خوادم محلية صغيرة لا تحتاج إنترنت مستمر: 'digitize curriculum modules onto localized, low-power micro-servers'."
        },
        {
          q: "What core philosophy of leadership did the applicant conclude with?",
          options: [
            "Leadership only works when vast financial resources are available.",
            "Leadership is about cultivating resilience and collective creativity in difficult circumstances.",
            "Leadership requires strict authoritarian control over volunteers.",
            "Leadership is purely an individual achievement."
          ],
          correct: 1,
          explanation: "الخاتمة القيادية النموذجية: 'true leadership is not about managing ideal circumstances; it is about cultivating resilience and mobilizing collective creativity'."
        }
      ]
    }
  ],

  diagnosticQuiz: [
    {
      id: "dq-1",
      question: "Choose the grammatically correct and most formal academic sentence:",
      options: [
        "Rarely have international scholars faced such multifaceted logistical hurdles.",
        "Rarely international scholars have faced such multifaceted logistical hurdles.",
        "International scholars rarely has faced such multifaceted logistical hurdles.",
        "Seldom had faced international scholars such multifaceted logistical hurdles."
      ],
      correct: 0,
      rule: "قاعدة Inversion بعد Rarely: يأتي الفعل المساعد (have) قبل الفاعل (international scholars)."
    },
    {
      id: "dq-2",
      question: "The research team conducted extensive experiments; ________, the secondary hypothesis remained unverified.",
      options: [
        "consequently",
        "nevertheless",
        "furthermore",
        "thereby"
      ],
      correct: 1,
      rule: "تفيد nevertheless التناقض والاستدراك (على الرغم من إجراء تجارب مكثفة، بقيت الفرضية غير مثبتة)."
    },
    {
      id: "dq-3",
      question: "Identify the word that means 'to alleviate or make a severe problem less intense':",
      options: [
        "Exacerbate",
        "Mitigate",
        "Proliferate",
        "Fabricate"
      ],
      correct: 1,
      rule: "كلمة Mitigate تعني يُخفف ويحد من الأضرار (عكس Exacerbate التي تعني يفاقم المشكلة)."
    },
    {
      id: "dq-4",
      question: "In IELTS Academic Writing Task 1, which sentence represents an optimal 'Overview' statement?",
      options: [
        "In my opinion, renewable energy will completely replace fossil fuels by 2030.",
        "Overall, while solar energy experienced exponential growth, fossil fuel consumption plateaued over the period.",
        "The graph has a vertical axis of 100 and a horizontal axis with 5 years.",
        "First, we can see that in 2010 the rate was 12% and then in 2012 it became 14%."
      ],
      correct: 1,
      rule: "فقرة Overview في الآيلتس يجب أن تصف التوجه العام (Overall trends) دون إبداء رأي شخصي ودون الخوض في تفاصيل الأرقام الدقيقة."
    },
    {
      id: "dq-5",
      question: "When writing a Statement of Purpose (SOP) for a prestigious Master's scholarship, the opening paragraph should:",
      options: [
        "Begin with a famous philosophical quote or childhood fairytale.",
        "Immediately state your target specialization, academic passion, and your defined research vision.",
        "Complain extensively about the country's economic hardships.",
        "List your entire high school and primary school grades in detail."
      ],
      correct: 1,
      rule: "مقدمة الـ SOP الأكاديمي الاحترافي تكون مباشرة، مركزة، وتحدد التخصص والهدف البحثي فوراً دون كليشيهات طفولية."
    },
    {
      id: "dq-6",
      question: "Which of the following demonstrates appropriate academic 'Hedging' (cautious language)?",
      options: [
        "The newly discovered compound will definitely cure all neurological disorders.",
        "The empirical evidence indicates that the compound may potentially slow the progression of the disorder.",
        "It is 100% certain that every human will benefit equally from this treatment.",
        "Nobody can dispute this absolute biological fact."
      ],
      correct: 1,
      rule: "لغة التحوط (Hedging) تستخدم أفعالاً احتمالية مثل (may potentially, evidence indicates) وتتجنب الجزم المطلق غير المدعوم."
    }
  ],

  templates: {
    sop: `STATEMENT OF PURPOSE (ACADEMIC MASTER'S APPLICATION)
Applicant: [Your Full Legal Name]
Target Program: Master of Science in [Specific Specialization]
Target University: [University Name, Country]

I. INTRODUCTION & CENTRAL INTELLECTUAL PASSION
Growing up amidst rapid infrastructural disruptions in Yemen, I witnessed firsthand how access to [renewable energy / reliable computing systems / public health frameworks] fundamentally dictates a community’s socioeconomic future. My academic journey in [Your Undergraduate Major] at [Your Bachelor University] convinced me that sustainable solutions require rigorous, cutting-edge technical methodologies. Therefore, I am applying to the Master of Science in [Program Name] at [Target University] to deepen my expertise in [Key Research Area, e.g., decentralized power grids / machine learning for healthcare] and subsequently contribute to post-conflict reconstruction.

II. UNDERGRADUATE FOUNDATION & PRACTICAL CAPSTONE
During my bachelor's studies, I consistently focused on bridging theoretical concepts with empirical implementation, maintaining a cumulative GPA of [Your GPA/Percentage, e.g., 88% / First Class Honors]. For my senior capstone project, I spearheaded a research team of four investigating [Brief Title of Capstone Project]. Under the guidance of Dr. [Supervisor Name], we designed [Specific methodology/prototype], which successfully demonstrated [Specific measurable outcome, e.g., a 22% improvement in system efficiency]. This project not only strengthened my analytical rigor and proficiency in [Tools/Software, e.g., Python, MATLAB, GIS] but also highlighted the paramount importance of multidisciplinary problem-solving.

III. PROFESSIONAL RESILIENCE & COMMUNITY LEADERSHIP
Following graduation, I served as [Your Job / Volunteer Title] at [Organization/Company Name]. In this capacity, I directed [Key Responsibility], actively collaborating with local stakeholders to overcome severe constraints in logistics and electrical availability. A landmark achievement was [Mention an accomplishment, e.g., developing an offline digital training toolkit that reached 350+ community members]. This experience cultivated my leadership resilience, strategic communication, and reinforced my unwavering commitment to public impact.

IV. WHY [TARGET UNIVERSITY] & FUTURE VISION
The [Target University]’s [Department Name] stands out as the premier institution for my academic ambitions, specifically due to the pioneering research conducted at the [Specific Laboratory / Research Group Name]. I am particularly keen to study under Professor [Faculty Member's Name], whose recent publications on [Topic of Professor's Paper] closely align with my proposed master's thesis on [Your Thesis Idea]. 

Upon completion of my master's degree, my immediate career goal is to [Immediate goal, e.g., join an international developmental agency / conduct doctoral research]. In the long term, I intend to return to Yemen as an academic and policy consultant, spearheading sustainable modernization projects and mentoring the next generation of Yemeni engineers and scholars. I am confident that my resilience, academic foundation, and proactive mindset make me an exceptional fit for your distinguished cohort.`,

    coldEmail: `Subject: Prospective Master's Student Inquiry – Research Alignment in [Specific Field]

Dear Professor [Professor's Last Name],

I hope this email finds you well.

My name is [Your Full Name], and I hold a Bachelor's degree in [Your Major] from [Your University in Yemen], graduating with [Honors / GPA]. I have been closely following your lab's publications, particularly your recent paper titled "[Title of Professor's Recent Paper]", and was deeply inspired by your methodology regarding [One specific detail from the paper].

I am preparing to apply for the [Name of Scholarship, e.g., DAAD / Chevening / Erasmus / University Graduate Fellowship] for the [Fall 202X] academic intake, and I am eager to undertake my Master’s thesis under your academic supervision. My prospective research focus explores [Brief 1-2 sentence description of your research proposal], which directly builds upon your group's current inquiries into [Topic].

During my undergraduate thesis, I worked extensively on [Brief mention of your previous project and key skill/software]. My academic CV, statement of research interests, and preliminary proposal are attached for your review.

Would you be available for a brief 10-minute introductory call via Zoom/Teams in the coming weeks to discuss potential alignment within your research group?

Thank you sincerely for your time and consideration.

Respectfully yours,

[Your Full Name]
[Your City, Yemen]
[LinkedIn / Google Scholar / Phone Number]`
  }
};
