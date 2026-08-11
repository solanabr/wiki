# Wallets & Onboarding

The wallet is the first thing every user of your dApp touches, and it is where most consumer apps lose people. There are two integration paths on Solana today: the wallet adapter path for crypto-native users who already hold Phantom, Solflare, or Backpack, and embedded wallet SDKs that create a wallet behind an email, social, or passkey login for users who have never touched crypto. Consumer apps are a standing category in Colosseum hackathons, and in Brazil -- where most of your potential users do not have a browser extension installed -- getting onboarding right is often the difference between a demo and a product. This page covers both stacks and when to use each.

---

## Browser & Mobile Wallets

These are the wallets your crypto-native users actually hold, and the ones you should test against first.

### Phantom

[https://phantom.com/](https://phantom.com/)

The best-known wallet in the Solana ecosystem, available as a browser extension and mobile app. Phantom has grown from a pure wallet into a consumer finance app -- spot trading, perpetuals, and prediction markets are built in -- while remaining self-custodial. For developers, Phantom is the default target: if your dApp's connect flow does not work with Phantom, it effectively does not work.

### Solflare

[https://solflare.com/](https://solflare.com/)

A Solana-focused wallet available as extension, mobile app, and web wallet. Solflare's feature set runs deep on Solana specifically -- native staking, an NFT gallery, hardware wallet support (including their own Shield device), and a USDC debit card. Its Solana-first focus makes it a good second test target, since it often surfaces integration issues that Phantom's more general flows do not.

### Backpack

[https://backpack.app/](https://backpack.app/)

A wallet and exchange in one app, covering Solana, Ethereum, and Bitcoin across iOS, Android, a Chrome extension, and the web-based backpack.exchange. Backpack combines a self-custodial wallet with spot trading, futures, and lending. It is popular with active traders, so if your dApp targets that audience, include it in your test matrix.

---

## Integration Standards

### Wallet Standard

[https://github.com/wallet-standard/wallet-standard](https://github.com/wallet-standard/wallet-standard)

A chain-agnostic set of interfaces that wallets use to register themselves in the browser, letting applications discover and connect to any installed wallet without hardcoding per-wallet adapters. Solana wallets implement it, and modern `@solana/kit`-based frontends build on it directly -- `@wallet-standard/react` provides `useWallets` and `useConnect` hooks, paired with `@solana/react` for transaction signing. If you are starting a new kit-based frontend, this is the integration layer to learn.

### Solana Wallet Adapter

[https://github.com/anza-xyz/wallet-adapter](https://github.com/anza-xyz/wallet-adapter)

The Anza-maintained library of modular TypeScript wallet adapters and React components -- the battle-tested connect-button stack used by most existing Solana dApps, particularly those on web3.js 1.x and Anchor. It provides providers, hooks (`useWallet`, `useConnection`), and a prebuilt modal UI. The "Connect a Wallet in React" guide linked from [Getting Started](getting-started.md) walks through this pattern step by step.

---

## Embedded Wallets

Embedded wallet SDKs create a self-custodial wallet for the user at signup -- behind an email, SMS, social, or passkey login -- with no extension install and no seed phrase ceremony. The decision framework: use the **adapter/Wallet Standard path** when your audience already holds wallets (DeFi, trading tools); use **embedded wallets** when your audience is mainstream (consumer apps, games, payments); use the **hybrid pattern** -- wallet detection with an embedded fallback -- when you want to serve both, which is how most new consumer dApps ship.

### Privy

[https://docs.privy.io/](https://docs.privy.io/)

Embedded self-custodial wallets behind email, SMS, social, or passkey login, with keys secured in trusted execution environments (TEEs). Solana support is first-class: HD wallets, automatic wallet creation on login, and full signing flows, with users able to export their keys to Phantom or Solflare at any time. Privy was acquired by Stripe in June 2025, which matters for the roadmap -- expect increasingly tight integration between embedded wallets and fiat/stablecoin settlement. Start with the [Privy + Solana getting-started recipe](https://docs.privy.io/recipes/solana/getting-started-with-privy-and-solana).

### Turnkey

[https://docs.turnkey.com/](https://docs.turnkey.com/)

Wallet infrastructure where private keys live in hardware-isolated enclaves and are never exposed -- not even to Turnkey. The `@turnkey/solana` package provides a `TurnkeySigner` that plugs into standard Solana client code, and the platform handles blockhash retrieval, compute unit estimation, and priority fees, plus gas sponsorship (fee abstraction) and rent sponsorship on mainnet and devnet. Turnkey is lower-level than Privy -- choose it when you need signing infrastructure with fine-grained policy control (transaction rules, quorums, automation) rather than a drop-in auth modal.

### Para

[https://docs.getpara.com/](https://docs.getpara.com/)

Passkey-first embedded wallets: users sign up with email, phone, social login, or a passkey, and private keys are split via MPC between the user's device and Para's infrastructure -- no seed phrase, no single point of key compromise. Solana support works with both web3.js and Anchor, and the SDK ships as a prebuilt React modal or headless primitives for custom UIs. Para's session-based passkey model is the one featured in the Helius passkeys guide below.

### Dynamic

[https://www.dynamic.xyz/docs/](https://www.dynamic.xyz/docs/)

A full wallet stack that covers both sides of the hybrid pattern in one SDK: external wallet connection (via `SolanaWalletConnectors`) and MPC embedded wallets, with policies, gas abstraction, and prebuilt UI components. Solana embedded wallets use EdDSA MPC (FROST protocol), and SDKs span React, React Native, Flutter, Swift, and more. Dynamic is a strong choice when you want one vendor for connect-or-create rather than stitching wallet-adapter and a separate embedded SDK together.

---

## Passkeys

### Helius: Solana Passkeys Guide

[https://www.helius.dev/blog/solana-passkeys](https://www.helius.dev/blog/solana-passkeys)

The reference guide for passkey-based onboarding on Solana. Passkeys (built on WebAuthn and FIDO2) enable biometric login with no seed phrase, but there is a curve mismatch: passkeys produce P-256 (secp256r1) signatures while Solana transactions require Ed25519. The guide explains the workaround in production today -- passkeys act as authentication that unlocks session-scoped access to MPC-managed Ed25519 keys (Para's model) -- and covers the native secp256r1 precompile, enabled in June 2025, that lets programs verify passkey signatures directly on-chain. Read this before designing any passkey-first UX so you understand what the passkey actually signs.

---

## Related Pages

- [Gaming & Mobile](gaming-and-mobile.md) -- mobile-specific wallet infrastructure: Mobile Wallet Adapter, Seed Vault, and the Seeker device
- [Getting Started](getting-started.md) -- the "Connect a Wallet in React" walkthrough and the rest of the beginner path
