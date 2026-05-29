import type { ApproachItemContent, Screenshot, Stat } from "@/types";

export const screenshots: Screenshot[] = [
  {
    src: "/screenshots/sm-portfolio.png",
    alt: "Portfolio overview with value chart and holdings",
  },
  {
    src: "/screenshots/sm-asset.png",
    alt: "Asset detail with price history and stats",
  },
  {
    src: "/screenshots/sm-set.png",
    alt: "Set detail with collector dashboard",
  },
  {
    src: "/screenshots/sm-add.png",
    alt: "Add to portfolio form with price input",
  },
];

export const stats: Stat[] = [
  { value: "3,500+", label: "Collectors" },
  { value: "70,000+", label: "Tracked Products" },
  { value: "60,000+", label: "Items In Portfolios" },
];

export const approachItems: ApproachItemContent[] = [
  {
    title: "Dark, data-dense, but never overwhelming",
    description:
      "Inspired by Robinhood and Delta. Professional investor feel instead of the colorful, playful aesthetic most collectible apps use. Every screen prioritizes information density while staying clean and scannable.",
  },
  {
    title: "Real EU market prices, not estimates",
    description:
      "Prices are sourced from actual European marketplace data so collectors see what their cards are truly worth in their market. Multi-currency support (EUR, USD, CZK, CAD) keeps everything accurate regardless of where you are.",
  },
  {
    title: "Built for collectors who think like investors",
    description:
      "Full P&L tracking, portfolio value charts over time, price history with volatility metrics, and set completion analytics. Your collection is an asset. The app treats it like one.",
  },
  {
    title: "Maintained by one person with AI agents",
    description:
      "AI agents autonomously fix production bugs, create pull requests, and ship features with human review at every step. This lets a solo developer maintain a product this complex.",
  },
];
