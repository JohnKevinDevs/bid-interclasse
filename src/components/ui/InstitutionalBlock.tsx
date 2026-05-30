import type { ReactNode } from "react";

interface InstitutionalBlockProps {
  eyebrow?: string;
  title: string;
  children: ReactNode;
  className?: string;
}

export function InstitutionalBlock({
  eyebrow,
  title,
  children,
  className = "",
}: InstitutionalBlockProps) {
  return (
    <section
      className={`rounded-lg border border-slate-200 bg-white p-6 shadow-sm ${className}`}
    >
      {eyebrow ? (
        <p className="text-xs font-semibold uppercase text-primary">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="mt-3 text-2xl font-semibold tracking-tight text-foreground">
        {title}
      </h2>
      <div className="mt-4 space-y-4 text-sm leading-7 text-slate-700">
        {children}
      </div>
    </section>
  );
}
