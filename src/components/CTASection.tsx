import { Container } from "./Container";
import { CTAButton } from "./CTAButton";

export function CTASection({
  title = "Ready to turn AI into working business systems?",
  description = "Tell us what tools your team uses and where work feels slow. We'll help identify where AI can create the most leverage.",
  ctaLabel = "Get Your AI Implementation Plan",
  ctaHref = "/contact",
}: {
  title?: string;
  description?: string;
  ctaLabel?: string;
  ctaHref?: string;
}) {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="overflow-hidden rounded-3xl bg-ink px-6 py-12 text-center sm:px-12 sm:py-16">
          <h2 className="mx-auto max-w-2xl text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl">
            {title}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/70">
            {description}
          </p>
          <div className="mt-8 flex justify-center">
            <CTAButton href={ctaHref} variant="primary" className="group">
              {ctaLabel}
            </CTAButton>
          </div>
        </div>
      </Container>
    </section>
  );
}
