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
    <section className="relative overflow-hidden border-b border-navy bg-navy text-white">
      <div className="bid-pattern absolute inset-0" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-white/10" />
      <Container className="relative py-12 sm:py-16 lg:py-20">
        <div className="grid min-w-0 gap-8 lg:grid-cols-[minmax(0,1.3fr)_minmax(320px,0.7fr)] lg:items-center">
          <div className="min-w-0">
            <p className="bid-kicker w-fit rounded-full border border-white/20 bg-white/10 px-4 py-2 text-blue-light">
              {eyebrow}
            </p>
            <h1 className="bid-display mt-5 max-w-4xl text-wrap break-words text-5xl leading-[0.95] sm:text-6xl lg:text-7xl">
              {title}
            </h1>
            <p className="mt-6 max-w-2xl break-words text-base leading-7 text-white/78 sm:text-lg">
              {description}
            </p>
          </div>
          {children ? <div className="min-w-0">{children}</div> : null}
        </div>
      </Container>
    </section>
  );
}
