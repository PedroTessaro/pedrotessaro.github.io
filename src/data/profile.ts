import type { Localized, SkillGroup, SocialLink } from "./types";

export const name = "Pedro Tessaro Augusto";

export const role: Localized = {
  pt: "Desenvolvedor iOS & Sistemas de Baixo Nível",
  en: "iOS & Low-level Systems Developer",
};

export const tagline: Localized = {
  pt: "Desenvolvedor de aplicativos Apple, sistemas de baixo nível e pianista premiado internacionalmente.",
  en: "Apple & systems developer. Award-winning pianist.",
};

export const bio: Localized = {
  pt: "Pedro Tessaro Augusto é desenvolvedor de software e pianista premiado internacionalmente. Trabalha com aplicativos para o ecossistema Apple e com sistemas de baixo nível, como sistemas operacionais e compiladores. Atualmente desenvolve a Sword, uma linguagem de programação compilada escrita em C e assembly x86.\n\nPublicou na App Store aplicativos para diversas plataformas da Apple: Karthus, com um sistema de ranking interligado via CloudKit e comunicação por MultipeerConnectivity; NotADiary, um banco de imagens e relatos; e Dextinction, construído sobre uma árvore de decisões complexas. Também desenvolveu o Starlen, com interface inteiramente em UIKit, entre outros projetos. Em paralelo à computação, atua como professor de piano e pianista, com prêmios em concursos internacionais.",
  en: "Pedro Tessaro Augusto is a software developer and internationally award-winning pianist. He works on applications for the Apple ecosystem and on low-level systems, such as operating systems and compilers. He is currently developing Sword, a compiled programming language written in C and x86 assembly.\n\nHe has published apps on the App Store across several Apple platforms: Karthus, featuring an interconnected ranking system via CloudKit and peer communication through MultipeerConnectivity; NotADiary, an image and journal-entry repository; and Dextinction, built on a complex decision tree. He also developed Starlen, with an interface written entirely in UIKit, among other projects. Alongside his work in computing, he teaches piano and performs, having won prizes in international competitions.",
};

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
    items: ["Swift", "SwiftUI", "UIKit", "CloudKit", "MultipeerConnectivity","HealthKit", "SpriteKit", "tvOS", "Combine", "Xcode"],
  },
  {
    area: "systems",
    title: { pt: "Baixo nível & Sistemas", en: "Low-level & Systems" },
    items: ["C", "Rust", "Assembly", "Memory management", "Data structures", "Concurrency", "Java"],
  },
];
