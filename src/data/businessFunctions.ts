export type FunctionProof = {
  // Illustrative proof-of-concept. Company names and logos are made-up placeholders,
  // clearly labeled "Example" until real, approved client results are supplied.
  // TODO: Replace companyName/businessType/quote/action/result with real client data when available.
  companyName: string; // made-up placeholder client name
  businessType: string; // descriptor under the company name
  logoInitials: string; // monogram for the placeholder logo mark
  logoColor: string; // tailwind bg class for the placeholder logo
  quote: string;
  action: string; // the tangible thing Reel Axis built
  result: string;
};

export type BusinessFunction = {
  slug: string;
  title: string;
  tagline: string;
  workflows: string[];
  proof: FunctionProof;
};

export const businessFunctions: BusinessFunction[] = [
  {
    slug: "sales",
    title: "Sales",
    tagline: "Follow up faster and keep the pipeline clean.",
    workflows: [
      "Lead follow-up drafts",
      "CRM pipeline summaries",
      "Lost-lead reactivation",
      "Proposal drafts",
      "Call note summaries",
      "Sales manager briefing",
    ],
    proof: {
      companyName: "Northpoint Services",
      businessType: "Service business",
      logoInitials: "N",
      logoColor: "bg-[#1f4e79]",
      quote:
        "We stopped losing leads to slow follow-up — every inquiry gets a same-day draft now.",
      action:
        "Built a lead-intake → qualification → follow-up draft workflow wired into HubSpot and Gmail.",
      result: "Faster, more consistent follow-up.",
    },
  },
  {
    slug: "marketing",
    title: "Marketing",
    tagline: "Publish consistently without burning the team out.",
    workflows: [
      "Content calendar drafts",
      "Email campaign drafts",
      "Blog and social repurposing",
      "Canva campaign support",
      "Website content updates",
      "Customer testimonial repurposing",
    ],
    proof: {
      companyName: "Brightway Advisors",
      businessType: "Professional services firm",
      logoInitials: "B",
      logoColor: "bg-[#0f766e]",
      quote: "We finally publish consistently instead of in bursts.",
      action:
        "Turned meeting notes and long-form content into email, social, and campaign drafts.",
      result: "Steadier content output without new headcount.",
    },
  },
  {
    slug: "finance",
    title: "Finance",
    tagline: "Get fast visibility into the numbers that matter.",
    workflows: [
      "QuickBooks transaction review",
      "Invoice matching",
      "Expense categorization support",
      "Cash-flow summary drafts",
      "Vendor and payment follow-up drafts",
      "Monthly finance summary for the owner",
    ],
    proof: {
      companyName: "Larkfield & Co.",
      businessType: "Owner-operated SMB",
      logoInitials: "L",
      logoColor: "bg-[#334155]",
      quote:
        "I get a clear read on the numbers every week without digging through QuickBooks.",
      action:
        "Built a weekly finance review with transaction exceptions and payment follow-up drafts.",
      result: "Better visibility, less manual review.",
    },
  },
  {
    slug: "operations",
    title: "Operations & Reporting",
    tagline: "Turn meetings, projects, and reporting into accountable action.",
    workflows: [
      "Meeting notes and task routing",
      "Weekly operations summary",
      "Project status summaries",
      "Weekly owner & leadership dashboard",
      "SOP drafting",
      "Cross-department summary",
      "KPI narrative and open-issues report",
      "Internal knowledge assistant",
    ],
    proof: {
      companyName: "Meridian Works",
      businessType: "10–50 person SMB",
      logoInitials: "M",
      logoColor: "bg-[#3730a3]",
      quote:
        "Meetings actually turn into follow-through now — and I see the whole business on one page.",
      action:
        "Added meeting summaries, task routing, and a weekly owner dashboard across the team's tools.",
      result: "More accountability and clearer leadership visibility.",
    },
  },
  {
    slug: "admin",
    title: "Admin",
    tagline: "Clear the manual backlog that slows everyone down.",
    workflows: [
      "Inbox triage",
      "Vendor and customer response drafts",
      "Document summaries",
      "Calendar prep",
      "Form intake summaries",
      "Internal FAQ assistant",
    ],
    proof: {
      companyName: "Cedar & Co.",
      businessType: "Multi-location SMB",
      logoInitials: "C",
      logoColor: "bg-[#15803d]",
      quote: "The inbox and intake backlog stopped running our day.",
      action: "Set up inbox triage, response drafts, and document summaries.",
      result: "Hours back each week on manual admin.",
    },
  },
  {
    slug: "customer-service",
    title: "Customer Service",
    tagline: "Respond faster with consistent, on-brand answers.",
    workflows: [
      "Support response drafts",
      "Common issue summaries",
      "Customer history summaries",
      "Escalation routing",
      "Review response drafts",
    ],
    proof: {
      companyName: "Harbor Home Services",
      businessType: "Consumer services company",
      logoInitials: "H",
      logoColor: "bg-[#b45309]",
      quote: "Replies are faster and more consistent, even at peak.",
      action:
        "Built support response drafts and common-issue summaries with escalation routing.",
      result: "Quicker, more consistent customer responses.",
    },
  },
];
