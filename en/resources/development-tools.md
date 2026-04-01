# Development Tools

The tools you use daily -- CLIs, IDEs, RPC providers, and integration platforms. This page covers the essential tooling for building, deploying, and integrating Solana applications.

---

## Core Tools

### Solana CLI

[https://solana.com/docs/intro/installation](https://solana.com/docs/intro/installation)

The essential command-line interface for Solana development. You will use this constantly -- managing keypairs, checking balances, deploying programs, configuring cluster endpoints, airdropping devnet SOL, and inspecting transactions. It is the foundation that everything else builds on. The CLI also includes `solana-test-validator` for running a local cluster, though for testing you should prefer LiteSVM or Mollusk (see [Testing & Debugging](testing-and-debugging.md)).

Key commands you will use daily: `solana config set`, `solana balance`, `solana program deploy`, `solana logs`, `solana airdrop`.

### Solana Playground

[https://beta.solpg.io/](https://beta.solpg.io/)

A full development environment in your browser. Solana Playground includes a code editor with Rust syntax highlighting, a built-in wallet (no Phantom needed), an Anchor compiler, a program deployer, and even a test runner. You can write, build, deploy, and test Anchor programs entirely from your browser without installing anything locally.

It is particularly useful for quick prototyping, sharing code examples, and teaching. The built-in wallet means you can deploy to devnet immediately. However, for production development you will want a local setup for better debugging, version control integration, and AI tooling support.

---

## RPC Providers

Your RPC provider determines the quality of your connection to the Solana network -- speed, reliability, rate limits, and available APIs.

### Helius

[https://www.helius.dev/](https://www.helius.dev/)

The most feature-rich RPC provider in the Solana ecosystem. Beyond standard RPC, Helius provides the DAS (Digital Asset Standard) API for querying NFTs and compressed NFTs, webhooks for real-time event notifications, enhanced transaction parsing that decodes instructions into human-readable formats, and priority fee estimation to help your transactions land. Their MCP server exposes 60+ tools that AI assistants can use directly. Free tier available with generous limits for development.

Helius is the default recommendation for most projects because the additional APIs (DAS, webhooks, priority fees) save you from building that infrastructure yourself.

### QuickNode

[https://www.quicknode.com/chains/solana](https://www.quicknode.com/chains/solana)

High-performance RPC infrastructure with a marketplace of add-ons. QuickNode offers low-latency connections across multiple regions, a GraphQL API for flexible data queries, and add-ons for things like token metadata, NFT data, and transaction history. Their infrastructure is battle-tested at scale and used by many production applications.

Choose QuickNode when you need geographic distribution, specific add-on functionality, or when you want an alternative provider for redundancy alongside Helius.

### Triton

[https://triton.one/](https://triton.one/)

High-performance RPC infrastructure with a focus on gRPC streaming via Yellowstone. Triton provides standard JSON-RPC alongside Yellowstone gRPC, which gives you real-time account and transaction updates with significantly lower latency than WebSocket subscriptions. Their infrastructure supports Geyser plugins for custom data streaming and is used by several major Solana protocols.

Choose Triton when you need low-latency data streaming (gRPC), when building indexers or real-time applications, or when you want Geyser plugin access for custom data pipelines.

### Ironforge

[https://www.ironforge.cloud/](https://www.ironforge.cloud/)

RPC infrastructure with built-in transaction simulation and debugging tools. Ironforge provides standard RPC alongside developer-focused features like enhanced transaction simulation, compute unit profiling, and account inspection tools directly in their dashboard. Useful for developers who want more visibility into what their transactions are doing during development.

### Shyft

[https://shyft.to/](https://shyft.to/)

API platform providing higher-level abstractions over Solana data. Beyond raw RPC, Shyft offers REST APIs for token data, NFT operations, transaction history, and DeFi analytics. Their APIs return structured data without requiring you to parse raw account data or decode instruction logs yourself. Useful for frontend developers who need Solana data without the complexity of raw RPC integration.

### Luzid

[https://luzid.app/](https://luzid.app/)

A visual debugger and local development environment for Solana programs. Luzid provides a GUI for inspecting accounts, transactions, and program state during local development, replacing the CLI-only workflow of `solana-test-validator` with a visual interface. Features include account state inspection, transaction replay, breakpoint-style debugging, and CU profiling with visual output.

Use Luzid when you want a more visual development experience than the CLI provides, or when debugging complex multi-instruction transactions where seeing the state changes visually is more effective than reading log output.

---

## Transaction Infrastructure

### Jito

[https://docs.jito.network/](https://docs.jito.network/)

MEV infrastructure for Solana including bundle submission, block engine access, and tip routing. Jito's bundle endpoint lets you submit multiple transactions that execute atomically -- either all succeed or all fail. This is essential for arbitrage, liquidations, and any operation where partial execution is dangerous. The tip mechanism lets you prioritize your bundles by paying validators directly.

For application developers, Jito matters primarily for transaction landing -- using Jito tips alongside priority fees gives your transactions the best chance of inclusion during congested periods. Most serious Solana applications use Jito for critical transactions.

### Light Protocol

[https://docs.lightprotocol.com/](https://docs.lightprotocol.com/)

ZK compression infrastructure for Solana. Light Protocol enables applications to store state in compressed form using zero-knowledge proofs, dramatically reducing on-chain storage costs. A compressed account costs a fraction of a standard account while maintaining the same security guarantees through Merkle proofs.

Use Light Protocol when your application creates many accounts (user profiles, game state, social data) and the rent costs become significant. The trade-off is additional complexity in reading compressed state and including Merkle proofs in transactions.

---

## Actions & Blinks

Actions and Blinks are a Solana-specific innovation that turns any transaction into a shareable, embeddable URL.

### Solana Actions Specification

[https://solana.com/developers/guides/advanced/actions](https://solana.com/developers/guides/advanced/actions)

The official specification for Solana Actions -- standardized APIs that return signable transactions from a URL. Any application, website, or social media platform can embed an Action that lets users execute Solana transactions without leaving their current context. For example, a tweet containing a Blink (blockchain link) can include a "Buy" or "Donate" button that triggers a wallet popup directly in the Twitter feed.

Understanding the Actions spec is important because it represents a new distribution channel for Solana applications. Instead of requiring users to visit your dApp, you bring the transaction to wherever they already are.

### Dialect Blinks

[https://docs.dialect.to/blinks](https://docs.dialect.to/blinks)

The SDK for creating, testing, and deploying Actions and Blinks. Dialect provides the tooling layer on top of the Actions specification -- a registry for your Actions, a testing interface to preview how they render, and client SDKs for rendering Blinks in your own application. If you are building an Action, Dialect's SDK handles the implementation details like transaction construction, metadata formatting, and client-side rendering.

---

## Payments

### Solana Pay

[https://docs.solanapay.com/](https://docs.solanapay.com/)

A payment protocol built on Solana for merchants and applications. Solana Pay provides a JavaScript/TypeScript SDK for creating payment requests, generating QR codes, and verifying transaction completion. It supports both simple SOL transfers and complex SPL token payments, with built-in support for point-of-sale flows, e-commerce integration, and payment verification.

The protocol is designed for real-world commerce -- sub-second finality and near-zero fees make it practical for everyday payments. The SDK handles the complexities of payment reference tracking, so you can verify that a specific payment was made without scanning every transaction on-chain.
