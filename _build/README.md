# Resume renderer

`render_resume.js` turns a resume written in the constrained Markdown format below into a `.docx`
styled like the original template: A4, Calibri 10 pt body, navy `#1F3A5F` headings with a bottom
rule, grey `#444444` meta text, right-tab dates. Single column, no tables — ATS-safe.

```bash
cd _build
npm install                                   # once (installs docx)
node render_resume.js ../base_resume.md ../Faraaz_Mohammed_Resume_Base.docx
soffice --headless --convert-to pdf ../Faraaz_Mohammed_Resume_Base.docx --outdir ..
pdfinfo ../Faraaz_Mohammed_Resume_Base.pdf | grep Pages          # expect 2
```

The Markdown is the source of truth. `base_resume.md` at the repo root is the complete base;
each tailored application has its own `applications/<Company>_<Role>/resume.md`. Edit the
Markdown, never the `.docx`.

## Format

Every line maps to one paragraph style. Blank lines and `---` are ignored; HTML comments are
stripped.

```markdown
# FARAAZ MOHAMMED                          name — centred, navy, 20 pt
Melbourne, VIC  •  0435 …  •  email        header lines (until the first ##) — centred grey 9.5 pt
[text](url)  •  [text](url)                links allowed in header lines
_italic line_                              header line wrapped in _ _ — centred italic grey 9 pt

## Section                                 heading — navy small caps with bottom rule

### Title — Org | Mar 2026 – Jun 2026      title line: bold left, italic grey date right of " | "
### Name · Stack, list | Aug 2026          project line: bold name, grey stack after " · ", date right
> grey meta line                           sub-line under a title — grey 9.5 pt; inline **bold** ok
- bullet text                              bullet — 10 pt; continuation lines indented 2 spaces
↳ Live: [text](url)   ·   GitHub: [..](..) link line — indented, small grey, links navy
**Label:** text                            skill line — bold label, normal text (outside a list)
plain paragraph text                       body paragraph — 10 pt; soft-wrap across lines freely
```

Inline anywhere in body text: `**bold**`, `_italic_` (underscore at a word boundary only — URLs
and `snake_case` are safe), `[text](url)`.

Rules the renderer relies on:
- The first `## ` heading ends the header block.
- A `### ` line is a *project* line if it contains ` · ` (space, middle dot, space), else a *title*
  line. The date is everything after the last ` | `.
- A skill line must start with `**Label:**` — the colon inside the bold.
- Bullets and paragraphs may soft-wrap onto following lines; a bullet's continuation lines must be
  indented by two or more spaces.

## Checking a render

Always render and look before sending — LibreOffice's line breaking is close to Word's but not
identical, and a bullet that fits in Markdown can wrap to three lines on the page:

```bash
pdftoppm -jpeg -r 70 out.pdf /path/to/scratch/page      # then open page-1.jpg, page-2.jpg
```

What to fix: any bullet on three lines, an orphaned last word, a heading stranded at the bottom of
a page, a second page less than half full.
