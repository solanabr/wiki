# Referencias Open Source

Estudar codigo de producao e a forma mais rapida de evoluir como desenvolvedor Solana. Tutoriais ensinam padroes. Open source mostra como esses padroes funcionam sob restricoes reais -- lidando com casos limite, gerenciando estado, otimizando compute units e construindo para composabilidade. Esses repositorios sao ativamente mantidos e cobrem tudo, desde transferencias basicas de tokens ate protocolos DeFi complexos e ferramentas para desenvolvedores.

---

## Projetos da Superteam Brasil

Estes sao projetos open-source construidos e mantidos pela comunidade Superteam Brasil. Vao desde ferramentas de desenvolvimento ate padroes de protocolo e plataformas de educacao.

### solana-claude

[https://github.com/solanabr/solana-claude-config](https://github.com/solanabr/solana-claude-config)

O ambiente completo de desenvolvimento com IA para Solana. Este repositorio contem 15 agentes especializados, 24+ comandos slash, 6 integracoes pre-configuradas com servidores MCP, regras especificas por linguagem para Rust/Anchor/Pinocchio/TypeScript/C# e padroes de equipe de agentes para fluxos de desenvolvimento comuns. E a configuracao de Claude Code mais abrangente para qualquer ecossistema blockchain.

Estude para entender como estruturar ferramentas de desenvolvimento com IA -- as definicoes de agentes, padroes de comandos e integracao MCP sao bem organizados e documentados. Mantido por @kauenet.

### solana-vault-standard

[https://github.com/solanabr/solana-vault-standard](https://github.com/solanabr/solana-vault-standard)

O equivalente do ERC-4626 para Solana (sRFC 40). Este repositorio contem a especificacao e implementacoes de referencia para 8 variantes de vault cobrindo emprestimos, staking e estrategias de yield. O codigo demonstra como projetar primitivas DeFi compostas na Solana -- interfaces padronizadas, esquemas de PDA para estado de vault e padroes de CPI para interacoes com vaults.

Estude para exemplos de como projetar padroes de protocolo, implementar contabilidade de vault baseada em shares e estruturar programas Anchor para composabilidade. Mantido por @kauenet, @thomgabriel, @vcnzo_ct e outros.

### solana-stablecoin-standard

[https://github.com/solanabr/solana-stablecoin-standard](https://github.com/solanabr/solana-stablecoin-standard)

Especificacoes SSS-1 e SSS-2 para emissao padronizada de stablecoins. O codebase demonstra uso avancado de Token-2022 -- transfer hooks para aplicacao de compliance, controle de acesso baseado em funcoes, integracao com oracles e gestao de blacklist. Este e um dos melhores exemplos de construcao de infraestrutura financeira de producao na Solana com extensoes Token-2022.

Estude para padroes de implementacao de transfer hooks Token-2022, arquitetura de compliance e como estruturar uma especificacao multi-nivel (SSS-1 basico, SSS-2 avancado). Mantido por @lvj_luiz e @kauenet.

### superteam-academy

[https://github.com/solanabr/superteam-academy](https://github.com/solanabr/superteam-academy)

Um Sistema de Gestao de Aprendizado on-chain que emite tokens de XP soulbound para conclusao de modulos e certificados NFT para graduacao em cursos. O codebase mostra como construir uma plataforma de educacao na Solana -- emissao de credenciais, rastreamento de progresso e padroes de tokens nao-transferiveis.

Estude para exemplos de implementacao de tokens soulbound, sistemas de credenciais on-chain e como estruturar uma aplicacao Solana full-stack com programa e frontend. Mantido por @thomgabriel e @kauenet.

### solana-game-skill

[https://github.com/solanabr/solana-game-skill](https://github.com/solanabr/solana-game-skill)

Um pacote de skill do Claude Code para desenvolvimento de jogos Solana em Unity e mobile. Contem definicoes de agentes especializados, comandos especificos para jogos e regras C#/.NET para desenvolvimento de jogos Solana. Estude para entender como criar ferramentas de IA de dominio especifico para contextos de desenvolvimento especializados. Mantido por @kauenet.

---

## Referencias do Ecossistema

Estes repositorios do ecossistema Solana mais amplo fornecem exemplos bem mantidos e implementacoes de referencia.

### program-examples

[https://github.com/solana-developers/program-examples](https://github.com/solana-developers/program-examples)

O repositorio oficial de exemplos mantido pela Solana Foundation. Contem implementacoes de padroes comuns em multiplos frameworks -- Anchor, Rust native e Python (via Seahorse). Os exemplos cobrem transferencias de tokens, PDAs, CPIs, compressao de contas, staking e mais. Cada exemplo e autocontido com testes.

Este e o primeiro lugar para procurar quando precisa de uma implementacao de referencia para um padrao comum. O codigo e revisado pelo time da Solana Foundation e mantido atualizado com as versoes mais recentes do SDK. Novos desenvolvedores devem comecar com o diretorio basics e progredir pelos exemplos gradualmente.

### awesome-solana-oss

[https://github.com/StockpileLabs/awesome-solana-oss](https://github.com/StockpileLabs/awesome-solana-oss)

Uma lista curada e regularmente atualizada de projetos Solana open-source organizados por categoria -- protocolos DeFi, ferramentas NFT, utilitarios para desenvolvedores, infraestrutura e mais. Cada entrada inclui uma breve descricao e link para o codigo fonte.

Use como ferramenta de descoberta quando quiser encontrar implementacoes open-source de funcionalidades especificas. Quer ver como uma DEX de producao lida com matching de ordens? Como um marketplace de NFT implementa listagens? Como um protocolo de lending gerencia liquidacoes? Esta lista aponta para o codigo.

### solana-actions examples

[https://github.com/solana-developers/solana-actions/tree/main/examples](https://github.com/solana-developers/solana-actions/tree/main/examples)

Implementacoes de referencia para Solana Actions e Blinks em multiplos frameworks de servidor -- Axum (Rust), Cloudflare Workers (TypeScript) e Next.js (TypeScript). Esses exemplos mostram como construir APIs de Actions que retornam transacoes assinaveis a partir de endpoints HTTP.

Estude se voce esta construindo Actions/Blinks. Os exemplos demonstram o fluxo completo de request/response, construcao de transacoes, formatacao de metadados e tratamento de erros para a especificacao de Actions. Cada exemplo de framework esta pronto para producao e pode ser implantado como esta.

### Anchor examples

[https://github.com/coral-xyz/anchor/tree/master/examples](https://github.com/coral-xyz/anchor/tree/master/examples)

Programas de exemplo do proprio repositorio do framework Anchor. Esses exemplos sao mantidos pelo time do Anchor e demonstram uso idiomatico de funcionalidades do Anchor -- constraints de contas, PDAs, CPIs, tratamento de erros, eventos e padroes de teste. Sao atualizados junto com releases do Anchor, entao sempre refletem melhores praticas atuais.

Estude para entender como o time do Anchor pretende que seu framework seja usado. Os exemplos vao de simples (contador basico) a complexos (programas com multiplas instrucoes e CPIs), e cada um inclui tanto o programa Rust quanto testes TypeScript.

### Squads Protocol v4

[https://github.com/Squads-Protocol/v4](https://github.com/Squads-Protocol/v4)

Infraestrutura de multisig e smart accounts em producao usada por grandes protocolos e equipes Solana. O Squads v4 implementa um multisig flexivel com thresholds configuraveis, time-locks, limites de gastos e execucao em lote. O codebase e um dos melhores exemplos de codigo Anchor de producao -- demonstra padroes complexos de validacao de contas, transacoes com multiplas instrucoes e como construir infraestrutura com a qual outros protocolos componham. Estude para padroes de multisig, arquitetura de controle de acesso e como estruturar um programa que precisa ser seguro e componivel.

### Pinocchio Examples

[https://github.com/solana-developers/program-examples/tree/main/basics](https://github.com/solana-developers/program-examples/tree/main/basics)

Embora o repositorio oficial de exemplos de programas seja principalmente focado em Anchor e Rust nativo, tambem inclui implementacoes em Pinocchio para comparacao. Sao invaluaveis para entender os trade-offs de performance entre frameworks -- o mesmo programa implementado em Anchor vs Pinocchio, permitindo ver exatamente onde compute units sao economizadas e como o acesso zero-copy funciona na pratica.

### Clockwork (Referencia Legacy)

[https://github.com/clockwork-xyz/clockwork](https://github.com/clockwork-xyz/clockwork)

Um motor de automacao para Solana que habilitava execucao programada e condicional de programas. Embora o Clockwork tenha sido descontinuado, o codebase permanece como excelente recurso de estudo para padroes avancados de Solana -- execucao baseada em threads, mecanismos de crank, automacao cross-program e como construir programas de nivel de infraestrutura que interagem com o runtime da Solana. Estude para entender padroes de automacao e como projetar programas que executam em cronograma.

### Helius SDK

[https://github.com/helius-labs/helius-sdk](https://github.com/helius-labs/helius-sdk)

Os SDKs oficiais em TypeScript e Rust para a API Helius. Estude para exemplos de design de SDK bem estruturado -- wrappers de API type-safe, gestao de webhooks, integracao com DAS API, parsing de transacoes e estimativa de priority fees. O codigo do SDK demonstra como construir ferramentas de desenvolvimento ergonomicas que abstraem complexidade de API mantendo total type safety.

### Metaplex Program Library

[https://github.com/metaplex-foundation/mpl-core](https://github.com/metaplex-foundation/mpl-core)

O codigo fonte do Metaplex Core (o padrao NFT de nova geracao), MPL Token Metadata, Bubblegum (compressed NFTs) e Candy Machine. Este e um dos codigos de programa Solana mais amplamente usados em existencia. Estude para entender arquiteturas de plugins, como lidar com relacoes complexas entre contas e como construir programas dos quais todo o ecossistema depende. O codebase tambem demonstra Kinobi/Codama para geracao automatica de clientes.

---

## Codebases DeFi em Producao

Estes sao protocolos open-source em producao onde estudar o codigo ensina padroes que voce nao aprende em tutoriais.

### Marinade Finance

[https://github.com/marinade-finance/liquid-staking-program](https://github.com/marinade-finance/liquid-staking-program)

O primeiro protocolo de liquid staking na mainnet Solana. Programa open-source baseado em Anchor demonstrando: gerenciamento de stake accounts e estrategias de delegacao, mecanica de mint/burn de mSOL atrelada a taxa de cambio, pool LP de swap para unstake instantaneo (bypassing cooldown), e um padrao de wrapper de referral para compartilhamento de taxas com parceiros. O `/Docs/Backend-Design.md` no repositorio vale a leitura para arquitetura do sistema. TypeScript SDK: [marinade-finance/marinade-ts-sdk](https://github.com/marinade-finance/marinade-ts-sdk).

### Drift v2

[https://github.com/drift-labs/protocol-v2](https://github.com/drift-labs/protocol-v2)

A maior DEX de perpetuos open-source na Solana. Drift combina tres mecanismos de liquidez -- um vAMM, um livro de ordens limite descentralizado (DLOB) operado por keeper bots, e um mecanismo de liquidez Just-In-Time (JIT). Este design multi-mecanismo e o principal valor de estudo arquitetural. Suporta 40+ mercados com ate 101x de alavancagem em perps. O monorepo inclui o programa Rust e SDK TypeScript. Implementacao de referencia de keeper bot em [drift-labs/keeper-bots-v2](https://github.com/drift-labs/keeper-bots-v2).

### Raydium CLMM

[https://github.com/raydium-io/raydium-clmm](https://github.com/raydium-io/raydium-clmm)

A implementacao de liquidez concentrada do Raydium (AMM v3). Estude para gerenciamento de liquidez baseado em ticks, roteamento de swaps atraves de posicoes concentradas, configuracao de tiers de taxas e o padrao de position NFT onde cada posicao LP e representada como um NFT. Licenciado sob Apache-2.0, tornando limpo para fork ou adaptacao.

### Sealevel Attacks

[https://github.com/coral-xyz/sealevel-attacks](https://github.com/coral-xyz/sealevel-attacks)

Dez programas Anchor numerados, cada um demonstrando uma vulnerabilidade especifica da Solana com uma versao insegura e uma correcao segura. Mantido pelo time do Anchor (Coral XYZ). Cobre: autorizacao de signer, correspondencia de dados de contas, verificacoes de owner, type cosplay, inicializacao, CPI arbitrario, contas mutaveis duplicadas, canonicalizacao de bump seed, compartilhamento de PDA e fechamento de contas. Leitura essencial para qualquer desenvolvedor implantando programas que lidam com fundos de usuarios. Use junto com o treinamento de seguranca da Ackee para compreensao abrangente de vulnerabilidades.

---

## Governanca e Padroes

### Solana Improvement Documents (SIMDs)

[https://github.com/solana-foundation/solana-improvement-documents](https://github.com/solana-foundation/solana-improvement-documents)

O processo formal de propostas para mudancas no protocolo Solana. SIMDs definem novos recursos, mudancas de protocolo e padroes. Navegador da comunidade em [simd.wtf](https://simd.wtf/). Discussao acontece nos [Forums de Desenvolvedores Solana categoria SIMD](https://forum.solana.com/c/simd/5).

SIMDs criticos para desenvolvedores incluem: SIMD-0096 (100% das priority fees para validadores -- ja ativado, muda modelagem de taxas), SIMD-0083 (agendamento de transacoes aprimorado), SIMD-0296 (transacoes maiores -- em progresso), SIMD-0286 (blocos de 100M CU -- em progresso) e SIMD-0326 (consenso Alpenglow -- proposto). Entender SIMDs ativos te mantem a frente de mudancas de protocolo que afetam seus programas.

### Solana Program Library (SPL)

[https://spl.solana.com/](https://spl.solana.com/)

A colecao oficial de programas on-chain em producao. Alem de Token e Token-2022, SPL inclui: Governance (votacao/tesouraria de DAO), Stake Pool (staking multi-validador -- base para mSOL, jitoSOL), Name Service (dominios on-chain, base para .sol), Account Compression (arvores Merkle concorrentes para cNFTs), Memo (anexar strings UTF-8 a transacoes) e mais. Nota: o monorepo original (`solana-labs/solana-program-library`) foi arquivado em Marco 2025 e dividido em repositorios individuais sob a organizacao GitHub [solana-program](https://github.com/solana-program) mantida pela Anza.
