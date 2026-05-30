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
    <section className="border-b border-slate-200 bg-white">
      <Container className="py-10 sm:py-14">
        <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr] lg:items-end">
          <div>
            <p className="text-sm font-semibold uppercase text-primary">
              Central {division}
            </p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              {title}
            </h1>
            <p className="mt-4 max-w-3xl text-base leading-7 text-slate-700">
              {description}
            </p>
          </div>
          {children ? <div>{children}</div> : null}
        </div>
      </Container>
    </section>
  );
}
