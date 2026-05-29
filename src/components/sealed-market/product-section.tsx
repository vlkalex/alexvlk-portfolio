import { ScreenshotGrid } from "@/components/ui/screenshot-grid";
import { SectionHeading } from "@/components/ui/section-heading";
import type { Screenshot } from "@/types";

interface ProductSectionProps {
  screenshots: Screenshot[];
}

export function ProductSection({
  screenshots,
}: Readonly<ProductSectionProps>) {
  return (
    <section className="pb-16">
      <div className="space-y-5">
        <SectionHeading>The Product</SectionHeading>
        <ScreenshotGrid screenshots={screenshots} />
        <p className="text-center text-sm text-muted">
          Portfolio overview · Asset detail · Set browser · Add to portfolio
        </p>
      </div>
    </section>
  );
}
