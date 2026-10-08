import Link from "next/link";
import { ArrowRight, ArrowUpRight, UsersRound, Layers3, Workflow, Compass, MapPin, CodeXml as Github, BriefcaseBusiness as Linkedin, Mail, Sparkles } from "lucide-react";
import { impact, leadership, capabilities, aiWorkflow, experience } from "@/content/career";
import { site } from "@/content/site";
import { SectionHeading, ButtonLink } from "./ui";
import { LeadershipDiagram } from "./architecture";
import { ProjectGallery } from "./projects";

export function Hero() {
  return <section className="hero container" aria-labelledby="hero-title"><div className="hero-copy"><p className="availability"><span />Open to engineering leadership opportunities</p><h1 id="hero-title">Building Better{" "}<br/>Engineering Teams.{" "}<br/><span>Delivering Better{" "}<br/>Software.</span></h1><p className="hero-description">I bring people, architecture, and product thinking together to build reliable software—and the teams behind it.</p><div className="hero-actions"><ButtonLink href="#projects">Explore my work</ButtonLink><ButtonLink href={site.resume} download variant="secondary">View my resume</ButtonLink></div><div className="hero-social"><span><MapPin size={14} aria-hidden="true"/>{site.location}</span><div><a href={site.github} target="_blank" rel="noopener noreferrer" aria-label="Neil on GitHub"><Github size={18}/></a><a href={site.linkedin} target="_blank" rel="noopener noreferrer" aria-label="Neil on LinkedIn"><Linkedin size={18}/></a><a href={`mailto:${site.email}`} aria-label="Let’s talk: email Neil"><Mail size={18}/></a></div></div></div><div className="hero-visual-wrap"><div className="visual-topline"><span>Engineering leadership, in practice</span><span className="visual-topline-dot"/></div><LeadershipDiagram/></div><div className="hero-bottom"><span>Engineering Leader <span>/</span> Software Architect <span>/</span> AI-Assisted Product Builder</span><a href="#impact">Explore the impact<ArrowRight size={14} aria-hidden="true"/></a></div></section>;
}

export function ImpactMetrics({ standalone = false }: { standalone?: boolean }) {
  return <section id="impact" className={`impact-section container ${standalone ? "standalone-metrics" : ""}`} aria-label="Engineering impact">{!standalone && <div className="impact-intro"><h2 id="impact-heading">Engineering impact<span className="accent-text">.</span></h2><p>Better systems. Measurable outcomes.</p></div>}<div className="metrics-grid">{impact.map((item) => <div className="metric" key={item.label}><span className="metric-value">{item.metric}</span><h3>{item.label}</h3><p>{item.context}</p></div>)}</div>{!standalone && <div className="impact-note"><span>Selected outcomes from SaaS leadership and modernization.</span><Link href="/engineering-impact">The work behind the numbers<ArrowRight size={15} aria-hidden="true"/></Link></div>}</section>;
}

export function ProjectSection() {
  return <section id="projects" className="section container" aria-label="Selected products and projects"><SectionHeading label="Independent product engineering" title="Selected products & projects" description="Ideas brought to life through thoughtful architecture, practical engineering, and AI-assisted development."/><ProjectGallery/></section>;
}

const pillarIcons = [UsersRound, Layers3, Workflow, Compass];
export function LeadershipSection({ full = false }: { full?: boolean }) {
  return <section id="leadership" className="section leadership-section container"><SectionHeading label="Leadership philosophy" title="How I lead engineering teams" description="Create clarity. Support people. Make sound technical decisions. Help the team deliver work that matters.">{!full && <Link className="text-link" href="/leadership">My approach<ArrowUpRight size={16} aria-hidden="true"/></Link>}</SectionHeading><div className="leadership-grid">{leadership.map((pillar, i) => { const Icon = pillarIcons[i]; return <article className="pillar" key={pillar.title}><div className="pillar-icon"><Icon size={22} strokeWidth={1.5} aria-hidden="true"/></div><h3>{pillar.title}</h3><p>{pillar.summary}</p>{full && <ul>{pillar.details.map((detail) => <li key={detail}>{detail}</li>)}</ul>}</article>; })}</div></section>;
}

