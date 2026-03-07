#!/usr/bin/env bash
set -euo pipefail

if [[ -z "${DEPLOY_HOST:-}" || -z "${DEPLOY_USER:-}" || -z "${DEPLOY_PATH:-}" ]]; then
  echo "Missing DEPLOY_HOST, DEPLOY_USER or DEPLOY_PATH."
  exit 1
fi

if [[ ! -d dist ]]; then
  echo "dist directory not found. Run build first."
  exit 1
fi

RSYNC_SSH="ssh -o StrictHostKeyChecking=no"

rsync -az --delete -e "$RSYNC_SSH" dist/ "${DEPLOY_USER}@${DEPLOY_HOST}:${DEPLOY_PATH}/"

echo "Deployment finished to ${DEPLOY_HOST}:${DEPLOY_PATH}."
