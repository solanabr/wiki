# DePIN en Solana

DePIN — Decentralized Physical Infrastructure Networks, o redes de infraestructura física descentralizada — usa incentivos en tokens para arrancar hardware del mundo real: cobertura inalámbrica, mapeo a nivel de calle, cómputo GPU, ancho de banda. En lugar de que una sola empresa despliegue infraestructura, miles de personas despliegan dispositivos y ganan tokens por contribuciones verificadas. Solana domina esta categoría por una razón estructural: recompensar millones de dispositivos implica un volumen enorme de pagos diminutos, y las comisiones de Solana son lo suficientemente bajas para hacer viables los micropagos por dispositivo, mientras que los compressed NFTs y ZK compression le dan a cada dispositivo una identidad on-chain barata. Los resultados se ven en los datos — la categoría DePIN se sitúa cerca de los $20 mil millones a mediados de 2026, y los protocolos DePIN de Solana marcaron un máximo histórico de ingresos mensuales de $2.6M en enero de 2026.

---

## Redes Insignia

Estas son las redes que vale la pena estudiar antes de construir — cada una resolvió los problemas centrales de DePIN (prueba de contribución, distribución de recompensas, onboarding de hardware) en un dominio distinto.

### Helium

[https://docs.helium.com/](https://docs.helium.com/)

Redes inalámbricas descentralizadas: una red LoRaWAN global para dispositivos IoT más una red de offload celular para conectividad móvil, donde los operadores de hotspots ganan HNT por proporcionar cobertura. La conectividad IoT a través de Helium cuesta aproximadamente un orden de magnitud menos que los planes celulares comparables, y por eso tiene uso real de pago en lugar de solo especulación con tokens.

Helium es además el caso de estudio canónico de DePIN para builders — migró toda su L1 a Solana en 2023, y sus herramientas open-source (incluyendo TukTuk, cubierto en la página de [Desarrollo DeFi](defi-development.md)) se reutilizan en todo el ecosistema. Estudia su proof-of-coverage basado en oráculos y su arquitectura de recompensas antes de diseñar la tuya.

### Hivemapper

[https://hivemapper.com/](https://hivemapper.com/)

Mapeo descentralizado: los conductores instalan una dashcam Bee y ganan tokens HONEY por contribuir imágenes a nivel de calle mientras conducen. La red ha mapeado alrededor de un tercio de la red vial mundial y vende datos de mapas actualizados a clientes como Lyft — una demostración de que el hardware crowdsourced puede competir con flotas como los autos de Street View de Google a una fracción del costo de capital.

Para builders, Hivemapper es la referencia en recompensas ponderadas por calidad: las contribuciones se puntúan por frescura y valor de cobertura, no solo por volumen.

### Render

[https://rendernetwork.com/](https://rendernetwork.com/)

Renderizado GPU descentralizado para cargas de trabajo creativas y de IA. Render conecta capacidad GPU ociosa con artistas y estudios que usan motores como OctaneRender, Redshift y Blender Cycles, y se ha expandido a flujos de trabajo de imágenes con IA generativa. Es una de las redes DePIN con mayores ingresos en Solana y una de las pocas que paga consistentemente recompensas significativas por operador de nodo.

### io.net

[https://io.net/](https://io.net/)

Una nube GPU descentralizada que agrega cómputo de data centers, mineros de cripto y dispositivos de consumo en clusters para cargas de trabajo de AI/ML. Donde Render se enfoca en pipelines de renderizado, io.net apunta al entrenamiento e inferencia de machine learning — el lado de la demanda que explotó con la ola de IA. Relevante si tu proyecto necesita cómputo GPU asequible o si estás diseñando agregación de oferta para hardware heterogéneo.

### Grass

[https://www.grass.io/](https://www.grass.io/)

Compartición de ancho de banda para datos de IA: millones de usuarios ejecutan una app que comparte ancho de banda de internet ocioso, que la red usa para recolectar datos públicos de la web para entrenamiento de IA, recompensando a los contribuidores con puntos convertibles a tokens GRASS. Grass importa como caso de estudio porque redujo la barrera de hardware a cero — sin dashcam, sin hotspot, solo software — y por eso alcanzó una de las bases de contribuidores más grandes de DePIN.

---

## Puntos de Partida para Builders

### Página de Soluciones DePIN de Solana

[https://solana.com/solutions/depin](https://solana.com/solutions/depin)

El hub oficial de DePIN de Solana: redes destacadas, estadísticas del ecosistema, entrevistas de casos de estudio y el reporte anual de DePIN. Útil para una vista a nivel de mercado de la categoría y para ver qué primitivas (compressed NFTs, Token Extensions, ZK compression) usa realmente cada red en producción.

### Guía de Inicio Rápido de DePIN

[https://solana.com/developers/cookbook/depin](https://solana.com/developers/cookbook/depin)

La guía oficial para desarrolladores sobre el lado on-chain de un protocolo DePIN: elegir entre SPL Token y Token-2022 para tu token de recompensas, distribución de recompensas basada en claims vs push (incluyendo enfoques con árboles de Merkle y ZK compression), patrones de proof-of-contribution, trade-offs entre datos on-chain y off-chain, y gobernanza. Léela primero — condensa las decisiones de diseño que cada red de arriba tuvo que tomar, con implementaciones de referencia.

### DePINscan

[https://depinscan.io/chains/solana](https://depinscan.io/chains/solana)

Tracker del ecosistema para proyectos, dispositivos y métricas de tokens DePIN, filtrable por chain. Úsalo para dimensionar un nicho antes de comprometerte — si tres equipos con financiamiento ya están desplegando hardware en tu categoría, necesitas un ángulo más afilado. Los [deep dives mensuales de Solana DePIN](https://blog.syndica.io/deep-dive-solana-depin-january-2026/) de Syndica lo complementan con análisis a nivel de ingresos de los principales protocolos.

---

## Patrones de Diseño

### Incentivos en Tokens

Tu token de recompensas es el producto. Las decisiones de diseño — calendario de emisión, mecánicas de burn, recompensas ponderadas por calidad, extensiones de Token-2022 para cumplimiento o transfer fees — determinan si tu red atrae operadores reales o farmers mercenarios. Consulta [Estándares de Tokens](token-standards.md) para el sistema de extensiones de Token-2022 sobre el que se construyen estas mecánicas.

### Identidad de Dispositivo Barata

Una red DePIN puede implicar millones de registros de dispositivos on-chain, y ahí es donde las cuentas estándar se vuelven prohibitivamente caras. Los compressed NFTs y ZK compression reducen el costo por dispositivo a una fracción de centavo — consulta la entrada de Light Protocol en la página de [Herramientas de Desarrollo](development-tools.md) y la cobertura de compressed NFTs en [Estándares de Tokens](token-standards.md).

---

## DePIN en Hackathons

Los jueces premian esta categoría. El Gran Campeón del hackathon Solana Frontier de Colosseum (anunciado en junio de 2026) fue **CrowdBrain**, una DePIN de robótica que entrena operadores en simulación y dirige a los mejores hacia robots reales para teleoperación y recolección de datos — ganador entre 2,857 submissions finales. Si vas a entrar a un hackathon de Solana con ideas de hardware o infraestructura, DePIN es un track donde una demo con un dispositivo funcionando destaca; consulta la [sección Hackathon](../hackathon/README.md) y [Comunidad y Hackathons](community-and-hackathons.md) para saber cómo competir.
