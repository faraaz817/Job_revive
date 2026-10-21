# Vayaa — company website (Full-Stack Developer Intern)

Internship project: the public website for Vayaa, an IT & AI services company, built as a React +
TypeScript frontend over a Rust (Axum) backend, to be containerised with Docker and then deployed to
AWS. The backend's contact-enquiry API validates every request on the server, returns all errors at
once, turns raw input into a clean type before anything can store it, and rejects bodies over 16 KB
before parsing them. 12 commits across 9 logged sessions, 24 September – 5 October 2026; in progress.

Full-Stack Developer Intern, Vayaa · Melbourne, hybrid · September 2026 – present. Source:
`faraaz817/Vaya` (**private**, so no public link). Re-built and re-tested for this write-up on
21 October 2026.

## Why

The brief came as plain-language requests from a mentor ("a functional website that could go live",
"a contact enquiry form would be good") plus fixed constraints: React frontend, Rust backend, AWS
hosting, and — from the supervisor — Docker first, AWS second. The mentor was explicit that the
learning goal is the backend (Rust) and deployment (AWS); the frontend is secondary.

So the work is organised around being able to explain every choice, not only shipping it. Three
living documents were set up in session 1 and kept current since:

| File | What it holds |
| --- | --- |
| `REQUIREMENTS.md` | Each request translated into a numbered requirement — 5 constraints (CON), 3 functional (FR), 3 non-functional (NFR) — with the plain-language origin quoted beside it and a status. |
| `DECISIONS.md` | 7 decisions (D-001 – D-007), each with what was chosen, why, what was not picked, and the cost. |
| `PROGRESS.md` | A dated log of every session: what was done, the concepts learned, what is next. |

## How it works

```
Browser ── React 19 + TypeScript (Vite)              http://localhost:5173
   │         fetch() with types that mirror the backend's JSON
   ▼
Rust backend ── Axum on Tokio                        http://localhost:3000
   ├─ CorsLayer          only the frontend's origin; GET + POST; Content-Type
   ├─ DefaultBodyLimit   16 KB — bigger bodies get 413 before serde reads them
   ├─ GET  /health       {"status":"ok"} — for the footer status light, later for Docker/AWS
   └─ POST /api/contact  serde → ContactForm → validate() → Enquiry
                           200 {"status":"received"}
                           400 {"errors":[ every rule that failed ]}
                           422 wrong JSON shape (serde, before our code runs)
```

**Validation is the backend's job.** React's `required` and `maxLength` are a convenience; anyone
can skip them with DevTools or curl. `validate()` applies the rules in D-005 — name 1–100 and
message 1–1000 characters after trimming, email and phone both optional but at least one required,
email with `@` and `.` and at most 254 characters, phone an optional `+` then 8–15 digits — and
collects every failure rather than stopping at the first, so a visitor fixes the form once.

**Parse, don't validate.** `validate()` returns `Result<Enquiry, Vec<String>>`. On success it
produces a separate, cleaned `Enquiry` (trimmed, blank text turned into `None`), so only checked
data can move on to the database step. Counting uses `.chars().count()`, not `.len()`, so a name
like "José" is four characters, not five bytes.

**Defence in depth.** The 16 KB body limit protects the JSON parser; `validate()` protects the
data. A maximum valid enquiry is 2–4 KB, so the limit leaves headroom while making an oversized
request cheap to refuse (D-006).

**Architecture diagrams that can't drift.** Two interactive diagrams in `docs/architecture/` (the
whole site, and inside `main.rs`) were generated with the Archify skill; every box links to the
exact lines of code it describes, pinned to a commit, and the tool checks those links (D-007).

### Verified on 21 October 2026

Built with `cargo build` (Rust 1.97) and `npm run build` (TypeScript check + Vite bundle, both
clean), then exercised against the running server:

| Request | Result |
| --- | --- |
| `GET /health` | 200 `{"status":"ok"}` |
| Valid enquiry, phone only | 200 `{"status":"received"}`; the cleaned `Enquiry` is printed |
| No email and no phone | 400 — 1 error |
| Blank name, bad email, bad phone | 400 — all 3 errors in one reply |
| `"name": 42` | 422 — rejected by serde before `validate()` runs |
| 100 KB body | 413 — rejected by the body limit before parsing |
| `POST /health` | 405 |
| CORS preflight from `localhost:5173` | allowed: `GET,POST`, `content-type` |

## Stack

| Layer | Choice | Decision |
| --- | --- | --- |
| Backend | Rust (2024 edition), Axum 0.8, Tokio, serde / serde_json, tower-http (CORS) | D-004: Axum over Actix-web — Tokio-native, simpler model than actors |
| Frontend | React 19 + TypeScript, Vite | D-002 (types mirror the API contract), D-003 (static `dist/` suits S3 + CloudFront; Next.js would compete with the Rust server) |
| Next | PostgreSQL via `sqlx` in Docker, then the containers on AWS | Phases 5–7 in `PROGRESS.md` |

Code size: `backend/src/main.rs` 232 lines (heavily commented by design — the project rules make
the code double as study material); `frontend/src/App.tsx` 502 lines.

## Who did what

All 12 commits are the author's, made with Claude Code as a pair programmer and tutor (the
project's `CLAUDE.md` runs it in a teach-as-you-go mode). `PROGRESS.md` records the split
honestly, and this is it:

- **Author:** the requirements, decision log and progress log; the `health()` handler; the
  `ContactForm` struct; `validate()`'s name, message, email and at-least-one-contact rules; the
  validation rulebook (designed together with Claude); testing with curl and the browser.
- **Claude Code:** the phone-number rule and the blank-text clean-up inside `validate()`; the
  React contact form and the tropical redesign (frontend is secondary per CON-04); the Archify
  diagrams.
- **Mentor / supervisor:** the constraints CON-01 – CON-05.

## Known issues / Limitations

- **Not live yet.** No database (enquiries are printed to the server terminal and lost on
  restart), no Docker, no AWS. Phases 5–7 are still open; resume wording must say "building", not
  "deployed".
- **No automated tests.** `main.rs` has no `#[test]`; every behaviour above was checked by hand
  with curl and a browser. `validate()` is a pure function and would be easy to unit-test.
- **CORS is hard-coded to the dev origin** (`http://localhost:5173`); production needs the real
  domain.
- **Rules live in two places** — Rust and React's convenience limits — and are kept in sync by
  hand (D-005 says so).
- **The email check is deliberately minimal** (`@` and `.`); a real check needs a confirmation
  email.
- **Name spelling.** The company is Vayaa; the repo and the website's logo, title and copy spell
  it "Vaya". Worth confirming with the supervisor before anything goes live.
- **Private repository**, so a screener cannot verify any of this from a link.
