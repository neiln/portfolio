import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, Check } from "lucide-react";
import { featuredProject, otherProjects } from "@/content/projects";
import { Tags } from "./ui";

export function ProjectGallery() {
  const project = featuredProject;
  const shot = project.screenshots[0];
  return <>
    <article className={`project-card featured-project accent-${project.accent}`}>
      <div className="project-preview project-preview-image">{shot && <Image src={shot.src} alt={shot.alt} width={1600} height={1000} sizes="(max-width: 1020px) 100vw, 640px" priority/>}</div>
      <div className="project-body"><div className="project-meta"><span>{project.category}</span><span className="status status-live"><span/>Live · Edmonton and Calgary</span></div><h3>{project.name}</h3><p>{project.summary}</p><ul className="project-highlights">{["Designed, built, deployed, and operated solo", "Stripe Connect payments and QR-confirmed pickup", "Agent-written code, personally reviewed and released"].map((text) => <li key={text}><Check size={15} aria-hidden="true"/>{text}</li>)}</ul><Tags items={project.technologies.slice(0, 5)}/><div className="project-links"><Link className="project-link" href={`/projects/${project.slug}`} aria-label={`View case study: ${project.name}`}>Read the case study<ArrowRight size={17} aria-hidden="true"/></Link>{project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">Live product<ArrowUpRight size={15} aria-hidden="true"/></a>}</div></div>
    </article>
    <div className="project-row-heading"><h3>Also built</h3><p>Smaller products, tools, and workflows.</p></div>
    <div className="project-row">{otherProjects.map((other) => <Link href={`/projects/${other.slug}`} key={other.slug} className={`project-mini accent-${other.accent}`} aria-label={`View case study: ${other.name}`}><span className="project-mini-top"><small>{other.category}</small>{other.githubUrl && <small className="project-mini-badge">Open source</small>}</span><strong>{other.name}</strong><p>{other.summary}</p><span className="project-mini-stack">{other.technologies.slice(0, 4).join(" · ")}</span></Link>)}</div>
  </>;
}
