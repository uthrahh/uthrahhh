import type { MetadataRoute } from "next";
import { site } from "@/lib/data/site";

export default function robots(): MetadataRoute.Robots {
  const base = site.domain || site.siteUrlFallback;
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${base}/sitemap.xml`,
  };
}
