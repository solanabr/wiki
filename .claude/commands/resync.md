---
description: Resync external skill submodules to latest upstream versions
---

Run the resync script to update all external skill submodules and verify integrity.

1. Run: `bash .claude/bin/resync.sh`
2. Review submodule changes and verify all skill paths resolve
3. Run `git add .gitmodules .claude/skills/ext/` and commit to lock updates
