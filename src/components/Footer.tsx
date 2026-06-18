import Link from "next/link";
import { Container } from "./Container";
import { Logo } from "./Logo";
import { footerCompany, footerServices } from "@/data/navigation";

export function Footer() {
  return (
    <footer className="border-t border-line bg-surface-2">
      <Container className="py-14">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <Logo />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
              Reel Axis implements and manages practical AI workflows for SMBs.
            </p>
            <div className="mt-6">
              <Link
                href="/contact"
                className="inline-flex items-center rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-700"
              >
                Get your AI implementation plan
              </Link>
            </div>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-sm font-semibold text-ink">Services</h3>
            <ul className="mt-4 space-y-3">
              {footerServices.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted transition hover:text-ink">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-sm font-semibold text-ink">Company</h3>
            <ul className="mt-4 space-y-3">
              {footerCompany.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted transition hover:text-ink">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <h3 className="text-sm font-semibold text-ink">Connect</h3>
            {/* TODO: Add real social links when available. */}
            <ul className="mt-4 flex gap-3">
              {["LinkedIn", "X", "Email"].map((label) => (
                <li key={label}>
                  <span className="inline-flex items-center rounded-md border border-line bg-surface px-3 py-1.5 text-xs font-medium text-muted">
                    {label}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs text-muted">
              © {new Date().getFullYear()} Reel Axis. All rights reserved.
            </p>
            <p className="mt-1 text-xs text-muted">
              San Diego, CA · San Francisco, CA · Denver, CO
            </p>
          </div>
          <p className="text-xs text-muted">
            Platform-agnostic AI implementation. Claude-specialized where it fits.
          </p>
        </div>
      </Container>
    </footer>
  );
}
