export function resolveSiteUrl(value: string | undefined): string | undefined {
  if (!value?.trim()) return undefined;
  try {
    const url = new URL(value);
    return url.protocol === "https:" ? url.origin : undefined;
  } catch {
    return undefined;
  }
}

export const site = {
  name: "Neil Nelson",
  identity: "Engineering Manager · .NET & AWS · Builds and ships",
  description: "Neil Nelson is an Engineering Manager with six years leading a SaaS platform team at Absorb Software, a .NET and AWS foundation, and a live marketplace he built himself. Remote across Canada.",
  location: "Calgary, Alberta",
  email: "nelson.neil@gmail.com",
  linkedin: "https://www.linkedin.com/in/neil-n-64bb0019a/",
  github: "https://github.com/neiln",
  resume: "/resume/Neil_Nelson_EM_Resume.pdf",
  resumeDocx: "/resume/Neil_Nelson_EM_Resume.docx",
  availability: "Remote across Canada",
  url: resolveSiteUrl(process.env.NEXT_PUBLIC_SITE_URL),
};

export const navigation = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Impact", href: "/engineering-impact" },
  { label: "Leadership", href: "/leadership" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];
