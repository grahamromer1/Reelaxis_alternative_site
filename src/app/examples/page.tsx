import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { Container } from "@/components/Container";
import { SectionHeader } from "@/components/SectionHeader";
import { ProofCard } from "@/components/ProofCard";
import { CTASection } from "@/components/CTASection";
import { CTAButton } from "@/components/CTAButton";
import { caseStudies } from "@/data/caseStudies";

export const metadata: Metadata = {
  title: "Examples — AI Workflows SMBs Can Actually Use",
  description:
    "Practical examples of how Reel Axis helps teams reduce manual work, improve follow-up, and create more consistent operating systems.",
};

const placeholderFields = [
  "Client name",
  "Industry",
  "Team size",
  "Workflow",
  "Before / after",
  "Time saved",
  "Revenue impact",
  "Testimonial",
  "Screenshot / visual",
];

export default function ExamplesPage() {
  return (
    <>
      <Hero
        eyebrow="Examples"
        title="Examples of AI workflows SMBs can actually use."
        subtitle="Practical examples of how Reel Axis helps teams reduce manual work, improve follow-up, and create more consistent operating systems."
      >
        <CTAButton href="/contact" variant="primary" className="group">
          Get Your AI Implementation Plan
        </CTAButton>
      </Hero>

      <section className="py-16 sm:py-20">
        <Container>
          <div className="rounded-xl border border-line bg-surface-2 px-5 py-4 text-sm text-muted">
            <strong className="font-semibold text-ink-soft">Note:</strong> The
            cards below are clearly labeled examples and representative use
            cases. They do not reference real client names, logos, or metrics.
          </div>
          <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {caseStudies.map((study) => (
              <ProofCard key={study.slug} study={study} />
            ))}
          </div>
        </Container>
      </section>

      {/* Future real proof placeholder */}
      <section className="bg-surface-2 py-16 sm:py-20">
        <Container>
          <SectionHeader
            eyebrow="For the team"
            title="Have real results? Add them here."
            description="When real client outcomes are available, drop them into this section. The placeholder fields below show what a published case study can capture."
          />
          {/* TODO: Replace this placeholder block with real, approved case studies. */}
          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
            {placeholderFields.map((field) => (
              <div
                key={field}
                className="rounded-lg border border-dashed border-line bg-surface px-4 py-5 text-center text-sm font-medium text-muted"
              >
                {field}
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
