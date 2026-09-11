import type { Project } from "./types";

/**
 * A vitrine. Só o que está aqui aparece na página.
 *
 * `repo` é a chave que liga cada entrada aos dados ao vivo: linguagem,
 * estrelas e último push vêm da API do GitHub, nunca daqui. Se um nome deixar
 * de resolver, a entrada continua aparecendo, só sem os números.
 */
export const projects: Project[] = [
  // ---------- backend ----------
  {
    id: "terminal-readme",
    area: "backend",
    repo: "TerminalREADME",
    title: "TerminalREADME",
    description: {
      pt: "Serviço em Go que gera o SVG do terminal no topo do meu perfil do GitHub, montado a cada requisição. A animação é SMIL porque o GitHub serve a imagem dentro de uma <img>. Os números do GitHub ficam em cache em duas camadas; o contador de views e a janela de latência ficam em Redis por HTTP. A CI publica testes e cobertura de volta no serviço.",
      en: "Go service that generates the terminal SVG at the top of my GitHub profile, built per request. The animation is SMIL because GitHub serves the image inside an <img>. GitHub's numbers sit in a two-layer cache; the view counter and the latency window live in Redis over HTTP. CI publishes tests and coverage back to the service.",
    },
    tech: ["Go", "SVG/SMIL", "Redis", "Vercel", "GitHub Actions"],
    links: [
      { label: "GitHub", url: "https://github.com/PedroTessaro/TerminalREADME" },
      {
        label: "terminal.svg",
        url: "https://pedrotessaro.vercel.app/terminal.svg",
      },
      { label: "/whoami", url: "https://pedrotessaro.vercel.app/whoami" },
    ],
  },
  {
    id: "rss-aggregator",
    area: "backend",
    repo: "RSSAggregator",
    title: "RSSAggregator",
    description: {
      pt: "Agregador de feeds RSS em Go. Pool de workers para buscar os feeds em paralelo, Postgres para persistir e uma API REST por cima.",
      en: "RSS feed aggregator in Go. Worker pool to fetch feeds in parallel, Postgres for persistence, REST API on top.",
    },
    tech: ["Go", "PostgreSQL", "REST"],
    links: [
      { label: "GitHub", url: "https://github.com/PedroTessaro/RSSAggregator" },
    ],
  },

  // ---------- baixo nível ----------
  {
    id: "assembler",
    area: "systems",
    repo: "AssemblerImplementation",
    title: "AssemblerImplementation",
    description: {
      pt: "Montador de duas passagens em Java. A primeira passagem monta a tabela de símbolos e resolve rótulos para frente; a segunda emite o código objeto com realocação.",
      en: "Two-pass assembler in Java. First pass builds the symbol table and resolves forward labels; second pass emits object code with relocation.",
    },
    tech: ["Java", "Assembly"],
    links: [
      {
        label: "GitHub",
        url: "https://github.com/PedroTessaro/AssemblerImplementation",
      },
    ],
  },
  {
    id: "rpn-interpreter",
    area: "systems",
    repo: "ReversePolishNotationInterpreter",
    title: "ReversePolishNotationInterpreter",
    description: {
      pt: "Interpretador de expressões em notação polonesa reversa, baseado em pilha.",
      en: "Stack-based interpreter for reverse Polish notation expressions.",
    },
    tech: ["Java"],
    links: [
      {
        label: "GitHub",
        url: "https://github.com/PedroTessaro/ReversePolishNotationInterpreter",
      },
    ],
  },
  {
    id: "parallel-c",
    area: "systems",
    repo: "parallel_programming_studies",
    title: "parallel_programming_studies",
    description: {
      pt: "Exercícios de concorrência em C: threads, mutexes, variáveis de condição e memória compartilhada.",
      en: "Concurrency exercises in C: threads, mutexes, condition variables and shared memory.",
    },
    tech: ["C", "pthreads"],
    links: [
      {
        label: "GitHub",
        url: "https://github.com/PedroTessaro/parallel_programming_studies",
      },
    ],
  },
  {
    id: "text-editor",
    area: "systems",
    repo: "TextEditor",
    title: "TextEditor",
    description: {
      pt: "Editor de texto de terminal em C++. Modo raw, sequências de escape e renderização própria, sem ncurses.",
      en: "Terminal text editor in C++. Raw mode, escape sequences and its own rendering, no ncurses.",
    },
    tech: ["C++"],
    links: [
      { label: "GitHub", url: "https://github.com/PedroTessaro/TextEditor" },
    ],
  },
  {
    id: "algorithms",
    area: "systems",
    repo: "Algorithms-and-Data-Structures",
    title: "Algorithms-and-Data-Structures",
    description: {
      pt: "Estruturas de dados e algoritmos em C, implementados do zero.",
      en: "Data structures and algorithms in C, implemented from scratch.",
    },
    tech: ["C"],
    links: [
      {
        label: "GitHub",
        url: "https://github.com/PedroTessaro/Algorithms-and-Data-Structures",
      },
    ],
  },

  // ---------- publicados na App Store ----------
  {
    id: "notadiary",
    area: "ios",
    repo: "NotADiary",
    title: "NotADiary",
    description: {
      pt: "Diário com fotos. Sincroniza por CloudKit: resolução de conflitos, fila de operações offline e reconciliação entre dispositivos.",
      en: "Journal with photos. Syncs through CloudKit: conflict resolution, offline operation queue and reconciliation across devices.",
    },
    tech: ["Swift", "CloudKit", "Core Data"],
    links: [
      { label: "GitHub", url: "https://github.com/PedroTessaro/NotADiary" },
      {
        label: "App Store",
        url: "https://apps.apple.com/br/app/notadiary/id6753695305",
      },
    ],
    images: ["/projects/NAD1.jpg", "/projects/NAD2.jpg"],
  },
  {
    id: "karthos",
    area: "ios",
    repo: "Karthos",
    title: "Karthos",
    description: {
      pt: "Ranking compartilhado no CloudKit e partidas locais por MultipeerConnectivity, sem servidor no meio.",
      en: "Shared ranking on CloudKit and local matches over MultipeerConnectivity, with no server in between.",
    },
    tech: ["Swift", "CloudKit", "MultipeerConnectivity"],
    links: [
      { label: "GitHub", url: "https://github.com/PedroTessaro/Karthos" },
      {
        label: "App Store",
        url: "https://apps.apple.com/br/app/karthos/id6748964744",
      },
    ],
    images: ["/projects/KART1.jpg", "/projects/KART2.jpg"],
  },
  {
    id: "deckextinction",
    area: "ios",
    repo: "DeckExtinction",
    title: "DeckExtinction",
    description: {
      pt: "Jogo narrativo sobre uma árvore de decisões com estado, construída com GameplayKit.",
      en: "Narrative game over a stateful decision tree, built with GameplayKit.",
    },
    tech: ["Swift", "GameplayKit"],
    links: [
      { label: "GitHub", url: "https://github.com/PedroTessaro/DeckExtinction" },
      {
        label: "App Store",
        url: "https://apps.apple.com/br/app/deckextinction/id6747092006",
      },
    ],
    images: ["/projects/Deck1.jpg", "/projects/Deck2.jpg"],
  },
];
