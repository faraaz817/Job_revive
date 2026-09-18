# Notes — eShepherd (Gallagher), Computer Vision Engineer (Vision Weigh)

Captured 17 Sep 2026. Ad text in `jd.md`.

## 1. Fit check

### Hard blockers

One of the two is resolved; the seniority one stands.

| Signal | Assessment |
| --- | --- |
| **Ownership scope stated as senior/lead** — "You will **own** the vision work, backed by specialists across data, software, firmware, hardware and product"; "take Vision Weigh from working prototype to hardware running reliably on commercial farms"; "**be a subject matter expert in computer vision**"; "make your own calls" | Per `au-standards.md` § 6, "senior"/"lead" framing as a requirement is a hard blocker. No years are stated, but the scope — sole owner of the hardest technical problem in the portfolio, directing specialists across five disciplines — is not a graduate brief. This is the blocker, not any single missing library. |
| ~~Location not stated; ad describes Gallagher as "the New Zealand company"~~ | **RESOLVED 18 Sep 2026 — the role is in Australia** (confirmed by Faraaz). The 485 applies and no sponsorship is required, so this is no longer a blocker. City still unstated; the ad is "office first", so confirm which office before accepting an interview. |

### Soft flags

| Signal | Assessment |
| --- | --- |
| "Office first" | Removes remote as an option; relocation willingness is relevant if the role is not Melbourne. |
| No closing date, no salary band, no PR/citizenship requirement, no sponsorship statement | Neutral. Absence of a PR requirement is mildly positive — a scale-up inside a private NZ-owned group is more likely to consider a 485 than a bank or government graduate program. |
| Three of the seven "What You'll Bring" bullets are hard technical prerequisites with no evidence in `Source/` | See § 2. Not a phrasing problem — the experience is absent. |

### Positives

- Not a graduate program, not government, not a big-4 bank — the categories that auto-reject a 485 holder.
- Direct careers-page / smaller-employer channel, which `au-standards.md` § 7 notes converts far better for graduates than SEEK mass postings.
- Agriculture domain listed as "highly regarded" — there is genuine, published evidence here (§ 2).

## 2. Criteria → evidence map

Ad's own words in the left column. Evidence traced to `Source/` READMEs.

### Must-haves ("What You'll Bring")

