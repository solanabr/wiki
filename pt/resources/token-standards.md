# Token Standards

Tokens na Solana são gerenciados por programas on-chain -- principalmente SPL Token e seu sucessor Token-2022. Entender esses programas, suas extensões e os padrões mais amplos de ativos digitais (NFTs, compressed NFTs) é essencial para qualquer desenvolvedor Solana. Esta página cobre todo o cenário.

---

## SPL Token Program

### SPL Token

[https://spl.solana.com/token](https://spl.solana.com/token)

O programa de token original que alimenta a maioria dos tokens na Solana hoje. O SPL Token lida com minting, transferência, queima, congelamento e delegação de tokens. Todo token fungível baseado em SOL com o qual você interagiu -- USDC, BONK, JUP -- usa este programa.

Os conceitos básicos são diretos: uma conta **Mint** define o token (decimais, supply, autoridades), e **Token Accounts** armazenam saldos para proprietários individuais. Associated Token Accounts (ATAs) fornecem um endereço determinístico para cada par proprietário-mint, então você sempre sabe onde estão os tokens de alguém. Entender SPL Token é fundamental -- mesmo se você usar Token-2022, os conceitos base são os mesmos.

### Token-2022 / Token Extensions

[https://spl.solana.com/token-2022](https://spl.solana.com/token-2022)

O programa de token de nova geração que inclui tudo do SPL Token mais um sistema modular de extensões. Token-2022 é totalmente retrocompatível -- qualquer operação que você pode fazer com SPL Token funciona com Token-2022 -- mas adiciona novas capacidades poderosas por meio de extensões que você habilita no momento da criação do mint.

Token-2022 é o programa recomendado para novos lançamentos de tokens. O sistema de extensões permite que você construa funcionalidades diretamente no token que de outra forma exigiriam programas customizados, reduzindo complexidade e superfície de ataque.

---

## Extensões Token-2022

Cada extensão adiciona uma capacidade específica ao seu token. Extensões são selecionadas quando o mint é criado e não podem ser alteradas depois. Aqui está o que cada uma faz e quando você a usaria.

### Transfer Hooks

Executa lógica de programa customizada em cada transferência. Quando um token com transfer hook é transferido, o programa de token automaticamente faz CPI no seu programa de hook, passando os detalhes da transferência. Casos de uso incluem aplicação de royalties em vendas secundárias, verificações de compliance que validam remetente/destinatário contra uma whitelist, analytics e logging de transferências, e distribuição customizada de taxas.

Esta é indiscutivelmente a extensão mais poderosa porque permite aplicar invariantes arbitrários em cada transferência sem exigir que usuários interajam diretamente com seu programa.

### Confidential Transfers

Saldos e valores de transferência criptografados usando provas de conhecimento zero. Com confidential transfers habilitadas, saldos de tokens são armazenados como ciphertext criptografados on-chain, e transferências incluem provas ZK que verificam que o remetente tem saldo suficiente sem revelar o valor real. O remetente e o destinatário ainda podem ver seus próprios saldos.

Casos de uso incluem stablecoins com preservação de privacidade, sistemas de folha de pagamento onde valores de salário não devem ser públicos, e qualquer aplicação onde privacidade financeira importa. Note que o overhead computacional é significativo -- transações com confidential transfers consomem mais CU.

### Transfer Fees

Taxas no nível do protocolo aplicadas automaticamente em cada transferência. A autoridade do mint define uma taxa (como porcentagem em basis points, com um teto máximo), e a taxa é retida na token account do destinatário em cada transferência. A taxa pode então ser coletada pela autoridade de retirada.

Use quando quiser receita garantida do protocolo a partir de transferências de tokens sem construir um programa customizado. Diferente de transfer hooks (que podem implementar taxas mas requerem um programa separado), transfer fees são construídas diretamente no programa de token e não podem ser contornadas.

### Permanent Delegate

Uma autoridade de delegate irrevogável que pode transferir ou queimar tokens de qualquer token account para aquele mint. Uma vez definido na criação do mint, o permanent delegate tem a capacidade de mover tokens sem a aprovação explícita do proprietário.

Isso existe primariamente para compliance regulatório -- emissores de stablecoin podem precisar da capacidade de congelar ou recuperar tokens para cumprir requisitos legais. É uma funcionalidade poderosa e potencialmente controversa que deve ser usada com governança e transparência claras.

### Non-Transferable (Soulbound)

Tokens que não podem ser transferidos após o minting. O token é permanentemente vinculado à conta em que foi mintado. Casos de uso incluem credenciais (diplomas universitários, certificações), tokens de reputação, registros de participação em governança, e qualquer ativo que deva representar uma conquista ou status não-negociável. Esta é a implementação nativa da Solana de tokens soulbound.

### Interest-Bearing

Tokens com um saldo de exibição que acumula juros ao longo do tempo. O saldo real on-chain não muda -- em vez disso, o programa de token calcula um valor de exibição baseado na taxa de juros e no tempo decorrido. A taxa de juros é definida pela autoridade de taxa e pode ser atualizada.

Use para stablecoins com rendimento, tokens de poupança, ou qualquer token fungível que deve parecer crescer em saldo ao longo do tempo. A distribuição real de yield (se houver) deve ser tratada separadamente -- esta extensão afeta apenas como o saldo é exibido.

### Metadata

Metadados on-chain armazenados diretamente na conta do mint, sem requerer Metaplex ou qualquer programa externo. Você pode armazenar nome, símbolo, URI e pares chave-valor arbitrários diretamente no mint. Isso é significativamente mais simples e barato do que usar o programa Metaplex Token Metadata.

Use para tokens fungíveis simples que precisam de metadados básicos (nome, símbolo, imagem) mas não precisam do conjunto completo de funcionalidades de NFT. Para NFTs e ativos digitais complexos, Metaplex Core ainda é a melhor escolha.

### Group/Member

Agrupamento e hierarquias de tokens. Um mint pode ser designado como grupo, e outros mints podem ser adicionados como membros desse grupo. Isso cria relações on-chain entre tokens -- útil para coleções de tokens, estruturas organizacionais, produtos agrupados, ou qualquer cenário onde tokens precisam de uma relação pai-filho.

---

## Padrões de Stablecoin -- Superteam Brasil

### Solana Stablecoin Standard

[https://github.com/solanabr/solana-stablecoin-standard](https://github.com/solanabr/solana-stablecoin-standard)

Especificações SSS-1 e SSS-2 para emissão padronizada de stablecoins na Solana. SSS-1 define a interface básica -- mint, burn, pause, gestão de funções -- que qualquer stablecoin deve implementar. SSS-2 estende com recursos avançados incluindo hooks de compliance (transfer hooks que aplicam regras de KYC/AML), gestão de blacklist, integração com oracles atualizáveis para feeds de preço e mecanismos de transparência de reservas.

Ambas as especificações são construídas nativamente sobre Token-2022, aproveitando transfer hooks para aplicação de compliance e confidential transfers para transações com preservação de privacidade. O padrão é projetado com mercados latino-americanos em mente, onde a adoção de stablecoins está crescendo rapidamente e os requisitos regulatórios variam por jurisdição. Ter uma especificação comum significa que wallets, exchanges e protocolos DeFi podem suportar novas stablecoins compatíveis sem trabalho de integração customizado. Mantido por @lvj_luiz e @kauenet.

---

## NFT e Ativos Digitais

### Metaplex Core

[https://developers.metaplex.com/core](https://developers.metaplex.com/core)

O padrão NFT de nova geração e a escolha recomendada para novos projetos NFT na Solana. Core usa uma única conta por NFT (vs as 3-5 contas necessárias pelo padrão legado), reduzindo custos de rent e simplificando consultas. Ele introduz um sistema de plugins para adicionar funcionalidades -- royalties, freeze, burn e plugins customizados -- sem modificar o programa principal.

Core aplica royalties no nível do protocolo, significando que criadores podem garantir que recebam royalties em vendas secundárias. O design de conta única também torna consultas de coleção mais rápidas e baratas por meio da DAS API. Se você está começando um novo projeto NFT, use Core.

### Metaplex Bubblegum

[https://developers.metaplex.com/bubblegum](https://developers.metaplex.com/bubblegum)

Compressed NFTs (cNFTs) via state compression usando Merkle trees concorrentes. Bubblegum permite mintar milhões de NFTs por centavos armazenando apenas uma raiz Merkle on-chain e os dados completos em armazenamento indexado off-chain (acessível via DAS API de provedores como Helius).

O trade-off é complexidade -- ler compressed NFTs requer um indexador, e transferências requerem provas Merkle. Mas a economia de custo é dramática: mintar 1 milhão de NFTs custa poucos SOL com compressão vs milhares de SOL sem. Use Bubblegum para airdrops em larga escala, ativos de jogos, programas de fidelidade, ou qualquer caso de uso onde você precisa de alto volume a baixo custo.

### Metaplex Token Metadata

[https://developers.metaplex.com/token-metadata](https://developers.metaplex.com/token-metadata)

O padrão de metadados legado que a maioria dos NFTs Solana existentes usa. Token Metadata anexa uma conta de metadados a um mint SPL Token, armazenando nome, símbolo, URI (apontando para JSON off-chain), criadores e informações de royalty. Embora Metaplex Core seja o padrão recomendado para novos projetos, Token Metadata permanece importante porque a grande maioria dos NFTs existentes o usa.

Você vai encontrar Token Metadata ao trabalhar com coleções existentes, marketplaces ou qualquer ferramenta anterior ao Core. Entender ambos os padrões é necessário para construir aplicações que interajam com toda a gama de NFTs Solana.

### Documentação Metaplex

[https://developers.metaplex.com/](https://developers.metaplex.com/)

A documentação completa da plataforma de desenvolvimento Metaplex cobrindo todos os seus programas e ferramentas -- Core, Bubblegum, Token Metadata, Candy Machine (minting), Sugar (CLI), Umi (framework de cliente) e mais. Este é seu ponto de partida para qualquer desenvolvimento de NFT ou ativos digitais na Solana. A documentação inclui guias, referências de API e exemplos de código para cada produto.

### MPL-Hybrid (MPL-404)

[https://developers.metaplex.com/mpl-hybrid](https://developers.metaplex.com/mpl-hybrid)

Um protocolo para ativos híbridos NFT-token fungível que podem alternar entre ser um NFT e um token fungível. O MPL-404 habilita mecânicas de "re-rolling" onde holders podem trocar entre formas NFT e token, criando dinâmicas únicas de trading e gamificação. O protocolo gerencia escrow, troca e gestão de metadados para ambos os estados. Use para ativos de jogos que precisam de liquidez, colecionáveis com pares de trading fungíveis, ou qualquer ativo que se beneficie de representação dual.

---

## Recursos Avançados de Token-2022

### Confidential Balances

Confidential Balances é uma evolução da extensão Confidential Transfers que aplica criptografia homomórfica a todos os saldos de tokens, não apenas transferências. Com Confidential Balances habilitado, o saldo on-chain em si é criptografado -- apenas o proprietário da conta (ou auditores designados) podem descriptografar e ver o valor real. Isso fornece garantias de privacidade mais fortes que Confidential Transfers sozinho e está sendo desenvolvido para casos de uso como gestão de tesouraria institucional, sistemas de folha de pagamento privada e produtos financeiros regulados onde privacidade de saldo é um requisito de compliance.

### Token-2022 CLI Tools

[https://spl.solana.com/token-2022/extensions](https://spl.solana.com/token-2022/extensions)

O CLI `spl-token` inclui suporte completo para criar e gerenciar mints Token-2022 com extensões. Você pode criar mints com transfer hooks, taxas, metadados e outras extensões diretamente da linha de comando -- útil para testes, prototipagem e operações administrativas pontuais. A documentação do CLI fornece exemplos de comandos para cada tipo de extensão, tornando-o a forma mais rápida de experimentar com funcionalidades Token-2022 antes de escrever código de programa.

---

## Ferramentas do Ecossistema de Tokens

### Solana Token List

[https://github.com/solana-labs/token-list](https://github.com/solana-labs/token-list)

O registro de tokens legado que mapeia endereços de mint para metadados (nome, símbolo, logo). Embora este registro esteja agora depreciado em favor de metadados on-chain (extensão de metadados Token-2022 ou Metaplex Token Metadata), permanece relevante porque muitos tokens existentes ainda dependem dele, e algumas ferramentas e wallets mais antigas o referenciam. Entender a transição de registros off-chain para metadados on-chain é contexto importante para desenvolvimento de tokens.

### DAS API (Digital Asset Standard)

[https://docs.helius.dev/compression-and-das-api/digital-asset-standard-das-api](https://docs.helius.dev/compression-and-das-api/digital-asset-standard-das-api)

A DAS API fornece uma interface unificada para consultar todos os tipos de ativos digitais na Solana -- NFTs regulares, compressed NFTs, tokens fungíveis e ativos Token-2022. Suportada por provedores de RPC como Helius, a DAS API abstrai as diferenças entre tipos de ativos, permitindo consultar por proprietário, coleção, criador ou atributos com uma única API. Essencial para qualquer aplicação que precise exibir ou gerenciar ativos de usuários em todo o espectro de padrões de token Solana.
