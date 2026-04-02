# solana-claude-config

**GitHub**: [solanabr/solana-claude-config](https://github.com/solanabr/solana-claude-config)
**Status**: Active development, public release
**Maintained by**: @kauenet

## Why It Exists

AI coding assistants have a Solana problem. Their training data is months or years behind a fast-moving ecosystem, which means they produce code that looks right but isn't: unchecked arithmetic that silently overflows, missing account owner validation, deprecated web3.js 1.x patterns when the project uses @solana/kit, hallucinated API signatures for Anchor versions that no longer exist. The AI confidently writes the wrong thing, and the developer has to know enough to catch it.

The second problem is context waste. A general-purpose assistant loads everything and filters nothing. Asking about a Pinocchio CPI pattern pulls in irrelevant React knowledge. Asking about token metadata loads game development rules. Every token spent on context that does not apply to the current task is a token that cannot go toward solving the actual problem.

solana-claude-config solves both. It is a Claude Code configuration that encodes deep Solana domain knowledge — current APIs, correct security patterns, language-specific rules — and delivers that knowledge efficiently through a token-aware architecture. The right context loads for the right task, and nothing else does.

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

### 24 Slash Commands

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

### 9 External Skill Submodules

Each submodule is a git submodule sourced from an authoritative provider, keeping domain knowledge current without embedding it directly into the configuration.

| Submodule | Source | Purpose |
|---|---|---|
| solana-dev-skill | Solana Foundation | Official Solana development patterns |
| sendai-skill | SendAI | AI agent framework for Solana |
| solana-security-skill | Trail of Bits (based on) | Security audit patterns and vulnerability detection |
| cloudflare-skill | Cloudflare | Edge deployment and Workers patterns |
| colosseum-skill | Colosseum | Hackathon and accelerator integration |
| qedgen-skill | QEDGen | Formal verification patterns |
| solana-mobile-skill | Solana Mobile | Mobile-specific development patterns |
| safe-solana-builder-skill | Community | Safe coding patterns and best practices |
| solana-game-skill | Superteam Brazil | Unity game development for Solana |

### 6 MCP Server Integrations

| Server | Why It Matters |
|---|---|
| Helius | 60+ tools for RPC, DAS API, webhooks, priority fees, and token metadata — real-time on-chain data without leaving the editor |
| solana-dev | Solana Foundation official MCP with current docs, guides, and API references — the AI never hallucinates deprecated APIs |
| Context7 | Fetches current documentation for any dependency, not training-data snapshots |
| Playwright | Browser automation for dApp testing — opens your frontend, connects wallets, and verifies flows in a real browser |
| context-mode | Compresses large RPC responses and build logs — saves context window for actual work |
| memsearch | Persistent memory with semantic search — remembers project context across sessions |

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

**Fork the template** — the recommended approach for new projects. Fork [solanabr/solana-claude-config](https://github.com/solanabr/solana-claude-config) on GitHub, customize the `CLAUDE.md` for your project, and initialize the skill submodules.

**One-liner install** — for adding the configuration to an existing project:

```bash
curl -fsSL https://raw.githubusercontent.com/solanabr/solana-claude-config/main/install.sh | bash
```

**Manual setup** — clone the repository and copy the `.claude/` directory and `CLAUDE.md` to your project root.

**Agent export** — the `--agents` flag exports agent definitions for use with non-Claude tools that support the agent specification format.

## Modern Stack (2026)

| Layer | Technology |
|---|---|
| Programs | Anchor 0.31+ / Pinocchio |
| Frontend | Next.js 15 / React 19 / @solana/kit |
| Testing | Mollusk / LiteSVM / Surfpool / Trident |
| Mobile | React Native / Expo / Solana Mobile SDK |
| Games | Unity 6+ / Solana.Unity-SDK / PlaySolana |
| Backend | Rust (Axum/Tokio) / Helius API |
| Edge | Cloudflare Workers |

## Credits

This project would not be possible without the organizations that publish and maintain the skill submodules it depends on. Thanks to the **Solana Foundation** for official development patterns and the solana-dev MCP server, **SendAI** for the AI agent framework, **Trail of Bits** for the security research this project draws from, **Cloudflare** for edge deployment patterns, **Colosseum** for hackathon tooling, **QEDGen** for formal verification work, **Solana Mobile** for mobile SDK patterns, the **safe-solana-builder community** for safe coding conventions, and **Superteam Brazil** for the game development integration that started this project.
