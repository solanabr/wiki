# Otros Proyectos

Proyectos menores y de soporte mantenidos por Superteam Brazil.

**Mantenido por**: @kauenet

---

## solana-glossary

**GitHub**: [solanabr/solana-glossary](https://github.com/solanabr/solana-glossary)

El glosario mas completo del ecosistema Solana — 1,059 terminos enriquecidos en 14 categorias, en ingles, portugues y espanol. Se distribuye como SDK npm y servidor MCP ([@stbr/solana-glossary](https://www.npmjs.com/package/@stbr/solana-glossary)) ademas de una aplicacion web (Solana Dev Copilot — un navegador del glosario en Vite + React con un copilot de IA).

Util para incorporar desarrolladores, alimentar agentes de IA con terminologia correcta y mantener la documentacion consistente.

---

## solana-skills

**GitHub**: [solanabr/solana-skills](https://github.com/solanabr/solana-skills)

Fork de [qedgen/solana-skills](https://github.com/qedgen/solana-skills) — la habilidad de agente de QEDGen para verificar formalmente programas de Solana con pruebas de Lean 4, incorporada como submodulo de Solana AI Kit.

El QEDGen upstream toma una especificacion declarativa de las garantias de un programa y genera artefactos de verificacion a partir de ella: tests de propiedades, harnesses de model-checking con Kani y pruebas formales en Lean 4. Soporta Anchor, Pinocchio y ensamblador sBPF, y puede auditar programas existentes para descubrir invariantes candidatas.

---

## solana-dev-skill

**GitHub**: [solanabr/solana-dev-skill](https://github.com/solanabr/solana-dev-skill)

La habilidad base de Claude Code para desarrollo general en Solana. Proporciona reglas base, comandos y configuraciones de agentes sobre los cuales [solana-claude](solana-claude.md) se construye.

Esta habilidad cubre el ciclo de desarrollo principal — compilar, formatear, lint, probar, desplegar — junto con principios de seguridad y estandares de codigo especificos de Solana para Rust y TypeScript.

---

## auditor-skill

**GitHub**: [solanabr/auditor-skill](https://github.com/solanabr/auditor-skill)

Una habilidad agentica de auditoria de seguridad para programas de Solana que modela el ciclo de vida completo de una firma de auditoria: definicion de alcance, revision, una prueba de concepto ejecutable para cada hallazgo y un parche de correccion entregado. Ejecuta 1,346 verificaciones en 20 checklists y evalua contra 131 vectores de ataque del mundo real, respaldada por un pre-escaner en Rust y memoria entre auditorias para que los trabajos repetidos se vuelvan mas precisos con el tiempo.

Usala antes de enviar cualquier programa a mainnet — complementa, pero no reemplaza, una auditoria profesional de terceros.

---

## solana-builder-mcp

**GitHub**: [solanabr/solana-builder-mcp](https://github.com/solanabr/solana-builder-mcp)

Un unico servidor MCP que empaqueta las principales habilidades e integraciones del ecosistema de Superteam Brazil en una sola distribucion segura. En lugar de configurar habilidades y servidores individuales, los builders apuntan su asistente de IA a un solo endpoint y obtienen el conjunto de herramientas curado — util para editores y agentes que soportan MCP pero no el sistema de skills de Claude Code.

---

## hacker-brainstorm

**GitHub**: [solanabr/hacker-brainstorm](https://github.com/solanabr/hacker-brainstorm)

Un asistente de brainstorm para hackathons de Solana. Te entrevista sobre tus habilidades e intereses, cruza referencias de proyectos ganadores anteriores y brechas actuales del ecosistema, y te ayuda a converger en una idea que valga la pena construir — el mismo proceso cubierto en [Consejos para Generar Ideas](../hackathon/tips-and-ideas.md), empaquetado como una habilidad de agente.

---

## solana-iceberg

**GitHub**: [solanabr/solana-iceberg](https://github.com/solanabr/solana-iceberg)

Un glosario interactivo de Solana estructurado como un iceberg de conocimiento — los terminos superficiales que todo usuario conoce en la cima, los internals del protocolo en las profundidades. Complementa a [solana-glossary](#solana-glossary) con una forma visual y exploratoria de mapear que tan profundo llega tu conocimiento de Solana y que aprender despues.

---

## content-gen-skill

**GitHub**: [solanabr/content-gen-skill](https://github.com/solanabr/content-gen-skill)

Una habilidad de Claude Code para producir contenido educativo de Solana/Web3 en ocho formatos — cursos, tutoriales, walkthroughs, explicaciones, ensayos, litepapers, especificaciones de slides y hilos para redes sociales — a partir de un tema, una audiencia y notas. Los cursos emiten un sistema de archivos validado con briefs por leccion, y cuando su habilidad hermana [writer-style-skill](https://github.com/solanabr/writer-style-skill) esta instalada, la prosa se procesa a traves de su motor de voz. Esta es la herramienta detras de gran parte del pipeline de contenido educativo de Superteam Brazil.
