import { PageIntro } from "@/components/ui";
import { LeadershipSection, AiSection, ExperienceSection, ContactSection } from "@/components/sections";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("Engineering Leadership", "Neil Nelson’s approach to people development, engineering quality, predictable delivery, technical strategy, and responsible AI-assisted software development.", "/leadership");
export default function LeadershipPage() {
  return <><PageIntro label="People, product, and engineering" title="Good engineering starts with good teams." description="My role is to create the clarity, environment, and engineering practices that help people succeed—while balancing product priorities, technical quality, and operational reliability."/><LeadershipSection full/><div className="leadership-quote container"><blockquote>AI accelerates implementation. Engineering judgment determines whether the software is reliable, maintainable, and fit for purpose.</blockquote><p>How I approach modern product engineering</p></div><AiSection full/><ExperienceSection/><ContactSection/></>;
}
