#!/usr/bin/env bash
# Shared helper: merge new env vars into an existing .env/.env.example file.
# Appends only KEY=value lines whose KEY= doesn't already exist in the target,
# along with their preceding comment/blank lines.
#
# Usage: merge_env_file <source> <destination>

merge_env_file() {
  local src="$1" dst="$2"

  if [ ! -f "$dst" ]; then
    cp "$src" "$dst"
    return
  fi

  local comments=""
  local added=false

  while IFS= read -r line || [ -n "$line" ]; do
    if [[ "$line" =~ ^[A-Z_][A-Z0-9_]*= ]]; then
      local key="${line%%=*}"
      if ! grep -q "^${key}=" "$dst"; then
        # Add a blank separator before the first new block
        if [ "$added" = false ]; then
          echo "" >> "$dst"
          added=true
        fi
        # Write accumulated comment lines
        if [ -n "$comments" ]; then
          printf '%s\n' "$comments" >> "$dst"
        fi
        echo "$line" >> "$dst"
      fi
      comments=""
    elif [[ "$line" =~ ^#|^$ ]]; then
      if [ -n "$comments" ]; then
        comments="$comments"$'\n'"$line"
      else
        comments="$line"
      fi
    else
      comments=""
    fi
  done < "$src"
}
