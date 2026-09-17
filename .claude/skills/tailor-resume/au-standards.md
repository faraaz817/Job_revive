# Australian resume conventions — early-career tech

What Australian screeners, recruiters and applicant-tracking systems expect from a graduate /
early-career technical resume, why, and how to write the bullets. Read in full before tailoring.

## 1. How the resume is actually read

1. **Work rights first.** Every Australian application form asks "Do you have the right to work in
   Australia?" before anything else, and recruiters look for the answer on the resume in the first
   two seconds. State it in the header, leading with the phrase they need: *"Full Australian working
   rights (Temporary Graduate visa, subclass 485) — no sponsorship required."* Hiding the subclass
   wastes everyone's time — it comes up at the first phone screen — but leading with "Temporary" makes
   a screener read "temporary" and stop. Lead with "Full … working rights".
2. **Then a six-to-ten-second scan** of: name, current/last title, degree, and the first few lines of
   the profile and skills. The scan is looking for a match to the ad's title and its top three
   requirements. If those words aren't visible above the fold of page 1, the scan ends there.
3. **Then the ATS or a screener checks the ad's criteria one by one.** Australian ads — especially
   government, universities, banks and large corporates — list *Key Selection Criteria* or an
   "About you" / "What you'll bring" block. Screeners tick those items off against the resume,
   often literally with a checklist. The words used in the ad are the words they search for.
4. **Common Australian ATS platforms:** SEEK's own apply flow, LinkedIn Easy Apply, Workday, PageUp
   (universities and government), SmartRecruiters, Lever, Greenhouse, SuccessFactors. All parse a
   single-column PDF with standard headings reliably. Tables, text boxes, two-column layouts, images
   and content in headers/footers are what break parsing. The renderer in `_build/` produces a
   single-column document with no tables — keep it that way.

## 2. Format conventions

| Convention | Australian norm | Notes |
| --- | --- | --- |
| Length | **2 pages** for graduates and early career; 3 acceptable with experience | One page is a US convention. A cramped single page reads as under-experienced here; a nearly empty second page reads as padding. |
| Photo, date of birth, nationality, marital status, religion | **Never** | Anti-discrimination law makes employers uncomfortable receiving them. |
| Address | Suburb/city + state only ("Melbourne, VIC") | No street address. |
| Spelling | Australian English | -ise (organise, normalise), -our (colour, behaviour), "program" (not programme, in tech), "fulfilment", "licence" (noun), "practise" (verb). |
| Dates | "Mar 2026", "Mar 2026 – Jun 2026" | Never numeric "03/2026" — ambiguous and ugly. En dash between dates. |
| Section names | Profile / Career Profile, Technical Skills / Key Skills, Experience, Education, Key Projects, Publications, Certifications, Referees | "Referees" is the Australian word; "References" reads American. "Objective" sections are dated — use a Profile. |
| Referees | Close with **"Referees: Available on request."** | Named referees with phone numbers go on a separate sheet when asked, never in a file that lives in a repository. |
| Order | Reverse-chronological within each section | Experience before Education when the experience is relevant (an internship in the field); Education first for graduate programs. |
| Tone | Understated, factual, quantified | Australian workplace culture is allergic to self-promotion ("tall poppy"). "Rockstar", "passionate", "dynamic", "results-driven" are red flags. Numbers and plain verbs do the work. |
| Pronouns | None | No "I", "my". Bullets start with a verb. |
| File | PDF unless the ad says Word; name it `Firstname_Lastname_Resume_<Company>.pdf` | Recruiters save dozens of files; a file named after the company only is useless to them. |
| Cover letter | Frequently expected, separate document, one page, addressed to the ad's criteria | Out of this skill's scope, but do not skip it when an ad asks — Australian screeners do read them for graduate roles. |

## 3. Content conventions

**Profile (3–4 lines).** Who you are in one line (degree + field), the strongest evidence for this
ad's core requirement, the breadth in one clause, and what you are seeking, in the ad's words. Written
for *this* role; a generic profile is the single most common reason a strong graduate resume is
skipped. No adjectives about character.

