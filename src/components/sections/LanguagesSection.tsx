import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/ui";
import { languages } from "@/lib/data/profile";

export function LanguagesSection() {
  return (
    <section id="languages" className="scroll-mt-6">
      <Container className="py-4 sm:py-5">
        <SectionHeading eyebrow="Languages" />
        <div className="mt-3 grid grid-cols-2 gap-x-10 gap-y-3 sm:flex sm:flex-wrap">
          {languages.map((l) => (
            <div key={l.name} className="sm:min-w-[9rem]">
              <p className="text-sm font-medium text-ink">{l.name}</p>
              {l.proficiency ? (
                <p className="mt-1 text-xs text-ink-faint">{l.proficiency}</p>
              ) : null}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
