import Link from "next/link";

export function Logo({ tone = "dark" }: { tone?: "dark" | "light" }) {
  const text = tone === "light" ? "text-white" : "text-ink";
  return (
    <Link href="/" className="group inline-flex items-center gap-2.5" aria-label="Reel Axis home">
      <span className="relative inline-flex h-8 w-8 items-center justify-center rounded-lg bg-brand">
        <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
          <path
            d="M5 19V5M5 19h14M8 15l3.5-3.5L14 14l5-6"
            fill="none"
            stroke="white"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      <span className={`text-lg font-bold tracking-tight ${text}`}>
        Reel Axis
      </span>
    </Link>
  );
}
