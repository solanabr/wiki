# Network State & Roadmap

Solana is in the middle of the biggest set of protocol changes in its history, and they directly affect how you build: how fast transactions become final, which validator software runs the network, and how much compute fits in a block. This page summarizes the state of the network **as of August 2026** -- the Alpenglow consensus overhaul, the arrival of real client diversity with Firedancer, and where to follow protocol changes as they land.

---

## Alpenglow -- The Consensus Overhaul

### Alpenglow (SIMD-0326)

[https://solana.com/upgrades/alpenglow](https://solana.com/upgrades/alpenglow)

Alpenglow replaces Solana's original TowerBFT consensus with two new components. **Votor** is the new voting protocol: instead of the old 32-slot lockout ladder, validators finalize a block in a single round when 80% of stake votes for it, or in two rounds when 60% does. **Rotor** is the follow-up block propagation layer that will replace Turbine's tree of relay nodes with a single relay layer to cut network latency; it ships as a second phase after Votor is adopted. The headline change: finality drops from roughly 12.8 seconds under TowerBFT to a target of roughly 150 milliseconds.

The upgrade went through governance as SIMD-0326 and was approved by a validator stake vote in September 2025, with roughly 98% of participating stake in favor. Alpenglow has been running on a public community test cluster since May 11, 2026, and mainnet activation is targeted for late Q3 / early Q4 2026 via the Agave 4.1 release -- treat that as a target, not a promise. A set of companion SIMDs (0337, 0357, 0384, 0387) covers migration mechanics, validator admission tickets, and the BLS keys validator operators must register before activation.

### Timeline at a Glance

- **September 2025** -- SIMD-0326 (Alpenglow) approved by validator stake vote, ~98% of participating stake in favor
- **December 12, 2025** -- Full Firedancer client goes live on mainnet at Breakpoint
- **May 11, 2026** -- Alpenglow live on a public community test cluster
- **Late Q3 / early Q4 2026 (target)** -- Alpenglow mainnet activation via Agave 4.1

### Following Protocol Changes (SIMDs)

[https://github.com/solana-foundation/solana-improvement-documents](https://github.com/solana-foundation/solana-improvement-documents)

Every protocol change goes through a Solana Improvement Document (SIMD): a public proposal, discussion on the [Solana developer forums](https://forum.solana.com/c/simd/5), and -- for consensus-affecting changes like Alpenglow -- a validator stake vote. If you want to know what the network will look like in six months, active SIMDs are the primary source; everything else is commentary. The [Open Source References](open-source-references.md) page lists the developer-critical SIMDs to watch and the community browser at simd.wtf.

---

## Validator Client Landscape

For most of Solana's history, effectively 100% of the network ran a single codebase. That is no longer true -- and it matters, because with one implementation, one bug can halt the entire network. With independent implementations, a bug in one client becomes a degradation instead of an outage.

### Agave

[https://www.anza.xyz/](https://www.anza.xyz/)

The majority validator client, maintained by Anza -- the R&D lab spun out of Solana Labs. Agave and the Jito-Solana fork that most stakers run account for roughly 60% of mainnet stake as of mid-2026, and Agave is the reference implementation where new protocol features like Alpenglow land first. If you run a validator or read Solana runtime code, this is the codebase you will encounter.

### Firedancer & Frankendancer

[https://jumpcrypto.com/firedancer](https://jumpcrypto.com/firedancer)

Firedancer is an independent validator client written from scratch in C by Jump Crypto, built for raw throughput -- lab benchmarks target over 1 million TPS. The full client went live on mainnet on December 12, 2025, announced at Breakpoint in Abu Dhabi after months of quiet production validation, and runs roughly 14% of stake as of mid-2026. **Frankendancer** -- a hybrid that pairs Firedancer's networking layer with Agave's runtime -- runs another ~26%, putting roughly 40% of staked SOL on Jump's codebase: the first real client diversity in Solana's history. Testing and performance reports are published at [reports.firedancer.io](https://reports.firedancer.io/).

---

## What This Means for Builders

- **Finality becomes part of your UX.** Today, apps compromise between `confirmed` (fast, small rollback risk) and `finalized` (safe, ~12.8s wait). After Alpenglow, that gap collapses to well under a second -- flows that gate on finality (payments, bridges, exchange deposits) can become near-instant. Read commitment levels from the RPC instead of hard-coding wait times, and your app will benefit automatically when the switch happens.
- **Do not depend on client quirks.** With two independent validator implementations in production, behavior that is not part of the protocol spec (timing details, undocumented RPC edge cases) can differ between nodes. Your RPC provider may run Agave, Frankendancer, or full Firedancer.
- **Compute limits keep rising.** Block compute capacity has been raised repeatedly through SIMDs -- most recently SIMD-0286, activated on mainnet July 29, 2026, which raised blocks from 60M to 100M CUs (+66% capacity), with SIMD-0296 (larger transactions) still in progress. The direction is clear -- more compute per block -- but per-transaction CU discipline still determines your inclusion cost, so keep profiling.
- **Test against what is coming.** Alpenglow is live on a public test cluster, and companion SIMDs land in Agave point releases before mainnet activation. If your protocol is sensitive to confirmation timing or vote account mechanics, follow the Agave release notes rather than waiting for the mainnet switch.

---

This page reflects the network as of August 2026. Alpenglow's mainnet activation and client stake shares will change -- check [solana.com/upgrades/alpenglow](https://solana.com/upgrades/alpenglow) and the SIMD repo for current status. Related pages: [Open Source References](open-source-references.md) for the SIMD process and core repos, [Getting Started](getting-started.md) for core concepts, and the [Superteam Brazil validator](../about/validator.md) if you want to support network decentralization by delegating.
