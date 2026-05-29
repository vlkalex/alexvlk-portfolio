import type { Project } from "@/types";

export const SEALED_MARKET_APP_STORE_URL =
  "https://apps.apple.com/app/sealed-market-tcg-portfolio/id6759202721";
export const SEALED_MARKET_PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.sealedlabs.sealedmarket";
export const SEALED_MARKET_WEBSITE_URL = "https://sealedmarket.com";

export const PIXELNODE_WEBSITE_URL = "https://pixelnode.digital";

export const projects: Project[] = [
  {
    title: "Sealed Market",
    description:
      "Portfolio tracker for TCG collectors. 3,500+ users on iOS and Android.",
    caseStudy: "/sealed-market",
    links: [
      {
        label: "App Store",
        href: SEALED_MARKET_APP_STORE_URL,
      },
      {
        label: "Play Store",
        href: SEALED_MARKET_PLAY_STORE_URL,
      },
    ],
  },
  {
    title: "PixelNode",
    description:
      "AI automation studio. Technical delivery partner for business process automation.",
    links: [{ label: "Visit", href: PIXELNODE_WEBSITE_URL }],
  },
  {
    title: "AI Agent Coding Standards",
    description:
      "Open source guidelines for AI-powered development across 5+ codebases.",
    links: [
      {
        label: "GitHub",
        href: "https://github.com/vlkalex/ai-agent-coding-standards",
      },
    ],
  },
];
