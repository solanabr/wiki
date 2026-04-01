# Estándares de Tokens

Los tokens en Solana son gestionados por programas on-chain — principalmente SPL Token y su sucesor Token-2022. Entender estos programas, sus extensiones y los estándares más amplios de activos digitales (NFTs, compressed NFTs) es esencial para cualquier desarrollador de Solana. Esta página cubre el panorama completo.

---

## Programa SPL Token

### SPL Token

[https://spl.solana.com/token](https://spl.solana.com/token)

El programa de tokens original que impulsa la mayoría de los tokens en Solana hoy. SPL Token maneja minting, transferencias, burning, congelamiento y delegación de tokens. Cada token fungible basado en SOL con el que has interactuado — USDC, BONK, JUP — usa este programa.

Los conceptos fundamentales son directos: una cuenta **Mint** define el token (decimales, supply, autoridades) y las **Token Accounts** mantienen los balances para propietarios individuales. Las Associated Token Accounts (ATAs) proporcionan una dirección determinística para cada par propietario-mint, así que siempre sabes dónde viven los tokens de alguien. Entender SPL Token es fundamental — incluso si usas Token-2022, los conceptos base son los mismos.

### Token-2022 / Token Extensions

[https://spl.solana.com/token-2022](https://spl.solana.com/token-2022)

El programa de tokens de nueva generación que incluye todo lo que hace SPL Token más un sistema modular de extensiones. Token-2022 es totalmente compatible hacia atrás — cualquier operación que puedas hacer con SPL Token funciona con Token-2022 — pero agrega nuevas capacidades poderosas a través de extensiones que habilitas al momento de crear el mint.

Token-2022 es el programa recomendado para nuevos lanzamientos de tokens. El sistema de extensiones te permite construir funcionalidades directamente en el token que de otra manera requerirían programas personalizados, reduciendo complejidad y superficie de ataque.

---

## Extensiones de Token-2022

Cada extensión agrega una capacidad específica a tu token. Las extensiones se seleccionan cuando se crea el mint y no pueden cambiarse después. Aquí está lo que hace cada una y cuándo las usarías.

### Transfer Hooks

Ejecutan lógica personalizada de programa en cada transferencia. Cuando un token con transfer hook es transferido, el programa de tokens automáticamente hace un CPI a tu programa hook, pasando los detalles de la transferencia. Los casos de uso incluyen aplicación de regalías en ventas secundarias, checks de cumplimiento que validan emisor/receptor contra una lista blanca, análisis y registro de transferencias, y distribución personalizada de comisiones.

Esta es posiblemente la extensión más poderosa porque te permite aplicar invariantes arbitrarios en cada transferencia sin requerir que los usuarios interactúen con tu programa directamente.

### Confidential Transfers

Balances y montos de transferencia encriptados usando pruebas de conocimiento cero. Con confidential transfers habilitados, los balances de tokens se almacenan como textos cifrados on-chain, y las transferencias incluyen pruebas ZK que verifican que el emisor tiene balance suficiente sin revelar el monto real. El emisor y receptor aún pueden ver sus propios balances.

Los casos de uso incluyen stablecoins con privacidad, sistemas de nómina donde los montos de salario no deberían ser públicos, y cualquier aplicación donde la privacidad financiera importa. Ten en cuenta que el overhead computacional es significativo — las transacciones con confidential transfers consumen más CU.

### Transfer Fees

Comisiones a nivel de protocolo aplicadas automáticamente en cada transferencia. La autoridad del mint define una comisión (como porcentaje en puntos básicos, con un tope máximo), y la comisión se retiene en la token account del destinatario en cada transferencia. La comisión luego puede ser recolectada por la autoridad de retiro.

Usa esto cuando quieras ingresos garantizados del protocolo por transferencias de tokens sin construir un programa personalizado. A diferencia de los transfer hooks (que pueden implementar comisiones pero requieren un programa separado), las transfer fees están integradas directamente en el programa de tokens y no pueden ser eludidas.

### Permanent Delegate

Una autoridad de delegación irrevocable que puede transferir o quemar tokens de cualquier token account para ese mint. Una vez establecido al crear el mint, el delegado permanente tiene la capacidad de mover tokens sin la aprobación explícita del propietario.

Esto existe principalmente para cumplimiento regulatorio — los emisores de stablecoins pueden necesitar la capacidad de congelar o recuperar tokens para cumplir con requisitos legales. Es una funcionalidad poderosa y potencialmente controvertida que debe usarse con gobernanza clara y transparencia.

### Non-Transferable (Soulbound)

Tokens que no pueden transferirse después del minting. El token queda permanentemente vinculado a la cuenta en la que fue emitido. Los casos de uso incluyen credenciales (títulos universitarios, certificaciones), tokens de reputación, registros de participación en gobernanza, y cualquier activo que deba representar un logro o estatus no negociable. Esta es la implementación nativa de Solana de tokens soulbound.

### Interest-Bearing

Tokens con un balance de visualización que acumula interés a lo largo del tiempo. El balance real on-chain no cambia — en su lugar, el programa de tokens calcula un monto de visualización basado en la tasa de interés y el tiempo transcurrido. La tasa de interés es establecida por la autoridad de tasa y puede actualizarse.

Usa esto para stablecoins con rendimiento, tokens de ahorro, o cualquier token fungible que deba parecer crecer en balance con el tiempo. La distribución real de rendimiento (si la hay) debe manejarse por separado — esta extensión solo afecta cómo se muestra el balance.

### Metadata

Metadata on-chain almacenada directamente en la cuenta del mint, sin requerir Metaplex o ningún programa externo. Puedes almacenar nombre, símbolo, URI y pares clave-valor arbitrarios directamente en el mint. Esto es significativamente más simple y barato que usar el programa Metaplex Token Metadata.

Usa esto para tokens fungibles simples que necesitan metadata básica (nombre, símbolo, imagen) pero no necesitan el set completo de funcionalidades NFT. Para NFTs y activos digitales complejos, Metaplex Core sigue siendo la mejor opción.

### Group/Member

Agrupación y jerarquías de tokens. Un mint puede ser designado como grupo, y otros mints pueden ser agregados como miembros de ese grupo. Esto crea relaciones on-chain entre tokens — útil para colecciones de tokens, estructuras organizacionales, productos agrupados, o cualquier escenario donde los tokens necesiten una relación padre-hijo.

---

## Estándares de Stablecoins — Superteam Brazil

### Solana Stablecoin Standard

[https://github.com/SuperteamBrazil/solana-stablecoin-standard](https://github.com/SuperteamBrazil/solana-stablecoin-standard)

Especificaciones SSS-1 y SSS-2 para emisión estandarizada de stablecoins en Solana. SSS-1 define la interfaz básica — mint, burn, pause, gestión de roles — que cualquier stablecoin debería implementar. SSS-2 la extiende con funcionalidades avanzadas incluyendo hooks de cumplimiento (transfer hooks que aplican reglas KYC/AML), gestión de listas negras, integración de oráculos actualizables para feeds de precios y mecanismos de transparencia de reservas.

Ambas especificaciones están construidas nativamente sobre Token-2022, aprovechando transfer hooks para la aplicación de cumplimiento y confidential transfers para transacciones con privacidad. El estándar está diseñado pensando en los mercados latinoamericanos, donde la adopción de stablecoins crece rápidamente y los requisitos regulatorios varían por jurisdicción. Tener una especificación común significa que wallets, exchanges y protocolos DeFi pueden soportar nuevas stablecoins compatibles sin trabajo de integración personalizado. Mantenido por @lvj_luiz y @kauenet.

---

## NFTs y Activos Digitales

### Metaplex Core

[https://developers.metaplex.com/core](https://developers.metaplex.com/core)

El estándar NFT de nueva generación y la opción recomendada para nuevos proyectos NFT en Solana. Core usa una sola cuenta por NFT (vs las 3-5 cuentas requeridas por el estándar legacy), reduciendo costos de rent y simplificando consultas. Introduce un sistema de plugins para agregar funcionalidad — regalías, congelamiento, quema y plugins personalizados — sin modificar el programa core.

Core aplica regalías a nivel de protocolo, lo que significa que los creadores pueden garantizar que reciben regalías en ventas secundarias. El diseño de cuenta única también hace que las consultas de colecciones sean más rápidas y baratas a través de la API DAS. Si estás comenzando un nuevo proyecto NFT, usa Core.

### Metaplex Bubblegum

[https://developers.metaplex.com/bubblegum](https://developers.metaplex.com/bubblegum)

Compressed NFTs (cNFTs) vía compresión de estado usando árboles de Merkle concurrentes. Bubblegum te permite emitir millones de NFTs por centavos al almacenar solo una raíz de Merkle on-chain y los datos completos en almacenamiento indexado off-chain (accesible vía la API DAS de proveedores como Helius).

La contrapartida es la complejidad — leer compressed NFTs requiere un indexador, y las transferencias requieren pruebas de Merkle. Pero el ahorro en costos es dramático: emitir 1 millón de NFTs cuesta unos pocos SOL con compresión vs miles de SOL sin ella. Usa Bubblegum para airdrops a gran escala, activos de juegos, programas de fidelidad, o cualquier caso de uso donde necesites alto volumen a bajo costo.

### Metaplex Token Metadata

[https://developers.metaplex.com/token-metadata](https://developers.metaplex.com/token-metadata)

El estándar de metadata legacy que la mayoría de los NFTs existentes en Solana usan. Token Metadata adjunta una cuenta de metadata a un mint de SPL Token, almacenando nombre, símbolo, URI (apuntando a JSON off-chain), creadores e información de regalías. Aunque Metaplex Core es el estándar recomendado para proyectos nuevos, Token Metadata sigue siendo importante porque la gran mayoría de los NFTs existentes lo usan.

Te encontrarás con Token Metadata al trabajar con colecciones existentes, marketplaces o cualquier herramienta que sea anterior a Core. Entender ambos estándares es necesario para construir aplicaciones que interactúen con la gama completa de NFTs de Solana.

### Documentación de Metaplex

[https://developers.metaplex.com/](https://developers.metaplex.com/)

La documentación completa de la plataforma de desarrollo de Metaplex que cubre todos sus programas y herramientas — Core, Bubblegum, Token Metadata, Candy Machine (minting), Sugar (CLI), Umi (framework cliente) y más. Este es tu punto de partida para cualquier desarrollo de NFTs o activos digitales en Solana. La documentación incluye guías, referencias de API y ejemplos de código para cada producto.
