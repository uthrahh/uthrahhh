import { Container } from "@/components/Container";
import { RoleCylinder } from "@/components/RoleCylinder";
import { TextCylinder } from "@/components/TextCylinder";
import { EmailCopy } from "@/components/EmailCopy";
import { MediaFrame } from "@/components/MediaFrame";
import { site } from "@/lib/data/site";

const SIGNATURE_STACK = [
  "Python",
  "SQL",
  "PySpark",
  "Databricks",
  "Power BI",
  "Django",
  "FastAPI",
  "React",
  "PostgreSQL",
  "Docker",
  "Pandas",
  "NumPy",
  "RAG",
  "Git / GitHub",
];

const CONTACT_LINK_STYLE = "text-accent-strong hover:text-ink";

export function HomeSection() {
  return (
    <section
      id="home"
      className="relative flex h-[100svh] min-h-[680px] flex-col justify-between overflow-hidden border-b border-border"
    >
      <div className="hero-grid pointer-events-none absolute inset-0" aria-hidden="true" />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, transparent 0%, var(--paper) 85%)",
        }}
        aria-hidden="true"
      />

      <Container className="relative flex flex-1 flex-col justify-center py-8 sm:py-10">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-14">
          <div className="min-w-0">
            <h1 className="font-display text-3xl leading-[1.08] text-ink sm:text-4xl md:text-[3.2rem]">
              {site.name}
            </h1>

            {/* Name, roles, and skills share one consistent vertical rhythm;
                the gap before the prose summary is deliberately larger to
                separate the identity/tech-stack block from the paragraph. */}
            <div className="mt-4 sm:mt-5">
              <RoleCylinder />
            </div>

            <div className="mt-4 max-w-md sm:mt-5">
              <TextCylinder
                items={SIGNATURE_STACK}
                textClassName="font-mono text-xs uppercase tracking-widest text-ink-faint sm:text-[13px]"
                heightEm={1}
                durationSeconds={26}
                perspective={1500}
              />
            </div>

            <p className="mt-8 max-w-xl text-[15px] leading-relaxed text-ink-muted sm:mt-10 sm:text-base">
              I&apos;m a Computer Science &amp; Engineering candidate at{" "}
              <span className="font-medium text-ink">Vellore Institute of Technology, Chennai</span>{" "}
              (graduating 2027), with a <span className="font-medium text-ink">data-oriented</span>{" "}
              focus: building data pipelines, backend systems, and the infrastructure that turns raw
              data into something a business can act on. My internships and projects span data
              engineering on Databricks, backend systems in Django and FastAPI, and applied machine
              learning, alongside four years of leadership running a 250+ member technical community
              at VIT Chennai.
            </p>

            <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
              <EmailCopy email={site.email} className={CONTACT_LINK_STYLE} />
              <span className="text-border-strong">·</span>
              <a
                href={site.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={`transition-colors ${CONTACT_LINK_STYLE}`}
              >
                LinkedIn
              </a>
              <span className="text-border-strong">·</span>
              <a
                href={site.github}
                target="_blank"
                rel="noopener noreferrer"
                className={`transition-colors ${CONTACT_LINK_STYLE}`}
              >
                GitHub
              </a>
            </div>
          </div>

          <div className="relative mx-auto shrink-0 lg:mx-0">
            <div
              aria-hidden="true"
              className="absolute -bottom-3 -right-3 h-full w-full border border-accent"
            />
            <MediaFrame
              asset={{
                kind: "portrait",
                src: "/profilephoto.jpg",
                alt: `Portrait of ${site.name}`,
                aspect: "3/4",
              }}
              className="relative w-36 sm:w-44 md:w-56 lg:w-64 xl:w-72"
              imgClassName="object-top"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
