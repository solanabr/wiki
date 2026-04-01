# Frameworks y SDKs

Elegir el framework y SDK cliente adecuado moldea toda tu experiencia de desarrollo. Esta página explica las ventajas y desventajas de cada opción para que puedas tomar una decisión informada basada en las necesidades de tu proyecto.

---

## Frameworks para Programas

Estos frameworks definen cómo escribes programas on-chain en Solana. Cada uno hace diferentes concesiones entre experiencia de desarrollo, rendimiento y control.

### Anchor

[https://www.anchor-lang.com/](https://www.anchor-lang.com/)

El framework estándar para desarrollo de programas en Solana. Anchor proporciona validación declarativa de cuentas a través de macros de Rust (`#[derive(Accounts)]`), generación automática de IDL (Interface Description Language) y generación de clientes TypeScript a partir de ese IDL. Maneja el boilerplate como la deserialización de cuentas, checks de discriminador y validación de constraints, permitiéndote enfocarte en la lógica de negocio. El ecosistema está construido alrededor de Anchor — la mayoría de tutoriales, herramientas y código de ejemplo lo asumen. Elige Anchor para la mayoría de proyectos, equipos de trabajo y cuando necesites un IDL para generación de clientes. Versión actual: 0.31+, que introdujo discriminadores personalizados y `LazyAccount`.

La contrapartida es el tamaño del binario y el consumo de unidades de cómputo (CU). Las abstracciones de Anchor agregan overhead que puede importar para programas críticos en rendimiento o programas que se acercan al límite de tamaño de binario BPF.

### Pinocchio

[https://github.com/febo/pinocchio](https://github.com/febo/pinocchio)

Un framework zero-copy que logra una reducción del 80-95% en CU comparado con Anchor a través de acceso directo a memoria, cero asignaciones en el heap y tamaño mínimo de binario. Pinocchio usa discriminadores de un solo byte (vs los 8 bytes de Anchor), structs `#[repr(C)]` para layout de memoria consistente y casting de punteros raw para acceso zero-copy a cuentas. El resultado son programas dramáticamente más baratos de ejecutar y más pequeños de desplegar.

La contrapartida es la experiencia de desarrollo. Escribes validación manual de cuentas, manejas tu propia serialización y gestionas bloques de código unsafe. No hay generación de IDL — construyes los clientes a mano. Elige Pinocchio cuando las unidades de cómputo o el tamaño del binario son restricciones, cuando estás construyendo infraestructura crítica en rendimiento, o cuando quieres control máximo sobre cada byte.

### Steel

[https://github.com/regolith-labs/steel](https://github.com/regolith-labs/steel)

Un framework ligero de Regolith Labs que se ubica entre Anchor y native. Steel proporciona macros procedurales para validacion de cuentas y parsing de instrucciones sin el peso completo de la generacion de codigo de Anchor. Los programas compilan a binarios mas pequenos que Anchor manteniendo una experiencia de desarrollo estructurada.

Elige Steel cuando quieras mas estructura que el desarrollo native pero menos overhead que Anchor, o cuando el tamano del binario sea una preocupacion.

### Bolt (MagicBlock)

[https://docs.magicblock.gg/bolt/introduction](https://docs.magicblock.gg/bolt/introduction)

Un framework Entity Component System (ECS) on-chain especificamente disenado para desarrollo de juegos en Solana, construido por MagicBlock. Bolt estructura el estado on-chain como entidades con componentes composables, mapeando el patron ECS directamente al modelo de cuentas de Solana.

Elige Bolt cuando estes construyendo juegos completamente on-chain o cualquier aplicacion que se beneficie de una arquitectura ECS.

### Poseidon

[https://github.com/turbin3/poseidon](https://github.com/turbin3/poseidon)

Escribe programas Solana en TypeScript que compilan a Rust de Anchor. Poseidon transpila definiciones de programas TypeScript en codigo Anchor valido, permitiendo que desarrolladores mas comodos con TypeScript escriban programas on-chain sin aprender Rust primero.

Elige Poseidon para prototipado rapido, para equipos con fuertes habilidades en TypeScript, o como herramienta de aprendizaje.

### Native solana-program

[https://docs.rs/solana-program](https://docs.rs/solana-program)

Programación directa del SVM sin ningún framework. Trabajas con `AccountInfo` raw, parseas datos de instrucciones manualmente y escribes toda la validación tú mismo. Esto te da control absoluto con cero overhead de abstracción, pero requiere significativamente más código para la misma funcionalidad.

Usa desarrollo nativo para fines educativos (para entender lo que Anchor hace internamente), para programas extremadamente especializados donde incluso las abstracciones de Pinocchio son demasiado, o para programas de una sola instrucción donde el overhead del framework no se justifica.

---

## SDKs Cliente

Estas bibliotecas te permiten interactuar con Solana desde TypeScript/JavaScript — enviando transacciones, leyendo cuentas y construyendo frontends.

### @solana/kit (web3.js 2.0)

[https://github.com/solana-labs/solana-web3.js](https://github.com/solana-labs/solana-web3.js)

El SDK moderno de Solana para TypeScript, completamente reescrito desde cero. Es tree-shakable (solo importas lo que usas), tiene un diseño de API funcional (sin clases) y proporciona tipos TypeScript fuertes en todo. La arquitectura es modular — RPC, construcción de transacciones, gestión de llaves y codecs son paquetes separados que compones juntos.

Usa `@solana/kit` para proyectos nuevos, especialmente frontends donde el tamaño del bundle importa. Solo el tree-shaking puede reducir tu bundle relacionado con Solana en un 80%+ comparado con el SDK legacy. La API funcional también facilita el testing ya que no hay estado oculto.

### @solana/web3.js 1.x

[https://www.npmjs.com/package/@solana/web3.js](https://www.npmjs.com/package/@solana/web3.js)

El SDK TypeScript legacy que la mayoría del código existente de Solana usa. API basada en clases con `Connection`, `PublicKey`, `Transaction` y `Keypair` como tipos principales. El cliente TypeScript de Anchor (`@coral-xyz/anchor`) está construido sobre 1.x, así que si trabajas con clientes generados por Anchor, usarás este.

Usa 1.x cuando trabajes con codebases existentes, proyectos Anchor o cualquier biblioteca que dependa de él. Es estable y bien documentado, solo más grande y menos moderno que la reescritura 2.0.

### Solana Rust SDK (Cliente)

[https://docs.rs/solana-sdk](https://docs.rs/solana-sdk)

El SDK Rust para interactuar con Solana desde aplicaciones off-chain. Distinto de `solana-program` (que es para codigo on-chain), este SDK proporciona construccion de transacciones, firma, comunicacion RPC y gestion de keypairs para servicios backend, herramientas CLI, indexadores y keepers.

### Solana Python SDK (solana-py)

[https://github.com/michaelhly/solana-py](https://github.com/michaelhly/solana-py)

Cliente Python para Solana. Proporciona metodos RPC, construccion de transacciones y operaciones de cuentas para desarrolladores Python. Util para scripts de analisis de datos, interacciones en Jupyter notebooks y servicios backend.

### Solana Go SDK

[https://github.com/gagliardetto/solana-go](https://github.com/gagliardetto/solana-go)

Un cliente Go para Solana mantenido por gagliardetto. Proporciona metodos RPC, construccion de transacciones, interaccion con programas y subscripciones WebSocket. Ideal para infraestructura basada en Go.

### Codama

[https://github.com/codama-idl/codama](https://github.com/codama-idl/codama)

Una herramienta de generación de código que toma un IDL (de Anchor u otras fuentes) y genera clientes tipados en múltiples lenguajes — TypeScript, Rust, Python y más. Codama es esencial cuando tu programa necesita ser consumido por clientes en diferentes lenguajes. En lugar de escribir serialización y deserialización a mano en cada lenguaje, lo defines una vez en el IDL y generas todo.

Usa Codama cuando estés construyendo un protocolo que otros desarrolladores integrarán, o cuando necesites clientes en lenguajes más allá de TypeScript.

### TipLink

[https://docs.tiplink.io/](https://docs.tiplink.io/)

Wallet-as-a-service que crea wallets desechables via enlaces compartibles. TipLink permite crear wallets que los usuarios acceden a traves de una URL — sin necesidad de app de wallet. Casos de uso incluyen airdrops, onboarding, regalos y campanas de marketing.

---

## Scaffolding

### create-solana-dapp

[https://github.com/solana-foundation/create-solana-dapp](https://github.com/solana-foundation/create-solana-dapp)

Scaffolding de proyectos mantenido por la Solana Foundation. Genera un proyecto completo con un programa on-chain, frontend y suite de tests preconfigurada. Eliges tu combinación de frameworks — Anchor o native para el programa, Next.js o React para el frontend. El proyecto generado incluye conexión de wallet, interacción con el programa y un pipeline de CI funcional. Úsalo para saltarte el boilerplate y empezar a construir inmediatamente.
