# Frameworks e SDKs

Escolher o framework e SDK de cliente certos molda toda a sua experiencia de desenvolvimento. Esta pagina explica os trade-offs entre cada opcao para que voce possa tomar uma decisao informada com base nas necessidades do seu projeto.

---

## Frameworks de Programas

Esses frameworks definem como voce escreve programas on-chain na Solana. Cada um faz trade-offs diferentes entre experiencia do desenvolvedor, performance e controle.

### Anchor

[https://www.anchor-lang.com/](https://www.anchor-lang.com/)

O framework padrao para desenvolvimento de programas Solana. O Anchor fornece validacao declarativa de contas por meio de macros Rust (`#[derive(Accounts)]`), geracao automatica de IDL (Interface Description Language) e geracao de clientes TypeScript a partir desse IDL. Ele lida com boilerplate como desserializacao de contas, verificacoes de discriminator e validacao de constraints, permitindo que voce foque na logica de negocio. O ecossistema e construido em torno do Anchor -- a maioria dos tutoriais, ferramentas e codigo de exemplo assume seu uso. Escolha Anchor para a maioria dos projetos, codebases de equipe e sempre que precisar de um IDL para geracao de clientes. Versao atual: 0.31+, que introduziu discriminators customizados e `LazyAccount`.

O trade-off e tamanho do binario e consumo de compute units (CU). As abstracoes do Anchor adicionam overhead que pode importar para programas criticos em performance ou programas se aproximando do limite de tamanho do binario BPF.

### Pinocchio

[https://github.com/febo/pinocchio](https://github.com/febo/pinocchio)

Um framework zero-copy que alcanca reducao de 80-95% em CU comparado ao Anchor por meio de acesso direto a memoria, zero alocacoes no heap e tamanho minimo de binario. Pinocchio usa discriminators de byte unico (vs 8 bytes do Anchor), structs `#[repr(C)]` para layout de memoria consistente e pointer casting para acesso zero-copy a contas. O resultado sao programas dramaticamente mais baratos de executar e menores para implantar.

O trade-off e a experiencia do desenvolvedor. Voce escreve validacao manual de contas, lida com sua propria serializacao e gerencia blocos de codigo unsafe. Nao ha geracao de IDL -- voce constroi clientes manualmente. Escolha Pinocchio quando compute units ou tamanho do binario sao restricoes, quando esta construindo infraestrutura critica em performance, ou quando quer controle maximo sobre cada byte.

### Steel

[https://github.com/regolith-labs/steel](https://github.com/regolith-labs/steel)

Um framework leve da Regolith Labs que fica entre o Anchor e o native. Steel fornece macros procedurais para validacao de contas e parsing de instrucoes sem o peso total da geracao de codigo do Anchor. Programas compilam para binarios menores que Anchor enquanto mantém uma experiencia de desenvolvimento estruturada com derive macros para structs de contas, discriminators de instrucoes e tratamento de erros.

Escolha Steel quando quiser mais estrutura que o desenvolvimento native mas menos overhead que o Anchor, ou quando o tamanho do binario for uma preocupacao.

### Bolt (MagicBlock)

[https://docs.magicblock.gg/bolt/introduction](https://docs.magicblock.gg/bolt/introduction)

Um framework Entity Component System (ECS) on-chain especificamente projetado para desenvolvimento de jogos na Solana, construido pela MagicBlock. Bolt estrutura o estado on-chain como entidades com componentes composiveis, mapeando o padrao ECS familiar aos desenvolvedores de jogos diretamente para o modelo de contas da Solana.

Escolha Bolt quando estiver construindo jogos totalmente on-chain ou qualquer aplicacao que se beneficie de uma arquitetura ECS.

### Poseidon

[https://github.com/turbin3/poseidon](https://github.com/turbin3/poseidon)

Escreva programas Solana em TypeScript que compilam para Rust do Anchor. Poseidon transpila definicoes de programas TypeScript em codigo Anchor valido, permitindo que desenvolvedores mais confortaveis com TypeScript escrevam programas on-chain sem aprender Rust primeiro.

Escolha Poseidon para prototipagem rapida, para equipes com fortes habilidades em TypeScript, ou como ferramenta de aprendizado para entender padroes do Anchor por meio de uma linguagem familiar.

### Native solana-program

[https://docs.rs/solana-program](https://docs.rs/solana-program)

Programacao direta na SVM sem nenhum framework. Voce trabalha com `AccountInfo` bruto, faz parse manual de dados de instrucao e escreve toda a validacao. Isso te da controle absoluto sem overhead de abstracao, mas requer significativamente mais codigo para a mesma funcionalidade.

Use desenvolvimento native para fins educacionais (para entender o que o Anchor faz por baixo dos panos), para programas extremamente especializados onde ate as abstracoes do Pinocchio sao demais, ou para programas de instrucao unica onde o overhead de framework nao se justifica.

---

## SDKs de Cliente

Essas bibliotecas permitem que voce interaja com a Solana a partir de TypeScript/JavaScript -- enviando transacoes, lendo contas e construindo frontends.

### @solana/kit (web3.js 2.0)

[https://github.com/solana-labs/solana-web3.js](https://github.com/solana-labs/solana-web3.js)

O SDK TypeScript moderno da Solana, completamente reescrito do zero. E tree-shakable (importe apenas o que usa), tem um design de API funcional (sem classes) e fornece tipos TypeScript fortes em toda parte. A arquitetura e modular -- RPC, construcao de transacoes, gerenciamento de chaves e codecs sao pacotes separados que voce compoe.

Use `@solana/kit` para novos projetos, especialmente frontends onde o tamanho do bundle importa. O tree-shaking sozinho pode reduzir seu bundle relacionado a Solana em 80%+ comparado ao SDK legado. A API funcional tambem facilita testes ja que nao ha estado escondido.

### @solana/web3.js 1.x

[https://www.npmjs.com/package/@solana/web3.js](https://www.npmjs.com/package/@solana/web3.js)

O SDK TypeScript legado que a maioria do codigo Solana existente usa. API baseada em classes com `Connection`, `PublicKey`, `Transaction` e `Keypair` como tipos principais. O cliente TypeScript do Anchor (`@coral-xyz/anchor`) e construido sobre a versao 1.x, entao se voce esta trabalhando com clientes gerados pelo Anchor, vai usar este.

Use a versao 1.x ao trabalhar com codebases existentes, projetos Anchor ou qualquer biblioteca que dependa dele. E estavel e bem documentado, apenas maior e menos moderno que a reescrita 2.0.

### Solana Rust SDK (Cliente)

[https://docs.rs/solana-sdk](https://docs.rs/solana-sdk)

O SDK Rust para interagir com a Solana a partir de aplicacoes off-chain. Distinto do `solana-program` (que e para codigo on-chain), este SDK fornece construcao de transacoes, assinatura, comunicacao RPC e gerenciamento de keypairs para servicos backend, ferramentas CLI, indexadores e keepers.

### Solana Python SDK (solana-py)

[https://github.com/michaelhly/solana-py](https://github.com/michaelhly/solana-py)

Cliente Python para Solana. Fornece metodos RPC, construcao de transacoes e operacoes de contas para desenvolvedores Python. Util para scripts de analise de dados, interacoes em Jupyter notebooks, servicos backend e qualquer ferramenta Python que precise interagir com a Solana.

### Solana Go SDK

[https://github.com/gagliardetto/solana-go](https://github.com/gagliardetto/solana-go)

Um cliente Go para Solana mantido por gagliardetto. Fornece metodos RPC, construcao de transacoes, interacao com programas e subscricoes WebSocket. Ideal para infraestrutura baseada em Go -- indexadores, validadores, servicos de monitoramento e APIs backend.

### Codama

[https://github.com/codama-idl/codama](https://github.com/codama-idl/codama)

Uma ferramenta de geracao de codigo que recebe um IDL (do Anchor ou de outras fontes) e gera clientes tipados em multiplas linguagens -- TypeScript, Rust, Python e mais. Codama e essencial quando seu programa precisa ser consumido por clientes em diferentes linguagens. Em vez de escrever manualmente serializacao e desserializacao em cada linguagem, voce define uma vez no IDL e gera tudo.

Use Codama quando esta construindo um protocolo que outros desenvolvedores vao integrar, ou quando precisa de clientes em linguagens alem de TypeScript.

### TipLink

[https://docs.tiplink.io/](https://docs.tiplink.io/)

Wallet-as-a-service que cria wallets descartaveis via links compartilhaveis. TipLink permite criar wallets que usuarios acessam por uma URL -- nenhum app de wallet necessario. Casos de uso incluem airdrops (envie tokens para qualquer pessoa via link), onboarding (usuarios interagem com Solana antes de instalar uma wallet), presentes e campanhas de marketing.

---

## Scaffolding

### create-solana-dapp

[https://github.com/solana-foundation/create-solana-dapp](https://github.com/solana-foundation/create-solana-dapp)

Scaffolding de projetos mantido pela Solana Foundation. Ele gera um projeto completo com programa on-chain, frontend e suite de testes pre-configurados. Voce escolhe sua combinacao de frameworks -- Anchor ou native para o programa, Next.js ou React para o frontend. O projeto gerado inclui conexao de wallet, interacao com o programa e um pipeline de CI funcional. Use isso para pular o boilerplate e comecar a construir imediatamente.
