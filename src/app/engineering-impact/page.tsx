import { PageIntro } from "@/components/ui";
import { ImpactMetrics, ContactSection } from "@/components/sections";
import { impact } from "@/content/career";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("Engineering Impact", "The work behind a 181% user import improvement, 99% platform uptime, daily deployments, and incremental SaaS modernization.", "/engineering-impact");
export default function EngineeringImpactPage() {
  return <><PageIntro label="Engineering impact" title="The work behind the outcomes." description="Selected results from leading engineering teams, improving reliability, and modernizing SaaS platforms. Each outcome comes with its context."/><ImpactMetrics standalone/><section className="impact-stories container" aria-label="Engineering impact stories">{impact.map((item) => <article className="impact-story" key={item.title}><div className="impact-story-summary"><span>{item.metric}</span><h2>{item.title}</h2><p>{item.context}</p></div><div className="impact-story-detail"><div><h3>Challenge</h3><p>{item.challenge}</p></div><div><h3>Action</h3><p>{item.action}</p></div><div><h3>Outcome</h3><p>{item.outcome}</p></div><p className="story-source">Evidence: {item.source}</p></div></article>)}</section><ContactSection/></>;
}
