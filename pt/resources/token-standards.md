# Token Standards

Tokens na Solana sao gerenciados por programas on-chain -- principalmente SPL Token e seu sucessor Token-2022. Entender esses programas, suas extensoes e os padroes mais amplos de ativos digitais (NFTs, compressed NFTs) e essencial para qualquer desenvolvedor Solana. Esta pagina cobre todo o cenario.

---

## SPL Token Program

### SPL Token

[https://spl.solana.com/token](https://spl.solana.com/token)

O programa de token original que alimenta a maioria dos tokens na Solana hoje. O SPL Token lida com minting, transferencia, queima, congelamento e delegacao de tokens. Todo token fungivel baseado em SOL com o qual voce interagiu -- USDC, BONK, JUP -- usa este programa.

Os conceitos basicos sao diretos: uma conta **Mint** define o token (decimais, supply, autoridades), e **Token Accounts** armazenam saldos para proprietarios individuais. Associated Token Accounts (ATAs) fornecem um endereco deterministico para cada par proprietario-mint, entao voce sempre sabe onde estao os tokens de alguem. Entender SPL Token e fundamental -- mesmo se voce usar Token-2022, os conceitos base sao os mesmos.

### Token-2022 / Token Extensions

[https://spl.solana.com/token-2022](https://spl.solana.com/token-2022)

O programa de token de nova geracao que inclui tudo do SPL Token mais um sistema modular de extensoes. Token-2022 e totalmente retrocompativel -- qualquer operacao que voce pode fazer com SPL Token funciona com Token-2022 -- mas adiciona novas capacidades poderosas por meio de extensoes que voce habilita no momento da criacao do mint.

Token-2022 e o programa recomendado para novos lancamentos de tokens. O sistema de extensoes permite que voce construa funcionalidades diretamente no token que de outra forma exigiriam programas customizados, reduzindo complexidade e superficie de ataque.

---

## Extensoes Token-2022

Cada extensao adiciona uma capacidade especifica ao seu token. Extensoes sao selecionadas quando o mint e criado e nao podem ser alteradas depois. Aqui esta o que cada uma faz e quando voce a usaria.

### Transfer Hooks

Executa logica de programa customizada em cada transferencia. Quando um token com transfer hook e transferido, o programa de token automaticamente faz CPI no seu programa de hook, passando os detalhes da transferencia. Casos de uso incluem aplicacao de royalties em vendas secundarias, verificacoes de compliance que validam remetente/destinatario contra uma whitelist, analytics e logging de transferencias, e distribuicao customizada de taxas.

Esta e indiscutivelmente a extensao mais poderosa porque permite aplicar invariantes arbitrarios em cada transferencia sem exigir que usuarios interajam diretamente com seu programa.

### Confidential Transfers

Saldos e valores de transferencia criptografados usando provas de conhecimento zero. Com confidential transfers habilitadas, saldos de tokens sao armazenados como ciphertext criptografados on-chain, e transferencias incluem provas ZK que verificam que o remetente tem saldo suficiente sem revelar o valor real. O remetente e o destinatario ainda podem ver seus proprios saldos.

Casos de uso incluem stablecoins com preservacao de privacidade, sistemas de folha de pagamento onde valores de salario nao devem ser publicos, e qualquer aplicacao onde privacidade financeira importa. Note que o overhead computacional e significativo -- transacoes com confidential transfers consomem mais CU.

### Transfer Fees

Taxas no nivel do protocolo aplicadas automaticamente em cada transferencia. A autoridade do mint define uma taxa (como porcentagem em basis points, com um teto maximo), e a taxa e retida na token account do destinatario em cada transferencia. A taxa pode entao ser coletada pela autoridade de retirada.

Use quando quiser receita garantida do protocolo a partir de transferencias de tokens sem construir um programa customizado. Diferente de transfer hooks (que podem implementar taxas mas requerem um programa separado), transfer fees sao construidas diretamente no programa de token e nao podem ser contornadas.

### Permanent Delegate

Uma autoridade de delegate irrevogavel que pode transferir ou queimar tokens de qualquer token account para aquele mint. Uma vez definido na criacao do mint, o permanent delegate tem a capacidade de mover tokens sem a aprovacao explicita do proprietario.

Isso existe primariamente para compliance regulatorio -- emissores de stablecoin podem precisar da capacidade de congelar ou recuperar tokens para cumprir requisitos legais. E uma funcionalidade poderosa e potencialmente controversa que deve ser usada com governanca e transparencia claras.

### Non-Transferable (Soulbound)

Tokens que nao podem ser transferidos apos o minting. O token e permanentemente vinculado a conta em que foi mintado. Casos de uso incluem credenciais (diplomas universitarios, certificacoes), tokens de reputacao, registros de participacao em governanca, e qualquer ativo que deva representar uma conquista ou status nao-negociavel. Esta e a implementacao nativa da Solana de tokens soulbound.

### Interest-Bearing

Tokens com um saldo de exibicao que acumula juros ao longo do tempo. O saldo real on-chain nao muda -- em vez disso, o programa de token calcula um valor de exibicao baseado na taxa de juros e no tempo decorrido. A taxa de juros e definida pela autoridade de taxa e pode ser atualizada.

Use para stablecoins com rendimento, tokens de poupanca, ou qualquer token fungivel que deve parecer crescer em saldo ao longo do tempo. A distribuicao real de yield (se houver) deve ser tratada separadamente -- esta extensao afeta apenas como o saldo e exibido.

### Metadata

Metadados on-chain armazenados diretamente na conta do mint, sem requerer Metaplex ou qualquer programa externo. Voce pode armazenar nome, simbolo, URI e pares chave-valor arbitrarios diretamente no mint. Isso e significativamente mais simples e barato do que usar o programa Metaplex Token Metadata.

Use para tokens fungiveis simples que precisam de metadados basicos (nome, simbolo, imagem) mas nao precisam do conjunto completo de funcionalidades de NFT. Para NFTs e ativos digitais complexos, Metaplex Core ainda e a melhor escolha.

### Group/Member

Agrupamento e hierarquias de tokens. Um mint pode ser designado como grupo, e outros mints podem ser adicionados como membros desse grupo. Isso cria relacoes on-chain entre tokens -- util para colecoes de tokens, estruturas organizacionais, produtos agrupados, ou qualquer cenario onde tokens precisam de uma relacao pai-filho.

---

## Padroes de Stablecoin -- Superteam Brasil

### Solana Stablecoin Standard

[https://github.com/SuperteamBrazil/solana-stablecoin-standard](https://github.com/SuperteamBrazil/solana-stablecoin-standard)

Especificacoes SSS-1 e SSS-2 para emissao padronizada de stablecoins na Solana. SSS-1 define a interface basica -- mint, burn, pause, gestao de funcoes -- que qualquer stablecoin deve implementar. SSS-2 estende com recursos avancados incluindo hooks de compliance (transfer hooks que aplicam regras de KYC/AML), gestao de blacklist, integracao com oracles atualizaveis para feeds de preco e mecanismos de transparencia de reservas.

Ambas as especificacoes sao construidas nativamente sobre Token-2022, aproveitando transfer hooks para aplicacao de compliance e confidential transfers para transacoes com preservacao de privacidade. O padrao e projetado com mercados latino-americanos em mente, onde a adocao de stablecoins esta crescendo rapidamente e os requisitos regulatorios variam por jurisdicao. Ter uma especificacao comum significa que wallets, exchanges e protocolos DeFi podem suportar novas stablecoins compatíveis sem trabalho de integracao customizado. Mantido por @lvj_luiz e @kauenet.

---

## NFT e Ativos Digitais

### Metaplex Core

[https://developers.metaplex.com/core](https://developers.metaplex.com/core)

O padrao NFT de nova geracao e a escolha recomendada para novos projetos NFT na Solana. Core usa uma unica conta por NFT (vs as 3-5 contas necessarias pelo padrao legado), reduzindo custos de rent e simplificando consultas. Ele introduz um sistema de plugins para adicionar funcionalidades -- royalties, freeze, burn e plugins customizados -- sem modificar o programa principal.

Core aplica royalties no nivel do protocolo, significando que criadores podem garantir que recebam royalties em vendas secundarias. O design de conta unica tambem torna consultas de colecao mais rapidas e baratas por meio da DAS API. Se voce esta comecando um novo projeto NFT, use Core.

### Metaplex Bubblegum

[https://developers.metaplex.com/bubblegum](https://developers.metaplex.com/bubblegum)

Compressed NFTs (cNFTs) via state compression usando Merkle trees concorrentes. Bubblegum permite mintar milhoes de NFTs por centavos armazenando apenas uma raiz Merkle on-chain e os dados completos em armazenamento indexado off-chain (acessivel via DAS API de provedores como Helius).

O trade-off e complexidade -- ler compressed NFTs requer um indexador, e transferencias requerem provas Merkle. Mas a economia de custo e dramatica: mintar 1 milhao de NFTs custa poucos SOL com compressao vs milhares de SOL sem. Use Bubblegum para airdrops em larga escala, ativos de jogos, programas de fidelidade, ou qualquer caso de uso onde voce precisa de alto volume a baixo custo.

### Metaplex Token Metadata

[https://developers.metaplex.com/token-metadata](https://developers.metaplex.com/token-metadata)

O padrao de metadados legado que a maioria dos NFTs Solana existentes usa. Token Metadata anexa uma conta de metadados a um mint SPL Token, armazenando nome, simbolo, URI (apontando para JSON off-chain), criadores e informacoes de royalty. Embora Metaplex Core seja o padrao recomendado para novos projetos, Token Metadata permanece importante porque a grande maioria dos NFTs existentes o usa.

Voce vai encontrar Token Metadata ao trabalhar com colecoes existentes, marketplaces ou qualquer ferramenta anterior ao Core. Entender ambos os padroes e necessario para construir aplicacoes que interajam com toda a gama de NFTs Solana.

### Documentacao Metaplex

[https://developers.metaplex.com/](https://developers.metaplex.com/)

A documentacao completa da plataforma de desenvolvimento Metaplex cobrindo todos os seus programas e ferramentas -- Core, Bubblegum, Token Metadata, Candy Machine (minting), Sugar (CLI), Umi (framework de cliente) e mais. Este e seu ponto de partida para qualquer desenvolvimento de NFT ou ativos digitais na Solana. A documentacao inclui guias, referencias de API e exemplos de codigo para cada produto.
