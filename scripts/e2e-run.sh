#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"

cd "$ROOT_DIR"

BASE_URL="${1:-https://selftutor.eu}"
export E2E_BASE_URL="$BASE_URL"

if command -v bun >/dev/null 2>&1; then
  bun run test:e2e
else
  npm run test:e2e
fi
