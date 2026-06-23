// Configurable content for The Shortlist membership page.
// The accessible $250/mo tier that ladders up to AI Employee (done-for-you).

export const shortlistCta = { join: "/contact", aiEmployee: "/ai-employee" };

export type Offering = {
  iconSlug: string;
  title: string;
  body: string;
};

export const shortlistOfferings: Offering[] = [
  {
    iconSlug: "library",
    title: "Curated Skill Library",
    body: "Ready-to-use AI skills, prompts, and SOPs built for small businesses — sales, marketing, intake, operations, finance, and admin. Copy, paste, use. We add to it regularly.",
  },
  {
    iconSlug: "news",
    title: "Weekly News Digest",
    body: "A 5-minute read of the few AI updates that actually matter for a small business that week. Stay current without drowning in it.",
  },
  {
    iconSlug: "lesson",
    title: "Weekly Lesson",
    body: "One short, plain-English lesson on how to build and use AI — the model, your context, skills, and connecting your tools.",
  },
  {
    iconSlug: "call",
    title: "Biweekly Office Hours",
    body: "A 20-minute call every two weeks to get unstuck and decide what to do next.",
  },
  {
    iconSlug: "chat",
    title: "Async Team Access",
    body: "Ask our team questions anytime in the members' channel between calls.",
  },
  {
    iconSlug: "brain",
    title: "Your Notion Knowledge Base",
    body: "A personal AI “brain” we set up for you to keep your skills, prompts, and notes in one place.",
  },
  {
    iconSlug: "rocket",
    title: "Week-One Setup Call",
    body: "On day one we get on a call and build your first AI skill with you — so you start with something working, not a pile of homework.",
  },
];

export const shortlistPricing = {
  price: "$250",
  cadence: "/month",
  note: "Month-to-month, cancel anytime.",
  credit:
    "Move up to AI Employee (done-for-you) and your membership credits toward it.",
};

// The ladder — how The Shortlist and AI Employee complement each other.
export const ladder = [
  {
    name: "The Shortlist",
    price: "$250/mo",
    line: "You build it — we equip and guide you.",
    points: [
      "Get capable with AI, fast",
      "Curated skills, news, and lessons",
      "A guide on call when you're stuck",
    ],
    href: "/shortlist",
    current: true,
  },
  {
    name: "AI Employee",
    price: "From $1,500/mo",
    line: "We build and run it for you.",
    points: [
      "Done-for-you AI workflows",
      "Monthly AI Build Credits",
      "We maintain and improve it",
    ],
    href: "/ai-employee",
    current: false,
  },
];

export type Faq = { q: string; a: string };

export const shortlistFaqs: Faq[] = [
  {
    q: "Is this done-for-you?",
    a: "No — that's our AI Employee service. The Shortlist gives you the skills, guidance, and support to build it yourself. When you'd rather hand it off, you move up to AI Employee.",
  },
  {
    q: "Do I need to be technical?",
    a: "No. Everything is plain-English and beginner-friendly, and your Week-One Setup Call gets your first skill working with you.",
  },
  {
    q: "What if I need more than the membership?",
    a: "Move up to AI Employee anytime — and your membership fee credits toward it if you upgrade within 90 days.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Yes. It's month-to-month, cancel anytime.",
  },
  {
    q: "What do I need to get started?",
    a: "Just an AI account (we'll help you pick one) and a willingness to spend a little time each week. We set up your Notion knowledge base for you.",
  },
];
