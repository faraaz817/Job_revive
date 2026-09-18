#!/usr/bin/env bash
# One command from Markdown to a trustworthy page proof.
#
#   _build/proof.sh applications/<Company>_<Role>/resume.md
#
# Runs preflight (hard-fails on a bad font), renders, converts to PDF, measures
# the real geometry, and rasterises both pages. Prints the defects to fix and
# the image paths to open. The images are still the last word — this just makes
# every round before the last one cheap.
set -uo pipefail

BUILD="$(cd "$(dirname "$0")" && pwd)"
SRC="${1:-}"
[ -n "$SRC" ] && [ -f "$SRC" ] || { echo "usage: proof.sh <resume.md>"; exit 2; }
SRC="$(cd "$(dirname "$SRC")" && pwd)/$(basename "$SRC")"
DIR="$(dirname "$SRC")"
OUT="${2:-draft}"
IMG="${SCRATCH:-${TMPDIR:-/tmp}}/resume-proof"

"$BUILD/preflight.sh" || exit 1
echo

# LibreOffice needs a writable profile; a shared one deadlocks on repeat runs.
LOPROF="$(mktemp -d)"; trap 'rm -rf "$LOPROF"' EXIT

echo "rendering $(basename "$SRC")"
node "$BUILD/render_resume.js" "$SRC" "$DIR/$OUT.docx" >/dev/null || {
  echo "  ✗ render_resume.js failed"; exit 1; }

rm -f "$DIR/$OUT.pdf"
timeout 240 soffice -env:UserInstallation="file://$LOPROF" --headless \
  --convert-to pdf "$DIR/$OUT.docx" --outdir "$DIR" >/dev/null 2>&1
[ -f "$DIR/$OUT.pdf" ] || { echo "  ✗ PDF conversion produced nothing"; exit 1; }

echo
python3 "$BUILD/proof.py" "$DIR/$OUT.pdf"; rc=$?

mkdir -p "$IMG"; rm -f "$IMG"/page-*.jpg
pdftoppm -jpeg -r 80 "$DIR/$OUT.pdf" "$IMG/page" >/dev/null 2>&1
echo
echo "  page images (open these before you call it done):"
for f in "$IMG"/page-*.jpg; do [ -e "$f" ] && echo "    $f"; done
exit $rc
