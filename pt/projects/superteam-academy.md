# Superteam Academy

**GitHub**: [SuperteamBrazil/superteam-academy](https://github.com/SuperteamBrazil/superteam-academy)
**Status**: Em desenvolvimento
**Mantido por**: @thomgabriel e @kauenet

## Visao Geral

Um sistema de gestao de aprendizado (LMS) on-chain construido na Solana. A Superteam Academy oferece credenciais educacionais verificaveis e registradas em blockchain -- substituindo certificados baseados em confianca por provas criptograficas de conclusao.

## Funcionalidades

### Tokens de XP Soulbound

Pontos de experiencia nao-transferiveis obtidos ao concluir cursos. Construidos com Token-2022 usando a extensao non-transferable, garantindo que o XP esteja vinculado ao aluno e nao possa ser comprado ou negociado.

### Certificados NFT

Certificados de conclusao on-chain emitidos como compressed NFTs via Metaplex Bubblegum. Cada certificado e verificavel on-chain e custa uma fracao de centavo para mintar gracas a state compression.

### Acompanhamento de Progresso On-Chain

Todo o progresso dos alunos e registrado na Solana. Conclusoes de cursos, notas de quizzes e conquistas de marcos sao armazenados como estado on-chain, criando um registro permanente e auditavel de aprendizagem.

### Gestao de Cursos

Ferramentas para instrutores criarem e gerenciarem o curriculo. Os cursos podem ser estruturados com modulos, aulas, quizzes e atividades -- cada um com recompensas de XP e criterios de conclusao configuraveis.

### Sistema de Turmas

Aprendizagem em grupo com prazos e marcos. As turmas permitem programas estruturados onde os alunos progridem juntos, com acesso temporario aos materiais e responsabilidade coletiva.

## Stack Tecnologica

- **Programas**: Anchor
- **Padrao de token**: Token-2022 (extensao non-transferable)
- **NFTs**: Metaplex Bubblegum (compressed NFTs)
- **Frontend**: Next.js
