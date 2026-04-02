# Solana Vault Standard

**GitHub**: [solanabr/solana-vault-standard](https://github.com/solanabr/solana-vault-standard)
**Estado**: sRFC presentado, en desarrollo activo
**Mantenido por**: @kauenet, @thomgabriel, @vcnzo_ct y otros

## Vision General

Una interfaz estandarizada de vaults para Solana — el equivalente de ERC-4626 para el ecosistema Solana. Presentado como sRFC 40 a la Solana Foundation para adopcion a nivel del ecosistema.

## Por Que Importa

Sin un estandar, cada protocolo DeFi implementa vaults de manera diferente. Esto hace que la composabilidad sea dolorosa: las wallets necesitan integraciones personalizadas para cada protocolo, los agregadores no pueden generalizar entre vaults, y los desarrolladores reinventan la misma logica de deposito/retiro/contabilidad repetidamente.

El Solana Vault Standard define una interfaz comun para que cualquier protocolo pueda integrarse con cualquier vault compatible — de la misma forma en que ERC-4626 unifico las interacciones de vaults en Ethereum.

## Caracteristicas

### sRFC 40

Un Solana Request for Comments formal, actualmente bajo revision por la Solana Foundation. La propuesta define la interfaz, estructuras de cuentas y comportamientos esperados para vaults compatibles.

### 8 Variantes de Vaults

Implementaciones de referencia cubriendo diferentes casos de uso DeFi:

- Vaults de prestamos
- Vaults de staking
- Vaults de agregacion de rendimiento
- Y variantes adicionales para estrategias especializadas

### Interfaz Estandarizada

Una interfaz comun de deposito/retiro/contabilidad adaptada al modelo de cuentas de Solana. Maneja las diferencias entre la arquitectura basada en cuentas de Solana y el modelo basado en contratos de Ethereum.

### Composabilidad

Permite que wallets, agregadores y protocolos interactuen con cualquier vault compatible a traves de una sola integracion. Construye una vez, conecta con cada vault.

### Implementaciones de Referencia

Programas Anchor funcionales para cada variante de vault. Estos sirven tanto como documentacion como puntos de partida listos para produccion para equipos de protocolos.

## Stack Tecnologico

- Anchor
- Rust
