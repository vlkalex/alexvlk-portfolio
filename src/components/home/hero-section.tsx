import { TextLink } from "@/components/ui/text-link";

export function HeroSection() {
  return (
    <section className="flex min-h-[82vh] flex-col justify-center py-24">
      <div className="space-y-8">
        <div className="space-y-5">
          <h1 className="max-w-162.5 text-[2rem] font-bold leading-[1.08] text-foreground sm:text-5xl">
            Hi! I&apos;m Alex
          </h1>
          <h3 className="max-w-162.5 text-[1rem] font-medium leading-[1.08] text-foreground sm:text-2xl">
            A software developer who builds production-ready apps with the help of AI agents.
          </h3>
          <p className="text-lg leading-8 text-muted">
            React · React Native · TypeScript · Prague
          </p>
        </div>
        <div className="flex flex-wrap gap-4">
          <TextLink href="https://github.com/vlkalex">GitHub</TextLink>
          <TextLink href="https://www.linkedin.com/in/alex-vlk-007760194/">
            LinkedIn
          </TextLink>
        </div>
      </div>
    </section>
  );
}