| Ad criterion | Evidence | Where it would go |
| --- | --- | --- |
| "built computer vision into a real product, with something you wrote running **somewhere beyond your own laptop**" | **PARTIAL / weak.** Fire Detection (KMIT B.Tech capstone, 2023–24): live `cv2.VideoCapture` feed, Haar cascade `detectMultiScale`, bounding-box overlay, threaded audible alarm + RAPIWHA WhatsApp alert to owner and fire station; non-functional targets of <5 s response, restart-safe, operational within 1 min. It is a real-time camera system with an alerting path — but it is a university project on a Windows webcam, not a deployed product. MGM Prayer Alerts *is* shipped beyond the laptop (sideloaded to Melbourne Grand Mosque members) and **Bro** is deployed on Vercel, but neither is computer vision. | Key Projects — Fire Detection, honestly framed as a capstone |
| "Strong Python" | **YES.** Prodegee: 68 commits, +60,081 lines, 134 files, GeoPandas/Shapely/scikit-learn/XGBoost/pandas. | Skills, Experience |
| "**PyTorch**" | **GAP — not added.** No PyTorch anywhere in `Source/`. Closest: Gemma Delegation System fine-tune on Colab T4 using Unsloth + QLoRA (4-bit, LoRA r=16) → GGUF — PyTorch-backed stack, but the resume cannot claim PyTorch from it. | — |
| "solid understanding of **classical computer vision**" | **YES — the strongest CV evidence available.** RMIT Master of AI coursework explicitly includes **Computer Vision** (`base_resume.md` Education). Published comparative study of five edge operators (Canny, Sobel, Roberts, Prewitt, Laplacian) × eight classifiers; the Canny arm is his notebook (2,000 images, 4 classes, 40,000-dim flattened edge maps, Decision Tree 90.75%). Plus Haar cascade *training* end to end: positive marking with `objectmaker`, `createsamples` vectorisation, `haartraining` 15 stages, `haarconv` to XML. | Publication, Key Projects |
| "**Segmentation, keypoints, pose estimation and basic point cloud work**" | **GAP — not added.** None of the four appears in any source. | — |
| "you know when **geometry is the right tool** for the job" | **YES — and this is the one that genuinely transfers.** Prodegee DS4: BFS spatial clustering of building centroids (150 m link, 1,000 m radius), composite geometric scoring (`n_large×3 + n_medium×1 + elongation_bonus`), building shape descriptors (area, elongation), projected-CRS distance handling, exponential distance decay `score × exp(−d/400)` replacing a binary cutoff, and an **IoU evaluation harness** with 95% CIs over hand-drawn ground-truth polygons. | Experience — lead bullets |
| "deploying models on **edge hardware** (Jetson / NPU / SBC with accelerator)"; "realities of latency, memory and thermal limits" | **GAP — not added.** No Jetson, no NPU, no SBC. Fire Detection's documented minimum spec (i3, 2.9 GHz, 4 GB RAM) and its stated rationale for choosing Haar over a newer detector — *"detection latency is lower … for a spreading fire, reaction time matters more than a few points of accuracy"* — is a latency-vs-accuracy trade-off made deliberately on constrained hardware, but it is a desktop CPU, not edge compute. | — |
| "**depth sensing** — stereo, time of flight or structured light"; "comfortable with **calibration**"; "noisy depth data" | **GAP — not added.** No depth sensing of any kind. *Calibration* in the parameter sense is strongly evidenced (75 m → 200 m cluster-radius recalibration; per-country sigmoid normalisation to a single threshold) — but that is not camera calibration and must not be presented as if it were. | — |
| "a **well built ground truth set** is worth more than a clever architecture" | **YES — the single best match in the ad.** Built a 40-case ground-truth set by QGIS/satellite interview; corrected an inflated baseline (published 37% instead of the flattering 6–13%); killed the proximity penalty as a negative result after testing 10/25/50 m; reported a 1/10 spot-check without softening it; flagged his own XGBoost 0.816 as measuring model-to-heuristic agreement, not ground-truth accuracy. | Experience — lead bullets |
| "experiment tracking and some form of **dataset versioning** so you know which model saw which data" | **PARTIAL.** No MLflow / W&B / DVC. But: upstream DS2-07 cohort GeoPackage pinned by commit SHA (`r0-cohort-pin.md`, `pinned-inputs/README.md`), Kestra flow wrapping for reproducible re-runs, CLI-parameterised thresholds, documented run configurations — explicitly noted as *"a discipline that was not the default in this repository."* | Experience |
| "the **retraining loop** that keeps the model accurate as deployment grows" | **YES, by analogy.** Gemma Delegation System: accept/reject feedback → capability profile → confirmed entries appended to `training_data.jsonl` → Colab QLoRA fine-tune → GGUF export → back into Ollama. A closed feedback-to-retrain loop he designed and shipped. Not vision, but the exact shape the ad describes. | Key Projects |
| "Version control" | **YES.** 68 commits, 7 peer reviews, merge discipline, commit-pinned inputs. | Experience |
| "**containers**" | **PARTIAL — corrected.** `base_resume.md` lists `Docker (basic)` under Tooling. Kept in the Engineering skills line, unembellished. | — |
| "**continuous integration**" | **GAP — not added.** `Source/GitHub_Overview.md` states plainly: "No CI, no GitHub Actions on any repo." | — |
| "enough **testing** that someone else can pick up your code and get it running" | **PARTIAL.** MGM Prayer Alerts: requirements written before coding, severity-ranked code review against them, JUnit unit tests for the time-parsing round trip, two critical bugs caught (AM/PM storage bug scheduling afternoon prayers 12 h early; one-shot alarm not re-arming after a failed fetch). Plus the S2 handoff memo written for whoever inherits the thread. | Key Projects, Experience |
| "Real fluency with **generative AI, in both directions**"; "agentic coding tools to move faster" | **YES — strongest match after ground truth.** Five published Claude Code / Cursor agent skills; MCP server delegating to local Gemma 4 E2B with graceful degradation; `model_router.py` routing by classified task complexity to Haiku / Sonnet / Opus to keep cost proportional to difficulty. | Key Projects, Skills |
| "**vision foundation models** … reducing annotation effort, detection, pretrained depth models"; "strong results from a few thousand labelled animals" | **GAP — not added.** No SAM, no DINO, no Depth Anything, no pretrained-detector work. The "few thousand labels" instinct is evidenced elsewhere (2,000-image study, 40-case ground truth) but not with foundation models. | — |

