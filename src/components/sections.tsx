import Link from "next/link";
import { ArrowRight, ArrowUpRight, UsersRound, Layers3, Workflow, Compass, MapPin, CodeXml as Github, BriefcaseBusiness as Linkedin, Mail, Sparkles, Award } from "lucide-react";
import { metrics, leadership, capabilities, aiWorkflow, experience, credentials } from "@/content/career";
import { site } from "@/content/site";
import { SectionHeading, ButtonLink } from "./ui";
import { LeadershipDiagram } from "./architecture";
import { ProjectGallery } from "./projects";

export function Hero() {
  return <section className="hero container" aria-labelledby="hero-title"><div className="hero-copy"><p className="availability"><span />Open to Engineering Manager roles · {site.availability}</p><h1 id="hero-title">Engineering Manager<br/><span>who still ships.</span></h1><p className="hero-description">Six years leading a SaaS platform team at Absorb Software: hiring, coaching, delivery, and the production systems behind every customer onboarding. A .NET and AWS foundation, and a live marketplace I built myself.</p><div className="hero-actions"><ButtonLink href="#impact">See the impact</ButtonLink><ButtonLink href={site.resume} download variant="secondary">Resume (PDF)</ButtonLink></div><div className="hero-social"><span><MapPin size={14} aria-hidden="true"/>{site.location}</span><div><a href={site.github} target="_blank" rel="noopener noreferrer" aria-label="Neil on GitHub"><Github size={18}/></a><a href={site.linkedin} target="_blank" rel="noopener noreferrer" aria-label="Neil on LinkedIn"><Linkedin size={18}/></a><a href={`mailto:${site.email}`} aria-label="Email Neil"><Mail size={18}/></a></div></div></div><div className="hero-visual-wrap"><div className="visual-topline"><span>Engineering leadership, in practice</span><span className="visual-topline-dot"/></div><LeadershipDiagram/></div><div className="hero-bottom"><span>People <span>/</span> Platforms <span>/</span> Products</span><a href="#projects">See what I’ve built<ArrowRight size={14} aria-hidden="true"/></a></div></section>;
}

export function ImpactMetrics({ standalone = false }: { standalone?: boolean }) {
  return <section id="impact" className={`impact-section container ${standalone ? "standalone-metrics" : ""}`} aria-label="Engineering impact">{!standalone && <div className="impact-intro"><h2 id="impact-heading">Engineering impact<span className="accent-text">.</span></h2><p>From the team I led at Absorb Software.</p></div>}<div className="metrics-grid">{metrics.map((item) => <div className="metric" key={item.label}><span className="metric-value">{item.metric}</span><h3>{item.label}</h3><p>{item.context}</p></div>)}</div>{!standalone && <div className="impact-note"><span>Team outcomes, platform reliability, and delivery cadence.</span><Link href="/engineering-impact">The work behind the numbers<ArrowRight size={15} aria-hidden="true"/></Link></div>}</section>;
}

export function ProjectSection() {
  return <section id="projects" className="section container" aria-label="Selected products and projects"><SectionHeading label="Built and shipped" title="What I build when I’m not managing" description="A live marketplace, plus the tools and workflows I built along the way. Agents write a lot of the code. I own the architecture, the review, and the release."/><ProjectGallery/></section>;
}

const pillarIcons = [UsersRound, Layers3, Workflow, Compass];
export function LeadershipSection({ full = false }: { full?: boolean }) {
  return <section id="leadership" className="section leadership-section container"><SectionHeading label="Leadership philosophy" title="How I lead engineering teams" description="Create clarity. Support people. Make sound technical decisions. Help the team deliver work that matters.">{!full && <Link className="text-link" href="/leadership">My approach<ArrowUpRight size={16} aria-hidden="true"/></Link>}</SectionHeading><div className="leadership-grid">{leadership.map((pillar, i) => { const Icon = pillarIcons[i]; return <article className="pillar" key={pillar.title}><div className="pillar-icon"><Icon size={22} strokeWidth={1.5} aria-hidden="true"/></div><h3>{pillar.title}</h3><p>{pillar.summary}</p>{full && <ul>{pillar.details.map((detail) => <li key={detail}>{detail}</li>)}</ul>}</article>; })}</div></section>;
}

