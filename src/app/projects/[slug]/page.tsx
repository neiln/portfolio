import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Check } from "lucide-react";
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
  return <><div className={`case-hero container accent-${project.accent}`}><Link href="/projects" className="back-link"><ArrowLeft size={15} aria-hidden="true"/>All projects</Link><div className="case-hero-heading"><div><p className="section-label"><span/>{project.category}</p><h1>{project.name}<span className="accent-text">.</span></h1><p className="case-summary">{project.summary}</p></div><span className={`status ${project.deploymentVerified ? "status-live" : ""}`}>{project.deploymentVerified && <span/>}{project.status}</span></div><div className="case-architecture"><ArchitectureDiagram architecture={project.architecture} name={project.name}/><div className="case-architecture-note"><span>Reviewed implementation architecture</span><span>October 2026</span></div></div><Tags items={project.technologies}/></div>
    <div className="case-layout container"><aside className="case-sidebar"><p>In this case study</p><nav aria-label="Case study contents">{[["overview", "Product overview"], ["role", "My role"], ["problem", "Problem & solution"], ["decisions", "Engineering decisions"], ["capabilities", "Key capabilities"], ["lessons", "Challenges & lessons"], ["outcomes", "Outcomes & links"]].map(([id, label]) => <a key={id} href={`#${id}`}>{label}</a>)}</nav><div className="case-sidebar-links">{project.liveUrl && <ButtonLink href={project.liveUrl} external variant="secondary">Live product</ButtonLink>}{project.githubUrl && <ButtonLink href={project.githubUrl} external variant="secondary">View source</ButtonLink>}</div></aside>
    <div className="case-content"><section id="overview"><h2>Product overview</h2><p>{project.description}</p></section><section id="role"><h2>My role</h2><p>{project.role}</p></section><section id="problem"><h2>The problem</h2><p>{project.problem}</p><h3>The solution</h3><p>{project.solution}</p></section><section id="decisions"><h2>Engineering decisions</h2><div className="decision-list">{project.decisions.map((decision) => <article key={decision.title}><h3>{decision.title}</h3><p>{decision.description}</p></article>)}</div></section><section id="capabilities"><h2>Key capabilities</h2><div className="feature-grid">{project.features.map((feature) => <article key={feature.title}><span className="feature-state"><Check size={13} aria-hidden="true"/>{feature.state}</span><h3>{feature.title}</h3><p>{feature.description}</p></article>)}</div><p className="case-note">Diagrams represent reviewed architecture. Product screenshots will be added when approved assets are available.</p></section><section id="lessons"><h2>Challenges & engineering lessons</h2><ul className="lesson-list">{project.challenges.map((challenge) => <li key={challenge}>{challenge}</li>)}</ul></section><section id="outcomes"><h2>Outcomes & links</h2><ul className="lesson-list">{project.outcomes.map((outcome) => <li key={outcome}>{outcome}</li>)}</ul><div className="case-actions">{project.liveUrl && <ButtonLink href={project.liveUrl} external>Explore the product</ButtonLink>}{project.githubUrl && <ButtonLink href={project.githubUrl} external variant="secondary">View on GitHub</ButtonLink>}</div><div className="verification-note"><h3>Evidence & project status</h3><p>{project.verification}</p>{project.repositoryVisibility === "private" && <p>The source repository is private. Public source access is not available.</p>}</div></section></div></div>
    <section className="container related-projects"><h2>Explore more work</h2><div>{otherProjects.map((other) => <Link href={`/projects/${other.slug}`} key={other.slug}><span><small>{other.category}</small>{other.name}</span><ArrowUpRight size={20} aria-hidden="true"/></Link>)}</div></section><ContactSection/></>;
}
