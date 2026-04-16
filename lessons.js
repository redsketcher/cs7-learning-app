// ═══════════════════════════════════════════════════════
//  LESSONS.JS — Shared engine
//  Renders lessons, handles all interactive activities,
//  runs the test engine, and manages progress tracking.
// ═══════════════════════════════════════════════════════

// ─── DEMO SEQUENCES (per-lesson animated examples) ───
const DEMO_SEQUENCES = {
  'u4l1': [
    { cmd: 'print("Hello, World!")',   out: 'Hello, World!' },
    { cmd: 'print("My name is Jake")', out: 'My name is Jake' },
    { cmd: 'print(6 * 7)',             out: '42' },
    { cmd: 'print(2 ** 8)',            out: '256' },
    { cmd: 'print(100 + 23)',          out: '123' },
  ],
  'u4l2': [
    { cmd: 'name = "Jake"',        out: '→ name stored as text' },
    { cmd: 'print(name)',          out: 'Jake' },
    { cmd: 'score = 0',            out: '→ score stored as 0' },
    { cmd: 'score = score + 10',   out: '→ score updated to 10' },
    { cmd: 'print(score)',         out: '10' },
    { cmd: 'print(type(score))',   out: "<class 'int'>" },
  ],
  'u4l4': [
    { cmd: '95',  out: 'Grade A ⭐ — Outstanding!' },
    { cmd: '72',  out: 'Grade B 👍 — Well done!' },
    { cmd: '55',  out: 'Grade C 📚 — Keep studying!' },
    { cmd: '30',  out: "Grade D 💪 — Don't give up!" },
  ],
  'u4l5': [
    { cmd: 'for i in range(5): print(i)',      out: '0\n1\n2\n3\n4' },
    { cmd: 'for i in range(1,6): print(i)',    out: '1\n2\n3\n4\n5' },
    { cmd: 'for i in range(0,10,2): print(i)', out: '0\n2\n4\n6\n8' },
    { cmd: 'for i in range(5,0,-1): print(i)', out: '5\n4\n3\n2\n1' },
  ],
};

const demoTimers = {};

function injectDemoPanel(lessonId) {
  const seq = DEMO_SEQUENCES[lessonId];
  if (!seq) return;
  const tabPanel = document.getElementById(`tab-try-${lessonId}`);
  if (!tabPanel || tabPanel.querySelector('.demo-panel')) return;
  const iWrap = tabPanel.querySelector('.interactive-wrap');
  if (!iWrap) return;

  const demo = document.createElement('div');
  demo.className = 'demo-panel';
  demo.innerHTML = `
    <div class="demo-header">
      <span class="demo-label">👀 WATCH IT WORK</span>
      <span class="demo-sub">Auto demo — loops forever</span>
    </div>
    <div class="demo-screen">
      <div class="demo-line">
        <span class="demo-prompt">>>></span>
        <span class="demo-cmd" id="demo-cmd-${lessonId}"></span><span class="demo-cursor" id="demo-cur-${lessonId}">▋</span>
      </div>
      <pre class="demo-out" id="demo-out-${lessonId}"></pre>
    </div>`;

  const flex = document.createElement('div');
  flex.className = 'try-flex';
  tabPanel.insertBefore(flex, iWrap);
  flex.appendChild(iWrap);
  flex.appendChild(demo);

  startDemoLoop(lessonId);
}

function startDemoLoop(id) {
  const seq = DEMO_SEQUENCES[id];
  if (!seq) return;
  let idx = 0;

  function nextStep() {
    const cmdEl = document.getElementById(`demo-cmd-${id}`);
    const outEl = document.getElementById(`demo-out-${id}`);
    const curEl = document.getElementById(`demo-cur-${id}`);
    if (!cmdEl) return; // panel gone — stop silently

    const step = seq[idx % seq.length];
    idx++;

    cmdEl.textContent = '';
    outEl.textContent = '';
    outEl.className = 'demo-out';
    if (curEl) curEl.style.visibility = 'visible';

    let ci = 0;
    function typeChar() {
      if (!document.getElementById(`demo-cmd-${id}`)) return;
      if (ci < step.cmd.length) {
        cmdEl.textContent += step.cmd[ci++];
        demoTimers[id] = setTimeout(typeChar, 50 + Math.random() * 35);
      } else {
        if (curEl) curEl.style.visibility = 'hidden';
        demoTimers[id] = setTimeout(() => {
          if (!document.getElementById(`demo-out-${id}`)) return;
          outEl.textContent = step.out;
          outEl.className = 'demo-out show' + (step.out.startsWith('→') ? ' hint' : '');
          const pause = step.out.includes('\n') ? 3200 : step.out ? 2600 : 1200;
          demoTimers[id] = setTimeout(nextStep, pause);
        }, 520);
      }
    }
    demoTimers[id] = setTimeout(typeChar, 500);
  }

  nextStep();
}

// ─── GLOSSARY ────────────────────────────────────────
const GLOSSARY = {
  'data':             'Information stored or used by a computer. Data can be numbers, text, images, sounds — anything a computer can store or process.',
  'analogue':         'A signal that changes smoothly and continuously — like a dimmer switch or a mercury thermometer. It can be any value, not just 0 or 1.',
  'digital':          'A signal that only has two fixed states — ON (1) or OFF (0). There is nothing in between. All computers are digital machines.',
  'bit':              'The smallest unit of digital data. A bit is always either 0 (off) or 1 (on). The word is short for "binary digit".',
  'byte':             '8 bits grouped together. One byte can store one character, like the letter A. All file sizes are measured in bytes.',
  'binary':           'A number system that only uses two digits: 0 and 1. Computers use binary because their circuits can only be switched on or off.',
  'denary':           'The normal number system humans use every day, with ten digits: 0 to 9. Also called "decimal" or "base 10". The word comes from the Latin word for ten.',
  'ascii':            'A standard code that gives every letter, number and symbol a unique number. For example, the letter A = 65, B = 66. Computers use these numbers to store text.',
  'pixel':            'The smallest dot of colour in a digital image. A screen is made of millions of tiny pixels arranged in a grid. Zoom in far enough on any photo and you\'ll see them.',
  'resolution':       'How many pixels fit in an image. More pixels = sharper, more detailed image. A low resolution image looks blurry when enlarged.',
  'sample rate':      'How many times per second a sound wave is measured when recording audio. 44,100 samples per second (44.1 kHz) is CD quality — smooth and accurate.',
  'kilobyte':         'About 1,000 bytes (exactly 1,024 bytes). Shortened to KB. A short text message is roughly 1 kilobyte.',
  'megabyte':         'About 1 million bytes (1,024 kilobytes). Shortened to MB. A typical photo is 2–5 megabytes.',
  'gigabyte':         'About 1 billion bytes (1,024 megabytes). Shortened to GB. A movie is roughly 1–4 gigabytes.',
  'terabyte':         'About 1 trillion bytes (1,024 gigabytes). Shortened to TB. A large hard drive holds 1–4 terabytes.',
  'ram':              'Random Access Memory — your computer\'s fast, temporary workspace. It holds everything you\'re currently working on, but clears completely when you turn the computer off.',
  'storage':          'Permanent memory that keeps your files even when the computer is switched off — like a hard drive, SSD, or USB stick.',
  'lossless':         'A type of compression that shrinks a file without throwing away any data. The file can be restored to exactly its original quality. PNG images use lossless compression.',
  'lossy':            'A type of compression that makes a file smaller by permanently removing some data. Quality is slightly reduced — like a slightly blurry photo. JPEG uses lossy compression.',
  'compression':      'Making a file smaller so it takes up less storage space or downloads faster. There are two types: lossless (no quality loss) and lossy (some quality removed).',
  'number code':      'A unique number assigned to each letter and symbol so computers can store text. The standard system is called ASCII. For example, A = 65, a = 97.',
  'phishing':         'A scam where someone pretends to be a trusted person or website to trick you into revealing your password or personal details. Like a fisherman casting a line — they\'re fishing for your information.',
  'malware':          'Harmful software designed to damage your device or steal your information. Viruses, ransomware and spyware are all types of malware. Short for "malicious software".',
  'digital footprint':'The trail of data you leave behind every time you use the internet — searches, posts, logins, clicks, and location data all leave traces that can persist for years.',
  'copyright':        'The legal right that gives the creator of something (a photo, song, video, or piece of writing) control over how it is used. You cannot copy or share someone\'s work without permission.',
  'creative commons': 'A type of licence that lets creators share their work freely, sometimes with conditions like "credit the creator" or "don\'t use it commercially".',
  'cyberbullying':    'Using technology — messages, posts, images, or games — to repeatedly hurt, harass or embarrass someone. Unlike face-to-face bullying, it can follow a person home and happen at any hour.',
  'password':         'A secret string of characters used to prove your identity and protect your accounts. A strong password is long (12+ characters), uses a mix of letters, numbers and symbols, and is unique to each account.',
  'url':              'Uniform Resource Locator — the full address of a page on the internet, like https://www.bbc.co.uk. Every webpage has its own unique URL.',
  'domain':           'The main part of a website\'s address that tells you who owns it — like bbc.co.uk or google.com. Checking the domain helps you spot fake websites.',
  'sequence':         'A set of instructions carried out in a specific order, one after another. The order matters — change one step and you get a different result.',
  'algorithm':        'A step-by-step set of instructions for solving a problem. Every computer program is built on algorithms. A recipe is a real-life algorithm.',
  'loop':             'A block of code that repeats automatically. A "for" loop repeats a set number of times; a "while" loop keeps repeating until a condition changes.',
  'condition':        'A question a program asks that can only be True or False. Used with if/else to decide which code runs next — like a fork in the road.',
  'variable':         'A named container that stores a value. Think of it as a labelled jar on a shelf — the name (label) stays the same but what\'s inside can change.',
  'event':            'Something that happens to trigger code to run — like a button click, a key press, or the app starting. Programs wait for events and then react to them.',
  'sprite':           'A character or object in Scratch that can be programmed to move, speak, change costume, and react to events. You can have many sprites in one project.',
  'debugging':        'Finding and fixing mistakes (called bugs) in your code. Every programmer debugs — it\'s a completely normal part of writing software, not a sign of failure.',
  'syntax error':     'A mistake in the grammar rules of a programming language — like a missing bracket or a misspelled keyword. Python cannot run code that has a syntax error.',
  'string':           'A piece of text in programming, always wrapped in quotes — like "Hello" or \'Python\'. The name "string" comes from a string of characters.',
  'integer':          'A whole number with no decimal point — like 5, 42, or -7. In Python, integers are used for counting and whole-number maths.',
  'boolean':          'A value that is either True or False — nothing else. Named after mathematician George Boole. Used in conditions to decide which code runs.',
  'module':           'A file of pre-written Python code you can add to your program using "import". For example, "import random" gives you tools for generating random numbers.',
  'input':            'Data that comes INTO a program — like a user typing something, clicking a button, or a sensor reading. In Python, the input() function reads what the user types.',
  'output':           'Data that comes OUT of a program — like text displayed on screen, a file saved, or a sound played. In Python, print() is the most common way to produce output.',
  'if':               'A Python keyword that checks a condition. If the condition is True, the code inside it runs. If it is False, Python skips it.',
  'elif':             'Short for "else if". Checks another condition only if the previous if was False. You can chain as many elif blocks as you like.',
  'else':             'Runs its block of code when all the if and elif conditions above it were False. It\'s the "none of the above" catch-all option.',
  'for loop':         'Repeats a block of code a set number of times. In Python: for i in range(5) repeats 5 times, with i counting from 0 to 4.',
  'while loop':       'Keeps repeating a block of code for as long as a condition remains True. Used when you don\'t know in advance how many times you need to repeat.',
  'function':         'A named, reusable block of code. You define it once, then call it by name whenever you need it. Functions help you avoid writing the same code over and over.',
  'print':            'The Python function that displays output on the screen. print("Hello") shows the word Hello in the terminal. It\'s how your program communicates with you.',
};

