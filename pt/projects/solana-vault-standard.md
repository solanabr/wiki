# Solana Vault Standard

**GitHub**: [solanabr/solana-vault-standard](https://github.com/solanabr/solana-vault-standard)
**Status**: sRFC submetido, em desenvolvimento ativo
**Mantido por**: @kauenet, @thomgabriel, @vcnzo_ct e outros

## Visao Geral

Uma interface padronizada de vaults para Solana -- o equivalente do ERC-4626 para o ecossistema Solana. Submetido como sRFC 40 para a Solana Foundation visando adocao em todo o ecossistema.

## Por Que Isso Importa

Sem um padrao, cada protocolo DeFi implementa vaults de forma diferente. Isso torna a composabilidade dificil: wallets precisam de integracoes customizadas para cada protocolo, agregadores nao conseguem generalizar entre vaults e desenvolvedores reinventam a mesma logica de deposito/saque/contabilidade repetidamente.

O Solana Vault Standard define uma interface comum para que qualquer protocolo possa se integrar com qualquer vault compativel -- da mesma forma que o ERC-4626 unificou as interacoes com vaults no Ethereum.

## Funcionalidades

### sRFC 40

Um Solana Request for Comments formal, atualmente em revisao pela Solana Foundation. A proposta define a interface, estruturas de conta e comportamentos esperados para vaults compativeis.

### 8 Variantes de Vault

Implementacoes de referencia cobrindo diferentes casos de uso em DeFi:

- Vaults de emprestimo
- Vaults de staking
- Vaults de agregacao de yield
- Variantes adicionais para estrategias especializadas

### Interface Padronizada

Uma interface comum de deposito/saque/contabilidade adaptada para o modelo de contas da Solana. Lida com as diferencas entre a arquitetura baseada em contas da Solana e o modelo baseado em contratos do Ethereum.

### Composabilidade

Permite que wallets, agregadores e protocolos interajam com qualquer vault compativel por meio de uma unica integracao. Construa uma vez, conecte-se a todos os vaults.

### Implementacoes de Referencia

Programas Anchor funcionais para cada variante de vault. Servem tanto como documentacao quanto como pontos de partida prontos para producao para equipes de protocolo.

## Stack Tecnologica

- Anchor
- Rust
