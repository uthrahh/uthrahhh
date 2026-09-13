import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/ui";
import { SkillChip } from "@/components/SkillChip";
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
              <div className="flex flex-wrap items-baseline gap-x-1 gap-y-1 leading-relaxed">
                {group.skills.map((skill, i) => (
                  <span key={skill} className="inline-flex items-baseline">
                    <SkillChip skill={skill} />
                    {i < group.skills.length - 1 ? (
                      <span className="ml-1 text-[15px] text-ink-faint">·</span>
                    ) : null}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