function applyGlossaryButtons(lessonId) {
  const panel = document.getElementById(`tab-learn-${lessonId}`);
  if (!panel) return;
  panel.querySelectorAll('span.kt').forEach(span => {
    if (span.querySelector('.gloss-q')) return; // already added
    const key = span.textContent.trim().toLowerCase();
    if (!GLOSSARY[key]) return;
    const btn = document.createElement('button');
    btn.className = 'gloss-q';
    btn.textContent = '?';
    btn.setAttribute('aria-label', `Define ${span.textContent.trim()}`);
    const term = span.textContent.trim();
    btn.onclick = e => { e.stopPropagation(); showGlossary(term, GLOSSARY[key]); };
    span.appendChild(btn);
  });
}

function showGlossary(term, definition) {
  document.getElementById('glossTerm').textContent = term;
  document.getElementById('glossDef').textContent = definition;
  document.getElementById('glossModal').classList.add('show');
}

function closeGlossary() {
  document.getElementById('glossModal').classList.remove('show');
}

// ─── STATE ───────────────────────────────────────────
const UNITS_DATA = [window.UNIT1, window.UNIT2, window.UNIT3, window.UNIT4, window.UNIT5, window.UNIT6];
let currentLesson = null;
let done = {};

// ─── PROGRESS ────────────────────────────────────────
async function markDone(id) {
  if (done[id]) return;
  done[id] = true;
  // Save to Supabase
  if (currentUser) {
    await sb.from('progress').upsert({ user_id: currentUser.id, lesson_id: id });
  }
  document.querySelectorAll(`.lesson-btn[data-id="${id}"]`).forEach(b => b.classList.add('done'));
  updateProgressPill();
}

async function loadProgress() {
  if (!currentUser) return;
  const { data } = await sb.from('progress').select('lesson_id').eq('user_id', currentUser.id);
  done = {};
  (data || []).forEach(r => { done[r.lesson_id] = true; });
}

function updateProgressPill() {
  const total = UNITS_DATA.reduce((s, u) => s + u.lessons.length, 0);
  const count = Object.keys(done).length;
  document.getElementById('progressPill').textContent = `${count} / ${total} done`;
}

// ─── SIDEBAR ─────────────────────────────────────────
function buildSidebar() {
  const sb = document.getElementById('sidebar');
  sb.innerHTML = '';
  UNITS_DATA.forEach((unit, ui) => {
    const sec = document.createElement('div');
    sec.className = 'sidebar-section' + (ui === 0 ? ' open' : '');
    sec.innerHTML = `
      <div class="unit-header" onclick="toggleUnit(${ui})" style="border-left-color:${unit.color}">
        <div class="unit-dot" style="background:${unit.color}"></div>
        <span>Unit ${ui + 1} — ${unit.title}</span>
        <span style="margin-left:auto;font-size:0.85rem">▾</span>
      </div>
      <div class="lesson-list">
        ${unit.lessons.map(l => `
          <button class="lesson-btn ${done[l.id] ? 'done' : ''}" data-id="${l.id}"
            onclick="goLesson('${l.id}')" style="border-left-color:transparent">
            <span>${l.emoji}</span>
            <span>${l.title}</span>
            <span class="l-check">✓</span>
          </button>
        `).join('')}
      </div>`;
    sb.appendChild(sec);
  });
  // active state
  if (currentLesson) {
    document.querySelectorAll(`.lesson-btn[data-id="${currentLesson.id}"]`)
      .forEach(b => { b.classList.add('active'); b.style.borderLeftColor = findUnit(currentLesson.id).color; });
  }
}

function toggleUnit(idx) {
  const secs = document.querySelectorAll('.sidebar-section');
  secs[idx].classList.toggle('open');
}

function toggleSidebar() {
  document.getElementById('sidebar').classList.toggle('open');
}

function findUnit(lessonId) {
  return UNITS_DATA.find(u => u.lessons.some(l => l.id === lessonId));
}
function findLesson(lessonId) {
  for (const u of UNITS_DATA) {
    const l = u.lessons.find(l => l.id === lessonId);
    if (l) return l;
  }
  return null;
}

// ─── NAVIGATION ──────────────────────────────────────
function goLesson(id) {
  const lesson = findLesson(id);
  const unit   = findUnit(id);
  if (!lesson || !unit) return;
  // stop any running demo from previous lesson
  Object.keys(demoTimers).forEach(k => { clearTimeout(demoTimers[k]); delete demoTimers[k]; });
  currentLesson = lesson;

  // breadcrumb
  const ui = UNITS_DATA.indexOf(unit) + 1;
  document.getElementById('breadcrumb').textContent = `Unit ${ui} · ${lesson.title}`;

  // close mobile sidebar
  document.getElementById('sidebar').classList.remove('open');

  // update sidebar active states
  document.querySelectorAll('.lesson-btn').forEach(b => {
    b.classList.remove('active');
    b.style.borderLeftColor = 'transparent';
  });
  document.querySelectorAll(`.lesson-btn[data-id="${id}"]`).forEach(b => {
    b.classList.add('active');
    b.style.borderLeftColor = unit.color;
  });

  // open the unit in sidebar
  const ui0 = UNITS_DATA.indexOf(unit);
  document.querySelectorAll('.sidebar-section').forEach((s, i) => {
    s.classList.toggle('open', i === ui0);
  });

  // render
  renderLesson(lesson, unit);
  window.scrollTo(0, 0);
}

function goHome() {
  currentLesson = null;
  document.getElementById('breadcrumb').textContent = 'Oxford Book 7 · Choose a lesson';
  document.querySelectorAll('.lesson-btn').forEach(b => {
    b.classList.remove('active');
    b.style.borderLeftColor = 'transparent';
  });
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById('homeScreen').classList.add('active');
  window.scrollTo(0, 0);
}

// ─── LESSON RENDERER ─────────────────────────────────
function renderLesson(lesson, unit) {
  const mc = document.getElementById('mainContent');

  // find prev/next
  const allLessons = UNITS_DATA.flatMap(u => u.lessons);
  const idx = allLessons.indexOf(lesson);
  const prev = idx > 0 ? allLessons[idx - 1] : null;
  const next = idx < allLessons.length - 1 ? allLessons[idx + 1] : null;

  const uiNum = UNITS_DATA.indexOf(unit) + 1;

  mc.innerHTML = `
    <div class="screen active" id="lessonScreen">
      <div class="lesson-header">
        <span class="lesson-tag" style="background:${unit.bg};color:${unit.color};border:1.5px solid ${unit.color}">
          ${lesson.emoji} Unit ${uiNum} · ${unit.title}
        </span>
        <h1 class="lesson-title">${lesson.title}</h1>
        <p class="lesson-intro">${lesson.intro}</p>
      </div>

      <div class="tabs">
        <button class="tab-btn active" onclick="switchTab(this,'learn','${lesson.id}')">📖 Learn</button>
        <button class="tab-btn" onclick="switchTab(this,'try','${lesson.id}')">🎮 Try It</button>
        <button class="tab-btn" onclick="switchTab(this,'code','${lesson.id}')">💻 Code</button>
        <button class="tab-btn" onclick="switchTab(this,'test','${lesson.id}')">✏️ Test</button>
      </div>

      <div class="tab-panel active" id="tab-learn-${lesson.id}">${lesson.learn}</div>
      <div class="tab-panel" id="tab-try-${lesson.id}">${lesson.interactive}</div>
      <div class="tab-panel" id="tab-code-${lesson.id}">${lesson.code}</div>
      <div class="tab-panel" id="tab-test-${lesson.id}">${renderTest(lesson, unit)}</div>

      <div class="lesson-nav">
        ${prev ? `<button class="btn btn-outline" onclick="goLesson('${prev.id}')">← ${prev.title}</button>` : '<span></span>'}
        <button class="btn btn-primary" onclick="markDone('${lesson.id}').then(()=>{this.textContent='✓ Done!';this.style.background='#1b9e5a'})"
          Mark as done ✓
        </button>
        ${next ? `<button class="btn btn-primary" onclick="goLesson('${next.id}')">${next.title} →</button>` : '<span></span>'}
      </div>
    </div>`;

  // init interactives, glossary buttons, and demo panel after render
  setTimeout(() => { initInteractives(lesson.id); applyGlossaryButtons(lesson.id); injectDemoPanel(lesson.id); }, 50);
}

function switchTab(btn, tab, lessonId) {
  const panel = document.getElementById(`tab-${tab}-${lessonId}`);
  if (!panel) return;
  btn.closest('.tabs').querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  document.querySelectorAll(`[id^="tab-"][id$="-${lessonId}"]`).forEach(p => p.classList.remove('active'));
  panel.classList.add('active');
}

// ─── TEST RENDERER ────────────────────────────────────
function getQuestionSets(lesson) {
  if (lesson.questionSets) return lesson.questionSets;
  return [lesson.questions];
}

