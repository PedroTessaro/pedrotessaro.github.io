import type { Project } from "./types";

// =============================================================================
//  PROJETOS — edite/adicione seus projetos aqui.
//  `area`: "ios" (apps) ou "systems" (baixo nível).
//  Coloque imagens em public/projects/ e referencie em `image`.
//  Substitua as URLs marcadas com TODO pelos links reais.
// =============================================================================

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
    tech: ["Swift", "SwiftUI", "CloudKit", "Core Data"],
    links: [
      // TODO: confirme/atualize as URLs.
      { label: "App Store", url: "https://apps.apple.com/app/notadiary" },
      { label: "GitHub", url: "https://github.com/SEU_USUARIO/NotADiary" },
    ],
    // image: "/projects/notadiary.png",
  },
  {
    id: "multipeer-game",
    area: "ios",
    title: "Jogo iOS / tvOS",
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
      // TODO: adicione o link do repositório, se houver.
      { label: "GitHub", url: "https://github.com/SEU_USUARIO/SEU_JOGO" },
    ],
    // image: "/projects/game.png",
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
      { label: "GitHub", url: "https://github.com/SEU_USUARIO/memory-lib" },
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
      { label: "GitHub", url: "https://github.com/SEU_USUARIO/data-structures" },
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
    tech: ["Java", "Assembly", "Interpreters"],
    links: [
      { label: "GitHub", url: "https://github.com/SEU_USUARIO/assembly-java" },
    ],
  },
];
