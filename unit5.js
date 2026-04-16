// ═══════════════════════════════════════════════════════
//  UNIT 5 — SPREADSHEETS
//  Oxford Book 7 — Using spreadsheet software to organise,
//  calculate, and visualise data
// ═══════════════════════════════════════════════════════

window.UNIT5 = {
  id: 'u5', color: '#d4860a', bg: '#fef3e2',
  title: 'Spreadsheets',
  desc: 'Formulas, functions, charts and data analysis',
  lessons: [

    // ─────────────────────────────────────────────
    // 5.1  WHAT IS A SPREADSHEET?
    // ─────────────────────────────────────────────
    {
      id: 'u5l1', emoji: '📊', title: 'What is a Spreadsheet?',
      intro: 'A spreadsheet is a grid that lets you store, organise and calculate data. Once you set up a formula, it recalculates instantly whenever data changes.',
      learn: `
        <div class="learn-block">
          <h3>📊 The grid</h3>
          <p>A spreadsheet is made of <span class="kt">cells</span> arranged in <strong>columns</strong> (A, B, C…) and <strong>rows</strong> (1, 2, 3…). Every cell has an address — like <strong>B3</strong> (column B, row 3).</p>
          <div class="story-box">
            <p>Imagine a huge accountant's ledger — thousands of boxes arranged in a perfect grid. In the old days, an accountant would fill in every box by hand, then manually add them all up with a calculator. Change one number? Start again.<br><br>
            A spreadsheet is that same grid, but <strong>alive</strong>. You type a formula once: <code>=B2+B3+B4</code>. The computer calculates the answer instantly. Change any number in B2, B3 or B4 — the total updates itself in under a millisecond, automatically. No calculator needed, ever again.</p>
          </div>
        </div>
        <div class="learn-block">
          <h3>🔢 Three types of cell content</h3>
          <p><span class="kt">Text</span> — labels like "Name" or "Monday". <span class="kt">Numbers</span> — values like 42 or 3.14. <span class="kt">Formulas</span> — calculations that start with <strong>=</strong> and produce a result.</p>
          <div class="fact-row">
            <span class="fact-chip">Text = labels</span>
            <span class="fact-chip">Numbers = data</span>
            <span class="fact-chip">= Formulas = calculations</span>
          </div>
        </div>
        <div class="learn-block">
          <h3>📍 Cell references</h3>
          <p>Instead of typing numbers into formulas, you reference the <strong>cell address</strong>. So <code>=A1+A2</code> adds whatever is in A1 and A2. If you change A1, the formula result updates automatically — that's the power of spreadsheets.</p>
        </div>
      `,
      interactive: `
        <div class="interactive-wrap">
          <div class="i-label">📊 MINI SPREADSHEET — click a formula cell to see how it works</div>
          <p style="font-size:0.93rem;margin-bottom:0.9rem">This is a simple class scores spreadsheet. The yellow cells contain formulas — tap one to see what's inside!</p>
          <div style="overflow-x:auto">
            <table style="border-collapse:collapse;width:100%;font-size:0.88rem;font-family:'Lexend',sans-serif">
              <tr style="background:var(--warm);font-weight:700">
                <td style="padding:0.5rem 0.7rem;border:1.5px solid var(--border);color:var(--muted);width:36px"></td>
                <td style="padding:0.5rem 0.7rem;border:1.5px solid var(--border)">A</td>
                <td style="padding:0.5rem 0.7rem;border:1.5px solid var(--border)">B</td>
                <td style="padding:0.5rem 0.7rem;border:1.5px solid var(--border)">C</td>
                <td style="padding:0.5rem 0.7rem;border:1.5px solid var(--border)">D</td>
              </tr>
              <tr>
                <td style="padding:0.5rem 0.7rem;border:1.5px solid var(--border);background:var(--warm);font-weight:700;text-align:center">1</td>
                <td style="padding:0.5rem 0.7rem;border:1.5px solid var(--border);font-weight:700">Name</td>
                <td style="padding:0.5rem 0.7rem;border:1.5px solid var(--border);font-weight:700">Test 1</td>
                <td style="padding:0.5rem 0.7rem;border:1.5px solid var(--border);font-weight:700">Test 2</td>
                <td style="padding:0.5rem 0.7rem;border:1.5px solid var(--border);font-weight:700">Average</td>
              </tr>
              <tr>
                <td style="padding:0.5rem 0.7rem;border:1.5px solid var(--border);background:var(--warm);font-weight:700;text-align:center">2</td>
                <td style="padding:0.5rem 0.7rem;border:1.5px solid var(--border)">Jake</td>
                <td style="padding:0.5rem 0.7rem;border:1.5px solid var(--border)">78</td>
                <td style="padding:0.5rem 0.7rem;border:1.5px solid var(--border)">84</td>
                <td style="padding:0.5rem 0.7rem;border:1.5px solid var(--border);background:#fff8dd;cursor:pointer;font-weight:700;color:#b87000" onclick="showFormula('=AVERAGE(B2,C2)','81')">81 ✨</td>
              </tr>
              <tr>
                <td style="padding:0.5rem 0.7rem;border:1.5px solid var(--border);background:var(--warm);font-weight:700;text-align:center">3</td>
                <td style="padding:0.5rem 0.7rem;border:1.5px solid var(--border)">Sara</td>
                <td style="padding:0.5rem 0.7rem;border:1.5px solid var(--border)">92</td>
                <td style="padding:0.5rem 0.7rem;border:1.5px solid var(--border)">88</td>
                <td style="padding:0.5rem 0.7rem;border:1.5px solid var(--border);background:#fff8dd;cursor:pointer;font-weight:700;color:#b87000" onclick="showFormula('=AVERAGE(B3,C3)','90')">90 ✨</td>
              </tr>
              <tr>
                <td style="padding:0.5rem 0.7rem;border:1.5px solid var(--border);background:var(--warm);font-weight:700;text-align:center">4</td>
                <td style="padding:0.5rem 0.7rem;border:1.5px solid var(--border)">Tom</td>
                <td style="padding:0.5rem 0.7rem;border:1.5px solid var(--border)">65</td>
                <td style="padding:0.5rem 0.7rem;border:1.5px solid var(--border)">70</td>
                <td style="padding:0.5rem 0.7rem;border:1.5px solid var(--border);background:#fff8dd;cursor:pointer;font-weight:700;color:#b87000" onclick="showFormula('=AVERAGE(B4,C4)','67.5')">67.5 ✨</td>
              </tr>
              <tr>
                <td style="padding:0.5rem 0.7rem;border:1.5px solid var(--border);background:var(--warm);font-weight:700;text-align:center">5</td>
                <td style="padding:0.5rem 0.7rem;border:1.5px solid var(--border);font-weight:700">Class avg</td>
                <td style="padding:0.5rem 0.7rem;border:1.5px solid var(--border);background:#fff8dd;cursor:pointer;font-weight:700;color:#b87000" onclick="showFormula('=AVERAGE(B2:B4)','78.3')">78.3 ✨</td>
                <td style="padding:0.5rem 0.7rem;border:1.5px solid var(--border);background:#fff8dd;cursor:pointer;font-weight:700;color:#b87000" onclick="showFormula('=AVERAGE(C2:C4)','80.7')">80.7 ✨</td>
                <td style="padding:0.5rem 0.7rem;border:1.5px solid var(--border)"></td>
              </tr>
            </table>
          </div>
          <div class="inline-fb" id="formula-reveal" style="margin-top:0.8rem"></div>
        </div>
      `,
      code: `
        <div class="learn-block">
          <h3>💻 Spreadsheets meet Python</h3>
          <p>Python can read and write spreadsheets using a library called <code>openpyxl</code>. This is how data scientists and businesses automate their spreadsheet work.</p>
        </div>
        <div class="code-panel">
          <div class="code-top"><div class="c-dots"><div class="c-dot" style="background:#ff5f56"></div><div class="c-dot" style="background:#ffbd2e"></div><div class="c-dot" style="background:#27c93f"></div></div><span class="code-lbl">python3 — spreadsheet concepts in code</span></div>
          <pre class="cb"><span class="cc"># A spreadsheet in Python is just a grid of lists</span>
<span class="cv">scores</span> <span class="co">=</span> [
    [<span class="cs">"Name"</span>,  <span class="cs">"Test1"</span>, <span class="cs">"Test2"</span>],
    [<span class="cs">"Jake"</span>,  <span class="cn">78</span>,      <span class="cn">84</span>],
    [<span class="cs">"Sara"</span>,  <span class="cn">92</span>,      <span class="cn">88</span>],
    [<span class="cs">"Tom"</span>,   <span class="cn">65</span>,      <span class="cn">70</span>],
]

<span class="cc"># Calculate averages — same as =AVERAGE(B2,C2) in a spreadsheet</span>
<span class="ck">for</span> <span class="cv">row</span> <span class="ck">in</span> <span class="cv">scores</span>[<span class="cn">1</span>:]:   <span class="cc"># skip header row</span>
    <span class="cv">name</span>  <span class="co">=</span> <span class="cv">row</span>[<span class="cn">0</span>]
    <span class="cv">avg</span>   <span class="co">=</span> (<span class="cv">row</span>[<span class="cn">1</span>] <span class="co">+</span> <span class="cv">row</span>[<span class="cn">2</span>]) <span class="co">/</span> <span class="cn">2</span>
    <span class="cf">print</span>(<span class="cs">f"</span><span class="cv">{name}</span><span class="cs">: average = </span><span class="cv">{avg}</span><span class="cs">"</span>)

<span class="cc"># SUM of all Test 1 scores — same as =SUM(B2:B4)</span>
<span class="cv">test1_total</span> <span class="co">=</span> <span class="cf">sum</span>(<span class="cv">row</span>[<span class="cn">1</span>] <span class="ck">for</span> <span class="cv">row</span> <span class="ck">in</span> <span class="cv">scores</span>[<span class="cn">1</span>:])
<span class="cf">print</span>(<span class="cs">f"Test 1 total: </span><span class="cv">{test1_total}</span><span class="cs">"</span>)    <span class="cc"># → 235</span>
<span class="cf">print</span>(<span class="cs">f"Class average: </span><span class="cv">{test1_total/3:.1f}</span><span class="cs">"</span>) <span class="cc"># → 78.3</span></pre>
        </div>
        <div class="bash-panel">
          <div class="bash-top"><div class="c-dots"><div class="c-dot" style="background:#ff5f56"></div><div class="c-dot" style="background:#ffbd2e"></div><div class="c-dot" style="background:#27c93f"></div></div><span class="bash-lbl">Windows terminal</span></div>
          <pre class="bb"><span class="bp">C:\\></span> <span class="bc">python scores.py</span>
<span class="bo">Jake: average = 81.0
Sara: average = 90.0
Tom: average = 67.5
Test 1 total: 235
Class average: 78.3</span></pre>
        </div>
      `,
      questions: [
        { q: 'What is a cell in a spreadsheet?', opts: ['A type of formula', 'A single box in the spreadsheet grid, identified by column and row', 'A chart type', 'The title bar of the spreadsheet'], ans: 1, why: 'A cell is one individual box in the grid. It is identified by its column letter and row number — e.g. B3 means column B, row 3.' },
        { q: 'What does the cell address "C4" refer to?', opts: ['Column 4, row C', 'Column C, row 4', 'The 4th formula in column C', 'A chart in cell 4'], ans: 1, why: 'Cell addresses always go column first, then row. C4 = column C, row 4.' },
        { q: 'What symbol must every formula start with in a spreadsheet?', opts: ['#', '@', '=', '+'], ans: 2, why: 'Every formula must start with = (equals sign). This tells the spreadsheet to calculate rather than treat it as plain text.' },
        { q: 'What is the advantage of using cell references (like =A1+A2) instead of typing numbers directly into formulas?', opts: ['Formulas run faster', 'If the data in A1 or A2 changes, the formula result updates automatically', 'It makes the spreadsheet look nicer', 'Cell references are required by law'], ans: 1, why: 'Cell references make spreadsheets dynamic — change a value and every formula that references it recalculates instantly. This is the core power of spreadsheets.' },
      ]
    },

    // ─────────────────────────────────────────────
    // 5.2  FORMULAS AND FUNCTIONS
    // ─────────────────────────────────────────────
    {
      id: 'u5l2', emoji: '➕', title: 'Formulas and Functions',
      intro: 'Formulas do maths. Functions are pre-built formulas for common tasks like adding a column or finding the highest value.',
      learn: `
        <div class="learn-block">
          <h3>➕ Basic formulas</h3>
          <p>You can write your own maths using <strong>+, -, *, /</strong> and cell references. The formula <code>=B2*C2</code> multiplies whatever is in B2 by whatever is in C2.</p>
          <div class="story-box">
            <p>Think of a formula as a <strong>recipe card</strong> pinned to a cell. The recipe says: "Take the number from cell B2. Multiply it by the number from C2. Write the result here." Every time B2 or C2 changes, the recipe runs again automatically — the cell cooks a fresh result without you doing anything.</p>
          </div>
        </div>
        <div class="learn-block">
          <h3>🔧 Built-in functions</h3>
          <p>Functions are pre-written formulas with a name. You give them a <span class="kt">range</span> of cells and they do the work:</p>
          <div class="fact-row">
            <span class="fact-chip">=SUM(A1:A10) — add all</span>
            <span class="fact-chip">=AVERAGE(B1:B5) — mean</span>
            <span class="fact-chip">=MAX(C1:C8) — highest</span>
            <span class="fact-chip">=MIN(C1:C8) — lowest</span>
            <span class="fact-chip">=COUNT(D1:D10) — how many</span>
            <span class="fact-chip">=IF(A1>50,"Pass","Fail")</span>
          </div>
        </div>
        <div class="learn-block">
          <h3>📐 Ranges</h3>
          <p>A <span class="kt">range</span> like <code>B2:B10</code> means "all cells from B2 down to B10". The colon means "to". This saves you writing every cell individually.</p>
        </div>
      `,
      interactive: `
        <div class="interactive-wrap">
          <div class="i-label">➕ FORMULA BUILDER — match each function to what it does</div>
          <p style="font-size:0.93rem;margin-bottom:0.9rem">Tap a function name, then tap what it does. Match all 5!</p>
          <div id="matchgame-u5l2" style="display:grid;grid-template-columns:1fr 1fr;gap:0.6rem"></div>
          <div class="inline-fb" id="fb-match-u5l2"></div>
        </div>
        <div class="interactive-wrap">
          <div class="i-label">🧮 FORMULA CALCULATOR — try it yourself</div>
          <p style="font-size:0.93rem;margin-bottom:0.9rem">Enter numbers in the boxes and see the spreadsheet functions calculate in real time.</p>
          <div style="display:flex;gap:0.5rem;flex-wrap:wrap;margin-bottom:0.8rem" id="numInputs-u5l2"></div>
          <div id="funcResults-u5l2" style="display:grid;grid-template-columns:1fr 1fr;gap:0.5rem"></div>
        </div>
      `,
      code: `
        <div class="code-panel">
          <div class="code-top"><div class="c-dots"><div class="c-dot" style="background:#ff5f56"></div><div class="c-dot" style="background:#ffbd2e"></div><div class="c-dot" style="background:#27c93f"></div></div><span class="code-lbl">python3 — spreadsheet functions in code</span></div>
          <pre class="cb"><span class="cv">data</span> <span class="co">=</span> [<span class="cn">45</span>, <span class="cn">78</span>, <span class="cn">92</span>, <span class="cn">61</span>, <span class="cn">88</span>, <span class="cn">73</span>, <span class="cn">55</span>, <span class="cn">90</span>]

<span class="cc"># =SUM(A1:A8)</span>
<span class="cf">print</span>(<span class="cs">f"SUM:     </span><span class="cv">{sum(data)}</span><span class="cs">"</span>)

<span class="cc"># =AVERAGE(A1:A8)</span>
<span class="cf">print</span>(<span class="cs">f"AVERAGE: </span><span class="cv">{sum(data)/len(data):.1f}</span><span class="cs">"</span>)

<span class="cc"># =MAX(A1:A8) and =MIN(A1:A8)</span>
<span class="cf">print</span>(<span class="cs">f"MAX:     </span><span class="cv">{max(data)}</span><span class="cs">"</span>)
<span class="cf">print</span>(<span class="cs">f"MIN:     </span><span class="cv">{min(data)}</span><span class="cs">"</span>)

<span class="cc"># =COUNT(A1:A8)</span>
<span class="cf">print</span>(<span class="cs">f"COUNT:   </span><span class="cv">{len(data)}</span><span class="cs">"</span>)

<span class="cc"># =IF(score>=50,"Pass","Fail") — same in Python:</span>
<span class="ck">for</span> <span class="cv">score</span> <span class="ck">in</span> <span class="cv">data</span>:
    <span class="cv">result</span> <span class="co">=</span> <span class="cs">"Pass"</span> <span class="ck">if</span> <span class="cv">score</span> <span class="co">>=</span> <span class="cn">50</span> <span class="ck">else</span> <span class="cs">"Fail"</span>
    <span class="cf">print</span>(<span class="cs">f"</span><span class="cv">{score}</span><span class="cs"> → </span><span class="cv">{result}</span><span class="cs">"</span>)</pre>
        </div>
      `,
      questions: [
        { q: 'What does =SUM(B1:B5) do?', opts: ['Finds the average of B1 to B5', 'Adds together all values from B1 to B5', 'Counts how many cells are in B1 to B5', 'Finds the largest value in B1 to B5'], ans: 1, why: 'SUM adds all the values in a range together. B1:B5 means every cell from B1 down to B5 — that\'s 5 cells.' },
        { q: 'A range in a spreadsheet is written as:', opts: ['B1,B5', 'B1 to B5', 'B1:B5', 'B1-B5'], ans: 2, why: 'A colon (:) separates the start and end of a range. B1:B5 means "all cells from B1 to B5 inclusive".' },
        { q: 'Which function would you use to find the highest test score in a column?', opts: ['=SUM()', '=COUNT()', '=AVERAGE()', '=MAX()'], ans: 3, why: '=MAX() returns the largest value in a range. =MIN() gives the smallest. These are very common in data analysis.' },
        { q: 'The formula =IF(A1>=50,"Pass","Fail") — what does it output if A1 contains 45?', opts: ['Pass', 'Fail', '45', 'Error'], ans: 1, why: '45 is less than 50, so the condition A1>=50 is FALSE. The IF function returns the second option — "Fail".' },
      ]
    },

    // ─────────────────────────────────────────────
    // 5.3  ORGANISING DATA
    // ─────────────────────────────────────────────
    {
      id: 'u5l3', emoji: '🗂️', title: 'Organising Data',
      intro: 'Raw data is just noise. Sorting, filtering, and formatting turns noise into information you can actually use.',
      learn: `
        <div class="learn-block">
          <h3>🗂️ Sorting</h3>
          <p><span class="kt">Sorting</span> arranges your data in order — alphabetically, numerically, or by date. Sort a column of scores from highest to lowest to instantly find the top student.</p>
          <div class="story-box">
            <p>Imagine a library where books are shelved in the order they arrived — completely random. Finding a specific book means checking every single shelf. Useless.<br><br>
            Now imagine the same books sorted alphabetically by author. You go straight to the right section in seconds. <strong>Sorting</strong> does exactly this to your data — it reorganises rows so you can find, compare, and understand information instantly.</p>
          </div>
        </div>
        <div class="learn-block">
          <h3>🔍 Filtering</h3>
          <p><span class="kt">Filtering</span> hides rows that don't match your criteria, so you only see what you're looking for. Filter a class list to show only students who scored below 50 — instantly see who needs help.</p>
        </div>
        <div class="learn-block">
          <h3>🎨 Formatting</h3>
          <p>Good formatting makes data readable: <strong>bold headers</strong>, <span class="kt">conditional formatting</span> (cells change colour based on their value — red for fails, green for passes), and consistent number formats (2 decimal places, currency symbols).</p>
        </div>
      `,
      interactive: `
        <div class="interactive-wrap">
          <div class="i-label">🗂️ SORT IT — put the data in order</div>
          <p style="font-size:0.93rem;margin-bottom:0.9rem">These scores are unsorted. Drag them into order from <strong>highest to lowest</strong>.</p>
          <div id="pool-u5l3"></div>
          <div class="two-col">
            <div class="sort-zone">
              <div class="sort-zone-label">📉 Highest → Lowest</div>
              <div class="drop-items" id="drop-sorted-u5l3" data-zone="sorted"></div>
            </div>
            <div class="sort-zone">
              <div class="sort-zone-label">📋 Unsorted pool</div>
              <div class="drop-items" id="drop-unsorted-u5l3" data-zone="unsorted"></div>
            </div>
          </div>
          <button class="btn btn-check btn-sm" style="margin-top:0.9rem"
            onclick="checkScoreSort('u5l3')">Check order ✓</button>
          <div class="inline-fb" id="fb-sort-u5l3"></div>
        </div>
      `,
      code: `
        <div class="code-panel">
          <div class="code-top"><div class="c-dots"><div class="c-dot" style="background:#ff5f56"></div><div class="c-dot" style="background:#ffbd2e"></div><div class="c-dot" style="background:#27c93f"></div></div><span class="code-lbl">python3 — sorting and filtering</span></div>
          <pre class="cb"><span class="cv">students</span> <span class="co">=</span> [
    {<span class="cs">"name"</span>: <span class="cs">"Jake"</span>,  <span class="cs">"score"</span>: <span class="cn">78</span>},
    {<span class="cs">"name"</span>: <span class="cs">"Sara"</span>,  <span class="cs">"score"</span>: <span class="cn">92</span>},
    {<span class="cs">"name"</span>: <span class="cs">"Tom"</span>,   <span class="cs">"score"</span>: <span class="cn">45</span>},
    {<span class="cs">"name"</span>: <span class="cs">"Mia"</span>,   <span class="cs">"score"</span>: <span class="cn">88</span>},
    {<span class="cs">"name"</span>: <span class="cs">"Leo"</span>,   <span class="cs">"score"</span>: <span class="cn">61</span>},
]

<span class="cc"># SORT highest to lowest (like spreadsheet sort)</span>
<span class="cv">sorted_by_score</span> <span class="co">=</span> <span class="cf">sorted</span>(<span class="cv">students</span>, <span class="cv">key</span><span class="co">=</span><span class="ck">lambda</span> <span class="cv">s</span>: <span class="cv">s</span>[<span class="cs">"score"</span>], <span class="cv">reverse</span><span class="co">=</span><span class="ck">True</span>)
<span class="ck">for</span> <span class="cv">s</span> <span class="ck">in</span> <span class="cv">sorted_by_score</span>:
    <span class="cf">print</span>(<span class="cs">f"</span><span class="cv">{s['name']:8}</span><span class="cs"> </span><span class="cv">{s['score']}</span><span class="cs">"</span>)

<span class="cc"># FILTER — only show students who need help (score < 60)</span>
<span class="cf">print</span>(<span class="cs">"\nNeeds support:"</span>)
<span class="cv">needs_help</span> <span class="co">=</span> [<span class="cv">s</span> <span class="ck">for</span> <span class="cv">s</span> <span class="ck">in</span> <span class="cv">students</span> <span class="ck">if</span> <span class="cv">s</span>[<span class="cs">"score"</span>] <span class="co">&lt;</span> <span class="cn">60</span>]
<span class="ck">for</span> <span class="cv">s</span> <span class="ck">in</span> <span class="cv">needs_help</span>:
    <span class="cf">print</span>(<span class="cs">f"  </span><span class="cv">{s['name']}</span><span class="cs">: </span><span class="cv">{s['score']}</span><span class="cs">"</span>)  <span class="cc"># → Tom: 45</span></pre>
        </div>
      `,
      questions: [
        { q: 'What does sorting data do?', opts: ['Deletes duplicate rows', 'Rearranges rows into a logical order (alphabetical, numerical, etc.)', 'Hides rows that don\'t match a condition', 'Adds colour to cells'], ans: 1, why: 'Sorting reorders rows based on the values in a chosen column — e.g. alphabetically by name or numerically from highest to lowest score.' },
        { q: 'What does filtering do?', opts: ['Permanently deletes unwanted rows', 'Temporarily hides rows that don\'t match your criteria', 'Sorts data alphabetically', 'Changes the colour of cells'], ans: 1, why: 'Filtering temporarily hides rows — they\'re not deleted, just hidden. Remove the filter and all rows reappear.' },
        { q: 'Conditional formatting means:', opts: ['Cells are always coloured red', 'Cells change colour or style based on their value', 'You can only format header rows', 'Formatting is applied randomly'], ans: 1, why: 'Conditional formatting applies styles (colour, bold, etc.) automatically based on rules — e.g. colour cells red if value < 50, green if > 80.' },
        { q: 'You want to find students who scored below 40. Which tool is most useful?', opts: ['Sorting A-Z', 'Filtering by score < 40', 'Using =MAX()', 'Adding a new column'], ans: 1, why: 'Filtering by score < 40 immediately shows only the rows that match — hiding all others so you can focus on exactly the students you need.' },
      ]
    },

    // ─────────────────────────────────────────────
    // 5.4  CHARTS AND GRAPHS
    // ─────────────────────────────────────────────
    {
      id: 'u5l4', emoji: '📈', title: 'Charts and Graphs',
      intro: 'Numbers are hard to compare at a glance. Charts turn data into pictures that reveal patterns instantly.',
      learn: `
        <div class="learn-block">
          <h3>📈 Why charts?</h3>
          <p>A column of 50 numbers tells you very little at a glance. A bar chart of the same data immediately shows which value is highest, which is lowest, and how they compare.</p>
          <div class="story-box">
            <p>Imagine reading a weather report as a list: "Monday 18°, Tuesday 21°, Wednesday 16°, Thursday 24°, Friday 20°…" You'd have to mentally compare each number.<br><br>
            Now imagine the same data as a <strong>bar chart</strong>. Your eyes immediately see Thursday's bar towering above the others. You understand the whole week in one second — without reading a single number. That's why charts exist. They convert numbers into shapes your brain can process instantly.</p>
          </div>
        </div>
        <div class="learn-block">
          <h3>📊 Choosing the right chart</h3>
          <ul>
            <li><strong>Bar/Column chart</strong> — comparing categories (e.g. scores by student)</li>
            <li><strong>Line chart</strong> — showing change over time (e.g. temperature each day)</li>
            <li><strong>Pie chart</strong> — showing parts of a whole (e.g. % of each genre in a music library)</li>
            <li><strong>Scatter chart</strong> — showing relationship between two variables</li>
          </ul>
        </div>
      `,
      interactive: `
        <div class="interactive-wrap">
          <div class="i-label">📊 MATCH THE CHART — which chart type fits?</div>
          <p style="font-size:0.93rem;margin-bottom:0.9rem">Tap a scenario, then tap the best chart type for it.</p>
          <div id="matchgame-u5l4" style="display:grid;grid-template-columns:1fr 1fr;gap:0.6rem"></div>
          <div class="inline-fb" id="fb-match-u5l4"></div>
        </div>
        <div class="interactive-wrap">
          <div class="i-label">📈 MINI BAR CHART — live data viz</div>
          <p style="font-size:0.93rem;margin-bottom:0.9rem">Change the values and watch the chart update in real time — exactly like a spreadsheet chart!</p>
          <div id="barChart-u5l4" style="margin:0.5rem 0"></div>
          <div style="display:flex;gap:0.5rem;flex-wrap:wrap" id="barInputs-u5l4"></div>
        </div>
      `,
      code: `
        <div class="code-panel">
          <div class="code-top"><div class="c-dots"><div class="c-dot" style="background:#ff5f56"></div><div class="c-dot" style="background:#ffbd2e"></div><div class="c-dot" style="background:#27c93f"></div></div><span class="code-lbl">python3 — drawing charts with matplotlib</span></div>
          <pre class="cb"><span class="ck">import</span> matplotlib.pyplot <span class="ck">as</span> plt

<span class="cv">names</span>  <span class="co">=</span> [<span class="cs">"Jake"</span>, <span class="cs">"Sara"</span>, <span class="cs">"Tom"</span>, <span class="cs">"Mia"</span>, <span class="cs">"Leo"</span>]
<span class="cv">scores</span> <span class="co">=</span> [<span class="cn">78</span>,     <span class="cn">92</span>,     <span class="cn">45</span>,    <span class="cn">88</span>,    <span class="cn">61</span>]

<span class="cc"># Bar chart — like inserting a chart in a spreadsheet</span>
plt.<span class="cf">figure</span>(<span class="cv">figsize</span><span class="co">=</span>(<span class="cn">8</span>, <span class="cn">4</span>))
plt.<span class="cf">bar</span>(<span class="cv">names</span>, <span class="cv">scores</span>, <span class="cv">color</span><span class="co">=</span><span class="cs">'steelblue'</span>)
plt.<span class="cf">axhline</span>(<span class="cf">sum</span>(<span class="cv">scores</span>)<span class="co">/</span><span class="cf">len</span>(<span class="cv">scores</span>), <span class="cv">color</span><span class="co">=</span><span class="cs">'red'</span>, <span class="cv">linestyle</span><span class="co">=</span><span class="cs">'--'</span>, <span class="cv">label</span><span class="co">=</span><span class="cs">'Average'</span>)
plt.<span class="cf">title</span>(<span class="cs">'Class Test Scores'</span>)
plt.<span class="cf">ylabel</span>(<span class="cs">'Score'</span>)
plt.<span class="cf">ylim</span>(<span class="cn">0</span>, <span class="cn">100</span>)
plt.<span class="cf">legend</span>()
plt.<span class="cf">tight_layout</span>()
plt.<span class="cf">savefig</span>(<span class="cs">'scores_chart.png'</span>)
plt.<span class="cf">show</span>()
<span class="cc"># This saves a chart image file AND displays it</span></pre>
        </div>
        <div class="bash-panel">
          <div class="bash-top"><div class="c-dots"><div class="c-dot" style="background:#ff5f56"></div><div class="c-dot" style="background:#ffbd2e"></div><div class="c-dot" style="background:#27c93f"></div></div><span class="bash-lbl">Install matplotlib first, then run</span></div>
          <pre class="bb"><span class="bp">C:\\></span> <span class="bc">pip install matplotlib</span>
<span class="bp">C:\\></span> <span class="bc">python chart.py</span>
<span class="bx"># A bar chart window pops up, and scores_chart.png is saved</span></pre>
        </div>
      `,
      questions: [
        { q: 'Which chart type is best for showing how sales figures change over 12 months?', opts: ['Pie chart', 'Bar chart', 'Line chart', 'Scatter chart'], ans: 2, why: 'Line charts show change over time — the connected line makes trends and patterns (rising, falling, flat) immediately visible.' },
        { q: 'You want to show what percentage of your class prefers each genre of music. Which chart?', opts: ['Bar chart', 'Line chart', 'Pie chart', 'Scatter chart'], ans: 2, why: 'Pie charts show parts of a whole as proportional slices. They\'re perfect when showing how a total is split between categories.' },
        { q: 'Why are charts better than raw numbers for spotting trends?', opts: ['Charts are always more accurate', 'The human brain processes visual shapes much faster than lists of numbers', 'Charts take up less storage space', 'Spreadsheets require charts to function'], ans: 1, why: 'The human visual system processes shapes, heights and patterns far faster than reading numbers. A chart reveals what a table of numbers hides.' },
        { q: 'You have data about 5 students\' scores. What is the best chart to compare them?', opts: ['Line chart', 'Pie chart', 'Bar/column chart', 'Scatter chart'], ans: 2, why: 'Bar charts are ideal for comparing discrete categories (like individual students) side by side — the height difference is immediately obvious.' },
      ]
    },

    // ─────────────────────────────────────────────
    // 5.5  ANALYSING DATA
    // ─────────────────────────────────────────────
    {
      id: 'u5l5', emoji: '🔎', title: 'Analysing Data',
      intro: 'Collecting data is just the start. Analysing it means asking questions and using your spreadsheet to find meaningful answers.',
      learn: `
        <div class="learn-block">
          <h3>🔎 What does analysis mean?</h3>
          <p>Data <span class="kt">analysis</span> means examining data to find patterns, trends, and answers to specific questions. A spreadsheet makes this fast because formulas do the maths instantly.</p>
          <div class="story-box">
            <p>Imagine a school canteen recording what every student orders for lunch, every day for a year. That's 180,000 rows of data. On its own — useless noise.<br><br>
            But run =AVERAGE() on the chip sales column and you see Fridays average 3× more chip orders than Mondays. Run =MAX() on the total column and find the busiest day of the year was Sports Day. Filter by "vegetarian" and see exactly how many meals to prepare each day.<br><br>
            <strong>The data doesn't change — only the questions you ask it.</strong> A spreadsheet lets you ask thousands of questions instantly.</p>
          </div>
        </div>
        <div class="learn-block">
          <h3>📐 Key analysis techniques</h3>
          <ul>
            <li><strong>Mean (average)</strong> — typical value: =AVERAGE()</li>
            <li><strong>Max/Min</strong> — extremes: =MAX(), =MIN()</li>
            <li><strong>Count</strong> — how many: =COUNT(), =COUNTIF()</li>
            <li><strong>Percentage</strong> — =part/total*100</li>
            <li><strong>Trend</strong> — does data go up or down over time? (line chart)</li>
          </ul>
        </div>
      `,
      interactive: `
        <div class="interactive-wrap">
          <div class="i-label">🔎 DATA ANALYST — answer questions about this dataset</div>
          <p style="font-size:0.93rem;margin-bottom:0.9rem">Look at the data and answer each question using the right spreadsheet thinking.</p>
          <div id="analysisGame-u5l5"></div>
        </div>
      `,
      code: `
        <div class="code-panel">
          <div class="code-top"><div class="c-dots"><div class="c-dot" style="background:#ff5f56"></div><div class="c-dot" style="background:#ffbd2e"></div><div class="c-dot" style="background:#27c93f"></div></div><span class="code-lbl">python3 — data analysis</span></div>
          <pre class="cb"><span class="cv">daily_sales</span> <span class="co">=</span> {
    <span class="cs">"Mon"</span>: <span class="cn">142</span>, <span class="cs">"Tue"</span>: <span class="cn">158</span>, <span class="cs">"Wed"</span>: <span class="cn">171</span>,
    <span class="cs">"Thu"</span>: <span class="cn">163</span>, <span class="cs">"Fri"</span>: <span class="cn">210</span>
}

<span class="cv">values</span>  <span class="co">=</span> <span class="cf">list</span>(<span class="cv">daily_sales</span>.<span class="cf">values</span>())
<span class="cv">total</span>   <span class="co">=</span> <span class="cf">sum</span>(<span class="cv">values</span>)
<span class="cv">average</span> <span class="co">=</span> <span class="cv">total</span> <span class="co">/</span> <span class="cf">len</span>(<span class="cv">values</span>)

<span class="cf">print</span>(<span class="cs">f"Total weekly sales:   £</span><span class="cv">{total}</span><span class="cs">"</span>)
<span class="cf">print</span>(<span class="cs">f"Daily average:        £</span><span class="cv">{average:.1f}</span><span class="cs">"</span>)
<span class="cf">print</span>(<span class="cs">f"Best day:             </span><span class="cv">{max(daily_sales, key=daily_sales.get)}</span><span class="cs">"</span>)
<span class="cf">print</span>(<span class="cs">f"Worst day:            </span><span class="cv">{min(daily_sales, key=daily_sales.get)}</span><span class="cs">"</span>)

<span class="cc"># Percentage each day contributes</span>
<span class="cf">print</span>(<span class="cs">"\nDay breakdown:"</span>)
<span class="ck">for</span> <span class="cv">day</span>, <span class="cv">sales</span> <span class="ck">in</span> <span class="cv">daily_sales</span>.<span class="cf">items</span>():
    <span class="cv">pct</span> <span class="co">=</span> <span class="cv">sales</span> <span class="co">/</span> <span class="cv">total</span> <span class="co">*</span> <span class="cn">100</span>
    <span class="cf">print</span>(<span class="cs">f"  </span><span class="cv">{day}</span><span class="cs">: £</span><span class="cv">{sales}</span><span class="cs"> (</span><span class="cv">{pct:.1f}</span><span class="cs">%)"</span>)</pre>
        </div>
      `,
      questions: [
        { q: 'A class has scores: 55, 72, 48, 90, 63. What is the mean (average)?', opts: ['63', '65.6', '72', '70'], ans: 1, why: 'Mean = sum ÷ count. (55+72+48+90+63) = 328 ÷ 5 = 65.6. This is what =AVERAGE() calculates.' },
        { q: 'Which formula counts only cells that contain a value greater than 50?', opts: ['=COUNT(A1:A10)', '=COUNTIF(A1:A10,">50")', '=SUM(A1:A10)', '=IF(A1>50,1,0)'], ans: 1, why: '=COUNTIF() lets you count cells that match a condition. The condition ">50" means "greater than 50".' },
        { q: 'You want to see if attendance is improving over the school year. What should you create?', opts: ['A pie chart of total attendance', 'A line chart showing attendance per month', 'A bar chart of one month\'s data', 'A table with conditional formatting only'], ans: 1, why: 'A line chart over time shows the trend — whether attendance is rising, falling, or staying flat across months.' },
        { q: 'Friday has 210 sales out of 844 total for the week. What percentage is that?', opts: ['20%', '24.9%', '21%', '42%'], ans: 1, why: '210 ÷ 844 × 100 = 24.9%. In a spreadsheet: =B6/SUM(B2:B6)*100 where B6 is Friday\'s sales.' },
      ]
    },

    // ─────────────────────────────────────────────
    // 5.6  SPREADSHEET PROJECT
    // ─────────────────────────────────────────────
    {
      id: 'u5l6', emoji: '🏆', title: 'Spreadsheet Project',
      intro: 'Apply everything — data entry, formulas, functions, sorting, filtering and charts — to build a complete working spreadsheet.',
      learn: `
        <div class="learn-block">
          <h3>🏆 Putting it all together</h3>
          <p>A real spreadsheet project uses all five skills:</p>
          <div class="fact-row">
            <span class="fact-chip">📊 Grid + cell references</span>
            <span class="fact-chip">➕ Formulas + functions</span>
            <span class="fact-chip">🗂️ Sort + filter</span>
            <span class="fact-chip">📈 Chart</span>
            <span class="fact-chip">🔎 Analysis questions</span>
          </div>
          <div class="story-box">
            <p>You've just been made manager of a small school tuck shop. You need to track what you sell each day, calculate how much money you're making, spot your best-selling item, and present a weekly summary to the headteacher — who wants a chart, not a table of numbers.<br><br>
            A single spreadsheet handles every one of those tasks. This is exactly what businesses, scientists, teachers, and governments do with their data every day. The tool is simple. What you do with it is limited only by the questions you ask.</p>
          </div>
        </div>
        <div class="learn-block">
          <h3>📋 Project: Class Survey Analysis</h3>
          <ul>
            <li>Collect data (favourite subject, hours of sleep, screen time)</li>
            <li>Enter it into a spreadsheet with proper headers</li>
            <li>Add formulas: =AVERAGE(), =MAX(), =MIN(), =COUNTIF()</li>
            <li>Sort and filter to answer specific questions</li>
            <li>Create a bar chart of the results</li>
            <li>Write a 3-sentence analysis: what does the data show?</li>
          </ul>
        </div>
      `,
      interactive: `
        <div class="interactive-wrap">
          <div class="i-label">🏆 TUCK SHOP TRACKER — your spreadsheet project</div>
          <p style="font-size:0.93rem;margin-bottom:0.9rem">Edit the sales figures and watch the totals, averages and chart update automatically — just like a real spreadsheet!</p>
          <div id="tuckShop-u5l6"></div>
        </div>
      `,
      code: `
        <div class="code-panel">
          <div class="code-top"><div class="c-dots"><div class="c-dot" style="background:#ff5f56"></div><div class="c-dot" style="background:#ffbd2e"></div><div class="c-dot" style="background:#27c93f"></div></div><span class="code-lbl">python3 — complete data project</span></div>
          <pre class="cb"><span class="cc"># Complete tuck shop analysis in Python</span>
<span class="cv">items</span> <span class="co">=</span> [
    {<span class="cs">"name"</span>: <span class="cs">"Crisps"</span>,    <span class="cs">"price"</span>: <span class="cn">0.50</span>, <span class="cs">"sold"</span>: <span class="cn">45</span>},
    {<span class="cs">"name"</span>: <span class="cs">"Juice"</span>,     <span class="cs">"price"</span>: <span class="cn">0.80</span>, <span class="cs">"sold"</span>: <span class="cn">32</span>},
    {<span class="cs">"name"</span>: <span class="cs">"Chocolate"</span>, <span class="cs">"price"</span>: <span class="cn">0.60</span>, <span class="cs">"sold"</span>: <span class="cn">58</span>},
    {<span class="cs">"name"</span>: <span class="cs">"Water"</span>,     <span class="cs">"price"</span>: <span class="cn">0.40</span>, <span class="cs">"sold"</span>: <span class="cn">71</span>},
    {<span class="cs">"name"</span>: <span class="cs">"Sandwich"</span>,  <span class="cs">"price"</span>: <span class="cn">1.50</span>, <span class="cs">"sold"</span>: <span class="cn">18</span>},
]

<span class="cc"># Add revenue column (=price * sold)</span>
<span class="ck">for</span> <span class="cv">item</span> <span class="ck">in</span> <span class="cv">items</span>:
    <span class="cv">item</span>[<span class="cs">"revenue"</span>] <span class="co">=</span> <span class="cv">item</span>[<span class="cs">"price"</span>] <span class="co">*</span> <span class="cv">item</span>[<span class="cs">"sold"</span>]

<span class="cc"># Sort by revenue descending (best seller first)</span>
<span class="cv">items</span>.<span class="cf">sort</span>(<span class="cv">key</span><span class="co">=</span><span class="ck">lambda</span> <span class="cv">x</span>: <span class="cv">x</span>[<span class="cs">"revenue"</span>], <span class="cv">reverse</span><span class="co">=</span><span class="ck">True</span>)

<span class="cf">print</span>(<span class="cs">f"{'Item':12} {'Price':>7} {'Sold':>6} {'Revenue':>9}"</span>)
<span class="cf">print</span>(<span class="cs">"-" * 38</span>)
<span class="ck">for</span> <span class="cv">item</span> <span class="ck">in</span> <span class="cv">items</span>:
    <span class="cf">print</span>(<span class="cs">f"</span><span class="cv">{item['name']:12}</span><span class="cs"> £</span><span class="cv">{item['price']:>5.2f}</span><span class="cs"> </span><span class="cv">{item['sold']:>6}</span><span class="cs"> £</span><span class="cv">{item['revenue']:>8.2f}</span><span class="cs">"</span>)

<span class="cv">total_rev</span> <span class="co">=</span> <span class="cf">sum</span>(<span class="cv">i</span>[<span class="cs">"revenue"</span>] <span class="ck">for</span> <span class="cv">i</span> <span class="ck">in</span> <span class="cv">items</span>)
<span class="cf">print</span>(<span class="cs">f"\nTotal revenue: £{total_rev:.2f}"</span>)
<span class="cf">print</span>(<span class="cs">f"Best seller:   {items[0]['name']}"</span>)</pre>
        </div>
      `,
      questions: [
        { q: 'An item costs £0.60 and you sold 45 of them. What formula gives total revenue?', opts: ['=0.60+45', '=0.60*45', '=SUM(0.60,45)', '=AVERAGE(0.60,45)'], ans: 1, why: 'Revenue = price × quantity sold. In a spreadsheet: =B2*C2 where B2 has the price and C2 has units sold.' },
        { q: 'You want to show the headteacher which item earns the most. What should you do?', opts: ['Print the whole spreadsheet', 'Sort by revenue column, highest first, then create a bar chart', 'Filter by name A-Z', 'Use =COUNT()'], ans: 1, why: 'Sort descending by revenue to identify the top earner, then a bar chart makes it visually clear for a non-technical audience.' },
        { q: 'Which is the correct approach for a data analysis project?', opts: ['Enter data, guess the answer, then draw a chart','Enter data, apply formulas, analyse results, then draw conclusions', 'Draw a chart first, then enter data', 'Only use =SUM() for everything'], ans: 1, why: 'The correct workflow: collect/enter data → apply appropriate formulas → analyse the results → draw conclusions supported by the data.' },
        { q: 'Your survey shows 18 out of 30 students prefer Maths. What is that as a percentage?', opts: ['18%', '30%', '60%', '50%'], ans: 2, why: '18 ÷ 30 × 100 = 60%. In a spreadsheet: =B2/B12*100 where B2 is the count and B12 is the total.' },
      ]
    },

  ] // end Unit 5 lessons
}; // end UNIT5