function renderTest(lesson, unit) {
  if (!testState[lesson.id]) testState[lesson.id] = {};
  if (testState[lesson.id].setIdx === undefined) {
    const sets = getQuestionSets(lesson);
    testState[lesson.id].setIdx = Math.floor(Math.random() * sets.length);
  }
  const sets = getQuestionSets(lesson);
  const setIdx = testState[lesson.id].setIdx;
  const questions = sets[setIdx];
  const letters = ['A','B','C','D'];
  return `
    <div id="test-${lesson.id}">
      ${sets.length > 1 ? `
        <div style="display:flex;align-items:center;gap:0.8rem;margin-bottom:1.2rem;flex-wrap:wrap">
          <span style="font-size:0.85rem;color:#888;font-family:'Lexend',sans-serif">Question set ${setIdx + 1} of ${sets.length}</span>
          <button class="btn btn-outline btn-sm" onclick="cycleTestSet('${lesson.id}')">🔀 Different questions</button>
        </div>` : ''}
      ${questions.map((q, qi) => `
        <div class="q-card" id="qcard-${lesson.id}-${qi}">
          <div class="q-num">Question ${qi+1} of ${questions.length}</div>
          <div class="q-text">${q.q}</div>
          <div class="a-opts">
            ${q.opts.map((opt, ai) => `
              <button class="a-btn" onclick="selectAnswer('${lesson.id}',${qi},${ai})">
                <span class="a-letter">${letters[ai]}</span>
                <span>${opt}</span>
              </button>
            `).join('')}
          </div>
          <button class="confirm-btn" id="confirm-${lesson.id}-${qi}" style="display:none"
            onclick="confirmAnswer('${lesson.id}',${qi})">Confirm answer ✓</button>
          <div class="q-fb" id="fb-${lesson.id}-${qi}"></div>
        </div>
      `).join('')}
      <div style="margin-top:1rem">
        <button class="btn btn-outline" onclick="retryTest('${lesson.id}')">Reset test 🔄</button>
      </div>
      <div class="score-wrap" id="score-${lesson.id}">
        <div class="score-num" id="score-num-${lesson.id}"></div>
        <div class="score-bar-wrap"><div class="score-bar" id="score-bar-${lesson.id}" style="width:0"></div></div>
        <div class="score-msg" id="score-msg-${lesson.id}"></div>
        <button class="btn btn-outline" onclick="retryTest('${lesson.id}')">Try again 🔄</button>
      </div>
    </div>`;
}

const testState = {};

function selectAnswer(lessonId, qIdx, aIdx) {
  const card = document.getElementById(`qcard-${lessonId}-${qIdx}`);
  if (!card || card.dataset.answered) return;

  // highlight selection, clear previous
  card.querySelectorAll('.a-btn').forEach(b => b.classList.remove('selected'));
  card.querySelectorAll('.a-btn')[aIdx].classList.add('selected');

  // store pending selection
  if (!testState[lessonId]) testState[lessonId] = {};
  testState[lessonId][`sel${qIdx}`] = aIdx;

  // show confirm button
  const confirmBtn = document.getElementById(`confirm-${lessonId}-${qIdx}`);
  if (confirmBtn) confirmBtn.style.display = 'inline-flex';
}

function confirmAnswer(lessonId, qIdx) {
  const lesson = findLesson(lessonId);
  if (!lesson) return;
  const card = document.getElementById(`qcard-${lessonId}-${qIdx}`);
  const fb   = document.getElementById(`fb-${lessonId}-${qIdx}`);
  if (!card || card.dataset.answered) return;

  const aIdx = testState[lessonId]?.[`sel${qIdx}`];
  if (aIdx === undefined) return;

  const sets = getQuestionSets(lesson);
  const setIdx = testState[lessonId]?.setIdx ?? 0;
  const q = sets[setIdx][qIdx];
  card.dataset.answered = '1';

  const btns = card.querySelectorAll('.a-btn');
  btns.forEach(b => { b.disabled = true; b.classList.remove('selected'); });
  btns[aIdx].classList.add(aIdx === q.ans ? 'correct' : 'wrong');
  if (aIdx !== q.ans) btns[q.ans].classList.add('correct');

  fb.textContent = (aIdx === q.ans ? '✅ ' : '❌ ') + q.why;
  fb.className = `q-fb show ${aIdx === q.ans ? 'ok' : 'bad'}`;

  const confirmBtn = document.getElementById(`confirm-${lessonId}-${qIdx}`);
  if (confirmBtn) confirmBtn.style.display = 'none';

  // record result
  testState[lessonId][qIdx] = aIdx === q.ans;

  // show score when all 4 confirmed
  const currentSet = sets[setIdx];
  const confirmed = currentSet.filter((_, i) => testState[lessonId][i] !== undefined).length;
  if (confirmed === currentSet.length) showScore(lessonId);
}

function cycleTestSet(lessonId) {
  const lesson = findLesson(lessonId);
  const sets = getQuestionSets(lesson);
  const current = testState[lessonId]?.setIdx ?? 0;
  const nextIdx = (current + 1) % sets.length;
  testState[lessonId] = { setIdx: nextIdx };
  const unit = findUnit(lessonId);
  const panel = document.getElementById(`tab-test-${lessonId}`);
  if (panel) panel.innerHTML = renderTest(lesson, unit);
}

function showScore(lessonId) {
  const lesson = findLesson(lessonId);
  const sets = getQuestionSets(lesson);
  const setIdx = testState[lessonId]?.setIdx ?? 0;
  const currentSet = sets[setIdx];
  const correct = currentSet.filter((_, i) => testState[lessonId][i] === true).length;
  const total = currentSet.length;
  const pct = Math.round((correct / total) * 100);

  const wrap = document.getElementById(`score-${lessonId}`);
  const msgs = ['Keep practising! 💪', 'Getting there! 📚', 'Good effort! 👍', 'Well done! ⭐', 'Perfect score! 🏆'];
  const msgIdx = Math.min(Math.floor(pct / 25), 4);

  document.getElementById(`score-num-${lessonId}`).textContent = `${correct} / ${total}`;
  document.getElementById(`score-msg-${lessonId}`).textContent = msgs[msgIdx];
  wrap.classList.add('show');
  setTimeout(() => {
    const bar = document.getElementById(`score-bar-${lessonId}`);
    if (bar) bar.style.width = pct + '%';
  }, 100);

  if (correct === total) markDone(lessonId);
}

function retryTest(lessonId) {
  const prevSetIdx = testState[lessonId]?.setIdx ?? 0;
  testState[lessonId] = { setIdx: prevSetIdx };
  const lesson = findLesson(lessonId);
  const unit   = findUnit(lessonId);
  const panel  = document.getElementById(`tab-test-${lessonId}`);
  if (panel) panel.innerHTML = renderTest(lesson, unit);
}

// ─── INTERACTIVES INIT ───────────────────────────────
function initInteractives(lessonId) {
  // Bit row
  if (document.getElementById(`bits-${lessonId}`)) {
    buildBitRow(lessonId);
  }
  // Sort game
  const pool = document.getElementById(`pool-${lessonId}`);
  if (pool) buildSortGame(lessonId);
  // Match game
  const mg = document.getElementById(`matchgame-${lessonId}`);
  if (mg) buildMatchGame(lessonId);
  // Safety game
  const sg = document.getElementById(`safetyGame-${lessonId}`);
  if (sg) buildSafetyGame(lessonId);
  // Phish game
  const pg = document.getElementById(`phishGame-${lessonId}`);
  if (pg) buildPhishGame(lessonId);
  // Cyber game
  const cg = document.getElementById(`cyberGame-${lessonId}`);
  if (cg) buildCyberGame(lessonId);
  // Copyright game
  const crg = document.getElementById(`copyrightGame-${lessonId}`);
  if (crg) buildCopyrightGame(lessonId);
  // Website game
  const wg = document.getElementById(`websiteGame-${lessonId}`);
  if (wg) buildWebsiteGame(lessonId);
  // Wave sim
  if (document.getElementById(`waveSim-${lessonId}`)) buildWaveSim(lessonId);
  // Pixel grid
  if (document.getElementById(`pixelGrid-${lessonId}`)) buildPixelGrid(lessonId);
  // Scratch stage u3l4 var game
  if (document.getElementById(`varGame-${lessonId}`)) buildVarGame(lessonId);
  // Catch game
  if (document.getElementById(`star-${lessonId}`)) initCatchGame(lessonId);
  // Input sims
  if (document.getElementById(`inputSims-${lessonId}`)) buildInputSims(lessonId);
  // Final game
  if (document.getElementById(`finalGame-${lessonId}`)) buildFinalGame(lessonId);
  // Binary target
  if (document.getElementById(`bintarget-${lessonId}`)) initBinaryTarget(lessonId);
}

// ═══════════════════════════════════════════════════════
//  BIT ROW
// ═══════════════════════════════════════════════════════
function buildBitRow(id) {
  const powers = [128,64,32,16,8,4,2,1];
  const row = document.getElementById(`bits-${id}`);
  if (!row) return;
  row.innerHTML = powers.map((p,i) => `
    <div class="bit-cell">
      <span class="bit-power">${p}</span>
      <button class="bit-btn" id="bit-${id}-${i}" data-val="${p}" data-on="0"
        onclick="toggleBit('${id}',${i})">0</button>
    </div>`).join('');
  updateBitResult(id);
}

function toggleBit(id, idx) {
  const btn = document.getElementById(`bit-${id}-${idx}`);
  const on  = btn.dataset.on === '1';
  btn.dataset.on  = on ? '0' : '1';
  btn.textContent = on ? '0' : '1';
  btn.classList.toggle('on', !on);
  updateBitResult(id);
}

function updateBitResult(id) {
  let total = 0, bits = '';
  for (let i = 0; i < 8; i++) {
    const btn = document.getElementById(`bit-${id}-${i}`);
    if (!btn) continue;
    const on = btn.dataset.on === '1';
    bits += on ? '1' : '0';
    if (on) total += parseInt(btn.dataset.val);
  }
  const res = document.getElementById(`bitresult-${id}`);
  if (res) res.textContent = `${bits} = ${total}`;
}

// ─── Binary target challenge ─────────────────────────
const binTargets = {};
function initBinaryTarget(id) {
  binTargets[id] = Math.floor(Math.random() * 200) + 10;
  const el = document.getElementById(`bintarget-${id}`);
  if (el) el.textContent = binTargets[id];
}
function checkBinaryTarget(id) {
  const powers = [128,64,32,16,8,4,2,1];
  let total = 0;
  for (let i = 0; i < 8; i++) {
    const btn = document.getElementById(`bit-${id}-${i}`);
    if (btn && btn.dataset.on === '1') total += powers[i];
  }
  const fb = document.getElementById(`fb-bin-${id}`);
  if (!fb) return;
  if (total === binTargets[id]) {
    fb.textContent = `✅ Correct! ${binTargets[id]} in binary is exactly what you set!`;
    fb.className = 'inline-fb show ok';
  } else {
    fb.textContent = `Not quite — your switches total ${total}, but the target is ${binTargets[id]}. Try again!`;
    fb.className = 'inline-fb show bad';
  }
}
function newBinaryTarget(id) {
  binTargets[id] = Math.floor(Math.random() * 200) + 10;
  const el = document.getElementById(`bintarget-${id}`);
  if (el) el.textContent = binTargets[id];
  buildBitRow(id);
  const fb = document.getElementById(`fb-bin-${id}`);
  if (fb) { fb.className = 'inline-fb'; fb.textContent = ''; }
}

