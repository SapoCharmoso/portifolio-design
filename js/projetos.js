/* =========================================================
   LeapCode · Portfólio de Design Gráfico
   Dados dos projetos — edite os textos aqui.
   Cada projeto segue: imagem final, desenvolvimento
   (processo criativo de Kneller), explicação e justificativa.
   ========================================================= */

const PROJETOS = [
  {
    id: "leapcode",
    num: "02",
    tag: "AD2 · Identidade visual",
    titulo: "LeapCode",
    resumo: "Marca, painel semântico e apresentação de uma empresa de modernização de software.",
    capa: "assets/img/leapcode-1.jpg",
    galeria: [
      "assets/img/leapcode-1.jpg",
      "assets/img/leapcode-2.jpg",
      "assets/img/leapcode-3.jpg",
      "assets/img/leapcode-4.jpg"
    ],
    pdf: "assets/pdf/ad2-leapcode.pdf",
    span: "wide",
    explicacao:
      "Criação de uma marca e de uma apresentação de 4 slides: capa, sobre a empresa (missão e visão), perfil e linguagem (área, público, personalidade e tom de voz) e o painel semântico com as referências visuais. A LeapCode faz sistemas web sob medida e moderniza software legado.",
    kneller: [
      ["Preparação", "Ponto de partida na minha área real de trabalho: desenvolvimento e manutenção de sistemas antigos, e a ideia de um sapo como mascote."],
      ["Incubação", "A primeira versão ficou fofa demais para uma empresa de software. Busquei um visual mais profissional, com pegada de game."],
      ["Iluminação", "\"Leap\" quer dizer salto: o sapo salta, e a empresa faz o software dar o salto do legado para o moderno. Nome e mascote passaram a contar a mesma história."],
      ["Revisão", "Montei o painel semântico com terminais, pixel art e interfaces retrô para validar o clima da marca antes de fechar os slides."]
    ],
    justificativa: [
      ["Sapo em pixel art", "Faz a ponte entre o antigo (8 bits) e o atual. É a mesma ideia da empresa: respeitar o legado e levá-lo adiante."],
      ["Verde de terminal", "Lembra o fósforo dos monitores antigos e também a cor natural do sapo. Sobre o fundo escuro, gera alto contraste."],
      ["Chakra Petch", "Fonte geométrica com cantos chanfrados: tem cara de interface de software e de game sem perder legibilidade."],
      ["\"Leap\" verde + \"Code\" branco", "A ênfase pela cor destaca o conceito (o salto). A fonte mono nos comentários /* */ reforça o universo dev por repetição."],
      ["Tom de voz", "\"Sério no código, leve na conversa\": técnico e confiável, mas sem a formalidade que afasta pequenas empresas."]
    ]
  },
  {
    id: "bauhaus",
    num: "01",
    tag: "AD1 · Infográfico",
    titulo: "Bauhaus 1919–1933",
    resumo: "Infográfico sobre a escola alemã que virou a base do design moderno.",
    capa: "assets/img/bauhaus.jpg",
    galeria: ["assets/img/bauhaus.jpg"],
    pdf: "assets/pdf/ad1-bauhaus.pdf",
    span: "tall",
    explicacao:
      "Infográfico em formato A2 sobre a Escola Bauhaus: as três cidades por onde passou (Weimar, Dessau e Berlim), seus princípios, a relação entre forma e cor proposta por Kandinsky, pessoas e obras marcantes e o legado que chegou até a ESDI, no Rio de Janeiro.",
    kneller: [
      ["Preparação", "Pesquisa sobre a história da escola, suas fases, diretores, alunos e obras mais conhecidas."],
      ["Incubação", "Percebi que o infográfico precisava ser a Bauhaus, não só falar sobre ela: o tema deveria ditar a forma."],
      ["Iluminação", "Organizar tudo em blocos geométricos com as cores primárias e as formas básicas da própria escola."],
      ["Revisão", "Ajuste da quantidade de texto e da hierarquia para que cada bloco fosse lido rapidamente."]
    ],
    justificativa: [
      ["Cores primárias + preto", "Vermelho, amarelo e azul são a paleta clássica da Bauhaus. O preto dá peso e contraste aos blocos."],
      ["Triângulo, quadrado, círculo", "As formas que Kandinsky associou às cores aparecem como elemento gráfico e como conteúdo."],
      ["Tipografia sem serifa", "Segue o princípio de letras simples e legíveis, como a Fonte Universal de Herbert Bayer."],
      ["Grid modular", "Cada bloco responde a uma pergunta (quando, onde, quem, como). É a forma seguindo a função."],
      ["Hierarquia", "Título enorme em vermelho, datas em destaque e a linha do tempo das três cidades lida da esquerda para a direita."]
    ]
  },
  {
    id: "estetica",
    num: "03",
    tag: "AD3 · Pôster informativo A4",
    titulo: "Estética",
    resumo: "Pôster que explica o que é estética no design e por que ela importa.",
    capa: "assets/img/estetica.jpg",
    galeria: ["assets/img/estetica.jpg"],
    pdf: "assets/pdf/ad3-estetica.pdf",
    span: "third",
    explicacao:
      "Pôster informativo A4 (Unidade 2) sobre estética: origem da palavra (aisthēsis, percepção pelos sentidos), o que ela significa no design, o dado de que reagimos a um estímulo visual em cerca de 0,5 s e quatro ferramentas da estética: proporção áurea, simetria, espaço negativo e fechamento (Gestalt).",
    kneller: [
      ["Preparação", "Leitura do conteúdo da Unidade 2 e seleção do que cabe numa peça de leitura rápida."],
      ["Incubação", "Definir uma ideia central forte: estética não é enfeite, é o que faz o olhar ficar."],
      ["Iluminação", "Usar o próprio pôster como demonstração: poucos elementos, muito respiro e um ponto focal claro."],
      ["Revisão", "Testar a ordem de leitura: título, dado de impacto, ferramentas e frase final."]
    ],
    justificativa: [
      ["Preto, branco e vermelho", "Paleta mínima com contraste máximo. O vermelho só aparece onde quero o olhar."],
      ["\"A\" vermelho no título", "Um único ponto de ênfase que quebra a palavra e chama atenção logo de cara."],
      ["0,5s em escala grande", "O dado mais impactante ganha tamanho de título: hierarquia pela escala."],
      ["Quatro ícones em linha", "Repetição e alinhamento: mesmo tamanho, mesmo traço, mesma estrutura de legenda."],
      ["Faixa vermelha no rodapé", "Fecha a leitura em Z com a mensagem principal, como uma assinatura do pôster."]
    ]
  },
  {
    id: "ifmaker",
    num: "04",
    tag: "Flyer A5 · Cliente: IFC Camboriú",
    titulo: "IFMaker",
    resumo: "Flyer de divulgação do novo laboratório maker do campus.",
    capa: "assets/img/ifmaker.jpg",
    galeria: ["assets/img/ifmaker.jpg"],
    pdf: "assets/pdf/flyer-ifmaker.pdf",
    span: "third",
    explicacao:
      "Flyer A5 de divulgação do Laboratório IFMaker do IFC Campus Camboriú. Ele apresenta a cultura maker, explica a Aprendizagem Baseada em Projetos em três passos (identificar, planejar, construir) e convida toda a comunidade acadêmica a conhecer o espaço.",
    kneller: [
      ["Preparação", "Briefing: cliente IFC, público de alunos, professores e técnicos, objetivo de divulgar e atrair visitantes."],
      ["Incubação", "Traduzir \"mão na massa\" em linguagem visual: oficina, ferramentas, papel de projeto."],
      ["Iluminação", "O título virou o próprio lema maker, \"Faça você mesmo.\", grande o bastante para ser lido de longe."],
      ["Revisão", "Encaixar a identidade do IF (logo e cores institucionais) sem apagar a energia do laranja."]
    ],
    justificativa: [
      ["Título gigante", "\"Faça você mesmo.\" é a mensagem inteira em três palavras. É a primeira coisa lida."],
      ["Laranja como marca-texto", "Lembra fita e ferramenta de oficina e destaca \"mesmo.\" e a chamada final."],
      ["Régua e fundo quadriculado", "Remetem a medição e a papel de projeto: o universo maker sem precisar de foto."],
      ["Selo \"Novo no campus!\"", "Inclinado como um adesivo: quebra intencional do grid para dar informalidade."],
      ["Ícones com setas", "Identificar → Planejar → Construir: direção e sequência explicam a metodologia num relance."]
    ]
  },
  {
    id: "n64",
    num: "05",
    tag: "Fórum 3 · Análise de cores",
    titulo: "Nintendo 64",
    resumo: "Análise do esquema de cores da logo do Nintendo 64 (1996).",
    capa: "assets/img/n64.jpg",
    galeria: ["assets/img/n64.jpg"],
    pdf: "assets/pdf/forum3-n64.pdf",
    span: "third",
    explicacao:
      "Análise das cores da logo do Nintendo 64 usando a roda de cores. O esquema é tetrádico, formado por duas duplas de complementares (amarelo × azul e vermelho × verde). Extraí a paleta com os códigos hexadecimais, medi a proporção de cada cor na logo e mostrei como as mesmas quatro cores se repetem nos botões do controle.",
    kneller: [
      ["Preparação", "Escolha de um produto próximo do meu repertório: games. A logo do N64 tem uma das paletas mais marcantes."],
      ["Incubação", "Entender por que quatro cores tão fortes não brigam entre si."],
      ["Iluminação", "Marcando a paleta na roda, apareceu um retângulo perfeito: duas duplas de complementares."],
      ["Revisão", "Validar os códigos de cor na imagem e calcular a proporção aproximada de cada uma."]
    ],
    justificativa: [
      ["Roda de cores com o esquema", "Mostra visualmente a relação tetrádica, sem depender só de texto."],
      ["Amostras com hex e função", "Cada cor diz onde aparece na logo (letras, faces dos blocos, \"64\")."],
      ["Barra de proporção", "Transforma a medição em dado visual: o azul domina e o vermelho e o amarelo pontuam."],
      ["Controle no fechamento", "Prova a repetição da marca no produto: A azul, B verde, C amarelo, Start vermelho."]
    ]
  },
  {
    id: "principios",
    num: "06",
    tag: "Fórum 1 · Princípios do design",
    titulo: "4 produtos, 4 princípios",
    resumo: "Proximidade, alinhamento, repetição e contraste analisados em quatro peças reais.",
    capa: "assets/img/principios-capa.jpg",
    galeria: [
      "assets/img/principios-1.jpg", "assets/img/principios-2.jpg",
      "assets/img/principios-3.jpg", "assets/img/principios-4.jpg",
      "assets/img/principios-5.jpg", "assets/img/principios-6.jpg",
      "assets/img/principios-7.jpg", "assets/img/principios-8.jpg"
    ],
    pdf: "assets/pdf/forum1-principios.pdf",
    span: "full",
    explicacao:
      "Análise de quatro produtos de design gráfico (a loja da Steam, o cartaz do filme Street Fighter, uma página de revista de carros e um folheto de hortifruti) a partir dos quatro princípios básicos: proximidade, alinhamento, repetição e contraste. Cada análise termina com uma crítica.",
    kneller: [
      ["Preparação", "Escolher peças variadas: digital e impresso, peças bem resolvidas e peças com problemas."],
      ["Incubação", "Olhar cada peça só por um princípio de cada vez, em vez de tudo ao mesmo tempo."],
      ["Iluminação", "A comparação entre a revista (legendas ligadas por setas) e o folheto (cards) mostrou a proximidade bem e mal usada."],
      ["Revisão", "Fechar cada análise com uma crítica sobre o que eu mudaria."]
    ],
    justificativa: [
      ["Mesma estrutura nos quatro", "Imagem, depois os 4 princípios, depois a crítica. A repetição facilita comparar as peças."],
      ["Imagem antes do texto", "O leitor vê a peça primeiro e depois lê a análise, na mesma ordem em que eu a observei."],
      ["Crítica em cada peça", "Mostra que os princípios servem para avaliar e corrigir, não só para descrever."]
    ]
  }
];

