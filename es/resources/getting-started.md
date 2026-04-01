# Primeros Pasos

Esta página presenta una ruta de aprendizaje recomendada para nuevos desarrolladores de Solana. En lugar de una lista de enlaces sin estructura, organiza los recursos como un recorrido — desde entender el modelo mental, hasta configurar tu entorno, construir y desplegar tu primer programa, y potenciar tu flujo de trabajo con herramientas de IA.

---

## Paso 1: Entiende los Fundamentos

Antes de escribir código, internaliza cómo funciona Solana. El modelo de cuentas es fundamentalmente diferente a las cadenas EVM — todo es una cuenta, los programas no tienen estado y los datos viven en cuentas separadas propiedad de los programas.

### Inicio Rápido de la Documentación de Solana

[https://solana.com/docs/intro/quick-start](https://solana.com/docs/intro/quick-start)

Comienza aquí. Esta guía oficial te lleva a través de cuentas, transacciones y programas en menos de una hora. Cubre el modelo mental central — cómo los programas procesan instrucciones, cómo las cuentas almacenan estado y cómo las transacciones agrupan todo. Al final habrás construido y desplegado un programa simple.

### Conceptos Fundamentales de la Documentación de Solana

[https://solana.com/docs#start-learning](https://solana.com/docs#start-learning)

Una vez que tengas lo básico, profundiza en el modelo de cuentas, Program Derived Addresses (PDAs), Cross-Program Invocations (CPIs) y el ciclo de vida de las transacciones. Estos conceptos son la base de todo lo que vas a construir. Presta especial atención a las PDAs — son la respuesta de Solana al almacenamiento de contratos y las usarás constantemente.

---

## Paso 2: Configura tu Entorno

Tienes dos opciones: configuración local para desarrollo serio, o basada en navegador para experimentación rápida.

### Guía de Instalación (Configuración Local)

[https://solana.com/docs/intro/installation](https://solana.com/docs/intro/installation)

Esto cubre la instalación del CLI de Solana, el framework Anchor y el toolchain de Rust en tu máquina. El desarrollo local te da control total — debugging, configuraciones de test personalizadas y la capacidad de usar herramientas de IA como solana-claude. Si planeas construir algo más allá de un proyecto de prueba, configura localmente.

### Solana Playground (IDE en Navegador)

[https://beta.solpg.io/](https://beta.solpg.io/)

Si quieres saltar la configuración local por completo o simplemente experimentar con una idea, Solana Playground te da un entorno de desarrollo completo en tu navegador. Incluye una wallet integrada, compilador de Rust, desplegador de programas e incluso un framework de testing. Puedes escribir, compilar, desplegar y testear programas Anchor sin instalar nada. Es excelente para aprender y prototipar, aunque eventualmente querrás una configuración local para trabajo en producción.

---

## Paso 3: Construye Algo

La teoría solo se fija cuando la aplicas. Estos recursos te dan proyectos concretos para construir y patrones para consultar.

### Cookbook para Desarrolladores

[https://solana.com/developers/cookbook](https://solana.com/developers/cookbook)

Una colección de referencia con fragmentos de código y patrones para tareas comunes de desarrollo en Solana. ¿Necesitas crear un token? ¿Enviar una transacción? ¿Derivar una PDA? El cookbook tiene implementaciones listas para copiar y pegar. Piénsalo como un libro de recetas que mantienes abierto mientras construyes — no es un tutorial para leer de principio a fin, sino un recurso para buscar cuando necesites implementar algo específico.

### Construye una dApp CRUD

[https://solana.com/developers/guides/dapps/journal](https://solana.com/developers/guides/dapps/journal)

Un tutorial completo de principio a fin que te guía en la construcción de una aplicación de diario con un programa Anchor on-chain y un frontend en React. Aprenderás cómo definir estructuras de cuentas, escribir manejadores de instrucciones, generar clientes TypeScript y conectar una wallet. Este es el mejor primer proyecto para entender el stack completo.

### Conectar una Wallet en React

[https://solana.com/developers/cookbook/wallets/connect-wallet-react](https://solana.com/developers/cookbook/wallets/connect-wallet-react)

Toda dApp necesita integración de wallet. Esta guía cubre el wallet adapter de Solana — cómo configurar providers, detectar wallets instaladas, conectar/desconectar y firmar transacciones. Si estás construyendo un frontend, consultarás este patrón repetidamente.

### Colección de Guías para Desarrolladores

[https://solana.com/developers/guides](https://solana.com/developers/guides)

La colección completa de guías oficiales para desarrolladores de la Solana Foundation. Cubre desde la creación básica de tokens hasta temas avanzados como compressed NFTs, staking y Actions/Blinks. Explora por tema cuando estés listo para ir más allá de lo básico. Cada guía es autocontenida e incluye código funcional.

---

## Paso 4: Sube de Nivel con Herramientas de IA

Una vez que domines los fundamentos, las herramientas de IA pueden acelerar dramáticamente tu ciclo de desarrollo — desde generación de código y auditorías de seguridad hasta consultas de documentación en tiempo real y queries de datos on-chain.

### solana-claude

[https://github.com/SuperteamBrazil/solana-claude](https://github.com/SuperteamBrazil/solana-claude)

Esta es la herramienta de mayor impacto que puedes agregar a tu flujo de trabajo de desarrollo en Solana. Una sola instalación te da 15 agentes de IA especializados (arquitecto, anchor-engineer, pinocchio-engineer, frontend-engineer, auditor de seguridad y más), 24+ comandos slash para tareas comunes (build, audit, deploy, scaffold, test) y 6 servidores MCP preconfigurados que le dan a tu asistente de IA acceso en tiempo real a documentación de Solana, datos on-chain y referencias de bibliotecas. Transforma Claude Code de un asistente de propósito general a un compañero de desarrollo Solana que entiende el ecosistema en profundidad. Consulta la página de [Desarrollo Asistido por IA](ai-assisted-development.md) para el desglose completo.

---

## Orden Recomendado

Para desarrolladores que vienen de otros ecosistemas, aquí está el camino resumido:

1. Lee la documentación de Inicio Rápido y Conceptos Fundamentales (2-3 horas)
2. Instala el CLI de Solana y Anchor localmente, o usa Solana Playground
3. Construye el tutorial de la dApp CRUD de principio a fin
4. Instala solana-claude y comienza a usar desarrollo asistido por IA
5. Elige un proyecto real y usa el Cookbook + Guías para Desarrolladores como referencia
6. Explora [Cursos y Educación](courses-and-education.md) para un aprendizaje estructurado más profundo
