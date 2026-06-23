// Content for the AI Employee V2 concept page.
// New model: a $500 done-for-you Pilot as the front door, a done-for-you-lite
// Tier 1 landing pad, plans expressed as "builds per cadence" (credits backstage),
// every build defined as "one job, sized S/M/L," and outcomes proven honestly.

export const v2Cta = { pilot: "/contact", plans: "#plans" };

export const pilot = {
  price: "$500",
  body:
    "We build your first real workflow for you and prove it on one number you already track — booked calls, recovered no-shows, hours back. Love it and the $500 credits 100% toward your plan. No countdown, no lock-in.",
  points: [
    "We build it — you do nothing",
    "Proven on one number, from your own data",
    "The $500 credits toward your plan",
    "No lock-in",
  ],
};

// What a "build" is — defined by the job, sized by scope.
export type BuildSize = {
  size: string;
  test: string;
  example: string;
};

export const buildSizes: BuildSize[] = [
  {
    size: "Small",
    test: "One task or asset — little or no live tool wiring.",
    example: "A customer FAQ, an SOP, “see how AI describes you.”",
  },
  {
    size: "Medium",
    test: "A workflow wired into one or two of your tools.",
    example: "Lead follow-up: email → summary → drafted reply.",
  },
  {
    size: "Large",
    test: "An end-to-end system across several tools, on a schedule.",
    example: "An AI intake assistant, a weekly owner dashboard.",
  },
  {
    size: "Custom",
    test: "Bigger or integration-heavy — scoped with you first.",
    example: "A deep CRM integration, a custom internal tool.",
  },
];

// Plans expressed by cadence of work, not credits.
export type V2Plan = {
  name: string;
  price: string;
  cadence: string;
  line: string;
  best: string;
  badge?: string;
  featured?: boolean;
};

export const v2Plans: V2Plan[] = [
  {
    name: "Tier 1",
    price: "$500",
    cadence: "/mo",
    line: "Your first system, then one improvement a month.",
    best: "Get started done-for-you, without the big commitment.",
  },
  {
    name: "Starter",
    price: "$1,500",
    cadence: "/mo",
    line: "Steady progress — a build every couple of weeks.",
    best: "A first real system across one part of the business.",
  },
  {
    name: "Operator",
    price: "$3,500",
    cadence: "/mo",
    line: "A build a week — real momentum.",
    best: "Ongoing builds across sales, ops, and admin.",
    badge: "Most popular",
    featured: true,
  },
  {
    name: "Department",
    price: "$7,500",
    cadence: "/mo",
    line: "A team's worth — multiple builds or a big system each month.",
    best: "AI across several departments at once.",
  },
];

// How we prove value without overpromising a number.
export const proofTypes: { title: string; body: string }[] = [
  {
    title: "Countable",
    body: "Recovers missed calls, deflects tickets, books meetings — measured on a number you already track.",
  },
  {
    title: "Time back",
    body: "Hours back on a manual task, shown as a conservative range — not a made-up dollar figure.",
  },
  {
    title: "Cost to replace",
    body: "Does the work of a part-time hire, for a fraction of the salary — a comparison you can check.",
  },
];

// Map a build's internal credit size to a customer-facing S/M/L label.
export const sizeLabel: Record<string, string> = {
  "1": "S",
  "3": "M",
  "6": "L",
  Custom: "Custom",
};

export const sizeLegend: { label: string; meaning: string }[] = [
  { label: "S", meaning: "Small — a single task or asset" },
  { label: "M", meaning: "Medium — a workflow in your tools" },
  { label: "L", meaning: "Large — an end-to-end system" },
  { label: "Custom", meaning: "Bigger project, scoped with you" },
];

export type Faq = { q: string; a: string };

export const v2Faqs: Faq[] = [
  {
    q: "What exactly is a “build”?",
    a: "One business job, done for you and kept running — like missed-call recovery or a lead follow-up workflow. Under the hood it's assembled from skills (what the AI knows how to do), connectors (how it reaches into your tools), and your business context. You don't buy parts; you buy the finished job.",
  },
  {
    q: "How do you size a build?",
    a: "By scope. Small = one task or asset. Medium = a workflow wired into one or two of your tools. Large = an end-to-end system across several tools, running on a schedule. Anything bigger is Custom and scoped with you first.",
  },
  {
    q: "How do you prove ROI if my outcome is hard to measure?",
    a: "We start the Pilot on a job whose result you already count — booked calls, recovered no-shows, hours saved. We measure it on your own data, and give you a one-line worksheet so the dollar value uses your numbers, not ours. We never promise a figure we can't show.",
  },
  {
    q: "Do I have to manage credits or pick from a menu each month?",
    a: "No. On a short monthly roadmap call we recommend the highest-value build and handle the rest. You approve; we build.",
  },
  {
    q: "What happens after the Pilot?",
    a: "If it worked, the $500 credits toward your first month and you pick a plan — or stay light on Tier 1. If it didn't, you walk, no lock-in.",
  },
];
