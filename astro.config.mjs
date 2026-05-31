// @ts-check
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  // Atualize "site" quando escolher a hospedagem (necessário para sitemap/SEO).
  // ex.: "https://seudominio.com" ou "https://usuario.github.io/PortfolioWebsite"
  site: "https://example.com",
  i18n: {
    locales: ["pt", "en"],
    defaultLocale: "pt",
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: false,
    },
  },
});
