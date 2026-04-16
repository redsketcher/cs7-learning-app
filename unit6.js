// ═══════════════════════════════════════════════════════
//  UNIT 6 — CREATING A PODCAST
//  Oxford Book 7 — Planning, recording, editing and
//  publishing a digital audio production
// ═══════════════════════════════════════════════════════

window.UNIT6 = {
  id: 'u6', color: '#c02060', bg: '#fce8f3',
  title: 'Creating a Podcast',
  desc: 'Plan, record, edit and publish your own podcast episode',
  lessons: [

    // ─────────────────────────────────────────────
    // 6.1  WHAT IS A PODCAST?
    // ─────────────────────────────────────────────
    {
      id: 'u6l1', emoji: '🎙️', title: 'What is a Podcast?',
      intro: 'A podcast is a digital audio programme, published online, that anyone in the world can download and listen to whenever they want.',
      learn: `
        <div class="learn-block">
          <h3>🎙️ Podcasts — radio on demand</h3>
          <p>A <span class="kt">podcast</span> is a series of audio episodes on a topic, published online. Listeners subscribe and new episodes download automatically. There are over 5 million podcasts on topics from science to sport to storytelling.</p>
          <div class="story-box">
            <p>Imagine a radio show you love. But it only broadcasts at 7am on Tuesday — miss it and it's gone. You have to organise your whole morning around a show.<br><br>
            Now imagine that same show is recorded and put online. You can listen at 11pm on Saturday in bed with headphones. You can pause, rewind, speed it up. You can listen to episode 47 before episode 3 if you want. That's a podcast — <strong>radio that works around you</strong>, not around a broadcast schedule.</p>
          </div>
        </div>
        <div class="learn-block">
          <h3>📁 How podcasts work technically</h3>
          <p>A podcast is an <strong>MP3 audio file</strong> hosted on a server. A <span class="kt">RSS feed</span> is an automatically updated list that tells apps like Spotify or Apple Podcasts when new episodes are available. Subscribe to the feed — new episodes arrive automatically.</p>
          <div class="fact-row">
            <span class="fact-chip">Audio file → MP3/AAC</span>
            <span class="fact-chip">Hosted on a server</span>
            <span class="fact-chip">RSS feed → apps</span>
            <span class="fact-chip">Listeners download/stream</span>
          </div>
        </div>
        <div class="learn-block">
          <h3>🎚️ What makes a good podcast?</h3>
          <p>Clear audio quality, a focused topic, good preparation, natural conversation or clear narration, and consistent episode structure. A great podcast with average audio beats a boring podcast with studio sound.</p>
        </div>
      `,
      interactive: `
        <div class="interactive-wrap">
          <div class="i-label">🎙️ PODCAST KNOWLEDGE — sort these facts</div>
          <p style="font-size:0.93rem;margin-bottom:0.9rem">Which of these describe podcasts, and which describe live radio?</p>
          <div class="sort-pool" id="pool-u6l1"></div>
          <div class="two-col">
            <div class="sort-zone">
              <div class="sort-zone-label">🎙️ Podcast</div>
              <div class="drop-items" id="drop-podcast-u6l1" data-zone="podcast"></div>
            </div>
            <div class="sort-zone">
              <div class="sort-zone-label">📻 Live Radio</div>
              <div class="drop-items" id="drop-radio-u6l1" data-zone="radio"></div>
            </div>
          </div>
          <button class="btn btn-check btn-sm" style="margin-top:0.9rem" onclick="checkSort('u6l1',{
            'listen any time':'podcast','download to your device':'podcast','subscribe and auto-download':'podcast','hosted as an MP3 file':'podcast',
            'broadcasts at a fixed time':'radio','live phone-ins':'radio','real-time news':'radio','no rewind or pause':'radio'
          })">Check ✓</button>
          <div class="inline-fb" id="fb-sort-u6l1"></div>
        </div>
      `,
      code: `
        <div class="learn-block">
          <h3>💻 RSS feeds — the technology behind podcasts</h3>
          <p>An RSS feed is an XML file that lists all episodes. Podcast apps read this file to check for new content. Here's what a simplified feed looks like:</p>
        </div>
        <div class="code-panel">
          <div class="code-top"><div class="c-dots"><div class="c-dot" style="background:#ff5f56"></div><div class="c-dot" style="background:#ffbd2e"></div><div class="c-dot" style="background:#27c93f"></div></div><span class="code-lbl">podcast_feed.xml — simplified RSS structure</span></div>
          <pre class="cb"><span class="cc">&lt;!-- RSS = Really Simple Syndication --&gt;</span>
<span class="ck">&lt;rss</span> <span class="cv">version=</span><span class="cs">"2.0"</span><span class="ck">&gt;</span>
  <span class="ck">&lt;channel&gt;</span>
    <span class="ck">&lt;title&gt;</span><span class="cs">My School Podcast</span><span class="ck">&lt;/title&gt;</span>
    <span class="ck">&lt;description&gt;</span><span class="cs">Computing topics explained by students</span><span class="ck">&lt;/description&gt;</span>
    <span class="ck">&lt;language&gt;</span><span class="cs">en</span><span class="ck">&lt;/language&gt;</span>

    <span class="ck">&lt;item&gt;</span>
      <span class="ck">&lt;title&gt;</span><span class="cs">Episode 1: What is Binary?</span><span class="ck">&lt;/title&gt;</span>
      <span class="ck">&lt;pubDate&gt;</span><span class="cs">Mon, 10 Mar 2025 09:00:00 GMT</span><span class="ck">&lt;/pubDate&gt;</span>
      <span class="ck">&lt;enclosure</span>
        <span class="cv">url=</span><span class="cs">"https://mysite.com/ep1.mp3"</span>
        <span class="cv">type=</span><span class="cs">"audio/mpeg"</span>
        <span class="cv">length=</span><span class="cs">"8500000"</span>
      <span class="ck">/&gt;</span>
    <span class="ck">&lt;/item&gt;</span>

  <span class="ck">&lt;/channel&gt;</span>
<span class="ck">&lt;/rss&gt;</span>

<span class="cc"># Podcast apps read this XML file automatically
# When a new &lt;item&gt; appears, they notify subscribers</span></pre>
        </div>
      `,
      questions: [
        { q: 'What is a podcast?', opts: ['A live radio broadcast', 'A recorded digital audio programme you can download and listen to any time', 'A video streaming service', 'A type of social media post'], ans: 1, why: 'A podcast is pre-recorded audio published online. Listeners can subscribe and download episodes to listen at any time — unlike live radio.' },
        { q: 'What file format are most podcast audio files?', opts: ['PDF', 'MP4', 'MP3 or AAC', 'DOCX'], ans: 2, why: 'Podcasts are typically MP3 or AAC audio files — compressed formats that sound good but have manageable file sizes for downloading.' },
        { q: 'What is an RSS feed in podcasting?', opts: ['A recording studio tool', 'An automatically updated list that tells apps when new podcast episodes are available', 'A type of microphone', 'A paid subscription service'], ans: 1, why: 'RSS (Really Simple Syndication) is a feed file that podcast apps check regularly. When a new episode is added, apps automatically notify subscribers and offer the download.' },
        { q: 'Which is the MOST important factor for a good podcast?', opts: ['Having the most expensive microphone', 'Clear audio and well-prepared, interesting content', 'Recording in a professional studio', 'Having at least 10 hosts'], ans: 1, why: 'Content and clarity beat equipment every time. A well-prepared, interesting episode recorded on a decent USB microphone will always outperform a boring episode recorded in a studio.' },
      ]
    },

    // ─────────────────────────────────────────────
    // 6.2  PLANNING YOUR PODCAST
    // ─────────────────────────────────────────────
    {
      id: 'u6l2', emoji: '📝', title: 'Planning Your Podcast',
      intro: 'Good podcasts don\'t happen by accident. Behind every natural-sounding episode is careful planning — a clear topic, a script or outline, and a defined audience.',
      learn: `
        <div class="learn-block">
          <h3>🎯 Define your audience and purpose</h3>
          <p>Before you record anything, answer three questions: <strong>Who is this for?</strong> (your audience) <strong>What will they learn or feel?</strong> (your purpose) <strong>Why should they listen to YOU specifically?</strong> (your angle).</p>
          <div class="story-box">
            <p>Imagine two podcasts about space. One is called "Space Facts" and talks about random space things each week. The other is called "Space Explained in 5 Minutes" and picks one specific question ("Why is the moon moving away from Earth?") and answers it perfectly in exactly 5 minutes, every episode.<br><br>
            The second podcast wins every time — not because it's smarter, but because it knows exactly who it's talking to and what it's promising them. <strong>Specificity beats generality.</strong> Before you record a single word, know exactly who you're making this for.</p>
          </div>
        </div>
        <div class="learn-block">
          <h3>📋 The script vs the outline</h3>
          <p>A <span class="kt">script</span> writes every word out in advance — sounds polished but can feel robotic. An <span class="kt">outline</span> lists bullet points of what to cover — sounds natural but needs confident speakers. Most professional podcasters use a detailed outline, not a full script.</p>
        </div>
        <div class="learn-block">
          <h3>🏗️ Episode structure</h3>
          <ul>
            <li><strong>Hook</strong> (30 sec) — grab attention immediately</li>
            <li><strong>Intro</strong> (60 sec) — who you are, what the episode is about</li>
            <li><strong>Main content</strong> (5–10 min) — 3–4 clear sections</li>
            <li><strong>Summary</strong> (30 sec) — recap the key points</li>
            <li><strong>Outro</strong> (30 sec) — call to action, see you next time</li>
          </ul>
        </div>
      `,
      interactive: `
        <div class="interactive-wrap">
          <div class="i-label">📝 EPISODE PLANNER — build your structure</div>
          <p style="font-size:0.93rem;margin-bottom:0.9rem">Drag these episode sections into the correct order. Every episode needs a clear structure!</p>
          <div class="sort-pool" id="pool-u6l2"></div>
          <div class="two-col">
            <div class="sort-zone">
              <div class="sort-zone-label">✅ Correct order (1→5)</div>
              <div class="drop-items" id="drop-correct-u6l2" data-zone="correct"></div>
            </div>
            <div class="sort-zone">
              <div class="sort-zone-label">❌ Wrong order pile</div>
              <div class="drop-items" id="drop-wrong-u6l2" data-zone="wrong"></div>
            </div>
          </div>
          <button class="btn btn-check btn-sm" style="margin-top:0.9rem" onclick="checkPodcastOrder('u6l2')">Check order ✓</button>
          <div class="inline-fb" id="fb-sort-u6l2"></div>
        </div>
      `,
      code: `
        <div class="code-panel">
          <div class="code-top"><div class="c-dots"><div class="c-dot" style="background:#ff5f56"></div><div class="c-dot" style="background:#ffbd2e"></div><div class="c-dot" style="background:#27c93f"></div></div><span class="code-lbl">python3 — generate an episode outline</span></div>
          <pre class="cb"><span class="cc"># A simple podcast episode planner in Python</span>

<span class="cv">episode</span> <span class="co">=</span> {
    <span class="cs">"title"</span>:    <span class="cs">"Why Do We Dream?"</span>,
    <span class="cs">"audience"</span>: <span class="cs">"Students aged 10-14"</span>,
    <span class="cs">"hook"</span>:     <span class="cs">"Last night I had a dream where I could fly. But why?"</span>,
    <span class="cs">"sections"</span>: [
        <span class="cs">"What happens in your brain during sleep"</span>,
        <span class="cs">"The science of REM sleep"</span>,
        <span class="cs">"Why scientists still don't fully understand dreams"</span>,
    ],
    <span class="cs">"outro"</span>:    <span class="cs">"Tell us your weirdest dream in the comments!"</span>,
    <span class="cs">"target_minutes"</span>: <span class="cn">8</span>,
}

<span class="cf">print</span>(<span class="cs">f"=== Episode Plan ==="</span>)
<span class="cf">print</span>(<span class="cs">f"Title:    {episode['title']}"</span>)
<span class="cf">print</span>(<span class="cs">f"Audience: {episode['audience']}"</span>)
<span class="cf">print</span>(<span class="cs">f"Target:   {episode['target_minutes']} minutes\n"</span>)
<span class="cf">print</span>(<span class="cs">f"HOOK: {episode['hook']}\n"</span>)
<span class="cf">print</span>(<span class="cs">"MAIN SECTIONS:"</span>)
<span class="ck">for</span> <span class="cv">i</span>, <span class="cv">s</span> <span class="ck">in</span> <span class="cf">enumerate</span>(<span class="cv">episode</span>[<span class="cs">"sections"</span>], <span class="cn">1</span>):
    <span class="cf">print</span>(<span class="cs">f"  {i}. {s}"</span>)
<span class="cf">print</span>(<span class="cs">f"\nOUTRO: {episode['outro']}"</span>)</pre>
        </div>
      `,
      questions: [
        { q: 'What is the PURPOSE of a podcast hook?', opts: ['To explain the episode in detail', 'To grab the listener\'s attention in the first 30 seconds', 'To introduce the host\'s biography', 'To list the episode chapters'], ans: 1, why: 'The hook must grab attention immediately. Listeners decide in the first 30–60 seconds whether to keep listening — so the opening has to be compelling.' },
        { q: 'What is the difference between a script and an outline?', opts: ['A script is shorter', 'A script writes every word; an outline lists key bullet points to cover', 'An outline is only for TV shows', 'There is no difference'], ans: 1, why: 'A script is word-for-word; an outline is bullet points. Scripts sound polished but robotic; outlines sound natural but require confident improvisation.' },
        { q: 'Which episode order is correct?', opts: ['Outro → Content → Hook → Summary → Intro', 'Hook → Intro → Content → Summary → Outro', 'Intro → Hook → Summary → Content → Outro', 'Content → Intro → Hook → Outro → Summary'], ans: 1, why: 'Hook first (grab attention), then intro (who/what), then main content, then summary (recap), then outro (goodbye/call to action).' },
        { q: 'Why is it important to define your audience BEFORE recording?', opts: ['Podcast apps require audience data', 'Knowing your audience shapes your language, depth and topic choices', 'You need audience numbers to get a microphone', 'Audiences must approve your script first'], ans: 1, why: 'Your audience determines everything — how technical to be, what to assume they already know, what tone to use, and what questions they\'ll find interesting.' },
      ]
    },

    // ─────────────────────────────────────────────
    // 6.3  RECORDING AUDIO
    // ─────────────────────────────────────────────
    {
      id: 'u6l3', emoji: '🎤', title: 'Recording Audio',
      intro: 'Great content recorded badly sounds amateur. A few simple techniques make a huge difference to your audio quality — without expensive equipment.',
      learn: `
        <div class="learn-block">
          <h3>🎤 Equipment basics</h3>
          <p>You don't need a professional studio. A decent <strong>USB microphone</strong> (or even a phone with earphones as a microphone) is enough to start. The most important thing is your <strong>recording environment</strong> — not your equipment.</p>
          <div class="story-box">
            <p>A microphone doesn't just capture your voice — it captures <em>everything</em>. The echo bouncing off your bare bedroom walls. The traffic outside. The hum of your computer fan. The creak when you shift in your chair.<br><br>
            Professional studios spend thousands on <strong>acoustic treatment</strong> — special foam panels that absorb sound reflections. But here's the trick: a <strong>wardrobe full of clothes</strong> does almost exactly the same thing. Hang coats around you, record inside, and you get natural sound dampening for free. Soft furnishings absorb echo. Hard surfaces bounce it. Choose your room accordingly.</p>
          </div>
        </div>
        <div class="learn-block">
          <h3>🔇 Reducing noise</h3>
          <ul>
            <li>Turn off fans, air conditioning, and noisy appliances</li>
            <li>Close windows and doors</li>
            <li>Record in a small room with carpet and soft furniture</li>
            <li>Hold the microphone 10–15cm from your mouth, slightly to the side (not directly in front — avoids "p-popping")</li>
            <li>Do a test recording and listen back BEFORE your real take</li>
          </ul>
        </div>
        <div class="learn-block">
          <h3>🎚️ Levels</h3>
          <p>Recording <span class="kt">level</span> (volume) matters. Too quiet — the recording picks up background noise when you boost it. Too loud — the signal <span class="kt">clips</span> (distorts). Aim for the meter peaking around -12dB to -6dB — comfortably loud, not maxed out.</p>
        </div>
      `,
      interactive: `
        <div class="interactive-wrap">
          <div class="i-label">🎤 RECORDING CHECKLIST — ready to record?</div>
          <p style="font-size:0.93rem;margin-bottom:0.9rem">Tick off each step before you press record. Miss one and it'll show in your audio!</p>
          <div id="recordChecklist-u6l3"></div>
        </div>
      `,
      code: `
        <div class="learn-block">
          <h3>💻 How digital audio recording works</h3>
          <p>When you record, your computer takes thousands of samples per second (remember Unit 1.6?) and saves them as a file. Audacity is free software that shows this as a waveform.</p>
        </div>
        <div class="code-panel">
          <div class="code-top"><div class="c-dots"><div class="c-dot" style="background:#ff5f56"></div><div class="c-dot" style="background:#ffbd2e"></div><div class="c-dot" style="background:#27c93f"></div></div><span class="code-lbl">python3 — reading audio file info</span></div>
          <pre class="cb"><span class="cc"># You can read audio file details with Python</span>
<span class="ck">import</span> wave, os

<span class="ck">def</span> <span class="cf">audio_info</span>(<span class="cv">filename</span>):
    <span class="ck">with</span> wave.<span class="cf">open</span>(<span class="cv">filename</span>, <span class="cs">'rb'</span>) <span class="ck">as</span> <span class="cv">f</span>:
        <span class="cv">channels</span>    <span class="co">=</span> <span class="cv">f</span>.<span class="cf">getnchannels</span>()
        <span class="cv">sample_rate</span> <span class="co">=</span> <span class="cv">f</span>.<span class="cf">getframerate</span>()
        <span class="cv">frames</span>      <span class="co">=</span> <span class="cv">f</span>.<span class="cf">getnframes</span>()
        <span class="cv">duration</span>    <span class="co">=</span> <span class="cv">frames</span> <span class="co">/</span> <span class="cv">sample_rate</span>
        <span class="cv">size_mb</span>     <span class="co">=</span> os.<span class="cf">path</span>.<span class="cf">getsize</span>(<span class="cv">filename</span>) <span class="co">/</span> <span class="cn">1_000_000</span>

    <span class="cf">print</span>(<span class="cs">f"File:        {filename}"</span>)
    <span class="cf">print</span>(<span class="cs">f"Sample rate: {sample_rate} Hz"</span>)
    <span class="cf">print</span>(<span class="cs">f"Channels:    {channels} ({'stereo' if channels==2 else 'mono'})"</span>)
    <span class="cf">print</span>(<span class="cs">f"Duration:    {duration:.1f} seconds"</span>)
    <span class="cf">print</span>(<span class="cs">f"File size:   {size_mb:.2f} MB"</span>)

<span class="cc"># audio_info("my_recording.wav")
# This connects back to Unit 1 — sampling, bit depth, file size!</span></pre>
        </div>
      `,
      questions: [
        { q: 'What is the most important factor for good recording quality?', opts: ['Having an expensive microphone', 'Your recording environment — soft surfaces, no echo, no background noise', 'Recording at night', 'Using stereo instead of mono'], ans: 1, why: 'A great environment beats great equipment every time. Clothes absorbing echo and windows closed will improve your audio more than upgrading your microphone.' },
        { q: 'What does audio "clipping" mean?', opts: ['Cutting a recording too short', 'The recording level is too high, causing the audio to distort', 'Recording in mono instead of stereo', 'The microphone cable is too short'], ans: 1, why: 'Clipping happens when the signal exceeds the maximum recordable level. The waveform gets "clipped" flat at the top — creating harsh distortion that can\'t be fixed in editing.' },
        { q: 'Where should you position a microphone relative to your mouth?', opts: ['Directly in front, touching your lips', 'About 10–15cm away, slightly to the side', 'As far away as possible', 'Behind your head'], ans: 1, why: '10–15cm away prevents "p-popping" (explosive P and B sounds). Slightly to the side avoids direct breath hits. This is standard microphone technique.' },
        { q: 'Why should you do a test recording before your real take?', opts: ['Microphones need warming up', 'So you can check levels, background noise, and sound quality before committing to the real recording', 'Podcast apps require a test file first', 'It is required by law'], ans: 1, why: 'A test recording catches problems — background noise, bad levels, echo, equipment issues — before you waste time recording a full episode with flawed audio.' },
      ]
    },

    // ─────────────────────────────────────────────
    // 6.4  EDITING AUDIO
    // ─────────────────────────────────────────────
    {
      id: 'u6l4', emoji: '✂️', title: 'Editing Audio',
      intro: 'Editing turns a raw recording into a polished episode. You cut mistakes, tighten pacing, add music, and balance levels.',
      learn: `
        <div class="learn-block">
          <h3>✂️ What is editing?</h3>
          <p>Audio <span class="kt">editing</span> is the process of selecting, arranging, cutting, and adjusting recorded audio. You work with the waveform — a visual representation of the sound — using software like Audacity (free) or GarageBand.</p>
          <div class="story-box">
            <p>Imagine filming yourself cooking a recipe on video. The raw footage is 45 minutes of chopping, waiting for things to boil, fumbling for ingredients, and saying "um" constantly.<br><br>
            The final YouTube video is 8 minutes of clean, confident cooking — every pause cut out, every mistake removed, background music added underneath, titles over the top. The dish is the same. The audience experience is completely different.<br><br>
            Editing your podcast is exactly this. Your raw recording might be 25 minutes of stumbles, long pauses, and "let me start that again". Your edited episode is 12 minutes of polished, confident audio. <strong>Editing is where podcasts are made.</strong></p>
          </div>
        </div>
        <div class="learn-block">
          <h3>🔧 Key editing techniques</h3>
          <ul>
            <li><strong>Cut</strong> — remove mistakes, "um"s, long pauses, false starts</li>
            <li><strong>Fade in/out</strong> — smooth start and end of audio, less jarring</li>
            <li><strong>Noise reduction</strong> — remove background hiss using a sample of silence</li>
            <li><strong>Normalise</strong> — bring overall volume to a consistent level</li>
            <li><strong>Compress</strong> — reduce difference between loud and quiet parts</li>
            <li><strong>Add music</strong> — intro/outro music (must be royalty-free!)</li>
          </ul>
        </div>
        <div class="learn-block">
          <h3>🎶 Royalty-free music</h3>
          <p>You cannot use copyrighted songs in your podcast (remember Unit 2.5). Use <span class="kt">royalty-free</span> music from sites like Pixabay, Free Music Archive, or YouTube Audio Library — these are licensed for use in creative projects.</p>
        </div>
      `,
      interactive: `
        <div class="interactive-wrap">
          <div class="i-label">✂️ EDITING DECISIONS — what would you do?</div>
          <p style="font-size:0.93rem;margin-bottom:0.9rem">Read each editing scenario and choose the best action.</p>
          <div id="editGame-u6l4"></div>
        </div>
      `,
      code: `
        <div class="code-panel">
          <div class="code-top"><div class="c-dots"><div class="c-dot" style="background:#ff5f56"></div><div class="c-dot" style="background:#ffbd2e"></div><div class="c-dot" style="background:#27c93f"></div></div><span class="code-lbl">python3 — audio editing concepts</span></div>
          <pre class="cb"><span class="cc"># Audio editing in code uses libraries like pydub</span>
<span class="cc"># This shows the concepts (install pydub to run for real)</span>
<span class="cc"># pip install pydub</span>

<span class="ck">from</span> pydub <span class="ck">import</span> AudioSegment

<span class="cc"># Load a recording</span>
<span class="cv">audio</span> <span class="co">=</span> AudioSegment.<span class="cf">from_mp3</span>(<span class="cs">"raw_recording.mp3"</span>)

<span class="cc"># Cut — milliseconds (10000ms = 10 seconds)</span>
<span class="cv">trimmed</span> <span class="co">=</span> <span class="cv">audio</span>[<span class="cn">5000</span>:<span class="cn">125000</span>]  <span class="cc"># keep 5s–125s</span>

<span class="cc"># Fade in and out (2 seconds each)</span>
<span class="cv">faded</span> <span class="co">=</span> <span class="cv">trimmed</span>.<span class="cf">fade_in</span>(<span class="cn">2000</span>).<span class="cf">fade_out</span>(<span class="cn">2000</span>)

<span class="cc"># Normalise volume</span>
<span class="cv">normalised</span> <span class="co">=</span> <span class="cv">faded</span>.<span class="cf">normalize</span>()

<span class="cc"># Add royalty-free intro music</span>
<span class="cv">music</span>      <span class="co">=</span> AudioSegment.<span class="cf">from_mp3</span>(<span class="cs">"intro_music.mp3"</span>)[:<span class="cn">8000</span>]  <span class="cc"># first 8s</span>
<span class="cv">music_fade</span> <span class="co">=</span> <span class="cv">music</span>.<span class="cf">fade_out</span>(<span class="cn">3000</span>)
<span class="cv">final</span>      <span class="co">=</span> <span class="cv">music_fade</span> <span class="co">+</span> <span class="cv">normalised</span>

<span class="cc"># Export as MP3</span>
<span class="cv">final</span>.<span class="cf">export</span>(<span class="cs">"episode_01.mp3"</span>, <span class="cv">format</span><span class="co">=</span><span class="cs">"mp3"</span>, <span class="cv">bitrate</span><span class="co">=</span><span class="cs">"128k"</span>)
<span class="cf">print</span>(<span class="cs">"Episode exported! ✓"</span>)</pre>
        </div>
      `,
      questions: [
        { q: 'What is "normalising" audio?', opts: ['Removing background noise', 'Bringing the overall volume to a consistent, standard level', 'Adding fade in and out effects', 'Cutting out mistakes'], ans: 1, why: 'Normalising analyses the loudest peak in your recording and adjusts the overall volume so it hits a standard target level — making it neither too quiet nor too loud.' },
        { q: 'You can use any popular song as background music in your podcast because it sounds good. Is this correct?', opts: ['Yes, if the song is over 30 seconds old', 'No — popular songs are copyrighted and require a licence you likely don\'t have', 'Yes, if you credit the artist in the description', 'Yes, podcasts are educational so copyright doesn\'t apply'], ans: 1, why: 'Music copyright applies to podcasts just like any other publication. Using copyrighted music without a licence can result in your episode being removed and potential legal action.' },
        { q: 'What does a "fade out" do at the end of an episode?', opts: ['Increases the volume gradually', 'Gradually reduces the volume to silence — a smoother ending than abrupt silence', 'Removes background noise', 'Adds an echo effect'], ans: 1, why: 'A fade out gradually reduces volume to zero, giving a professional, smooth ending rather than audio cutting off abruptly.' },
        { q: 'After recording, you notice a consistent hiss in the background. What should you use?', opts: ['Cut the entire recording', 'Noise reduction — sample the silence then remove that frequency pattern', 'Normalise the audio', 'Add more fade in/out'], ans: 1, why: 'Noise reduction works by sampling a section of pure background noise (just the hiss, no voice) and then removing that frequency signature from the entire recording.' },
      ]
    },

    // ─────────────────────────────────────────────
    // 6.5  PUBLISHING YOUR PODCAST
    // ─────────────────────────────────────────────
    {
      id: 'u6l5', emoji: '🚀', title: 'Publishing Your Podcast',
      intro: 'Once your episode is edited and exported, you need to host it online and submit it to directories so listeners can find it.',
      learn: `
        <div class="learn-block">
          <h3>🚀 The publishing process</h3>
          <p>Publishing a podcast has three steps: <strong>export</strong> your audio file, <strong>upload</strong> it to a podcast hosting service, and <strong>submit</strong> your RSS feed to directories.</p>
          <div class="story-box">
            <p>Imagine you've baked a brilliant cake. But it's sitting in your kitchen where nobody can try it. To share it, you need to: 1) Put it in a box (export to MP3). 2) Take it to a café that displays cakes (upload to a hosting platform like Anchor or Buzzsprout). 3) Tell every food magazine it exists (submit your RSS feed to Spotify, Apple Podcasts, Google Podcasts).<br><br>
            The hosting platform stores your audio file and generates the RSS feed automatically. You just upload the MP3. They handle the rest — the "café" puts your cake on display for the whole world.</p>
          </div>
        </div>
        <div class="learn-block">
          <h3>📋 What you need to publish</h3>
          <ul>
            <li><strong>MP3 file</strong> — your edited, exported episode</li>
            <li><strong>Episode title</strong> — clear, searchable, interesting</li>
            <li><strong>Description</strong> — what the episode is about (first 2 sentences matter most)</li>
            <li><strong>Show artwork</strong> — 1400×1400px to 3000×3000px JPEG or PNG</li>
            <li><strong>Category</strong> — e.g. Education, Technology, Science</li>
          </ul>
        </div>
        <div class="learn-block">
          <h3>📊 Podcast analytics</h3>
          <p>Hosting platforms show you <span class="kt">analytics</span> — how many downloads, where listeners are from, which episode is most popular, when listeners drop off. This data helps you improve future episodes.</p>
        </div>
      `,
      interactive: `
        <div class="interactive-wrap">
          <div class="i-label">🚀 PUBLISHING CHECKLIST — ready to go live?</div>
          <p style="font-size:0.93rem;margin-bottom:0.9rem">Check off everything you need before publishing your podcast episode.</p>
          <div id="publishChecklist-u6l5"></div>
        </div>
      `,
      code: `
        <div class="code-panel">
          <div class="code-top"><div class="c-dots"><div class="c-dot" style="background:#ff5f56"></div><div class="c-dot" style="background:#ffbd2e"></div><div class="c-dot" style="background:#27c93f"></div></div><span class="code-lbl">python3 — validate your episode before publishing</span></div>
          <pre class="cb"><span class="ck">import</span> os

<span class="ck">def</span> <span class="cf">validate_episode</span>(<span class="cv">filename</span>, <span class="cv">title</span>, <span class="cv">description</span>):
    <span class="cv">issues</span> <span class="co">=</span> []

    <span class="cc"># Check file exists and is MP3</span>
    <span class="ck">if</span> <span class="ck">not</span> os.<span class="cv">path</span>.<span class="cf">exists</span>(<span class="cv">filename</span>):
        <span class="cv">issues</span>.<span class="cf">append</span>(<span class="cs">"❌ Audio file not found"</span>)
    <span class="ck">elif</span> <span class="ck">not</span> <span class="cv">filename</span>.<span class="cf">endswith</span>(<span class="cs">'.mp3'</span>):
        <span class="cv">issues</span>.<span class="cf">append</span>(<span class="cs">"❌ File must be MP3 format"</span>)
    <span class="ck">else</span>:
        <span class="cv">size_mb</span> <span class="co">=</span> os.<span class="cf">path</span>.<span class="cf">getsize</span>(<span class="cv">filename</span>) <span class="co">/</span> <span class="cn">1_000_000</span>
        <span class="cv">issues</span>.<span class="cf">append</span>(<span class="cs">f"✅ Audio: {size_mb:.1f} MB"</span>)

    <span class="cc"># Check title length</span>
    <span class="ck">if</span> <span class="cf">len</span>(<span class="cv">title</span>) <span class="co">&lt;</span> <span class="cn">5</span>:
        <span class="cv">issues</span>.<span class="cf">append</span>(<span class="cs">"❌ Title too short"</span>)
    <span class="ck">elif</span> <span class="cf">len</span>(<span class="cv">title</span>) <span class="co">></span> <span class="cn">100</span>:
        <span class="cv">issues</span>.<span class="cf">append</span>(<span class="cs">"⚠️ Title very long — consider shortening"</span>)
    <span class="ck">else</span>:
        <span class="cv">issues</span>.<span class="cf">append</span>(<span class="cs">f"✅ Title: {title}"</span>)

    <span class="cc"># Check description</span>
    <span class="ck">if</span> <span class="cf">len</span>(<span class="cv">description</span>) <span class="co">&lt;</span> <span class="cn">50</span>:
        <span class="cv">issues</span>.<span class="cf">append</span>(<span class="cs">"❌ Description too short — aim for 100-300 characters"</span>)
    <span class="ck">else</span>:
        <span class="cv">issues</span>.<span class="cf">append</span>(<span class="cs">f"✅ Description: {len(description)} chars"</span>)

    <span class="ck">for</span> <span class="cv">i</span> <span class="ck">in</span> <span class="cv">issues</span>: <span class="cf">print</span>(<span class="cv">i</span>)

<span class="cf">validate_episode</span>(
    <span class="cs">"episode_01.mp3"</span>,
    <span class="cs">"Why Do We Dream? — The Science of Sleep"</span>,
    <span class="cs">"We spend a third of our lives asleep. But why do we dream? In this episode we explore the science of REM sleep."</span>
)</pre>
        </div>
      `,
      questions: [
        { q: 'What does a podcast hosting platform do?', opts: ['Records your podcast for you', 'Stores your audio files and generates the RSS feed so directories can find your podcast', 'Edits your audio automatically', 'Provides you with a microphone'], ans: 1, why: 'Hosting platforms (like Anchor, Buzzsprout, Podbean) store your MP3 files and generate the RSS feed. You just upload — they handle distribution to Spotify, Apple Podcasts etc.' },
        { q: 'What is the recommended image size for podcast cover art?', opts: ['100×100 pixels', '500×500 pixels', '1400×1400 to 3000×3000 pixels', '4K video resolution'], ans: 2, why: 'Podcast directories require square artwork between 1400×1400 and 3000×3000 pixels. This ensures it looks sharp on all devices from phone screens to desktop browsers.' },
        { q: 'What do podcast analytics tell you?', opts: ['Nothing — analytics don\'t exist for podcasts', 'How many downloads, where listeners are from, which episodes are most popular', 'Only the total number of subscribers', 'The exact names of your listeners'], ans: 1, why: 'Analytics give you data about listener behaviour — download numbers, geographic location, episode popularity, and listener drop-off points. This guides future episode planning.' },
        { q: 'To get your podcast onto Spotify and Apple Podcasts, you:', opts: ['Email them your MP3 directly', 'Submit your RSS feed URL to each platform', 'Pay a fee to each platform separately', 'Podcasts appear automatically when you record them'], ans: 1, why: 'You submit your hosting platform\'s RSS feed URL to each directory. They then regularly check the feed and automatically add new episodes when you publish them.' },
      ]
    },

    // ─────────────────────────────────────────────
    // 6.6  YOUR PODCAST PROJECT
    // ─────────────────────────────────────────────
    {
      id: 'u6l6', emoji: '🏆', title: 'Your Podcast Project',
      intro: 'Bring everything together — plan, record, edit, and package a complete podcast episode ready for the world.',
      learn: `
        <div class="learn-block">
          <h3>🏆 The full workflow</h3>
          <p>You now have every skill needed to create a professional-quality podcast. Here's the complete workflow from idea to published episode:</p>
          <div class="fact-row">
            <span class="fact-chip">💡 Idea + audience</span>
            <span class="fact-chip">📝 Plan + outline</span>
            <span class="fact-chip">🎤 Record</span>
            <span class="fact-chip">✂️ Edit</span>
            <span class="fact-chip">🚀 Publish</span>
          </div>
          <div class="story-box">
            <p>Every major podcast — whether it's a BBC production or a single person in their bedroom — goes through exactly these five stages. The BBC has 50 people doing them. You're doing all five yourself.<br><br>
            And here's the thing: a teenager with a USB microphone and Audacity has published podcasts that reached millions of listeners. Not because they had a studio — because they had something genuine and interesting to say, and they said it clearly.<br><br>
            <strong>The tools are free. The platform is global. The audience is everyone. All you need is your voice and something worth saying.</strong></p>
          </div>
        </div>
        <div class="learn-block">
          <h3>📋 Your project brief</h3>
          <ul>
            <li>Topic: something you genuinely find interesting</li>
            <li>Length: 3–5 minutes (quality over quantity)</li>
            <li>Structure: hook → intro → 2–3 main points → summary → outro</li>
            <li>Tools: Audacity (free), your phone or USB microphone</li>
            <li>Music: royalty-free only (Pixabay Audio, Free Music Archive)</li>
            <li>Output: an edited MP3 ready to upload</li>
          </ul>
        </div>
        <div class="learn-block">
          <h3>✅ Assessment checklist</h3>
          <ul>
            <li>Clear audio with minimal background noise</li>
            <li>Follows planned structure (hook → outro)</li>
            <li>All music is royalty-free and credited</li>
            <li>Edited: mistakes removed, pauses tightened, levels normalised</li>
            <li>Has a title, description, and cover image</li>
          </ul>
        </div>
      `,
      interactive: `
        <div class="interactive-wrap">
          <div class="i-label">🏆 PODCAST PLANNER — build your episode plan</div>
          <p style="font-size:0.93rem;margin-bottom:0.9rem">Fill in your episode details below to generate your personal podcast plan!</p>
          <div id="podcastPlanner-u6l6"></div>
        </div>
      `,
      code: `
        <div class="code-panel">
          <div class="code-top"><div class="c-dots"><div class="c-dot" style="background:#ff5f56"></div><div class="c-dot" style="background:#ffbd2e"></div><div class="c-dot" style="background:#27c93f"></div></div><span class="code-lbl">python3 — complete podcast production checklist</span></div>
          <pre class="cb"><span class="cc"># Your podcast production tracker</span>

<span class="cv">episode</span> <span class="co">=</span> {
    <span class="cs">"title"</span>:       <span class="cs">"Why is the sky blue? — The science of light"</span>,
    <span class="cs">"target_mins"</span>: <span class="cn">4</span>,
    <span class="cs">"audience"</span>:    <span class="cs">"Students aged 10-14"</span>,
}

<span class="cv">checklist</span> <span class="co">=</span> [
    (<span class="cs">"Plan"</span>,    <span class="ck">True</span>,  <span class="cs">"Outline written with hook, 3 sections, outro"</span>),
    (<span class="cs">"Record"</span>,  <span class="ck">True</span>,  <span class="cs">"25 min raw recording, quiet room"</span>),
    (<span class="cs">"Edit"</span>,    <span class="ck">True</span>,  <span class="cs">"Trimmed to 4:12, noise reduced, normalised"</span>),
    (<span class="cs">"Music"</span>,   <span class="ck">True</span>,  <span class="cs">"Royalty-free intro from Pixabay Audio"</span>),
    (<span class="cs">"Export"</span>,  <span class="ck">True</span>,  <span class="cs">"episode_01.mp3 — 128kbps, 3.8 MB"</span>),
    (<span class="cs">"Artwork"</span>, <span class="ck">False</span>, <span class="cs">"Still need to create 1400x1400 cover image"</span>),
    (<span class="cs">"Publish"</span>, <span class="ck">False</span>, <span class="cs">"Not yet — waiting for artwork"</span>),
]

<span class="cf">print</span>(<span class="cs">f"=== {episode['title']} ==="</span>)
<span class="cf">print</span>(<span class="cs">f"Target: {episode['target_mins']} min | Audience: {episode['audience']}\n"</span>)

<span class="cv">done</span> <span class="co">=</span> <span class="cf">sum</span>(<span class="cn">1</span> <span class="ck">for</span> <span class="cv">_</span>, <span class="cv">complete</span>, <span class="cv">_</span> <span class="ck">in</span> <span class="cv">checklist</span> <span class="ck">if</span> <span class="cv">complete</span>)
<span class="ck">for</span> <span class="cv">step</span>, <span class="cv">complete</span>, <span class="cv">note</span> <span class="ck">in</span> <span class="cv">checklist</span>:
    <span class="cv">icon</span> <span class="co">=</span> <span class="cs">"✅"</span> <span class="ck">if</span> <span class="cv">complete</span> <span class="ck">else</span> <span class="cs">"⬜"</span>
    <span class="cf">print</span>(<span class="cs">f"{icon} {step:10} — {note}"</span>)

<span class="cf">print</span>(<span class="cs">f"\nProgress: {done}/{len(checklist)} steps complete"</span>)</pre>
        </div>
        <div class="bash-panel">
          <div class="bash-top"><div class="c-dots"><div class="c-dot" style="background:#ff5f56"></div><div class="c-dot" style="background:#ffbd2e"></div><div class="c-dot" style="background:#27c93f"></div></div><span class="bash-lbl">Run your production tracker</span></div>
          <pre class="bb"><span class="bp">C:\\></span> <span class="bc">python podcast_tracker.py</span>
<span class="bo">=== Why is the sky blue? — The science of light ===
Target: 4 min | Audience: Students aged 10-14

✅ Plan       — Outline written with hook, 3 sections, outro
✅ Record     — 25 min raw recording, quiet room
✅ Edit       — Trimmed to 4:12, noise reduced, normalised
✅ Music      — Royalty-free intro from Pixabay Audio
✅ Export     — episode_01.mp3 — 128kbps, 3.8 MB
⬜ Artwork    — Still need to create 1400x1400 cover image
⬜ Publish    — Not yet — waiting for artwork

Progress: 5/7 steps complete</span></pre>
        </div>
      `,
      questions: [
        { q: 'What is the recommended episode length for a first podcast project?', opts: ['30+ minutes', '3–5 minutes', 'Exactly 10 minutes', 'As long as possible'], ans: 1, why: 'For a first project, 3–5 minutes forces you to plan carefully and be concise. Quality and structure matter more than length — a tight 4-minute episode beats a rambling 20-minute one.' },
        { q: 'All five stages of podcast production in the correct order are:', opts: ['Record → Plan → Edit → Idea → Publish', 'Idea → Plan → Record → Edit → Publish', 'Edit → Plan → Record → Publish → Idea', 'Publish → Record → Edit → Plan → Idea'], ans: 1, why: 'The workflow is always: get an Idea → Plan it → Record → Edit → Publish. You can\'t edit before recording, and you can\'t publish before editing.' },
        { q: 'You want to use a popular chart song as your intro music. What should you do instead?', opts: ['Use it — podcasts are educational', 'Find royalty-free music from sites like Pixabay Audio or Free Music Archive', 'Ask the artist on social media', 'Use a 5-second clip — that\'s always allowed'], ans: 1, why: 'Popular songs are copyrighted — using them without a licence violates copyright law regardless of podcast length. Royalty-free libraries provide high-quality music cleared for use in content creation.' },
        { q: 'What does the complete Unit 6 project assess?', opts: ['Only your technical recording skills', 'Only your editing ability', 'Your ability to plan, record, edit, and package a complete podcast episode to a brief', 'Only whether your topic is interesting'], ans: 2, why: 'The project assesses the full pipeline: planning (outline, audience), recording (audio quality), editing (clean, normalised, music), and packaging (title, description, ready to publish).' },
      ]
    },

  ] // end Unit 6 lessons
}; // end UNIT6

