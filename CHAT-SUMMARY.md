# CS7 Learning App — Chat Summary
> Session date: March–April 2026  
> Built with: Claude (Sonnet 4.6) via claude.ai  
> Location: `/Users/tradiespassport/Projects/cs7-learning-app/`

---

## 🎯 Goal

Build an interactive web app covering the **Oxford International Lower Secondary Computing Book 7** curriculum for an 11-year-old student at PASCAL English School (Lemesos, Cyprus).

### Why it was needed
- Class does the curriculum **pen and paper only** — no computers
- Student has **dyslexia** — struggles with long text, definitions, written tests
- Goal: make every concept visual, interactive, and story-driven
- Target devices: **iPad + Windows PC** (VS Code terminal alongside)

---

## 📐 Scope

All **6 units, 6 lessons each = 36 lessons total.**  
Units 1–4 were built first (class was on Unit 4). Units 5 & 6 added in a follow-up session from curriculum knowledge.

---

## 📁 Files

All files at `/Users/tradiespassport/Projects/cs7-learning-app/`

| File | Purpose |
|------|---------|
| `index.html` | App shell — loads all scripts, auth screen, header, sidebar, content area |
| `style.css` | Full dyslexia-first design system + auth screen styles |
| `supabase-config.js` | Supabase client initialisation (public anon key only — safe to commit) |
| `auth.js` | Login, signup, session management, logout |
| `unit1.js` | Unit 1 data — Digital Data (6 lessons) |
| `unit2.js` | Unit 2 data — Staying Safe Online (6 lessons) |
| `unit3.js` | Unit 3 data — Scratch Programming (6 lessons) |
| `unit4.js` | Unit 4 data — Python Programming (6 lessons) |
| `unit5.js` | Unit 5 data — Spreadsheets (6 lessons) |
| `unit6.js` | Unit 6 data — Creating a Podcast (6 lessons) |
| `lessons.js` | Shared engine — renders lessons, all interactives, test engine, progress |
| `CHAT-SUMMARY.md` | This file |

**To open:** Double-click `index.html` in Finder. No server needed (loads Supabase via CDN).

---

## 🎨 Design System (`style.css`)

Dyslexia-first throughout:

- **Lexend font** — engineered to reduce visual crowding
- **Warm cream background** `#faf6ef` — never pure white
- **Line height 1.9, letter-spacing 0.014em**
- **Colour-coded units** — memory anchors without reading
  - Unit 1: `#e85d2f` orange-red
  - Unit 2: `#2b7de3` blue
  - Unit 3: `#1b9e5a` green
  - Unit 4: `#8b35c8` purple
  - Unit 5: `#d4860a` amber
  - Unit 6: `#c02060` magenta
- **52px minimum tap targets** — iPad-friendly
- **No underlining, always left-aligned**
- **`🎬 PICTURE THIS` story boxes** — gold-bordered, the primary teaching mechanism
- **Fira Code** for all code panels
- **Dark code panels** `#1c1a2e` with syntax highlighting

---

## 🏗️ Architecture

```
index.html
├── supabase-config.js  →  initialises Supabase client as `sb`
├── auth.js             →  authBoot() → doLogin() / doSignup() / doLogout()
├── unit1.js  →  window.UNIT1 = { id, color, bg, title, desc, lessons:[...] }
├── unit2.js  →  window.UNIT2
├── unit3.js  →  window.UNIT3
├── unit4.js  →  window.UNIT4
├── unit5.js  →  window.UNIT5  (+ U5 helper functions appended)
├── unit6.js  →  window.UNIT6  (+ U6 helper functions appended)
└── lessons.js
    ├── UNITS_DATA = [UNIT1, UNIT2, UNIT3, UNIT4, UNIT5, UNIT6]
    ├── initApp()        ← called by auth.js after login; loads progress then builds UI
    ├── loadProgress()   ← fetches completed lessons from Supabase
    ├── markDone(id)     ← saves completed lesson to Supabase progress table
    ├── buildSidebar() / buildHome()
    ├── goLesson(id) / goHome()
    ├── renderLesson(lesson, unit)
    ├── switchTab(btn, tab, lessonId)
    ├── renderTest(lesson, unit)
    ├── answerQuestion() / showScore() / retryTest()
    ├── initInteractives(lessonId)   ← dispatches to all activity builders
    ├── [all shared activity functions]
    └── evalPython()   ← in-browser mini Python evaluator
```

