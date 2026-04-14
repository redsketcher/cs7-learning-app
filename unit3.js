// ═══════════════════════════════════════════════════════
//  UNIT 3 — SCRATCH PROGRAMMING
// ═══════════════════════════════════════════════════════

window.UNIT3 = {
  id: 'u3', color: '#1b9e5a', bg: '#eaf8f1',
  title: 'Scratch Programming',
  desc: 'Sequences, loops, conditions and variables — visually',
  lessons: [

    {
      id:'u3l1', emoji:'📋', title:'Sequences',
      intro:'A sequence is a set of instructions that run one after another, in order. It\'s the foundation of every program ever written.',
      learn:`
        <div class="learn-block">
          <h3>📋 What is a sequence?</h3>
          <p>A <span class="kt">sequence</span> is a list of steps that a computer follows <strong>one at a time, in order</strong>. The computer doesn't skip steps, doesn't do them in a different order — it follows them exactly as written.</p>
          <div class="story-box">
            <p>Imagine you're giving directions to someone who has never been to your house. You write: 1. Turn left out of school. 2. Walk 200 metres. 3. Turn right at the traffic lights. 4. It's the blue door on the left.<br><br>
            If they skip step 2 and jump to step 3, they end up in the wrong place. If they do step 4 before step 1, they're still standing at school.<br><br>
            A computer program is exactly the same. <strong>Every step matters. Order matters.</strong></p>
          </div>
        </div>
        <div class="learn-block">
          <h3>🐱 Scratch sequences</h3>
          <p>In Scratch, you build sequences by snapping coloured blocks together. The <strong>top block runs first</strong>, then each block below runs in turn — just like reading a list from top to bottom.</p>
          <p>Motion blocks (blue) move the sprite. Looks blocks (purple) change what it says or looks like.</p>
        </div>
      `,
      interactive:`
        <div class="interactive-wrap">
          <div class="i-label">🐱 SCRATCH STAGE — build your sequence</div>
          <p style="font-size:0.93rem;margin-bottom:0.9rem">Press the blocks in order to build a sequence. Watch the cat follow your instructions!</p>
          <div class="scratch-stage" id="stage-u3l1">
            <div class="sprite" id="sprite-u3l1" style="left:40%;top:40%">🐱</div>
          </div>
          <div class="scratch-blocks" id="blocks-u3l1">
            <button class="sb-btn sb-motion" onclick="scratchCmd('u3l1','moveRight')">➡️ Move right</button>
            <button class="sb-btn sb-motion" onclick="scratchCmd('u3l1','moveLeft')">⬅️ Move left</button>
            <button class="sb-btn sb-motion" onclick="scratchCmd('u3l1','moveUp')">⬆️ Move up</button>
            <button class="sb-btn sb-motion" onclick="scratchCmd('u3l1','moveDown')">⬇️ Move down</button>
            <button class="sb-btn sb-looks" onclick="scratchCmd('u3l1','say')">💬 Say "Hello!"</button>
            <button class="sb-btn sb-events" onclick="scratchReset('u3l1')">🔄 Reset</button>
          </div>
          <div id="sequence-log-u3l1" style="margin-top:0.8rem;background:var(--code-bg);border-radius:10px;padding:0.7rem 1rem;font-family:'Fira Code',monospace;font-size:0.82rem;color:#c3e88d;min-height:36px;line-height:1.8"></div>
        </div>
      `,
      code:`
        <div class="learn-block">
          <h3>💻 A sequence in Python</h3>
          <p>Python runs exactly like Scratch — top to bottom, one line at a time. This is the same concept, just written as text instead of blocks.</p>
        </div>
        <div class="code-panel">
          <div class="code-top"><div class="c-dots"><div class="c-dot" style="background:#ff5f56"></div><div class="c-dot" style="background:#ffbd2e"></div><div class="c-dot" style="background:#27c93f"></div></div><span class="code-lbl">python3 — sequences run top to bottom</span></div>
          <pre class="cb"><span class="cc"># This is a sequence — each line runs in order</span>
<span class="cf">print</span>(<span class="cs">"Step 1: Wake up"</span>)
<span class="cf">print</span>(<span class="cs">"Step 2: Eat breakfast"</span>)
<span class="cf">print</span>(<span class="cs">"Step 3: Go to school"</span>)
<span class="cf">print</span>(<span class="cs">"Step 4: Learn computing"</span>)
<span class="cf">print</span>(<span class="cs">"Step 5: Go home"</span>)

<span class="cc"># What happens if we swap step 3 and step 1?</span>
<span class="cf">print</span>(<span class="cs">"Step 1: Go to school"</span>)   <span class="cc"># ← you haven't woken up yet!</span>
<span class="cf">print</span>(<span class="cs">"Step 2: Eat breakfast"</span>)
<span class="cf">print</span>(<span class="cs">"Step 3: Wake up"</span>)         <span class="cc"># ← too late!</span>
<span class="cc"># The computer does exactly what you write — order ALWAYS matters</span></pre>
        </div>
        <div class="bash-panel">
          <div class="bash-top"><div class="c-dots"><div class="c-dot" style="background:#ff5f56"></div><div class="c-dot" style="background:#ffbd2e"></div><div class="c-dot" style="background:#27c93f"></div></div><span class="bash-lbl">Save as sequence.py and run</span></div>
          <pre class="bb"><span class="bp">C:\\></span> <span class="bc">python sequence.py</span>
<span class="bo">Step 1: Wake up
Step 2: Eat breakfast
Step 3: Go to school
Step 4: Learn computing
Step 5: Go home</span></pre>
        </div>
      `,
      questions:[
        {q:'What is a sequence in programming?',opts:['A random set of instructions','A set of instructions that run one after another in order','A loop that repeats forever','A decision the computer makes'],ans:1,why:'A sequence is an ordered list of instructions executed one at a time from top to bottom. This is the most fundamental concept in programming.'},
        {q:'In Scratch, which block runs FIRST in a sequence?',opts:['The bottom block','The longest block','The top block','The blue block'],ans:2,why:'Scratch (and Python) execute from top to bottom. The topmost block in a stack runs first.'},
        {q:'What happens if you change the order of steps in a sequence?',opts:['Nothing — order doesn\'t matter','The program might produce different or wrong results','The program runs faster','The program skips the moved step'],ans:1,why:'Order is critical in sequences. Moving steps changes what the program does and can produce incorrect or unexpected results.'},
        {q:'Which of these is an example of a sequence in real life?',opts:['All lights in a house turning on at once','A recipe: mix, bake, cool, decorate in order','The weather changing','Choosing which road to take'],ans:1,why:'A recipe is a perfect real-life sequence — each step must happen in order. You can\'t decorate the cake before you bake it.'},
      ]
    },

    {
      id:'u3l2', emoji:'🔁', title:'Loops',
      intro:'What if you need to repeat something 100 times? You don\'t write it 100 times — you use a loop.',
      learn:`
        <div class="learn-block">
          <h3>🔁 What is a loop?</h3>
          <p>A <span class="kt">loop</span> makes a set of instructions repeat. Instead of writing the same code over and over, you write it once and tell the computer how many times to run it.</p>
          <div class="story-box">
            <p>Imagine you're playing a song on a music app and you press the repeat button. The song plays, ends, then starts again from the beginning — automatically, without you pressing anything. That's a loop.<br><br>
            Now imagine you had to press play 100 times to hear a song 100 times. That's what programming without loops would be like. A loop saves you from doing the same thing over and over — you just say <strong>"do this 100 times"</strong> and walk away.</p>
          </div>
        </div>
        <div class="learn-block">
          <h3>🔢 Count-controlled loops</h3>
          <p>A <span class="kt">count-controlled loop</span> repeats a <strong>set number of times</strong>. In Scratch: "Repeat 10". In Python: <code style="background:var(--warm);padding:0.1em 0.4em;border-radius:4px">for i in range(10)</code>.</p>
        </div>
        <div class="learn-block">
          <h3>♾️ Forever loops</h3>
          <p>A <span class="kt">forever loop</span> keeps going until you stop the program. Games use these — the game keeps running, checking for button presses, until you quit.</p>
        </div>
      `,
      interactive:`
        <div class="interactive-wrap">
          <div class="i-label">🔁 LOOP BUILDER — how many times?</div>
          <p style="font-size:0.93rem;margin-bottom:0.9rem">Choose an action and set how many times to repeat it. Watch the sprite loop!</p>
          <div class="scratch-stage" id="stage-u3l2">
            <div class="sprite" id="sprite-u3l2" style="left:40%;top:40%">🐱</div>
          </div>
          <div style="display:flex;gap:0.7rem;align-items:center;flex-wrap:wrap;margin:0.7rem 0">
            <select id="loopAction-u3l2" style="padding:0.5rem 0.8rem;border-radius:10px;border:2px solid var(--border);font-family:'Lexend',sans-serif;font-size:0.9rem;font-weight:600;background:var(--warm)">
              <option value="spin">🌀 Spin in a circle</option>
              <option value="bounce">⬆️ Bounce up/down</option>
              <option value="blink">✨ Blink</option>
            </select>
            <label style="font-size:0.9rem;font-weight:600">Repeat:
              <input type="number" id="loopCount-u3l2" value="3" min="1" max="10" style="width:64px;padding:0.5rem;border-radius:8px;border:2px solid var(--border);font-family:'Lexend',sans-serif;font-size:0.9rem;font-weight:700;margin-left:0.4rem;text-align:center">
            </label>
            <button class="btn btn-check btn-sm" onclick="runLoop('u3l2')">▶ Run loop</button>
          </div>
          <div id="loop-log-u3l2" style="background:var(--code-bg);border-radius:10px;padding:0.7rem 1rem;font-family:'Fira Code',monospace;font-size:0.82rem;color:#c3e88d;min-height:36px;line-height:1.8"></div>
        </div>
      `,
      code:`
        <div class="code-panel">
          <div class="code-top"><div class="c-dots"><div class="c-dot" style="background:#ff5f56"></div><div class="c-dot" style="background:#ffbd2e"></div><div class="c-dot" style="background:#27c93f"></div></div><span class="code-lbl">python3 — loops</span></div>
          <pre class="cb"><span class="cc"># Count-controlled loop — runs exactly 5 times</span>
<span class="ck">for</span> <span class="cv">i</span> <span class="ck">in</span> <span class="cf">range</span>(<span class="cn">5</span>):
    <span class="cf">print</span>(<span class="cs">f"Loop number </span><span class="cv">{i + 1}</span><span class="cs">"</span>)
<span class="cc"># Output: Loop number 1, 2, 3, 4, 5</span>

<span class="cc"># range(start, stop) — count from 1 to 10</span>
<span class="ck">for</span> <span class="cv">i</span> <span class="ck">in</span> <span class="cf">range</span>(<span class="cn">1</span>, <span class="cn">11</span>):
    <span class="cf">print</span>(<span class="cv">i</span>)

<span class="cc"># While loop — keeps going until a condition is false</span>
<span class="cv">count</span> <span class="co">=</span> <span class="cn">0</span>
<span class="ck">while</span> <span class="cv">count</span> <span class="co">&lt;</span> <span class="cn">5</span>:
    <span class="cf">print</span>(<span class="cs">f"Count is </span><span class="cv">{count}</span><span class="cs">"</span>)
    <span class="cv">count</span> <span class="co">+=</span> <span class="cn">1</span>   <span class="cc"># count = count + 1</span>

<span class="cc"># Challenge: print all even numbers from 2 to 20</span>
<span class="ck">for</span> <span class="cv">n</span> <span class="ck">in</span> <span class="cf">range</span>(<span class="cn">2</span>, <span class="cn">21</span>, <span class="cn">2</span>):  <span class="cc"># step by 2</span>
    <span class="cf">print</span>(<span class="cv">n</span>)</pre>
        </div>
        <div class="bash-panel">
          <div class="bash-top"><div class="c-dots"><div class="c-dot" style="background:#ff5f56"></div><div class="c-dot" style="background:#ffbd2e"></div><div class="c-dot" style="background:#27c93f"></div></div><span class="bash-lbl">Save as loops.py and try it</span></div>
          <pre class="bb"><span class="bp">C:\\></span> <span class="bc">python loops.py</span>
<span class="bo">Loop number 1
Loop number 2
Loop number 3
Loop number 4
Loop number 5</span></pre>
        </div>
      `,
      questions:[
        {q:'What is the purpose of a loop?',opts:['To stop a program','To repeat a set of instructions','To make decisions','To store information'],ans:1,why:'A loop allows a block of code to be repeated multiple times without writing it out multiple times. This is fundamental to efficient programming.'},
        {q:'In Python, what does range(5) produce?',opts:['The numbers 1,2,3,4,5','The numbers 0,1,2,3,4','The number 5 only','A random number'],ans:1,why:'range(5) produces 0,1,2,3,4 — five numbers starting from 0. To get 1-5 you\'d write range(1, 6).'},
        {q:'Which type of loop would you use to keep a game running until the player quits?',opts:['A loop that runs exactly 10 times','A for loop with range(100)','A forever/while True loop','A sequence'],ans:2,why:'A game runs until the player decides to stop — that\'s an indefinite/forever loop. You don\'t know in advance how many times it needs to run.'},
        {q:'How many times does this print something? for i in range(3): print(i)',opts:['0 times','1 time','3 times','Infinite times'],ans:2,why:'range(3) gives 0, 1, 2 — three values. So the loop runs 3 times, printing 0, then 1, then 2.'},
      ]
    },

    {
      id:'u3l3', emoji:'🤔', title:'Conditions (if/else)',
      intro:'Not all programs do the same thing every time. Conditions let a program make decisions based on what\'s happening.',
      learn:`
        <div class="learn-block">
          <h3>🤔 What is a condition?</h3>
          <p>A <span class="kt">condition</span> is a question with a yes or no answer. If the answer is yes, the program does one thing. If no, it does something else (or nothing).</p>
          <div class="story-box">
            <p>You're a bouncer at a club. Your one rule: <strong>"If they are over 18, let them in. Otherwise, turn them away."</strong><br><br>
            Every person who walks up, you ask the same question. The answer changes what you do next. Some people get in. Some don't. You're making a <strong>decision</strong> based on a condition — exactly what computers do with <code>if</code> statements.</p>
          </div>
        </div>
        <div class="learn-block">
          <h3>✅ True and False</h3>
          <p>Conditions can only be <span class="kt">True</span> or <span class="kt">False</span> — just like bits are only 1 or 0. In Python, <code style="background:var(--warm);padding:0.1em 0.4em;border-radius:4px">if</code> checks the condition and runs the indented block only if it's True.</p>
        </div>
        <div class="learn-block">
          <h3>🔀 if / elif / else</h3>
          <p>You can chain decisions: <strong>if</strong> this → do A. <strong>elif</strong> (else if) that → do B. <strong>else</strong> (none of the above) → do C. Only ONE branch runs each time.</p>
        </div>
      `,
      interactive:`
        <div class="interactive-wrap">
          <div class="i-label">🤔 IF-ELSE MACHINE</div>
          <p style="font-size:0.93rem;margin-bottom:0.9rem">Enter a number and press check. The machine tests conditions and tells you what it found!</p>
          <div style="display:flex;gap:0.7rem;align-items:center;flex-wrap:wrap;margin-bottom:0.8rem">
            <input type="number" id="ifInput-u3l3" placeholder="Enter a number" style="padding:0.65rem 1rem;border-radius:12px;border:2px solid var(--border);font-family:'Lexend',sans-serif;font-size:1rem;font-weight:700;width:180px">
            <button class="btn btn-check btn-sm" onclick="runIfElse('u3l3')">Check ✓</button>
          </div>
          <div id="if-output-u3l3" style="background:var(--code-bg);border-radius:10px;padding:0.8rem 1rem;font-family:'Fira Code',monospace;font-size:0.9rem;color:#c3e88d;min-height:42px;line-height:1.8"></div>
        </div>
        <div class="interactive-wrap" style="margin-top:0">
          <div class="i-label">🐱 SCRATCH — if touching edge?</div>
          <div class="scratch-stage" id="stage-u3l3">
            <div class="sprite" id="sprite-u3l3" style="left:40%;top:40%">🐱</div>
            <div id="wall-u3l3" style="position:absolute;right:0;top:0;bottom:0;width:6px;background:#e85d2f;opacity:0.6;border-radius:3px"></div>
          </div>
          <div class="scratch-blocks" style="margin-top:0.7rem">
            <button class="sb-btn sb-motion" onclick="scratchCondCmd('u3l3','right')">➡️ Move right</button>
            <button class="sb-btn sb-control" onclick="scratchCondCmd('u3l3','check')">🤔 If touching wall → bounce</button>
            <button class="sb-btn sb-events" onclick="scratchReset('u3l3')">🔄 Reset</button>
          </div>
          <div id="cond-log-u3l3" style="margin-top:0.6rem;background:var(--code-bg);border-radius:10px;padding:0.6rem 1rem;font-family:'Fira Code',monospace;font-size:0.82rem;color:#c3e88d;min-height:32px;line-height:1.8"></div>
        </div>
      `,
      code:`
        <div class="code-panel">
          <div class="code-top"><div class="c-dots"><div class="c-dot" style="background:#ff5f56"></div><div class="c-dot" style="background:#ffbd2e"></div><div class="c-dot" style="background:#27c93f"></div></div><span class="code-lbl">python3 — if / elif / else</span></div>
          <pre class="cb"><span class="cv">score</span> <span class="co">=</span> <span class="cf">int</span>(<span class="cf">input</span>(<span class="cs">"Enter your score: "</span>))

<span class="ck">if</span> <span class="cv">score</span> <span class="co">>=</span> <span class="cn">90</span>:
    <span class="cf">print</span>(<span class="cs">"Grade: A ⭐"</span>)
<span class="ck">elif</span> <span class="cv">score</span> <span class="co">>=</span> <span class="cn">70</span>:
    <span class="cf">print</span>(<span class="cs">"Grade: B 👍"</span>)
<span class="ck">elif</span> <span class="cv">score</span> <span class="co">>=</span> <span class="cn">50</span>:
    <span class="cf">print</span>(<span class="cs">"Grade: C 📚"</span>)
<span class="ck">else</span>:
    <span class="cf">print</span>(<span class="cs">"Grade: Try again! 💪"</span>)

<span class="cc"># Only ONE branch runs — the first true condition wins</span>

<span class="cc"># Combining conditions with and / or</span>
<span class="cv">age</span>  <span class="co">=</span> <span class="cn">15</span>
<span class="cv">paid</span> <span class="co">=</span> <span class="ck">True</span>

<span class="ck">if</span> <span class="cv">age</span> <span class="co">>=</span> <span class="cn">12</span> <span class="ck">and</span> <span class="cv">paid</span>:
    <span class="cf">print</span>(<span class="cs">"You can enter the cinema 🎬"</span>)
<span class="ck">else</span>:
    <span class="cf">print</span>(<span class="cs">"Sorry, not today"</span>)</pre>
        </div>
      `,
      questions:[
        {q:'What does an "if" statement do?',opts:['Repeats code a set number of times','Stores a value in memory','Runs a block of code only if a condition is True','Displays text on screen'],ans:2,why:'An if statement tests a condition. If the condition is True, the indented code block runs. If False, it\'s skipped.'},
        {q:'What are the only two possible results of a condition check?',opts:['Yes and No','1 and 2','True and False','On and Off'],ans:2,why:'Conditions evaluate to True or False — there is no in-between. This is Boolean logic, named after mathematician George Boole.'},
        {q:'What does "else" do in an if/else statement?',opts:['It always runs regardless of the condition','It runs when ALL the if/elif conditions are False','It creates a loop','It stores a result'],ans:1,why:'"else" is the default case — it runs when none of the if or elif conditions evaluated to True. Only one branch ever runs.'},
        {q:'if score >= 70 and score < 90 — when is this True?',opts:['When score is exactly 70 or 90','When score is between 70 and 89 inclusive','When score is greater than 90','When score is less than 70'],ans:1,why:'Both conditions must be True. score must be at least 70 AND less than 90 — so 70-89 inclusive. 90 fails the second condition (not < 90).'},
      ]
    },

    {
      id:'u3l4', emoji:'📦', title:'Variables in Scratch',
      intro:'Variables are labelled boxes where you store information. A score, a name, a level — anything your program needs to remember.',
      learn:`
        <div class="learn-block">
          <h3>📦 What is a variable?</h3>
          <p>A <span class="kt">variable</span> is a named storage location in memory. You give it a name and put a value inside. Later, you can read it or change it.</p>
          <div class="story-box">
            <p>Picture a row of post boxes at an apartment building. Each box has a name on it: <strong>SCORE</strong>, <strong>LIVES</strong>, <strong>PLAYER_NAME</strong>. When you want to know a player's score, you go to the box labelled SCORE and look inside.<br><br>
            When they earn 10 more points, you open the SCORE box, take out the old number, and put in a new one. The box (variable) stays in the same place — only what's <em>inside</em> it changes. That's exactly how computer variables work.</p>
          </div>
        </div>
        <div class="learn-block">
          <h3>🎮 Variables in games</h3>
          <p>Every game uses variables: <strong>score</strong>, <strong>lives</strong>, <strong>level</strong>, <strong>health</strong>, <strong>player_name</strong>. Each time something changes in the game, the variable is updated.</p>
        </div>
      `,
      interactive:`
        <div class="interactive-wrap">
          <div class="i-label">📦 VARIABLE GAME — control the score</div>
          <p style="font-size:0.93rem;margin-bottom:0.9rem">Press the buttons to change the variables. Watch the values update in real time — just like Scratch!</p>
          <div id="varGame-u3l4" style="display:grid;grid-template-columns:1fr 1fr;gap:0.8rem;margin-bottom:1rem"></div>
          <div class="scratch-blocks" id="varControls-u3l4"></div>
          <div style="margin-top:0.7rem;background:var(--code-bg);border-radius:10px;padding:0.7rem 1rem;font-family:'Fira Code',monospace;font-size:0.82rem;color:#c3e88d;min-height:32px;line-height:1.8" id="var-log-u3l4"></div>
        </div>
      `,
      code:`
        <div class="code-panel">
          <div class="code-top"><div class="c-dots"><div class="c-dot" style="background:#ff5f56"></div><div class="c-dot" style="background:#ffbd2e"></div><div class="c-dot" style="background:#27c93f"></div></div><span class="code-lbl">python3 — variables</span></div>
          <pre class="cb"><span class="cc"># Creating variables</span>
<span class="cv">score</span>       <span class="co">=</span> <span class="cn">0</span>
<span class="cv">lives</span>       <span class="co">=</span> <span class="cn">3</span>
<span class="cv">player_name</span> <span class="co">=</span> <span class="cs">"Jake"</span>
<span class="cv">is_alive</span>    <span class="co">=</span> <span class="ck">True</span>

<span class="cc"># Reading a variable</span>
<span class="cf">print</span>(<span class="cs">f"</span><span class="cv">{player_name}</span><span class="cs"> has score: </span><span class="cv">{score}</span><span class="cs">"</span>)

<span class="cc"># Changing a variable (the box now holds a new value)</span>
<span class="cv">score</span> <span class="co">=</span> <span class="cv">score</span> <span class="co">+</span> <span class="cn">10</span>   <span class="cc"># or: score += 10</span>
<span class="cf">print</span>(<span class="cs">f"After collecting coin: </span><span class="cv">{score}</span><span class="cs">"</span>)

<span class="cc"># Variables in a simple game loop</span>
<span class="ck">while</span> <span class="cv">lives</span> <span class="co">></span> <span class="cn">0</span>:
    <span class="cv">answer</span> <span class="co">=</span> <span class="cf">input</span>(<span class="cs">"Guess (1-5): "</span>)
    <span class="ck">if</span> <span class="cv">answer</span> <span class="co">==</span> <span class="cs">"3"</span>:
        <span class="cv">score</span> <span class="co">+=</span> <span class="cn">10</span>
        <span class="cf">print</span>(<span class="cs">"Correct! Score:"</span>, <span class="cv">score</span>)
    <span class="ck">else</span>:
        <span class="cv">lives</span> <span class="co">-=</span> <span class="cn">1</span>
        <span class="cf">print</span>(<span class="cs">"Wrong. Lives left:"</span>, <span class="cv">lives</span>)</pre>
        </div>
      `,
      questions:[
        {q:'What is a variable in programming?',opts:['A fixed value that never changes','A named storage location that holds a value','A type of loop','A decision the computer makes'],ans:1,why:'A variable is a named location in memory that stores a value. The value can be read, used in calculations, and changed during the program.'},
        {q:'You have: score = 10, then score = score + 5. What is score now?',opts:['10','5','15','score + 5'],ans:2,why:'score starts at 10. Then score is updated to score + 5 = 10 + 5 = 15. The right-hand side is calculated first, then stored back into score.'},
        {q:'Which variable name follows good naming conventions?',opts:['1score','player score','player_score','PLAYER'],ans:2,why:'"player_score" uses an underscore, lowercase letters, and clearly describes what it stores. Variable names can\'t start with numbers or contain spaces.'},
        {q:'What type of value does a Boolean variable hold?',opts:['A number','A word','True or False only','A list of items'],ans:2,why:'Boolean variables only hold True or False. They\'re used for flags and conditions — e.g. is_game_over = True, is_logged_in = False.'},
      ]
    },

    {
      id:'u3l5', emoji:'🎪', title:'Events',
      intro:'Events make programs interactive. Instead of running once and stopping, the program waits and responds to what the user does.',
      learn:`
        <div class="learn-block">
          <h3>🎪 What is an event?</h3>
          <p>An <span class="kt">event</span> is something that happens that the program can react to — a key press, a mouse click, a timer going off, or a message from another part of the program.</p>
          <div class="story-box">
            <p>Imagine a hotel receptionist. They don't just do one task and go home — they <em>wait</em>. When a guest presses the buzzer, they respond. When the phone rings, they pick it up. When a parcel arrives, they sign for it.<br><br>
            Each trigger (buzzer, phone, parcel) causes a specific reaction. The receptionist <strong>listens for events</strong> and <strong>responds accordingly</strong> — exactly like how Scratch listens for "when green flag clicked" or "when space key pressed" and runs the right set of blocks.</p>
          </div>
        </div>
        <div class="learn-block">
          <h3>🎮 Common Scratch events</h3>
          <ul>
            <li><strong>When green flag clicked</strong> — runs when the program starts</li>
            <li><strong>When [key] pressed</strong> — responds to keyboard input</li>
            <li><strong>When this sprite clicked</strong> — responds to mouse clicks</li>
            <li><strong>When I receive [message]</strong> — coordinates between sprites</li>
          </ul>
        </div>
      `,
      interactive:`
        <div class="interactive-wrap">
          <div class="i-label">🎪 EVENT LISTENER — press keys to trigger events</div>
          <p style="font-size:0.93rem;margin-bottom:0.9rem">Use the buttons to trigger events. Each event runs a different set of code!</p>
          <div class="scratch-stage" id="stage-u3l5">
            <div class="sprite" id="sprite-u3l5" style="left:42%;top:38%">🐱</div>
            <div id="speech-u3l5" style="position:absolute;background:white;border:2px solid #ccc;border-radius:10px 10px 10px 2px;padding:0.4rem 0.8rem;font-size:0.85rem;font-weight:700;display:none;top:20%;left:55%;max-width:140px;line-height:1.4"></div>
          </div>
          <div class="scratch-blocks">
            <button class="sb-btn sb-events" onclick="fireEvent('u3l5','start')">🟢 Green flag</button>
            <button class="sb-btn sb-events" onclick="fireEvent('u3l5','space')">⎵ Space pressed</button>
            <button class="sb-btn sb-events" onclick="fireEvent('u3l5','click')">🖱️ Sprite clicked</button>
            <button class="sb-btn sb-events" onclick="fireEvent('u3l5','left')">⬅️ Left arrow</button>
            <button class="sb-btn sb-events" onclick="fireEvent('u3l5','right')">➡️ Right arrow</button>
          </div>
          <div id="event-log-u3l5" style="margin-top:0.7rem;background:var(--code-bg);border-radius:10px;padding:0.7rem 1rem;font-family:'Fira Code',monospace;font-size:0.82rem;color:#c3e88d;min-height:40px;line-height:1.8"></div>
        </div>
      `,
      code:`
        <div class="code-panel">
          <div class="code-top"><div class="c-dots"><div class="c-dot" style="background:#ff5f56"></div><div class="c-dot" style="background:#ffbd2e"></div><div class="c-dot" style="background:#27c93f"></div></div><span class="code-lbl">python3 — event-driven with keyboard input</span></div>
          <pre class="cb"><span class="cc"># Python's input() is like "when key pressed" in Scratch</span>
<span class="cc"># The program WAITS for the user to do something</span>

<span class="ck">import</span> sys

<span class="ck">def</span> <span class="cf">on_start</span>():
    <span class="cf">print</span>(<span class="cs">"🟢 Game started! Controls: W=up, S=down, Q=quit"</span>)

<span class="ck">def</span> <span class="cf">on_key</span>(<span class="cv">key</span>):
    <span class="ck">if</span>   <span class="cv">key</span> <span class="co">==</span> <span class="cs">'w'</span>: <span class="cf">print</span>(<span class="cs">"⬆️ Moved up"</span>)
    <span class="ck">elif</span> <span class="cv">key</span> <span class="co">==</span> <span class="cs">'s'</span>: <span class="cf">print</span>(<span class="cs">"⬇️ Moved down"</span>)
    <span class="ck">elif</span> <span class="cv">key</span> <span class="co">==</span> <span class="cs">'q'</span>: <span class="cf">print</span>(<span class="cs">"👋 Goodbye!"</span>); sys.<span class="cf">exit</span>()
    <span class="ck">else</span>: <span class="cf">print</span>(<span class="cs">f"Unknown key: </span><span class="cv">{key}</span><span class="cs">"</span>)

<span class="cc"># "When green flag clicked"</span>
<span class="cf">on_start</span>()

<span class="cc"># "Forever: wait for key press, then react"</span>
<span class="ck">while</span> <span class="ck">True</span>:
    <span class="cv">pressed</span> <span class="co">=</span> <span class="cf">input</span>(<span class="cs">"Press a key: "</span>).<span class="cf">lower</span>()
    <span class="cf">on_key</span>(<span class="cv">pressed</span>)</pre>
        </div>
      `,
      questions:[
        {q:'What is an event in Scratch?',opts:['A type of variable','Something that triggers a set of blocks to run','A loop that repeats forever','A way to change costume'],ans:1,why:'An event is a trigger — like clicking the green flag, pressing a key, or clicking a sprite — that causes a specific set of blocks to start running.'},
        {q:'Which Scratch block starts a script when the program begins?',opts:['When space key pressed','When this sprite clicked','When green flag clicked','When I receive'],ans:2,why:'"When green flag clicked" is the standard start event in Scratch. It\'s equivalent to the main() function or entry point in other languages.'},
        {q:'What makes event-driven programs different from simple sequences?',opts:['They don\'t use loops','They wait for user input and react, rather than running once','They can\'t use variables','They always run faster'],ans:1,why:'Event-driven programs run continuously, listening for events and responding to them. Simple sequences run once from top to bottom and stop.'},
        {q:'In Scratch, what does "When I receive [message]" allow?',opts:['The sprite to move automatically','Communication and coordination between different sprites','The program to end','The score to increase'],ans:1,why:'"When I receive" lets sprites communicate with each other via broadcast messages — useful for coordinating multiple characters in a game.'},
      ]
    },

    {
      id:'u3l6', emoji:'🏆', title:'Your Scratch Project',
      intro:'Now you combine everything — sequences, loops, conditions, variables and events — to build a real interactive project.',
      learn:`
        <div class="learn-block">
          <h3>🏆 Bringing it all together</h3>
          <p>Every program you've ever played or used combines these 5 building blocks:</p>
          <ul>
            <li>📋 <strong>Sequences</strong> — steps in order</li>
            <li>🔁 <strong>Loops</strong> — repeat without rewriting</li>
            <li>🤔 <strong>Conditions</strong> — make decisions</li>
            <li>📦 <strong>Variables</strong> — remember information</li>
            <li>🎪 <strong>Events</strong> — respond to the user</li>
          </ul>
          <div class="story-box">
            <p>Think of building a Scratch game like building a house. Sequences are the bricks — the basic structure. Loops are like repeating brick patterns — efficient, not tedious. Conditions are the doors — they open for some and not others. Variables are the light switches — they track whether something is on or off. Events are the doorbell — the house reacts when something happens outside.<br><br>
            You now have all the materials. It's time to build.</p>
          </div>
        </div>
        <div class="learn-block">
          <h3>🎮 Project idea: catch the falling star</h3>
          <ul>
            <li>A star falls from the top of the screen</li>
            <li>Player moves a catcher left/right with arrow keys (events)</li>
            <li>Score increases when star is caught (variable)</li>
            <li>Star resets to top when caught or touches bottom (condition)</li>
            <li>Game runs forever in a loop</li>
          </ul>
        </div>
      `,
      interactive:`
        <div class="interactive-wrap">
          <div class="i-label">🏆 MINI CATCH GAME — use arrow keys (or buttons)</div>
          <p style="font-size:0.93rem;margin-bottom:0.9rem">Catch the falling ⭐ with the 🧺 basket. All 5 programming concepts in one game!</p>
          <div class="scratch-stage" id="stage-u3l6" style="height:260px">
            <div id="star-u3l6"   style="position:absolute;font-size:1.8rem;transition:top 0.1s linear">⭐</div>
            <div id="basket-u3l6" style="position:absolute;font-size:2rem;bottom:10px">🧺</div>
            <div id="score-u3l6"  style="position:absolute;top:10px;right:14px;font-family:'Lexend',sans-serif;font-size:0.85rem;font-weight:800;background:rgba(0,0,0,0.5);color:white;padding:0.2rem 0.6rem;border-radius:20px">Score: 0</div>
          </div>
          <div style="display:flex;gap:0.5rem;justify-content:center;margin-top:0.7rem;flex-wrap:wrap">
            <button class="btn btn-outline btn-sm" onpointerdown="startBasketMove('u3l6',-1)" onpointerup="stopBasketMove('u3l6')" ontouchstart="startBasketMove('u3l6',-1)" ontouchend="stopBasketMove('u3l6')">◀ Left</button>
            <button class="btn btn-check btn-sm" onclick="toggleCatchGame('u3l6')" id="gameBtn-u3l6">▶ Start</button>
            <button class="btn btn-outline btn-sm" onpointerdown="startBasketMove('u3l6',1)" onpointerup="stopBasketMove('u3l6')" ontouchstart="startBasketMove('u3l6',1)" ontouchend="stopBasketMove('u3l6')">Right ▶</button>
          </div>
        </div>
      `,
      code:`
        <div class="code-panel">
          <div class="code-top"><div class="c-dots"><div class="c-dot" style="background:#ff5f56"></div><div class="c-dot" style="background:#ffbd2e"></div><div class="c-dot" style="background:#27c93f"></div></div><span class="code-lbl">python3 — all 5 concepts in one script</span></div>
          <pre class="cb"><span class="cc"># 📦 Variables</span>
<span class="cv">score</span>  <span class="co">=</span> <span class="cn">0</span>
<span class="cv">lives</span>  <span class="co">=</span> <span class="cn">3</span>
<span class="cv">secret</span> <span class="co">=</span> <span class="cn">42</span>

<span class="cf">print</span>(<span class="cs">"🎮 Guess the number (1-100). You have 3 lives."</span>)

<span class="cc"># 🔁 Loop + 🎪 Event (waiting for input)</span>
<span class="ck">while</span> <span class="cv">lives</span> <span class="co">></span> <span class="cn">0</span>:
    <span class="cv">guess</span> <span class="co">=</span> <span class="cf">int</span>(<span class="cf">input</span>(<span class="cs">f"Lives: {lives} | Score: {score} | Guess: "</span>))

    <span class="cc"># 🤔 Conditions (decisions)</span>
    <span class="ck">if</span> <span class="cv">guess</span> <span class="co">==</span> <span class="cv">secret</span>:
        <span class="cv">score</span> <span class="co">+=</span> <span class="cn">100</span>
        <span class="cf">print</span>(<span class="cs">f"✅ Correct! Score is now {score}"</span>)
        <span class="ck">break</span>
    <span class="ck">elif</span> <span class="cv">guess</span> <span class="co">&lt;</span> <span class="cv">secret</span>:
        <span class="cf">print</span>(<span class="cs">"⬆️ Too low!"</span>)
        <span class="cv">lives</span> <span class="co">-=</span> <span class="cn">1</span>
    <span class="ck">else</span>:
        <span class="cf">print</span>(<span class="cs">"⬇️ Too high!"</span>)
        <span class="cv">lives</span> <span class="co">-=</span> <span class="cn">1</span>

<span class="cc"># 📋 Sequence at the end</span>
<span class="ck">if</span> <span class="cv">lives</span> <span class="co">==</span> <span class="cn">0</span>:
    <span class="cf">print</span>(<span class="cs">f"💀 Game over! The answer was {secret}"</span>)</pre>
        </div>
      `,
      questions:[
        {q:'Which concept do you use to keep a game running until the player quits?',opts:['A sequence','A condition','A loop','A variable'],ans:2,why:'A loop (while the game is running) keeps the game going. Without a loop, the program would run once and stop.'},
        {q:'The game needs to remember the player\'s score. Which concept is that?',opts:['An event','A variable','A loop','A sequence'],ans:1,why:'Variables store information that changes during the program — like a score counter, lives remaining, or player name.'},
        {q:'The player presses the LEFT arrow key and the sprite moves. What concept is this?',opts:['A loop','A variable','A sequence','An event'],ans:3,why:'Responding to a key press is an event. The event triggers a set of code — in this case, moving the sprite left.'},
        {q:'The game checks: "if touching star then add 1 to score". What concept is this?',opts:['A loop','A sequence','A condition','A variable'],ans:2,why:'Checking "if touching star" is a condition. If it\'s true, the score increases; if false, nothing happens. That\'s a conditional decision.'},
      ]
    },

  ]
};
