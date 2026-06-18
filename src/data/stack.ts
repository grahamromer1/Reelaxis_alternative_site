// How Reel Axis turns AI into a working business system: a capable model, wrapped
// in a "harness" (context, skills, and tools/connectors), connected to the apps
// you already use — so work happens in one place instead of ten logins ("headless").

export const claudePartnerProgram = true; // Reel Axis is a member of the Claude Partner Program.

export const aiModels: string[] = [
  "Claude (our default)",
  "ChatGPT",
  "Gemini",
];

// The harness is what turns a raw model into a reliable system.
export type HarnessPillar = {
  icon: "context" | "skills" | "tools";
  title: string;
  description: string;
  examples: string[];
};

export const harnessPillars: HarnessPillar[] = [
  {
    icon: "context",
    title: "Context",
    description:
      "Your knowledge, documents, and data — so the AI understands how your business actually works.",
    examples: [
      "Company knowledge base",
      "SOPs & playbooks",
      "Past projects & emails",
      "Brand & product info",
    ],
  },
  {
    icon: "skills",
    title: "Skills",
    description:
      "Repeatable, packaged procedures the AI runs the same way every time — like an SOP it can execute.",
    examples: [
      "Proposal drafting",
      "Weekly reporting",
      "Lead follow-up",
      "Meeting summaries",
    ],
  },
  {
    icon: "tools",
    title: "Tools & Connectors",
    description:
      "Secure access through MCP and connectors so the AI can act inside the apps you already use.",
    examples: [
      "MCP servers",
      "HubSpot / Salesforce",
      "Google Workspace",
      "QuickBooks",
      "Slack",
      "Zapier / Make",
    ],
  },
];

// What the harness connects to — your existing tools stay the system of record.
export const businessTools: string[] = [
  "HubSpot / Salesforce",
  "QuickBooks",
  "Stripe",
  "Google Workspace",
  "Microsoft 365",
  "Slack",
  "Notion / Drive",
  "Email & calendar",
  "Project management",
  "Your CRM & docs",
];