**Progress** saved to Supabase `progress` table per user (one row per completed lesson). In-memory `done` object acts as cache.  
**Auth** — Supabase Auth with nickname + password. Email stored internally as `nickname@cs7app.local` — no real email collected.  
**Keyboard nav** — left/right arrows move between lessons.

---

## 📖 Unit 1 — Digital Data
**Colour:** `#e85d2f` | **6 lessons**

| # | Lesson | Story Analogy |
|---|--------|--------------|
| 1.1 | What is Digital Data? | Water tap (analogue, smooth) vs light switch (digital, on/off only) |
| 1.2 | Binary Numbers | 8 labelled light switches — flipping ON adds its value; 64+1=65='A' |
| 1.3 | How Computers Store Data | RAM = desk (fast, clears when you sleep); Storage = bookshelf (permanent) |
| 1.4 | Data Sizes | Envelope → small bag → backpack → suitcase → shipping container |
| 1.5 | Pixels and Images | Mosaic tiles — smooth from far, coloured squares up close |
| 1.6 | How Sound is Stored | Dot-stamping a wave — 8 stamps = blocky; 44,100/sec = smooth |

**Interactives:** Analogue/digital sort · Bit toggle calculator · RAM vs Storage sort · File size match game · 16×16 pixel painter · Wave sample slider  
**Code topics:** `ord()` `chr()` `bin()` `int()` `os.path.getsize()` file read/write

---

## 📖 Unit 2 — Staying Safe Online
**Colour:** `#2b7de3` | **6 lessons**

| # | Lesson | Story Analogy |
|---|--------|--------------|
| 2.1 | Safe and Unsafe Sharing | Footprints in snow — every step leaves a trace you can't fully erase |
| 2.2 | Passwords and Security | Combination lock — 12-char password has more combos than grains of sand on Earth |
| 2.3 | Phishing and Scams | Person in a police costume at your door — looks official, it's a costume |
| 2.4 | Cyberbullying | Follows you home — no escape at bedtime or weekends unlike face-to-face |
| 2.5 | Copyright and Ownership | 3 months designing a logo, someone prints it on T-shirts without asking |
| 2.6 | Evaluating Websites | Giant noticeboard — anyone can pin papers, expert or not |

**Interactives:** Share/don't share scenarios · Password strength meter (live) · Phishing spotter · Cyberbullying response game · Copyright legal/illegal game · Website reliability game  
**Code topics:** `socket` `platform` `hashlib.sha256` `urlparse` content filter concept

---

## 📖 Unit 3 — Scratch Programming
**Colour:** `#1b9e5a` | **6 lessons**

| # | Lesson | Story Analogy |
|---|--------|--------------|
| 3.1 | Sequences | Giving directions — skip step 2 and you end up in the wrong place |
| 3.2 | Loops | Repeat button vs pressing play 100 times; "20 push-ups" (for) vs "until whistle" (while) |
| 3.3 | Conditions (if/else) | Funfair bouncer — "if over 18 let them in, otherwise turn away" |
| 3.4 | Variables | Row of labelled jars on a shelf — name on outside, value inside, contents can change |
| 3.5 | Events | Hotel receptionist — waits, reacts to buzzer/phone/parcel differently each time |
| 3.6 | Scratch Project | Catch-the-falling-star game using all 5 concepts |

**Interactives:** Live Scratch stage (tap blocks to move cat) · Loop builder with count · If-else number machine · Wall-bounce condition demo · Variable dashboard (4 live jars) · Event listener demo · Catch game (falling star, left/right buttons)  
**Code topics:** Sequences, for loops, while loops, if/elif/else, variables, event-driven input

---

## 📖 Unit 4 — Python Programming
**Colour:** `#8b35c8` | **6 lessons**

