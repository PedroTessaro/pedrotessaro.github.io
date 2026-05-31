import type { Locale } from "./types";

// =============================================================================
//  STRINGS DE INTERFACE — rótulos fixos do site nos dois idiomas.
// =============================================================================

export const locales: Locale[] = ["pt", "en"];
export const defaultLocale: Locale = "pt";

const dict = {
  pt: {
    "nav.about": "Sobre",
    "nav.projects": "Projetos",
    "nav.contact": "Contato",
    "nav.skipToContent": "Pular para o conteúdo",
    "hero.available": "Disponível para novas oportunidades",
    "hero.specIos": "iOS / Apps",
    "hero.specSystems": "Sistemas",
    "hero.cta.projects": "Ver projetos",
    "hero.cta.contact": "Entrar em contato",
    "about.title": "Sobre mim",
    "about.skills": "Habilidades",
    "projects.title": "Projetos",
    "projects.ios": "iOS / Apps",
    "projects.systems": "Baixo nível / Sistemas",
    "projects.viewProject": "Ver projeto",
    "contact.title": "Contato",
    "contact.intro": "Aberto a oportunidades. Vamos conversar.",
    "contact.email": "Enviar email",
    "contact.resume": "Baixar currículo",
    "footer.builtWith": "Feito com Astro.",
    "theme.toggle": "Alternar tema",
    "lang.toggle": "Mudar idioma",
  },
  en: {
    "nav.about": "About",
    "nav.projects": "Projects",
    "nav.contact": "Contact",
    "nav.skipToContent": "Skip to content",
    "hero.available": "Available for new opportunities",
    "hero.specIos": "iOS / Apps",
    "hero.specSystems": "Systems",
    "hero.cta.projects": "View projects",
    "hero.cta.contact": "Get in touch",
    "about.title": "About me",
    "about.skills": "Skills",
    "projects.title": "Projects",
    "projects.ios": "iOS / Apps",
    "projects.systems": "Low-level / Systems",
    "projects.viewProject": "View project",
    "contact.title": "Contact",
    "contact.intro": "Open to opportunities. Let's talk.",
    "contact.email": "Send email",
    "contact.resume": "Download résumé",
    "footer.builtWith": "Built with Astro.",
    "theme.toggle": "Toggle theme",
    "lang.toggle": "Switch language",
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
