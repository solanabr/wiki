# Testes e Debugging

Testes na Solana seguem uma pirâmide: testes unitários rápidos na base, testes de integração contra estado real no meio e fuzz testing para segurança no topo. Esta página explica cada camada e quando usar cada ferramenta.

Um erro comum é executar todos os testes contra o `solana-test-validator`. Isso funciona, mas é lento -- iniciar um validador, implantar programas e esperar confirmações adiciona segundos a cada execução de teste. As ferramentas abaixo permitem que você teste in-process com tempos de execução abaixo de um segundo.

---

## Testes Unitários -- Rápidos, Isolados, Sem Validador

Testes unitários verificam instruções individuais e operações de contas. Devem executar em milissegundos, não segundos.

### LiteSVM

[https://github.com/LiteSVM/litesvm](https://github.com/LiteSVM/litesvm)

Uma Solana Virtual Machine leve, in-process, projetada especificamente para testes. O LiteSVM inicializa uma instância SVM mínima dentro do seu processo de teste -- sem validador, sem rede, sem RPC. Testes executam em tempos abaixo de um segundo, tornando o desenvolvimento orientado a testes prático. Você cria contas, implanta programas e processa instruções tudo dentro de uma única função de teste Rust.

LiteSVM é o padrão recomendado para testes unitários de programas Solana. Suporta tanto programas Anchor quanto native, lida com operações do system program (criação de contas, transferências) e te dá controle total sobre o ambiente de teste (clock, rent, slot). Use sempre que precisar de feedback rápido sobre lógica de instruções.

### Mollusk

[https://github.com/buffalojoec/mollusk](https://github.com/buffalojoec/mollusk)

Um harness de teste SVM focado em programas Solana native (não-Anchor). O Mollusk fornece uma API limpa para testar instruções individuais com controle preciso sobre inputs de contas e outputs esperados. Seu diferencial é a medição integrada de compute units -- cada resultado de teste inclui o CU exato consumido, tornando-o a ferramenta ideal para profiling e otimização de CU.

Use Mollusk quando estiver escrevendo programas native (especialmente Pinocchio), quando precisar de profiling de CU como parte da sua suite de testes, ou quando quiser a API de teste mais simples possível sem dependências do Anchor.

---

## Testes de Integração -- Estado Real, Programas Reais

Testes de integração verificam que seu programa funciona corretamente ao interagir com outros programas implantados e dados de contas reais.

### Surfpool

[https://github.com/txtx/surfpool](https://github.com/txtx/surfpool)

O Surfpool permite que você reproduza estado da mainnet ou devnet localmente sem implantar nada. Ele busca dados de contas reais e estado de programas, e então executa suas transações contra esse snapshot. Isso significa que você pode testar as interações do seu programa com Jupiter, Pyth, SPL Token e qualquer outro programa implantado usando o estado real on-chain.

Use Surfpool quando precisar testar CPIs contra programas reais, quando quiser verificar que seu programa funciona com layouts de contas de produção, ou quando precisar reproduzir um problema da mainnet localmente. Ele preenche a lacuna entre testes unitários (isolados) e implantação em devnet (lento e custoso).

### Bankrun

[https://github.com/kevinheavey/solana-bankrun](https://github.com/kevinheavey/solana-bankrun)

BanksServer rodando dentro do Node.js para execução rápida de testes TypeScript com Anchor. O Bankrun te dá um ambiente de teste que se comporta como um cluster Solana real mas roda inteiramente in-process. É projetado especificamente para projetos Anchor onde seus testes são escritos em TypeScript -- ele substitui o fluxo `anchor test` por algo muito mais rápido.

Use Bankrun quando tiver um projeto Anchor com testes de integração TypeScript e quiser execução mais rápida que o `solana-test-validator`. Suporta viagem no tempo (avanço de slots e timestamps), manipulação de contas e todos os métodos RPC padrão.

---

## Fuzz Testing -- Encontrando Casos Limite

Fuzz testing gera inputs aleatórios para encontrar bugs que testes estruturados não detectam. É essencial para programas críticos em segurança.

### Trident

[https://github.com/Ackee-Blockchain/trident](https://github.com/Ackee-Blockchain/trident)

Framework de fuzz testing baseado em propriedades construído especificamente para programas Solana, criado pela Ackee Blockchain (auditores profissionais de Solana). O Trident gera sequências aleatórias de instruções e configurações de contas, e então verifica que os invariantes do seu programa se mantêm. Ele encontrou vulnerabilidades reais em programas de produção que testes manuais e testes unitários não detectaram.

Use Trident antes de qualquer implantação em mainnet que lida com fundos de usuários. Defina os invariantes do seu programa (ex: "total de depósitos deve ser igual à soma de todos os saldos de usuários") e deixe o Trident tentar quebrá-los. A configuração inicial leva tempo, mas fornece confiança de que nenhuma combinação de inputs pode violar as garantias do seu programa.

---

## Testes de Segurança e Auditoria

### OtterSec (anteriormente Sec3)

[https://osec.io/](https://osec.io/)

Auditores de segurança profissionais para Solana e a equipe por trás de diversas ferramentas de auditoria automatizada. A OtterSec auditou muitos dos maiores protocolos Solana incluindo Jupiter, Marinade e Tensor. Suas contribuições open-source incluem ferramentas de segurança e pesquisa de vulnerabilidades que beneficiam todo o ecossistema.

Para desenvolvedores, a OtterSec publica relatórios de auditoria que servem como excelentes estudos de caso para entender vulnerabilidades reais em programas Solana. Ler suas auditorias publicadas é uma das melhores formas de aprender quais problemas de segurança procurar nos seus próprios programas.

### Neodyme

[https://neodyme.io/](https://neodyme.io/)

Firma de pesquisa de segurança e auditoria para Solana conhecida por análise técnica aprofundada. A Neodyme publica posts e writeups sobre padrões de vulnerabilidade específicos da Solana -- ataques de type cosplay, substituição de PDA, verificações de signer ausentes e abuso de CPI. Sua pesquisa é leitura obrigatória para qualquer pessoa implantando programas que lidam com fundos de usuários.

Recursos principais:
- [Common Pitfalls](https://neodyme.io/en/blog/solana_common_pitfalls/) -- as 5 classes de vulnerabilidade mais comuns encontradas em auditorias reais
- [Exploring Solana Core Part 1](https://neodyme.io/en/blog/solana_core_1/) -- como um recurso pouco conhecido da Solana tornou vaults de programas inseguros
- [Security Workshop](https://workshop.neodyme.io/) -- exercícios práticos estilo CTF para encontrar e explorar vulnerabilidades Solana

### Sealevel Attacks

[https://github.com/coral-xyz/sealevel-attacks](https://github.com/coral-xyz/sealevel-attacks)

Dez programas Anchor numerados do time do Anchor (Coral XYZ), cada um demonstrando uma vulnerabilidade específica com uma versão insegura e segura. Cobre: autorização de signer, correspondência de dados de contas, verificações de owner, type cosplay, inicialização, CPI arbitrário, contas mutáveis duplicadas, canonicalização de bump seed, compartilhamento de PDA e fechamento de contas. A forma mais eficiente de aprender o que auditar nos seus próprios programas.

### Referência de Exploits de Segurança do Anchor

[https://www.anchor-lang.com/docs/references/security-exploits](https://www.anchor-lang.com/docs/references/security-exploits)

A documentação oficial do Anchor tem uma seção dedicada espelhando o repo Sealevel Attacks, com explicações de como cada constraint do Anchor (`has_one`, `owner`, `signer`, etc.) previne classes de ataque específicas. Leia junto com o código do Sealevel Attacks para entender tanto a vulnerabilidade quanto a correção idiomática do Anchor.

---

## Builds Verificáveis

### solana-verify

[https://github.com/Ellipsis-Labs/solana-verifiable-build](https://github.com/Ellipsis-Labs/solana-verifiable-build)

Uma ferramenta para produzir e verificar builds determinísticos de programas. Builds verificáveis garantem que o bytecode implantado on-chain corresponde a um commit específico do código fonte. Isso é crítico para confiança -- usuários e auditores podem confirmar que o que está rodando on-chain é exatamente o que foi auditado. A ferramenta usa Docker para criar ambientes de build reproduzíveis, e o Solana Explorer pode exibir o status de verificação para programas verificados.

Use `solana-verify` antes de qualquer deploy em mainnet. O comando `solana-verify build` produz um binário determinístico, e `solana-verify get-program-hash` compara com o programa implantado. O Anchor também suporta builds verificáveis via `anchor build --verifiable`.

---

## Exploradores de Blocos

Quando algo dá errado (ou certo) on-chain, exploradores ajudam a entender o que aconteceu.

### Solana Explorer

[https://explorer.solana.com/](https://explorer.solana.com/)

O explorador oficial mantido pela Solana Foundation. Exibe transações, contas, programas e validadores em todos os clusters (mainnet, devnet, testnet). A visualização de transações mostra detalhes de instruções, mudanças de contas e consumo de compute units. Use como seu padrão para inspecionar transações e verificar implantações. Suporta troca entre clusters via URL.

### Solscan

[https://solscan.io/](https://solscan.io/)

Um explorador abrangente focado em analytics. O Solscan se destaca em dados de tokens -- holders, histórico de transferências, dados de mercado e atividade DeFi. Também fornece analytics de contas, estatísticas de programas e uma interface mais limpa para navegar transações complexas. Use Solscan quando precisar de analytics de tokens, distribuições de holders ou uma representação mais visual da atividade on-chain.

### SolanaFM

[https://solana.fm/](https://solana.fm/)

Um explorador focado em desenvolvedores que decodifica automaticamente dados de transação usando IDLs de programas conhecidos. Quando você inspeciona uma transação, o SolanaFM mostra os parâmetros de instrução decodificados e nomes de contas em vez de dados hex brutos. Isso torna o debugging significativamente mais rápido porque você pode ver exatamente o que seu programa recebeu e como interpretou os inputs.

### XRAY

[https://xray.helius.xyz/](https://xray.helius.xyz/)

Um explorador minimalista e legível construído pelo Helius. O XRAY foca em tornar dados de transação compreensíveis para usuários não-técnicos -- ele traduz transações Solana brutas em descrições em linguagem natural como "Trocou 1.5 SOL por 200 USDC no Jupiter." Use quando precisar entender rapidamente o que uma transação fez sem fazer parse de dados de instrução, ou quando quiser compartilhar detalhes de transação com não-desenvolvedores.