| # | Lesson | Story Analogy |
|---|--------|--------------|
| 4.1 | Your First Python Program | Loudspeaker microphone — `print()` speaks your text to the screen |
| 4.2 | Variables in Python | Row of jars on a kitchen shelf — label stays, contents can change |
| 4.3 | Input and Output | Vending machine — shows menu, waits for choice, processes it, gives output |
| 4.4 | Conditions in Python | Funfair rollercoaster height check — if ≥140cm: ride; else: "come back taller" |
| 4.5 | Loops in Python | "20 push-ups" (for — count known); "until whistle" (while — count unknown) |
| 4.6 | Python Project | Complete number guessing game using all 6 concepts |

**Interactives:** In-browser Python terminal simulator · Variable explorer · Two input() simulators (greeting + age calc) · If-chain builder (enter score, see grade) · Loop simulator with quick-fill buttons · Full playable number guessing game  
**Code topics:** `print()` f-strings, variables, `input()` `int()`, if/elif/else, for/while loops, `random.randint()`

---

## 📖 Unit 5 — Spreadsheets
**Colour:** `#d4860a` | **6 lessons**

| # | Lesson | Story Analogy |
|---|--------|--------------|
| 5.1 | What is a Spreadsheet? | Old accountant's ledger — alive. Change one number, every formula recalculates in milliseconds automatically |
| 5.2 | Formulas and Functions | Recipe card pinned to a cell — runs automatically every time the ingredients change |
| 5.3 | Organising Data | Library books in random order (useless) vs sorted alphabetically (find anything in seconds) |
| 5.4 | Charts and Graphs | Weather report as a number list vs a bar chart — bar chart understood in one second, no reading required |
| 5.5 | Analysing Data | School canteen 180,000 rows of data — useless noise until you ask it questions with formulas |
| 5.6 | Spreadsheet Project | Tuck shop manager: track sales, calculate revenue, spot best seller, present to headteacher with chart |

**Key concepts per lesson:**
- **5.1** — Cells, cell addresses (B3 = column B row 3), text/numbers/formulas, `=` prefix
- **5.2** — `=SUM()` `=AVERAGE()` `=MAX()` `=MIN()` `=COUNT()` `=IF()`, ranges (B2:B10)
- **5.3** — Sorting (A-Z, high-low), filtering (hide non-matching rows), conditional formatting (cells change colour by value)
- **5.4** — Bar chart (compare categories), line chart (change over time), pie chart (parts of whole), scatter chart (two variables)
- **5.5** — Mean, max/min, COUNTIF, percentage formula (=part/total*100), trend analysis via line chart
- **5.6** — Full project: data entry + formulas + sort/filter + chart + 3-sentence written analysis

**Interactives:**
- **5.1** — Clickable spreadsheet grid, tap formula cells to reveal what's inside
- **5.2** — Function match game (name → what it does) + live formula calculator (type numbers, see SUM/AVG/MAX/MIN update)
- **5.3** — Sort scores highest-to-lowest drag activity
- **5.4** — Chart type match game + live editable bar chart
- **5.5** — Data analysis Q&A game (look at dataset, answer questions)
- **5.6** — Live tuck shop spreadsheet (edit sales, watch totals/chart update)

**Code topics:** Lists of lists as grids, `sum()` `max()` `min()` `len()`, sorting with `key=lambda`, filtering with list comprehension, `matplotlib` bar chart, `openpyxl` concept

**Helper functions in `unit5.js`:**
- `showFormula(formula, result)` — reveals formula when cell tapped
- `checkScoreSort(id)` — validates highest-to-lowest order
- `buildFormulaCalc(id)` — live SUM/AVG/MAX/MIN calculator
- `buildBarChart(id)` — editable live bar chart SVG
- `buildAnalysisGame(id)` — Q&A game on canteen dataset
- `buildTuckShop(id)` — interactive tuck shop tracker

---

## 📖 Unit 6 — Creating a Podcast
**Colour:** `#c02060` | **6 lessons**

