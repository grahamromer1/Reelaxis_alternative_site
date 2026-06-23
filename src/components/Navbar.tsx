"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { mainNav, primaryCta } from "@/data/navigation";
import { Container } from "./Container";
import { Logo } from "./Logo";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-surface/80 backdrop-blur-md">
      <Container>
        <nav className="flex h-16 items-center justify-between" aria-label="Main">
          <Logo />

          <ul className="hidden items-center gap-0.5 xl:flex">
            {mainNav.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`whitespace-nowrap rounded-md px-2.5 py-2 text-sm font-medium transition ${
                    isActive(link.href)
                      ? "text-brand"
                      : "text-ink-soft hover:text-ink"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden xl:block">
            <Link
              href={primaryCta.href}
              className="inline-flex items-center rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-700"
            >
              {primaryCta.label}
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md text-ink xl:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label="Toggle navigation menu"
          >
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </nav>
      </Container>

      {open ? (
        <div id="mobile-menu" className="border-t border-line bg-surface xl:hidden">
          <Container className="py-4">
            <ul className="space-y-1">
              {mainNav.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`block rounded-md px-3 py-2.5 text-base font-medium ${
                      isActive(link.href)
                        ? "bg-brand-50 text-brand"
                        : "text-ink-soft hover:bg-surface-2"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href={primaryCta.href}
              onClick={() => setOpen(false)}
              className="mt-3 flex items-center justify-center rounded-full bg-brand px-5 py-3 text-sm font-semibold text-white"
            >
              {primaryCta.label}
            </Link>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
