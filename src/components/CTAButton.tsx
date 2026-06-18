import Link from "next/link";
import { ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";

const styles: Record<Variant, string> = {
  primary:
    "bg-brand text-white hover:bg-brand-700 shadow-sm shadow-brand/20 focus-visible:outline-brand",
  secondary:
    "bg-white text-brand ring-1 ring-inset ring-line hover:ring-brand-500 hover:text-brand-700 focus-visible:outline-brand",
  ghost:
    "bg-white/10 text-white ring-1 ring-inset ring-white/30 hover:bg-white/20 focus-visible:outline-white",
};

export function CTAButton({
  href,
  children,
  variant = "primary",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition focus-visible:outline-2 focus-visible:outline-offset-2 ${styles[variant]} ${className}`}
    >
      {children}
      <span aria-hidden="true" className="transition-transform group-hover:translate-x-0.5">
        →
      </span>
    </Link>
  );
}