| # | Lesson | Story Analogy |
|---|--------|--------------|
| 6.1 | What is a Podcast? | Radio show you love — but it only broadcasts at 7am Tuesday. Miss it and it's gone. A podcast is that same show, online, playable at 11pm Saturday in bed |
| 6.2 | Planning Your Podcast | Two space podcasts: "Space Facts" (random topics) vs "Space Explained in 5 Minutes" (one question, answered perfectly, every episode). Second wins — specificity beats generality |
| 6.3 | Recording Audio | Microphone captures everything — traffic, fan hum, chair creak. A wardrobe full of clothes does almost the same job as £1000 acoustic foam panels |
| 6.4 | Editing Audio | Raw 45-min cooking video → 8-min polished YouTube video. Same dish, completely different audience experience. Editing is where podcasts are made |
| 6.5 | Publishing Your Podcast | Baking a brilliant cake sitting in your kitchen. Upload to hosting = put it in the café. Submit RSS = tell every food magazine it exists |
| 6.6 | Your Podcast Project | Every major podcast — BBC or bedroom — goes through the same 5 stages. The tools are free. The platform is global. All you need is your voice and something worth saying |

**Key concepts per lesson:**
- **6.1** — Podcast definition, MP3 format, RSS feed (XML file apps check for new episodes), how to subscribe, what makes good content
- **6.2** — Defining audience + purpose, script vs outline, episode structure: Hook → Intro → Main Content (3 sections) → Summary → Outro
- **6.3** — Equipment (USB mic or phone earphones), recording environment (soft furnishings absorb echo), noise reduction checklist, recording levels (-12dB to -6dB target), clipping, test recording before real take, mic position (10–15cm, slightly to side)
- **6.4** — Editing workflow in Audacity (free), cut/fade/normalise/compress/noise reduction, royalty-free music (Pixabay Audio, Free Music Archive, YouTube Audio Library), copyright applies to podcasts
- **6.5** — Export to MP3, hosting platforms (Anchor, Buzzsprout, Podbean), what to include (title, description, artwork 1400×1400px min, category), submitting RSS to Spotify + Apple Podcasts, analytics (downloads, geography, drop-off)
- **6.6** — Full project brief: 3–5 min episode, own topic, Audacity, royalty-free music, edited MP3 output, assessment checklist

**Interactives:**
- **6.1** — Podcast vs Live Radio sort game
- **6.2** — Episode structure order game (drag Hook/Intro/Content/Summary/Outro into correct order)
- **6.3** — Pre-recording checklist (8 items to tick before pressing record)
- **6.4** — Editing decisions game (4 scenarios, choose best action)
- **6.5** — Pre-publish checklist (8 items including artwork, copyright, RSS submission)
- **6.6** — Interactive episode planner (fill in title/hook/3 points → generates formatted plan)

**Code topics:** RSS XML structure, `wave` module (read audio file info), `pydub` (cut/fade/normalise/export MP3), episode validator script, production checklist tracker

**Helper functions in `unit6.js`:**
- `buildRecordingChecklist(id)` — 8-item tick-off before recording
- `buildPublishChecklist(id)` — 8-item publish readiness checklist
- `tickChecklist(id, idx, checked)` — shared checker for both lists
- `checkPodcastOrder(id)` — validates episode structure order
- `buildEditGame(id)` / `showEditScenario(id)` / `answerEdit(id, chose)` — editing decisions game
- `buildPodcastPlanner(id)` / `generatePlan(id)` — episode plan generator

---

## ✏️ Test Engine (all 36 lessons)

Every lesson has **4 multiple choice questions:**
- Colour-coded feedback (green correct / red wrong)
- Correct answer always shown even if wrong picked
- Detailed explanation after every answer
- Animated score bar at the end
- Perfect score auto-marks lesson as done ✓
- Retry button resets fully

---

## 💻 Code Tab (all 36 lessons)

Every lesson has a Code tab with:
- Syntax-highlighted Python (or XML for 6.1) in dark panel
- Matching Windows terminal panel showing how to run it
- `Ctrl + `` ` reminder to open VS Code terminal
- Connects lesson concept to real runnable code

---

## ➕ How to Add Future Units

If Oxford Book 7 ever expands or a new unit is needed:

