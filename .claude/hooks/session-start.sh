#!/bin/bash
# SessionStart: get the resume render toolchain ready before it is needed.
#
# A fresh Claude Code on the web container has no LibreOffice Writer, no
# poppler and no Carlito font. Without them a resume cannot be rendered at all,
# and — worse — Calibri silently falls back to a wider face, so every page proof
# lies and content gets cut to fix wraps that do not exist. Installing on demand
# put that discovery in the middle of the job. This front-loads it.
set -uo pipefail

# Remote/web only. A local machine already has its toolchain, and should not
# have apt-get run at it every time a session opens.
if [ "${CLAUDE_CODE_REMOTE:-}" != "true" ]; then
  exit 0
fi

cd "${CLAUDE_PROJECT_DIR:-$(git rev-parse --show-toplevel 2>/dev/null || echo .)}" || exit 0
[ -x ./_build/preflight.sh ] || exit 0

if ./_build/preflight.sh; then
  echo "Resume render toolchain ready: _build/proof.sh will produce a truthful page proof."
else
  echo "WARNING: _build/preflight.sh failed (see above). Do NOT trim resume content to fix"
  echo "line wraps until it passes — with a substituted font every wrap is wrong."
fi
exit 0
