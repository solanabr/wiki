# Other Projects

Smaller and supporting projects maintained by Superteam Brazil.

**Maintained by**: @kauenet

---

## solana-glossary

**GitHub**: [solanabr/solana-glossary](https://github.com/solanabr/solana-glossary)

The most comprehensive Solana ecosystem glossary — 1,059 enriched terms across 14 categories, in English, Portuguese, and Spanish. Ships as an npm SDK and MCP server ([@stbr/solana-glossary](https://www.npmjs.com/package/@stbr/solana-glossary)) plus a web app (Solana Dev Copilot — a Vite + React glossary browser with an AI copilot).

Useful for onboarding developers, powering AI agents with correct terminology, and keeping documentation consistent.

---

## solana-skills

**GitHub**: [solanabr/solana-skills](https://github.com/solanabr/solana-skills)

Fork of [qedgen/solana-skills](https://github.com/qedgen/solana-skills) — QEDGen's agent skill for formally verifying Solana programs with Lean 4 proofs, vendored as a submodule of Solana AI Kit.

Upstream QEDGen takes a declarative spec of a program's guarantees and generates verification artifacts from it: property tests, Kani model-checking harnesses, and Lean 4 formal proofs. It supports Anchor, Pinocchio, and sBPF assembly, and can audit existing programs to surface candidate invariants.

---

## solana-dev-skill

**GitHub**: [solanabr/solana-dev-skill](https://github.com/solanabr/solana-dev-skill)

The foundation Claude Code skill for general Solana development. Provides baseline rules, commands, and agent configurations that [solana-claude](solana-claude.md) builds upon.

This skill covers the core development loop — build, format, lint, test, deploy — along with security principles and Solana-specific coding standards for Rust and TypeScript.

---

## auditor-skill

**GitHub**: [solanabr/auditor-skill](https://github.com/solanabr/auditor-skill)

An agentic security-audit skill for Solana programs that models the full audit-firm lifecycle: scoping, review, an executable proof-of-concept for each finding, and a delivered fix patch. It runs 1,346 checks across 20 checklists and screens against 131 real-world attack vectors, backed by a Rust pre-scanner and cross-audit memory so repeated engagements get sharper over time.

Use it before shipping any program to mainnet — it complements, but does not replace, a professional third-party audit.

---

## solana-builder-mcp

**GitHub**: [solanabr/solana-builder-mcp](https://github.com/solanabr/solana-builder-mcp)

A single MCP server that packages the major Superteam Brazil skills and ecosystem integrations into one safe distribution. Instead of wiring up individual skills and servers, builders point their AI assistant at one endpoint and get the curated toolset — useful for editors and agents that support MCP but not Claude Code's skill system.

---

## hacker-brainstorm

**GitHub**: [solanabr/hacker-brainstorm](https://github.com/solanabr/hacker-brainstorm)

A brainstorm assistant for Solana hackathons. It interviews you about your skills and interests, cross-references past winning projects and current ecosystem gaps, and helps you converge on an idea worth building — the same process covered in [Tips for Generating Ideas](../hackathon/tips-and-ideas.md), packaged as an agent skill.

---

## solana-iceberg

**GitHub**: [solanabr/solana-iceberg](https://github.com/solanabr/solana-iceberg)

An interactive Solana glossary structured as a knowledge iceberg — surface-level terms every user knows at the top, protocol internals at the depths. It complements [solana-glossary](#solana-glossary) with a visual, exploratory way to map how deep your Solana knowledge goes and what to learn next.

---

## content-gen-skill

**GitHub**: [solanabr/content-gen-skill](https://github.com/solanabr/content-gen-skill)

A Claude Code skill for producing educational Solana/Web3 content in eight forms — courses, tutorials, walkthroughs, explainers, essays, litepapers, slide specs, and social threads — from a topic, audience, and notes. Courses emit a validated filesystem of per-lesson briefs, and when its sibling [writer-style-skill](https://github.com/solanabr/writer-style-skill) is installed, prose is routed through its voice engine. This is the tooling behind much of Superteam Brazil's educational content pipeline.
