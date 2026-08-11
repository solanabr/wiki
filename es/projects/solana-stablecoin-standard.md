# Solana Stablecoin Standard

**GitHub**: [solanabr/solana-stablecoin-standard](https://github.com/solanabr/solana-stablecoin-standard)
**Estado**: Completo — v1 lanzada en marzo de 2026; repositorio archivado (solo lectura), disponible como implementacion de referencia
**Mantenido por**: @lvj_luiz y @kauenet

## Vision General

Una interfaz estandarizada para la emision y gestion de stablecoins en Solana. Define dos especificaciones — SSS-1 (minimal) para la funcionalidad core de stablecoins y SSS-2 (compliant), que agrega aplicacion de listas negras via transfer hook y cuentas restringidas por KYC.

La version v1 entrego un toolkit completo: el programa Anchor SSS-Core, un programa de transfer hook de lista negra, una CLI, un SDK de TypeScript, un backend REST y una demo en React.

## Por Que Importa

Las stablecoins son la columna vertebral de DeFi. Sin un estandar compartido, cada emisor implementa acunacion, quema, congelamiento y controles de cumplimiento de manera diferente. Esto fragmenta el ecosistema: los exchanges necesitan integraciones personalizadas por stablecoin, los protocolos DeFi no pueden generalizar su manejo de stablecoins, y el cumplimiento regulatorio se vuelve ad-hoc.

El Solana Stablecoin Standard proporciona una interfaz comun para que emisores, exchanges y protocolos DeFi puedan interoperar a traves de una sola especificacion.

## Caracteristicas

### SSS-1 (Minimal)

La interfaz core de stablecoins que cubre operaciones fundamentales:

- Controles de acunacion y quema
- Congelamiento y descongelamiento de cuentas
- Restricciones de transferencia
- Gestion de autoridades

### SSS-2 (Compliant)

Construida sobre SSS-1, agrega aplicacion de listas negras via transfer hook y cuentas restringidas por KYC, para despliegues institucionales y enfocados en cumplimiento:

- Hooks de cumplimiento para aplicacion de KYC/AML
- Listas negras y listas blancas
- Integracion de oraculos actualizables
- Restricciones de transferencia configurables

### Colaboracion con OpenZeppelin

El contribuidor principal @lvj_luiz de OpenZeppelin aporta expertise de seguridad probada en batalla del ecosistema Ethereum. El estandar se beneficia del mismo rigor aplicado a los contratos Solidity ampliamente utilizados de OpenZeppelin.

### Listo para Cumplimiento

Construido con los requisitos regulatorios en mente. Los transfer hooks permiten a los emisores aplicar verificaciones KYC, restricciones geograficas y otras politicas de cumplimiento a nivel de protocolo.

### Nativo de Token-2022

Aprovecha el programa Token Extensions de Solana para funcionalidad avanzada:

- **Transfer hooks** para aplicacion de cumplimiento
- **Transferencias confidenciales** para pagos con preservacion de privacidad
- **Metadatos no transferibles** para atestaciones del emisor

## Referencias en Vivo

- **Demo en video**: [Solana Stablecoin Standard demo](https://youtu.be/3y86hHGvMO4)
- **Programa SSS-Core (devnet)**: `4ZFzYcNVDSew79hSAVRdtDuMqe9g4vYh7CFvitPSy5DD`
- **Programa Blacklist Transfer Hook (devnet)**: `84rPjkmmoP3oYZVxjtL2rdcT6hC5Rts6N5XzJTFcJEk6`

Ambos program IDs son los listados en el README del repositorio.

## Stack Tecnologico

- Anchor
- Token-2022
- Rust
