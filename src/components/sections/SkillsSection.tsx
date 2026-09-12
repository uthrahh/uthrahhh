import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/ui";
import { skills } from "@/lib/data/skills";

export function SkillsSection() {
  return (
    <section id="skills" className="scroll-mt-6 border-b border-border">
      <Container className="py-5 sm:py-6">
        <SectionHeading eyebrow="Skills" title="" />

        <div className="mt-3 grid gap-x-10 gap-y-4 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((group) => (
            <div key={group.category}>
              <p className="mb-1.5 font-mono text-xs uppercase tracking-widest text-ink-faint">
                {group.category}
              </p>
              <p className="text-[15px] leading-relaxed text-ink">
                {group.skills.join(" · ")}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