**Technical Skills near the top, mirrored to the ad.** For technical roles the skills block goes
right under the profile. Prune it to what the ad asks for plus real core strengths; a wall of
forty technologies reads as padding and dilutes the match. Order each line so the ad's stack comes
first, spelled as the ad spells it.

**Achievement bullets, not duty bullets.** Each bullet: past-tense verb → what you did → measured
result or concrete outcome. One to two rendered lines. If a bullet needs three lines, it is two
bullets or it needs cutting. Australian recruiters are trained on "STAR" — Situation, Task, Action,
Result — a bullet that has an Action and a Result satisfies them; one that only describes a duty
does not.

**Local experience counts, even outside the field.** A part-time job at an Australian employer
(Amart) signals: a local reference exists, the person turns up, the person has worked in an
Australian team. Keep it, keep it short. International graduates are often advised to drop it —
that advice is wrong here.

**Team attribution.** "Team of 4", "co-built", "primary author of 3 of 4 deliverables". Australian
hiring managers ask "what did *you* do" in the interview; a resume that already answers it is
trusted. Never claim a team result as sole work.

**Keep the numbers.** 7.2M polygons, 18,121 schools, 94.75%, 68 commits, 40-school ground-truth
set. Quantities are the difference between "worked on a pipeline" and evidence.

## 4. What moves the needle, in order

1. **Criteria mirroring.** Every must-have in the ad, evidenced somewhere on page 1 in the ad's own
   words. This is the tailoring; everything else is polish.
2. **A profile written for the role.** Title wording from the ad in the last sentence.
3. **Skills pruned and reordered to the ad.**
4. **Bullet selection and order.** The most relevant Prodegee bullets first, not the base order.
5. **Length and scannability.** Two clean pages, every bullet ≤ 2 lines, no orphans.
6. **Section order** for the role type (Education up for grad programs).

## 5. Bullet style — before and after, from this resume

The base resume (`base_resume.md`) already carries the rewritten forms. These pairs show the
transformation so tailoring stays in the same register.

**Before** (3–4 lines, tools embedded, result buried at the end):
> Designed and built the three-stage school-geolocation refinement algorithm that became the team's
> core pipeline: a national layer of 7.2M Overture Maps building polygons (GeoPandas/Shapely →
> GeoPackage, wrapped in a Kestra flow), BFS spatial clustering with composite scoring, and a
> nearest-school proximity check; ran it on 18,121 schools in Côte d'Ivoire and ported it to
> Burundi and Chad.

**After** (2 lines, the scale and the reach stay, tools move to the Tools line):
> Designed and built the school-geolocation algorithm at the core of the team's pipeline (7.2M
> Overture building polygons, BFS spatial clustering, composite scoring); ran it on 18,121 schools
> in Côte d'Ivoire and ported it to Burundi and Chad.

**Before** (the interesting result is the last clause of a 4-line sentence):
> Built a ±20% sensitivity harness that ranked cluster radius as the dominant parameter (±36–44%
> swing in all 191 villages), driving the 75 → 200 m recalibration that lifted
> buildings-per-household from 0.069 (a 90%+ under-count) to 0.415, into the target band.

**After** (same numbers, the fix is the headline):
> Built a ±20% sensitivity harness that identified cluster radius as the dominant parameter (±36–44%
> swing across 191 villages), driving a 75 → 200 m recalibration that fixed a 90%+ household
> under-count (0.069 → 0.415).

**Before** (two unrelated achievements welded together):
> Led 3 of 10 assignments; primary author of 3 of 4 formal deliverables; 68 commits, 7 peer reviews;
> pinned upstream inputs by commit SHA for reproducible re-runs; wrote the semester-2 handoff memo.
> Built model_router.py, a cost-proportional Claude API router (cached Haiku classifier → Haiku /
> Sonnet / Opus).

**After** (split; each can be kept or dropped independently per ad):
> Led 3 of 10 team assignments and was primary author of 3 of 4 formal deliverables (68 commits,
> 7 peer reviews); pinned upstream inputs by commit SHA for reproducible re-runs and wrote the
> semester-2 handoff memo.
>
> Built a Claude API model router that classifies task complexity with a cheap Haiku call and routes
> to Haiku / Sonnet / Opus, keeping cost proportional to difficulty.