// ═══════════════════════════════════════════════════════
//  SORT GAME
// ═══════════════════════════════════════════════════════
const SORT_ITEMS = {
  'u1l1': ['thermometer','vinyl record','clock with hands','dimmer switch','computer file','LED indicator','digital clock','barcode'],
  'u1l3': ['open web page','currently typing a document','running a game','clipboard contents','saved photo','installed app','music library','USB stick files'],
};

function buildSortGame(id) {
  const pool = document.getElementById(`pool-${id}`);
  if (!pool) return;
  const items = SORT_ITEMS[id] || [];
  pool.innerHTML = items.map(item => `
    <div class="sort-chip" id="chip-${id}-${item.replace(/\s+/g,'-')}" data-item="${item}"
      onclick="placeChip('${id}', '${item}', event)">
      ${item}
    </div>`).join('');
}

let pendingChip = {};
function placeChip(id, item, event) {
  const chipEl = event.currentTarget;
  if (chipEl.classList.contains('placed')) return;
  if (pendingChip[id] === item) { pendingChip[id] = null; chipEl.style.outline = ''; return; }
  pendingChip[id] = item;
  document.querySelectorAll(`#pool-${id} .sort-chip`).forEach(c => c.style.outline = '');
  chipEl.style.outline = '2.5px solid #2b7de3';

  // Auto-open zone selection UI
  const zones = document.querySelectorAll(`[id^="drop-"][id$="-${id}"]`);
  zones.forEach(zone => {
    zone.style.outline = '2.5px dashed #2b7de3';
    zone.onclick = () => dropIntoZone(id, item, zone.dataset.zone || zone.id.split('-')[1]);
  });
}

function dropIntoZone(id, item, zone) {
  const chipEl = document.querySelector(`#chip-${id}-${item.replace(/\s+/g,'-')}`);
  if (chipEl) chipEl.classList.add('placed');
  pendingChip[id] = null;
  document.querySelectorAll(`[id^="drop-"][id$="-${id}"]`).forEach(z => { z.style.outline = ''; z.onclick = null; });

  // find the correct drop zone element
  const zones = document.querySelectorAll(`[id^="drop-"][id$="-${id}"]`);
  let dropEl = null;
  zones.forEach(z => { if (z.id.includes(zone)) dropEl = z; });
  if (!dropEl) return;

  const dropped = document.createElement('div');
  dropped.className = 'dropped-chip';
  dropped.textContent = item;
  dropped.dataset.item = item;
  dropped.dataset.zone = zone;
  dropped.onclick = () => returnChip(id, item, dropped);
  dropEl.appendChild(dropped);
}

function returnChip(id, item, el) {
  el.remove();
  const chipEl = document.querySelector(`#chip-${id}-${item.replace(/\s+/g,'-')}`);
  if (chipEl) chipEl.classList.remove('placed');
}

function checkSort(id, answers) {
  const fb = document.getElementById(`fb-sort-${id}`);
  let correct = 0, total = 0;
  document.querySelectorAll(`[id^="drop-"][id$="-${id}"] .dropped-chip`).forEach(chip => {
    total++;
    const item = chip.dataset.item;
    const zone = chip.closest('[id^="drop-"]').id.split('-')[1];
    const correct_zone = answers[item];
    if (correct_zone && chip.closest('[id^="drop-"]').id.includes(correct_zone)) {
      chip.classList.add('ok'); correct++;
    } else {
      chip.classList.add('bad');
    }
  });
  if (!fb) return;
  if (total === 0) { fb.textContent = 'Place some items first!'; fb.className = 'inline-fb show bad'; return; }
  if (correct === total && total === Object.keys(answers).length) {
    fb.textContent = `✅ Perfect! All ${total} items are in the right category!`;
    fb.className = 'inline-fb show ok';
  } else {
    fb.textContent = `${correct} / ${total} correct — red items are in the wrong category. Tap them to move back.`;
    fb.className = 'inline-fb show bad';
  }
}

// ═══════════════════════════════════════════════════════
//  MATCH GAME (u1l4)
// ═══════════════════════════════════════════════════════
function buildMatchGame(id) {
  const wrap = document.getElementById(`matchgame-${id}`);
  if (!wrap) return;
  const pairs = [
    { item: '📱 Emoji text message', size: '~1 KB' },
    { item: '📄 Word document (10 pages)', size: '~50 KB' },
    { item: '📷 Smartphone photo', size: '~4 MB' },
    { item: '🎵 MP3 song (3 min)', size: '~4 MB' },
    { item: '🎬 HD movie (2 hours)', size: '~4 GB' },
  ];
  const sizes = pairs.map(p => p.size).sort(() => Math.random() - 0.5);
  let selected = null;

  wrap.innerHTML = '';
  const leftCol  = document.createElement('div');
  const rightCol = document.createElement('div');
  leftCol.style.cssText = rightCol.style.cssText = 'display:flex;flex-direction:column;gap:0.5rem';

  pairs.forEach((p, i) => {
    const btn = document.createElement('button');
    btn.className = 'sort-chip'; btn.style.justifyContent = 'flex-start';
    btn.textContent = p.item; btn.dataset.item = i;
    btn.onclick = () => { selected = i; document.querySelectorAll('.match-item').forEach(b => b.style.outline = ''); btn.style.outline = '2.5px solid #8b35c8'; };
    btn.classList.add('match-item');
    leftCol.appendChild(btn);
  });

  sizes.forEach(sz => {
    const btn = document.createElement('button');
    btn.className = 'sort-chip'; btn.style.justifyContent = 'center';
    btn.textContent = sz;
    btn.onclick = () => {
      if (selected === null) return;
      const correct = pairs[selected].size === sz;
      const fb = document.getElementById(`fb-match-${id}`);
      if (correct) {
        btn.style.background = '#eaf8f1'; btn.style.borderColor = '#1b9e5a';
        document.querySelector(`.match-item[data-item="${selected}"]`).style.background = '#eaf8f1';
        if (fb) { fb.textContent = `✅ Correct! ${pairs[selected].item} is ${sz}`; fb.className = 'inline-fb show ok'; }
      } else {
        if (fb) { fb.textContent = `❌ Not quite. Think about how much data that file needs.`; fb.className = 'inline-fb show bad'; }
      }
      selected = null;
      document.querySelectorAll('.match-item').forEach(b => b.style.outline = '');
    };
    rightCol.appendChild(btn);
  });

  wrap.appendChild(leftCol);
  wrap.appendChild(rightCol);
}

// ═══════════════════════════════════════════════════════
//  WAVE SIMULATOR (u1l6)
// ═══════════════════════════════════════════════════════
function buildWaveSim(id) {
  updateWaveSim(id, 8);
}

function updateWaveSim(id, samples) {
  const n = parseInt(samples);
  const lbl = document.getElementById(`waveLabel-${id}`);
  if (lbl) lbl.textContent = `${n} samples — ${n < 10 ? 'Very blocky (bad quality)' : n < 25 ? 'Getting smoother' : 'Smooth (good quality)'}`;

  const wrap = document.getElementById(`waveSim-${id}`);
  if (!wrap) return;
  const W = 320, H = 80;
  const pts = [];
  for (let i = 0; i < n; i++) {
    const x = (i / (n - 1)) * W;
    const y = H/2 - Math.sin((i / (n-1)) * Math.PI * 4) * (H/2 - 8);
    pts.push([x, y]);
  }
  const path = pts.map((p,i) => (i===0?`M${p[0].toFixed(1)},${p[1].toFixed(1)}`:`L${p[0].toFixed(1)},${p[1].toFixed(1)}`)).join(' ');
  const dots = pts.map(p => `<circle cx="${p[0].toFixed(1)}" cy="${p[1].toFixed(1)}" r="4" fill="#8b35c8"/>`).join('');
  const smoothPath = `M0,${H/2} ${Array.from({length:200},(_,i)=>{const x=(i/199)*W;const y=H/2-Math.sin((i/199)*Math.PI*4)*(H/2-8);return `L${x.toFixed(1)},${y.toFixed(1)}`}).join(' ')}`;

  wrap.innerHTML = `<svg viewBox="0 0 ${W} ${H}" style="width:100%;border-radius:10px;background:#1c1a2e">
    <path d="${smoothPath}" stroke="#546e7a" stroke-width="1.5" fill="none" stroke-dasharray="4,3"/>
    <path d="${path}" stroke="#c3e88d" stroke-width="2" fill="none"/>
    ${dots}
  </svg>
  <div style="font-size:0.78rem;color:var(--muted);margin-top:0.3rem;text-align:center">Grey dashed = true wave · Green = what the computer stores · Purple dots = sample points</div>`;
}

// ═══════════════════════════════════════════════════════
//  PIXEL GRID (u1l5)
// ═══════════════════════════════════════════════════════
const PIXEL_COLOURS = ['#1a1612','#e85d2f','#2b7de3','#1b9e5a','#8b35c8','#f9c74f','#ffffff','#ff6b9d'];
let pixelColour = {};

function buildPixelGrid(id) {
  const picker = document.getElementById(`colourPicker-${id}`);
  const grid   = document.getElementById(`pixelGrid-${id}`);
  if (!picker || !grid) return;
  pixelColour[id] = PIXEL_COLOURS[0];
  picker.innerHTML = PIXEL_COLOURS.map(c => `
    <button onclick="setPixelColour('${id}','${c}')" id="pcolour-${id}-${c.replace('#','')}"
      style="width:36px;height:36px;border-radius:8px;border:3px solid ${c===PIXEL_COLOURS[0]?'white':'transparent'};background:${c};cursor:pointer;transition:border 0.1s"></button>
  `).join('');
  grid.innerHTML = Array.from({length:256},(_,i)=>`
    <div id="px-${id}-${i}" style="aspect-ratio:1;background:#f0e8d8;border-radius:2px;cursor:pointer"
      onclick="paintPixel('${id}',${i})" onmouseover="if(this.dataset.drag==='1')paintPixel('${id}',${i})"
      onpointerdown="this.dataset.drag='1';paintPixel('${id}',${i})"
      onpointerup="this.dataset.drag='0'"
      ontouchstart="paintPixel('${id}',${i})">
    </div>`).join('');
}

