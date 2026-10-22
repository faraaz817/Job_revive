# Vayaa — company website (Full-Stack Developer Intern)

Internship project: the public website for Vayaa, an IT & AI services company. Built first with a
Rust (Axum) backend, then — on the mentor's instruction — ported to **Python (FastAPI)** behind 50
automated parity tests that passed against both backends before the Rust code was retired. Enquiries
are stored in PostgreSQL, the whole site runs in Docker Compose, and on **22 October 2026 it went
live on AWS** (CloudFront → load balancer → ECS Fargate → RDS PostgreSQL, built from one
CloudFormation template), with an email alert for every new enquiry.

Full-Stack Developer Intern, Vayaa · Melbourne, hybrid · September 2026 – present. Source:
`faraaz817/Vayaa` (**private**; renamed from `Vaya` on 22 October 2026). Two branches matter: `main`
is the frozen Rust version (to 5 October); `dev` is the Python version and everything since. The
AWS deployment is switched off when not needed, so there is no public link.

## Why

The brief came as plain-language requests from a mentor ("a functional website that could go live",
"a contact enquiry form would be good") plus fixed constraints: React frontend, AWS hosting, Docker
first and AWS second, and originally a Rust backend. The stated learning goal is the backend and
deployment; the frontend is secondary.

Every request was turned into a numbered requirement and every design choice into a decision record
from session 1, and both were kept current:

| File | What it holds (as of 22 October 2026) |
| --- | --- |
| `REQUIREMENTS.md` | 5 constraints, 3 functional and 4 non-functional requirements, each with its plain-language origin and a status. All functional ones and NFR-01 ("deployable to the public internet") are Done. |
| `DECISIONS.md` | 16 decisions (D-001 – D-016): what was chosen, why, what wasn't, and the cost. |
| `PROGRESS.md` | A dated log of 19 sessions: what was done, the concepts learned, what is next. |
| `MIGRATION.md` | The Rust → Python plan: the behaviour contract, and a map of every Rust concept to its Python equivalent. |

## How it got here

| When | Phase | What happened |
| --- | --- | --- |
| 24 Sep – 5 Oct | Rust backend (`main`) | Axum on Tokio: `GET /health`, CORS limited to the frontend, `POST /api/contact` with server-side validation that returns every failed rule at once and produces a clean `Enquiry` type ("parse, don't validate"), and a 16 KB body limit that refuses oversized requests before parsing. |
| 5 Oct | Port to Python (`dev`) | Instruction from a repo collaborator: more people who will read and extend the code know Python. **Parity tests first** — 50 black-box HTTP tests (routes, 404/405, CORS and preflight, every validation rule and boundary, the body limit including exactly-16 KB, 50 MB and chunked uploads) were run green against the Rust backend *before* any Python existed, then against both. Only then was Rust removed from `dev`. FastAPI + Pydantic + Uvicorn; the body limit became a hand-written ASGI middleware, because FastAPI has none. |
| 5 – 11 Oct | Storage and Docker | PostgreSQL 18 in Docker Compose (port bound to the local machine only, data in a named volume); SQLAlchemy 2 (async) + asyncpg, with three database `CHECK` constraints repeating the key validation rules; tests run against a separate `vayaa_test` database. Then the whole site in Compose: database, backend, and an nginx frontend that proxies the API so the browser sees one origin. |
| 11 Oct | AWS design | One image (React build served by FastAPI) and a CloudFormation template: CloudFront (HTTPS) → Application Load Balancer → ECS Fargate (0.5 vCPU / 1 GB) → private RDS PostgreSQL 17, database password in SSM Parameter Store. |
| 21 – 22 Oct | Five deploys to live | See below. |
| 22 Oct | Rename, alerts | Product, folders, databases, AWS names and repo renamed to one spelling, Vayaa, with the local data migrated. New enquiries trigger an SNS email; the app's role may publish to that one topic and nothing else. |

### The deploy, attempt by attempt

| # | What failed | Fix |
| --- | --- | --- |
| 1 | RDS creation: 7-day backup retention exceeds the AWS Free plan's limit. | Retention `0` (a final snapshot is still taken if the stack is deleted). The same commit locked the load balancer to CloudFront's address range — it had been open to the internet. |
| 2 | CloudFront refused: a new account must be verified before its first distribution. | AWS Support case; rollback cleaned up. |
| 3 | Same CloudFront block — the case had never been picked up (the "Resolve case" button had been misread as its status). | Chased through Support. |
| 4 | Block lifted (confirmed first with a disabled test distribution, in seconds instead of a 10-minute deploy). Everything was created, but the app crashed on every start: the RDS TLS certificate failed verification. | Service parked by hand so the stack didn't roll back; Amazon's RDS CA bundle baked into the image and the connection set to `verify-full` (encrypt *and* prove it is our database), with unknown TLS modes refused at startup. |
| 5 | — | Live. Checked: health ok, homepage over HTTPS, blank form → 400, HTTP → HTTPS redirect, load balancer not reachable directly, a real enquiry → 200 and stored. |

## Stack

| Layer | Choice |
| --- | --- |
| Frontend | React 19 + TypeScript, Vite |
| Backend (current) | Python 3.12, FastAPI, Pydantic, Uvicorn; SQLAlchemy 2 (async) + asyncpg; boto3 for SNS |
| Backend (first version) | Rust (2024 edition), Axum, Tokio, serde, tower-http |
| Data | PostgreSQL 18 locally, RDS PostgreSQL 17 on AWS |
| Packaging | Docker, Docker Compose (local), one production image |
| AWS | CloudFormation, CloudFront, Application Load Balancer, ECS Fargate, RDS, SSM Parameter Store, SNS, CloudWatch Logs, ECR |
| Checks | 55 pytest tests (50 parity + storage + 4 alert tests), mypy, cfn-lint |

## Who did what

All commits are the author's, made with Claude Code working as a pair programmer and tutor (the
project's `CLAUDE.md` runs it in a teach-as-you-go mode). The progress log records the split:

- **Author:** the requirements, decision and progress logs; in the Rust version, the `health()`
  handler, the `ContactForm` struct and most of `validate()`; the choices recorded in the decision
  log (SQLAlchemy over raw SQL, Postgres over SQLite, SNS over SES, …); the AWS account setup, every
  deploy, the Support case, and the live checks; reviewing the Python port at checkpoints.
- **Claude Code:** the Python port itself ("Claude wrote the Python, porting his structure and
  comments") and the React frontend and design. The rest of the code was also written in Claude Code
  sessions under the author's direction; the log doesn't split it further.
- **Mentor / collaborator:** the constraints, including the switch to Python.

## Known issues / Limitations

- **Not permanently online.** The AWS service is parked when not needed to save credits, and there is
  no custom domain yet (so no branded email via SES; alerts come from SNS's no-reply address).
- **Free-plan database settings.** Automatic backups are `0` days until the account is upgraded.
- **The TLS-to-RDS path is only tested by a deploy;** local tests run without TLS.
- **Frontend is secondary by design** and was largely written by Claude Code; resume claims should
  lead with the backend and deployment.
- **Private repository**, so none of this is verifiable from a link.
