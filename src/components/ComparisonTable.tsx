import { comparisonRows } from "@/data/comparison";

export function ComparisonTable() {
  return (
    <div className="overflow-hidden rounded-[var(--radius-card)] border border-line">
      <div className="grid grid-cols-2">
        <div className="bg-surface-3 px-5 py-4 text-sm font-semibold text-ink-soft sm:px-6">
          DIY AI
        </div>
        <div className="bg-brand px-5 py-4 text-sm font-semibold text-white sm:px-6">
          Reel Axis Managed AI
        </div>
      </div>
      <div className="divide-y divide-line">
        {comparisonRows.map((row) => (
          <div key={row.diy} className="grid grid-cols-2">
            <div className="flex items-center gap-2 px-5 py-4 text-sm text-muted sm:px-6">
              <span aria-hidden="true" className="text-muted/70">
                ✕
              </span>
              {row.diy}
            </div>
            <div className="flex items-center gap-2 bg-brand-50/50 px-5 py-4 text-sm font-medium text-ink sm:px-6">
              <span aria-hidden="true" className="text-brand">
                ✓
              </span>
              {row.reelAxis}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
