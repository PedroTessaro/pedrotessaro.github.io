import type { APIRoute } from "astro";

const SITE = "https://pedrotessaro.github.io";
const pages = ["", "status/"];

/** Poucas páginas, então o sitemap é escrito à mão em vez de vir de uma integração. */
export const GET: APIRoute = () => {
  const urls = pages.flatMap((path) =>
    ["pt", "en"].map(
      (locale) => `  <url>
    <loc>${SITE}/${locale}/${path}</loc>
    <xhtml:link rel="alternate" hreflang="pt-BR" href="${SITE}/pt/${path}"/>
    <xhtml:link rel="alternate" hreflang="en" href="${SITE}/en/${path}"/>
  </url>`
    )
  );
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.join("\n")}
</urlset>
`;
  return new Response(body, { headers: { "Content-Type": "application/xml" } });
};
