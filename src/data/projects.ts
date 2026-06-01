import type { Project } from "./types";

export const projects: Project[] = [
  // ---------- iOS / App ----------
  {
    id: "notadiary",
    area: "ios",
    title: "NotADiary",
    featured: true,
    tagline: {
      pt: "App de diário disponível na App Store, com sincronização robusta via CloudKit.",
      en: "Journaling app on the App Store, with robust CloudKit sync.",
    },
    description: {
      pt: "Aplicativo iOS publicado na App Store. Projetei um sistema complexo de sincronização e persistência usando CloudKit, lidando com conflitos, estados offline e consistência entre dispositivos.",
      en: "iOS app published on the App Store. I designed a complex sync and persistence system using CloudKit, handling conflicts, offline states, and cross-device consistency.",
    },
    tech: ["Swift", "SwiftUI", "CloudKit", "Core Data", "iOS"],
    links: [
      { label: "GitHub", url: "https://github.com/PedroTessaro/NotADiary" },
      { label: "App Store", url: "https://apps.apple.com/br/app/notadiary/id6753695305" },
    ],
    images: [
        "/projects/NAD1.jpg",
        "/projects/NAD2.jpg"
    ]
  },
  {
    id: "deckextinction",
    area: "ios",
    title: "DeckExtinction",
    featured: true,
    tagline: {
      pt: "Jogo de narrativa criado utilizando SwiftUI e GameplayKit",
      en: "Multiplayer game with real-time communication between iPhone and Apple TV.",
    },
    description: {
      pt: "Jogo de narrativa sobre dinossauros criado utilizando um sistema complexo de árvores de decisão, com o auxílio do GameplayKit.",
      en: "Narrative game about dinosaurs made with a complex tree system using Apple's GameplayKit.",
    },
    tech: ["Swift", "SwiftUI", "GameplayKit", "iOS"],
    links: [
      { label: "GitHub", url: "https://github.com/PedroTessaro/DeckExtinction" },
      { label: "AppStore", url: "https://apps.apple.com/br/app/deckextinction/id6747092006?l=en-GBDeckExtinction"} 
    ],
    images: [
      "/projects/Deck1.jpg",
      "/projects/Deck2.jpg",
      "/projects/Deck3.jpg",
      "/projects/Deck4.jpg",
    ],
  },
  {
    id: "spaceintetris",
    area: "ios",
    title: "Space In Tetris",
    featured: true,
    tagline: {
      pt: "Um recriação do famoso jogo Tetris criado em Swift para o terminal do Mac.",
      en: "A recreation of the famous Tetris game created in Swift for the Mac terminal.",
    },
    description: {
      pt: "Uma implementação funcional do jogo Tetris feito utilizando Swift e a biblioteca de baixo nível Darwin para ser rodada no terminal do Mac.",
      en: "A functional implementation of the Tetris game made using Swift and the low-level Darwin library to be run in the Mac terminal.",
    },
    tech: ["Swift", "Terminal", "macOS", "Darwin"],
    links: [
      { label: "GitHub", url: "https://github.com/SpaceInTetris/SpaceInTetris" },
    ],
    images: [
      "/projects/SIT1.jpg",
      "/projects/SIT2.jpg",
      "/projects/SIT3.jpg",
    ],
  },
  {
    id: "multipeer-game",
    area: "ios",
    title: "Narebatalha",
    featured: true,
    tagline: {
      pt: "Jogo multiplayer com comunicação em tempo real entre iPhone e Apple TV.",
      en: "Multiplayer game with real-time communication between iPhone and Apple TV.",
    },
    description: {
      pt: "Jogo para iOS e tvOS no qual construí um sistema de comunicação complexo entre dispositivos usando MultipeerConnectivity — descoberta de peers, sincronização de estado e troca de mensagens em tempo real.",
      en: "iOS and tvOS game where I built a complex device-to-device communication system using MultipeerConnectivity — peer discovery, state synchronization, and real-time messaging.",
    },
    tech: ["Swift", "UIKit", "MultipeerConnectivity", "tvOS"],
    links: [
     { label: "GitHub", url: "https://github.com/PedroTessaro/Narebatalha" },
    ],
    images: [
        "/projects/NARE1.jpg",
        "/projects/NARE2.jpg",
        "/projects/NARE3.jpg",
        "/projects/NARE4.jpg",
    ]
  },
  {
    id: "trigmage",
    area: "ios",
    title: "TrigMage",
    featured: true,
    tagline: {
      pt: "Jogo para aprendizado de matemática trigonométrica feito para o Swift Student Challenge em 1 semana",
      en: "Game for trigonometry learning made for Swift Student Challenge in 1 week",
    },
    description: {
      pt: "Jogo criado utilizando SpriteKit e SwiftUI para o Swift Student Challenge, pensado e criado em um pouco mais de uma semana. Utiliza sistema de animações e mudanças no comportamento padrão conforme o tempo passa",
      en: "This game, created using SpriteKit and SwiftUI for the Swift Student Challenge, was conceived and developed in just over a week. It utilizes a system of animations and changes in default behavior as time passes.",
    },
    tech: ["Swift", "SpriteKit", "SwiftUI", "iOS", "iPad"],
    links: [
      { label: "GitHub", url: "https://github.com/PedroTessaro/TrigMage" },
    ],
    images: [
      "/projects/TRIG1.jpg",
      "/projects/TRIG2.jpg",
      "/projects/TRIG3.jpg",
    ],
  },
  {
    id: "karthos",
    area: "ios",
    title: "Karthos",
    featured: true,
    tagline: {
      pt: "Aplicativo para melhora nas pistas de Kart, cronometrando tempo e possuindo sistema de ranking global.",
      en: "An app to improve your karting performance, featuring lap times and a global ranking system.",
    },
    description: {
      pt: "Um aplicativo criado utilizando SwiftUI e CloudKit que auxilia pilotos de Kart na melhora de performance nas pistas, com cronômetros, métricas, gamificação e ranking mundial de todos os corredores.",
      en: "An app created using SwiftUI and CloudKit that helps kart drivers improve their performance on the track, with timers, metrics, gamification, and a global ranking of all racers.",
    },
    tech: ["Swift", "SwiftUI", "CloudKit", "iOS"],
    links: [
      { label: "GitHub", url: "https://github.com/PedroTessaro/Karthos" },
      { label: "AppStore", url: "https://apps.apple.com/br/app/karthos/id6748964744"} 
    ],
    images: [
      "/projects/KART1.jpg",
      "/projects/KART2.jpg",
      "/projects/KART3.jpg",
    ],
  },

  // ---------- Low-level / Systems ----------
  {
    id: "memory-lib-c",
    area: "systems",
    title: "Biblioteca de Memória (C)",
    tagline: {
      pt: "Alocador e utilitários de gerenciamento de memória em C.",
      en: "Allocator and memory-management utilities in C.",
    },
    description: {
      pt: "Biblioteca em C para gerenciamento de memória, explorando alocação, liberação e estratégias de uso eficiente próximas ao sistema operacional.",
      en: "C library for memory management, exploring allocation, deallocation, and efficient usage strategies close to the operating system.",
    },
    tech: ["C", "Memory management"],
    links: [
      { label: "GitHub", url: "https://github.com/PedroTessaro" },
    ],
  },
  {
    id: "data-structures-c",
    area: "systems",
    title: "Estruturas de Dados (C)",
    tagline: {
      pt: "Biblioteca de estruturas de dados clássicas implementadas em C.",
      en: "Library of classic data structures implemented in C.",
    },
    description: {
      pt: "Implementação de estruturas de dados em C — listas, pilhas, filas, árvores e mais — com foco em clareza, eficiência e gerenciamento manual de memória.",
      en: "Data structures implemented in C — lists, stacks, queues, trees, and more — focused on clarity, efficiency, and manual memory management.",
    },
    tech: ["C", "Data structures", "Algorithms"],
    links: [
      { label: "GitHub", url: "https://github.com/PedroTessaro" },
    ],
  },
  {
    id: "assembly-in-java",
    area: "systems",
    title: "Assembly em Java",
    tagline: {
      pt: "Montador/emulador de Assembly escrito em Java.",
      en: "Assembly assembler/emulator written in Java.",
    },
    description: {
      pt: "Implementação de Assembly escrita em Java: parsing de instruções, modelo de execução e simulação do comportamento de uma máquina de baixo nível.",
      en: "An Assembly implementation written in Java: instruction parsing, an execution model, and simulation of low-level machine behavior.",
    },
    tech: ["Java", "Assembly", "Interpreters", "Assembler"],
    links: [
      { label: "GitHub", url: "https://github.com/PedroTessaro/AssemblerImplementation" },
    ],
  },
];
