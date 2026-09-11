import { NextResponse } from "next/server";
import { XMLParser } from "fast-xml-parser";
import { site } from "@/lib/data/site";
import type { SubstackPost } from "@/lib/types";

export const revalidate = 3600; // re-check the feed at most once an hour

function stripHtml(html: string): string {
  return html
    .replace(/<[^>]*>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function excerpt(html: string, max = 160): string {
  const text = stripHtml(html);
  if (text.length <= max) return text;
  return text.slice(0, max).replace(/\s+\S*$/, "") + "…";
}

export async function GET() {
  try {
    const res = await fetch(site.substackFeed, {
      headers: { "User-Agent": "Mozilla/5.0 (portfolio-site feed reader)" },
      next: { revalidate },
    });

    if (!res.ok) {
      return NextResponse.json({ posts: [] satisfies SubstackPost[] });
    }

    const xml = await res.text();
    const contentType = res.headers.get("content-type") ?? "";
    if (!contentType.includes("xml") && !xml.trim().startsWith("<?xml")) {
      // Not a feed (e.g. redirected to the profile page because no
      // publication exists yet). Treat as "no posts" rather than erroring.
      return NextResponse.json({ posts: [] satisfies SubstackPost[] });
    }

    const parser = new XMLParser({ ignoreAttributes: false });
    const parsed = parser.parse(xml);
    const rawItems = parsed?.rss?.channel?.item;
    const items = Array.isArray(rawItems) ? rawItems : rawItems ? [rawItems] : [];

    const posts: SubstackPost[] = items.slice(0, 3).map((item) => ({
      title: String(item.title ?? "Untitled"),
      url: String(item.link ?? site.substack),
      publishedAt: String(item.pubDate ?? ""),
      excerpt: item.description ? excerpt(String(item.description)) : undefined,
    }));

    return NextResponse.json({ posts });
  } catch {
    // Substack unreachable, network error, malformed feed, etc. The
    // portfolio must not break because of this: degrade to empty.
    return NextResponse.json({ posts: [] satisfies SubstackPost[] });
  }
}
