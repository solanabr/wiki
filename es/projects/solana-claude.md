# solana-claude-config

**GitHub**: [solanabr/solana-claude-config](https://github.com/solanabr/solana-claude-config)
**Estado**: En desarrollo activo, lanzamiento publico
**Mantenido por**: @kauenet

## Por Que Existe

Los asistentes de codigo con IA tienen un problema con Solana. Sus datos de entrenamiento estan meses o anos detras de un ecosistema que avanza rapidamente, lo que significa que producen codigo que parece correcto pero no lo es: aritmetica sin verificar que desborda silenciosamente, validacion de owner de cuentas faltante, patrones obsoletos de web3.js 1.x cuando el proyecto usa @solana/kit, firmas de API alucinadas para versiones de Anchor que ya no existen. La IA escribe lo incorrecto con confianza, y el desarrollador necesita saber lo suficiente para detectarlo.

El segundo problema es el desperdicio de contexto. Un asistente de proposito general carga todo y no filtra nada. Preguntar sobre un patron de CPI en Pinocchio trae conocimiento irrelevante de React. Preguntar sobre metadatos de tokens carga reglas de desarrollo de juegos. Cada token gastado en contexto que no aplica a la tarea actual es un token que no puede dedicarse a resolver el problema real.

solana-claude-config resuelve ambos problemas. Es una configuracion de Claude Code que codifica conocimiento profundo del dominio de Solana — APIs actuales, patrones de seguridad correctos, reglas especificas por lenguaje — y entrega ese conocimiento de forma eficiente a traves de una arquitectura consciente del uso de tokens. El contexto correcto se carga para la tarea correcta, y nada mas.

## Filosofia de Diseno

La configuracion esta construida alrededor de un unico principio: cargar solo lo que el trabajo actual requiere.

**CLAUDE.md corto** (~110 lineas) como contexto de mensaje de usuario. Solo las reglas esenciales, principios de seguridad e instrucciones de flujo de trabajo viven aqui. El archivo funciona como un presupuesto de tokens, no como un manual de referencia.

**Carga progresiva de skills** via `.claude/skills/`. Conocimiento especializado — patrones de protocolos DeFi, convenciones de desarrollo de juegos, checklists de auditoria de seguridad — se carga bajo demanda a traves de slash commands o invocaciones de agentes, no en cada prompt.

**Carga lazy de reglas** via `.claude/rules/`. Estandares especificos por lenguaje se cargan solo cuando se trabaja en ese lenguaje. Las reglas de Rust son invisibles durante un refactor de TypeScript. Las reglas de C# son invisibles durante una auditoria de un programa Anchor.

**Contexto acotado por agente.** Cada uno de los 15 agentes carga solo las herramientas y conocimiento relevantes para su rol. El unity-engineer tiene reglas de C#/.NET y patrones de Solana.Unity-SDK. El pinocchio-engineer tiene patrones zero-copy y validacion manual. Ninguno carga el contexto del otro.

**CLAUDE.local.md** para notas temporales. Privado, en gitignore, escrito por Claude durante las sesiones. Observaciones del proyecto y resumenes de sesion que no deben compartirse con el equipo.

**Soporte para monorepos.** Archivos CLAUDE.md en subdirectorios para decisiones de arquitectura acotadas. Claude Code los carga automaticamente al trabajar en ese directorio.

## Que Incluye

### 15 Agentes Especializados

| Agente | Proposito |
|---|---|
| solana-architect | Diseno de sistemas, estructuras de cuentas, esquemas de PDA, composabilidad cross-program |
| anchor-engineer | Desarrollo de programas Anchor con generacion de IDL y patrones estandarizados |
| pinocchio-engineer | Optimizacion de CU con framework zero-copy (80-95% de reduccion de CU vs Anchor) |
| defi-engineer | Integracion de protocolos DeFi — Jupiter, Drift, Kamino, Raydium, Orca, Meteora |
| solana-frontend-engineer | Frontends de dApps con React/Next.js e integracion de wallet adapter |
| game-architect | Diseno de juegos on-chain, arquitectura Unity, ecosistema PlaySolana |
| unity-engineer | Unity/C# con Solana.Unity-SDK, integracion de wallets, visualizacion de NFTs |
| mobile-engineer | React Native y Expo para dApps mobile en Solana |
| rust-backend-engineer | Servicios async en Rust con Axum/Tokio para backends de Solana |
| devops-engineer | CI/CD, Docker, monitoreo, gestion de RPC, Cloudflare Workers |
| token-engineer | Extensiones Token-2022, economia de tokens, transfer hooks, compliance |
| solana-researcher | Investigacion profunda sobre protocolos, SDKs y herramientas del ecosistema |
| solana-qa-engineer | Testing (Mollusk, LiteSVM, Surfpool, Trident), profiling de CU, fuzzing |
| tech-docs-writer | READMEs, docs de API, guias de integracion, documentacion de arquitectura |
| solana-guide | Educacion para desarrolladores, tutoriales, rutas de aprendizaje |

### 24 Slash Commands

**Building**
- `/build-program` — Build y verificacion de programas Solana
- `/scaffold` — Scaffolding de proyectos desde templates
- `/build-app` — Setup de aplicacion full-stack
- `/build-unity` — Scaffolding de proyectos de juegos Unity

**Testing y Calidad**
- `/test-rust` — Ejecutor de tests en Rust con cobertura
- `/test-ts` — Ejecutor de tests en TypeScript
- `/test-dotnet` — Ejecutor de tests .NET/Unity
- `/test-and-fix` — Ejecutar tests y corregir fallos automaticamente
- `/audit-solana` — Auditoria de seguridad para codigo on-chain
- `/profile-cu` — Profiling y optimizacion de compute units
- `/benchmark` — Benchmarking de rendimiento
- `/diff-review` — Code review y deteccion de AI slop

**Deployment**
- `/deploy` — Deploy en devnet y mainnet con gates de confirmacion
- `/setup-ci-cd` — Configuracion de pipelines CI/CD
- `/setup-mcp` — Configuracion de servidores MCP y gestion de keys

**Workflow**
- `/quick-commit` — Creacion de ramas y automatizacion de commits
- `/explain-code` — Explicar patrones desconocidos de Solana
- `/write-docs` — Generar documentacion desde el codigo fuente
- `/plan-feature` — Planificacion de arquitectura antes de implementar
- `/generate-idl-client` — Generacion de cliente TypeScript desde IDL
- `/migrate-web3` — Migrar codigo de web3.js 1.x a @solana/kit
- `/update` — Actualizar configuracion y skills a la ultima version
- `/resync` — Resincronizar definiciones de agentes y reglas
- `/cleanup` — Eliminar contexto obsoleto y archivos temporales

### 9 Submodulos Externos de Skills

Cada submodulo es un git submodule obtenido de un proveedor autorizado, manteniendo el conocimiento del dominio actualizado sin integrarlo directamente en la configuracion.

| Submodulo | Fuente | Proposito |
|---|---|---|
| solana-dev-skill | Solana Foundation | Patrones oficiales de desarrollo en Solana |
| sendai-skill | SendAI | Framework de agentes de IA para Solana |
| solana-security-skill | Trail of Bits (basado en) | Patrones de auditoria de seguridad y deteccion de vulnerabilidades |
| cloudflare-skill | Cloudflare | Deploy en edge y patrones de Workers |
| colosseum-skill | Colosseum | Integracion con hackathons y aceleradoras |
| qedgen-skill | QEDGen | Patrones de verificacion formal |
| solana-mobile-skill | Solana Mobile | Patrones de desarrollo especificos para mobile |
| safe-solana-builder-skill | Comunidad | Patrones de codigo seguro y mejores practicas |
| solana-game-skill | Superteam Brazil | Desarrollo de juegos Unity para Solana |

### 6 Integraciones de Servidores MCP

| Servidor | Por Que Importa |
|---|---|
| Helius | 60+ herramientas para RPC, DAS API, webhooks, priority fees y metadatos de tokens — datos on-chain en tiempo real sin salir del editor |
| solana-dev | MCP oficial de la Solana Foundation con docs actuales, guias y referencias de API — la IA nunca alucina APIs obsoletas |
| Context7 | Obtiene documentacion actualizada de cualquier dependencia, no snapshots de datos de entrenamiento |
| Playwright | Automatizacion de navegador para testing de dApps — abre tu frontend, conecta wallets y verifica flujos en un navegador real |
| context-mode | Comprime respuestas RPC grandes y logs de build — ahorra ventana de contexto para el trabajo real |
| memsearch | Memoria persistente con busqueda semantica — recuerda el contexto del proyecto entre sesiones |

### Reglas Especificas por Lenguaje

Estandares de codigo forzados que se cargan solo cuando son relevantes para la tarea actual:

- **Rust** — Aritmetica checked, propagacion correcta de errores, sin `unwrap()` en codigo de produccion
- **Anchor** — Constraints de validacion de cuentas, almacenamiento de PDA bumps, validacion de target de CPI, recarga de cuentas despues de CPI
- **Pinocchio** — Patrones de acceso zero-copy, validacion manual con `TryFrom`, discriminators de un solo byte
- **TypeScript** — Seguridad de tipos (`no any`), patrones async/await, integracion de wallet adapter, BigInt para u64
- **C#/.NET** — Convenciones de Unity MonoBehaviour, estandares .NET 9, patrones de integracion de Solana.Unity-SDK

### Patrones de Equipos de Agentes

Flujos de trabajo multi-agente que coordinan agentes especializados a traves de un ciclo completo de desarrollo. Crea un equipo con lenguaje natural: `"Create an agent team: solana-architect for design, anchor-engineer for implementation, solana-qa-engineer for testing"`.

| Patron | Flujo | Caso de Uso |
|---|---|---|
| program-ship | architect → engineer → QA → deploy | Entregar un programa Solana completo |
| full-stack | architect → engineer → frontend → QA | Desarrollo de dApp de extremo a extremo |
| audit-and-fix | QA → engineer → QA | Auditoria de seguridad con correcciones automatizadas |
| game-ship | game-architect → unity-engineer → QA | Juego Unity con estado on-chain |
| research-and-build | researcher → architect → engineer | Implementacion basada en investigacion |
| defi-compose | researcher → defi-engineer → QA | Integracion DeFi multi-protocolo |
| token-launch | token-engineer → QA → deploy | Creacion de tokens con extensiones |

## Instalacion

**Fork del template** — el enfoque recomendado para proyectos nuevos. Haz fork de [solanabr/solana-claude-config](https://github.com/solanabr/solana-claude-config) en GitHub, personaliza el `CLAUDE.md` para tu proyecto e inicializa los submodulos de skills.

**Instalacion en una linea** — para agregar la configuracion a un proyecto existente:

```bash
curl -fsSL https://raw.githubusercontent.com/solanabr/solana-claude-config/main/install.sh | bash
```

**Setup manual** — clona el repositorio y copia el directorio `.claude/` y el `CLAUDE.md` a la raiz de tu proyecto.

**Exportacion de agentes** — el flag `--agents` exporta definiciones de agentes para usar con herramientas no-Claude que soporten el formato de especificacion de agentes.

## Stack Moderno (2026)

| Capa | Tecnologia |
|---|---|
| Programs | Anchor 0.31+ / Pinocchio |
| Frontend | Next.js 15 / React 19 / @solana/kit |
| Testing | Mollusk / LiteSVM / Surfpool / Trident |
| Mobile | React Native / Expo / Solana Mobile SDK |
| Games | Unity 6+ / Solana.Unity-SDK / PlaySolana |
| Backend | Rust (Axum/Tokio) / Helius API |
| Edge | Cloudflare Workers |

## Creditos

Este proyecto no seria posible sin las organizaciones que publican y mantienen los submodulos de skills de los que depende. Gracias a la **Solana Foundation** por los patrones oficiales de desarrollo y el servidor MCP solana-dev, **SendAI** por el framework de agentes de IA, **Trail of Bits** por la investigacion de seguridad de la que se nutre este proyecto, **Cloudflare** por los patrones de deploy en edge, **Colosseum** por las herramientas para hackathons, **QEDGen** por el trabajo de verificacion formal, **Solana Mobile** por los patrones del SDK mobile, la **comunidad safe-solana-builder** por las convenciones de codigo seguro, y **Superteam Brazil** por la integracion de desarrollo de juegos que inicio este proyecto.
