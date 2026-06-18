export type ComparisonRow = {
  diy: string;
  reelAxis: string;
};

export const comparisonRows: ComparisonRow[] = [
  { diy: "Random prompting", reelAxis: "Repeatable workflows" },
  { diy: "Individual experimentation", reelAxis: "Team-wide adoption" },
  { diy: "No integrations", reelAxis: "Connected to business tools" },
  { diy: "No owner accountability", reelAxis: "Managed implementation" },
  { diy: "Breaks after the demo", reelAxis: "Maintained and improved" },
  { diy: "Hard to measure", reelAxis: "Reviewed and optimized" },
  {
    diy: "Owner figures it out",
    reelAxis: "Reel Axis guides, builds, and manages",
  },
];

export const diyGoodFor: string[] = [
  "Individual productivity",
  "Drafting",
  "Brainstorming",
  "Research",
  "One-off summaries",
  "Personal workflow experimentation",
];

export const diyBreaksDown: string[] = [
  "Team adoption",
  "Workflow consistency",
  "Security and permissions",
  "Tool integration",
  "Accountability",
  "Measurement",
  "Maintenance",
  "Scaling across departments",
];
