# Solana Vault Standard

**GitHub**: [solanabr/solana-vault-standard](https://github.com/solanabr/solana-vault-standard)
**Estado**: En desarrollo activo — 12 variantes activas en devnet
**Mantenido por**: @kauenet, @thomgabriel, @vcnzo_ct y otros

## Vision General

Una interfaz estandarizada de vaults para Solana — el equivalente de ERC-4626 para el ecosistema Solana. Referenciado en la discusion del sRFC 40 sobre el estandar de vaults del ecosistema como una implementacion desarrollada de forma independiente.

## Por Que Importa

Sin un estandar, cada protocolo DeFi implementa vaults de manera diferente. Esto hace que la composabilidad sea dolorosa: las wallets necesitan integraciones personalizadas para cada protocolo, los agregadores no pueden generalizar entre vaults, y los desarrolladores reinventan la misma logica de deposito/retiro/contabilidad repetidamente.

El Solana Vault Standard define una interfaz comun para que cualquier protocolo pueda integrarse con cualquier vault compatible — de la misma forma en que ERC-4626 unifico las interacciones de vaults en Ethereum.

## Caracteristicas

### sRFC 40

SVS esta referenciado en la [discusion sRFC 40: Vault Standard Program](https://github.com/solana-foundation/SRFCs/discussions/10) en solana-foundation/SRFCs como una implementacion desarrollada de forma independiente que informa el estandar de vaults emergente del ecosistema (que actualmente prioriza vaults asincronos para emisores de RWA).

### 12 Variantes de Vaults

Implementaciones de referencia cubriendo diferentes casos de uso DeFi, todas activas en devnet:

- **SVS-1/2** — Vaults publicos (balance en vivo y balance almacenado)
- **SVS-3/4** — Vaults privados con transferencias confidenciales de Token-2022
- **SVS-5/6** — Vaults de rendimiento en streaming
- **SVS-7** — Vault de SOL nativo
- **SVS-8** — Canasta multi-activo
- **SVS-9** — Vault de vaults asignador (allocator)
- **SVS-10** — Vault asincrono estilo ERC-7540
- **SVS-11** — Vault de mercados de credito con KYC y NAV por oraculo
- **SVS-12** — Vault con tranches

### Interfaz Estandarizada

Una interfaz comun de deposito/retiro/contabilidad adaptada al modelo de cuentas de Solana. Maneja las diferencias entre la arquitectura basada en cuentas de Solana y el modelo basado en contratos de Ethereum.

### Composabilidad

Permite que wallets, agregadores y protocolos interactuen con cualquier vault compatible a traves de una sola integracion. Construye una vez, conecta con cada vault.

### Implementaciones de Referencia

Programas Anchor funcionales para cada variante de vault. Estos sirven tanto como documentacion como puntos de partida listos para produccion para equipos de protocolos. El repositorio tambien incluye un SDK de TypeScript y una CLI.

## Stack Tecnologico

- Anchor
- Rust
- SDK de TypeScript y CLI
