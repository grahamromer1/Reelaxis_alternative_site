// Configurable content for the AI Employee page. Edit pricing, credits, plans,
// categories, and FAQ here — the page renders entirely from this file.

export const bookCallHref = "/contact"; // TODO: swap for a real booking link (e.g. Calendly) when available.
export const auditHref = "/contact";

export const aiEmployeeProblems: string[] = [
  "The owner or team is interested in AI, but nobody actually owns it.",
  "Employees experiment with tools on their own, with no shared structure or playbook.",
  "Know-how lives in people's heads and scattered emails, docs, and folders.",
  "Leads and customers slip through the cracks when follow-up depends on memory.",
  "When customers ask AI assistants for a recommendation, the business is hard to surface.",
  "Repetitive admin eats hours your team should spend on customers and growth.",
  "The business doesn't need a full-time AI hire — but it does need ongoing AI execution.",
];

export type HowItWorksStep = {
  step: number;
  title: string;
  body: string;
  bullets?: string[];
};

export const howItWorks: HowItWorksStep[] = [
  {
    step: 1,
    title: "Monthly AI Roadmap Call",
    body: "Each month we meet with your team to review priorities, pain points, and opportunities — and pick the build that creates the most value.",
    bullets: [
      "What is taking too much time?",
      "Where are leads or customers slipping through the cracks?",
      "What knowledge needs to be organized?",
      "Which build would create the most value this month?",
    ],
  },
  {
    step: 2,
    title: "Choose from the AI Build Menu",
    body: "Pick from a practical menu of builds across marketing, sales, customer intake, operations, finance/reporting, knowledge base, and training.",
  },
  {
    step: 3,
    title: "Use your AI Build Credits",
    body: "Each plan includes monthly credits. Small tasks use 1 credit, meaningful builds use 3, larger systems use 6+. Bigger projects can be quoted separately.",
  },
  {
    step: 4,
    title: "Reel Axis builds and supports it",
    body: "We handle implementation, testing, documentation, and ongoing improvement — no internal AI specialist to hire, train, or manage.",
  },
];

export type CreditRow = {
  size: string;
  bestFor: string;
  examples: string;
};

export const creditTable: CreditRow[] = [
  {
    size: "1 Credit",
    bestFor: "Small asset or improvement",
    examples: "Prompt, SOP, FAQ, checklist, email template, simple audit, short research summary",
  },
  {
    size: "3 Credits",
    bestFor: "Useful business build",
    examples: "Service page, prospect list, intake form, knowledge base section, lead follow-up workflow, CRM tagging plan",
  },
  {
    size: "6 Credits",
    bestFor: "Larger working system",
    examples: "AI intake assistant, outbound engine, company brain starter, proposal drafting system, recurring reporting workflow",
  },
  {
    size: "Custom",
    bestFor: "Bigger project",
    examples: "Full website rebuild, deep CRM integration, full company knowledge base, advanced automation stack, custom internal AI tool",
  },
];

export type Plan = {
  name: string;
  price: string;
  cadence: string;
  credits: string;
  badge?: string;
  bestFor: string;
  includes: string[];
  exampleUses: string[];
  cta: string;
  featured?: boolean;
};

export const plans: Plan[] = [
  {
    name: "AI Starter",
    price: "$1,500",
    cadence: "/month",
    credits: "3 AI Build Credits / month",
    bestFor: "Small businesses that want to start using AI in a structured way without overcommitting.",
    includes: [
      "1 monthly AI Roadmap Call",
      "3 AI Build Credits per month",
      "Light async support",
      "Basic AI roadmap recommendations",
      "Maintenance of simple Reel Axis-built assets",
      "Monthly summary of work completed",
    ],
    exampleUses: [
      "One 3-credit build, like a lead follow-up workflow or service page",
      "Three 1-credit tasks: an SOP, an FAQ, and a prompt guide",
    ],
    cta: "Book a Roadmap Call",
  },
  {
    name: "AI Operator",
    price: "$3,500",
    cadence: "/month",
    credits: "8 AI Build Credits / month",
    badge: "Most Popular",
    featured: true,
    bestFor: "SMBs that want ongoing AI implementation across sales, marketing, operations, knowledge, or intake.",
    includes: [
      "1 monthly AI Roadmap Call + optional mid-month check-in",
      "8 AI Build Credits per month",
      "Ongoing async support",
      "Maintenance of active Reel Axis-built systems",
      "1–2 meaningful builds per month",
      "Light team enablement and documentation",
    ],
    exampleUses: [
      "One 6-credit system plus two 1-credit support items",
      "Two 3-credit builds plus two 1-credit improvements",
    ],
    cta: "Start with AI Operator",
  },
  {
    name: "AI Department",
    price: "$7,500",
    cadence: "/month",
    credits: "18 AI Build Credits / month",
    bestFor: "Larger or more active SMBs that want a recurring AI partner across multiple departments.",
    includes: [
      "Monthly leadership AI Roadmap Call + optional team call",
      "18 AI Build Credits per month",
      "Priority async support",
      "Ongoing maintenance and optimization",
      "Multiple builds or one larger system per month",
      "More involved team training and documentation",
    ],
    exampleUses: [
      "One major 6-credit system plus several 3-credit builds across departments",
      "A larger internal rollout with training, documentation, and support",
    ],
    cta: "Talk to Reel Axis",
  },
];