1. Create `unit7.js` with `window.UNIT7 = { id:'u7', color:'#hex', bg:'#hex', title:'...', desc:'...', lessons:[...] }`
2. Add `<script src="unit7.js"></script>` to `index.html` before `lessons.js`
3. Add `window.UNIT7` to the `UNITS_DATA` array in `lessons.js`
4. Add any new interactive builder functions to `unit7.js` or `lessons.js`
5. Add new sort items to `SORT_ITEMS` and match pairs to `MATCH_PAIRS` in `lessons.js` if needed
6. The sidebar, home screen, and progress pill (now showing `/42 done`) update automatically

---

## 🚀 To Open

```bash
# Double-click in Finder:
/Users/tradiespassport/Projects/cs7-learning-app/index.html

# Or drag into Chrome / Safari
# No localhost or server needed — pure HTML/CSS/JS
```

---

## 📋 Lesson Data Structure Reference

Each lesson object in any unit file follows this exact shape — useful for Claude CLI when building new lessons:

```js
{
  id: 'u5l3',          // unit number + lesson number, no spaces
  emoji: '🗂️',         // single emoji for sidebar + tag
  title: 'Organising Data',
  intro: 'One or two sentences shown under the title. Sets context.',
  learn: `             // HTML string — learn tab content
    <div class="learn-block">
      <h3>Heading with emoji</h3>
      <p>Explanation. Use <span class="kt">key term</span> for terms.</p>
      <div class="story-box">
        <p>The PICTURE THIS analogy. Be vivid and concrete.</p>
      </div>
      <div class="fact-row">
        <span class="fact-chip">Fact 1</span>
        <span class="fact-chip">Fact 2</span>
      </div>
    </div>`,
  interactive: `       // HTML string — try it tab content
    <div class="interactive-wrap">
      <div class="i-label">ACTIVITY NAME</div>
      <p>Instructions...</p>
      <!-- activity HTML here -->
    </div>`,
  code: `              // HTML string — code tab content
    <div class="code-panel">
      <div class="code-top">...</div>
      <pre class="cb"><!-- syntax highlighted code --></pre>
    </div>`,
  questions: [         // exactly 4 questions
    {
      q: 'Question text?',
      opts: ['Option A', 'Option B', 'Option C', 'Option D'],
      ans: 0,          // 0-indexed correct answer
      why: 'Explanation shown after answering.'
    },
    // ... 3 more
  ]
}
```

---

## 🎨 CSS Class Reference (for Claude CLI)

| Class | Use |
|-------|-----|
| `.learn-block` | White bordered card for learn tab content |
| `.story-box` | Gold bordered "PICTURE THIS" analogy box |
| `.kt` | Inline key term highlight (gold background) |
| `.fact-chip` | Small warm badge for facts/stats |
| `.fact-row` | Flex container for fact-chips |
| `.interactive-wrap` | White bordered card for activity content |
| `.i-label` | Small uppercase label above activity |
| `.inline-fb` | Feedback div — add class `show ok` or `show bad` |
| `.scenario-bubble` | Blue chat-bubble style scenario text |
| `.choice-btn` | Answer button for scenario games |
| `.sort-chip` | Draggable/tappable item chip |
| `.drop-items` | Zone for dropped chips |
| `.sort-zone` | Dashed bordered drop zone |
| `.two-col` | Two-column grid (collapses to 1 col on mobile) |
| `.code-panel` | Dark `#1c1a2e` code block wrapper |
| `.bash-panel` | Dark `#0d1117` terminal block wrapper |
| `.term-sim` | Dark terminal simulator (Python interactive) |
| `.scratch-stage` | Blue sky area for sprite activities |
| `.sprite` | Positioned emoji sprite inside stage |
| `.sb-btn` | Scratch block button — combine with `.sb-motion` `.sb-looks` `.sb-control` `.sb-events` |

**Syntax highlighting classes inside `<pre class="cb">`:**

| Class | Colour | Use |
|-------|--------|-----|
| `.ck` | purple | keywords: `if` `for` `while` `def` `import` |
| `.cs` | green | strings |
| `.cn` | orange | numbers |
| `.cf` | blue | function names |
| `.co` | cyan | operators |
| `.cv` | yellow | variable names |
| `.cc` | grey italic | comments |
