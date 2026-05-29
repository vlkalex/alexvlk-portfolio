import { ThemeToggle } from "@/components/theme-toggle";

const projects = [
  {
    title: "Sealed Market",
    description:
      "Portfolio tracker for TCG collectors. 3,500+ users on iOS and Android.",
    links: [
      {
        label: "App Store",
        href: "https://apps.apple.com/us/app/sealed-market-tcg-portfolio/id6759202721",
      },
      {
        label: "Play Store",
        href: "https://play.google.com/store/apps/details?id=com.sealedlabs.sealedmarket",
      },
    ],
  },
  {
    title: "PixelNode",
    description:
      "AI automation studio. Technical delivery partner for business process automation.",
    links: [{ label: "Visit", href: "https://pixelnode.digital" }],
  },
  {
    title: "AI Agent Coding Standards",
    description:
      "Open source guidelines for AI-powered development across 5+ codebases.",
    links: [
      {
        label: "GitHub",
        href: "https://github.com/vlkalex/ai-agent-coding-standards",
      },
    ],
  },
];

function TextLink({
  children,
  href,
}: Readonly<{ children: React.ReactNode; href: string }>) {
  return (
    <a
      className="text-sm font-medium text-muted underline-offset-4 hover:text-foreground hover:underline"
      href={href}
      rel="noopener noreferrer"
      target="_blank"
    >
      {children}
    </a>
  );
}

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-[680px] flex-col px-6 sm:px-8">
      <header className="fixed right-6 top-6 z-10 sm:right-8">
        <ThemeToggle />
      </header>

      <section className="flex min-h-[82vh] flex-col justify-center py-24">
        <div className="space-y-8">
          <div className="space-y-5">
            <h1 className="max-w-[650px] text-[2.5rem] font-bold leading-[1.08] text-foreground sm:text-5xl">
              Developer. 80% of my code is AI-generated. 100% is
              production-ready.
            </h1>
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

      <section className="py-24" id="projects">
        <div className="space-y-8">
          <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-muted">
            Projects
          </h2>
          <div className="grid gap-4">
            {projects.map((project) => (
              <article
                className="rounded-lg border border-border p-6 hover:border-foreground/45"
                key={project.title}
              >
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold leading-7 text-foreground">
                    {project.title}
                  </h3>
                  <p className="text-base leading-7 text-muted">
                    {project.description}
                  </p>
                </div>
                <div className="mt-6 flex flex-wrap gap-4">
                  {project.links.map((link) => (
                    <TextLink href={link.href} key={link.href}>
                      {link.label}
                    </TextLink>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24" id="about">
        <div className="space-y-5">
          <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-muted">
            About
          </h2>
          <p className="text-lg leading-8 text-foreground">
            Developer in Prague. I ship apps fast by letting AI agents do most
            of the coding while I focus on the product. Obsessed with clean UX
            — I built Sealed Market because every other portfolio tracker felt
            terrible to use.
          </p>
        </div>
      </section>

      <section className="py-24" id="contact">
        <div className="space-y-5">
          <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-muted">
            Contact
          </h2>
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

      <footer className="py-10 text-center text-sm text-muted">
        Alex Vlk · 2026
      </footer>
    </main>
  );
}
