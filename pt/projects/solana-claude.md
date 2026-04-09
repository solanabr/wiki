# solana-claude-config

**GitHub**: [solanabr/solana-claude-config](https://github.com/solanabr/solana-claude-config)
**Status**: Em desenvolvimento ativo, lançamento público
**Mantido por**: @kauenet

## Por Que Existe

Assistentes de código com IA têm um problema com Solana. Seus dados de treinamento estão meses ou anos atrasados em relação a um ecossistema que evolui rapidamente, o que significa que produzem código que parece correto mas não é: aritmética sem verificação que transborda silenciosamente, validação de owner de contas ausente, padrões obsoletos de web3.js 1.x quando o projeto usa @solana/kit, assinaturas de API alucinadas para versões do Anchor que não existem mais. A IA escreve a coisa errada com confiança, e o desenvolvedor precisa saber o suficiente para perceber.

O segundo problema é o desperdício de contexto. Um assistente de propósito geral carrega tudo e não filtra nada. Perguntar sobre um padrão de CPI em Pinocchio traz conhecimento irrelevante de React. Perguntar sobre metadados de tokens carrega regras de desenvolvimento de jogos. Cada token gasto em contexto que não se aplica à tarefa atual é um token que não pode ser usado para resolver o problema real.

solana-claude-config resolve ambos os problemas. É uma configuração do Claude Code que codifica conhecimento profundo do domínio Solana -- APIs atuais, padrões de segurança corretos, regras específicas por linguagem -- e entrega esse conhecimento de forma eficiente por meio de uma arquitetura consciente do uso de tokens. O contexto certo carrega para a tarefa certa, e nada mais.

## Filosofia de Design

A configuração é construída em torno de um único princípio: carregar apenas o que o trabalho atual exige.

**CLAUDE.md curto** (~110 linhas) como contexto de mensagem do usuário. Apenas regras essenciais, princípios de segurança e instruções de workflow ficam aqui. O arquivo funciona como um orçamento de tokens, não como um manual de referência.

**Carregamento progressivo de skills** via `.claude/skills/`. Conhecimento especializado -- padrões de protocolos DeFi, convenções de desenvolvimento de jogos, checklists de auditoria de segurança -- carrega sob demanda por meio de slash commands ou invocações de agentes, não em cada prompt.

**Carregamento lazy de regras** via `.claude/rules/`. Padrões específicos por linguagem carregam apenas quando você está trabalhando naquela linguagem. As regras de Rust são invisíveis durante um refactor de TypeScript. As regras de C# são invisíveis durante uma auditoria de um programa Anchor.

**Contexto delimitado por agente.** Cada um dos 15 agentes carrega apenas as ferramentas e o conhecimento relevantes para seu papel. O unity-engineer tem regras de C#/.NET e padrões do Solana.Unity-SDK. O pinocchio-engineer tem padrões zero-copy e validação manual. Nenhum carrega o contexto do outro.

**CLAUDE.local.md** para notas temporárias. Privado, no gitignore, escrito pelo Claude durante as sessões. Observações do projeto e resumos de sessão que não devem ser compartilhados com a equipe.

**Suporte a monorepos.** Arquivos CLAUDE.md em subdiretórios para decisões de arquitetura delimitadas. O Claude Code os carrega automaticamente ao trabalhar naquele diretório.

## O Que Você Recebe

### 15 Agentes Especializados

| Agente | Propósito |
|---|---|
| solana-architect | Design de sistemas, estruturas de contas, esquemas de PDA, composabilidade cross-program |
| anchor-engineer | Desenvolvimento de programas Anchor com geração de IDL e padrões padronizados |
| pinocchio-engineer | Otimização de CU com framework zero-copy (80-95% de redução de CU vs Anchor) |
| defi-engineer | Integração de protocolos DeFi -- Jupiter, Drift, Kamino, Raydium, Orca, Meteora |
| solana-frontend-engineer | Frontends de dApps com React/Next.js e integração de wallet adapter |
| game-architect | Design de jogos on-chain, arquitetura Unity, ecossistema PlaySolana |
| unity-engineer | Unity/C# com Solana.Unity-SDK, integração de wallets, exibição de NFTs |
| mobile-engineer | React Native e Expo para dApps mobile em Solana |
| rust-backend-engineer | Serviços async em Rust com Axum/Tokio para backends Solana |
| devops-engineer | CI/CD, Docker, monitoramento, gerenciamento de RPC, Cloudflare Workers |
| token-engineer | Extensões Token-2022, economia de tokens, transfer hooks, compliance |
| solana-researcher | Pesquisa aprofundada sobre protocolos, SDKs e ferramentas do ecossistema |
| solana-qa-engineer | Testing (Mollusk, LiteSVM, Surfpool, Trident), profiling de CU, fuzzing |
| tech-docs-writer | READMEs, docs de API, guias de integração, documentação de arquitetura |
| solana-guide | Educação para desenvolvedores, tutoriais, trilhas de aprendizado |

### 24 Slash Commands

**Building**
- `/build-program` -- Build e verificação de programas Solana
- `/scaffold` -- Scaffolding de projetos a partir de templates
- `/build-app` -- Setup de aplicação full-stack
- `/build-unity` -- Scaffolding de projetos de jogos Unity

**Testing e Qualidade**
- `/test-rust` -- Executor de testes Rust com cobertura
- `/test-ts` -- Executor de testes TypeScript
- `/test-dotnet` -- Executor de testes .NET/Unity
- `/test-and-fix` -- Executar testes e corrigir falhas automaticamente
- `/audit-solana` -- Auditoria de segurança para código on-chain
- `/profile-cu` -- Profiling e otimização de compute units
- `/benchmark` -- Benchmarking de performance
- `/diff-review` -- Code review e detecção de AI slop

**Deployment**
- `/deploy` -- Deploy em devnet e mainnet com gates de confirmação
- `/setup-ci-cd` -- Configuração de pipelines CI/CD
- `/setup-mcp` -- Configuração de servidores MCP e gerenciamento de keys

**Workflow**
- `/quick-commit` -- Criação de branches e automação de commits
- `/explain-code` -- Explicar padrões desconhecidos de Solana
- `/write-docs` -- Gerar documentação a partir do código fonte
- `/plan-feature` -- Planejamento de arquitetura antes da implementação
- `/generate-idl-client` -- Geração de cliente TypeScript a partir de IDL
- `/migrate-web3` -- Migrar código de web3.js 1.x para @solana/kit
- `/update` -- Atualizar configuração e skills para a versão mais recente
- `/resync` -- Ressincronizar definições de agentes e regras
- `/cleanup` -- Remover contexto obsoleto e arquivos temporários

### 9 Submódulos Externos de Skills

Cada submódulo é um git submodule obtido de um provedor autorizado, mantendo o conhecimento do domínio atualizado sem incorporá-lo diretamente na configuração.

| Submódulo | Fonte | Propósito |
|---|---|---|
| solana-dev-skill | Solana Foundation | Padrões oficiais de desenvolvimento Solana |
| sendai-skill | SendAI | Framework de agentes de IA para Solana |
| solana-security-skill | Trail of Bits (baseado em) | Padrões de auditoria de segurança e detecção de vulnerabilidades |
| cloudflare-skill | Cloudflare | Deploy em edge e padrões de Workers |
| colosseum-skill | Colosseum | Integração com hackathons e aceleradoras |
| qedgen-skill | QEDGen | Padrões de verificação formal |
| solana-mobile-skill | Solana Mobile | Padrões de desenvolvimento específicos para mobile |
| safe-solana-builder-skill | Comunidade | Padrões de código seguro e melhores práticas |
| solana-game-skill | Superteam Brazil | Desenvolvimento de jogos Unity para Solana |

### 6 Integrações com Servidores MCP

| Servidor | Por Que Importa |
|---|---|
| Helius | 60+ ferramentas para RPC, DAS API, webhooks, priority fees e metadados de tokens -- dados on-chain em tempo real sem sair do editor |
| solana-dev | MCP oficial da Solana Foundation com docs atuais, guias e referências de API -- a IA nunca alucina APIs obsoletas |
| Context7 | Busca documentação atualizada de qualquer dependência, não snapshots de dados de treinamento |
| Playwright | Automação de navegador para testing de dApps -- abre seu frontend, conecta wallets e verifica fluxos em um navegador real |
| context-mode | Comprime respostas RPC grandes e logs de build -- economiza janela de contexto para o trabalho real |
| memsearch | Memória persistente com busca semântica -- lembra o contexto do projeto entre sessões |

### Regras Específicas por Linguagem

Padrões de código aplicados que carregam apenas quando relevantes para a tarefa atual:

- **Rust** -- Aritmética checked, propagação correta de erros, sem `unwrap()` em código de produção
- **Anchor** -- Constraints de validação de contas, armazenamento de PDA bumps, validação de target de CPI, recarga de contas após CPI
- **Pinocchio** -- Padrões de acesso zero-copy, validação manual com `TryFrom`, discriminators de byte único
- **TypeScript** -- Segurança de tipos (`no any`), padrões async/await, integração de wallet adapter, BigInt para u64
- **C#/.NET** -- Convenções de Unity MonoBehaviour, padrões .NET 9, padrões de integração do Solana.Unity-SDK

### Padrões de Equipes de Agentes

Workflows multi-agente que coordenam agentes especializados ao longo de um ciclo completo de desenvolvimento. Crie uma equipe com linguagem natural: `"Create an agent team: solana-architect for design, anchor-engineer for implementation, solana-qa-engineer for testing"`.

| Padrão | Fluxo | Caso de Uso |
|---|---|---|
| program-ship | architect → engineer → QA → deploy | Entregar um programa Solana completo |
| full-stack | architect → engineer → frontend → QA | Desenvolvimento de dApp ponta a ponta |
| audit-and-fix | QA → engineer → QA | Auditoria de segurança com correções automatizadas |
| game-ship | game-architect → unity-engineer → QA | Jogo Unity com estado on-chain |
| research-and-build | researcher → architect → engineer | Implementação orientada por pesquisa |
| defi-compose | researcher → defi-engineer → QA | Integração DeFi multi-protocolo |
| token-launch | token-engineer → QA → deploy | Criação de tokens com extensões |

## Instalação

**Fork do template** -- a abordagem recomendada para projetos novos. Faça fork de [solanabr/solana-claude-config](https://github.com/solanabr/solana-claude-config) no GitHub, personalize o `CLAUDE.md` para seu projeto e inicialize os submódulos de skills.

**Instalação em uma linha** -- para adicionar a configuração a um projeto existente:

```bash
curl -fsSL https://raw.githubusercontent.com/solanabr/solana-claude-config/main/install.sh | bash
```

**Setup manual** -- clone o repositório e copie o diretório `.claude/` e o `CLAUDE.md` para a raiz do seu projeto.

**Exportação de agentes** -- o flag `--agents` exporta definições de agentes para uso com ferramentas não-Claude que suportem o formato de especificação de agentes.

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

## Créditos

Este projeto não seria possível sem as organizações que publicam e mantêm os submódulos de skills dos quais ele depende. Agradecimentos à **Solana Foundation** pelos padrões oficiais de desenvolvimento e o servidor MCP solana-dev, **SendAI** pelo framework de agentes de IA, **Trail of Bits** pela pesquisa de segurança da qual este projeto se baseia, **Cloudflare** pelos padrões de deploy em edge, **Colosseum** pelas ferramentas de hackathon, **QEDGen** pelo trabalho de verificação formal, **Solana Mobile** pelos padrões do SDK mobile, a **comunidade safe-solana-builder** pelas convenções de código seguro, e **Superteam Brazil** pela integração de desenvolvimento de jogos que deu início a este projeto.
