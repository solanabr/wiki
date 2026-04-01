# Desarrollo Asistido por IA

Las herramientas de IA están transformando el desarrollo en Solana. Generación de código, consulta de documentación en tiempo real, queries de datos on-chain, auditoría de seguridad y automatización del flujo de trabajo de desarrollo — ya no son funcionalidades experimentales sino herramientas de producción que los mejores desarrolladores de Solana usan a diario. El equipo de Superteam Brazil ha invertido fuertemente en esta área, y esta página refleja tanto el ecosistema más amplio como nuestras propias contribuciones.

La clave es que los asistentes de IA para código son tan buenos como el contexto que tienen. Una IA de propósito general conoce Solana por sus datos de entrenamiento, que pueden estar desactualizados o incompletos. Los servidores MCP y las configuraciones especializadas dan a los asistentes de IA acceso en tiempo real a documentación actual, datos blockchain en vivo y conocimiento específico del dominio que hace que su output sea dramáticamente más útil.

---

## solana-claude — El Entorno de Desarrollo IA Completo

[https://github.com/SuperteamBrazil/solana-claude](https://github.com/SuperteamBrazil/solana-claude)

solana-claude es la herramienta de mayor impacto que puedes agregar a tu flujo de trabajo de desarrollo en Solana. Es una configuración completa de Claude Code que transforma tu entorno de desarrollo en un workspace especializado de Solana con una sola instalación. Todo está preconfigurado — agentes, comandos, servidores MCP, reglas de lenguaje y patrones de flujo de trabajo.

### Lo que Obtienes

**15 Agentes Especializados**

Cada agente es una persona de IA con conocimiento profundo de su dominio, precargado con la documentación, patrones y restricciones relevantes:

- **solana-architect** -- Diseño de sistemas, planificación de modelos de cuentas, esquemas de PDA, arquitectura de CPI
- **anchor-engineer** -- Implementación de programas Anchor, constraints, generación de IDL, clientes TypeScript
- **pinocchio-engineer** -- Programas zero-copy, optimización de CU, validación manual, código unsafe
- **defi-engineer** -- Integración de protocolos DeFi, matemáticas de AMM, patrones de oráculos, diseño de vaults
- **solana-frontend-engineer** -- dApps React/Next.js, wallet adapter, web3.js, gestión de estado
- **game-architect** -- Diseño de juegos on-chain, patrones ECS, integración con MagicBlock
- **unity-engineer** -- Solana.Unity SDK, integración C#, builds móviles
- **mobile-engineer** -- Mobile Wallet Adapter, React Native, envío a dApp Store
- **rust-backend-engineer** -- Servicios off-chain en Rust, indexadores, keepers, constructores de transacciones
- **devops-engineer** -- Pipelines de deployment, gestión de RPC, monitoreo, builds verificables
- **token-engineer** -- Extensiones de Token-2022, diseño de stablecoins, estándares de NFT, tokenomics
- **solana-researcher** -- Análisis del ecosistema, investigación de protocolos, revisión de sRFCs
- **solana-qa-engineer** -- Estrategia de testing, arneses LiteSVM/Mollusk, fuzz testing, cobertura
- **tech-docs-writer** -- Documentación de API, docs de arquitectura, READMEs, guías para desarrolladores
- **solana-guide** -- Recomendaciones de rutas de aprendizaje, explicaciones de conceptos, onboarding

**24+ Comandos Slash**

Comandos para cada etapa del ciclo de vida del desarrollo:

- `/build-program` -- Compilar con `anchor build` o `cargo build-sbf`, manejar errores
- `/audit-solana` -- Auditoría de seguridad contra patrones de vulnerabilidad comunes
- `/profile-cu` -- Medir y optimizar el consumo de unidades de cómputo
- `/deploy` -- Deployment guiado a devnet o mainnet con puertas de confirmación
- `/scaffold` -- Generar estructura de proyecto a partir de una descripción
- `/test-rust` -- Ejecutar tests de Rust con integración LiteSVM/Mollusk
- `/test-ts` -- Ejecutar tests de integración en TypeScript
- `/quick-commit` -- Creación automatizada de ramas y commits siguiendo convenciones
- `/diff-review` -- Revisar cambios por AI slop, comentarios excesivos y calidad de código
- Y más para formato, linting, documentación y automatización de flujos de trabajo

**6 Servidores MCP Integrados**

Todos configurados automáticamente durante la instalación, con API keys gestionadas a través de `.env`:

- **Helius MCP** -- 60+ herramientas para llamadas RPC, queries a la API DAS, gestión de webhooks, estimación de priority fees, consulta de metadata de tokens y parsing de transacciones. Esto le da a tu asistente de IA acceso directo a datos de Solana en vivo — puede verificar balances, buscar metadata de tokens, consultar colecciones de NFTs y estimar comisiones de transacciones sin que cambies a una terminal.

- **solana-dev MCP** -- Servidor MCP oficial de la Solana Foundation que proporciona acceso a documentación actual, guías para desarrolladores, referencias de API y orientación sobre Anchor. Cuando tu asistente de IA responde una pregunta sobre Solana, consulta la documentación más reciente en lugar de datos de entrenamiento potencialmente desactualizados.

- **Context7** -- Consulta de documentación de bibliotecas en tiempo real. Cuando estás usando una biblioteca (Anchor, web3.js, SPL Token), Context7 le da a la IA acceso a la documentación actual de la API para esa versión específica, eliminando el problema de referencias de API obsoletas o inventadas.

- **Puppeteer** -- Automatización de navegador para testing de dApps. La IA puede abrir tu frontend, conectar wallets, navegar flujos y verificar que tu dApp funciona de principio a fin en un navegador real.

- **context-mode** -- Comprime respuestas RPC grandes y logs de compilación para ahorrar espacio en la ventana de contexto. Cuando estás debuggeando una transacción fallida o un error de compilación, la salida raw puede ser de miles de líneas. context-mode extrae la información relevante para que la IA pueda procesarla sin quedarse sin contexto.

- **memsearch** -- Memoria persistente con búsqueda semántica entre sesiones. La IA recuerda decisiones que tomaste, bugs que corregiste y patrones que estableciste en sesiones anteriores. Esto significa que no tienes que re-explicar la arquitectura de tu proyecto cada vez que inicias una nueva conversación.

**Reglas Específicas por Lenguaje**

Estándares de código y restricciones preconfiguradas para Rust, Anchor, Pinocchio, TypeScript y C#/.NET. Estas reglas aplican mejores prácticas de seguridad (aritmética checked, validación de cuentas, sin `unwrap()` en programas), convenciones de nombres, estructura de proyecto y patrones de testing. La IA sigue estas reglas automáticamente, produciendo código que cumple con los estándares de tu proyecto.

**Patrones de Equipos de Agentes**

Flujos de trabajo multi-agente preconstruidos para escenarios de desarrollo comunes:

- **program-ship** -- Arquitecto diseña, ingeniero implementa, QA valida
- **full-stack** -- Programa + frontend + tests en flujo de trabajo coordinado
- **audit-and-fix** -- Auditoría de seguridad seguida de remediación guiada
- **game-ship** -- Arquitecto de juegos + ingeniero Unity + QA para desarrollo de juegos
- **research-and-build** -- Fase de investigación seguida de implementación
- **defi-compose** -- Diseño de protocolo DeFi + integración + testing
- **token-launch** -- Diseño de token + implementación + deployment

Mantenido por @kauenet.

---

## Servidores MCP

Para desarrolladores que usan herramientas de IA diferentes a Claude Code, o que quieren configurar servidores MCP individualmente en lugar de hacerlo a través de solana-claude, estos servidores pueden configurarse de forma independiente.

### Solana MCP Server

[https://mcp.solana.com/](https://mcp.solana.com/)

El servidor MCP oficial de la Solana Foundation. Proporciona búsqueda de documentación en toda la documentación para desarrolladores de Solana, referencias de API para el JSON-RPC de Solana, orientación sobre el framework Anchor y contenido de guías para desarrolladores. Esta es la fuente autorizada para documentación de Solana en contextos de IA — consulta el mismo contenido que alimenta solana.com/docs, garantizando precisión y actualidad.

Usa este servidor para asegurar que tu asistente de IA siempre tenga acceso a la documentación actual de Solana en lugar de depender de datos de entrenamiento que pueden tener meses o años de antigüedad.

### Helius MCP Server

[https://github.com/helius-labs/helius-mcp-server](https://github.com/helius-labs/helius-mcp-server)

Más de 60 herramientas que dan a los asistentes de IA acceso directo a datos de la blockchain de Solana a través de la infraestructura de Helius. Las capacidades incluyen llamadas RPC estándar (getBalance, getTransaction, getAccountInfo), API DAS para consultas de NFTs y compressed NFTs, creación y gestión de webhooks, estimación de priority fees, parsing mejorado de transacciones y consulta de metadata de tokens.

Este servidor es lo que hace que los asistentes de IA sean genuinamente útiles para desarrollo blockchain. En lugar de copiar firmas de transacciones y pegarlas en un explorador de bloques, puedes pedirle a la IA que busque una transacción, decodifique sus instrucciones y explique qué pasó — todo dentro de tu editor.

### Context7

[https://github.com/upstash/context7](https://github.com/upstash/context7)

Consulta de documentación de bibliotecas en tiempo real que resuelve uno de los problemas más frustrantes con los asistentes de IA para código: referencias de API obsoletas. Cuando tu IA sugiere código usando una biblioteca, Context7 le permite verificar la documentación actual real para esa versión de la biblioteca. Esto significa no más firmas de funciones inventadas, llamadas a métodos deprecados o tipos de parámetros incorrectos.

Context7 soporta documentación para las principales bibliotecas de Solana incluyendo Anchor, web3.js, SPL Token y muchas otras. No es específico de Solana — funciona con cualquier biblioteca que tenga documentación publicada.

---

## Frameworks de Agentes IA

### Solana Agent Kit

[https://github.com/sendaifun/solana-agent-kit](https://github.com/sendaifun/solana-agent-kit)

Un framework para construir agentes de IA autónomos que interactúan con Solana. El Agent Kit proporciona herramientas que permiten a los agentes de IA realizar acciones on-chain — intercambiar tokens vía Jupiter, transferir SOL y tokens SPL, desplegar programas, crear mints de tokens, gestionar NFTs y más. Está diseñado para construir aplicaciones impulsadas por IA que pueden tomar acciones autónomas en Solana.

Los casos de uso incluyen bots de trading IA, gestión automatizada de portafolios, servicio al cliente impulsado por IA que puede procesar reembolsos en tokens, y cualquier aplicación donde un agente de IA necesite ejecutar transacciones de Solana basándose en instrucciones de lenguaje natural o disparadores programáticos.

### GOAT SDK

[https://github.com/ArcadeLabsInc/goat](https://github.com/ArcadeLabsInc/goat)

Great Onchain Agent Toolkit — un framework para dar a los agentes de IA capacidades crypto en múltiples cadenas incluyendo Solana. GOAT proporciona una arquitectura de plugins donde cada plugin expone herramientas on-chain (swap, transferencia, staking, préstamos) que los agentes de IA pueden invocar. Soporta múltiples backends de LLM y se integra con frameworks de agentes populares como LangChain y CrewAI.

Usa GOAT cuando construyas agentes de IA multi-chain o cuando quieras una arquitectura basada en plugins para componer capacidades blockchain.

### Eliza (ai16z)

[https://github.com/ai16z/eliza](https://github.com/ai16z/eliza)

Un framework para construir agentes de IA con presencia en redes sociales y capacidades on-chain, creado por la comunidad ai16z. Los agentes Eliza pueden interactuar en Twitter, Discord y Telegram mientras ejecutan transacciones en Solana. El framework incluye configuración de personajes, sistemas de memoria y definiciones de acciones que combinan interacción social con operaciones blockchain.

Usa Eliza cuando construyas agentes de IA que necesiten tanto presencia social como capacidades on-chain — bots de comunidad que pueden enviar propinas en tokens, personalidades de IA que tradean basándose en señales sociales, o agentes autónomos con identidades públicas.

---

## ¿Qué es MCP?

Model Context Protocol (MCP) es un estándar abierto que permite a los asistentes de IA para código acceder a herramientas externas, fuentes de datos y APIs a través de una interfaz unificada. Piénsalo como un sistema de plugins para IA — cada servidor MCP expone un conjunto de herramientas (funciones) que la IA puede llamar cuando necesita información o quiere realizar una acción.

Para desarrollo en Solana, los servidores MCP permiten que tu asistente de IA:

- **Consulte datos blockchain en tiempo real** -- Verificar balances, buscar transacciones, obtener datos de cuentas y consultar metadata de tokens sin salir de tu editor
- **Busque documentación actual** -- Acceder a la documentación más reciente de Solana, guías de Anchor y referencias de bibliotecas en lugar de depender de datos de entrenamiento
- **Gestione infraestructura** -- Crear webhooks, estimar priority fees e interactuar con servicios RPC directamente
- **Automatice testing** -- Abrir navegadores, interactuar con dApps y verificar el comportamiento del frontend

solana-claude agrupa todos los principales servidores MCP de Solana en una sola instalación con API keys y conexiones preconfiguradas. Si instalas solana-claude, no necesitas configurar servidores MCP individualmente — todos están incluidos y conectados automáticamente.

---

## Herramientas de Desarrollo con IA

### Cursor + Solana

[https://www.cursor.com/](https://www.cursor.com/)

Un editor de código nativo de IA construido sobre VS Code que soporta servidores MCP y system prompts personalizados. Mientras solana-claude está diseñado para Claude Code (basado en terminal), Cursor proporciona una alternativa basada en GUI con capacidades similares de desarrollo asistido por IA. Puedes configurar Cursor con reglas de contexto específicas para Solana y servidores MCP para una experiencia de desarrollo visual. La combinación de las funciones de IA inline de Cursor con servidores MCP de Solana es cada vez más popular entre desarrolladores Solana enfocados en frontend.

### Solana AI Hub

El ecosistema creciente de herramientas de IA construidas específicamente para desarrolladores Solana. Patrones clave emergentes incluyen:

- **Scaffolding de programas generado por IA** — Herramientas que generan boilerplate de programas Anchor a partir de descripciones en lenguaje natural de la funcionalidad del programa
- **Optimización automatizada de CU** — Análisis de IA del uso de compute units con sugerencias específicas de refactorización
- **Debugging de transacciones** — Análisis de transacciones con IA que explica qué pasó, por qué falló y cómo corregirlo
- **Análisis de seguridad** — Revisión de código asistida por IA que verifica vulnerabilidades comunes de Solana (verificaciones de firmante faltantes, sustitución de PDA, desbordamiento aritmético)

Estas capacidades están disponibles a través de los agent teams y slash commands de solana-claude, pero los patrones están siendo adoptados en el ecosistema más amplio de herramientas de IA también.
