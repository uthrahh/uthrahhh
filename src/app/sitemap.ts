import type { MetadataRoute } from "next";
import { projects } from "@/lib/data/projects";
import { site } from "@/lib/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.domain || site.siteUrlFallback;

  const staticRoutes = [
    "",
    "/projects",
    "/experience",
    "/leadership",
    "/about",
    "/privacy",
    "/terms",
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
  }));

  const projectRoutes = projects.map((p) => ({
    url: `${base}/projects/${p.slug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...projectRoutes];
}
