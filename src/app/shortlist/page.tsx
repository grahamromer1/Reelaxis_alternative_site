import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/Hero";
import { Container } from "@/components/Container";
import { SectionHeader } from "@/components/SectionHeader";
import { CTAButton } from "@/components/CTAButton";
import { CTASection } from "@/components/CTASection";
import { FunctionIcon } from "@/components/FunctionIcon";
import {
  shortlistOfferings,
  shortlistPricing,
  ladder,
  shortlistFaqs,
  shortlistCta,
} from "@/data/shortlist";

export const metadata: Metadata = {
  title: "The Shortlist — Practical AI Membership for SMBs ($250/mo)",
  description:
    "A $250/mo membership that gives small-business owners the few AI moves that matter, the skills to use them, and a guide on call. Get capable with AI without hiring it out.",
};

export default function ShortlistPage() {
  return (
    <>
      <Hero
        eyebrow="The Shortlist  ·  $250/mo membership"
        title={
          <>
            Get good at AI — <span className="text-brand">without hiring it out.</span>
          </>
        }
        subtitle="The Shortlist gives small-business owners the few AI moves that matter, the skills to use them, and a guide on call — so you get capable fast, for the price of one software subscription."
        microcopy="Practical, plain-English, no hype. Cancel anytime."
      >
        <CTAButton href={shortlistCta.join} variant="primary" className="group">
          Join The Shortlist — $250/mo
        </CTAButton>
        <CTAButton href={shortlistCta.aiEmployee} variant="secondary" className="group">
          Want it done for you? See AI Employee
        </CTAButton>
      </Hero>

      {/* Who it's for */}
      <section className="py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <SectionHeader
              eyebrow="Who it's for"
              title="For owners who want to get capable — not hand it off yet."
              description="You're interested in AI and short on time. You don't need a full done-for-you build; you need the few things that matter, the skills to act on them, and someone to ask when you're stuck."
              align="center"
              className="mx-auto"
            />
          </div>
        </Container>
      </section>

      {/* What you get */}
      <section className="bg-surface-2 py-16 sm:py-20">
        <Container>
          <SectionHeader
            eyebrow="What you get"
            title="Everything in the membership"
            description="Seven things, one simple membership."
          />
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {shortlistOfferings.map((o, i) => (
              <div
                key={o.title}
                className="flex flex-col rounded-[var(--radius-card)] border border-line bg-surface p-6"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-brand-50 text-brand">
                    <FunctionIcon slug={o.iconSlug} className="h-[22px] w-[22px]" />
                  </span>
                  <span className="text-xs font-bold text-muted/70">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-4 text-lg font-semibold text-ink">{o.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{o.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Pricing */}
      <section className="py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-lg">
            <div className="rounded-2xl border border-brand bg-surface p-8 text-center shadow-xl shadow-brand/10">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-600">
                The Shortlist membership
              </p>
              <div className="mt-4 flex items-baseline justify-center gap-1">
                <span className="text-5xl font-bold tracking-tight text-ink">
                  {shortlistPricing.price}
                </span>
                <span className="text-base text-muted">{shortlistPricing.cadence}</span>
              </div>
              <p className="mt-2 text-sm text-muted">{shortlistPricing.note}</p>
              <div className="mt-6">
                <CTAButton href={shortlistCta.join} variant="primary" className="group w-full">
                  Join The Shortlist
                </CTAButton>
              </div>
              <p className="mt-5 border-t border-line pt-5 text-sm text-ink-soft">
                {shortlistPricing.credit}
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* The ladder — Shortlist vs AI Employee */}
      <section className="bg-surface-2 py-16 sm:py-20">
        <Container>
          <SectionHeader
            eyebrow="How it fits"
            title="Two ways to work with Reel Axis"
            description="Start where you are. Move up when you're ready — your membership credits toward it."
            align="center"
            className="mx-auto"
          />
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
            {ladder.map((tier) => (
              <div
                key={tier.name}
                className={`flex flex-col rounded-2xl border p-7 ${
                  tier.current ? "border-brand bg-surface" : "border-line bg-surface"
                }`}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-ink">{tier.name}</h3>
                  {tier.current ? (
                    <span className="rounded-full bg-brand px-2.5 py-1 text-[11px] font-semibold text-white">
                      You're here
                    </span>
                  ) : null}
                </div>
                <p className="mt-1 text-sm font-bold text-brand-700">{tier.price}</p>
                <p className="mt-3 text-sm font-medium text-ink-soft">{tier.line}</p>
                <ul className="mt-4 space-y-2.5 border-t border-line pt-4">
                  {tier.points.map((p) => (
                    <li key={p} className="flex items-start gap-2.5 text-sm text-ink-soft">
                      <span className="mt-0.5 text-brand">✓</span>
                      {p}
                    </li>
                  ))}
                </ul>
                {!tier.current ? (
                  <div className="mt-6">
                    <CTAButton href={tier.href} variant="secondary" className="group w-full">
                      Explore AI Employee
                    </CTAButton>
                  </div>
                ) : null}
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
            {shortlistFaqs.map((f) => (
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
            Need more than the membership?{" "}
            <Link href={shortlistCta.aiEmployee} className="font-semibold text-brand hover:text-brand-700">
              See AI Employee — done-for-you →
            </Link>
          </p>
        </Container>
      </section>

      <CTASection
        title="Get capable with AI — for $250 a month."
        description="Join The Shortlist and start with a working skill in week one. Ready for done-for-you instead? Take a look at AI Employee."
        ctaLabel="Join The Shortlist"
        ctaHref={shortlistCta.join}
      />
    </>
  );
}
