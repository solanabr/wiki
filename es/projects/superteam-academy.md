# Superteam Academy

**GitHub**: [solanabr/superteam-academy](https://github.com/solanabr/superteam-academy)
**Estado**: En desarrollo
**Mantenido por**: @thomgabriel y @kauenet

## Vision General

Un sistema de gestion de aprendizaje (LMS) on-chain construido sobre Solana. Superteam Academy proporciona credenciales educativas verificables respaldadas por blockchain — reemplazando certificados basados en confianza con prueba criptografica de finalizacion.

## Caracteristicas

### Tokens XP Soulbound

Puntos de experiencia no transferibles obtenidos al completar cursos. Construidos sobre Token-2022 con la extension non-transferable, asegurando que los XP estan vinculados al estudiante y no pueden ser comprados ni comercializados.

### Certificados NFT

Certificados de finalizacion on-chain emitidos via Metaplex Core, minteados automaticamente al completar un curso. Cada certificado es verificable on-chain.

### Seguimiento de Progreso On-Chain

Todo el progreso del estudiante se registra en Solana. Finalizaciones de cursos, puntajes de quizzes y logros de hitos se almacenan como estado on-chain, creando un registro de aprendizaje permanente y auditable.

### Gestion de Cursos

Herramientas de instructor para crear y gestionar el curriculo. Los cursos pueden estructurarse con modulos, lecciones, quizzes y tareas — cada uno con recompensas de XP y criterios de finalizacion configurables.

### Sistema de Cohortes

Aprendizaje grupal con plazos e hitos. Las cohortes habilitan programas estructurados donde los estudiantes progresan juntos, con acceso limitado por tiempo a los materiales y responsabilidad grupal.

### Desafios de Codigo Interactivos

Desafios de codigo en el navegador construidos sobre el editor Monaco, con tests automatizados que verifican cada envio. Los estudiantes escriben y validan codigo real sin salir de la plataforma.

### Gamificacion

XP, niveles, rachas diarias y logros mantienen a los estudiantes comprometidos y hacen visible el progreso en toda la plataforma.

### Interfaz Trilingue

La UI esta disponible en ingles, portugues (pt-BR) y espanol — en linea con los idiomas de las comunidades a las que sirve la Academia.

## Stack Tecnologico

- **Programas**: Anchor / Pinocchio (Rust), desplegados en Solana devnet
- **Credenciales**: XP soulbound con Token-2022 + certificados NFT de Metaplex Core
- **Frontend**: Next.js 14, React 18, Tailwind CSS, shadcn/ui
- **Backend**: Supabase (PostgreSQL + Auth)
- **Monorepo**: Turborepo + pnpm
