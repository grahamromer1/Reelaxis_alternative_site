import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/Hero";
import { Container } from "@/components/Container";
import { SectionHeader } from "@/components/SectionHeader";
import { CTAButton } from "@/components/CTAButton";
import { CTASection } from "@/components/CTASection";
import { FunctionIcon } from "@/components/FunctionIcon";
import {
  aiEmployeeProblems,
  howItWorks,
  creditTable,
  plans,
  flexibilityOptions,
  buildMenu,
  creditLegend,
  aiEmployeeFaqs,
  bookCallHref,
  auditHref,
  type CreditCost,
} from "@/data/aiEmployee";

export const metadata: Metadata = {
  title: "Hire Reel Axis as Your Fractional AI Employee",
  description:
    "Monthly AI strategy, implementation, and support for SMBs. Get AI Build Credits your team can use toward practical systems for marketing, sales, intake, operations, reporting, knowledge, and training.",
};

export default function AiEmployeePage() {
  return (
    <>
      <Hero
        eyebrow="AI Employee"
        title="Hire Reel Axis as your fractional AI employee."
        subtitle="Get ongoing AI strategy, implementation, and support without hiring a full-time AI specialist. Each month we help your team decide what to build next, then use your AI Build Credits to create practical systems across sales, marketing, operations, intake, reporting, and team productivity."
        microcopy="Built for small and mid-sized businesses that want AI execution, not just AI advice."
      >
        <CTAButton href={bookCallHref} variant="primary" className="group">
          Book an AI Roadmap Call
        </CTAButton>
        <CTAButton href="#credits" variant="secondary" className="group">
          Explore AI Build Credits
        </CTAButton>
      </Hero>

      {/* Start-smaller banner → The Shortlist */}
      <section className="border-b border-line bg-brand-50">
        <Container>
          <div className="flex flex-col items-center justify-between gap-3 py-4 text-center sm:flex-row sm:text-left">
            <p className="text-sm text-ink-soft">
              <span className="font-semibold text-ink">Not ready for done-for-you?</span>{" "}
              Start with <span className="font-semibold text-brand">The Shortlist</span> — our
              $250/mo membership to get capable with AI yourself.
            </p>
            <Link
              href="/shortlist"
              className="inline-flex flex-none items-center gap-1 rounded-full bg-white px-4 py-2 text-sm font-semibold text-brand ring-1 ring-inset ring-line transition hover:ring-brand-500"
            >
              Explore The Shortlist →
            </Link>
          </div>
        </Container>
      </section>

      {/* Problem */}
      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
            <SectionHeader
              eyebrow="The gap"
              title="Most small businesses know they should use AI. They just don't know where to start."
              description="AI is moving quickly, but most businesses don't have someone internally who can turn it into useful systems. Reel Axis fills that gap."
            />
            <ul className="space-y-3">
              {aiEmployeeProblems.map((p) => (
                <li
                  key={p}
                  className="flex items-start gap-3 rounded-xl border border-line bg-surface p-4 text-sm text-ink-soft"
                >
                  <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-accent-soft text-[11px] font-bold text-[#8a5410]">
                    !
                  </span>
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* Positioning */}
      <section className="bg-ink py-16 text-white sm:py-20">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-brand-500">
              Your monthly AI operator
            </p>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
              Think of us as part of your team.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-white/70">
              Reel Axis works like a part-time AI employee — someone on the team
              who owns AI, shows up every month, knows your business, and is
              accountable for results. Not a vendor you have to manage; a partner
              who already knows where things stand.
            </p>
            <p className="mt-4 text-base leading-relaxed text-white/70">
              Each month we help you identify the highest-value improvement, scope
              the work, and build it using your AI Build Credits — a knowledge
              base, a lead follow-up system, cleaner data, automated admin, or team
              training. The goal isn&apos;t to &ldquo;use AI&rdquo; for its own sake;
              it&apos;s to build systems that help your business find opportunities,
              organize information, and reduce repetitive work.
            </p>
          </div>
        </Container>
      </section>

      {/* How it works */}
      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeader
            eyebrow="A repeating monthly rhythm"
            title="How it works — every month"
            description="The same simple loop each month: meet, choose the highest-value build, spend your credits, and we build and support it."
          />
          <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-line bg-surface-2 px-3.5 py-1.5 text-xs font-semibold text-brand-700">
            <span className="h-1.5 w-1.5 rounded-full bg-brand" />
            Repeats every month — strategy and execution on a steady cadence
          </div>
          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
            {howItWorks.map((s) => (
              <div
                key={s.step}
                className="flex flex-col rounded-[var(--radius-card)] border border-line bg-surface p-6"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-brand text-sm font-bold text-white">
                  {s.step}
                </div>
                <h3 className="text-base font-semibold text-ink">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{s.body}</p>
                {s.bullets ? (
                  <ul className="mt-3 space-y-1.5">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-xs text-muted">
                        <span className="mt-1 h-1 w-1 flex-none rounded-full bg-brand-500" />
                        {b}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* AI Build Credits */}
      <section id="credits" className="scroll-mt-20 bg-surface-2 py-16 sm:py-20">
        <Container>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
            <SectionHeader
              eyebrow="The core mechanism"
              title="What are AI Build Credits?"
              description="AI Build Credits are the monthly implementation credits in your plan. You pay a subscription, receive a set number of credits, and use them toward builds, improvements, training, or systems — and we help decide where they create the most value."
            />
            <div className="overflow-hidden rounded-[var(--radius-card)] border border-line bg-surface">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-line bg-surface-3 text-xs uppercase tracking-wide text-muted">
                    <th className="px-4 py-3 font-semibold">Credit size</th>
                    <th className="px-4 py-3 font-semibold">Best for</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-line">
                  {creditTable.map((row) => (
                    <tr key={row.size} className="align-top">
                      <td className="px-4 py-4 font-semibold text-brand-700 whitespace-nowrap">
                        {row.size}
                      </td>
                      <td className="px-4 py-4">
                        <p className="font-medium text-ink">{row.bestFor}</p>
                        <p className="mt-1 text-xs text-muted">{row.examples}</p>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <p className="mt-6 text-xs text-muted">
            Credit estimates are planning estimates. Final scope is confirmed with
            Reel Axis before work begins.
          </p>
        </Container>
      </section>

      {/* Pricing */}
      <section id="pricing" className="scroll-mt-20 py-16 sm:py-20">
        <Container>
          <SectionHeader
            eyebrow="Pricing"
            title="Choose your AI Employee plan."
            description="Each plan includes monthly strategy, access to Reel Axis, AI Build Credits, and ongoing support for the systems we help create. Custom plans are available for unusual needs."
            align="center"
            className="mx-auto"
          />
          <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3 lg:items-start">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`flex flex-col rounded-2xl border bg-surface p-7 ${
                  plan.featured
                    ? "border-brand shadow-xl shadow-brand/10 lg:-mt-3 lg:pb-9"
                    : "border-line"
                }`}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-ink">{plan.name}</h3>
                  {plan.badge ? (
                    <span className="rounded-full bg-brand px-2.5 py-1 text-[11px] font-semibold text-white">
                      {plan.badge}
                    </span>
                  ) : null}
                </div>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-3xl font-bold tracking-tight text-ink">
                    {plan.price}
                  </span>
                  <span className="text-sm text-muted">{plan.cadence}</span>
                </div>
                <p className="mt-1 text-sm font-semibold text-brand-700">
                  {plan.credits}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted">{plan.bestFor}</p>

                <ul className="mt-5 space-y-2.5 border-t border-line pt-5">
                  {plan.includes.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-ink-soft">
                      <span className="mt-0.5 text-brand">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="mt-5 rounded-lg bg-surface-2 p-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-muted">
                    Example monthly uses
                  </p>
                  <ul className="mt-2 space-y-1.5">
                    {plan.exampleUses.map((u) => (
                      <li key={u} className="text-xs leading-relaxed text-ink-soft">
                        • {u}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-1">
                  <CTAButton
                    href={bookCallHref}
                    variant={plan.featured ? "primary" : "secondary"}
                    className="group w-full"
                  >
                    {plan.cta}
                  </CTAButton>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Flexibility */}
      <section className="bg-surface-2 py-16 sm:py-20">
        <Container>
          <SectionHeader
            eyebrow="Flexibility"
            title="Options when you want to move faster"
            description="Three flexible ways to flex up beyond your monthly plan — without re-signing anything."
          />
          <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
            {flexibilityOptions.map((a) => (
              <div
                key={a.title}
                className="flex flex-col rounded-[var(--radius-card)] border border-line bg-surface p-7"
              >
                <h3 className="text-base font-semibold text-ink">{a.title}</h3>
                <p className="mt-1 text-lg font-bold text-brand-700">{a.price}</p>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">{a.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* AI Build Menu */}
      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeader
            eyebrow="The menu"
            title="What can you build with credits?"
            description="Pick by the result you want — every build shows its credit cost, and a ⭐ marks where most businesses start. On your monthly roadmap call we help you choose."
          />

          {/* Legend */}
          <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 rounded-xl border border-line bg-surface-2 px-4 py-3">
            {creditLegend.map((l) => (
              <span key={l.tag} className="inline-flex items-center gap-1.5 text-xs text-ink-soft">
                <CreditPill credits={l.tag} />
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
                          <CreditPill credits={b.credits} />
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
          <p className="mt-6 text-xs text-muted">
            Credit costs are planning estimates. Final scope is confirmed with Reel Axis before work
            begins.
          </p>
        </Container>
      </section>

      {/* FAQ */}
      <section className="bg-surface-2 py-16 sm:py-20">
        <Container>
          <SectionHeader eyebrow="FAQ" title="Common questions" align="center" className="mx-auto" />
          <div className="mx-auto mt-10 max-w-3xl divide-y divide-line rounded-[var(--radius-card)] border border-line bg-surface">
            {aiEmployeeFaqs.map((f) => (
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
        </Container>
      </section>

      <CTASection
        title="Ready to build your first AI roadmap?"
        description="You don't need to hire a full-time AI employee to start using AI seriously. Get a recurring AI operator, a clear monthly process, and practical build credits for the systems your team actually needs."
        ctaLabel="Book an AI Roadmap Call"
        ctaHref={auditHref}
      />
    </>
  );
}

// Credit pill, shaded light -> dark as the credit cost increases.
function CreditPill({ credits }: { credits: CreditCost }) {
  const styles: Record<CreditCost, string> = {
    "1": "bg-surface-3 text-ink-soft",
    "3": "bg-brand-50 text-brand-700",
    "6": "bg-brand text-white",
    Custom: "bg-accent-soft text-[#8a5410]",
  };
  return (
    <span
      className={`inline-flex h-6 min-w-[1.5rem] flex-none items-center justify-center rounded-md px-1.5 text-[11px] font-bold ${styles[credits]}`}
    >
      {credits}
    </span>
  );
}