// Three flexible options that sit alongside the monthly plans.
export const flexibilityOptions: { title: string; price: string; body: string }[] = [
  {
    title: "Extra AI Build Credits",
    price: "From $1,500",
    body: "Need to move faster in a given month? Add credits on top of your plan, priced by volume — no need to upgrade your whole subscription.",
  },
  {
    title: "Custom Build Sprint",
    price: "$5,000–$25,000+",
    body: "For larger projects beyond monthly credit capacity — full AI-ready website rebuilds, advanced CRM integrations, multi-channel outbound engines, or custom internal AI tools.",
  },
  {
    title: "AI Roadmap Audit",
    price: "$1,500–$3,500 one-time",
    body: "Not ready for a monthly plan? Start with an opportunity audit, visibility and data-readiness review, and a recommended 90-day AI roadmap with first builds and credit estimates.",
  },
];

export type CreditCost = "1" | "3" | "6" | "Custom";
export type Build = { name: string; credits: CreditCost; star?: boolean };
export type BuildCategory = {
  iconSlug: string;
  title: string;
  subtitle: string; // plain-language "what you get"
  builds: Build[]; // ~4 shown up front; first with star = "Start here"
  more: string[]; // teaser of the rest
  custom?: boolean; // the open-ended "something specific" card
};

// Legend rows for the credit pills, shaded light -> dark by size.
export const creditLegend: { tag: CreditCost; meaning: string }[] = [
  { tag: "1", meaning: "small asset or improvement" },
  { tag: "3", meaning: "useful business build" },
  { tag: "6", meaning: "larger working system" },
  { tag: "Custom", meaning: "bigger project, quoted separately" },
];

