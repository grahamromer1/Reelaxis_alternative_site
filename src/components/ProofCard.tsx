import { CaseStudy } from "@/data/caseStudies";

const statusStyles: Record<string, string> = {
  Example: "bg-surface-3 text-muted",
  Anonymized: "bg-accent-soft text-[#8a5410]",
  "Real client": "bg-brand-50 text-brand-700",
};

export function ProofCard({ study }: { study: CaseStudy }) {
  return (
    <article className="flex h-full flex-col rounded-[var(--radius-card)] border border-line bg-surface p-6">
      <div className="flex items-center justify-between gap-3">
        <span className="text-xs font-semibold uppercase tracking-wide text-brand-600">
          {study.businessType}
        </span>
        <span
          className={`rounded-full px-2.5 py-1 text-[11px] font-semibold ${
            statusStyles[study.status] ?? statusStyles.Example
          }`}
        >
          {study.status}
        </span>
      </div>

      <h3 className="mt-3 text-lg font-semibold text-ink">{study.title}</h3>

      <dl className="mt-4 space-y-3 text-sm">
        <div>
          <dt className="font-semibold text-ink-soft">Problem</dt>
          <dd className="text-muted">{study.problem}</dd>
        </div>
        <div>
          <dt className="font-semibold text-ink-soft">Workflow built</dt>
          <dd className="text-muted">{study.workflow}</dd>
        </div>
        <div>
          <dt className="font-semibold text-ink-soft">Result type</dt>
          <dd className="text-muted">{study.resultType}</dd>
        </div>
      </dl>

      <div className="mt-5 flex flex-wrap gap-2 border-t border-line pt-4">
        {study.tools.map((tool) => (
          <span
            key={tool}
            className="rounded-md bg-surface-2 px-2 py-1 text-xs font-medium text-ink-soft"
          >
            {tool}
          </span>
        ))}
      </div>
    </article>
  );
}
