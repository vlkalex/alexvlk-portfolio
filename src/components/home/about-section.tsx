import { SectionHeading } from "@/components/ui/section-heading";

export function AboutSection() {
  return (
    <section className="py-24" id="about">
      <div className="space-y-5">
        <SectionHeading>About</SectionHeading>
        <p className="text-lg leading-8 text-foreground">
          Developer in Prague. I ship apps fast by letting AI agents do most of
          the coding while I focus on the product. Obsessed with clean UX — I
          built Sealed Market because every other portfolio tracker felt
          terrible to use.
        </p>
      </div>
    </section>
  );
}
