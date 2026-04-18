// ═══════════════════════════════════════════════════════
//  AUTH.JS — Login, signup, and session management
// ═══════════════════════════════════════════════════════

let currentUser = null;
let currentProfile = null;

// ─── BOOT ─────────────────────────────────────────────
// Called on page load — checks if user is already logged in
async function authBoot() {
  const { data: { session } } = await sb.auth.getSession();
  if (session) {
    const profile = await loadProfile(session.user.id);
    if (profile) {
      currentUser = session.user;
      currentProfile = profile;
      showApp();
      return;
    }
  }
  showAuthScreen('login');
}

// ─── PROFILE ──────────────────────────────────────────
async function loadProfile(userId) {
  const { data, error } = await sb
    .from('profiles')
    .select('*')
    .eq('id', userId)
    .single();
  if (error) return null;
  return data;
}

// ─── SHOW / HIDE ──────────────────────────────────────
function showApp() {
  document.getElementById('authScreen').style.display = 'none';
  document.getElementById('appShell').style.display = '';
  // Update header with nickname + class
  document.getElementById('userLabel').textContent =
    `${currentProfile.nickname} · ${currentProfile.class}`;
  // Boot the learning app
  if (typeof initApp === 'function') initApp();
}

function showAuthScreen(mode) {
  document.getElementById('authScreen').style.display = '';
  document.getElementById('appShell').style.display = 'none';
  renderAuthScreen(mode);
}

// ─── RENDER AUTH SCREEN ───────────────────────────────
async function renderAuthScreen(mode) {
  const el = document.getElementById('authScreen');

  if (mode === 'login') {
    el.innerHTML = `
      <div class="auth-card">
        <div class="auth-logo">CS<span>7</span></div>
        <h2 class="auth-title">Welcome back</h2>
        <div class="auth-error" id="authError" style="display:none"></div>
        <div class="auth-field">
          <label>Nickname</label>
          <input id="authNickname" type="text" placeholder="Your nickname" autocomplete="username" />
        </div>
        <div class="auth-field">
          <label>Password</label>
          <input id="authPassword" type="password" placeholder="Your password" autocomplete="current-password" />
        </div>
        <button class="auth-btn" onclick="doLogin()">Log in</button>
        <p class="auth-switch">New here? <a href="#" onclick="showAuthScreen('signup')">Create account</a></p>
      </div>`;
  }

  if (mode === 'signup') {
    // Load class code and classes list in parallel
    const [codeRes, classesRes] = await Promise.all([
      sb.from('class_settings').select('value').eq('key', 'class_code').single(),
      sb.from('classes').select('name').order('sort_order')
    ]);

    const classOptions = (classesRes.data || [])
      .map(c => `<option value="${c.name}">${c.name}</option>`)
      .join('');

    el.innerHTML = `
      <div class="auth-card">
        <div class="auth-logo">CS<span>7</span></div>
        <h2 class="auth-title">Create account</h2>
        <div class="auth-error" id="authError" style="display:none"></div>
        <div class="auth-field">
          <label>School code <span class="auth-hint">(e.g. pascal2026)</span></label>
          <input id="authCode" type="text" placeholder="Enter school code" autocomplete="off" />
        </div>
        <div class="auth-field">
          <label>Your class</label>
          <select id="authClass">
            <option value="">— pick your class —</option>
            ${classOptions}
          </select>
        </div>
        <div class="auth-field">
          <label>Nickname <span class="auth-hint">(no real names — e.g. BlueStar, TigerX)</span></label>
          <input id="authNickname" type="text" placeholder="Choose a nickname" autocomplete="username" />
        </div>
        <div class="auth-field">
          <label>Password</label>
          <input id="authPassword" type="password" placeholder="Choose a password" autocomplete="new-password" />
        </div>
        <button class="auth-btn" onclick="doSignup('${codeRes.data?.value || ''}')">Create account</button>
        <p class="auth-switch">Already have an account? <a href="#" onclick="showAuthScreen('login')">Log in</a></p>
      </div>`;
  }
}

// ─── LOGIN ────────────────────────────────────────────
async function doLogin() {
  const nickname = document.getElementById('authNickname').value.trim().toLowerCase();
  const password = document.getElementById('authPassword').value;
  setAuthError('');

  if (!nickname || !password) { setAuthError('Please fill in all fields.'); return; }

  const email = `${nickname}@cs7app.local`;
  const { data, error } = await sb.auth.signInWithPassword({ email, password });

  if (error) { setAuthError('Nickname or password incorrect.'); return; }

  currentUser = data.user;
  currentProfile = await loadProfile(data.user.id);
  if (!currentProfile) { setAuthError('Account not found. Please sign up.'); return; }
  showApp();
}

// ─── SIGNUP ───────────────────────────────────────────
async function doSignup(correctCode) {
  const code     = document.getElementById('authCode').value.trim();
  const cls      = document.getElementById('authClass').value;
  const nickname = document.getElementById('authNickname').value.trim().toLowerCase();
  const password = document.getElementById('authPassword').value;
  setAuthError('');

  if (!code || !cls || !nickname || !password) { setAuthError('Please fill in all fields.'); return; }
  if (code.toUpperCase() !== correctCode.toUpperCase()) { setAuthError('School code is incorrect. Ask your teacher.'); return; }
  if (nickname.length < 2) { setAuthError('Nickname must be at least 2 characters.'); return; }
  if (!/^[a-z0-9]+$/i.test(nickname)) { setAuthError('Nickname can only contain letters and numbers.'); return; }
  if (password.length < 6) { setAuthError('Password must be at least 6 characters.'); return; }

  const email = `${nickname}@cs7app.local`;

  const { data, error } = await sb.auth.signUp({ email, password });
  if (error) {
    if (error.message.includes('already registered')) {
      setAuthError('That nickname is already taken. Choose another.');
    } else {
      setAuthError('Could not create account. Try again.');
    }
    return;
  }

  // Insert profile
  const { error: profileError } = await sb.from('profiles').insert({
    id: data.user.id,
    nickname,
    class: cls,
    role: 'student'
  });

  if (profileError) {
    setAuthError('Could not save profile. That nickname may already be taken.');
    return;
  }

  currentUser = data.user;
  currentProfile = { id: data.user.id, nickname, class: cls, role: 'student' };
  showApp();
}

// ─── LOGOUT ───────────────────────────────────────────
async function doLogout() {
  await sb.auth.signOut();
  currentUser = null;
  currentProfile = null;
  showAuthScreen('login');
}

// ─── HELPERS ──────────────────────────────────────────
function setAuthError(msg) {
  const el = document.getElementById('authError');
  if (!el) return;
  el.textContent = msg;
  el.style.display = msg ? 'block' : 'none';
}
