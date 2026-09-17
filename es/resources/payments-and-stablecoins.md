# Pagos y Stablecoins

Los pagos con stablecoins son posiblemente el vertical de Solana más fuerte para Brasil. El país funciona con pagos instantáneos — Pix convirtió las transferencias en tiempo real en el estándar — y la finalidad de menos de un segundo de Solana con comisiones casi nulas es lo más cercano que tiene cripto a esa experiencia. Los datos de mercado lo respaldan: una investigación publicada por Dune con Visa en abril de 2026 encontró que los remitentes únicos de stablecoins no denominadas en USD en Solana casi se triplicaron año contra año, con EURC y BRZ a la cabeza ([The Defiant](https://thedefiant.io/news/blockchains/solana-non-usd-stablecoin-senders-tripled-eurc-brz-mygmay)). Los builders brasileños ya se han probado aquí — MCPay (ahora Frames) obtuvo el 1er lugar en el track de Stablecoins del Cypherpunk Hackathon. Esta página cubre los rails, las rampas y la regulación que necesitas entender antes de construir.

---

## Rails de Stablecoins en Solana

### USDC y Circle CCTP

[https://developers.circle.com/cctp](https://developers.circle.com/cctp)

USDC es el rail de dólar por defecto en Solana, y el Cross-Chain Transfer Protocol (CCTP) de Circle es la forma de moverlo entre chains sin riesgo de bridge. CCTP es una utilidad permissionless de burn-and-mint: el USDC se quema en la chain de origen y se emite nativamente en la de destino, así que no hay activos wrapped ni pools de liquidez que drenar. USDT también circula ampliamente en Solana y sigue siendo el rail más profundo en muchos corredores de mercados emergentes.

Para desarrolladores que construyen flujos de pagos o tesorería que tocan múltiples chains, CCTP debería ser tu primera parada — convierte la liquidación cross-chain en una primitiva de protocolo en lugar de una decisión de confianza sobre un bridge de terceros.

### EURC

[https://www.circle.com/eurc](https://www.circle.com/eurc)

La stablecoin respaldada en euros de Circle, emitida nativamente en Solana como token SPL, compatible con MiCA y canjeable 1:1 por euros. EURC fue una de las dos stablecoins (junto con BRZ) que impulsaron el crecimiento de remitentes no-USD de Solana en la investigación de Dune/Visa de arriba.

Para los builders brasileños, EURC importa por el corredor Brasil-Europa — remesas, pagos a freelancers y liquidación de importación/exportación donde ambas puntas de la operación quieren evitar el dólar como moneda intermediaria.

### BRZ (Transfero)

[https://transfero.com/brz-stablecoin](https://transfero.com/brz-stablecoin)

La stablecoin del real brasileño, emitida por Transfero. Cada BRZ está respaldado 1:1 con BRL, con redención a través de socios regulados, y está en vivo en Solana junto a otras chains principales. BRZ es convertible desde y hacia dinero bancario vía Pix a través del on/off-ramp de Transfero, lo que lo convierte en el bloque de construcción práctico para flujos de pago denominados en BRL en Solana.

BRZ fue el otro líder (con EURC) del crecimiento de stablecoins no-USD de Solana. Si tu producto cotiza cualquier cosa en reales — nómina, facturas, checkout de comercios, pagos de remesas — BRZ es el activo que permite que la liquidación se quede on-chain hasta el tramo final por Pix.

### La Plataforma de Tokenización de B3 y su Stablecoin de BRL

[https://www.coindesk.com/business/2025/12/17/brazilian-stock-exchange-b3-to-launch-its-own-tokenization-platform-and-stablecoin](https://www.coindesk.com/business/2025/12/17/brazilian-stock-exchange-b3-to-launch-its-own-tokenization-platform-and-stablecoin)

En diciembre de 2025, B3 — la bolsa de valores de Brasil — anunció planes para su propia plataforma de tokenización más una stablecoin que se espera esté anclada al real, sirviendo como el tramo de pago y clearing de su entorno tokenizado, con lanzamiento previsto para 2026. B3 no ha nombrado una blockchain subyacente, así que no asumas que nada de esto llega a Solana.

La señal importa sin importar la chain: cuando la bolsa de valores nacional construye liquidación on-chain denominada en BRL, los pagos en real tokenizado dejan de ser un nicho cripto y se convierten en infraestructura de mercado. Consulta [RWA y Tokenización](rwa-and-tokenization.md) para el lado de tokenización de este anuncio.

---

## Aceptar Pagos

### Solana Pay

[https://docs.solanapay.com/](https://docs.solanapay.com/)

El protocolo de pagos para comercios y aplicaciones en Solana — solicitudes de pago, códigos QR y verificación de pagos on-chain, con soporte para pagos en SOL y tokens SPL con flujos de punto de venta y e-commerce. El diseño de seguimiento por referencia significa que puedes confirmar que un pago específico ocurrió sin escanear cada transacción.

Solana Pay se cubre con más profundidad en [Herramientas de Desarrollo](development-tools.md); la versión corta para esta página es que se combina naturalmente con las stablecoins de arriba — un checkout que solicita USDC o BRZ vía Solana Pay es el stack canónico de "comercio con stablecoins" en Solana.

---

## Rampas Pix y Liquidación Transfronteriza

Todo producto serio de stablecoins en Brasil vive o muere por su rampa Pix — el on/off-ramp entre stablecoins y dinero bancario en BRL. La rampa de BRZ de Transfero (arriba) es la ruta más directa; los exchanges con licencia y las instituciones de pago ofrecen alternativas para USDC y USDT.

Una advertencia estructural antes de arquitectar un producto transfronterizo: a partir de la Resolución 561 (abajo), los proveedores de eFX regulados — las fintechs que impulsan la mayoría de los pagos internacionales minoristas en Brasil — tienen prohibido liquidar esos flujos en stablecoins o cripto desde el 1 de octubre de 2026. Los VASPs con licencia todavía pueden usar stablecoins para pagos internacionales bajo el marco de la Resolución 521. En la práctica, la licencia que tenga tu socio de liquidación determina ahora si tu flujo de stablecoins es legal, así que verifícalo antes de integrar cualquier rampa.

---

## Regulación: El Marco del BCB (a agosto de 2026)

### Resoluciones 519, 520 y 521 del BCB

[https://notabene.id/post/brazils-central-bank-regulates-virtual-asset-service-providers-what-bcb-resolutions-mean-for-crypto-compliance](https://notabene.id/post/brazils-central-bank-regulates-virtual-asset-service-providers-what-bcb-resolutions-mean-for-crypto-compliance)

El banco central de Brasil reguló el sector a través de tres resoluciones publicadas en noviembre de 2025, en vigor desde el 2 de febrero de 2026. La Resolución 519 define el proceso de autorización para las SPSAVs (la categoría de VASP de Brasil). La Resolución 520 establece las reglas operativas y prudenciales — incluyendo que las stablecoins referenciadas a fiat deben estar totalmente respaldadas 1:1 por fiat o títulos públicos, lo que efectivamente excluye a las stablecoins algorítmicas. La Resolución 521 trata las transacciones con stablecoins como operaciones de cambio bajo el régimen cambiario de Brasil.

El plazo vigente para builders: el período de transición para que los proveedores existentes obtengan la autorización del BCB termina el **30 de octubre de 2026**. Si operas o dependes de una rampa, exchange o custodio brasileño, esa entidad necesita la autorización para entonces. [La página de Plasma sobre la regulación de stablecoins en Brasil](https://www.plasma.org/learn/tools/stablecoin-regulation-map/brazil) es un resumen mantenido del marco, incluyendo las reglas de reservas.

### Resolución 561 del BCB — la Prohibición de Stablecoins en eFX

[https://www.coindesk.com/policy/2026/05/02/brazil-s-central-bank-bans-stablecoin-and-crypto-settlement-in-cross-border-payments](https://www.coindesk.com/policy/2026/05/02/brazil-s-central-bank-bans-stablecoin-and-crypto-settlement-in-cross-border-payments)

Publicada el 30 de abril de 2026 y vigente desde el 1 de octubre de 2026, la Resolución 561 prohíbe a los proveedores de eFX — el canal regulado de Brasil para pagos internacionales digitales — liquidar esos pagos en stablecoins u otras cripto. La liquidación debe correr, en cambio, a través de transacciones de cambio tradicionales o cuentas en BRL de no residentes. Los VASPs con licencia todavía pueden usar stablecoins para pagos internacionales bajo el marco de la Resolución 521; la prohibición apunta específicamente al rail de liquidación de eFX, no al trading ni a la custodia de cripto.

Este es el hecho regulatorio más importante para cualquiera que construya pagos transfronterizos en Brasil ahora mismo: la misma transferencia de stablecoins puede ser legal o ilegal dependiendo de si fluye a través de un VASP o de un proveedor de eFX.

---

## Superteam Brazil en Pagos con Stablecoins

### Solana Stablecoin Standard (SSS-1 / SSS-2)

[https://github.com/solanabr/solana-stablecoin-standard](https://github.com/solanabr/solana-stablecoin-standard)

La especificación orientada a builders para emitir stablecoins en Solana, de Superteam Brazil. SSS-1 cubre la interfaz básica de mint/burn/pause con control de acceso basado en roles; SSS-2 agrega las funcionalidades que la regulación brasileña ahora efectivamente exige — hooks de cumplimiento, gestión de listas negras, oráculos actualizables y transparencia de reservas — construidas nativamente sobre Token-2022. Si vas a emitir una stablecoin que debe sobrevivir al marco del BCB de arriba, empieza aquí. Mantenido por @lvj_luiz y @kauenet. El repositorio fue archivado en junio de 2026 y es de solo lectura; las especificaciones siguen disponibles como referencia.

El desglose completo vive en [Estándares de Tokens](token-standards.md) y [Desarrollo DeFi](defi-development.md).

### MCPay (ahora Frames)

MCPay, que desde entonces se renombró a Frames, ganó el 1er lugar en el track de Stablecoins del Cypherpunk Hackathon con infraestructura de pagos para stablecoins en Solana — un primer lugar a nivel de track contra equipos internacionales, y prueba de que los builders brasileños pueden ganar este vertical globalmente. Consulta el [reporte de transparencia del Q4 2025](../transparency/q4-2025.md) para los resultados completos.

---

## Páginas Relacionadas

* [Herramientas de Desarrollo](development-tools.md) — Solana Pay y el tooling de pagos más amplio
* [Estándares de Tokens](token-standards.md) — extensiones de Token-2022 (transfer hooks, confidential transfers) y el Solana Stablecoin Standard
* [RWA y Tokenización](rwa-and-tokenization.md) — la plataforma de tokenización de B3 y los activos tokenizados en Solana
* [Desarrollo DeFi](defi-development.md) — enrutamiento de swaps y liquidez para pares de stablecoins
