import Link from "next/link";
import { Container } from "@/components/Container";
import { navLinks } from "@/lib/nav";
import { site } from "@/lib/data/site";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border">
      <Container className="grid gap-10 py-14 sm:grid-cols-2 md:grid-cols-4">
        <div>
          <p className="font-display text-lg text-ink">{site.name}</p>
          <p className="mt-2 text-sm text-ink-muted">{site.positioning}</p>
        </div>

        <div>
          <p className="mb-3 font-mono text-xs uppercase tracking-widest text-ink-faint">
            Navigate
          </p>
          <ul className="space-y-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-ink-muted hover:text-ink"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="mb-3 font-mono text-xs uppercase tracking-widest text-ink-faint">
            Connect
          </p>
          <ul className="space-y-2">
            <li>
              <a
                href={`mailto:${site.email}`}
                className="text-sm text-ink-muted hover:text-ink"
              >
                {site.email}
              </a>
            </li>
            <li>
              <a
                href={site.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-ink-muted hover:text-ink"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href={site.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-ink-muted hover:text-ink"
              >
                GitHub
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="mb-3 font-mono text-xs uppercase tracking-widest text-ink-faint">
            Legal
          </p>
          <ul className="space-y-2">
            <li>
              <Link href="/privacy" className="text-sm text-ink-muted hover:text-ink">
                Privacy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="text-sm text-ink-muted hover:text-ink">
                Terms
              </Link>
            </li>
          </ul>
        </div>
      </Container>

      <Container className="border-t border-border py-6">
        <p className="text-xs text-ink-faint">
          © {year} {site.name}. Built and maintained independently.
        </p>
      </Container>
    </footer>
  );
}
