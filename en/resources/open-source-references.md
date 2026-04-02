# Open Source References

Studying production code is the fastest way to level up as a Solana developer. Tutorials teach you patterns. Open source shows you how those patterns work under real constraints -- handling edge cases, managing state, optimizing compute units, and building for composability. These repositories are actively maintained and cover everything from basic token transfers to complex DeFi protocols and developer tooling.

---

## Superteam Brazil Projects

These are open-source projects built and maintained by the Superteam Brazil community. They range from developer tooling to protocol standards to education platforms.

### solana-claude

[https://github.com/solanabr/solana-claude-config](https://github.com/solanabr/solana-claude-config)

The complete AI development environment for Solana. This repository contains 15 specialized agents, 24+ slash commands, 6 pre-configured MCP server integrations, language-specific rules for Rust/Anchor/Pinocchio/TypeScript/C#, and agent team patterns for common development workflows. It is the most comprehensive Claude Code configuration for any blockchain ecosystem.

Study this to understand how to structure AI development tooling -- the agent definitions, command patterns, and MCP integration are well-organized and documented. Maintained by @kauenet.

### solana-vault-standard

[https://github.com/solanabr/solana-vault-standard](https://github.com/solanabr/solana-vault-standard)

The ERC-4626 equivalent for Solana (sRFC 40). This repository contains the specification and reference implementations for 8 vault variants covering lending, staking, and yield strategies. The code demonstrates how to design composable DeFi primitives on Solana -- standardized interfaces, PDA schemes for vault state, and CPI patterns for vault interactions.

Study this for examples of how to design protocol standards, implement share-based vault accounting, and structure Anchor programs for composability. Maintained by @kauenet, @thomgabriel, @vcnzo_ct and others.

### solana-stablecoin-standard

[https://github.com/solanabr/solana-stablecoin-standard](https://github.com/solanabr/solana-stablecoin-standard)

SSS-1 and SSS-2 specifications for standardized stablecoin issuance. The codebase demonstrates advanced Token-2022 usage -- transfer hooks for compliance enforcement, role-based access control, oracle integration, and blacklist management. This is one of the best examples of building production-grade financial infrastructure on Solana with Token-2022 extensions.

Study this for Token-2022 transfer hook implementation patterns, compliance architecture, and how to structure a multi-tier specification (SSS-1 basic, SSS-2 advanced). Maintained by @lvj_luiz and @kauenet.

### superteam-academy

[https://github.com/solanabr/superteam-academy](https://github.com/solanabr/superteam-academy)

An on-chain Learning Management System that issues soulbound XP tokens for module completion and NFT certificates for course graduation. The codebase shows how to build an education platform on Solana -- credential issuance, progress tracking, and non-transferable token patterns.

Study this for examples of soulbound token implementation, on-chain credential systems, and how to structure a full-stack Solana application with both program and frontend. Maintained by @thomgabriel and @kauenet.

### solana-game-skill

[https://github.com/solanabr/solana-game-skill](https://github.com/solanabr/solana-game-skill)

A Claude Code skill package for Unity and mobile Solana game development. Contains specialized agent definitions, game-specific commands, and C#/.NET rules for Solana game development. Study this to understand how to create domain-specific AI tooling for specialized development contexts. Maintained by @kauenet.

---

## Ecosystem References

These repositories from the broader Solana ecosystem provide well-maintained examples and reference implementations.

### program-examples

[https://github.com/solana-developers/program-examples](https://github.com/solana-developers/program-examples)

The official example repository maintained by the Solana Foundation. Contains implementations of common patterns in multiple frameworks -- Anchor, native Rust, and Python (via Seahorse). Examples cover token transfers, PDAs, CPIs, account compression, staking, and more. Each example is self-contained with tests.

This is the first place to look when you need a reference implementation for a common pattern. The code is reviewed by the Solana Foundation team and kept up to date with the latest SDK versions. New developers should start with the basics directory and work through examples progressively.

### awesome-solana-oss

[https://github.com/StockpileLabs/awesome-solana-oss](https://github.com/StockpileLabs/awesome-solana-oss)

A curated, regularly updated list of open-source Solana projects organized by category -- DeFi protocols, NFT tools, developer utilities, infrastructure, and more. Each entry includes a brief description and link to the source code.

Use this as a discovery tool when you want to find open-source implementations of specific functionality. Want to see how a production DEX handles order matching? How an NFT marketplace implements listings? How a lending protocol manages liquidations? This list points you to the code.

### solana-actions examples

[https://github.com/solana-developers/solana-actions/tree/main/examples](https://github.com/solana-developers/solana-actions/tree/main/examples)

Reference implementations for Solana Actions and Blinks in multiple server frameworks -- Axum (Rust), Cloudflare Workers (TypeScript), and Next.js (TypeScript). These examples show how to build Action APIs that return signable transactions from HTTP endpoints.

Study these if you are building Actions/Blinks. The examples demonstrate the full request/response flow, transaction construction, metadata formatting, and error handling for the Actions specification. Each framework example is production-ready and can be deployed as-is.

### Anchor examples

[https://github.com/coral-xyz/anchor/tree/master/examples](https://github.com/coral-xyz/anchor/tree/master/examples)

Example programs from the Anchor framework repository itself. These examples are maintained by the Anchor team and demonstrate idiomatic usage of Anchor features -- account constraints, PDAs, CPIs, error handling, events, and testing patterns. They are updated alongside Anchor releases, so they always reflect current best practices.

Study these to understand how the Anchor team intends their framework to be used. The examples range from simple (basic counter) to complex (multi-instruction programs with CPIs), and each includes both the Rust program and TypeScript tests.

### Squads Protocol v4

[https://github.com/Squads-Protocol/v4](https://github.com/Squads-Protocol/v4)

Production multisig and smart account infrastructure used by major Solana protocols and teams. Squads v4 implements a flexible multisig with configurable thresholds, time-locks, spending limits, and batch execution. The codebase is one of the best examples of production-grade Anchor code -- it demonstrates complex account validation patterns, multi-instruction transactions, and how to build infrastructure that other protocols compose with. Study this for multisig patterns, access control architecture, and how to structure a program that needs to be both secure and composable.

### Pinocchio Examples

[https://github.com/solana-developers/program-examples/tree/main/basics](https://github.com/solana-developers/program-examples/tree/main/basics)

While the official program-examples repository primarily showcases Anchor and native Rust, it also includes Pinocchio implementations for comparison. These are invaluable for understanding the performance trade-offs between frameworks -- the same program implemented in Anchor vs Pinocchio, letting you see exactly where compute units are saved and what zero-copy access looks like in practice.

### Clockwork (Legacy Reference)

[https://github.com/clockwork-xyz/clockwork](https://github.com/clockwork-xyz/clockwork)

An automation engine for Solana that enables scheduled and conditional program execution. While Clockwork itself has been sunset, the codebase remains an excellent study resource for advanced Solana patterns -- thread-based execution, crank mechanisms, cross-program automation, and how to build infrastructure-level programs that interact with the Solana runtime. Study this for understanding automation patterns and how to design programs that execute on schedule.

### Helius SDK

[https://github.com/helius-labs/helius-sdk](https://github.com/helius-labs/helius-sdk)

The official TypeScript and Rust SDKs for the Helius API. Study this for examples of well-structured SDK design -- type-safe API wrappers, webhook management, DAS API integration, transaction parsing, and priority fee estimation. The SDK code demonstrates how to build ergonomic developer tools that abstract away API complexity while maintaining full type safety.

### Metaplex Program Library

[https://github.com/metaplex-foundation/mpl-core](https://github.com/metaplex-foundation/mpl-core)

The source code for Metaplex Core (the next-generation NFT standard), MPL Token Metadata, Bubblegum (compressed NFTs), and Candy Machine. This is some of the most widely-used Solana program code in existence. Study this for understanding plugin architectures, how to handle complex account relationships, and how to build programs that the entire ecosystem depends on. The codebase also demonstrates Kinobi/Codama for automated client generation.

---

## Production DeFi Codebases

These are open-source production protocols where studying the code teaches you patterns you cannot learn from tutorials.

### Marinade Finance

[https://github.com/marinade-finance/liquid-staking-program](https://github.com/marinade-finance/liquid-staking-program)

The first liquid staking protocol on Solana mainnet. Fully open source Anchor-based program demonstrating: stake account management and delegation strategies, mSOL mint/burn mechanics tied to exchange rate, LP swap pool for instant unstake (bypassing cooldown), and a referral wrapper pattern for partner fee sharing. The `/Docs/Backend-Design.md` in the repo is worth reading for system architecture. TypeScript SDK: [marinade-finance/marinade-ts-sdk](https://github.com/marinade-finance/marinade-ts-sdk).

### Drift v2

[https://github.com/drift-labs/protocol-v2](https://github.com/drift-labs/protocol-v2)

The largest open-source perpetuals DEX on Solana. Drift combines three liquidity mechanisms -- a vAMM, a decentralized limit order book (DLOB) run by keeper bots, and a Just-In-Time (JIT) liquidity mechanism. This multi-mechanism design is the primary architectural study value. Supports 40+ markets with up to 101x leverage on perps. The monorepo includes the Rust program and TypeScript SDK. Keeper bot reference implementation at [drift-labs/keeper-bots-v2](https://github.com/drift-labs/keeper-bots-v2).

### Raydium CLMM

[https://github.com/raydium-io/raydium-clmm](https://github.com/raydium-io/raydium-clmm)

Raydium's concentrated liquidity implementation (AMM v3). Study this for tick-based liquidity management, swap routing through concentrated positions, fee tier configuration, and the position NFT pattern where each LP position is represented as an NFT. Apache-2.0 licensed, making it clean to fork or adapt.

### Sealevel Attacks

[https://github.com/coral-xyz/sealevel-attacks](https://github.com/coral-xyz/sealevel-attacks)

Ten numbered Anchor programs, each demonstrating a specific Solana vulnerability with both an insecure version and a secure fix. Maintained by the Anchor team (Coral XYZ). Covers: signer authorization, account data matching, owner checks, type cosplay, initialization, arbitrary CPI, duplicate mutable accounts, bump seed canonicalization, PDA sharing, and closing accounts. Essential reading for any developer deploying programs that handle user funds. Use alongside Ackee's security training for comprehensive vulnerability understanding.

---

## Governance & Standards

### Solana Improvement Documents (SIMDs)

[https://github.com/solana-foundation/solana-improvement-documents](https://github.com/solana-foundation/solana-improvement-documents)

The formal proposal process for changes to the Solana protocol. SIMDs define new features, protocol changes, and standards. Community browser at [simd.wtf](https://simd.wtf/). Discussion happens on the [Solana Developer Forums SIMD category](https://forum.solana.com/c/simd/5).

Developer-critical SIMDs include: SIMD-0096 (100% priority fees to validators -- already activated, changes fee modeling), SIMD-0083 (improved transaction scheduling), SIMD-0296 (larger transactions -- in progress), SIMD-0286 (100M CU block limits -- in progress), and SIMD-0326 (Alpenglow consensus -- proposed). Understanding active SIMDs keeps you ahead of protocol changes that affect your programs.

### Solana Program Library (SPL)

[https://spl.solana.com/](https://spl.solana.com/)

The official collection of production on-chain programs. Beyond Token and Token-2022, SPL includes: Governance (DAO voting/treasury), Stake Pool (multi-validator staking -- basis for mSOL, jitoSOL), Name Service (on-chain domains, basis for .sol), Account Compression (concurrent Merkle trees for cNFTs), Memo (attach UTF-8 strings to transactions), and more. Note: the original monorepo (`solana-labs/solana-program-library`) was archived March 2025 and split into individual repos under the [solana-program](https://github.com/solana-program) GitHub organization maintained by Anza.
