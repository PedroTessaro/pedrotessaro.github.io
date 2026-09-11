// Tipos compartilhados pelos dados do site.

export type Locale = "pt" | "en";

/** Texto disponível nos dois idiomas. */
export type Localized = Record<Locale, string>;

export type ProjectArea = "backend" | "systems" | "ios";

export interface ProjectLink {
  /** Rótulo do link, ex.: "GitHub", "App Store". */
  label: string;
  url: string;
}

export interface Project {
  id: string;
  area: ProjectArea;
  title: string;
  /**
   * Nome do repositório no GitHub, quando houver. É a chave que liga esta
   * entrada aos dados ao vivo do serviço — linguagem, estrelas, último push.
   */
  repo?: string;
  description: Localized;
  /** Tecnologias, exibidas como texto separado por ponto médio. */
  tech: string[];
  links: ProjectLink[];
  /** Capturas em /public, só onde a imagem acrescenta alguma coisa. */
  images?: string[];
}

export interface SkillGroup {
  title: Localized;
  area: ProjectArea;
  items: string[];
}

export interface SocialLink {
  label: string;
  url: string;
}
