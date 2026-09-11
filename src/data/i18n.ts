import type { Locale } from "./types";

// =============================================================================
//  Interface strings.
//
//  Section titles stay in English on both locales: NAME, SYNOPSIS and SEE ALSO
//  are the names of man page sections, not sentences to translate.
// =============================================================================

export const locales: Locale[] = ["pt", "en"];
export const defaultLocale: Locale = "pt";

const dict = {
  pt: {
    "nav.skipToContent": "Pular para o conteúdo",
    "sec.name": "NAME",
    "sec.synopsis": "SYNOPSIS",
    "sec.description": "DESCRIPTION",
    "sec.projects": "PROJECTS",
    "sec.apps": "SHIPPED",
    "sec.status": "STATUS",
    "sec.seeAlso": "SEE ALSO",
    "sec.files": "FILES",
    "projects.note":
      "Linguagem, estrelas e último push vêm da API do GitHub, não deste arquivo.",
    "apps.note": "Publicados na App Store.",
    "status.note": "Do serviço que renderiza o terminal no meu perfil.",
    "status.repos": "repositórios",
    "status.stars": "estrelas",
    "status.commits": "commits no ano",
    "status.ci": "ci",
    "status.tests": "testes",
    "status.coverage": "cobertura",
    "status.p50": "latência p50",
    "status.p95": "latência p95",
    "status.region": "região",
    "status.version": "versão",
    "status.views": "views do readme",
    "status.lastCommit": "último commit",
    "status.unavailable": "indisponível",
    "status.link": "status completo",
    "files.resume": "currículo (pdf)",
    "theme.toggle": "tema",
    "lang.toggle": "english",
  },
  en: {
    "nav.skipToContent": "Skip to content",
    "sec.name": "NAME",
    "sec.synopsis": "SYNOPSIS",
    "sec.description": "DESCRIPTION",
    "sec.projects": "PROJECTS",
    "sec.apps": "SHIPPED",
    "sec.status": "STATUS",
    "sec.seeAlso": "SEE ALSO",
    "sec.files": "FILES",
    "projects.note":
      "Language, stars and last push come from the GitHub API, not from this file.",
    "apps.note": "Published on the App Store.",
    "status.note": "From the service that renders the terminal on my profile.",
    "status.repos": "repositories",
    "status.stars": "stars",
    "status.commits": "commits this year",
    "status.ci": "ci",
    "status.tests": "tests",
    "status.coverage": "coverage",
    "status.p50": "p50 latency",
    "status.p95": "p95 latency",
    "status.region": "region",
    "status.version": "version",
    "status.views": "readme views",
    "status.lastCommit": "last commit",
    "status.unavailable": "unavailable",
    "status.link": "full status",
    "files.resume": "resume (pdf)",
    "theme.toggle": "theme",
    "lang.toggle": "português",
  },
} as const;

export type UIKey = keyof (typeof dict)["pt"];

/** Retorna uma função de tradução para o locale informado. */
export function useTranslations(locale: Locale) {
  return function t(key: UIKey): string {
    return dict[locale][key] ?? dict[defaultLocale][key];
  };
}

/** Caminho da home no idioma alternativo (para o LanguageToggle). */
export function otherLocale(locale: Locale): Locale {
  return locale === "pt" ? "en" : "pt";
}
