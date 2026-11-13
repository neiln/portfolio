import { PageIntro } from "@/components/ui";
import { ImpactMetrics, ContactSection } from "@/components/sections";
import { impact } from "@/content/career";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("Engineering Impact", "How Neil Nelson built and ran a SaaS platform team at Absorb Software: hiring, outage elimination, a 2.8× import speedup, and daily deployments.", "/engineering-impact");
export default function EngineeringImpactPage() {
  return <><PageIntro label="Engineering impact" title="The work behind the numbers." description="Four stories from six years leading the customer data and integrations platform team at Absorb Software. Each one has the challenge, what I did, and what changed."/><ImpactMetrics standalone/><section className="impact-stories container" aria-label="Engineering impact stories">{impact.map((item) => <article className="impact-story" key={item.title}><div className="impact-story-summary"><span>{item.metric}</span><h2>{item.title}</h2><p>{item.context}</p></div><div className="impact-story-detail"><div><h3>Challenge</h3><p>{item.challenge}</p></div><div><h3>What I did</h3><p>{item.action}</p></div><div><h3>Outcome</h3><p>{item.outcome}</p></div></div></article>)}</section><ContactSection/></>;
}
