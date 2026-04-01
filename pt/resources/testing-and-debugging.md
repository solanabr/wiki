# Testes e Debugging

Testes na Solana seguem uma piramide: testes unitarios rapidos na base, testes de integracao contra estado real no meio e fuzz testing para seguranca no topo. Esta pagina explica cada camada e quando usar cada ferramenta.

Um erro comum e executar todos os testes contra o `solana-test-validator`. Isso funciona, mas e lento -- iniciar um validador, implantar programas e esperar confirmacoes adiciona segundos a cada execucao de teste. As ferramentas abaixo permitem que voce teste in-process com tempos de execucao abaixo de um segundo.

---

## Testes Unitarios -- Rapidos, Isolados, Sem Validador

Testes unitarios verificam instrucoes individuais e operacoes de contas. Devem executar em milissegundos, nao segundos.

### LiteSVM

[https://github.com/LiteSVM/litesvm](https://github.com/LiteSVM/litesvm)

Uma Solana Virtual Machine leve, in-process, projetada especificamente para testes. O LiteSVM inicializa uma instancia SVM minima dentro do seu processo de teste -- sem validador, sem rede, sem RPC. Testes executam em tempos abaixo de um segundo, tornando o desenvolvimento orientado a testes pratico. Voce cria contas, implanta programas e processa instrucoes tudo dentro de uma unica funcao de teste Rust.

LiteSVM e o padrao recomendado para testes unitarios de programas Solana. Suporta tanto programas Anchor quanto native, lida com operacoes do system program (criacao de contas, transferencias) e te da controle total sobre o ambiente de teste (clock, rent, slot). Use sempre que precisar de feedback rapido sobre logica de instrucoes.

### Mollusk

[https://github.com/buffalojoec/mollusk](https://github.com/buffalojoec/mollusk)

Um harness de teste SVM focado em programas Solana native (nao-Anchor). O Mollusk fornece uma API limpa para testar instrucoes individuais com controle preciso sobre inputs de contas e outputs esperados. Seu diferencial e a medicao integrada de compute units -- cada resultado de teste inclui o CU exato consumido, tornando-o a ferramenta ideal para profiling e otimizacao de CU.

Use Mollusk quando estiver escrevendo programas native (especialmente Pinocchio), quando precisar de profiling de CU como parte da sua suite de testes, ou quando quiser a API de teste mais simples possivel sem dependencias do Anchor.

---

## Testes de Integracao -- Estado Real, Programas Reais

Testes de integracao verificam que seu programa funciona corretamente ao interagir com outros programas implantados e dados de contas reais.

### Surfpool

[https://github.com/txtx/surfpool](https://github.com/txtx/surfpool)

O Surfpool permite que voce reproduza estado da mainnet ou devnet localmente sem implantar nada. Ele busca dados de contas reais e estado de programas, e entao executa suas transacoes contra esse snapshot. Isso significa que voce pode testar as interacoes do seu programa com Jupiter, Pyth, SPL Token e qualquer outro programa implantado usando o estado real on-chain.

Use Surfpool quando precisar testar CPIs contra programas reais, quando quiser verificar que seu programa funciona com layouts de contas de producao, ou quando precisar reproduzir um problema da mainnet localmente. Ele preenche a lacuna entre testes unitarios (isolados) e implantacao em devnet (lento e custoso).

### Bankrun

[https://github.com/kevinheavey/solana-bankrun](https://github.com/kevinheavey/solana-bankrun)

BanksServer rodando dentro do Node.js para execucao rapida de testes TypeScript com Anchor. O Bankrun te da um ambiente de teste que se comporta como um cluster Solana real mas roda inteiramente in-process. E projetado especificamente para projetos Anchor onde seus testes sao escritos em TypeScript -- ele substitui o fluxo `anchor test` por algo muito mais rapido.

Use Bankrun quando tiver um projeto Anchor com testes de integracao TypeScript e quiser execucao mais rapida que o `solana-test-validator`. Suporta viagem no tempo (avanco de slots e timestamps), manipulacao de contas e todos os metodos RPC padrao.

---

## Fuzz Testing -- Encontrando Casos Limite

Fuzz testing gera inputs aleatorios para encontrar bugs que testes estruturados nao detectam. E essencial para programas criticos em seguranca.

### Trident

[https://github.com/Ackee-Blockchain/trident](https://github.com/Ackee-Blockchain/trident)

Framework de fuzz testing baseado em propriedades construido especificamente para programas Solana, criado pela Ackee Blockchain (auditores profissionais de Solana). O Trident gera sequencias aleatorias de instrucoes e configuracoes de contas, e entao verifica que os invariantes do seu programa se mantem. Ele encontrou vulnerabilidades reais em programas de producao que testes manuais e testes unitarios nao detectaram.

Use Trident antes de qualquer implantacao em mainnet que lida com fundos de usuarios. Defina os invariantes do seu programa (ex: "total de depositos deve ser igual a soma de todos os saldos de usuarios") e deixe o Trident tentar quebra-los. A configuracao inicial leva tempo, mas fornece confianca de que nenhuma combinacao de inputs pode violar as garantias do seu programa.

---

## Testes de Seguranca e Auditoria

### OtterSec (anteriormente Sec3)

[https://osec.io/](https://osec.io/)

Auditores de seguranca profissionais para Solana e a equipe por tras de diversas ferramentas de auditoria automatizada. A OtterSec auditou muitos dos maiores protocolos Solana incluindo Jupiter, Marinade e Tensor. Suas contribuicoes open-source incluem ferramentas de seguranca e pesquisa de vulnerabilidades que beneficiam todo o ecossistema.

Para desenvolvedores, a OtterSec publica relatorios de auditoria que servem como excelentes estudos de caso para entender vulnerabilidades reais em programas Solana. Ler suas auditorias publicadas e uma das melhores formas de aprender quais problemas de seguranca procurar nos seus proprios programas.

### Neodyme

[https://neodyme.io/](https://neodyme.io/)

Firma de pesquisa de seguranca e auditoria para Solana conhecida por analise tecnica aprofundada. A Neodyme publica posts e writeups sobre padroes de vulnerabilidade especificos da Solana -- ataques de type cosplay, substituicao de PDA, verificacoes de signer ausentes e abuso de CPI. Sua pesquisa e leitura obrigatoria para qualquer pessoa implantando programas que lidam com fundos de usuarios.

---

## Exploradores de Blocos

Quando algo da errado (ou certo) on-chain, exploradores ajudam a entender o que aconteceu.

### Solana Explorer

[https://explorer.solana.com/](https://explorer.solana.com/)

O explorador oficial mantido pela Solana Foundation. Exibe transacoes, contas, programas e validadores em todos os clusters (mainnet, devnet, testnet). A visualizacao de transacoes mostra detalhes de instrucoes, mudancas de contas e consumo de compute units. Use como seu padrao para inspecionar transacoes e verificar implantacoes. Suporta troca entre clusters via URL.

### Solscan

[https://solscan.io/](https://solscan.io/)

Um explorador abrangente focado em analytics. O Solscan se destaca em dados de tokens -- holders, historico de transferencias, dados de mercado e atividade DeFi. Tambem fornece analytics de contas, estatisticas de programas e uma interface mais limpa para navegar transacoes complexas. Use Solscan quando precisar de analytics de tokens, distribuicoes de holders ou uma representacao mais visual da atividade on-chain.

### SolanaFM

[https://solana.fm/](https://solana.fm/)

Um explorador focado em desenvolvedores que decodifica automaticamente dados de transacao usando IDLs de programas conhecidos. Quando voce inspeciona uma transacao, o SolanaFM mostra os parametros de instrucao decodificados e nomes de contas em vez de dados hex brutos. Isso torna o debugging significativamente mais rapido porque voce pode ver exatamente o que seu programa recebeu e como interpretou os inputs.

### XRAY

[https://xray.helius.xyz/](https://xray.helius.xyz/)

Um explorador minimalista e legivel construido pelo Helius. O XRAY foca em tornar dados de transacao compreensiveis para usuarios nao-tecnicos -- ele traduz transacoes Solana brutas em descricoes em linguagem natural como "Trocou 1.5 SOL por 200 USDC no Jupiter." Use quando precisar entender rapidamente o que uma transacao fez sem fazer parse de dados de instrucao, ou quando quiser compartilhar detalhes de transacao com nao-desenvolvedores.
