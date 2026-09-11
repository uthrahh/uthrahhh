import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/ui";
import { SubstackSection } from "@/components/SubstackSection";

export function ArticlesSection() {
  return (
    <section id="articles" className="scroll-mt-6 border-b border-border">
      <Container className="py-20 sm:py-24">
        <SectionHeading eyebrow="Articles" title="Writing, on Substack" />
        <div className="mt-8 max-w-2xl">
          <SubstackSection />
        </div>
      </Container>
    </section>
  );
}
