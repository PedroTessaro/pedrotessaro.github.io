import type { IconName, Localized, SkillGroup, SocialLink } from "./types";

export const name = "Pedro Tessaro Augusto";

/** Usado no <title> da página de status. */
export const shortName = "Pedro Tessaro";

export const role: Localized = {
  pt: "Desenvolvedor iOS",
  en: "iOS Developer",
};

export const tagline: Localized = {
  pt: "Faço apps para o ecossistema Apple, contribuo com o compilador Swift e escrevo a Sword, uma linguagem de sistemas.",
  en: "I build apps for the Apple ecosystem, contribute to the Swift compiler and write Sword, a systems language.",
};

export const bio: Localized = {
  pt: "Sou desenvolvedor iOS na Apple Developer Academy, no Mackenzie, em São Paulo. Tenho apps publicados na App Store: NotADiary, um diário com fotos sincronizado por CloudKit; Karthos, com ranking global no CloudKit e partidas locais por MultipeerConnectivity; e DeckExtinction, um jogo narrativo construído sobre uma árvore de decisões com GameplayKit. O Mola, um editor de animação para iPad feito em equipe, está na fila do App Nominations da Apple, e o ÖRLÖG Companion roda a mesa de um RPG entre iPhone, iPad e Mac.\n\nGosto de entender o que acontece por baixo do Swift. Mandei correções para o compilador Swift e para o swift-async-algorithms, e escrevo a Sword, uma linguagem compilada que recusa programas com data race. Antes disso, escrevi um montador, um interpretador e um editor de texto de terminal.\n\nEstudo Ciência da Computação. Também sou pianista e professor de piano, com prêmios em concursos internacionais.",
  en: "I'm an iOS developer at the Apple Developer Academy, at Mackenzie, in São Paulo. I have apps on the App Store: NotADiary, a photo journal synced through CloudKit; Karthos, with a global ranking on CloudKit and local matches over MultipeerConnectivity; and DeckExtinction, a narrative game built on a GameplayKit decision tree. Mola, an iPad animation editor built with a team, is queued for Apple's App Nominations, and ÖRLÖG Companion runs the table of an RPG across iPhone, iPad and Mac.\n\nI like knowing what happens underneath Swift. I've sent fixes to the Swift compiler and to swift-async-algorithms, and I write Sword, a compiled language that refuses programs with data races. Before that I wrote an assembler, an interpreter and a terminal text editor.\n\nI study Computer Science. I'm also a pianist and piano teacher, with prizes in international competitions.",
};

/** A lista "Informações", como a da ficha de um app na App Store. */
export const info: { icon: IconName; tint: string; label: Localized; value: Localized }[] = [
  {
    icon: "apple",
    tint: "#1c1c1e",
    label: { pt: "Academia", en: "Academy" },
    value: { pt: "Apple Developer Academy", en: "Apple Developer Academy" },
  },
  {
    icon: "graduation",
    tint: "var(--indigo)",
    label: { pt: "Formação", en: "Education" },
    value: { pt: "Ciência da Computação, Mackenzie", en: "Computer Science, Mackenzie" },
  },
  {
    icon: "location",
    tint: "var(--green)",
    label: { pt: "Local", en: "Location" },
    value: { pt: "São Paulo · remoto", en: "São Paulo · remote" },
  },
  {
    icon: "globe",
    tint: "var(--tint)",
    label: { pt: "Idiomas", en: "Languages" },
    value: { pt: "Português, inglês fluente", en: "Portuguese, fluent English" },
  },
  {
    icon: "music",
    tint: "var(--orange)",
    label: { pt: "Também", en: "Also" },
    value: { pt: "Pianista premiado", en: "Award-winning pianist" },
  },
];

export const email = "ptssar22@gmail.com";

export const socials: SocialLink[] = [
  { label: "GitHub", url: "https://github.com/PedroTessaro", icon: "github" },
  { label: "LinkedIn", url: "https://linkedin.com/in/pedrotessaro", icon: "linkedin" },
  { label: "Email", url: `mailto:${email}`, icon: "email" },
];

export const resume = {
  pt: "/resume/curriculo.pdf",
  en: "/resume/resume.pdf",
};

export const skills: SkillGroup[] = [
  {
    area: "ios",
    title: { pt: "iOS & Apple", en: "iOS & Apple" },
    items: [
      "Swift",
      "SwiftUI",
      "UIKit",
      "Swift Concurrency",
      "CloudKit",
      "Core Data",
      "Metal",
      "MultipeerConnectivity",
      "SpriteKit",
      "GameplayKit",
      "tvOS",
      "Xcode",
    ],
  },
  {
    area: "systems",
    title: { pt: "Compiladores & Sistemas", en: "Compilers & Systems" },
    items: ["C++", "C", "LLVM", "SIL", "Assembly x86", "Concorrência", "Go"],
  },
];
