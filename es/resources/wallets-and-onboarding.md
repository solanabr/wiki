# Wallets y Onboarding

La wallet es lo primero que toca cada usuario de tu dApp, y es donde la mayoría de las apps de consumo pierden a la gente. Hoy hay dos rutas de integración en Solana: la ruta del wallet adapter para usuarios cripto-nativos que ya tienen Phantom, Solflare o Backpack, y los SDKs de embedded wallets que crean una wallet detrás de un login con email, social o passkey para usuarios que nunca han tocado cripto. Las apps de consumo son una categoría permanente en los hackathons de Colosseum, y en Brasil — donde la mayoría de tus usuarios potenciales no tiene una extensión de navegador instalada — hacer bien el onboarding es a menudo la diferencia entre una demo y un producto. Esta página cubre ambos stacks y cuándo usar cada uno.

---

## Wallets de Navegador y Móviles

Estas son las wallets que tus usuarios cripto-nativos realmente tienen, y contra las que deberías probar primero.

### Phantom

[https://phantom.com/](https://phantom.com/)

La wallet más conocida del ecosistema Solana, disponible como extensión de navegador y app móvil. Phantom ha pasado de ser una wallet pura a una app de finanzas de consumo — trading spot, perpetuos y mercados de predicción vienen integrados — mientras se mantiene self-custodial. Para desarrolladores, Phantom es el objetivo por defecto: si el flujo de conexión de tu dApp no funciona con Phantom, efectivamente no funciona.

### Solflare

[https://solflare.com/](https://solflare.com/)

Una wallet enfocada en Solana disponible como extensión, app móvil y wallet web. El set de funcionalidades de Solflare es profundo específicamente en Solana — staking nativo, una galería de NFTs, soporte de hardware wallets (incluyendo su propio dispositivo Shield) y una tarjeta de débito USDC. Su enfoque Solana-first la convierte en un buen segundo objetivo de pruebas, ya que a menudo revela problemas de integración que los flujos más generales de Phantom no muestran.

### Backpack

[https://backpack.app/](https://backpack.app/)

Una wallet y un exchange en una sola app, cubriendo Solana, Ethereum y Bitcoin en iOS, Android, una extensión de Chrome y el backpack.exchange basado en web. Backpack combina una wallet self-custodial con trading spot, futuros y préstamos. Es popular entre traders activos, así que si tu dApp apunta a esa audiencia, inclúyela en tu matriz de pruebas.

---

## Estándares de Integración

### Wallet Standard

[https://github.com/wallet-standard/wallet-standard](https://github.com/wallet-standard/wallet-standard)

Un conjunto de interfaces agnóstico a la chain que las wallets usan para registrarse en el navegador, permitiendo que las aplicaciones descubran y se conecten a cualquier wallet instalada sin hardcodear adapters por wallet. Las wallets de Solana lo implementan, y los frontends modernos basados en `@solana/kit` construyen directamente sobre él — `@wallet-standard/react` proporciona los hooks `useWallets` y `useConnect`, en conjunto con `@solana/react` para la firma de transacciones. Si estás empezando un frontend nuevo basado en kit, esta es la capa de integración que hay que aprender.

### Solana Wallet Adapter

[https://github.com/anza-xyz/wallet-adapter](https://github.com/anza-xyz/wallet-adapter)

La biblioteca mantenida por Anza de adapters de wallet modulares en TypeScript y componentes React — el stack de botón de conexión probado en batalla que usa la mayoría de las dApps existentes de Solana, particularmente las que están en web3.js 1.x y Anchor. Proporciona providers, hooks (`useWallet`, `useConnection`) y una UI de modal prearmada. La guía "Connect a Wallet in React" enlazada desde [Primeros Pasos](getting-started.md) recorre este patrón paso a paso.

---

## Embedded Wallets

Los SDKs de embedded wallets crean una wallet self-custodial para el usuario al registrarse — detrás de un login con email, SMS, social o passkey — sin instalar extensiones y sin la ceremonia de la seed phrase. El framework de decisión: usa la **ruta adapter/Wallet Standard** cuando tu audiencia ya tiene wallets (DeFi, herramientas de trading); usa **embedded wallets** cuando tu audiencia es mainstream (apps de consumo, juegos, pagos); usa el **patrón híbrido** — detección de wallet con un fallback embedded — cuando quieras servir a ambas, que es como sale al mercado la mayoría de las nuevas dApps de consumo.

### Privy

[https://docs.privy.io/](https://docs.privy.io/)

Embedded wallets self-custodial detrás de un login con email, SMS, social o passkey, con claves aseguradas en trusted execution environments (TEEs). El soporte de Solana es de primera clase: HD wallets, creación automática de wallet al hacer login y flujos de firma completos, con la posibilidad de que los usuarios exporten sus claves a Phantom o Solflare en cualquier momento. Privy fue adquirida por Stripe en junio de 2025, lo que importa para el roadmap — espera una integración cada vez más estrecha entre embedded wallets y liquidación fiat/stablecoin. Empieza con la [receta de inicio de Privy + Solana](https://docs.privy.io/recipes/solana/getting-started-with-privy-and-solana).

### Turnkey

[https://docs.turnkey.com/](https://docs.turnkey.com/)

Infraestructura de wallets donde las claves privadas viven en enclaves aislados por hardware y nunca se exponen — ni siquiera a Turnkey. El paquete `@turnkey/solana` proporciona un `TurnkeySigner` que se conecta al código cliente estándar de Solana, y la plataforma maneja la obtención del blockhash, la estimación de compute units y las priority fees, además de patrocinio de gas (abstracción de comisiones) y patrocinio de rent en mainnet y devnet. Turnkey es de más bajo nivel que Privy — elígelo cuando necesites infraestructura de firma con control de políticas de grano fino (reglas de transacciones, quórums, automatización) en lugar de un modal de auth listo para usar.

### Para

[https://docs.getpara.com/](https://docs.getpara.com/)

Embedded wallets passkey-first: los usuarios se registran con email, teléfono, login social o una passkey, y las claves privadas se dividen vía MPC entre el dispositivo del usuario y la infraestructura de Para — sin seed phrase, sin punto único de compromiso de claves. El soporte de Solana funciona tanto con web3.js como con Anchor, y el SDK se entrega como un modal React prearmado o como primitivas headless para UIs personalizadas. El modelo de passkeys basado en sesiones de Para es el que aparece en la guía de passkeys de Helius de abajo.

### Dynamic

[https://www.dynamic.xyz/docs/](https://www.dynamic.xyz/docs/)

Un stack de wallets completo que cubre ambos lados del patrón híbrido en un solo SDK: conexión de wallets externas (vía `SolanaWalletConnectors`) y embedded wallets MPC, con políticas, abstracción de gas y componentes de UI prearmados. Las embedded wallets de Solana usan MPC EdDSA (protocolo FROST), y los SDKs abarcan React, React Native, Flutter, Swift y más. Dynamic es una opción fuerte cuando quieres un solo proveedor para conectar-o-crear en lugar de coser wallet-adapter con un SDK embedded separado.

---

## Passkeys

### Helius: Guía de Passkeys en Solana

[https://www.helius.dev/blog/solana-passkeys](https://www.helius.dev/blog/solana-passkeys)

La guía de referencia para onboarding basado en passkeys en Solana. Las passkeys (construidas sobre WebAuthn y FIDO2) habilitan login biométrico sin seed phrase, pero hay una discrepancia de curvas: las passkeys producen firmas P-256 (secp256r1) mientras que las transacciones de Solana requieren Ed25519. La guía explica el workaround en producción hoy — las passkeys actúan como autenticación que desbloquea acceso con alcance de sesión a claves Ed25519 gestionadas por MPC (el modelo de Para) — y cubre el precompile nativo de secp256r1, habilitado en junio de 2025, que permite a los programas verificar firmas de passkeys directamente on-chain. Lee esto antes de diseñar cualquier UX passkey-first para que entiendas qué es lo que la passkey realmente firma.

---

## Páginas Relacionadas

- [Gaming y Móvil](gaming-and-mobile.md) — infraestructura de wallets específica para móvil: Mobile Wallet Adapter, Seed Vault y el dispositivo Seeker
- [Primeros Pasos](getting-started.md) — el walkthrough de "Connect a Wallet in React" y el resto de la ruta para principiantes
