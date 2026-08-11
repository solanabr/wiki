# RWA & Tokenization

Tokenized real-world assets became a top-3 Solana vertical in 2026. Per rwa.xyz data, Solana's tokenized RWA value roughly quadrupled in the first half of 2026 to a record $3.62B (from ~$873M in January), making it the third-largest RWA chain with roughly a 10.4% share ([The Crypto Basic](https://thecryptobasic.com/2026/07/10/solana-tokenized-rwa-market-soars-4x-hits-record-3-62b-in-h1-2026/)). Ethereum still leads total RWA value -- Solana's clear dominance is in tokenized **equities** specifically, where it processes roughly 95% of all on-chain tokenized stock volume ([Crypto Briefing](https://cryptobriefing.com/solana-tokenized-stocks-analytics-dashboard/)), with $5.77B in Q2 2026 spot volume alone ([Genfinity](https://genfinity.io/2026/07/06/tokenized-stocks-on-solana-explode-past-5-77b-q2-2026/)). For Brazilian builders the timing is notable: B3 is building its own tokenization platform, and a Brazilian RWA project already earned recognition at Cypherpunk. This page maps the issuers, the infrastructure, and the local opportunity.

---

## Tokenized Equities

### xStocks (Backed)

[https://xstocks.com/](https://xstocks.com/)

Tokenized US equities and ETFs issued through Backed's xStocks framework -- SPL tokens backed 1:1 by the underlying shares held in regulated custody, redeemable for the equivalent cash value or the underlying asset, and tradeable 24/7. Raydium is the top spot venue for xStocks (crossing $3B in cumulative volume by June 2026), with distribution through Jupiter, Kraken, and Bybit, and wallet integrations including Solflare, which listed 134 xStocks as of its June 2026 integration.

For developers, xStocks are ordinary SPL tokens: they compose with the same DEX, lending, and wallet infrastructure as any other Solana asset. That composability -- equity exposure inside DeFi -- is why nearly all on-chain tokenized stock volume settles on Solana.

### Ondo Global Markets

[https://ondo.finance/](https://ondo.finance/)

Ondo's tokenized-stocks platform, which launched with 200+ tokenized US stocks and ETFs and has grown past 400 assets -- the largest issuer on the rwa.xyz stocks dashboard by value. Ondo's tokens are freely transferable and designed to be usable in DeFi rather than locked in a walled garden.

Watch Ondo if you are building anything that consumes tokenized equities -- portfolio products, structured yield, collateralized lending -- because its catalog breadth makes it the likeliest source of long-tail equity exposure on-chain.

---

## Tokenized Treasuries & Funds

### Ondo USDY

[https://ondo.finance/usdy](https://ondo.finance/usdy)

A yield-bearing dollar token backed by a portfolio of short-term US Treasuries with daily proof of reserves, live natively on Solana since early 2024. USDY sits between a stablecoin and a money-market fund: it targets a stable dollar value while passing Treasury yield through to holders.

On Solana, USDY is already integrated across DeFi -- including Kamino and Raydium -- which makes it the practical choice when your protocol wants dollar collateral that earns while it sits.

### Franklin Templeton BENJI (FOBXX)

[https://digitalassets.franklintempleton.com/benji/](https://digitalassets.franklintempleton.com/benji/)

The Franklin OnChain U.S. Government Money Fund -- the first US-registered money market fund natively recorded on-chain, where each BENJI token represents one share of FOBXX. The fund has been live on Solana since February 2025 (institutional access).

BENJI matters as a signal as much as a product: a major traditional asset manager running a registered fund's share registry on Solana is the template that regulated Brazilian issuers -- including, potentially, B3's platform participants -- would follow.

---

## Analytics

### rwa.xyz Stocks Dashboard

[https://app.rwa.xyz/stocks](https://app.rwa.xyz/stocks)

The canonical analytics tracker for tokenized assets, with a dedicated tokenized-stocks dashboard covering more than 3,700 tokenized stocks across platforms as of August 2026 -- filterable by platform, network, holder counts, and transfer volume, with league tables ranking issuers. The broader rwa.xyz site tracks the full RWA landscape (treasuries, credit, commodities) across chains.

Use it before building: the dashboards answer "which assets have real volume and holders" empirically, which is exactly the question that should shape what you integrate first.

---

## Token-2022 for RWA Issuers

If you are issuing an RWA token rather than integrating one, Token-2022 is the toolkit that makes on-chain compliance possible without a custom program. Transfer hooks let you enforce whitelists and KYC checks on every transfer; confidential transfers and confidential balances keep amounts private where disclosure is a problem (payroll, institutional positions); permanent delegate supports the freeze/clawback powers regulated issuers typically need. All of these -- plus the Solana Stablecoin Standard's SSS-2 compliance hooks -- are covered in depth in [Token Standards](token-standards.md).

---

## The Brazil Angle

### VitalFi (now Credit.Markets)

[https://vitalfi.lat/](https://vitalfi.lat/)

The local case study: VitalFi tokenizes Brazilian medical receivables on Solana, letting USDT depositors fund healthcare providers through vaults and earn yield from the underlying receivables. The project earned an Honorable Mention in the RWA track of the Cypherpunk Hackathon and has since rebranded to Credit.Markets. See the [Hall of Fame](../hackathon/hall-of-fame.md) and the [Q4 2025 transparency report](../transparency/q4-2025.md).

VitalFi points at the niche most open to Brazilian builders: receivables and private credit. Brazil has a large, legally mature receivables market, and tokenizing it requires exactly the local knowledge -- registries, fiduciary structures, collection dynamics -- that international issuers lack.

### B3's Tokenization Platform

[https://www.coindesk.com/business/2025/12/17/brazilian-stock-exchange-b3-to-launch-its-own-tokenization-platform-and-stablecoin](https://www.coindesk.com/business/2025/12/17/brazilian-stock-exchange-b3-to-launch-its-own-tokenization-platform-and-stablecoin)

In December 2025, B3 -- Brazil's stock exchange -- announced a tokenization platform designed to share liquidity with its traditional stock systems, plus a BRL-pegged stablecoin as the payment and clearing leg, targeted for 2026. Note the constraint honestly: B3 has not named an underlying blockchain, so there is no basis to assume it runs on Solana.

What it means for builders either way: the national exchange entering tokenization legitimizes the vertical and will create demand for everything around it -- custody integrations, compliance tooling, secondary-market infrastructure -- much of which can be built chain-agnostic today and pointed wherever the liquidity lands.

---

## Related Pages

* [Token Standards](token-standards.md) -- Token-2022 extensions and the Solana Stablecoin Standard for compliant issuance
* [Payments & Stablecoins](payments-and-stablecoins.md) -- BRZ, Pix ramps, and Brazil's stablecoin regulation
* [DeFi Development](defi-development.md) -- the DEXs, oracles, and vault standards RWA tokens compose with
* [Hall of Fame](../hackathon/hall-of-fame.md) -- VitalFi and other standout Brazilian hackathon projects
