#!/usr/bin/env node
// Renders a resume written in the constrained Markdown format (see README.md) to .docx,
// in the style of the original template: A4, Calibri, navy #1F3A5F headings with a bottom
// rule, grey #444444 meta text, right-tab dates.
//
//   node render_resume.js <resume.md> <out.docx>
//
// The Markdown file is the single source of truth: what you approve is what gets rendered.
const fs = require("fs");
const path = require("path");
const {
  Document, Packer, Paragraph, TextRun, ExternalHyperlink,
  AlignmentType, LevelFormat, BorderStyle, Tab, TabStopType,
} = require("docx");

const [, , IN, OUT] = process.argv;
if (!IN || !OUT) {
  console.error("usage: node render_resume.js <resume.md> <out.docx>");
  process.exit(2);
}

const NAVY = "1F3A5F";
const GREY = "444444";
const RIGHT_EDGE = 11906 - 780 - 780; // usable width in DXA
const rightTab = { tabStops: [{ type: TabStopType.RIGHT, position: RIGHT_EDGE }] };

// ---------- inline parsing: **bold**, _italic_, [text](url) ----------
// Returns TextRun / ExternalHyperlink children. `base` sets size/colour for plain text,
// `linkSize` for link text. Underscores inside words or URLs are left alone: an opening
// `_` must follow start-of-line, whitespace or "(", and a closing `_` must precede
// end-of-line, whitespace or punctuation.
function inline(text, base = {}, linkSize = 18) {
  const runs = [];
  let bold = false, italic = false, buf = "";
  const flush = () => {
    if (!buf) return;
    runs.push(new TextRun({ text: buf, size: 20, ...base, bold: bold || base.bold, italics: italic || base.italics }));
    buf = "";
  };
  const isWs = (c) => c === undefined || /\s/.test(c);
  const isCloser = (c) => c === undefined || /[\s.,;:)\]!?]/.test(c);

  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (c === "[") {
      const close = text.indexOf("](", i);
      const end = close >= 0 ? text.indexOf(")", close + 2) : -1;
      if (close >= 0 && end >= 0) {
        flush();
        runs.push(new ExternalHyperlink({
          link: text.slice(close + 2, end),
          children: [new TextRun({ text: text.slice(i + 1, close), size: linkSize, color: NAVY, underline: {} })],
        }));
        i = end;
        continue;
      }
    }
    if (c === "*" && text[i + 1] === "*") { flush(); bold = !bold; i++; continue; }
    if (c === "_") {
      const prev = text[i - 1], next = text[i + 1];
      if (!italic && (isWs(prev) || prev === "(") && !isWs(next)) { flush(); italic = true; continue; }
      if (italic && isCloser(next)) { flush(); italic = false; continue; }
    }
    buf += c;
  }
  flush();
  return runs;
}

// ---------- block builders ----------
const grey = (text, o = {}) => new TextRun({ text, size: 19, color: GREY, ...o });
const rtab = () => new TextRun({ children: [new Tab()] });

const heading = (text) => new Paragraph({
  spacing: { before: 150, after: 60 },
  border: { bottom: { style: BorderStyle.SINGLE, color: NAVY, size: 6, space: 2 } },
  children: [new TextRun({ text, bold: true, allCaps: true, color: NAVY, size: 22 })],
});

const para = (text) => new Paragraph({ spacing: { after: 60 }, children: inline(text) });

const bullet = (text) => new Paragraph({
  numbering: { reference: "bullets", level: 0 },
  spacing: { after: 24 },
  children: inline(text),
});

// "### Title | Date" — bold left, italic grey date on the right
const titleLine = (title, date, before) => new Paragraph({
  spacing: { before, after: 0 }, ...rightTab,
  children: [
    ...inline(title, { bold: true, size: 21 }),
    rtab(),
    new TextRun({ text: date, italics: true, color: GREY, size: 20 }),
  ],
});

// "### Name · Stack | Date" — bold name, grey stack, date right
const projLine = (name, stack, date, before) => new Paragraph({
  spacing: { before, after: 0 }, ...rightTab,
  children: [
    new TextRun({ text: name, bold: true, size: 21 }),
    new TextRun({ text: `  ·  ${stack}`, color: GREY, size: 19 }),
    rtab(),
    new TextRun({ text: date, italics: true, color: GREY, size: 20 }),
  ],
});

// "> text" — grey meta line under a title (inline bold allowed, e.g. "> **Tools:** …")
const subLine = (text) => new Paragraph({
  spacing: { after: 30 },
  children: inline(text, { size: 19, color: GREY }, 18),
});