// ─── Helper functions for U6 interactives ─────────────

// Recording checklist (u6l3)
window._checklistState = window._checklistState || {};

window.buildRecordingChecklist = function(id) {
  const wrap = document.getElementById(`recordChecklist-${id}`);
  if (!wrap) return;
  const items = [
    'Turned off fans and air conditioning',
    'Closed windows and doors',
    'Chosen a room with soft furnishings',
    'Microphone positioned 10–15cm away, slightly to the side',
    'Done a 30-second test recording and listened back',
    'Set recording level to peak around -12dB to -6dB',
    'Prepared my outline or script',
    'Water nearby (for dry mouth mid-recording)',
  ];
  window._checklistState[id] = new Array(items.length).fill(false);
  wrap.innerHTML = items.map((item, i) => `
    <label style="display:flex;align-items:center;gap:0.7rem;padding:0.65rem 0.8rem;border-radius:10px;border:2px solid var(--border);margin-bottom:0.5rem;cursor:pointer;font-size:0.93rem;font-weight:500;background:var(--warm);transition:all 0.14s" id="cl-${id}-${i}">
      <input type="checkbox" onchange="tickChecklist('${id}',${i},this.checked)" style="width:20px;height:20px;cursor:pointer;accent-color:#c02060">
      ${item}
    </label>`).join('');
};

