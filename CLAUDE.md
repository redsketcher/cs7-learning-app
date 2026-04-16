# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

---

## What This Is

CS7 is a dyslexia-optimised interactive learning platform for Oxford Computing Book 7 (UK Year 7 curriculum). Originally built for a specific student at PASCAL English School (Lemesos, Cyprus), it is evolving into a closed-network platform for schools in Cyprus that follow this curriculum.

**Vision:** Free to use, donation-supported (fiat + crypto). Schools gain access via unique codes controlled by the platform owner. No student personal data is collected — ever.

Units 1–4 are fully playable (24 lessons). Units 5 (Spreadsheets) and 6 (Podcast) are shown as locked cards on the home screen, ready to unlock later.

---

## Development

```bash
# Option A — open directly (no server needed for local dev)
open /Users/tradiespassport/Projects/cs7-learning-app/index.html

# Option B — serve via Python
python3 -m http.server 8000
# Open http://localhost:8000

# Production — hosted on GitHub Pages
# https://redsketcher.github.io/cs7-learning-app/

# No build, lint, or test commands exist
```

---

## File Roles

| File | Purpose |
|------|---------|
| `index.html` | Shell — loads unit files, then engine |
| `style.css` | Dyslexia-first design system |
| `supabase-config.js` | Supabase client initialisation (URL + anon key only) |
| `auth.js` | Login, signup, session management |
| `lessons.js` | Rendering engine — navigation, tabs, tests, games, progress |
| `unit1.js` | Digital Data lesson content + interactive HTML |
| `unit2.js` | Online Safety lesson content + interactive HTML |
| `unit3.js` | Scratch lesson content + interactive HTML |
| `unit4.js` | Python lesson content + interactive HTML |

**Planned (not yet built):**

| File | Purpose |
|------|---------|
| `admin.html` | Super admin panel — manage schools, codes, users |
| `teacher.html` | Teacher panel — view class progress, reset passwords |
| `donate.html` | Donation page — fiat (PayPal) + crypto (ETH, BTC, XRP) |
| `unit5.js` | Spreadsheets (locked, reserved colour `#d4860a`) |
| `unit6.js` | Podcast (locked, reserved colour `#c02060`) |

---

## Architecture

### Data Shape
Each unit file exports to `window.UNITX`:
```javascript
window.UNIT1 = {
  id: 'u1', color: '#e85d2f', bg: '#fdf0eb',
  title: 'Digital Data', desc: '...',
  lessons: [
    { id: 'u1l1', emoji, title, intro, learn, interactive, code, questions }
  ]
}
```
`lessons.js` reads `UNITS_DATA = [window.UNIT1, window.UNIT2, window.UNIT3, window.UNIT4]`.

### Key Engine Functions (`lessons.js`)
- `initApp()` — called by `auth.js` after login; loads progress then builds UI
- `buildSidebar()` / `buildHome()` — initial render
- `goLesson(id)` → `renderLesson(lesson, unit)` — main navigation
- `switchTab(btn, tab, lessonId)` — tab switching; triggers `initInteractives()` lazily
- `renderTest(lesson, unit)` — MCQ engine
- `answerQuestion()` / `showScore()` / `retryTest()` — test flow
- `initInteractives(lessonId)` — routes by lesson ID to game builders
- `evalPython(id)` — in-browser mini Python evaluator
- `markDone(id)` — saves completed lesson to Supabase `progress` table
- `loadProgress()` — fetches completed lessons from Supabase on login

### Auth Flow (`auth.js`)
- `authBoot()` — runs on DOMContentLoaded; checks session → shows app or auth screen
- `doLogin()` — signs in via Supabase Auth using `nickname@cs7app.local` as email
- `doSignup(correctCode)` — validates class code, creates Supabase Auth user + profile row
- `doLogout()` — signs out, returns to login screen

### Lesson Rendering Flow
Each lesson renders four tabs:
- **Learn** — HTML prose built around `🎬 PICTURE THIS` story boxes (gold border, cream background)
- **Try** — interactive game, lazy-initialised when tab first clicked
- **Code** — syntax-highlighted Python panel + Windows terminal panel
- **Test** — 4-option MCQ; perfect score auto-marks lesson done ✓

### Key Patterns
- **DOM ID namespacing**: All game elements use `xxxGame-${lessonId}` to avoid collisions
- **Progress**: Saved to Supabase `progress` table per user. `done` object is in-memory cache.
- **State**: `currentLesson` (string), `testState` (plain object), `currentUser`, `currentProfile` — no framework
- **Games**: Each game follows `buildXxxGame(id)` / `checkXxxGame(id, ...)` convention

