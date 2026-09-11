import Link from "next/link";
import { Container } from "@/components/Container";

export function Footer() {
  return (
    <footer className="border-t border-border pb-20 lg:pb-0">
      <Container className="flex flex-wrap items-center gap-x-6 gap-y-2 py-6 text-xs text-ink-faint">
        <Link href="/privacy" className="hover:text-ink">
          Privacy Policy
        </Link>
        <Link href="/terms" className="hover:text-ink">
          Terms & Conditions
        </Link>
      </Container>
    </footer>
  );
}
