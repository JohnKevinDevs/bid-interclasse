import type { ReactNode } from "react";
import { Container } from "@/components/layout/Container";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  description: string;
  children?: ReactNode;
}

export function PageHero({ eyebrow, title, description, children }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-slate-900 bg-foreground text-white">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,.12)_0,rgba(255,255,255,.02)_34%,transparent_34%),radial-gradient(circle_at_86%_18%,rgba(215,154,16,.72),transparent_25%),radial-gradient(circle_at_12%_86%,rgba(0,107,95,.7),transparent_30%)] opacity-75" />
      <div className="absolute inset-x-0 bottom-0 h-1 bg-accent" />
      <Container className="relative py-10 sm:py-14 lg:py-16">
        <div className="grid min-w-0 gap-6 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,0.65fr)] lg:items-end">
          <div className="min-w-0">
            <p className="w-fit rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold uppercase text-accent">
              {eyebrow}
            </p>
            <h1 className="mt-4 max-w-4xl text-wrap break-words text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              {title}
            </h1>
            <p className="mt-5 max-w-3xl break-words text-base leading-7 text-white/78 sm:text-lg">
              {description}
            </p>
          </div>
          {children ? <div className="min-w-0">{children}</div> : null}
        </div>
      </Container>
    </section>
  );
}
