# Superteam Academy

**GitHub**: [SuperteamBrazil/superteam-academy](https://github.com/SuperteamBrazil/superteam-academy)
**Status**: In development
**Maintained by**: @thomgabriel and @kauenet

## Overview

An on-chain learning management system (LMS) built on Solana. Superteam Academy provides verifiable, blockchain-backed education credentials — replacing trust-based certificates with cryptographic proof of completion.

## Features

### Soulbound XP Tokens

Non-transferable experience points earned by completing courses. Built on Token-2022 with the non-transferable extension, ensuring XP is tied to the learner and cannot be bought or traded.

### NFT Certificates

On-chain completion certificates issued as compressed NFTs via Metaplex Bubblegum. Each certificate is verifiable on-chain and costs a fraction of a cent to mint thanks to state compression.

### On-Chain Progress Tracking

All student progress is recorded on Solana. Course completions, quiz scores, and milestone achievements are stored as on-chain state, creating a permanent and auditable learning record.

### Course Management

Instructor tools for creating and managing curriculum. Courses can be structured with modules, lessons, quizzes, and assignments — each with configurable XP rewards and completion criteria.

### Cohort System

Group-based learning with deadlines and milestones. Cohorts enable structured programs where students progress together, with time-bound access to materials and group accountability.

## Tech Stack

- **Programs**: Anchor
- **Token standard**: Token-2022 (non-transferable extension)
- **NFTs**: Metaplex Bubblegum (compressed NFTs)
- **Frontend**: Next.js
