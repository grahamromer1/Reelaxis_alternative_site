const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  viewBox: "0 0 24 24",
};

// Distinctive line icons keyed by business-function slug.
export function FunctionIcon({ slug, className = "h-5 w-5" }: { slug: string; className?: string }) {
  const paths: Record<string, React.ReactNode> = {
    // Sales — rising chart with an arrowhead and a tracked point
    sales: (
      <>
        <path d="M4 18 L9 12 L13 15 L20 6" />
        <path d="M15 6h5v5" />
        <circle cx="9" cy="12" r="1.3" fill="currentColor" stroke="none" />
      </>
    ),
    // Marketing — megaphone broadcasting
    marketing: (
      <>
        <path d="M4 10v4a1 1 0 0 0 1 1h2l8 4V5L7 9H5a1 1 0 0 0-1 1Z" />
        <path d="M18.5 9a3.5 3.5 0 0 1 0 6" />
      </>
    ),
    // Finance — coin stack
    finance: (
      <>
        <ellipse cx="12" cy="6" rx="7" ry="2.6" />
        <path d="M5 6v5c0 1.4 3.1 2.6 7 2.6s7-1.2 7-2.6V6" />
        <path d="M5 11v5c0 1.4 3.1 2.6 7 2.6s7-1.2 7-2.6v-5" />
      </>
    ),
    // Operations & reporting — gear with a small bar readout
    operations: (
      <>
        <circle cx="9" cy="9" r="3" />
        <path d="M9 3v2M9 13v2M3 9h2M13 9h2M5 5l1.4 1.4M11.6 11.6 13 13M13 5l-1.4 1.4M6.4 11.6 5 13" />
        <path d="M15 20v-3M18 20v-6M21 20v-4" />
      </>
    ),
    // Admin — inbox / tray
    admin: (
      <>
        <path d="M4 13l2.5-7.5A2 2 0 0 1 8.4 4h7.2a2 2 0 0 1 1.9 1.5L20 13" />
        <path d="M4 13h4l1 2h6l1-2h4v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-5Z" />
      </>
    ),
    // Customer service — headset
    "customer-service": (
      <>
        <path d="M5 13v-1a7 7 0 0 1 14 0v1" />
        <path d="M3 14a2 2 0 0 1 2-2h1v5H5a2 2 0 0 1-2-2v-1Z" />
        <path d="M21 14a2 2 0 0 0-2-2h-1v5h1a2 2 0 0 0 2-2v-1Z" />
        <path d="M18 17v1a3 3 0 0 1-3 3h-3" />
      </>
    ),
    // Leadership reporting — clipboard scorecard
    "leadership-reporting": (
      <>
        <rect x="5" y="4" width="14" height="17" rx="2" />
        <path d="M9 4a3 3 0 0 1 6 0" />
        <path d="M9 12l2 2 4-4" />
        <path d="M9 17h6" />
      </>
    ),
    // Custom — sparkle / made-to-order
    custom: (
      <>
        <path d="M12 3l1.8 4.7L18.5 9.5 13.8 11.3 12 16l-1.8-4.7L5.5 9.5l4.7-1.8L12 3Z" />
        <path d="M18.5 15.5l.7 1.8 1.8.7-1.8.7-.7 1.8-.7-1.8-1.8-.7 1.8-.7.7-1.8Z" />
      </>
    ),
    // Library — open book
    library: (
      <>
        <path d="M12 6.5c-2.2-1.4-4.8-1.4-7 0v11c2.2-1.4 4.8-1.4 7 0 2.2-1.4 4.8-1.4 7 0v-11c-2.2-1.4-4.8-1.4-7 0Z" />
        <path d="M12 6.5v11" />
      </>
    ),
    // News — newspaper
    news: (
      <>
        <path d="M4 5h13v14H6a2 2 0 0 1-2-2V5Z" />
        <path d="M17 9h3v8a2 2 0 0 1-2 2" />
        <path d="M7 8h6M7 11h6M7 14h4" />
      </>
    ),
    // Lesson — mortarboard
    lesson: (
      <>
        <path d="M2.5 9 12 5l9.5 4-9.5 4-9.5-4Z" />
        <path d="M7 11.2V15c0 1.1 2.2 2 5 2s5-.9 5-2v-3.8" />
        <path d="M21.5 9v4.5" />
      </>
    ),
    // Call — video / office hours
    call: (
      <>
        <rect x="3" y="6.5" width="12" height="11" rx="2" />
        <path d="M15 10.5l6-3v9l-6-3" />
      </>
    ),
    // Chat — speech bubble
    chat: (
      <>
        <path d="M5 5h14a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-9l-4 3v-3H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z" />
        <path d="M8.5 10h.01M12 10h.01M15.5 10h.01" />
      </>
    ),
    // Brain — knowledge base
    brain: (
      <>
        <path d="M9.5 5a2.7 2.7 0 0 0-2.6 2 2.7 2.7 0 0 0-1.4 4.6A2.7 2.7 0 0 0 7 16.7 2.6 2.6 0 0 0 9.5 19 1.5 1.5 0 0 0 11 17.5v-11A1.5 1.5 0 0 0 9.5 5Z" />
        <path d="M14.5 5a2.7 2.7 0 0 1 2.6 2 2.7 2.7 0 0 1 1.4 4.6A2.7 2.7 0 0 1 17 16.7 2.6 2.6 0 0 1 14.5 19 1.5 1.5 0 0 1 13 17.5v-11A1.5 1.5 0 0 1 14.5 5Z" />
      </>
    ),
    // Rocket — week-one setup
    rocket: (
      <>
        <path d="M12 3c2.6 1.7 4 4.7 4 8 0 1.5-.3 2.8-.8 3.8H8.8C8.3 13.8 8 12.5 8 11c0-3.3 1.4-6.3 4-8Z" />
        <circle cx="12" cy="9.5" r="1.3" />
        <path d="M8.6 15.5 6.5 19l3.2-1.1M15.4 15.5 17.5 19l-3.2-1.1" />
      </>
    ),
  };

  return (
    <svg {...base} className={className} aria-hidden="true">
      {paths[slug] ?? <circle cx="12" cy="12" r="8" />}
    </svg>
  );
}
