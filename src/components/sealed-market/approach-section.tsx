import { ApproachItem } from "@/components/sealed-market/approach-item";
import { SectionHeading } from "@/components/ui/section-heading";
import type { ApproachItemContent } from "@/types";

interface ApproachSectionProps {
  items: ApproachItemContent[];
}

export function ApproachSection({ items }: Readonly<ApproachSectionProps>) {
  return (
    <section className="pb-16">
      <div className="space-y-5">
        <SectionHeading>The Approach</SectionHeading>
        <div className="space-y-4">
          {items.map((item) => (
            <ApproachItem key={item.title} title={item.title}>
              {item.description}
            </ApproachItem>
          ))}
        </div>
      </div>
    </section>
  );
}
