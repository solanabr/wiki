# Desenvolvimento Assistido por IA

Ferramentas de IA estao transformando o desenvolvimento Solana. Geracao de codigo, consulta de documentacao em tempo real, queries de dados on-chain, auditoria de seguranca e automacao de fluxos de desenvolvimento -- estes nao sao mais recursos experimentais, mas ferramentas de producao que os melhores desenvolvedores Solana usam diariamente. O time da Superteam Brasil investiu fortemente nesta area, e esta pagina reflete tanto o ecossistema mais amplo quanto nossas proprias contribuicoes.

O ponto chave e que assistentes de IA de codificacao sao tao bons quanto o contexto que possuem. Uma IA de proposito geral sabe sobre Solana a partir de seus dados de treinamento, que podem estar desatualizados ou incompletos. Servidores MCP e configuracoes especializadas dao aos assistentes de IA acesso em tempo real a documentacao atual, dados ao vivo da blockchain e conhecimento de dominio especifico que torna suas respostas dramaticamente mais uteis.

---

## solana-claude -- O Ambiente Completo de Desenvolvimento com IA

[https://github.com/solanabr/solana-claude-config](https://github.com/solanabr/solana-claude-config)

solana-claude e a ferramenta de maior impacto que voce pode adicionar ao seu fluxo de desenvolvimento Solana. E uma configuracao abrangente do Claude Code que transforma seu ambiente de desenvolvimento em um workspace especializado em Solana com uma unica instalacao. Tudo vem pre-configurado -- agentes, comandos, servidores MCP, regras de linguagem e padroes de fluxo de trabalho.

### O Que Voce Recebe

**15 Agentes Especializados**

Cada agente e uma persona de IA com conhecimento profundo do seu dominio, pre-carregado com documentacao, padroes e restricoes relevantes:

- **solana-architect** -- Design de sistemas, planejamento de modelo de contas, esquemas de PDA, arquitetura de CPI
- **anchor-engineer** -- Implementacao de programas Anchor, constraints, geracao de IDL, clientes TypeScript
- **pinocchio-engineer** -- Programas zero-copy, otimizacao de CU, validacao manual, codigo unsafe
- **defi-engineer** -- Integracao de protocolos DeFi, matematica de AMM, padroes de oracles, design de vaults
- **solana-frontend-engineer** -- dApps React/Next.js, wallet adapter, web3.js, gestao de estado
- **game-architect** -- Design de jogos on-chain, padroes ECS, integracao MagicBlock
- **unity-engineer** -- Solana.Unity SDK, integracao C#, builds mobile
- **mobile-engineer** -- Mobile Wallet Adapter, React Native, submissao para dApp Store
- **rust-backend-engineer** -- Servicos off-chain em Rust, indexadores, keepers, construtores de transacoes
- **devops-engineer** -- Pipelines de deploy, gestao de RPC, monitoramento, builds verificaveis
- **token-engineer** -- Extensoes Token-2022, design de stablecoins, padroes NFT, tokenomics
- **solana-researcher** -- Analise do ecossistema, pesquisa de protocolos, revisao de sRFCs
- **solana-qa-engineer** -- Estrategia de testes, harnesses LiteSVM/Mollusk, fuzz testing, cobertura
- **tech-docs-writer** -- Documentacao de APIs, documentacao de arquitetura, READMEs, guias para desenvolvedores
- **solana-guide** -- Recomendacoes de caminho de aprendizado, explicacoes de conceitos, onboarding

**24+ Comandos Slash**

Comandos para cada estagio do ciclo de desenvolvimento:

- `/build-program` -- Build com `anchor build` ou `cargo build-sbf`, tratamento de erros
- `/audit-solana` -- Auditoria de seguranca contra padroes comuns de vulnerabilidade
- `/profile-cu` -- Medir e otimizar consumo de compute units
- `/deploy` -- Deploy guiado para devnet ou mainnet com portoes de confirmacao
- `/scaffold` -- Gerar estrutura de projeto a partir de uma descricao
- `/test-rust` -- Executar testes Rust com integracao LiteSVM/Mollusk
- `/test-ts` -- Executar testes de integracao TypeScript
- `/quick-commit` -- Criacao automatizada de branch e commit seguindo convencoes
- `/diff-review` -- Revisar mudancas para AI slop, comentarios excessivos e qualidade de codigo
- E mais para formatacao, linting, documentacao e automacao de fluxos de trabalho

**6 Servidores MCP Integrados**

Todos configurados automaticamente durante a instalacao, com chaves de API gerenciadas via `.env`:

- **Helius MCP** -- 60+ ferramentas para chamadas RPC, queries na DAS API, gestao de webhooks, estimativa de priority fees, consulta de metadados de tokens e parsing de transacoes. Isso da ao seu assistente de IA acesso direto a dados ao vivo da Solana -- ele pode verificar saldos, consultar metadados de tokens, buscar colecoes NFT e estimar taxas de transacao sem voce mudar para um terminal.

- **solana-dev MCP** -- Servidor MCP oficial da Solana Foundation fornecendo acesso a documentacao atual, guias para desenvolvedores, referencias de API e orientacao sobre Anchor. Quando seu assistente de IA responde uma pergunta sobre Solana, ele puxa dos docs mais recentes em vez de dados de treinamento potencialmente desatualizados.

- **Context7** -- Consulta de documentacao de bibliotecas em tempo real. Quando voce esta usando uma biblioteca (Anchor, web3.js, SPL Token), o Context7 da a IA acesso a documentacao atual da API para aquela versao especifica, eliminando o problema de referencias de API obsoletas ou inventadas.

- **Playwright** -- Automacao de navegador para testes de dApps. A IA pode abrir seu frontend, conectar wallets, navegar por fluxos e verificar que seu dApp funciona de ponta a ponta em um navegador real.

- **context-mode** -- Comprime respostas RPC grandes e logs de build para economizar espaco na janela de contexto. Quando voce esta debugando uma transacao com falha ou um erro de build, a saida bruta pode ter milhares de linhas. context-mode extrai as informacoes relevantes para que a IA possa processa-las sem esgotar o contexto.

- **memsearch** -- Memoria persistente com busca semantica entre sessoes. A IA lembra decisoes que voce tomou, bugs que corrigiu e padroes que estabeleceu em sessoes anteriores. Isso significa que voce nao precisa re-explicar a arquitetura do seu projeto toda vez que inicia uma nova conversa.

**Regras Especificas por Linguagem**

Padroes de codificacao e restricoes pre-configurados para Rust, Anchor, Pinocchio, TypeScript e C#/.NET. Essas regras aplicam melhores praticas de seguranca (aritmetica verificada, validacao de contas, sem `unwrap()` em programas), convencoes de nomenclatura, estrutura de projetos e padroes de teste. A IA segue essas regras automaticamente, produzindo codigo que corresponde aos padroes do seu projeto.

**Padroes de Equipe de Agentes**

Fluxos multi-agente pre-construidos para cenarios comuns de desenvolvimento:

- **program-ship** -- Architect projeta, engineer implementa, QA valida
- **full-stack** -- Programa + frontend + testes em fluxo coordenado
- **audit-and-fix** -- Auditoria de seguranca seguida de remediacao guiada
- **game-ship** -- Game architect + unity engineer + QA para desenvolvimento de jogos
- **research-and-build** -- Fase de pesquisa seguida de implementacao
- **defi-compose** -- Design de protocolo DeFi + integracao + testes
- **token-launch** -- Design de token + implementacao + deploy

Mantido por @kauenet.

---

## Servidores MCP

Para desenvolvedores usando ferramentas de IA alem do Claude Code, ou que queiram configurar servidores MCP individualmente em vez de pelo solana-claude, esses servidores podem ser configurados independentemente.

### Solana MCP Server

[https://mcp.solana.com/](https://mcp.solana.com/)

O servidor MCP oficial da Solana Foundation. Ele fornece busca de documentacao em toda a documentacao de desenvolvedores Solana, referencias de API para o JSON-RPC Solana, orientacao sobre o framework Anchor e conteudo de guias para desenvolvedores. Esta e a fonte autoritativa de documentacao Solana em contextos de IA -- ela puxa do mesmo conteudo que alimenta solana.com/docs, garantindo precisao e atualidade.

Use este servidor para garantir que seu assistente de IA sempre tenha acesso a documentacao Solana atual em vez de depender de dados de treinamento que podem estar meses ou anos desatualizados.

### Helius MCP Server

[https://github.com/helius-labs/helius-mcp-server](https://github.com/helius-labs/helius-mcp-server)

60+ ferramentas que dao a assistentes de IA acesso direto a dados da blockchain Solana por meio da infraestrutura do Helius. As capacidades incluem chamadas RPC padrao (getBalance, getTransaction, getAccountInfo), DAS API para queries de NFT e compressed NFT, criacao e gestao de webhooks, estimativa de priority fees, parsing aprimorado de transacoes e consulta de metadados de tokens.

Este servidor e o que torna assistentes de IA genuinamente uteis para desenvolvimento blockchain. Em vez de copiar assinaturas de transacao e cola-las em um explorador de blocos, voce pode pedir a IA para consultar uma transacao, decodificar suas instrucoes e explicar o que aconteceu -- tudo dentro do seu editor.

### Context7

[https://github.com/upstash/context7](https://github.com/upstash/context7)

Consulta de documentacao de bibliotecas em tempo real que resolve um dos problemas mais frustrantes com assistentes de IA de codificacao: referencias de API obsoletas. Quando sua IA sugere codigo usando uma biblioteca, o Context7 permite que ela verifique a documentacao real atual daquela versao da biblioteca. Isso significa nao mais assinaturas de funcoes inventadas, chamadas a metodos deprecados ou tipos de parametros incorretos.

Context7 suporta documentacao para bibliotecas Solana principais incluindo Anchor, web3.js, SPL Token e muitas outras. Nao e especifico para Solana -- funciona com qualquer biblioteca que tenha documentacao publicada.

---

## Frameworks de Agentes de IA

### Solana Agent Kit

[https://github.com/sendaifun/solana-agent-kit](https://github.com/sendaifun/solana-agent-kit)

Um framework para construir agentes de IA autonomos que interagem com a Solana. O Agent Kit fornece ferramentas que permitem que agentes de IA executem acoes on-chain -- trocando tokens via Jupiter, transferindo SOL e tokens SPL, implantando programas, criando mints de tokens, gerenciando NFTs e mais. E projetado para construir aplicacoes movidas por IA que podem tomar acoes autonomas na Solana.

Casos de uso incluem bots de trading com IA, gestao automatizada de portfolio, atendimento ao cliente com IA que pode processar reembolsos em tokens, e qualquer aplicacao onde um agente de IA precisa executar transacoes Solana baseado em instrucoes em linguagem natural ou gatilhos programaticos.

### GOAT SDK

[https://github.com/ArcadeLabsInc/goat](https://github.com/ArcadeLabsInc/goat)

Great Onchain Agent Toolkit -- um framework para dar capacidades crypto a agentes de IA em multiplas chains incluindo Solana. O GOAT fornece uma arquitetura de plugins onde cada plugin expoe ferramentas on-chain (swap, transferencia, staking, emprestimo) que agentes de IA podem invocar. Suporta multiplos backends de LLM e se integra com frameworks populares de agentes como LangChain e CrewAI.

Use GOAT ao construir agentes de IA multi-chain ou quando quiser uma arquitetura baseada em plugins para compor capacidades blockchain.

### Eliza (ai16z)

[https://github.com/ai16z/eliza](https://github.com/ai16z/eliza)

Um framework para construir agentes de IA com presenca em midias sociais e capacidades on-chain, criado pela comunidade ai16z. Agentes Eliza podem interagir no Twitter, Discord e Telegram enquanto executam transacoes Solana. O framework inclui configuracao de personagem, sistemas de memoria e definicoes de acoes que combinam interacao social com operacoes blockchain.

Use Eliza ao construir agentes de IA que precisam tanto de presenca social quanto de capacidades on-chain -- bots de comunidade que podem enviar tips em tokens, personalidades de IA que fazem trades baseados em sinais sociais, ou agentes autonomos com identidades publicas.

---

## O Que e MCP?

Model Context Protocol (MCP) e um padrao aberto que permite que assistentes de IA de codificacao acessem ferramentas externas, fontes de dados e APIs por meio de uma interface unificada. Pense nele como um sistema de plugins para IA -- cada servidor MCP expoe um conjunto de ferramentas (funcoes) que a IA pode chamar quando precisa de informacao ou quer executar uma acao.

Para desenvolvimento Solana, servidores MCP permitem que seu assistente de IA:

- **Consulte dados da blockchain em tempo real** -- Verificar saldos, consultar transacoes, buscar dados de contas e consultar metadados de tokens sem sair do seu editor
- **Pesquise documentacao atual** -- Acessar os docs Solana mais recentes, guias Anchor e referencias de bibliotecas em vez de depender de dados de treinamento
- **Gerencie infraestrutura** -- Criar webhooks, estimar priority fees e interagir com servicos RPC diretamente
- **Automatize testes** -- Abrir navegadores, interagir com dApps e verificar comportamento do frontend

solana-claude agrupa todos os principais servidores MCP Solana em uma unica instalacao com chaves de API e conexoes pre-configuradas. Se voce instalar o solana-claude, nao precisa configurar servidores MCP individualmente -- todos estao incluidos e conectados automaticamente.

---

## Ferramentas de Desenvolvimento com IA

### Cursor + Solana

[https://www.cursor.com/](https://www.cursor.com/)

Um editor de codigo nativo de IA construido sobre o VS Code que suporta servidores MCP e system prompts customizados. Enquanto o solana-claude e projetado para Claude Code (baseado em terminal), o Cursor fornece uma alternativa baseada em GUI com capacidades similares de desenvolvimento assistido por IA. Voce pode configurar o Cursor com regras de contexto especificas para Solana e servidores MCP para uma experiencia de desenvolvimento visual. A combinacao dos recursos de IA inline do Cursor com servidores MCP Solana e cada vez mais popular entre desenvolvedores Solana focados em frontend.

### Solana AI Hub

O ecossistema crescente de ferramentas de IA construidas especificamente para desenvolvedores Solana. Padroes-chave emergentes incluem:

- **Scaffolding de programas gerado por IA** -- Ferramentas que geram boilerplate de programas Anchor a partir de descricoes em linguagem natural da funcionalidade do programa
- **Otimizacao automatica de CU** -- Analise de IA do uso de compute units com sugestoes especificas de refatoracao
- **Debugging de transacoes** -- Analise de transacoes com IA que explica o que aconteceu, por que falhou e como corrigir
- **Analise de seguranca** -- Revisao de codigo assistida por IA que verifica vulnerabilidades comuns da Solana (verificacoes de signer ausentes, substituicao de PDA, overflow aritmetico)

Essas capacidades estao disponiveis por meio dos agent teams e slash commands do solana-claude, mas os padroes estao sendo adotados no ecossistema mais amplo de ferramentas de IA tambem.
