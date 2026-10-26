import type { Project } from "./types";
import * as snippets from "./snippets";

/**
 * A vitrine. Só o que está aqui aparece na página, na ordem em que está.
 *
 * Apps (`area: "ios"`) são agrupados pelo `status`: na App Store, a caminho
 * dela, e feitos para estudar. O resto vai para "Outros projetos".
 *
 * `repo` é a chave que liga cada entrada aos dados ao vivo do GitHub. Se um
 * nome deixar de resolver, a entrada continua aparecendo, só sem os números.
 */
export const projects: Project[] = [
  // ---------- na App Store ----------
  {
    id: "notadiary",
    area: "ios",
    status: "appstore",
    repo: "NotADiary",
    title: "NotADiary",
    icon: "/icons/notadiary.jpg",
    platforms: ["iPhone"],
    category: { pt: "Utilidades", en: "Utilities" },
    tagline: {
      pt: "Diário com fotos, sincronizado por CloudKit",
      en: "Photo journal, synced through CloudKit",
    },
    description: {
      pt: "A parte difícil foi a sincronização: resolução de conflitos, fila de operações offline e reconciliação entre dispositivos, com Core Data por baixo.",
      en: "The hard part was sync: conflict resolution, an offline operation queue and reconciliation across devices, with Core Data underneath.",
    },
    tech: ["SwiftUI", "CloudKit", "Core Data"],
    links: [
      { label: "App Store", url: "https://apps.apple.com/br/app/notadiary/id6753695305" },
      { label: "GitHub", url: "https://github.com/PedroTessaro/NotADiary" },
    ],
    images: ["/projects/NAD1.jpg", "/projects/NAD2.jpg"],
  },
  {
    id: "karthos",
    area: "ios",
    status: "appstore",
    repo: "Karthos",
    title: "Karthos",
    icon: "/icons/karthos.jpg",
    platforms: ["iPhone"],
    category: { pt: "Esportes", en: "Sports" },
    tagline: {
      pt: "Cronômetro e ranking global para pilotos de kart",
      en: "Lap timer and global ranking for kart drivers",
    },
    description: {
      pt: "Tempos de volta, métricas e gamificação. O ranking é compartilhado pelo CloudKit, e as partidas locais rodam por MultipeerConnectivity, sem servidor no meio.",
      en: "Lap times, metrics and gamification. The ranking is shared through CloudKit, and local matches run over MultipeerConnectivity, with no server in between.",
    },
    tech: ["SwiftUI", "CloudKit", "MultipeerConnectivity"],
    links: [
      { label: "App Store", url: "https://apps.apple.com/br/app/karthos/id6748964744" },
      { label: "GitHub", url: "https://github.com/PedroTessaro/Karthos" },
    ],
    images: ["/projects/KART1.jpg", "/projects/KART2.jpg", "/projects/KART3.jpg"],
  },
  {
    id: "deckextinction",
    area: "ios",
    status: "appstore",
    repo: "DeckExtinction",
    title: "DeckExtinction",
    icon: "/icons/deckextinction.jpg",
    platforms: ["iPhone"],
    category: { pt: "Jogos", en: "Games" },
    tagline: {
      pt: "Jogo narrativo sobre dinossauros",
      en: "Narrative game about dinosaurs",
    },
    description: {
      pt: "A história anda sobre uma árvore de decisões com estado, construída com GameplayKit.",
      en: "The story runs on a stateful decision tree, built with GameplayKit.",
    },
    tech: ["SwiftUI", "GameplayKit"],
    links: [
      { label: "App Store", url: "https://apps.apple.com/br/app/deckextinction/id6747092006" },
      { label: "GitHub", url: "https://github.com/PedroTessaro/DeckExtinction" },
    ],
    images: ["/projects/Deck1.jpg", "/projects/Deck2.jpg", "/projects/Deck3.jpg", "/projects/Deck4.jpg"],
  },

  // ---------- a caminho ----------
  {
    id: "mola",
    area: "ios",
    status: "upcoming",
    title: "Mola",
    icon: "/icons/mola.jpg",
    platforms: ["iPad"],
    category: { pt: "Gráficos e design", en: "Graphics & Design" },
    team: { pt: "Equipe de 5", en: "Team of 5" },
    badge: {
      pt: "Na fila do App Nominations",
      en: "Queued for App Nominations",
    },
    tagline: {
      pt: "Animação quadro a quadro, tocada ao vivo",
      en: "Frame-by-frame animation, played live",
    },
    description: {
      pt: "Cada ciclo é desenhado à mão com o Apple Pencil. Na cena, uma parte dos ciclos segue a timeline e a outra é disparada na hora por botões e joysticks na tela. O canvas tem um renderizador próprio em Metal, e o app sai em 13 idiomas. Está na fila do App Nominations da Apple, por isso ainda não chegou à loja.",
      en: "Each cycle is drawn by hand with the Apple Pencil. In the scene, some cycles follow the timeline and others are triggered on the spot by on-screen buttons and joysticks. The canvas has its own Metal renderer, and the app ships in 13 languages. It's queued for Apple's App Nominations, so it isn't on the store yet.",
    },
    tech: ["Swift", "Metal", "UIKit", "Apple Pencil"],
    links: [],
    snippet: snippets.mola,
  },
  {
    id: "orlog",
    area: "ios",
    status: "upcoming",
    title: "ÖRLÖG Companion",
    icon: "/icons/orlog.jpg",
    platforms: ["iPhone", "iPad", "Mac"],
    category: { pt: "Jogos de RPG", en: "Role-Playing" },
    tagline: {
      pt: "A mesa de um RPG nórdico, no iPhone, iPad e Mac",
      en: "The table of a Norse RPG, on iPhone, iPad and Mac",
    },
    description: {
      pt: "O Mac do mestre abre a sessão por Bonjour e os jogadores entram pelo iPhone ou iPad na mesma rede. Quem está longe entra pelo banco público do CloudKit com um código de seis letras, sem servidor próprio, e as duas mesas convivem na mesma sessão. O mapa tem água e neve animadas com shaders Metal, névoa de guerra e clima por cena.",
      en: "The game master's Mac opens the session over Bonjour and players join from iPhone or iPad on the same network. Remote players join through CloudKit's public database with a six-letter code, with no server of my own, and both tables share one session. The map has water and snow animated with Metal shaders, fog of war and per-scene weather.",
    },
    tech: ["SwiftUI", "Network.framework", "CloudKit", "Metal", "WidgetKit"],
    links: [],
    snippet: snippets.orlog,
  },
  {
    id: "grafito",
    area: "ios",
    status: "upcoming",
    title: "Grafito",
    icon: "/icons/grafito.jpg",
    platforms: ["iPhone"],
    category: { pt: "Negócios", en: "Business" },
    team: { pt: "Equipe de 5", en: "Team of 5" },
    tagline: {
      pt: "Planilhas simples que viram gráficos na hora",
      en: "Simple spreadsheets that turn into charts on the spot",
    },
    description: {
      pt: "Para quem tem um pequeno negócio e não quer aprender planilha: digita os números e o gráfico aparece, com anotações nos pontos e exportação para PDF e CSV. Offline, sem conta, com SwiftData e Swift Charts no iOS 26.",
      en: "For small business owners who don't want to learn spreadsheets: type the numbers and the chart appears, with notes on data points and export to PDF and CSV. Offline, no account, with SwiftData and Swift Charts on iOS 26.",
    },
    tech: ["SwiftUI", "Swift Charts", "SwiftData", "WidgetKit"],
    links: [],
    images: ["/projects/GRAF1.jpg", "/projects/GRAF2.jpg", "/projects/GRAF3.jpg", "/projects/GRAF4.jpg"],
  },

  // ---------- feitos para estudar ----------
  {
    id: "narebatalha",
    area: "ios",
    status: "built",
    title: "Narebatalha",
    icon: "/icons/narebatalha.jpg",
    platforms: ["iPhone", "Apple TV"],
    category: { pt: "Jogos", en: "Games" },
    tagline: {
      pt: "Party game entre iPhone e Apple TV",
      en: "Party game between iPhone and Apple TV",
    },
    description: {
      pt: "Até quatro jogadores: os iPhones viram controles e minigames, e a Apple TV é a arena. Descoberta de peers, sincronização de estado e troca de mensagens por MultipeerConnectivity, com a rede isolada num actor.",
      en: "Up to four players: the iPhones become controllers and minigames, and the Apple TV is the arena. Peer discovery, state sync and messaging over MultipeerConnectivity, with the network isolated in an actor.",
    },
    tech: ["SpriteKit", "SwiftUI", "MultipeerConnectivity", "tvOS"],
    links: [],
    images: ["/projects/NARE1.jpg", "/projects/NARE2.jpg", "/projects/NARE3.jpg", "/projects/NARE4.jpg"],
    snippet: snippets.narebatalha,
  },
  {
    id: "project-shortcuts",
    area: "ios",
    status: "built",
    title: "ProjectShortcuts",
    tint: "#5856d6",
    platforms: ["Mac"],
    category: { pt: "Produtividade", en: "Productivity" },
    tagline: {
      pt: "Desenhe uma forma, dispare um atalho",
      en: "Draw a shape, fire a shortcut",
    },
    description: {
      pt: "App de barra de menus para macOS, sem ícone no Dock. Segure Control e desenhe com o mouse: um círculo vira ⌘C, um triângulo vira ⌘V. As formas são reconhecidas por um $P escrito do zero.",
      en: "A menu bar app for macOS, with no Dock icon. Hold Control and draw with the mouse: a circle becomes ⌘C, a triangle ⌘V. Shapes are recognized by a $P recognizer written from scratch.",
    },
    tech: ["AppKit", "CGEvent tap", "NSStatusItem"],
    links: [],
    snippet: snippets.shortcuts,
  },
  {
    id: "trigmage",
    area: "ios",
    status: "built",
    repo: "TrigMage",
    title: "TrigMage",
    tint: "#af52de",
    platforms: ["iPad"],
    category: { pt: "Educação", en: "Education" },
    tagline: {
      pt: "Trigonometria em jogo, para o Swift Student Challenge",
      en: "Trigonometry as a game, for the Swift Student Challenge",
    },
    description: {
      pt: "Pensado e construído em pouco mais de uma semana, com SpriteKit e SwiftUI. As animações e o comportamento do jogo mudam conforme o tempo passa.",
      en: "Conceived and built in just over a week, with SpriteKit and SwiftUI. The animations and the game's behavior change as time passes.",
    },
    tech: ["SpriteKit", "SwiftUI", "Swift Playgrounds"],
    links: [{ label: "GitHub", url: "https://github.com/PedroTessaro/TrigMage" }],
    images: ["/projects/TRIG1.jpg", "/projects/TRIG2.jpg", "/projects/TRIG3.jpg"],
  },
  {
    id: "spaceintetris",
    area: "ios",
    status: "built",
    title: "Space In Tetris",
    tint: "#1c1c1e",
    platforms: ["Mac"],
    category: { pt: "Jogos", en: "Games" },
    tagline: {
      pt: "Tetris em Swift, no terminal do Mac",
      en: "Tetris in Swift, in the Mac terminal",
    },
    description: {
      pt: "Sem framework de interface: entrada tecla a tecla e desenho direto no terminal, usando a biblioteca Darwin.",
      en: "No UI framework: key-by-key input and drawing straight in the terminal, using the Darwin library.",
    },
    tech: ["Swift", "Darwin"],
    links: [{ label: "GitHub", url: "https://github.com/SpaceInTetris/SpaceInTetris" }],
    images: ["/projects/SIT1.jpg", "/projects/SIT2.jpg", "/projects/SIT3.jpg"],
    snippet: snippets.tetris,
  },
  {
    id: "starlen",
    area: "ios",
    status: "built",
    title: "Starlen",
    tint: "#ff9500",
    platforms: ["iPhone"],
    tagline: {
      pt: "Interface inteira em UIKit",
      en: "Interface entirely in UIKit",
    },
    description: {
      pt: "App com a interface construída inteiramente em UIKit, sem SwiftUI.",
      en: "An app with its interface built entirely in UIKit, with no SwiftUI.",
    },
    tech: ["UIKit"],
    links: [],
  },

  // ---------- backend ----------
  {
    id: "terminal-readme",
    area: "backend",
    repo: "TerminalREADME",
    title: "TerminalREADME",
    tagline: {
      pt: "Serviço em Go que desenha o terminal do meu perfil do GitHub",
      en: "Go service that draws the terminal on my GitHub profile",
    },
    description: {
      pt: "Um SVG montado a cada requisição, animado em SMIL porque o GitHub o serve dentro de uma <img>. Cache em duas camadas e contadores em Redis. É ele que alimenta a seção Ao vivo.",
      en: "An SVG built per request, animated in SMIL because GitHub serves it inside an <img>. Two-layer cache and counters in Redis. It also feeds the Live section.",
    },
    tech: ["Go", "Redis", "SVG"],
    links: [{ label: "GitHub", url: "https://github.com/PedroTessaro/TerminalREADME" }],
  },
  {
    id: "rss-aggregator",
    area: "backend",
    repo: "RSSAggregator",
    title: "RSSAggregator",
    tagline: {
      pt: "Agregador de feeds RSS em Go",
      en: "RSS feed aggregator in Go",
    },
    description: {
      pt: "Pool de workers para buscar os feeds em paralelo, Postgres para persistir e uma API REST por cima.",
      en: "Worker pool to fetch feeds in parallel, Postgres for persistence, REST API on top.",
    },
    tech: ["Go", "PostgreSQL"],
    links: [{ label: "GitHub", url: "https://github.com/PedroTessaro/RSSAggregator" }],
  },

  // ---------- baixo nível ----------
  {
    id: "assembler",
    area: "systems",
    repo: "AssemblerImplementation",
    title: "AssemblerImplementation",
    tagline: {
      pt: "Montador de duas passagens em Java",
      en: "Two-pass assembler in Java",
    },
    description: {
      pt: "A primeira passagem monta a tabela de símbolos e resolve rótulos para frente; a segunda emite o código objeto com realocação.",
      en: "The first pass builds the symbol table and resolves forward labels; the second emits object code with relocation.",
    },
    tech: ["Java"],
    links: [{ label: "GitHub", url: "https://github.com/PedroTessaro/AssemblerImplementation" }],
  },
  {
    id: "text-editor",
    area: "systems",
    repo: "TextEditor",
    title: "TextEditor",
    tagline: {
      pt: "Editor de texto de terminal em C++",
      en: "Terminal text editor in C++",
    },
    description: {
      pt: "Modo raw, sequências de escape e renderização própria, sem ncurses.",
      en: "Raw mode, escape sequences and its own rendering, no ncurses.",
    },
    tech: ["C++"],
    links: [{ label: "GitHub", url: "https://github.com/PedroTessaro/TextEditor" }],
  },
  {
    id: "rpn-interpreter",
    area: "systems",
    repo: "ReversePolishNotationInterpreter",
    title: "ReversePolishNotationInterpreter",
    tagline: {
      pt: "Interpretador de notação polonesa reversa",
      en: "Reverse Polish notation interpreter",
    },
    description: {
      pt: "Interpretador de expressões baseado em pilha.",
      en: "Stack-based expression interpreter.",
    },
    tech: ["Java"],
    links: [{ label: "GitHub", url: "https://github.com/PedroTessaro/ReversePolishNotationInterpreter" }],
  },
  {
    id: "parallel-c",
    area: "systems",
    repo: "parallel_programming_studies",
    title: "parallel_programming_studies",
    tagline: {
      pt: "Exercícios de concorrência em C",
      en: "Concurrency exercises in C",
    },
    description: {
      pt: "Threads, mutexes, variáveis de condição e memória compartilhada.",
      en: "Threads, mutexes, condition variables and shared memory.",
    },
    tech: ["C"],
    links: [{ label: "GitHub", url: "https://github.com/PedroTessaro/parallel_programming_studies" }],
  },
  {
    id: "algorithms",
    area: "systems",
    repo: "Algorithms-and-Data-Structures",
    title: "Algorithms-and-Data-Structures",
    tagline: {
      pt: "Estruturas de dados e algoritmos em C",
      en: "Data structures and algorithms in C",
    },
    description: {
      pt: "Implementados do zero, com gerência manual de memória.",
      en: "Implemented from scratch, with manual memory management.",
    },
    tech: ["C"],
    links: [{ label: "GitHub", url: "https://github.com/PedroTessaro/Algorithms-and-Data-Structures" }],
  },
];
