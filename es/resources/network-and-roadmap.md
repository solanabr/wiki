# Estado de la Red y Roadmap

Solana está en medio del conjunto de cambios de protocolo más grande de su historia, y afectan directamente cómo construyes: qué tan rápido las transacciones se vuelven finales, qué software de validador ejecuta la red y cuánto cómputo cabe en un bloque. Esta página resume el estado de la red **a agosto de 2026** — la renovación de consenso Alpenglow, la llegada de diversidad real de clientes con Firedancer, y dónde seguir los cambios de protocolo a medida que llegan.

---

## Alpenglow — La Renovación del Consenso

### Alpenglow (SIMD-0326)

[https://solana.com/upgrades/alpenglow](https://solana.com/upgrades/alpenglow)

Alpenglow reemplaza el consenso original TowerBFT de Solana con dos componentes nuevos. **Votor** es el nuevo protocolo de votación: en lugar de la vieja escalera de lockout de 32 slots, los validadores finalizan un bloque en una sola ronda cuando el 80% del stake vota por él, o en dos rondas cuando lo hace el 60%. **Rotor** es la capa posterior de propagación de bloques que reemplazará el árbol de nodos relay de Turbine con una única capa de relay para reducir la latencia de red; llega como una segunda fase después de que Votor sea adoptado. El cambio principal: la finalidad baja de aproximadamente 12.8 segundos bajo TowerBFT a un objetivo de aproximadamente 150 milisegundos.

La actualización pasó por gobernanza como SIMD-0326 y fue aprobada por un voto de stake de validadores en septiembre de 2025, con aproximadamente el 98% del stake participante a favor. Alpenglow ha estado corriendo en un cluster de prueba comunitario público desde el 11 de mayo de 2026, y la activación en mainnet está prevista para finales del Q3 / principios del Q4 de 2026 vía el release Agave 4.1 — trátalo como un objetivo, no una promesa. Un conjunto de SIMDs complementarios (0337, 0357, 0384, 0387) cubre la mecánica de migración, los tickets de admisión de validadores y las claves BLS que los operadores de validadores deben registrar antes de la activación.

### Cronología de un Vistazo

- **Septiembre de 2025** — SIMD-0326 (Alpenglow) aprobado por voto de stake de validadores, ~98% del stake participante a favor
- **12 de diciembre de 2025** — El cliente Firedancer completo entra en vivo en mainnet en Breakpoint
- **11 de mayo de 2026** — Alpenglow en vivo en un cluster de prueba comunitario público
- **Finales del Q3 / principios del Q4 de 2026 (objetivo)** — Activación de Alpenglow en mainnet vía Agave 4.1

### Seguir los Cambios de Protocolo (SIMDs)

[https://github.com/solana-foundation/solana-improvement-documents](https://github.com/solana-foundation/solana-improvement-documents)

Cada cambio de protocolo pasa por un Solana Improvement Document (SIMD): una propuesta pública, discusión en los [foros de desarrolladores de Solana](https://forum.solana.com/c/simd/5) y — para cambios que afectan el consenso como Alpenglow — un voto de stake de validadores. Si quieres saber cómo se verá la red en seis meses, los SIMDs activos son la fuente primaria; todo lo demás es comentario. La página de [Referencias Open Source](open-source-references.md) lista los SIMDs críticos para desarrolladores que hay que seguir y el navegador comunitario en simd.wtf.

---

## Panorama de Clientes de Validador

Durante la mayor parte de la historia de Solana, efectivamente el 100% de la red ejecutaba una sola base de código. Eso ya no es cierto — e importa, porque con una sola implementación, un solo bug puede detener toda la red. Con implementaciones independientes, un bug en un cliente se convierte en una degradación en lugar de una caída.

### Agave

[https://www.anza.xyz/](https://www.anza.xyz/)

El cliente de validador mayoritario, mantenido por Anza — el laboratorio de I+D que se separó de Solana Labs. Agave y el fork Jito-Solana que ejecutan la mayoría de los stakers representan aproximadamente el 60% del stake de mainnet a mediados de 2026, y Agave es la implementación de referencia donde las nuevas funcionalidades de protocolo como Alpenglow llegan primero. Si operas un validador o lees código del runtime de Solana, esta es la base de código que encontrarás.

### Firedancer y Frankendancer

[https://jumpcrypto.com/firedancer](https://jumpcrypto.com/firedancer)

Firedancer es un cliente de validador independiente escrito desde cero en C por Jump Crypto, construido para throughput puro — los benchmarks de laboratorio apuntan a más de 1 millón de TPS. El cliente completo entró en vivo en mainnet el 12 de diciembre de 2025, anunciado en Breakpoint en Abu Dhabi tras meses de validación silenciosa en producción, y ejecuta aproximadamente el 14% del stake a mediados de 2026. **Frankendancer** — un híbrido que combina la capa de red de Firedancer con el runtime de Agave — ejecuta otro ~26%, poniendo aproximadamente el 40% del SOL en stake sobre la base de código de Jump: la primera diversidad real de clientes en la historia de Solana. Los reportes de testing y rendimiento se publican en [reports.firedancer.io](https://reports.firedancer.io/).

---

## Qué Significa Esto para Builders

- **La finalidad se vuelve parte de tu UX.** Hoy, las apps se debaten entre `confirmed` (rápido, pequeño riesgo de rollback) y `finalized` (seguro, espera de ~12.8s). Después de Alpenglow, esa brecha colapsa a bastante menos de un segundo — los flujos que dependen de la finalidad (pagos, bridges, depósitos en exchanges) pueden volverse casi instantáneos. Lee los niveles de commitment desde el RPC en lugar de hardcodear tiempos de espera, y tu app se beneficiará automáticamente cuando ocurra el cambio.
- **No dependas de peculiaridades del cliente.** Con dos implementaciones de validador independientes en producción, el comportamiento que no forma parte de la especificación del protocolo (detalles de timing, edge cases no documentados del RPC) puede diferir entre nodos. Tu proveedor de RPC puede ejecutar Agave, Frankendancer o Firedancer completo.
- **Los límites de cómputo siguen subiendo.** La capacidad de cómputo por bloque se ha elevado repetidamente a través de SIMDs — más recientemente SIMD-0286, activado en mainnet el 29 de julio de 2026, que elevó los bloques de 60M a 100M CUs (+66% de capacidad), con SIMD-0296 (transacciones más grandes) todavía en progreso. La dirección es clara — más cómputo por bloque — pero la disciplina de CUs por transacción sigue determinando tu costo de inclusión, así que sigue perfilando.
- **Prueba contra lo que viene.** Alpenglow está en vivo en un cluster de prueba público, y los SIMDs complementarios llegan en releases menores de Agave antes de la activación en mainnet. Si tu protocolo es sensible al timing de confirmación o a la mecánica de las vote accounts, sigue las notas de release de Agave en lugar de esperar el cambio en mainnet.

---

Esta página refleja la red a agosto de 2026. La activación de Alpenglow en mainnet y las cuotas de stake por cliente cambiarán — revisa [solana.com/upgrades/alpenglow](https://solana.com/upgrades/alpenglow) y el repo de SIMDs para el estado actual. Páginas relacionadas: [Referencias Open Source](open-source-references.md) para el proceso SIMD y los repos core, [Primeros Pasos](getting-started.md) para conceptos fundamentales, y el [validator de Superteam Brazil](../about/validator.md) si quieres apoyar la descentralización de la red delegando.
