# solana-claude

**GitHub**: [SuperteamBrazil/solana-claude](https://github.com/SuperteamBrazil/solana-claude)
**Status**: Em desenvolvimento ativo, lancamento publico
**Mantido por**: @kauenet

## Visao Geral

Uma configuracao abrangente do Claude Code que transforma o Claude Code em um ambiente de desenvolvimento especializado em Solana. Cobre a stack completa -- desde programas on-chain em Rust ate frontends em TypeScript, clientes de jogos em Unity e apps mobile.

## Funcionalidades

### 15 Agentes Especializados

Agentes criados para cada funcao no ciclo de desenvolvimento Solana:

- **solana-architect** -- Design de sistemas e decisoes de arquitetura
- **anchor-engineer** -- Desenvolvimento de programas com Anchor
- **pinocchio-engineer** -- Programas de alta performance com Pinocchio
- **defi-engineer** -- Implementacao de protocolos DeFi
- **solana-frontend-engineer** -- Frontends de dApps com TypeScript/React
- **game-architect** -- Design de jogos on-chain e planejamento de estado
- **unity-engineer** -- Desenvolvimento Unity/C# com Solana SDK
- **mobile-engineer** -- React Native e Expo para Solana mobile
- **rust-backend-engineer** -- Servicos off-chain em Rust
- **devops-engineer** -- Infraestrutura, CI/CD, deploy
- **token-engineer** -- Criacao, extensoes e gerenciamento de tokens
- **solana-researcher** -- Pesquisa e analise do ecossistema
- **solana-qa-engineer** -- Testes e garantia de qualidade
- **tech-docs-writer** -- Documentacao tecnica
- **solana-guide** -- Onboarding e educacao de desenvolvedores

### 24+ Comandos Slash

Workflows automatizados acessiveis via comandos slash:

- `/build-program` -- Build e verificacao de programas Solana
- `/audit-solana` -- Auditoria de seguranca para codigo on-chain
- `/profile-cu` -- Profiling de compute units
- `/deploy` -- Deploy para devnet e mainnet
- `/scaffold` -- Scaffolding de projetos
- `/test-rust` -- Execucao de testes Rust
- `/test-ts` -- Execucao de testes TypeScript
- `/quick-commit` -- Criacao de branch e automacao de commits
- `/diff-review` -- Code review e deteccao de AI slop
- `/setup-mcp` -- Configuracao de servidores MCP

### 6 Integracoes com Servidores MCP

- **Helius** -- 60+ ferramentas para RPC, DAS API, webhooks, priority fees e metadados de tokens
- **solana-dev** -- MCP oficial da Solana Foundation com docs, guias e referencias de API
- **Context7** -- Consulta atualizada de documentacao de bibliotecas
- **Puppeteer** -- Automacao de navegador para testes de dApps
- **context-mode** -- Comprime respostas RPC grandes e logs de build para economizar contexto
- **memsearch** -- Memoria persistente entre sessoes com busca semantica

### Regras por Linguagem

Padroes de codigo aplicados para cada linguagem na stack:

- **Rust** -- Aritmetica segura, tratamento de erros, sem `unwrap()` em producao
- **Anchor** -- Validacao de contas, gerenciamento de PDAs, seguranca em CPIs
- **Pinocchio** -- Padroes zero-copy, validacao manual, otimizacao de CU
- **TypeScript** -- Seguranca de tipos, padroes async, integracao com wallets
- **C#/.NET** -- Convencoes Unity, padroes .NET, campos serializados

### Padroes de Equipes de Agentes

Workflows multi-agente pre-configurados:

- **program-ship** -- Projetar, implementar, testar e fazer deploy de um programa
- **full-stack** -- Desenvolvimento ponta a ponta, do programa ao frontend
- **audit-and-fix** -- Auditoria de seguranca com correcao automatizada
- **game-ship** -- Pipeline de desenvolvimento de jogos
- **research-and-build** -- Implementacao orientada por pesquisa
- **defi-compose** -- Composicao de protocolos DeFi
- **token-launch** -- Workflow de criacao e lancamento de tokens

## Stack Tecnologica

- Claude Code
- MCP Protocol
- Shell scripting
