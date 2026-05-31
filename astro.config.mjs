// @ts-check
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  // Hospedagem: GitHub Pages como página de usuário (raiz, sem "base").
  // Quando comprar um domínio próprio, troque por "https://seudominio.com".
  site: "https://pedrotessaro.github.io",
  i18n: {
    locales: ["pt", "en"],
    defaultLocale: "pt",
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: false,
    },
  },
});
