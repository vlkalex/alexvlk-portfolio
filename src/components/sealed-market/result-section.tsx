import { SectionHeading } from "@/components/ui/section-heading";
import { StatCard } from "@/components/ui/stat-card";
import type { Stat } from "@/types";

interface ResultSectionProps {
  stats: Stat[];
}

export function ResultSection({ stats }: Readonly<ResultSectionProps>) {
  return (
    <section className="pb-16">
      <div className="space-y-5">
        <SectionHeading>The Result</SectionHeading>
        <div className="grid grid-cols-3 gap-4">
          {stats.map((stat) => (
            <StatCard key={stat.label} label={stat.label} value={stat.value} />
          ))}
        </div>
      </div>
    </section>
  );
}
