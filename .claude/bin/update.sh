#!/usr/bin/env bash
set -euo pipefail

# Solana Claude Config — In-Place Update
# Fetches latest from upstream and applies updates.
# Safe: backs up CLAUDE.md, preserves .env, shows diff.
#
# Usage:
#   bash .claude/bin/update.sh              # from project root
#   bash .agents/bin/update.sh              # from project root (agents mode)
#   bash .claude/bin/update.sh --dry-run    # preview changes only

REPO_URL="${SOLANA_CLAUDE_UPSTREAM:-https://github.com/solanabr/solana-claude-config.git}"
BRANCH="${SOLANA_CLAUDE_BRANCH:-main}"
DRY_RUN=false
[[ "${1:-}" == "--dry-run" ]] && DRY_RUN=true

# Auto-detect config dir from script location
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
CONFIG_DIR="$(cd "$SCRIPT_DIR/.." && pwd)"
CONFIG_NAME="$(basename "$CONFIG_DIR")"
TARGET_DIR="$(cd "$CONFIG_DIR/.." && pwd)"

# Verify we're in a project with the config dir
if [ ! -d "$TARGET_DIR/$CONFIG_NAME" ]; then
  echo "Error: $CONFIG_NAME/ not found in $TARGET_DIR. Run from your project root."
  exit 1
fi

# Read current version
CURRENT_VERSION="unknown"
[ -f "$TARGET_DIR/$CONFIG_NAME/VERSION" ] && CURRENT_VERSION="$(cat "$TARGET_DIR/$CONFIG_NAME/VERSION")"

TEMP_DIR="$(mktemp -d)"
trap 'rm -rf "$TEMP_DIR"' EXIT

# Fetch upstream
if [ -n "${SOLANA_CLAUDE_LOCAL_SRC:-}" ] && [ -d "$SOLANA_CLAUDE_LOCAL_SRC/.claude" ]; then
  echo "Using local source: $SOLANA_CLAUDE_LOCAL_SRC"
  mkdir -p "$TEMP_DIR/repo"
  cp -r "$SOLANA_CLAUDE_LOCAL_SRC/.claude" "$TEMP_DIR/repo/.claude"
  [ -f "$SOLANA_CLAUDE_LOCAL_SRC/CLAUDE-solana.md" ] && cp "$SOLANA_CLAUDE_LOCAL_SRC/CLAUDE-solana.md" "$TEMP_DIR/repo/CLAUDE-solana.md"
  [ -f "$SOLANA_CLAUDE_LOCAL_SRC/.env.example" ] && cp "$SOLANA_CLAUDE_LOCAL_SRC/.env.example" "$TEMP_DIR/repo/.env.example"
  [ -f "$SOLANA_CLAUDE_LOCAL_SRC/.gitmodules" ] && cp "$SOLANA_CLAUDE_LOCAL_SRC/.gitmodules" "$TEMP_DIR/repo/.gitmodules"
else
  echo "Fetching latest from upstream..."
  git clone --recurse-submodules --depth 1 --branch "$BRANCH" "$REPO_URL" "$TEMP_DIR/repo" 2>&1 | tail -1 || true
fi

# Read new version
NEW_VERSION="unknown"
[ -f "$TEMP_DIR/repo/.claude/VERSION" ] && NEW_VERSION="$(cat "$TEMP_DIR/repo/.claude/VERSION")"

if [ "$CURRENT_VERSION" = "unknown" ]; then
  echo "Installing version tracking (first update)"
else
  echo "Updating v$CURRENT_VERSION → v$NEW_VERSION"
fi
echo ""
echo "Config directory: $CONFIG_NAME/"

# Track changes
CHANGES=""

# Preserved files — never overwrite these
# .env, settings.json, settings.local.json, mcp.json, MEMORY.md, memory/, CLAUDE.local.md

# Directories to update (full update for both modes)
UPDATE_DIRS="agents skills rules commands bin"
echo "Updating: $UPDATE_DIRS"

for dir in $UPDATE_DIRS; do
  SRC="$TEMP_DIR/repo/.claude/$dir"
  DST="$TARGET_DIR/$CONFIG_NAME/$dir"
  if [ -d "$SRC" ]; then
    if [ "$DRY_RUN" = true ]; then
      if ! diff -rq "$SRC" "$DST" >/dev/null 2>&1; then
        CHANGES="$CHANGES  [would update] $CONFIG_NAME/$dir/\n"
      fi
    else
      if ! diff -rq "$SRC" "$DST" >/dev/null 2>&1; then
        CHANGES="$CHANGES  [updated] $CONFIG_NAME/$dir/\n"
      fi
      cp -r "$SRC" "$TARGET_DIR/$CONFIG_NAME/"
    fi
  fi
done

# Update .gitmodules
if [ -f "$TEMP_DIR/repo/.gitmodules" ]; then
  if ! diff -q "$TEMP_DIR/repo/.gitmodules" "$TARGET_DIR/.gitmodules" >/dev/null 2>&1; then
    CHANGES="$CHANGES  [updated] .gitmodules\n"
  fi
  if [ "$DRY_RUN" = false ]; then
    cp "$TEMP_DIR/repo/.gitmodules" "$TARGET_DIR/.gitmodules"
  fi
