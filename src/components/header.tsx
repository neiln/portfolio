"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { navigation, site } from "@/content/site";

export function Header() {
  const pathname = usePathname();
  return <Navigation key={pathname} pathname={pathname}/>;
}

function Navigation({ pathname }: { pathname: string }) {
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 1021px)");
    const onResize = (event: MediaQueryListEvent) => { if (event.matches) setOpen(false); };
    desktop.addEventListener("change", onResize);
    return () => desktop.removeEventListener("change", onResize);
  }, []);
  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") { setOpen(false); toggle.current?.focus(); }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return <header className="site-header"><div className="header-inner container">
    <Link href="/" className="wordmark" onClick={() => setOpen(false)}><span className="monogram" aria-hidden="true">n<span>.</span></span><span>Neil Nelson<span className="wordmark-sub">Engineering leadership</span></span></Link>
    <nav className="desktop-nav" aria-label="Main navigation">{navigation.map((item) => <Link key={item.href} href={item.href} aria-current={pathname === item.href ? "page" : undefined}>{item.label}</Link>)}</nav>
    <a className="header-resume" href={site.resume} download>Resume <ArrowUpRight size={15} aria-hidden="true" /></a>
    <button ref={toggle} className="menu-toggle" aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(!open)}>{open ? <X size={22} /> : <Menu size={22} />}</button>
  </div>
  {open && <nav className="mobile-nav container" id="mobile-navigation" aria-label="Mobile navigation">{navigation.map((item) => <Link key={item.href} href={item.href} aria-current={pathname === item.href ? "page" : undefined} onClick={() => setOpen(false)}>{item.label}<ArrowUpRight size={16} aria-hidden="true" /></Link>)}<a href={site.resume} download onClick={() => setOpen(false)}>Download resume<ArrowUpRight size={16} aria-hidden="true" /></a></nav>}
  </header>;
}
