# Estado da Rede e Roadmap

A Solana está no meio do maior conjunto de mudanças de protocolo da sua história, e elas afetam diretamente como você constrói: a velocidade com que transações se tornam finais, qual software de validador roda a rede e quanta computação cabe em um bloco. Esta página resume o estado da rede **em agosto de 2026** -- a reformulação de consenso Alpenglow, a chegada de diversidade real de clients com o Firedancer e onde acompanhar as mudanças de protocolo à medida que elas chegam.

---

## Alpenglow -- A Reformulação do Consenso

### Alpenglow (SIMD-0326)

[https://solana.com/upgrades/alpenglow](https://solana.com/upgrades/alpenglow)

O Alpenglow substitui o consenso TowerBFT original da Solana por dois novos componentes. O **Votor** é o novo protocolo de votação: em vez da antiga escada de lockout de 32 slots, os validadores finalizam um bloco em uma única rodada quando 80% do stake vota a favor, ou em duas rodadas quando 60% vota. O **Rotor** é a camada seguinte de propagação de blocos, que substituirá a árvore de nodes de relay do Turbine por uma única camada de relay para cortar a latência de rede; ele chega como uma segunda fase depois que o Votor for adotado. A mudança principal: a finalidade cai de aproximadamente 12,8 segundos sob o TowerBFT para uma meta de aproximadamente 150 milissegundos.

O upgrade passou pela governança como SIMD-0326 e foi aprovado por uma votação de stake dos validadores em setembro de 2025, com cerca de 98% do stake participante a favor. O Alpenglow roda em um cluster público de teste da comunidade desde 11 de maio de 2026, e a ativação em mainnet está prevista para o fim do Q3 / início do Q4 de 2026 via o release Agave 4.1 -- trate isso como uma meta, não uma promessa. Um conjunto de SIMDs complementares (0337, 0357, 0384, 0387) cobre a mecânica de migração, tickets de admissão de validadores e as chaves BLS que operadores de validadores devem registrar antes da ativação.

### Linha do Tempo

- **Setembro de 2025** -- SIMD-0326 (Alpenglow) aprovado por votação de stake dos validadores, com ~98% do stake participante a favor
- **12 de dezembro de 2025** -- O client Firedancer completo entra no ar na mainnet, no Breakpoint
- **11 de maio de 2026** -- Alpenglow no ar em um cluster público de teste da comunidade
- **Fim do Q3 / início do Q4 de 2026 (meta)** -- Ativação do Alpenglow na mainnet via Agave 4.1

### Acompanhando Mudanças de Protocolo (SIMDs)

[https://github.com/solana-foundation/solana-improvement-documents](https://github.com/solana-foundation/solana-improvement-documents)

Toda mudança de protocolo passa por um Solana Improvement Document (SIMD): uma proposta pública, discussão nos [fóruns de desenvolvedores da Solana](https://forum.solana.com/c/simd/5) e -- para mudanças que afetam o consenso, como o Alpenglow -- uma votação de stake dos validadores. Se você quer saber como a rede vai estar em seis meses, os SIMDs ativos são a fonte primária; todo o resto é comentário. A página de [Referências Open Source](open-source-references.md) lista os SIMDs críticos para desenvolvedores e o navegador da comunidade em simd.wtf.

---

## Cenário de Clients de Validador

Durante a maior parte da história da Solana, efetivamente 100% da rede rodou uma única base de código. Isso não é mais verdade -- e isso importa, porque com uma só implementação, um único bug pode parar a rede inteira. Com implementações independentes, um bug em um client vira uma degradação em vez de uma interrupção.

### Agave

[https://www.anza.xyz/](https://www.anza.xyz/)

O client de validador majoritário, mantido pela Anza -- o laboratório de P&D derivado da Solana Labs. O Agave e o fork Jito-Solana que a maioria dos stakers roda respondem por aproximadamente 60% do stake da mainnet em meados de 2026, e o Agave é a implementação de referência onde novos recursos de protocolo como o Alpenglow chegam primeiro. Se você roda um validador ou lê código do runtime da Solana, esta é a base de código que você vai encontrar.

### Firedancer e Frankendancer

[https://jumpcrypto.com/firedancer](https://jumpcrypto.com/firedancer)

O Firedancer é um client de validador independente escrito do zero em C pela Jump Crypto, construído para throughput bruto -- benchmarks de laboratório miram mais de 1 milhão de TPS. O client completo entrou no ar na mainnet em 12 de dezembro de 2025, anunciado no Breakpoint em Abu Dhabi após meses de validação silenciosa em produção, e roda aproximadamente 14% do stake em meados de 2026. O **Frankendancer** -- um híbrido que combina a camada de rede do Firedancer com o runtime do Agave -- roda outros ~26%, colocando cerca de 40% do SOL em stake na base de código da Jump: a primeira diversidade real de clients na história da Solana. Relatórios de testes e performance são publicados em [reports.firedancer.io](https://reports.firedancer.io/).

---

## O Que Isso Significa para Builders

- **A finalidade passa a fazer parte da sua UX.** Hoje, apps fazem um compromisso entre `confirmed` (rápido, pequeno risco de rollback) e `finalized` (seguro, espera de ~12,8s). Depois do Alpenglow, essa distância cai para bem menos de um segundo -- fluxos que dependem de finalidade (pagamentos, bridges, depósitos em exchanges) podem se tornar quase instantâneos. Leia os níveis de commitment do RPC em vez de fixar tempos de espera no código, e seu app se beneficiará automaticamente quando a virada acontecer.
- **Não dependa de peculiaridades de client.** Com duas implementações de validador independentes em produção, comportamentos que não fazem parte da especificação do protocolo (detalhes de timing, edge cases não documentados de RPC) podem diferir entre nodes. Seu provedor de RPC pode rodar Agave, Frankendancer ou Firedancer completo.
- **Os limites de computação continuam subindo.** A capacidade de computação por bloco foi elevada repetidamente por meio de SIMDs -- mais recentemente o SIMD-0286, ativado na mainnet em 29 de julho de 2026, que elevou os blocos de 60M para 100M CUs (+66% de capacidade), com o SIMD-0296 (transações maiores) ainda em andamento. A direção é clara -- mais computação por bloco -- mas a disciplina de CU por transação ainda determina seu custo de inclusão, então continue fazendo profiling.
- **Teste contra o que está por vir.** O Alpenglow está no ar em um cluster público de teste, e os SIMDs complementares chegam em point releases do Agave antes da ativação na mainnet. Se o seu protocolo é sensível a timing de confirmação ou à mecânica de vote accounts, acompanhe as release notes do Agave em vez de esperar pela virada na mainnet.

---

Esta página reflete a rede em agosto de 2026. A ativação do Alpenglow na mainnet e as participações de stake por client vão mudar -- confira [solana.com/upgrades/alpenglow](https://solana.com/upgrades/alpenglow) e o repositório de SIMDs para o status atual. Páginas relacionadas: [Referências Open Source](open-source-references.md) para o processo de SIMDs e os repositórios core, [Primeiros Passos](getting-started.md) para os conceitos fundamentais, e o [validator da Superteam Brasil](../about/validator.md) se você quiser apoiar a descentralização da rede delegando stake.
