import { AboutSection } from "@/components/home/about-section";
import { ContactSection } from "@/components/home/contact-section";
import { HeroSection } from "@/components/home/hero-section";
import { ProjectsSection } from "@/components/home/projects-section";
import { PageLayout } from "@/components/ui/page-layout";

import { projects } from "./const";

export default function Home() {
  return (
    <PageLayout footer="Alex Vlk · 2026">
      <HeroSection />
      <ProjectsSection projects={projects} />
      <AboutSection />
      <ContactSection />
    </PageLayout>
  );
}
