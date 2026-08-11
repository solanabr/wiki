# Solana Vault Standard

**GitHub**: [solanabr/solana-vault-standard](https://github.com/solanabr/solana-vault-standard)
**Status**: Em desenvolvimento ativo -- 12 variantes rodando na devnet
**Mantido por**: @kauenet, @thomgabriel, @vcnzo_ct e outros

## Visão Geral

Uma interface padronizada de vaults para Solana -- o equivalente do ERC-4626 para o ecossistema Solana. Referenciada na discussão do sRFC 40 (padrão de vaults) do ecossistema como uma implementação desenvolvida de forma independente.

## Por Que Isso Importa

Sem um padrão, cada protocolo DeFi implementa vaults de forma diferente. Isso torna a composabilidade difícil: wallets precisam de integrações customizadas para cada protocolo, agregadores não conseguem generalizar entre vaults e desenvolvedores reinventam a mesma lógica de depósito/saque/contabilidade repetidamente.

O Solana Vault Standard define uma interface comum para que qualquer protocolo possa se integrar com qualquer vault compatível -- da mesma forma que o ERC-4626 unificou as interações com vaults no Ethereum.

## Funcionalidades

### sRFC 40

O SVS é referenciado na [discussão sRFC 40: Vault Standard Program](https://github.com/solana-foundation/SRFCs/discussions/10) em solana-foundation/SRFCs como uma implementação desenvolvida de forma independente que informa o padrão de vaults emergente do ecossistema (que atualmente prioriza vaults assíncronos para emissores de RWA).

### 12 Variantes de Vault

Implementações de referência cobrindo diferentes casos de uso em DeFi, todas rodando na devnet:

- **SVS-1/2** -- Vaults públicos (saldo live e saldo armazenado)
- **SVS-3/4** -- Vaults privados com confidential transfers do Token-2022
- **SVS-5/6** -- Vaults de streaming de yield
- **SVS-7** -- Vault de SOL nativo
- **SVS-8** -- Cesta multiativos
- **SVS-9** -- Vault de vaults alocador
- **SVS-10** -- Vault assíncrono no estilo ERC-7540
- **SVS-11** -- Vault de credit markets com KYC e NAV via oracle
- **SVS-12** -- Vault em tranches

### Interface Padronizada

Uma interface comum de depósito/saque/contabilidade adaptada para o modelo de contas da Solana. Lida com as diferenças entre a arquitetura baseada em contas da Solana e o modelo baseado em contratos do Ethereum.

### Composabilidade

Permite que wallets, agregadores e protocolos interajam com qualquer vault compatível por meio de uma única integração. Construa uma vez, conecte-se a todos os vaults.

### Implementações de Referência

Programas Anchor funcionais para cada variante de vault. Servem tanto como documentação quanto como pontos de partida prontos para produção para equipes de protocolo. O repositório também inclui um SDK TypeScript e uma CLI.

## Stack Tecnológica

- Anchor
- Rust
- SDK TypeScript e CLI
