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
  };

  return (
    <svg {...base} className={className} aria-hidden="true">
      {paths[slug] ?? <circle cx="12" cy="12" r="8" />}
    </svg>
  );
}
