# Desenvolvimento DeFi

Construir financas descentralizadas na Solana significa integrar com um ecossistema maduro de protocolos, oracles e padroes. Esta pagina cobre os principais blocos de construcao DeFi -- de roteamento de swaps a emprestimos e integracao com oracles -- com detalhes suficientes para ajuda-lo a escolher os protocolos certos para seu projeto.

---

## Padroes -- Contribuicoes da Superteam Brasil

A Superteam Brasil esta ativamente construindo padroes abertos que tornam o DeFi na Solana mais composavel e interoperavel.

### Solana Vault Standard (sRFC 40)

[https://github.com/SuperteamBrazil/solana-vault-standard](https://github.com/SuperteamBrazil/solana-vault-standard)

O equivalente do ERC-4626 para Solana -- uma interface de vault padronizada que define como vaults aceitam depositos, processam saques e reportam valores de shares. O padrao inclui 8 variantes de vault cobrindo vaults de emprestimo, vaults de staking, agregadores de yield e mais. Qualquer wallet, agregador ou protocolo que implemente o padrao pode interagir com qualquer vault compativel sem codigo de integracao customizado.

Isso importa porque a composabilidade DeFi depende de interfaces padronizadas. Sem um padrao de vault, cada protocolo implementa depositos e saques de forma diferente, forcando integradores a escrever codigo customizado para cada um. Com o sRFC 40, uma wallet pode exibir oportunidades de yield de qualquer vault compativel por meio de uma unica integracao. Mantido por @kauenet, @thomgabriel, @vcnzo_ct e outros.

### Solana Stablecoin Standard

[https://github.com/SuperteamBrazil/solana-stablecoin-standard](https://github.com/SuperteamBrazil/solana-stablecoin-standard)

Especificacoes SSS-1 e SSS-2 para emissao padronizada de stablecoins na Solana. SSS-1 cobre operacoes basicas de mint/burn com controle de acesso baseado em funcoes. SSS-2 adiciona recursos avancados -- hooks de compliance, blacklisting, oracles atualizaveis e gestao de reservas. Ambas as especificacoes sao nativas de Token-2022, aproveitando transfer hooks para aplicacao de compliance e confidential transfers para privacidade.

Este padrao aborda uma lacuna real no ecossistema. A medida que mais stablecoins sao lancadas na Solana (especialmente para mercados latino-americanos), ter uma especificacao comum significa que wallets, exchanges e protocolos DeFi podem suportar novas stablecoins sem integracoes customizadas. Mantido por @lvj_luiz e @kauenet.

---

## DEX e Roteamento de Swaps

### Jupiter

[https://dev.jup.ag/docs/get-started](https://dev.jup.ag/docs/get-started)

O principal agregador DEX da Solana e o ponto de entrada padrao para swaps. O Jupiter roteia trades por todas as principais DEXs da Solana para encontrar o melhor preco, dividindo ordens em multiplas pools quando necessario. Alem de swaps basicos, Jupiter fornece ordens limitadas, dollar-cost averaging (DCA) e trading de perpetuos.

Para desenvolvedores, a API e SDK do Jupiter sao a forma mais facil de adicionar funcionalidade de swap a sua aplicacao. Em vez de integrar protocolos DEX individuais, voce integra Jupiter uma vez e ganha acesso a todos eles. O portal de desenvolvedores em `dev.jup.ag` e o hub canonico, substituindo a documentacao antiga em `station.jup.ag`. A Swap API lida com rotas complexas incluindo swaps multi-hop, e a mais recente Ultra API oferece fluxos de swap simplificados. Uma versao self-hosted da swap API esta disponivel para casos de uso criticos em latencia, como liquidacoes. SDK: `@jup-ag/api` no npm. GitHub: [jup-ag/jupiter-swap-api-client](https://github.com/jup-ag/jupiter-swap-api-client).

### Raydium

[https://docs.raydium.io/](https://docs.raydium.io/)

Um AMM (Automated Market Maker) com pools de liquidez concentrada. O Raydium tem liquidez profunda para pares com SOL e frequentemente e o primeiro lugar onde novos tokens sao lancados. Sua implementacao de liquidez concentrada (CLMM) permite que provedores de liquidez concentrem capital em faixas de preco especificas para maior eficiencia.

Para desenvolvedores construindo infraestrutura de liquidez, o SDK do Raydium fornece ferramentas para criacao de pools, gestao de posicoes e execucao de swaps. Se voce esta lancando um novo token, Raydium e provavelmente onde criara a pool de liquidez inicial.

### Orca / Whirlpools

[https://docs.orca.so/](https://docs.orca.so/)

Pools de liquidez concentrada com um SDK limpo e bem projetado. A implementacao Whirlpools da Orca e conhecida pela experiencia do desenvolvedor -- o SDK e bem tipado, bem documentado e direto de integrar. A Orca foca especificamente em liquidez concentrada, fazendo uma coisa bem feita.

Escolha Orca quando precisar de interacao direta com pools (nao roteamento agregado), quando quiser o SDK mais limpo para gestao de posicoes de liquidez concentrada, ou quando estiver construindo um protocolo que precisa criar ou gerenciar posicoes de LP programaticamente.

### Meteora

[https://docs.meteora.ag/](https://docs.meteora.ag/)

Liquidez dinamica com o modelo DLMM (Dynamic Liquidity Market Maker). A inovacao do Meteora esta em como ele lida com bins de liquidez -- o preco e dividido em bins discretos, e swaps dentro de um bin tem zero slippage. Seu modelo de taxa se ajusta dinamicamente com base na volatilidade do mercado, significando que LPs ganham mais durante periodos volateis.

Para desenvolvedores, Meteora e interessante se voce esta construindo sobre mecanicas de AMM inovadoras ou precisa das propriedades especificas de liquidez baseada em bins. O DLMM tambem alimenta muitos lancamentos de tokens por meio de sua funcionalidade de launch pool.

---

## Emprestimos

### Drift

[https://docs.drift.trade/](https://docs.drift.trade/)

Uma plataforma de trading completa oferecendo futuros perpetuos, trading spot, emprestimos e borrowing em um unico protocolo. A arquitetura do Drift usa uma rede de keepers para matching de ordens e liquidacoes. Seu SDK permite acesso programatico a todas as funcionalidades -- abrir posicoes de perps, gerenciar margem, ganhar yield com lending e construir bots de trading.

Use Drift quando precisar de mais do que emprestimos basicos -- a combinacao de perps, spot e lending em um unico protocolo o torna util para construir aplicacoes DeFi complexas que precisam de multiplas primitivas.

### Marginfi

[https://docs.marginfi.com/](https://docs.marginfi.com/)

Um protocolo de emprestimo focado em eficiencia de capital e gestao de risco. O Marginfi suporta multiplos tipos de colateral e fornece um SDK direto para depositar colateral, tomar emprestado e gerenciar posicoes. Seu motor de risco isola diferentes classes de ativos para prevenir contagio.

Integre o Marginfi quando sua aplicacao precisar de funcionalidade de emprestimo. As contas do programa seguem um padrao consistente que torna a integracao via CPI relativamente simples.

### Kamino

[https://docs.kamino.finance/](https://docs.kamino.finance/)

Estrategias automatizadas de liquidez e emprestimo. O Kamino comecou como uma ferramenta de gestao automatizada de liquidez (rebalanceamento automatico de posicoes LP na Orca e Raydium) e expandiu para lending. Seu produto de lending e integrado com seus vaults de liquidez, significando que tokens LP podem ser usados como colateral.

Kamino e util quando voce esta construindo aplicacoes que precisam de otimizacao de yield ou gestao automatizada de posicoes. Suas estrategias de vault abstraem a complexidade da gestao ativa de liquidez.

---

## Oracles

Oracles fornecem dados off-chain (precos, aleatoriedade, feeds customizados) para programas on-chain. Escolher o oracle certo e integra-lo corretamente e critico para a seguranca DeFi.

### Pyth Network

[https://docs.pyth.network/](https://docs.pyth.network/)

Feeds de preco de alta frequencia e baixa latencia usados pela maioria dos protocolos DeFi na Solana. O Pyth usa um modelo pull-based -- dados de preco sao publicados em uma fonte off-chain, e seu programa puxa o preco mais recente quando precisa. Isso te da atualizacoes de preco abaixo de um segundo sem pagar por escritas on-chain a cada tick de preco.

Pyth deve ser seu oracle padrao para qualquer aplicacao DeFi que precisa de dados de preco. A integracao requer postar a atualizacao de preco em uma conta antes que sua instrucao a leia, o que significa que seu frontend deve buscar e incluir a atualizacao de preco na transacao. O SDK deles lida com isso, mas esteja ciente do padrao. Sempre valide a defasagem do preco e os intervalos de confianca no seu programa.

### Switchboard

[https://docs.switchboard.xyz/](https://docs.switchboard.xyz/)

Uma rede de oracles permissionless onde qualquer pessoa pode criar feeds de dados customizados. Enquanto o Pyth foca em precos de ativos principais, o Switchboard permite trazer dados off-chain arbitrarios para on-chain -- APIs customizadas, aleatoriedade, resultados esportivos, dados meteorologicos ou qualquer endpoint HTTP.

Use Switchboard quando precisar de dados que o Pyth nao fornece, quando quiser aleatoriedade verificavel (VRF) para aplicacoes de gaming ou loteria, ou quando precisar de feeds de dados customizados que agreguem multiplas fontes.

---

## Liquid Staking

### Sanctum

[https://docs.sanctum.so/](https://docs.sanctum.so/)

Infraestrutura de liquid staking que viabiliza criacao, negociacao e unstaking instantaneo de LSTs (Liquid Staking Tokens) na Solana. O valor unico do Sanctum e o roteador de LST -- ele permite swaps instantaneos entre quaisquer LSTs e SOL com slippage minimo, resolvendo o problema de fragmentacao de liquidez que afeta liquid staking em todas as chains.

Para desenvolvedores, Sanctum e relevante se voce esta construindo produtos de staking, DeFi baseado em LST, ou qualquer aplicacao que precisa trabalhar com multiplos tipos de LST. Seu pool Infinity aceita qualquer LST como input, tornando a integracao simples.

### Jito

[https://docs.jito.network/](https://docs.jito.network/)

Liquid staking com MEV. O JitoSOL ganha yield padrao de staking mais recompensas adicionais de MEV do block engine do Jito, tornando-o um dos LSTs com maior rendimento na Solana. A infraestrutura do Jito tambem inclui distribuicao de tips para validadores e um block engine que searchers usam para extracao de MEV.

Para desenvolvedores, a relevancia do Jito vai alem do staking. Se voce esta construindo aplicacoes cientes de MEV, precisa entender o cenario de MEV da Solana ou quer integrar JitoSOL como colateral, a documentacao do Jito cobre toda a stack desde tip accounts ate restaking.

---

## Bridging e Cross-Chain

### Wormhole

[https://docs.wormhole.com/](https://docs.wormhole.com/)

Um protocolo de mensagens cross-chain que permite transferencias de ativos e passagem de mensagens arbitrarias entre Solana e mais de 30 outras chains. O Wormhole usa uma rede de guardioes para verificar mensagens cross-chain, e sua integracao com Solana suporta bridge de SOL, tokens SPL e NFTs para chains EVM, Cosmos e mais.

Para desenvolvedores, o SDK do Wormhole permite construir aplicacoes que interagem com ativos ou dados em multiplas chains. Casos de uso incluem bridges de tokens cross-chain, governanca multi-chain e aplicacoes que precisam verificar eventos de outras chains na Solana.

### deBridge

[https://docs.debridge.finance/](https://docs.debridge.finance/)

Uma bridge cross-chain de alta performance com suporte a Solana. O deBridge foca em transferencias cross-chain rapidas e eficientes em capital com precos competitivos. Seu SDK fornece funcionalidade de swap e bridge que pode ser integrada em dApps para usuarios que precisam mover ativos entre Solana e outras chains.

---

## Agregacao DeFi e Analytics

### Birdeye

[https://docs.birdeye.so/](https://docs.birdeye.so/)

Analytics de tokens e API de dados para Solana. O Birdeye fornece feeds de precos em tempo real, scores de seguranca de tokens, dados de portfolio de wallets, graficos OHLCV e analytics de pares de trading via API. Seus dados cobrem tokens em todas as principais DEXs da Solana. Util para construir interfaces de trading, trackers de portfolio ou qualquer aplicacao que precise de dados abrangentes de mercado de tokens.

### DeFiLlama

[https://defillama.com/docs/api](https://defillama.com/docs/api)

Plataforma de analytics DeFi open-source com dados abrangentes de protocolos Solana. O DeFiLlama rastreia TVL, yields, precos de tokens e metricas de protocolos em todos os protocolos DeFi da Solana. Sua API e gratuita e fornece dados historicos uteis para pesquisa, dashboards de analytics e ferramentas de comparacao de yield.

---

## Order Books On-Chain

### Phoenix DEX

[https://github.com/Ellipsis-Labs/phoenix-v1](https://github.com/Ellipsis-Labs/phoenix-v1)

Um order book central de limite (CLOB) totalmente on-chain construido pela Ellipsis Labs. A inovacao chave do Phoenix e seu design sem crank -- trades liquidam atomicamente dentro da instrucao sem exigir uma transacao de crank separada, eliminando a dependencia de keepers que afetava o Serum. O programa e open source sob Apache-2.0.

Para desenvolvedores, o Phoenix fornece um SDK limpo ([phoenix-sdk](https://github.com/Ellipsis-Labs/phoenix-sdk)) e CLI ([phoenix-cli](https://github.com/Ellipsis-Labs/phoenix-cli)) para criacao de mercados, colocacao/cancelamento de ordens limitadas, consultas ao order book e liquidacao de trades. Estude o codebase para normalizacao de tick-size/lot-size, logica de matching de ordens e o padrao de conta "trader state".

### OpenBook v2

[https://github.com/openbook-dex/openbook-v2](https://github.com/openbook-dex/openbook-v2)

Uma reescrita completa do order book comunitario (nao e um fork do Serum), baseada no codebase do Mango v4. O monorepo contem tanto o programa Solana quanto o cliente TypeScript (`@openbook-dex/openbook-v2`). Desenvolvido como a resposta descentralizada da comunidade ao colapso do Serum/FTX. Nota: alguns componentes sao licenciados sob GPL por tras da feature flag `enable-gpl`.

---

## Infraestrutura de Trading de NFTs

### Tensor Trade

[https://dev.tensor.trade/](https://dev.tensor.trade/)

Acesso programatico a infraestrutura lider de trading de NFTs na Solana. O Tensor abriu o codigo de todos os seus cinco programas on-chain no Breakpoint 2024: marketplace (listagens, ordens limitadas, royalties), AMM (pools de bonding curve), escrow (gestao de bids), fees (distribuicao de protocolo) e whitelist (verificacao de colecoes). Todos os programas sao permissionless -- qualquer frontend pode acessar a liquidez on-chain do Tensor, e integradores ganham 50% das taxas geradas.

A abordagem via SDK e preferida em relacao a API REST porque nao requer chave de API e nao tem limitacao de taxa. SDKs disponiveis em TypeScript e Rust pela organizacao GitHub [tensor-foundation](https://github.com/tensor-foundation). Cobre listagem de NFTs, lances, compras, bids de colecao e operacoes com compressed NFTs.

---

## Automacao e Agendamento

### TukTuk

[https://www.tuktuk.fun/docs](https://www.tuktuk.fun/docs)

Motor de automacao on-chain permissionless construido por Noah Prince (Head of Protocol Engineering no Helium) -- o sucessor direto do Clockwork, que foi descontinuado em 2023. O TukTuk usa PDAs e bitmaps para agendamento de tarefas: voce cria uma fila de tarefas, financia com SOL, e qualquer operador de crank permissionless pode executar suas tarefas por um pagamento por crank. Suporta agendamentos baseados em tempo, gatilhos de eventos on-chain e tarefas recursivas no estilo cron.

SDKs em TypeScript e Rust. GitHub: [helium/tuktuk](https://github.com/helium/tuktuk). Essencial para qualquer protocolo que necessite execucao agendada -- liquidacoes, desbloqueios de vesting, atualizacoes de TWAP, transicoes de estado de jogos ou colheita automatizada de yield.

---

## Estimativa de Priority Fees

Entender e definir priority fees corretamente e critico para o landing de transacoes na Solana. Desde o SIMD-0096, 100% das priority fees vao para o validador produtor do bloco (anteriormente 50% era queimado), criando um incentivo mais forte para validadores incluirem transacoes com taxas altas.

### Helius Priority Fee API

[https://www.helius.dev/docs/priority-fee-api](https://www.helius.dev/docs/priority-fee-api)

O servico de estimativa de priority fees recomendado. Retorna 6 niveis de prioridade (Min, Low, Medium, High, VeryHigh, UnsafeMax) baseados em dados recentes de taxas para suas chaves de conta especificas. Mais preciso que o metodo RPC nativo porque considera as contas especificas que sua transacao toca, nao apenas medias globais.

### Guia de Priority Fees da Solana

[https://solana.com/developers/guides/advanced/how-to-use-priority-fees](https://solana.com/developers/guides/advanced/how-to-use-priority-fees)

O guia oficial cobrindo o Compute Budget Program, como definir priority fees via `ComputeBudgetProgram.setComputeUnitPrice()`, e como estimar o valor correto usando `getRecentPrioritizationFees`. Tambem cobre como definir limites de compute units baseados em resultados de simulacao -- sempre defina um limite justo (uso real + 10-20% de buffer) para evitar pagar demais.
