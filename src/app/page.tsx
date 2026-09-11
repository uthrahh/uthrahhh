import { HomeSection } from "@/components/sections/HomeSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ContactSection } from "@/components/ContactSection";

export default function Home() {
  return (
    <>
      <HomeSection />
      <ProjectsSection />
      <ExperienceSection />
      <AboutSection />
      <ContactSection />
    </>
  );
}
