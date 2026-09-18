#!/usr/bin/env bash
# Verify (and where possible install) everything needed to render a resume
# truthfully. Run this BEFORE drafting, not after.
#
# The font check is the point of this script. If Calibri resolves to a
# substitute wider than itself, LibreOffice still renders happily — every line
# wraps early, the base resume comes out 3 pages instead of 2, and bullets look
# like they run to a third line when they do not. A page proof taken in that
# state is worse than no proof: it invites you to cut real content to fix wraps
# that do not exist. So a bad font resolution is a hard failure here, never a
# warning.
set -uo pipefail

ok=0
say()  { printf '  %s %s\n' "$1" "$2"; }
fail() { say '✗' "$1"; ok=1; }
SUDO=''; [ "$(id -u)" -ne 0 ] && command -v sudo >/dev/null && SUDO=sudo

apt_install() {  # apt_install <pkg...>; refreshes the index once on failure
  command -v apt-get >/dev/null || return 1
  $SUDO apt-get install -y --no-install-recommends "$@" >/dev/null 2>&1 && return 0
  $SUDO apt-get update -qq >/dev/null 2>&1
  $SUDO apt-get install -y --no-install-recommends "$@" >/dev/null 2>&1
}

echo "preflight: render toolchain"

# 1. Node and the renderer's dependencies.
if command -v node >/dev/null; then
  say '✓' "node $(node --version)"
  if [ ! -d "$(dirname "$0")/node_modules" ]; then
    say '·' 'installing renderer dependencies (npm install)'
    (cd "$(dirname "$0")" && npm install --silent >/dev/null 2>&1) \
      || fail 'npm install failed'
  fi
  [ -d "$(dirname "$0")/node_modules" ] && say '✓' 'renderer dependencies present'
else
  fail 'node not found — install Node.js'
fi

# 2. LibreOffice, AND its Writer module. A LibreOffice install without Writer
#    converts nothing and reports only "source file could not be loaded",
#    which reads like a corrupt .docx rather than a missing component.
if command -v soffice >/dev/null; then
  if ls /usr/lib/libreoffice/program/libswlo.so >/dev/null 2>&1 \
     || soffice --version >/dev/null 2>&1 && [ "$(uname)" = Darwin ]; then
    say '✓' 'libreoffice with writer'
  elif ls /usr/lib/libreoffice/program/libswlo.so >/dev/null 2>&1; then
    say '✓' 'libreoffice with writer'
  else
    say '·' 'libreoffice present but Writer module missing — installing'
    apt_install libreoffice-writer && say '✓' 'libreoffice-writer installed' \
      || fail 'could not install libreoffice-writer'
  fi
else
  say '·' 'installing libreoffice-writer'
  apt_install libreoffice-writer && say '✓' 'libreoffice-writer installed' \
    || fail 'libreoffice not found and could not be installed'
fi

# 3. poppler — needed to count pages, measure geometry and rasterise proofs.
missing=()
for t in pdftotext pdftoppm pdfinfo; do
  command -v "$t" >/dev/null || missing+=("$t")
done
if [ ${#missing[@]} -gt 0 ]; then
  say '·' "installing poppler-utils (missing: ${missing[*]})"
  apt_install poppler-utils && say '✓' 'poppler-utils installed' \
    || fail "poppler-utils missing: ${missing[*]}"
else
  say '✓' 'poppler-utils'
fi

# 4. THE FONT. Calibri, or metric-compatible Carlito. Anything else is fatal.
font_ok() {
  command -v fc-match >/dev/null || return 2
  case "$(fc-match Calibri 2>/dev/null)" in
    *Carlito*|*calibri*|*Calibri*) return 0 ;;
    *) return 1 ;;
  esac
}
font_ok; rc=$?
if [ $rc -eq 2 ]; then
  say '!' 'fc-match unavailable — cannot verify the font resolves to Calibri/Carlito.'
  say ' ' 'On macOS LibreOffice bundles Carlito, so this is usually fine; confirm'
  say ' ' 'the base resume renders as 2 pages before trusting any page proof.'
elif [ $rc -eq 1 ]; then
  say '·' "Calibri resolves to $(fc-match Calibri) — installing Carlito"
  if apt_install fonts-crosextra-carlito || {
       command -v brew >/dev/null && brew install --cask font-carlito >/dev/null 2>&1; }; then
    fc-cache -f >/dev/null 2>&1
    font_ok && say '✓' "Calibri -> $(fc-match Calibri)" \
      || fail "Calibri still resolves to $(fc-match Calibri) — page proofs would be WRONG"
  else
    fail "could not install Carlito; Calibri resolves to $(fc-match Calibri) — page proofs would be WRONG"
  fi
else
  say '✓' "Calibri -> $(fc-match Calibri)"
fi

if [ $ok -ne 0 ]; then
  echo
  echo "preflight FAILED — do not render or proof until the above is fixed."
  exit 1
fi
echo
echo "preflight ok"
