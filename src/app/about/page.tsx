import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { Container } from "@/components/Container";
import { SectionHeader } from "@/components/SectionHeader";
import { CTASection } from "@/components/CTASection";
import { CTAButton } from "@/components/CTAButton";

export const metadata: Metadata = {
  title: "About — Operators First, AI Implementers Second",
  description:
    "Reel Axis helps businesses adopt AI the practical way: by improving the workflows that already run the company.",
};

const beliefs = [
  "AI should reduce operational drag.",
  "The right stack depends on the business.",
  "Implementation matters more than hype.",
  "Training only works when tied to real workflows.",
  "SMBs need managed systems, not more unsupported tools.",
  "The best AI work happens inside the tools teams already use.",
];

// Pulled from reelaxis.com/about/team.
// TODO: Swap the initials avatars for real headshots (next/image) when available.
const founders = [
  {
    name: "Chris Lee",
    initials: "CL",
    title: "Founder & CEO",
    bio: "Founded Reel Axis in 2018 as a B2B demand-generation agency and grew it onto the Inc. 5000. A former Wall Street professional (Merrill Lynch, Deutsche Bank), Chris runs the company on EOS and Profit First — and led its evolution into practical AI implementation for SMBs.",
  },
  {
    name: "Nick Dinsmoor",
    initials: "ND",
    title: "Strategy & AI Implementation",
    bio: "A cross-functional operator across marketing, operations, finance, and product. Nick leads strategy and AI implementation, bridging traditional demand-generation expertise with hands-on AI adoption inside real businesses.",
  },
  {
    name: "Paul Fung",
    initials: "PF",
    title: "Strategic Technology Partner — Founder, Narrow AI",
    bio: "The technical architect behind Reel Axis's agentic operations. Founder of Narrow AI, Paul provides the engineering foundation to build and scale reliable AI agents across sales, marketing, and operations workflows.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Hero
        eyebrow="About Reel Axis"
        title="Operators first. AI implementers second."
        subtitle="Reel Axis helps businesses adopt AI the practical way: by improving the workflows that already run the company."
      >
        <CTAButton href="/contact" variant="primary" className="group">
          Talk to Reel Axis
        </CTAButton>
      </Hero>

      {/* Story */}
      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <SectionHeader eyebrow="Our story" title="Built on operating experience" />
            </div>
            <div className="lg:col-span-7">
              <p className="text-lg leading-relaxed text-ink-soft">
                Reel Axis started in 2018 as a B2B demand-generation agency for
                technology companies. We grew it onto the Inc. 5000 the
                old-fashioned way — by running real sales, marketing, and
                operations for ourselves and our clients.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted">
                When AI got genuinely useful, we didn&apos;t treat it as a tech
                experiment. We treated it like operators: standardize on one
                capable model, connect it to the tools we already used, and
                rebuild the workflows that were quietly costing us hours.
                Repositioning the whole company around practical AI came out of
                that work — not out of hype.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Why we started */}
      <section className="bg-ink py-16 text-white sm:py-20">
        <Container>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-brand-500">
                Why we started this
              </p>
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
                We&apos;re business owners, not engineers.
              </h2>
            </div>
            <div className="lg:col-span-7 space-y-4">
              <p className="text-lg leading-relaxed text-white/80">
                We started Reel Axis because we watched AI go from hype to
                genuinely useful — and watched most small businesses get left
                behind. Not because the tools are too hard, but because nobody
                was turning them into real systems inside the business.
              </p>
              <p className="text-base leading-relaxed text-white/65">
                We&apos;ve run sales teams, managed operations, chased leads,
                fixed broken processes, and felt the drag of manual work
                firsthand. That&apos;s the lens we bring: practical, owner-first,
                focused on what actually moves a business — not on AI for its
                own sake.
              </p>
              <p className="text-base leading-relaxed text-white/65">
                We see a future where existing businesses — not just tech
                startups — use AI to reclaim hours, sharpen their operations,
                and find opportunities they couldn&apos;t see when everyone was
                buried in busywork. Helping owners get there is the whole point.
              </p>
              <p className="text-base leading-relaxed text-white/65">
                We&apos;re also honest about it: pick one thing to improve first,
                keep a human in the loop, and actually measure whether you saved
                time or money. That discipline is what separates a useful system
                from a flashy demo.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Founders */}
      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeader
            eyebrow="Who we are"
            title="The people behind Reel Axis"
            description="Operators who've run the kinds of teams and processes we now help improve — plus the technical partner who lets us build reliably."
          />
          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
            {founders.map((f, i) => (
              <div
                key={i}
                className="flex flex-col rounded-[var(--radius-card)] border border-line bg-surface p-6"
              >
                {/* TODO: Replace initials avatar with a real headshot. */}
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-50 text-base font-bold text-brand">
                  {f.initials}
                </div>
                <h3 className="mt-4 text-lg font-semibold text-ink">{f.name}</h3>
                <p className="text-sm font-medium text-brand-600">{f.title}</p>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                  {f.bio}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Beliefs */}
      <section className="bg-surface-2 py-16 sm:py-20">
        <Container>
          <SectionHeader
            eyebrow="What we believe"
            title="A practical philosophy, not a pitch"
          />
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {beliefs.map((b, i) => (
              <div
                key={b}
                className="rounded-[var(--radius-card)] border border-line bg-surface p-6"
              >
                <span className="text-sm font-bold text-brand-500">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="mt-2 text-base font-medium text-ink">{b}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CTASection
        title="Let's make AI useful inside your daily operations."
        ctaLabel="Talk to Reel Axis"
      />
    </>
  );
}
