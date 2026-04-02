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

### Unreal Engine SDK

[https://github.com/staratlas/unreal-sdk-plugin](https://github.com/staratlas/unreal-sdk-plugin)

Integración de Solana para Unreal Engine, desarrollado originalmente para Star Atlas. El SDK proporciona conexión de wallet, firma de transacciones y acceso a datos de cuentas dentro de los entornos C++ y Blueprint de Unreal Engine. Aunque menos maduro que el SDK de Unity, abre la integración de Solana a la comunidad de desarrolladores de Unreal Engine — importante para desarrollo de juegos con calidad AAA.

### Solana Game Skill

[https://github.com/solanabr/solana-game-skill](https://github.com/solanabr/solana-game-skill)

Un paquete de skill para Claude Code diseñado específicamente para desarrollo de juegos en Unity y móvil con Solana, creado por Superteam Brazil. Proporciona agentes de IA especializados — game-architect para diseño de sistemas, unity-engineer para implementación en C# y Unity, y mobile-engineer para asuntos específicos de móvil — junto con comandos y reglas adaptadas al flujo de trabajo de desarrollo de juegos.

Este skill entiende los desafíos únicos de la integración juego-blockchain: manejar conexiones de wallet dentro de game loops, gestionar activos NFT en el scene graph de Unity, serializar/deserializar cuentas de programa en C# y optimizar builds para móvil. Instálalo junto con [solana-claude](https://github.com/solanabr/solana-claude-config) para un entorno de desarrollo de juegos completo. Mantenido por @kauenet.

---

## Desarrollo Móvil

### Documentación de Solana Mobile

[https://docs.solanamobile.com/](https://docs.solanamobile.com/)

La documentación completa para construir aplicaciones móviles nativas en Solana. Esto cubre todo desde configurar un proyecto React Native con integración Solana hasta manejar conexiones de wallet, firmar transacciones y gestionar asuntos específicos de móvil como deep linking, procesamiento en segundo plano y distribución en app stores.

El desarrollo móvil en Solana tiene restricciones únicas — no puedes incluir una wallet directamente en tu app, así que necesitas usar el protocolo Mobile Wallet Adapter para comunicarte con apps de wallet instaladas. La documentación recorre esta arquitectura y proporciona ejemplos funcionales tanto para Android como iOS (vía React Native).

### Mobile Wallet Adapter

[https://docs.solanamobile.com/react-native/overview](https://docs.solanamobile.com/react-native/overview)

El protocolo estándar para conectar wallets móviles a dApps de Solana. Mobile Wallet Adapter (MWA) define cómo tu app descubre, se conecta y se comunica con aplicaciones de wallet instaladas en el dispositivo del usuario. Funciona de manera similar a WalletConnect pero está diseñado específicamente para el modelo de transacciones de Solana.

El SDK de React Native proporciona hooks y providers que reflejan la experiencia del wallet adapter web — `useWallet()`, `useConnection()` y firma de transacciones todo funciona con patrones familiares. Si has construido una app web de Solana con wallet-adapter-react, los patrones móviles te resultarán naturales. MWA soporta tanto Phantom como Solflare en móvil, con más wallets adoptando el estándar.

### Saga / Seeker

[https://solanamobile.com/](https://solanamobile.com/)

Hardware móvil nativo de Solana construido por Solana Mobile. Los dispositivos Saga y Seeker incluyen un elemento seguro para gestión de llaves, una dApp Store nativa (evitando restricciones de las app stores de Apple/Google sobre apps de crypto) e integración profunda a nivel de sistema operativo con Solana. La dApp Store significa que tu app puede distribuirse sin la comisión del 30% de las app stores y sin las restricciones que las app stores tradicionales imponen a funcionalidades crypto.

Incluso si no estás apuntando específicamente a Saga/Seeker, entender la dApp Store es valioso — representa un canal de distribución para apps móviles de Solana que no existe en otras cadenas. Las apps enviadas a la dApp Store pueden usar funcionalidades crypto nativas (token gating, recompensas en NFTs, pagos directos con tokens) sin las limitaciones impuestas por Apple y Google.
