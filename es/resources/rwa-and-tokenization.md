# RWA y Tokenización

Los activos del mundo real tokenizados se convirtieron en un vertical top-3 de Solana en 2026. Según datos de rwa.xyz, el valor de RWA tokenizados en Solana aproximadamente se cuadruplicó en la primera mitad de 2026 hasta un récord de $3.62B (desde ~$873M en enero), convirtiéndola en la tercera chain de RWA más grande con aproximadamente un 10.4% de participación ([The Crypto Basic](https://thecryptobasic.com/2026/07/10/solana-tokenized-rwa-market-soars-4x-hits-record-3-62b-in-h1-2026/)). Ethereum todavía lidera el valor total de RWA — el dominio claro de Solana está específicamente en las **acciones** tokenizadas, donde procesa aproximadamente el 95% de todo el volumen on-chain de acciones tokenizadas ([Crypto Briefing](https://cryptobriefing.com/solana-tokenized-stocks-analytics-dashboard/)), con $5.77B en volumen spot solo en el Q2 2026 ([Genfinity](https://genfinity.io/2026/07/06/tokenized-stocks-on-solana-explode-past-5-77b-q2-2026/)). Para los builders brasileños el timing es notable: B3 está construyendo su propia plataforma de tokenización, y un proyecto brasileño de RWA ya obtuvo reconocimiento en Cypherpunk. Esta página mapea los emisores, la infraestructura y la oportunidad local.

---

## Acciones Tokenizadas

### xStocks (Backed)

[https://xstocks.com/](https://xstocks.com/)

Acciones y ETFs de EE. UU. tokenizados emitidos a través del framework xStocks de Backed — tokens SPL respaldados 1:1 por las acciones subyacentes mantenidas en custodia regulada, canjeables por el valor equivalente en efectivo o el activo subyacente, y negociables 24/7. Raydium es el principal venue spot para xStocks (cruzó los $3B en volumen acumulado para junio de 2026), con distribución a través de Jupiter, Kraken y Bybit, e integraciones de wallets incluyendo Solflare, que listaba 134 xStocks al momento de su integración en junio de 2026.

Para desarrolladores, los xStocks son tokens SPL ordinarios: componen con la misma infraestructura de DEX, préstamos y wallets que cualquier otro activo de Solana. Esa composabilidad — exposición a acciones dentro de DeFi — es la razón por la que casi todo el volumen on-chain de acciones tokenizadas se liquida en Solana.

### Ondo Global Markets

[https://ondo.finance/](https://ondo.finance/)

La plataforma de acciones tokenizadas de Ondo, que lanzó con más de 200 acciones y ETFs de EE. UU. tokenizados y ha crecido más allá de 400 activos — el mayor emisor por valor en el dashboard de acciones de rwa.xyz. Los tokens de Ondo son libremente transferibles y están diseñados para ser usables en DeFi en lugar de quedar encerrados en un jardín amurallado.

Observa a Ondo si estás construyendo cualquier cosa que consuma acciones tokenizadas — productos de portafolio, rendimiento estructurado, préstamos colateralizados — porque la amplitud de su catálogo lo convierte en la fuente más probable de exposición long-tail a acciones on-chain.

---

## Treasuries y Fondos Tokenizados

### Ondo USDY

[https://ondo.finance/usdy](https://ondo.finance/usdy)

Un token de dólar con rendimiento respaldado por un portafolio de bonos del Tesoro de EE. UU. de corto plazo con prueba de reservas diaria, en vivo nativamente en Solana desde principios de 2024. USDY se sitúa entre una stablecoin y un fondo de money market: apunta a un valor estable en dólares mientras traslada el rendimiento de los Treasuries a los holders.

En Solana, USDY ya está integrado en DeFi — incluyendo Kamino y Raydium — lo que lo convierte en la opción práctica cuando tu protocolo quiere colateral en dólares que genera rendimiento mientras está quieto.

### Franklin Templeton BENJI (FOBXX)

[https://digitalassets.franklintempleton.com/benji/](https://digitalassets.franklintempleton.com/benji/)

El Franklin OnChain U.S. Government Money Fund — el primer fondo de money market registrado en EE. UU. asentado nativamente on-chain, donde cada token BENJI representa una participación de FOBXX. El fondo está en vivo en Solana desde febrero de 2025 (acceso institucional).

BENJI importa tanto como señal como producto: un gran gestor de activos tradicional llevando el registro de participaciones de un fondo registrado en Solana es la plantilla que seguirían los emisores brasileños regulados — incluyendo, potencialmente, los participantes de la plataforma de B3.

---

## Analítica

### Dashboard de Acciones de rwa.xyz

[https://app.rwa.xyz/stocks](https://app.rwa.xyz/stocks)

El tracker de analítica canónico para activos tokenizados, con un dashboard dedicado a acciones tokenizadas que cubre más de 3,700 acciones tokenizadas entre plataformas a agosto de 2026 — filtrable por plataforma, red, conteo de holders y volumen de transferencias, con tablas de posiciones que clasifican a los emisores. El sitio más amplio de rwa.xyz rastrea el panorama completo de RWA (treasuries, crédito, commodities) entre chains.

Úsalo antes de construir: los dashboards responden empíricamente "qué activos tienen volumen y holders reales", que es exactamente la pregunta que debería dar forma a lo que integras primero.

---

## Token-2022 para Emisores de RWA

Si estás emitiendo un token de RWA en lugar de integrar uno, Token-2022 es el toolkit que hace posible el cumplimiento on-chain sin un programa personalizado. Los transfer hooks te permiten aplicar listas blancas y checks de KYC en cada transferencia; los confidential transfers y confidential balances mantienen los montos privados donde la divulgación es un problema (nómina, posiciones institucionales); el permanent delegate soporta los poderes de congelamiento/clawback que los emisores regulados típicamente necesitan. Todo esto — más los hooks de cumplimiento SSS-2 del Solana Stablecoin Standard — se cubre en profundidad en [Estándares de Tokens](token-standards.md).

---

## El Ángulo Brasileño

### VitalFi (ahora Credit.Markets)

[https://vitalfi.lat/](https://vitalfi.lat/)

El caso de estudio local: VitalFi tokeniza cuentas por cobrar médicas brasileñas en Solana, permitiendo que depositantes de USDT financien proveedores de salud a través de vaults y ganen rendimiento de las cuentas por cobrar subyacentes. El proyecto obtuvo una Mención Honorífica en el track de RWA del Cypherpunk Hackathon y desde entonces se renombró a Credit.Markets. Consulta el [Hall de la Fama](../hackathon/hall-of-fame.md) y el [reporte de transparencia del Q4 2025](../transparency/q4-2025.md).

VitalFi apunta al nicho más abierto para los builders brasileños: cuentas por cobrar y crédito privado. Brasil tiene un mercado de cuentas por cobrar grande y legalmente maduro, y tokenizarlo requiere exactamente el conocimiento local — registros, estructuras fiduciarias, dinámicas de cobranza — del que carecen los emisores internacionales.

### La Plataforma de Tokenización de B3

[https://www.coindesk.com/business/2025/12/17/brazilian-stock-exchange-b3-to-launch-its-own-tokenization-platform-and-stablecoin](https://www.coindesk.com/business/2025/12/17/brazilian-stock-exchange-b3-to-launch-its-own-tokenization-platform-and-stablecoin)

En diciembre de 2025, B3 — la bolsa de valores de Brasil — anunció una plataforma de tokenización diseñada para compartir liquidez con sus sistemas tradicionales de acciones, más una stablecoin anclada al BRL como el tramo de pago y clearing, prevista para 2026. Nota la restricción con honestidad: B3 no ha nombrado una blockchain subyacente, así que no hay base para asumir que corre en Solana.

Lo que significa para builders en cualquier caso: que la bolsa nacional entre a la tokenización legitima el vertical y creará demanda de todo lo que la rodea — integraciones de custodia, herramientas de cumplimiento, infraestructura de mercado secundario — mucho de lo cual puede construirse hoy de forma agnóstica a la chain y apuntarse hacia donde aterrice la liquidez.

---

## Páginas Relacionadas

* [Estándares de Tokens](token-standards.md) — extensiones de Token-2022 y el Solana Stablecoin Standard para emisión con cumplimiento
* [Pagos y Stablecoins](payments-and-stablecoins.md) — BRZ, rampas Pix y la regulación de stablecoins de Brasil
* [Desarrollo DeFi](defi-development.md) — los DEXs, oráculos y estándares de vaults con los que componen los tokens de RWA
* [Hall de la Fama](../hackathon/hall-of-fame.md) — VitalFi y otros proyectos brasileños destacados de hackathons
