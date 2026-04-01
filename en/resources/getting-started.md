# Getting Started

This page lays out a recommended learning path for new Solana developers. Rather than dumping a list of links, it structures resources as a journey -- from understanding the mental model, to setting up your environment, to building and deploying your first program, to supercharging your workflow with AI tooling.

---

## Step 1: Understand the Fundamentals

Before writing code, internalize how Solana works. The account model is fundamentally different from EVM chains -- everything is an account, programs are stateless, and data lives in separate accounts owned by programs.

### Solana Docs Quick Start

[https://solana.com/docs/intro/quick-start](https://solana.com/docs/intro/quick-start)

Start here. This official guide walks you through accounts, transactions, and programs in under an hour. It covers the core mental model -- how programs process instructions, how accounts store state, and how transactions bundle everything together. You will build and deploy a simple program by the end.

### Solana Docs Core Concepts

[https://solana.com/docs#start-learning](https://solana.com/docs#start-learning)

Once you have the basics, dive deeper into the account model, Program Derived Addresses (PDAs), Cross-Program Invocations (CPIs), and the transaction lifecycle. These concepts are the foundation of everything you will build. Pay special attention to PDAs -- they are Solana's answer to contract storage and you will use them constantly.

---

## Step 2: Set Up Your Environment

You have two options: local setup for serious development, or browser-based for quick experimentation.

### Installation Guide (Local Setup)

[https://solana.com/docs/intro/installation](https://solana.com/docs/intro/installation)

This covers installing the Solana CLI, Anchor framework, and Rust toolchain on your machine. Local development gives you full control -- debugging, custom test configurations, and the ability to use AI tooling like solana-claude. If you plan to build anything beyond a toy project, set up locally.

### Solana Playground (Browser IDE)

[https://beta.solpg.io/](https://beta.solpg.io/)

If you want to skip local setup entirely or just experiment with an idea, Solana Playground gives you a full development environment in your browser. It includes a built-in wallet, Rust compiler, program deployer, and even a test framework. You can write, build, deploy, and test Anchor programs without installing anything. It is excellent for learning and prototyping, though you will eventually want a local setup for production work.

### RPC Provider Setup

For anything beyond local development, you need an RPC provider. The default public RPC endpoints are rate-limited and not suitable for production use. [Helius](https://www.helius.dev/) offers a generous free tier that is sufficient for learning and early development -- sign up, get an API key, and use it in your Solana CLI config and application code. Other providers like [Triton](https://triton.one/) and [Ironforge](https://www.ironforge.cloud/) also offer free tiers. Having a reliable RPC connection from the start prevents frustrating timeout errors and rate limit issues that can stall your learning.

---

## Step 3: Build Something

Theory only sticks when you apply it. These resources give you concrete projects to build and patterns to reference.

### Developer Cookbook

[https://solana.com/developers/cookbook](https://solana.com/developers/cookbook)

A reference collection of code snippets and patterns for common Solana development tasks. Need to create a token? Send a transaction? Derive a PDA? The cookbook has copy-pasteable implementations for each. Think of it as a recipe book you keep open while building -- not a tutorial to read cover-to-cover, but a resource to search when you need to implement something specific.

### Build a CRUD dApp

[https://solana.com/developers/guides/dapps/journal](https://solana.com/developers/guides/dapps/journal)

A full end-to-end tutorial that walks you through building a journal application with both an on-chain Anchor program and a React frontend. You will learn how to define account structures, write instruction handlers, generate TypeScript clients, and connect a wallet. This is the single best first project for understanding the full stack.

### Connect a Wallet in React

[https://solana.com/developers/cookbook/wallets/connect-wallet-react](https://solana.com/developers/cookbook/wallets/connect-wallet-react)

Every dApp needs wallet integration. This guide covers the Solana wallet adapter -- how to set up providers, detect installed wallets, connect/disconnect, and sign transactions. If you are building a frontend, you will reference this pattern repeatedly.

### Developer Guides Collection

[https://solana.com/developers/guides](https://solana.com/developers/guides)

The full collection of official developer guides from the Solana Foundation. Covers everything from basic token creation to advanced topics like compressed NFTs, staking, and Actions/Blinks. Browse by topic when you are ready to go beyond the basics. Each guide is self-contained and includes working code.

---

## Step 4: Level Up with AI Tooling

Once you have the fundamentals down, AI tooling can dramatically accelerate your development cycle -- from code generation and security audits to real-time documentation lookup and on-chain data queries.

### solana-claude

[https://github.com/SuperteamBrazil/solana-claude](https://github.com/SuperteamBrazil/solana-claude)

This is the single highest-leverage tool you can add to your Solana development workflow. A single install gives you 15 specialized AI agents (architect, anchor-engineer, pinocchio-engineer, frontend-engineer, security auditor, and more), 24+ slash commands for common tasks (build, audit, deploy, scaffold, test), and 6 pre-configured MCP servers that give your AI assistant real-time access to Solana documentation, on-chain data, and library references. It transforms Claude Code from a general-purpose assistant into a Solana development partner that understands the ecosystem deeply. See the [AI-Assisted Development](ai-assisted-development.md) page for the full breakdown.

---

## Recommended Order

For developers coming from other ecosystems, here is the condensed path:

1. Read the Quick Start and Core Concepts docs (2-3 hours)
2. Install the Solana CLI and Anchor locally, or use Solana Playground
3. Build the CRUD dApp tutorial end-to-end
4. Install solana-claude and start using AI-assisted development
5. Pick a real project and use the Cookbook + Developer Guides as references
6. Explore [Courses & Education](courses-and-education.md) for structured deeper learning