**Duty bullet → achievement bullet** (the retail job):
> ~~Responsible for stock and customer orders in the dispatch team.~~
> Tracked and reconciled stock in the inventory system, processed customer orders and resolved
> fulfilment discrepancies across 5 Melbourne stores; trained a new team member.

Verbs that work: designed, built, shipped, implemented, replaced, corrected, traced, ran, trained,
documented, co-built, led, authored, fixed, reduced, published. Verbs that don't: helped, assisted,
was responsible for, worked on, participated in, exposed to, familiar with.

## 6. Fit check — read the ad for these before tailoring

| Signal in the ad | Meaning for a 485 holder | Action |
| --- | --- | --- |
| "Australian citizen", "permanent resident", "PR or citizenship required", "must hold or be eligible for PR" | Auto-reject at the form stage; no resume changes it | **Hard blocker** — tell the user, ask before proceeding |
| "Security clearance", "Baseline / NV1 / NV2", "AGSVA", "eligible to obtain a clearance" | Clearances require citizenship | **Hard blocker** |
| "Graduate program 2027 intake" + "citizen/PR" | Most large graduate programs (big-4 banks, big-4 consulting, Commonwealth/state government, Defence) require PR | Hard blocker if stated; if not stated, check the program's FAQ page before investing time |
| "3+ years", "5+ years", "senior", "lead" as requirements | Filtered before a human reads it | **Hard blocker** at 3+ mandatory; soft flag at "2+ years" or "ideally" |
| Closing date in the past | Nothing to apply to | Hard blocker |
| "Willing to sponsor" / "visa sponsorship available" | Good sign — employer already hires temporary-visa holders | Note as positive |
| "Must have ongoing/unrestricted work rights" | Ambiguous — 485 is full but time-limited (2–3 years); some employers accept, some mean PR | Soft flag; apply, but expect the question at screening |
| Location: Sydney/Brisbane/Canberra/Perth, no remote or relocation mention | Faraaz is open to relocation; the ad may not be | Soft flag; mention relocation in the profile's last line |
| "Agile", "Scrum", "stakeholder", "cross-functional", "communication" | Soft-skill criteria screeners tick off | Evidence: peer reviews, handoff memos, team deliverables, Speakers Club, Amart |
| Salary band listed | Graduate bands in tech: roughly $65–90k in 2026; anything far above implies seniority not stated | Soft flag if the band implies a mid-level role |

## 7. Why strong international graduates get rejected here, and what the resume can fix

Fixable by the resume:
- Generic profile and unpruned skills → the six-second scan finds no match. **Fix: tailor.**
- Long, jargon-dense bullets → the screener can't extract "what did this person do for whom with
  what result". **Fix: ≤ 2 lines, verb → action → result.**
- Criteria not mirrored → the checklist has gaps even when the experience exists. **Fix: the
  criteria map, and the ad's own words.**
- Skills at the bottom of page 2 → the stack match is never seen. **Fix: skills under the profile.**
- Work rights ambiguous or buried → "will need sponsorship?" gets guessed as yes. **Fix: header
  line, leading with "Full … working rights".**

Not fixable by the resume — stop spending applications on them:
- Roles that require PR or citizenship (see § 6). A large share of advertised graduate programs.
- Roles that state 3+ years' experience.
- Ads with hundreds of applicants where the referral channel decides — worth applying, but the
  application alone rarely converts. Smaller companies, direct careers pages and referrals convert
  at a much higher rate for graduates than SEEK/LinkedIn mass postings.

Track the rejections. A pattern ("every rejection was a graduate program", "every one wanted
3 years") is worth more than any single resume tweak.

## 8. Graduate programs specifically

- Education goes first. The program is hiring the degree.
- Expect online forms that ask for the resume *and* re-typed answers to selection criteria; the
  criteria map in `notes.md` is the draft for those answers.
- Most run one intake per year with applications ~Feb–Apr (large corporates) or ~Jul–Sep
  (government, some tech). Check the cycle before writing anything.
- PR/citizenship requirement is the norm rather than the exception for banks, consulting,
  government and Defence. Tech companies, startups and mid-size engineering firms are far more
  likely to accept a 485.
