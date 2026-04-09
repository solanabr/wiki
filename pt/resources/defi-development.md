# Desenvolvimento DeFi

Construir finanças descentralizadas na Solana significa integrar com um ecossistema maduro de protocolos, oracles e padrões. Esta página cobre os principais blocos de construção DeFi -- de roteamento de swaps a empréstimos e integração com oracles -- com detalhes suficientes para ajudá-lo a escolher os protocolos certos para seu projeto.

---

## Padrões -- Contribuições da Superteam Brasil

A Superteam Brasil está ativamente construindo padrões abertos que tornam o DeFi na Solana mais composável e interoperável.

### Solana Vault Standard (sRFC 40)

[https://github.com/solanabr/solana-vault-standard](https://github.com/solanabr/solana-vault-standard)

O equivalente do ERC-4626 para Solana -- uma interface de vault padronizada que define como vaults aceitam depósitos, processam saques e reportam valores de shares. O padrão inclui 8 variantes de vault cobrindo vaults de empréstimo, vaults de staking, agregadores de yield e mais. Qualquer wallet, agregador ou protocolo que implemente o padrão pode interagir com qualquer vault compatível sem código de integração customizado.

Isso importa porque a composabilidade DeFi depende de interfaces padronizadas. Sem um padrão de vault, cada protocolo implementa depósitos e saques de forma diferente, forçando integradores a escrever código customizado para cada um. Com o sRFC 40, uma wallet pode exibir oportunidades de yield de qualquer vault compatível por meio de uma única integração. Mantido por @kauenet, @thomgabriel, @vcnzo_ct e outros.

### Solana Stablecoin Standard

[https://github.com/solanabr/solana-stablecoin-standard](https://github.com/solanabr/solana-stablecoin-standard)

Especificações SSS-1 e SSS-2 para emissão padronizada de stablecoins na Solana. SSS-1 cobre operações básicas de mint/burn com controle de acesso baseado em funções. SSS-2 adiciona recursos avançados -- hooks de compliance, blacklisting, oracles atualizáveis e gestão de reservas. Ambas as especificações são nativas de Token-2022, aproveitando transfer hooks para aplicação de compliance e confidential transfers para privacidade.

Este padrão aborda uma lacuna real no ecossistema. À medida que mais stablecoins são lançadas na Solana (especialmente para mercados latino-americanos), ter uma especificação comum significa que wallets, exchanges e protocolos DeFi podem suportar novas stablecoins sem integrações customizadas. Mantido por @lvj_luiz e @kauenet.

---

## DEX e Roteamento de Swaps

### Jupiter

[https://dev.jup.ag/docs/get-started](https://dev.jup.ag/docs/get-started)

O principal agregador DEX da Solana e o ponto de entrada padrão para swaps. O Jupiter roteia trades por todas as principais DEXs da Solana para encontrar o melhor preço, dividindo ordens em múltiplas pools quando necessário. Além de swaps básicos, Jupiter fornece ordens limitadas, dollar-cost averaging (DCA) e trading de perpétuos.

Para desenvolvedores, a API e SDK do Jupiter são a forma mais fácil de adicionar funcionalidade de swap à sua aplicação. Em vez de integrar protocolos DEX individuais, você integra Jupiter uma vez e ganha acesso a todos eles. O portal de desenvolvedores em `dev.jup.ag` é o hub canônico, substituindo a documentação antiga em `station.jup.ag`. A Swap API lida com rotas complexas incluindo swaps multi-hop, e a mais recente Ultra API oferece fluxos de swap simplificados. Uma versão self-hosted da swap API está disponível para casos de uso críticos em latência, como liquidações. SDK: `@jup-ag/api` no npm. GitHub: [jup-ag/jupiter-swap-api-client](https://github.com/jup-ag/jupiter-swap-api-client).

### Raydium

[https://docs.raydium.io/](https://docs.raydium.io/)

Um AMM (Automated Market Maker) com pools de liquidez concentrada. O Raydium tem liquidez profunda para pares com SOL e frequentemente é o primeiro lugar onde novos tokens são lançados. Sua implementação de liquidez concentrada (CLMM) permite que provedores de liquidez concentrem capital em faixas de preço específicas para maior eficiência.

Para desenvolvedores construindo infraestrutura de liquidez, o SDK do Raydium fornece ferramentas para criação de pools, gestão de posições e execução de swaps. Se você está lançando um novo token, Raydium é provavelmente onde criará a pool de liquidez inicial.

### Orca / Whirlpools

[https://docs.orca.so/](https://docs.orca.so/)

Pools de liquidez concentrada com um SDK limpo e bem projetado. A implementação Whirlpools da Orca é conhecida pela experiência do desenvolvedor -- o SDK é bem tipado, bem documentado e direto de integrar. A Orca foca especificamente em liquidez concentrada, fazendo uma coisa bem feita.

Escolha Orca quando precisar de interação direta com pools (não roteamento agregado), quando quiser o SDK mais limpo para gestão de posições de liquidez concentrada, ou quando estiver construindo um protocolo que precisa criar ou gerenciar posições de LP programaticamente.

### Meteora

[https://docs.meteora.ag/](https://docs.meteora.ag/)

Liquidez dinâmica com o modelo DLMM (Dynamic Liquidity Market Maker). A inovação do Meteora está em como ele lida com bins de liquidez -- o preço é dividido em bins discretos, e swaps dentro de um bin tem zero slippage. Seu modelo de taxa se ajusta dinamicamente com base na volatilidade do mercado, significando que LPs ganham mais durante períodos voláteis.

Para desenvolvedores, Meteora é interessante se você está construindo sobre mecânicas de AMM inovadoras ou precisa das propriedades específicas de liquidez baseada em bins. O DLMM também alimenta muitos lançamentos de tokens por meio de sua funcionalidade de launch pool.

---

## Empréstimos

### Drift

[https://docs.drift.trade/](https://docs.drift.trade/)

Uma plataforma de trading completa oferecendo futuros perpétuos, trading spot, empréstimos e borrowing em um único protocolo. A arquitetura do Drift usa uma rede de keepers para matching de ordens e liquidações. Seu SDK permite acesso programático a todas as funcionalidades -- abrir posições de perps, gerenciar margem, ganhar yield com lending e construir bots de trading.

Use Drift quando precisar de mais do que empréstimos básicos -- a combinação de perps, spot e lending em um único protocolo o torna útil para construir aplicações DeFi complexas que precisam de múltiplas primitivas.

### Marginfi

[https://docs.marginfi.com/](https://docs.marginfi.com/)

Um protocolo de empréstimo focado em eficiência de capital e gestão de risco. O Marginfi suporta múltiplos tipos de colateral e fornece um SDK direto para depositar colateral, tomar emprestado e gerenciar posições. Seu motor de risco isola diferentes classes de ativos para prevenir contágio.

Integre o Marginfi quando sua aplicação precisar de funcionalidade de empréstimo. As contas do programa seguem um padrão consistente que torna a integração via CPI relativamente simples.

### Kamino

[https://docs.kamino.finance/](https://docs.kamino.finance/)

Estratégias automatizadas de liquidez e empréstimo. O Kamino começou como uma ferramenta de gestão automatizada de liquidez (rebalanceamento automático de posições LP na Orca e Raydium) e expandiu para lending. Seu produto de lending é integrado com seus vaults de liquidez, significando que tokens LP podem ser usados como colateral.

Kamino é útil quando você está construindo aplicações que precisam de otimização de yield ou gestão automatizada de posições. Suas estratégias de vault abstraem a complexidade da gestão ativa de liquidez.

---

## Oracles

Oracles fornecem dados off-chain (preços, aleatoriedade, feeds customizados) para programas on-chain. Escolher o oracle certo e integrá-lo corretamente é crítico para a segurança DeFi.

### Pyth Network

[https://docs.pyth.network/](https://docs.pyth.network/)

Feeds de preço de alta frequência e baixa latência usados pela maioria dos protocolos DeFi na Solana. O Pyth usa um modelo pull-based -- dados de preço são publicados em uma fonte off-chain, e seu programa puxa o preço mais recente quando precisa. Isso te dá atualizações de preço abaixo de um segundo sem pagar por escritas on-chain a cada tick de preço.

Pyth deve ser seu oracle padrão para qualquer aplicação DeFi que precisa de dados de preço. A integração requer postar a atualização de preço em uma conta antes que sua instrução a leia, o que significa que seu frontend deve buscar e incluir a atualização de preço na transação. O SDK deles lida com isso, mas esteja ciente do padrão. Sempre valide a defasagem do preço e os intervalos de confiança no seu programa.

### Switchboard

[https://docs.switchboard.xyz/](https://docs.switchboard.xyz/)

Uma rede de oracles permissionless onde qualquer pessoa pode criar feeds de dados customizados. Enquanto o Pyth foca em preços de ativos principais, o Switchboard permite trazer dados off-chain arbitrários para on-chain -- APIs customizadas, aleatoriedade, resultados esportivos, dados meteorológicos ou qualquer endpoint HTTP.

Use Switchboard quando precisar de dados que o Pyth não fornece, quando quiser aleatoriedade verificável (VRF) para aplicações de gaming ou loteria, ou quando precisar de feeds de dados customizados que agreguem múltiplas fontes.

---

## Liquid Staking

### Sanctum

[https://docs.sanctum.so/](https://docs.sanctum.so/)

Infraestrutura de liquid staking que viabiliza criação, negociação e unstaking instantâneo de LSTs (Liquid Staking Tokens) na Solana. O valor único do Sanctum é o roteador de LST -- ele permite swaps instantâneos entre quaisquer LSTs e SOL com slippage mínimo, resolvendo o problema de fragmentação de liquidez que afeta liquid staking em todas as chains.

Para desenvolvedores, Sanctum é relevante se você está construindo produtos de staking, DeFi baseado em LST, ou qualquer aplicação que precisa trabalhar com múltiplos tipos de LST. Seu pool Infinity aceita qualquer LST como input, tornando a integração simples.

### Jito

[https://docs.jito.network/](https://docs.jito.network/)

Liquid staking com MEV. O JitoSOL ganha yield padrão de staking mais recompensas adicionais de MEV do block engine do Jito, tornando-o um dos LSTs com maior rendimento na Solana. A infraestrutura do Jito também inclui distribuição de tips para validadores e um block engine que searchers usam para extração de MEV.

Para desenvolvedores, a relevância do Jito vai além do staking. Se você está construindo aplicações cientes de MEV, precisa entender o cenário de MEV da Solana ou quer integrar JitoSOL como colateral, a documentação do Jito cobre toda a stack desde tip accounts até restaking.

---

## Bridging e Cross-Chain

### Wormhole

[https://docs.wormhole.com/](https://docs.wormhole.com/)

Um protocolo de mensagens cross-chain que permite transferências de ativos e passagem de mensagens arbitrárias entre Solana e mais de 30 outras chains. O Wormhole usa uma rede de guardiões para verificar mensagens cross-chain, e sua integração com Solana suporta bridge de SOL, tokens SPL e NFTs para chains EVM, Cosmos e mais.

Para desenvolvedores, o SDK do Wormhole permite construir aplicações que interagem com ativos ou dados em múltiplas chains. Casos de uso incluem bridges de tokens cross-chain, governança multi-chain e aplicações que precisam verificar eventos de outras chains na Solana.

### deBridge

[https://docs.debridge.finance/](https://docs.debridge.finance/)

Uma bridge cross-chain de alta performance com suporte a Solana. O deBridge foca em transferências cross-chain rápidas e eficientes em capital com preços competitivos. Seu SDK fornece funcionalidade de swap e bridge que pode ser integrada em dApps para usuários que precisam mover ativos entre Solana e outras chains.

---

## Agregação DeFi e Analytics

### Birdeye

[https://docs.birdeye.so/](https://docs.birdeye.so/)

Analytics de tokens e API de dados para Solana. O Birdeye fornece feeds de preços em tempo real, scores de segurança de tokens, dados de portfolio de wallets, gráficos OHLCV e analytics de pares de trading via API. Seus dados cobrem tokens em todas as principais DEXs da Solana. Útil para construir interfaces de trading, trackers de portfolio ou qualquer aplicação que precise de dados abrangentes de mercado de tokens.

### DeFiLlama

[https://defillama.com/docs/api](https://defillama.com/docs/api)

Plataforma de analytics DeFi open-source com dados abrangentes de protocolos Solana. O DeFiLlama rastreia TVL, yields, preços de tokens e métricas de protocolos em todos os protocolos DeFi da Solana. Sua API é gratuita e fornece dados históricos úteis para pesquisa, dashboards de analytics e ferramentas de comparação de yield.

---

## Order Books On-Chain

### Phoenix DEX

[https://github.com/Ellipsis-Labs/phoenix-v1](https://github.com/Ellipsis-Labs/phoenix-v1)

Um order book central de limite (CLOB) totalmente on-chain construído pela Ellipsis Labs. A inovação chave do Phoenix é seu design sem crank -- trades liquidam atomicamente dentro da instrução sem exigir uma transação de crank separada, eliminando a dependência de keepers que afetava o Serum. O programa é open source sob Apache-2.0.

Para desenvolvedores, o Phoenix fornece um SDK limpo ([phoenix-sdk](https://github.com/Ellipsis-Labs/phoenix-sdk)) e CLI ([phoenix-cli](https://github.com/Ellipsis-Labs/phoenix-cli)) para criação de mercados, colocação/cancelamento de ordens limitadas, consultas ao order book e liquidação de trades. Estude o codebase para normalização de tick-size/lot-size, lógica de matching de ordens e o padrão de conta "trader state".

### OpenBook v2

[https://github.com/openbook-dex/openbook-v2](https://github.com/openbook-dex/openbook-v2)

Uma reescrita completa do order book comunitário (não é um fork do Serum), baseada no codebase do Mango v4. O monorepo contém tanto o programa Solana quanto o cliente TypeScript (`@openbook-dex/openbook-v2`). Desenvolvido como a resposta descentralizada da comunidade ao colapso do Serum/FTX. Nota: alguns componentes são licenciados sob GPL por trás da feature flag `enable-gpl`.

---

## Infraestrutura de Trading de NFTs

### Tensor Trade

[https://dev.tensor.trade/](https://dev.tensor.trade/)

Acesso programático à infraestrutura líder de trading de NFTs na Solana. O Tensor abriu o código de todos os seus cinco programas on-chain no Breakpoint 2024: marketplace (listagens, ordens limitadas, royalties), AMM (pools de bonding curve), escrow (gestão de bids), fees (distribuição de protocolo) e whitelist (verificação de coleções). Todos os programas são permissionless -- qualquer frontend pode acessar a liquidez on-chain do Tensor, e integradores ganham 50% das taxas geradas.

A abordagem via SDK é preferida em relação a API REST porque não requer chave de API e não tem limitação de taxa. SDKs disponíveis em TypeScript e Rust pela organização GitHub [tensor-foundation](https://github.com/tensor-foundation). Cobre listagem de NFTs, lances, compras, bids de coleção e operações com compressed NFTs.

---

## Automação e Agendamento

### TukTuk

[https://www.tuktuk.fun/docs](https://www.tuktuk.fun/docs)

Motor de automação on-chain permissionless construído por Noah Prince (Head of Protocol Engineering no Helium) -- o sucessor direto do Clockwork, que foi descontinuado em 2023. O TukTuk usa PDAs e bitmaps para agendamento de tarefas: você cria uma fila de tarefas, financia com SOL, e qualquer operador de crank permissionless pode executar suas tarefas por um pagamento por crank. Suporta agendamentos baseados em tempo, gatilhos de eventos on-chain e tarefas recursivas no estilo cron.

SDKs em TypeScript e Rust. GitHub: [helium/tuktuk](https://github.com/helium/tuktuk). Essencial para qualquer protocolo que necessite execução agendada -- liquidações, desbloqueios de vesting, atualizações de TWAP, transições de estado de jogos ou colheita automatizada de yield.

---

## Estimativa de Priority Fees

Entender e definir priority fees corretamente é crítico para o landing de transações na Solana. Desde o SIMD-0096, 100% das priority fees vão para o validador produtor do bloco (anteriormente 50% era queimado), criando um incentivo mais forte para validadores incluírem transações com taxas altas.

### Helius Priority Fee API

[https://www.helius.dev/docs/priority-fee-api](https://www.helius.dev/docs/priority-fee-api)

O serviço de estimativa de priority fees recomendado. Retorna 6 níveis de prioridade (Min, Low, Medium, High, VeryHigh, UnsafeMax) baseados em dados recentes de taxas para suas chaves de conta específicas. Mais preciso que o método RPC nativo porque considera as contas específicas que sua transação toca, não apenas médias globais.

### Guia de Priority Fees da Solana

[https://solana.com/developers/guides/advanced/how-to-use-priority-fees](https://solana.com/developers/guides/advanced/how-to-use-priority-fees)

O guia oficial cobrindo o Compute Budget Program, como definir priority fees via `ComputeBudgetProgram.setComputeUnitPrice()`, e como estimar o valor correto usando `getRecentPrioritizationFees`. Também cobre como definir limites de compute units baseados em resultados de simulação -- sempre defina um limite justo (uso real + 10-20% de buffer) para evitar pagar demais.
