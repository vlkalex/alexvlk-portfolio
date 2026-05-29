import { SectionHeading } from "@/components/ui/section-heading";

export function ProblemSection() {
  return (
    <section className="pb-16">
      <div className="space-y-5">
        <SectionHeading>The Problem</SectionHeading>
        <p className="text-lg leading-8 text-foreground">
          Trading card collectors had no good way to track what their collection
          is actually worth. Existing tools were either spreadsheets, clunky web
          apps from the 2000s, or apps built for the US market with prices that
          meant nothing to European collectors. Nobody was building a real
          investment-grade portfolio tracker for this space.
        </p>
      </div>
    </section>
  );
}
