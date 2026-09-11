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
      pt: "Serviço em Go que renderiza o terminal animado no topo do meu perfil do GitHub, montando um SVG a cada requisição. Anima com SMIL porque o GitHub serve a imagem dentro de uma <img>, onde nada executa. Números do GitHub em cache de duas camadas, contador e janela de latência em Redis por HTTP, e uma CI que publica os próprios resultados de volta no serviço.",
      en: "Go service that renders the animated terminal at the top of my GitHub profile, building an SVG per request. It animates with SMIL because GitHub serves the image inside an <img>, where nothing executes. Two-layer cache for the GitHub numbers, counter and latency window in Redis over HTTP, and a CI that publishes its own results back to the service.",
    },
    tech: ["Go", "SVG/SMIL", "Redis", "Vercel", "GitHub Actions"],
    links: [
      {
        label: "GitHub",
        url: "https://github.com/PedroTessaro/TerminalREADME",
      },
      { label: "terminal.svg", url: "https://pedrotessaro.vercel.app/terminal.svg" },
      { label: "/whoami", url: "https://pedrotessaro.vercel.app/whoami" },
    ],
  },
  {
    id: "rss-aggregator",
    area: "backend",
    repo: "RSSAggregator",
    title: "RSSAggregator",
    description: {
      pt: "Agregador de feeds RSS em Go: busca concorrente com pool de workers, persistência em Postgres e uma API REST por cima. Foi onde aprendi a tratar feed lento e feed quebrado como o caso normal, não como exceção.",
      en: "RSS feed aggregator in Go: concurrent fetching with a worker pool, Postgres persistence and a REST API on top. Where I learned to treat a slow feed and a broken feed as the normal case rather than the exception.",
    },
    tech: ["Go", "PostgreSQL", "REST", "Concorrência"],
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
      pt: "Montador de duas passagens em Java. A primeira passagem constrói a tabela de símbolos e resolve rótulos para frente; a segunda gera o código objeto com a realocação aplicada. É o projeto que me fez entender o que um linker faz depois.",
      en: "Two-pass assembler in Java. The first pass builds the symbol table and resolves forward labels; the second emits object code with relocation applied. The project that made me understand what a linker does afterwards.",
    },
    tech: ["Java", "Assembly", "Tabela de símbolos", "Realocação"],
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
      pt: "Interpretador de expressões em notação polonesa reversa, baseado em pilha. Pequeno o bastante para caber na cabeça inteiro, o que o torna um bom lugar para entender como uma linguagem avalia o que lê.",
      en: "Stack-based interpreter for reverse Polish notation expressions. Small enough to hold in your head all at once, which makes it a good place to understand how a language evaluates what it reads.",
    },
    tech: ["Java", "Pilha", "Parsing"],
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
      pt: "Primitivas de concorrência em C: threads, sincronização e memória compartilhada, escritas à mão para ver as condições de corrida acontecerem em vez de ler sobre elas.",
      en: "Concurrency primitives in C: threads, synchronisation and shared memory, written by hand to watch race conditions happen rather than read about them.",
    },
    tech: ["C", "pthreads", "Sincronização"],
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
      pt: "Editor de texto de terminal em C++, a partir do modo raw: sequências de escape, controle de cursor e renderização própria. Sem biblioteca de interface nenhuma.",
      en: "Terminal text editor in C++, starting from raw mode: escape sequences, cursor control and its own rendering. No interface library at all.",
    },
    tech: ["C++", "Modo raw", "Escape sequences"],
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
      pt: "Estruturas de dados e algoritmos implementados do zero em C, com atenção ao que cada um custa em memória e não só em tempo.",
      en: "Data structures and algorithms implemented from scratch in C, with attention to what each one costs in memory and not only in time.",
    },
    tech: ["C", "Estruturas de dados"],
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
      pt: "Diário com imagens, publicado na App Store. O problema real não era a tela: era sincronizar via CloudKit com resolução de conflitos, estado offline e consistência entre dispositivos. Na prática, um sistema distribuído pequeno com um cliente bonito na frente.",
      en: "Journal with images, published on the App Store. The real problem wasn't the screen: it was syncing through CloudKit with conflict resolution, offline state and cross-device consistency. In practice, a small distributed system with a nice client in front of it.",
    },
    tech: ["Swift", "CloudKit", "Core Data", "Sincronização"],
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
      pt: "Publicado na App Store. Ranking compartilhado via CloudKit e comunicação direta entre aparelhos com MultipeerConnectivity — ou seja, consenso sobre placar entre dispositivos que nem sempre se enxergam.",
      en: "Published on the App Store. Shared ranking through CloudKit and direct device-to-device communication with MultipeerConnectivity — which amounts to agreeing on a scoreboard between devices that can't always see each other.",
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
      pt: "Publicado na App Store. Jogo narrativo construído sobre uma árvore de decisões com estado, onde a dificuldade estava em manter a consistência do que já foi escolhido ao longo da partida.",
      en: "Published on the App Store. Narrative game built on a stateful decision tree, where the difficulty was keeping what had already been chosen consistent across a whole run.",
    },
    tech: ["Swift", "GameplayKit", "Máquina de estados"],
    links: [
      {
        label: "GitHub",
        url: "https://github.com/PedroTessaro/DeckExtinction",
      },
      {
        label: "App Store",
        url: "https://apps.apple.com/br/app/deckextinction/id6747092006",
      },
    ],
    images: ["/projects/Deck1.jpg", "/projects/Deck2.jpg"],
  },
];