fi

# Update VERSION
if [ -f "$TEMP_DIR/repo/.claude/VERSION" ]; then
  if [ "$DRY_RUN" = false ]; then
    cp "$TEMP_DIR/repo/.claude/VERSION" "$TARGET_DIR/$CONFIG_NAME/VERSION"
  fi
  CHANGES="$CHANGES  [updated] $CONFIG_NAME/VERSION → $NEW_VERSION\n"
fi

# Update CHANGELOG.md
if [ -f "$TEMP_DIR/repo/.claude/CHANGELOG.md" ]; then
  if [ "$DRY_RUN" = false ]; then
    cp "$TEMP_DIR/repo/.claude/CHANGELOG.md" "$TARGET_DIR/$CONFIG_NAME/CHANGELOG.md"
  fi
  CHANGES="$CHANGES  [updated] $CONFIG_NAME/CHANGELOG.md\n"
fi

# Merge .env.example — append new vars without overwriting user edits
# shellcheck source=_env_merge.sh
source "$SCRIPT_DIR/_env_merge.sh"
if [ -f "$TEMP_DIR/repo/.env.example" ]; then
  if [ "$DRY_RUN" = true ]; then
    # Check if there would be new vars
    if [ -f "$TARGET_DIR/.env.example" ]; then
      local_keys=$(grep -oE '^[A-Z_][A-Z0-9_]*=' "$TARGET_DIR/.env.example" 2>/dev/null || true)
      new_keys=""
      while IFS= read -r line; do
        if [[ "$line" =~ ^([A-Z_][A-Z0-9_]*)= ]]; then
          key="${BASH_REMATCH[1]}"
          if ! echo "$local_keys" | grep -q "^${key}=$"; then
            new_keys="$new_keys $key"
          fi
        fi
      done < "$TEMP_DIR/repo/.env.example"
      if [ -n "$new_keys" ]; then
        CHANGES="$CHANGES  [would add] New env vars in .env.example:$new_keys\n"
      fi
    else
      CHANGES="$CHANGES  [would create] .env.example\n"
    fi
  else
    merge_env_file "$TEMP_DIR/repo/.env.example" "$TARGET_DIR/.env.example"
    if [ -f "$TARGET_DIR/.env" ]; then
      merge_env_file "$TEMP_DIR/repo/.env.example" "$TARGET_DIR/.env"
    fi
    CHANGES="$CHANGES  [merged] .env.example (new vars appended)\n"
  fi
fi

# CLAUDE.md handling — don't overwrite, offer upstream version for manual merge
if [ -f "$TEMP_DIR/repo/CLAUDE-solana.md" ]; then
  if [ -f "$TARGET_DIR/CLAUDE.md" ]; then
    if ! diff -q "$TEMP_DIR/repo/CLAUDE-solana.md" "$TARGET_DIR/CLAUDE.md" >/dev/null 2>&1; then
      if [ "$DRY_RUN" = false ]; then
        cp "$TEMP_DIR/repo/CLAUDE-solana.md" "$TARGET_DIR/CLAUDE.md.upstream"
      fi
      CHANGES="$CHANGES  [notice] New upstream CLAUDE.md available at CLAUDE.md.upstream — review and merge manually\n"
    fi
  else
    if [ "$DRY_RUN" = false ]; then
      cp "$TEMP_DIR/repo/CLAUDE-solana.md" "$TARGET_DIR/CLAUDE.md"
    fi
    CHANGES="$CHANGES  [created] CLAUDE.md\n"
  fi
fi

# Create CLAUDE.local.md if missing
if [ "$DRY_RUN" = false ] && [ ! -f "$TARGET_DIR/CLAUDE.local.md" ]; then
  echo "# Local Notes (gitignored)" > "$TARGET_DIR/CLAUDE.local.md"
  echo "" >> "$TARGET_DIR/CLAUDE.local.md"
  echo "<!-- Claude writes here freely. Private to this machine. -->" >> "$TARGET_DIR/CLAUDE.local.md"
  CHANGES="$CHANGES  [created] CLAUDE.local.md (private notes)\n"
fi

# Update submodules
if [ "$DRY_RUN" = false ]; then
  echo "Updating submodules..."
  (cd "$TARGET_DIR" && git submodule update --init --recursive 2>/dev/null) || echo "Note: Submodule update skipped"
fi

echo ""
if [ "$DRY_RUN" = true ]; then
  echo "=== DRY RUN — no changes written ==="
  echo ""
fi

if [ -n "$CHANGES" ]; then
  echo "Changes:"
  printf "$CHANGES"
else
  echo "Already up to date."
fi

echo ""
if [ -f "$TARGET_DIR/$CONFIG_NAME/CHANGELOG.md" ]; then
  echo "See $CONFIG_NAME/CHANGELOG.md for details on what changed in v$NEW_VERSION"
fi
echo "Update complete!"
