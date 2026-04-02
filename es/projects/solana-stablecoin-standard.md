# Solana Stablecoin Standard

**GitHub**: [solanabr/solana-stablecoin-standard](https://github.com/solanabr/solana-stablecoin-standard)
**Estado**: En desarrollo activo
**Mantenido por**: @lvj_luiz y @kauenet

## Vision General

Una interfaz estandarizada para la emision y gestion de stablecoins en Solana. Define dos especificaciones — SSS-1 para la funcionalidad core de stablecoins y SSS-2 para caracteristicas avanzadas de cumplimiento y operaciones.

## Por Que Importa

Las stablecoins son la columna vertebral de DeFi. Sin un estandar compartido, cada emisor implementa acunacion, quema, congelamiento y controles de cumplimiento de manera diferente. Esto fragmenta el ecosistema: los exchanges necesitan integraciones personalizadas por stablecoin, los protocolos DeFi no pueden generalizar su manejo de stablecoins, y el cumplimiento regulatorio se vuelve ad-hoc.

El Solana Stablecoin Standard proporciona una interfaz comun para que emisores, exchanges y protocolos DeFi puedan interoperar a traves de una sola especificacion.

## Caracteristicas

### Especificacion SSS-1

La interfaz core de stablecoins que cubre operaciones fundamentales:

- Controles de acunacion y quema
- Congelamiento y descongelamiento de cuentas
- Restricciones de transferencia
- Gestion de autoridades

### Especificacion SSS-2

Caracteristicas avanzadas para despliegues institucionales y enfocados en cumplimiento:

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

## Stack Tecnologico

- Anchor
- Token-2022
- Rust
