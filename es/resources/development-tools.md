# Herramientas de Desarrollo

Las herramientas que usas a diario — CLIs, IDEs, proveedores de RPC y plataformas de integración. Esta página cubre las herramientas esenciales para construir, desplegar e integrar aplicaciones en Solana.

---

## Herramientas Principales

### Solana CLI

[https://solana.com/docs/intro/installation](https://solana.com/docs/intro/installation)

La interfaz de línea de comandos esencial para desarrollo en Solana. La usarás constantemente — gestionando keypairs, verificando balances, desplegando programas, configurando endpoints de clusters, solicitando SOL en devnet e inspeccionando transacciones. Es la base sobre la que todo lo demás se construye. El CLI también incluye `solana-test-validator` para ejecutar un cluster local, aunque para testing deberías preferir LiteSVM o Mollusk (ver [Testing y Debugging](testing-and-debugging.md)).

Comandos clave que usarás a diario: `solana config set`, `solana balance`, `solana program deploy`, `solana logs`, `solana airdrop`.

### Solana Playground

[https://beta.solpg.io/](https://beta.solpg.io/)

Un entorno de desarrollo completo en tu navegador. Solana Playground incluye un editor de código con resaltado de sintaxis para Rust, una wallet integrada (sin necesidad de Phantom), un compilador de Anchor, un desplegador de programas e incluso un ejecutor de tests. Puedes escribir, compilar, desplegar y testear programas Anchor completamente desde tu navegador sin instalar nada localmente.

Es particularmente útil para prototipado rápido, compartir ejemplos de código y enseñar. La wallet integrada significa que puedes desplegar en devnet inmediatamente. Sin embargo, para desarrollo en producción querrás una configuración local para mejor debugging, integración con control de versiones y soporte de herramientas de IA.

---

## Proveedores de RPC

Tu proveedor de RPC determina la calidad de tu conexión a la red de Solana — velocidad, confiabilidad, límites de tasa y APIs disponibles.

### Helius

[https://www.helius.dev/](https://www.helius.dev/)

El proveedor de RPC con más funcionalidades en el ecosistema Solana. Más allá del RPC estándar, Helius proporciona la API DAS (Digital Asset Standard) para consultar NFTs y compressed NFTs, webhooks para notificaciones de eventos en tiempo real, parsing mejorado de transacciones que decodifica instrucciones en formatos legibles, y estimación de priority fees para ayudar a que tus transacciones se procesen. Su servidor MCP expone más de 60 herramientas que los asistentes de IA pueden usar directamente. Tier gratuito disponible con límites generosos para desarrollo.

Helius es la recomendación predeterminada para la mayoría de proyectos porque las APIs adicionales (DAS, webhooks, priority fees) te ahorran construir esa infraestructura tú mismo.

### QuickNode

[https://www.quicknode.com/chains/solana](https://www.quicknode.com/chains/solana)

Infraestructura RPC de alto rendimiento con un marketplace de complementos. QuickNode ofrece conexiones de baja latencia en múltiples regiones, una API GraphQL para consultas de datos flexibles y complementos para cosas como metadata de tokens, datos de NFTs e historial de transacciones. Su infraestructura está probada en batalla a escala y es utilizada por muchas aplicaciones en producción.

Elige QuickNode cuando necesites distribución geográfica, funcionalidad de complementos específicos, o cuando quieras un proveedor alternativo para redundancia junto con Helius.

### Triton

[https://triton.one/](https://triton.one/)

Infraestructura RPC de alto rendimiento con enfoque en streaming gRPC a través de Yellowstone. Triton proporciona JSON-RPC estándar junto con Yellowstone gRPC, que te da actualizaciones de cuentas y transacciones en tiempo real con latencia significativamente menor que las suscripciones WebSocket. Su infraestructura soporta plugins Geyser para streaming de datos personalizado y es utilizada por varios protocolos importantes de Solana.

Elige Triton cuando necesites streaming de datos de baja latencia (gRPC), cuando estés construyendo indexadores o aplicaciones en tiempo real, o cuando quieras acceso a plugins Geyser para pipelines de datos personalizados.

### Ironforge

[https://www.ironforge.cloud/](https://www.ironforge.cloud/)

Infraestructura RPC con herramientas integradas de simulación de transacciones y debugging. Ironforge proporciona RPC estándar junto con funcionalidades enfocadas en desarrolladores como simulación mejorada de transacciones, perfilado de unidades de cómputo y herramientas de inspección de cuentas directamente en su dashboard. Útil para desarrolladores que quieren más visibilidad sobre lo que hacen sus transacciones durante el desarrollo.

### Shyft

[https://shyft.to/](https://shyft.to/)

Plataforma de APIs que proporciona abstracciones de mayor nivel sobre los datos de Solana. Más allá del RPC raw, Shyft ofrece APIs REST para datos de tokens, operaciones con NFTs, historial de transacciones y analíticas DeFi. Sus APIs devuelven datos estructurados sin requerir que parsees datos raw de cuentas o decodifiques logs de instrucciones tú mismo. Útil para desarrolladores frontend que necesitan datos de Solana sin la complejidad de integración RPC directa.

### Luzid

[https://luzid.app/](https://luzid.app/)

Un debugger visual y entorno de desarrollo local para programas Solana. Luzid proporciona una interfaz gráfica para inspeccionar cuentas, transacciones y estado de programas durante el desarrollo local, reemplazando el flujo de trabajo exclusivo por CLI de `solana-test-validator` con una interfaz visual. Incluye inspección de estado de cuentas, replay de transacciones, debugging estilo breakpoints y perfilado de CU con salida visual.

Usa Luzid cuando quieras una experiencia de desarrollo más visual que la que proporciona el CLI, o cuando estés debuggeando transacciones complejas multi-instrucción donde ver los cambios de estado visualmente es más efectivo que leer salida de logs.

---

## Infraestructura de Transacciones

### Jito Block Engine

[https://docs.jito.wtf/](https://docs.jito.wtf/)

Infraestructura MEV para Solana incluyendo envío de bundles, acceso al block engine y enrutamiento de propinas. El endpoint de bundles de Jito te permite enviar hasta 5 transacciones que se ejecutan atómicamente y secuencialmente dentro del mismo bloque — todas se completan o todas fallan. Esto es esencial para arbitraje, liquidaciones y cualquier operación donde la ejecución parcial es peligrosa. Métodos clave de la API: `sendBundle`, `getBundleStatuses`, `getTipAccounts`. La propina mínima es de 1,000 lamports. Clientes disponibles para TypeScript, Python, Rust y Go.

Para desarrolladores de aplicaciones, Jito importa principalmente por el aterrizaje de transacciones — usar propinas de Jito junto con priority fees le da a tus transacciones la mejor oportunidad de inclusión durante periodos congestionados. El endpoint de envío de transacciones de baja latencia ([docs.jito.wtf/lowlatencytxnsend](https://docs.jito.wtf/lowlatencytxnsend/)) también soporta transacciones individuales con beneficios de SWQoS (Stake-Weighted Quality of Service).

### Helius LaserStream

[https://www.helius.dev/docs/laserstream](https://www.helius.dev/docs/laserstream)

Streaming de datos gestionado de alto rendimiento para Solana vía gRPC. LaserStream entrega bloques, transacciones, actualizaciones de cuentas y slots en tiempo real. Está construido sobre una interfaz compatible con Yellowstone pero agrega funcionalidades que el Yellowstone raw no puede proporcionar: replay histórico (hasta 24 horas de slots perdidos al reconectar), auto-reconexión con seguimiento de slots, failover multi-nodo en 9 regiones y throughput de 1.3 GB/s (vs ~30 MB/s para clientes JS Yellowstone estándar). Soporta hasta 250,000 direcciones por conexión.

SDKs disponibles en TypeScript, Rust y Go. La interfaz es compatible drop-in con código gRPC Yellowstone existente — solo cambian la URL del endpoint y el token de autenticación. Plan Professional ($999/mes) requerido para mainnet. GitHub: [helius-labs/laserstream-sdk](https://github.com/helius-labs/laserstream-sdk).

### Light Protocol

[https://docs.lightprotocol.com/](https://docs.lightprotocol.com/)

Infraestructura de compresión ZK para Solana. Light Protocol permite a las aplicaciones almacenar estado en forma comprimida usando pruebas de conocimiento cero, reduciendo dramáticamente los costos de almacenamiento on-chain. Una cuenta comprimida cuesta una fracción de una cuenta estándar manteniendo las mismas garantías de seguridad a través de pruebas Merkle.

Usa Light Protocol cuando tu aplicación cree muchas cuentas (perfiles de usuario, estado de juegos, datos sociales) y los costos de rent se vuelvan significativos. La contrapartida es complejidad adicional al leer estado comprimido e incluir pruebas Merkle en las transacciones.

---

## Actions y Blinks

Actions y Blinks son una innovación específica de Solana que convierte cualquier transacción en una URL compartible e incrustable.

### Especificación de Solana Actions

[https://solana.com/developers/guides/advanced/actions](https://solana.com/developers/guides/advanced/actions)

La especificación oficial para Solana Actions — APIs estandarizadas que devuelven transacciones firmables desde una URL. Cualquier aplicación, sitio web o plataforma de redes sociales puede incrustar un Action que permite a los usuarios ejecutar transacciones de Solana sin salir de su contexto actual. Por ejemplo, un tweet que contiene un Blink (blockchain link) puede incluir un botón "Comprar" o "Donar" que activa un popup de wallet directamente en el feed de Twitter.

Entender la especificación de Actions es importante porque representa un nuevo canal de distribución para aplicaciones de Solana. En lugar de requerir que los usuarios visiten tu dApp, llevas la transacción a donde ya están.

### Dialect Blinks

[https://docs.dialect.to/blinks](https://docs.dialect.to/blinks)

El SDK para crear, testear y desplegar Actions y Blinks. Dialect proporciona la capa de herramientas sobre la especificación de Actions — un registro para tus Actions, una interfaz de testing para previsualizar cómo se renderizan y SDKs cliente para renderizar Blinks en tu propia aplicación. Si estás construyendo un Action, el SDK de Dialect maneja los detalles de implementación como la construcción de transacciones, formato de metadata y renderizado del lado del cliente.

---

## Pagos

### Solana Pay

[https://docs.solanapay.com/](https://docs.solanapay.com/)

Un protocolo de pagos construido sobre Solana para comerciantes y aplicaciones. Solana Pay proporciona un SDK en JavaScript/TypeScript para crear solicitudes de pago, generar códigos QR y verificar la finalización de transacciones. Soporta tanto transferencias simples de SOL como pagos complejos con tokens SPL, con soporte integrado para flujos de punto de venta, integración con e-commerce y verificación de pagos.

El protocolo está diseñado para el comercio real — finalidad en menos de un segundo y comisiones casi nulas lo hacen práctico para pagos cotidianos. El SDK maneja las complejidades del seguimiento de referencias de pago, así que puedes verificar que un pago específico fue realizado sin escanear cada transacción on-chain.

---

## Infraestructura de Seguridad

### solana-security-txt

[https://github.com/neodyme-labs/solana-security-txt](https://github.com/neodyme-labs/solana-security-txt)

Una macro de Rust que incrusta información de contacto de seguridad estructurada en el binario de tu programa Solana, creando una sección ELF `.security.txt`. Esto permite a los investigadores de seguridad encontrar información de contacto directamente desde una dirección de programa on-chain — esencial para la divulgación responsable. Soporta Telegram, Discord, email y otros tipos de contacto. La implementación es una sola llamada a macro. Creado por Neodyme, la firma de investigación de seguridad de Solana. Agrégalo a cada programa que despliegues en mainnet.

---

## CLI Avanzado y Gestión de Programas

### Autoridad de Actualización de Programas

[https://solana.com/docs/core/programs/program-deployment](https://solana.com/docs/core/programs/program-deployment)

Entender la autoridad de actualización de programas es crítico para despliegues en producción. Comandos clave:
- `solana program show <PROGRAM_ID>` — inspeccionar la autoridad de actualización y metadatos del programa
- `solana program set-upgrade-authority <PROGRAM_ID> --new-upgrade-authority <PUBKEY>` — transferir a un multisig (PDA de Squads)
- `solana program set-upgrade-authority <PROGRAM_ID> --final` — hacer el programa inmutable (irreversible)

Mejores prácticas de producción: transferir la autoridad de actualización a un multisig de Squads antes del lanzamiento en mainnet. Para despliegues completamente trustless, usa `--final` para hacer el programa inmutable.

### Transacciones Versionadas y Address Lookup Tables

[https://solana.com/docs/core/transactions/versioned-transactions](https://solana.com/docs/core/transactions/versioned-transactions)

Las transacciones legacy están limitadas a ~35 cuentas. Las Address Lookup Tables (ALTs) almacenan hasta 256 claves públicas en una cuenta on-chain, permitiendo que las transacciones las referencien con índices de 1 byte en lugar de claves de 32 bytes. Las transacciones V0 son necesarias para usar ALTs y son esenciales para interacciones DeFi complejas (swaps de Jupiter, rutas multi-pool, transacciones en bundle). Guía: [solana.com/developers/guides/advanced/lookup-tables](https://solana.com/developers/guides/advanced/lookup-tables).

### Durable Nonces

[https://docs.solanalabs.com/cli/examples/durable-nonce](https://docs.solanalabs.com/cli/examples/durable-nonce)

Las transacciones estándar de Solana expiran después de ~60 segundos si no se incluyen en un bloque. Los durable nonces reemplazan el blockhash reciente con un valor de nonce almacenado que no expira, habilitando flujos de firma offline, firma multi-parte en diferentes zonas horarias y envío programado de transacciones. Esencial para cualquier aplicación donde las transacciones no pueden firmarse y enviarse en la misma sesión.
