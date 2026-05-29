import { SectionHeading } from "@/components/ui/section-heading";
import { TextLink } from "@/components/ui/text-link";

export function ContactSection() {
  return (
    <section className="py-24" id="contact">
      <div className="space-y-5">
        <SectionHeading>Contact</SectionHeading>
        <div className="flex flex-wrap gap-x-5 gap-y-3">
          <a
            className="text-sm font-medium text-muted underline-offset-4 hover:text-foreground hover:underline"
            href="mailto:vlkalex.mail@gmail.com"
          >
            vlkalex.mail@gmail.com
          </a>
          <TextLink href="https://www.linkedin.com/in/alex-vlk-007760194/">
            LinkedIn
          </TextLink>
        </div>
      </div>
    </section>
  );
}
