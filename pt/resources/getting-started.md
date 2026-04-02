# Primeiros Passos

Esta pagina apresenta um caminho de aprendizado recomendado para novos desenvolvedores Solana. Em vez de jogar uma lista de links, ela estrutura os recursos como uma jornada -- desde entender o modelo mental, passando pela configuracao do ambiente, ate construir e implantar seu primeiro programa e turbinar seu fluxo de trabalho com ferramentas de IA.

---

## Passo 1: Entenda os Fundamentos

Antes de escrever codigo, internalize como a Solana funciona. O modelo de contas e fundamentalmente diferente de chains EVM -- tudo e uma conta, programas sao stateless e os dados ficam em contas separadas pertencentes aos programas.

### Solana Docs Quick Start

[https://solana.com/docs/intro/quick-start](https://solana.com/docs/intro/quick-start)

Comece aqui. Este guia oficial te leva por contas, transacoes e programas em menos de uma hora. Ele cobre o modelo mental principal -- como programas processam instrucoes, como contas armazenam estado e como transacoes agrupam tudo. Voce vai construir e implantar um programa simples ao final.

### Solana Docs Core Concepts

[https://solana.com/docs#start-learning](https://solana.com/docs#start-learning)

Depois de ter o basico, aprofunde-se no modelo de contas, Program Derived Addresses (PDAs), Cross-Program Invocations (CPIs) e no ciclo de vida de transacoes. Esses conceitos sao a base de tudo que voce vai construir. Preste atencao especial aos PDAs -- eles sao a resposta da Solana ao armazenamento de contratos e voce vai usa-los constantemente.

---

## Passo 2: Configure Seu Ambiente

Voce tem duas opcoes: configuracao local para desenvolvimento serio, ou baseada em navegador para experimentacao rapida.

### Guia de Instalacao (Configuracao Local)

[https://solana.com/docs/intro/installation](https://solana.com/docs/intro/installation)

Isso cobre a instalacao do Solana CLI, framework Anchor e toolchain Rust na sua maquina. O desenvolvimento local te da controle total -- debugging, configuracoes de teste personalizadas e a capacidade de usar ferramentas de IA como solana-claude. Se voce planeja construir algo alem de um projeto de brinquedo, configure localmente.

### Solana Playground (IDE no Navegador)

[https://beta.solpg.io/](https://beta.solpg.io/)

Se quiser pular a configuracao local ou apenas experimentar uma ideia, o Solana Playground te da um ambiente de desenvolvimento completo no navegador. Ele inclui uma wallet integrada, compilador Rust, deployer de programas e ate um framework de testes. Voce pode escrever, compilar, implantar e testar programas Anchor sem instalar nada. E excelente para aprender e prototipar, embora eventualmente voce va querer uma configuracao local para trabalho em producao.

### Configuracao de Provedor RPC

Para qualquer coisa alem do desenvolvimento local, voce precisa de um provedor RPC. Os endpoints RPC publicos padrao sao rate-limited e nao sao adequados para uso em producao. [Helius](https://www.helius.dev/) oferece um tier gratuito generoso que e suficiente para aprender e desenvolvimento inicial -- cadastre-se, obtenha uma API key e use na configuracao do seu Solana CLI e codigo da aplicacao. Outros provedores como [Triton](https://triton.one/) e [Ironforge](https://www.ironforge.cloud/) tambem oferecem tiers gratuitos. Ter uma conexao RPC confiavel desde o inicio previne erros frustrantes de timeout e limites de taxa que podem travar seu aprendizado.

---

## Passo 3: Construa Algo

A teoria so fixa quando voce aplica. Esses recursos te dao projetos concretos para construir e padroes para referencia.

### Developer Cookbook

[https://solana.com/developers/cookbook](https://solana.com/developers/cookbook)

Uma colecao de referencia com trechos de codigo e padroes para tarefas comuns de desenvolvimento Solana. Precisa criar um token? Enviar uma transacao? Derivar um PDA? O cookbook tem implementacoes prontas para copiar e colar para cada caso. Pense nele como um livro de receitas que voce mantem aberto enquanto constroi -- nao e um tutorial para ler de ponta a ponta, mas um recurso para buscar quando precisa implementar algo especifico.

### Construa um dApp CRUD

[https://solana.com/developers/guides/dapps/journal](https://solana.com/developers/guides/dapps/journal)

Um tutorial completo de ponta a ponta que te guia na construcao de uma aplicacao de diario com um programa Anchor on-chain e um frontend React. Voce vai aprender a definir estruturas de conta, escrever handlers de instrucoes, gerar clientes TypeScript e conectar uma wallet. Este e o melhor primeiro projeto para entender toda a stack.

### Conectar uma Wallet em React

[https://solana.com/developers/cookbook/wallets/connect-wallet-react](https://solana.com/developers/cookbook/wallets/connect-wallet-react)

Todo dApp precisa de integracao com wallet. Este guia cobre o Solana wallet adapter -- como configurar providers, detectar wallets instaladas, conectar/desconectar e assinar transacoes. Se voce esta construindo um frontend, vai referenciar esse padrao repetidamente.

### Colecao de Guias para Desenvolvedores

[https://solana.com/developers/guides](https://solana.com/developers/guides)

A colecao completa de guias oficiais da Solana Foundation para desenvolvedores. Cobre tudo, desde criacao basica de tokens ate topicos avancados como compressed NFTs, staking e Actions/Blinks. Navegue por topico quando estiver pronto para ir alem do basico. Cada guia e autocontido e inclui codigo funcional.

---

## Passo 4: Evolua com Ferramentas de IA

Depois de dominar os fundamentos, ferramentas de IA podem acelerar dramaticamente seu ciclo de desenvolvimento -- desde geracao de codigo e auditorias de seguranca ate consulta de documentacao em tempo real e queries de dados on-chain.

### solana-claude

[https://github.com/solanabr/solana-claude-config](https://github.com/solanabr/solana-claude-config)

Esta e a ferramenta de maior alavancagem que voce pode adicionar ao seu fluxo de desenvolvimento Solana. Uma unica instalacao te da 15 agentes de IA especializados (architect, anchor-engineer, pinocchio-engineer, frontend-engineer, security auditor e mais), 24+ comandos slash para tarefas comuns (build, audit, deploy, scaffold, test) e 6 servidores MCP pre-configurados que dao ao seu assistente de IA acesso em tempo real a documentacao Solana, dados on-chain e referencias de bibliotecas. Ele transforma o Claude Code de um assistente de proposito geral em um parceiro de desenvolvimento Solana que entende o ecossistema profundamente. Veja a pagina de [Desenvolvimento Assistido por IA](ai-assisted-development.md) para a analise completa.

---

## Ordem Recomendada

Para desenvolvedores vindo de outros ecossistemas, aqui esta o caminho condensado:

1. Leia os docs de Quick Start e Core Concepts (2-3 horas)
2. Instale o Solana CLI e Anchor localmente, ou use o Solana Playground
3. Construa o tutorial do dApp CRUD de ponta a ponta
4. Instale o solana-claude e comece a usar desenvolvimento assistido por IA
5. Escolha um projeto real e use o Cookbook + Developer Guides como referencias
6. Explore [Cursos e Educacao](courses-and-education.md) para aprendizado aprofundado e estruturado
