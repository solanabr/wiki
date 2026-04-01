# Testing & Debugging

Testing on Solana follows a pyramid: fast unit tests at the base, integration tests against real state in the middle, and fuzz testing for security at the top. This page explains each layer and when to use which tool.

A common mistake is running all tests against `solana-test-validator`. That works but is slow -- starting a validator, deploying programs, and waiting for confirmations adds seconds to every test run. The tools below let you test in-process with sub-second execution times.

---

## Unit Testing -- Fast, Isolated, No Validator

Unit tests verify individual instructions and account operations. They should run in milliseconds, not seconds.

### LiteSVM

[https://github.com/LiteSVM/litesvm](https://github.com/LiteSVM/litesvm)

A lightweight, in-process Solana Virtual Machine designed specifically for testing. LiteSVM boots a minimal SVM instance in your test process -- no validator, no network, no RPC. Tests execute in sub-second times, making test-driven development practical. You create accounts, deploy programs, and process instructions all within a single Rust test function.

LiteSVM is the recommended default for unit testing Solana programs. It supports both Anchor and native programs, handles system program operations (account creation, transfers), and gives you full control over the test environment (clock, rent, slot). Use it whenever you need fast feedback on instruction logic.

### Mollusk

[https://github.com/buffalojoec/mollusk](https://github.com/buffalojoec/mollusk)

An SVM test harness focused on native (non-Anchor) Solana programs. Mollusk provides a clean API for testing individual instructions with precise control over account inputs and expected outputs. Its standout feature is built-in compute unit measurement -- every test result includes the exact CU consumed, making it the tool of choice for CU profiling and optimization.

Use Mollusk when you are writing native programs (especially Pinocchio), when you need CU profiling as part of your test suite, or when you want the simplest possible test API without Anchor dependencies.

---

## Integration Testing -- Real State, Real Programs

Integration tests verify that your program works correctly when interacting with other deployed programs and real account data.

### Surfpool

[https://github.com/txtx/surfpool](https://github.com/txtx/surfpool)

Surfpool lets you replay mainnet or devnet state locally without deploying anything. It fetches real account data and program state, then runs your transactions against that snapshot. This means you can test your program's interactions with Jupiter, Pyth, SPL Token, and any other deployed program using their actual on-chain state.

Use Surfpool when you need to test CPIs against real programs, when you want to verify your program works with production account layouts, or when you need to reproduce a mainnet issue locally. It bridges the gap between unit tests (isolated) and devnet deployment (slow and costly).

### Bankrun

[https://github.com/kevinheavey/solana-bankrun](https://github.com/kevinheavey/solana-bankrun)

BanksServer running inside Node.js for fast Anchor TypeScript test execution. Bankrun gives you a test environment that behaves like a real Solana cluster but runs entirely in-process. It is specifically designed for Anchor projects where your tests are written in TypeScript -- it replaces the `anchor test` flow with something much faster.

Use Bankrun when you have an Anchor project with TypeScript integration tests and want faster execution than `solana-test-validator`. It supports time travel (advancing slots and timestamps), account manipulation, and all standard RPC methods.

---

## Fuzz Testing -- Finding Edge Cases

Fuzz testing generates random inputs to find bugs that structured tests miss. It is essential for security-critical programs.

### Trident

[https://github.com/Ackee-Blockchain/trident](https://github.com/Ackee-Blockchain/trident)

Property-based fuzz testing framework built specifically for Solana programs, created by Ackee Blockchain (professional Solana auditors). Trident generates random instruction sequences and account configurations, then checks that your program's invariants hold. It has found real vulnerabilities in production programs that manual testing and unit tests missed.

Use Trident before any mainnet deployment that handles user funds. Define your program's invariants (e.g., "total deposits must equal sum of all user balances") and let Trident try to break them. The initial setup takes time, but it provides confidence that no combination of inputs can violate your program's guarantees.

---

## Security Testing & Auditing

### OtterSec (formerly Sec3)

[https://osec.io/](https://osec.io/)

Professional Solana security auditors and the team behind several automated audit tools. OtterSec has audited many of the largest Solana protocols including Jupiter, Marinade, and Tensor. Their open-source contributions include security tooling and vulnerability research that benefits the entire ecosystem.

For developers, OtterSec publishes audit reports that serve as excellent case studies for understanding real-world Solana vulnerabilities. Reading their published audits is one of the best ways to learn what security issues to look for in your own programs.

### Neodyme Security Resources

[https://neodyme.io/](https://neodyme.io/)

Solana security research and audit firm known for deep technical analysis. Neodyme publishes blog posts and writeups on Solana-specific vulnerability patterns -- type cosplay attacks, PDA substitution, missing signer checks, and CPI abuse. Their research is required reading for anyone deploying programs that handle user funds.

---

## Block Explorers

When something goes wrong (or right) on-chain, explorers help you understand what happened.

### Solana Explorer

[https://explorer.solana.com/](https://explorer.solana.com/)

The official explorer maintained by the Solana Foundation. It displays transactions, accounts, programs, and validators across all clusters (mainnet, devnet, testnet). The transaction view shows instruction details, account changes, and compute unit consumption. Use it as your default for inspecting transactions and verifying deployments. Supports switching between clusters via the URL.

### Solscan

[https://solscan.io/](https://solscan.io/)

A comprehensive analytics-focused explorer. Solscan excels at token-level data -- token holders, transfer history, market data, and DeFi activity. It also provides account analytics, program statistics, and a cleaner UI for navigating complex transactions. Use Solscan when you need token analytics, holder distributions, or a more visual representation of on-chain activity.

### SolanaFM

[https://solana.fm/](https://solana.fm/)

A developer-focused explorer that automatically decodes transaction data using known program IDLs. When you inspect a transaction, SolanaFM shows you the decoded instruction parameters and account names rather than raw hex data. This makes debugging significantly faster because you can see exactly what your program received and how it interpreted the inputs.

### XRAY

[https://xray.helius.xyz/](https://xray.helius.xyz/)

A minimal, human-readable explorer built by Helius. XRAY focuses on making transaction data understandable to non-technical users -- it translates raw Solana transactions into plain-language descriptions like "Swapped 1.5 SOL for 200 USDC on Jupiter." Use it when you need to quickly understand what a transaction did without parsing instruction data, or when you want to share transaction details with non-developers.
