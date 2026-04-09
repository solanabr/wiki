# Ferramentas de Desenvolvimento

As ferramentas que você usa diariamente -- CLIs, IDEs, provedores de RPC e plataformas de integração. Esta página cobre as ferramentas essenciais para construir, implantar e integrar aplicações Solana.

---

## Ferramentas Principais

### Solana CLI

[https://solana.com/docs/intro/installation](https://solana.com/docs/intro/installation)

A interface de linha de comando essencial para desenvolvimento Solana. Você vai usá-la constantemente -- gerenciando keypairs, verificando saldos, implantando programas, configurando endpoints de cluster, fazendo airdrop de SOL em devnet e inspecionando transações. É a base sobre a qual tudo mais é construído. O CLI também inclui o `solana-test-validator` para executar um cluster local, embora para testes você deva preferir LiteSVM ou Mollusk (veja [Testes e Debugging](testing-and-debugging.md)).

Comandos principais que você usará diariamente: `solana config set`, `solana balance`, `solana program deploy`, `solana logs`, `solana airdrop`.

### Solana Playground

[https://beta.solpg.io/](https://beta.solpg.io/)

Um ambiente de desenvolvimento completo no seu navegador. O Solana Playground inclui um editor de código com syntax highlighting para Rust, uma wallet integrada (sem necessidade de Phantom), um compilador Anchor, um deployer de programas e até um test runner. Você pode escrever, compilar, implantar e testar programas Anchor inteiramente pelo navegador sem instalar nada localmente.

É particularmente útil para prototipagem rápida, compartilhamento de exemplos de código e ensino. A wallet integrada significa que você pode implantar em devnet imediatamente. No entanto, para desenvolvimento em produção você vai querer uma configuração local para melhor debugging, integração com controle de versão e suporte a ferramentas de IA.

---

## Provedores de RPC

Seu provedor de RPC determina a qualidade da sua conexão com a rede Solana -- velocidade, confiabilidade, limites de taxa e APIs disponíveis.

### Helius

[https://www.helius.dev/](https://www.helius.dev/)

O provedor de RPC mais rico em funcionalidades no ecossistema Solana. Além do RPC padrão, o Helius fornece a DAS (Digital Asset Standard) API para consultas de NFTs e compressed NFTs, webhooks para notificações de eventos em tempo real, parsing aprimorado de transações que decodifica instruções em formatos legíveis e estimativa de priority fees para ajudar suas transações a serem confirmadas. Seu servidor MCP expõe mais de 60 ferramentas que assistentes de IA podem usar diretamente. Plano gratuito disponível com limites generosos para desenvolvimento.

Helius é a recomendação padrão para a maioria dos projetos porque as APIs adicionais (DAS, webhooks, priority fees) evitam que você precise construir essa infraestrutura do zero.

### QuickNode

[https://www.quicknode.com/chains/solana](https://www.quicknode.com/chains/solana)

Infraestrutura RPC de alta performance com um marketplace de add-ons. O QuickNode oferece conexões de baixa latência em múltiplas regiões, uma API GraphQL para consultas de dados flexíveis e add-ons para coisas como metadados de tokens, dados de NFT e histórico de transações. Sua infraestrutura é testada em escala e usada por muitas aplicações em produção.

Escolha QuickNode quando precisar de distribuição geográfica, funcionalidade específica de add-ons ou quando quiser um provedor alternativo para redundância junto ao Helius.

### Triton

[https://triton.one/](https://triton.one/)

Infraestrutura RPC de alta performance com foco em streaming gRPC via Yellowstone. O Triton fornece JSON-RPC padrão junto com Yellowstone gRPC, que oferece atualizações em tempo real de contas e transações com latência significativamente menor que subscrições WebSocket. Sua infraestrutura suporta plugins Geyser para streaming de dados customizado e é utilizada por diversos protocolos importantes da Solana.

Escolha Triton quando precisar de streaming de dados com baixa latência (gRPC), ao construir indexadores ou aplicações em tempo real, ou quando quiser acesso a plugins Geyser para pipelines de dados customizados.

### Ironforge

[https://www.ironforge.cloud/](https://www.ironforge.cloud/)

Infraestrutura RPC com simulação de transações e ferramentas de debugging integradas. O Ironforge fornece RPC padrão junto com recursos focados em desenvolvedores como simulação aprimorada de transações, profiling de compute units e ferramentas de inspeção de contas diretamente no dashboard. Útil para desenvolvedores que querem mais visibilidade sobre o que suas transações estão fazendo durante o desenvolvimento.

### Shyft

[https://shyft.to/](https://shyft.to/)

Plataforma de APIs que fornece abstrações de nível mais alto sobre dados da Solana. Além do RPC bruto, o Shyft oferece APIs REST para dados de tokens, operações com NFTs, histórico de transações e analytics DeFi. Suas APIs retornam dados estruturados sem exigir que você faça parse de dados brutos de contas ou decodifique logs de instruções. Útil para desenvolvedores frontend que precisam de dados da Solana sem a complexidade da integração RPC bruta.

### Luzid

[https://luzid.app/](https://luzid.app/)

Um debugger visual e ambiente de desenvolvimento local para programas Solana. O Luzid fornece uma interface gráfica para inspecionar contas, transações e estado de programas durante o desenvolvimento local, substituindo o fluxo exclusivamente via CLI do `solana-test-validator` por uma interface visual. Os recursos incluem inspeção de estado de contas, replay de transações, debugging no estilo breakpoint e profiling de CU com saída visual.

Use Luzid quando quiser uma experiência de desenvolvimento mais visual do que o CLI oferece, ou ao debugar transações complexas com múltiplas instruções onde visualizar as mudanças de estado é mais eficaz do que ler saída de logs.

---

## Infraestrutura de Transações

### Jito Block Engine

[https://docs.jito.wtf/](https://docs.jito.wtf/)

Infraestrutura MEV para Solana incluindo submissão de bundles, acesso ao block engine e roteamento de tips. O endpoint de bundles do Jito permite submeter até 5 transações que executam atomicamente e sequencialmente dentro do mesmo bloco -- ou todas têm sucesso ou todas falham. Isso é essencial para arbitragem, liquidações e qualquer operação onde execução parcial é perigosa. Métodos de API principais: `sendBundle`, `getBundleStatuses`, `getTipAccounts`. Tip mínimo de 1.000 lamports. Clientes disponíveis para TypeScript, Python, Rust e Go.

Para desenvolvedores de aplicações, o Jito importa principalmente para o landing de transações -- usar tips do Jito junto com priority fees dá a suas transações a melhor chance de inclusão durante períodos congestionados. O endpoint de envio de transações de baixa latência ([docs.jito.wtf/lowlatencytxnsend](https://docs.jito.wtf/lowlatencytxnsend/)) também suporta transações individuais com benefícios de SWQoS (Stake-Weighted Quality of Service).

### Helius LaserStream

[https://www.helius.dev/docs/laserstream](https://www.helius.dev/docs/laserstream)

Streaming de dados gerenciado de alta performance para Solana via gRPC. O LaserStream entrega blocos, transações, atualizações de contas e slots em tempo real. É construído sobre uma interface compatível com Yellowstone mas adiciona funcionalidades que o Yellowstone bruto não pode fornecer: replay histórico (até 24 horas de slots perdidos ao reconectar), auto-reconexão com rastreamento de slots, failover multi-node em 9 regiões e throughput de 1.3 GB/s (vs ~30 MB/s para clientes JS Yellowstone padrão). Suporta até 250.000 endereços por conexão.

SDKs em TypeScript, Rust e Go. A interface é compatível com código Yellowstone gRPC existente -- apenas a URL do endpoint e o token de autenticação mudam. Plano Professional ($999/mês) necessário para mainnet. GitHub: [helius-labs/laserstream-sdk](https://github.com/helius-labs/laserstream-sdk).

### Light Protocol

[https://docs.lightprotocol.com/](https://docs.lightprotocol.com/)

Infraestrutura de compressão ZK para Solana. O Light Protocol permite que aplicações armazenem estado em forma comprimida usando provas de conhecimento zero, reduzindo drasticamente os custos de armazenamento on-chain. Uma conta comprimida custa uma fração de uma conta padrão enquanto mantém as mesmas garantias de segurança por meio de provas Merkle.

Use Light Protocol quando sua aplicação cria muitas contas (perfis de usuários, estado de jogo, dados sociais) e os custos de rent se tornam significativos. O trade-off é complexidade adicional para ler estado comprimido e incluir provas Merkle nas transações.

---

## Actions e Blinks

Actions e Blinks são uma inovação específica da Solana que transforma qualquer transação em uma URL compartilhável e incorporável.

### Especificação Solana Actions

[https://solana.com/developers/guides/advanced/actions](https://solana.com/developers/guides/advanced/actions)

A especificação oficial para Solana Actions -- APIs padronizadas que retornam transações assináveis a partir de uma URL. Qualquer aplicação, site ou plataforma de mídia social pode incorporar uma Action que permite que usuários executem transações Solana sem sair do contexto atual. Por exemplo, um tweet contendo um Blink (blockchain link) pode incluir um botão "Comprar" ou "Doar" que aciona um popup de wallet diretamente no feed do Twitter.

Entender a especificação de Actions é importante porque ela representa um novo canal de distribuição para aplicações Solana. Em vez de exigir que usuários visitem seu dApp, você leva a transação para onde eles já estão.

### Dialect Blinks

[https://docs.dialect.to/blinks](https://docs.dialect.to/blinks)

O SDK para criar, testar e implantar Actions e Blinks. O Dialect fornece a camada de ferramentas sobre a especificação de Actions -- um registro para suas Actions, uma interface de testes para visualizar como elas renderizam e SDKs de cliente para renderizar Blinks na sua própria aplicação. Se você está construindo uma Action, o SDK do Dialect lida com os detalhes de implementação como construção de transações, formatação de metadados e renderização do lado do cliente.

---

## Pagamentos

### Solana Pay

[https://docs.solanapay.com/](https://docs.solanapay.com/)

Um protocolo de pagamento construído na Solana para comerciantes e aplicações. O Solana Pay fornece um SDK JavaScript/TypeScript para criar solicitações de pagamento, gerar QR codes e verificar a conclusão de transações. Suporta tanto transferências simples de SOL quanto pagamentos complexos com tokens SPL, com suporte integrado para fluxos de ponto de venda, integração com e-commerce e verificação de pagamentos.

O protocolo é projetado para comércio do mundo real -- finalidade em menos de um segundo e taxas próximas de zero o tornam prático para pagamentos do dia a dia. O SDK lida com as complexidades do rastreamento de referência de pagamento, então você pode verificar que um pagamento específico foi feito sem escanear cada transação on-chain.

---

## Infraestrutura de Segurança

### solana-security-txt

[https://github.com/neodyme-labs/solana-security-txt](https://github.com/neodyme-labs/solana-security-txt)

Uma macro Rust que incorpora informações de contato de segurança estruturadas no binário do seu programa Solana, criando uma seção ELF `.security.txt`. Isso permite que pesquisadores de segurança encontrem informações de contato diretamente a partir de um endereço de programa on-chain -- essencial para divulgação responsável. Suporta Telegram, Discord, email e outros tipos de contato. A implementação é uma única chamada de macro. Criado pela Neodyme, a firma de pesquisa de segurança Solana. Adicione isso a todo programa que você implantar em mainnet.

---

## CLI Avançado e Gestão de Programas

### Autoridade de Upgrade de Programas

[https://solana.com/docs/core/programs/program-deployment](https://solana.com/docs/core/programs/program-deployment)

Entender a autoridade de upgrade de programas é crítico para deploys em produção. Comandos principais:
- `solana program show <PROGRAM_ID>` -- inspecionar autoridade de upgrade e metadados do programa
- `solana program set-upgrade-authority <PROGRAM_ID> --new-upgrade-authority <PUBKEY>` -- transferir para um multisig (PDA do Squads)
- `solana program set-upgrade-authority <PROGRAM_ID> --final` -- tornar o programa imutável (irreversível)

Melhor prática para produção: transfira a autoridade de upgrade para um multisig do Squads antes do lançamento em mainnet. Para deploys totalmente trustless, use `--final` para tornar o programa imutável.

### Versioned Transactions e Address Lookup Tables

[https://solana.com/docs/core/transactions/versioned-transactions](https://solana.com/docs/core/transactions/versioned-transactions)

Transações legadas são limitadas a ~35 contas. Address Lookup Tables (ALTs) armazenam até 256 chaves públicas em uma conta on-chain, permitindo que transações as referenciem com índices de 1 byte em vez de chaves de 32 bytes. Transações V0 são necessárias para usar ALTs e são essenciais para interações DeFi complexas (swaps Jupiter, rotas multi-pool, transações em bundle). Guia: [solana.com/developers/guides/advanced/lookup-tables](https://solana.com/developers/guides/advanced/lookup-tables).

### Durable Nonces

[https://docs.solanalabs.com/cli/examples/durable-nonce](https://docs.solanalabs.com/cli/examples/durable-nonce)

Transações Solana padrão expiram após ~60 segundos se não forem incluídas em um bloco. Durable nonces substituem o blockhash recente por um valor de nonce armazenado que não expira, habilitando fluxos de assinatura offline, assinatura multi-party em fusos horários diferentes e submissão agendada de transações. Essencial para qualquer aplicação onde transações não podem ser assinadas e submetidas na mesma sessão.
