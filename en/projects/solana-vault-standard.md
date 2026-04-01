# Solana Vault Standard

**GitHub**: [SuperteamBrazil/solana-vault-standard](https://github.com/SuperteamBrazil/solana-vault-standard)
**Status**: sRFC submitted, active development
**Maintained by**: @kauenet, @thomgabriel, @vcnzo_ct and others

## Overview

A standardized vault interface for Solana — the equivalent of ERC-4626 for the Solana ecosystem. Submitted as sRFC 40 to the Solana Foundation for ecosystem-wide adoption.

## Why It Matters

Without a standard, every DeFi protocol implements vaults differently. This makes composability painful: wallets need custom integrations for each protocol, aggregators cannot generalize across vaults, and developers reinvent the same deposit/withdraw/accounting logic repeatedly.

The Solana Vault Standard defines a common interface so that any protocol can integrate with any compliant vault — the same way ERC-4626 unified vault interactions on Ethereum.

## Features

### sRFC 40

A formal Solana Request for Comments, currently under review by the Solana Foundation. The proposal defines the interface, account structures, and expected behaviors for compliant vaults.

### 8 Vault Variants

Reference implementations covering different DeFi use cases:

- Lending vaults
- Staking vaults
- Yield aggregation vaults
- And additional variants for specialized strategies

### Standardized Interface

A common deposit/withdraw/accounting interface adapted for Solana's account model. Handles the differences between Solana's account-based architecture and Ethereum's contract-based model.

### Composability

Enables wallets, aggregators, and protocols to interact with any compliant vault through a single integration. Build once, connect to every vault.

### Reference Implementations

Working Anchor programs for each vault variant. These serve as both documentation and production-ready starting points for protocol teams.

## Tech Stack

- Anchor
- Rust