function setPixelColour(id, c) {
  pixelColour[id] = c;
  document.querySelectorAll(`[id^="pcolour-${id}-"]`).forEach(b => b.style.border = '3px solid transparent');
  const btn = document.getElementById(`pcolour-${id}-${c.replace('#','')}`);
  if (btn) btn.style.border = '3px solid white';
}

function paintPixel(id, idx) {
  const px = document.getElementById(`px-${id}-${idx}`);
  if (px) px.style.background = pixelColour[id] || '#1a1612';
}

function clearPixelGrid(id) {
  for (let i = 0; i < 256; i++) {
    const px = document.getElementById(`px-${id}-${i}`);
    if (px) px.style.background = '#f0e8d8';
  }
}

// ═══════════════════════════════════════════════════════
//  SAFETY GAME (u2l1)
// ═══════════════════════════════════════════════════════
const SAFETY_SCENARIOS = [
  { msg: 'You want to post: "My full name is Jake Smith, I go to PASCAL School in Lemesos."', safe: false, explain: 'Full name + school + city together can help a stranger find you in real life. Never combine these.' },
  { msg: 'You want to share your favourite video game in a gaming forum.', safe: true, explain: 'Sharing your hobby (a game name) reveals nothing personal. This is fine!' },
  { msg: 'Someone online asks: "What\'s your home address so I can send you a prize?"', safe: false, explain: 'Nobody legitimate gives prizes this way. Your home address must stay private — always.' },
  { msg: 'You post a drawing you made, using only your first name "Jake".', safe: true, explain: 'A piece of your artwork with just a first name is generally safe to share.' },
  { msg: 'A new online friend wants your phone number so you can chat more easily.', safe: false, explain: 'Never give your phone number to someone you only know online — you have no way to verify who they really are.' },
];
let safetyIdx = {};

function buildSafetyGame(id) {
  safetyIdx[id] = 0;
  showSafetyScenario(id);
}

function showSafetyScenario(id) {
  const wrap = document.getElementById(`safetyGame-${id}`);
  if (!wrap) return;
  const i = safetyIdx[id];
  if (i >= SAFETY_SCENARIOS.length) {
    wrap.innerHTML = `<div class="inline-fb show ok">🎉 You completed all scenarios! You're a digital safety expert.</div>`;
    return;
  }
  const s = SAFETY_SCENARIOS[i];
  wrap.innerHTML = `
    <div class="scenario-bubble">${s.msg}</div>
    <div class="choice-row">
      <button class="choice-btn" onclick="answerSafety('${id}', true)">✅ Safe to share</button>
      <button class="choice-btn" onclick="answerSafety('${id}', false)">🚫 Too risky</button>
    </div>
    <div class="inline-fb" id="sfb-${id}"></div>
    <div style="font-size:0.82rem;color:var(--muted);margin-top:0.5rem">Scenario ${i+1} of ${SAFETY_SCENARIOS.length}</div>`;
}

function answerSafety(id, chose_safe) {
  const i = safetyIdx[id];
  const s = SAFETY_SCENARIOS[i];
  const fb = document.getElementById(`sfb-${id}`);
  const correct = chose_safe === s.safe;
  fb.textContent = (correct ? '✅ ' : '❌ ') + s.explain;
  fb.className = `inline-fb show ${correct ? 'ok' : 'bad'}`;
  const btns = document.querySelectorAll(`#safetyGame-${id} .choice-btn`);
  btns.forEach(b => b.disabled = true);
  setTimeout(() => { safetyIdx[id]++; showSafetyScenario(id); }, 2200);
}

// ═══════════════════════════════════════════════════════
//  PASSWORD STRENGTH (u2l2)
// ═══════════════════════════════════════════════════════
function checkPasswordStrength(id, pw) {
  const bar  = document.getElementById(`pwBarInner-${id}`);
  const lbl  = document.getElementById(`pwLabel-${id}`);
  const tips = document.getElementById(`pwTips-${id}`);
  if (!bar || !lbl) return;

  let score = 0;
  const checks = [];
  if (pw.length >= 8)  score++;
  if (pw.length >= 12) score++;
  if (/[A-Z]/.test(pw)) score++; else checks.push('Add an uppercase letter');
  if (/[0-9]/.test(pw)) score++; else checks.push('Add a number');
  if (/[^A-Za-z0-9]/.test(pw)) score++; else checks.push('Add a symbol like ! @ # $');
  if (pw.length >= 16) score++;
  if (['password','123456','qwerty','abc123'].some(b => pw.toLowerCase().includes(b))) { score = Math.max(0, score-3); checks.push('⚠️ Contains a common weak pattern'); }

  const pct = Math.min(100, Math.round((score / 6) * 100));
  const levels = ['Very Weak 🔴','Weak 🟠','Fair 🟡','Good 🟢','Strong 💪','Very Strong 🏆'];
  const colours = ['#e85d2f','#f4830a','#f9c74f','#1b9e5a','#2b7de3','#8b35c8'];
  const lvl = Math.min(5, Math.floor(score));

  bar.style.width   = pct + '%';
  bar.style.background = colours[lvl];
  lbl.textContent   = pw.length === 0 ? 'Enter a password above' : levels[lvl];
  lbl.style.color   = colours[lvl];
  tips.innerHTML    = checks.map(c => `<div>• ${c}</div>`).join('');
}

// ═══════════════════════════════════════════════════════
//  PHISHING GAME (u2l3)
// ═══════════════════════════════════════════════════════
const PHISH_SCENARIOS = [
  { msg: '📧 From: security@paypa1.com — "Your PayPal account has been suspended! Click here immediately to restore access."', isPhish: true, explain: '"paypa1" uses the number 1 instead of letter l. Real PayPal would never demand you click a link to restore access.' },
  { msg: '📧 From: noreply@amazon.com — "Your order #123-456 has been dispatched. Track your delivery here."', isPhish: false, explain: 'Real order confirmation from a genuine Amazon address. No urgency, no password request — this is fine.' },
  { msg: '📧 From: it-support@school-helpdesk.net — "Dear student, we need your password to fix your account today."', isPhish: true, explain: 'No legitimate IT team ever needs your password. They can reset it without knowing it. Classic phishing.' },
  { msg: '📧 From: youtube-team@google.com — "Someone signed in from a new device. If this wasn\'t you, review activity."', isPhish: false, explain: 'Google does send these security alerts. The domain is google.com (not google-secure.com etc). Still, verify by going directly to the site rather than clicking.' },
];
let phishIdx = {};

function buildPhishGame(id) {
  phishIdx[id] = 0;
  showPhishScenario(id);
}

function showPhishScenario(id) {
  const wrap = document.getElementById(`phishGame-${id}`);
  if (!wrap) return;
  const i = phishIdx[id];
  if (i >= PHISH_SCENARIOS.length) {
    wrap.innerHTML = `<div class="inline-fb show ok">🎉 Well done! You've spotted every phishing attempt in this set.</div>`;
    return;
  }
  const s = PHISH_SCENARIOS[i];
  wrap.innerHTML = `
    <div class="scenario-bubble">${s.msg}</div>
    <div class="choice-row">
      <button class="choice-btn" onclick="answerPhish('${id}',true)">🎣 Phishing!</button>
      <button class="choice-btn" onclick="answerPhish('${id}',false)">✅ Looks real</button>
    </div>
    <div class="inline-fb" id="pfb-${id}"></div>
    <div style="font-size:0.82rem;color:var(--muted);margin-top:0.5rem">Email ${i+1} of ${PHISH_SCENARIOS.length}</div>`;
}

function answerPhish(id, chosePhish) {
  const i  = phishIdx[id];
  const s  = PHISH_SCENARIOS[i];
  const fb = document.getElementById(`pfb-${id}`);
  const correct = chosePhish === s.isPhish;
  fb.textContent = (correct ? '✅ ' : '❌ ') + s.explain;
  fb.className = `inline-fb show ${correct ? 'ok' : 'bad'}`;
  document.querySelectorAll(`#phishGame-${id} .choice-btn`).forEach(b => b.disabled = true);
  setTimeout(() => { phishIdx[id]++; showPhishScenario(id); }, 2400);
}

// ═══════════════════════════════════════════════════════
//  CYBERBULLYING GAME (u2l4)
// ═══════════════════════════════════════════════════════
const CYBER_SCENARIOS = [
  { msg: 'Someone keeps sending you messages saying you\'re ugly and no-one likes you.', opts: ['Send them back the same insults','Screenshot it, block them, and tell an adult','Ignore it — it\'ll probably stop'], best: 1, explain: 'Screenshot first (evidence), block the person, then tell a trusted adult. Replying usually makes it worse.' },
  { msg: 'Your friend shows you a nasty post about another classmate and asks you to like it and share it.', opts: ['Like and share it — everyone else is','Tell your friend it\'s wrong and refuse','Ignore your friend\'s message'], best: 1, explain: 'Sharing or liking mean posts makes you part of the bullying. Refusing and speaking up is the right thing — even if it\'s hard.' },
  { msg: 'You receive a threatening message from a stranger online.', opts: ['Reply and ask them to stop','Delete it and forget about it','Screenshot it and tell a trusted adult immediately'], best: 2, explain: 'A threatening message from a stranger must be reported to an adult straight away. Don\'t reply — save the evidence.' },
];
let cyberIdx = {};

function buildCyberGame(id) {
  cyberIdx[id] = 0;
  showCyberScenario(id);
}

function showCyberScenario(id) {
  const wrap = document.getElementById(`cyberGame-${id}`);
  if (!wrap) return;
  const i = cyberIdx[id];
  if (i >= CYBER_SCENARIOS.length) {
    wrap.innerHTML = `<div class="inline-fb show ok">🎉 Great responses — you know exactly what to do if cyberbullying happens.</div>`;
    return;
  }
  const s = CYBER_SCENARIOS[i];
  wrap.innerHTML = `
    <div class="scenario-bubble">${s.msg}</div>
    <div class="choice-row">
      ${s.opts.map((o,oi) => `<button class="choice-btn" onclick="answerCyber('${id}',${oi})">${o}</button>`).join('')}
    </div>
    <div class="inline-fb" id="cfb-${id}"></div>
    <div style="font-size:0.82rem;color:var(--muted);margin-top:0.5rem">Scenario ${i+1} of ${CYBER_SCENARIOS.length}</div>`;
}

function answerCyber(id, chose) {
  const i = cyberIdx[id];
  const s = CYBER_SCENARIOS[i];
  const fb = document.getElementById(`cfb-${id}`);
  const correct = chose === s.best;
  fb.textContent = (correct ? '✅ ' : '❌ ') + s.explain;
  fb.className = `inline-fb show ${correct ? 'ok' : 'bad'}`;
  document.querySelectorAll(`#cyberGame-${id} .choice-btn`).forEach(b => b.disabled = true);
  setTimeout(() => { cyberIdx[id]++; showCyberScenario(id); }, 2400);
}