window.tickChecklist = function(id, idx, checked) {
  if (!window._checklistState[id]) return;
  window._checklistState[id][idx] = checked;
  const label = document.getElementById(`cl-${id}-${idx}`);
  if (label) label.style.background = checked ? '#fce8f3' : 'var(--warm)';
  const count = window._checklistState[id].filter(Boolean).length;
  const total = window._checklistState[id].length;
  // feedback when all done
  if (count === total) {
    const fb = document.createElement('div');
    fb.className = 'inline-fb show ok';
    fb.textContent = '✅ All checks complete — you\'re ready to record!';
    const wrap = document.getElementById(`recordChecklist-${id}`);
    if (wrap && !wrap.querySelector('.inline-fb')) wrap.appendChild(fb);
  }
};

// Publish checklist (u6l5)
window.buildPublishChecklist = function(id) {
  const wrap = document.getElementById(`publishChecklist-${id}`);
  if (!wrap) return;
  const items = [
    { label: 'Audio edited and exported as MP3', detail: '128kbps minimum, stereo' },
    { label: 'Episode title written', detail: 'Clear, searchable, max 100 characters' },
    { label: 'Episode description written', detail: 'At least 100 characters' },
    { label: 'Cover artwork created', detail: '1400×1400px to 3000×3000px, JPEG or PNG' },
    { label: 'Category selected', detail: 'e.g. Education, Technology, Science' },
    { label: 'All music is royalty-free and credited', detail: 'No copyrighted songs!' },
    { label: 'Uploaded to hosting platform', detail: 'Anchor, Buzzsprout, or similar' },
    { label: 'RSS feed submitted to Spotify and Apple Podcasts', detail: 'One-time setup per directory' },
  ];
  window._checklistState[id] = new Array(items.length).fill(false);
  wrap.innerHTML = items.map((item, i) => `
    <label style="display:flex;align-items:flex-start;gap:0.7rem;padding:0.65rem 0.8rem;border-radius:10px;border:2px solid var(--border);margin-bottom:0.5rem;cursor:pointer;background:var(--warm);transition:all 0.14s" id="cl-${id}-${i}">
      <input type="checkbox" onchange="tickChecklist('${id}',${i},this.checked)" style="width:20px;height:20px;cursor:pointer;accent-color:#c02060;margin-top:0.15rem;flex-shrink:0">
      <div>
        <div style="font-size:0.93rem;font-weight:600">${item.label}</div>
        <div style="font-size:0.8rem;color:var(--muted)">${item.detail}</div>
      </div>
    </label>`).join('');
};

