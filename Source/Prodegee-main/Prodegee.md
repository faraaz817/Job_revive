# Prodegee × RMIT Capstone — Building Footprint Inference (DS4)

**Mohammed Faraaz Abdul Khadeer** · RMIT WIL Data Science & AI Capstone, 2026 Semester 1
Industry partner: [Prodegee](https://www.prodegee.com) · Team DS4 — Building Footprint Inference
March–June 2026

---

## The problem

760 million people still lack electricity access. Investment in off-grid electrification depends on
knowing how many households a village holds and what energy tier they sit in — but the industry
standard, survey-based demand estimation, **overestimates actual consumption by 3–3.75×**. That
leads to oversized infrastructure, failed financial projections, and mini-grid developers who
can't raise capital because their business case isn't credible to institutional investors.

Prodegee replaces surveys with geospatial inference. DS4's job was the building-footprint half:
turn satellite-derived polygons — Overture Maps, Google Open Buildings — into per-village household
counts and Multi-Tier Framework tier distributions that an investor can price risk against.

I worked across two application phases: **school geolocation refinement** in Côte d'Ivoire, Burundi
and Chad, then **per-Wilaya calibrated footprint counting** across 200 villages in Mauritania.

## What I did

| | |
|---|---|
| Assignments | 10 of 10 worked, 3 led (DS4-06, DS4-08, DS4-10) |
| Commits | 68 across 134 files, +60,081 / −549 lines |
| Formal deliverables | 4 authored in `docs/4-deliverables/` |
| Stack | Python (GeoPandas, Shapely, scikit-learn, XGBoost, pandas), Kestra, QGIS, Parquet/GeoPackage, Git |

Four pieces I'd point to:

**The refinement algorithm.** Designed and built the three-stage school-geolocation algorithm that
became DS4's core pipeline — a national layer of 7.2M Overture polygons, BFS spatial clustering
with composite scoring, and a nearest-school proximity check so no cluster gets stolen from a
neighbouring school. Ran nationally across 18,121 schools.

**Cross-country score normalisation.** Raw confidence scores ranged [0.23, 0.62] in Côte d'Ivoire
and [0.16, 0.90] in Burundi, so 0.45 meant "confident" in one country and "needs review" in the
other — the consuming team would have had to branch on country, which breaks the moment a fourth
country arrives. Fixed with sigmoid normalisation at a per-country inflection point, giving one
unified threshold across all countries.

**Sensitivity analysis that found a 90% under-count.** Rather than tuning parameters
conversationally, I built a two-layer ±20% perturbation harness and ranked them first. One
parameter dominated by an order of magnitude — `scope_cluster_radius_m`, moving every village
±36–44%, because count scales with r². That ranking drove a 75 m → 200 m recalibration which moved
the cohort buildings-per-household ratio from **0.069 to 0.415**, from a 90%+ under-count into the
target band.

**Diagnosis over patching.** DS4-05's polygon evaluation failed its IoU gate by an order of
magnitude. The obvious move is to improve the polygon method. But the polygons were correctly
*located* and roughly **35× too large** — it was never a fitting problem, the upstream cluster
definition was over-scoped. That diagnosis set the next assignment's entire agenda.

## Measurement discipline

The thread running through all of it, and the part I'd most want examined:

- **Corrected my own inflated baseline.** DS4-02 reported 6–13% correction accuracy. Re-derived
  against a correctly scoped ground-truth set, the real figure was 37% — the original denominator
  included schools that were never off-school.
- **Published a negative result.** Tested a proximity penalty at three thresholds; all three made
  accuracy worse. Recommended disabling it and documented why it's unfixable without
  compound-level polygon data. Killing a parameter saved the team weeks of tuning a dead lever.
- **Flagged my own flattering metric.** An XGBoost tier regressor reported 0.816 mean confidence
  against a heuristic's 0.426. It reads as a large win; it isn't. The metric measures
  model-to-heuristic *agreement*, and the model was trained on villages sampled from that
  heuristic — close agreement is guaranteed by construction. I committed a dedicated correction
  rather than let the number stand.
- **Reported a 1/10 spot-check without softening it**, and diagnosed the cause rather than
  averaging the failure away.

Ground truth for the whole accuracy baseline is 40 school locations I inspected by satellite
myself, because the repository's agent rules forbid fabricating visual observations — a model can
read building counts from the data and write a fluent description that is fiction.

## Read next

| Document | What's in it |
|---|---|
| **[README-faraaz-contributions.md](README-faraaz-contributions.md)** | Assignment-by-assignment breakdown, results tables, deliverables index, and a candid scope-limits section covering what I didn't deliver |
| **[README-faraaz-ai-workflow.md](README-faraaz-ai-workflow.md)** | How I worked inside a governed agent environment — hooks, skills, MCP, the `model_router.py` I built, and where the method fell short |

Both are written to be verified from git history; the commands are in each document.

## Project context

Background material from Prodegee and RMIT, for reference rather than as evidence of my work:

- `ds4-supporting-document-Prodegee.pdf` — Prodegee's brief for the DS4 problem
- `tool-setup.md` · `tool-setup.html` — cohort onboarding checklist

DS4 was one of five teams (DA1, DS1–DS4) contributing evidence signals to a shared pipeline that
groups buildings into *connection points* — sets of buildings sharing a single electricity
connection — and estimates their aggregate demand. My team supplied the building-footprint signal.
The cohort pipeline specification is restricted to participating students and RMIT staff, and is
not included here.

Code and full deliverables live in the `rmit-2026-s1-flows` repository, which is private to
Prodegee and the participating cohort.

**Teammates** — Chaitanya Rathod (polygon generators, DS4-09 Round-1, deduplicated CIV layer) and
Ann Mini Baby (validation, PR review gate). Work attributed to them in the linked documents is
theirs, not mine.
