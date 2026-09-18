---
name: proof-resume
description: Render a resume Markdown file to PDF and prove the page layout is sound — toolchain preflight, font-substitution guard, geometric defect report, page images. Use before showing any resume to the user, whenever a render looks wrong (3 pages instead of 2, bullets wrapping oddly), when setting up this repo on a new machine, or when re-rendering base_resume.md. The tailor-resume skill calls this at its render-check step.
---

# Proof a resume render

```bash
_build/proof.sh applications/<Company>_<Role>/resume.md   # or base_resume.md
```

One command: preflight → render → PDF → geometric report → page images. Exit 0 means no
measurable defects. **Exit 0 is not the finish line — open the page images it prints.** The
report catches what is countable; only your eyes catch what is ugly.

## Why this exists

A tailored resume once took an hour instead of ten minutes, and the document was *worse*
halfway through than when it started. Three failures, in order of cost:

1. **The font substituted silently.** The renderer sets Calibri. Carlito (metric-compatible)
   was not installed, so LibreOffice fell back to DejaVu Sans, which is wider. Everything
   still rendered. But every line wrapped early, bullets appeared to run to a third line,
   and `base_resume.md` came out 3 pages instead of 2. Content was then cut to fix wraps
   **that did not exist**, which left page 2 at 40% — under the half-full rule — and the
   trims all had to be reverted once the font was installed.
2. **The toolchain was missing and found late.** LibreOffice was installed without its
   Writer module; it reports only `source file could not be loaded`, which reads like a
   corrupt `.docx`. poppler was absent too, so nothing could be counted or rasterised. All
   discovered *after* drafting.
3. **The proof loop was slow.** Render, convert, rasterise, read two images, edit, repeat —
   four full cycles, each several tool calls, and defects were still missed by eye (a
   three-line bullet on a page that had been called clean, twice).

So: the font check is a **hard failure**, preflight runs **before** drafting, and the
measurable defects are measured rather than eyeballed.

## The one rule

**Never trim content to fix a wrap until `preflight.sh` has passed.** A bad font makes every
wrap a lie, and trimming against a lie destroys real evidence — country names, tool lists,
a whole bullet — that then has to be reconstructed. If a render looks unexpectedly long,
suspect the font before the text. `fc-match Calibri` must print Calibri or Carlito.

## What the report means

| Line | Meaning |
| --- | --- |
| `pages: N` | Must be 2. One page is a US convention; three is over. |
| `page N: … 51.1% full` | Fill of the last page. Under 50% reads as padding — **restore content, do not shrink the document.** |
| `bullet runs N lines (max 2)` | An achievement bullet wrapping past 2 lines. Split it or cut it — see `au-standards.md` § 5 for the before/after register. |
| `inline entry runs N lines (max 3)` | A dense `**Label:** …` entry in Key Projects. These run to 3 by convention in `base_resume.md`; 4 is too many. |
| `bullet ends in an orphan` | A word or two alone on the final line. Lengthen the tail or shorten the bullet — either works, whichever reads better. |
| `stranded heading` | A page ends on a lone heading whose bullets are overleaf. Move content across, don't leave the heading hanging. |
| `bullet is split across the page break` | One bullet's lines straddle two pages. Always fix. |

## Working the loop

Fixes interact — this is the part that wastes time if you fight it instead of iterating:

- Trimming a **page 1** bullet frees space that pulls the next bullet up, which can split it
  across the page break. Trimming a **page 2** bullet only shortens page 2.
- So a three-line bullet on page 1 and a thin page 2 pull in opposite directions. Resolve it
  by **adding** a relevant bullet from `base_resume.md` rather than by shaving words: the
  criteria map in `notes.md` says which one earns its place.
- Re-run `proof.sh` after each edit. It takes seconds; guessing does not.

## If preflight fails

It installs what it can (`libreoffice-writer`, `poppler-utils`, `fonts-crosextra-carlito`)
and fails loudly otherwise. On a machine with no package manager access, render anywhere
Calibri or Carlito is genuinely present — do **not** proceed and proof anyway. A proof taken
with the wrong font is worse than no proof, because it will be acted on.

macOS: LibreOffice bundles Carlito, so `fc-match` may be unavailable while the render is
still correct. Confirm by rendering `base_resume.md` — it must come out at **2 pages**. If it
is 3, the font is wrong.

## Files

| Path | What it does |
| --- | --- |
| `_build/preflight.sh` | Checks and installs node deps, LibreOffice **with Writer**, poppler, and the Calibri/Carlito resolution. Hard-fails on a bad font. |
| `_build/proof.py` | Reads the PDF's real text geometry (`pdftotext -bbox-layout`) and reports the defects above. Thresholds are constants at the top. |
| `_build/proof.sh` | Runs all of it and prints the page image paths. |

Rendering the **final, named** deliverable is still `tailor-resume` § 7's job and still needs
the user's explicit approval. `proof.sh` writes `draft.docx`/`draft.pdf`, which `.gitignore`
keeps out of the repo along with everything else under `applications/*/`.
