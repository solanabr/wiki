# solana-claude

**GitHub**: [SuperteamBrazil/solana-claude](https://github.com/SuperteamBrazil/solana-claude)
**Estado**: En desarrollo activo, lanzamiento publico
**Mantenido por**: @kauenet

## Vision General

Una configuracion integral de Claude Code que transforma Claude Code en un entorno de desarrollo especializado para Solana. Cubre el stack completo — desde programas on-chain en Rust hasta frontends en TypeScript, clientes de juegos en Unity y aplicaciones moviles.

## Caracteristicas

### 15 Agentes Especializados

Agentes disenados para cada rol en el ciclo de vida de desarrollo de Solana:

- **solana-architect** — Diseno de sistemas y decisiones de arquitectura
- **anchor-engineer** — Desarrollo de programas con Anchor
- **pinocchio-engineer** — Programas de alto rendimiento con Pinocchio
- **defi-engineer** — Implementacion de protocolos DeFi
- **solana-frontend-engineer** — Frontends de dApps en TypeScript/React
- **game-architect** — Diseno de juegos on-chain y planificacion de estado
- **unity-engineer** — Desarrollo en Unity/C# con Solana SDK
- **mobile-engineer** — React Native y Expo para Solana mobile
- **rust-backend-engineer** — Servicios off-chain en Rust
- **devops-engineer** — Infraestructura, CI/CD, despliegue
- **token-engineer** — Creacion, extensiones y gestion de tokens
- **solana-researcher** — Investigacion y analisis del ecosistema
- **solana-qa-engineer** — Testing y aseguramiento de calidad
- **tech-docs-writer** — Documentacion tecnica
- **solana-guide** — Incorporacion y educacion de desarrolladores

### 24+ Slash Commands

Flujos de trabajo automatizados accesibles via slash commands:

- `/build-program` — Compilar y verificar programas de Solana
- `/audit-solana` — Auditoria de seguridad para codigo on-chain
- `/profile-cu` — Perfilado de unidades de computo
- `/deploy` — Despliegue en devnet y mainnet
- `/scaffold` — Scaffolding de proyectos
- `/test-rust` — Ejecutor de tests en Rust
- `/test-ts` — Ejecutor de tests en TypeScript
- `/quick-commit` — Creacion de ramas y automatizacion de commits
- `/diff-review` — Revision de codigo y deteccion de AI slop
- `/setup-mcp` — Configuracion de servidores MCP

### 6 Integraciones de Servidores MCP

- **Helius** — 60+ herramientas para RPC, DAS API, webhooks, priority fees y metadatos de tokens
- **solana-dev** — MCP oficial de la Solana Foundation con documentacion, guias y referencias de API
- **Context7** — Consulta de documentacion actualizada de librerias
- **Puppeteer** — Automatizacion de navegador para testing de dApps
- **context-mode** — Compresion de respuestas RPC grandes y logs de compilacion para ahorrar contexto
- **memsearch** — Memoria persistente entre sesiones con busqueda semantica

### Reglas por Lenguaje

Estandares de codigo aplicados para cada lenguaje del stack:

- **Rust** — Aritmetica checked, manejo de errores, sin `unwrap()` en produccion
- **Anchor** — Validacion de cuentas, gestion de PDAs, seguridad en CPIs
- **Pinocchio** — Patrones zero-copy, validacion manual, optimizacion de CU
- **TypeScript** — Seguridad de tipos, patrones async, integracion de wallets
- **C#/.NET** — Convenciones de Unity, estandares .NET, campos serializados

### Patrones de Equipos de Agentes

Flujos de trabajo multi-agente preconfigurados:

- **program-ship** — Disenar, implementar, probar y desplegar un programa
- **full-stack** — Desarrollo de extremo a extremo desde el programa hasta el frontend
- **audit-and-fix** — Auditoria de seguridad con remediacion automatizada
- **game-ship** — Pipeline de desarrollo de juegos
- **research-and-build** — Implementacion basada en investigacion
- **defi-compose** — Composicion de protocolos DeFi
- **token-launch** — Flujo de trabajo de creacion y lanzamiento de tokens

## Stack Tecnologico

- Claude Code
- MCP Protocol
- Shell scripting
