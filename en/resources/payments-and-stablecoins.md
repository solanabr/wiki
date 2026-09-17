# Payments & Stablecoins

Stablecoin payments are arguably the strongest Solana vertical for Brazil. The country runs on instant payments -- Pix made real-time transfers the default -- and Solana's sub-second finality with near-zero fees is the closest thing crypto has to that experience. The market data backs this up: research published by Dune with Visa in April 2026 found that unique senders of non-USD stablecoins on Solana nearly tripled year-over-year, led by EURC and BRZ ([The Defiant](https://thedefiant.io/news/blockchains/solana-non-usd-stablecoin-senders-tripled-eurc-brz-mygmay)). Brazilian builders have already proven themselves here -- MCPay (now Frames) took 1st place in the Stablecoins track of the Cypherpunk Hackathon. This page covers the rails, the ramps, and the regulation you need to understand before building.

---

## Stablecoin Rails on Solana

### USDC & Circle CCTP

[https://developers.circle.com/cctp](https://developers.circle.com/cctp)

USDC is the default dollar rail on Solana, and Circle's Cross-Chain Transfer Protocol (CCTP) is how you move it between chains without bridge risk. CCTP is a permissionless burn-and-mint utility: USDC is burned on the source chain and minted natively on the destination, so there are no wrapped assets and no liquidity pools to drain. USDT also circulates widely on Solana and remains the deeper rail in many emerging-market corridors.

For developers building payment or treasury flows that touch multiple chains, CCTP should be your first stop -- it turns cross-chain settlement into a protocol primitive rather than a trust decision about a third-party bridge.

### EURC

[https://www.circle.com/eurc](https://www.circle.com/eurc)

Circle's euro-backed stablecoin, issued natively on Solana as an SPL token, MiCA-compliant and redeemable 1:1 for euros. EURC was one of the two stablecoins (alongside BRZ) driving Solana's non-USD sender growth in the Dune/Visa research above.

For Brazilian builders, EURC matters for the Brazil-Europe corridor -- remittances, freelancer payouts, and import/export settlement where both legs of the trade want to avoid the dollar as an intermediary currency.

### BRZ (Transfero)

[https://transfero.com/brz-stablecoin](https://transfero.com/brz-stablecoin)

The Brazilian real stablecoin, issued by Transfero. Each BRZ is backed 1:1 with BRL, with redemption through regulated partners, and it is live on Solana alongside other major chains. BRZ is convertible to and from bank money via Pix through Transfero's on/off-ramp, which makes it the practical building block for BRL-denominated payment flows on Solana.

BRZ was the other leader (with EURC) of Solana's non-USD stablecoin growth. If your product prices anything in reais -- payroll, invoices, merchant checkout, remittance payouts -- BRZ is the asset that lets settlement stay on-chain until the final Pix leg.

### B3's Tokenization Platform & BRL Stablecoin

[https://www.coindesk.com/business/2025/12/17/brazilian-stock-exchange-b3-to-launch-its-own-tokenization-platform-and-stablecoin](https://www.coindesk.com/business/2025/12/17/brazilian-stock-exchange-b3-to-launch-its-own-tokenization-platform-and-stablecoin)

In December 2025, B3 -- Brazil's stock exchange -- announced plans for its own tokenization platform plus a stablecoin expected to be pegged to the real, serving as the payment and clearing leg of its tokenized environment, with launch targeted for 2026. B3 has not named an underlying blockchain, so do not assume any of this lands on Solana.

The signal matters regardless of chain: when the national stock exchange builds BRL-denominated on-chain settlement, tokenized-real payments stop being a crypto niche and become market infrastructure. See [RWA & Tokenization](rwa-and-tokenization.md) for the tokenization side of this announcement.

---

## Accepting Payments

### Solana Pay

[https://docs.solanapay.com/](https://docs.solanapay.com/)

The payment protocol for merchants and applications on Solana -- payment requests, QR codes, and on-chain payment verification, supporting both SOL and SPL token payments with point-of-sale and e-commerce flows. The reference-tracking design means you can confirm that a specific payment happened without scanning every transaction.

Solana Pay is covered in more depth in [Development Tools](development-tools.md); the short version for this page is that it pairs naturally with the stablecoins above -- a checkout that requests USDC or BRZ via Solana Pay is the canonical "stablecoin commerce" stack on Solana.

---

## Pix Ramps & Cross-Border Settlement

Every serious stablecoin product in Brazil lives or dies by its Pix ramp -- the on/off-ramp between stablecoins and BRL bank money. Transfero's BRZ ramp (above) is the most direct route; licensed exchanges and payment institutions provide alternatives for USDC and USDT.

One structural caveat before you architect a cross-border product: as of Resolution 561 (below), regulated eFX providers -- the fintechs that power most retail international payments in Brazil -- are banned from settling those flows in stablecoins or crypto from October 1, 2026. Licensed VASPs may still use stablecoins for international payments under the Resolution 521 framework. In practice, which license your settlement partner holds now determines whether your stablecoin flow is legal, so verify this before integrating any ramp.

---

## Regulation: The BCB Framework (as of August 2026)

### BCB Resolutions 519, 520 and 521

[https://notabene.id/post/brazils-central-bank-regulates-virtual-asset-service-providers-what-bcb-resolutions-mean-for-crypto-compliance](https://notabene.id/post/brazils-central-bank-regulates-virtual-asset-service-providers-what-bcb-resolutions-mean-for-crypto-compliance)

Brazil's central bank regulated the sector through three resolutions published in November 2025, in force since February 2, 2026. Resolution 519 defines the authorization process for SPSAVs (Brazil's VASP category). Resolution 520 sets the operational and prudential rules -- including that fiat-referenced stablecoins must be fully backed 1:1 by fiat or government securities, which effectively excludes algorithmic stablecoins. Resolution 521 treats stablecoin transactions as foreign-exchange operations under Brazil's FX regime.

The live deadline for builders: the transition period for existing providers to obtain BCB authorization ends **October 30, 2026**. If you operate or depend on a Brazilian ramp, exchange, or custodian, that entity needs authorization by then. [Plasma's Brazil stablecoin regulation page](https://www.plasma.org/learn/tools/stablecoin-regulation-map/brazil) is a maintained summary of the framework, including the reserve rules.

### BCB Resolution 561 -- the eFX Stablecoin Ban

[https://www.coindesk.com/policy/2026/05/02/brazil-s-central-bank-bans-stablecoin-and-crypto-settlement-in-cross-border-payments](https://www.coindesk.com/policy/2026/05/02/brazil-s-central-bank-bans-stablecoin-and-crypto-settlement-in-cross-border-payments)

Published April 30, 2026 and effective October 1, 2026, Resolution 561 bans eFX providers -- Brazil's regulated channel for digital international payments -- from settling those payments in stablecoins or other crypto. Settlement must instead run through traditional FX transactions or non-resident BRL accounts. Licensed VASPs may still use stablecoins for international payments under the Resolution 521 framework; the ban targets the eFX settlement rail specifically, not crypto trading or custody.

This is the single most important regulatory fact for anyone building cross-border payments in Brazil right now: the same stablecoin transfer can be legal or illegal depending on whether it flows through a VASP or an eFX provider.

---

## Superteam Brazil in Stablecoin Payments

### Solana Stablecoin Standard (SSS-1 / SSS-2)

[https://github.com/solanabr/solana-stablecoin-standard](https://github.com/solanabr/solana-stablecoin-standard)

The builder-facing spec for issuing stablecoins on Solana, from Superteam Brazil. SSS-1 covers the basic mint/burn/pause interface with role-based access control; SSS-2 adds the features Brazilian regulation now effectively demands -- compliance hooks, blacklist management, upgradeable oracles, and reserve transparency -- built natively on Token-2022. If you are issuing a stablecoin that must survive the BCB framework above, start here. Maintained by @lvj_luiz and @kauenet. The repository was archived in June 2026 and is read-only; the specifications remain available as a reference.

The full breakdown lives in [Token Standards](token-standards.md) and [DeFi Development](defi-development.md).

### MCPay (now Frames)

MCPay, which has since rebranded to Frames, won 1st place in the Stablecoins track of the Cypherpunk Hackathon with payment infrastructure for stablecoins on Solana -- a track-level first against international teams, and proof that Brazilian builders can win this vertical globally. See the [Q4 2025 transparency report](../transparency/q4-2025.md) for the full results.

---

## Related Pages

* [Development Tools](development-tools.md) -- Solana Pay and the broader payments tooling
* [Token Standards](token-standards.md) -- Token-2022 extensions (transfer hooks, confidential transfers) and the Solana Stablecoin Standard
* [RWA & Tokenization](rwa-and-tokenization.md) -- B3's tokenization platform and tokenized assets on Solana
* [DeFi Development](defi-development.md) -- swap routing and liquidity for stablecoin pairs