// "↳ Live: [..](..) · GitHub: [..](..)" — indented small grey line of links
const linkLine = (text) => new Paragraph({
  spacing: { after: 40 },
  indent: { left: 360 },
  children: [grey("↳ ", { size: 18 }), ...inline(text, { size: 18, color: GREY }, 18)],
});

// "**Label:** text" outside a list — bold label, normal text
const skillLine = (label, text) => new Paragraph({
  spacing: { after: 30 },
  children: [new TextRun({ text: `${label}: `, bold: true, size: 20 }), ...inline(text)],
});

const centered = (children, after = 20) =>
  new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after }, children });

// ---------- parse ----------
const src = fs.readFileSync(IN, "utf8").replace(/<!--[\s\S]*?-->/g, "");
const lines = src.split(/\r?\n/);
const children = [];
let inHeader = true;
let prev = "start"; // what the last emitted block was, for title spacing

// Collect a paragraph/bullet with soft-wrapped continuation lines.
function gather(i, isBullet) {
  let text = isBullet ? lines[i].replace(/^- /, "") : lines[i];
  let j = i + 1;
  while (j < lines.length) {
    const l = lines[j];
    const isCont = isBullet ? /^\s{2,}\S/.test(l) : (l.trim() !== "" && !/^(#|- |> |↳ |\*\*[^*]+:\*\*|---)/.test(l));
    if (!isCont) break;
    text += " " + l.trim();
    j++;
  }
  return [text.trim(), j - 1];
}

for (let i = 0; i < lines.length; i++) {
  const raw = lines[i];
  const line = raw.trim();
  if (line === "" || line === "---") continue;

  if (line.startsWith("# ") && inHeader) {
    children.push(centered([new TextRun({ text: line.slice(2), bold: true, color: NAVY, size: 40 })]));
    continue;
  }
  if (line.startsWith("## ")) {
    inHeader = false;
    children.push(heading(line.slice(3)));
    prev = "heading";
    continue;
  }
  if (inHeader) {
    const m = line.match(/^_(.+)_$/);
    if (m) children.push(centered([...inline(m[1], { italics: true, size: 18, color: GREY }, 18)], 40));
    else children.push(centered(inline(line, { size: 19, color: GREY }, 19)));
    continue;
  }

  if (line.startsWith("### ")) {
    const [left, date = ""] = line.slice(4).split(" | ");
    const before = prev === "heading" ? 60 : 110;
    const dot = left.indexOf(" · ");
    children.push(dot >= 0
      ? projLine(left.slice(0, dot), left.slice(dot + 3), date.trim(), prev === "heading" ? 60 : 90)
      : titleLine(left, date.trim(), before));
    prev = "title";
    continue;
  }
  if (line.startsWith("> ")) { children.push(subLine(line.slice(2))); prev = "sub"; continue; }
  if (line.startsWith("↳ ")) { children.push(linkLine(line.slice(2))); prev = "link"; continue; }
  if (line.startsWith("- ")) {
    const [text, last] = gather(i, true);
    children.push(bullet(text));
    i = last; prev = "bullet";
    continue;
  }
  const sk = line.match(/^\*\*([^*]+):\*\*\s*(.*)$/);
  if (sk) {
    const [text, last] = gather(i, false);
    const m2 = text.match(/^\*\*([^*]+):\*\*\s*([\s\S]*)$/);
    children.push(skillLine(m2[1], m2[2]));
    i = last; prev = "skill";
    continue;
  }
  const [text, last] = gather(i, false);
  children.push(para(text));
  i = last; prev = "para";
}

// ---------- document ----------
const doc = new Document({
  creator: "Faraaz Mohammed",
  title: "Faraaz Mohammed — Resume",
  styles: { default: { document: { run: { font: "Calibri", size: 20 } } } },
  numbering: {
    config: [{
      reference: "bullets",
      levels: [{
        level: 0, format: LevelFormat.BULLET, text: "•", alignment: AlignmentType.LEFT,
        style: { paragraph: { indent: { left: 360, hanging: 220 } } },
      }],
    }],
  },
  sections: [{
    properties: {
      page: {
        size: { width: 11906, height: 16838 },
        margin: { top: 640, right: 780, bottom: 560, left: 780 },
      },
    },
    children,
  }],
});

Packer.toBuffer(doc).then((buf) => {
  fs.mkdirSync(path.dirname(path.resolve(OUT)), { recursive: true });
  fs.writeFileSync(OUT, buf);
  console.log("wrote", OUT);
});
