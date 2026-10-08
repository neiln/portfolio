import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { site } from "@/content/site";

export const metadata: Metadata = {
  metadataBase: site.url ? new URL(site.url) : undefined,
  title: { default: "Neil Nelson — Engineering Leadership & Product Engineering", template: "%s | Neil Nelson" },
  description: site.description,
  authors: [{ name: site.name }],
  keywords: ["Neil Nelson", "Engineering Manager", "Software Development Manager", "Engineering Leadership", "Software Architect", "Technical Lead", "C# .NET", "AWS", "SaaS Engineering", "AI-Assisted Development"],
  alternates: site.url ? { canonical: "/" } : undefined,
  openGraph: { type: "website", locale: "en_CA", siteName: "Neil Nelson", title: "Neil Nelson — Engineering Leadership & Product Engineering", description: site.description, images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Neil Nelson — Building better engineering teams. Delivering better software." }] },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const person = { "@context": "https://schema.org", "@type": "Person", name: site.name, jobTitle: "Software Engineering Leader", description: site.description, ...(site.url ? { url: site.url } : {}), sameAs: [site.github, site.linkedin], email: `mailto:${site.email}`, homeLocation: { "@type": "Place", name: site.location } };
  return <html lang="en" data-scroll-behavior="smooth"><head><link rel="preload" href="/fonts/manrope-latin-wght-normal.woff2" as="font" type="font/woff2" crossOrigin="anonymous"/></head><body><a href="#main-content" className="skip-link">Skip to content</a><Header/><main id="main-content" tabIndex={-1}>{children}</main><Footer/><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(person).replace(/</g, "\\u003c") }}/></body></html>;
}
