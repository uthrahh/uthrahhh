import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/ui";
import { interests } from "@/lib/data/profile";

export function InterestsSection() {
  return (
    <section id="interests" className="scroll-mt-6 border-b border-border">
      <Container className="py-20 sm:py-24">
        <SectionHeading eyebrow="Interests" />
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink-muted">
          {interests}
        </p>
      </Container>
    </section>
  );
}
