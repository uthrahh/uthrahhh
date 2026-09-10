import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/Container";
import { Tag } from "@/components/ui";
import { projects, getProject } from "@/lib/data/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.summary,
    openGraph: { title: project.title, description: project.summary },
  };
}

const statusLabel: Record<string, string> = {
  "Shipped internally": "Shipped internally",
  "In progress": "In progress",
  "Proof of concept": "Proof of concept",
  Completed: "Completed",
};

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const next = projects[(currentIndex + 1) % projects.length];

  return (
    <article>
      <div className="border-b border-border">
        <Container className="py-14 sm:py-18">
          <Link
            href="/projects"
            className="text-sm text-ink-muted hover:text-accent-strong"
          >
            ← All projects
          </Link>

          <div className="mt-6 flex flex-wrap items-center gap-2">
            {project.categories.map((c) => (
              <Tag key={c}>{c}</Tag>
            ))}
            <span className="font-mono text-xs uppercase tracking-wide text-ink-faint">
              {statusLabel[project.status]}
            </span>
          </div>

          <h1 className="mt-4 max-w-3xl font-display text-3xl leading-tight text-ink sm:text-5xl">
            {project.title}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-muted">
            {project.summary}
          </p>

          <dl className="mt-10 grid grid-cols-2 gap-6 border-t border-border pt-8 sm:grid-cols-4">
            <div>
              <dt className="font-mono text-xs uppercase tracking-wide text-ink-faint">Role</dt>
              <dd className="mt-1 text-sm text-ink">{project.role}</dd>
            </div>
            <div>
              <dt className="font-mono text-xs uppercase tracking-wide text-ink-faint">Context</dt>
              <dd className="mt-1 text-sm text-ink">{project.context}</dd>
            </div>
            <div>
              <dt className="font-mono text-xs uppercase tracking-wide text-ink-faint">Year</dt>
              <dd className="mt-1 text-sm text-ink">{project.year}</dd>
            </div>
            <div>
              <dt className="font-mono text-xs uppercase tracking-wide text-ink-faint">Links</dt>
              <dd className="mt-1 flex flex-col gap-1">
                {project.links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-accent-strong underline underline-offset-4 hover:text-accent"
                  >
                    {l.label} ↗
                  </a>
                ))}
              </dd>
            </div>
          </dl>
        </Container>
      </div>

      <Container className="grid gap-14 py-14 sm:py-18 lg:grid-cols-[1fr_260px]">
        <div className="max-w-2xl space-y-12 prose-body">
          {project.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="font-display text-2xl text-ink">{section.heading}</h2>
              <div className="mt-4 space-y-4">
                {section.body.map((paragraph, i) => (
                  <p key={i} className="text-base leading-relaxed text-ink-muted">
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>
          ))}
        </div>

        <aside className="space-y-8 lg:border-l lg:border-border lg:pl-8">
          {project.metrics ? (
            <div>
              <p className="mb-3 font-mono text-xs uppercase tracking-widest text-ink-faint">
                Results
              </p>
              <dl className="space-y-4">
                {project.metrics.map((m) => (
                  <div key={m.label}>
                    <dd className="font-display text-lg text-ink">{m.value}</dd>
                    <dt className="text-sm text-ink-muted">{m.label}</dt>
                  </div>
                ))}
              </dl>
            </div>
          ) : null}

          <div>
            <p className="mb-3 font-mono text-xs uppercase tracking-widest text-ink-faint">
              Technologies
            </p>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((t) => (
                <Tag key={t}>{t}</Tag>
              ))}
            </div>
          </div>
        </aside>
      </Container>

      <div className="border-t border-border">
        <Container className="flex items-center justify-between py-8">
          <span className="text-sm text-ink-faint">Next project</span>
          <Link
            href={`/projects/${next.slug}`}
            className="font-display text-lg text-ink hover:text-accent-strong"
          >
            {next.title} →
          </Link>
        </Container>
      </div>
    </article>
  );
}
