---
description: Initialize forked template — setup CLAUDE.md and remove config repo scaffolding
---

Initialize a forked solana-claude-config template for use as a project. Sets up CLAUDE.md and removes config repo scaffolding files.

## Step 1: Setup CLAUDE.md

If `CLAUDE.md` doesn't exist (or contains "Meta Configuration" indicating it's the repo maintainer version):
1. Copy `CLAUDE-solana.md` → `CLAUDE.md`
2. Create starter `CLAUDE.local.md` (gitignored, private notes) if it doesn't exist
3. Add `CLAUDE.local.md` to `.gitignore` if not present

If `CLAUDE.md` already exists and looks like a project config (not meta), skip this step.

## Step 2: Create .env if missing

If `.env` doesn't exist but `.env.example` does, copy `.env.example` → `.env` before removing .env.example.

## Step 3: Remove scaffolding

Files/dirs that exist only for maintaining the config repo itself.

**Remove (if they exist):**
- `install.sh` — installer (not needed after fork)
- `update.sh` — deprecation wrapper
- `validate.sh` — config repo validation
- `tests/` — config repo test suite
- `CLAUDE-solana.md` — source template (now copied as CLAUDE.md)
- `QUICK-START.md` — config repo docs
- `README.md` — config repo readme (user should write their own)
- `.github/workflows/ci.yml` — config repo CI (keep claude-code.yml if present)
- `.env.example` — should already be copied to .env

**Preserve (never touch):**
- `.claude/` — entire directory (agents, commands, skills, rules, settings, mcp, bin)
- `CLAUDE.md` — just created/preserved above
- `CLAUDE.local.md` — private notes
- `.gitmodules` — submodule definitions
- `.env` — secrets
- `.gitignore` — ignore rules
- `LICENSE` — keep unless user wants to change
- Any user-created files

## Step 4: Confirm and execute

1. Show the user exactly what will happen (CLAUDE.md setup + files to remove)
2. Wait for user confirmation before proceeding
3. Execute the removals
4. Print summary of what was done
5. Suggest: `git add -A && git commit -m "chore: initialize project from solana-claude-config template"`
