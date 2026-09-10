import Link from "next/link";
import { Container } from "@/components/Container";
import { ButtonLink, SectionHeading, Tag } from "@/components/ui";
import { ProjectCard } from "@/components/ProjectCard";
import { ContactSection } from "@/components/ContactSection";
import { featuredProjects } from "@/lib/data/projects";
import { experience } from "@/lib/data/experience";
import { skills } from "@/lib/data/skills";
import { clubLeadership, hackathons } from "@/lib/data/leadership";
import { education } from "@/lib/data/education";
import { site } from "@/lib/data/site";

export default function Home() {
  const featured = featuredProjects();
  const latestRole = clubLeadership[0];

  return (
    <>
      {/* Hero */}
      <section className="border-b border-border">
        <Container className="py-20 sm:py-28">
          <p className="mb-5 font-mono text-xs uppercase tracking-widest text-accent">
            {site.title}
          </p>
          <h1 className="max-w-3xl font-display text-4xl leading-[1.1] text-ink sm:text-5xl md:text-6xl">
            {site.name}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-muted">
            {site.positioning} Currently a Data Engineer intern at KaarTech,
            building PySpark pipelines and AI-assisted interfaces over
            Databricks; previously a backend engineer at AIC-CIIC, shipping a
            role-based ERP and two production automation systems.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <ButtonLink href="/projects">View my work</ButtonLink>
            <ButtonLink href="/#contact" variant="secondary">
              Get in touch
            </ButtonLink>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-ink-muted">
            <a href={`mailto:${site.email}`} className="hover:text-accent-strong">
              {site.email}
            </a>
            <span className="text-border-strong">·</span>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent-strong"
            >
              LinkedIn
            </a>
            <span className="text-border-strong">·</span>
            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent-strong"
            >
              GitHub
            </a>
            <span className="text-border-strong">·</span>
            <span>{site.location}</span>
          </div>
        </Container>
      </section>

      {/* Selected work */}
      <section className="border-b border-border">
        <Container className="py-20">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Selected work"
              title="Engineering, end to end"
              description="Twelve shipped and in-progress projects spanning data engineering, backend systems, GenAI, and applied ML, each documented with real architecture decisions, not just a feature list."
            />
            <Link
              href="/projects"
              className="text-sm font-medium text-ink underline decoration-border-strong underline-offset-4 hover:decoration-accent hover:text-accent-strong"
            >
              View all projects →
            </Link>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </Container>
      </section>

      {/* Experience */}
      <section className="border-b border-border">
        <Container className="py-20">
          <SectionHeading eyebrow="Experience" title="Where I've worked" />

          <div className="mt-10 grid gap-8 md:grid-cols-2">
            {experience.map((exp) => (
              <div key={exp.org} className="border border-border p-7">
                <div className="flex items-baseline justify-between gap-3">
                  <a
                    href={exp.orgUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-display text-xl text-ink hover:text-accent-strong"
                  >
                    {exp.org}
                  </a>
                  <span className="whitespace-nowrap font-mono text-xs text-ink-faint">
                    {exp.start} – {exp.end}
                  </span>
                </div>
                <p className="mt-1 text-sm font-medium text-ink-muted">
                  {exp.role} · {exp.location}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-ink-muted">
                  {exp.summary}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <Link
              href="/experience"
              className="text-sm font-medium text-ink underline decoration-border-strong underline-offset-4 hover:decoration-accent hover:text-accent-strong"
            >
              Full experience detail →
            </Link>
          </div>
        </Container>
      </section>

      {/* Technical capability */}
      <section className="border-b border-border">
        <Container className="py-20">
          <SectionHeading
            eyebrow="Technical capability"
            title="Tools I've actually shipped with"
            description="Every skill below is backed by a project or internship workstream. See /about for exactly where each one was used."
          />

          <div className="mt-10 grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
            {skills.map((group) => (
              <div key={group.category}>
                <p className="mb-3 font-mono text-xs uppercase tracking-widest text-ink-faint">
                  {group.category}
                </p>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((s) => (
                    <Tag key={s.name}>{s.name}</Tag>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Leadership & achievements */}
      <section className="border-b border-border">
        <Container className="py-20">
          <SectionHeading
            eyebrow="Leadership & achievements"
            title="Beyond the codebase"
          />

          <div className="mt-10 grid gap-8 md:grid-cols-2">
            <div className="border border-border p-7">
              <p className="font-mono text-xs uppercase tracking-widest text-ink-faint">
                Open Source Programming Club, VIT Chennai
              </p>
              <p className="mt-2 font-display text-xl text-ink">
                {latestRole.role}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                Previously Vice Chairperson: led a 250+ member community,
                organized 3 national-level hackathons and 10+ events, and
                helped the club reach #1 among 110+ student clubs at VIT
                Chennai, recognized as Best Tech Club for 2025-26.
              </p>
            </div>

            <div className="border border-border p-7">
              <p className="font-mono text-xs uppercase tracking-widest text-ink-faint">
                Hackathons
              </p>
              <ul className="mt-2 space-y-4">
                {hackathons.map((h) => (
                  <li key={h.name}>
                    <p className="font-display text-lg text-ink">{h.result}</p>
                    <p className="text-sm text-ink-muted">
                      {h.name} · {h.organizer}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-8">
            <Link
              href="/leadership"
              className="text-sm font-medium text-ink underline decoration-border-strong underline-offset-4 hover:decoration-accent hover:text-accent-strong"
            >
              Full leadership & achievements →
            </Link>
          </div>
        </Container>
      </section>

      {/* Education */}
      <section className="border-b border-border">
        <Container className="py-20">
          <SectionHeading eyebrow="Education" title="Academic background" />
          <div className="mt-10 space-y-6">
            {education.map((ed) => (
              <div key={ed.institution} className="flex flex-wrap items-baseline justify-between gap-3 border-b border-border pb-6 last:border-b-0">
                <div>
                  {ed.institutionUrl ? (
                    <a
                      href={ed.institutionUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-display text-xl text-ink hover:text-accent-strong"
                    >
                      {ed.institution}
                    </a>
                  ) : (
                    <p className="font-display text-xl text-ink">{ed.institution}</p>
                  )}
                  <p className="mt-1 text-sm text-ink-muted">{ed.degree}</p>
                </div>
                <span className="font-mono text-xs text-ink-faint">
                  {ed.start ? `${ed.start} – ${ed.end}` : ed.end}
                </span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <ContactSection />
    </>
  );
}
