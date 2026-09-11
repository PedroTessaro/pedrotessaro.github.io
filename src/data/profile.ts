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
  pt: "Trabalho com backend, principalmente em Go. O que me interessa é o que acontece entre a requisição chegar e a linha ser gravada: concorrência, persistência, cache.\n\nComecei por baixo e ainda volto lá. Escrevi um montador de duas passagens, um interpretador de pilha, um editor de texto a partir do modo raw do terminal.\n\nTenho quatro apps publicados na App Store. A parte difícil neles foi a sincronização — conflitos, fila offline, consistência entre dispositivos.\n\nEstudo Ciência da Computação. Também sou pianista e professor de piano, com prêmios em concursos internacionais.",
  en: "I work on backend, mostly in Go. What interests me is what happens between a request arriving and a row being written: concurrency, persistence, caching.\n\nI started from the bottom and still go back there. I've written a two-pass assembler, a stack interpreter, a text editor from the terminal's raw mode.\n\nI have four apps published on the App Store. The hard part in them was sync — conflicts, offline queue, consistency across devices.\n\nI study Computer Science. I'm also a pianist and piano teacher, with prizes in international competitions.",
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
