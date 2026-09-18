# Notes — Arkeus, Data Engineer (Port Melbourne)

Captured 18 Sep 2026. Ad text in `jd.md`. **No resume drafted — see § 1.**

## 1. Fit check

### Hard blockers — two, and the first is absolute

| Signal | Assessment |
| --- | --- |
| **"Eligible for security clearance."** | **Disqualifying.** Australian government security clearances are issued by AGSVA and require **Australian citizenship** — Baseline and above, without exception. Faraaz holds a Temporary Graduate visa (subclass 485): not a citizen, not a permanent resident, and not on a path that makes him clearance-eligible within this role's hiring window. Arkeus is a defence and national-security contractor with deployed capability in US and allied markets, so this is a genuine legal gate, not boilerplate. `au-standards.md` § 6 lists exactly this wording as a hard blocker. |
| **"3+ years of experience in data engineering, data analysis, or a related field."** | **Hard blocker** per `au-standards.md` § 6 (3+ years stated as mandatory). Faraaz has a 4-month AI/ML engineering internship (Mar–Jun 2026) plus study. The ad's closing line — *"apply even if you don't check every box"* — genuinely softens this one. It does **not** soften the clearance requirement, which is a matter of law rather than hiring preference. |

**Verdict: do not apply.** Not "apply and expect a no" — the clearance gate means the application cannot succeed regardless of how the resume reads. Spending an application here has negative expected value: it costs time that converts nowhere.

### On the LinkedIn "Job match is high" badge

The ad was surfaced with LinkedIn Premium's *"Job match is high — your profile and resume match the required qualifications well."*

That signal is matching skills text. **It does not model work rights, visa class, or security-clearance eligibility**, which are the two things that decide this application. Treat a high match score on any defence, government, or cleared-contractor posting as uninformative — the algorithm is confidently wrong about the only criteria that matter here.

This is worth a standing rule for the search, not just this ad.

## 2. Why this is painful — the role content is a strong match

Recorded because it is useful signal for targeting, not to argue for applying anyway. Stripped of the employer, this job description fits Faraaz's evidence considerably better than the eShepherd computer-vision role does.

| Ad criterion | Evidence in `Source/` |
| --- | --- |
| "ETL pipelines for large volumes of … data" | Prodegee: national building layer of **7.2M Overture polygons** prepared into a queryable GeoPackage, wrapped in a Kestra flow for reproducible re-runs. Ran inference across 200 villages in 7 Wilayas. |
| "Exploratory data analysis to understand dataset **quality, coverage, and gaps**" | Almost a verbatim description of the DS4 work: the ±20% sensitivity harness, the IoU evaluation harness with 95% CIs, and the **9 gap villages with zero detections** identified explicitly. |
| "Understand what makes a dataset **ML-ready — labelling, balance, quality checks**" | The 40-case satellite-verified ground-truth set; correcting a published baseline from 6–13% to 37%; publishing a negative result; flagging his own XGBoost 0.816 as agreement-not-accuracy. This is the strongest thing in the portfolio and it maps directly. |
| "Comfortable prototyping quickly in Python (Pandas, Matplotlib or similar)" | Python primary; pandas, scikit-learn, XGBoost, GeoPandas throughout. QGIS spot-check workbooks. |
| "Unstructured or semi-structured data (images, video, sensor data) **is a must**" | **Partial.** Imagery yes — satellite/building-footprint rasters and vector layers, plus the maize leaf-image pipeline and the fire-detection video feed. **Video at scale: gap.** |
| Desirable: "Exposure to computer vision or ML data pipelines" | Yes — published edge-detection paper, OpenCV Haar cascade training, the Canny feature pipeline. |
| Desirable: "Familiarity with **OpenCV**" | Yes, genuinely. |
| Desirable: "Data **versioning** or annotation tooling" | Partial — upstream inputs pinned by commit SHA (`r0-cohort-pin.md`), which is the instinct if not the tooling. No DVC/LakeFS/annotation platform. |
| "**Strong SQL**, managing and querying large datasets" | **Weak.** SQL is listed in `base_resume.md` but no project in `Source/` demonstrates it. The scale work was GeoPandas/Parquet/GeoPackage, not a warehouse. This would be the honest gap to close. |
| Desirable: "Cloud data storage/processing (S3, BigQuery or similar)" | **GAP.** |

**The lesson for targeting: this is the right *kind* of role and the wrong *category* of employer.** Data engineering for ML-ready imagery datasets, with quality and ground truth at the centre, is where Faraaz's evidence is strongest. Defence and national-security employers gate those roles behind citizenship. The same job exists at agtech, earth-observation, medical-imaging, mapping and autonomy companies that do not require clearance — and `au-standards.md` § 7 notes those convert far better for graduates anyway.

Two concrete gaps worth closing before chasing that role type: **demonstrable SQL at scale**, and **any cloud object-storage/warehouse exposure (S3, BigQuery)**. Both are learnable in a weekend project and both appear in nearly every data-engineering ad.

## 3. Changes vs base

None. No resume drafted — the application cannot succeed.

## 4. Status

**Not applied. Blocked at fit check**, before drafting, per `SKILL.md` § 2.

Recorded rather than silently discarded so the tracker shows *why* this one was skipped. A pattern of "skipped: clearance required" across defence postings is exactly the kind of finding the Patterns section exists to surface.

## Log

- **18 Sep 2026** — Ad captured. Fit check stopped before drafting: security-clearance eligibility requires Australian citizenship (485 holder is ineligible), and the ad states 3+ years as mandatory. Role *content* is a strong match — noted in § 2 for targeting. LinkedIn's "high match" badge flagged as not modelling visa or clearance eligibility. Awaiting Faraaz's decision on whether to proceed regardless.
