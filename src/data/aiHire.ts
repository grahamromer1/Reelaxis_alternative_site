// Content for the AI Hire page — the "fractional AI builder you hire" spine.
// Reframes the V2 concept: Reel Axis is the hire (the builder), not the bot.

export const aiHireCta = { pilot: "/contact", plans: "#plans" };

export const aiHireHero = {
  whoFor:
    "Built for owner-run businesses of 3–25 who know AI matters but have no one to build it.",
  trust:
    "Everything we build runs in your own tools and stays yours — we're your builder, not a service you're locked into.",
};

export const theGap = {
  title: "You know AI matters. You just have no one to build it.",
  body:
    "A full-time AI hire is a $150K bet you can't justify yet. Reel Axis is that hire — by the build. We scope the highest-value job, build it into your own tools, prove it on a number you already count, and keep it running.",
};

export const pilot = {
  price: "$500",
  body:
    "Your first build — a trial run with your AI hire. We build one real workflow for you and prove it on a number you already track. Love it and the $500 credits toward your first month. No countdown, no lock-in.",
  note: "One-time — credits toward your first month.",
  points: [
    "We build it — you do nothing",
    "Proven on one number, from your own data",
    "Lives in your tools and stays yours",
    "The $500 credits toward your plan",
  ],
};

export type BuildSize = { size: string; test: string; example: string };
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

export type Plan = {
  name: string;
  price: string;
  cadence: string;
  line: string;
  best: string;
  note?: string;
  badge?: string;
  featured?: boolean;
};
export const plans: Plan[] = [
  {
    name: "Light",
    price: "$500",
    cadence: "/mo",
    line: "Your first system, then one improvement a month.",
    best: "Get started done-for-you, without the big commitment.",
    note: "Different from the one-time $500 Pilot — this is your ongoing plan after it.",
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
    body: "Does the work of a hire, for a fraction of the salary — and it never clocks out.",
  },
];

export const menuReassurance =
  "Don't worry about picking — on your roadmap call we point you to the highest-value build first. The menu just shows what's possible.";

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
export const aiHireFaqs: Faq[] = [
  {
    q: "Do I own what you build? What if we part ways?",
    a: "Yes. Builds live in your own tools and accounts and stay yours. We maintain them while you're on a plan; if you leave, the work doesn't vanish — there's nothing to be locked into.",
  },
  {
    q: "Why hire you instead of building it myself?",
    a: "You could — but you won't get around to it, and DIY builds break the moment they need to run unattended at scale. We bring the depth, wire it into your tools properly, and own the maintenance so it keeps working. (If you're technical and want to resell what we build, let's talk — that's a partner conversation.)",
  },
  {
    q: "What exactly is a “build”?",
    a: "One business job, done for you and kept running — like missed-call recovery or a lead follow-up workflow. Under the hood it's skills, connectors, and your business context wired together. You buy the finished job, not the parts.",
  },
  {
    q: "How do you prove ROI if my outcome is hard to measure?",
    a: "We start the Pilot on a job whose result you already count — booked calls, recovered no-shows, hours saved. We measure it on your own data and hand you a worksheet so the dollar value uses your numbers, not ours. We never promise a figure we can't show.",
  },
  {
    q: "Do I have to manage anything or pick from a menu each month?",
    a: "No. On a short monthly roadmap call we recommend the highest-value build and handle the rest. You approve; we build. Nothing to operate.",
  },
  {
    q: "What happens after the Pilot?",
    a: "If it worked, the $500 credits toward your first month and you pick a plan — or stay light. If it didn't, you walk, no lock-in.",
  },
];

// The partnership arc — how the relationship grows over time.
export const journeyIntro = {
  headline: "You don't need an AI strategy. You need someone to build it — one step at a time.",
  sub: "Most businesses we work with start with one job and grow from there. Here's the path, at your pace — you never buy more than the next step.",
};

export type Phase = {
  num: string;
  name: string;
  headline: string;
  body: string;
  get: string;
  feeling: string;
};

export const journey: Phase[] = [
  {
    num: "01",
    name: "Audit & Connect",
    headline: "We find where AI actually pays.",
    body: "We map how your business runs, wire up your tools and data, and ship your first build — proven on a number you already track.",
    get: "A map of your best AI opportunities, plus your first build, live.",
    feeling: "Someone finally gets my business and shows me where to start.",
  },
  {
    num: "02",
    name: "Build & Operate",
    headline: "We become the AI team you don't have to hire.",
    body: "On a simple monthly rhythm we build the next job, then the next — and become your single source of AI truth.",
    get: "A steady cadence of builds — plus a living AI Playbook of everything we run.",
    feeling: "I don't chase AI tools anymore — I just ask Reel Axis.",
  },
  {
    num: "03",
    name: "Unlock & Elevate",
    headline: "Your team stops doing busywork and starts doing its best work.",
    body: "With the repetitive work handled, your people move up — and you take on what the business couldn't do before.",
    get: "Freed-up capacity and new revenue opportunities, built for you.",
    feeling: "My team does better work — and we're doing things we couldn't before.",
  },
  {
    num: "04",
    name: "Harden & Future-Proof",
    headline: "Ready for the agentic future — ahead of your competition.",
    body: "We get your guardrails, data, and security ready so AI can act safely on your behalf when the shift comes.",
    get: "A hardened, agent-ready business with governance built in.",
    feeling: "We're ahead of the agentic shift, not scrambling behind it.",
  },
];

export const playbook = {
  title: "Your living AI Playbook",
  body: "Every build, your connected tools, your data map, and your AI policies — documented, maintained, and yours. Once we're your source of truth, you never start AI over.",
};
