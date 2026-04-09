# Frameworks e SDKs

Escolher o framework e SDK de cliente certos molda toda a sua experiência de desenvolvimento. Esta página explica os trade-offs entre cada opção para que você possa tomar uma decisão informada com base nas necessidades do seu projeto.

---

## Frameworks de Programas

Esses frameworks definem como você escreve programas on-chain na Solana. Cada um faz trade-offs diferentes entre experiência do desenvolvedor, performance e controle.

### Anchor

[https://www.anchor-lang.com/](https://www.anchor-lang.com/)

O framework padrão para desenvolvimento de programas Solana. O Anchor fornece validação declarativa de contas por meio de macros Rust (`#[derive(Accounts)]`), geração automática de IDL (Interface Description Language) e geração de clientes TypeScript a partir desse IDL. Ele lida com boilerplate como desserialização de contas, verificações de discriminator e validação de constraints, permitindo que você foque na lógica de negócio. O ecossistema é construído em torno do Anchor -- a maioria dos tutoriais, ferramentas e código de exemplo assume seu uso. Escolha Anchor para a maioria dos projetos, codebases de equipe e sempre que precisar de um IDL para geração de clientes. Versão atual: 0.31+, que introduziu discriminators customizados e `LazyAccount`.

O trade-off é tamanho do binário e consumo de compute units (CU). As abstrações do Anchor adicionam overhead que pode importar para programas críticos em performance ou programas se aproximando do limite de tamanho do binário BPF.

### Pinocchio

[https://github.com/febo/pinocchio](https://github.com/febo/pinocchio)

Um framework zero-copy que alcança redução de 80-95% em CU comparado ao Anchor por meio de acesso direto à memória, zero alocações no heap e tamanho mínimo de binário. Pinocchio usa discriminators de byte único (vs 8 bytes do Anchor), structs `#[repr(C)]` para layout de memória consistente e pointer casting para acesso zero-copy a contas. O resultado são programas dramaticamente mais baratos de executar e menores para implantar.

O trade-off é a experiência do desenvolvedor. Você escreve validação manual de contas, lida com sua própria serialização e gerencia blocos de código unsafe. Não há geração de IDL -- você constrói clientes manualmente. Escolha Pinocchio quando compute units ou tamanho do binário são restrições, quando está construindo infraestrutura crítica em performance, ou quando quer controle máximo sobre cada byte.

### Steel

[https://github.com/regolith-labs/steel](https://github.com/regolith-labs/steel)

Um framework leve da Regolith Labs que fica entre o Anchor e o native. Steel fornece macros procedurais para validação de contas e parsing de instruções sem o peso total da geração de código do Anchor. Programas compilam para binários menores que Anchor enquanto mantém uma experiência de desenvolvimento estruturada com derive macros para structs de contas, discriminators de instruções e tratamento de erros.

Escolha Steel quando quiser mais estrutura que o desenvolvimento native mas menos overhead que o Anchor, ou quando o tamanho do binário for uma preocupação.

### Bolt (MagicBlock)

[https://docs.magicblock.gg/bolt/introduction](https://docs.magicblock.gg/bolt/introduction)

Um framework Entity Component System (ECS) on-chain especificamente projetado para desenvolvimento de jogos na Solana, construído pela MagicBlock. Bolt estrutura o estado on-chain como entidades com componentes composíveis, mapeando o padrão ECS familiar aos desenvolvedores de jogos diretamente para o modelo de contas da Solana.

Escolha Bolt quando estiver construindo jogos totalmente on-chain ou qualquer aplicação que se beneficie de uma arquitetura ECS.

### Poseidon

[https://github.com/turbin3/poseidon](https://github.com/turbin3/poseidon)

Escreva programas Solana em TypeScript que compilam para Rust do Anchor. Poseidon transpila definições de programas TypeScript em código Anchor válido, permitindo que desenvolvedores mais confortáveis com TypeScript escrevam programas on-chain sem aprender Rust primeiro.

Escolha Poseidon para prototipagem rápida, para equipes com fortes habilidades em TypeScript, ou como ferramenta de aprendizado para entender padrões do Anchor por meio de uma linguagem familiar.

### Native solana-program

[https://docs.rs/solana-program](https://docs.rs/solana-program)

Programação direta na SVM sem nenhum framework. Você trabalha com `AccountInfo` bruto, faz parse manual de dados de instrução e escreve toda a validação. Isso te dá controle absoluto sem overhead de abstração, mas requer significativamente mais código para a mesma funcionalidade.

Use desenvolvimento native para fins educacionais (para entender o que o Anchor faz por baixo dos panos), para programas extremamente especializados onde até as abstrações do Pinocchio são demais, ou para programas de instrução única onde o overhead de framework não se justifica.

---

## SDKs de Cliente

Essas bibliotecas permitem que você interaja com a Solana a partir de TypeScript/JavaScript -- enviando transações, lendo contas e construindo frontends.

### @solana/kit (web3.js 2.0)

[https://github.com/solana-labs/solana-web3.js](https://github.com/solana-labs/solana-web3.js)

O SDK TypeScript moderno da Solana, completamente reescrito do zero. É tree-shakable (importe apenas o que usa), tem um design de API funcional (sem classes) e fornece tipos TypeScript fortes em toda parte. A arquitetura é modular -- RPC, construção de transações, gerenciamento de chaves e codecs são pacotes separados que você compõe.

Use `@solana/kit` para novos projetos, especialmente frontends onde o tamanho do bundle importa. O tree-shaking sozinho pode reduzir seu bundle relacionado a Solana em 80%+ comparado ao SDK legado. A API funcional também facilita testes já que não há estado escondido.

### @solana/web3.js 1.x

[https://www.npmjs.com/package/@solana/web3.js](https://www.npmjs.com/package/@solana/web3.js)

O SDK TypeScript legado que a maioria do código Solana existente usa. API baseada em classes com `Connection`, `PublicKey`, `Transaction` e `Keypair` como tipos principais. O cliente TypeScript do Anchor (`@coral-xyz/anchor`) é construído sobre a versão 1.x, então se você está trabalhando com clientes gerados pelo Anchor, vai usar este.

Use a versão 1.x ao trabalhar com codebases existentes, projetos Anchor ou qualquer biblioteca que dependa dele. É estável e bem documentado, apenas maior e menos moderno que a reescrita 2.0.

### Solana Rust SDK (Cliente)

[https://docs.rs/solana-sdk](https://docs.rs/solana-sdk)

O SDK Rust para interagir com a Solana a partir de aplicações off-chain. Distinto do `solana-program` (que é para código on-chain), este SDK fornece construção de transações, assinatura, comunicação RPC e gerenciamento de keypairs para serviços backend, ferramentas CLI, indexadores e keepers.

### Solana Python SDK (solana-py)

[https://github.com/michaelhly/solana-py](https://github.com/michaelhly/solana-py)

Cliente Python para Solana. Fornece métodos RPC, construção de transações e operações de contas para desenvolvedores Python. Útil para scripts de análise de dados, interações em Jupyter notebooks, serviços backend e qualquer ferramenta Python que precise interagir com a Solana.

### Solana Go SDK

[https://github.com/gagliardetto/solana-go](https://github.com/gagliardetto/solana-go)

Um cliente Go para Solana mantido por gagliardetto. Fornece métodos RPC, construção de transações, interação com programas e subscrições WebSocket. Ideal para infraestrutura baseada em Go -- indexadores, validadores, serviços de monitoramento e APIs backend.

### Codama (anteriormente Kinobi)

[https://github.com/codama-idl/codama](https://github.com/codama-idl/codama)

A ferramenta padrão de geração de código para clientes de programas Solana, renomeada de Kinobi e movida de `metaplex-foundation/kinobi` para `codama-idl/codama`. Codama recebe o IDL de um programa (formato Codama IDL, um superset do Anchor IDL) e gera clientes tipados em JavaScript (compatível com @solana/kit ou Umi), Rust, Go, Dart e Python. Visitors permitem customização pós-geração dos formatos de instruções e contas.

Codama é a forma padrão de gerar clientes type-safe para programas usando @solana/kit (web3.js 2.0). Sem ele, você escreve builders de instruções crus manualmente. A Solana Foundation documenta oficialmente em [solana.com/docs/programs/codama/clients](https://solana.com/docs/programs/codama/clients). Use Codama quando está construindo um protocolo que outros desenvolvedores vão integrar, quando precisa de clientes em múltiplas linguagens, ou quando está mirando @solana/kit.

### TipLink

[https://docs.tiplink.io/](https://docs.tiplink.io/)

Wallet-as-a-service que cria wallets descartáveis via links compartilháveis. TipLink permite criar wallets que usuários acessam por uma URL -- nenhum app de wallet necessário. Casos de uso incluem airdrops (envie tokens para qualquer pessoa via link), onboarding (usuários interagem com Solana antes de instalar uma wallet), presentes e campanhas de marketing.

---

## Scaffolding

### create-solana-dapp

[https://github.com/solana-foundation/create-solana-dapp](https://github.com/solana-foundation/create-solana-dapp)

Scaffolding de projetos mantido pela Solana Foundation. Ele gera um projeto completo com programa on-chain, frontend e suite de testes pré-configurados. Você escolhe sua combinação de frameworks -- Anchor ou native para o programa, Next.js ou React para o frontend. O projeto gerado inclui conexão de wallet, interação com o programa e um pipeline de CI funcional. Use isso para pular o boilerplate e começar a construir imediatamente.
