# solana-claude

**GitHub**: [SuperteamBrazil/solana-claude](https://github.com/SuperteamBrazil/solana-claude)
**Status**: Active development, public release
**Maintained by**: @kauenet

## Overview

A comprehensive Claude Code configuration that transforms Claude Code into a specialized Solana development environment. Covers the full stack — from on-chain Rust programs to TypeScript frontends, Unity game clients, and mobile apps.

## Features

### 15 Specialized Agents

Purpose-built agents for every role in the Solana development lifecycle:

- **solana-architect** — System design and architecture decisions
- **anchor-engineer** — Anchor program development
- **pinocchio-engineer** — High-performance programs with Pinocchio
- **defi-engineer** — DeFi protocol implementation
- **solana-frontend-engineer** — TypeScript/React dApp frontends
- **game-architect** — On-chain game design and state planning
- **unity-engineer** — Unity/C# development with Solana SDK
- **mobile-engineer** — React Native and Expo for Solana mobile
- **rust-backend-engineer** — Off-chain Rust services
- **devops-engineer** — Infrastructure, CI/CD, deployment
- **token-engineer** — Token creation, extensions, and management
- **solana-researcher** — Ecosystem research and analysis
- **solana-qa-engineer** — Testing and quality assurance
- **tech-docs-writer** — Technical documentation
- **solana-guide** — Developer onboarding and education

### 24+ Slash Commands

Automated workflows accessible via slash commands:

- `/build-program` — Build and verify Solana programs
- `/audit-solana` — Security audit for on-chain code
- `/profile-cu` — Compute unit profiling
- `/deploy` — Devnet and mainnet deployment
- `/scaffold` — Project scaffolding
- `/test-rust` — Rust test runner
- `/test-ts` — TypeScript test runner
- `/quick-commit` — Branch creation and commit automation
- `/diff-review` — Code review and AI slop detection
- `/setup-mcp` — MCP server configuration

### 6 MCP Server Integrations

- **Helius** — 60+ tools for RPC, DAS API, webhooks, priority fees, and token metadata
- **solana-dev** — Solana Foundation official MCP with docs, guides, and API references
- **Context7** — Up-to-date library documentation lookup
- **Puppeteer** — Browser automation for dApp testing
- **context-mode** — Compresses large RPC responses and build logs to save context
- **memsearch** — Persistent memory across sessions with semantic search

### Language-Specific Rules

Enforced coding standards for each language in the stack:

- **Rust** — Checked arithmetic, error handling, no `unwrap()` in production
- **Anchor** — Account validation, PDA management, CPI safety
- **Pinocchio** — Zero-copy patterns, manual validation, CU optimization
- **TypeScript** — Type safety, async patterns, wallet integration
- **C#/.NET** — Unity conventions, .NET standards, serialized fields

### Agent Team Patterns

Pre-configured multi-agent workflows:

- **program-ship** — Design, implement, test, and deploy a program
- **full-stack** — End-to-end development from program to frontend
- **audit-and-fix** — Security audit with automated remediation
- **game-ship** — Game development pipeline
- **research-and-build** — Research-driven implementation
- **defi-compose** — DeFi protocol composition
- **token-launch** — Token creation and launch workflow

## Tech Stack

- Claude Code
- MCP Protocol
- Shell scripting
