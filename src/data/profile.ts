import type { Localized, SkillGroup, SocialLink } from "./types";

export const name = "Pedro Tessaro Augusto";

/** Usado no <title> e no cabeçalho da man page. */
export const shortName = "Pedro Tessaro";

export const role: Localized = {
  pt: "Engenheiro de Backend",
  en: "Backend Engineer",
};

/** A linha SYNOPSIS. Ordem importa: é o que é lido primeiro. */
export const stack = [
  "go",
  "java",
  "c/c++",
  "postgresql",
  "docker",
  "redis",
];

export const availability: Localized = {
  pt: "aberto a vagas de backend · remoto ou São Paulo · pt/en",
  en: "open to backend roles · remote or São Paulo · en/pt",
};

export const bio: Localized = {
  pt: "Construo serviços e as camadas debaixo deles. Hoje trabalho principalmente com Go, e o que me interessa é o que acontece entre a requisição chegar e a linha ser gravada: concorrência, persistência, cache, o custo real de cada ida à rede.\n\nEsse gosto vem de baixo. Escrevi um assembler de duas passagens, um interpretador de pilha, um editor de texto a partir do modo raw do terminal e exercícios de concorrência em C. São projetos pequenos, mas nenhum deles deixa esconder o que está acontecendo por baixo.\n\nTambém publiquei quatro aplicativos na App Store. O trabalho difícil neles não foi a interface: foi sincronização com resolução de conflitos, estado offline e consistência entre dispositivos.\n\nEstudante de Ciência da Computação e professor de piano, com prêmios em concursos internacionais.",
  en: "I build services and the layers underneath them. Mostly Go these days, and what interests me is what happens between a request arriving and a row being written: concurrency, persistence, caching, the real cost of every trip to the network.\n\nThat interest came from underneath. I've written a two-pass assembler, a stack-based interpreter, a text editor starting from the terminal's raw mode, and concurrency exercises in C. Small projects, but none of them let you hide from what's actually going on.\n\nI've also shipped four apps on the App Store. The hard part in those wasn't the interface: it was sync with conflict resolution, offline state, and consistency across devices.\n\nComputer Science student and piano teacher, with prizes in international competitions.",
};

export const email = "ptssar22@gmail.com";

export const socials: SocialLink[] = [
  { label: "github(1)", url: "https://github.com/PedroTessaro" },
  { label: "linkedin(1)", url: "https://linkedin.com/in/pedrotessaro" },
  { label: "email(1)", url: `mailto:${email}` },
];

export const resume = {
  pt: "/resume/curriculo.pdf",
  en: "/resume/resume.pdf",
};

export const skills: SkillGroup[] = [
  {
    area: "backend",
    title: { pt: "Backend", en: "Backend" },
    items: [
      "Go",
      "Java",
      "HTTP APIs",
      "PostgreSQL",
      "Redis",
      "Docker",
      "CI/CD",
      "Prometheus",
    ],
  },
  {
    area: "systems",
    title: { pt: "Baixo nível", en: "Low-level" },
    items: [
      "C",
      "C++",
      "Assembly x86",
      "Concorrência",
      "Gerência de memória",
      "Estruturas de dados",
      "Compiladores",
    ],
  },
];
