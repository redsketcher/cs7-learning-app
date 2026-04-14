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
      questions: [
        { q: 'What is a bit?', opts: ['A type of computer program','The smallest unit of digital data — either 0 or 1','A unit of internet speed','8 bytes of memory'], ans: 1, why: 'A bit is the smallest possible piece of digital data. It can only ever be 0 (off) or 1 (on).' },
        { q: 'How many bits make one byte?', opts: ['4','16','8','2'], ans: 2, why: '8 bits grouped together make 1 byte. One byte is enough to store a single character like the letter A.' },
        { q: 'Which of these is an example of ANALOGUE data?', opts: ['A barcode','The reading on a mercury thermometer','A digital clock display','A computer file'], ans: 1, why: 'A mercury thermometer is analogue — the mercury rises smoothly through every possible value. Digital devices jump between fixed steps.' },
        { q: 'A computer can only understand two states. What are they?', opts: ['Yes and No','True and False','On (1) and Off (0)','Big and Small'], ans: 2, why: 'All digital computers work with just two electrical states — ON (represented as 1) and OFF (represented as 0). Everything else is built from combinations of these.' },
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

<span class="cc"># Binary → Denary  (the 2 means "this is base 2")</span>
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
      questions: [
        { q: 'What is the denary value of binary 00001010?', opts: ['5','10','12','8'], ans: 1, why: '8+2 = 10. Columns 8 and 2 are switched ON (the 1s), so we add 8 + 2 = 10.' },
        { q: 'How many different values can ONE bit represent?', opts: ['1','2','8','10'], ans: 1, why: 'One bit can only be 0 or 1 — that\'s 2 different values.' },
        { q: 'What is the binary for denary 8?', opts: ['00001000','00000110','00001100','10000000'], ans: 0, why: 'The 8 column is the 4th from the right. So only that bit is ON: 00001000.' },
        { q: 'What is the maximum denary value you can store in 8 bits?', opts: ['128','127','255','256'], ans: 2, why: 'With all 8 bits ON (11111111): 128+64+32+16+8+4+2+1 = 255.' },
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
      questions: [
        { q: 'What happens to data in RAM when the computer is switched off?', opts: ['It stays forever','It moves to the hard drive','It is lost','It is compressed'], ans: 2, why: 'RAM is volatile — it needs power to hold data. Switch off the power and everything in RAM disappears immediately.' },
        { q: 'Which type of storage is FASTEST?', opts: ['Hard disk drive (HDD)','USB stick','RAM','DVD'], ans: 2, why: 'RAM is much faster than any storage device because it\'s directly connected to the CPU with no moving parts.' },
        { q: 'When you open a document, what happens?', opts: ['The CPU edits the file directly on the hard drive','A copy of the file is loaded from storage into RAM','The file is deleted from storage','Nothing — the file stays on the hard drive'], ans: 1, why: 'Opening a file copies it from storage into RAM so the CPU can access it quickly. The original stays on the hard drive.' },
        { q: 'Which best describes secondary storage?', opts: ['Fast, temporary, loses data when power off','Slow, permanent, keeps data when power off','Inside the CPU','Only used for the operating system'], ans: 1, why: 'Secondary storage (hard drives, SSDs, USBs) is slower than RAM but keeps data permanently, even without power.' },
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
      questions: [
        { q: 'How many bytes are in 1 kilobyte (KB)?', opts: ['100','1,000','8','1,024 (approximately 1,000)'], ans: 3, why: 'Technically 1 KB = 1,024 bytes, but we often round to 1,000. The 1,024 comes from binary (2^10 = 1,024).' },
        { q: 'A high-quality photo is most likely which size?', opts: ['5 bytes','5 kilobytes','5 megabytes','5 terabytes'], ans: 2, why: 'A typical smartphone photo is 3–8 MB. Bytes and kilobytes would be far too small; terabytes are enormous.' },
        { q: 'Put these in order from SMALLEST to LARGEST:', opts: ['Bit, Byte, KB, MB, GB, TB','Byte, Bit, KB, MB, GB, TB','KB, MB, Bit, Byte, GB, TB','TB, GB, MB, KB, Byte, Bit'], ans: 0, why: 'The correct order is: Bit (smallest) → Byte → Kilobyte → Megabyte → Gigabyte → Terabyte (largest).' },
        { q: 'A 1 TB hard drive can store approximately how many 4 MB photos?', opts: ['250','2,500','25,000','250,000'], ans: 3, why: '1 TB = 1,000,000 MB. 1,000,000 ÷ 4 = 250,000 photos. That\'s a lot of selfies!' },
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
      questions: [
        { q: 'What is a pixel?', opts: ['A type of photo editing software','The smallest dot in a digital image','A measurement of screen brightness','A file format for images'], ans: 1, why: 'A pixel (picture element) is the smallest individual dot in a digital image. Each has exactly one colour.' },
        { q: 'A screen has resolution 1920 × 1080. How many pixels is that?', opts: ['1,920','3,000','2,073,600','108,000'], ans: 2, why: '1920 × 1080 = 2,073,600 pixels. That\'s over 2 million tiny dots making up every frame you see!' },
        { q: 'In 24-bit colour, how many bits are used per pixel?', opts: ['3','8','16','24'], ans: 3, why: '24-bit colour uses 8 bits each for Red, Green, and Blue — that\'s 3 × 8 = 24 bits per pixel.' },
        { q: 'If you increase an image\'s resolution, what else increases?', opts: ['Brightness','File size','Playback speed','Colour accuracy only'], ans: 1, why: 'More pixels = more data stored = larger file size. Higher resolution images take more storage space.' },
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
      questions: [
        { q: 'What does "sampling" mean in digital audio?', opts: ['Adding bass to a recording','Measuring the sound wave at regular intervals','Compressing a sound file','Mixing two tracks together'], ans: 1, why: 'Sampling means measuring the height (amplitude) of a sound wave thousands of times per second. Those measurements become the digital audio data.' },
        { q: 'What is the sample rate of CD-quality audio?', opts: ['441 samples/sec','4,410 samples/sec','44,100 samples/sec','441,000 samples/sec'], ans: 2, why: 'CD audio uses 44,100 samples per second — written as 44.1 kHz. This is enough for the full range of human hearing.' },
        { q: 'If you increase the sample rate of a recording, what happens?', opts: ['File size decreases and quality improves','File size increases and quality improves','File size increases and quality decreases','Nothing changes'], ans: 1, why: 'More samples = more data = larger file size, but the sound wave is represented more accurately, so quality improves.' },
        { q: 'Why is an uncompressed audio file much larger than an MP3?', opts: ['MP3s use less bit depth only','MP3s are recorded at lower volume','MP3 compression removes data the ear can\'t detect, shrinking the file','MP3s only store one channel'], ans: 2, why: 'MP3 compression analyses the audio and removes frequencies humans can\'t really hear. The result sounds nearly identical but is ~10x smaller.' },
      ]
    },

  ] // end Unit 1 lessons
}; // end UNIT1