// ═══════════════════════════════════════════════════════
//  COPYRIGHT GAME (u2l5)
// ═══════════════════════════════════════════════════════
const COPYRIGHT_SCENARIOS = [
  { msg: 'You find a Creative Commons "free to use with credit" image on Flickr and put it in your presentation, crediting the photographer.', legal: true, explain: 'Creative Commons licences allow this exact use. You credited the author — perfectly legal.' },
  { msg: 'You download a song from Spotify and use it as background music in your YouTube video.', legal: false, explain: 'Streaming licences are for personal listening only. Using copyrighted music in a video you publish is a copyright violation.' },
  { msg: 'You copy and paste a whole news article onto your blog without permission.', legal: false, explain: 'News articles are copyrighted works. Reproducing the full text without permission violates copyright — you can quote briefly and link instead.' },
  { msg: 'You use Python (an open-source language) to build your own app.', legal: true, explain: 'Python is open-source (PSF licence). Using it to build software is explicitly permitted — that\'s the whole point of open source.' },
];
let crIdx = {};

function buildCopyrightGame(id) {
  crIdx[id] = 0;
  showCopyrightScenario(id);
}

function showCopyrightScenario(id) {
  const wrap = document.getElementById(`copyrightGame-${id}`);
  if (!wrap) return;
  const i = crIdx[id];
  if (i >= COPYRIGHT_SCENARIOS.length) {
    wrap.innerHTML = `<div class="inline-fb show ok">🎉 Excellent! You understand copyright and how licences work.</div>`;
    return;
  }
  const s = COPYRIGHT_SCENARIOS[i];
  wrap.innerHTML = `
    <div class="scenario-bubble">${s.msg}</div>
    <div class="choice-row">
      <button class="choice-btn" onclick="answerCopyright('${id}',true)">✅ Legal</button>
      <button class="choice-btn" onclick="answerCopyright('${id}',false)">🚫 Violation</button>
    </div>
    <div class="inline-fb" id="crfb-${id}"></div>
    <div style="font-size:0.82rem;color:var(--muted);margin-top:0.5rem">Scenario ${i+1} of ${COPYRIGHT_SCENARIOS.length}</div>`;
}

function answerCopyright(id, choseLegal) {
  const i = crIdx[id];
  const s = COPYRIGHT_SCENARIOS[i];
  const fb = document.getElementById(`crfb-${id}`);
  const correct = choseLegal === s.legal;
  fb.textContent = (correct ? '✅ ' : '❌ ') + s.explain;
  fb.className = `inline-fb show ${correct ? 'ok' : 'bad'}`;
  document.querySelectorAll(`#copyrightGame-${id} .choice-btn`).forEach(b => b.disabled = true);
  setTimeout(() => { crIdx[id]++; showCopyrightScenario(id); }, 2400);
}

// ═══════════════════════════════════════════════════════
//  WEBSITE RELIABILITY GAME (u2l6)
// ═══════════════════════════════════════════════════════
const WEBSITE_SCENARIOS = [
  { msg: '🌐 nhs.uk — UK National Health Service. Written by medical professionals, updated regularly, no ads or products to sell.', trust: true, explain: 'Government health sites (.gov, .nhs.uk) are maintained by official bodies with expert medical oversight. Highly reliable.' },
  { msg: '🌐 health-truth-they-dont-want-you-to-know.blogspot.com — Unnamed author. No sources cited. Claims vaccines cause everything.', trust: false, explain: 'Anonymous, no sources, sensational title, extreme claims. Every CRAAP check fails here.' },
  { msg: '🌐 bbc.co.uk/news — Published today. Author named. Links to primary sources. The BBC has editorial standards.', trust: true, explain: 'The BBC has professional journalists, editors, and clear correction policies. Still worth cross-checking major claims, but generally reliable.' },
  { msg: '🌐 A Wikipedia article last edited 5 years ago with a "citation needed" banner on the key claim.', trust: false, explain: 'Wikipedia can be edited by anyone. Unsourced claims with outdated content should be verified against primary sources before use.' },
];
let wbIdx = {};

function buildWebsiteGame(id) {
  wbIdx[id] = 0;
  showWebsiteScenario(id);
}

function showWebsiteScenario(id) {
  const wrap = document.getElementById(`websiteGame-${id}`);
  if (!wrap) return;
  const i = wbIdx[id];
  if (i >= WEBSITE_SCENARIOS.length) {
    wrap.innerHTML = `<div class="inline-fb show ok">🎉 Great detective work — you can evaluate online sources!</div>`;
    return;
  }
  const s = WEBSITE_SCENARIOS[i];
  wrap.innerHTML = `
    <div class="scenario-bubble">${s.msg}</div>
    <div class="choice-row">
      <button class="choice-btn" onclick="answerWebsite('${id}',true)">✅ Trustworthy</button>
      <button class="choice-btn" onclick="answerWebsite('${id}',false)">⚠️ Unreliable</button>
    </div>
    <div class="inline-fb" id="wfb-${id}"></div>
    <div style="font-size:0.82rem;color:var(--muted);margin-top:0.5rem">Source ${i+1} of ${WEBSITE_SCENARIOS.length}</div>`;
}

function answerWebsite(id, choseTrust) {
  const i = wbIdx[id];
  const s = WEBSITE_SCENARIOS[i];
  const fb = document.getElementById(`wfb-${id}`);
  const correct = choseTrust === s.trust;
  fb.textContent = (correct ? '✅ ' : '❌ ') + s.explain;
  fb.className = `inline-fb show ${correct ? 'ok' : 'bad'}`;
  document.querySelectorAll(`#websiteGame-${id} .choice-btn`).forEach(b => b.disabled = true);
  setTimeout(() => { wbIdx[id]++; showWebsiteScenario(id); }, 2400);
}

// ═══════════════════════════════════════════════════════
//  SCRATCH STAGE HELPERS
// ═══════════════════════════════════════════════════════
const spritePos = {};
const spriteLogs = {};

function getSprite(id) { return document.getElementById(`sprite-${id}`); }

function scratchCmd(id, cmd) {
  const s = getSprite(id);
  if (!s) return;
  if (!spritePos[id]) spritePos[id] = { x: 40, y: 40 };
  const p = spritePos[id];
  const stage = document.getElementById(`stage-${id}`);
  const W = stage ? stage.clientWidth : 400;
  const H = stage ? stage.clientHeight : 210;
  const step = 8;

  switch(cmd) {
    case 'moveRight': p.x = Math.min(90, p.x + step); logCmd(id, '➡️ move right 10'); break;
    case 'moveLeft':  p.x = Math.max(2,  p.x - step); logCmd(id, '⬅️ move left 10'); break;
    case 'moveUp':    p.y = Math.max(2,  p.y - step); logCmd(id, '⬆️ move up 10'); break;
    case 'moveDown':  p.y = Math.min(85, p.y + step); logCmd(id, '⬇️ move down 10'); break;
    case 'say': {
      const speech = document.getElementById(`speech-${id}`);
      if (speech) { speech.textContent = 'Hello! 👋'; speech.style.display = 'block'; setTimeout(() => speech.style.display='none', 2000); }
      logCmd(id, '💬 say "Hello!"');
      break;
    }
  }
  s.style.left = p.x + '%';
  s.style.top  = p.y + '%';
}

function scratchReset(id) {
  const s = getSprite(id);
  if (s) { s.style.left = '40%'; s.style.top = '40%'; }
  spritePos[id] = { x: 40, y: 40 };
  const log = document.getElementById(`sequence-log-${id}`) || document.getElementById(`loop-log-${id}`) || document.getElementById(`cond-log-${id}`);
  if (log) log.textContent = '';
  spriteLogs[id] = [];
  const speech = document.getElementById(`speech-${id}`);
  if (speech) speech.style.display = 'none';
}

function logCmd(id, msg) {
  if (!spriteLogs[id]) spriteLogs[id] = [];
  spriteLogs[id].push(msg);
  const log = document.getElementById(`sequence-log-${id}`) || document.getElementById(`loop-log-${id}`) || document.getElementById(`cond-log-${id}`);
  if (log) log.textContent = spriteLogs[id].slice(-6).join('  →  ');
}

// ─── Loop builder ────────────────────────────────────
function runLoop(id) {
  const action = document.getElementById(`loopAction-${id}`)?.value;
  const count  = parseInt(document.getElementById(`loopCount-${id}`)?.value) || 3;
  const log    = document.getElementById(`loop-log-${id}`);
  const s      = getSprite(id);
  if (!s || !log) return;

  if (!spritePos[id]) spritePos[id] = { x: 40, y: 40 };
  log.textContent = `for i in range(${count}):  →  running...`;

  let step = 0;
  const interval = setInterval(() => {
    if (step >= count) { clearInterval(interval); log.textContent = `✓ Loop finished after ${count} iterations`; return; }
    const p = spritePos[id];
    if (action === 'spin') {
      const angle = (step / count) * 360;
      s.style.transform = `rotate(${angle}deg)`;
    } else if (action === 'bounce') {
      s.style.top = (step % 2 === 0 ? Math.max(5, p.y - 15) : p.y) + '%';
    } else if (action === 'blink') {
      s.style.opacity = step % 2 === 0 ? '0.2' : '1';
    }
    log.textContent = `Iteration ${step + 1} / ${count}  (i = ${step})`;
    step++;
  }, 400);
}

// ─── Conditions ──────────────────────────────────────
function runIfElse(id) {
  const input = document.getElementById(`ifInput-${id}`)?.value;
  const out   = document.getElementById(`if-output-${id}`);
  if (!out) return;
  const n = parseFloat(input);
  if (isNaN(n)) { out.textContent = '⚠️ Enter a number first'; return; }
  let result = '';
  if      (n > 100) result = `${n} > 100  →  ✅ if: "number is over 100"`;
  else if (n > 0)   result = `0 < ${n} ≤ 100  →  ✅ elif: "positive number"`;
  else if (n === 0) result = `${n} == 0  →  ✅ elif: "number is zero"`;
  else              result = `${n} < 0  →  ✅ else: "negative number"`;
  out.textContent = result;
}

