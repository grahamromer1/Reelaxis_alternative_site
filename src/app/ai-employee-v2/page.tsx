import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/Hero";
import { Container } from "@/components/Container";
import { SectionHeader } from "@/components/SectionHeader";
import { CTAButton } from "@/components/CTAButton";
import { CTASection } from "@/components/CTASection";
import { FunctionIcon } from "@/components/FunctionIcon";
import { buildMenu } from "@/data/aiEmployee";
import {
  v2Cta,
  pilot,
  buildSizes,
  v2Plans,
  proofTypes,
  sizeLabel,
  sizeLegend,
  v2Faqs,
} from "@/data/aiEmployeeV2";

export const metadata: Metadata = {
  title: "AI Employee (V2) — Done-for-You AI, One Job at a Time",
  description:
    "Hire an AI employee that does the work — not a tool you run. Start with a $500 Pilot proven on one number, then grow by builds, one job at a time.",
};

export default function AiEmployeeV2Page() {
  return (
    <>
      <Hero
        eyebrow="AI Employee · V2 concept"
        title={
          <>
            An AI employee that does the work —{" "}
            <span className="text-brand">not a tool you have to run.</span>
          </>
        }
        subtitle="We build and run practical AI workflows for your business, one job at a time. Start with a $500 Pilot on a single workflow, see it work on a number you already track, then grow at your pace."
        microcopy="Done-for-you. Proven on one number. No lock-in."
      >
        <CTAButton href={v2Cta.pilot} variant="primary" className="group">
          Start with a $500 Pilot
        </CTAButton>
        <CTAButton href={v2Cta.plans} variant="secondary" className="group">
          See the plans
        </CTAButton>
      </Hero>

      {/* The Pilot — the front door */}
      <section className="py-16 sm:py-20">
        <Container>
          <div className="overflow-hidden rounded-3xl bg-ink text-white">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 sm:p-12">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-brand-500">
                  Start here · The Pilot
                </p>
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-bold tracking-tight">{pilot.price}</span>
                  <span className="text-sm text-white/60">one workflow, built for you</span>
                </div>
                <p className="mt-5 text-base leading-relaxed text-white/75">{pilot.body}</p>
                <div className="mt-7">
                  <CTAButton href={v2Cta.pilot} variant="primary" className="group">
                    Start your Pilot
                  </CTAButton>
                </div>
              </div>
              <div className="border-t border-white/10 bg-white/5 p-8 sm:p-12 lg:border-l lg:border-t-0">
                <p className="text-xs font-semibold uppercase tracking-wide text-white/50">
                  What you get
                </p>
                <ul className="mt-5 space-y-4">
                  {pilot.points.map((p) => (
                    <li key={p} className="flex items-start gap-3 text-sm text-white/90">
                      <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-brand text-[11px] font-bold text-white">
                        ✓
                      </span>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* What's a build */}
      <section className="bg-surface-2 py-16 sm:py-20">
        <Container>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <SectionHeader
                eyebrow="The unit of work"
                title="What's a “build”?"
                description="One business job, done for you and kept running. Under the hood it's made of skills (what the AI knows how to do), connectors (how it reaches into your tools), and your context. You don't buy parts — you buy the finished job."
              />
            </div>
            <div className="lg:col-span-7">
              <div className="overflow-hidden rounded-[var(--radius-card)] border border-line bg-surface">
                <table className="w-full text-left text-sm">
                  <thead>
                    <tr className="border-b border-line bg-surface-3 text-xs uppercase tracking-wide text-muted">
                      <th className="px-4 py-3 font-semibold">Size</th>
                      <th className="px-4 py-3 font-semibold">What it is</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-line align-top">
                    {buildSizes.map((b) => (
                      <tr key={b.size}>
                        <td className="px-4 py-4">
                          <span className="font-semibold text-brand-700">{b.size}</span>
                        </td>
                        <td className="px-4 py-4">
                          <p className="text-ink">{b.test}</p>
                          <p className="mt-1 text-xs text-muted">{b.example}</p>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Plans */}
      <section id="plans" className="scroll-mt-20 py-16 sm:py-20">
        <Container>
          <SectionHeader
            eyebrow="Plans"
            title="Grow by builds, not credits"
            description="Each plan is a steady cadence of done-for-you builds. On a short monthly roadmap call we pick the highest-value one — you approve, we build. No credits to manage."
            align="center"
            className="mx-auto"
          />
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:items-start">
            {v2Plans.map((plan) => (
              <div
                key={plan.name}
                className={`flex flex-col rounded-2xl border bg-surface p-6 ${
                  plan.featured
                    ? "border-brand shadow-xl shadow-brand/10 lg:-mt-3 lg:pb-8"
                    : "border-line"
                }`}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-semibold text-ink">{plan.name}</h3>
                  {plan.badge ? (
                    <span className="rounded-full bg-brand px-2.5 py-1 text-[10px] font-semibold text-white">
                      {plan.badge}
                    </span>
                  ) : null}
                </div>
                <div className="mt-3 flex items-baseline gap-1">
                  <span className="text-3xl font-bold tracking-tight text-ink">{plan.price}</span>
                  <span className="text-sm text-muted">{plan.cadence}</span>
                </div>
                <p className="mt-3 text-sm font-medium text-ink-soft">{plan.line}</p>
                <p className="mt-2 text-sm text-muted">{plan.best}</p>
                <div className="mt-5 pt-1">
                  <CTAButton
                    href={v2Cta.pilot}
                    variant={plan.featured ? "primary" : "secondary"}
                    className="group w-full"
                  >
                    {plan.name === "Tier 1" ? "Start light" : "Talk to us"}
                  </CTAButton>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-6 text-center text-xs text-muted">
            Every plan starts with the $500 Pilot — proven on one number before you commit.
          </p>
        </Container>
      </section>

      {/* The build menu — outcomes + sizes */}
      <section className="bg-surface-2 py-16 sm:py-20">
        <Container>
          <SectionHeader
            eyebrow="The menu"
            title="What we build"
            description="Pick by the result you want. Every build shows its size, and a ⭐ marks where most businesses start."
          />

          {/* Size legend */}
          <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 rounded-xl border border-line bg-surface px-4 py-3">
            {sizeLegend.map((l) => (
              <span key={l.label} className="inline-flex items-center gap-1.5 text-xs text-ink-soft">
                <SizePill label={l.label} />
                {l.meaning}
              </span>
            ))}
            <span className="inline-flex items-center gap-1.5 text-xs text-ink-soft">
              <span className="text-accent">⭐</span> start here
            </span>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {buildMenu.map((cat) => (
              <div
                key={cat.title}
                className={`flex flex-col rounded-[var(--radius-card)] border p-6 ${
                  cat.custom ? "border-line bg-ink text-white" : "border-line bg-surface"
                }`}
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`inline-flex h-10 w-10 items-center justify-center rounded-xl ${
                      cat.custom ? "bg-white/10 text-white" : "bg-brand-50 text-brand"
                    }`}
                  >
                    <FunctionIcon slug={cat.iconSlug} className="h-5 w-5" />
                  </span>
                  <h3 className={`text-base font-semibold ${cat.custom ? "text-white" : "text-ink"}`}>
                    {cat.title}
                  </h3>
                </div>
                <p className={`mt-3 text-sm ${cat.custom ? "text-white/60" : "text-muted"}`}>
                  {cat.subtitle}
                </p>
                {cat.custom ? (
                  <p className="mt-4 text-sm leading-relaxed text-white/80">
                    Industry-specific automations, custom internal tools, or anything not on this
                    list. Bring it to your roadmap call and we&apos;ll scope it together.
                  </p>
                ) : (
                  <>
                    <ul className="mt-4 space-y-2">
                      {cat.builds.map((b) => (
                        <li key={b.name} className="flex items-center gap-2.5 text-sm">
                          <SizePill label={sizeLabel[b.credits]} />
                          <span className="text-ink-soft">{b.name}</span>
                          {b.star ? (
                            <span className="text-accent" aria-label="Start here">
                              ⭐
                            </span>
                          ) : null}
                        </li>
                      ))}
                    </ul>
                    {cat.more.length > 0 ? (
                      <details className="group mt-3">
                        <summary className="cursor-pointer list-none text-xs font-semibold text-brand-600">
                          + {cat.more.length} more
                        </summary>
                        <p className="mt-2 text-xs leading-relaxed text-muted">
                          {cat.more.join(" · ")}
                        </p>
                      </details>
                    ) : null}
                  </>
                )}
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* How we prove it */}
      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeader
            eyebrow="Honest ROI"
            title="We don't promise a number. We prove one."
            description="No made-up dollar figures. We prove value on something you already count, and hand you a worksheet so the math uses your numbers — not ours."
          />
          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
            {proofTypes.map((p) => (
              <div
                key={p.title}
                className="rounded-[var(--radius-card)] border border-line bg-surface p-6"
              >
                <h3 className="text-base font-semibold text-ink">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{p.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="bg-surface-2 py-16 sm:py-20">
        <Container>
          <SectionHeader eyebrow="FAQ" title="Common questions" align="center" className="mx-auto" />
          <div className="mx-auto mt-10 max-w-3xl divide-y divide-line rounded-[var(--radius-card)] border border-line bg-surface">
            {v2Faqs.map((f) => (
              <details key={f.q} className="group p-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-semibold text-ink">
                  {f.q}
                  <span className="text-brand transition group-open:rotate-45" aria-hidden="true">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">{f.a}</p>
              </details>
            ))}
          </div>
          <p className="mx-auto mt-6 max-w-3xl text-center text-sm text-muted">
            Comparing concepts?{" "}
            <Link href="/ai-employee" className="font-semibold text-brand hover:text-brand-700">
              See the original AI Employee page →
            </Link>
          </p>
        </Container>
      </section>

      <CTASection
        title="Start with one job, proven."
        description="A $500 Pilot, built for you, measured on a number you already track. Love it and it credits toward your plan — either way, no lock-in."
        ctaLabel="Start with a $500 Pilot"
        ctaHref={v2Cta.pilot}
      />
    </>
  );
}

function SizePill({ label }: { label: string }) {
  const styles: Record<string, string> = {
    S: "bg-surface-3 text-ink-soft",
    M: "bg-brand-50 text-brand-700",
    L: "bg-brand text-white",
    Custom: "bg-accent-soft text-[#8a5410]",
  };
  return (
    <span
      className={`inline-flex h-6 min-w-[1.5rem] flex-none items-center justify-center rounded-md px-1.5 text-[11px] font-bold ${
        styles[label] ?? "bg-surface-3 text-ink-soft"
      }`}
    >
      {label}
    </span>
  );
}
