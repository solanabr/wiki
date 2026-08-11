# Solana Stablecoin Standard

**GitHub**: [solanabr/solana-stablecoin-standard](https://github.com/solanabr/solana-stablecoin-standard)
**Status**: Complete — v1 shipped March 2026; repository archived (read-only), available as a reference implementation
**Maintained by**: @lvj_luiz and @kauenet

## Overview

A standardized interface for stablecoin issuance and management on Solana. Defines two specifications — SSS-1 (minimal) for core stablecoin functionality and SSS-2 (compliant), which adds blacklist enforcement via transfer hook and KYC-gated accounts.

The v1 release shipped a complete toolkit: the SSS-Core Anchor program, a blacklist transfer-hook program, a CLI, a TypeScript SDK, a REST backend, and a React demo.

## Why It Matters

Stablecoins are the backbone of DeFi. Without a shared standard, each issuer implements minting, burning, freezing, and compliance controls differently. This fragments the ecosystem: exchanges need custom integrations per stablecoin, DeFi protocols cannot generalize their stablecoin handling, and compliance becomes ad-hoc.

The Solana Stablecoin Standard provides a common interface so that issuers, exchanges, and DeFi protocols can interoperate through a single specification.

## Features

### SSS-1 (Minimal)

The core stablecoin interface covering fundamental operations:

- Mint and burn controls
- Freeze and thaw accounts
- Transfer restrictions
- Authority management

### SSS-2 (Compliant)

Builds on SSS-1 with blacklist enforcement via transfer hook and KYC-gated accounts, for institutional and compliance-focused deployments:

- Compliance hooks for KYC/AML enforcement
- Blacklisting and whitelisting
- Upgradeable oracle integration
- Configurable transfer restrictions

### OpenZeppelin Collaboration

Main contributor @lvj_luiz from OpenZeppelin brings battle-tested security expertise from the Ethereum ecosystem. The standard benefits from the same rigor applied to OpenZeppelin's widely-used Solidity contracts.

### Compliance-Ready

Built with regulatory requirements in mind. Transfer hooks enable issuers to enforce KYC checks, geographic restrictions, and other compliance policies at the protocol level.

### Token-2022 Native

Leverages Solana's Token Extensions program for advanced functionality:

- **Transfer hooks** for compliance enforcement
- **Confidential transfers** for privacy-preserving payments
- **Non-transferable metadata** for issuer attestations

## Live References

- **Video demo**: [Solana Stablecoin Standard demo](https://youtu.be/3y86hHGvMO4)
- **SSS-Core program (devnet)**: `4ZFzYcNVDSew79hSAVRdtDuMqe9g4vYh7CFvitPSy5DD`
- **Blacklist Transfer Hook program (devnet)**: `84rPjkmmoP3oYZVxjtL2rdcT6hC5Rts6N5XzJTFcJEk6`

Both program IDs are as listed in the repository README.

## Tech Stack

- Anchor
- Token-2022
- Rust
