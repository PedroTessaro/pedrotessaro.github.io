// Tipos compartilhados pelos dados do site.

export type Locale = "pt" | "en";

/** Texto disponível nos dois idiomas. */
export type Localized = Record<Locale, string>;

export type ProjectArea = "ios" | "systems";

export interface ProjectLink {
  /** Rótulo do botão, ex.: "GitHub", "App Store". */
  label: string;
  url: string;
}

export interface Project {
  id: string;
  area: ProjectArea;
  title: string;
  /** Subtítulo curto / tagline. */
  tagline: Localized;
  description: Localized;
  /** Tecnologias exibidas como tags. */
  tech: string[];
  /** Links externos (GitHub, App Store, etc.). */
  links: ProjectLink[];
  /** Caminho da imagem em /public, ex.: "/projects/notadiary.png". Opcional. */
  image?: string;
  /** Várias imagens em /public para exibir em carrossel. Opcional. */
  images?: string[];
  /** Destaque visual (aparece primeiro / maior). */
  featured?: boolean;
}

export interface SkillGroup {
  title: Localized;
  area: ProjectArea;
  items: string[];
}

export interface SocialLink {
  label: string;
  url: string;
  /** chave de ícone simples usada em Contact/Footer. */
  icon: "github" | "linkedin" | "email" | "appstore";
}
