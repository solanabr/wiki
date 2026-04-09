# Superteam Academy

**GitHub**: [solanabr/superteam-academy](https://github.com/solanabr/superteam-academy)
**Status**: Em desenvolvimento
**Mantido por**: @thomgabriel e @kauenet

## Visão Geral

Um sistema de gestão de aprendizado (LMS) on-chain construído na Solana. A Superteam Academy oferece credenciais educacionais verificáveis e registradas em blockchain -- substituindo certificados baseados em confiança por provas criptográficas de conclusão.

## Funcionalidades

### Tokens de XP Soulbound

Pontos de experiência não-transferíveis obtidos ao concluir cursos. Construídos com Token-2022 usando a extensão non-transferable, garantindo que o XP esteja vinculado ao aluno e não possa ser comprado ou negociado.

### Certificados NFT

Certificados de conclusão on-chain emitidos como compressed NFTs via Metaplex Bubblegum. Cada certificado é verificável on-chain e custa uma fração de centavo para mintar graças a state compression.

### Acompanhamento de Progresso On-Chain

Todo o progresso dos alunos é registrado na Solana. Conclusões de cursos, notas de quizzes e conquistas de marcos são armazenados como estado on-chain, criando um registro permanente e auditável de aprendizagem.

### Gestão de Cursos

Ferramentas para instrutores criarem e gerenciarem o currículo. Os cursos podem ser estruturados com módulos, aulas, quizzes e atividades -- cada um com recompensas de XP e critérios de conclusão configuráveis.

### Sistema de Turmas

Aprendizagem em grupo com prazos e marcos. As turmas permitem programas estruturados onde os alunos progridem juntos, com acesso temporário aos materiais e responsabilidade coletiva.

## Stack Tecnológica

- **Programas**: Anchor
- **Padrão de token**: Token-2022 (extensão non-transferable)
- **NFTs**: Metaplex Bubblegum (compressed NFTs)
- **Frontend**: Next.js
