# Desarrollo DeFi

Construir finanzas descentralizadas en Solana significa integrarse con un ecosistema maduro de protocolos, oráculos y estándares. Esta página cubre los principales bloques de construcción DeFi — desde enrutamiento de swaps hasta préstamos e integración de oráculos — con suficiente detalle para ayudarte a elegir los protocolos correctos para tu proyecto.

---

## Estándares — Contribuciones de Superteam Brazil

Superteam Brazil está construyendo activamente estándares abiertos que hacen el DeFi de Solana más componible e interoperable.

### Solana Vault Standard (sRFC 40)

[https://github.com/solanabr/solana-vault-standard](https://github.com/solanabr/solana-vault-standard)

El equivalente de ERC-4626 para Solana — una interfaz de vault estandarizada que define cómo los vaults aceptan depósitos, procesan retiros y reportan valores de shares. El estándar incluye 8 variantes de vault que cubren vaults de préstamos, vaults de staking, agregadores de rendimiento y más. Cualquier wallet, agregador o protocolo que implemente el estándar puede interactuar con cualquier vault compatible sin código de integración personalizado.

Esto importa porque la componibilidad DeFi depende de interfaces estandarizadas. Sin un estándar de vault, cada protocolo implementa depósitos y retiros de forma diferente, obligando a los integradores a escribir código personalizado para cada uno. Con sRFC 40, una wallet puede mostrar oportunidades de rendimiento de cualquier vault compatible a través de una sola integración. Mantenido por @kauenet, @thomgabriel, @vcnzo_ct y otros.

### Solana Stablecoin Standard

[https://github.com/solanabr/solana-stablecoin-standard](https://github.com/solanabr/solana-stablecoin-standard)

Especificaciones SSS-1 y SSS-2 para emisión estandarizada de stablecoins en Solana. SSS-1 cubre operaciones básicas de mint/burn con control de acceso basado en roles. SSS-2 agrega funcionalidades avanzadas — hooks de cumplimiento, listas negras, oráculos actualizables y gestión de reservas. Ambas especificaciones son nativas de Token-2022, aprovechando transfer hooks para la aplicación de cumplimiento y confidential transfers para privacidad.

Este estándar aborda una brecha real en el ecosistema. A medida que más stablecoins se lanzan en Solana (especialmente para mercados latinoamericanos), tener una especificación común significa que wallets, exchanges y protocolos DeFi pueden soportar nuevas stablecoins sin integraciones personalizadas. Mantenido por @lvj_luiz y @kauenet.

---

## DEX y Enrutamiento de Swaps

### Jupiter

[https://dev.jup.ag/docs/get-started](https://dev.jup.ag/docs/get-started)

El agregador DEX líder en Solana y el punto de entrada predeterminado para swaps. Jupiter enruta operaciones a través de todos los DEXs principales de Solana para encontrar el mejor precio, dividiendo órdenes entre múltiples pools cuando es necesario. Más allá de swaps básicos, Jupiter proporciona órdenes límite, dollar-cost averaging (DCA) y trading perpetuo.

Para desarrolladores, la API y SDK de Jupiter son la forma más fácil de agregar funcionalidad de swap a tu aplicación. En lugar de integrar protocolos DEX individuales, integras Jupiter una vez y obtienes acceso a todos ellos. El portal de desarrolladores en `dev.jup.ag` es el hub canónico, reemplazando la documentación anterior de `station.jup.ag`. La Swap API maneja rutas complejas incluyendo swaps multi-hop, y la nueva Ultra API proporciona flujos de swap simplificados. Una versión auto-alojada de la swap API está disponible para casos de uso críticos en latencia como liquidaciones. SDK: `@jup-ag/api` en npm. GitHub: [jup-ag/jupiter-swap-api-client](https://github.com/jup-ag/jupiter-swap-api-client).

### Raydium

[https://docs.raydium.io/](https://docs.raydium.io/)

Un AMM (Automated Market Maker) con pools de liquidez concentrada. Raydium tiene liquidez profunda para pares de SOL y frecuentemente es el primer lugar donde se lanzan nuevos tokens. Su implementación de liquidez concentrada (CLMM) permite a los proveedores de liquidez enfocar capital en rangos de precios específicos para mayor eficiencia.

Para desarrolladores que construyen infraestructura de liquidez, el SDK de Raydium proporciona herramientas para creación de pools, gestión de posiciones y ejecución de swaps. Si estás lanzando un nuevo token, Raydium probablemente sea donde crearás el pool de liquidez inicial.

### Orca / Whirlpools

[https://docs.orca.so/](https://docs.orca.so/)

Pools de liquidez concentrada con un SDK limpio y bien diseñado. La implementación de Whirlpools de Orca es conocida por su experiencia de desarrollo — el SDK está bien tipado, bien documentado y es sencillo de integrar. Orca se enfoca específicamente en liquidez concentrada, haciendo una cosa bien.

Elige Orca cuando necesites interacción directa con pools (no enrutamiento agregado), cuando quieras el SDK más limpio para gestión de posiciones de liquidez concentrada, o cuando estés construyendo un protocolo que necesite crear o gestionar posiciones LP de forma programática.

### Meteora

[https://docs.meteora.ag/](https://docs.meteora.ag/)

Liquidez dinámica con el modelo DLMM (Dynamic Liquidity Market Maker). La innovación de Meteora está en cómo maneja los bins de liquidez — el precio se divide en bins discretos y los swaps dentro de un bin tienen cero slippage. Su modelo de comisiones se ajusta dinámicamente basado en la volatilidad del mercado, lo que significa que los LPs ganan más durante periodos volátiles.

Para desarrolladores, Meteora es interesante si estás construyendo sobre mecánicas AMM novedosas o necesitas las propiedades específicas de liquidez basada en bins. Su DLMM también impulsa muchos lanzamientos de tokens a través de su funcionalidad de launch pool.

---

## Préstamos

### Drift

[https://docs.drift.trade/](https://docs.drift.trade/)

Una plataforma de trading completa que ofrece futuros perpetuos, trading spot, préstamos y endeudamiento en un solo protocolo. La arquitectura de Drift usa una red de keepers para matching de órdenes y liquidaciones. Su SDK permite acceso programático a todas las funcionalidades — abrir posiciones en perps, gestionar margen, ganar rendimiento de préstamos y construir bots de trading.

Usa Drift cuando necesites más que préstamos básicos — la combinación de perps, spot y préstamos en un protocolo lo hace útil para construir aplicaciones DeFi complejas que necesitan múltiples primitivas.

### Marginfi

[https://docs.marginfi.com/](https://docs.marginfi.com/)

Un protocolo de préstamos y endeudamiento enfocado en eficiencia de capital y gestión de riesgos. Marginfi soporta múltiples tipos de colateral y proporciona un SDK sencillo para depositar colateral, pedir prestado activos y gestionar posiciones. Su motor de riesgo aísla diferentes clases de activos para prevenir contagio.

Integra Marginfi cuando tu aplicación necesite funcionalidad de préstamos/endeudamiento. Las cuentas de su programa siguen un patrón consistente que hace la integración por CPI relativamente directa.

### Kamino

[https://docs.kamino.finance/](https://docs.kamino.finance/)

Estrategias automatizadas de liquidez y préstamos. Kamino comenzó como una herramienta de gestión automatizada de liquidez (auto-rebalanceo de posiciones LP en Orca y Raydium) y se expandió a préstamos. Su producto de préstamos está integrado con sus vaults de liquidez, lo que significa que los tokens LP pueden usarse como colateral.

Kamino es útil cuando estés construyendo aplicaciones que necesiten optimización de rendimiento o gestión automatizada de posiciones. Sus estrategias de vault abstraen la complejidad de la gestión activa de liquidez.

---

## Oráculos

Los oráculos proporcionan datos off-chain (precios, aleatoriedad, feeds personalizados) a programas on-chain. Elegir el oráculo correcto e integrarlo adecuadamente es crítico para la seguridad DeFi.

### Pyth Network

[https://docs.pyth.network/](https://docs.pyth.network/)

Feeds de precios de alta frecuencia y baja latencia usados por la mayoría de los protocolos DeFi de Solana. Pyth usa un modelo pull — los datos de precios se publican en una fuente off-chain y tu programa obtiene el precio más reciente cuando lo necesita. Esto te da actualizaciones de precios por debajo del segundo sin pagar por escrituras on-chain en cada tick de precio.

Pyth debería ser tu oráculo predeterminado para cualquier aplicación DeFi que necesite datos de precios. La integración requiere publicar la actualización de precio en una cuenta antes de que tu instrucción la lea, lo que significa que tu frontend debe obtener e incluir la actualización de precio en la transacción. Su SDK maneja esto, pero ten en cuenta el patrón. Siempre valida la antigüedad del precio y los intervalos de confianza en tu programa.

### Switchboard

[https://docs.switchboard.xyz/](https://docs.switchboard.xyz/)

Una red de oráculos sin permisos donde cualquiera puede crear feeds de datos personalizados. Mientras Pyth se enfoca en precios de activos principales, Switchboard te permite traer datos off-chain arbitrarios on-chain — APIs personalizadas, aleatoriedad, resultados deportivos, datos climáticos o cualquier endpoint HTTP.

Usa Switchboard cuando necesites datos que Pyth no proporciona, cuando quieras aleatoriedad verificable (VRF) para aplicaciones de gaming o lotería, o cuando necesites feeds de datos personalizados que agreguen múltiples fuentes.

---

## Liquid Staking

### Sanctum

[https://docs.sanctum.so/](https://docs.sanctum.so/)

Infraestructura de liquid staking que impulsa la creación, trading y unstaking instantáneo de LSTs (Liquid Staking Tokens) en Solana. El valor único de Sanctum es el enrutador de LSTs — permite intercambios instantáneos entre cualquier LST y SOL con slippage mínimo, resolviendo el problema de fragmentación de liquidez que afecta al liquid staking en todas las cadenas.

Para desarrolladores, Sanctum es relevante si estás construyendo productos de staking, DeFi basado en LSTs o cualquier aplicación que necesite trabajar con múltiples tipos de LST. Su pool Infinity acepta cualquier LST como entrada, haciendo la integración simple.

### Jito

[https://docs.jito.network/](https://docs.jito.network/)

Liquid staking impulsado por MEV. JitoSOL gana rendimiento estándar de staking más recompensas MEV adicionales del block engine de Jito, convirtiéndolo en uno de los LSTs de mayor rendimiento en Solana. La infraestructura de Jito también incluye distribución de propinas para validadores y un block engine que los searchers usan para extracción de MEV.

Para desarrolladores, la relevancia de Jito va más allá del staking. Si estás construyendo aplicaciones conscientes de MEV, necesitas entender el panorama de MEV de Solana o quieres integrar JitoSOL como colateral, la documentación de Jito cubre toda la pila desde cuentas de propinas hasta restaking.

---

## Bridging y Cross-Chain

### Wormhole

[https://docs.wormhole.com/](https://docs.wormhole.com/)

Un protocolo de mensajería cross-chain que permite transferencias de activos y paso de mensajes arbitrarios entre Solana y más de 30 cadenas. Wormhole usa una red de guardianes para verificar mensajes cross-chain, y su integración con Solana soporta bridging de SOL, tokens SPL y NFTs a cadenas EVM, Cosmos y más.

Para desarrolladores, el SDK de Wormhole te permite construir aplicaciones que interactúan con activos o datos en múltiples cadenas. Los casos de uso incluyen bridges de tokens cross-chain, gobernanza multi-chain y aplicaciones que necesitan verificar eventos de otras cadenas en Solana.

### deBridge

[https://docs.debridge.finance/](https://docs.debridge.finance/)

Un bridge cross-chain de alto rendimiento con soporte para Solana. deBridge se enfoca en transferencias cross-chain rápidas y eficientes en capital con precios competitivos. Su SDK proporciona funcionalidad de swap y bridge que puede integrarse en dApps para usuarios que necesitan mover activos entre Solana y otras cadenas.

---

## Agregación DeFi y Analytics

### Birdeye

[https://docs.birdeye.so/](https://docs.birdeye.so/)

API de analíticas y datos de tokens para Solana. Birdeye proporciona feeds de precios en tiempo real, scores de seguridad de tokens, datos de portafolio de wallets, gráficos OHLCV y analíticas de pares de trading vía API. Sus datos cubren tokens en todos los principales DEXs de Solana. Útil para construir interfaces de trading, rastreadores de portafolio o cualquier aplicación que necesite datos completos de mercado de tokens.

### DeFiLlama

[https://defillama.com/docs/api](https://defillama.com/docs/api)

Plataforma de analíticas DeFi open-source con datos completos de protocolos de Solana. DeFiLlama rastrea TVL, rendimientos, precios de tokens y métricas de protocolos en todos los protocolos DeFi de Solana. Su API es gratuita y proporciona datos históricos útiles para investigación, dashboards de analíticas y herramientas de comparación de rendimiento.

---

## Libros de Órdenes On-Chain

### Phoenix DEX

[https://github.com/Ellipsis-Labs/phoenix-v1](https://github.com/Ellipsis-Labs/phoenix-v1)

Un libro de órdenes con límite central (CLOB) completamente on-chain construido por Ellipsis Labs. La innovación clave de Phoenix es su diseño sin crank — las operaciones se liquidan atómicamente dentro de la instrucción sin requerir una transacción de crank separada, eliminando la dependencia de keepers que afectaba a Serum. El programa es open source bajo Apache-2.0.

Para desarrolladores, Phoenix proporciona un SDK limpio ([phoenix-sdk](https://github.com/Ellipsis-Labs/phoenix-sdk)) y CLI ([phoenix-cli](https://github.com/Ellipsis-Labs/phoenix-cli)) para creación de mercados, colocación/cancelación de órdenes límite, consultas del libro de órdenes y liquidación de operaciones. Estudia el codebase para normalización de tick-size/lot-size, lógica de matching de órdenes y el patrón de cuenta "trader state".

### OpenBook v2

[https://github.com/openbook-dex/openbook-v2](https://github.com/openbook-dex/openbook-v2)

Una reescritura completa del libro de órdenes comunitario (no un fork de Serum), basada en el codebase de Mango v4. El monorepo contiene tanto el programa Solana como el cliente TypeScript (`@openbook-dex/openbook-v2`). Desarrollado como la respuesta descentralizada de la comunidad al colapso de Serum/FTX. Nota: algunos componentes están bajo licencia GPL detrás del feature flag `enable-gpl`.

---

## Infraestructura de Trading de NFTs

### Tensor Trade

[https://dev.tensor.trade/](https://dev.tensor.trade/)

Acceso programático a la infraestructura líder de trading de NFTs en Solana. Tensor hizo open source sus cinco programas on-chain en Breakpoint 2024: marketplace (listados, órdenes límite, royalties), AMM (pools de curva de bonding), escrow (gestión de ofertas), fees (distribución del protocolo) y whitelist (verificación de colecciones). Todos los programas son permissionless — cualquier frontend puede acceder a la liquidez on-chain de Tensor, y los integradores ganan el 50% de las comisiones generadas.

El enfoque por SDK es preferible a la API REST porque no requiere API key y no tiene límites de tasa. SDKs disponibles en TypeScript y Rust a través de la organización de GitHub [tensor-foundation](https://github.com/tensor-foundation). Cubre listado de NFTs, ofertas, compras, ofertas por colección y operaciones con NFTs comprimidos.

---

## Automatización y Programación

### TukTuk

[https://www.tuktuk.fun/docs](https://www.tuktuk.fun/docs)

Motor de automatización on-chain permissionless construido por Noah Prince (Head of Protocol Engineering en Helium) — el sucesor directo de Clockwork, que cerró en 2023. TukTuk usa PDAs y bitmaps para programación de tareas: creas una cola de tareas, la fondeas con SOL, y cualquier operador de crank permissionless puede ejecutar tus tareas por un pago por crank. Soporta horarios basados en tiempo, triggers por eventos on-chain y tareas recursivas tipo cron.

SDKs en TypeScript y Rust. GitHub: [helium/tuktuk](https://github.com/helium/tuktuk). Esencial para cualquier protocolo que requiera ejecución programada — liquidaciones, desbloqueos de vesting, actualizaciones de TWAP, transiciones de estado de juegos o cosecha automatizada de rendimiento.

---

## Estimación de Priority Fees

Entender y configurar los priority fees correctamente es crítico para el aterrizaje de transacciones en Solana. Desde SIMD-0096, el 100% de los priority fees van al validador productor de bloques (anteriormente el 50% se quemaba), creando un incentivo más fuerte para que los validadores incluyan transacciones con fees altos.

### API de Priority Fees de Helius

[https://www.helius.dev/docs/priority-fee-api](https://www.helius.dev/docs/priority-fee-api)

El servicio recomendado de estimación de priority fees. Devuelve 6 niveles de prioridad (Min, Low, Medium, High, VeryHigh, UnsafeMax) basados en datos recientes de fees para tus account keys específicas. Más preciso que el método RPC nativo porque considera las cuentas específicas que tu transacción toca, no solo promedios globales.

### Guía de Priority Fees de Solana

[https://solana.com/developers/guides/advanced/how-to-use-priority-fees](https://solana.com/developers/guides/advanced/how-to-use-priority-fees)

La guía oficial que cubre el Compute Budget Program, cómo configurar priority fees vía `ComputeBudgetProgram.setComputeUnitPrice()`, y cómo estimar la cantidad correcta usando `getRecentPrioritizationFees`. También cubre la configuración de límites de unidades de cómputo basados en resultados de simulación — siempre establece un límite ajustado (uso real + 10-20% de buffer) para evitar pagar de más.
