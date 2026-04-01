# Testing y Debugging

El testing en Solana sigue una pirámide: tests unitarios rápidos en la base, tests de integración contra estado real en el medio y fuzz testing para seguridad en la cima. Esta página explica cada capa y cuándo usar cada herramienta.

Un error común es ejecutar todos los tests contra `solana-test-validator`. Eso funciona pero es lento — iniciar un validador, desplegar programas y esperar confirmaciones agrega segundos a cada ejecución de tests. Las herramientas que se presentan a continuación te permiten testear en proceso con tiempos de ejecución menores a un segundo.

---

## Tests Unitarios — Rápidos, Aislados, Sin Validador

Los tests unitarios verifican instrucciones individuales y operaciones de cuentas. Deberían ejecutarse en milisegundos, no en segundos.

### LiteSVM

[https://github.com/LiteSVM/litesvm](https://github.com/LiteSVM/litesvm)

Una Solana Virtual Machine liviana y en proceso, diseñada específicamente para testing. LiteSVM inicia una instancia SVM mínima en tu proceso de test — sin validador, sin red, sin RPC. Los tests se ejecutan en tiempos menores a un segundo, haciendo práctico el desarrollo guiado por tests. Creas cuentas, despliegas programas y procesas instrucciones todo dentro de una sola función de test en Rust.

LiteSVM es la opción recomendada por defecto para tests unitarios de programas Solana. Soporta tanto programas Anchor como nativos, maneja operaciones del system program (creación de cuentas, transferencias) y te da control total sobre el entorno de test (clock, rent, slot). Úsalo cuando necesites retroalimentación rápida sobre lógica de instrucciones.

### Mollusk

[https://github.com/buffalojoec/mollusk](https://github.com/buffalojoec/mollusk)

Un arnés de testing SVM enfocado en programas nativos (no Anchor) de Solana. Mollusk proporciona una API limpia para testear instrucciones individuales con control preciso sobre entradas de cuentas y salidas esperadas. Su característica destacada es la medición integrada de unidades de cómputo — cada resultado de test incluye las CU exactas consumidas, convirtiéndolo en la herramienta de elección para perfilado y optimización de CU.

Usa Mollusk cuando estés escribiendo programas nativos (especialmente Pinocchio), cuando necesites perfilado de CU como parte de tu suite de tests, o cuando quieras la API de testing más simple posible sin dependencias de Anchor.

---

## Tests de Integración — Estado Real, Programas Reales

Los tests de integración verifican que tu programa funciona correctamente al interactuar con otros programas desplegados y datos de cuentas reales.

### Surfpool

[https://github.com/txtx/surfpool](https://github.com/txtx/surfpool)

Surfpool te permite reproducir estado de mainnet o devnet localmente sin desplegar nada. Obtiene datos de cuentas reales y estado de programas, luego ejecuta tus transacciones contra esa instantánea. Esto significa que puedes testear las interacciones de tu programa con Jupiter, Pyth, SPL Token y cualquier otro programa desplegado usando su estado on-chain real.

Usa Surfpool cuando necesites testear CPIs contra programas reales, cuando quieras verificar que tu programa funciona con layouts de cuentas en producción, o cuando necesites reproducir un problema de mainnet localmente. Cierra la brecha entre tests unitarios (aislados) y despliegue en devnet (lento y costoso).

### Bankrun

[https://github.com/kevinheavey/solana-bankrun](https://github.com/kevinheavey/solana-bankrun)

BanksServer ejecutándose dentro de Node.js para ejecución rápida de tests TypeScript con Anchor. Bankrun te da un entorno de test que se comporta como un cluster real de Solana pero se ejecuta completamente en proceso. Está diseñado específicamente para proyectos Anchor donde tus tests están escritos en TypeScript — reemplaza el flujo de `anchor test` con algo mucho más rápido.

Usa Bankrun cuando tengas un proyecto Anchor con tests de integración en TypeScript y quieras ejecución más rápida que `solana-test-validator`. Soporta viajes en el tiempo (avanzar slots y timestamps), manipulación de cuentas y todos los métodos RPC estándar.

---

## Fuzz Testing — Encontrando Casos Límite

El fuzz testing genera entradas aleatorias para encontrar bugs que los tests estructurados no detectan. Es esencial para programas críticos en seguridad.

### Trident

[https://github.com/Ackee-Blockchain/trident](https://github.com/Ackee-Blockchain/trident)

Framework de fuzz testing basado en propiedades construido específicamente para programas Solana, creado por Ackee Blockchain (auditores profesionales de Solana). Trident genera secuencias aleatorias de instrucciones y configuraciones de cuentas, luego verifica que los invariantes de tu programa se mantienen. Ha encontrado vulnerabilidades reales en programas en producción que el testing manual y los tests unitarios no detectaron.

Usa Trident antes de cualquier despliegue en mainnet que maneje fondos de usuarios. Define los invariantes de tu programa (ej., "los depósitos totales deben igualar la suma de todos los balances de usuarios") y deja que Trident intente romperlos. La configuración inicial toma tiempo, pero proporciona confianza de que ninguna combinación de entradas puede violar las garantías de tu programa.

---

## Testing de Seguridad y Auditoría

### OtterSec (anteriormente Sec3)

[https://osec.io/](https://osec.io/)

Auditores profesionales de seguridad de Solana y el equipo detrás de varias herramientas de auditoría automatizadas. OtterSec ha auditado muchos de los protocolos más grandes de Solana incluyendo Jupiter, Marinade y Tensor. Sus contribuciones open-source incluyen herramientas de seguridad e investigación de vulnerabilidades que benefician a todo el ecosistema.

Para desarrolladores, OtterSec publica informes de auditoría que sirven como excelentes casos de estudio para entender vulnerabilidades reales de Solana. Leer sus auditorías publicadas es una de las mejores formas de aprender qué problemas de seguridad buscar en tus propios programas.

### Neodyme

[https://neodyme.io/](https://neodyme.io/)

Firma de investigación de seguridad y auditoría de Solana conocida por su análisis técnico profundo. Neodyme publica blog posts y writeups sobre patrones de vulnerabilidad específicos de Solana — ataques de type cosplay, sustitución de PDA, falta de verificación de signers y abuso de CPI. Su investigación es lectura obligatoria para cualquiera que despliegue programas que manejen fondos de usuarios.

Recursos clave:
- [Common Pitfalls](https://neodyme.io/en/blog/solana_common_pitfalls/) — las 5 clases de vulnerabilidad más comunes encontradas en auditorías reales
- [Exploring Solana Core Part 1](https://neodyme.io/en/blog/solana_core_1/) — cómo una función poco conocida de Solana hizo inseguros los vaults de programas
- [Security Workshop](https://workshop.neodyme.io/) — ejercicios prácticos estilo CTF para encontrar y explotar vulnerabilidades de Solana

### Sealevel Attacks

[https://github.com/coral-xyz/sealevel-attacks](https://github.com/coral-xyz/sealevel-attacks)

Diez programas Anchor numerados del equipo de Anchor (Coral XYZ), cada uno demostrando una vulnerabilidad específica con una versión insegura y segura. Cubre: autorización de firmante, coincidencia de datos de cuentas, verificaciones de owner, type cosplay, inicialización, CPI arbitrario, cuentas mutables duplicadas, canonicalización de bump seed, compartición de PDA y cierre de cuentas. La forma más eficiente de aprender qué auditar en tus propios programas.

### Referencia de Exploits de Seguridad de Anchor

[https://www.anchor-lang.com/docs/references/security-exploits](https://www.anchor-lang.com/docs/references/security-exploits)

La documentación oficial de Anchor tiene una sección dedicada que refleja el repo Sealevel Attacks, con explicaciones de cómo cada constraint de Anchor (`has_one`, `owner`, `signer`, etc.) previene clases de ataque específicas. Léelo junto con el código de Sealevel Attacks para entender tanto la vulnerabilidad como la corrección idiomática de Anchor.

---

## Builds Verificables

### solana-verify

[https://github.com/Ellipsis-Labs/solana-verifiable-build](https://github.com/Ellipsis-Labs/solana-verifiable-build)

Una herramienta para producir y verificar builds determinísticos de programas. Los builds verificables garantizan que el bytecode desplegado on-chain corresponde a un commit específico del código fuente. Esto es crítico para la confianza — usuarios y auditores pueden confirmar que lo que está corriendo on-chain es exactamente lo que fue auditado. La herramienta usa Docker para crear entornos de build reproducibles, y el Solana Explorer puede mostrar el estado de verificación para programas verificados.

Usa `solana-verify` antes de cualquier deploy en mainnet. El comando `solana-verify build` produce un binario determinístico, y `solana-verify get-program-hash` lo compara contra el programa desplegado. Anchor también soporta builds verificables vía `anchor build --verifiable`.

---

## Exploradores de Bloques

Cuando algo sale mal (o bien) on-chain, los exploradores te ayudan a entender qué pasó.

### Solana Explorer

[https://explorer.solana.com/](https://explorer.solana.com/)

El explorador oficial mantenido por la Solana Foundation. Muestra transacciones, cuentas, programas y validadores en todos los clusters (mainnet, devnet, testnet). La vista de transacciones muestra detalles de instrucciones, cambios en cuentas y consumo de unidades de cómputo. Úsalo como tu opción predeterminada para inspeccionar transacciones y verificar despliegues. Soporta cambio entre clusters vía URL.

### Solscan

[https://solscan.io/](https://solscan.io/)

Un explorador completo enfocado en análisis. Solscan destaca en datos a nivel de tokens — holders, historial de transferencias, datos de mercado y actividad DeFi. También proporciona análisis de cuentas, estadísticas de programas y una interfaz más limpia para navegar transacciones complejas. Usa Solscan cuando necesites análisis de tokens, distribución de holders o una representación más visual de la actividad on-chain.

### SolanaFM

[https://solana.fm/](https://solana.fm/)

Un explorador enfocado en desarrolladores que decodifica automáticamente datos de transacciones usando IDLs de programas conocidos. Cuando inspeccionas una transacción, SolanaFM te muestra los parámetros de instrucción decodificados y nombres de cuentas en lugar de datos hexadecimales raw. Esto hace que el debugging sea significativamente más rápido porque puedes ver exactamente qué recibió tu programa y cómo interpretó las entradas.

### XRAY

[https://xray.helius.xyz/](https://xray.helius.xyz/)

Un explorador minimalista y legible construido por Helius. XRAY se enfoca en hacer los datos de transacciones comprensibles para usuarios no técnicos — traduce transacciones raw de Solana en descripciones en lenguaje natural como "Intercambió 1.5 SOL por 200 USDC en Jupiter." Úsalo cuando necesites entender rápidamente qué hizo una transacción sin parsear datos de instrucciones, o cuando quieras compartir detalles de transacciones con personas no técnicas.
