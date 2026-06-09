import type { ReactNode } from "react";
import { Container } from "@/components/layout/Container";

interface DivisionHeroProps {
  division: string;
  title: string;
  description: string;
  children?: ReactNode;
}

export function DivisionHero({
  division,
  title,
  description,
  children,
}: DivisionHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-slate-200 bg-white">
      <div className="absolute inset-x-0 top-0 h-1 bg-primary" />
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(0,107,95,.08),transparent_42%),radial-gradient(circle_at_90%_10%,rgba(215,154,16,.14),transparent_26%)]" />
      <Container className="relative py-9 sm:py-12">
        <div className="grid min-w-0 gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] lg:items-end">
          <div className="min-w-0">
            <p className="w-fit rounded-full border border-primary/15 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase text-primary">
              Central {division}
            </p>
            <h1 className="mt-3 text-wrap break-words text-3xl font-semibold tracking-tight text-foreground sm:text-5xl">
              {title}
            </h1>
            <p className="mt-4 max-w-3xl break-words text-base leading-7 text-slate-700">
              {description}
            </p>
          </div>
          {children ? <div className="min-w-0">{children}</div> : null}
        </div>
      </Container>
    </section>
  );
}
