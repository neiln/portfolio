import type { MetadataRoute } from "next";
import { site, navigation } from "@/content/site";
import { projects } from "@/content/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  if (!site.url) return [];
  return [...navigation.map((item) => item.href), ...projects.map((project) => `/projects/${project.slug}`)].map((path) => ({ url: `${site.url}${path}`, changeFrequency: "monthly", priority: path === "/" ? 1 : .8 }));
}
