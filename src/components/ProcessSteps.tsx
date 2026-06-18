import { ProcessStep } from "@/data/workflows";

export function ProcessSteps({ steps }: { steps: ProcessStep[] }) {
  return (
    <ol className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
      {steps.map((s) => (
        <li
          key={s.step}
          className="relative flex flex-col rounded-[var(--radius-card)] border border-line bg-surface p-6"
        >
          <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-brand text-sm font-bold text-white">
            {s.step}
          </div>
          <h3 className="text-base font-semibold text-ink">{s.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-ink-soft">
            {s.description}
          </p>
        </li>
      ))}
    </ol>
  );
}
