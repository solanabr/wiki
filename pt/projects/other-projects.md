# Outros Projetos

Projetos menores e de apoio mantidos pela Superteam Brasil.

**Mantido por**: @kauenet

---

## solana-glossary

**GitHub**: [solanabr/solana-glossary](https://github.com/solanabr/solana-glossary)

O glossário mais completo do ecossistema Solana -- 1.059 termos enriquecidos em 14 categorias, em inglês, português e espanhol. Distribuído como SDK npm e servidor MCP ([@stbr/solana-glossary](https://www.npmjs.com/package/@stbr/solana-glossary)), além de um web app (Solana Dev Copilot -- um navegador de glossário em Vite + React com um copiloto de IA).

Útil para onboarding de desenvolvedores, para alimentar agentes de IA com a terminologia correta e para manter a documentação consistente.

---

## solana-skills

**GitHub**: [solanabr/solana-skills](https://github.com/solanabr/solana-skills)

Fork de [qedgen/solana-skills](https://github.com/qedgen/solana-skills) -- a skill de agente da QEDGen para verificação formal de programas Solana com provas em Lean 4, incluída como submódulo do Solana AI Kit.

O QEDGen upstream recebe uma especificação declarativa das garantias de um programa e gera artefatos de verificação a partir dela: property tests, harnesses de model checking com Kani e provas formais em Lean 4. Suporta Anchor, Pinocchio e assembly sBPF, e pode auditar programas existentes para revelar invariantes candidatas.

---

## solana-dev-skill

**GitHub**: [solanabr/solana-dev-skill](https://github.com/solanabr/solana-dev-skill)

A skill base do Claude Code para desenvolvimento Solana em geral. Fornece regras, comandos e configurações de agentes que servem de fundação para o [solana-claude](solana-claude.md).

Esta skill cobre o ciclo de desenvolvimento principal -- build, format, lint, test, deploy -- junto com princípios de segurança e padrões de código específicos para Solana em Rust e TypeScript.

---

## auditor-skill

**GitHub**: [solanabr/auditor-skill](https://github.com/solanabr/auditor-skill)

Uma skill agêntica de auditoria de segurança para programas Solana que modela o ciclo completo de uma firma de auditoria: escopo, revisão, uma prova de conceito executável para cada achado e um patch de correção entregue. Executa 1.346 verificações em 20 checklists e faz triagem contra 131 vetores de ataque do mundo real, com o apoio de um pré-scanner em Rust e memória entre auditorias, para que engajamentos recorrentes fiquem mais precisos com o tempo.

Use-a antes de levar qualquer programa à mainnet -- ela complementa, mas não substitui, uma auditoria profissional de terceiros.

---

## solana-builder-mcp

**GitHub**: [solanabr/solana-builder-mcp](https://github.com/solanabr/solana-builder-mcp)

Um único servidor MCP que empacota as principais skills e integrações de ecossistema da Superteam Brasil em uma distribuição segura. Em vez de configurar skills e servidores um a um, builders apontam seu assistente de IA para um único endpoint e recebem o conjunto curado de ferramentas -- útil para editores e agentes que suportam MCP, mas não o sistema de skills do Claude Code.

---

## hacker-brainstorm

**GitHub**: [solanabr/hacker-brainstorm](https://github.com/solanabr/hacker-brainstorm)

Um assistente de brainstorm para hackathons Solana. Ele entrevista você sobre suas habilidades e interesses, cruza projetos vencedores anteriores com lacunas atuais do ecossistema e ajuda a convergir em uma ideia que valha a pena construir -- o mesmo processo abordado em [Dicas para Gerar Boas Ideias](../hackathon/tips-and-ideas.md), empacotado como uma skill de agente.

---

## solana-iceberg

**GitHub**: [solanabr/solana-iceberg](https://github.com/solanabr/solana-iceberg)

Um glossário interativo de Solana estruturado como um iceberg de conhecimento -- termos superficiais que todo usuário conhece no topo, internals de protocolo nas profundezas. Ele complementa o [solana-glossary](#solana-glossary) com uma forma visual e exploratória de mapear quão fundo vai o seu conhecimento de Solana e o que aprender em seguida.

---

## content-gen-skill

**GitHub**: [solanabr/content-gen-skill](https://github.com/solanabr/content-gen-skill)

Uma skill do Claude Code para produzir conteúdo educacional de Solana/Web3 em oito formatos -- cursos, tutoriais, walkthroughs, explainers, ensaios, litepapers, especificações de slides e threads para redes sociais -- a partir de um tema, um público e anotações. Cursos geram um sistema de arquivos validado com briefs por lição e, quando a skill irmã [writer-style-skill](https://github.com/solanabr/writer-style-skill) está instalada, a prosa passa pelo seu motor de voz. Esta é a ferramenta por trás de boa parte do pipeline de conteúdo educacional da Superteam Brasil.
