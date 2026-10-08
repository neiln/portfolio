import { PageIntro } from "@/components/ui";
import { ProjectGallery } from "@/components/projects";
import { ContactSection } from "@/components/sections";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("Products & Projects", "Explore CrowHub, BizLink, QR Generator, and Vendor Hub: independent products with reviewed architecture and practical engineering decisions.", "/projects");
export default function ProjectsPage() {
  return <><PageIntro label="Independent product engineering" title="Ideas into working software." description="Selected products that bring together business problems, architectural decisions, and practical implementation."/><section className="container projects-page" aria-label="Selected projects"><ProjectGallery/></section><ContactSection/></>;
}
