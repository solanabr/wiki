# solana-claude-config

**GitHub**: [solanabr/solana-claude-config](https://github.com/solanabr/solana-claude-config)
**Status**: Em desenvolvimento ativo, lancamento publico
**Mantido por**: @kauenet

## Por Que Existe

Assistentes de codigo com IA tem um problema com Solana. Seus dados de treinamento estao meses ou anos atrasados em relacao a um ecossistema que evolui rapidamente, o que significa que produzem codigo que parece correto mas nao e: aritmetica sem verificacao que transborda silenciosamente, validacao de owner de contas ausente, padroes obsoletos de web3.js 1.x quando o projeto usa @solana/kit, assinaturas de API alucinadas para versoes do Anchor que nao existem mais. A IA escreve a coisa errada com confianca, e o desenvolvedor precisa saber o suficiente para perceber.

O segundo problema e o desperdicio de contexto. Um assistente de proposito geral carrega tudo e nao filtra nada. Perguntar sobre um padrao de CPI em Pinocchio traz conhecimento irrelevante de React. Perguntar sobre metadados de tokens carrega regras de desenvolvimento de jogos. Cada token gasto em contexto que nao se aplica a tarefa atual e um token que nao pode ser usado para resolver o problema real.

solana-claude-config resolve ambos os problemas. E uma configuracao do Claude Code que codifica conhecimento profundo do dominio Solana -- APIs atuais, padroes de seguranca corretos, regras especificas por linguagem -- e entrega esse conhecimento de forma eficiente por meio de uma arquitetura consciente do uso de tokens. O contexto certo carrega para a tarefa certa, e nada mais.

## Filosofia de Design

A configuracao e construida em torno de um unico principio: carregar apenas o que o trabalho atual exige.

**CLAUDE.md curto** (~110 linhas) como contexto de mensagem do usuario. Apenas regras essenciais, principios de seguranca e instrucoes de workflow ficam aqui. O arquivo funciona como um orcamento de tokens, nao como um manual de referencia.

**Carregamento progressivo de skills** via `.claude/skills/`. Conhecimento especializado -- padroes de protocolos DeFi, convencoes de desenvolvimento de jogos, checklists de auditoria de seguranca -- carrega sob demanda por meio de slash commands ou invocacoes de agentes, nao em cada prompt.

**Carregamento lazy de regras** via `.claude/rules/`. Padroes especificos por linguagem carregam apenas quando voce esta trabalhando naquela linguagem. As regras de Rust sao invisiveis durante um refactor de TypeScript. As regras de C# sao invisiveis durante uma auditoria de um programa Anchor.

**Contexto delimitado por agente.** Cada um dos 15 agentes carrega apenas as ferramentas e o conhecimento relevantes para seu papel. O unity-engineer tem regras de C#/.NET e padroes do Solana.Unity-SDK. O pinocchio-engineer tem padroes zero-copy e validacao manual. Nenhum carrega o contexto do outro.

**CLAUDE.local.md** para notas temporarias. Privado, no gitignore, escrito pelo Claude durante as sessoes. Observacoes do projeto e resumos de sessao que nao devem ser compartilhados com a equipe.

**Suporte a monorepos.** Arquivos CLAUDE.md em subdiretorios para decisoes de arquitetura delimitadas. O Claude Code os carrega automaticamente ao trabalhar naquele diretorio.

## O Que Voce Recebe

### 15 Agentes Especializados

| Agente | Proposito |
|---|---|
| solana-architect | Design de sistemas, estruturas de contas, esquemas de PDA, composabilidade cross-program |
| anchor-engineer | Desenvolvimento de programas Anchor com geracao de IDL e padroes padronizados |
| pinocchio-engineer | Otimizacao de CU com framework zero-copy (80-95% de reducao de CU vs Anchor) |
| defi-engineer | Integracao de protocolos DeFi -- Jupiter, Drift, Kamino, Raydium, Orca, Meteora |
| solana-frontend-engineer | Frontends de dApps com React/Next.js e integracao de wallet adapter |
| game-architect | Design de jogos on-chain, arquitetura Unity, ecossistema PlaySolana |
| unity-engineer | Unity/C# com Solana.Unity-SDK, integracao de wallets, exibicao de NFTs |
| mobile-engineer | React Native e Expo para dApps mobile em Solana |
| rust-backend-engineer | Servicos async em Rust com Axum/Tokio para backends Solana |
| devops-engineer | CI/CD, Docker, monitoramento, gerenciamento de RPC, Cloudflare Workers |
| token-engineer | Extensoes Token-2022, economia de tokens, transfer hooks, compliance |
| solana-researcher | Pesquisa aprofundada sobre protocolos, SDKs e ferramentas do ecossistema |
| solana-qa-engineer | Testing (Mollusk, LiteSVM, Surfpool, Trident), profiling de CU, fuzzing |
| tech-docs-writer | READMEs, docs de API, guias de integracao, documentacao de arquitetura |
| solana-guide | Educacao para desenvolvedores, tutoriais, trilhas de aprendizado |

### 24 Slash Commands

**Building**
- `/build-program` -- Build e verificacao de programas Solana
- `/scaffold` -- Scaffolding de projetos a partir de templates
- `/build-app` -- Setup de aplicacao full-stack
- `/build-unity` -- Scaffolding de projetos de jogos Unity

**Testing e Qualidade**
- `/test-rust` -- Executor de testes Rust com cobertura
- `/test-ts` -- Executor de testes TypeScript
- `/test-dotnet` -- Executor de testes .NET/Unity
- `/test-and-fix` -- Executar testes e corrigir falhas automaticamente
- `/audit-solana` -- Auditoria de seguranca para codigo on-chain
- `/profile-cu` -- Profiling e otimizacao de compute units
- `/benchmark` -- Benchmarking de performance
- `/diff-review` -- Code review e deteccao de AI slop

**Deployment**
- `/deploy` -- Deploy em devnet e mainnet com gates de confirmacao
- `/setup-ci-cd` -- Configuracao de pipelines CI/CD
- `/setup-mcp` -- Configuracao de servidores MCP e gerenciamento de keys

**Workflow**
- `/quick-commit` -- Criacao de branches e automacao de commits
- `/explain-code` -- Explicar padroes desconhecidos de Solana
- `/write-docs` -- Gerar documentacao a partir do codigo fonte
- `/plan-feature` -- Planejamento de arquitetura antes da implementacao
- `/generate-idl-client` -- Geracao de cliente TypeScript a partir de IDL
- `/migrate-web3` -- Migrar codigo de web3.js 1.x para @solana/kit
- `/update` -- Atualizar configuracao e skills para a versao mais recente
- `/resync` -- Ressincronizar definicoes de agentes e regras
- `/cleanup` -- Remover contexto obsoleto e arquivos temporarios

### 9 Submodulos Externos de Skills

Cada submodulo e um git submodule obtido de um provedor autorizado, mantendo o conhecimento do dominio atualizado sem incorpora-lo diretamente na configuracao.

| Submodulo | Fonte | Proposito |
|---|---|---|
| solana-dev-skill | Solana Foundation | Padroes oficiais de desenvolvimento Solana |
| sendai-skill | SendAI | Framework de agentes de IA para Solana |
| solana-security-skill | Trail of Bits (baseado em) | Padroes de auditoria de seguranca e deteccao de vulnerabilidades |
| cloudflare-skill | Cloudflare | Deploy em edge e padroes de Workers |
| colosseum-skill | Colosseum | Integracao com hackathons e aceleradoras |
| qedgen-skill | QEDGen | Padroes de verificacao formal |
| solana-mobile-skill | Solana Mobile | Padroes de desenvolvimento especificos para mobile |
| safe-solana-builder-skill | Comunidade | Padroes de codigo seguro e melhores praticas |
| solana-game-skill | Superteam Brazil | Desenvolvimento de jogos Unity para Solana |

### 6 Integracoes com Servidores MCP

| Servidor | Por Que Importa |
|---|---|
| Helius | 60+ ferramentas para RPC, DAS API, webhooks, priority fees e metadados de tokens -- dados on-chain em tempo real sem sair do editor |
| solana-dev | MCP oficial da Solana Foundation com docs atuais, guias e referencias de API -- a IA nunca alucina APIs obsoletas |
| Context7 | Busca documentacao atualizada de qualquer dependencia, nao snapshots de dados de treinamento |
| Playwright | Automacao de navegador para testing de dApps -- abre seu frontend, conecta wallets e verifica fluxos em um navegador real |
| context-mode | Comprime respostas RPC grandes e logs de build -- economiza janela de contexto para o trabalho real |
| memsearch | Memoria persistente com busca semantica -- lembra o contexto do projeto entre sessoes |

### Regras Especificas por Linguagem

Padroes de codigo aplicados que carregam apenas quando relevantes para a tarefa atual:

- **Rust** -- Aritmetica checked, propagacao correta de erros, sem `unwrap()` em codigo de producao
- **Anchor** -- Constraints de validacao de contas, armazenamento de PDA bumps, validacao de target de CPI, recarga de contas apos CPI
- **Pinocchio** -- Padroes de acesso zero-copy, validacao manual com `TryFrom`, discriminators de byte unico
- **TypeScript** -- Seguranca de tipos (`no any`), padroes async/await, integracao de wallet adapter, BigInt para u64
- **C#/.NET** -- Convencoes de Unity MonoBehaviour, padroes .NET 9, padroes de integracao do Solana.Unity-SDK

### Padroes de Equipes de Agentes

Workflows multi-agente que coordenam agentes especializados ao longo de um ciclo completo de desenvolvimento. Crie uma equipe com linguagem natural: `"Create an agent team: solana-architect for design, anchor-engineer for implementation, solana-qa-engineer for testing"`.

| Padrao | Fluxo | Caso de Uso |
|---|---|---|
| program-ship | architect → engineer → QA → deploy | Entregar um programa Solana completo |
| full-stack | architect → engineer → frontend → QA | Desenvolvimento de dApp ponta a ponta |
| audit-and-fix | QA → engineer → QA | Auditoria de seguranca com correcoes automatizadas |
| game-ship | game-architect → unity-engineer → QA | Jogo Unity com estado on-chain |
| research-and-build | researcher → architect → engineer | Implementacao orientada por pesquisa |
| defi-compose | researcher → defi-engineer → QA | Integracao DeFi multi-protocolo |
| token-launch | token-engineer → QA → deploy | Criacao de tokens com extensoes |

## Instalacao

**Fork do template** -- a abordagem recomendada para projetos novos. Faca fork de [solanabr/solana-claude-config](https://github.com/solanabr/solana-claude-config) no GitHub, personalize o `CLAUDE.md` para seu projeto e inicialize os submodulos de skills.

**Instalacao em uma linha** -- para adicionar a configuracao a um projeto existente:

```bash
curl -fsSL https://raw.githubusercontent.com/solanabr/solana-claude-config/main/install.sh | bash
```

**Setup manual** -- clone o repositorio e copie o diretorio `.claude/` e o `CLAUDE.md` para a raiz do seu projeto.

**Exportacao de agentes** -- o flag `--agents` exporta definicoes de agentes para uso com ferramentas nao-Claude que suportem o formato de especificacao de agentes.

## Stack Moderna (2026)

| Camada | Tecnologia |
|---|---|
| Programs | Anchor 0.31+ / Pinocchio |
| Frontend | Next.js 15 / React 19 / @solana/kit |
| Testing | Mollusk / LiteSVM / Surfpool / Trident |
| Mobile | React Native / Expo / Solana Mobile SDK |
| Games | Unity 6+ / Solana.Unity-SDK / PlaySolana |
| Backend | Rust (Axum/Tokio) / Helius API |
| Edge | Cloudflare Workers |

## Creditos

Este projeto nao seria possivel sem as organizacoes que publicam e mantem os submodulos de skills dos quais ele depende. Agradecimentos a **Solana Foundation** pelos padroes oficiais de desenvolvimento e o servidor MCP solana-dev, **SendAI** pelo framework de agentes de IA, **Trail of Bits** pela pesquisa de seguranca da qual este projeto se baseia, **Cloudflare** pelos padroes de deploy em edge, **Colosseum** pelas ferramentas de hackathon, **QEDGen** pelo trabalho de verificacao formal, **Solana Mobile** pelos padroes do SDK mobile, a **comunidade safe-solana-builder** pelas convencoes de codigo seguro, e **Superteam Brazil** pela integracao de desenvolvimento de jogos que deu inicio a este projeto.
