import { businessFunctions } from "@/data/businessFunctions";
import { FunctionIcon } from "./FunctionIcon";

export function BusinessFunctionGrid() {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {businessFunctions.map((fn) => (
        <div
          key={fn.slug}
          className="flex flex-col rounded-[var(--radius-card)] border border-line bg-surface transition hover:border-brand-500 hover:shadow-lg hover:shadow-brand/5"
        >
          {/* Top: title beside icon, description, 3 example workflows */}
          <div className="p-6">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-brand-50 text-brand">
                <FunctionIcon slug={fn.slug} className="h-[22px] w-[22px]" />
              </span>
              <h3 className="text-lg font-semibold text-ink">{fn.title}</h3>
            </div>
            <p className="mt-3 text-sm text-muted">{fn.tagline}</p>
            <ul className="mt-4 space-y-2 pl-1">
              {fn.workflows.slice(0, 3).map((w) => (
                <li key={w} className="flex items-start gap-2.5 pl-2 text-sm text-ink-soft">
                  <span
                    aria-hidden="true"
                    className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-brand-500"
                  />
                  {w}
                </li>
              ))}
            </ul>
          </div>

          {/* Bottom: example client case study */}
          <div className="mt-auto rounded-b-[var(--radius-card)] border-t border-line bg-surface-2 p-6">
            <div className="flex items-center justify-between gap-2">
              {/* Made-up placeholder company logo */}
              <div className="flex items-center gap-2.5">
                <span
                  className={`flex h-9 w-9 flex-none items-center justify-center rounded-lg text-sm font-bold text-white ${fn.proof.logoColor}`}
                >
                  {fn.proof.logoInitials}
                </span>
                <div className="leading-tight">
                  <p className="text-sm font-semibold text-ink">{fn.proof.companyName}</p>
                  <p className="text-[11px] text-muted">{fn.proof.businessType}</p>
                </div>
              </div>
              <span className="rounded-full bg-surface-3 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-muted">
                Example
              </span>
            </div>

            <blockquote className="mt-3 text-sm font-medium italic leading-relaxed text-ink">
              &ldquo;{fn.proof.quote}&rdquo;
            </blockquote>

            <p className="mt-3 text-sm text-ink-soft">
              <span className="font-semibold text-brand-700">What we built: </span>
              {fn.proof.action}
            </p>
            <p className="mt-2 flex items-center gap-1.5 text-sm font-medium text-ink">
              <span className="text-brand">✓</span>
              {fn.proof.result}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
