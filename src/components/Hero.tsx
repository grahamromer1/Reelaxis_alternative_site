import { ReactNode } from "react";
import { Container } from "./Container";

export function Hero({
  eyebrow,
  title,
  subtitle,
  children,
  microcopy,
  align = "left",
  aside,
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  children?: ReactNode;
  microcopy?: ReactNode;
  align?: "left" | "center";
  aside?: ReactNode;
}) {
  const centered = align === "center";
  return (
    <section className="bg-grid relative overflow-hidden border-b border-line bg-surface-2">
      <Container className="py-16 sm:py-20 lg:py-24">
        <div
          className={
            aside
              ? "grid grid-cols-1 items-center gap-12 lg:grid-cols-2"
              : centered
                ? "mx-auto max-w-3xl text-center"
                : "max-w-3xl"
          }
        >
          <div className={centered && !aside ? "mx-auto" : ""}>
            {eyebrow ? (
              <p className="mb-4 inline-flex items-center rounded-full border border-line bg-surface px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-brand-600">
                {eyebrow}
              </p>
            ) : null}
            <h1 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl md:text-5xl lg:text-[3.25rem] lg:leading-[1.07]">
              {title}
            </h1>
            {subtitle ? (
              <p
                className={`mt-5 text-lg leading-relaxed text-ink-soft ${
                  centered && !aside ? "mx-auto max-w-2xl" : "max-w-xl"
                }`}
              >
                {subtitle}
              </p>
            ) : null}
            {children ? (
              <div
                className={`mt-8 flex flex-wrap gap-3 ${
                  centered && !aside ? "justify-center" : ""
                }`}
              >
                {children}
              </div>
            ) : null}
            {microcopy ? (
              <p className="mt-5 text-sm text-muted">{microcopy}</p>
            ) : null}
          </div>
          {aside ? <div>{aside}</div> : null}
        </div>
      </Container>
    </section>
  );
}
