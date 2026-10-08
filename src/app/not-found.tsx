import { ButtonLink } from "@/components/ui";

export default function NotFound() { return <div className="not-found container"><p className="section-label"><span/>404 · Page not found</p><h1>That page isn’t here.</h1><p>Explore the projects, or return to the homepage.</p><ButtonLink href="/projects">Explore projects</ButtonLink></div>; }
