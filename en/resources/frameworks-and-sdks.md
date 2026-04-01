# Frameworks & SDKs

Choosing the right framework and client SDK shapes your entire development experience. This page explains the trade-offs between each option so you can make an informed decision based on your project's needs.

---

## Program Frameworks

These frameworks define how you write on-chain Solana programs. Each makes different trade-offs between developer experience, performance, and control.

### Anchor

[https://www.anchor-lang.com/](https://www.anchor-lang.com/)

The standard framework for Solana program development. Anchor provides declarative account validation through Rust macros (`#[derive(Accounts)]`), automatic IDL (Interface Description Language) generation, and TypeScript client generation from that IDL. It handles boilerplate like account deserialization, discriminator checks, and constraint validation, letting you focus on business logic. The ecosystem is built around Anchor -- most tutorials, tools, and example code assume it. Choose Anchor for most projects, team codebases, and whenever you need an IDL for client generation. Current version: 0.31+, which introduced custom discriminators and `LazyAccount`.

The trade-off is binary size and compute unit (CU) consumption. Anchor's abstractions add overhead that can matter for performance-critical programs or programs approaching the BPF binary size limit.

### Pinocchio

[https://github.com/febo/pinocchio](https://github.com/febo/pinocchio)

A zero-copy framework that achieves 80-95% CU reduction compared to Anchor through direct memory access, no heap allocations, and minimal binary size. Pinocchio uses single-byte discriminators (vs Anchor's 8-byte), `#[repr(C)]` structs for consistent memory layout, and raw pointer casting for zero-copy account access. The result is programs that are dramatically cheaper to execute and smaller to deploy.

The trade-off is developer experience. You write manual account validation, handle your own serialization, and manage unsafe code blocks. There is no IDL generation -- you build clients by hand. Choose Pinocchio when compute units or binary size are constraints, when you are building performance-critical infrastructure, or when you want maximum control over every byte.

### Steel

[https://github.com/regolith-labs/steel](https://github.com/regolith-labs/steel)

A lightweight framework by Regolith Labs that sits between Anchor and native. Steel provides procedural macros for account validation and instruction parsing without the full weight of Anchor's code generation. Programs compile to smaller binaries than Anchor while maintaining a structured development experience with derive macros for account structs, instruction discriminators, and error handling.

Choose Steel when you want more structure than raw native development but less overhead than Anchor, or when binary size is a concern but you still want macro-assisted validation. Steel is gaining traction in the ecosystem as teams look for Anchor alternatives that balance ergonomics and performance.

### Bolt (MagicBlock)

[https://docs.magicblock.gg/bolt/introduction](https://docs.magicblock.gg/bolt/introduction)

An on-chain Entity Component System (ECS) framework specifically designed for game development on Solana, built by MagicBlock. Bolt structures on-chain state as entities with composable components, mapping the ECS pattern familiar to game developers directly to Solana's account model. This means game state lives on-chain and is natively composable -- other programs can interact with game entities directly.

Choose Bolt when building fully on-chain games or any application that benefits from an ECS architecture. It integrates with MagicBlock's ephemeral rollup infrastructure for real-time gameplay while settling to Solana.

### Poseidon

[https://github.com/turbin3/poseidon](https://github.com/turbin3/poseidon)

Write Solana programs in TypeScript that compile to Anchor Rust. Poseidon transpiles TypeScript program definitions into valid Anchor code, letting developers who are more comfortable with TypeScript write on-chain programs without learning Rust first. The generated Anchor code is production-quality and can be deployed directly.

Choose Poseidon for rapid prototyping, for teams with strong TypeScript skills who want to ship quickly, or as a learning tool to understand Anchor patterns through a familiar language. The trade-off is that you are one abstraction layer removed from the Rust code, which can make debugging harder.

### Native solana-program

[https://docs.rs/solana-program](https://docs.rs/solana-program)

Direct SVM programming without any framework. You work with raw `AccountInfo`, manually parse instruction data, and write all validation yourself. This gives you absolute control with zero abstraction overhead, but requires significantly more code for the same functionality.

Use native development for educational purposes (to understand what Anchor does under the hood), for extremely specialized programs where even Pinocchio's abstractions are too much, or for single-instruction programs where framework overhead is not justified.

---

## Client SDKs

These libraries let you interact with Solana from TypeScript/JavaScript -- sending transactions, reading accounts, and building frontends.

### @solana/kit (web3.js 2.0)

[https://github.com/solana-labs/solana-web3.js](https://github.com/solana-labs/solana-web3.js)

The modern Solana TypeScript SDK, completely rewritten from scratch. It is tree-shakable (only import what you use), has a functional API design (no classes), and provides strong TypeScript types throughout. The architecture is modular -- RPC, transaction building, key management, and codecs are separate packages you compose together.

Use `@solana/kit` for new projects, especially frontends where bundle size matters. The tree-shaking alone can reduce your Solana-related bundle by 80%+ compared to the legacy SDK. The functional API also makes testing easier since there is no hidden state.

### @solana/web3.js 1.x

[https://www.npmjs.com/package/@solana/web3.js](https://www.npmjs.com/package/@solana/web3.js)

The legacy TypeScript SDK that most existing Solana code uses. Class-based API with `Connection`, `PublicKey`, `Transaction`, and `Keypair` as the core types. Anchor's TypeScript client (`@coral-xyz/anchor`) is built on top of 1.x, so if you are working with Anchor-generated clients, you will use this.

Use 1.x when working with existing codebases, Anchor projects, or any library that depends on it. It is stable and well-documented, just larger and less modern than the 2.0 rewrite.

### Solana Rust SDK (Client)

[https://docs.rs/solana-sdk](https://docs.rs/solana-sdk)

The Rust client SDK for interacting with Solana from off-chain applications. Distinct from `solana-program` (which is for on-chain code), this SDK provides transaction building, signing, RPC communication, and keypair management for backend services, CLI tools, indexers, and keepers. Use this when building Rust-based infrastructure that interacts with Solana -- trading bots, indexing services, automation scripts, or custom RPC tools.

### Solana Python SDK (solana-py)

[https://github.com/michaelhly/solana-py](https://github.com/michaelhly/solana-py)

Python client for Solana. Provides RPC methods, transaction building, and account operations for Python developers. Useful for data analysis scripts, Jupyter notebook interactions, backend services, and any Python tooling that needs to interact with Solana. Supports async operations via `solana.rpc.async_api`.

### Solana Go SDK

[https://github.com/gagliardetto/solana-go](https://github.com/gagliardetto/solana-go)

A Go client for Solana maintained by gagliardetto. Provides RPC methods, transaction building, program interaction, and WebSocket subscriptions. Well-suited for Go-based infrastructure -- indexers, validators, monitoring services, and backend APIs that interact with Solana.

### Codama (formerly Kinobi)

[https://github.com/codama-idl/codama](https://github.com/codama-idl/codama)

The standard code generation tool for Solana program clients, renamed from Kinobi and moved from `metaplex-foundation/kinobi` to `codama-idl/codama`. Codama takes a program's IDL (Codama IDL format, a superset of Anchor IDL) and generates typed clients in JavaScript (compatible with @solana/kit or Umi), Rust, Go, Dart, and Python. Visitors allow post-generation customization of instruction and account shapes.

Codama is the standard way to generate type-safe clients for programs using @solana/kit (web3.js 2.0). Without it, you write raw instruction builders by hand. The Solana Foundation officially documents it at [solana.com/docs/programs/codama/clients](https://solana.com/docs/programs/codama/clients). Use Codama when building a protocol that other developers will integrate with, when you need clients in multiple languages, or when targeting @solana/kit.

### TipLink

[https://docs.tiplink.io/](https://docs.tiplink.io/)

Wallet-as-a-service that creates disposable wallets via shareable links. TipLink lets you create wallets that users access through a URL -- no wallet app required. Use cases include airdrops (send tokens to anyone via link), onboarding (users interact with Solana before installing a wallet), gifting, and marketing campaigns. The SDK provides wallet creation, funding, and claiming flows that abstract the entire key management process.

---

## Scaffolding

### create-solana-dapp

[https://github.com/solana-foundation/create-solana-dapp](https://github.com/solana-foundation/create-solana-dapp)

Project scaffolding maintained by the Solana Foundation. It generates a complete project with an on-chain program, frontend, and test suite pre-configured. You choose your framework combination -- Anchor or native for the program, Next.js or React for the frontend. The generated project includes wallet connection, program interaction, and a working CI pipeline. Use this to skip the boilerplate and start building immediately.
