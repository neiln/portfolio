import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { site } from "@/content/site";

export function Footer() {
  return <footer className="site-footer container"><div><Link href="/" className="footer-name">Neil Nelson<span className="accent-text">.</span></Link><p>People. Systems. Products.</p></div><nav aria-label="Footer navigation"><a href={site.github} target="_blank" rel="noopener noreferrer">GitHub<ArrowUpRight size={13} aria-hidden="true" /></a><a href={site.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn<ArrowUpRight size={13} aria-hidden="true" /></a><a href={`mailto:${site.email}`}>Email<ArrowUpRight size={13} aria-hidden="true" /></a><a href={site.resume} download>Resume<ArrowUpRight size={13} aria-hidden="true" /></a></nav><div className="footer-bottom"><span>© {new Date().getFullYear()} Neil Nelson</span><span>Built with intention. Based in Calgary, Canada.</span></div></footer>;
}
