# DeFi Development

Building decentralized finance on Solana means integrating with a mature ecosystem of protocols, oracles, and standards. This page covers the major DeFi building blocks -- from swap routing to lending to oracle integration -- with enough detail to help you choose the right protocols for your project.

---

## Standards -- Superteam Brazil Contributions

Superteam Brazil is actively building open standards that make Solana DeFi more composable and interoperable.

### Solana Vault Standard (sRFC 40)

[https://github.com/SuperteamBrazil/solana-vault-standard](https://github.com/SuperteamBrazil/solana-vault-standard)

The ERC-4626 equivalent for Solana -- a standardized vault interface that defines how vaults accept deposits, process withdrawals, and report share values. The standard includes 8 vault variants covering lending vaults, staking vaults, yield aggregators, and more. Any wallet, aggregator, or protocol that implements the standard can interact with any compliant vault without custom integration code.

This matters because DeFi composability depends on standardized interfaces. Without a vault standard, every protocol implements deposits and withdrawals differently, forcing integrators to write custom code for each one. With sRFC 40, a wallet can display yield opportunities from any compliant vault through a single integration. Maintained by @kauenet, @thomgabriel, @vcnzo_ct and others.

### Solana Stablecoin Standard

[https://github.com/SuperteamBrazil/solana-stablecoin-standard](https://github.com/SuperteamBrazil/solana-stablecoin-standard)

SSS-1 and SSS-2 specifications for standardized stablecoin issuance on Solana. SSS-1 covers basic mint/burn operations with role-based access control. SSS-2 adds advanced features -- compliance hooks, blacklisting, upgradeable oracles, and reserve management. Both specifications are Token-2022 native, leveraging transfer hooks for compliance enforcement and confidential transfers for privacy.

This standard addresses a real gap in the ecosystem. As more stablecoins launch on Solana (especially for Latin American markets), having a common specification means wallets, exchanges, and DeFi protocols can support new stablecoins without custom integrations. Maintained by @lvj_luiz and @kauenet.

---

## DEX & Swap Routing

### Jupiter

[https://dev.jup.ag/docs/get-started](https://dev.jup.ag/docs/get-started)

The leading DEX aggregator on Solana and the default entry point for swaps. Jupiter routes trades across all major Solana DEXs to find the best price, splitting orders across multiple pools when necessary. Beyond basic swaps, Jupiter provides limit orders, dollar-cost averaging (DCA), and perpetual trading.

For developers, Jupiter's API and SDK are the easiest way to add swap functionality to your application. Rather than integrating individual DEX protocols, you integrate Jupiter once and get access to all of them. The developer portal at `dev.jup.ag` is the canonical hub, superseding the older `station.jup.ag` docs. The Swap API handles complex routes including multi-hop swaps, and the newer Ultra API provides simplified swap flows. A self-hosted version of the swap API is available for latency-critical use cases like liquidations. SDK: `@jup-ag/api` on npm. GitHub: [jup-ag/jupiter-swap-api-client](https://github.com/jup-ag/jupiter-swap-api-client).

### Raydium

[https://docs.raydium.io/](https://docs.raydium.io/)

An AMM (Automated Market Maker) with concentrated liquidity pools. Raydium has deep liquidity for SOL pairs and is often the first venue where new tokens launch. Their concentrated liquidity implementation (CLMM) lets liquidity providers focus capital in specific price ranges for higher efficiency.

For developers building liquidity infrastructure, Raydium's SDK provides tools for pool creation, position management, and swap execution. If you are launching a new token, Raydium is likely where you will create the initial liquidity pool.

### Orca / Whirlpools

[https://docs.orca.so/](https://docs.orca.so/)

Concentrated liquidity pools with a clean, well-designed SDK. Orca's Whirlpools implementation is known for its developer experience -- the SDK is well-typed, well-documented, and straightforward to integrate. Orca focuses specifically on concentrated liquidity, doing one thing well.

Choose Orca when you need direct pool interaction (not aggregated routing), when you want the cleanest SDK for concentrated liquidity position management, or when you are building a protocol that needs to create or manage LP positions programmatically.

### Meteora

[https://docs.meteora.ag/](https://docs.meteora.ag/)

Dynamic liquidity with the DLMM (Dynamic Liquidity Market Maker) model. Meteora's innovation is in how it handles liquidity bins -- price is divided into discrete bins, and swaps within a bin have zero slippage. Their fee model dynamically adjusts based on market volatility, meaning LPs earn more during volatile periods.

For developers, Meteora is interesting if you are building on top of novel AMM mechanics or need the specific properties of bin-based liquidity. Their DLMM also powers many token launches through their launch pool feature.

---

## Lending & Borrowing

### Drift

[https://docs.drift.trade/](https://docs.drift.trade/)

A full-featured trading platform offering perpetual futures, spot trading, lending, and borrowing in a single protocol. Drift's architecture uses a keeper network for order matching and liquidations. Their SDK allows programmatic access to all features -- opening perp positions, managing margin, earning lending yield, and building trading bots.

Use Drift when you need more than basic lending -- the combination of perps, spot, and lending in one protocol makes it useful for building complex DeFi applications that need multiple primitives.

### Marginfi

[https://docs.marginfi.com/](https://docs.marginfi.com/)

A lending and borrowing protocol focused on capital efficiency and risk management. Marginfi supports multiple collateral types and provides a straightforward SDK for depositing collateral, borrowing assets, and managing positions. Their risk engine isolates different asset classes to prevent contagion.

Integrate Marginfi when your application needs lending/borrowing functionality. Their program accounts follow a consistent pattern that makes CPI integration relatively straightforward.

### Kamino

[https://docs.kamino.finance/](https://docs.kamino.finance/)

Automated liquidity and lending strategies. Kamino started as an automated liquidity management tool (auto-rebalancing LP positions on Orca and Raydium) and expanded into lending. Their lending product is integrated with their liquidity vaults, meaning LP tokens can be used as collateral.

Kamino is useful when you are building applications that need yield optimization or automated position management. Their vault strategies abstract the complexity of active liquidity management.

---

## Oracles

Oracles provide off-chain data (prices, randomness, custom feeds) to on-chain programs. Choosing the right oracle and integrating it correctly is critical for DeFi security.

### Pyth Network

[https://docs.pyth.network/](https://docs.pyth.network/)

High-frequency, low-latency price feeds used by the majority of Solana DeFi protocols. Pyth uses a pull-based model -- price data is published to an off-chain data source, and your program pulls the latest price when it needs it. This gives you sub-second price updates without paying for on-chain writes on every price tick.

Pyth should be your default oracle for any DeFi application that needs price data. The integration requires posting the price update to an account before your instruction reads it, which means your frontend must fetch and include the price update in the transaction. Their SDK handles this, but be aware of the pattern. Always validate price staleness and confidence intervals in your program.

### Switchboard

[https://docs.switchboard.xyz/](https://docs.switchboard.xyz/)

A permissionless oracle network where anyone can create custom data feeds. While Pyth focuses on major asset prices, Switchboard lets you bring arbitrary off-chain data on-chain -- custom APIs, randomness, sports scores, weather data, or any HTTP endpoint.

Use Switchboard when you need data that Pyth does not provide, when you want verifiable randomness (VRF) for gaming or lottery applications, or when you need custom data feeds that aggregate multiple sources.

---

## Liquid Staking

### Sanctum

[https://docs.sanctum.so/](https://docs.sanctum.so/)

Liquid staking infrastructure that powers LST (Liquid Staking Token) creation, trading, and instant unstaking on Solana. Sanctum's unique value is the LST router -- it enables instant swaps between any LSTs and SOL with minimal slippage, solving the liquidity fragmentation problem that plagues liquid staking across chains.

For developers, Sanctum is relevant if you are building staking products, LST-based DeFi, or any application that needs to work with multiple LST types. Their Infinity pool accepts any LST as input, making integration simple.

### Jito

[https://docs.jito.network/](https://docs.jito.network/)

MEV-powered liquid staking. JitoSOL earns standard staking yield plus additional MEV rewards from Jito's block engine, making it one of the highest-yielding LSTs on Solana. Jito's infrastructure also includes tip distribution for validators and a block engine that searchers use for MEV extraction.

For developers, Jito's relevance extends beyond staking. If you are building MEV-aware applications, need to understand Solana's MEV landscape, or want to integrate JitoSOL as collateral, Jito's documentation covers the full stack from tip accounts to restaking.

---

## Bridging & Cross-Chain

### Wormhole

[https://docs.wormhole.com/](https://docs.wormhole.com/)

A cross-chain messaging protocol that enables asset transfers and arbitrary message passing between Solana and 30+ other chains. Wormhole uses a guardian network to verify cross-chain messages, and its Solana integration supports bridging SOL, SPL tokens, and NFTs to EVM chains, Cosmos, and more.

For developers, Wormhole's SDK lets you build applications that interact with assets or data on multiple chains. Use cases include cross-chain token bridges, multi-chain governance, and applications that need to verify events from other chains on Solana.

### deBridge

[https://docs.debridge.finance/](https://docs.debridge.finance/)

A high-performance cross-chain bridge with Solana support. deBridge focuses on fast, capital-efficient cross-chain transfers with competitive pricing. Their SDK provides swap and bridge functionality that can be integrated into dApps for users who need to move assets between Solana and other chains.

---

## DeFi Aggregation & Analytics

### Birdeye

[https://docs.birdeye.so/](https://docs.birdeye.so/)

Token analytics and data API for Solana. Birdeye provides real-time price feeds, token security scores, wallet portfolio data, OHLCV charts, and trading pair analytics via API. Their data covers tokens across all major Solana DEXs. Useful for building trading interfaces, portfolio trackers, or any application that needs comprehensive token market data.

### DeFiLlama

[https://defillama.com/docs/api](https://defillama.com/docs/api)

Open-source DeFi analytics platform with comprehensive Solana protocol data. DeFiLlama tracks TVL, yields, token prices, and protocol metrics across all Solana DeFi protocols. Their API is free to use and provides historical data useful for research, analytics dashboards, and yield comparison tools.

---

## On-Chain Order Books

### Phoenix DEX

[https://github.com/Ellipsis-Labs/phoenix-v1](https://github.com/Ellipsis-Labs/phoenix-v1)

A fully on-chain central limit order book (CLOB) built by Ellipsis Labs. Phoenix's key innovation is its crankless design -- trades settle atomically within the instruction without requiring a separate crank transaction, eliminating the keeper dependency that plagued Serum. The program is open source under Apache-2.0.

For developers, Phoenix provides a clean SDK ([phoenix-sdk](https://github.com/Ellipsis-Labs/phoenix-sdk)) and CLI ([phoenix-cli](https://github.com/Ellipsis-Labs/phoenix-cli)) for market creation, limit order placement/cancellation, order book queries, and trade settlement. Study the codebase for tick-size/lot-size normalization, order matching logic, and the "trader state" account pattern.

### OpenBook v2

[https://github.com/openbook-dex/openbook-v2](https://github.com/openbook-dex/openbook-v2)

A full rewrite of the community order book (not a Serum fork), based on Mango v4's codebase. The monorepo contains both the Solana program and TypeScript client (`@openbook-dex/openbook-v2`). Developed as the community's decentralized response to the Serum/FTX collapse. Note: some components are GPL-licensed behind the `enable-gpl` feature flag.

---

## NFT Trading Infrastructure

### Tensor Trade

[https://dev.tensor.trade/](https://dev.tensor.trade/)

Programmatic access to Solana's leading NFT trading infrastructure. Tensor open-sourced all five of its on-chain programs at Breakpoint 2024: marketplace (listings, limit orders, royalties), AMM (bonding curve pools), escrow (bid management), fees (protocol distribution), and whitelist (collection verification). All programs are permissionless -- any frontend can tap into Tensor's on-chain liquidity, and integrators earn 50% of generated fees.

The SDK approach is preferred over the REST API because it requires no API key and has no rate limiting. SDKs available in TypeScript and Rust via the [tensor-foundation](https://github.com/tensor-foundation) GitHub org. Covers NFT listing, bidding, buying, collection bids, and compressed NFT operations.

---

## Automation & Scheduling

### TukTuk

[https://www.tuktuk.fun/docs](https://www.tuktuk.fun/docs)

Permissionless on-chain automation engine built by Noah Prince (Head of Protocol Engineering at Helium) -- the direct successor to Clockwork, which shut down in 2023. TukTuk uses PDAs and bitmaps for task scheduling: you create a task queue, fund it with SOL, and any permissionless crank operator can execute your tasks for a per-crank payment. Supports time-based schedules, on-chain event triggers, and recursive cron-like tasks.

SDKs in TypeScript and Rust. GitHub: [helium/tuktuk](https://github.com/helium/tuktuk). Essential for any protocol requiring scheduled execution -- liquidations, vesting unlocks, TWAP updates, game state transitions, or automated yield harvesting.

---

## Priority Fee Estimation

Understanding and setting priority fees correctly is critical for transaction landing on Solana. Since SIMD-0096, 100% of priority fees go to the block-producing validator (previously 50% was burned), creating stronger incentive for validators to include high-fee transactions.

### Helius Priority Fee API

[https://www.helius.dev/docs/priority-fee-api](https://www.helius.dev/docs/priority-fee-api)

The recommended priority fee estimation service. Returns 6 priority levels (Min, Low, Medium, High, VeryHigh, UnsafeMax) based on recent fee data for your specific account keys. More accurate than the native RPC method because it considers the specific accounts your transaction touches, not just global averages.

### Solana Priority Fee Guide

[https://solana.com/developers/guides/advanced/how-to-use-priority-fees](https://solana.com/developers/guides/advanced/how-to-use-priority-fees)

The official guide covering the Compute Budget Program, how to set priority fees via `ComputeBudgetProgram.setComputeUnitPrice()`, and how to estimate the right amount using `getRecentPrioritizationFees`. Also covers setting compute unit limits based on simulation results -- always set a tight limit (actual usage + 10-20% buffer) to avoid overpaying.
