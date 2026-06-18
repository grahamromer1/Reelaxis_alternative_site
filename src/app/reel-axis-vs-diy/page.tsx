import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { Container } from "@/components/Container";
import { SectionHeader } from "@/components/SectionHeader";
import { ComparisonTable } from "@/components/ComparisonTable";
import { CTASection } from "@/components/CTASection";
import { CTAButton } from "@/components/CTAButton";
import { diyGoodFor, diyBreaksDown } from "@/data/comparison";

export const metadata: Metadata = {
  title: "Reel Axis vs DIY AI",
  description:
    "AI tools are powerful, but tools alone don't redesign workflows, train your team, connect your systems, or keep improving. Here's the difference.",
};

export default function ReelAxisVsDiyPage() {
  return (
    <>
      <Hero
        eyebrow="Reel Axis vs DIY AI"
        title="Why hire Reel Axis instead of just buying Claude or ChatGPT?"
        subtitle="AI tools are powerful. But tools alone do not redesign workflows, train your team, connect your systems, or keep the process improving."
      >
        <CTAButton href="/contact" variant="primary" className="group">
          Get Your AI Implementation Plan
        </CTAButton>
      </Hero>

      {/* Comparison table */}
      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeader
            eyebrow="Side by side"
            title="Owning a tool vs running a system"
            align="center"
            className="mx-auto"
          />
          <div className="mx-auto mt-10 max-w-3xl">
            <ComparisonTable />
          </div>
        </Container>
      </section>

      {/* Good for / breaks down */}
      <section className="bg-surface-2 py-16 sm:py-20">
        <Container>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <div className="rounded-[var(--radius-card)] border border-line bg-surface p-7">
              <h3 className="text-lg font-semibold text-ink">
                What DIY AI is good for
              </h3>
              <p className="mt-2 text-sm text-muted">
                We're fair about this — DIY AI is genuinely useful for a lot.
              </p>
              <ul className="mt-5 space-y-2.5">
                {diyGoodFor.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-ink-soft">
                    <span className="mt-0.5 text-brand">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-[var(--radius-card)] border border-line bg-surface p-7">
              <h3 className="text-lg font-semibold text-ink">
                Where DIY breaks down
              </h3>
              <p className="mt-2 text-sm text-muted">
                The moment AI needs to work across a team and stay reliable.
              </p>
              <ul className="mt-5 space-y-2.5">
                {diyBreaksDown.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-ink-soft">
                    <span className="mt-0.5 text-accent">✕</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* Reel Axis advantage */}
      <section className="py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-3xl rounded-3xl bg-ink px-8 py-12 text-center sm:px-12">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-brand-500">
              The Reel Axis advantage
            </p>
            <p className="text-xl font-semibold leading-relaxed text-white sm:text-2xl">
              Reel Axis turns AI from a tool people occasionally use into a
              managed operating layer inside the business.
            </p>
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
