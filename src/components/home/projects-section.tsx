import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/ui/section-heading";
import type { Project } from "@/types";

interface ProjectsSectionProps {
  projects: Project[];
}

export function ProjectsSection({ projects }: Readonly<ProjectsSectionProps>) {
  return (
    <section className="py-24" id="projects">
      <div className="space-y-8">
        <SectionHeading>Projects</SectionHeading>
        <div className="grid gap-4">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
