# Solana Stablecoin Standard

**GitHub**: [solanabr/solana-stablecoin-standard](https://github.com/solanabr/solana-stablecoin-standard)
**Status**: Concluído -- v1 lançada em março de 2026; repositório arquivado (somente leitura), disponível como implementação de referência
**Mantido por**: @lvj_luiz e @kauenet

## Visão Geral

Uma interface padronizada para emissão e gestão de stablecoins na Solana. Define duas especificações -- SSS-1 (minimal) para funcionalidades core de stablecoin e SSS-2 (compliant), que adiciona aplicação de blacklist via transfer hook e contas com KYC obrigatório.

A versão v1 entregou um kit completo: o programa Anchor SSS-Core, um programa de transfer hook de blacklist, uma CLI, um SDK TypeScript, um backend REST e uma demo em React.

## Por Que Isso Importa

Stablecoins são a espinha dorsal do DeFi. Sem um padrão compartilhado, cada emissor implementa mint, burn, freeze e controles de compliance de forma diferente. Isso fragmenta o ecossistema: exchanges precisam de integrações customizadas por stablecoin, protocolos DeFi não conseguem generalizar o tratamento de stablecoins e o compliance se torna algo improvisado.

O Solana Stablecoin Standard oferece uma interface comum para que emissores, exchanges e protocolos DeFi possam interoperar por meio de uma única especificação.

## Funcionalidades

### SSS-1 (Minimal)

A interface core de stablecoin cobrindo operações fundamentais:

- Controles de mint e burn
- Freeze e thaw de contas
- Restrições de transferência
- Gerenciamento de autoridades

### SSS-2 (Compliant)

Constrói sobre a SSS-1 com aplicação de blacklist via transfer hook e contas com KYC obrigatório, para deployments institucionais e focados em compliance:

- Hooks de compliance para aplicação de KYC/AML
- Blacklisting e whitelisting
- Integração com oracles atualizáveis
- Restrições de transferência configuráveis

### Colaboração com a OpenZeppelin

O principal contribuidor @lvj_luiz da OpenZeppelin traz expertise em segurança testada em batalha vinda do ecossistema Ethereum. O padrão se beneficia do mesmo rigor aplicado aos contratos Solidity amplamente utilizados da OpenZeppelin.

### Pronto para Compliance

Construído com requisitos regulatórios em mente. Transfer hooks permitem que emissores apliquem verificações de KYC, restrições geográficas e outras políticas de compliance no nível do protocolo.

### Nativo em Token-2022

Aproveita o programa Token Extensions da Solana para funcionalidades avançadas:

- **Transfer hooks** para aplicação de compliance
- **Confidential transfers** para pagamentos com preservação de privacidade
- **Non-transferable metadata** para atestações de emissores

## Referências Ativas

- **Demo em vídeo**: [Demo do Solana Stablecoin Standard](https://youtu.be/3y86hHGvMO4)
- **Programa SSS-Core (devnet)**: `4ZFzYcNVDSew79hSAVRdtDuMqe9g4vYh7CFvitPSy5DD`
- **Programa Blacklist Transfer Hook (devnet)**: `84rPjkmmoP3oYZVxjtL2rdcT6hC5Rts6N5XzJTFcJEk6`

Os dois program IDs são os listados no README do repositório.

## Stack Tecnológica

- Anchor
- Token-2022
- Rust