function scratchCondCmd(id, cmd) {
  const s = getSprite(id);
  if (!s) return;
  if (!spritePos[id]) spritePos[id] = { x: 40, y: 40 };
  const log = document.getElementById(`cond-log-${id}`);
  if (cmd === 'right') {
    spritePos[id].x = Math.min(88, spritePos[id].x + 10);
    s.style.left = spritePos[id].x + '%';
    if (log) log.textContent = `→ Moved to x=${spritePos[id].x}%`;
  } else if (cmd === 'check') {
    const atEdge = spritePos[id].x >= 85;
    if (log) log.textContent = atEdge
      ? `if touching wall? TRUE → bounce! (x reset)`
      : `if touching wall? FALSE → nothing happens (x=${spritePos[id].x}%)`;
    if (atEdge) { spritePos[id].x = 20; s.style.left = '20%'; }
  }
}

// ─── Variable game (u3l4) ────────────────────────────
function buildVarGame(id) {
  const vars = { score: 0, lives: 3, level: 1, coins: 0 };
  const display = document.getElementById(`varGame-${id}`);
  const controls = document.getElementById(`varControls-${id}`);
  const log = document.getElementById(`var-log-${id}`);
  if (!display || !controls) return;

  function render() {
    display.innerHTML = Object.entries(vars).map(([k,v]) => `
      <div style="background:var(--warm);border:2px solid var(--border);border-radius:14px;padding:0.9rem 1rem;text-align:center">
        <div style="font-size:0.72rem;font-weight:800;text-transform:uppercase;letter-spacing:0.1em;color:var(--muted);margin-bottom:0.3rem">${k}</div>
        <div style="font-size:2rem;font-weight:800">${v}</div>
      </div>`).join('');
  }

  controls.innerHTML = `
    <button class="sb-btn sb-events" onclick="doVarAction('${id}','score',10,'score += 10')">+10 Score</button>
    <button class="sb-btn sb-motion" onclick="doVarAction('${id}','coins',1,'coins += 1')">+1 Coin 🪙</button>
    <button class="sb-btn sb-control" onclick="doVarAction('${id}','lives',-1,'lives -= 1')">-1 Life ❤️</button>
    <button class="sb-btn sb-looks" onclick="doVarAction('${id}','level',1,'level += 1')">Level Up ⬆️</button>
    <button class="sb-btn sb-events" onclick="resetVarGame('${id}')">Reset 🔄</button>`;

  window._varGameState = window._varGameState || {};
  window._varGameState[id] = vars;
  render();

  window.doVarAction = (id, key, delta, msg) => {
    const v = window._varGameState[id];
    v[key] = Math.max(0, v[key] + delta);
    if (log) log.textContent = `set ${key} to ${v[key]}  (${msg})`;
    render();
  };
  window.resetVarGame = (id) => {
    window._varGameState[id] = { score: 0, lives: 3, level: 1, coins: 0 };
    if (log) log.textContent = 'All variables reset to starting values';
    render();
  };
}

// ─── Events (u3l5) ───────────────────────────────────
function fireEvent(id, eventName) {
  const s   = getSprite(id);
  const log = document.getElementById(`event-log-${id}`);
  const speech = document.getElementById(`speech-${id}`);
  if (!s) return;
  if (!spritePos[id]) spritePos[id] = { x: 42, y: 38 };
  const p = spritePos[id];
  const reactions = {
    start: { move:[42,38], say:'🟢 Program started!', log:'when green flag clicked → go to start, say hello' },
    space: { move:[42,38], say:'⎵ Jump!', log:'when space pressed → jump animation' },
    click: { move:[p.x+5,p.y-5], say:'😺 Meow!', log:'when sprite clicked → say Meow' },
    left:  { move:[Math.max(5,p.x-10), p.y], say:null, log:'when left arrow pressed → move left 15 steps' },
    right: { move:[Math.min(85,p.x+10),p.y],  say:null, log:'when right arrow pressed → move right 15 steps' },
  };
  const r = reactions[eventName];
  if (!r) return;
  spritePos[id].x = r.move[0]; spritePos[id].y = r.move[1];
  s.style.left = r.move[0] + '%'; s.style.top = r.move[1] + '%';
  if (r.say && speech) { speech.textContent = r.say; speech.style.display='block'; setTimeout(()=>speech.style.display='none',1800); }
  if (log) log.textContent = `Event fired: ${r.log}`;
}

// ─── Catch game (u3l6) ───────────────────────────────
const catchState = {};

function initCatchGame(id) {
  const stage  = document.getElementById(`stage-${id}`);
  const star   = document.getElementById(`star-${id}`);
  const basket = document.getElementById(`basket-${id}`);
  if (!star || !basket) return;
  catchState[id] = { score: 0, running: false, starX: 45, starY: 5, basketX: 40, direction: 0, interval: null, moveInterval: null };
  star.style.left   = '45%'; star.style.top = '5%';
  basket.style.left = '40%';
}

function toggleCatchGame(id) {
  const cs  = catchState[id];
  const btn = document.getElementById(`gameBtn-${id}`);
  if (!cs) return;
  if (cs.running) {
    clearInterval(cs.interval);
    clearInterval(cs.moveInterval);
    cs.running = false;
    if (btn) btn.textContent = '▶ Start';
  } else {
    cs.running = true;
    if (btn) btn.textContent = '⏸ Pause';
    cs.interval = setInterval(() => tickCatch(id), 80);
  }
}

function tickCatch(id) {
  const cs     = catchState[id];
  const star   = document.getElementById(`star-${id}`);
  const basket = document.getElementById(`basket-${id}`);
  const scoreEl= document.getElementById(`score-${id}`);
  if (!star || !basket || !cs.running) return;

  cs.starY += 1.2;
  star.style.top = cs.starY + '%';

  // catch check
  const bx = cs.basketX;
  if (cs.starY >= 78 && cs.starY < 92 && cs.starX >= bx - 8 && cs.starX <= bx + 18) {
    cs.score++;
    if (scoreEl) scoreEl.textContent = `Score: ${cs.score}`;
    resetStar(id);
    return;
  }
  // missed
  if (cs.starY > 95) resetStar(id);
}

function resetStar(id) {
  const cs   = catchState[id];
  const star = document.getElementById(`star-${id}`);
  cs.starY = 3;
  cs.starX = Math.random() * 80 + 5;
  if (star) { star.style.top = '3%'; star.style.left = cs.starX + '%'; }
}

function startBasketMove(id, dir) {
  const cs = catchState[id];
  if (!cs) return;
  cs.direction = dir;
  clearInterval(cs.moveInterval);
  cs.moveInterval = setInterval(() => {
    const basket = document.getElementById(`basket-${id}`);
    if (!basket) return;
    cs.basketX = Math.max(0, Math.min(88, cs.basketX + dir * 3));
    basket.style.left = cs.basketX + '%';
  }, 40);
}

function stopBasketMove(id) {
  const cs = catchState[id];
  if (!cs) return;
  clearInterval(cs.moveInterval);
  cs.direction = 0;
}

// ═══════════════════════════════════════════════════════
//  PYTHON TERMINAL SIMULATOR
// ═══════════════════════════════════════════════════════
const termHistory = {};

function runPython(id) {
  const input = document.getElementById(`term-in-${id}`);
  const out   = document.getElementById(`term-out-${id}`);
  if (!input || !out) return;
  const code = input.value.trim();
  if (!code) return;
  input.value = '';

  if (!termHistory[id]) termHistory[id] = {};

  const result = evalPython(code, termHistory[id], id);
  const prev   = out.textContent;
  out.textContent = prev + '\n>>> ' + code + '\n' + result;
  out.scrollTop = out.scrollHeight;
  updateVarShelf(id, termHistory[id]);
}

function fillAndRun(id, code) {
  const input = document.getElementById(`term-in-${id}`);
  const decoded = code.replace(/\\n/g, '\n');
  if (input) input.value = decoded;
  runPython(id);
}

function clearTerm(id) {
  const out = document.getElementById(`term-out-${id}`);
  if (out) out.textContent = '>>> Terminal cleared. Ready.';
  termHistory[id] = {};
  updateVarShelf(id, {});
}

function updateVarShelf(id, ctx) {
  const keys = Object.keys(ctx);

  let shelf = document.getElementById(`var-shelf-${id}`);
  if (!shelf) {
    const termSim = document.querySelector(`#tab-try-${id} .term-sim`);
    if (!termSim) return;
    shelf = document.createElement('div');
    shelf.id = `var-shelf-${id}`;
    shelf.className = 'var-shelf';
    termSim.insertAdjacentElement('afterend', shelf);
  }

  if (keys.length === 0) { shelf.innerHTML = ''; return; }

  const TYPE_COLOUR = { int:'#8b35c8', float:'#2b7de3', str:'#1b9e5a', bool:'#e85d2f' };
  shelf.innerHTML = `
    <div class="var-shelf-label">📦 Variables in memory</div>
    <div class="var-shelf-jars">
      ${keys.map(k => {
        const v = ctx[k];
        const type = typeof v === 'boolean' ? 'bool'
                   : typeof v === 'number'  ? (Number.isInteger(v) ? 'int' : 'float')
                   : 'str';
        const col     = TYPE_COLOUR[type] || '#888';
        const display = typeof v === 'string' ? `"${v}"` : String(v);
        return `<div class="var-jar">
          <div class="var-jar-name">${k}</div>
          <div class="var-jar-val">${display}</div>
          <div class="var-jar-type" style="background:${col}22;color:${col};border-color:${col}55">${type}</div>
        </div>`;
      }).join('')}
    </div>`;
}

// Minimal Python evaluator for demo purposes
function evalPython(code, ctx, id) {
  try {
    // handle for i in range(...): print(...)
    const forMatch = code.match(/^for\s+(\w+)\s+in\s+range\(([^)]+)\)\s*:\s*(.+)$/);
    if (forMatch) {
      const varName = forMatch[1];
      const args    = forMatch[2].split(',').map(s => parseInt(s.trim()));
      const body    = forMatch[3].trim();
      let start=0, stop=args[0], step=1;
      if (args.length===2) { start=args[0]; stop=args[1]; }
      if (args.length===3) { start=args[0]; stop=args[1]; step=args[2]; }
      const lines = [];
      let safety = 0;
      for (let i=start; step>0?i<stop:i>stop; i+=step) {
        if (++safety > 50) { lines.push('...(truncated)'); break; }
        ctx[varName] = i;
        lines.push(evalPrint(body, ctx));
      }
      return lines.filter(Boolean).join('\n');
    }

    // assignment
    const assignMatch = code.match(/^(\w+)\s*=\s*(.+)$/);
    if (assignMatch && !code.includes('==')) {
      const key = assignMatch[1];
      let val = assignMatch[2].trim();
      // string
      if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
        ctx[key] = val.slice(1,-1);
      } else {
        // arithmetic with ctx vars
        try { ctx[key] = evalExpr(val, ctx); }
        catch(e) {
          // find the first unrecognised name to give a helpful error
          const undef = val.match(/\b([a-zA-Z_]\w*)\b/)?.[1];
          return `NameError: '${undef || val}' is not defined — did you set it first?`;
        }
      }
      return '';
    }

    // print()
    if (code.startsWith('print(')) return evalPrint(code, ctx);

    // type() standalone (without print)
    if (code.match(/^type\(\w+\)$/)) {
      const m = code.match(/type\((\w+)\)/);
      if (m) {
        if (ctx[m[1]] === undefined) return `NameError: '${m[1]}' is not defined — set it first`;
        const v = ctx[m[1]];
        const t = typeof v === 'number' ? (Number.isInteger(v) ? 'int' : 'float') : typeof v === 'boolean' ? 'bool' : 'str';
        return `<class '${t}'>`;
      }
    }

    // score grade demo (u4l4)
    const scoreTest = code.match(/^(\d+)$/);
    if (scoreTest && id === 'u4l4') {
      const n = parseInt(scoreTest[1]);
      if      (n >= 90) return `Grade A ⭐ — Outstanding!`;
      else if (n >= 70) return `Grade B 👍 — Well done!`;
      else if (n >= 50) return `Grade C 📚 — Keep studying!`;
      else if (n >= 0)  return `Grade D 💪 — Don't give up!`;
      return 'Invalid score';
    }

    return evalPrint(code, ctx);
  } catch(e) {
    return `Error: ${e.message}`;
  }
}

