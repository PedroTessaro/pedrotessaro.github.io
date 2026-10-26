// Tipos compartilhados pelos dados do site.

export type Locale = "pt" | "en";

/** Texto disponível nos dois idiomas. */
export type Localized = Record<Locale, string>;

export type ProjectArea = "ios" | "backend" | "systems";

export interface ProjectLink {
  /** Rótulo do botão, ex.: "GitHub", "App Store". */
  label: string;
  url: string;
}

/** Onde o app está. Decide em que grupo da página ele aparece. */
export type AppStatus = "appstore" | "upcoming" | "built";

/** Um vídeo curto, sem som, que toca em loop enquanto está na tela. */
export interface Clip {
  src: string;
  poster: string;
  title?: string;
}

/** Um trecho real do código do app, mostrado fechado na ficha. */
export interface Snippet {
  /** Caminho dentro do projeto, só para dar contexto. */
  file: string;
  note: Localized;
  code: string;
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
  /** Só para apps. Sem ele, a ficha mostra um ícone com a inicial. */
  status?: AppStatus;
  /** Ícone em /public/icons. */
  icon?: string;
  /** Cor do ícone de reserva, quando não há `icon`. */
  tint?: string;
  /** Plataformas, como a App Store lista: "iPhone", "iPad", "Mac", "Apple TV". */
  platforms?: string[];
  /** Categoria curta, ex.: "Produtividade". */
  category?: Localized;
  /** Quem fez, quando não fui só eu. */
  team?: Localized;
  /** Subtítulo curto / tagline. */
  tagline: Localized;
  description: Localized;
  /** Tecnologias exibidas como tags. */
  tech: string[];
  /** Links externos (GitHub, App Store, etc.). O primeiro vira o botão da ficha. */
  links: ProjectLink[];
  /** Vídeos que entram antes das capturas, na mesma faixa. */
  clips?: Clip[];
  /** Capturas em /public, na ordem em que aparecem. */
  images?: string[];
  /** Vídeo do cartão de destaque, dentro de uma moldura de iPad. */
  hero?: Clip;
  /** Coisas feitas com o app, numa faixa própria abaixo do destaque. */
  gallery?: Clip[];
  /** Selo curto, ex.: "Na fila do App Nominations". */
  badge?: Localized;
  snippet?: Snippet;
}

export type ContributionState = "merged" | "open";

/** Um pull request em um projeto de outra pessoa. */
export interface Contribution {
  repo: string;
  number: number;
  title: string;
  state: ContributionState;
  /** Issue upstream que o PR resolve, se houver. */
  fixes?: number;
  summary: Localized;
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

/** Os ícones desenhados em components/Icon.astro. */
export type IconName =
  | "chevron"
  | "envelope"
  | "github"
  | "linkedin"
  | "doc"
  | "location"
  | "graduation"
  | "apple"
  | "globe"
  | "music"
  | "sun"
  | "moon"
  | "app"
  | "swift"
  | "terminal"
  | "pulse"
  | "person"
  | "code"
  | "arrow";