// ─── Helper functions needed by U5 interactives ──────
window.showFormula = function(formula, result) {
  const fb = document.getElementById('formula-reveal');
  if (!fb) return;
  fb.innerHTML = `Formula in this cell: <strong style="font-family:'Fira Code',monospace;color:#8b35c8">${formula}</strong>  →  Result: <strong>${result}</strong>`;
  fb.className = 'inline-fb show ok';
};

window.checkScoreSort = function(id) {
  const zone = document.getElementById(`drop-sorted-${id}`);
  const fb   = document.getElementById(`fb-sort-${id}`);
  if (!zone || !fb) return;
  const chips = Array.from(zone.querySelectorAll('.dropped-chip'));
  const vals  = chips.map(c => parseFloat(c.dataset.item || c.textContent));
  let sorted  = true;
  for (let i = 1; i < vals.length; i++) {
    if (vals[i] > vals[i-1]) { sorted = false; break; }
  }
  if (chips.length < 3) {
    fb.textContent = 'Move more items into the sorted column first!';
    fb.className = 'inline-fb show bad';
  } else if (sorted) {
    fb.textContent = `✅ Correct! ${vals.join(' → ')} — highest to lowest.`;
    fb.className = 'inline-fb show ok';
  } else {
    fb.textContent = `Not quite — check the order. The highest value should be at the top.`;
    fb.className = 'inline-fb show bad';
  }
};
