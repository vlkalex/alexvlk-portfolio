import { ApproachSection } from "@/components/sealed-market/approach-section";
import { CaseStudyHeader } from "@/components/sealed-market/case-study-header";
import { ProblemSection } from "@/components/sealed-market/problem-section";
import { ProductSection } from "@/components/sealed-market/product-section";
import { ResultSection } from "@/components/sealed-market/result-section";
import { TryLinksSection } from "@/components/sealed-market/try-links-section";
import { PageLayout } from "@/components/ui/page-layout";
import Link from "next/link";

import {
  SEALED_MARKET_APP_STORE_URL,
  SEALED_MARKET_PLAY_STORE_URL,
  SEALED_MARKET_WEBSITE_URL,
} from "../const";
import { approachItems, screenshots, stats } from "./const";

export default function SealedMarketCaseStudy() {
  return (
    <PageLayout
      footer={
        <Link href="/" className="hover:text-foreground hover:underline">
          Alex Vlk · 2026
        </Link>
      }
    >
      <nav className="pb-4 pt-8">
        <Link
          href="/"
          className="text-sm font-medium text-muted underline-offset-4 hover:text-foreground hover:underline"
        >
          ← Back
        </Link>
      </nav>

      <CaseStudyHeader />
      <TryLinksSection
        appStoreUrl={SEALED_MARKET_APP_STORE_URL}
        playStoreUrl={SEALED_MARKET_PLAY_STORE_URL}
        websiteUrl={SEALED_MARKET_WEBSITE_URL}
      />
      <ProblemSection />
      <ApproachSection items={approachItems} />
      <ResultSection stats={stats} />
      <ProductSection screenshots={screenshots} />
    </PageLayout>
  );
}