// Episode structure order checker (u6l2)
const PODCAST_ORDER = ['Hook', 'Intro', 'Main Content', 'Summary', 'Outro'];

window.checkPodcastOrder = function(id) {
  const zone = document.getElementById(`drop-correct-${id}`);
  const fb   = document.getElementById(`fb-sort-${id}`);
  if (!zone || !fb) return;
  const chips = Array.from(zone.querySelectorAll('.dropped-chip'));
  const placed = chips.map(c => (c.dataset.item || c.textContent).trim());
  let allCorrect = true;
  for (let i = 0; i < placed.length; i++) {
    if (placed[i] !== PODCAST_ORDER[i]) { allCorrect = false; break; }
  }
  if (placed.length < 5) {
    fb.textContent = 'Move all 5 sections into the correct order column first!';
    fb.className = 'inline-fb show bad';
  } else if (allCorrect) {
    fb.textContent = '✅ Perfect! Hook → Intro → Main Content → Summary → Outro';
    fb.className = 'inline-fb show ok';
  } else {
    fb.textContent = `Not quite — check the order. It should be: ${PODCAST_ORDER.join(' → ')}`;
    fb.className = 'inline-fb show bad';
  }
};

// Editing decisions game (u6l4)
const EDIT_SCENARIOS = [
  { msg: 'You said "um" 15 times in a 2-minute section and it sounds unprofessional.', opts: ['Leave it — it sounds authentic', 'Cut out the worst "um"s and tighten the pacing', 'Delete the entire section'], best: 1, explain: 'Removing the worst filler words tightens your audio. You don\'t need to remove every single one — a few natural hesitations are fine.' },
  { msg: 'You love a Taylor Swift song and want to use it as your intro music.', opts: ['Use it — it\'s only 10 seconds', 'Use royalty-free music from Pixabay Audio instead', 'Don\'t use any music'], best: 1, explain: 'Taylor Swift\'s music is copyrighted. Even 3 seconds is a violation. Use royalty-free music — there\'s plenty of great options available for free.' },
  { msg: 'The end of your episode cuts off abruptly — it feels jarring.', opts: ['Add a 2-second fade out', 'Record a new ending', 'Leave it — listeners expect abrupt endings'], best: 0, explain: 'A 2-second fade out smoothly brings the audio to silence, giving a professional, intentional ending rather than an accidental cutoff.' },
  { msg: 'Your voice sounds consistently quiet compared to industry podcasts.', opts: ['Tell listeners to turn up their volume', 'Normalise the audio to bring it to a standard level', 'Delete and re-record everything'], best: 1, explain: 'Normalising adjusts the overall volume to a standard target level. This is a standard step in every professional audio production workflow.' },
];
let editIdx = {};

