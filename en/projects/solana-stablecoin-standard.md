# Solana Stablecoin Standard

**GitHub**: [SuperteamBrazil/solana-stablecoin-standard](https://github.com/SuperteamBrazil/solana-stablecoin-standard)
**Status**: Active development
**Maintained by**: @lvj_luiz and @kauenet

## Overview

A standardized interface for stablecoin issuance and management on Solana. Defines two specifications — SSS-1 for core stablecoin functionality and SSS-2 for advanced compliance and operational features.

## Why It Matters

Stablecoins are the backbone of DeFi. Without a shared standard, each issuer implements minting, burning, freezing, and compliance controls differently. This fragments the ecosystem: exchanges need custom integrations per stablecoin, DeFi protocols cannot generalize their stablecoin handling, and compliance becomes ad-hoc.

The Solana Stablecoin Standard provides a common interface so that issuers, exchanges, and DeFi protocols can interoperate through a single specification.

## Features

### SSS-1 Specification

The core stablecoin interface covering fundamental operations:

- Mint and burn controls
- Freeze and thaw accounts
- Transfer restrictions
- Authority management

### SSS-2 Specification

Advanced features for institutional and compliance-focused deployments:

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

## Tech Stack

- Anchor
- Token-2022
- Rust
