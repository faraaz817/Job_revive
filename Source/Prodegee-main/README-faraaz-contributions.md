# Contributions — Mohammed Faraaz Abdul Khadeer

**Team DS4 — Building Footprint Inference** · RMIT WIL Capstone 2026-S1 · Industry partner: Prodegee
**Repository**: `rmit-2026-s1-flows` · **GitHub**: `faraaz817` · **Supervisor**: Marc Torra

---

## At a glance

| | |
|---|---|
| Commits | 68 (64 substantive + 4 merges), 2026-03-28 → 2026-06-16 |
| Files authored / modified | 134 |
| Lines | +60,081 / −549 |
| Assignments worked | DS4-01 → DS4-10 (10 of 10) |
| Assignments led | DS4-06, DS4-08, DS4-10 |
| Formal deliverables authored | 4 (`docs/4-deliverables/`) |
| Languages / tools | Python (GeoPandas, Shapely, scikit-learn, XGBoost, pandas), Kestra YAML, QGIS, Parquet/GeoPackage, Git |

Verify any claim in this document with:

```bash
git log --author="faraaz817" --reverse --pretty=format:"%ad | %s" --date=short
git log --author="faraaz817" --name-only --pretty=format: | sort -u
```

---

## The problem DS4 was solving

Off-grid electrification investment in West Africa and the Sahel depends on knowing how many households a village contains and what energy tier they sit in. Ground surveys are expensive and sparse. DS4's job was to **infer household counts and Multi-Tier Framework (MTF) tier distributions from satellite-derived building footprints** — turning Overture Maps / Google Open Buildings polygons into a per-village estimate an investor can price risk against.

Two application phases:

1. **Phase 1 (DS4-01 → DS4-05)** — School geolocation refinement in Côte d'Ivoire, Burundi and Chad. Given 18,121 school points of unknown accuracy, use building-footprint structure to detect which points sit off-compound and propose corrections.
2. **Phase 2 (DS4-06 → DS4-10)** — Mauritania. Per-Wilaya calibrated footprint counting across 200 villages in 7 Wilayas, feeding a Stage-C household/tier estimate consumed by DA1 and DS1.

My work concentrated in the **core algorithm design of Phase 1** and the **per-Wilaya consolidation and stabilisation of Phase 2**.

---

## Contribution by assignment

### DS4-01 — Literature review and method inventory
*Research + peer review · Mar 2026*

- Owned three of the eight research categories: **Cat 2 (building shape descriptors)**, **Cat 5 (ancillary structure detection)**, **Cat 8 (cross-country transferability)**.
- Produced source notes on ~30 papers and technical references — Fleischmann 2019 morphometrics, Atwal 2022, Chamberlain 2024, Google Open Buildings documentation, dask-geopandas scaling, and class-imbalance literature relevant to tier prediction.
- Wrote **7 peer reviews** of teammate synthesis deliverables (dataset inventory, method inventory, gap analysis, parameter catalogue, tool inventory, implementation priorities, feature-engineering catalogue) — the review gate DS4-01 needed before it could close.

### DS4-02 — Building footprint feature exploration *(algorithm origin)*
*Primary author of the algorithm · Apr 2026*

Designed and implemented the **three-stage school-geolocation refinement algorithm** that became DS4's core pipeline for the rest of the semester.

- `buildings-prep-faraaz.py` — prepared a national CIV building layer of **7.2M Overture Maps polygons** (area, elongation, centroid derivation) into a queryable GeoPackage.
- `ds4-02-buildings-prep.yml` — Kestra flow wrapping the prep step for reproducible re-runs.
- `refinement-algorithm-faraaz.py` — the algorithm:
  - **Stage 1, on-school check**: dual condition — at least 1 large building (>120 m²) within 30 m **and** at least 3 large buildings within 100 m with mean elongation > 1.5. The conjunction was deliberate: a single large building nearby is too common in CIV (markets, mosques, warehouses) to be diagnostic on its own.
  - **Stage 2, candidate search**: BFS clustering of medium+large buildings within 1,000 m (150 m inter-centroid link), composite scoring `n_large×3 + n_medium×1 + elongation_bonus`, then a **nearest-school proximity check** so a cluster is never stolen from a neighbouring school.
  - **Stage 3, output**: largest building in the winning cluster as the anchor, its centroid as the corrected location.