window.buildEditGame = function(id) {
  editIdx[id] = 0;
  showEditScenario(id);
};

window.showEditScenario = function(id) {
  const wrap = document.getElementById(`editGame-${id}`);
  if (!wrap) return;
  const i = editIdx[id];
  if (i >= EDIT_SCENARIOS.length) {
    wrap.innerHTML = `<div class="inline-fb show ok">🎉 Great editing instincts — you know how to polish a podcast!</div>`;
    return;
  }
  const s = EDIT_SCENARIOS[i];
  wrap.innerHTML = `
    <div class="scenario-bubble">${s.msg}</div>
    <div class="choice-row">
      ${s.opts.map((o,oi) => `<button class="choice-btn" onclick="answerEdit('${id}',${oi})">${o}</button>`).join('')}
    </div>
    <div class="inline-fb" id="efb-${id}"></div>
    <div style="font-size:0.82rem;color:var(--muted);margin-top:0.5rem">Scenario ${i+1} of ${EDIT_SCENARIOS.length}</div>`;
};

window.answerEdit = function(id, chose) {
  const i = editIdx[id];
  const s = EDIT_SCENARIOS[i];
  const fb = document.getElementById(`efb-${id}`);
  const correct = chose === s.best;
  fb.textContent = (correct ? '✅ ' : '❌ ') + s.explain;
  fb.className = `inline-fb show ${correct ? 'ok' : 'bad'}`;
  document.querySelectorAll(`#editGame-${id} .choice-btn`).forEach(b => b.disabled = true);
  setTimeout(() => { editIdx[id]++; showEditScenario(id); }, 2400);
};

