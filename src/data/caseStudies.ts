export type CaseStatus = "Example" | "Anonymized" | "Real client";

export type CaseStudy = {
  slug: string;
  title: string;
  businessType: string;
  problem: string;
  tools: string[];
  workflow: string;
  resultType: string;
  status: CaseStatus;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "sales-follow-up",
    title: "Sales follow-up workflow",
    businessType: "Service business",
    problem: "Leads are not followed up with consistently.",
    tools: ["HubSpot", "Gmail", "Google Workspace", "Claude"],
    workflow:
      "New lead summary, qualification notes, follow-up draft, and pipeline summary.",
    resultType: "Faster follow-up and cleaner sales visibility.",
    status: "Example",
  },
  {
    slug: "marketing-repurposing",
    title: "Marketing repurposing workflow",
    businessType: "Professional services company",
    problem: "The team has ideas but does not publish consistently.",
    tools: ["Google Docs", "Canva", "LinkedIn", "Email platform", "Claude"],
    workflow:
      "Turn meeting notes or long-form content into emails, posts, and campaign drafts.",
    resultType: "More consistent content production.",
    status: "Example",
  },
  {
    slug: "finance-review",
    title: "Finance review workflow",
    businessType: "Owner-operated SMB",
    problem:
      "The owner lacks fast visibility into bookkeeping questions and vendor/payment issues.",
    tools: ["QuickBooks", "Email", "Google Sheets", "Claude"],
    workflow:
      "Weekly finance review summary, transaction exceptions, and invoice/payment follow-up drafts.",
    resultType: "Better finance visibility and less manual review.",
    status: "Example",
  },
  {
    slug: "operations-meeting",
    title: "Operations meeting workflow",
    businessType: "Multi-person operations team",
    problem: "Meetings happen but follow-through is inconsistent.",
    tools: ["Google Meet / Zoom", "Google Docs", "Asana / ClickUp / Trello", "Claude"],
    workflow:
      "Meeting summary, action items, task routing, and a weekly open-items review.",
    resultType: "Better accountability and less manual note-taking.",
    status: "Example",
  },
  {
    slug: "weekly-owner-dashboard",
    title: "Weekly owner dashboard",
    businessType: "10–50 person SMB",
    problem: "The owner is the information bottleneck.",
    tools: ["HubSpot", "QuickBooks", "Google Workspace", "Project management tool", "Claude"],
    workflow:
      "Weekly summary across sales, finance, operations, issues, and decisions needed.",
    resultType: "Better owner visibility and faster decision-making.",
    status: "Example",
  },
];
