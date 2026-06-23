export type NavLink = {
  label: string;
  href: string;
};

export const mainNav: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "The Shortlist", href: "/shortlist" },
  { label: "AI Employee", href: "/ai-employee" },
  { label: "AI Employee V2", href: "/ai-employee-v2" },
  { label: "AI Hire", href: "/ai-hire" },
  { label: "Examples", href: "/examples" },
  { label: "Reel Axis vs DIY", href: "/reel-axis-vs-diy" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const footerServices: NavLink[] = [
  { label: "The Shortlist", href: "/shortlist" },
  { label: "AI Hire", href: "/ai-hire" },
  { label: "AI Employee", href: "/ai-employee" },
  { label: "Examples", href: "/examples" },
  { label: "Reel Axis vs DIY", href: "/reel-axis-vs-diy" },
];

export const footerCompany: NavLink[] = [
  { label: "About", href: "/about" },
  { label: "Reel Axis vs DIY", href: "/reel-axis-vs-diy" },
  { label: "Contact", href: "/contact" },
];

export const primaryCta = {
  label: "Get AI Plan",
  href: "/contact",
};
