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
  aiHireCta,
  aiHireHero,
  theGap,
  pilot,
  buildSizes,
  plans,
  proofTypes,
  menuReassurance,
  journeyIntro,
  journey,
  playbook,
  aiHireFaqs,
} from "@/data/aiHire";

export const metadata: Metadata = {
  title: "AI Hire — The AI Tech Team Your Business Needs",
  description:
    "Reel Axis is the fractional AI builder you hire — the AI tech team a growing business needs but can't justify full-time. We build practical AI that lives in your business. Start with a $500 Pilot.",
};

export default function AiHirePage() {
  return (
    <>
      <Hero
        eyebrow="AI Hire · your fractional AI builder"
        title={
          <>
            The AI tech team your business needs —{" "}
            <span className="text-brand">without the full-time hire.</span>
          </>
        }
        subtitle="We build practical AI that lives in your business and does real work — one job at a time. Start with a $500 Pilot, proven on a number you already track."
        microcopy={aiHireHero.trust}
      >
        <CTAButton href={aiHireCta.pilot} variant="primary" className="group">
          Start with a $500 Pilot
        </CTAButton>
        <CTAButton href={aiHireCta.plans} variant="secondary" className="group">
          See the plans
        </CTAButton>
      </Hero>

      {/* Who this is for */}
      <div className="border-b border-line bg-brand-50">
        <Container>
          <p className="py-3.5 text-center text-sm font-medium text-ink-soft">
            {aiHireHero.whoFor}
          </p>
        </Container>
      </div>

      {/* The gap */}
      <section className="py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <SectionHeader
              eyebrow="The gap we fill"
              title={theGap.title}
              description={theGap.body}
              align="center"
              className="mx-auto"
            />
          </div>
        </Container>
      </section>

      {/* The Pilot */}
      <section className="bg-surface-2 py-16 sm:py-20">
        <Container>
          <div className="overflow-hidden rounded-3xl bg-ink text-white">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 sm:p-12">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-brand-500">
                  Start here · The Pilot
                </p>
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-bold tracking-tight">{pilot.price}</span>
                  <span className="text-sm text-white/60">your first build, done for you</span>
                </div>
                <p className="mt-5 text-base leading-relaxed text-white/75">{pilot.body}</p>
                <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-brand-500">
                  {pilot.note}
                </p>
                <div className="mt-6">
                  <CTAButton href={aiHireCta.pilot} variant="primary" className="group">
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
      <section className="py-16 sm:py-20">
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

      {/* How we grow with you — the journey */}
      <section className="bg-ink py-16 text-white sm:py-20">
        <Container>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-brand-500">
            How we grow with you
          </p>
          <h2 className="max-w-4xl text-2xl font-bold tracking-tight sm:text-3xl md:text-[2.5rem] md:leading-tight">
            {journeyIntro.headline}
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/70">
            {journeyIntro.sub}
          </p>

          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
            {journey.map((p) => (
              <div key={p.num} className="flex flex-col rounded-2xl border border-white/12 bg-white/[0.04] p-6">
                <div className="flex items-center gap-2.5">
                  <span className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-brand text-sm font-bold text-white">
                    {p.num}
                  </span>
                  <span className="text-xs font-bold uppercase tracking-wide text-brand-500">
                    {p.name}
                  </span>
                </div>
                <h3 className="mt-4 text-base font-bold leading-snug text-white">{p.headline}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/65">{p.body}</p>
                <div className="mt-4 rounded-lg border border-white/10 bg-ink/40 p-3">
                  <p className="text-[10px] font-semibold uppercase tracking-wide text-white/40">
                    What you get
                  </p>
                  <p className="mt-1 text-xs leading-relaxed text-white/75">{p.get}</p>
                </div>
                <p className="mt-auto pt-4 text-sm italic leading-relaxed text-brand-500">
                  &ldquo;{p.feeling}&rdquo;
                </p>
              </div>
            ))}
          </div>

          {/* The AI Playbook deliverable */}
          <div className="mt-6 flex flex-col gap-4 rounded-2xl bg-brand p-6 sm:flex-row sm:items-center sm:gap-6 sm:p-7">
            <span className="flex h-12 w-12 flex-none items-center justify-center rounded-xl bg-white/15">
              <FunctionIcon slug="brain" className="h-6 w-6" />
            </span>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-brand-50">
                Your deliverable
              </p>
              <h3 className="mt-0.5 text-lg font-bold text-white">{playbook.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-white/85">{playbook.body}</p>
            </div>
          </div>
        </Container>
      </section>

      {/* Plans */}
      <section id="plans" className="scroll-mt-20 bg-surface-2 py-16 sm:py-20">
        <Container>
          <SectionHeader
            eyebrow="Plans"
            title="Grow by builds, not credits"
            description="Each plan is a steady cadence of done-for-you builds. On a short monthly roadmap call we pick the highest-value one — you approve, we build."
            align="center"
            className="mx-auto"
          />
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:items-start">
            {plans.map((plan) => (
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
                {plan.note ? (
                  <p className="mt-3 rounded-lg bg-surface-2 px-3 py-2 text-xs leading-relaxed text-muted">
                    {plan.note}
                  </p>
                ) : null}
                <div className="mt-auto pt-5">
                  <CTAButton
                    href={aiHireCta.pilot}
                    variant={plan.featured ? "primary" : "secondary"}
                    className="group w-full"
                  >
                    {plan.name === "Light" ? "Start light" : "Talk to us"}
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

      {/* What we build — simple area tiles */}
      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeader
            eyebrow="What we build"
            title="The areas we build in"
            description={menuReassurance}
          />
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {buildMenu.map((cat) => {
              const start = cat.builds.find((b) => b.star);
              return (
                <div
                  key={cat.title}
                  className={`flex items-start gap-4 rounded-[var(--radius-card)] border border-line p-6 ${
                    cat.custom ? "bg-ink text-white" : "bg-surface"
                  }`}
                >
                  <span
                    className={`inline-flex h-11 w-11 flex-none items-center justify-center rounded-xl ${
                      cat.custom ? "bg-white/10 text-white" : "bg-brand-50 text-brand"
                    }`}
                  >
                    <FunctionIcon slug={cat.iconSlug} className="h-[22px] w-[22px]" />
                  </span>
                  <div>
                    <h3 className={`text-base font-semibold ${cat.custom ? "text-white" : "text-ink"}`}>
                      {cat.title}
                    </h3>
                    <p className={`mt-1 text-sm leading-relaxed ${cat.custom ? "text-white/65" : "text-muted"}`}>
                      {cat.subtitle}
                    </p>
                    {cat.custom ? (
                      <p className="mt-2 text-xs leading-relaxed text-white/55">
                        Anything not on this list — bring it to your roadmap call.
                      </p>
                    ) : start ? (
                      <p className="mt-2 text-xs text-brand-600">
                        e.g., {start.name}
                      </p>
                    ) : null}
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Honest ROI */}
      <section className="bg-surface-2 py-16 sm:py-20">
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
      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeader eyebrow="FAQ" title="Common questions" align="center" className="mx-auto" />
          <div className="mx-auto mt-10 max-w-3xl divide-y divide-line rounded-[var(--radius-card)] border border-line bg-surface">
            {aiHireFaqs.map((f) => (
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
            Just getting started?{" "}
            <Link href="/shortlist" className="font-semibold text-brand hover:text-brand-700">
              The Shortlist is our $250/mo DIY-with-a-guide membership →
            </Link>
          </p>
        </Container>
      </section>

      <CTASection
        title="Hire the AI tech team you can't afford full-time."
        description="Start with a $500 Pilot — one build, done for you, proven on a number you already track. It lives in your business and stays yours."
        ctaLabel="Start with a $500 Pilot"
        ctaHref={aiHireCta.pilot}
      />
    </>
  );
}
