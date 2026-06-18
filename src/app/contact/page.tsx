import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { Container } from "@/components/Container";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Get Your AI Implementation Plan",
  description:
    "Tell us what tools your team uses and where work feels slow, repetitive, or inconsistent. Reel Axis will help identify where AI can create the most leverage.",
};

const reassurances = [
  "We start with your existing tools — no rip-and-replace.",
  "Platform-agnostic recommendations, Claude-specialized where it fits.",
  "Implementation, training, and ongoing management in one partner.",
];

export default function ContactPage() {
  return (
    <>
      <Hero
        eyebrow="Get started"
        title="Get your AI implementation plan."
        subtitle="Tell us what tools your team uses and where work feels slow, repetitive, or inconsistent. Reel Axis will help identify where AI can create the most leverage."
      />

      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-5">
              <h2 className="text-xl font-semibold text-ink">
                What happens next
              </h2>
              <ul className="mt-5 space-y-4">
                {reassurances.map((r) => (
                  <li key={r} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-brand-50 text-brand">
                      ✓
                    </span>
                    <span className="text-sm leading-relaxed text-ink-soft">{r}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 rounded-[var(--radius-card)] border border-line bg-surface-2 p-6">
                <p className="text-sm leading-relaxed text-muted">
                  Prefer email? Reach out directly and we&apos;ll get back to
                  you with next steps.
                </p>
                {/* TODO: Replace with the real contact email when available. */}
                <p className="mt-2 text-sm font-semibold text-brand">
                  hello@reelaxis.com
                </p>
              </div>
            </div>
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
