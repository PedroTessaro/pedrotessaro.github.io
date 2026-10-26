import type { Locale } from "./types";
import { name, role, tagline, email, socials, info } from "./profile";
import { projects } from "./projects";
import { contributions } from "./contributions";
import { repoUrl as swordRepo, lede as swordLede } from "./sword";

const SITE = "https://pedrotessaro.github.io";

/**
 * JSON-LD para buscadores e para quem lê a página com um modelo: a mesma
 * informação da página, em schema.org, sem precisar interpretar o layout.
 */
export function structuredData(locale: Locale) {
  const apps = projects.filter((p) => p.area === "ios");

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${SITE}/#person`,
        name,
        image: `${SITE}/avatar.jpg`,
        jobTitle: role[locale],
        description: tagline[locale],
        email: `mailto:${email}`,
        url: `${SITE}/${locale}/`,
        sameAs: socials.filter((s) => s.icon !== "email").map((s) => s.url),
        address: { "@type": "PostalAddress", addressLocality: "São Paulo", addressCountry: "BR" },
        alumniOf: { "@type": "CollegeOrUniversity", name: "Universidade Presbiteriana Mackenzie" },
        memberOf: { "@type": "Organization", name: "Apple Developer Academy" },
        knowsAbout: [
          "iOS", "Swift", "SwiftUI", "UIKit", "Swift Concurrency", "CloudKit", "Core Data",
          "SwiftData", "Metal", "MultipeerConnectivity", "Compilers", "LLVM",
        ],
        knowsLanguage: info.find((i) => i.icon === "globe")?.value[locale],
      },
      ...apps.map((p) => ({
        "@type": "SoftwareApplication",
        name: p.title,
        description: `${p.tagline[locale]}. ${p.description[locale]}`,
        applicationCategory: p.category?.[locale],
        operatingSystem: p.platforms?.join(", "),
        url: p.links[0]?.url ?? `${SITE}/${locale}/#${p.id}`,
        creator: { "@id": `${SITE}/#person` },
      })),
      {
        "@type": "SoftwareSourceCode",
        name: "Sword",
        description: swordLede[locale],
        codeRepository: swordRepo,
        programmingLanguage: "C++",
        author: { "@id": `${SITE}/#person` },
      },
      ...contributions.map((c) => ({
        "@type": "SoftwareSourceCode",
        name: c.title,
        description: c.summary[locale].replaceAll("`", ""),
        codeRepository: `https://github.com/${c.repo}/pull/${c.number}`,
        author: { "@id": `${SITE}/#person` },
        creativeWorkStatus: c.state,
      })),
    ],
  };
}
