import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { getProject, projects } from "@/content/projects";
import { ArchitectureDiagram } from "@/components/architecture";
import { ButtonLink, Tags } from "@/components/ui";
import { ContactSection } from "@/components/sections";
import { pageMetadata } from "@/lib/metadata";

export function generateStaticParams() { return projects.map((project) => ({ slug: project.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const project = getProject((await params).slug);
  if (!project) return {};
  return pageMetadata(`${project.name} Case Study`, project.summary, `/projects/${project.slug}`);
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const project = getProject((await params).slug);
  if (!project) notFound();
  const otherProjects = projects.filter((other) => other.slug !== project.slug);
  const hasShots = project.screenshots.length > 0;
  const contents = [["overview", "Overview"], ["role", "My role"], ["problem", "Problem and solution"], ["decisions", "Engineering decisions"], ["capabilities", "Key capabilities"], ["lessons", "Hard parts"], ["outcomes", "Outcomes and links"]];
  return <><div className={`case-hero container accent-${project.accent}`}><Link href="/projects" className="back-link"><ArrowLeft size={15} aria-hidden="true"/>All projects</Link><div className="case-hero-heading"><div><p className="section-label"><span/>{project.category}</p><h1>{project.name}<span className="accent-text">.</span></h1><p className="case-summary">{project.summary}</p></div><span className={`status ${project.status === "Live" ? "status-live" : ""}`}>{project.status === "Live" && <span/>}{project.status}</span></div>
    {hasShots ? <div className="case-gallery">{project.screenshots.map((shot, i) => <figure key={shot.src}><Image src={shot.src} alt={shot.alt} width={1600} height={1000} sizes={i === 0 ? "(max-width: 1020px) 100vw, 1232px" : "(max-width: 1020px) 100vw, 616px"} priority={i === 0}/><figcaption>{shot.caption}</figcaption></figure>)}</div> : <div className="case-architecture"><ArchitectureDiagram architecture={project.architecture} name={project.name}/><div className="case-architecture-note"><span>Application architecture</span><span>{project.architecture.core}</span></div></div>}
    <Tags items={project.technologies}/></div>
    <div className="case-layout container"><aside className="case-sidebar"><p>In this case study</p><nav aria-label="Case study contents">{contents.map(([id, label]) => <a key={id} href={`#${id}`}>{label}</a>)}</nav><div className="case-sidebar-links">{project.liveUrl && <ButtonLink href={project.liveUrl} external variant="secondary">Live product</ButtonLink>}{project.githubUrl && <ButtonLink href={project.githubUrl} external variant="secondary">View source</ButtonLink>}</div></aside>
    <div className="case-content"><section id="overview"><h2>Overview</h2><p>{project.description}</p></section><section id="role"><h2>My role</h2><p>{project.role}</p></section><section id="problem"><h2>The problem</h2><p>{project.problem}</p><h3>The solution</h3><p>{project.solution}</p>{hasShots && <div className="case-architecture case-architecture-inline"><ArchitectureDiagram architecture={project.architecture} name={project.name}/><div className="case-architecture-note"><span>Application architecture</span><span>{project.architecture.core}</span></div></div>}</section><section id="decisions"><h2>Engineering decisions</h2><div className="decision-list">{project.decisions.map((decision) => <article key={decision.title}><h3>{decision.title}</h3><p>{decision.description}</p></article>)}</div></section><section id="capabilities"><h2>Key capabilities</h2><div className="feature-grid">{project.features.map((feature) => <article key={feature.title}><h3>{feature.title}</h3><p>{feature.description}</p></article>)}</div></section><section id="lessons"><h2>The hard parts</h2><ul className="lesson-list">{project.challenges.map((challenge) => <li key={challenge}>{challenge}</li>)}</ul></section><section id="outcomes"><h2>Outcomes and links</h2><ul className="lesson-list">{project.outcomes.map((outcome) => <li key={outcome}>{outcome}</li>)}</ul><div className="case-actions">{project.liveUrl && <ButtonLink href={project.liveUrl} external>Visit {project.name}</ButtonLink>}{project.githubUrl && <ButtonLink href={project.githubUrl} external variant="secondary">View on GitHub</ButtonLink>}</div>{project.repositoryVisibility === "private" && <p className="case-note">The source repository is private. Happy to walk through the code in an interview.</p>}</section></div></div>
    <section className="container related-projects"><h2>More work</h2><div>{otherProjects.map((other) => <Link href={`/projects/${other.slug}`} key={other.slug}><span><small>{other.category}</small>{other.name}</span><ArrowUpRight size={20} aria-hidden="true"/></Link>)}</div></section><ContactSection/></>;
}
