import Link from "next/link";

import { TextLink } from "@/components/ui/text-link";
import type { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: Readonly<ProjectCardProps>) {
  return (
    <article className="rounded-lg border border-border p-6 hover:border-foreground/45">
      <div className="space-y-3">
        <h3 className="text-xl font-semibold leading-7 text-foreground">
          {project.title}
        </h3>
        <p className="text-base leading-7 text-muted">{project.description}</p>
      </div>
      <div className="mt-6 flex flex-wrap gap-4">
        {project.caseStudy && (
          <Link
            className="text-sm font-medium text-foreground underline-offset-4 hover:underline"
            href={project.caseStudy}
          >
            View case study
          </Link>
        )}
        {project.links.map((link) => (
          <TextLink href={link.href} key={link.href}>
            {link.label}
          </TextLink>
        ))}
      </div>
    </article>
  );
}
