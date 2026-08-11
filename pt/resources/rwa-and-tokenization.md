# RWA e Tokenização

Ativos do mundo real (RWA) tokenizados se tornaram uma das 3 maiores verticais da Solana em 2026. Segundo dados da rwa.xyz, o valor de RWAs tokenizados na Solana aproximadamente quadruplicou no primeiro semestre de 2026, atingindo o recorde de US$ 3,62 bilhões (contra ~US$ 873 milhões em janeiro), o que a torna a terceira maior chain de RWA, com cerca de 10,4% de participação ([The Crypto Basic](https://thecryptobasic.com/2026/07/10/solana-tokenized-rwa-market-soars-4x-hits-record-3-62b-in-h1-2026/)). O Ethereum ainda lidera em valor total de RWA -- o domínio claro da Solana está especificamente em **ações** tokenizadas, onde ela processa aproximadamente 95% de todo o volume on-chain de ações tokenizadas ([Crypto Briefing](https://cryptobriefing.com/solana-tokenized-stocks-analytics-dashboard/)), com US$ 5,77 bilhões em volume spot só no Q2 de 2026 ([Genfinity](https://genfinity.io/2026/07/06/tokenized-stocks-on-solana-explode-past-5-77b-q2-2026/)). Para builders brasileiros, o timing é notável: a B3 está construindo sua própria plataforma de tokenização, e um projeto brasileiro de RWA já foi reconhecido no Cypherpunk. Esta página mapeia os emissores, a infraestrutura e a oportunidade local.

---

## Ações Tokenizadas

### xStocks (Backed)

[https://xstocks.com/](https://xstocks.com/)

Ações e ETFs dos EUA tokenizados, emitidos pelo framework xStocks da Backed -- tokens SPL lastreados 1:1 pelas ações subjacentes mantidas em custódia regulada, resgatáveis pelo valor equivalente em dinheiro ou pelo ativo subjacente, e negociáveis 24/7. A Raydium é o principal venue spot para xStocks (cruzando US$ 3 bilhões em volume acumulado até junho de 2026), com distribuição via Jupiter, Kraken e Bybit, e integrações de wallet incluindo a Solflare, que listava 134 xStocks em sua integração de junho de 2026.

Para desenvolvedores, xStocks são tokens SPL comuns: eles compõem com a mesma infraestrutura de DEX, empréstimos e wallets que qualquer outro ativo Solana. Essa composabilidade -- exposição a ações dentro do DeFi -- é o motivo de quase todo o volume on-chain de ações tokenizadas liquidar na Solana.

### Ondo Global Markets

[https://ondo.finance/](https://ondo.finance/)

A plataforma de ações tokenizadas da Ondo, que foi lançada com mais de 200 ações e ETFs dos EUA tokenizados e já passou de 400 ativos -- o maior emissor do dashboard de ações da rwa.xyz por valor. Os tokens da Ondo são livremente transferíveis e projetados para serem usáveis em DeFi, em vez de trancados em um jardim murado.

Acompanhe a Ondo se você está construindo qualquer coisa que consuma ações tokenizadas -- produtos de portfólio, yield estruturado, empréstimos colateralizados -- porque a amplitude do seu catálogo a torna a fonte mais provável de exposição on-chain a ações de cauda longa.

---

## Treasuries e Fundos Tokenizados

### Ondo USDY

[https://ondo.finance/usdy](https://ondo.finance/usdy)

Um token de dólar com rendimento, lastreado por uma carteira de títulos do Tesouro americano de curto prazo com prova de reservas diária, nativo na Solana desde o início de 2024. O USDY fica entre uma stablecoin e um fundo de money market: ele mira um valor estável em dólar enquanto repassa o rendimento dos Treasuries aos holders.

Na Solana, o USDY já está integrado por todo o DeFi -- incluindo Kamino e Raydium -- o que o torna a escolha prática quando o seu protocolo quer colateral em dólar que rende enquanto está parado.

### Franklin Templeton BENJI (FOBXX)

[https://digitalassets.franklintempleton.com/benji/](https://digitalassets.franklintempleton.com/benji/)

O Franklin OnChain U.S. Government Money Fund -- o primeiro fundo de money market registrado nos EUA com registro nativo on-chain, em que cada token BENJI representa uma cota do FOBXX. O fundo está ativo na Solana desde fevereiro de 2025 (acesso institucional).

O BENJI importa tanto como sinal quanto como produto: uma grande gestora de ativos tradicional rodando o registro de cotas de um fundo registrado na Solana é o modelo que emissores brasileiros regulados -- incluindo, potencialmente, participantes da plataforma da B3 -- seguiriam.

---

## Analytics

### Dashboard de Ações da rwa.xyz

[https://app.rwa.xyz/stocks](https://app.rwa.xyz/stocks)

O rastreador canônico de analytics para ativos tokenizados, com um dashboard dedicado a ações tokenizadas cobrindo mais de 3.700 ações tokenizadas entre plataformas em agosto de 2026 -- filtrável por plataforma, rede, número de holders e volume de transferências, com rankings de emissores. O site mais amplo da rwa.xyz rastreia o cenário completo de RWA (treasuries, crédito, commodities) entre chains.

Use antes de construir: os dashboards respondem empiricamente "quais ativos têm volume e holders reais", que é exatamente a pergunta que deve moldar o que você integra primeiro.

---

## Token-2022 para Emissores de RWA

Se você vai emitir um token de RWA em vez de integrar um, o Token-2022 é o kit de ferramentas que torna compliance on-chain possível sem um programa customizado. Transfer hooks permitem aplicar whitelists e verificações de KYC em cada transferência; confidential transfers e confidential balances mantêm valores privados onde a divulgação é um problema (folha de pagamento, posições institucionais); permanent delegate dá suporte aos poderes de congelamento/clawback de que emissores regulados tipicamente precisam. Tudo isso -- mais os hooks de compliance da SSS-2 do Solana Stablecoin Standard -- é coberto em profundidade em [Token Standards](token-standards.md).

---

## O Ângulo Brasil

### VitalFi (agora Credit.Markets)

[https://vitalfi.lat/](https://vitalfi.lat/)

O case study local: a VitalFi tokeniza recebíveis médicos brasileiros na Solana, permitindo que depositantes de USDT financiem provedores de saúde por meio de vaults e ganhem rendimento dos recebíveis subjacentes. O projeto recebeu uma Menção Honrosa na track de RWA do Cypherpunk Hackathon e desde então mudou de marca para Credit.Markets. Veja o [Hall of Fame Brasil](../hackathon/hall-of-fame.md) e o [relatório de transparência do Q4 2025](../transparency/q4-2025.md).

A VitalFi aponta para o nicho mais aberto a builders brasileiros: recebíveis e crédito privado. O Brasil tem um mercado de recebíveis grande e juridicamente maduro, e tokenizá-lo exige exatamente o conhecimento local -- registradoras, estruturas fiduciárias, dinâmica de cobrança -- que emissores internacionais não têm.

### A Plataforma de Tokenização da B3

[https://www.coindesk.com/business/2025/12/17/brazilian-stock-exchange-b3-to-launch-its-own-tokenization-platform-and-stablecoin](https://www.coindesk.com/business/2025/12/17/brazilian-stock-exchange-b3-to-launch-its-own-tokenization-platform-and-stablecoin)

Em dezembro de 2025, a B3 -- a bolsa de valores brasileira -- anunciou uma plataforma de tokenização projetada para compartilhar liquidez com seus sistemas tradicionais de ações, mais uma stablecoin atrelada ao BRL como a ponta de pagamento e liquidação, prevista para 2026. Registre a limitação com honestidade: a B3 não nomeou uma blockchain subjacente, então não há base para assumir que rode na Solana.

O que isso significa para builders de qualquer forma: a bolsa nacional entrando em tokenização legitima a vertical e vai criar demanda por tudo ao redor -- integrações de custódia, ferramentas de compliance, infraestrutura de mercado secundário -- e muito disso pode ser construído de forma agnóstica de chain hoje e apontado para onde a liquidez pousar.

---

## Páginas Relacionadas

* [Token Standards](token-standards.md) -- extensões Token-2022 e o Solana Stablecoin Standard para emissão em conformidade
* [Pagamentos e Stablecoins](payments-and-stablecoins.md) -- BRZ, ramps de Pix e a regulação brasileira de stablecoins
* [Desenvolvimento DeFi](defi-development.md) -- as DEXs, oracles e padrões de vault com os quais tokens de RWA compõem
* [Hall of Fame Brasil](../hackathon/hall-of-fame.md) -- VitalFi e outros projetos brasileiros de destaque em hackathons
