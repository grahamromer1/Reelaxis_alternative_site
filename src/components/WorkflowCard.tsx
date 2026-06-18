export function WorkflowCard({
  title,
  description,
  badge = "Example workflow",
}: {
  title: string;
  description: string;
  badge?: string;
}) {
  return (
    <div className="flex h-full flex-col rounded-[var(--radius-card)] border border-line bg-surface p-6 transition hover:shadow-lg hover:shadow-brand/5">
      <span className="inline-flex w-fit items-center rounded-full bg-surface-3 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-muted">
        {badge}
      </span>
      <h3 className="mt-4 text-lg font-semibold text-ink">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-ink-soft">{description}</p>
    </div>
  );
}
