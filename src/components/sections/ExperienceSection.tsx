import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/ui";
import { ExperienceEntry } from "@/components/ExperienceEntry";
import { MediaFrame } from "@/components/MediaFrame";
import { experience } from "@/lib/data/experience";
import { communitySocial } from "@/lib/data/leadership";

const WORK_EXPERIENCE_LOGOS = [
  { src: "/kaartech.png", alt: "KaarTech" },
  { src: "/aic-mark.png", alt: "AIC - Crescent Innovation and Incubation Council" },
  { src: "/uandi.png", alt: "U&I Trust" },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="scroll-mt-6 border-b border-border">
      <Container className="py-5 sm:py-6">
        <SectionHeading eyebrow="Work Experience" logos={WORK_EXPERIENCE_LOGOS} />

        <div className="mt-4 space-y-6">
          {experience.map((exp) => (
            <ExperienceEntry key={exp.org} exp={exp} />
          ))}

          {/* Volunteer work: distinguished from the formal internships above,
              not framed as employment. */}
          {communitySocial.map((item) => (
            <div key={item.org} className="border-t border-border pt-5">
              <div className="flex flex-col gap-4 sm:flex-row sm:justify-between">
                <div className="min-w-0">
                  <h3 className="font-display text-lg leading-snug text-ink sm:text-xl">
                    {item.role}
                    <span className="text-ink-muted"> · </span>
                    {item.orgUrl ? (
                      <a
                        href={item.orgUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent-strong hover:text-accent"
                      >
                        {item.org}
                      </a>
                    ) : (
                      item.org
                    )}
                  </h3>
                  <p className="mt-2 font-mono text-xs uppercase tracking-wide text-ink-faint">
                    Volunteer · {item.start} – {item.end}
                  </p>
                  {item.detail?.length ? (
                    <p className="mt-2 max-w-2xl text-base leading-relaxed text-ink-muted">
                      {item.detail[0]}
                    </p>
                  ) : null}
                </div>

                {item.photo ? (
                  <MediaFrame asset={item.photo} className="w-full shrink-0 sm:w-40" />
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