- Ran it nationally: 18,121 schools, 48.4% classified on-school, 15.8% (2,858) with a correction proposed, median correction distance 217 m, and only 1 school falling outside the building bounding box.
- Built the **40-case ground-truth test set** (my 20 locations + Chaitanya's 20) through QGIS/satellite interview, plus the visual verification pass that measured the algorithm honestly.
- Hit and documented an `overturemaps` CLI blocker, then engineered a Google CSV fallback rather than stalling the assignment.

### DS4-03 — Refinement algorithm fixes and expansion
*Primary author of the report · Apr 2026*

Primary author of **`docs/4-deliverables/DS4-03-school-geolocation-accuracy-report.md`** (Sections 1, 2, 4, 5 and both spot-check studies; Chaitanya co-authored 3 and 6).

- **Corrected a bad baseline.** DS4-02's headline "6–13% correction accuracy" turned out to be a measurement artefact. I re-derived it against the confirmed off-school test set and published the real figure — **37%** — rather than the flattering one.
- Designed and evaluated four algorithm fixes. The most consequential replaced distance as a **binary cutoff** with **exponential decay** — `effective_score = cluster_score × exp(−d/400)` — making distance a continuous penalty instead of a hard yes/no. That is the change that made scoring behave sensibly on mid-range candidates.
- Ran QGIS + Google Satellite spot-checks on CIV (10 schools) and Chad (10 schools) and reported the uncomfortable result: CIV 1/10 correct against TCD 6/10. Diagnosed the cause — Fix 1's 5 m containment threshold over-correcting points already within 30 m of their compound — instead of averaging the failure away.
- Characterised the **Sahel transferability** failure mode: mud-brick walled compounds have smaller, less distinguishable footprints than CIV structures. This finding is what later forced per-country calibration.

### DS4-04 — R0 consumption, tuning, confidence score
*Job 4 owner · Apr 2026*

- Designed the **per-correction confidence score** (`confidence-score-design-faraaz.md`, implemented in `refinement-algorithm-v5-faraaz.py`) so downstream consumers could triage corrections without opening QGIS. Four weighted signals: correction distance (0.45), destination cluster size (0.25), cluster-score consensus (0.20), DA1 geocode quality (0.10). Weights were derived from the Job 2 fix-attribution distribution, not assigned by feel.
- Ran the **40-case fix attribution** with full compound centroids and published the updated accuracy baseline against complete ground truth.
- **Killed the proximity penalty.** Tested at 10 m / 25 m / 50 m; all three made accuracy worse by suppressing true off-school detections. Recommended `PROXIMITY_PENALTY_M=0` and documented why the penalty is unfixable without compound-level polygon data — a negative result that saved the team from tuning a dead parameter.
- Added a `LARGE_M2` CLI parameter so the large-building threshold became tunable per country rather than hard-coded.

### DS4-05 — BDI R0 and compound polygon output
*Job 1 and Job 3 owner · May 2026*

- Ported the v5 algorithm to **Burundi** (`refinement-algorithm-v5-bdi-faraaz.py`), ran the R0-vs-Overture comparison plus a 10-school spot-check, and reported F1 against both sources.
- Built the **IoU evaluation harness** (`iou-evaluation-harness-faraaz.py`) and ran a three-way comparison of the polygon generators against my 20 CIV ground-truth compound polygons:

  | Method | Mean IoU | 95% CI | % ≥ 0.5 |
  |---|---|---|---|
  | convex-hull | 0.0241 | [0.0162, 0.0324] | 0% |
  | concave-buffer | 0.0298 | [0.0181, 0.0434] | 0% |
  | building-union | **0.0445** | [0.0279, 0.0631] | 0% |

- **The finding that redirected the team**: all three methods failed the IoU ≥ 0.5 gate by an order of magnitude — but the polygons were *correctly located*, with centroids within ~100 m, and roughly **35× too large** (predicted ~445 m × 612 m against a ~78 m × 100 m real compound). I showed this was not a polygon-fitting problem at all; the upstream cluster definition was over-scoped. That diagnosis set the DS4-06 design agenda.
- Named building-union the spec-correct winner regardless, while stating plainly that method selection was secondary to the root cause. Followed up with a failure-case analysis workbook.

### DS4-06 — TCD R0 and polygon cluster scoping fix
*Assignment leader · May 2026*

- Ran Chad R0 end to end (`refinement-algorithm-v6-tcd-faraaz.py`) and produced the **three-country comparison** (CIV / BDI / TCD).
- Delivered the **v7 polygon fix and IoU recovery** as fallback owner when that thread stalled.
- Designed **sigmoid score normalisation** to fix a real operational problem: CIV scores ranged [0.23, 0.62] with threshold T = 0.35, BDI ranged [0.16, 0.90] with T = 0.69 — so a raw score of 0.45 meant "confident" in one country and "needs review" in the other. DS3 would have had to branch on country, which breaks the moment a fourth country arrives. Solution: `σ(x; k, x₀) = 1 / (1 + exp(−k(x − x₀)))` with shared steepness k = 8.0 and per-country inflection at that country's score median, giving **one unified threshold T_norm = 0.54** across all countries.
- Wrote **DS3 handoff v3** (the cross-team interface contract) and the **consolidated DS4-06 report** (`docs/4-deliverables/DS4-06-tcd-r0-polygon-fix-and-heuristic-report.md`), then closed the assignment.

### DS4-07 — Mauritania footprint inference and tier distribution
*Jobs 1 and 2 owner · May 2026*

- Wrote `run-v7-per-village-faraaz.py` and ran v7 across **all 7 Wilayas — 200 villages, 3,388 footprints, 9 gap villages** with zero detections.
- Implemented the **MTF tier heuristic** (`tier-predict-heuristic.py`) and produced the first per-Wilaya tier distributions (mean confidence 0.38).
- Pinned the upstream DS2-07 R0 cohort GeoPackage to a specific commit so the run was reproducible, rather than dependent on whatever DS2 happened to have pushed that day.

### DS4-08 — Week-10 consolidation and v7 stabilisation
*Assignment leader · May–Jun 2026 · The work I'd point to first*

Primary author of **`docs/4-deliverables/DS4-08-week10-consolidation-and-v7-stabilisation-report.md`**.

- **XGBoost tier regressor** (`run-ds4-08-tier-xgb.py`): `MultiOutputRegressor` over 5 simultaneous tier targets (T0–T4), trained on 2,000 synthetic villages sampled from the heuristic with 10% Gaussian noise, predictions normalised to sum 1.0.
- **Heuristic-v2**: joined real `settlement_type` from the DS2-07 cohort on `village_code` (200/200 matched) instead of defaulting every village to `organic`. Lifted mean confidence 0.379 → 0.426.
- **Called out my own result.** XGBoost reported 0.816 mean confidence against the heuristic's 0.426, which reads as a large win. It isn't: the metric is `1 − MAD(XGB, heuristic-v2)`, so it measures **model-to-heuristic agreement, not ground-truth accuracy** — close agreement is guaranteed by construction, because the model was trained to approximate the heuristic. I committed a dedicated correction to make that caveat explicit in the report rather than let a flattering number stand.
- **Sensitivity analysis** (`run-sensitivity.py`, two layers, ±20% perturbation):

  | Parameter | Perturbation | Mean Δ count | Villages > 10% change |
  |---|---|---|---|
  | `min_footprint_area_m2` | +20% (15 → 18 m²) | −7.1% | 40 / 191 |
  | `scope_cluster_radius_m` | +20% (75 → 90 m) | **+44.0%** | **191 / 191** |
  | `scope_cluster_radius_m` | −20% (75 → 60 m) | **−36.0%** | **191 / 191** |

  Ranked `scope_cluster_radius_m` as the dominant parameter by a wide margin — count scales with r², so every non-gap village moves ±36–44%. This identified the one lever worth tuning and led directly to the **75 m → 200 m recalibration** that moved the cohort buildings-per-household ratio from **0.069 (a 90%+ under-count) to 0.415**, inside the 0.4–1.0 target band.
- Also delivered: integration audit, public-data cross-validation, v7 algorithm description, tier algorithm description, methodology draft, QGIS spot-check pilot and log, and the assignment review.
- The per-Wilaya calibration pattern established here was picked up by adjacent teams as the cohort approach.

### DS4-09 / DS4-10 — Closure and handoff
*DS4-10 leader · Jun 2026*

- Authored the **S2 handoff memo** (`handoff-memo-faraaz.md`) — a deliberately unflattering audit of where the pipeline actually landed: what is stable (200 m calibration, stratified cascade, Stage-C I/O contract), what is open (tier breakpoint recalibration, Round-2 refresh, the 36-village inference apply, Adrar at 0.253 and Tagant at 0.359 still below target), and a one-paragraph "do this first" for whoever inherits the thread.
- Authored the **final student reflection**, including the parts that do not flatter me (see *Scope limits*).

---

## Cross-cutting contributions

**Cross-team interfaces.** Authored the DS3 handoff contracts at v2 and v3, carrying DS4's confidence-score semantics across a team boundary. Pinned upstream DS2 artefacts by commit SHA (`r0-cohort-pin.md`, `pinned-inputs/README.md`) so DS4 runs stayed reproducible against a moving upstream — a discipline that was not the default in this repository.

**Shared tooling.** `scripts/model_router.py` — an automatic Claude model router that classifies task complexity with a cheap Haiku call and routes to Haiku / Sonnet / Opus accordingly, keeping cost proportional to task difficulty.

**Peer review.** 7 formal reviews in DS4-01, plus ongoing review comments across DS4-04 through DS4-08.

---

## Engineering practices demonstrated

- **Geospatial work at national scale** — 7.2M-polygon building layers, GeoPackage/Parquet I/O, BFS spatial clustering, IoU polygon evaluation, projected-CRS distance handling.
- **Parameter design over parameter guessing** — exponential distance decay, sigmoid cross-country normalisation, weighted confidence scoring with weights derived from observed distributions, and a two-layer sensitivity analysis to rank parameters *before* tuning them.
- **Honest measurement** — corrected an inflated baseline (DS4-03), published a negative result that closed off a dead parameter (DS4-04 proximity penalty), reported a 1/10 spot-check without softening it, and flagged my own XGBoost metric as non-diagnostic (DS4-08).
- **Reproducibility** — commit-pinned upstream inputs, Kestra flow wrapping for the prep stage, CLI-parameterised thresholds, documented run configurations.
- **Diagnosis over patching** — the DS4-05 IoU failure looked like a polygon-method problem; identifying it as a cluster-scoping problem is what made DS4-06 solvable.

---

## Scope limits

Stated plainly, because a contribution record that lists only wins is not evidence of anything.

- **DS4-09 Job 1.b (tier breakpoint recalibration + XGBoost re-train) — not delivered.** It was my allocation, deferred from DS4-09 and never picked up in DS4-10. Heuristic tier breakpoints still over-predict T0 (+0.39) and under-predict T3 (−0.41); EMD 0.49 is approximately random. It is named as the first S2 target in my own handoff memo.
- **Week-13 cohort JSON contribution set — not delivered.** DS4-10 Job 6 (`algorithm.json`, `algorithm-coverage.json`, `data-sources.json`, `parameter-values.json`, `tags.json`). The week of 8–12 June went to capstone presentation preparation.
- **DS4-09 substance is largely Chaitanya's.** He delivered five jobs on 31 May; I did not respond that week. The Round-1 Mauritania results in this repository are his work, not mine.
- **CIV was deferred at semester end** — v7 footprint inference is not validated against tropical canopy occlusion.

Full context is in `docs/2-teams/DS4-building-footprint-inference/5-workspace/DS4-10/final-reflection-faraaz.md`, in the private `rmit-2026-s1-flows` repository.

---

## Deliverables index

**Formal reports** (`docs/4-deliverables/`)

| Report | My role |
|---|---|
| `DS4-03-school-geolocation-accuracy-report.md` | Primary author (§1, 2, 4, 5 + spot-checks) |
| `DS4-04-accuracy-v4-report.md` | Contributor (confidence score, fix attribution) |
| `DS4-06-tcd-r0-polygon-fix-and-heuristic-report.md` | Primary author, assignment leader |
| `DS4-08-week10-consolidation-and-v7-stabilisation-report.md` | Primary author, assignment leader |

**Code** — `refinement-algorithm-faraaz.py` (v1), `refinement-algorithm-v5-faraaz.py`, `refinement-algorithm-v5-bdi-faraaz.py`, `refinement-algorithm-v6-tcd-faraaz.py`, `buildings-prep-faraaz.py`, `iou-evaluation-harness-faraaz.py`, `run-v7-per-village-faraaz.py`, `tier-predict-heuristic.py`, `run-ds4-08-tier-xgb.py`, `run-sensitivity.py`, `write_spotcheck.py`, `scripts/model_router.py`, `team-flows/ds4/ds4-02-buildings-prep.yml`

**Design documents** — confidence score design (DS4-04); sigmoid score normalisation and normalised thresholds (DS4-06); fallback design (DS4-05); sensitivity report, integration audit, and v7 + tier algorithm descriptions (DS4-08); DS3 handoffs v2 and v3; S2 handoff memo (DS4-10).

**Teammates** — Chaitanya Rathod (polygon generators, DS4-09 Round-1, deduplicated CIV layer) and Ann Mini Baby (validation, PR review gate). Work attributed to them above is theirs.
