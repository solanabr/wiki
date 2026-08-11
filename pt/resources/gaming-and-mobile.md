# Gaming e Mobile

A finalidade abaixo de um segundo e as baixas taxas da Solana a tornam especialmente adequada para aplicações de gaming e mobile onde interações em tempo real e microtransações são essenciais. Esta página cobre os SDKs, engines e ferramentas para construir jogos e apps mobile na Solana.

---

## Desenvolvimento de Jogos

### Solana.Unity SDK

[https://solana.unity-sdk.gg/](https://solana.unity-sdk.gg/)

O SDK principal para desenvolvedores de jogos Unity construindo na Solana. Ele fornece conexão de wallet (Phantom, Solflare, SMS wallet adapter), assinatura de transações, carregamento e exibição de NFTs, gestão de tokens in-game e desserialização de contas -- tudo dentro do ambiente C# do Unity. O SDK lida com a complexidade de conectar o loop de jogo síncrono do Unity com as interações assíncronas da blockchain Solana.

Este é o ponto de entrada para qualquer desenvolvedor Unity que queira integrar Solana. O SDK suporta builds desktop e mobile, lida com protocolos de wallet adapter para dispositivos móveis e inclui helpers para operações comuns como buscar saldos de tokens, ler contas de programas e construir transações. Se você vem de um background em desenvolvimento de jogos sem experiência em blockchain, este SDK abstrai a complexidade específica da Solana enquanto te dá acesso total quando necessário.

### MagicBlock

[https://docs.magicblock.gg/](https://docs.magicblock.gg/)

Uma engine de jogos on-chain que resolve um dos problemas mais difíceis em gaming blockchain: multiplayer em tempo real com estado on-chain. O MagicBlock usa ephemeral rollups -- ambientes de execução temporários que processam transações de jogo em alta velocidade e depois liquidam os resultados de volta na Solana. Isso permite atualizações de estado de jogo abaixo de um segundo enquanto mantém a segurança e composabilidade dos dados on-chain.

MagicBlock importa porque a maioria dos "jogos blockchain" mantém o gameplay off-chain e só usa a blockchain para propriedade de ativos. MagicBlock possibilita gameplay verdadeiramente on-chain onde o estado do jogo vive na Solana, outros programas podem compor com ele e jogadores têm históricos de jogo verificáveis. Sua arquitetura Entity Component System (ECS) é familiar para desenvolvedores de jogos e mapeia bem para o modelo de contas da Solana. Use MagicBlock quando quiser gameplay multiplayer em tempo real com estado on-chain -- pense em jogos de estratégia, jogos de cartas, ou qualquer jogo onde estado verificável importa.

### PlaySolana

[https://playsolana.com/](https://playsolana.com/)

Um ecossistema de gaming e plataforma de ferramentas para desenvolvimento de jogos na Solana. O PlaySolana fornece recursos, SDKs e infraestrutura para estúdios de jogos construindo na Solana. Eles focam em reduzir as barreiras de entrada para desenvolvedores de jogos que são novos em blockchain -- fornecendo templates, documentação e ferramentas de integração que simplificam interações comuns jogo-blockchain como minting de itens, integração com marketplace e autenticação de jogadores.

### Unreal Engine SDK (Star Atlas Foundation Kit)

[https://github.com/staratlasmeta/FoundationKit](https://github.com/staratlasmeta/FoundationKit)

O Foundation Kit (F-Kit) é o plugin de Unreal Engine totalmente open-source do Star Atlas (UE4 e UE5) para conectar clientes de jogos à Solana. Ele tem duas camadas: um Core SDK (geração de key pairs e mnemônicos, importação de chaves privadas, leitura de dados de contas, envio de transações, interação com programas on-chain) e uma interface de Wallet + Blueprint construída sobre ele. Embora menos maduro que o SDK Unity, ele abre a integração Solana para a comunidade de desenvolvedores Unreal Engine -- importante para desenvolvimento de jogos com qualidade AAA.

### Solana Game Skill

[https://github.com/solanabr/solana-game-skill](https://github.com/solanabr/solana-game-skill)

Um pacote de skill do Claude Code projetado especificamente para desenvolvimento de jogos Solana em Unity e mobile, criado pela Superteam Brasil. Ele fornece agentes de IA especializados -- game-architect para design de sistemas, unity-engineer para implementação C# e Unity, e mobile-engineer para questões específicas de mobile -- junto com comandos e regras adaptados ao fluxo de desenvolvimento de jogos.

Este skill entende os desafios únicos da integração jogo-blockchain: lidar com conexões de wallet dentro de game loops, gerenciar ativos NFT no scene graph do Unity, serializar/desserializar contas de programas em C# e otimizar builds mobile. Instale junto com o [Solana AI Kit](https://github.com/solanabr/solana-ai-kit) para um ambiente completo de desenvolvimento de jogos. Mantido por @kauenet.

---

## Desenvolvimento Mobile

### Documentação Solana Mobile

[https://docs.solanamobile.com/](https://docs.solanamobile.com/)

A documentação abrangente para construir apps mobile nativos na Solana. Cobre tudo desde configurar um projeto React Native com integração Solana até lidar com conexões de wallet, assinar transações e gerenciar questões específicas de mobile como deep linking, processamento em background e distribuição em app stores.

Desenvolvimento mobile na Solana tem restrições únicas -- você não pode incluir uma wallet diretamente no seu app, então precisa usar o protocolo Mobile Wallet Adapter para se comunicar com apps de wallet instalados. A documentação percorre essa arquitetura e fornece exemplos funcionais para Android e iOS (via React Native).

### Mobile Wallet Adapter

[https://docs.solanamobile.com/get-started/mobile-wallet-adapter](https://docs.solanamobile.com/get-started/mobile-wallet-adapter)

O protocolo padrão para conectar wallets mobile a dApps Solana. O Mobile Wallet Adapter (MWA) define como seu app descobre, conecta e se comunica com aplicativos de wallet instalados no dispositivo do usuário. Funciona de forma similar ao WalletConnect mas é projetado especificamente para o modelo de transação da Solana.

O SDK React Native fornece hooks e providers que espelham a experiência do web wallet adapter -- `useWallet()`, `useConnection()` e assinatura de transações todos funcionam com padrões familiares. Se você já construiu um web app Solana com wallet-adapter-react, os padrões mobile vão parecer naturais. O MWA é suportado por wallets incluindo Phantom, Solflare e a Seed Vault Wallet integrada do Seeker, com mais wallets adotando o padrão.

### Seeker (e Saga)

[https://solanamobile.com/](https://solanamobile.com/)

Hardware mobile nativo Solana construído pela Solana Mobile. O Seeker, de segunda geração, começou a ser entregue em 4 de agosto de 2025 -- um lote inicial de mais de 150.000 unidades pré-vendidas entregues em mais de 50 países, superando de longe o Saga original (2023, ~20.000 unidades), que agora é um dispositivo legado. O Seeker inclui o Seed Vault (gestão de chaves em elemento seguro com a Seed Vault Wallet integrada), a dApp Store nativa da Solana e integração profunda com a Solana no nível do SO.

Antes do lançamento do Seeker, em maio de 2025, a Solana Mobile anunciou dois pilares do ecossistema: o SKR, token nativo do ecossistema Solana Mobile, e o TEEPIN (Trusted Execution Environment Platform Infrastructure Network), uma arquitetura de três camadas que permite que múltiplos fabricantes de hardware construam dispositivos nativos Solana com atestação criptográfica. O SKR entrou no ar em 21 de janeiro de 2026, com um airdrop para detentores do Seeker, e também financia incentivos para desenvolvedores -- a Season 1 distribuiu 141M de SKR para 188 equipes que lançaram apps de qualidade na dApp Store.

Para desenvolvedores, a dApp Store continua sendo o ponto-chave: distribuição sem comissão, sem o corte de 30% ou as restrições a crypto da Apple/Google, além de um público de hardware cripto-nativo alcançável por meio de incentivos alinhados ao SKR.
