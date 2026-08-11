# Wallets e Onboarding

A wallet é a primeira coisa que todo usuário do seu dApp toca, e é onde a maioria dos apps de consumo perde as pessoas. Existem dois caminhos de integração na Solana hoje: o caminho do wallet adapter para usuários cripto-nativos que já têm Phantom, Solflare ou Backpack, e os SDKs de embedded wallets, que criam uma wallet por trás de um login com e-mail, rede social ou passkey para usuários que nunca tocaram em cripto. Apps de consumo são uma categoria fixa nos hackathons do Colosseum, e no Brasil -- onde a maioria dos seus usuários potenciais não tem uma extensão de navegador instalada -- acertar o onboarding costuma ser a diferença entre uma demo e um produto. Esta página cobre as duas stacks e quando usar cada uma.

---

## Wallets de Navegador e Mobile

Estas são as wallets que seus usuários cripto-nativos realmente têm, e as primeiras contra as quais você deve testar.

### Phantom

[https://phantom.com/](https://phantom.com/)

A wallet mais conhecida do ecossistema Solana, disponível como extensão de navegador e app mobile. A Phantom evoluiu de uma wallet pura para um app de finanças de consumo -- spot trading, perpétuos e mercados de previsão são nativos -- mantendo-se self-custodial. Para desenvolvedores, a Phantom é o alvo padrão: se o fluxo de conexão do seu dApp não funciona com a Phantom, ele efetivamente não funciona.

### Solflare

[https://solflare.com/](https://solflare.com/)

Uma wallet focada em Solana, disponível como extensão, app mobile e wallet web. O conjunto de funcionalidades da Solflare vai fundo especificamente na Solana -- staking nativo, galeria de NFTs, suporte a hardware wallets (incluindo o Shield, dispositivo próprio deles) e um cartão de débito em USDC. Seu foco Solana-first faz dela um bom segundo alvo de teste, já que ela frequentemente revela problemas de integração que os fluxos mais gerais da Phantom não revelam.

### Backpack

[https://backpack.app/](https://backpack.app/)

Uma wallet e exchange em um só app, cobrindo Solana, Ethereum e Bitcoin em iOS, Android, extensão do Chrome e o backpack.exchange na web. A Backpack combina uma wallet self-custodial com spot trading, futuros e empréstimos. É popular entre traders ativos, então se o seu dApp mira essa audiência, inclua-a na sua matriz de testes.

---

## Padrões de Integração

### Wallet Standard

[https://github.com/wallet-standard/wallet-standard](https://github.com/wallet-standard/wallet-standard)

Um conjunto de interfaces agnóstico de chain que as wallets usam para se registrar no navegador, permitindo que aplicações descubram e se conectem a qualquer wallet instalada sem hardcodear adapters por wallet. As wallets Solana o implementam, e frontends modernos baseados em `@solana/kit` constroem diretamente sobre ele -- `@wallet-standard/react` fornece os hooks `useWallets` e `useConnect`, pareados com `@solana/react` para assinatura de transações. Se você está começando um frontend novo baseado em kit, esta é a camada de integração a aprender.

### Solana Wallet Adapter

[https://github.com/anza-xyz/wallet-adapter](https://github.com/anza-xyz/wallet-adapter)

A biblioteca mantida pela Anza de adapters de wallet modulares em TypeScript e componentes React -- a stack de botão de conexão testada em batalha usada pela maioria dos dApps Solana existentes, particularmente os que estão em web3.js 1.x e Anchor. Ela fornece providers, hooks (`useWallet`, `useConnection`) e uma UI de modal pronta. O guia "Connect a Wallet in React" linkado em [Primeiros Passos](getting-started.md) percorre esse padrão passo a passo.

---

## Embedded Wallets

SDKs de embedded wallets criam uma wallet self-custodial para o usuário no cadastro -- por trás de um login com e-mail, SMS, rede social ou passkey -- sem instalação de extensão e sem a cerimônia da seed phrase. O framework de decisão: use o **caminho adapter/Wallet Standard** quando sua audiência já tem wallets (DeFi, ferramentas de trading); use **embedded wallets** quando sua audiência é mainstream (apps de consumo, jogos, pagamentos); use o **padrão híbrido** -- detecção de wallet com fallback embedded -- quando você quer atender os dois, que é como a maioria dos novos dApps de consumo é lançada hoje.

### Privy

[https://docs.privy.io/](https://docs.privy.io/)

Embedded wallets self-custodial por trás de login com e-mail, SMS, rede social ou passkey, com chaves protegidas em trusted execution environments (TEEs). O suporte a Solana é de primeira classe: HD wallets, criação automática de wallet no login e fluxos completos de assinatura, com usuários podendo exportar suas chaves para Phantom ou Solflare a qualquer momento. A Privy foi adquirida pela Stripe em junho de 2025, o que importa para o roadmap -- espere uma integração cada vez mais estreita entre embedded wallets e liquidação em fiat/stablecoins. Comece pela [receita de introdução de Privy + Solana](https://docs.privy.io/recipes/solana/getting-started-with-privy-and-solana).

### Turnkey

[https://docs.turnkey.com/](https://docs.turnkey.com/)

Infraestrutura de wallets em que as chaves privadas vivem em enclaves isolados por hardware e nunca são expostas -- nem mesmo à Turnkey. O pacote `@turnkey/solana` fornece um `TurnkeySigner` que se encaixa em código de cliente Solana padrão, e a plataforma cuida da obtenção de blockhash, estimativa de compute units e priority fees, além de patrocínio de gas (abstração de taxas) e patrocínio de rent em mainnet e devnet. A Turnkey é de nível mais baixo que a Privy -- escolha-a quando você precisa de infraestrutura de assinatura com controle fino de políticas (regras de transação, quóruns, automação) em vez de um modal de autenticação pronto para usar.

### Para

[https://docs.getpara.com/](https://docs.getpara.com/)

Embedded wallets passkey-first: usuários se cadastram com e-mail, telefone, login social ou uma passkey, e as chaves privadas são divididas via MPC entre o dispositivo do usuário e a infraestrutura da Para -- sem seed phrase, sem ponto único de comprometimento de chave. O suporte a Solana funciona tanto com web3.js quanto com Anchor, e o SDK vem como um modal React pronto ou primitivas headless para UIs customizadas. O modelo de passkey baseado em sessão da Para é o destacado no guia de passkeys da Helius abaixo.

### Dynamic

[https://www.dynamic.xyz/docs/](https://www.dynamic.xyz/docs/)

Uma stack completa de wallets que cobre os dois lados do padrão híbrido em um único SDK: conexão de wallets externas (via `SolanaWalletConnectors`) e embedded wallets MPC, com políticas, abstração de gas e componentes de UI prontos. As embedded wallets Solana usam MPC EdDSA (protocolo FROST), e os SDKs abrangem React, React Native, Flutter, Swift e mais. A Dynamic é uma escolha forte quando você quer um único fornecedor para conectar-ou-criar em vez de costurar o wallet-adapter com um SDK embedded separado.

---

## Passkeys

### Helius: Guia de Passkeys na Solana

[https://www.helius.dev/blog/solana-passkeys](https://www.helius.dev/blog/solana-passkeys)

O guia de referência para onboarding baseado em passkeys na Solana. Passkeys (construídas sobre WebAuthn e FIDO2) habilitam login biométrico sem seed phrase, mas há uma incompatibilidade de curvas: passkeys produzem assinaturas P-256 (secp256r1), enquanto transações Solana exigem Ed25519. O guia explica o workaround em produção hoje -- passkeys atuam como autenticação que desbloqueia acesso com escopo de sessão a chaves Ed25519 gerenciadas por MPC (o modelo da Para) -- e cobre o precompile nativo de secp256r1, habilitado em junho de 2025, que permite a programas verificar assinaturas de passkey diretamente on-chain. Leia isto antes de projetar qualquer UX passkey-first, para entender o que a passkey de fato assina.

---

## Páginas Relacionadas

- [Gaming e Mobile](gaming-and-mobile.md) -- infraestrutura de wallet específica para mobile: Mobile Wallet Adapter, Seed Vault e o dispositivo Seeker
- [Primeiros Passos](getting-started.md) -- o passo a passo "Connect a Wallet in React" e o restante da trilha para iniciantes
