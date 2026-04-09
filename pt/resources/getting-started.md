# Primeiros Passos

Esta página apresenta um caminho de aprendizado recomendado para novos desenvolvedores Solana. Em vez de jogar uma lista de links, ela estrutura os recursos como uma jornada -- desde entender o modelo mental, passando pela configuração do ambiente, até construir e implantar seu primeiro programa e turbinar seu fluxo de trabalho com ferramentas de IA.

---

## Passo 1: Entenda os Fundamentos

Antes de escrever código, internalize como a Solana funciona. O modelo de contas é fundamentalmente diferente de chains EVM -- tudo é uma conta, programas são stateless e os dados ficam em contas separadas pertencentes aos programas.

### Solana Docs Quick Start

[https://solana.com/docs/intro/quick-start](https://solana.com/docs/intro/quick-start)

Comece aqui. Este guia oficial te leva por contas, transações e programas em menos de uma hora. Ele cobre o modelo mental principal -- como programas processam instruções, como contas armazenam estado e como transações agrupam tudo. Você vai construir e implantar um programa simples ao final.

### Solana Docs Core Concepts

[https://solana.com/docs#start-learning](https://solana.com/docs#start-learning)

Depois de ter o básico, aprofunde-se no modelo de contas, Program Derived Addresses (PDAs), Cross-Program Invocations (CPIs) e no ciclo de vida de transações. Esses conceitos são a base de tudo que você vai construir. Preste atenção especial aos PDAs -- eles são a resposta da Solana ao armazenamento de contratos e você vai usá-los constantemente.

---

## Passo 2: Configure Seu Ambiente

Você tem duas opções: configuração local para desenvolvimento sério, ou baseada em navegador para experimentação rápida.

### Guia de Instalação (Configuração Local)

[https://solana.com/docs/intro/installation](https://solana.com/docs/intro/installation)

Isso cobre a instalação do Solana CLI, framework Anchor e toolchain Rust na sua máquina. O desenvolvimento local te dá controle total -- debugging, configurações de teste personalizadas e a capacidade de usar ferramentas de IA como solana-claude. Se você planeja construir algo além de um projeto de brinquedo, configure localmente.

### Solana Playground (IDE no Navegador)

[https://beta.solpg.io/](https://beta.solpg.io/)

Se quiser pular a configuração local ou apenas experimentar uma ideia, o Solana Playground te dá um ambiente de desenvolvimento completo no navegador. Ele inclui uma wallet integrada, compilador Rust, deployer de programas e até um framework de testes. Você pode escrever, compilar, implantar e testar programas Anchor sem instalar nada. É excelente para aprender e prototipar, embora eventualmente você vá querer uma configuração local para trabalho em produção.

### Configuração de Provedor RPC

Para qualquer coisa além do desenvolvimento local, você precisa de um provedor RPC. Os endpoints RPC públicos padrão são rate-limited e não são adequados para uso em produção. [Helius](https://www.helius.dev/) oferece um tier gratuito generoso que é suficiente para aprender e desenvolvimento inicial -- cadastre-se, obtenha uma API key e use na configuração do seu Solana CLI e código da aplicação. Outros provedores como [Triton](https://triton.one/) e [Ironforge](https://www.ironforge.cloud/) também oferecem tiers gratuitos. Ter uma conexão RPC confiável desde o início previne erros frustrantes de timeout e limites de taxa que podem travar seu aprendizado.

---

## Passo 3: Construa Algo

A teoria só fixa quando você aplica. Esses recursos te dão projetos concretos para construir e padrões para referência.

### Developer Cookbook

[https://solana.com/developers/cookbook](https://solana.com/developers/cookbook)

Uma coleção de referência com trechos de código e padrões para tarefas comuns de desenvolvimento Solana. Precisa criar um token? Enviar uma transação? Derivar um PDA? O cookbook tem implementações prontas para copiar e colar para cada caso. Pense nele como um livro de receitas que você mantém aberto enquanto constrói -- não é um tutorial para ler de ponta a ponta, mas um recurso para buscar quando precisa implementar algo específico.

### Construa um dApp CRUD

[https://solana.com/developers/guides/dapps/journal](https://solana.com/developers/guides/dapps/journal)

Um tutorial completo de ponta a ponta que te guia na construção de uma aplicação de diário com um programa Anchor on-chain e um frontend React. Você vai aprender a definir estruturas de conta, escrever handlers de instruções, gerar clientes TypeScript e conectar uma wallet. Este é o melhor primeiro projeto para entender toda a stack.

### Conectar uma Wallet em React

[https://solana.com/developers/cookbook/wallets/connect-wallet-react](https://solana.com/developers/cookbook/wallets/connect-wallet-react)

Todo dApp precisa de integração com wallet. Este guia cobre o Solana wallet adapter -- como configurar providers, detectar wallets instaladas, conectar/desconectar e assinar transações. Se você está construindo um frontend, vai referenciar esse padrão repetidamente.

### Coleção de Guias para Desenvolvedores

[https://solana.com/developers/guides](https://solana.com/developers/guides)

A coleção completa de guias oficiais da Solana Foundation para desenvolvedores. Cobre tudo, desde criação básica de tokens até tópicos avançados como compressed NFTs, staking e Actions/Blinks. Navegue por tópico quando estiver pronto para ir além do básico. Cada guia é autocontido e inclui código funcional.

---

## Passo 4: Evolua com Ferramentas de IA

Depois de dominar os fundamentos, ferramentas de IA podem acelerar dramaticamente seu ciclo de desenvolvimento -- desde geração de código e auditorias de segurança até consulta de documentação em tempo real e queries de dados on-chain.

### solana-claude

[https://github.com/solanabr/solana-claude-config](https://github.com/solanabr/solana-claude-config)

Esta é a ferramenta de maior alavancagem que você pode adicionar ao seu fluxo de desenvolvimento Solana. Uma única instalação te dá 15 agentes de IA especializados (architect, anchor-engineer, pinocchio-engineer, frontend-engineer, security auditor e mais), 24+ comandos slash para tarefas comuns (build, audit, deploy, scaffold, test) e 6 servidores MCP pré-configurados que dão ao seu assistente de IA acesso em tempo real a documentação Solana, dados on-chain e referências de bibliotecas. Ele transforma o Claude Code de um assistente de propósito geral em um parceiro de desenvolvimento Solana que entende o ecossistema profundamente. Veja a página de [Desenvolvimento Assistido por IA](ai-assisted-development.md) para a análise completa.

---

## Ordem Recomendada

Para desenvolvedores vindo de outros ecossistemas, aqui está o caminho condensado:

1. Leia os docs de Quick Start e Core Concepts (2-3 horas)
2. Instale o Solana CLI e Anchor localmente, ou use o Solana Playground
3. Construa o tutorial do dApp CRUD de ponta a ponta
4. Instale o solana-claude e comece a usar desenvolvimento assistido por IA
5. Escolha um projeto real e use o Cookbook + Developer Guides como referências
6. Explore [Cursos e Educação](courses-and-education.md) para aprendizado aprofundado e estruturado
