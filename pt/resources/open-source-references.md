# Referências Open Source

Estudar código de produção é a forma mais rápida de evoluir como desenvolvedor Solana. Tutoriais ensinam padrões. Open source mostra como esses padrões funcionam sob restrições reais -- lidando com casos limite, gerenciando estado, otimizando compute units e construindo para composabilidade. Esses repositórios são ativamente mantidos e cobrem tudo, desde transferências básicas de tokens até protocolos DeFi complexos e ferramentas para desenvolvedores.

---

## Projetos da Superteam Brasil

Estes são projetos open-source construídos e mantidos pela comunidade Superteam Brasil. Vão desde ferramentas de desenvolvimento até padrões de protocolo e plataformas de educação.

### solana-claude

[https://github.com/solanabr/solana-claude-config](https://github.com/solanabr/solana-claude-config)

O ambiente completo de desenvolvimento com IA para Solana. Este repositório contém 15 agentes especializados, 24+ comandos slash, 6 integrações pré-configuradas com servidores MCP, regras específicas por linguagem para Rust/Anchor/Pinocchio/TypeScript/C# e padrões de equipe de agentes para fluxos de desenvolvimento comuns. É a configuração de Claude Code mais abrangente para qualquer ecossistema blockchain.

Estude para entender como estruturar ferramentas de desenvolvimento com IA -- as definições de agentes, padrões de comandos e integração MCP são bem organizados e documentados. Mantido por @kauenet.

### solana-vault-standard

[https://github.com/solanabr/solana-vault-standard](https://github.com/solanabr/solana-vault-standard)

O equivalente do ERC-4626 para Solana (sRFC 40). Este repositório contém a especificação e implementações de referência para 8 variantes de vault cobrindo empréstimos, staking e estratégias de yield. O código demonstra como projetar primitivas DeFi compostas na Solana -- interfaces padronizadas, esquemas de PDA para estado de vault e padrões de CPI para interações com vaults.

Estude para exemplos de como projetar padrões de protocolo, implementar contabilidade de vault baseada em shares e estruturar programas Anchor para composabilidade. Mantido por @kauenet, @thomgabriel, @vcnzo_ct e outros.

### solana-stablecoin-standard

[https://github.com/solanabr/solana-stablecoin-standard](https://github.com/solanabr/solana-stablecoin-standard)

Especificações SSS-1 e SSS-2 para emissão padronizada de stablecoins. O codebase demonstra uso avançado de Token-2022 -- transfer hooks para aplicação de compliance, controle de acesso baseado em funções, integração com oracles e gestão de blacklist. Este é um dos melhores exemplos de construção de infraestrutura financeira de produção na Solana com extensões Token-2022.

Estude para padrões de implementação de transfer hooks Token-2022, arquitetura de compliance e como estruturar uma especificação multi-nível (SSS-1 básico, SSS-2 avançado). Mantido por @lvj_luiz e @kauenet.

### superteam-academy

[https://github.com/solanabr/superteam-academy](https://github.com/solanabr/superteam-academy)

Um Sistema de Gestão de Aprendizado on-chain que emite tokens de XP soulbound para conclusão de módulos e certificados NFT para graduação em cursos. O codebase mostra como construir uma plataforma de educação na Solana -- emissão de credenciais, rastreamento de progresso e padrões de tokens não-transferíveis.

Estude para exemplos de implementação de tokens soulbound, sistemas de credenciais on-chain e como estruturar uma aplicação Solana full-stack com programa e frontend. Mantido por @thomgabriel e @kauenet.

### solana-game-skill

[https://github.com/solanabr/solana-game-skill](https://github.com/solanabr/solana-game-skill)

Um pacote de skill do Claude Code para desenvolvimento de jogos Solana em Unity e mobile. Contém definições de agentes especializados, comandos específicos para jogos e regras C#/.NET para desenvolvimento de jogos Solana. Estude para entender como criar ferramentas de IA de domínio específico para contextos de desenvolvimento especializados. Mantido por @kauenet.

---

## Referências do Ecossistema

Estes repositórios do ecossistema Solana mais amplo fornecem exemplos bem mantidos e implementações de referência.

### program-examples

[https://github.com/solana-developers/program-examples](https://github.com/solana-developers/program-examples)

O repositório oficial de exemplos mantido pela Solana Foundation. Contém implementações de padrões comuns em múltiplos frameworks -- Anchor, Rust native e Python (via Seahorse). Os exemplos cobrem transferências de tokens, PDAs, CPIs, compressão de contas, staking e mais. Cada exemplo é autocontido com testes.

Este é o primeiro lugar para procurar quando precisa de uma implementação de referência para um padrão comum. O código é revisado pelo time da Solana Foundation e mantido atualizado com as versões mais recentes do SDK. Novos desenvolvedores devem começar com o diretório basics e progredir pelos exemplos gradualmente.

### awesome-solana-oss

[https://github.com/StockpileLabs/awesome-solana-oss](https://github.com/StockpileLabs/awesome-solana-oss)

Uma lista curada e regularmente atualizada de projetos Solana open-source organizados por categoria -- protocolos DeFi, ferramentas NFT, utilitários para desenvolvedores, infraestrutura e mais. Cada entrada inclui uma breve descrição e link para o código fonte.

Use como ferramenta de descoberta quando quiser encontrar implementações open-source de funcionalidades específicas. Quer ver como uma DEX de produção lida com matching de ordens? Como um marketplace de NFT implementa listagens? Como um protocolo de lending gerencia liquidações? Esta lista aponta para o código.

### solana-actions examples

[https://github.com/solana-developers/solana-actions/tree/main/examples](https://github.com/solana-developers/solana-actions/tree/main/examples)

Implementações de referência para Solana Actions e Blinks em múltiplos frameworks de servidor -- Axum (Rust), Cloudflare Workers (TypeScript) e Next.js (TypeScript). Esses exemplos mostram como construir APIs de Actions que retornam transações assináveis a partir de endpoints HTTP.

Estude se você está construindo Actions/Blinks. Os exemplos demonstram o fluxo completo de request/response, construção de transações, formatação de metadados e tratamento de erros para a especificação de Actions. Cada exemplo de framework está pronto para produção e pode ser implantado como está.

### Anchor examples

[https://github.com/coral-xyz/anchor/tree/master/examples](https://github.com/coral-xyz/anchor/tree/master/examples)

Programas de exemplo do próprio repositório do framework Anchor. Esses exemplos são mantidos pelo time do Anchor e demonstram uso idiomático de funcionalidades do Anchor -- constraints de contas, PDAs, CPIs, tratamento de erros, eventos e padrões de teste. São atualizados junto com releases do Anchor, então sempre refletem melhores práticas atuais.

Estude para entender como o time do Anchor pretende que seu framework seja usado. Os exemplos vão de simples (contador básico) a complexos (programas com múltiplas instruções e CPIs), e cada um inclui tanto o programa Rust quanto testes TypeScript.

### Squads Protocol v4

[https://github.com/Squads-Protocol/v4](https://github.com/Squads-Protocol/v4)

Infraestrutura de multisig e smart accounts em produção usada por grandes protocolos e equipes Solana. O Squads v4 implementa um multisig flexível com thresholds configuráveis, time-locks, limites de gastos e execução em lote. O codebase é um dos melhores exemplos de código Anchor de produção -- demonstra padrões complexos de validação de contas, transações com múltiplas instruções e como construir infraestrutura com a qual outros protocolos componham. Estude para padrões de multisig, arquitetura de controle de acesso e como estruturar um programa que precisa ser seguro e componível.

### Pinocchio Examples

[https://github.com/solana-developers/program-examples/tree/main/basics](https://github.com/solana-developers/program-examples/tree/main/basics)

Embora o repositório oficial de exemplos de programas seja principalmente focado em Anchor e Rust nativo, também inclui implementações em Pinocchio para comparação. São inestimáveis para entender os trade-offs de performance entre frameworks -- o mesmo programa implementado em Anchor vs Pinocchio, permitindo ver exatamente onde compute units são economizadas e como o acesso zero-copy funciona na prática.

### Clockwork (Referência Legacy)

[https://github.com/clockwork-xyz/clockwork](https://github.com/clockwork-xyz/clockwork)

Um motor de automação para Solana que habilitava execução programada e condicional de programas. Embora o Clockwork tenha sido descontinuado, o codebase permanece como excelente recurso de estudo para padrões avançados de Solana -- execução baseada em threads, mecanismos de crank, automação cross-program e como construir programas de nível de infraestrutura que interagem com o runtime da Solana. Estude para entender padrões de automação e como projetar programas que executam em cronograma.

### Helius SDK

[https://github.com/helius-labs/helius-sdk](https://github.com/helius-labs/helius-sdk)

Os SDKs oficiais em TypeScript e Rust para a API Helius. Estude para exemplos de design de SDK bem estruturado -- wrappers de API type-safe, gestão de webhooks, integração com DAS API, parsing de transações e estimativa de priority fees. O código do SDK demonstra como construir ferramentas de desenvolvimento ergonômicas que abstraem complexidade de API mantendo total type safety.

### Metaplex Program Library

[https://github.com/metaplex-foundation/mpl-core](https://github.com/metaplex-foundation/mpl-core)

O código fonte do Metaplex Core (o padrão NFT de nova geração), MPL Token Metadata, Bubblegum (compressed NFTs) e Candy Machine. Este é um dos códigos de programa Solana mais amplamente usados em existência. Estude para entender arquiteturas de plugins, como lidar com relações complexas entre contas e como construir programas dos quais todo o ecossistema depende. O codebase também demonstra Kinobi/Codama para geração automática de clientes.

---

## Codebases DeFi em Produção

Estes são protocolos open-source em produção onde estudar o código ensina padrões que você não aprende em tutoriais.

### Marinade Finance

[https://github.com/marinade-finance/liquid-staking-program](https://github.com/marinade-finance/liquid-staking-program)

O primeiro protocolo de liquid staking na mainnet Solana. Programa open-source baseado em Anchor demonstrando: gerenciamento de stake accounts e estratégias de delegação, mecânica de mint/burn de mSOL atrelada a taxa de câmbio, pool LP de swap para unstake instantâneo (bypassing cooldown), e um padrão de wrapper de referral para compartilhamento de taxas com parceiros. O `/Docs/Backend-Design.md` no repositório vale a leitura para arquitetura do sistema. TypeScript SDK: [marinade-finance/marinade-ts-sdk](https://github.com/marinade-finance/marinade-ts-sdk).

### Drift v2

[https://github.com/drift-labs/protocol-v2](https://github.com/drift-labs/protocol-v2)

A maior DEX de perpétuos open-source na Solana. Drift combina três mecanismos de liquidez -- um vAMM, um livro de ordens limite descentralizado (DLOB) operado por keeper bots, e um mecanismo de liquidez Just-In-Time (JIT). Este design multi-mecanismo é o principal valor de estudo arquitetural. Suporta 40+ mercados com até 101x de alavancagem em perps. O monorepo inclui o programa Rust e SDK TypeScript. Implementação de referência de keeper bot em [drift-labs/keeper-bots-v2](https://github.com/drift-labs/keeper-bots-v2).

### Raydium CLMM

[https://github.com/raydium-io/raydium-clmm](https://github.com/raydium-io/raydium-clmm)

A implementação de liquidez concentrada do Raydium (AMM v3). Estude para gerenciamento de liquidez baseado em ticks, roteamento de swaps através de posições concentradas, configuração de tiers de taxas e o padrão de position NFT onde cada posição LP é representada como um NFT. Licenciado sob Apache-2.0, tornando limpo para fork ou adaptação.

### Sealevel Attacks

[https://github.com/coral-xyz/sealevel-attacks](https://github.com/coral-xyz/sealevel-attacks)

Dez programas Anchor numerados, cada um demonstrando uma vulnerabilidade específica da Solana com uma versão insegura e uma correção segura. Mantido pelo time do Anchor (Coral XYZ). Cobre: autorização de signer, correspondência de dados de contas, verificações de owner, type cosplay, inicialização, CPI arbitrário, contas mutáveis duplicadas, canonicalização de bump seed, compartilhamento de PDA e fechamento de contas. Leitura essencial para qualquer desenvolvedor implantando programas que lidam com fundos de usuários. Use junto com o treinamento de segurança da Ackee para compreensão abrangente de vulnerabilidades.

---

## Governança e Padrões

### Solana Improvement Documents (SIMDs)

[https://github.com/solana-foundation/solana-improvement-documents](https://github.com/solana-foundation/solana-improvement-documents)

O processo formal de propostas para mudanças no protocolo Solana. SIMDs definem novos recursos, mudanças de protocolo e padrões. Navegador da comunidade em [simd.wtf](https://simd.wtf/). Discussão acontece nos [Fóruns de Desenvolvedores Solana categoria SIMD](https://forum.solana.com/c/simd/5).

SIMDs críticos para desenvolvedores incluem: SIMD-0096 (100% das priority fees para validadores -- já ativado, muda modelagem de taxas), SIMD-0083 (agendamento de transações aprimorado), SIMD-0296 (transações maiores -- em progresso), SIMD-0286 (blocos de 100M CU -- em progresso) e SIMD-0326 (consenso Alpenglow -- proposto). Entender SIMDs ativos te mantém à frente de mudanças de protocolo que afetam seus programas.

### Solana Program Library (SPL)

[https://spl.solana.com/](https://spl.solana.com/)

A coleção oficial de programas on-chain em produção. Além de Token e Token-2022, SPL inclui: Governance (votação/tesouraria de DAO), Stake Pool (staking multi-validador -- base para mSOL, jitoSOL), Name Service (domínios on-chain, base para .sol), Account Compression (árvores Merkle concorrentes para cNFTs), Memo (anexar strings UTF-8 a transações) e mais. Nota: o monorepo original (`solana-labs/solana-program-library`) foi arquivado em Março 2025 e dividido em repositórios individuais sob a organização GitHub [solana-program](https://github.com/solana-program) mantida pela Anza.
