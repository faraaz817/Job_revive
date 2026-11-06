# Notes — Shield AI, Engineer II, Deep Learning (R5178)

Captured 6 Nov 2026. Full ad text in `jd.md` (pasted from LinkedIn).

## 1. Fit check

**Citizen/PR-only:** not stated in the ad, so not flagged (user rule, 6 Nov 2026). Shield AI is defence tech; a clearance or citizenship question may still come up at screening.

Notes (not stops):
- Experience asked: "< 1 year" industry, entry level. Fits.
- Melbourne, on-site. Fits.
- **Core technical requirement is a gap** — see below.

## 2. Criteria → evidence map

| Criterion (ad's words) | Evidence | Where |
| --- | --- | --- |
| Delivering deep-learning-based solutions to computer vision problems | **Partial.** CV yes (Haar cascade detector trained end to end; 15,000-image classification paper, best Sobel + MLP 94.75%). Deep learning on images: **GAP**. | Fire Detection; Publication |
| CNNs and/or transformers for classification, recognition or segmentation | **GAP — not added.** Transformer fine-tuning exists only for an LLM (Gemma QLoRA), stated as such. Coursework: RMIT Computer Vision; KMIT Artificial Neural Networks & Deep Learning. | Gemma; Education |
| Implementing novel DL architectures in TensorFlow / Caffe / PyTorch | **GAP — not added.** No PyTorch/TensorFlow anywhere in `Source/`. | — |
| Real-time perception on the edge; deploy AI stack to edge devices | Partial: real-time camera loop, latency-driven model choice on a 4 GB / 2.9 GHz CPU spec; local inference via GGUF/Ollama. No edge hardware (Jetson/NPU). | Fire Detection; Gemma |
| Tools to scale deep learning operations | Evaluation harnesses, reproducible re-runs pinned by SHA, Kestra pipeline, GitHub Actions CI | Prodegee; MGM |
| Stay abreast with literature; R&D | Peer-reviewed publication; published negative result | Publication; Prodegee |
| Bachelors/Master in CS or related | Master of AI (RMIT); B.Tech IT | Education |
| Collaboration with other engineers | Team DS4: led 3 of 10 assignments, 7 peer reviews | Prodegee |

**3 of 8 evidenced, 3 partial, 2 gaps** — and the gaps (CNN/transformer vision, PyTorch/TensorFlow) are the technical core.

## 3. Changes vs base
- Profile rewritten for CV/deep learning wording; ends with the ad's title.
- Key Projects and Publication moved above Experience (the CV evidence lives there, not in the internship).
- Skills: Computer Vision line first; Geospatial, Android, Software lines dropped.
- Prodegee 7 of 8 bullets (router dropped), eval-first order. Vayaa 2 bullets. Amart 1.
- Projects: Fire Detection, Gemma (reframed around the fine-tune), MGM inline (CI). Time Flow, Bro, NeuroVisualZ, IBM Z, agent skills dropped.

## Log
- **2026-11-06** — JD captured; drafted; proofed (2 pages, no defects, page 2 51%); rendered `Faraaz_Mohammed_Resume_Shield-AI_Engineer-II-Deep-Learning.pdf`. Status **Ready**.
