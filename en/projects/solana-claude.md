# Solana AI Kit

**GitHub**: [solanabr/solana-ai-kit](https://github.com/solanabr/solana-ai-kit)
**Status**: Active development, public release
**Maintained by**: @kauenet

## Why It Exists

AI coding assistants have a Solana problem. Their training data is months or years behind a fast-moving ecosystem, which means they produce code that looks right but isn't: unchecked arithmetic that silently overflows, missing account owner validation, deprecated web3.js 1.x patterns when the project uses @solana/kit, hallucinated API signatures for Anchor versions that no longer exist. The AI confidently writes the wrong thing, and the developer has to know enough to catch it.

The second problem is context waste. A general-purpose assistant loads everything and filters nothing. Asking about a Pinocchio CPI pattern pulls in irrelevant React knowledge. Asking about token metadata loads game development rules. Every token spent on context that does not apply to the current task is a token that cannot go toward solving the actual problem.

Solana AI Kit (formerly solana-claude-config) solves both. It is an AI-coding configuration — Claude Code and Codex compatible — that encodes deep Solana domain knowledge (current APIs, correct security patterns, language-specific rules) and delivers that knowledge efficiently through a token-aware architecture. The right context loads for the right task, and nothing else does.

## Design Philosophy

The configuration is built around a single principle: load only what the current work requires.

**Short CLAUDE.md** (~110 lines) as user-message context. Only essential rules, security principles, and workflow instructions live here. The file ships as a token budget, not a reference manual.

**Progressive skill loading** via `.claude/skills/`. Specialized knowledge — DeFi protocol patterns, game development conventions, security audit checklists — loads on demand through slash commands or agent invocations, not on every prompt.

**Lazy rule loading** via `.claude/rules/`. Language-specific standards load only when working in that language. The Rust rules are invisible during a TypeScript refactor. The C# rules are invisible during an Anchor program audit.

**Agent-scoped context.** Each of the 15 agents carries only the tools and knowledge relevant to its role. The unity-engineer has C#/.NET rules and Solana.Unity-SDK patterns. The pinocchio-engineer has zero-copy patterns and manual validation. Neither carries the other's context.

**CLAUDE.local.md** for scratch notes. Private, gitignored, written by Claude during sessions. Project observations and session summaries that should not be shared with the team.

**Monorepo support.** Subdirectory CLAUDE.md files for scoped architecture decisions. Claude Code loads them automatically when working in that directory.

## What You Get

### 15 Specialized Agents

| Agent | Purpose |
|---|---|
| solana-architect | System design, account structures, PDA schemes, cross-program composability |
| anchor-engineer | Anchor program development with IDL generation and standardized patterns |
| pinocchio-engineer | CU optimization with zero-copy framework (80–95% CU reduction vs Anchor) |
| defi-engineer | DeFi protocol integration — Jupiter, Drift, Kamino, Raydium, Orca, Meteora |
| solana-frontend-engineer | React/Next.js dApp frontends with wallet adapter integration |
| game-architect | On-chain game design, Unity architecture, PlaySolana ecosystem |
| unity-engineer | Unity/C# with Solana.Unity-SDK, wallet integration, NFT display |
| mobile-engineer | React Native and Expo for Solana mobile dApps |
| rust-backend-engineer | Async Rust services with Axum/Tokio for Solana backends |
| devops-engineer | CI/CD, Docker, monitoring, RPC management, Cloudflare Workers |
| token-engineer | Token-2022 extensions, token economics, transfer hooks, compliance |
| solana-researcher | Deep research on protocols, SDKs, and ecosystem tools |
| solana-qa-engineer | Testing (Mollusk, LiteSVM, Surfpool, Trident), CU profiling, fuzzing |
| tech-docs-writer | READMEs, API docs, integration guides, architecture documentation |
| solana-guide | Developer education, tutorials, learning paths |

### 30 Workflow Commands

**Building**
- `/build-program` — Build and verify Solana programs
- `/scaffold` — Project scaffolding from templates
- `/build-app` — Full-stack application setup
- `/build-unity` — Unity game project scaffolding

**Testing and Quality**
- `/test-rust` — Rust test runner with coverage
- `/test-ts` — TypeScript test runner
- `/test-dotnet` — .NET/Unity test runner
- `/test-and-fix` — Run tests and automatically fix failures
- `/audit-solana` — Security audit for on-chain code
- `/profile-cu` — Compute unit profiling and optimization
- `/benchmark` — Performance benchmarking
- `/diff-review` — Code review and AI slop detection
- `/audit-infra` — Infrastructure-first security audit: secrets, supply chain, CI/CD, LLM/skill security, OWASP, STRIDE
- `/product-review` — Product quality review with an 8-dimension scorecard
- `/debug-user-tx` — Replay a user's failing transaction against forked cluster state and map the error to source

**Deployment**
- `/deploy` — Devnet and mainnet deployment with confirmation gates
- `/setup-ci-cd` — CI/CD pipeline configuration
- `/setup-mcp` — MCP server configuration and key management

**Workflow**
- `/quick-commit` — Branch creation and commit automation
- `/explain-code` — Explain unfamiliar Solana patterns
- `/write-docs` — Generate documentation from source
- `/plan-feature` — Architecture planning before implementation
- `/generate-idl-client` — TypeScript client generation from IDL
- `/migrate-web3` — Migrate web3.js 1.x code to @solana/kit
- `/update` — Update configuration and skills to latest
- `/resync` — Resync agent and rule definitions
- `/cleanup` — Remove stale context and temporary files
- `/commit-claude-config` — Version the kit configuration in git
- `/doctor` — Read-only health check for the dev environment and config, with one fix-it command per failure
- `/dream` — Memory consolidation: dedupe, prune, and re-rank session learnings

### 18 External Skill Submodules

Each submodule is a git submodule sourced from an authoritative provider, keeping domain knowledge current without embedding it directly into the configuration.

| Submodule | Source | Purpose |
|---|---|---|
| solana-dev | Solana Foundation | Official Solana development patterns — programs, frontend, testing, security |
| sendai | SendAI | DeFi protocol integrations — Jupiter, Raydium, Kamino, perps, cross-chain, oracles |
| solana-game | Superteam Brazil | Unity game development for Solana — PlaySolana, PSG1 |
| cloudflare | Cloudflare | Edge infrastructure — Workers, Agents SDK, MCP servers |
| trailofbits | Trail of Bits | Security auditing and vulnerability scanning |
| qedgen | QEDGen | Formal verification with Lean 4 theorem proving |
| solana-mobile | Solana Mobile | Mobile Wallet Adapter, Genesis Token, SKR address resolution |
| colosseum | Colosseum | Startup research, idea validation, hackathon projects |
| safe-solana-builder | Community | Security-first code generation with 70+ audit-derived rules |
| vercel | Vercel | Vercel deployment, Next.js, AI SDK, v0, edge functions |
| solana-new | SendAI | Idea-to-launch journey skills plus idea datasets and knowledge base |
| ghostsecurity | Ghost Security | AppSec skills — SAST criteria, SCA, secrets, validation |
| defending-code | Anthropic | Vulnerability-discovery reference harness and defensive-security skills |
| jupiter | Jupiter | Official Jupiter skills — Ultra swap, Lend, swap migration |
| metaplex | Metaplex | Official Metaplex skills — Core, Token Metadata, Bubblegum, Candy Machine |
| helius | Helius | Official Helius infrastructure skill plus SVM internals |
| quicknode-anchor | QuickNode | Anchor and financial-math reference files (quarantined — references only) |
| eth-to-sol | Solana Foundation | EVM/Solidity to Anchor two-pass porting |

### 7 MCP Server Integrations

| Server | Why It Matters |
|---|---|
| Helius | 60+ tools for RPC, DAS API, webhooks, priority fees, and token metadata — real-time on-chain data without leaving the editor |
| solana-dev | Solana Foundation official MCP with current docs, guides, and API references — the AI never hallucinates deprecated APIs |
| Context7 | Fetches current documentation for any dependency, not training-data snapshots |
| Playwright | Browser automation for dApp testing — opens your frontend, connects wallets, and verifies flows in a real browser |
| context-mode | Compresses large RPC responses and build logs — saves context window for actual work |
| memsearch | Persistent memory with semantic search — remembers project context across sessions |
| Surfpool | Agent-driven local validator and mainnet-fork control — spin up forked cluster state for integration testing without leaving the editor |

### Language-Specific Rules

Enforced coding standards that load only when relevant to the current task:

- **Rust** — Checked arithmetic, proper error propagation, no `unwrap()` in production code
- **Anchor** — Account validation constraints, PDA bump storage, CPI target validation, account reloading after CPI
- **Pinocchio** — Zero-copy access patterns, manual `TryFrom` validation, single-byte discriminators
- **TypeScript** — Type safety (`no any`), async/await patterns, wallet adapter integration, BigInt for u64
- **C#/.NET** — Unity MonoBehaviour conventions, .NET 9 standards, Solana.Unity-SDK integration patterns

### Agent Team Patterns

Multi-agent workflows that coordinate specialized agents through a complete development cycle. Create a team with natural language: `"Create an agent team: solana-architect for design, anchor-engineer for implementation, solana-qa-engineer for testing"`.

| Pattern | Flow | Use Case |
|---|---|---|
| program-ship | architect → engineer → QA → deploy | Ship a complete Solana program |
| full-stack | architect → engineer → frontend → QA | End-to-end dApp development |
| audit-and-fix | QA → engineer → QA | Security audit with automated fixes |
| game-ship | game-architect → unity-engineer → QA | Unity game with on-chain state |
| research-and-build | researcher → architect → engineer | Research-driven implementation |
| defi-compose | researcher → defi-engineer → QA | Multi-protocol DeFi integration |
| token-launch | token-engineer → QA → deploy | Token creation with extensions |

## Installation

**Fork the template** — the recommended approach for new projects. Fork [solanabr/solana-ai-kit](https://github.com/solanabr/solana-ai-kit) on GitHub, customize the `CLAUDE.md` for your project, and initialize the skill submodules.

**One-liner install** — for adding the configuration to an existing project:

```bash
curl -fsSL https://aikit.superteam.codes | bash
```

If the `aikit.superteam.codes` domain is not reachable, the documented fallback is:

```bash
curl -fsSL https://raw.githubusercontent.com/solanabr/solana-ai-kit/main/install.sh | bash
```

**Claude Code plugin** — installs the core kit (agents, commands, MCP servers) through the plugin marketplace:

```
/plugin marketplace add solanabr/solana-ai-kit
/plugin install solana-ai-kit@stbr
```

The plugin carries the core kit only; the full `install.sh` route also brings the lazy-loaded language rules, the curated permissions allowlist and sandbox policy, and the 18 `ext/` skill submodules.

**Manual setup** — clone the repository and copy the `.claude/` directory and `CLAUDE.md` to your project root.

**Agent export** — the `--agents` flag exports agent definitions for use with non-Claude tools that support the agent specification format.

## Modern Stack (2026)

| Layer | Technology |
|---|---|
| Programs | Anchor 1.0+ / Pinocchio / Rust 1.82+ |
| Frontend | Next.js 15 / React 19 / @solana/kit |
| Testing | Mollusk / LiteSVM / Surfpool / Trident |
| Mobile | React Native / Expo / Solana Mobile SDK |
| Games | Unity 6+ / Solana.Unity-SDK / PlaySolana |
| Backend | Rust (Axum 0.8+ / Tokio 1.40+ / sqlx) / Helius API |
| Edge | Cloudflare Workers |

## Credits

This project would not be possible without the organizations that publish and maintain the skill submodules it depends on. Thanks to the **Solana Foundation** for official development patterns and the solana-dev MCP server, **SendAI** for the AI agent framework, **Trail of Bits** for the security research this project draws from, **Cloudflare** for edge deployment patterns, **Colosseum** for hackathon tooling, **QEDGen** for formal verification work, **Solana Mobile** for mobile SDK patterns, the **safe-solana-builder community** for safe coding conventions, **Vercel** for deployment patterns, **Jupiter**, **Metaplex**, and **Helius** for their official ecosystem skills, **Ghost Security** for AppSec skills, **Anthropic** for the defending-code reference harness, **QuickNode** for Anchor reference material, and **Superteam Brazil** for the game development integration that started this project.
