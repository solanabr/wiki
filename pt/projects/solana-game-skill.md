# Solana Game Skill

**GitHub**: [solanabr/solana-game-skill](https://github.com/solanabr/solana-game-skill)
**Status**: Em desenvolvimento ativo
**Mantido por**: @kauenet

## Visao Geral

Um pacote de skill do Claude Code para desenvolvimento de jogos Solana em Unity e mobile. Oferece agentes especializados, comandos e regras de codigo para construir jogos blockchain -- desde design de estado on-chain ate renderizacao no lado do cliente.

## Funcionalidades

### Regras Unity/C#

Padroes de codigo .NET aplicados e adaptados para desenvolvimento de jogos em Unity com integracao Solana:

- Convencoes PascalCase/camelCase para componentes Unity
- Padroes de campos serializados para configuracao no Inspector
- Ordenacao do ciclo de vida do MonoBehaviour
- Padroes de integracao com o Solana.Unity SDK

### Agente Game Architect

Design de jogos de alto nivel com consciencia on-chain:

- Planejamento de estado on-chain e design de estruturas de conta
- Integracao de NFTs para assets in-game
- Design de economia de tokens
- Arquitetura de game loop com interacoes blockchain

### Agente Unity Engineer

Desenvolvimento Unity/C# no nivel de implementacao:

- Padroes de uso do Solana.Unity SDK
- Fluxos de conexao de wallet no Unity
- Construcao de transacoes a partir de clientes C#
- Desserializacao de contas para estado de jogo

### Agente Mobile Engineer

Desenvolvimento de jogos mobile multiplataforma:

- React Native com Expo para jogos mobile na Solana
- Integracao com mobile wallet adapter
- Otimizacoes especificas por plataforma para iOS e Android

### Ecossistema PlaySolana

Integracao com a infraestrutura de jogos PlaySolana:

- Compatibilidade com PSG1
- Padroes do PlaySolana SDK
- Sincronizacao de estado on-chain para multiplayer

## Stack Tecnologica

- Claude Code
- Unity
- C#
- React Native