### Nice-to-haves

| Ad criterion | Evidence |
| --- | --- |
| Luxonis DepthAI / Stereolabs ZED / Intel RealSense | **GAP — not added.** |
| AWS / Databricks / MLflow | **GAP — not added.** |
| C++ on latency-sensitive paths | **GAP — not added.** OOP with C++ appears in the KMIT transcript as coursework only; not resume-worthy against this criterion. |
| **Livestock and agriculture** | **YES — real.** Published peer-reviewed paper on maize leaf disease classification from images (Quest JSES 9(12), Dec 2023, pp. 43–51). Crop, not livestock, but it is agricultural computer vision with a publication behind it. Prodegee is rural infrastructure (off-grid electrification across Côte d'Ivoire, Burundi, Chad, Mauritania) — field-deployed context, not agriculture. |

### Values / soft-skill language

| Ad language | Evidence |
| --- | --- |
| "build the rough version, put it in front of a real animal, find out what breaks, and go again"; "Progress over perfection" | Prodegee ran v1 → v5 → v6 → v7 across four countries in one semester, each version driven by a measured failure of the last. |
| "put mistakes on the table early" | The corrected baseline, the published negative result, the self-flagged XGBoost metric, and a handoff memo described in his own source as "a deliberately unflattering audit". This is the ad's stated value, evidenced literally. |
| "comfortable with ambiguity", "make your own calls" | Hit an `overturemaps` CLI blocker and engineered a Google CSV fallback rather than stalling the assignment. |
| "speak up when you are stuck" | 7 formal peer reviews; DS3 handoff contracts v2 and v3 across a team boundary. |
| Team attribution honesty | Source explicitly attributes DS4-09 to Chaitanya Rathod and names two undelivered allocations. Nothing in the resume should overclaim team results. |

### Coverage summary

**7 of 17 must-have criteria evidenced, 4 partial, 6 gaps.** The six gaps are PyTorch, segmentation/keypoints/pose/point-cloud, edge hardware, depth sensing, containers/CI, and vision foundation models — and the first four are the technical core of the role. Three of four nice-to-haves are gaps; agriculture is the one hit.

## 3. Changes vs base

Nothing added. Selection, reordering and rephrasing only.

| Section | Change | Why |
| --- | --- | --- |
| Profile | Rewritten. Leads with the Master of AI *computer vision coursework* and the peer-reviewed computer-vision paper, then classical CV in OpenCV, then the ground-truth/sensitivity work. Closes on "a computer vision role on Vision Weigh". | The six-second scan has to find "computer vision" above the fold. The base profile led with "geospatial ML pipelines", which reads as the wrong discipline for this ad. |
| Technical Skills | New **Computer Vision** line placed first, folding OpenCV out of the base's AI/ML line and the geometric/geospatial tooling out of its Geospatial line. Base's Software (Android/PWA) and the Prolog/JCL/IBM-Z entries dropped. 7 lines → 5. | § 3 of `au-standards.md`: mirror the ad's stack, in the ad's order. Android and mainframe tooling dilute a CV match. |
| Experience — Prodegee | 6 of 8 bullets, reordered: ground truth → sensitivity/recalibration → IoU harness → core geometric algorithm → decay/sigmoid → reproducibility. Dropped the XGBoost tier-regressor bullet and the model-router bullet. | Bullet order is the criteria map. The ad names ground truth, calibration and the retraining loop explicitly; tier regression is off-target and the model router is covered under Key Projects. |
| Key Projects | **Fire Detection promoted from an inline bullet to a headed entry**, expanded from `Source/Fire Detection/README.md` (cascade training pipeline, latency rationale, sub-5-second target, 4 GB / 2.9 GHz spec). Gemma kept and reframed as "closed the **retraining loop**". Time Flow and NeuroVisualZ dropped; MGM, Bro and agent skills kept as inline bullets. | Fire Detection is the only real-time-camera evidence and the closest thing to the ad's edge/latency criterion. Time Flow (PWA) and NeuroVisualZ (ASP) are off-target. MGM carries the testing/requirements criterion. |
| Publication | Kept in full. | AI/ML role, and it is the peer-reviewed CV + agriculture double hit. |
| Education | Held after Experience (not a graduate program). **Computer Vision** bolded in the RMIT coursework line. | `au-standards.md` § 8 only moves Education up for graduate programs. |
| Certifications | 4 lines → 2. IBM Z badges and Taher Foundation dropped. | Irrelevant to a CV role; the ad values communication, so Speakers Club stays. |

**Not added, though the ad asks for them:** PyTorch, segmentation/keypoints/pose/point clouds, edge hardware, depth sensing, CI, vision foundation models, DepthAI/ZED/RealSense, AWS/Databricks/MLflow, C++. See § 2.

**One wording risk to know before an interview:** the Publication line says "15,000-image ... dataset", which is the paper's own published claim. `Source/Maize_Leaf_Disease_ML/README.md` records that the underlying notebook ran on 2,000 images (500 per class). Left as the base has it, because it is the paper's figure, not a resume claim — but it is the obvious question.

## 4. Status

**Drafted and rendered — awaiting review.** `resume.md` is the file to edit; it is the exact input to the renderer.

Render verified visually at 80 dpi, both pages: 2 pages A4, page 2 ~52% full, every bullet at most 2 lines, no stranded headings, no bullet split across the page break.

The first round of page proofs was invalid. Carlito was not installed in the render container, so LibreOffice substituted DejaVu Sans, which is materially wider than Calibri; bullets appeared to wrap to three lines when they do not. Content was trimmed to fix those phantom wraps, which left page 2 at ~40%. After installing `fonts-crosextra-carlito`, the trims were reverted and the Prodegee Mauritania/XGBoost bullet restored (7 bullets rather than the skill's 4–6 — the ad's "put mistakes on the table early" is evidenced literally by its self-flagged metric, and page 2 needs the content). The font prerequisite is now documented in `_build/README.md`.

Blockers:

1. **Location — resolved.** Australia, confirmed 18 Sep 2026. The 485 applies.
2. **Seniority / SME scope — stands.** The role is scoped as owner and subject-matter expert for the vision work, and PyTorch, segmentation/keypoints/pose, edge hardware and depth sensing have no evidence in `Source/` (§ 2). Raised twice and Faraaz has chosen to proceed; recorded here so a rejection can be read against it rather than guessed at.

Nothing else is outstanding. The resume is rendered, tracked and linked from the tracker.

## Log

- **17 Sep 2026** — Ad captured to `jd.md`. Fit check and criteria map completed. Two blockers raised with the user: missing `base_resume.md` in this clone, and the senior/SME ownership scope of the role. Awaiting the user's call on whether to proceed.
- **18 Sep 2026** — User supplied `base_resume.md`. Criteria map corrected on three points in the user's favour: RMIT coursework includes Computer Vision, `Docker (basic)` is listed (containers → partial), and Bro is deployed on Vercel. `resume.md` drafted and rendered; 2 pages verified visually. Awaiting approval. Location still unconfirmed.
- **18 Sep 2026** — Location confirmed Australian by Faraaz, resolving the visa blocker; the 485 applies. Resume rendered, committed and linked from the tracker. Remaining risk is fit, not eligibility: the role's owner/SME scope and the four unevidenced must-haves stand as recorded in § 2.