export function CapabilitiesSection() {
  return <section id="capabilities" className="section capabilities-section container"><SectionHeading label="Technical foundation" title="Engineering capabilities" description="A .NET and AWS foundation, shaped by production ownership, team leadership, and products I’ve shipped on my own."/><div className="capability-grid">{capabilities.map((group) => <article className="capability" key={group.title}><h3>{group.title}</h3><p>{group.context}</p><ul>{group.items.map((item) => <li key={item}>{item}</li>)}</ul></article>)}</div></section>;
}

export function AiSection({ full = false }: { full?: boolean }) {
  return <section id="ai" className="section container"><div className={`ai-panel ${full ? "ai-panel-full" : ""}`}><div className="ai-intro"><p className="section-label"><Sparkles size={15} aria-hidden="true"/>Leading in the AI era</p><h2>Agents write the code.<br/>I own the outcome.</h2><p>I’ve run AI-assisted delivery end to end on a production product, so I know where coding agents save weeks and where they quietly create risk. That is the judgment I bring to a team adopting them: what to delegate, what to review, and what never ships without a human reading it.</p><div className="ai-tools"><span>Claude Code</span><span>OpenAI Codex</span><span>GitHub Copilot</span><span>Hugging Face Agents certified</span></div>{!full && <Link className="text-link" href="/leadership#ai">How I run it<ArrowRight size={15} aria-hidden="true"/></Link>}</div><div className="ai-workflow"><ol>{aiWorkflow.map((step, i) => <li key={step}><span>{String(i + 1).padStart(2, "0")}</span>{step}</li>)}</ol></div></div></section>;
}

export function AboutPreview() {
  return <section id="about" className="section about-preview container"><div><p className="section-label"><span/>The person behind the work</p><h2>Making complex<br/>software simpler.</h2></div><div><p>I’m Neil, an engineering manager based in Calgary. I spent six years at Absorb Software leading the team behind the customer data and integrations platform, and before that led integration and product teams at Honeywell and CannAmm.</p><p>What drives me is helping engineers grow, making thoughtful technical choices, and shipping products that solve real problems.</p><Link href="/about" className="text-link">More about me<ArrowUpRight size={16} aria-hidden="true"/></Link></div></section>;
}

export function ExperienceSection() {
  return <section className="section container experience-section"><SectionHeading label="Professional experience" title="Leadership grounded in delivery" description="Fourteen years across SaaS, industrial software, and operational platforms."/><div className="experience-list">{experience.map((job) => <article key={job.organization} className="experience-row"><div className="experience-company"><h3>{job.organization}</h3><p>{job.dates}</p><span>{job.environment}</span></div><div><h4>{job.role}</h4><p>{job.summary}</p><ul>{job.achievements.map((achievement) => <li key={achievement}>{achievement}</li>)}</ul></div></article>)}<p className="experience-earlier">Earlier: software development roles before 2012.</p></div></section>;
}

export function CredentialsSection() {
  return <section className="section container credentials-section" aria-label="Education and certifications"><SectionHeading label="Education and certifications" title="Credentials"/><ul className="credential-list">{credentials.map((item) => <li key={item.title}><Award size={16} strokeWidth={1.5} aria-hidden="true"/><span><strong>{item.title}</strong><small>{item.issuer} · {item.year}</small></span></li>)}</ul></section>;
}

export function ContactSection() {
  return <section id="contact" className="contact-section container"><div className="contact-glow" aria-hidden="true"/><p className="section-label"><span/>Let’s connect</p><h2>Let’s build something<br/>meaningful<span className="accent-text">.</span></h2><p>I’m looking for an Engineering Manager role where I can grow a team, own delivery, and keep a platform reliable while it changes.</p><div className="contact-actions"><ButtonLink href={`mailto:${site.email}`} label="Email Neil">Email me<ArrowUpRight className="button-extra-icon" size={16} aria-hidden="true"/></ButtonLink><ButtonLink href={site.linkedin} variant="secondary" external>Connect on LinkedIn</ButtonLink></div><span className="contact-location"><MapPin size={14} aria-hidden="true"/>{site.location} · {site.availability}</span></section>;
}
