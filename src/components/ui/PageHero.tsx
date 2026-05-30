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
    <section className="relative overflow-hidden bg-foreground text-white">
      <div className="absolute inset-0 opacity-25 [background-image:linear-gradient(120deg,transparent_0,transparent_42%,rgba(255,255,255,.22)_42%,rgba(255,255,255,.22)_44%,transparent_44%),radial-gradient(circle_at_85%_20%,rgba(215,154,16,.75),transparent_28%)]" />
      <Container className="relative py-10 sm:py-14 lg:py-18">
        <div className="grid min-w-0 gap-6 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,0.65fr)] lg:items-end">
          <div className="min-w-0">
            <p className="text-sm font-semibold uppercase text-accent">{eyebrow}</p>
            <h1 className="mt-4 max-w-4xl text-wrap break-words text-3xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              {title}
            </h1>
            <p className="mt-5 max-w-3xl break-words text-base leading-8 text-white/78 sm:text-lg">
              {description}
            </p>
          </div>
          {children ? <div className="min-w-0">{children}</div> : null}
        </div>
      </Container>
    </section>
  );
}
