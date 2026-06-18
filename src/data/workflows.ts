export type ProcessStep = {
  step: number;
  title: string;
  description: string;
};

export const offerPath: ProcessStep[] = [
  {
    step: 1,
    title: "AI Opportunity Audit",
    description:
      "Map your tools, team workflows, pain points, and the best AI opportunities — so the first build is the highest-value one.",
  },
  {
    step: 2,
    title: "Implementation Sprint",
    description:
      "Build and launch the first practical workflows inside the tools your team already uses.",
  },
  {
    step: 3,
    title: "Managed AI Operations",
    description:
      "Maintain, improve, update, and expand the systems over time as your tools and team change.",
  },
  {
    step: 4,
    title: "Training + Adoption",
    description:
      "Train your team as part of implementation so the systems actually get used, not just demoed.",
  },
];

export const managedOpsIncludes: string[] = [
  "Workflow updates",
  "Prompt tuning",
  "Tool changes",
  "Team training",
  "Adoption support",
  "New workflow builds",
  "Permissions and safety review",
  "Monthly improvement planning",
];

export const platformTools: string[] = [
  "Claude",
  "ChatGPT",
  "Gemini",
  "Microsoft Copilot",
  "Zapier",
  "Make",
  "HubSpot AI",
  "Google Workspace",
  "Microsoft 365",
  "QuickBooks",
  "Canva",
  "DocuSign",
];

// Homepage proof preview — clearly labeled examples, not real client data.
export type ProofPreview = {
  title: string;
  description: string;
};

export const proofPreviews: ProofPreview[] = [
  {
    title: "Sales follow-up workflow",
    description:
      "Lead intake, qualification, draft follow-up, and a clean CRM summary — so leads stop slipping through the cracks.",
  },
  {
    title: "Finance review workflow",
    description:
      "QuickBooks review, invoice matching, and exception flagging that gives the owner fast visibility.",
  },
  {
    title: "Owner dashboard workflow",
    description:
      "A weekly summary across sales, operations, finance, and open tasks — in one place.",
  },
];
