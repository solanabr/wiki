# Gaming y Móvil

La finalidad en menos de un segundo y las bajas comisiones de Solana la hacen especialmente adecuada para aplicaciones de gaming y móvil donde las interacciones en tiempo real y las microtransacciones son esenciales. Esta página cubre los SDKs, motores y herramientas para construir juegos y aplicaciones móviles en Solana.

---

## Desarrollo de Juegos

### Solana.Unity SDK

[https://solana.unity-sdk.gg/](https://solana.unity-sdk.gg/)

El SDK principal para desarrolladores de juegos en Unity que construyen sobre Solana. Proporciona conexión de wallet (Phantom, Solflare, SMS wallet adapter), firma de transacciones, carga y visualización de NFTs, gestión de tokens in-game y deserialización de cuentas — todo dentro del entorno C# de Unity. El SDK maneja la complejidad de conectar el game loop síncrono de Unity con las interacciones asíncronas de blockchain de Solana.

Este es el punto de entrada para cualquier desarrollador de Unity que quiera integrar Solana. El SDK soporta builds de escritorio y móvil, maneja protocolos de wallet adapter para dispositivos móviles e incluye helpers para operaciones comunes como obtener balances de tokens, leer cuentas de programas y construir transacciones. Si vienes de un background de desarrollo de juegos sin experiencia en blockchain, este SDK abstrae la complejidad específica de Solana mientras te da acceso completo cuando lo necesites.

### MagicBlock

[https://docs.magicblock.gg/](https://docs.magicblock.gg/)

Un motor de juegos on-chain que resuelve uno de los problemas más difíciles del gaming blockchain: multijugador en tiempo real con estado on-chain. MagicBlock usa rollups efímeros — entornos de ejecución temporales que procesan transacciones de juegos a alta velocidad, luego liquidan los resultados de vuelta a Solana. Esto permite actualizaciones de estado de juego por debajo del segundo mientras mantiene la seguridad y componibilidad de los datos on-chain.

MagicBlock importa porque la mayoría de los "juegos blockchain" mantienen la jugabilidad off-chain y solo usan la blockchain para la propiedad de activos. MagicBlock permite gameplay verdaderamente on-chain donde el estado del juego vive en Solana, otros programas pueden componerlo y los jugadores tienen historiales de juego verificables. Su arquitectura Entity Component System (ECS) es familiar para desarrolladores de juegos y se mapea bien al modelo de cuentas de Solana. Usa MagicBlock cuando quieras gameplay multijugador en tiempo real con estado on-chain — piensa en juegos de estrategia, juegos de cartas, o cualquier juego donde el estado verificable importa.

### PlaySolana

[https://playsolana.com/](https://playsolana.com/)

Un ecosistema de gaming y plataforma de herramientas para desarrollo de juegos en Solana. PlaySolana proporciona recursos, SDKs e infraestructura para estudios de juegos que construyen sobre Solana. Se enfocan en reducir las barreras de entrada para desarrolladores de juegos nuevos en blockchain — proporcionando templates, documentación y herramientas de integración que simplifican las interacciones comunes entre juegos y blockchain como minting de items, integración de marketplace y autenticación de jugadores.

### Unreal Engine SDK (Star Atlas Foundation Kit)

[https://github.com/staratlasmeta/FoundationKit](https://github.com/staratlasmeta/FoundationKit)

Foundation Kit (F-Kit) es el plugin de Unreal Engine totalmente open-source de Star Atlas (UE4 y UE5) para conectar clientes de juegos con Solana. Tiene dos capas: un Core SDK (generación de key pairs y mnemónicos, importación de llaves privadas, lectura de datos de cuentas, envío de transacciones, interacción con programas on-chain) y una interfaz de Wallet + Blueprint construida encima. Aunque menos maduro que el SDK de Unity, abre la integración de Solana a la comunidad de desarrolladores de Unreal Engine — importante para desarrollo de juegos con calidad AAA.

### Solana Game Skill

[https://github.com/solanabr/solana-game-skill](https://github.com/solanabr/solana-game-skill)

Un paquete de skill para Claude Code diseñado específicamente para desarrollo de juegos en Unity y móvil con Solana, creado por Superteam Brazil. Proporciona agentes de IA especializados — game-architect para diseño de sistemas, unity-engineer para implementación en C# y Unity, y mobile-engineer para asuntos específicos de móvil — junto con comandos y reglas adaptadas al flujo de trabajo de desarrollo de juegos.

Este skill entiende los desafíos únicos de la integración juego-blockchain: manejar conexiones de wallet dentro de game loops, gestionar activos NFT en el scene graph de Unity, serializar/deserializar cuentas de programa en C# y optimizar builds para móvil. Instálalo junto con [Solana AI Kit](https://github.com/solanabr/solana-ai-kit) para un entorno de desarrollo de juegos completo. Mantenido por @kauenet.

---

## Desarrollo Móvil

### Documentación de Solana Mobile

[https://docs.solanamobile.com/](https://docs.solanamobile.com/)

La documentación completa para construir aplicaciones móviles nativas en Solana. Esto cubre todo desde configurar un proyecto React Native con integración Solana hasta manejar conexiones de wallet, firmar transacciones y gestionar asuntos específicos de móvil como deep linking, procesamiento en segundo plano y distribución en app stores.

El desarrollo móvil en Solana tiene restricciones únicas — no puedes incluir una wallet directamente en tu app, así que necesitas usar el protocolo Mobile Wallet Adapter para comunicarte con apps de wallet instaladas. La documentación recorre esta arquitectura y proporciona ejemplos funcionales tanto para Android como iOS (vía React Native).

### Mobile Wallet Adapter

[https://docs.solanamobile.com/get-started/mobile-wallet-adapter](https://docs.solanamobile.com/get-started/mobile-wallet-adapter)

El protocolo estándar para conectar wallets móviles a dApps de Solana. Mobile Wallet Adapter (MWA) define cómo tu app descubre, se conecta y se comunica con aplicaciones de wallet instaladas en el dispositivo del usuario. Funciona de manera similar a WalletConnect pero está diseñado específicamente para el modelo de transacciones de Solana.

El SDK de React Native proporciona hooks y providers que reflejan la experiencia del wallet adapter web — `useWallet()`, `useConnection()` y firma de transacciones todo funciona con patrones familiares. Si has construido una app web de Solana con wallet-adapter-react, los patrones móviles te resultarán naturales. MWA es soportado por wallets incluyendo Phantom, Solflare y la Seed Vault Wallet integrada del Seeker, con más wallets adoptando el estándar.

### Seeker (y Saga)

[https://solanamobile.com/](https://solanamobile.com/)

Hardware móvil nativo de Solana construido por Solana Mobile. El Seeker de segunda generación comenzó a enviarse el 4 de agosto de 2025 — un lote inicial de más de 150,000 unidades pre-ordenadas entregadas en más de 50 países, superando por mucho al Saga original (2023, ~20,000 unidades), que ahora es un dispositivo legacy. Seeker incluye el Seed Vault (gestión de llaves con elemento seguro y una Seed Vault Wallet integrada), la dApp Store nativa de Solana e integración profunda con Solana a nivel de sistema operativo.

Antes del lanzamiento del Seeker, en mayo de 2025, Solana Mobile anunció dos pilares del ecosistema: SKR, el token nativo del ecosistema Solana Mobile, y TEEPIN (Trusted Execution Environment Platform Infrastructure Network), una arquitectura de tres capas que permite a múltiples fabricantes de hardware construir dispositivos nativos de Solana con atestación criptográfica. SKR se lanzó el 21 de enero de 2026 con un airdrop para holders del Seeker, y también financia incentivos para desarrolladores — la Season 1 distribuyó 141M de SKR a 188 equipos que lanzaron apps de calidad en la dApp Store.

Para desarrolladores, la dApp Store sigue siendo el punto clave: distribución sin comisiones, sin el recorte del 30% ni las restricciones crypto de Apple/Google, más una audiencia de hardware crypto-nativa alcanzable a través de incentivos alineados con SKR.
