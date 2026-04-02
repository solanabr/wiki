# Referencias Open Source

Estudiar código en producción es la forma más rápida de subir de nivel como desarrollador de Solana. Los tutoriales te enseñan patrones. El open source te muestra cómo esos patrones funcionan bajo restricciones reales — manejando casos límite, gestionando estado, optimizando unidades de cómputo y construyendo para componibilidad. Estos repositorios se mantienen activamente y cubren todo, desde transferencias básicas de tokens hasta protocolos DeFi complejos y herramientas para desarrolladores.

---

## Proyectos de Superteam Brazil

Estos son proyectos open-source construidos y mantenidos por la comunidad de Superteam Brazil. Van desde herramientas para desarrolladores hasta estándares de protocolos y plataformas educativas.

### solana-claude

[https://github.com/solanabr/solana-claude-config](https://github.com/solanabr/solana-claude-config)

El entorno de desarrollo IA completo para Solana. Este repositorio contiene 15 agentes especializados, 24+ comandos slash, 6 integraciones de servidores MCP preconfiguradas, reglas específicas de lenguaje para Rust/Anchor/Pinocchio/TypeScript/C# y patrones de equipos de agentes para flujos de trabajo de desarrollo comunes. Es la configuración de Claude Code más completa para cualquier ecosistema blockchain.

Estúdialo para entender cómo estructurar herramientas de desarrollo IA — las definiciones de agentes, patrones de comandos y la integración MCP están bien organizados y documentados. Mantenido por @kauenet.

### solana-vault-standard

[https://github.com/solanabr/solana-vault-standard](https://github.com/solanabr/solana-vault-standard)

El equivalente de ERC-4626 para Solana (sRFC 40). Este repositorio contiene la especificación e implementaciones de referencia para 8 variantes de vault que cubren préstamos, staking y estrategias de rendimiento. El código demuestra cómo diseñar primitivas DeFi componibles en Solana — interfaces estandarizadas, esquemas de PDA para estado de vault y patrones de CPI para interacciones con vaults.

Estúdialo para ejemplos de cómo diseñar estándares de protocolo, implementar contabilidad basada en shares para vaults y estructurar programas Anchor para componibilidad. Mantenido por @kauenet, @thomgabriel, @vcnzo_ct y otros.

### solana-stablecoin-standard

[https://github.com/solanabr/solana-stablecoin-standard](https://github.com/solanabr/solana-stablecoin-standard)

Especificaciones SSS-1 y SSS-2 para emisión estandarizada de stablecoins. El codebase demuestra uso avanzado de Token-2022 — transfer hooks para aplicación de cumplimiento, control de acceso basado en roles, integración de oráculos y gestión de listas negras. Este es uno de los mejores ejemplos de construcción de infraestructura financiera de grado producción en Solana con extensiones de Token-2022.

Estúdialo para patrones de implementación de transfer hooks en Token-2022, arquitectura de cumplimiento y cómo estructurar una especificación de múltiples niveles (SSS-1 básico, SSS-2 avanzado). Mantenido por @lvj_luiz y @kauenet.

### superteam-academy

[https://github.com/solanabr/superteam-academy](https://github.com/solanabr/superteam-academy)

Un Sistema de Gestión de Aprendizaje on-chain que emite tokens de XP soulbound por finalización de módulos y certificados NFT por graduación de cursos. El codebase muestra cómo construir una plataforma educativa en Solana — emisión de credenciales, seguimiento de progreso y patrones de tokens no transferibles.

Estúdialo para ejemplos de implementación de tokens soulbound, sistemas de credenciales on-chain y cómo estructurar una aplicación full-stack de Solana con programa y frontend. Mantenido por @thomgabriel y @kauenet.

### solana-game-skill

[https://github.com/solanabr/solana-game-skill](https://github.com/solanabr/solana-game-skill)

Un paquete de skill para Claude Code para desarrollo de juegos en Unity y móvil con Solana. Contiene definiciones de agentes especializados, comandos específicos para juegos y reglas de C#/.NET para desarrollo de juegos en Solana. Estúdialo para entender cómo crear herramientas de IA específicas para contextos de desarrollo especializados. Mantenido por @kauenet.

---

## Referencias del Ecosistema

Estos repositorios del ecosistema más amplio de Solana proporcionan ejemplos bien mantenidos e implementaciones de referencia.

### program-examples

[https://github.com/solana-developers/program-examples](https://github.com/solana-developers/program-examples)

El repositorio de ejemplos oficial mantenido por la Solana Foundation. Contiene implementaciones de patrones comunes en múltiples frameworks — Anchor, Rust nativo y Python (vía Seahorse). Los ejemplos cubren transferencias de tokens, PDAs, CPIs, compresión de cuentas, staking y más. Cada ejemplo es autocontenido con tests.

Este es el primer lugar donde buscar cuando necesites una implementación de referencia para un patrón común. El código es revisado por el equipo de la Solana Foundation y se mantiene actualizado con las últimas versiones del SDK. Los nuevos desarrolladores deberían comenzar con el directorio básico y avanzar progresivamente a través de los ejemplos.

### awesome-solana-oss

[https://github.com/StockpileLabs/awesome-solana-oss](https://github.com/StockpileLabs/awesome-solana-oss)

Una lista curada y actualizada regularmente de proyectos open-source de Solana organizados por categoría — protocolos DeFi, herramientas de NFT, utilidades para desarrolladores, infraestructura y más. Cada entrada incluye una breve descripción y enlace al código fuente.

Úsalo como herramienta de descubrimiento cuando quieras encontrar implementaciones open-source de funcionalidad específica. ¿Quieres ver cómo un DEX en producción maneja el matching de órdenes? ¿Cómo un marketplace de NFTs implementa listados? ¿Cómo un protocolo de préstamos gestiona liquidaciones? Esta lista te dirige al código.

### Ejemplos de solana-actions

[https://github.com/solana-developers/solana-actions/tree/main/examples](https://github.com/solana-developers/solana-actions/tree/main/examples)

Implementaciones de referencia para Solana Actions y Blinks en múltiples frameworks de servidor — Axum (Rust), Cloudflare Workers (TypeScript) y Next.js (TypeScript). Estos ejemplos muestran cómo construir APIs de Actions que devuelven transacciones firmables desde endpoints HTTP.

Estúdialos si estás construyendo Actions/Blinks. Los ejemplos demuestran el flujo completo de request/response, construcción de transacciones, formato de metadata y manejo de errores para la especificación de Actions. Cada ejemplo por framework está listo para producción y puede desplegarse tal cual.

### Ejemplos de Anchor

[https://github.com/coral-xyz/anchor/tree/master/examples](https://github.com/coral-xyz/anchor/tree/master/examples)

Programas de ejemplo del propio repositorio del framework Anchor. Estos ejemplos son mantenidos por el equipo de Anchor y demuestran uso idiomático de las funcionalidades de Anchor — constraints de cuentas, PDAs, CPIs, manejo de errores, eventos y patrones de testing. Se actualizan junto con las releases de Anchor, así que siempre reflejan las mejores prácticas actuales.

Estúdialos para entender cómo el equipo de Anchor pretende que su framework sea usado. Los ejemplos van desde simples (contador básico) hasta complejos (programas multi-instrucción con CPIs), y cada uno incluye tanto el programa en Rust como los tests en TypeScript.

### Squads Protocol v4

[https://github.com/Squads-Protocol/v4](https://github.com/Squads-Protocol/v4)

Infraestructura de multisig y smart accounts en producción usada por los principales protocolos y equipos de Solana. Squads v4 implementa un multisig flexible con umbrales configurables, time-locks, límites de gasto y ejecución por lotes. El codebase es uno de los mejores ejemplos de código Anchor de producción — demuestra patrones complejos de validación de cuentas, transacciones con múltiples instrucciones y cómo construir infraestructura con la que otros protocolos compongan. Estúdialo para patrones de multisig, arquitectura de control de acceso y cómo estructurar un programa que necesita ser tanto seguro como componible.

### Ejemplos de Pinocchio

[https://github.com/solana-developers/program-examples/tree/main/basics](https://github.com/solana-developers/program-examples/tree/main/basics)

Aunque el repositorio oficial de ejemplos de programas se centra principalmente en Anchor y Rust nativo, también incluye implementaciones en Pinocchio para comparación. Son invaluables para entender las compensaciones de rendimiento entre frameworks — el mismo programa implementado en Anchor vs Pinocchio, permitiéndote ver exactamente dónde se ahorran compute units y cómo funciona el acceso zero-copy en la práctica.

### Clockwork (Referencia Legacy)

[https://github.com/clockwork-xyz/clockwork](https://github.com/clockwork-xyz/clockwork)

Un motor de automatización para Solana que habilitaba ejecución programada y condicional de programas. Aunque Clockwork ha sido descontinuado, el codebase sigue siendo un excelente recurso de estudio para patrones avanzados de Solana — ejecución basada en hilos, mecanismos de crank, automatización cross-program y cómo construir programas de nivel de infraestructura que interactúan con el runtime de Solana. Estúdialo para entender patrones de automatización y cómo diseñar programas que se ejecutan en horario.

### Helius SDK

[https://github.com/helius-labs/helius-sdk](https://github.com/helius-labs/helius-sdk)

Los SDKs oficiales en TypeScript y Rust para la API de Helius. Estúdialo para ejemplos de diseño de SDK bien estructurado — wrappers de API type-safe, gestión de webhooks, integración con DAS API, parsing de transacciones y estimación de priority fees. El código del SDK demuestra cómo construir herramientas de desarrollo ergonómicas que abstraen la complejidad de la API manteniendo total type safety.

### Metaplex Program Library

[https://github.com/metaplex-foundation/mpl-core](https://github.com/metaplex-foundation/mpl-core)

El código fuente de Metaplex Core (el estándar NFT de nueva generación), MPL Token Metadata, Bubblegum (compressed NFTs) y Candy Machine. Este es uno de los códigos de programa Solana más ampliamente usados en existencia. Estúdialo para entender arquitecturas de plugins, cómo manejar relaciones complejas entre cuentas y cómo construir programas de los que todo el ecosistema depende. El codebase también demuestra Kinobi/Codama para generación automatizada de clientes.

---

## Codebases DeFi en Producción

Estos son protocolos open-source en producción donde estudiar el código enseña patrones que no puedes aprender de tutoriales.

### Marinade Finance

[https://github.com/marinade-finance/liquid-staking-program](https://github.com/marinade-finance/liquid-staking-program)

El primer protocolo de liquid staking en la mainnet de Solana. Programa open-source basado en Anchor que demuestra: gestión de stake accounts y estrategias de delegación, mecánica de mint/burn de mSOL vinculada a tasa de cambio, pool LP de swap para unstake instantáneo (evitando el cooldown), y un patrón de wrapper de referidos para compartir comisiones con partners. El `/Docs/Backend-Design.md` en el repo vale la lectura para arquitectura del sistema. TypeScript SDK: [marinade-finance/marinade-ts-sdk](https://github.com/marinade-finance/marinade-ts-sdk).

### Drift v2

[https://github.com/drift-labs/protocol-v2](https://github.com/drift-labs/protocol-v2)

La DEX de perpetuos open-source más grande en Solana. Drift combina tres mecanismos de liquidez — un vAMM, un libro de órdenes límite descentralizado (DLOB) operado por keeper bots, y un mecanismo de liquidez Just-In-Time (JIT). Este diseño multi-mecanismo es el principal valor de estudio arquitectural. Soporta 40+ mercados con hasta 101x de apalancamiento en perps. El monorepo incluye el programa Rust y SDK TypeScript. Implementación de referencia de keeper bot en [drift-labs/keeper-bots-v2](https://github.com/drift-labs/keeper-bots-v2).

### Raydium CLMM

[https://github.com/raydium-io/raydium-clmm](https://github.com/raydium-io/raydium-clmm)

La implementación de liquidez concentrada de Raydium (AMM v3). Estúdialo para gestión de liquidez basada en ticks, ruteo de swaps a través de posiciones concentradas, configuración de tiers de comisiones y el patrón de position NFT donde cada posición LP se representa como un NFT. Licenciado bajo Apache-2.0, lo que lo hace limpio para hacer fork o adaptar.

### Sealevel Attacks

[https://github.com/coral-xyz/sealevel-attacks](https://github.com/coral-xyz/sealevel-attacks)

Diez programas Anchor numerados, cada uno demostrando una vulnerabilidad específica de Solana con una versión insegura y una corrección segura. Mantenido por el equipo de Anchor (Coral XYZ). Cubre: autorización de firmante, coincidencia de datos de cuentas, verificaciones de owner, type cosplay, inicialización, CPI arbitrario, cuentas mutables duplicadas, canonicalización de bump seed, compartición de PDA y cierre de cuentas. Lectura esencial para cualquier desarrollador desplegando programas que manejan fondos de usuarios. Úsalo junto con el entrenamiento de seguridad de Ackee para comprensión integral de vulnerabilidades.

---

## Gobernanza y Estándares

### Solana Improvement Documents (SIMDs)

[https://github.com/solana-foundation/solana-improvement-documents](https://github.com/solana-foundation/solana-improvement-documents)

El proceso formal de propuestas para cambios en el protocolo Solana. Los SIMDs definen nuevas funcionalidades, cambios de protocolo y estándares. Navegador de la comunidad en [simd.wtf](https://simd.wtf/). La discusión ocurre en los [Foros de Desarrolladores Solana categoría SIMD](https://forum.solana.com/c/simd/5).

SIMDs críticos para desarrolladores incluyen: SIMD-0096 (100% de priority fees para validadores — ya activado, cambia el modelado de comisiones), SIMD-0083 (scheduling de transacciones mejorado), SIMD-0296 (transacciones más grandes — en progreso), SIMD-0286 (bloques de 100M CU — en progreso) y SIMD-0326 (consenso Alpenglow — propuesto). Entender los SIMDs activos te mantiene adelante de cambios de protocolo que afectan tus programas.

### Solana Program Library (SPL)

[https://spl.solana.com/](https://spl.solana.com/)

La colección oficial de programas on-chain en producción. Más allá de Token y Token-2022, SPL incluye: Governance (votación/tesorería de DAO), Stake Pool (staking multi-validador — base para mSOL, jitoSOL), Name Service (dominios on-chain, base para .sol), Account Compression (árboles Merkle concurrentes para cNFTs), Memo (adjuntar strings UTF-8 a transacciones) y más. Nota: el monorepo original (`solana-labs/solana-program-library`) fue archivado en Marzo 2025 y dividido en repositorios individuales bajo la organización GitHub [solana-program](https://github.com/solana-program) mantenida por Anza.
