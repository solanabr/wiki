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

[https://station.jup.ag/docs](https://station.jup.ag/docs)

O principal agregador DEX da Solana e o ponto de entrada padrao para swaps. O Jupiter roteia trades por todas as principais DEXs da Solana para encontrar o melhor preco, dividindo ordens em multiplas pools quando necessario. Alem de swaps basicos, Jupiter fornece ordens limitadas, dollar-cost averaging (DCA) e trading de perpetuos.

Para desenvolvedores, a API e SDK do Jupiter sao a forma mais facil de adicionar funcionalidade de swap a sua aplicacao. Em vez de integrar protocolos DEX individuais, voce integra Jupiter uma vez e ganha acesso a todos eles. A API v6 e bem documentada e lida com rotas complexas incluindo swaps multi-hop. Se sua aplicacao precisa de qualquer forma de troca de tokens, comece com Jupiter.

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
