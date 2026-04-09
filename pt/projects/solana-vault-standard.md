# Solana Vault Standard

**GitHub**: [solanabr/solana-vault-standard](https://github.com/solanabr/solana-vault-standard)
**Status**: sRFC submetido, em desenvolvimento ativo
**Mantido por**: @kauenet, @thomgabriel, @vcnzo_ct e outros

## Visão Geral

Uma interface padronizada de vaults para Solana -- o equivalente do ERC-4626 para o ecossistema Solana. Submetido como sRFC 40 para a Solana Foundation visando adoção em todo o ecossistema.

## Por Que Isso Importa

Sem um padrão, cada protocolo DeFi implementa vaults de forma diferente. Isso torna a composabilidade difícil: wallets precisam de integrações customizadas para cada protocolo, agregadores não conseguem generalizar entre vaults e desenvolvedores reinventam a mesma lógica de depósito/saque/contabilidade repetidamente.

O Solana Vault Standard define uma interface comum para que qualquer protocolo possa se integrar com qualquer vault compatível -- da mesma forma que o ERC-4626 unificou as interações com vaults no Ethereum.

## Funcionalidades

### sRFC 40

Um Solana Request for Comments formal, atualmente em revisão pela Solana Foundation. A proposta define a interface, estruturas de conta e comportamentos esperados para vaults compatíveis.

### 8 Variantes de Vault

Implementações de referência cobrindo diferentes casos de uso em DeFi:

- Vaults de empréstimo
- Vaults de staking
- Vaults de agregação de yield
- Variantes adicionais para estratégias especializadas

### Interface Padronizada

Uma interface comum de depósito/saque/contabilidade adaptada para o modelo de contas da Solana. Lida com as diferenças entre a arquitetura baseada em contas da Solana e o modelo baseado em contratos do Ethereum.

### Composabilidade

Permite que wallets, agregadores e protocolos interajam com qualquer vault compatível por meio de uma única integração. Construa uma vez, conecte-se a todos os vaults.

### Implementações de Referência

Programas Anchor funcionais para cada variante de vault. Servem tanto como documentação quanto como pontos de partida prontos para produção para equipes de protocolo.

## Stack Tecnológica

- Anchor
- Rust
