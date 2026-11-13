import { PageIntro } from "@/components/ui";
import { ProjectGallery } from "@/components/projects";
import { ContactSection } from "@/components/sections";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("Products & Projects", "CrowHub, a live local-commerce marketplace Neil Nelson built and operates, plus the tools and workflows built along the way.", "/projects");
export default function ProjectsPage() {
  return <><PageIntro label="Built and shipped" title="Ideas into working software." description="Managers who still build make better calls about scope, risk, and what a team can actually ship. This is the work I do to stay sharp."/><section className="container projects-page" aria-label="Selected projects"><ProjectGallery/></section><ContactSection/></>;
}
