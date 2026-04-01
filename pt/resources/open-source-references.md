# Referencias Open Source

Estudar codigo de producao e a forma mais rapida de evoluir como desenvolvedor Solana. Tutoriais ensinam padroes. Open source mostra como esses padroes funcionam sob restricoes reais -- lidando com casos limite, gerenciando estado, otimizando compute units e construindo para composabilidade. Esses repositorios sao ativamente mantidos e cobrem tudo, desde transferencias basicas de tokens ate protocolos DeFi complexos e ferramentas para desenvolvedores.

---

## Projetos da Superteam Brasil

Estes sao projetos open-source construidos e mantidos pela comunidade Superteam Brasil. Vao desde ferramentas de desenvolvimento ate padroes de protocolo e plataformas de educacao.

### solana-claude

[https://github.com/SuperteamBrazil/solana-claude](https://github.com/SuperteamBrazil/solana-claude)

O ambiente completo de desenvolvimento com IA para Solana. Este repositorio contem 15 agentes especializados, 24+ comandos slash, 6 integracoes pre-configuradas com servidores MCP, regras especificas por linguagem para Rust/Anchor/Pinocchio/TypeScript/C# e padroes de equipe de agentes para fluxos de desenvolvimento comuns. E a configuracao de Claude Code mais abrangente para qualquer ecossistema blockchain.

Estude para entender como estruturar ferramentas de desenvolvimento com IA -- as definicoes de agentes, padroes de comandos e integracao MCP sao bem organizados e documentados. Mantido por @kauenet.

### solana-vault-standard

[https://github.com/SuperteamBrazil/solana-vault-standard](https://github.com/SuperteamBrazil/solana-vault-standard)

O equivalente do ERC-4626 para Solana (sRFC 40). Este repositorio contem a especificacao e implementacoes de referencia para 8 variantes de vault cobrindo emprestimos, staking e estrategias de yield. O codigo demonstra como projetar primitivas DeFi compostas na Solana -- interfaces padronizadas, esquemas de PDA para estado de vault e padroes de CPI para interacoes com vaults.

Estude para exemplos de como projetar padroes de protocolo, implementar contabilidade de vault baseada em shares e estruturar programas Anchor para composabilidade. Mantido por @kauenet, @thomgabriel, @vcnzo_ct e outros.

### solana-stablecoin-standard

[https://github.com/SuperteamBrazil/solana-stablecoin-standard](https://github.com/SuperteamBrazil/solana-stablecoin-standard)

Especificacoes SSS-1 e SSS-2 para emissao padronizada de stablecoins. O codebase demonstra uso avancado de Token-2022 -- transfer hooks para aplicacao de compliance, controle de acesso baseado em funcoes, integracao com oracles e gestao de blacklist. Este e um dos melhores exemplos de construcao de infraestrutura financeira de producao na Solana com extensoes Token-2022.

Estude para padroes de implementacao de transfer hooks Token-2022, arquitetura de compliance e como estruturar uma especificacao multi-nivel (SSS-1 basico, SSS-2 avancado). Mantido por @lvj_luiz e @kauenet.

### superteam-academy

[https://github.com/SuperteamBrazil/superteam-academy](https://github.com/SuperteamBrazil/superteam-academy)

Um Sistema de Gestao de Aprendizado on-chain que emite tokens de XP soulbound para conclusao de modulos e certificados NFT para graduacao em cursos. O codebase mostra como construir uma plataforma de educacao na Solana -- emissao de credenciais, rastreamento de progresso e padroes de tokens nao-transferiveis.

Estude para exemplos de implementacao de tokens soulbound, sistemas de credenciais on-chain e como estruturar uma aplicacao Solana full-stack com programa e frontend. Mantido por @thomgabriel e @kauenet.

### solana-game-skill

[https://github.com/SuperteamBrazil/solana-game-skill](https://github.com/SuperteamBrazil/solana-game-skill)

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
