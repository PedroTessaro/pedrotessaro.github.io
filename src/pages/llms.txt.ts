import type { APIRoute } from "astro";
import { name, role, tagline, bio, info, email, socials, skills } from "../data/profile";
import { projects } from "../data/projects";
import { contributions } from "../data/contributions";
import { repoUrl as swordRepo, lede as swordLede, release } from "../data/sword";

/**
 * O site em texto puro, no formato llms.txt, gerado dos mesmos dados da
 * página. Para quem revisa o perfil com um modelo: nada de layout para
 * interpretar, e nada aqui que a página não diga.
 */
export const GET: APIRoute = () => {
  const l = "en" as const;
  const apps = projects.filter((p) => p.area === "ios");
  const statusLabel = { appstore: "On the App Store", upcoming: "Coming soon", built: "Built to learn" };

  const appLines = (["appstore", "upcoming", "built"] as const).flatMap((status) => [
    `### ${statusLabel[status]}`,
    "",
    ...apps
      .filter((p) => p.status === status)
      .flatMap((p) => [
        `- **${p.title}** (${p.platforms?.join(", ") ?? ""}${p.team ? `; ${p.team[l]}` : ""}): ${p.tagline[l]}. ${p.description[l]}`,
        `  Tech: ${p.tech.join(", ")}.${p.links.length ? " Links: " + p.links.map((x) => `[${x.label}](${x.url})`).join(", ") : ""}`,
      ]),
    "",
  ]);

  const body = [
    `# ${name}`,
    "",
    `> ${role[l]}. ${tagline[l]}`,
    "",
    bio[l],
    "",
    ...info.map((i) => `- ${i.label[l]}: ${i.value[l]}`),
    `- Email: ${email}`,
    ...socials.filter((s) => s.icon !== "email").map((s) => `- ${s.label}: ${s.url}`),
    "",
    "## Apps",
    "",
    ...appLines,
    "## Contributions to Swift",
    "",
    ...contributions.map(
      (c) =>
        `- [${c.repo}#${c.number}](https://github.com/${c.repo}/pull/${c.number}) (${c.state}): ${c.title}. ${c.summary[l].replaceAll("`", "")}`
    ),
    "",
    "## Sword",
    "",
    `${swordLede[l]} Current release: ${release.version} "${release.name}". Repository: ${swordRepo}`,
    "",
    "## Other projects",
    "",
    ...projects
      .filter((p) => p.area !== "ios")
      .map((p) => `- [${p.title}](${p.links[0]?.url}): ${p.tagline[l]}. ${p.description[l]}`),
    "",
    "## Skills",
    "",
    ...skills.map((g) => `- ${g.title[l]}: ${g.items.join(", ")}`),
    "",
    "## Pages",
    "",
    "- [Portfolio (English)](https://pedrotessaro.github.io/en/)",
    "- [Portfólio (português)](https://pedrotessaro.github.io/pt/)",
    "",
  ].join("\n");

  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
};
