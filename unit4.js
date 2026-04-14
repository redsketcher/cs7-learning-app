// ═══════════════════════════════════════════════════════
//  UNIT 4 — PYTHON PROGRAMMING
// ═══════════════════════════════════════════════════════

window.UNIT4 = {
  id: 'u4', color: '#8b35c8', bg: '#f4eafd',
  title: 'Python Programming',
  desc: 'Your first real programs — print, variables, input, if, loops',
  lessons: [

    {
      id:'u4l1', emoji:'🐍', title:'Your First Python Program',
      intro:'Python is one of the most popular programming languages on Earth. It\'s used to build websites, analyse data, create AI, and control robots.',
      learn:`
        <div class="learn-block">
          <h3>🐍 Why Python?</h3>
          <p>Python is designed to read almost like English. Compare it to other languages — Python is one of the most readable. That's why it's perfect for learning.</p>
          <p>Used by: <strong>Google, Netflix, NASA, Instagram, YouTube,</strong> and almost every AI research lab on Earth.</p>
        </div>
        <div class="learn-block">
          <h3>🖨️ print() — talking to the screen</h3>
          <p>The very first thing most programmers learn is <span class="kt">print()</span>. It tells Python to display something on screen.</p>
          <div class="story-box">
            <p>Imagine a loudspeaker system in a building. You walk up, speak into the microphone, and your voice comes out of the speakers everywhere.<br><br>
            <strong>print()</strong> is your microphone. Whatever you put inside the brackets — in quotes — gets spoken out loud to the screen. Try it: <code style="background:#f0e8d8;padding:0.1em 0.4em;border-radius:4px">print("Hello, World!")</code> — that one line is the first program almost every programmer in history has written.</p>
          </div>
        </div>
        <div class="learn-block">
          <h3>📝 Strings — text in quotes</h3>
          <p>Any text in Python must be wrapped in <strong>quotes</strong> — either "double" or 'single'. This tells Python it's text, not a command.</p>
          <p><code style="background:var(--warm);padding:0.1em 0.4em;border-radius:4px">print("Hello")</code> ✅ &nbsp;&nbsp; <code style="background:var(--warm);padding:0.1em 0.4em;border-radius:4px">print(Hello)</code> ❌ (Python thinks Hello is a variable name)</p>
        </div>
      `,
      interactive:`
        <div class="interactive-wrap">
          <div class="i-label">🐍 PYTHON TERMINAL — type and run code</div>
          <p style="font-size:0.93rem;margin-bottom:0.9rem">Type Python code and press Run. This is exactly what your terminal looks like!</p>
          <div class="term-sim">
            <div class="term-out" id="term-out-u4l1">>>> Ready. Type your first command below!</div>
            <div class="term-in-row">
              <span class="term-prompt">>>></span>
              <input class="term-in" id="term-in-u4l1" placeholder='print("Hello, World!")' onkeydown="if(event.key==='Enter') runPython('u4l1')">
              <button class="term-run" onclick="runPython('u4l1')">▶ Run</button>
            </div>
          </div>
          <div style="display:flex;gap:0.5rem;flex-wrap:wrap;margin-top:0.7rem">
            <button class="btn btn-outline btn-sm" onclick="fillAndRun('u4l1','print(&quot;Hello, World!&quot;)')">Try: Hello World</button>
            <button class="btn btn-outline btn-sm" onclick="fillAndRun('u4l1','print(2 + 2)')">Try: 2 + 2</button>
            <button class="btn btn-outline btn-sm" onclick="fillAndRun('u4l1','print(&quot;My name is Jake&quot;)')">Try: Your name</button>
            <button class="btn btn-outline btn-sm" onclick="clearTerm('u4l1')">Clear 🗑️</button>
          </div>
        </div>
      `,
      code:`
        <div class="code-panel">
          <div class="code-top"><div class="c-dots"><div class="c-dot" style="background:#ff5f56"></div><div class="c-dot" style="background:#ffbd2e"></div><div class="c-dot" style="background:#27c93f"></div></div><span class="code-lbl">hello.py — save this and run it</span></div>
          <pre class="cb"><span class="cc"># My first Python program</span>
<span class="cc"># The # symbol makes a comment — Python ignores it</span>
<span class="cc"># Comments are notes for humans, not the computer</span>

<span class="cf">print</span>(<span class="cs">"Hello, World!"</span>)
<span class="cf">print</span>(<span class="cs">"My name is Jake"</span>)
<span class="cf">print</span>(<span class="cs">"I am learning Python"</span>)
<span class="cf">print</span>()                    <span class="cc"># empty print = blank line</span>
<span class="cf">print</span>(<span class="cs">"Let's do some maths:"</span>)
<span class="cf">print</span>(<span class="cn">10</span> <span class="co">+</span> <span class="cn">5</span>)              <span class="cc"># → 15  (no quotes = do the maths)</span>
<span class="cf">print</span>(<span class="cn">100</span> <span class="co">-</span> <span class="cn">37</span>)            <span class="cc"># → 63</span>
<span class="cf">print</span>(<span class="cn">6</span> <span class="co">*</span> <span class="cn">7</span>)               <span class="cc"># → 42  (* means multiply)</span>
<span class="cf">print</span>(<span class="cn">20</span> <span class="co">/</span> <span class="cn">4</span>)              <span class="cc"># → 5.0 (/ means divide)</span>
<span class="cf">print</span>(<span class="cn">2</span> <span class="co">**</span> <span class="cn">10</span>)             <span class="cc"># → 1024 (** means power)</span></pre>
        </div>
        <div class="bash-panel">
          <div class="bash-top"><div class="c-dots"><div class="c-dot" style="background:#ff5f56"></div><div class="c-dot" style="background:#ffbd2e"></div><div class="c-dot" style="background:#27c93f"></div></div><span class="bash-lbl">Windows terminal — create and run your first file</span></div>
          <pre class="bb"><span class="bx"># Step 1: open VS Code, create hello.py, paste the code above</span>
<span class="bx"># Step 2: open terminal in VS Code (Ctrl + \`)</span>
<span class="bp">C:\\></span> <span class="bc">python hello.py</span>
<span class="bo">Hello, World!
My name is Jake
I am learning Python</span>
<span class="bx"># Congratulations — you're a programmer! 🎉</span></pre>
        </div>
      `,
      questions:[
        {q:'What does print() do in Python?',opts:['Sends a document to the printer','Saves a file','Displays output on the screen','Imports a module'],ans:2,why:'print() outputs text or values to the terminal/screen. It\'s how Python communicates results back to you.'},
        {q:'Which of these is CORRECT Python syntax?',opts:['print(Hello)','print{"Hello"}','print("Hello")','Print("Hello")'],ans:2,why:'print("Hello") is correct. The text must be in quotes, and Python is case-sensitive — Print with capital P would cause an error.'},
        {q:'What does the # symbol do in Python?',opts:['Multiplies two numbers','Creates a variable','Starts a comment — Python ignores everything after it','Prints a hashtag symbol'],ans:2,why:'# starts a comment. Python ignores everything on that line after the #. Comments are notes for humans reading the code.'},
        {q:'What is the result of print(2 ** 8)?',opts:['16','28','256','64'],ans:2,why:'** means "to the power of". 2 ** 8 = 2×2×2×2×2×2×2×2 = 256. This is also the number of values one byte can hold!'},
      ]
    },

    {
      id:'u4l2', emoji:'📦', title:'Variables in Python',
      intro:'Variables are the memory of your program. Without them, a program can\'t remember anything between one line and the next.',
      learn:`
        <div class="learn-block">
          <h3>📦 Storing values in Python</h3>
          <p>In Python, you create a variable by writing a name, an <code style="background:var(--warm);padding:0.1em 0.4em;border-radius:4px">=</code> sign, and a value. Python figures out the type automatically.</p>
          <div class="story-box">
            <p>Your program's memory is like a row of jars on a kitchen shelf. Each jar has a label — that's the variable name. Each jar has contents — that's the value.<br><br>
            When you write <code style="background:#f0e8d8;padding:0.1em 0.4em;border-radius:4px">score = 0</code>, you're taking a fresh jar, sticking a label on it that says "score", and dropping the number zero inside. Later, when you write <code style="background:#f0e8d8;padding:0.1em 0.4em;border-radius:4px">score = score + 10</code>, you tip out the old value, add 10, and pour the new value back in. The jar stays — only the contents change.</p>
          </div>
        </div>
        <div class="learn-block">
          <h3>🔢 Data types</h3>
          <p>Python variables can hold different types of data:</p>
          <ul>
            <li><strong>int</strong> (integer — whole number) — <code style="background:var(--warm);padding:0.1em 0.4em;border-radius:4px">age = 11</code></li>
            <li><strong>float</strong> (floating point — decimal number) — <code style="background:var(--warm);padding:0.1em 0.4em;border-radius:4px">height = 1.65</code></li>
            <li><strong>str</strong> (string — a piece of text) — <code style="background:var(--warm);padding:0.1em 0.4em;border-radius:4px">name = "Jake"</code></li>
            <li><strong>bool</strong> (boolean — only True or False) — <code style="background:var(--warm);padding:0.1em 0.4em;border-radius:4px">is_alive = True</code></li>
          </ul>
        </div>
      `,
      interactive:`
        <div class="interactive-wrap">
          <div class="i-label">📦 VARIABLE EXPLORER — live values</div>
          <p style="font-size:0.93rem;margin-bottom:0.9rem">Create variables and change their values. Watch what happens in the code panel!</p>
          <div class="term-sim">
            <div class="term-out" id="term-out-u4l2">>>> Try creating some variables!</div>
            <div class="term-in-row">
              <span class="term-prompt">>>></span>
              <input class="term-in" id="term-in-u4l2" placeholder='name = "Jake"' onkeydown="if(event.key==='Enter') runPython('u4l2')">
              <button class="term-run" onclick="runPython('u4l2')">▶ Run</button>
            </div>
          </div>
          <div style="display:flex;gap:0.5rem;flex-wrap:wrap;margin-top:0.7rem">
            <button class="btn btn-outline btn-sm" onclick="fillAndRun('u4l2','name = &quot;Jake&quot;')">name = "Jake"</button>
            <button class="btn btn-outline btn-sm" onclick="fillAndRun('u4l2','score = 0')">score = 0</button>
            <button class="btn btn-outline btn-sm" onclick="fillAndRun('u4l2','score = score + 10')">score += 10</button>
            <button class="btn btn-outline btn-sm" onclick="fillAndRun('u4l2','print(type(score))')">print(type(score))</button>
            <button class="btn btn-outline btn-sm" onclick="clearTerm('u4l2')">Clear 🗑️</button>
          </div>
        </div>
      `,
      code:`
        <div class="code-panel">
          <div class="code-top"><div class="c-dots"><div class="c-dot" style="background:#ff5f56"></div><div class="c-dot" style="background:#ffbd2e"></div><div class="c-dot" style="background:#27c93f"></div></div><span class="code-lbl">variables.py</span></div>
          <pre class="cb"><span class="cc"># Creating variables — Python detects type automatically</span>
<span class="cv">name</span>     <span class="co">=</span> <span class="cs">"Jake"</span>       <span class="cc"># str  (string)</span>
<span class="cv">age</span>      <span class="co">=</span> <span class="cn">11</span>          <span class="cc"># int  (integer)</span>
<span class="cv">height</span>   <span class="co">=</span> <span class="cn">1.65</span>        <span class="cc"># float (decimal)</span>
<span class="cv">is_alive</span> <span class="co">=</span> <span class="ck">True</span>        <span class="cc"># bool (True/False)</span>

<span class="cc"># f-strings — embed variables inside text neatly</span>
<span class="cf">print</span>(<span class="cs">f"Name: </span><span class="cv">{name}</span><span class="cs">"</span>)
<span class="cf">print</span>(<span class="cs">f"Age: </span><span class="cv">{age}</span><span class="cs">"</span>)
<span class="cf">print</span>(<span class="cs">f"Height: </span><span class="cv">{height}</span><span class="cs">m"</span>)

<span class="cc"># Maths with variables</span>
<span class="cv">score</span>  <span class="co">=</span> <span class="cn">50</span>
<span class="cv">bonus</span>  <span class="co">=</span> <span class="cn">25</span>
<span class="cv">total</span>  <span class="co">=</span> <span class="cv">score</span> <span class="co">+</span> <span class="cv">bonus</span>
<span class="cf">print</span>(<span class="cs">f"Total score: </span><span class="cv">{total}</span><span class="cs">"</span>)  <span class="cc"># → Total score: 75</span>

<span class="cc"># type() tells you what type a variable is</span>
<span class="cf">print</span>(<span class="cf">type</span>(<span class="cv">name</span>))    <span class="cc"># → &lt;class 'str'&gt;</span>
<span class="cf">print</span>(<span class="cf">type</span>(<span class="cv">age</span>))     <span class="cc"># → &lt;class 'int'&gt;</span>
<span class="cf">print</span>(<span class="cf">type</span>(<span class="cv">height</span>))  <span class="cc"># → &lt;class 'float'&gt;</span></pre>
        </div>
      `,
      questions:[
        {q:'What is the correct way to create a variable called "score" with value 10?',opts:['score == 10','10 = score','variable score = 10','score = 10'],ans:3,why:'score = 10 is the correct Python syntax. One = sign assigns a value. Two == signs (==) compare values.'},
        {q:'What data type is the variable: name = "Python"?',opts:['int','float','bool','str'],ans:3,why:'"Python" is surrounded by quotes, making it a string (str) — text data.'},
        {q:'What does print(type(42)) output?',opts:["&lt;class 'str'&gt;",'42',"&lt;class 'int'&gt;",'int'],ans:2,why:"42 is a whole number — an integer. type() returns the class name, so the output is &lt;class 'int'&gt;."},
        {q:'You write: x = 5, then x = x * 2. What is x?',opts:['5','10','25','x * 2'],ans:1,why:'x starts as 5. Then x is updated to x * 2 = 5 * 2 = 10. The right side is evaluated first, then stored back into x.'},
      ]
    },

    {
      id:'u4l3', emoji:'⌨️', title:'Input and Output',
      intro:'input() lets users talk TO your program. print() lets your program talk back. Together they make programs interactive.',
      learn:`
        <div class="learn-block">
          <h3>⌨️ input() — listening to the user</h3>
          <p><span class="kt">input()</span> pauses the program and waits for the user to type something. When they press Enter, whatever they typed is returned as text.</p>
          <div class="story-box">
            <p>Imagine a vending machine. You walk up, it shows you a menu and waits. You press a button — your input. The machine reads your choice, processes it, and gives you your snack — its output. Then it resets and waits again.<br><br>
            <code style="background:#f0e8d8;padding:0.1em 0.4em;border-radius:4px">name = input("What is your name? ")</code> works exactly like this. The machine (program) shows a message, waits for you to type, then stores whatever you typed inside the <code>name</code> variable to use later.</p>
          </div>
        </div>
        <div class="learn-block">
          <h3>⚠️ input() always gives you text</h3>
          <p>Even if you type <strong>42</strong>, input() gives you the string <strong>"42"</strong> — not the number. You must convert it: <code style="background:var(--warm);padding:0.1em 0.4em;border-radius:4px">int(input(...))</code> to get a number.</p>
        </div>
      `,
      interactive:`
        <div class="interactive-wrap">
          <div class="i-label">⌨️ INTERACTIVE PROGRAMS — simulate input</div>
          <p style="font-size:0.93rem;margin-bottom:0.9rem">These simulate real Python input() programs. Type your answer and see the output!</p>
          <div id="inputSims-u4l3"></div>
        </div>
      `,
      code:`
        <div class="code-panel">
          <div class="code-top"><div class="c-dots"><div class="c-dot" style="background:#ff5f56"></div><div class="c-dot" style="background:#ffbd2e"></div><div class="c-dot" style="background:#27c93f"></div></div><span class="code-lbl">input_output.py</span></div>
          <pre class="cb"><span class="cc"># Basic input and output</span>
<span class="cv">name</span> <span class="co">=</span> <span class="cf">input</span>(<span class="cs">"What is your name? "</span>)
<span class="cf">print</span>(<span class="cs">f"Hello, </span><span class="cv">{name}</span><span class="cs">! Welcome to Python."</span>)

<span class="cc"># Converting input to a number for maths</span>
<span class="cv">age_str</span> <span class="co">=</span> <span class="cf">input</span>(<span class="cs">"How old are you? "</span>)
<span class="cv">age</span>     <span class="co">=</span> <span class="cf">int</span>(<span class="cv">age_str</span>)          <span class="cc"># convert text "11" → number 11</span>
<span class="cv">future</span>  <span class="co">=</span> <span class="cv">age</span> <span class="co">+</span> <span class="cn">10</span>
<span class="cf">print</span>(<span class="cs">f"In 10 years you'll be </span><span class="cv">{future}</span><span class="cs">"</span>)

<span class="cc"># Shortcut: int() directly around input()</span>
<span class="cv">num1</span> <span class="co">=</span> <span class="cf">int</span>(<span class="cf">input</span>(<span class="cs">"First number: "</span>))
<span class="cv">num2</span> <span class="co">=</span> <span class="cf">int</span>(<span class="cf">input</span>(<span class="cs">"Second number: "</span>))
<span class="cf">print</span>(<span class="cs">f"</span><span class="cv">{num1}</span><span class="cs"> + </span><span class="cv">{num2}</span><span class="cs"> = </span><span class="cv">{num1 + num2}</span><span class="cs">"</span>)
<span class="cf">print</span>(<span class="cs">f"</span><span class="cv">{num1}</span><span class="cs"> x </span><span class="cv">{num2}</span><span class="cs"> = </span><span class="cv">{num1 * num2}</span><span class="cs">"</span>)</pre>
        </div>
        <div class="bash-panel">
          <div class="bash-top"><div class="c-dots"><div class="c-dot" style="background:#ff5f56"></div><div class="c-dot" style="background:#ffbd2e"></div><div class="c-dot" style="background:#27c93f"></div></div><span class="bash-lbl">Run it live in your terminal!</span></div>
          <pre class="bb"><span class="bp">C:\\></span> <span class="bc">python input_output.py</span>
<span class="bo">What is your name? Jake
Hello, Jake! Welcome to Python.
How old are you? 11
In 10 years you'll be 21
First number: 7
Second number: 8
7 + 8 = 15
7 x 8 = 56</span></pre>
        </div>
      `,
      questions:[
        {q:'What does input() do?',opts:['Prints text to the screen','Pauses the program and waits for the user to type something','Imports a Python library','Creates a variable'],ans:1,why:'input() displays a prompt and waits for the user to type. When they press Enter, it returns what they typed as a string.'},
        {q:'The user types 25 into input(). What type is the value returned?',opts:['int (integer)','float','str (string)','bool'],ans:2,why:'input() always returns a string, even if the user types a number. You must use int() or float() to convert it for maths.'},
        {q:'What does int(input("Enter age: ")) do?',opts:['Converts your age to binary','Gets the user\'s input and immediately converts it to a whole number','Prints the user\'s age','Creates an integer variable called input'],ans:1,why:'int() wraps around input() to convert the user\'s text input into an integer immediately — ready for maths operations.'},
        {q:'What appears on screen when Python runs: print(f"Hi {name}")  where name = "Sam"?',opts:['Hi {name}','Hi name','Hi Sam','name'],ans:2,why:'f-strings (f"...") replace {variable_name} with the variable\'s actual value. So {name} becomes Sam.'},
      ]
    },

    {
      id:'u4l4', emoji:'🤔', title:'Conditions in Python',
      intro:'if, elif, and else let Python make decisions. The same logic that runs every game, every app, every website.',
      learn:`
        <div class="learn-block">
          <h3>🤔 if statements</h3>
          <p>An <span class="kt">if statement</span> checks a condition. If it's True, the indented block runs. If False, it's skipped.</p>
          <div class="story-box">
            <p>You're at a funfair and there's a rollercoaster. The sign says: <strong>"You must be at least 140cm tall to ride."</strong><br><br>
            The operator measures every person who walks up. If their height ≥ 140: they ride. Otherwise: "Sorry, come back when you're taller!"<br><br>
            Your Python program does the exact same thing. It measures something, compares it to a value, and takes different actions depending on the result. The indentation (the spaces before the code) tells Python which lines belong inside the "if".</p>
          </div>
        </div>
        <div class="learn-block">
          <h3>📐 Comparison operators</h3>
          <div class="fact-row">
            <span class="fact-chip">== equal to</span>
            <span class="fact-chip">!= not equal</span>
            <span class="fact-chip">&gt; greater than</span>
            <span class="fact-chip">&lt; less than</span>
            <span class="fact-chip">&gt;= greater or equal</span>
            <span class="fact-chip">&lt;= less or equal</span>
          </div>
        </div>
      `,
      interactive:`
        <div class="interactive-wrap">
          <div class="i-label">🤔 IF-CHAIN BUILDER</div>
          <p style="font-size:0.93rem;margin-bottom:0.9rem">Enter values and watch which branch of the if/elif/else chain runs!</p>
          <div class="term-sim">
            <div class="term-out" id="term-out-u4l4">>>> Try entering a number!</div>
            <div class="term-in-row">
              <span class="term-prompt">>>></span>
              <input class="term-in" id="term-in-u4l4" placeholder="Enter a number like: 85" onkeydown="if(event.key==='Enter') runPython('u4l4')">
              <button class="term-run" onclick="runPython('u4l4')">▶ Run</button>
            </div>
          </div>
          <div style="display:flex;gap:0.5rem;flex-wrap:wrap;margin-top:0.7rem">
            <button class="btn btn-outline btn-sm" onclick="fillAndRun('u4l4','95')">Try: 95</button>
            <button class="btn btn-outline btn-sm" onclick="fillAndRun('u4l4','75')">Try: 75</button>
            <button class="btn btn-outline btn-sm" onclick="fillAndRun('u4l4','55')">Try: 55</button>
            <button class="btn btn-outline btn-sm" onclick="fillAndRun('u4l4','30')">Try: 30</button>
          </div>
        </div>
      `,
      code:`
        <div class="code-panel">
          <div class="code-top"><div class="c-dots"><div class="c-dot" style="background:#ff5f56"></div><div class="c-dot" style="background:#ffbd2e"></div><div class="c-dot" style="background:#27c93f"></div></div><span class="code-lbl">conditions.py</span></div>
          <pre class="cb"><span class="cv">score</span> <span class="co">=</span> <span class="cf">int</span>(<span class="cf">input</span>(<span class="cs">"Enter your score (0-100): "</span>))

<span class="ck">if</span> <span class="cv">score</span> <span class="co">>=</span> <span class="cn">90</span>:
    <span class="cf">print</span>(<span class="cs">"Grade A ⭐ — Outstanding!"</span>)
<span class="ck">elif</span> <span class="cv">score</span> <span class="co">>=</span> <span class="cn">70</span>:
    <span class="cf">print</span>(<span class="cs">"Grade B 👍 — Well done!"</span>)
<span class="ck">elif</span> <span class="cv">score</span> <span class="co">>=</span> <span class="cn">50</span>:
    <span class="cf">print</span>(<span class="cs">"Grade C 📚 — Keep studying!"</span>)
<span class="ck">elif</span> <span class="cv">score</span> <span class="co">>=</span> <span class="cn">0</span>:
    <span class="cf">print</span>(<span class="cs">"Grade D 💪 — Don't give up!"</span>)
<span class="ck">else</span>:
    <span class="cf">print</span>(<span class="cs">"Invalid score"</span>)

<span class="cc"># Logical operators: and, or, not</span>
<span class="cv">age</span>     <span class="co">=</span> <span class="cf">int</span>(<span class="cf">input</span>(<span class="cs">"Your age: "</span>))
<span class="cv">has_ticket</span> <span class="co">=</span> <span class="cf">input</span>(<span class="cs">"Have a ticket? (yes/no): "</span>)

<span class="ck">if</span> <span class="cv">age</span> <span class="co">>=</span> <span class="cn">13</span> <span class="ck">and</span> <span class="cv">has_ticket</span> <span class="co">==</span> <span class="cs">"yes"</span>:
    <span class="cf">print</span>(<span class="cs">"Welcome! 🎟️"</span>)
<span class="ck">else</span>:
    <span class="cf">print</span>(<span class="cs">"Sorry, you can't enter"</span>)</pre>
        </div>
      `,
      questions:[
        {q:'In Python, what is the correct way to check if x equals 10?',opts:['x = 10','x == 10','x equals 10','if x is 10'],ans:1,why:'== (double equals) compares two values. Single = assigns a value. This is one of the most common beginner mistakes!'},
        {q:'In an if/elif/else chain, how many branches can run?',opts:['All of them','None of them','Exactly one','It depends on the values'],ans:2,why:'Only the first branch whose condition is True will run. Once a True condition is found, the rest are skipped — even if they would also be True.'},
        {q:'What does "elif" mean?',opts:['else if — checked only when previous conditions were False','Every if — all conditions are checked','End if — stops the if block','Else if loop — repeats the check'],ans:0,why:'"elif" means "else if" — it\'s only checked if all previous if/elif conditions were False. It allows chaining multiple conditions.'},
        {q:'if score >= 50 and score < 70: — when does this run?',opts:['When score is exactly 50 or 70','When score is between 50 and 69','When score is over 70','When score is under 50'],ans:1,why:'Both conditions must be True. Score must be at least 50 AND less than 70 — so values 50 through 69 inclusive.'},
      ]
    },

    {
      id:'u4l5', emoji:'🔁', title:'Loops in Python',
      intro:'for loops count through a range. while loops keep going until something changes. Both save you from writing the same code thousands of times.',
      learn:`
        <div class="learn-block">
          <h3>🔁 for loops — when you know how many times</h3>
          <p>Use a <span class="kt">for loop</span> when you know in advance how many times to repeat something. <code style="background:var(--warm);padding:0.1em 0.4em;border-radius:4px">for i in range(10):</code> repeats exactly 10 times.</p>
          <div class="story-box">
            <p>You're in a gym class and the teacher says: <strong>"Give me 20 push-ups."</strong> You don't decide when to stop — you were told the number upfront. You count to 20 and stop. That's a <strong>for loop</strong>.<br><br>
            Now the teacher says: <strong>"Keep going until I blow the whistle."</strong> You don't know when it'll stop — you just keep going until the condition changes. That's a <strong>while loop</strong>.</p>
          </div>
        </div>
        <div class="learn-block">
          <h3>⏳ while loops — when something needs to change</h3>
          <p>Use a <span class="kt">while loop</span> when you keep going until a condition becomes False — like "while the game is running" or "while the user hasn't guessed correctly".</p>
          <p>⚠️ <strong>Infinite loop danger:</strong> If the condition never becomes False, the loop runs forever. Always make sure something inside the loop changes the condition.</p>
        </div>
      `,
      interactive:`
        <div class="interactive-wrap">
          <div class="i-label">🔁 LOOP SIMULATOR</div>
          <div class="term-sim">
            <div class="term-out" id="term-out-u4l5">>>> Try the loop buttons below!</div>
            <div class="term-in-row">
              <span class="term-prompt">>>></span>
              <input class="term-in" id="term-in-u4l5" placeholder="for i in range(5): print(i)" onkeydown="if(event.key==='Enter') runPython('u4l5')">
              <button class="term-run" onclick="runPython('u4l5')">▶ Run</button>
            </div>
          </div>
          <div style="display:flex;gap:0.5rem;flex-wrap:wrap;margin-top:0.7rem">
            <button class="btn btn-outline btn-sm" onclick="fillAndRun('u4l5','for i in range(5):\\n  print(i)')">range(5)</button>
            <button class="btn btn-outline btn-sm" onclick="fillAndRun('u4l5','for i in range(1,11):\\n  print(i)')">1 to 10</button>
            <button class="btn btn-outline btn-sm" onclick="fillAndRun('u4l5','for i in range(0,20,2):\\n  print(i)')">Even numbers</button>
            <button class="btn btn-outline btn-sm" onclick="fillAndRun('u4l5','for i in range(10,0,-1):\\n  print(i)')">Count down</button>
            <button class="btn btn-outline btn-sm" onclick="clearTerm('u4l5')">Clear 🗑️</button>
          </div>
        </div>
      `,
      code:`
        <div class="code-panel">
          <div class="code-top"><div class="c-dots"><div class="c-dot" style="background:#ff5f56"></div><div class="c-dot" style="background:#ffbd2e"></div><div class="c-dot" style="background:#27c93f"></div></div><span class="code-lbl">loops.py</span></div>
          <pre class="cb"><span class="cc"># for loop — runs a fixed number of times</span>
<span class="ck">for</span> <span class="cv">i</span> <span class="ck">in</span> <span class="cf">range</span>(<span class="cn">1</span>, <span class="cn">6</span>):
    <span class="cf">print</span>(<span class="cs">f"Push-up number {i}"</span>)

<span class="cc"># for loop — iterating over a list</span>
<span class="cv">fruits</span> <span class="co">=</span> [<span class="cs">"apple"</span>, <span class="cs">"banana"</span>, <span class="cs">"mango"</span>]
<span class="ck">for</span> <span class="cv">fruit</span> <span class="ck">in</span> <span class="cv">fruits</span>:
    <span class="cf">print</span>(<span class="cs">f"I like </span><span class="cv">{fruit}</span><span class="cs">"</span>)

<span class="cc"># while loop — runs until condition is False</span>
<span class="cv">count</span> <span class="co">=</span> <span class="cn">1</span>
<span class="ck">while</span> <span class="cv">count</span> <span class="co">&lt;=</span> <span class="cn">5</span>:
    <span class="cf">print</span>(<span class="cs">f"Count: </span><span class="cv">{count}</span><span class="cs">"</span>)
    <span class="cv">count</span> <span class="co">+=</span> <span class="cn">1</span>   <span class="cc"># MUST increase count or it loops forever!</span>

<span class="cc"># Guessing game — while loop in action</span>
<span class="cv">secret</span> <span class="co">=</span> <span class="cn">7</span>
<span class="cv">guess</span>  <span class="co">=</span> <span class="cn">0</span>
<span class="ck">while</span> <span class="cv">guess</span> <span class="co">!=</span> <span class="cv">secret</span>:
    <span class="cv">guess</span> <span class="co">=</span> <span class="cf">int</span>(<span class="cf">input</span>(<span class="cs">"Guess 1-10: "</span>))
    <span class="ck">if</span> <span class="cv">guess</span> <span class="co">!=</span> <span class="cv">secret</span>:
        <span class="cf">print</span>(<span class="cs">"Try again!"</span>)
<span class="cf">print</span>(<span class="cs">"🎉 You got it!"</span>)</pre>
        </div>
      `,
      questions:[
        {q:'What does for i in range(3) do?',opts:['Loops forever','Runs the loop 3 times, with i = 0, 1, 2','Runs the loop 4 times','Creates a list of 3 items'],ans:1,why:'range(3) generates 0, 1, 2 — three values. The loop body runs once for each value, so 3 times total.'},
        {q:'When should you use a while loop instead of a for loop?',opts:['When you want to count from 1 to 10','When you don\'t know in advance how many times to repeat','When you want to loop exactly 5 times','When you need to loop through a list'],ans:1,why:'Use while when the number of repetitions depends on something happening during the loop — like a user guessing correctly or a game ending.'},
        {q:'What is an infinite loop?',opts:['A loop that runs exactly forever times','A loop whose condition never becomes False so it never stops','A loop that skips every other iteration','A loop inside another loop'],ans:1,why:'An infinite loop occurs when the while condition always remains True. The program runs forever and must be forcibly stopped (Ctrl+C in terminal).'},
        {q:'What does range(2, 10, 2) produce?',opts:['2, 3, 4, 5, 6, 7, 8, 9','2, 4, 6, 8, 10','2, 4, 6, 8','0, 2, 4, 6, 8'],ans:2,why:'range(start, stop, step) — start at 2, stop before 10, count by 2. That gives: 2, 4, 6, 8. Stop is exclusive so 10 is not included.'},
      ]
    },

    {
      id:'u4l6', emoji:'🏆', title:'Your Python Project',
      intro:'Combine everything you know to build a complete Python program. A real game, from scratch, that you could show anyone.',
      learn:`
        <div class="learn-block">
          <h3>🏆 You now know the fundamentals</h3>
          <p>Every professional Python developer started exactly where you are. Here's what you can now do:</p>
          <div class="fact-row">
            <span class="fact-chip">🖨️ print() output</span>
            <span class="fact-chip">📦 Variables</span>
            <span class="fact-chip">⌨️ input()</span>
            <span class="fact-chip">🤔 if/elif/else</span>
            <span class="fact-chip">🔁 for loops</span>
            <span class="fact-chip">⏳ while loops</span>
          </div>
        </div>
        <div class="learn-block">
          <h3>🎮 Build: Number Guessing Game</h3>
          <div class="story-box">
            <p>Here's your challenge — a complete game using every concept you've learned.<br><br>
            The computer picks a secret number. You have 5 attempts to guess it. After each wrong guess, the computer tells you whether to go higher or lower. Keep track of how many attempts it took. At the end, show a score based on how few guesses you used.<br><br>
            <strong>All 6 concepts at once.</strong> This is a real program. Write it, run it, show someone.</p>
          </div>
        </div>
      `,
      interactive:`
        <div class="interactive-wrap">
          <div class="i-label">🏆 PLAY THE COMPLETE GAME</div>
          <p style="font-size:0.93rem;margin-bottom:0.9rem">This is the exact program from the code panel below — running right here! Guess the number between 1 and 50.</p>
          <div id="finalGame-u4l6"></div>
        </div>
      `,
      code:`
        <div class="code-panel">
          <div class="code-top"><div class="c-dots"><div class="c-dot" style="background:#ff5f56"></div><div class="c-dot" style="background:#ffbd2e"></div><div class="c-dot" style="background:#27c93f"></div></div><span class="code-lbl">number_game.py — your first complete Python program</span></div>
          <pre class="cb"><span class="ck">import</span> random

<span class="cc"># 📦 Variables</span>
<span class="cv">secret</span>   <span class="co">=</span> random.<span class="cf">randint</span>(<span class="cn">1</span>, <span class="cn">50</span>)
<span class="cv">attempts</span> <span class="co">=</span> <span class="cn">0</span>
<span class="cv">max_tries</span><span class="co">=</span> <span class="cn">5</span>
<span class="cv">guessed</span>  <span class="co">=</span> <span class="ck">False</span>

<span class="cc"># 📋 Sequence — print the welcome</span>
<span class="cf">print</span>(<span class="cs">"🎮 Number Guessing Game!"</span>)
<span class="cf">print</span>(<span class="cs">f"Guess a number between 1 and 50. You have {max_tries} attempts."</span>)

<span class="cc"># ⏳ While loop — keep playing until out of attempts or correct</span>
<span class="ck">while</span> <span class="cv">attempts</span> <span class="co">&lt;</span> <span class="cv">max_tries</span> <span class="ck">and</span> <span class="ck">not</span> <span class="cv">guessed</span>:
    <span class="cc"># ⌨️ Input</span>
    <span class="cv">guess</span>    <span class="co">=</span> <span class="cf">int</span>(<span class="cf">input</span>(<span class="cs">f"Attempt {attempts+1}/{max_tries}: "</span>))
    <span class="cv">attempts</span> <span class="co">+=</span> <span class="cn">1</span>

    <span class="cc"># 🤔 Conditions</span>
    <span class="ck">if</span> <span class="cv">guess</span> <span class="co">==</span> <span class="cv">secret</span>:
        <span class="cv">guessed</span> <span class="co">=</span> <span class="ck">True</span>
    <span class="ck">elif</span> <span class="cv">guess</span> <span class="co">&lt;</span> <span class="cv">secret</span>:
        <span class="cf">print</span>(<span class="cs">"⬆️  Higher!"</span>)
    <span class="ck">else</span>:
        <span class="cf">print</span>(<span class="cs">"⬇️  Lower!"</span>)

<span class="cc"># 🤔 Final result</span>
<span class="ck">if</span> <span class="cv">guessed</span>:
    <span class="cv">stars</span> <span class="co">=</span> <span class="cn">6</span> <span class="co">-</span> <span class="cv">attempts</span>  <span class="cc"># fewer guesses = more stars</span>
    <span class="cf">print</span>(<span class="cs">f"🎉 Correct! You got it in {attempts} attempts!"</span>)
    <span class="cf">print</span>(<span class="cs">f"⭐ Score: </span><span class="cv">{'⭐' * stars}</span><span class="cs">"</span>)
<span class="ck">else</span>:
    <span class="cf">print</span>(<span class="cs">f"💀 Out of attempts! The number was {secret}"</span>)</pre>
        </div>
        <div class="bash-panel">
          <div class="bash-top"><div class="c-dots"><div class="c-dot" style="background:#ff5f56"></div><div class="c-dot" style="background:#ffbd2e"></div><div class="c-dot" style="background:#27c93f"></div></div><span class="bash-lbl">Run your final project</span></div>
          <pre class="bb"><span class="bp">C:\\></span> <span class="bc">python number_game.py</span>
<span class="bo">🎮 Number Guessing Game!
Guess a number between 1 and 50. You have 5 attempts.
Attempt 1/5: 25</span>
<span class="bo">⬆️  Higher!
Attempt 2/5: 37</span>
<span class="bo">⬇️  Lower!
Attempt 3/5: 31
🎉 Correct! You got it in 3 attempts!
⭐ Score: ⭐⭐⭐</span></pre>
        </div>
      `,
      questions:[
        {q:'What does random.randint(1, 50) do?',opts:['Always returns 25','Returns a random whole number between 1 and 50 inclusive','Returns a random decimal','Returns a random letter'],ans:1,why:'random.randint(a, b) returns a random integer between a and b, both inclusive. import random must be at the top of your file.'},
        {q:'In the game, what does "attempts += 1" do on each loop?',opts:['Resets attempts to zero','Multiplies attempts by 1','Increases the attempts counter by 1','Checks if attempts is correct'],ans:2,why:'+= 1 is shorthand for attempts = attempts + 1. It increments the counter by 1 each time a guess is made.'},
        {q:'The game uses "while attempts < max_tries and not guessed". When does the loop stop?',opts:['When attempts reaches exactly 5','When the player guesses correctly OR runs out of attempts','Only when guessed is True','Only when attempts = 0'],ans:1,why:'The loop stops when EITHER condition fails — when the player has used all their attempts, OR when they guess correctly (guessed becomes True).'},
        {q:'What concept does "import random" demonstrate that you\'ll learn more about later?',opts:['Variables','Modules — pre-written code you can add to your program','Loops','Input'],ans:1,why:'import brings in a module — a collection of pre-written functions. random is a built-in Python module. This is the beginning of learning about libraries and APIs.'},
      ]
    },

  ]
};