// Podcast episode planner (u6l6)
window.buildPodcastPlanner = function(id) {
  const wrap = document.getElementById(`podcastPlanner-${id}`);
  if (!wrap) return;
  wrap.innerHTML = `
    <div style="display:flex;flex-direction:column;gap:0.7rem">
      <div>
        <label style="font-size:0.82rem;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:var(--muted)">Episode Title</label>
        <input id="pp-title-${id}" style="width:100%;margin-top:0.3rem;padding:0.65rem 1rem;border-radius:10px;border:2px solid var(--border);font-family:'Lexend',sans-serif;font-size:0.95rem" placeholder="e.g. Why Do We Dream?">
      </div>
      <div>
        <label style="font-size:0.82rem;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:var(--muted)">Your Hook (opening sentence)</label>
        <input id="pp-hook-${id}" style="width:100%;margin-top:0.3rem;padding:0.65rem 1rem;border-radius:10px;border:2px solid var(--border);font-family:'Lexend',sans-serif;font-size:0.95rem" placeholder="Something that grabs attention immediately...">
      </div>
      <div>
        <label style="font-size:0.82rem;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:var(--muted)">Three Main Points</label>
        <input id="pp-p1-${id}" style="width:100%;margin-top:0.3rem;margin-bottom:0.4rem;padding:0.65rem 1rem;border-radius:10px;border:2px solid var(--border);font-family:'Lexend',sans-serif;font-size:0.95rem" placeholder="Point 1...">
        <input id="pp-p2-${id}" style="width:100%;margin-bottom:0.4rem;padding:0.65rem 1rem;border-radius:10px;border:2px solid var(--border);font-family:'Lexend',sans-serif;font-size:0.95rem" placeholder="Point 2...">
        <input id="pp-p3-${id}" style="width:100%;padding:0.65rem 1rem;border-radius:10px;border:2px solid var(--border);font-family:'Lexend',sans-serif;font-size:0.95rem" placeholder="Point 3...">
      </div>
      <button class="btn btn-check" onclick="generatePlan('${id}')" style="align-self:flex-start">Generate my plan 📋</button>
      <div id="pp-output-${id}" style="display:none"></div>
    </div>`;
};