---

## Supabase

**Project:** cs7-learning-app (Redsketch account)
**URL:** `https://emylkdskicemxklsmazj.supabase.co`
**Credentials:** Anon/public key only is stored in `supabase-config.js` — safe to commit. Any service role key or private key must go in `.env` and must never be committed.

### Tables

| Table | Purpose |
|-------|---------|
| `class_settings` | Key/value store — currently holds `class_code` |
| `classes` | Dropdown list of class names (1A–3D), editable from admin panel |
| `profiles` | One row per user — nickname, class, role (`student`/`teacher`/`superadmin`) |
| `progress` | One row per completed lesson — `user_id`, `lesson_id`, `completed_at` |

**Planned tables (not yet created):**

| Table | Purpose |
|-------|---------|
| `schools` | School name, location, student code, teacher code, active flag |

### Database Rules
- **NEVER run DELETE, UPDATE, or TRUNCATE** on production data without explicit user approval
- **NEVER change the database schema** (add/drop tables, columns, or policies) without explicit user approval
- Use the Supabase Table Editor for manual data changes
- All RLS policies must be reviewed with the user before applying

---

## Planned Architecture (not yet built)

### User Roles
| Role | Access |
|------|--------|
| `superadmin` | Full control — schools, codes, all users, all progress |
| `teacher` | Their school only — view student progress, reset passwords |
| `student` | Their own progress only |

### School Access Model
- Each school gets a **student code** and a **teacher code** (different)
- Students sign up with the student code → assigned to that school
- Teachers sign up with the teacher code → get teacher role for that school
- Super admin controls which schools are active
- **No student personal data collected** — nickname + password only
- Password resets are manual — teacher resets student, super admin resets teacher

### Donation Page (`donate.html`)
- Standalone page linked from app header
- Fiat: PayPal donate button
- Crypto: ETH, BTC, XRP — wallet address + QR code per currency

---

## Design Constraints
- **Dyslexia-first**: Lexend font, warm cream background (`#faf6ef`, never pure white), line-height 1.9, no justified text, no underlines, 52px+ tap targets. Do not break these.
- **`🎬 PICTURE THIS` boxes**: Every lesson must have at least one story analogy in this gold-bordered box — it is the core teaching mechanism.
- **Unit colour consistency**: U1 `#e85d2f`, U2 `#2b7de3`, U3 `#1b9e5a`, U4 `#8b35c8`
- **iPad-primary**: All layouts must work at tablet portrait widths
- **Supabase CDN is the only permitted external script** beyond Google Fonts (Lexend + Fira Code). Do not add npm packages, other CDN scripts, or frameworks.

---

## Workflow Preferences

### Security — CRITICAL
- **NEVER read, log, print, or expose `.env` files or any secrets** at any point — startup, debugging, or otherwise
- **NEVER commit `.env` files** — always check `.gitignore` includes `.env` before any commit
- If a new API key or secret is needed, instruct the user to add it to `.env` manually — Claude must not write secrets into any file
- `supabase-config.js` contains only the public anon key — this is the one exception and is safe to commit
- If any future server-side code is added (Node, Edge Functions, etc.), secrets must come from environment variables only — never hardcoded

### General
- Multiple steps in one response are fine — no need to pause after every line
- **Flag before deploying or committing** — always ask first, never auto-push
- **Explain errors clearly** — don't silently fix problems; explain what went wrong and why so the user can learn
- Store AI planning docs in `history/` (gitignored) — never clutter the repo root

### Destructive Actions — Always Ask First
- Deleting any file
- Changing the database schema (add/drop tables, columns, policies)
- Dropping or truncating data
- Force pushing to git
- Any action that cannot be easily undone

### Git Workflow
- Never auto-commit or auto-push
- Always ask: "Ready to commit?" or "Should I push to GitHub now?"
- When committing, always list exactly which files will be included
- Never commit `.env`, secrets, or credentials

---

## Adding Units 5 & 6
1. Create `unit5.js` / `unit6.js` with `window.UNIT5` / `window.UNIT6`
2. Add `<script src="unit5.js"></script>` to `index.html`
3. Push onto `UNITS_DATA` in `lessons.js` — sidebar and home update automatically
4. Add new game types as `buildXxxGame()` functions in `lessons.js`

## Adding a New Lesson to an Existing Unit
Push a lesson object to the `lessons` array in the relevant unit file. The `id` must be unique (convention: `u{unit}l{lesson}`). No changes to `lessons.js` needed unless a new interactive type is required.
