import { ThemeToggle } from "@/components/theme-toggle";
import Image from "next/image";
import Link from "next/link";
import {
  SEALED_MARKET_APP_STORE_URL,
  SEALED_MARKET_PLAY_STORE_URL,
  SEALED_MARKET_WEBSITE_URL,
} from "../const";

const screenshots = [
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

const stats = [
  { value: "3,500+", label: "Collectors" },
  { value: "70,000+", label: "Tracked Products" },
  { value: "60,000+", label: "Items In Portfolios" },
];

export default function SealedMarketCaseStudy() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-170 flex-col px-6 sm:px-8">
      <header className="fixed right-6 top-6 z-10 sm:right-8">
        <ThemeToggle />
      </header>

      <nav className="pb-4 pt-8">
        <Link
          href="/"
          className="text-sm font-medium text-muted underline-offset-4 hover:text-foreground hover:underline"
        >
          ← Back
        </Link>
      </nav>

      <section className="pb-16 pt-8">
        <div className="space-y-4">
          <div className="flex items-center gap-5">
            <Image
              src="/logos/sealed-market.png"
              alt="Sealed Market icon"
              width={80}
              height={80}
              priority
              style={{ borderRadius: 30, width: "auto", height: "auto" }}
            />
            <div>
              <h1 className="text-2xl font-bold text-foreground">
                Sealed Market
              </h1>
              <p className="text-base text-muted">
                TCG Portfolio & Price Tracker
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-16">
        <div className="space-y-3">
          <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-muted">
            Try it
          </h2>
          <div className="flex flex-wrap gap-4">
            <a
              className="text-sm font-medium text-muted underline-offset-4 hover:text-foreground hover:underline"
              href={SEALED_MARKET_APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              App Store
            </a>
            <a
              className="text-sm font-medium text-muted underline-offset-4 hover:text-foreground hover:underline"
              href={SEALED_MARKET_PLAY_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Play Store
            </a>
            <a
              className="text-sm font-medium text-muted underline-offset-4 hover:text-foreground hover:underline"
              href={SEALED_MARKET_WEBSITE_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Website
            </a>
          </div>
        </div>
      </section>

      <section className="pb-16">
        <div className="space-y-5">
          <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-muted">
            The Problem
          </h2>
          <p className="text-lg leading-8 text-foreground">
            Trading card collectors had no good way to track what their
            collection is actually worth. Existing tools were either
            spreadsheets, clunky web apps from the 2000s, or apps built for the
            US market with prices that meant nothing to European collectors.
            Nobody was building a real investment-grade portfolio tracker for
            this space.
          </p>
        </div>
      </section>

      <section className="pb-16">
        <div className="space-y-5">
          <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-muted">
            The Approach
          </h2>
          <div className="space-y-4">
            <div className="space-y-1.5">
              <h3 className="text-base font-semibold text-foreground">
                Dark, data-dense, but never overwhelming
              </h3>
              <p className="text-base leading-7 text-muted">
                Inspired by Robinhood and Delta. Professional investor feel
                instead of the colorful, playful aesthetic most collectible apps
                use. Every screen prioritizes information density while staying
                clean and scannable.
              </p>
            </div>
            <div className="space-y-1.5">
              <h3 className="text-base font-semibold text-foreground">
                Real EU market prices, not estimates
              </h3>
              <p className="text-base leading-7 text-muted">
                Prices are sourced from actual European marketplace data so
                collectors see what their cards are truly worth in their market.
                Multi-currency support (EUR, USD, CZK, CAD) keeps everything
                accurate regardless of where you are.
              </p>
            </div>
            <div className="space-y-1.5">
              <h3 className="text-base font-semibold text-foreground">
                Built for collectors who think like investors
              </h3>
              <p className="text-base leading-7 text-muted">
                Full P&L tracking, portfolio value charts over time, price
                history with volatility metrics, and set completion analytics.
                Your collection is an asset. The app treats it like one.
              </p>
            </div>
            <div className="space-y-1.5">
              <h3 className="text-base font-semibold text-foreground">
                Maintained by one person with AI agents
              </h3>
              <p className="text-base leading-7 text-muted">
                AI agents autonomously fix production bugs, create pull
                requests, and ship features with human review at every step.
                This lets a solo developer maintain a product this complex.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-16">
        <div className="space-y-5">
          <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-muted">
            The Result
          </h2>
          <div className="grid grid-cols-3 gap-4">
            {stats.map((stat) => (
              <div key={stat.label} className="p-4 text-center">
                <p className="text-2xl font-bold text-foreground">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-muted">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-16">
        <div className="space-y-5">
          <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-muted">
            The Product
          </h2>
          <div className="grid grid-cols-2 gap-3">
            {screenshots.map((shot) => (
              <div
                key={shot.src}
                className="overflow-hidden rounded-lg border border-border bg-foreground/5"
              >
                <Image
                  src={shot.src}
                  alt={shot.alt}
                  width={320}
                  height={693}
                  className="h-auto w-full"
                  priority
                />
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-muted">
            Portfolio overview · Asset detail · Set browser · Add to portfolio
          </p>
        </div>
      </section>

      <footer className="py-10 text-center text-sm text-muted">
        <Link href="/" className="hover:text-foreground hover:underline">
          Alex Vlk · 2026
        </Link>
      </footer>
    </main>
  );
}
