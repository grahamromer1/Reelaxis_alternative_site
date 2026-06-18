import { Hero } from "@/components/Hero";
import { Container } from "@/components/Container";
import { CTAButton } from "@/components/CTAButton";
import { SectionHeader } from "@/components/SectionHeader";
import { BusinessFunctionGrid } from "@/components/BusinessFunctionGrid";
import { ProcessSteps } from "@/components/ProcessSteps";
import { ComparisonTable } from "@/components/ComparisonTable";
import { HeroVideo } from "@/components/HeroVideo";
import { CTASection } from "@/components/CTASection";
import { offerPath, managedOpsIncludes } from "@/data/workflows";
import { aiModels, harnessPillars, businessTools } from "@/data/stack";

const problemPoints = [
  "Buying Claude, ChatGPT, or Copilot is not the same as implementation.",
  "Most teams use AI randomly, with no shared playbook.",
  "Workflows break after the first demo.",
  "SMBs do not have an internal AI operator to keep things running.",
];

export default function HomePage() {
  return (
    <>
      <Hero
        eyebrow="AI implementation & managed AI operations"
        title={
          <>
            AI implementation for SMBs that need{" "}
            <span className="text-brand">practical systems</span>, not more
            software.
          </>
        }
        subtitle="Reel Axis helps SMBs identify, implement, and manage AI workflows across sales, marketing, finance, operations, admin, and leadership reporting — using the tools your team already works in."
        microcopy="Platform-agnostic. Claude-specialized where it fits. Built around your existing tools."
        aside={<HeroVideo />}
      >
        <CTAButton href="/contact" variant="primary" className="group">
          Get Your AI Implementation Plan
        </CTAButton>
        <CTAButton href="/examples" variant="secondary" className="group">
          See Example Workflows
        </CTAButton>
      </Hero>

      {/* 2. Problem */}
      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
            <SectionHeader
              eyebrow="The real problem"
              title="AI tools are easy to buy. Useful AI systems are harder to build."
              description="The gap is not access to AI — it's turning scattered tools into repeatable workflows your whole team actually uses."
            />
            <ul className="space-y-4">
              {problemPoints.map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-3 rounded-xl border border-line bg-surface p-4"
                >
                  <span className="mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-accent-soft text-[#8a5410]">
                    !
                  </span>
                  <span className="text-sm text-ink-soft">{point}</span>
                </li>
              ))}
              <li className="flex items-start gap-3 rounded-xl border border-brand-500/40 bg-brand-50 p-4">
                <span className="mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-brand text-white">
                  ✓
                </span>
                <span className="text-sm font-medium text-ink">
                  Reel Axis turns scattered tools into repeatable business
                  workflows — and keeps them working.
                </span>
              </li>
            </ul>
          </div>
        </Container>
      </section>

      {/* 3. Where we help */}
      <section className="bg-surface-2 py-16 sm:py-20">
        <Container>
          <SectionHeader
            eyebrow="Where we help"
            title="What working AI systems look like in practice"
            description="Representative examples of the kinds of workflows we build, plus an example of how Reel Axis has helped in each area. Clearly labeled as examples until real client results are added."
          />
          <div className="mt-10">
            <BusinessFunctionGrid />
          </div>
        </Container>
      </section>

      {/* 4. Offer path */}
      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeader
            eyebrow="How it works"
            title="A simple path from AI confusion to working systems"
            description="A clear sequence — not a rigid program. Timelines are examples and adapt to your business."
          />
          <div className="mt-10">
            <ProcessSteps steps={offerPath} />
          </div>
        </Container>
      </section>

      {/* 5. The model + harness + your tools */}
      <section className="bg-ink py-16 text-white sm:py-20">
        <Container>
          <div className="max-w-2xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand-500/40 bg-brand-600/15 px-3 py-1 text-xs font-semibold text-brand-500">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
              Member of the Claude Partner Program
            </div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-brand-500">
              Strong in Claude. Connected to everything else.
            </p>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
              One AI model, set up to run your business.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/70">
              A model on its own is just a chat box. We standardize your team on one
              capable model — usually Claude — then wrap it in a harness of context,
              skills, and tool connections so it can actually do the work inside the
              apps you already use.
            </p>
          </div>

          <div className="mt-10 space-y-4">
            {/* Tier 1 — the model */}
            <div className="rounded-2xl border border-white/12 bg-white/5 p-5 sm:p-6">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wide text-brand-500">
                    The model
                  </span>
                  <p className="text-sm text-white/50">The brain that does the work</p>
                </div>
                <ul className="flex flex-wrap gap-2">
                  {aiModels.map((m) => (
                    <li
                      key={m}
                      className="rounded-lg border border-white/10 bg-ink/40 px-2.5 py-1.5 text-xs font-medium text-white/80"
                    >
                      {m}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <StackArrow />

            {/* Tier 2 — the harness (centerpiece) */}
            <div className="rounded-2xl border border-brand-500/50 bg-brand-600/15 p-5 sm:p-7">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-wide text-brand-500">
                  The harness
                </span>
                <span className="text-xs text-white/50">
                  what turns a model into a working system
                </span>
              </div>
              <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-3">
                {harnessPillars.map((p) => (
                  <div
                    key={p.title}
                    className="rounded-xl border border-white/12 bg-ink/40 p-5"
                  >
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand text-white">
                      <HarnessIcon kind={p.icon} />
                    </div>
                    <h3 className="mt-3 text-sm font-semibold text-white">{p.title}</h3>
                    <p className="mt-1.5 text-xs leading-relaxed text-white/60">
                      {p.description}
                    </p>
                    <ul className="mt-3 flex flex-wrap gap-1.5">
                      {p.examples.map((e) => (
                        <li
                          key={e}
                          className="rounded-md border border-white/10 px-2 py-0.5 text-[11px] text-white/60"
                        >
                          {e}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <StackArrow />

            {/* Tier 3 — your tools */}
            <div className="rounded-2xl border border-white/12 bg-white/5 p-5 sm:p-6">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wide text-brand-500">
                    Your existing tools
                  </span>
                  <p className="text-sm text-white/50">Where your business already runs</p>
                </div>
                <ul className="flex flex-wrap gap-2">
                  {businessTools.map((t) => (
                    <li
                      key={t}
                      className="rounded-lg border border-white/10 bg-ink/40 px-2.5 py-1.5 text-xs font-medium text-white/80"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <p className="mt-6 text-sm text-white/55">
            The result is &ldquo;headless&rdquo;: your CRM, books, and docs stay the
            system of record — your team just stops clicking through them all day.
          </p>
        </Container>
      </section>

      {/* 6. Managed AI Operations */}
      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
            <SectionHeader
              eyebrow="Managed AI operations"
              title="We don't just build it. We keep it working."
              description="Most AI projects fail after the first demo. Ongoing management is the difference between a flashy pilot and a system your team relies on."
            />
            <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {managedOpsIncludes.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2.5 rounded-lg border border-line bg-surface px-4 py-3 text-sm text-ink-soft"
                >
                  <span className="h-1.5 w-1.5 flex-none rounded-full bg-brand-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-8">
            <CTAButton href="/ai-employee" variant="secondary" className="group">
              See how our AI Employee plans work
            </CTAButton>
          </div>
        </Container>
      </section>

      {/* 7. Reel Axis vs DIY */}
      <section className="bg-surface-2 py-16 sm:py-20">
        <Container>
          <SectionHeader
            eyebrow="Reel Axis vs DIY AI"
            title="The difference between owning a tool and running a system"
            align="center"
            className="mx-auto"
          />
          <div className="mx-auto mt-10 max-w-3xl">
            <ComparisonTable />
            <div className="mt-6 text-center">
              <CTAButton href="/reel-axis-vs-diy" variant="secondary" className="group">
                See the full comparison
              </CTAButton>
            </div>
          </div>
        </Container>
      </section>

      {/* 8. Final CTA */}
      <CTASection />
    </>
  );
}

function StackArrow() {
  return (
    <div className="flex items-center justify-center text-brand-500/70" aria-hidden="true">
      <span className="text-xl">↓</span>
    </div>
  );
}

function HarnessIcon({ kind }: { kind: "context" | "skills" | "tools" }) {
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    viewBox: "0 0 24 24",
    className: "h-5 w-5",
  };
  if (kind === "context") {
    return (
      <svg {...common} aria-hidden="true">
        <path d="M4 5a2 2 0 0 1 2-2h9l5 5v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5Z" />
        <path d="M14 3v5h5M8 13h8M8 17h5" />
      </svg>
    );
  }
  if (kind === "skills") {
    return (
      <svg {...common} aria-hidden="true">
        <path d="M12 3l2.2 4.6L19 8.3l-3.5 3.4.8 4.9L12 14.9 7.7 16.6l.8-4.9L5 8.3l4.8-.7L12 3Z" />
      </svg>
    );
  }
  return (
    <svg {...common} aria-hidden="true">
      <circle cx="6" cy="12" r="2.4" />
      <circle cx="18" cy="6" r="2.4" />
      <circle cx="18" cy="18" r="2.4" />
      <path d="M8.1 11l7.8-4M8.1 13l7.8 4" />
    </svg>
  );
}