export const buildMenu: BuildCategory[] = [
  {
    iconSlug: "marketing",
    title: "Marketing & visibility",
    subtitle: "Get found, understood, and trusted.",
    builds: [
      { name: "See how AI assistants describe you", credits: "1", star: true },
      { name: "Clean up your website content", credits: "3" },
      { name: "Service & location pages", credits: "3" },
      { name: "An AI-ready website structure", credits: "6" },
    ],
    more: ["Google Business content", "review reply library", "content roadmap"],
  },
  {
    iconSlug: "sales",
    title: "Sales & lead generation",
    subtitle: "Find, qualify, and follow up with leads.",
    builds: [
      { name: "Build a list of ideal prospects", credits: "3", star: true },
      { name: "Win back leads that went cold", credits: "3" },
      { name: "Email & LinkedIn outreach campaign", credits: "3" },
      { name: "An always-on outbound engine", credits: "6" },
    ],
    more: ["lead scoring", "sales scripts", "CRM tagging plan"],
  },
  {
    iconSlug: "customer-service",
    title: "Customer intake & service",
    subtitle: "Respond faster and more consistently.",
    builds: [
      { name: "Smart intake form & questionnaire", credits: "3", star: true },
      { name: "Never miss a new lead", credits: "3" },
      { name: "Customer FAQ & response library", credits: "1" },
      { name: "An AI intake assistant", credits: "6" },
    ],
    more: ["quote request flow", "booking / CRM routing"],
  },
  {
    iconSlug: "operations",
    title: "Operations & admin",
    subtitle: "Cut repetitive internal work.",
    builds: [
      { name: "SOPs & checklists for recurring tasks", credits: "1", star: true },
      { name: "Auto-summarize your meetings", credits: "1" },
      { name: "Tame your inbox with email triage", credits: "3" },
      { name: "Proposal drafting workflow", credits: "6" },
    ],
    more: ["weekly status reports", "vendor quote comparisons", "admin automation"],
  },
  {
    iconSlug: "finance",
    title: "Finance, reporting & data",
    subtitle: "Clean up info and see what matters.",
    builds: [
      { name: "Clean up a messy spreadsheet", credits: "1", star: true },
      { name: "A simple KPI dashboard", credits: "3" },
      { name: "Clean up your CRM data", credits: "3" },
      { name: "Recurring reporting workflow", credits: "6" },
    ],
    more: ["invoice review templates", "report summaries", "data tagging & enrichment"],
  },
  {
    iconSlug: "library",
    title: "Company knowledge base",
    subtitle: "One place for what your team knows.",
    builds: [
      { name: "Company brain starter", credits: "6", star: true },
      { name: "Organize your Google Drive", credits: "3" },
      { name: "SOP & sales-script library", credits: "3" },
      { name: "An internal AI assistant", credits: "6" },
    ],
    more: ["internal FAQ & onboarding guide", "proposal language library", "support answer bank"],
  },
  {
    iconSlug: "lesson",
    title: "Team training & adoption",
    subtitle: "Get your team using AI safely.",
    builds: [
      { name: "A prompt guide for your team", credits: "1", star: true },
      { name: "Safe AI use checklist & policy", credits: "1" },
      { name: "Live team training session", credits: "3" },
      { name: "Role-specific department playbook", credits: "3" },
    ],
    more: ["approved tools list", "role-specific tips", "new-hire AI onboarding"],
  },
  {
    iconSlug: "custom",
    title: "Something specific to your business",
    subtitle: "A bottleneck unique to you.",
    custom: true,
    builds: [],
    more: [],
  },
];

export type Faq = { q: string; a: string };

export const aiEmployeeFaqs: Faq[] = [
  {
    q: "Is this consulting or implementation?",
    a: "Both, but the focus is implementation. We help you decide what to build, then build and maintain it — not just give advice or run generic AI workshops.",
  },
  {
    q: "Do we need to know what AI tools we want?",
    a: "No. You describe the business problem; Reel Axis translates it into the right build — whether that's a workflow, assistant, automation, or knowledge base.",
  },
  {
    q: "What happens during the monthly call?",
    a: "We review your priorities, identify the most valuable opportunity, choose how to use your credits, and confirm the next build.",
  },
  {
    q: "What if we don't use all our credits?",
    a: "Unused AI Build Credits roll over for one month, up to one month of your plan amount. They don't roll over indefinitely — that keeps the plan flexible without unlimited future liability.",
  },
  {
    q: "What's included each month vs. what uses credits?",
    a: "Your subscription covers the monthly roadmap call, light async support, build recommendations and prioritization, minor troubleshooting, maintenance of active Reel Axis-built systems, a monthly summary of completed work, and suggested next builds. Credits are used for new work: new builds, content, and pages; new workflows and automations; new knowledge base sections; training beyond the included call; data cleanup and research projects; and major revisions to existing systems.",
  },
  {
    q: "What falls outside the monthly plan?",
    a: "A few things are quoted separately: urgent turnaround, full website rebuilds, deep integrations and complex CRM migrations, custom software, multi-month systems, and work needing significant third-party vendor coordination.",
  },
  {
    q: "What if a project is bigger than our monthly credits?",
    a: "Larger projects can be broken into phases across months, or quoted as a separate custom build sprint.",
  },
  {
    q: "Can you work with our existing tools?",
    a: "Usually, yes — Google Workspace, Microsoft 365, Slack, CRMs, website platforms, spreadsheets, project management, and document systems. Final scope depends on access, integrations, and complexity.",
  },
  {
    q: "Is this only for technical companies?",
    a: "No. It's built for normal SMBs: service businesses, real estate firms, agencies, contractors, consultants, professional services, and growing teams with repetitive work.",
  },
  {
    q: "Will AI replace our employees?",
    a: "That's not the goal. The goal is to help your team work faster, follow up better, organize information, and reduce repetitive manual tasks.",
  },
  {
    q: "Can we start with a one-time audit?",
    a: "Yes. If you're not ready for a monthly plan, start with an AI Roadmap Audit — we'll identify opportunities and recommend a practical 90-day roadmap.",
  },
];
