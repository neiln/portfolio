import type { Metadata } from "next";
import { site } from "@/content/site";

export function pageMetadata(title: string, description: string, path: string): Metadata {
  return { title, description, alternates: site.url ? { canonical: path } : undefined, openGraph: { title: `${title} | Neil Nelson`, description, ...(site.url ? { url: path } : {}), images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Neil Nelson — Engineering Leadership & Product Engineering" }] }, twitter: { card: "summary_large_image", title: `${title} | Neil Nelson`, description } };
}