window.generatePlan = function(id) {
  const title = document.getElementById(`pp-title-${id}`)?.value || '(untitled)';
  const hook  = document.getElementById(`pp-hook-${id}`)?.value  || '(no hook yet)';
  const p1    = document.getElementById(`pp-p1-${id}`)?.value    || '(point 1)';
  const p2    = document.getElementById(`pp-p2-${id}`)?.value    || '(point 2)';
  const p3    = document.getElementById(`pp-p3-${id}`)?.value    || '(point 3)';
  const out   = document.getElementById(`pp-output-${id}`);
  if (!out) return;
  out.style.display = 'block';
  out.innerHTML = `
    <div style="background:var(--code-bg);border-radius:14px;padding:1.2rem 1.4rem;font-family:'Fira Code',monospace;font-size:0.85rem;line-height:2;color:var(--code-fg)">
      <div style="color:#f9c74f;font-weight:700;margin-bottom:0.5rem">📋 EPISODE PLAN</div>
      <div><span style="color:#c792ea">title:</span>    "${title}"</div>
      <div style="margin-top:0.5rem"><span style="color:#82aaff">HOOK</span>     → ${hook}</div>
      <div><span style="color:#82aaff">INTRO</span>    → Introduce yourself and what this episode covers</div>
      <div><span style="color:#c3e88d">SECTION 1</span> → ${p1}</div>
      <div><span style="color:#c3e88d">SECTION 2</span> → ${p2}</div>
      <div><span style="color:#c3e88d">SECTION 3</span> → ${p3}</div>
      <div><span style="color:#82aaff">SUMMARY</span>  → Recap your three main points in one sentence each</div>
      <div><span style="color:#82aaff">OUTRO</span>    → Thank listener, call to action, see you next time</div>
      <div style="margin-top:0.7rem;color:#546e7a"># Target: 3–5 minutes | Print this and keep it by your mic</div>
    </div>`;
};
