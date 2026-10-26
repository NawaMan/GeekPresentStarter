#!/usr/bin/env bash
# Build the site into build/ (what the Pages workflow publishes).
# Arguments go to vite build.
source "$(dirname "$0")/_booth.sh"

pnpm build "$@"