export function CapabilitiesSection() {
  return <section id="capabilities" className="section capabilities-section container"><SectionHeading label="Technical foundation" title="Engineering capabilities" description="A .NET and AWS foundation, shaped by production engineering, team leadership, and independently delivered products."/><div className="capability-grid">{capabilities.map((group) => <article className="capability" key={group.title}><h3>{group.title}</h3><p>{group.context}</p><ul>{group.items.map((item) => <li key={item}>{item}</li>)}</ul></article>)}</div><p className="capability-note">Experience varies by technology and context. These groups distinguish hands-on engineering, technical oversight, and independent product work.</p></section>;
}

export function AiSection({ full = false }: { full?: boolean }) {
  return <section id="ai" className="section container"><div className={`ai-panel ${full ? "ai-panel-full" : ""}`}><div className="ai-intro"><p className="section-label"><Sparkles size={15} aria-hidden="true"/>Engineering in the AI era</p><h2>Faster implementation.<br/>Thoughtful engineering.</h2><p>I use coding agents to explore solutions and accelerate delivery. I stay responsible for the architecture, security, correctness, and quality.</p><div className="ai-tools"><span>OpenAI Codex</span><span>Claude</span><span>GitHub Copilot</span></div>{!full && <Link className="text-link" href="/leadership#ai">See my workflow<ArrowRight size={15} aria-hidden="true"/></Link>}</div><div className="ai-workflow"><ol>{aiWorkflow.map((step, i) => <li key={step}><span>{String(i + 1).padStart(2, "0")}</span>{step}</li>)}</ol></div></div></section>;
}

export function AboutPreview() {
  return <section id="about" className="section about-preview container"><div><p className="section-label"><span/>The person behind the work</p><h2>Making complex<br/>software simpler.</h2></div><div><p>I’m Neil, an engineering leader based in Calgary. My background spans enterprise software, SaaS platforms, integration systems, and independent product engineering.</p><p>What drives me is helping engineers grow, making thoughtful technical choices, and delivering products that solve meaningful problems.</p><Link href="/about" className="text-link">More about me<ArrowUpRight size={16} aria-hidden="true"/></Link></div></section>;
}

export function ExperienceSection() {
  return <section className="section container experience-section"><SectionHeading label="Professional experience" title="Leadership grounded in delivery" description="Selected roles and accomplishments, verified against my résumé."/><div className="experience-list">{experience.map((job) => <article key={job.organization} className="experience-row"><div className="experience-company"><h3>{job.organization}</h3><p>{job.dates}</p><span>{job.environment}</span></div><div><h4>{job.role}</h4><p>{job.summary}</p><ul>{job.achievements.map((achievement) => <li key={achievement}>{achievement}</li>)}</ul></div></article>)}</div></section>;
}

export function ContactSection() {
  return <section id="contact" className="contact-section container"><div className="contact-glow" aria-hidden="true"/><p className="section-label"><span/>Let’s connect</p><h2>Let’s build something<br/>meaningful<span className="accent-text">.</span></h2><p>I’m interested in engineering leadership opportunities where I can help teams deliver reliable software and turn complex challenges into business outcomes.</p><div className="contact-actions"><ButtonLink href={`mailto:${site.email}`} label="Let’s talk: email Neil">Let’s talk<ArrowUpRight className="button-extra-icon" size={16} aria-hidden="true"/></ButtonLink><ButtonLink href={site.linkedin} variant="secondary" external>Connect on LinkedIn</ButtonLink></div><span className="contact-location"><MapPin size={14} aria-hidden="true"/>Calgary, Canada · Open to remote roles and relocation</span></section>;
}
