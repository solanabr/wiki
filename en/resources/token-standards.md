# Token Standards

Tokens on Solana are managed by on-chain programs -- primarily SPL Token and its successor Token-2022. Understanding these programs, their extensions, and the broader digital asset standards (NFTs, compressed NFTs) is essential for any Solana developer. This page covers the full landscape.

---

## SPL Token Program

### SPL Token

[https://spl.solana.com/token](https://spl.solana.com/token)

The original token program that powers the majority of tokens on Solana today. SPL Token handles minting, transferring, burning, freezing, and delegating tokens. Every SOL-based fungible token you have interacted with -- USDC, BONK, JUP -- uses this program.

The core concepts are straightforward: a **Mint** account defines the token (decimals, supply, authorities), and **Token Accounts** hold balances for individual owners. Associated Token Accounts (ATAs) provide a deterministic address for each owner-mint pair, so you always know where someone's tokens live. Understanding SPL Token is foundational -- even if you use Token-2022, the base concepts are the same.

### Token-2022 / Token Extensions

[https://spl.solana.com/token-2022](https://spl.solana.com/token-2022)

The next-generation token program that includes everything SPL Token does plus a modular extension system. Token-2022 is fully backward-compatible -- any operation you can do with SPL Token works with Token-2022 -- but adds powerful new capabilities through extensions that you enable at mint creation time.

Token-2022 is the recommended program for new token launches. The extensions system lets you build features directly into the token that would otherwise require custom programs, reducing complexity and attack surface.

---

## Token-2022 Extensions

Each extension adds a specific capability to your token. Extensions are selected when the mint is created and cannot be changed afterward. Here is what each one does and when you would use it.

### Transfer Hooks

Execute custom program logic on every transfer. When a token with a transfer hook is transferred, the token program automatically CPIs into your hook program, passing the transfer details. Use cases include royalty enforcement on secondary sales, compliance checks that validate sender/receiver against a whitelist, transfer analytics and logging, and custom fee distribution.

This is arguably the most powerful extension because it lets you enforce arbitrary invariants on every transfer without requiring users to interact with your program directly.

### Confidential Transfers

Encrypted balances and transfer amounts using zero-knowledge proofs. With confidential transfers enabled, token balances are stored as encrypted ciphertexts on-chain, and transfers include ZK proofs that verify the sender has sufficient balance without revealing the actual amount. The sender and receiver can still see their own balances.

Use cases include privacy-preserving stablecoins, payroll systems where salary amounts should not be public, and any application where financial privacy matters. Note that the computational overhead is significant -- transactions with confidential transfers consume more CU.

### Transfer Fees

Protocol-level fees applied automatically on every transfer. The mint authority defines a fee (as a percentage in basis points, with a maximum cap), and the fee is withheld in the recipient's token account on every transfer. The fee can then be harvested by the withdrawal authority.

Use this when you want guaranteed protocol revenue from token transfers without building a custom program. Unlike transfer hooks (which can implement fees but require a separate program), transfer fees are built directly into the token program and cannot be circumvented.

### Permanent Delegate

An irrevocable delegate authority that can transfer or burn tokens from any token account for that mint. Once set at mint creation, the permanent delegate has the ability to move tokens without the owner's explicit approval.

This exists primarily for regulatory compliance -- stablecoin issuers may need the ability to freeze or claw back tokens to comply with legal requirements. It is a powerful and potentially controversial feature that should be used with clear governance and transparency.

### Non-Transferable (Soulbound)

Tokens that cannot be transferred after minting. The token is permanently bound to the account it was minted to. Use cases include credentials (university degrees, certifications), reputation tokens, governance participation records, and any asset that should represent a non-tradeable achievement or status. This is Solana's native implementation of soulbound tokens.

### Interest-Bearing

Tokens with a display balance that accrues interest over time. The actual on-chain balance does not change -- instead, the token program calculates a display amount based on the interest rate and elapsed time. The interest rate is set by the rate authority and can be updated.

Use this for yield-bearing stablecoins, savings tokens, or any fungible token that should appear to grow in balance over time. The actual yield distribution (if any) must be handled separately -- this extension only affects how the balance is displayed.

### Metadata

On-chain metadata stored directly on the mint account, without requiring Metaplex or any external program. You can store a name, symbol, URI, and arbitrary key-value pairs directly in the mint. This is significantly simpler and cheaper than using the Metaplex Token Metadata program.

Use this for simple fungible tokens that need basic metadata (name, symbol, image) but do not need the full NFT feature set. For NFTs and complex digital assets, Metaplex Core is still the better choice.

### Group/Member

Token grouping and hierarchies. A mint can be designated as a group, and other mints can be added as members of that group. This creates on-chain relationships between tokens -- useful for token collections, organizational structures, bundled products, or any scenario where tokens need a parent-child relationship.

---

## Stablecoin Standards -- Superteam Brazil

### Solana Stablecoin Standard

[https://github.com/SuperteamBrazil/solana-stablecoin-standard](https://github.com/SuperteamBrazil/solana-stablecoin-standard)

SSS-1 and SSS-2 specifications for standardized stablecoin issuance on Solana. SSS-1 defines the basic interface -- mint, burn, pause, role management -- that any stablecoin should implement. SSS-2 extends this with advanced features including compliance hooks (transfer hooks that enforce KYC/AML rules), blacklist management, upgradeable oracle integration for price feeds, and reserve transparency mechanisms.

Both specifications are built natively on Token-2022, leveraging transfer hooks for compliance enforcement and confidential transfers for privacy-preserving transactions. The standard is designed with Latin American markets in mind, where stablecoin adoption is growing rapidly and regulatory requirements vary by jurisdiction. Having a common specification means wallets, exchanges, and DeFi protocols can support new compliant stablecoins without custom integration work. Maintained by @lvj_luiz and @kauenet.

---

## NFT & Digital Assets

### Metaplex Core

[https://developers.metaplex.com/core](https://developers.metaplex.com/core)

The next-generation NFT standard and the recommended choice for new NFT projects on Solana. Core uses a single account per NFT (vs the 3-5 accounts required by the legacy standard), reducing rent costs and simplifying queries. It introduces a plugin system for adding functionality -- royalties, freeze, burn, and custom plugins -- without modifying the core program.

Core enforces royalties at the protocol level, meaning creators can guarantee they receive royalties on secondary sales. The single-account design also makes collection queries faster and cheaper through the DAS API. If you are starting a new NFT project, use Core.

### Metaplex Bubblegum

[https://developers.metaplex.com/bubblegum](https://developers.metaplex.com/bubblegum)

Compressed NFTs (cNFTs) via state compression using concurrent Merkle trees. Bubblegum lets you mint millions of NFTs for pennies by storing only a Merkle root on-chain and the full data in off-chain indexed storage (accessible via the DAS API from providers like Helius).

The trade-off is complexity -- reading compressed NFTs requires an indexer, and transfers require Merkle proofs. But the cost savings are dramatic: minting 1 million NFTs costs a few SOL with compression vs thousands of SOL without. Use Bubblegum for large-scale airdrops, gaming assets, loyalty programs, or any use case where you need high volume at low cost.

### Metaplex Token Metadata

[https://developers.metaplex.com/token-metadata](https://developers.metaplex.com/token-metadata)

The legacy metadata standard that most existing Solana NFTs use. Token Metadata attaches a metadata account to an SPL Token mint, storing name, symbol, URI (pointing to off-chain JSON), creators, and royalty information. While Metaplex Core is the recommended standard for new projects, Token Metadata remains important because the vast majority of existing NFTs use it.

You will encounter Token Metadata when working with existing collections, marketplaces, or any tooling that predates Core. Understanding both standards is necessary for building applications that interact with the full range of Solana NFTs.

### Metaplex Documentation

[https://developers.metaplex.com/](https://developers.metaplex.com/)

The full Metaplex developer platform documentation covering all their programs and tools -- Core, Bubblegum, Token Metadata, Candy Machine (minting), Sugar (CLI), Umi (client framework), and more. This is your starting point for any NFT or digital asset development on Solana. The documentation includes guides, API references, and code examples for each product.

### MPL-Hybrid (MPL-404)

[https://developers.metaplex.com/mpl-hybrid](https://developers.metaplex.com/mpl-hybrid)

A protocol for hybrid NFT-fungible token assets that can switch between being an NFT and a fungible token. MPL-404 enables "re-rolling" mechanics where holders can swap between NFT and token forms, creating unique trading and gamification dynamics. The protocol handles escrow, swapping, and metadata management for both states. Use this for gaming assets that need liquidity, collectibles with fungible trading pairs, or any asset that benefits from dual representation.

---

## Advanced Token-2022 Features

### Confidential Balances

Confidential Balances is an evolution of the Confidential Transfers extension that applies homomorphic encryption to all token balances, not just transfers. With Confidential Balances enabled, the on-chain balance itself is encrypted -- only the account owner (or designated auditors) can decrypt and view the actual amount. This provides stronger privacy guarantees than Confidential Transfers alone and is being developed for use cases like institutional treasury management, private payroll systems, and regulated financial products where balance privacy is a compliance requirement.

### Token-2022 CLI Tools

[https://spl.solana.com/token-2022/extensions](https://spl.solana.com/token-2022/extensions)

The `spl-token` CLI includes full support for creating and managing Token-2022 mints with extensions. You can create mints with transfer hooks, fees, metadata, and other extensions directly from the command line -- useful for testing, prototyping, and one-off administrative operations. The CLI documentation provides command examples for each extension type, making it the fastest way to experiment with Token-2022 features before writing program code.

---

## Token Ecosystem Tools

### Solana Token List

[https://github.com/solana-labs/token-list](https://github.com/solana-labs/token-list)

The legacy token registry that maps mint addresses to metadata (name, symbol, logo). While this registry is now deprecated in favor of on-chain metadata (Token-2022 metadata extension or Metaplex Token Metadata), it remains relevant because many existing tokens still rely on it, and some older tools and wallets reference it. Understanding the transition from off-chain registries to on-chain metadata is important context for token development.

### DAS API (Digital Asset Standard)

[https://docs.helius.dev/compression-and-das-api/digital-asset-standard-das-api](https://docs.helius.dev/compression-and-das-api/digital-asset-standard-das-api)

The DAS API provides a unified interface for querying all types of digital assets on Solana -- regular NFTs, compressed NFTs, fungible tokens, and Token-2022 assets. Supported by RPC providers like Helius, the DAS API abstracts away the differences between asset types, letting you query by owner, collection, creator, or attributes with a single API. Essential for any application that needs to display or manage user assets across the full spectrum of Solana token standards.