/* Como o próprio site aplica o conteúdo da Unidade 3 */
const APLICACOES = [
  ["Grid de 12 colunas", "Os cards de projeto ocupam 7+5, 4+4+4 e 12 colunas: tamanhos diferentes, mesmo alinhamento."],
  ["Hierarquia e escala", "Título do projeto > categoria > descrição. O que importa mais é maior e mais contrastado."],
  ["Direção (Z e F)", "A abertura segue um Z: marca, sapo, frase e botão. As seções de texto seguem o padrão F."],
  ["Contraste", "Fundo escuro e botões verdes: o call to action é sempre o ponto mais claro da tela."],
  ["Repetição", "Comentários /* 01 */, a mesma paleta e o mesmo estilo de card do painel semântico da LeapCode."],
  ["Tipografia", "Chakra Petch nos títulos (impacto) e no texto; mono só para rótulos. Entrelinha de ~1,6 no texto corrido."],
  ["Espaço negativo", "Margens largas e muito respiro entre os blocos: o vazio separa e destaca."],
  ["Movimento e transparência", "A transição do legado para o moderno, o pulo do sapo e as entradas suaves no scroll."],
  ["Quebra de regra intencional", "O modo legado é \"feio\" de propósito: é o sistema antigo que a marca promete modernizar."]
];
