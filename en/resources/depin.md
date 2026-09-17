# DePIN on Solana

DePIN -- Decentralized Physical Infrastructure Networks -- uses token incentives to bootstrap real-world hardware: wireless coverage, street-level mapping, GPU compute, bandwidth. Instead of one company deploying infrastructure, thousands of individuals deploy devices and earn tokens for verified contributions. Solana dominates this category for a structural reason: rewarding millions of devices means an enormous volume of tiny payments, and Solana's fees are low enough to make per-device micropayments viable, while compressed NFTs and ZK compression give each device a cheap on-chain identity. The results show up in the data -- the DePIN category sits near $20 billion in mid-2026, and Solana DePIN protocols set a monthly revenue all-time high of $2.6M in January 2026.

---

## Flagship Networks

These are the networks worth studying before you build -- each solved the core DePIN problems (proof of contribution, reward distribution, hardware onboarding) in a different domain.

### Helium

[https://docs.helium.com/](https://docs.helium.com/)

Decentralized wireless: a global LoRaWAN network for IoT devices plus a cellular offload network for mobile connectivity, with hotspot operators earning HNT for providing coverage. IoT connectivity through Helium runs roughly an order of magnitude cheaper than comparable cellular plans, which is why it has real paying usage rather than just token speculation.

Helium is also the canonical DePIN case study for builders -- it migrated its entire L1 to Solana in 2023, and its open-source tooling (including TukTuk, covered on the [DeFi Development](defi-development.md) page) is reused across the ecosystem. Study its oracle-based proof-of-coverage and reward architecture before designing your own.

### Hivemapper

[https://hivemapper.com/](https://hivemapper.com/)

Decentralized mapping: drivers mount a Bee dashcam and earn HONEY tokens for contributing street-level imagery as they drive. The network has mapped around a third of the world's road network and sells fresh map data to customers like Lyft -- a demonstration that crowdsourced hardware can compete with fleets like Google's Street View cars at a fraction of the capital cost.

For builders, Hivemapper is the reference for quality-weighted rewards: contributions are scored for freshness and coverage value, not just volume.

### Render

[https://rendernetwork.com/](https://rendernetwork.com/)

Decentralized GPU rendering for creative and AI workloads. Render connects idle GPU capacity to artists and studios using engines like OctaneRender, Redshift, and Blender Cycles, and has expanded into generative AI imaging workflows. It is one of the highest-revenue DePIN networks on Solana and among the few that consistently pays meaningful rewards per node operator.

### io.net

[https://io.net/](https://io.net/)

A decentralized GPU cloud that aggregates compute from data centers, crypto miners, and consumer devices into clusters for AI/ML workloads. Where Render focuses on rendering pipelines, io.net targets machine learning training and inference -- the demand side that exploded with the AI wave. Relevant if your project needs affordable GPU compute or if you are designing supply aggregation for heterogeneous hardware.

### Grass

[https://www.grass.io/](https://www.grass.io/)

Bandwidth sharing for AI data: millions of users run an app that shares idle internet bandwidth, which the network uses to collect public web data for AI training, rewarding contributors with points convertible to GRASS tokens. Grass matters as a case study because it lowered the hardware barrier to zero -- no dashcam, no hotspot, just software -- which is why it reached one of the largest contributor bases in DePIN.

---

## Builder Starting Points

### Solana DePIN Solutions Page

[https://solana.com/solutions/depin](https://solana.com/solutions/depin)

Solana's official DePIN hub: featured networks, ecosystem stats, case-study interviews, and the annual DePIN report. Useful for a market-level view of the category and for seeing which primitives (compressed NFTs, Token Extensions, ZK compression) each network actually uses in production.

### DePIN Quickstart Guide

[https://solana.com/developers/cookbook/depin](https://solana.com/developers/cookbook/depin)

The official developer guide for the on-chain side of a DePIN protocol: choosing between SPL Token and Token-2022 for your reward token, claim-based vs push-based reward distribution (including Merkle tree and ZK compression approaches), proof-of-contribution patterns, on-chain vs off-chain data trade-offs, and governance. Read this first -- it condenses the design decisions every network above had to make, with reference implementations.

### DePINscan

[https://depinscan.io/chains/solana](https://depinscan.io/chains/solana)

Ecosystem tracker for DePIN projects, devices, and token metrics, filterable by chain. Use it to size a niche before committing -- if three funded teams are already deploying hardware in your category, you need a sharper wedge. Syndica's monthly [Solana DePIN deep dives](https://blog.syndica.io/deep-dive-solana-depin-january-2026/) complement it with revenue-level analysis of the major protocols.

---

## Design Patterns

### Token Incentives

Your reward token is the product. The design decisions -- emission schedule, burn mechanics, quality-weighted rewards, Token-2022 extensions for compliance or transfer fees -- determine whether your network attracts real operators or mercenary farmers. See [Token Standards](token-standards.md) for the Token-2022 extension system these mechanics are built on.

### Cheap Device Identity

A DePIN network can mean millions of on-chain device registrations, which is where standard accounts become prohibitively expensive. Compressed NFTs and ZK compression bring per-device cost down to a fraction of a cent -- see the Light Protocol entry on the [Development Tools](development-tools.md) page and the compressed NFT coverage in [Token Standards](token-standards.md).

---

## DePIN at Hackathons

Judges reward this category. The Grand Champion of Colosseum's Solana Frontier hackathon (announced June 2026) was **CrowdBrain**, a robotics DePIN that trains operators in simulation and routes the best ones to real robots for teleoperation and data collection -- winner over 2,857 final submissions. If you are entering a Solana hackathon with hardware or infrastructure ideas, DePIN is a track where a working device demo stands out; see the [Hackathon section](../hackathon/README.md) and [Community & Hackathons](community-and-hackathons.md) for how to compete.
