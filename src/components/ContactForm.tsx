"use client";

import { FormEvent, useState } from "react";

const interestAreas = [
  "Sales",
  "Marketing",
  "Finance",
  "Operations",
  "Admin",
  "Customer Service",
  "Leadership Reporting",
  "Not sure",
];

const companySizes = ["1–9", "10–25", "26–50", "51–100", "100+"];

const contactMethods = ["Email", "Phone", "Video call"];

const fieldClass =
  "mt-1.5 w-full rounded-lg border border-line bg-surface px-3.5 py-2.5 text-sm text-ink shadow-sm outline-none transition placeholder:text-muted/60 focus:border-brand-500 focus:ring-2 focus:ring-brand-50";

const labelClass = "block text-sm font-medium text-ink-soft";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: Wire this up to a real backend, email service, or CRM (e.g. HubSpot,
    // a serverless function, or a form provider). For V1 this is a placeholder.
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-[var(--radius-card)] border border-line bg-surface p-8 text-center">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-brand-50 text-brand">
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-ink">Thanks — we got it.</h3>
        <p className="mx-auto mt-2 max-w-md text-sm text-ink-soft">
          Reel Axis will review your details and follow up with next steps.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[var(--radius-card)] border border-line bg-surface p-6 sm:p-8"
    >
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClass}>
            Name
          </label>
          <input id="name" name="name" type="text" required className={fieldClass} />
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>
            Email
          </label>
          <input id="email" name="email" type="email" required className={fieldClass} />
        </div>
        <div>
          <label htmlFor="company" className={labelClass}>
            Company
          </label>
          <input id="company" name="company" type="text" className={fieldClass} />
        </div>
        <div>
          <label htmlFor="companySize" className={labelClass}>
            Company size
          </label>
          <select id="companySize" name="companySize" className={fieldClass} defaultValue="">
            <option value="" disabled>
              Select team size
            </option>
            {companySizes.map((s) => (
              <option key={s} value={s}>
                {s} employees
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="website" className={labelClass}>
            Website
          </label>
          <input id="website" name="website" type="url" placeholder="https://" className={fieldClass} />
        </div>
        <div>
          <label htmlFor="tools" className={labelClass}>
            Primary tools used
          </label>
          <input
            id="tools"
            name="tools"
            type="text"
            placeholder="e.g. HubSpot, QuickBooks, Google Workspace"
            className={fieldClass}
          />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="interest" className={labelClass}>
            Main area of interest
          </label>
          <select id="interest" name="interest" className={fieldClass} defaultValue="">
            <option value="" disabled>
              Select an area
            </option>
            {interestAreas.map((a) => (
              <option key={a} value={a}>
                {a}
              </option>
            ))}
          </select>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="goal" className={labelClass}>
            What do you want AI to help with?
          </label>
          <textarea id="goal" name="goal" rows={4} className={fieldClass} />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="currentAi" className={labelClass}>
            Are you already using Claude, ChatGPT, Copilot, Gemini, or other AI tools?
          </label>
          <input id="currentAi" name="currentAi" type="text" className={fieldClass} />
        </div>
        <div className="sm:col-span-2">
          <span className={labelClass}>Preferred contact method</span>
          <div className="mt-2 flex flex-wrap gap-4">
            {contactMethods.map((m, i) => (
              <label key={m} className="inline-flex items-center gap-2 text-sm text-ink-soft">
                <input
                  type="radio"
                  name="contactMethod"
                  value={m}
                  defaultChecked={i === 0}
                  className="h-4 w-4 accent-[color:var(--color-brand)]"
                />
                {m}
              </label>
            ))}
          </div>
        </div>
      </div>

      <button
        type="submit"
        className="mt-7 inline-flex w-full items-center justify-center rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-700 sm:w-auto"
      >
        Request AI Implementation Plan
      </button>
    </form>
  );
}
