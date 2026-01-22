#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"

cd "$ROOT_DIR"

if [[ -f "package-lock.json" ]]; then
  echo "Installing Playwright with npm..."
  npm install -D @playwright/test
elif command -v bun >/dev/null 2>&1; then
  echo "Installing Playwright with bun..."
  bun add -d @playwright/test
else
  echo "Installing Playwright with npm..."
  npm install -D @playwright/test
fi

echo "Installing Playwright browsers..."
npx playwright install
