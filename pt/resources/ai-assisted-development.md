# Desenvolvimento Assistido por IA

Ferramentas de IA estão transformando o desenvolvimento Solana. Geração de código, consulta de documentação em tempo real, queries de dados on-chain, auditoria de segurança e automação de fluxos de desenvolvimento -- estes não são mais recursos experimentais, mas ferramentas de produção que os melhores desenvolvedores Solana usam diariamente. O time da Superteam Brasil investiu fortemente nesta área, e esta página reflete tanto o ecossistema mais amplo quanto nossas próprias contribuições.

O ponto chave é que assistentes de IA de codificação são tão bons quanto o contexto que possuem. Uma IA de propósito geral sabe sobre Solana a partir de seus dados de treinamento, que podem estar desatualizados ou incompletos. Servidores MCP e configurações especializadas dão aos assistentes de IA acesso em tempo real a documentação atual, dados ao vivo da blockchain e conhecimento de domínio específico que torna suas respostas dramaticamente mais úteis.

---

## solana-claude -- O Ambiente Completo de Desenvolvimento com IA

[https://github.com/solanabr/solana-claude-config](https://github.com/solanabr/solana-claude-config)

solana-claude é a ferramenta de maior impacto que você pode adicionar ao seu fluxo de desenvolvimento Solana. É uma configuração abrangente do Claude Code que transforma seu ambiente de desenvolvimento em um workspace especializado em Solana com uma única instalação. Tudo vem pré-configurado -- agentes, comandos, servidores MCP, regras de linguagem e padrões de fluxo de trabalho.

### O Que Você Recebe

**15 Agentes Especializados**

Cada agente é uma persona de IA com conhecimento profundo do seu domínio, pré-carregado com documentação, padrões e restrições relevantes:

- **solana-architect** -- Design de sistemas, planejamento de modelo de contas, esquemas de PDA, arquitetura de CPI
- **anchor-engineer** -- Implementação de programas Anchor, constraints, geração de IDL, clientes TypeScript
- **pinocchio-engineer** -- Programas zero-copy, otimização de CU, validação manual, código unsafe
- **defi-engineer** -- Integração de protocolos DeFi, matemática de AMM, padrões de oracles, design de vaults
- **solana-frontend-engineer** -- dApps React/Next.js, wallet adapter, web3.js, gestão de estado
- **game-architect** -- Design de jogos on-chain, padrões ECS, integração MagicBlock
- **unity-engineer** -- Solana.Unity SDK, integração C#, builds mobile
- **mobile-engineer** -- Mobile Wallet Adapter, React Native, submissão para dApp Store
- **rust-backend-engineer** -- Serviços off-chain em Rust, indexadores, keepers, construtores de transações
- **devops-engineer** -- Pipelines de deploy, gestão de RPC, monitoramento, builds verificáveis
- **token-engineer** -- Extensões Token-2022, design de stablecoins, padrões NFT, tokenomics
- **solana-researcher** -- Análise do ecossistema, pesquisa de protocolos, revisão de sRFCs
- **solana-qa-engineer** -- Estratégia de testes, harnesses LiteSVM/Mollusk, fuzz testing, cobertura
- **tech-docs-writer** -- Documentação de APIs, documentação de arquitetura, READMEs, guias para desenvolvedores
- **solana-guide** -- Recomendações de caminho de aprendizado, explicações de conceitos, onboarding

**24+ Comandos Slash**

Comandos para cada estágio do ciclo de desenvolvimento:

- `/build-program` -- Build com `anchor build` ou `cargo build-sbf`, tratamento de erros
- `/audit-solana` -- Auditoria de segurança contra padrões comuns de vulnerabilidade
- `/profile-cu` -- Medir e otimizar consumo de compute units
- `/deploy` -- Deploy guiado para devnet ou mainnet com portões de confirmação
- `/scaffold` -- Gerar estrutura de projeto a partir de uma descrição
- `/test-rust` -- Executar testes Rust com integração LiteSVM/Mollusk
- `/test-ts` -- Executar testes de integração TypeScript
- `/quick-commit` -- Criação automatizada de branch e commit seguindo convenções
- `/diff-review` -- Revisar mudanças para AI slop, comentários excessivos e qualidade de código
- E mais para formatação, linting, documentação e automação de fluxos de trabalho

**6 Servidores MCP Integrados**

Todos configurados automaticamente durante a instalação, com chaves de API gerenciadas via `.env`:

- **Helius MCP** -- 60+ ferramentas para chamadas RPC, queries na DAS API, gestão de webhooks, estimativa de priority fees, consulta de metadados de tokens e parsing de transações. Isso dá ao seu assistente de IA acesso direto a dados ao vivo da Solana -- ele pode verificar saldos, consultar metadados de tokens, buscar coleções NFT e estimar taxas de transação sem você mudar para um terminal.

- **solana-dev MCP** -- Servidor MCP oficial da Solana Foundation fornecendo acesso a documentação atual, guias para desenvolvedores, referências de API e orientação sobre Anchor. Quando seu assistente de IA responde uma pergunta sobre Solana, ele puxa dos docs mais recentes em vez de dados de treinamento potencialmente desatualizados.

- **Context7** -- Consulta de documentação de bibliotecas em tempo real. Quando você está usando uma biblioteca (Anchor, web3.js, SPL Token), o Context7 dá à IA acesso à documentação atual da API para aquela versão específica, eliminando o problema de referências de API obsoletas ou inventadas.

- **Playwright** -- Automação de navegador para testes de dApps. A IA pode abrir seu frontend, conectar wallets, navegar por fluxos e verificar que seu dApp funciona de ponta a ponta em um navegador real.

- **context-mode** -- Comprime respostas RPC grandes e logs de build para economizar espaço na janela de contexto. Quando você está debugando uma transação com falha ou um erro de build, a saída bruta pode ter milhares de linhas. context-mode extrai as informações relevantes para que a IA possa processá-las sem esgotar o contexto.

- **memsearch** -- Memória persistente com busca semântica entre sessões. A IA lembra decisões que você tomou, bugs que corrigiu e padrões que estabeleceu em sessões anteriores. Isso significa que você não precisa re-explicar a arquitetura do seu projeto toda vez que inicia uma nova conversa.

**Regras Específicas por Linguagem**

Padrões de codificação e restrições pré-configurados para Rust, Anchor, Pinocchio, TypeScript e C#/.NET. Essas regras aplicam melhores práticas de segurança (aritmética verificada, validação de contas, sem `unwrap()` em programas), convenções de nomenclatura, estrutura de projetos e padrões de teste. A IA segue essas regras automaticamente, produzindo código que corresponde aos padrões do seu projeto.

**Padrões de Equipe de Agentes**

Fluxos multi-agente pré-construídos para cenários comuns de desenvolvimento:

- **program-ship** -- Architect projeta, engineer implementa, QA valida
- **full-stack** -- Programa + frontend + testes em fluxo coordenado
- **audit-and-fix** -- Auditoria de segurança seguida de remediação guiada
- **game-ship** -- Game architect + unity engineer + QA para desenvolvimento de jogos
- **research-and-build** -- Fase de pesquisa seguida de implementação
- **defi-compose** -- Design de protocolo DeFi + integração + testes
- **token-launch** -- Design de token + implementação + deploy

Mantido por @kauenet.

---

## Servidores MCP

Para desenvolvedores usando ferramentas de IA além do Claude Code, ou que queiram configurar servidores MCP individualmente em vez de pelo solana-claude, esses servidores podem ser configurados independentemente.

### Solana MCP Server

[https://mcp.solana.com/](https://mcp.solana.com/)

O servidor MCP oficial da Solana Foundation. Ele fornece busca de documentação em toda a documentação de desenvolvedores Solana, referências de API para o JSON-RPC Solana, orientação sobre o framework Anchor e conteúdo de guias para desenvolvedores. Esta é a fonte autoritativa de documentação Solana em contextos de IA -- ela puxa do mesmo conteúdo que alimenta solana.com/docs, garantindo precisão e atualidade.

Use este servidor para garantir que seu assistente de IA sempre tenha acesso à documentação Solana atual em vez de depender de dados de treinamento que podem estar meses ou anos desatualizados.

### Helius MCP Server

[https://github.com/helius-labs/helius-mcp-server](https://github.com/helius-labs/helius-mcp-server)

60+ ferramentas que dão a assistentes de IA acesso direto a dados da blockchain Solana por meio da infraestrutura do Helius. As capacidades incluem chamadas RPC padrão (getBalance, getTransaction, getAccountInfo), DAS API para queries de NFT e compressed NFT, criação e gestão de webhooks, estimativa de priority fees, parsing aprimorado de transações e consulta de metadados de tokens.

Este servidor é o que torna assistentes de IA genuinamente úteis para desenvolvimento blockchain. Em vez de copiar assinaturas de transação e colá-las em um explorador de blocos, você pode pedir à IA para consultar uma transação, decodificar suas instruções e explicar o que aconteceu -- tudo dentro do seu editor.

### Context7

[https://github.com/upstash/context7](https://github.com/upstash/context7)

Consulta de documentação de bibliotecas em tempo real que resolve um dos problemas mais frustrantes com assistentes de IA de codificação: referências de API obsoletas. Quando sua IA sugere código usando uma biblioteca, o Context7 permite que ela verifique a documentação real atual daquela versão da biblioteca. Isso significa não mais assinaturas de funções inventadas, chamadas a métodos deprecados ou tipos de parâmetros incorretos.

Context7 suporta documentação para bibliotecas Solana principais incluindo Anchor, web3.js, SPL Token e muitas outras. Não é específico para Solana -- funciona com qualquer biblioteca que tenha documentação publicada.

---

## Frameworks de Agentes de IA

### Solana Agent Kit

[https://github.com/sendaifun/solana-agent-kit](https://github.com/sendaifun/solana-agent-kit)

Um framework para construir agentes de IA autônomos que interagem com a Solana. O Agent Kit fornece ferramentas que permitem que agentes de IA executem ações on-chain -- trocando tokens via Jupiter, transferindo SOL e tokens SPL, implantando programas, criando mints de tokens, gerenciando NFTs e mais. É projetado para construir aplicações movidas por IA que podem tomar ações autônomas na Solana.

Casos de uso incluem bots de trading com IA, gestão automatizada de portfolio, atendimento ao cliente com IA que pode processar reembolsos em tokens, e qualquer aplicação onde um agente de IA precisa executar transações Solana baseado em instruções em linguagem natural ou gatilhos programáticos.

### GOAT SDK

[https://github.com/ArcadeLabsInc/goat](https://github.com/ArcadeLabsInc/goat)

Great Onchain Agent Toolkit -- um framework para dar capacidades crypto a agentes de IA em múltiplas chains incluindo Solana. O GOAT fornece uma arquitetura de plugins onde cada plugin expõe ferramentas on-chain (swap, transferência, staking, empréstimo) que agentes de IA podem invocar. Suporta múltiplos backends de LLM e se integra com frameworks populares de agentes como LangChain e CrewAI.

Use GOAT ao construir agentes de IA multi-chain ou quando quiser uma arquitetura baseada em plugins para compor capacidades blockchain.

### Eliza (ai16z)

[https://github.com/ai16z/eliza](https://github.com/ai16z/eliza)

Um framework para construir agentes de IA com presença em mídias sociais e capacidades on-chain, criado pela comunidade ai16z. Agentes Eliza podem interagir no Twitter, Discord e Telegram enquanto executam transações Solana. O framework inclui configuração de personagem, sistemas de memória e definições de ação que combinam interação social com operações blockchain.

Use Eliza ao construir agentes de IA que precisam tanto de presença social quanto de capacidades on-chain -- bots de comunidade que podem enviar tips em tokens, personalidades de IA que fazem trades baseados em sinais sociais, ou agentes autônomos com identidades públicas.

---

## O Que é MCP?

Model Context Protocol (MCP) é um padrão aberto que permite que assistentes de IA de codificação acessem ferramentas externas, fontes de dados e APIs por meio de uma interface unificada. Pense nele como um sistema de plugins para IA -- cada servidor MCP expõe um conjunto de ferramentas (funções) que a IA pode chamar quando precisa de informação ou quer executar uma ação.

Para desenvolvimento Solana, servidores MCP permitem que seu assistente de IA:

- **Consulte dados da blockchain em tempo real** -- Verificar saldos, consultar transações, buscar dados de contas e consultar metadados de tokens sem sair do seu editor
- **Pesquise documentação atual** -- Acessar os docs Solana mais recentes, guias Anchor e referências de bibliotecas em vez de depender de dados de treinamento
- **Gerencie infraestrutura** -- Criar webhooks, estimar priority fees e interagir com serviços RPC diretamente
- **Automatize testes** -- Abrir navegadores, interagir com dApps e verificar comportamento do frontend

solana-claude agrupa todos os principais servidores MCP Solana em uma única instalação com chaves de API e conexões pré-configuradas. Se você instalar o solana-claude, não precisa configurar servidores MCP individualmente -- todos estão incluídos e conectados automaticamente.

---

## Ferramentas de Desenvolvimento com IA

### Cursor + Solana

[https://www.cursor.com/](https://www.cursor.com/)

Um editor de código nativo de IA construído sobre o VS Code que suporta servidores MCP e system prompts customizados. Enquanto o solana-claude é projetado para Claude Code (baseado em terminal), o Cursor fornece uma alternativa baseada em GUI com capacidades similares de desenvolvimento assistido por IA. Você pode configurar o Cursor com regras de contexto específicas para Solana e servidores MCP para uma experiência de desenvolvimento visual. A combinação dos recursos de IA inline do Cursor com servidores MCP Solana é cada vez mais popular entre desenvolvedores Solana focados em frontend.

### Solana AI Hub

O ecossistema crescente de ferramentas de IA construídas especificamente para desenvolvedores Solana. Padrões-chave emergentes incluem:

- **Scaffolding de programas gerado por IA** -- Ferramentas que geram boilerplate de programas Anchor a partir de descrições em linguagem natural da funcionalidade do programa
- **Otimização automatizada de CU** -- Análise de IA do uso de compute units com sugestões específicas de refatoração
- **Debugging de transações** -- Análise de transações com IA que explica o que aconteceu, por que falhou e como corrigir
- **Análise de segurança** -- Revisão de código assistida por IA que verifica vulnerabilidades comuns da Solana (verificações de signer ausentes, substituição de PDA, overflow aritmético)

Essas capacidades estão disponíveis por meio dos agent teams e slash commands do solana-claude, mas os padrões estão sendo adotados no ecossistema mais amplo de ferramentas de IA também.
