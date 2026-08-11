# Gaming & Mobile

Solana's sub-second finality and low fees make it uniquely suited for gaming and mobile applications where real-time interactions and microtransactions are essential. This page covers the SDKs, engines, and tools for building games and mobile apps on Solana.

---

## Game Development

### Solana.Unity SDK

[https://solana.unity-sdk.gg/](https://solana.unity-sdk.gg/)

The primary SDK for Unity game developers building on Solana. It provides wallet connection (Phantom, Solflare, SMS wallet adapter), transaction signing, NFT loading and display, in-game token management, and account deserialization -- all within Unity's C# environment. The SDK handles the complexity of bridging Unity's synchronous game loop with Solana's asynchronous blockchain interactions.

This is the entry point for any Unity developer who wants to integrate Solana. The SDK supports both desktop and mobile builds, handles wallet adapter protocols for mobile devices, and includes helpers for common operations like fetching token balances, reading program accounts, and building transactions. If you are coming from a game development background with no blockchain experience, this SDK abstracts the Solana-specific complexity while giving you full access when you need it.

### MagicBlock

[https://docs.magicblock.gg/](https://docs.magicblock.gg/)

An on-chain game engine that solves one of the hardest problems in blockchain gaming: real-time multiplayer with on-chain state. MagicBlock uses ephemeral rollups -- temporary execution environments that process game transactions at high speed, then settle the results back to Solana. This enables sub-second game state updates while maintaining the security and composability of on-chain data.

MagicBlock matters because most "blockchain games" keep gameplay off-chain and only use the blockchain for asset ownership. MagicBlock enables truly on-chain gameplay where game state lives on Solana, other programs can compose with it, and players have verifiable game histories. Their Entity Component System (ECS) architecture is familiar to game developers and maps well to Solana's account model. Use MagicBlock when you want real-time multiplayer gameplay with on-chain state -- think strategy games, card games, or any game where verifiable state matters.

### PlaySolana

[https://playsolana.com/](https://playsolana.com/)

A gaming ecosystem and tooling platform for Solana game development. PlaySolana provides resources, SDKs, and infrastructure for game studios building on Solana. They focus on reducing the barriers to entry for game developers who are new to blockchain -- providing templates, documentation, and integration tools that simplify common game-blockchain interactions like item minting, marketplace integration, and player authentication.

### Unreal Engine SDK (Star Atlas Foundation Kit)

[https://github.com/staratlasmeta/FoundationKit](https://github.com/staratlasmeta/FoundationKit)

Foundation Kit (F-Kit) is Star Atlas's fully open-source Unreal Engine plugin (UE4 and UE5) for connecting game clients to Solana. It has two layers: a Core SDK (key pair and mnemonic generation, private key import, account data reads, sending transactions, interacting with on-chain programs) and a Wallet + Blueprint interface built on top of it. While less mature than the Unity SDK, it opens Solana integration to the Unreal Engine developer community -- important for AAA-quality game development.

### Solana Game Skill

[https://github.com/solanabr/solana-game-skill](https://github.com/solanabr/solana-game-skill)

A Claude Code skill package specifically designed for Unity and mobile Solana game development, created by Superteam Brazil. It provides specialized AI agents -- game-architect for system design, unity-engineer for C# and Unity implementation, and mobile-engineer for mobile-specific concerns -- along with commands and rules tailored to the game development workflow.

This skill understands the unique challenges of game-blockchain integration: handling wallet connections within game loops, managing NFT assets in Unity's scene graph, serializing/deserializing program accounts in C#, and optimizing mobile builds. Install it alongside [Solana AI Kit](https://github.com/solanabr/solana-ai-kit) for a complete game development environment. Maintained by @kauenet.

---

## Mobile Development

### Solana Mobile Documentation

[https://docs.solanamobile.com/](https://docs.solanamobile.com/)

The comprehensive documentation for building native mobile apps on Solana. This covers everything from setting up a React Native project with Solana integration to handling wallet connections, signing transactions, and managing mobile-specific concerns like deep linking, background processing, and app store distribution.

Mobile development on Solana has unique constraints -- you cannot bundle a wallet directly into your app, so you need to use the Mobile Wallet Adapter protocol to communicate with installed wallet apps. The documentation walks through this architecture and provides working examples for both Android and iOS (via React Native).

### Mobile Wallet Adapter

[https://docs.solanamobile.com/get-started/mobile-wallet-adapter](https://docs.solanamobile.com/get-started/mobile-wallet-adapter)

The standard protocol for connecting mobile wallets to Solana dApps. Mobile Wallet Adapter (MWA) defines how your app discovers, connects to, and communicates with wallet applications installed on the user's device. It works similarly to WalletConnect but is designed specifically for Solana's transaction model.

The React Native SDK provides hooks and providers that mirror the web wallet adapter experience -- `useWallet()`, `useConnection()`, and transaction signing all work with familiar patterns. If you have built a Solana web app with wallet-adapter-react, the mobile patterns will feel natural. MWA is supported by wallets including Phantom, Solflare, and the Seeker's built-in Seed Vault Wallet, with more wallets adopting the standard.

### Seeker (and Saga)

[https://solanamobile.com/](https://solanamobile.com/)

Solana-native mobile hardware built by Solana Mobile. The second-generation Seeker began shipping on August 4, 2025 -- an initial batch of over 150,000 pre-ordered units delivered to more than 50 countries, far surpassing the original Saga (2023, ~20,000 units), which is now a legacy device. Seeker includes the Seed Vault (secure-element key management with a built-in Seed Vault Wallet), the native Solana dApp Store, and deep OS-level Solana integration.

Ahead of the Seeker launch, in May 2025, Solana Mobile announced two ecosystem pillars: SKR, the native token of the Solana Mobile ecosystem, and TEEPIN (Trusted Execution Environment Platform Infrastructure Network), a three-layer architecture that lets multiple hardware manufacturers build cryptographically attested Solana-native devices. SKR went live on January 21, 2026, with an airdrop to Seeker holders, and it also funds developer incentives -- Season 1 distributed 141M SKR to 188 teams that shipped quality apps to the dApp Store.

For developers, the dApp Store remains the key point: zero-commission distribution without the 30% cut or crypto restrictions of Apple/Google, plus a crypto-native hardware audience reachable through SKR-aligned incentives.
