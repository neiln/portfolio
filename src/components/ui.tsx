import Link from "next/link";
import { ArrowRight, ArrowUpRight, Download } from "lucide-react";
import type { ReactNode } from "react";

export function ButtonLink({ href, children, variant = "primary", download, external, label }: { href: string; children: ReactNode; variant?: "primary" | "secondary" | "text"; download?: boolean; external?: boolean; label?: string }) {
  return <Link href={href} className={`button button-${variant}`} download={download} target={external ? "_blank" : undefined} rel={external ? "noopener noreferrer" : undefined} aria-label={label}>{children}{download ? <Download size={16} aria-hidden="true" /> : external ? <ArrowUpRight size={16} aria-hidden="true" /> : <ArrowRight size={16} aria-hidden="true" />}</Link>;
}

export function SectionHeading({ label, title, description, children }: { label?: string; title: string; description?: string; children?: ReactNode }) {
  return <div className="section-heading"><div>{label && <p className="section-label"><span />{label}</p>}<h2>{title}</h2>{description && <p className="section-description">{description}</p>}</div>{children}</div>;
}

export function PageIntro({ label, title, description }: { label: string; title: string; description: string }) {
  return <div className="page-intro container"><p className="section-label"><span />{label}</p><h1>{title}</h1><p>{description}</p></div>;
}

export function Tags({ items }: { items: string[] }) {
  return <ul className="tags" aria-label="Technologies">{items.map((item) => <li key={item}>{item}</li>)}</ul>;
}
