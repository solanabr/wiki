# AI-Assisted Development

AI tooling is transforming Solana development. Code generation, real-time documentation lookup, on-chain data queries, security auditing, and development workflow automation -- these are no longer experimental features but production tools that top Solana developers use daily. The Superteam Brazil team has invested heavily in this area, and this page reflects both the broader ecosystem and our own contributions.

The key insight is that AI coding assistants are only as good as the context they have. A general-purpose AI knows about Solana from its training data, which may be outdated or incomplete. MCP servers and specialized configurations give AI assistants real-time access to current documentation, live blockchain data, and domain-specific knowledge that makes their output dramatically more useful.

---

## Solana AI Kit (solana-ai-kit) -- The Complete AI Development Environment

[https://github.com/solanabr/solana-ai-kit](https://github.com/solanabr/solana-ai-kit)

Solana AI Kit (formerly solana-claude-config) is a comprehensive AI-coding configuration -- Claude Code and Codex compatible -- that turns your environment into a specialized Solana workspace with a single install. It is the single most impactful tool you can add to your Solana development workflow. Everything is pre-configured -- agents, commands, MCP servers, language rules, and workflow patterns.

### What You Get

**15 Specialized Agents**

Each agent is an AI persona with deep knowledge of its domain, pre-loaded with the relevant documentation, patterns, and constraints:

- **solana-architect** -- System design, account model planning, PDA schemes, CPI architecture
- **anchor-engineer** -- Anchor program implementation, constraints, IDL generation, TypeScript clients
- **pinocchio-engineer** -- Zero-copy programs, CU optimization, manual validation, unsafe code
- **defi-engineer** -- DeFi protocol integration, AMM math, oracle patterns, vault design
- **solana-frontend-engineer** -- React/Next.js dApps, wallet adapter, web3.js, state management
- **game-architect** -- On-chain game design, ECS patterns, MagicBlock integration
- **unity-engineer** -- Solana.Unity SDK, C# integration, mobile builds
- **mobile-engineer** -- Mobile Wallet Adapter, React Native, dApp Store submission
- **rust-backend-engineer** -- Off-chain Rust services, indexers, keepers, transaction builders
- **devops-engineer** -- Deployment pipelines, RPC management, monitoring, verifiable builds
- **token-engineer** -- Token-2022 extensions, stablecoin design, NFT standards, tokenomics
- **solana-researcher** -- Ecosystem analysis, protocol research, sRFC review
- **solana-qa-engineer** -- Test strategy, LiteSVM/Mollusk harnesses, fuzz testing, coverage
- **tech-docs-writer** -- API docs, architecture docs, READMEs, developer guides
- **solana-guide** -- Learning path recommendations, concept explanations, onboarding

**30 Workflow Commands**

Commands for every stage of the development lifecycle:

- `/build-program` -- Build with `anchor build` or `cargo build-sbf`, handle errors
- `/audit-solana` -- Security audit against common vulnerability patterns
- `/profile-cu` -- Measure and optimize compute unit consumption
- `/deploy` -- Guided deployment to devnet or mainnet with confirmation gates
- `/scaffold` -- Generate project structure from a description
- `/test-rust` -- Run Rust tests with LiteSVM/Mollusk integration
- `/test-ts` -- Run TypeScript integration tests
- `/quick-commit` -- Automated branch creation and commit following conventions
- `/diff-review` -- Review changes for AI slop, excessive comments, and code quality
- And more for formatting, linting, documentation, and workflow automation

**7 Integrated MCP Servers**

All configured automatically during install, with API keys managed through `.env`:

- **Helius MCP** -- Tools for RPC calls, DAS API queries, webhook management, priority fee estimation, token metadata lookup, and transaction parsing. This gives your AI assistant direct access to live Solana data -- it can check balances, look up token metadata, query NFT collections, and estimate transaction fees without you switching to a terminal.

- **solana-dev MCP** -- Official Solana Foundation MCP server providing access to current documentation, developer guides, API references, and Anchor guidance. When your AI assistant answers a Solana question, it pulls from the latest docs rather than potentially outdated training data.

- **Context7** -- Real-time library documentation lookup. When you are using a library (Anchor, web3.js, SPL Token), Context7 gives the AI access to the current API documentation for that specific version, eliminating the problem of stale or hallucinated API references.

- **Playwright** -- Browser automation for dApp testing. The AI can open your frontend, connect wallets, click through flows, and verify that your dApp works end-to-end in a real browser.

- **context-mode** -- Compresses large RPC responses and build logs to save context window space. When you are debugging a failed transaction or a build error, the raw output can be thousands of lines. context-mode extracts the relevant information so the AI can process it without running out of context.

- **memsearch** -- Persistent memory with semantic search across sessions. The AI remembers decisions you made, bugs you fixed, and patterns you established in previous sessions. This means you do not have to re-explain your project architecture every time you start a new conversation.

- **Surfpool** -- Agent-driven local validator and mainnet-fork control (keyless; requires the `surfpool` CLI). The AI can spin up a local surfnet, fork mainnet state, and run your program against real cluster data -- integration testing against production state without touching mainnet.

**Language-Specific Rules**

Pre-configured coding standards and constraints for Rust, Anchor, Pinocchio, TypeScript, and C#/.NET. These rules enforce security best practices (checked arithmetic, account validation, no `unwrap()` in programs), naming conventions, project structure, and testing patterns. The AI follows these rules automatically, producing code that matches your project's standards.

**Agent Team Patterns**

Pre-built multi-agent workflows for common development scenarios:

- **program-ship** -- Architect designs, engineer implements, QA validates
- **full-stack** -- Program + frontend + tests in coordinated workflow
- **audit-and-fix** -- Security audit followed by guided remediation
- **game-ship** -- Game architect + unity engineer + QA for game development
- **research-and-build** -- Research phase followed by implementation
- **defi-compose** -- DeFi protocol design + integration + testing
- **token-launch** -- Token design + implementation + deployment

Maintained by @kauenet.

---

## MCP Servers

For developers using AI tools other than Claude Code, or who want to configure MCP servers individually rather than through Solana AI Kit, these servers can be set up standalone.

### Solana MCP Server

[https://mcp.solana.com/](https://mcp.solana.com/)

The official Solana Foundation MCP server. It provides documentation search across all Solana developer docs, API references for the Solana JSON-RPC, Anchor framework guidance, and developer guide content. This is the authoritative source for Solana documentation in AI contexts -- it pulls from the same content that powers solana.com/docs, ensuring accuracy and currency.

Use this server to ensure your AI assistant always has access to current Solana documentation rather than relying on training data that may be months or years old.

### Helius MCP Server

[https://github.com/helius-labs/core-ai](https://github.com/helius-labs/core-ai)

Helius's official AI tooling repository, documented at [helius.dev/docs/agents/mcp](https://www.helius.dev/docs/agents/mcp). The current server gives AI assistants direct access to Solana blockchain data through a compact routed interface -- 9 domain tools (account, wallet, asset, transaction, chain, streaming, knowledge, write, compression) plus a result expander -- that together cover the full Helius surface: RPC, DAS API, webhooks, priority fees, transaction parsing, and token metadata.

This server is what makes AI assistants genuinely useful for blockchain development. Instead of copying transaction signatures and pasting them into a block explorer, you can ask the AI to look up a transaction, decode its instructions, and explain what happened -- all within your editor.

### Context7

[https://github.com/upstash/context7](https://github.com/upstash/context7)

Real-time library documentation lookup that solves one of the most frustrating problems with AI coding assistants: stale API references. When your AI suggests code using a library, Context7 lets it check the actual current documentation for that library version. This means no more hallucinated function signatures, deprecated method calls, or incorrect parameter types.

Context7 supports documentation for major Solana libraries including Anchor, web3.js, SPL Token, and many others. It is not Solana-specific -- it works with any library that has published documentation.

---

## AI Agent Frameworks

### Solana Agent Kit

[https://github.com/sendaifun/solana-agent-kit](https://github.com/sendaifun/solana-agent-kit)

A framework for building autonomous AI agents that interact with Solana. The Agent Kit provides tools that let AI agents perform on-chain actions -- swapping tokens via Jupiter, transferring SOL and SPL tokens, deploying programs, creating token mints, managing NFTs, and more. It is designed for building AI-powered applications that can take autonomous actions on Solana.

Use cases include AI trading bots, automated portfolio management, AI-powered customer service that can process refunds in tokens, and any application where an AI agent needs to execute Solana transactions based on natural language instructions or programmatic triggers.

### GOAT SDK (Archived)

[https://github.com/goat-sdk/goat](https://github.com/goat-sdk/goat)

GOAT SDK (Great Onchain Agent Toolkit) was a popular multi-chain agent toolkit -- a plugin architecture where each plugin exposed on-chain tools (swap, transfer, stake, lend) that AI agents could invoke across multiple chains including Solana. Its maintainers have declared the repository an archived read-only snapshot -- no issues, PRs, or updates -- so do not start new projects on it. For Solana AI agents, use Solana Agent Kit (above), which remains actively maintained.

### Eliza (elizaOS)

[https://github.com/elizaOS/eliza](https://github.com/elizaOS/eliza)

A framework for building AI agents with social media presence and on-chain capabilities, maintained by elizaOS (formerly ai16z). The project currently describes itself as an "open source agentic operating system." Eliza agents can interact on Twitter, Discord, and Telegram while executing Solana transactions. The framework includes character configuration, memory systems, and action definitions that combine social interaction with blockchain operations.

Use Eliza when building AI agents that need both social presence and on-chain capabilities -- community bots that can tip tokens, AI personalities that trade based on social signals, or autonomous agents with public-facing identities.

---

## What is MCP?

Model Context Protocol (MCP) is an open standard that enables AI coding assistants to access external tools, data sources, and APIs through a unified interface. Think of it as a plugin system for AI -- each MCP server exposes a set of tools (functions) that the AI can call when it needs information or wants to perform an action.

For Solana development, MCP servers enable your AI assistant to:

- **Query real-time blockchain data** -- Check balances, look up transactions, fetch account data, and query token metadata without leaving your editor
- **Search current documentation** -- Access the latest Solana docs, Anchor guides, and library references rather than relying on training data
- **Manage infrastructure** -- Create webhooks, estimate priority fees, and interact with RPC services directly
- **Automate testing** -- Open browsers, interact with dApps, and verify frontend behavior

Solana AI Kit bundles all the major Solana MCP servers into a single install with pre-configured API keys and connections. If you install Solana AI Kit, you do not need to configure MCP servers individually -- they are all included and wired up automatically.

---

## AI-Powered Development Tools

### Cursor + Solana

[https://www.cursor.com/](https://www.cursor.com/)

An AI-native code editor built on VS Code that supports MCP servers and custom system prompts. While Solana AI Kit is designed for Claude Code and Codex (terminal-based), Cursor provides a GUI-based alternative with similar AI-assisted development capabilities. You can configure Cursor with Solana-specific context rules and MCP servers for a visual development experience. The combination of Cursor's inline AI features with Solana MCP servers is increasingly popular among frontend-focused Solana developers.

### Solana AI Hub

The growing ecosystem of AI tools specifically built for Solana developers. Key patterns emerging include:

- **AI-generated program scaffolding** -- Tools that generate Anchor program boilerplate from natural language descriptions of your program's functionality
- **Automated CU optimization** -- AI analysis of compute unit usage with specific refactoring suggestions
- **Transaction debugging** -- AI-powered transaction analysis that explains what happened, why it failed, and how to fix it
- **Security analysis** -- AI-assisted code review that checks for common Solana vulnerabilities (missing signer checks, PDA substitution, arithmetic overflow)

These capabilities are available through Solana AI Kit's agent teams and workflow commands, but the patterns are being adopted across the broader AI tooling ecosystem as well.
