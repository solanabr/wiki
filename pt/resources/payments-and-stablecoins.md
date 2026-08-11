# Pagamentos e Stablecoins

Pagamentos com stablecoins são, possivelmente, a vertical Solana mais forte para o Brasil. O país funciona sobre pagamentos instantâneos -- o Pix tornou as transferências em tempo real o padrão -- e a finalidade subsegundo da Solana com taxas próximas de zero é o que cripto tem de mais próximo dessa experiência. Os dados de mercado confirmam: uma pesquisa publicada pela Dune com a Visa em abril de 2026 constatou que o número de remetentes únicos de stablecoins não-USD na Solana quase triplicou em um ano, puxado por EURC e BRZ ([The Defiant](https://thedefiant.io/news/blockchains/solana-non-usd-stablecoin-senders-tripled-eurc-brz-mygmay)). Builders brasileiros já provaram seu valor aqui -- o MCPay (agora Frames) conquistou o 1º lugar na track de Stablecoins do Cypherpunk Hackathon. Esta página cobre os rails, os ramps e a regulação que você precisa entender antes de construir.

---

## Rails de Stablecoin na Solana

### USDC e Circle CCTP

[https://developers.circle.com/cctp](https://developers.circle.com/cctp)

O USDC é o rail padrão de dólar na Solana, e o Cross-Chain Transfer Protocol (CCTP) da Circle é como você o move entre chains sem risco de bridge. O CCTP é um utilitário permissionless de burn-and-mint: o USDC é queimado na chain de origem e mintado nativamente na de destino, então não há ativos wrapped nem pools de liquidez para drenar. O USDT também circula amplamente na Solana e continua sendo o rail mais profundo em muitos corredores de mercados emergentes.

Para desenvolvedores construindo fluxos de pagamento ou tesouraria que tocam múltiplas chains, o CCTP deve ser sua primeira parada -- ele transforma a liquidação cross-chain em uma primitiva de protocolo em vez de uma decisão de confiança sobre uma bridge de terceiros.

### EURC

[https://www.circle.com/eurc](https://www.circle.com/eurc)

A stablecoin da Circle lastreada em euro, emitida nativamente na Solana como um token SPL, em conformidade com a MiCA e resgatável 1:1 por euros. O EURC foi uma das duas stablecoins (ao lado do BRZ) que puxaram o crescimento de remetentes não-USD na Solana na pesquisa da Dune/Visa acima.

Para builders brasileiros, o EURC importa para o corredor Brasil-Europa -- remessas, pagamentos a freelancers e liquidação de importação/exportação em que as duas pontas da operação querem evitar o dólar como moeda intermediária.

### BRZ (Transfero)

[https://transfero.com/brz-stablecoin](https://transfero.com/brz-stablecoin)

A stablecoin de real brasileiro, emitida pela Transfero. Cada BRZ é lastreado 1:1 em BRL, com resgate por meio de parceiros regulados, e está ativo na Solana ao lado de outras grandes chains. O BRZ é conversível de e para dinheiro bancário via Pix pelo on/off-ramp da Transfero, o que o torna o bloco de construção prático para fluxos de pagamento denominados em BRL na Solana.

O BRZ foi o outro líder (com o EURC) do crescimento de stablecoins não-USD na Solana. Se o seu produto precifica qualquer coisa em reais -- folha de pagamento, faturas, checkout de comerciantes, payouts de remessas -- o BRZ é o ativo que permite que a liquidação permaneça on-chain até a última ponta em Pix.

### A Plataforma de Tokenização da B3 e sua Stablecoin de BRL

[https://www.coindesk.com/business/2025/12/17/brazilian-stock-exchange-b3-to-launch-its-own-tokenization-platform-and-stablecoin](https://www.coindesk.com/business/2025/12/17/brazilian-stock-exchange-b3-to-launch-its-own-tokenization-platform-and-stablecoin)

Em dezembro de 2025, a B3 -- a bolsa de valores brasileira -- anunciou planos para sua própria plataforma de tokenização mais uma stablecoin que deve ser atrelada ao real, servindo como a ponta de pagamento e liquidação do seu ambiente tokenizado, com lançamento previsto para 2026. A B3 não nomeou uma blockchain subjacente, então não assuma que nada disso chega à Solana.

O sinal importa independentemente da chain: quando a bolsa de valores nacional constrói liquidação on-chain denominada em BRL, pagamentos em real tokenizado deixam de ser um nicho cripto e viram infraestrutura de mercado. Veja [RWA e Tokenização](rwa-and-tokenization.md) para o lado de tokenização desse anúncio.

---

## Aceitando Pagamentos

### Solana Pay

[https://docs.solanapay.com/](https://docs.solanapay.com/)

O protocolo de pagamentos para comerciantes e aplicações na Solana -- solicitações de pagamento, QR codes e verificação de pagamentos on-chain, com suporte a pagamentos em SOL e em tokens SPL e fluxos de ponto de venda e e-commerce. O design de rastreamento por referência significa que você pode confirmar que um pagamento específico aconteceu sem escanear todas as transações.

O Solana Pay é coberto em mais profundidade em [Ferramentas de Desenvolvimento](development-tools.md); a versão curta para esta página é que ele combina naturalmente com as stablecoins acima -- um checkout que solicita USDC ou BRZ via Solana Pay é a stack canônica de "comércio com stablecoins" na Solana.

---

## Ramps de Pix e Liquidação Cross-Border

Todo produto sério de stablecoin no Brasil vive ou morre pelo seu ramp de Pix -- o on/off-ramp entre stablecoins e dinheiro bancário em BRL. O ramp de BRZ da Transfero (acima) é a rota mais direta; exchanges licenciadas e instituições de pagamento oferecem alternativas para USDC e USDT.

Uma ressalva estrutural antes de arquitetar um produto cross-border: pela Resolução 561 (abaixo), provedores regulados de eFX -- as fintechs que movimentam a maior parte dos pagamentos internacionais de varejo no Brasil -- ficam proibidos de liquidar esses fluxos em stablecoins ou cripto a partir de 1º de outubro de 2026. VASPs licenciadas ainda podem usar stablecoins para pagamentos internacionais sob o arcabouço da Resolução 521. Na prática, a licença que o seu parceiro de liquidação detém agora determina se o seu fluxo de stablecoin é legal, então verifique isso antes de integrar qualquer ramp.

---

## Regulação: O Arcabouço do BCB (em agosto de 2026)

### Resoluções 519, 520 e 521 do BCB

[https://notabene.id/post/brazils-central-bank-regulates-virtual-asset-service-providers-what-bcb-resolutions-mean-for-crypto-compliance](https://notabene.id/post/brazils-central-bank-regulates-virtual-asset-service-providers-what-bcb-resolutions-mean-for-crypto-compliance)

O Banco Central do Brasil regulou o setor por meio de três resoluções publicadas em novembro de 2025, em vigor desde 2 de fevereiro de 2026. A Resolução 519 define o processo de autorização para as SPSAVs (a categoria brasileira de VASP). A Resolução 520 estabelece as regras operacionais e prudenciais -- incluindo que stablecoins referenciadas em moeda fiduciária devem ser integralmente lastreadas 1:1 em fiat ou títulos públicos, o que na prática exclui stablecoins algorítmicas. A Resolução 521 trata transações com stablecoins como operações de câmbio sob o regime cambial brasileiro.

O prazo vivo para builders: o período de transição para provedores existentes obterem autorização do BCB termina em **30 de outubro de 2026**. Se você opera ou depende de um ramp, exchange ou custodiante brasileiro, essa entidade precisa de autorização até lá. A [página da Plasma sobre a regulação de stablecoins no Brasil](https://www.plasma.org/learn/tools/stablecoin-regulation-map/brazil) é um resumo mantido do arcabouço, incluindo as regras de reservas.

### Resolução 561 do BCB -- a Proibição de Stablecoins no eFX

[https://www.coindesk.com/policy/2026/05/02/brazil-s-central-bank-bans-stablecoin-and-crypto-settlement-in-cross-border-payments](https://www.coindesk.com/policy/2026/05/02/brazil-s-central-bank-bans-stablecoin-and-crypto-settlement-in-cross-border-payments)

Publicada em 30 de abril de 2026 e em vigor a partir de 1º de outubro de 2026, a Resolução 561 proíbe provedores de eFX -- o canal regulado do Brasil para pagamentos internacionais digitais -- de liquidar esses pagamentos em stablecoins ou outras criptos. A liquidação deve, em vez disso, passar por operações de câmbio tradicionais ou por contas em BRL de não-residentes. VASPs licenciadas ainda podem usar stablecoins para pagamentos internacionais sob o arcabouço da Resolução 521; a proibição mira especificamente o rail de liquidação do eFX, não o trading nem a custódia de cripto.

Este é o fato regulatório mais importante para quem constrói pagamentos cross-border no Brasil agora: a mesma transferência de stablecoin pode ser legal ou ilegal dependendo de fluir por uma VASP ou por um provedor de eFX.

---

## A Superteam Brasil em Pagamentos com Stablecoins

### Solana Stablecoin Standard (SSS-1 / SSS-2)

[https://github.com/solanabr/solana-stablecoin-standard](https://github.com/solanabr/solana-stablecoin-standard)

A especificação voltada a builders para emissão de stablecoins na Solana, da Superteam Brasil. A SSS-1 cobre a interface básica de mint/burn/pause com controle de acesso baseado em funções; a SSS-2 adiciona os recursos que a regulação brasileira agora efetivamente exige -- hooks de compliance, gestão de blacklist, oracles atualizáveis e transparência de reservas -- construídos nativamente sobre Token-2022. Se você vai emitir uma stablecoin que precisa sobreviver ao arcabouço do BCB acima, comece aqui. Mantido por @lvj_luiz e @kauenet.

O detalhamento completo está em [Token Standards](token-standards.md) e [Desenvolvimento DeFi](defi-development.md).

### MCPay (agora Frames)

O MCPay, que desde então mudou de marca para Frames, conquistou o 1º lugar na track de Stablecoins do Cypherpunk Hackathon com infraestrutura de pagamentos para stablecoins na Solana -- um primeiro lugar de track contra equipes internacionais, e prova de que builders brasileiros podem vencer essa vertical globalmente. Veja o [relatório de transparência do Q4 2025](../transparency/q4-2025.md) para os resultados completos.

---

## Páginas Relacionadas

* [Ferramentas de Desenvolvimento](development-tools.md) -- Solana Pay e o ferramental de pagamentos mais amplo
* [Token Standards](token-standards.md) -- extensões Token-2022 (transfer hooks, confidential transfers) e o Solana Stablecoin Standard
* [RWA e Tokenização](rwa-and-tokenization.md) -- a plataforma de tokenização da B3 e ativos tokenizados na Solana
* [Desenvolvimento DeFi](defi-development.md) -- roteamento de swaps e liquidez para pares de stablecoins
