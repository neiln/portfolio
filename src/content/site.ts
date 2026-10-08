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
  identity: "Engineering Leader | Software Architect | AI-Assisted Product Builder",
  description: "Engineering leader building better teams and reliable software. Explore Neil Nelson’s SaaS modernization, architecture, and AI-assisted product engineering work.",
  location: "Calgary, Alberta",
  email: "nelson.neil@gmail.com",
  linkedin: "https://www.linkedin.com/in/neil-n-64bb0019a/",
  github: "https://github.com/neiln",
  resume: "/resume/Neil_Nelson_EM_Resume.docx",
  url: resolveSiteUrl(process.env.NEXT_PUBLIC_SITE_URL),
};

export const navigation = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Engineering Impact", href: "/engineering-impact" },
  { label: "Leadership", href: "/leadership" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];
