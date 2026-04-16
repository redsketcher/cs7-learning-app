// ═══════════════════════════════════════════════════════
//  UNIT 1 — DIGITAL DATA
//  6 lessons, each with: learn blocks, story analogies,
//  interactive activities, code panel, and a 4-question test
// ═══════════════════════════════════════════════════════

window.UNIT1 = {
  id: 'u1',
  color: '#e85d2f',
  bg: '#fdf0eb',
  title: 'Digital Data',
  desc: 'Binary, bits & bytes — how computers store everything',
  lessons: [

    // ─────────────────────────────────────────────
    // 1.1  WHAT IS DIGITAL DATA?
    // ─────────────────────────────────────────────
    {
      id: 'u1l1', emoji: '💾',
      title: 'What is Digital Data?',
      intro: 'Every photo, game, song and message on a computer is made of data. But what actually IS data — and how does a machine understand it?',
      learn: `
        <div class="learn-block">
          <h3>🌍 Data is just information</h3>
          <p>The word <span class="kt">data</span> simply means <strong>information stored or sent somewhere</strong>. Your name is data. A photo is data. Even the temperature outside is data.</p>
          <p>Computers deal with data all day long — receiving it, processing it, storing it, and sending it.</p>
        </div>

        <div class="learn-block">
          <h3>📻 Analogue vs Digital</h3>
          <p><span class="kt">Analogue</span> signals are <strong>smooth and continuous</strong> — like a dimmer light switch that slides from fully off to fully on, hitting every value in between.</p>
          <p><span class="kt">Digital</span> signals only have <strong>two states — ON or OFF</strong>. There is nothing in between. Computers are digital machines.</p>

          <div class="story-box">
            <p>Imagine a water tap. You can turn it to any position — a tiny drip, a trickle, a gush. That's <strong>analogue</strong> — infinite positions.<br><br>
            Now imagine a light switch. It's either <strong>ON</strong> or <strong>OFF</strong>. No halfway. That's <strong>digital</strong>. Every single thing inside a computer works like that light switch.</p>
          </div>
        </div>

        <div class="learn-block">
          <h3>💡 Bits — the atom of computing</h3>
          <p>The smallest piece of digital data is called a <span class="kt">bit</span>. A bit is either <strong>0</strong> (off) or <strong>1</strong> (on). That's it.</p>
          <p>8 bits grouped together make a <span class="kt">byte</span>. One byte can store one character — like the letter A or the number 7.</p>
          <div class="fact-row">
            <span class="fact-chip">1 bit = 0 or 1</span>
            <span class="fact-chip">8 bits = 1 byte</span>
            <span class="fact-chip">1 byte ≈ 1 character</span>
          </div>
        </div>
      `,
      interactive: `
        <div class="interactive-wrap">
          <div class="i-label">🎮 SORT IT — Analogue or Digital?</div>
          <p style="font-size:0.93rem;margin-bottom:0.9rem">Tap each item to put it in the right box. Think — does it slide smoothly, or is it only ON/OFF?</p>
          <div class="sort-pool" id="pool-u1l1"></div>
          <div class="two-col">
            <div class="sort-zone">
              <div class="sort-zone-label">📻 Analogue (smooth)</div>
              <div class="drop-items" id="drop-analogue-u1l1" data-zone="analogue"></div>
            </div>
            <div class="sort-zone">
              <div class="sort-zone-label">💡 Digital (on/off)</div>
              <div class="drop-items" id="drop-digital-u1l1" data-zone="digital"></div>
            </div>
          </div>
          <button class="btn btn-check btn-sm" style="margin-top:0.9rem" onclick="checkSort('u1l1',{
            'thermometer':'analogue','vinyl record':'analogue','clock with hands':'analogue','dimmer switch':'analogue',
            'computer file':'digital','LED indicator':'digital','digital clock':'digital','barcode':'digital'
          })">Check my answers ✓</button>
          <div class="inline-fb" id="fb-sort-u1l1"></div>
        </div>

        <div class="interactive-wrap">
          <div class="i-label">💡 BUILD A BYTE — flip the light switches</div>
          <p style="font-size:0.93rem;margin-bottom:0.9rem">Each button is one <strong>bit</strong>. Tap to flip it ON (1) or OFF (0). Watch how the byte value changes!</p>
          <div class="bit-row" id="bits-u1l1"></div>
          <div class="bit-result" id="bitresult-u1l1">00000000 = 0</div>
        </div>
      `,
      code: `
        <div class="learn-block">
          <h3>💻 How Python sees characters and bits</h3>
          <p>Every letter has a <span class="kt">number code</span> called its ASCII value. Python lets you see these numbers — and even convert them to binary (0s and 1s).</p>
        </div>
        <div class="code-panel">
          <div class="code-top">
            <div class="c-dots"><div class="c-dot" style="background:#ff5f56"></div><div class="c-dot" style="background:#ffbd2e"></div><div class="c-dot" style="background:#27c93f"></div></div>
            <span class="code-lbl">python3 — type this in your terminal</span>
          </div>
          <pre class="cb"><span class="cc"># Every character has a number. ord() finds it.</span>
<span class="cf">print</span>(<span class="cf">ord</span>(<span class="cs">'A'</span>))     <span class="cc"># → 65</span>
<span class="cf">print</span>(<span class="cf">ord</span>(<span class="cs">'a'</span>))     <span class="cc"># → 97  (lowercase is a DIFFERENT number!)</span>
<span class="cf">print</span>(<span class="cf">ord</span>(<span class="cs">' '</span>))     <span class="cc"># → 32  (even a space has a number)</span>

<span class="cc"># chr() goes the other way — number → character</span>
<span class="cf">print</span>(<span class="cf">chr</span>(<span class="cn">65</span>))      <span class="cc"># → A</span>
<span class="cf">print</span>(<span class="cf">chr</span>(<span class="cn">72</span>))      <span class="cc"># → H</span>

<span class="cc"># bin() shows you the actual 0s and 1s the computer stores</span>
<span class="cf">print</span>(<span class="cf">bin</span>(<span class="cn">65</span>))      <span class="cc"># → 0b1000001  (ignore the 0b part)</span>
<span class="cf">print</span>(<span class="cf">bin</span>(<span class="cn">255</span>))     <span class="cc"># → 0b11111111 (all 8 bits ON = 255)</span></pre>
        </div>
        <div class="bash-panel">
          <div class="bash-top">
            <div class="c-dots"><div class="c-dot" style="background:#ff5f56"></div><div class="c-dot" style="background:#ffbd2e"></div><div class="c-dot" style="background:#27c93f"></div></div>
            <span class="bash-lbl">Windows terminal (try it!)</span>
          </div>
          <pre class="bb"><span class="bp">C:\\></span> <span class="bc">python</span>
<span class="bo">Python 3.x.x ...</span>
<span class="bp">>>></span> <span class="bc">print(ord('A'))</span>
<span class="bo">65</span>
<span class="bp">>>></span> <span class="bc">print(bin(65))</span>
<span class="bo">0b1000001</span>
<span class="bp">>>></span> <span class="bc">print(chr(90))</span>
<span class="bo">Z</span></pre>
        </div>
        <div class="terminal-tip">💡 <strong>To open the terminal in VS Code:</strong> Press <strong>Ctrl + \`</strong> (the key above Tab). Then type <strong>python</strong> and press Enter to start.</div>
      `,
      questionSets: [
        [
          { q: 'What is a bit?', opts: ['A type of computer program','The smallest unit of digital data — either 0 or 1','A unit of internet speed','8 bytes of memory'], ans: 1, why: 'A bit is the smallest possible piece of digital data. It can only ever be 0 (off) or 1 (on).' },
          { q: 'How many bits make one byte?', opts: ['4','16','8','2'], ans: 2, why: '8 bits grouped together make 1 byte. One byte is enough to store a single character like the letter A.' },
          { q: 'Which of these is an example of ANALOGUE data?', opts: ['A barcode','The reading on a mercury thermometer','A digital clock display','A computer file'], ans: 1, why: 'A mercury thermometer is analogue — the mercury rises smoothly through every possible value. Digital devices jump between fixed steps.' },
          { q: 'A computer can only understand two states. What are they?', opts: ['Yes and No','True and False','On (1) and Off (0)','Big and Small'], ans: 2, why: 'All digital computers work with just two electrical states — ON (represented as 1) and OFF (represented as 0). Everything else is built from combinations of these.' },
        ],
        [
          { q: 'What does "digital" mean when describing data?', opts: ['Data printed on paper','Data stored as continuous values','Data represented using only two states: 0 and 1','Data that changes over time'], ans: 2, why: 'Digital means data is represented using discrete values — specifically 0s and 1s. Everything a computer stores or processes is digital.' },
          { q: 'Which of these stores data in an ANALOGUE way?', opts: ['A USB stick','A vinyl record','A JPEG photo','A smartphone'], ans: 1, why: 'A vinyl record stores sound as a physical groove that varies continuously — that is analogue. The others store data as 0s and 1s.' },
          { q: 'Why do computers use binary (only 0 and 1) instead of more digits?', opts: ['It was invented that way by accident','Binary is easier for humans to read','Electronic circuits are simplest with just two states: on and off','0 and 1 are the only real numbers'], ans: 2, why: 'A circuit is either on or off. Those two physical states map perfectly to 1 and 0. Using more states would make circuits far more complex and error-prone.' },
          { q: 'What is a pixel?', opts: ['A unit of sound quality','A tiny square of colour that makes up a digital image','A type of processor','A unit of internet speed'], ans: 1, why: 'Every digital image is made from millions of tiny coloured squares called pixels — short for picture elements.' },
        ],
        [
          { q: 'Which best describes the difference between analogue and digital?', opts: ['Analogue is newer than digital','Digital uses only fixed values (0/1); analogue can be any value in a continuous range','Analogue is always higher quality','Digital can only store text'], ans: 1, why: 'Analogue data is continuous — it can take any value. Digital is discrete — always one of a fixed set of values, usually 0 or 1.' },
          { q: 'What does a computer use to represent ALL types of data — text, images, sound?', opts: ['Letters and numbers','Colours','0s and 1s','Words'], ans: 2, why: 'Everything inside a computer — text, images, sound, video — is ultimately stored and processed as 0s and 1s.' },
          { q: 'Which of these is NOT a type of digital data?', opts: ['An MP3 song','A text message','The warmth of sunlight on your skin','A digital photo'], ans: 2, why: 'The warmth of sunlight is a physical sensation that cannot be stored. The others can all be encoded and stored as digital data.' },
          { q: 'A vinyl record is analogue. When music is converted to digital (like MP3), what happens?', opts: ['The sound becomes continuous','The sound wave is sampled thousands of times per second and stored as numbers','The music is stored as pictures','The sound gets louder'], ans: 1, why: 'Analogue-to-digital conversion samples the sound wave at regular intervals and stores each measurement as a number — turning continuous sound into discrete digital data.' },
        ],
      ]
    },

    // ─────────────────────────────────────────────
    // 1.2  BINARY NUMBERS
    // ─────────────────────────────────────────────
    {
      id: 'u1l2', emoji: '🔢',
      title: 'Binary Numbers',
      intro: 'Computers count using only two digits: 0 and 1. This system is called binary. Once you understand it, you can read the computer\'s own language.',
      learn: `
        <div class="learn-block">
          <h3>🔟 Denary (the numbers we use)</h3>
          <p>We normally count in <span class="kt">denary</span> (also called base-10). We have 10 digits: 0 through 9. Each column is worth 10× more than the one to its right.</p>
          <div class="fact-row">
            <span class="fact-chip">Hundreds (100)</span>
            <span class="fact-chip">Tens (10)</span>
            <span class="fact-chip">Ones (1)</span>
          </div>
        </div>

        <div class="learn-block">
          <h3>⚡ Binary (base-2) — the computer's language</h3>
          <p>Binary uses only two digits: <strong>0</strong> and <strong>1</strong>. Each column is worth <strong>2× more</strong> than the one to its right.</p>
          <div class="fact-row">
            <span class="fact-chip">128</span>
            <span class="fact-chip">64</span>
            <span class="fact-chip">32</span>
            <span class="fact-chip">16</span>
            <span class="fact-chip">8</span>
            <span class="fact-chip">4</span>
            <span class="fact-chip">2</span>
            <span class="fact-chip">1</span>
          </div>

          <div class="story-box">
            <p>Imagine you have 8 light switches in a row, each with a label above it. The labels say: <strong>128 · 64 · 32 · 16 · 8 · 4 · 2 · 1</strong>.<br><br>
            If you flip a switch ON, you add its number to your total. If it's OFF, you add nothing.<br><br>
            So flipping on just the <strong>64</strong> and <strong>1</strong> switches gives you: 64 + 1 = <strong>65</strong>. And 65 is the code for the letter <strong>A</strong>. That's literally how your computer stores the letter A — as a row of switches.</p>
          </div>
        </div>

        <div class="learn-block">
          <h3>📝 Converting binary → denary</h3>
          <p>Read from left to right. For each <strong>1</strong> you see, add its column value. For each <strong>0</strong>, add nothing.</p>
          <p><strong>Example:</strong> <code style="background:var(--warm);padding:0.1em 0.4em;border-radius:4px">01001101</code><br>
          = 0+64+0+0+8+4+0+1 = <strong>77</strong></p>
        </div>
      `,
      interactive: `
        <div class="interactive-wrap">
          <div class="i-label">🔢 BINARY CALCULATOR — flip the switches</div>
          <p style="font-size:0.93rem;margin-bottom:0.9rem">Try to make the number <strong id="bintarget-u1l2">65</strong> using the bit switches below. Each column label shows its value.</p>
          <div class="bit-row" id="bits-u1l2"></div>
          <div class="bit-result" id="bitresult-u1l2">00000000 = 0</div>
          <div style="margin-top:0.8rem;display:flex;gap:0.6rem;flex-wrap:wrap">
            <button class="btn btn-check btn-sm" onclick="checkBinaryTarget('u1l2')">Check answer ✓</button>
            <button class="btn btn-outline btn-sm" onclick="newBinaryTarget('u1l2')">New number 🎲</button>
          </div>
          <div class="inline-fb" id="fb-bin-u1l2"></div>
        </div>
      `,
      code: `
        <div class="learn-block">
          <h3>💻 Python converting between binary and denary</h3>
          <p>Python can convert numbers instantly. Use <code style="background:var(--warm);padding:0.1em 0.4em;border-radius:4px">bin()</code> to go denary→binary and <code style="background:var(--warm);padding:0.1em 0.4em;border-radius:4px">int(x, 2)</code> to go binary→denary.</p>
          <div class="story-box" style="margin-top:0.9rem">
            <p><strong>What does the 2 mean?</strong><br>
            "Base" just means <em>how many different digits a counting system uses</em>.</p>
            <p style="margin-top:0.7rem"><strong>Base 10 — the way humans count</strong><br>
            We use 10 digits: <strong>0 1 2 3 4 5 6 7 8 9</strong><br>
            (Probably because we have 10 fingers!)<br><br>
            When you count up and hit <strong>9</strong>, you've run out of digits. So the ones column resets to 0 and you add a 1 in the next column to the left:</p>
            <div style="font-family:'Fira Code',monospace;background:#f0e8d8;border-radius:8px;padding:0.7rem 1rem;margin:0.6rem 0;font-size:0.92rem;line-height:2">
              <span style="color:#888">tens | ones</span><br>
              &nbsp;&nbsp;0 &nbsp;&nbsp;| &nbsp;&nbsp;7<br>
              &nbsp;&nbsp;0 &nbsp;&nbsp;| &nbsp;&nbsp;8<br>
              &nbsp;&nbsp;0 &nbsp;&nbsp;| &nbsp;&nbsp;9 &nbsp;&nbsp;<span style="color:#c0392b">← used all 10 digits (0–9), no more room</span><br>
              &nbsp;&nbsp;1 &nbsp;&nbsp;| &nbsp;&nbsp;0 &nbsp;&nbsp;<span style="color:#1b9e5a">← ones resets to 0, tens goes up by 1 → "10"</span><br>
              &nbsp;&nbsp;1 &nbsp;&nbsp;| &nbsp;&nbsp;1<br>
            </div>
            <p style="margin-top:0.7rem"><strong>Base 2 — the way computers count</strong><br>
            Computers only use 2 digits: <strong>0 1</strong><br><br>
            When you count up and hit <strong>1</strong>, you've already run out. So the same thing happens — ones resets to 0, carry a 1 left:</p>
            <div style="font-family:'Fira Code',monospace;background:#f0e8d8;border-radius:8px;padding:0.7rem 1rem;margin:0.6rem 0;font-size:0.92rem;line-height:2">
              <span style="color:#888">twos | ones</span><br>
              &nbsp;&nbsp;0 &nbsp;&nbsp;| &nbsp;&nbsp;0 &nbsp;&nbsp;<span style="color:#888">= 0</span><br>
              &nbsp;&nbsp;0 &nbsp;&nbsp;| &nbsp;&nbsp;1 &nbsp;&nbsp;<span style="color:#c0392b">← used all 2 digits (0–1), no more room</span><br>
              &nbsp;&nbsp;1 &nbsp;&nbsp;| &nbsp;&nbsp;0 &nbsp;&nbsp;<span style="color:#1b9e5a">← ones resets to 0, twos goes up by 1 → still means "2"</span><br>
              &nbsp;&nbsp;1 &nbsp;&nbsp;| &nbsp;&nbsp;1 &nbsp;&nbsp;<span style="color:#888">= 3</span><br>
            </div>
            <p><strong>What does "int" mean?</strong><br>
            <code style="background:var(--warm);padding:0.1em 0.3em;border-radius:3px">int</code> is short for <strong>integer</strong> — a whole number with no decimal point (1, 42, 255 — not 3.14).<br>
            So <code style="background:var(--warm);padding:0.1em 0.3em;border-radius:3px">int('1000001', 2)</code> means: <em>"convert this to a whole number, reading it as base 2."</em> Without the 2, Python wouldn't know which system you meant.</p>
          </div>
        </div>
        <div class="code-panel">
          <div class="code-top">
            <div class="c-dots"><div class="c-dot" style="background:#ff5f56"></div><div class="c-dot" style="background:#ffbd2e"></div><div class="c-dot" style="background:#27c93f"></div></div>
            <span class="code-lbl">python3</span>
          </div>
          <pre class="cb"><span class="cc"># Denary → Binary</span>
<span class="cf">print</span>(<span class="cf">bin</span>(<span class="cn">65</span>))        <span class="cc"># → 0b1000001</span>
<span class="cf">print</span>(<span class="cf">bin</span>(<span class="cn">255</span>))       <span class="cc"># → 0b11111111 (all 8 bits ON)</span>
<span class="cf">print</span>(<span class="cf">bin</span>(<span class="cn">10</span>))        <span class="cc"># → 0b1010</span>

<span class="cc"># Binary → Denary  (2 = "read this in base 2 — a system with only 2 digits")</span>
<span class="cf">print</span>(<span class="cf">int</span>(<span class="cs">'1000001'</span>, <span class="cn">2</span>))  <span class="cc"># → 65</span>
<span class="cf">print</span>(<span class="cf">int</span>(<span class="cs">'11111111'</span>, <span class="cn">2</span>)) <span class="cc"># → 255</span>

<span class="cc"># Challenge: what letter does binary 01001000 represent?</span>
<span class="cv">num</span> <span class="co">=</span> <span class="cf">int</span>(<span class="cs">'01001000'</span>, <span class="cn">2</span>)
<span class="cf">print</span>(<span class="cv">num</span>)             <span class="cc"># first find the denary number</span>
<span class="cf">print</span>(<span class="cf">chr</span>(<span class="cv">num</span>))         <span class="cc"># then convert to letter → H</span></pre>
        </div>
        <div class="bash-panel">
          <div class="bash-top"><div class="c-dots"><div class="c-dot" style="background:#ff5f56"></div><div class="c-dot" style="background:#ffbd2e"></div><div class="c-dot" style="background:#27c93f"></div></div><span class="bash-lbl">Windows terminal challenge</span></div>
          <pre class="bb"><span class="bx"># Open terminal, start Python, then try:</span>
<span class="bp">>>></span> <span class="bc">for i in range(65, 91):</span>
<span class="bp">...</span> <span class="bc">    print(chr(i), bin(i))</span>
<span class="bx"># This prints every capital letter with its binary code!</span></pre>
        </div>
        <div class="terminal-tip">💡 That <code>for</code> loop above goes through every number from 65 to 90 and prints the letter AND its binary. Try changing 65 and 91 to other numbers!</div>
      `,
      questionSets: [
        [
          { q: 'What is the denary value of binary 00001010?', opts: ['5','10','12','8'], ans: 1, why: '8+2 = 10. Columns 8 and 2 are switched ON (the 1s), so we add 8 + 2 = 10.' },
          { q: 'How many different values can ONE bit represent?', opts: ['1','2','8','10'], ans: 1, why: 'One bit can only be 0 or 1 — that\'s 2 different values.' },
          { q: 'What is the binary for denary 8?', opts: ['00001000','00000110','00001100','10000000'], ans: 0, why: 'The 8 column is the 4th from the right. So only that bit is ON: 00001000.' },
          { q: 'What is the maximum denary value you can store in 8 bits?', opts: ['128','127','255','256'], ans: 2, why: 'With all 8 bits ON (11111111): 128+64+32+16+8+4+2+1 = 255.' },
        ],
        [
          { q: 'What is the denary value of binary 00001111?', opts: ['8','15','16','7'], ans: 1, why: '8+4+2+1 = 15. The four rightmost bits are all ON.' },
          { q: 'Which binary number represents denary 5?', opts: ['00000110','00000100','00000101','00001010'], ans: 2, why: '4+1 = 5, so the 4-column and 1-column bits are ON: 00000101.' },
          { q: 'How many bits are in one byte?', opts: ['4','16','2','8'], ans: 3, why: 'One byte is always 8 bits. It is the standard unit used to store a single character.' },
          { q: 'What does the Python function bin(10) return?', opts: ["'0b1010'","'10'","'1010'","'0b1111'"], ans: 0, why: "bin() returns a string starting with '0b' to show it is binary, followed by the binary digits. 10 in binary is 1010." },
        ],
        [
          { q: 'In binary, what comes after 0111?', opts: ['0110','1000','1001','0100'], ans: 1, why: '0111 is 7. The next number is 8. All lower bits reset to 0 and a 1 is carried left: 1000.' },
          { q: 'What is 11111111 in denary?', opts: ['128','256','254','255'], ans: 3, why: '128+64+32+16+8+4+2+1 = 255. All 8 bits are ON.' },
          { q: 'Which Python function converts a denary number to its binary representation?', opts: ['int()','str()','bin()','chr()'], ans: 2, why: 'bin() takes a denary integer and returns a string showing its binary value, prefixed with 0b.' },
          { q: 'What is the denary value of the leftmost bit in an 8-bit number?', opts: ['1','64','128','256'], ans: 2, why: 'The leftmost (most significant) bit in an 8-bit number represents 2⁷ = 128.' },
        ],
      ]
    },

    // ─────────────────────────────────────────────
    // 1.3  HOW COMPUTERS STORE DATA
    // ─────────────────────────────────────────────
    {
      id: 'u1l3', emoji: '🗄️',
      title: 'How Computers Store Data',
      intro: 'A computer needs to remember things — programs, files, your work. It has different types of storage for different jobs.',
      learn: `
        <div class="learn-block">
          <h3>🧠 RAM — short-term memory</h3>
          <p><span class="kt">RAM</span> (Random Access Memory) is where the computer keeps things it's <strong>working on right now</strong>. It's extremely fast, but when you turn the power off, everything in RAM is gone.</p>
          <div class="story-box">
            <p>Think of RAM as your <strong>desk</strong>. While you're doing homework, your books and pens are spread out on the desk — easy to grab quickly. But when you go to bed and clear the desk, everything is gone. The desk doesn't <em>store</em> things long-term, it just holds what you're using <em>right now</em>.</p>
          </div>
        </div>

        <div class="learn-block">
          <h3>💿 Storage — long-term memory</h3>
          <p><span class="kt">Secondary storage</span> (like a hard drive or SSD) keeps files <strong>permanently</strong> — even when the power is off. It's slower than RAM but holds much more data.</p>
          <div class="story-box">
            <p>Storage is like your <strong>bookshelf</strong>. When you finish a book, you put it back on the shelf. It's still there next week, next year. You don't lose it when you go to sleep. But picking it up takes a moment — slower than grabbing something already on your desk.</p>
          </div>
          <div class="fact-row">
            <span class="fact-chip">⚡ RAM = fast, temporary</span>
            <span class="fact-chip">💾 Storage = slower, permanent</span>
          </div>
        </div>

        <div class="learn-block">
          <h3>🔄 How they work together</h3>
          <p>When you open a file, the computer <strong>copies it from storage into RAM</strong> so it can work fast. When you save, it writes from RAM back to storage. If you don't save and the power goes off — the RAM version is lost forever.</p>
        </div>
      `,
      interactive: `
        <div class="interactive-wrap">
          <div class="i-label">🎮 SORT IT — RAM or Storage?</div>
          <p style="font-size:0.93rem;margin-bottom:0.9rem">Tap each item and drop it into the right category.</p>
          <div class="sort-pool" id="pool-u1l3"></div>
          <div class="two-col">
            <div class="sort-zone">
              <div class="sort-zone-label">⚡ RAM (fast, temporary)</div>
              <div class="drop-items" id="drop-ram-u1l3" data-zone="ram"></div>
            </div>
            <div class="sort-zone">
              <div class="sort-zone-label">💾 Storage (permanent)</div>
              <div class="drop-items" id="drop-storage-u1l3" data-zone="storage"></div>
            </div>
          </div>
          <button class="btn btn-check btn-sm" style="margin-top:0.9rem" onclick="checkSort('u1l3',{
            'open web page':'ram','currently typing a document':'ram','running a game':'ram','clipboard contents':'ram',
            'saved photo':'storage','installed app':'storage','music library':'storage','USB stick files':'storage'
          })">Check my answers ✓</button>
          <div class="inline-fb" id="fb-sort-u1l3"></div>
        </div>
      `,
      code: `
        <div class="learn-block">
          <h3>💻 Variables ARE RAM</h3>
          <p>When you create a variable in Python, you are literally <strong>writing data into RAM</strong>. When your program ends, that memory is cleared — just like clearing your desk. Try it:</p>
        </div>
        <div class="code-panel">
          <div class="code-top"><div class="c-dots"><div class="c-dot" style="background:#ff5f56"></div><div class="c-dot" style="background:#ffbd2e"></div><div class="c-dot" style="background:#27c93f"></div></div><span class="code-lbl">python3</span></div>
          <pre class="cb"><span class="cc"># Creating a variable puts data into RAM</span>
<span class="cv">my_name</span> <span class="co">=</span> <span class="cs">"Jake"</span>         <span class="cc"># RAM now holds "Jake" at address 'my_name'</span>
<span class="cv">score</span>   <span class="co">=</span> <span class="cn">100</span>            <span class="cc"># RAM also holds the number 100</span>

<span class="cc"># Python can tell you the memory address it used</span>
<span class="cf">print</span>(<span class="cf">id</span>(<span class="cv">my_name</span>))      <span class="cc"># prints the actual RAM address number</span>
<span class="cf">print</span>(<span class="cf">id</span>(<span class="cv">score</span>))        <span class="cc"># different address for score</span>

<span class="cc"># Writing to a file = saving to STORAGE</span>
<span class="ck">with</span> <span class="cf">open</span>(<span class="cs">"save.txt"</span>, <span class="cs">"w"</span>) <span class="ck">as</span> <span class="cv">f</span>:
    <span class="cv">f</span>.<span class="cf">write</span>(<span class="cv">my_name</span>)      <span class="cc"># now Jake is saved permanently to disk</span>

<span class="cc"># Reading it back = loading from storage into RAM</span>
<span class="ck">with</span> <span class="cf">open</span>(<span class="cs">"save.txt"</span>, <span class="cs">"r"</span>) <span class="ck">as</span> <span class="cv">f</span>:
    <span class="cv">loaded</span> <span class="co">=</span> <span class="cv">f</span>.<span class="cf">read</span>()
<span class="cf">print</span>(<span class="cv">loaded</span>)             <span class="cc"># → Jake</span></pre>
        </div>
        <div class="bash-panel">
          <div class="bash-top"><div class="c-dots"><div class="c-dot" style="background:#ff5f56"></div><div class="c-dot" style="background:#ffbd2e"></div><div class="c-dot" style="background:#27c93f"></div></div><span class="bash-lbl">Windows terminal — check your RAM usage</span></div>
          <pre class="bb"><span class="bx"># In Windows terminal (not Python):</span>
<span class="bp">C:\\></span> <span class="bc">systeminfo | findstr "Available Physical Memory"</span>
<span class="bo">Available Physical Memory: 4,096 MB</span>
<span class="bx"># This shows how much RAM your computer has free right now</span></pre>
        </div>
      `,
      questionSets: [
        [
          { q: 'What happens to data in RAM when the computer is switched off?', opts: ['It stays forever','It moves to the hard drive','It is lost','It is compressed'], ans: 2, why: 'RAM is volatile — it needs power to hold data. Switch off the power and everything in RAM disappears immediately.' },
          { q: 'Which type of storage is FASTEST?', opts: ['Hard disk drive (HDD)','USB stick','RAM','DVD'], ans: 2, why: 'RAM is much faster than any storage device because it\'s directly connected to the CPU with no moving parts.' },
          { q: 'When you open a document, what happens?', opts: ['The CPU edits the file directly on the hard drive','A copy of the file is loaded from storage into RAM','The file is deleted from storage','Nothing — the file stays on the hard drive'], ans: 1, why: 'Opening a file copies it from storage into RAM so the CPU can access it quickly. The original stays on the hard drive.' },
          { q: 'Which best describes secondary storage?', opts: ['Fast, temporary, loses data when power off','Slow, permanent, keeps data when power off','Inside the CPU','Only used for the operating system'], ans: 1, why: 'Secondary storage (hard drives, SSDs, USBs) is slower than RAM but keeps data permanently, even without power.' },
        ],
        [
          { q: 'Why does a computer need BOTH RAM and a hard drive?', opts: ['They store different file types','RAM is fast but temporary; hard drives are slower but permanent','Hard drives are faster than RAM','RAM stores photos, hard drives store music'], ans: 1, why: 'RAM gives the CPU fast access to current work. The hard drive keeps everything permanently. Both are needed for a working computer.' },
          { q: 'What does SSD stand for?', opts: ['Super Speed Drive','Solid State Drive','Secondary Storage Device','Simple System Disk'], ans: 1, why: 'SSD stands for Solid State Drive. It has no moving parts, making it faster and more durable than a traditional spinning hard drive.' },
          { q: 'What type of storage is a USB stick?', opts: ['RAM','Primary storage','Secondary storage','CPU cache'], ans: 2, why: 'A USB stick is secondary storage — it keeps data permanently without power, just like a hard drive.' },
          { q: 'What is the main advantage of an SSD over a traditional hard drive?', opts: ['More storage space','Cheaper price','No moving parts — faster and more reliable','Louder operation'], ans: 2, why: 'SSDs use flash memory with no spinning parts — they are faster, quieter, and less likely to break if dropped.' },
        ],
        [
          { q: 'Your computer has 8 GB of RAM. What does this affect most?', opts: ['How much music you can store permanently','How many programs you can run at the same time without slowing down','How fast your internet is','The quality of your screen'], ans: 1, why: 'RAM is the workspace — more RAM means more programs can be open and active at once without the computer slowing down.' },
          { q: 'You save a document. Where does it go?', opts: ['RAM','The CPU','Secondary storage (hard drive or SSD)','The graphics card'], ans: 2, why: 'Saving copies data from temporary RAM into permanent secondary storage so it survives when you close the file or turn off the computer.' },
          { q: 'Which of these is PRIMARY storage?', opts: ['A hard drive','A USB stick','RAM','A DVD'], ans: 2, why: 'Primary storage (RAM) is directly accessed by the CPU. Secondary storage (hard drives, USB) requires data to be loaded into RAM first.' },
          { q: 'A file is in RAM. What is NOT true about it?', opts: ['The CPU can access it very quickly','It will be lost if the power goes off','It is permanently saved','It is the version currently being worked on'], ans: 2, why: 'RAM is volatile — data in RAM is NOT permanently saved. It disappears when power is cut. You must save to secondary storage to keep it.' },
        ],
      ]
    },

    // ─────────────────────────────────────────────
    // 1.4  DATA SIZES
    // ─────────────────────────────────────────────
    {
      id: 'u1l4', emoji: '📏',
      title: 'Data Sizes',
      intro: 'How big is a photo? How much does a song weigh? Data has size — and computers measure it precisely using a system that goes up in powers of 1000.',
      learn: `
        <div class="learn-block">
          <h3>📊 The data size ladder</h3>
          <p>Data size is measured in bytes, and the units climb by roughly <strong>1000 times</strong> at each step:</p>
          <div class="fact-row">
            <span class="fact-chip">1 byte = 8 bits</span>
            <span class="fact-chip">1 KB ≈ 1,000 bytes</span>
            <span class="fact-chip">1 MB ≈ 1,000 KB</span>
            <span class="fact-chip">1 GB ≈ 1,000 MB</span>
            <span class="fact-chip">1 TB ≈ 1,000 GB</span>
          </div>
        </div>

        <div class="learn-block">
          <h3>🎒 Real-world sizes</h3>
          <div class="story-box">
            <p>Imagine data size as bags.<br><br>
            A <strong>byte</strong> is a small envelope — holds one letter.<br>
            A <strong>kilobyte</strong> is a small bag — holds a short text message.<br>
            A <strong>megabyte</strong> is a school backpack — holds a photo or a short song.<br>
            A <strong>gigabyte</strong> is a large suitcase — holds a movie or 1,000 photos.<br>
            A <strong>terabyte</strong> is a shipping container — holds 1,000 movies.</p>
          </div>
          <div class="fact-row">
            <span class="fact-chip">Text message ≈ 1 KB</span>
            <span class="fact-chip">Photo ≈ 3–5 MB</span>
            <span class="fact-chip">MP3 song ≈ 4 MB</span>
            <span class="fact-chip">HD movie ≈ 4 GB</span>
          </div>
        </div>
      `,
      interactive: `
        <div class="interactive-wrap">
          <div class="i-label">🎮 MATCH IT — file to correct size</div>
          <p style="font-size:0.93rem;margin-bottom:0.9rem">Tap a file type, then tap its correct size. Match all 5 to win!</p>
          <div id="matchgame-u1l4" style="display:grid;grid-template-columns:1fr 1fr;gap:0.6rem"></div>
          <div class="inline-fb" id="fb-match-u1l4"></div>
        </div>
      `,
      code: `
        <div class="learn-block">
          <h3>💻 Checking file sizes with Python</h3>
          <p>Python can tell you how big any file is, then convert it to KB, MB, or GB automatically.</p>
        </div>
        <div class="code-panel">
          <div class="code-top"><div class="c-dots"><div class="c-dot" style="background:#ff5f56"></div><div class="c-dot" style="background:#ffbd2e"></div><div class="c-dot" style="background:#27c93f"></div></div><span class="code-lbl">python3</span></div>
          <pre class="cb"><span class="ck">import</span> os

<span class="cc"># os.path.getsize() gives the size in bytes</span>
<span class="cv">size_bytes</span> <span class="co">=</span> os.<span class="cv">path</span>.<span class="cf">getsize</span>(<span class="cs">"save.txt"</span>)
<span class="cf">print</span>(<span class="cs">f"Bytes:     </span><span class="cv">{size_bytes}</span><span class="cs">"</span>)
<span class="cf">print</span>(<span class="cs">f"Kilobytes: </span><span class="cv">{size_bytes / 1024:.2f}</span><span class="cs">"</span>)
<span class="cf">print</span>(<span class="cs">f"Megabytes: </span><span class="cv">{size_bytes / 1024**2:.4f}</span><span class="cs">"</span>)

<span class="cc"># A handy function to show human-readable size</span>
<span class="ck">def</span> <span class="cf">human_size</span>(<span class="cv">b</span>):
    <span class="ck">for</span> <span class="cv">unit</span> <span class="ck">in</span> [<span class="cs">'B'</span>,<span class="cs">'KB'</span>,<span class="cs">'MB'</span>,<span class="cs">'GB'</span>,<span class="cs">'TB'</span>]:
        <span class="ck">if</span> <span class="cv">b</span> <span class="co">&lt;</span> <span class="cn">1024</span>:
            <span class="ck">return</span> <span class="cs">f"</span><span class="cv">{b:.1f} {unit}</span><span class="cs">"</span>
        <span class="cv">b</span> <span class="co">/=</span> <span class="cn">1024</span>

<span class="cf">print</span>(<span class="cf">human_size</span>(<span class="cn">5_000_000</span>))   <span class="cc"># → 4.8 MB</span>
<span class="cf">print</span>(<span class="cf">human_size</span>(<span class="cn">1_500_000_000</span>)) <span class="cc"># → 1.4 GB</span></pre>
        </div>
        <div class="bash-panel">
          <div class="bash-top"><div class="c-dots"><div class="c-dot" style="background:#ff5f56"></div><div class="c-dot" style="background:#ffbd2e"></div><div class="c-dot" style="background:#27c93f"></div></div><span class="bash-lbl">Windows terminal — check file sizes</span></div>
          <pre class="bb"><span class="bx"># List files and their sizes in current folder</span>
<span class="bp">C:\\></span> <span class="bc">dir</span>
<span class="bx"># Look for the numbers before the filename — those are bytes!</span>

<span class="bx"># Or get the size of one specific file</span>
<span class="bp">C:\\></span> <span class="bc">(Get-Item save.txt).length</span>
<span class="bo">4</span></pre>
        </div>
      `,
      questionSets: [
        [
          { q: 'How many bytes are in 1 kilobyte (KB)?', opts: ['100','1,000','8','1,024 (approximately 1,000)'], ans: 3, why: 'Technically 1 KB = 1,024 bytes, but we often round to 1,000. The 1,024 comes from binary (2^10 = 1,024).' },
          { q: 'A high-quality photo is most likely which size?', opts: ['5 bytes','5 kilobytes','5 megabytes','5 terabytes'], ans: 2, why: 'A typical smartphone photo is 3–8 MB. Bytes and kilobytes would be far too small; terabytes are enormous.' },
          { q: 'Put these in order from SMALLEST to LARGEST:', opts: ['Bit, Byte, KB, MB, GB, TB','Byte, Bit, KB, MB, GB, TB','KB, MB, Bit, Byte, GB, TB','TB, GB, MB, KB, Byte, Bit'], ans: 0, why: 'The correct order is: Bit (smallest) → Byte → Kilobyte → Megabyte → Gigabyte → Terabyte (largest).' },
          { q: 'A 1 TB hard drive can store approximately how many 4 MB photos?', opts: ['250','2,500','25,000','250,000'], ans: 3, why: '1 TB = 1,000,000 MB. 1,000,000 ÷ 4 = 250,000 photos. That\'s a lot of selfies!' },
        ],
        [
          { q: 'How many kilobytes are in 1 megabyte?', opts: ['8','100','1,000','1,024'], ans: 3, why: '1 MB = 1,024 KB. Each step up the scale multiplies by roughly 1,000 (or exactly 1,024 in binary).' },
          { q: 'A typical MP3 song is about 5 MB. How many songs fit on a 1 GB drive?', opts: ['About 20','About 200','About 2,000','About 20,000'], ans: 1, why: '1 GB ≈ 1,000 MB. 1,000 ÷ 5 = 200 songs.' },
          { q: 'Which unit would you use to measure the size of a single text message?', opts: ['Gigabytes','Terabytes','Bytes or kilobytes','Petabytes'], ans: 2, why: 'A short text message is just a few hundred characters — bytes or kilobytes is the right scale.' },
          { q: 'What comes after terabyte in the size scale?', opts: ['Gigabyte','Megabyte','Petabyte','Exabyte'], ans: 2, why: 'The order is: byte → kilobyte → megabyte → gigabyte → terabyte → petabyte. Petabyte is next.' },
        ],
        [
          { q: 'A 4K video file is 50 GB. How many fit on a 1 TB drive?', opts: ['2','20','200','2,000'], ans: 1, why: '1 TB ≈ 1,000 GB. 1,000 ÷ 50 = 20 videos.' },
          { q: 'Why do computers use powers of 2 for storage sizes (1,024 not 1,000)?', opts: ['It looks nicer','Binary works in base 2, so memory naturally groups in powers of 2','It is an international standard from 1950','Hard drives can only be built in those sizes'], ans: 1, why: 'Binary is base 2, so memory chips naturally double: 2, 4, 8, 16 ... 512, 1024. Storage sizes follow the same pattern.' },
          { q: 'A photo is 3.5 MB. Roughly how many fit in 1 GB?', opts: ['About 30','About 300','About 3,000','About 30,000'], ans: 1, why: '1 GB ≈ 1,000 MB. 1,000 ÷ 3.5 ≈ 285 — so about 300 photos.' },
          { q: 'Which is larger: 500 MB or 0.5 GB?', opts: ['500 MB is larger','0.5 GB is larger','They are the same size','It depends on the file type'], ans: 2, why: '0.5 GB = 500 MB exactly. They are the same size — just written differently.' },
        ],
      ]
    },

    // ─────────────────────────────────────────────
    // 1.5  PIXELS AND IMAGES
    // ─────────────────────────────────────────────
    {
      id: 'u1l5', emoji: '🖼️',
      title: 'Pixels and Images',
      intro: 'Every digital image is really just a grid of tiny coloured squares called pixels. The more pixels, the sharper the image.',
      learn: `
        <div class="learn-block">
          <h3>🟥 What is a pixel?</h3>
          <p>A <span class="kt">pixel</span> (short for "picture element") is the <strong>smallest dot</strong> in a digital image. Each pixel has exactly one colour.</p>
          <div class="story-box">
            <p>Imagine a giant mosaic made from thousands of tiny square tiles. From far away it looks like a smooth photo of a face. But if you walk up close, you can see it's just rows of coloured squares.<br><br>
            That's exactly what a digital photo is — a mosaic of coloured squares (pixels). Your screen has millions of them. They're just so tiny you can't see them unless you zoom in very close.</p>
          </div>
        </div>

        <div class="learn-block">
          <h3>📐 Resolution</h3>
          <p><span class="kt">Resolution</span> describes how many pixels an image has. It's written as <strong>width × height</strong> — for example <strong>1920 × 1080</strong>.</p>
          <p>More pixels = <strong>sharper image</strong> = <strong>bigger file size</strong>. There's always a trade-off between quality and storage space.</p>
          <div class="fact-row">
            <span class="fact-chip">1920×1080 = 2,073,600 pixels</span>
            <span class="fact-chip">HD = 1920×1080</span>
            <span class="fact-chip">4K = 3840×2160</span>
          </div>
        </div>

        <div class="learn-block">
          <h3>🎨 Colour and bits per pixel</h3>
          <p>Each pixel's colour is stored as a number. In <strong>24-bit colour</strong> (the most common), each pixel uses 24 bits — 8 bits each for Red, Green, and Blue. This gives <strong>16.7 million possible colours</strong>.</p>
        </div>
      `,
      interactive: `
        <div class="interactive-wrap">
          <div class="i-label">🎨 PIXEL PAINTER — click to colour</div>
          <p style="font-size:0.93rem;margin-bottom:0.9rem">Click any square to colour it. Each square = one pixel. This is how computers store images — as a grid of coloured dots!</p>
          <div style="display:flex;gap:0.5rem;flex-wrap:wrap;margin-bottom:0.8rem" id="colourPicker-u1l5"></div>
          <div id="pixelGrid-u1l5" style="display:grid;grid-template-columns:repeat(16,1fr);gap:2px;background:var(--warm);padding:6px;border-radius:10px;border:2px solid var(--border)"></div>
          <div style="margin-top:0.7rem;display:flex;gap:0.5rem;flex-wrap:wrap">
            <button class="btn btn-outline btn-sm" onclick="clearPixelGrid('u1l5')">Clear 🗑️</button>
            <span style="font-size:0.82rem;color:var(--muted);align-self:center">Grid = 16×16 = 256 pixels</span>
          </div>
        </div>
      `,
      code: `
        <div class="learn-block">
          <h3>💻 RGB colour values in Python</h3>
          <p>In code, colours are defined by three numbers 0–255 — one each for Red, Green, and Blue. <strong>(255, 0, 0)</strong> = pure red. <strong>(0, 0, 255)</strong> = pure blue.</p>
        </div>
        <div class="code-panel">
          <div class="code-top"><div class="c-dots"><div class="c-dot" style="background:#ff5f56"></div><div class="c-dot" style="background:#ffbd2e"></div><div class="c-dot" style="background:#27c93f"></div></div><span class="code-lbl">python3 — colour maths</span></div>
          <pre class="cb"><span class="cc"># Each colour channel is 0-255 (8 bits)</span>
<span class="cv">red</span>   <span class="co">=</span> (<span class="cn">255</span>, <span class="cn">0</span>,   <span class="cn">0</span>)    <span class="cc"># pure red</span>
<span class="cv">green</span> <span class="co">=</span> (<span class="cn">0</span>,   <span class="cn">255</span>, <span class="cn">0</span>)    <span class="cc"># pure green</span>
<span class="cv">blue</span>  <span class="co">=</span> (<span class="cn">0</span>,   <span class="cn">0</span>,   <span class="cn">255</span>)  <span class="cc"># pure blue</span>
<span class="cv">white</span> <span class="co">=</span> (<span class="cn">255</span>, <span class="cn">255</span>, <span class="cn">255</span>)  <span class="cc"># all channels max</span>
<span class="cv">black</span> <span class="co">=</span> (<span class="cn">0</span>,   <span class="cn">0</span>,   <span class="cn">0</span>)    <span class="cc"># all channels zero</span>

<span class="cc"># Hex codes are the same thing in base-16</span>
<span class="cc"># #FF0000 = red,  #00FF00 = green,  #0000FF = blue</span>

<span class="cc"># Calculate file size of a 100x100 pixel image (24-bit)</span>
<span class="cv">width</span>  <span class="co">=</span> <span class="cn">100</span>
<span class="cv">height</span> <span class="co">=</span> <span class="cn">100</span>
<span class="cv">bits_per_pixel</span> <span class="co">=</span> <span class="cn">24</span>

<span class="cv">total_bits</span>  <span class="co">=</span> <span class="cv">width</span> <span class="co">*</span> <span class="cv">height</span> <span class="co">*</span> <span class="cv">bits_per_pixel</span>
<span class="cv">total_bytes</span> <span class="co">=</span> <span class="cv">total_bits</span> <span class="co">/</span> <span class="cn">8</span>
<span class="cf">print</span>(<span class="cs">f"</span><span class="cv">{total_bytes / 1024:.2f}</span><span class="cs"> KB"</span>)   <span class="cc"># → 29.30 KB</span></pre>
        </div>
      `,
      questionSets: [
        [
          { q: 'What is a pixel?', opts: ['A type of photo editing software','The smallest dot in a digital image','A measurement of screen brightness','A file format for images'], ans: 1, why: 'A pixel (picture element) is the smallest individual dot in a digital image. Each has exactly one colour.' },
          { q: 'A screen has resolution 1920 × 1080. How many pixels is that?', opts: ['1,920','3,000','2,073,600','108,000'], ans: 2, why: '1920 × 1080 = 2,073,600 pixels. That\'s over 2 million tiny dots making up every frame you see!' },
          { q: 'In 24-bit colour, how many bits are used per pixel?', opts: ['3','8','16','24'], ans: 3, why: '24-bit colour uses 8 bits each for Red, Green, and Blue — that\'s 3 × 8 = 24 bits per pixel.' },
          { q: 'If you increase an image\'s resolution, what else increases?', opts: ['Brightness','File size','Playback speed','Colour accuracy only'], ans: 1, why: 'More pixels = more data stored = larger file size. Higher resolution images take more storage space.' },
        ],
        [
          { q: 'What does "resolution" mean for a digital image?', opts: ['How bright the screen is','How many pixels wide and tall the image is','The number of colours used','The file format'], ans: 1, why: 'Resolution describes how many pixels make up the image — e.g. 1920×1080 means 1920 pixels wide, 1080 tall.' },
          { q: 'What colour model does a screen use to create all colours?', opts: ['CMYK (cyan, magenta, yellow, black)','RGB (red, green, blue)','HSL (hue, saturation, lightness)','BWG (black, white, grey)'], ans: 1, why: 'Screens mix red, green, and blue light at different intensities to create every visible colour. This is called the RGB model.' },
          { q: 'Why do images look pixelated when you zoom in a lot?', opts: ['The screen breaks','You can see the individual square pixels that make up the image','The file becomes corrupted','The colours change'], ans: 1, why: 'Every digital image is a grid of squares. Zoom in far enough and those squares become visible — that is pixelation.' },
          { q: 'If a pixel stores 8 bits each for R, G, and B, how many bits total per pixel?', opts: ['8','16','24','32'], ans: 2, why: '8 bits × 3 colour channels (R, G, B) = 24 bits per pixel. This is called 24-bit or true colour.' },
        ],
        [
          { q: 'What happens to image quality when you DECREASE resolution?', opts: ['It gets better','It gets worse — less detail, blockier','It stays the same','The colours change'], ans: 1, why: 'Fewer pixels means less detail. Small images appear blocky or blurry when stretched, because there is not enough pixel data to fill the space.' },
          { q: 'A black-and-white image only needs how many bits per pixel?', opts: ['24','8','1','4'], ans: 2, why: 'Black or white — that is just two options, which requires only 1 bit (0 = black, 1 = white) per pixel.' },
          { q: 'What is colour depth?', opts: ['How dark the image is','How many bits are used to store each pixel\'s colour','The physical size of the screen','The brightness setting'], ans: 1, why: 'Colour depth is how many bits store each pixel. More bits = more possible colours. 24-bit gives over 16 million possible colours per pixel.' },
          { q: 'Which has a higher resolution: 800×600 or 1920×1080?', opts: ['800×600','1920×1080','They are the same','Resolution depends on screen size not pixels'], ans: 1, why: '1920×1080 = over 2 million pixels. 800×600 = 480,000 pixels. 1920×1080 has roughly 4× more pixels and far more detail.' },
        ],
      ]
    },

    // ─────────────────────────────────────────────
    // 1.6  HOW SOUND IS STORED
    // ─────────────────────────────────────────────
    {
      id: 'u1l6', emoji: '🔊',
      title: 'How Sound is Stored',
      intro: 'Sound is a physical wave in the air. Computers can\'t store waves — so they take thousands of measurements per second and store those numbers instead.',
      learn: `
        <div class="learn-block">
          <h3>🌊 Sound is a wave</h3>
          <p>When something vibrates (like a guitar string), it pushes air back and forth, creating a <span class="kt">sound wave</span>. Your ear detects these tiny pressure changes and your brain hears sound.</p>
          <p>Computers can't store a smooth wave directly — they have to convert it to digital numbers first.</p>
        </div>

        <div class="learn-block">
          <h3>📷 Sampling — taking snapshots of sound</h3>
          <p><span class="kt">Sampling</span> means measuring the height of the sound wave thousands of times per second. Each measurement is called a <span class="kt">sample</span>.</p>
          <div class="story-box">
            <p>Imagine you want to draw a smooth wave but you only have a dot stamp. You stamp it once every second — your dots are so far apart that the wave shape looks blocky and jagged. Not great.<br><br>
            Now stamp it <strong>44,000 times per second</strong>. The dots are so close together that when you connect them, it looks perfectly smooth. That's exactly what your computer does with sound — it stamps (samples) the wave 44,100 times every second to make it sound smooth.</p>
          </div>
          <div class="fact-row">
            <span class="fact-chip">CD quality = 44,100 samples/sec</span>
            <span class="fact-chip">More samples = better quality</span>
            <span class="fact-chip">More samples = bigger file</span>
          </div>
        </div>

        <div class="learn-block">
          <h3>🎚️ Bit depth</h3>
          <p><span class="kt">Bit depth</span> controls how accurately each sample is measured. 16-bit audio (CD standard) can record 65,536 different volume levels per sample — which is plenty for the human ear.</p>
        </div>
      `,
      interactive: `
        <div class="interactive-wrap">
          <div class="i-label">🌊 WAVE SAMPLER — see sampling in action</div>
          <p style="font-size:0.93rem;margin-bottom:0.9rem">Drag the slider to change how many samples are taken per wave. Watch what happens to the sound quality!</p>
          <div id="waveSim-u1l6" style="margin:0.5rem 0"></div>
          <input type="range" id="sampleSlider-u1l6" min="2" max="40" value="8" style="width:100%;margin:0.7rem 0"
            oninput="updateWaveSim('u1l6', this.value)">
          <div id="waveLabel-u1l6" style="text-align:center;font-size:0.9rem;font-weight:700;color:var(--muted);margin-bottom:0.5rem">8 samples</div>
          <div class="inline-fb show ok" id="wavefb-u1l6">Drag right → more samples → smoother sound → bigger file size</div>
        </div>
      `,
      code: `
        <div class="learn-block">
          <h3>💻 Sound file size calculation in Python</h3>
          <p>You can calculate exactly how large a sound file will be, given its sample rate, bit depth, and duration.</p>
        </div>
        <div class="code-panel">
          <div class="code-top"><div class="c-dots"><div class="c-dot" style="background:#ff5f56"></div><div class="c-dot" style="background:#ffbd2e"></div><div class="c-dot" style="background:#27c93f"></div></div><span class="code-lbl">python3</span></div>
          <pre class="cb"><span class="cc"># Sound file size formula:</span>
<span class="cc"># size = sample_rate × bit_depth × channels × duration ÷ 8</span>

<span class="cv">sample_rate</span> <span class="co">=</span> <span class="cn">44100</span>   <span class="cc"># samples per second (CD quality)</span>
<span class="cv">bit_depth</span>   <span class="co">=</span> <span class="cn">16</span>      <span class="cc"># bits per sample</span>
<span class="cv">channels</span>    <span class="co">=</span> <span class="cn">2</span>       <span class="cc"># stereo = 2 channels (left + right)</span>
<span class="cv">duration</span>    <span class="co">=</span> <span class="cn">180</span>     <span class="cc"># seconds (3 minute song)</span>

<span class="cv">bits</span>  <span class="co">=</span> <span class="cv">sample_rate</span> <span class="co">*</span> <span class="cv">bit_depth</span> <span class="co">*</span> <span class="cv">channels</span> <span class="co">*</span> <span class="cv">duration</span>
<span class="cv">bytes</span> <span class="co">=</span> <span class="cv">bits</span> <span class="co">/</span> <span class="cn">8</span>
<span class="cv">mb</span>    <span class="co">=</span> <span class="cv">bytes</span> <span class="co">/</span> <span class="cn">1_000_000</span>

<span class="cf">print</span>(<span class="cs">f"Uncompressed size: </span><span class="cv">{mb:.1f}</span><span class="cs"> MB"</span>)  <span class="cc"># → 190.5 MB</span>
<span class="cc"># That's why MP3 compression is needed — it squishes it down to ~4 MB!</span></pre>
        </div>
        <div class="bash-panel">
          <div class="bash-top"><div class="c-dots"><div class="c-dot" style="background:#ff5f56"></div><div class="c-dot" style="background:#ffbd2e"></div><div class="c-dot" style="background:#27c93f"></div></div><span class="bash-lbl">Windows terminal — save as soundsize.py and run it</span></div>
          <pre class="bb"><span class="bp">C:\\></span> <span class="bc">python soundsize.py</span>
<span class="bo">Uncompressed size: 190.5 MB</span>
<span class="bx"># Try changing duration to 60 (1 minute) and re-run!</span></pre>
        </div>
      `,
      questionSets: [
        [
          { q: 'What does "sampling" mean in digital audio?', opts: ['Adding bass to a recording','Measuring the sound wave at regular intervals','Compressing a sound file','Mixing two tracks together'], ans: 1, why: 'Sampling means measuring the height (amplitude) of a sound wave thousands of times per second. Those measurements become the digital audio data.' },
          { q: 'What is the sample rate of CD-quality audio?', opts: ['441 samples/sec','4,410 samples/sec','44,100 samples/sec','441,000 samples/sec'], ans: 2, why: 'CD audio uses 44,100 samples per second — written as 44.1 kHz. This is enough for the full range of human hearing.' },
          { q: 'If you increase the sample rate of a recording, what happens?', opts: ['File size decreases and quality improves','File size increases and quality improves','File size increases and quality decreases','Nothing changes'], ans: 1, why: 'More samples = more data = larger file size, but the sound wave is represented more accurately, so quality improves.' },
          { q: 'Why is an uncompressed audio file much larger than an MP3?', opts: ['MP3s use less bit depth only','MP3s are recorded at lower volume','MP3 compression removes data the ear can\'t detect, shrinking the file','MP3s only store one channel'], ans: 2, why: 'MP3 compression analyses the audio and removes frequencies humans can\'t really hear. The result sounds nearly identical but is ~10x smaller.' },
        ],
        [
          { q: 'What is an audio sample?', opts: ['A free music download','A single measurement of the sound wave at one moment in time','A type of microphone','The title of a song'], ans: 1, why: 'A sample is one measurement of the sound wave\'s height at a specific instant. Thousands of these per second reconstruct the sound.' },
          { q: 'What unit is used to measure sample rate?', opts: ['MB','Hz (Hertz)','dB (Decibels)','Pixels'], ans: 1, why: 'Sample rate is measured in Hz (Hertz) — meaning "times per second". CD audio = 44,100 Hz = 44.1 kHz.' },
          { q: 'What does a HIGHER sample rate produce?', opts: ['A quieter sound','A shorter file','A more accurate and smoother digital recording','A lower-pitched sound'], ans: 2, why: 'More samples per second = more accurate picture of the sound wave = smoother, higher quality audio.' },
          { q: 'Why does higher quality audio take more storage space?', opts: ['It plays for longer','More samples per second means more data to store','Lower quality files use encryption','The speaker needs more power'], ans: 1, why: 'More samples = more numbers to store = larger file. Audio quality and file size are always a trade-off.' },
        ],
        [
          { q: 'What is "clipping" in audio recording?', opts: ['Cutting a section out of a song','When the sound is too loud and the waveform gets cut off, causing distortion','When two audio tracks overlap','A type of file format'], ans: 1, why: 'Clipping happens when the sound level exceeds the maximum recordable level. The peaks get "clipped" flat — causing harsh, permanent distortion.' },
          { q: 'Which file format stores audio WITHOUT any quality loss?', opts: ['MP3','AAC','WAV','OGG'], ans: 2, why: 'WAV stores every sample exactly with no compression — perfect quality but large file size. MP3 and AAC discard some data to reduce size.' },
          { q: 'CD audio uses 44,100 Hz. What does that mean?', opts: ['The CD spins 44,100 times per minute','44,100 measurements of the sound wave are taken every second','The maximum volume is 44,100 dB','The CD can store 44,100 songs'], ans: 1, why: '44,100 Hz means 44,100 samples taken each second — enough to accurately capture sounds up to 22,050 Hz, covering the full range of human hearing.' },
          { q: 'A recording has a low sample rate. What will it sound like?', opts: ['Louder than the original','Blocky and less smooth — missing detail from the original sound wave','Exactly the same as the original','Quieter than the original'], ans: 1, why: 'A low sample rate captures fewer snapshots of the wave, missing detail between measurements. The reconstructed sound is blocky and less accurate.' },
        ],
      ]
    },

  ] // end Unit 1 lessons
}; // end UNIT1