function evalPrint(code, ctx) {
  const m = code.match(/^print\((.+)\)$/s);
  if (!m) return '';
  let inner = m[1].trim();
  // f-string
  if ((inner.startsWith('f"') || inner.startsWith("f'"))) {
    const str = inner.slice(2,-1);
    return str.replace(/\{([^}]+)\}/g, (_, expr) => {
      try { return evalExpr(expr, ctx); } catch(e) { return `{${expr}}`; }
    });
  }
  // plain string
  if ((inner.startsWith('"') && inner.endsWith('"')) || (inner.startsWith("'") && inner.endsWith("'"))) {
    return inner.slice(1,-1);
  }
  // expression
  try { return String(evalExpr(inner, ctx)); } catch(e) { return inner; }
}

function evalExpr(expr, ctx) {
  // substitute ctx variables
  let e = expr.replace(/\b([a-zA-Z_]\w*)\b/g, (m) => {
    if (ctx[m] !== undefined) return JSON.stringify(ctx[m]);
    if (m === 'True') return 'true';
    if (m === 'False') return 'false';
    return m;
  });
  // type() — must resolve before JS eval since 'type' doesn't exist in JS
  const typeM = e.match(/^type\((.+)\)$/);
  if (typeM) {
    try {
      const val = Function(`"use strict"; return (${typeM[1]})`)();
      if (typeof val === 'boolean') return `<class 'bool'>`;
      if (typeof val === 'number')  return `<class '${Number.isInteger(val) ? 'int' : 'float'}'>`;
      return `<class 'str'>`;
    } catch(_) { return `<class 'unknown'>`; }
  }
  // ord/chr/bin/int/len
  e = e.replace(/ord\("(.)"\)/g, (_, c) => c.charCodeAt(0));
  e = e.replace(/chr\((\d+)\)/g, (_, n) => `"${String.fromCharCode(parseInt(n))}"`);
  e = e.replace(/bin\((\d+)\)/g, (_, n) => `"0b${parseInt(n).toString(2)}"`);
  e = e.replace(/int\(([^)]+)\)/g, (_, n) => `Math.trunc(${n})`);
  e = e.replace(/\*\*/g, '**'); // keep pow
  // eslint-disable-next-line no-new-func
  return Function(`"use strict"; return (${e})`)();
}

// ─── Input sims (u4l3) ───────────────────────────────
function buildInputSims(id) {
  const wrap = document.getElementById(`inputSims-${id}`);
  if (!wrap) return;
  wrap.innerHTML = `
    <div style="margin-bottom:1rem">
      <div style="font-size:0.85rem;font-weight:700;margin-bottom:0.4rem">Program 1: Greeting</div>
      <div class="term-sim">
        <div class="term-out" id="sim1out-${id}">What is your name? </div>
        <div class="term-in-row">
          <span class="term-prompt">>>></span>
          <input class="term-in" id="sim1in-${id}" placeholder="Type your name and press Enter"
            onkeydown="if(event.key==='Enter')runSim1('${id}')">
          <button class="term-run" onclick="runSim1('${id}')">Enter</button>
        </div>
      </div>
    </div>
    <div>
      <div style="font-size:0.85rem;font-weight:700;margin-bottom:0.4rem">Program 2: Age calculator</div>
      <div class="term-sim">
        <div class="term-out" id="sim2out-${id}">How old are you? </div>
        <div class="term-in-row">
          <span class="term-prompt">>>></span>
          <input class="term-in" id="sim2in-${id}" type="number" placeholder="Type your age"
            onkeydown="if(event.key==='Enter')runSim2('${id}')">
          <button class="term-run" onclick="runSim2('${id}')">Enter</button>
        </div>
      </div>
    </div>`;
}

function runSim1(id) {
  const input = document.getElementById(`sim1in-${id}`).value;
  const out   = document.getElementById(`sim1out-${id}`);
  if (!input) return;
  out.textContent += input + '\n' + `Hello, ${input}! Welcome to Python. 🐍`;
  document.getElementById(`sim1in-${id}`).disabled = true;
}

function runSim2(id) {
  const input = parseInt(document.getElementById(`sim2in-${id}`).value);
  const out   = document.getElementById(`sim2out-${id}`);
  if (isNaN(input)) { out.textContent += '⚠️ Please enter a number'; return; }
  out.textContent += input + '\nIn 10 years you\'ll be ' + (input + 10) + '\nIn 20 years you\'ll be ' + (input + 20);
  document.getElementById(`sim2in-${id}`).disabled = true;
}

// ─── Final guessing game (u4l6) ──────────────────────
function buildFinalGame(id) {
  const wrap = document.getElementById(`finalGame-${id}`);
  if (!wrap) return;
  const secret   = Math.floor(Math.random() * 50) + 1;
  let attempts   = 0;
  const maxTries = 5;

  function render(msg, done) {
    wrap.innerHTML = `
      <div class="term-sim">
        <div class="term-out" id="fg-out-${id}" style="min-height:80px">${msg}</div>
        ${!done ? `
        <div class="term-in-row">
          <span class="term-prompt">>>></span>
          <input class="term-in" id="fg-in-${id}" type="number" min="1" max="50" placeholder="Your guess (1–50)"
            onkeydown="if(event.key==='Enter')doGuess()">
          <button class="term-run" onclick="doGuess()">Guess</button>
        </div>` : `<button class="btn btn-outline btn-sm" style="margin-top:0.7rem" onclick="buildFinalGame('${id}')">Play again 🔄</button>`}
      </div>`;
  }

  render(`🎮 Guess the number between 1 and 50!\nYou have ${maxTries} attempts.`, false);

  window.doGuess = () => {
    const input = document.getElementById(`fg-in-${id}`);
    const out   = document.getElementById(`fg-out-${id}`);
    if (!input || !out) return;
    const guess = parseInt(input.value);
    if (isNaN(guess) || guess < 1 || guess > 50) { out.textContent += '\n⚠️ Enter a number between 1 and 50'; return; }
    input.value = '';
    attempts++;
    if (guess === secret) {
      const stars = '⭐'.repeat(Math.max(1, maxTries - attempts + 1));
      render(`🎉 Correct! The number was ${secret}.\nYou got it in ${attempts} attempt${attempts>1?'s':''}!\nScore: ${stars}`, true);
    } else if (attempts >= maxTries) {
      render(`💀 Out of attempts!\nThe number was ${secret}.\nBetter luck next time!`, true);
    } else {
      const hint = guess < secret ? '⬆️ Higher!' : '⬇️ Lower!';
      out.textContent += `\nAttempt ${attempts}/${maxTries}: ${guess} → ${hint}`;
    }
  };
}

// ═══════════════════════════════════════════════════════
//  HOME SCREEN
// ═══════════════════════════════════════════════════════
function buildHome() {
  const mc = document.getElementById('mainContent');
  mc.innerHTML = `
    <div class="screen active" id="homeScreen">
      <div class="home-hero">
        <h1>Oxford Computing<br><span>Book 7</span> — Interactive</h1>
        <p>Every lesson from class, brought to life with stories, activities and real code. Dyslexia-friendly. Works on iPad and desktop.</p>
      </div>
      <div class="units-grid">
        ${UNITS_DATA.map((u, i) => `
          <div class="unit-card" onclick="goLesson('${u.lessons[0].id}')">
            <div class="unit-card-stripe" style="background:${u.color}"></div>
            <span class="unit-card-num" style="background:${u.bg};color:${u.color}">Unit ${i+1}</span>
            <h3>${u.title}</h3>
            <p>${u.desc}</p>
            <p style="font-size:0.78rem;color:var(--muted);margin-top:0.5rem">${u.lessons.length} lessons</p>
          </div>`).join('')}
        <div class="unit-card locked">
          <div class="unit-card-stripe" style="background:#d4860a"></div>
          <span class="unit-card-num" style="background:#fef3e2;color:#d4860a">Unit 5</span>
          <h3>Spreadsheets</h3>
          <p>Formulas, charts and data analysis</p>
          <p class="locked-label">🔒 Coming soon</p>
        </div>
        <div class="unit-card locked">
          <div class="unit-card-stripe" style="background:#c02060"></div>
          <span class="unit-card-num" style="background:#fce8f3;color:#c02060">Unit 6</span>
          <h3>Podcast Project</h3>
          <p>Plan, record and produce a podcast</p>
          <p class="locked-label">🔒 Coming soon</p>
        </div>
      </div>
    </div>`;
}

// ═══════════════════════════════════════════════════════
//  INIT
// ═══════════════════════════════════════════════════════
async function initApp() {
  await loadProgress();
  buildSidebar();
  buildHome();
  updateProgressPill();
}

document.addEventListener('DOMContentLoaded', () => {
  // keyboard left/right navigation (always active)
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') { closeGlossary(); return; }
    if (!currentLesson) return;
    const tag = document.activeElement?.tagName;
    if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT') return;
    if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
      const all = UNITS_DATA.flatMap(u => u.lessons);
      const idx = all.indexOf(currentLesson);
      if (e.key === 'ArrowRight' && idx < all.length-1) goLesson(all[idx+1].id);
      if (e.key === 'ArrowLeft'  && idx > 0)            goLesson(all[idx-1].id);
    }
  });
  // Boot auth — this will call initApp() once logged in
  authBoot();
});
