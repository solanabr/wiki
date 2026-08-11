# Solana Vault Standard

**GitHub**: [solanabr/solana-vault-standard](https://github.com/solanabr/solana-vault-standard)
**Status**: Active development — 12 variants live on devnet
**Maintained by**: @kauenet, @thomgabriel, @vcnzo_ct and others

## Overview

A standardized vault interface for Solana — the equivalent of ERC-4626 for the Solana ecosystem. Referenced in the ecosystem's sRFC 40 vault-standard discussion as an independently developed implementation.

## Why It Matters

Without a standard, every DeFi protocol implements vaults differently. This makes composability painful: wallets need custom integrations for each protocol, aggregators cannot generalize across vaults, and developers reinvent the same deposit/withdraw/accounting logic repeatedly.

The Solana Vault Standard defines a common interface so that any protocol can integrate with any compliant vault — the same way ERC-4626 unified vault interactions on Ethereum.

## Features

### sRFC 40

SVS is referenced in the [sRFC 40: Vault Standard Program discussion](https://github.com/solana-foundation/SRFCs/discussions/10) at solana-foundation/SRFCs as an independently developed implementation informing the emerging ecosystem vault standard (which currently prioritizes async vaults for RWA issuers).

### 12 Vault Variants

Reference implementations covering different DeFi use cases, all live on devnet:

- **SVS-1/2** — Public vaults (live and stored balance)
- **SVS-3/4** — Private vaults with Token-2022 confidential transfers
- **SVS-5/6** — Streaming-yield vaults
- **SVS-7** — Native SOL vault
- **SVS-8** — Multi-asset basket
- **SVS-9** — Allocator vault-of-vaults
- **SVS-10** — Async ERC-7540-style vault
- **SVS-11** — Credit-markets vault with KYC and oracle NAV
- **SVS-12** — Tranched vault

### Standardized Interface

A common deposit/withdraw/accounting interface adapted for Solana's account model. Handles the differences between Solana's account-based architecture and Ethereum's contract-based model.

### Composability

Enables wallets, aggregators, and protocols to interact with any compliant vault through a single integration. Build once, connect to every vault.

### Reference Implementations

Working Anchor programs for each vault variant. These serve as both documentation and production-ready starting points for protocol teams. The repository also ships a TypeScript SDK and a CLI.

## Tech Stack

- Anchor
- Rust
- TypeScript SDK and CLI
