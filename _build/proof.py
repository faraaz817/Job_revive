#!/usr/bin/env python3
"""Geometric proof of a rendered resume PDF.

Reads the PDF's real text geometry (pdftotext -bbox-layout) and reports the
defects the tailor-resume skill cares about, so the layout is checked by
measurement rather than by eye. Looking at the pages is still the last step;
this makes every iteration before it cheap and unambiguous.

Exit status: 0 clean, 1 defects found, 2 could not run.
"""
import re
import subprocess
import sys
import xml.etree.ElementTree as ET

# Page geometry the renderer sets (render_resume.js): A4, margins in DXA/1440 in.
TOP_MARGIN_PT = 640 / 1440 * 72
BOTTOM_MARGIN_PT = 560 / 1440 * 72
MAX_BULLET_LINES = 2       # au-standards.md: achievement bullets <= 2 rendered lines
# Key Projects also carries dense inline entries of the shape "**Label:** text".
# base_resume.md runs those to 3 lines by convention, so they get their own limit
# rather than being trimmed to match achievement bullets.
MAX_INLINE_ENTRY_LINES = 3
INLINE_ENTRY = re.compile(r"^[\u2022\u2023]\s+\S.{0,70}?:\s")
MIN_LAST_PAGE_FILL = 0.50  # a final page under half full reads as padding
ORPHAN_FRAC = 0.22         # a true orphan is a word or two alone on the last
                           # line; 40% of the column reads fine, so keep this low
                           # or the check nags at every acceptable short tail
BULLET_GLYPHS = ("•", "‣")


def load(pdf):
    try:
        out = subprocess.run(["pdftotext", "-bbox-layout", pdf, "-"],
                             capture_output=True, text=True, check=True).stdout
    except FileNotFoundError:
        sys.exit("proof: pdftotext not found — run _build/preflight.sh")
    except subprocess.CalledProcessError as e:
        sys.exit(f"proof: pdftotext failed on {pdf}: {e.stderr.strip()}")
    # Strip the XHTML doctype/namespace so ElementTree can parse it plainly.
    out = re.sub(r"<\?xml[^>]*\?>|<!DOCTYPE[^>]*>", "", out)
    out = out.replace(' xmlns="http://www.w3.org/1999/xhtml"', "")
    return ET.fromstring(out)


def pages(root):
    for page in root.iter("page"):
        h = float(page.get("height"))
        w = float(page.get("width"))
        blocks = []
        for block in page.iter("block"):
            lines = []
            for line in block.iter("line"):
                words = [w_.text or "" for w_ in line.iter("word")]
                lines.append({
                    "text": " ".join(words),
                    "xMin": float(line.get("xMin")), "xMax": float(line.get("xMax")),
                    "yMin": float(line.get("yMin")), "yMax": float(line.get("yMax")),
                })
            if lines:
                blocks.append(lines)
        yield {"h": h, "w": w, "blocks": blocks}


def analyse(pdf):
    pg = list(pages(load(pdf)))
    if not pg:
        sys.exit(f"proof: no text found in {pdf}")
    defects, notes = [], []
    notes.append(f"pages: {len(pg)}")

    for i, p in enumerate(pg, 1):
        lines = [ln for b in p["blocks"] for ln in b]
        if not lines:
            continue
        body_bottom = p["h"] - BOTTOM_MARGIN_PT
        usable = body_bottom - TOP_MARGIN_PT
        fill = (max(ln["yMax"] for ln in lines) - TOP_MARGIN_PT) / usable
        notes.append(f"page {i}: {len(lines)} lines, {fill:.1%} full")
        if i == len(pg) and len(pg) > 1 and fill < MIN_LAST_PAGE_FILL:
            defects.append(
                f"page {i} is only {fill:.1%} full (want >={MIN_LAST_PAGE_FILL:.0%}) "
                f"— restore content rather than leaving it looking like padding")

        # A heading stranded at the foot of a page: the page ends on a lone
        # short line that is not itself list content or a trailing link line,
        # and the next page opens with bullets — i.e. the heading's own body.
        if i < len(pg) and pg[i]["blocks"]:
            last = p["blocks"][-1]
            nxt = pg[i]["blocks"][0][0]["text"]
            if (len(last) == 1 and len(last[0]["text"]) < 60
                    and not last[0]["text"].startswith(BULLET_GLYPHS + ("↳",))
                    and nxt.startswith(BULLET_GLYPHS)):
                defects.append(
                    f"page {i} ends on a lone short line with its content on "
                    f"page {i+1} — stranded heading: {last[0]['text'][:60]!r}")

    # Bullets: LibreOffice groups CONSECUTIVE list items into one block, so a
    # block is split into bullets at each line that opens with the glyph.
    idx = 0
    for i, p in enumerate(pg, 1):
        for block in p["blocks"]:
            groups, cur = [], None
            for ln in block:
                if ln["text"].startswith(BULLET_GLYPHS):
                    cur = [ln]
                    groups.append(cur)
                elif cur is not None:
                    cur.append(ln)
            for g in groups:
                idx += 1
                n, head = len(g), g[0]["text"][:64]
                inline = bool(INLINE_ENTRY.match(g[0]["text"]))
                limit = MAX_INLINE_ENTRY_LINES if inline else MAX_BULLET_LINES
                if n > limit:
                    kind = "inline entry" if inline else "bullet"
                    defects.append(
                        f"page {i}: {kind} runs {n} lines (max {limit}): {head!r}")
                elif n > 1:
                    # Orphan: a wrapped bullet whose final line is nearly empty.
                    width = max(l["xMax"] for l in g) - min(l["xMin"] for l in g)
                    tail = g[-1]["xMax"] - g[-1]["xMin"]
                    if width and tail / width < ORPHAN_FRAC:
                        defects.append(
                            f"page {i}: bullet ends in an orphan "
                            f"({g[-1]['text'][:30]!r}): {head!r}")
    notes.append(f"bullets: {idx}")

    # A bullet split across a page break: last block of page N and first of
    # N+1 both bullets is fine; the defect is one bullet's lines being split,
    # which pdftotext shows as a bullet block ending a page and a
    # continuation block (no bullet glyph, indented) opening the next.
    for i in range(len(pg) - 1):
        if not pg[i]["blocks"] or not pg[i + 1]["blocks"]:
            continue
        prev_last = pg[i]["blocks"][-1]
        nxt_first = pg[i + 1]["blocks"][0]
        if prev_last[0]["text"].startswith("•") and \
           not nxt_first[0]["text"].startswith("•") and \
           nxt_first[0]["xMin"] > pg[i + 1]["w"] * 0.1:
            defects.append(
                f"a bullet is split across the page {i+1}/{i+2} break: "
                f"{prev_last[0]['text'][:50]!r}")
    return notes, defects


def main():
    if len(sys.argv) != 2:
        sys.exit("usage: proof.py <rendered.pdf>")
    notes, defects = analyse(sys.argv[1])
    print("\n".join("  " + n for n in notes))
    if defects:
        print("\nDEFECTS (" + str(len(defects)) + "):")
        for d in defects:
            print("  ✗ " + d)
        return 1
    print("\n  ✓ no layout defects found — now LOOK at the page images")
    return 0


if __name__ == "__main__":
    sys.exit(main())
