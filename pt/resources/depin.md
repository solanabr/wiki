# DePIN na Solana

DePIN -- Decentralized Physical Infrastructure Networks, ou redes de infraestrutura física descentralizada -- usa incentivos em tokens para viabilizar hardware no mundo real: cobertura wireless, mapeamento em nível de rua, computação em GPU, banda de internet. Em vez de uma única empresa implantar infraestrutura, milhares de indivíduos implantam dispositivos e ganham tokens por contribuições verificadas. A Solana domina essa categoria por uma razão estrutural: recompensar milhões de dispositivos significa um volume enorme de pagamentos minúsculos, e as taxas da Solana são baixas o suficiente para tornar micropagamentos por dispositivo viáveis, enquanto compressed NFTs e compressão ZK dão a cada dispositivo uma identidade on-chain barata. Os resultados aparecem nos dados -- a categoria DePIN se aproxima de US$ 20 bilhões em meados de 2026, e os protocolos DePIN na Solana estabeleceram um recorde histórico de receita mensal de US$ 2,6 milhões em janeiro de 2026.

---

## Redes de Destaque

Estas são as redes que valem estudo antes de você construir -- cada uma resolveu os problemas centrais de DePIN (prova de contribuição, distribuição de recompensas, onboarding de hardware) em um domínio diferente.

### Helium

[https://docs.helium.com/](https://docs.helium.com/)

Wireless descentralizado: uma rede LoRaWAN global para dispositivos IoT mais uma rede de offload celular para conectividade móvel, com operadores de hotspots ganhando HNT por fornecer cobertura. A conectividade IoT via Helium custa aproximadamente uma ordem de grandeza menos que planos celulares comparáveis, e é por isso que ela tem uso pago real em vez de apenas especulação com tokens.

O Helium também é o case study canônico de DePIN para builders -- migrou toda a sua L1 para a Solana em 2023, e seu ferramental open-source (incluindo o TukTuk, coberto na página de [Desenvolvimento DeFi](defi-development.md)) é reutilizado por todo o ecossistema. Estude sua arquitetura de proof-of-coverage baseada em oracles e de distribuição de recompensas antes de projetar a sua.

### Hivemapper

[https://hivemapper.com/](https://hivemapper.com/)

Mapeamento descentralizado: motoristas instalam uma dashcam Bee e ganham tokens HONEY por contribuir com imagens em nível de rua enquanto dirigem. A rede já mapeou cerca de um terço da malha rodoviária mundial e vende dados de mapas atualizados para clientes como a Lyft -- uma demonstração de que hardware crowdsourced pode competir com frotas como os carros do Street View do Google a uma fração do custo de capital.

Para builders, a Hivemapper é a referência em recompensas ponderadas por qualidade: contribuições são pontuadas por atualidade e valor de cobertura, não apenas por volume.

### Render

[https://rendernetwork.com/](https://rendernetwork.com/)

Renderização descentralizada em GPU para cargas de trabalho criativas e de IA. A Render conecta capacidade ociosa de GPU a artistas e estúdios usando engines como OctaneRender, Redshift e Blender Cycles, e se expandiu para fluxos de geração de imagens com IA generativa. É uma das redes DePIN de maior receita na Solana e uma das poucas que paga consistentemente recompensas significativas por operador de node.

### io.net

[https://io.net/](https://io.net/)

Uma nuvem de GPU descentralizada que agrega computação de data centers, mineradores de cripto e dispositivos de consumo em clusters para cargas de trabalho de AI/ML. Enquanto a Render foca em pipelines de renderização, a io.net mira treinamento e inferência de machine learning -- o lado da demanda que explodiu com a onda de IA. Relevante se o seu projeto precisa de computação em GPU acessível ou se você está projetando agregação de oferta para hardware heterogêneo.

### Grass

[https://www.grass.io/](https://www.grass.io/)

Compartilhamento de banda para dados de IA: milhões de usuários rodam um app que compartilha banda ociosa de internet, que a rede usa para coletar dados públicos da web para treinamento de IA, recompensando contribuidores com pontos conversíveis em tokens GRASS. A Grass importa como case study porque reduziu a barreira de hardware a zero -- sem dashcam, sem hotspot, apenas software -- e é por isso que alcançou uma das maiores bases de contribuidores em DePIN.

---

## Pontos de Partida para Builders

### Página de Soluções DePIN da Solana

[https://solana.com/solutions/depin](https://solana.com/solutions/depin)

O hub oficial de DePIN da Solana: redes em destaque, estatísticas do ecossistema, entrevistas de case study e o relatório anual de DePIN. Útil para uma visão de mercado da categoria e para ver quais primitivas (compressed NFTs, Token Extensions, compressão ZK) cada rede realmente usa em produção.

### Guia Quickstart de DePIN

[https://solana.com/developers/guides/depin/getting-started](https://solana.com/developers/guides/depin/getting-started)

O guia oficial para desenvolvedores sobre o lado on-chain de um protocolo DePIN: a escolha entre SPL Token e Token-2022 para seu token de recompensa, distribuição de recompensas baseada em claim vs push (incluindo abordagens com Merkle trees e compressão ZK), padrões de prova de contribuição, trade-offs entre dados on-chain e off-chain, e governança. Leia isto primeiro -- ele condensa as decisões de design que toda rede acima teve de tomar, com implementações de referência.

### DePINscan

[https://depinscan.io/chains/solana](https://depinscan.io/chains/solana)

Rastreador do ecossistema de projetos, dispositivos e métricas de tokens DePIN, filtrável por chain. Use-o para dimensionar um nicho antes de se comprometer -- se três equipes financiadas já estão implantando hardware na sua categoria, você precisa de um diferencial mais afiado. Os [deep dives mensais de DePIN na Solana](https://blog.syndica.io/deep-dive-solana-depin-january-2026/) da Syndica complementam com análise de receita dos principais protocolos.

---

## Padrões de Design

### Incentivos em Tokens

Seu token de recompensa é o produto. As decisões de design -- cronograma de emissão, mecânicas de queima, recompensas ponderadas por qualidade, extensões Token-2022 para compliance ou taxas de transferência -- determinam se sua rede atrai operadores reais ou farmers mercenários. Veja [Token Standards](token-standards.md) para o sistema de extensões Token-2022 sobre o qual essas mecânicas são construídas.

### Identidade de Dispositivos a Baixo Custo

Uma rede DePIN pode significar milhões de registros de dispositivos on-chain, e é aí que contas padrão se tornam proibitivamente caras. Compressed NFTs e compressão ZK reduzem o custo por dispositivo a uma fração de centavo -- veja a entrada do Light Protocol na página de [Ferramentas de Desenvolvimento](development-tools.md) e a cobertura de compressed NFTs em [Token Standards](token-standards.md).

---

## DePIN em Hackathons

Os jurados premiam essa categoria. O Grand Champion do hackathon Solana Frontier do Colosseum (anunciado em junho de 2026) foi o **CrowdBrain**, um DePIN de robótica que treina operadores em simulação e direciona os melhores para robôs reais para teleoperação e coleta de dados -- vencedor entre 2.857 submissões finais. Se você vai entrar em um hackathon Solana com ideias de hardware ou infraestrutura, DePIN é uma track onde uma demo de dispositivo funcionando se destaca; veja a [seção Hackathon](../hackathon/README.md) e [Comunidade e Hackathons](community-and-hackathons.md) para saber como competir.
