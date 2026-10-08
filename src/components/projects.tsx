"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { ArrowRight, ArrowUpRight, Check } from "lucide-react";
import { projects, type Project } from "@/content/projects";
import { ArchitectureDiagram } from "./architecture";
import { Tags } from "./ui";

function ProjectCard({ project, featured = false }: { project: Project; featured?: boolean }) {
  return <article className={`project-card accent-${project.accent} ${featured ? "featured-project" : ""}`}>
    <div className="project-preview"><ArchitectureDiagram architecture={project.architecture} name={project.name} compact={!featured}/><span className="preview-label">Architecture preview</span></div>
    <div className="project-body"><div className="project-meta"><span>{project.category}</span><span className={`status ${project.deploymentVerified ? "status-live" : ""}`}>{project.deploymentVerified && <span />}{project.status}</span></div><h3>{project.name}</h3><p>{project.summary}</p>{featured && <ul className="project-highlights">{["End-to-end product ownership", "Payments & marketplace workflows", "AI-assisted implementation, personally reviewed"].map((text) => <li key={text}><Check size={15} aria-hidden="true"/>{text}</li>)}</ul>}<Tags items={project.technologies.slice(0, featured ? 5 : 3)}/><div className="project-links"><Link className="project-link" href={`/projects/${project.slug}`} aria-label={`View case study: ${project.name}`}>View case study<ArrowRight size={17} aria-hidden="true"/></Link>{project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">Live product<ArrowUpRight size={15} aria-hidden="true"/></a>}{project.githubUrl && <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">Source<ArrowUpRight size={15} aria-hidden="true"/></a>}</div></div>
  </article>;
}

export function ProjectGallery() {
  const [filter, setFilter] = useState("All work");
  const reducedMotion = useReducedMotion();
  const filtered = projects.filter((project) => filter === "All work" || project.group === filter);
  return <><div className="project-toolbar"><div className="project-filters" aria-label="Filter projects">{["All work", "Products", "Tools", "Workflows"].map((item) => <button key={item} onClick={() => setFilter(item)} aria-pressed={item === filter}>{filter === item && <motion.span className="filter-background" layoutId="project-filter" transition={{ duration: reducedMotion ? 0 : .18 }}/>}<span>{item}</span></button>)}</div><p className="project-count" aria-live="polite">{filtered.length} selected projects</p></div><div className="project-grid">{filtered.map((project) => <ProjectCard key={project.slug} project={project} featured={project.slug === "crowhub"} />)}</div></>;
}
