# Solana Game Skill

**GitHub**: [solanabr/solana-game-skill](https://github.com/solanabr/solana-game-skill)
**Status**: Em desenvolvimento ativo
**Mantido por**: @kauenet

## Visão Geral

Um pacote de skill do Claude Code para desenvolvimento de jogos Solana em Unity e mobile. Oferece agentes especializados, comandos e regras de código para construir jogos blockchain -- desde design de estado on-chain até renderização no lado do cliente.

## Funcionalidades

### Regras Unity/C#

Padrões de código .NET aplicados e adaptados para desenvolvimento de jogos em Unity com integração Solana:

- Convenções PascalCase/camelCase para componentes Unity
- Padrões de campos serializados para configuração no Inspector
- Ordenação do ciclo de vida do MonoBehaviour
- Padrões de integração com o Solana.Unity SDK

### Agente Game Architect

Design de jogos de alto nível com consciência on-chain:

- Planejamento de estado on-chain e design de estruturas de conta
- Integração de NFTs para assets in-game
- Design de economia de tokens
- Arquitetura de game loop com interações blockchain

### Agente Unity Engineer

Desenvolvimento Unity/C# no nível de implementação:

- Padrões de uso do Solana.Unity SDK
- Fluxos de conexão de wallet no Unity
- Construção de transações a partir de clientes C#
- Desserialização de contas para estado de jogo

### Agente Mobile Engineer

Desenvolvimento de jogos mobile multiplataforma:

- React Native com Expo para jogos mobile na Solana
- Integração com mobile wallet adapter
- Otimizações específicas por plataforma para iOS e Android

### Ecossistema PlaySolana

Integração com a infraestrutura de jogos PlaySolana:

- Compatibilidade com PSG1
- Padrões do PlaySolana SDK
- Sincronização de estado on-chain para multiplayer

## Stack Tecnológica

- Claude Code
- Unity
- C#
- React Native
