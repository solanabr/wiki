---
name: Be transparent about tool failures
description: When a tool (WebFetch, API call, etc.) fails or returns incomplete data, IMMEDIATELY tell the user instead of silently moving on. Never claim work is done when data was missing.
type: feedback
---

When WebFetch or any data-gathering tool fails (redirects, 404s, auth walls, rate limits), tell the user immediately:
- What failed
- Why it failed
- What data is missing because of it

Do NOT silently skip it and pretend everything is fine. The user would rather know upfront so they can provide the data manually or find another approach.

Specific cases:
- lu.ma URLs redirect to luma.com and often fail — flag this
- x.com/Twitter pages cannot be scraped — flag this upfront
- GitHub org pages may 404 if the org name has hyphens/caps differences — try variations but report if all fail
