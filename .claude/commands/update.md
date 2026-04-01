---
description: Update solana-claude-config to latest version from upstream
---

Run the update script to pull latest agents, skills, commands, and rules from upstream.

1. Run: `bash .claude/bin/update.sh`
2. Review the output for what changed
3. If CLAUDE.md.upstream was created, diff it with your CLAUDE.md and merge relevant changes
4. Run `git diff` to review all changes before committing
