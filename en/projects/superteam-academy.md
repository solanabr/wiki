# Superteam Academy

**GitHub**: [solanabr/superteam-academy](https://github.com/solanabr/superteam-academy)
**Status**: In development
**Maintained by**: @thomgabriel and @kauenet

## Overview

An on-chain learning management system (LMS) built on Solana. Superteam Academy provides verifiable, blockchain-backed education credentials — replacing trust-based certificates with cryptographic proof of completion.

## Features

### Soulbound XP Tokens

Non-transferable experience points earned by completing courses. Built on Token-2022 with the non-transferable extension, ensuring XP is tied to the learner and cannot be bought or traded.

### NFT Certificates

On-chain completion certificates issued via Metaplex Core, auto-minted on course completion. Each certificate is verifiable on-chain.

### On-Chain Progress Tracking

All student progress is recorded on Solana. Course completions, quiz scores, and milestone achievements are stored as on-chain state, creating a permanent and auditable learning record.

### Course Management

Instructor tools for creating and managing curriculum. Courses can be structured with modules, lessons, quizzes, and assignments — each with configurable XP rewards and completion criteria.

### Cohort System

Group-based learning with deadlines and milestones. Cohorts enable structured programs where students progress together, with time-bound access to materials and group accountability.

### Interactive Coding Challenges

In-browser coding challenges built on the Monaco editor, with automated tests checking each submission. Students write and validate real code without leaving the platform.

### Gamification

XP, levels, daily streaks, and achievements keep learners engaged and make progress visible across the platform.

### Trilingual Interface

The UI ships in English, Portuguese (pt-BR), and Spanish — matching the languages of the communities the Academy serves.

## Tech Stack

- **Programs**: Anchor / Pinocchio (Rust), deployed on Solana devnet
- **Credentials**: Token-2022 soulbound XP + Metaplex Core NFT certificates
- **Frontend**: Next.js 14, React 18, Tailwind CSS, shadcn/ui
- **Backend**: Supabase (PostgreSQL + Auth)
- **Monorepo**: Turborepo + pnpm
