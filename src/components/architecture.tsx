import { useId } from "react";
import type { Architecture } from "@/content/projects";

export function ArchitectureDiagram({ architecture, name, compact = false }: { architecture: Architecture; name: string; compact?: boolean }) {
  const id = useId();
  const positions = [18, 164, 310, 456];
  return <div className={`architecture-diagram ${compact ? "compact" : ""}`}><div className="diagram-caption"><span className="diagram-indicator" />System architecture<span className="diagram-caption-right">{name}</span></div><svg className="architecture-svg" viewBox="0 0 610 310" role="img" aria-labelledby={`${id}-title ${id}-desc`}>
    <title id={`${id}-title`}>{`${name} architecture`}</title><desc id={`${id}-desc`}>{architecture.description}</desc>
    <defs><linearGradient id={`${id}-gradient`} x1="0" y1="0" x2="1" y2="1"><stop stopColor="#7775e7" stopOpacity=".16"/><stop offset="1" stopColor="#151622" stopOpacity=".5"/></linearGradient></defs>
    <g fill="none" stroke="currentColor" className="diagram-connectors" strokeWidth="1.5"><path d="M305 76V115"/><path d="M305 173V211H79M305 211H517"/>{positions.map((x) => <path key={x} d={`M${x + 61} 211V237`}/>)}</g>
    <circle cx="305" cy="95" r="3" className="diagram-pulse"/><circle cx="305" cy="211" r="3" className="diagram-pulse"/>
    <rect x="195" y="22" width="220" height="54" rx="10" className="diagram-node"/><text x="305" y="54" textAnchor="middle" className="diagram-node-text">{architecture.entry}</text>
    <rect x="183" y="115" width="244" height="58" rx="10" fill={`url(#${id}-gradient)`} className="diagram-core"/><text x="305" y="149" textAnchor="middle" className="diagram-node-text core-text">{architecture.core}</text>
    {architecture.services.map((service, i) => <g key={service}><rect x={positions[i]} y="237" width="122" height="47" rx="8" className="diagram-node"/><text x={positions[i] + 61} y="265" textAnchor="middle" className="diagram-service-text">{service}</text></g>)}
  </svg><div className="architecture-mobile" role="img" aria-label={architecture.description}><div className="mobile-architecture-node">{architecture.entry}</div><span className="mobile-architecture-connector" aria-hidden="true"/><div className="mobile-architecture-node mobile-architecture-core">{architecture.core}</div><span className="mobile-architecture-connector" aria-hidden="true"/><div className="mobile-architecture-services">{architecture.services.map((service) => <div key={service} className="mobile-architecture-node">{service}</div>)}</div></div></div>;
}

export function LeadershipDiagram() {
  return <div className="leadership-visual"><svg viewBox="0 0 540 500" role="img" aria-labelledby="leadership-diagram-title leadership-diagram-desc"><title id="leadership-diagram-title">Engineering leadership connects people and systems</title><desc id="leadership-diagram-desc">A central engineering leadership node connects people development, software architecture, cloud engineering, and AI-assisted delivery to turn clarity into reliable products.</desc>
    <defs><radialGradient id="leadership-glow"><stop stopColor="#6366f1" stopOpacity=".17"/><stop offset="1" stopColor="#6366f1" stopOpacity="0"/></radialGradient><linearGradient id="leadership-core" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#292846"/><stop offset="1" stopColor="#13131f"/></linearGradient><pattern id="leadership-grid" width="28" height="28" patternUnits="userSpaceOnUse"><circle cx="1" cy="1" r=".7" fill="#717184" opacity=".23"/></pattern></defs>
    <rect width="540" height="500" fill="url(#leadership-grid)"/><circle cx="275" cy="250" r="215" fill="url(#leadership-glow)"/>
    <g fill="none" stroke="#77758e"><circle cx="270" cy="250" r="164" opacity=".16"/><circle cx="270" cy="250" r="120" opacity=".12" strokeDasharray="3 7"/><path d="M270 197V110H164M324 250H424V180M270 303V390H382M216 250H102V316" opacity=".55"/></g>
    <g fill="#a09df6"><circle cx="270" cy="163" r="3"/><circle cx="382" cy="250" r="3"/><circle cx="270" cy="352" r="3"/><circle cx="153" cy="250" r="3"/></g>
    <g className="leadership-node"><rect x="43" y="57" width="204" height="76" rx="12"/><g stroke="#b1adf5" fill="none" strokeWidth="1.5"><circle cx="67" cy="81" r="4"/><path d="M59 97V94C59 87 75 87 75 94V97M76 79a4 4 0 0 1 0 8M79 97v-4"/></g><text x="88" y="86" className="visual-title">People development</text><text x="88" y="108" className="visual-subtitle">Clarity. Coaching. Growth.</text></g>
    <g className="leadership-node"><rect x="333" y="140" width="194" height="76" rx="12"/><g stroke="#9aacf8" fill="none" strokeWidth="1.5"><rect x="351" y="158" width="17" height="10" rx="2"/><rect x="348" y="177" width="10" height="9" rx="1"/><rect x="363" y="177" width="10" height="9" rx="1"/><path d="M359 168V173H352V177M359 173H368V177"/></g><text x="384" y="169" className="visual-title">Architecture</text><text x="384" y="191" className="visual-subtitle">Systems that make sense.</text></g>
    <g className="leadership-node"><rect x="287" y="369" width="221" height="76" rx="12"/><path d="m310 388 3 6 6 3-6 3-3 7-3-7-6-3 6-3zM323 385v8M319 389h8" stroke="#b5b0f5" fill="none" strokeWidth="1.5"/><text x="334" y="398" className="visual-title">AI-assisted delivery</text><text x="334" y="420" className="visual-subtitle">Speed with accountability.</text></g>
    <g className="leadership-node"><rect x="15" y="306" width="198" height="76" rx="12"/><path d="M34 339h20a6 6 0 0 0 0-12 9 9 0 0 0-17-2 7 7 0 0 0-3 14z" stroke="#8eb9c7" fill="none" strokeWidth="1.5"/><text x="69" y="336" className="visual-title">Cloud engineering</text><text x="69" y="358" className="visual-subtitle">Reliable by design.</text></g>
    <rect x="216" y="196" width="108" height="108" rx="25" fill="url(#leadership-core)" stroke="#646183"/><rect x="225" y="205" width="90" height="90" rx="19" fill="none" stroke="#938ce1" strokeOpacity=".14"/><path d="M248 269v-38h9l27 38h8v-38M257 269v-23" fill="none" stroke="#dedbf8" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>
    <text x="270" y="484" textAnchor="middle" className="visual-footer">Good teams. Thoughtful systems. Better outcomes.</text>
  </svg></div>;
}
