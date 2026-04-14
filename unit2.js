// ═══════════════════════════════════════════════════════
//  UNIT 2 — STAYING SAFE ONLINE
// ═══════════════════════════════════════════════════════

window.UNIT2 = {
  id: 'u2', color: '#2b7de3', bg: '#ebf2fd',
  title: 'Staying Safe Online',
  desc: 'Passwords, phishing, cyberbullying, copyright and trust',
  lessons: [

    {
      id:'u2l1', emoji:'🔐', title:'Safe and Unsafe Sharing',
      intro:'Not everything is safe to share online. Once you post something, you lose control of it forever.',
      learn:`
        <div class="learn-block">
          <h3>📤 What is personal information?</h3>
          <p><span class="kt">Personal information</span> is any data that can identify you — your full name, address, phone number, school name, date of birth, passwords, and photos of your face.</p>
          <p>Once you share it online, you can't take it back. Even a "deleted" post may have been copied or screenshotted.</p>
        </div>
        <div class="learn-block">
          <h3>🏠 The digital footprint</h3>
          <div class="story-box">
            <p>Imagine you're walking through fresh snow. Every step leaves a footprint behind you. Even if you try to go back and smooth them over, traces remain.<br><br>
            Everything you do online — every post, every search, every click — leaves a <strong>digital footprint</strong>. Companies, schools, and even future employers can sometimes see these footprints, years later. Think before you step.</p>
          </div>
        </div>
        <div class="learn-block">
          <h3>🟢 Safe vs unsafe to share</h3>
          <p><strong>Usually safe:</strong> a nickname, your favourite colour, a hobby, a drawing you made.</p>
          <p><strong>Never share:</strong> full name + school + location together, passwords, home address, phone number, photos in school uniform.</p>
        </div>
      `,
      interactive:`
        <div class="interactive-wrap">
          <div class="i-label">🎮 SHARE OR DON'T SHARE?</div>
          <p style="font-size:0.93rem;margin-bottom:0.9rem">For each piece of information, decide if it's <strong>safe</strong> or <strong>risky</strong> to share publicly online.</p>
          <div id="safetyGame-u2l1"></div>
        </div>
      `,
      code:`
        <div class="learn-block">
          <h3>💻 How websites see you</h3>
          <p>When you visit a website, it automatically receives information about you — your IP address, browser, screen size. This is your digital footprint in action.</p>
        </div>
        <div class="code-panel">
          <div class="code-top"><div class="c-dots"><div class="c-dot" style="background:#ff5f56"></div><div class="c-dot" style="background:#ffbd2e"></div><div class="c-dot" style="background:#27c93f"></div></div><span class="code-lbl">python3 — see what your computer reveals</span></div>
          <pre class="cb"><span class="ck">import</span> socket, platform

<span class="cc"># Your computer's hostname (often contains your name)</span>
<span class="cf">print</span>(<span class="cs">"Hostname:"</span>, socket.<span class="cf">gethostname</span>())

<span class="cc"># Operating system details</span>
<span class="cf">print</span>(<span class="cs">"OS:"</span>,       platform.<span class="cf">system</span>())
<span class="cf">print</span>(<span class="cs">"Version:"</span>,  platform.<span class="cf">release</span>())

<span class="cc"># Your local IP address</span>
<span class="cf">print</span>(<span class="cs">"Local IP:"</span>, socket.<span class="cf">gethostbyname</span>(socket.<span class="cf">gethostname</span>()))

<span class="cc"># Every website you visit sees your PUBLIC IP automatically</span>
<span class="cc"># It can be used to approximate your city/country</span></pre>
        </div>
        <div class="bash-panel">
          <div class="bash-top"><div class="c-dots"><div class="c-dot" style="background:#ff5f56"></div><div class="c-dot" style="background:#ffbd2e"></div><div class="c-dot" style="background:#27c93f"></div></div><span class="bash-lbl">Windows terminal</span></div>
          <pre class="bb"><span class="bx"># See your computer's IP addresses</span>
<span class="bp">C:\\></span> <span class="bc">ipconfig</span>
<span class="bx"># Look for "IPv4 Address" — that's your local network IP</span></pre>
        </div>
      `,
      questions:[
        {q:'Which of these is personal information you should NEVER share publicly?',opts:['Your favourite colour','Your full home address','A drawing you made','Your favourite film'],ans:1,why:'Your home address tells strangers exactly where to find you. Combined with your name it can be dangerous — never share it publicly online.'},
        {q:'What is a digital footprint?',opts:['A special computer mouse','The trail of data you leave online through your activity','A type of virus','Your computer\'s screen resolution'],ans:1,why:'A digital footprint is the record of everything you do online — websites visited, things posted, searches made. It can persist for years.'},
        {q:'You post a photo and then delete it. What is TRUE?',opts:['It is gone forever','Someone may have already saved or screenshotted it','It stays on your device only','The website must delete all copies by law'],ans:1,why:'Once posted, others can screenshot, share, or save your content before you delete it. Deletion from one platform doesn\'t erase all copies.'},
        {q:'Which combination is most risky to share on a public profile?',opts:['Nickname and favourite game','Full name, school name, and town','Favourite colour and age','A drawing and a hobby'],ans:1,why:'Full name + school + town together gives a stranger enough information to locate you in real life. Never combine these publicly.'},
      ]
    },

    {
      id:'u2l2', emoji:'🔑', title:'Passwords and Security',
      intro:'Your password is the lock on your digital front door. A weak password is like leaving the key under the mat.',
      learn:`
        <div class="learn-block">
          <h3>🔒 What makes a strong password?</h3>
          <p>A strong password is <strong>long</strong> (12+ characters), uses a <strong>mix of letters, numbers and symbols</strong>, and is <strong>different for every account</strong>.</p>
          <div class="story-box">
            <p>Imagine your password is a combination lock. A 2-digit lock has only 100 possible combinations — a thief could try them all in minutes.<br><br>
            A 12-character password mixing letters, numbers and symbols has more combinations than <strong>all the grains of sand on Earth</strong>. Even the fastest computer would take millions of years to try them all. That's the power of length and variety.</p>
          </div>
        </div>
        <div class="learn-block">
          <h3>🚫 What NOT to use</h3>
          <p>Never use: your name, birthday, "password", "123456", pet names, or any real word on its own. These are checked first by attackers using <span class="kt">dictionary attacks</span>.</p>
        </div>
        <div class="learn-block">
          <h3>🎲 Passphrase trick</h3>
          <p>Pick 4 random words and string them together: <strong>Purple·Cloud·Hammer·Frog!</strong> — it's 22 characters, easy to remember, and almost impossible to guess.</p>
        </div>
      `,
      interactive:`
        <div class="interactive-wrap">
          <div class="i-label">🔑 PASSWORD STRENGTH CHECKER</div>
          <p style="font-size:0.93rem;margin-bottom:0.9rem">Type a password to see how strong it is. (Nothing is sent anywhere — it's just checked in your browser.)</p>
          <input type="password" id="pwInput-u2l2" placeholder="Type a test password..."
            oninput="checkPasswordStrength('u2l2',this.value)"
            style="width:100%;padding:0.75rem 1rem;border-radius:12px;border:2px solid var(--border);font-family:'Lexend',sans-serif;font-size:1rem;margin-bottom:0.7rem">
          <div id="pwBar-u2l2" style="height:10px;border-radius:30px;background:var(--warm);overflow:hidden;margin-bottom:0.5rem">
            <div id="pwBarInner-u2l2" style="height:100%;width:0;border-radius:30px;transition:all 0.3s"></div>
          </div>
          <div id="pwLabel-u2l2" style="font-size:0.9rem;font-weight:700;color:var(--muted)">Enter a password above</div>
          <div id="pwTips-u2l2" style="margin-top:0.6rem;font-size:0.86rem;color:var(--muted);line-height:1.7"></div>
        </div>
      `,
      code:`
        <div class="learn-block">
          <h3>💻 How password hashing works</h3>
          <p>Websites <strong>never</strong> store your actual password. Instead they store a <span class="kt">hash</span> — a scrambled one-way version. When you log in, your password is hashed and compared. Even if hackers steal the database, they only get hashes.</p>
        </div>
        <div class="code-panel">
          <div class="code-top"><div class="c-dots"><div class="c-dot" style="background:#ff5f56"></div><div class="c-dot" style="background:#ffbd2e"></div><div class="c-dot" style="background:#27c93f"></div></div><span class="code-lbl">python3</span></div>
          <pre class="cb"><span class="ck">import</span> hashlib

<span class="cv">password</span> <span class="co">=</span> <span class="cs">"Purple·Cloud·Hammer·Frog!"</span>

<span class="cc"># SHA-256 is a common hashing algorithm</span>
<span class="cv">hashed</span> <span class="co">=</span> hashlib.<span class="cf">sha256</span>(<span class="cv">password</span>.<span class="cf">encode</span>()).<span class="cf">hexdigest</span>()
<span class="cf">print</span>(<span class="cv">hashed</span>)
<span class="cc"># → a9f3e2... (64 random-looking characters)</span>

<span class="cc"># Change ONE character and the hash is completely different</span>
<span class="cv">password2</span> <span class="co">=</span> <span class="cs">"purple·Cloud·Hammer·Frog!"</span>  <span class="cc"># lowercase p</span>
<span class="cv">hashed2</span> <span class="co">=</span> hashlib.<span class="cf">sha256</span>(<span class="cv">password2</span>.<span class="cf">encode</span>()).<span class="cf">hexdigest</span>()
<span class="cf">print</span>(<span class="cv">hashed2</span>)
<span class="cc"># → completely different hash — that's the point!</span>

<span class="cf">print</span>(<span class="cv">hashed</span> <span class="co">==</span> <span class="cv">hashed2</span>)  <span class="cc"># → False</span></pre>
        </div>
      `,
      questions:[
        {q:'Which is the strongest password?',opts:['jake2010','Password1!','Xk#9mP!qL2wR','qwerty'],ans:2,why:'"Xk#9mP!qL2wR" is 12 characters with uppercase, lowercase, numbers and symbols. The others use common words or patterns that are easily guessed.'},
        {q:'Why should you use a different password for every account?',opts:['It\'s required by law','If one site is hacked, attackers try the same password on other sites','Passwords expire after 30 days','It makes passwords easier to remember'],ans:1,why:'If you reuse passwords and one site gets hacked, attackers will try your email+password on banking, social media and other sites. This is called "credential stuffing".'},
        {q:'What is a dictionary attack?',opts:['Attacking a website using definitions','An attempt to hack using lists of common words and passwords','A type of computer virus','Sending spam emails'],ans:1,why:'A dictionary attack tries thousands of common words, names and known passwords automatically. Using random characters defeats this completely.'},
        {q:'A website stores your password as a hash. What does this mean?',opts:['Your password is encrypted with a key','Your password is stored in plain text','Your password is converted to a scrambled code that can\'t be reversed','Your password is deleted after login'],ans:2,why:'Hashing converts your password to a fixed-length code using a one-way mathematical function. The original password cannot be recovered from the hash — even by the website itself.'},
      ]
    },

    {
      id:'u2l3', emoji:'🎣', title:'Phishing and Scams',
      intro:'Phishing is when criminals pretend to be someone trustworthy to trick you into giving them your information or money.',
      learn:`
        <div class="learn-block">
          <h3>🎣 What is phishing?</h3>
          <p><span class="kt">Phishing</span> is when someone sends you a fake message — pretending to be your bank, school, or a popular website — to steal your login details or personal information.</p>
          <div class="story-box">
            <p>Imagine a person dressed in a police uniform knocks on your door and says "We need to check your house immediately!" They look real, sound official, have a badge — but it's a costume.<br><br>
            Phishing emails look exactly like real emails from Amazon, your bank, or YouTube. Same logo, same colours, same layout. But it's a costume. The link takes you to a <em>fake</em> website that steals whatever you type.</p>
          </div>
        </div>
        <div class="learn-block">
          <h3>🚩 Phishing warning signs</h3>
          <ul>
            <li>Creates <strong>urgency</strong>: "Your account will be closed in 24 hours!"</li>
            <li><strong>Bad spelling</strong> or awkward language</li>
            <li>The sender's email address looks slightly wrong (amaz0n@gmail.com)</li>
            <li>Links to a URL that doesn't match the real site</li>
            <li>Asks for your password — <strong>real companies never do this</strong></li>
          </ul>
        </div>
      `,
      interactive:`
        <div class="interactive-wrap">
          <div class="i-label">🎣 SPOT THE PHISH — real or fake?</div>
          <p style="font-size:0.93rem;margin-bottom:0.9rem">Read each message carefully and decide: is it a real message or a phishing attempt?</p>
          <div id="phishGame-u2l3"></div>
        </div>
      `,
      code:`
        <div class="learn-block">
          <h3>💻 Checking URLs in Python</h3>
          <p>One way to spot phishing is to check URLs carefully. Python can break a URL into parts so you can see exactly where it goes.</p>
        </div>
        <div class="code-panel">
          <div class="code-top"><div class="c-dots"><div class="c-dot" style="background:#ff5f56"></div><div class="c-dot" style="background:#ffbd2e"></div><div class="c-dot" style="background:#27c93f"></div></div><span class="code-lbl">python3</span></div>
          <pre class="cb"><span class="ck">from</span> urllib.parse <span class="ck">import</span> urlparse

<span class="cc"># Real Amazon URL</span>
<span class="cv">real</span> <span class="co">=</span> <span class="cs">"https://www.amazon.co.uk/orders"</span>
<span class="cv">p</span> <span class="co">=</span> <span class="cf">urlparse</span>(<span class="cv">real</span>)
<span class="cf">print</span>(<span class="cv">p</span>.netloc)   <span class="cc"># → www.amazon.co.uk  ✓ SAFE</span>

<span class="cc"># Phishing URL — looks real but isn't!</span>
<span class="cv">fake</span> <span class="co">=</span> <span class="cs">"https://amazon.co.uk.login-secure.ru/orders"</span>
<span class="cv">p2</span> <span class="co">=</span> <span class="cf">urlparse</span>(<span class="cv">fake</span>)
<span class="cf">print</span>(<span class="cv">p2</span>.netloc)  <span class="cc"># → amazon.co.uk.login-secure.ru  ✗ FAKE!</span>
<span class="cc"># The REAL domain is login-secure.ru, not amazon.co.uk</span>
<span class="cc"># The amazon.co.uk part is just a trick in the subdomain</span>

<span class="cc"># Rule: read the domain from RIGHT to LEFT, stopping at the first dot</span>
<span class="cc"># The bit just before .com / .co.uk / .org is the REAL owner</span></pre>
        </div>
      `,
      questions:[
        {q:'What is phishing?',opts:['A type of computer virus','Tricking someone into revealing personal info by pretending to be trustworthy','A method of compressing files','A way of speeding up internet connections'],ans:1,why:'Phishing is a social engineering attack where criminals impersonate trusted organisations to steal credentials, money or personal data.'},
        {q:'An email says "Your bank account will be suspended in 2 hours — click here to verify." What is this?',opts:['A genuine urgent bank message','A phishing attempt using urgency to panic you','An automated security alert','A legal notification'],ans:1,why:'Creating false urgency ("act now or lose access") is the #1 phishing technique. Real banks never demand you verify by clicking email links.'},
        {q:'Which email address is most likely a phishing attempt?',opts:['support@apple.com','noreply@amazon.com','security@paypa1.com','no-reply@microsoft.com'],ans:2,why:'"paypa1.com" uses the number 1 instead of the letter l — a classic phishing trick. Always check the full domain carefully.'},
        {q:'What should you do if you receive a suspicious email?',opts:['Click the link to check if it\'s real','Reply asking if it\'s genuine','Delete it and report it as phishing','Forward it to friends to warn them'],ans:2,why:'Delete and report it using your email provider\'s spam/phishing button. Never click links or reply — even a reply confirms your email is active.'},
      ]
    },

    {
      id:'u2l4', emoji:'💬', title:'Cyberbullying',
      intro:'Bullying online can feel even more intense than in person — it can follow you home. But there are clear steps to deal with it.',
      learn:`
        <div class="learn-block">
          <h3>😔 What is cyberbullying?</h3>
          <p><span class="kt">Cyberbullying</span> is using technology — phones, games, social media — to deliberately upset, threaten, or embarrass someone repeatedly.</p>
          <p>It includes: hurtful messages, sharing embarrassing photos, excluding someone from online groups, impersonating them, or spreading rumours.</p>
        </div>
        <div class="learn-block">
          <h3>🌙 Why it's different from face-to-face bullying</h3>
          <div class="story-box">
            <p>With regular bullying, when you go home you get a break. But cyberbullying can follow you everywhere — it's on your phone at dinner, at bedtime, all weekend.<br><br>
            And because it's a screen, some people say things they would <strong>never</strong> say to someone's face. The screen makes them feel invisible — but they aren't. Every message can be traced, screenshotted, and reported.</p>
          </div>
        </div>
        <div class="learn-block">
          <h3>🆘 What to do</h3>
          <ul>
            <li><strong>Don't reply</strong> — engaging makes it worse</li>
            <li><strong>Screenshot</strong> everything as evidence</li>
            <li><strong>Block</strong> the person on the platform</li>
            <li><strong>Tell a trusted adult</strong> — parent, teacher, counsellor</li>
            <li><strong>Report</strong> using the platform's built-in tools</li>
          </ul>
        </div>
      `,
      interactive:`
        <div class="interactive-wrap">
          <div class="i-label">💬 WHAT WOULD YOU DO?</div>
          <p style="font-size:0.93rem;margin-bottom:0.9rem">Read each scenario and choose the best response.</p>
          <div id="cyberGame-u2l4"></div>
        </div>
      `,
      code:`
        <div class="learn-block">
          <h3>💻 How platforms detect and track harmful messages</h3>
          <p>When you report a message, platforms run it through systems that look for keywords, patterns and user history. Python can demonstrate simple content detection:</p>
        </div>
        <div class="code-panel">
          <div class="code-top"><div class="c-dots"><div class="c-dot" style="background:#ff5f56"></div><div class="c-dot" style="background:#ffbd2e"></div><div class="c-dot" style="background:#27c93f"></div></div><span class="code-lbl">python3 — simple content filter concept</span></div>
          <pre class="cb"><span class="cc"># Platforms use similar logic (much more sophisticated)</span>
<span class="cv">flagged_words</span> <span class="co">=</span> [<span class="cs">"hate"</span>, <span class="cs">"loser"</span>, <span class="cs">"ugly"</span>, <span class="cs">"kill"</span>]

<span class="ck">def</span> <span class="cf">check_message</span>(<span class="cv">msg</span>):
    <span class="cv">msg_lower</span> <span class="co">=</span> <span class="cv">msg</span>.<span class="cf">lower</span>()
    <span class="ck">for</span> <span class="cv">word</span> <span class="ck">in</span> <span class="cv">flagged_words</span>:
        <span class="ck">if</span> <span class="cv">word</span> <span class="ck">in</span> <span class="cv">msg_lower</span>:
            <span class="ck">return</span> <span class="cs">f"⚠️ Flagged: contains '{word}'"</span>
    <span class="ck">return</span> <span class="cs">"✓ Message OK"</span>

<span class="cf">print</span>(<span class="cf">check_message</span>(<span class="cs">"You're so ugly"</span>))   <span class="cc"># → ⚠️ Flagged: contains 'ugly'</span>
<span class="cf">print</span>(<span class="cf">check_message</span>(<span class="cs">"Great game today!"</span>))  <span class="cc"># → ✓ Message OK</span>

<span class="cc"># Real platforms also use AI trained on millions of examples</span>
<span class="cc"># and check context, not just individual words</span></pre>
        </div>
      `,
      questions:[
        {q:'Which of these is an example of cyberbullying?',opts:['Losing a multiplayer game','A friend sending you a funny meme','Someone repeatedly sending threatening messages to your account','Getting a bad score on an online quiz'],ans:2,why:'Cyberbullying involves deliberate, repeated harmful behaviour targeting a specific person. One-off incidents or accidents are not cyberbullying.'},
        {q:'Someone is sending you nasty messages online. What should you do FIRST?',opts:['Send equally nasty messages back','Tell all your friends about it','Screenshot the evidence and tell a trusted adult','Ignore it and hope it stops'],ans:2,why:'Screenshotting provides evidence and reporting to a trusted adult means you have support. Replying often escalates the situation.'},
        {q:'Why can cyberbullying feel worse than face-to-face bullying?',opts:['It\'s always anonymous','It can follow you home and happen 24/7, with no escape','It\'s never as serious','Schools can\'t do anything about it'],ans:1,why:'Cyberbullying can intrude on home life, evenings and weekends — there\'s no physical space to escape to. It can also reach a much wider audience very quickly.'},
        {q:'A cyberbully says "no one can find out it\'s me online." Is this true?',opts:['Yes — accounts can be 100% anonymous','No — usernames, IP addresses and device details can be traced','Only true for gaming platforms','Yes, if they use a fake name'],ans:1,why:'Platforms log IP addresses, device fingerprints and account activity. Law enforcement can request this information. Online anonymity is never absolute.'},
      ]
    },

    {
      id:'u2l5', emoji:'©️', title:'Copyright and Ownership',
      intro:'When you create something — a drawing, a song, a story — it belongs to you. The same is true online.',
      learn:`
        <div class="learn-block">
          <h3>©️ What is copyright?</h3>
          <p><span class="kt">Copyright</span> is the legal right that gives the creator of a piece of work exclusive control over how it's used. It applies automatically — you don't need to register it.</p>
          <div class="story-box">
            <p>Imagine you spend 3 months designing a logo. Someone sees it online and prints it on 10,000 T-shirts to sell — without asking or paying you a penny.<br><br>
            Copyright law says: <strong>that's illegal</strong>. Your logo belongs to you. No one can copy it, sell it, or modify it without your permission. The same applies to music, videos, photos, games, and code.</p>
          </div>
        </div>
        <div class="learn-block">
          <h3>🔓 Licences — different types of permission</h3>
          <p>Creators can give others permission using <span class="kt">licences</span>:</p>
          <ul>
            <li><strong>All Rights Reserved</strong> — cannot use without permission</li>
            <li><strong>Creative Commons</strong> — free to use with conditions (e.g. credit the author)</li>
            <li><strong>Public Domain</strong> — anyone can use freely, no restrictions</li>
            <li><strong>Open Source</strong> — code that anyone can view, use and modify</li>
          </ul>
        </div>
      `,
      interactive:`
        <div class="interactive-wrap">
          <div class="i-label">©️ LEGAL OR NOT? — can you use it?</div>
          <p style="font-size:0.93rem;margin-bottom:0.9rem">Read each scenario. Is using the content legal or a copyright violation?</p>
          <div id="copyrightGame-u2l5"></div>
        </div>
      `,
      code:`
        <div class="learn-block">
          <h3>💻 Open source code — what it means</h3>
          <p>Python itself is <strong>open source</strong> — the code is public and anyone can use, modify, or improve it. Most software you use daily has open source components.</p>
        </div>
        <div class="code-panel">
          <div class="code-top"><div class="c-dots"><div class="c-dot" style="background:#ff5f56"></div><div class="c-dot" style="background:#ffbd2e"></div><div class="c-dot" style="background:#27c93f"></div></div><span class="code-lbl">python3 — adding a licence to YOUR code</span></div>
          <pre class="cb"><span class="cc">"""
My Awesome Program
Copyright (c) 2025 Jake Tane
Licence: MIT (anyone can use with credit)

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software to use, copy, modify and
distribute it, as long as this notice is included.
"""</span>

<span class="ck">def</span> <span class="cf">greet</span>(<span class="cv">name</span>):
    <span class="ck">return</span> <span class="cs">f"Hello, </span><span class="cv">{name}</span><span class="cs">! Welcome to my program."</span>

<span class="cf">print</span>(<span class="cf">greet</span>(<span class="cs">"World"</span>))

<span class="cc"># That comment block at the top is a licence notice.
# Professional developers put these in every file they share.
# It protects your work AND tells others what they can do with it.</span></pre>
        </div>
      `,
      questions:[
        {q:'What does copyright protect?',opts:['Only physical objects like books','Creative works including images, music, code, and writing','Only works registered with the government','Works made before 1980 only'],ans:1,why:'Copyright protects original creative works automatically upon creation — digital or physical, registered or not.'},
        {q:'You find a photo online with no watermark. Can you use it in your school project?',opts:['Yes, if there\'s no watermark it\'s free','Yes, anything on the internet is public','Not necessarily — it likely has copyright protection','Yes, educational use is always allowed'],ans:2,why:'No watermark doesn\'t mean no copyright. All original creative works are protected by default. Look for a Creative Commons or public domain licence before using.'},
        {q:'What is a Creative Commons licence?',opts:['A government database of copyrighted works','A way to allow others to use your work with certain conditions','A type of antivirus software','A licence only used for music'],ans:1,why:'Creative Commons licences let creators specify how others may use their work — e.g. "free to use if you credit me" or "free to use but not commercially".'},
        {q:'Open source software means:',opts:['It\'s free to download','The source code is publicly available and can be used/modified','It has no copyright','It was made by volunteers only'],ans:1,why:'Open source means the source code is publicly viewable and available for use, modification and distribution — usually with conditions. Python, Linux and VS Code are all open source.'},
      ]
    },

    {
      id:'u2l6', emoji:'🕵️', title:'Evaluating Websites',
      intro:'Not everything on the internet is true. Learning to spot reliable information is one of the most important skills you can develop.',
      learn:`
        <div class="learn-block">
          <h3>🌐 Anyone can publish anything</h3>
          <p>Unlike books, there's no editor checking websites for accuracy. Anyone — expert or not — can publish anything online. This means you must <strong>evaluate every source</strong> you use.</p>
          <div class="story-box">
            <p>Imagine a huge noticeboard where anyone in the world can pin up papers. Some are written by top scientists. Some are written by 10-year-olds. Some are deliberately misleading. They all look the same on the board.<br><br>
            The internet is that noticeboard. Your job is to be a <strong>detective</strong> — look for clues that tell you whether information is reliable before you trust it.</p>
          </div>
        </div>
        <div class="learn-block">
          <h3>🔍 The CRAAP test</h3>
          <p>Use these five checks to evaluate any source:</p>
          <ul>
            <li><strong>C</strong>urrency — when was it published or updated?</li>
            <li><strong>R</strong>elevance — does it actually answer your question?</li>
            <li><strong>A</strong>uthority — who wrote it? Are they an expert?</li>
            <li><strong>A</strong>ccuracy — is it based on evidence? Are sources cited?</li>
            <li><strong>P</strong>urpose — why was it written? To inform, sell, or mislead?</li>
          </ul>
        </div>
      `,
      interactive:`
        <div class="interactive-wrap">
          <div class="i-label">🕵️ WEBSITE DETECTIVE — reliable or not?</div>
          <p style="font-size:0.93rem;margin-bottom:0.9rem">Read each website description and decide: <strong>trustworthy</strong> or <strong>unreliable</strong>?</p>
          <div id="websiteGame-u2l6"></div>
        </div>
      `,
      code:`
        <div class="learn-block">
          <h3>💻 How search engines rank pages</h3>
          <p>Search engines like Google use algorithms to decide which pages appear first. Understanding this helps you find better sources.</p>
        </div>
        <div class="code-panel">
          <div class="code-top"><div class="c-dots"><div class="c-dot" style="background:#ff5f56"></div><div class="c-dot" style="background:#ffbd2e"></div><div class="c-dot" style="background:#27c93f"></div></div><span class="code-lbl">python3 — simple page ranking concept</span></div>
          <pre class="cb"><span class="cc"># PageRank concept — pages with more links pointing TO them rank higher</span>
<span class="cc"># This is a simplified version of Google's original algorithm</span>

<span class="cv">pages</span> <span class="co">=</span> {
    <span class="cs">'wikipedia.org'</span>:    {<span class="cs">'links_in'</span>: <span class="cn">9_000_000</span>, <span class="cs">'age_years'</span>: <span class="cn">24</span>},
    <span class="cs">'random-blog.com'</span>:  {<span class="cs">'links_in'</span>: <span class="cn">3</span>,         <span class="cs">'age_years'</span>: <span class="cn">0.2</span>},
    <span class="cs">'nhs.uk'</span>:           {<span class="cs">'links_in'</span>: <span class="cn">500_000</span>,  <span class="cs">'age_years'</span>: <span class="cn">25</span>},
}

<span class="ck">def</span> <span class="cf">simple_score</span>(<span class="cv">page</span>):
    <span class="ck">return</span> <span class="cv">page</span>[<span class="cs">'links_in'</span>] <span class="co">*</span> <span class="cv">page</span>[<span class="cs">'age_years'</span>]

<span class="ck">for</span> <span class="cv">name</span>, <span class="cv">data</span> <span class="ck">in</span> <span class="cv">pages</span>.<span class="cf">items</span>():
    <span class="cf">print</span>(<span class="cs">f"</span><span class="cv">{name:25}</span><span class="cs"> score: </span><span class="cv">{simple_score(data):>15,.0f}</span><span class="cs">"</span>)

<span class="cc"># Higher score = more likely to appear at top of search results</span>
<span class="cc"># But top result ≠ most accurate — always evaluate manually too!</span></pre>
        </div>
      `,
      questions:[
        {q:'Which domain extension is most likely to be a reliable source for medical information?',opts:['.com','.net','.nhs.uk or .gov','.info'],ans:2,why:'.gov (government) and .nhs.uk (UK health service) domains are run by official organisations with verified information. .com sites can be run by anyone.'},
        {q:'A website about climate change was last updated in 2003. What CRAAP criteria does this fail?',opts:['Relevance','Currency','Authority','Purpose'],ans:1,why:'Currency — the information is very outdated. Climate science has advanced enormously since 2003. Always check when content was last updated.'},
        {q:'What does "evaluating a source" mean?',opts:['Giving it a star rating','Checking whether information is reliable and accurate','Paying for access to a website','Translating it into another language'],ans:1,why:'Evaluating a source means critically assessing it — checking who wrote it, when, why, and whether the information is backed by evidence.'},
        {q:'A page ranks #1 on Google for your search. This means it is:',opts:['Definitely accurate and trustworthy','The most popular result — but you still need to evaluate it','Written by an official organisation','Free from bias or opinion'],ans:1,why:'Search ranking is based on popularity and relevance signals, not accuracy. Misinformation can rank highly. Always evaluate independently of position.'},
      ]
    },

  ]
};
