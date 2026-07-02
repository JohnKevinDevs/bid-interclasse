import type { ReactNode } from "react";
import { Container } from "@/components/layout/Container";

interface DivisionHeroProps {
  division: string;
  title: string;
  description: string;
  children?: ReactNode;
  accent?: "blue" | "orange";
}

export function DivisionHero({
  division,
  title,
  description,
  children,
  accent = "blue",
}: DivisionHeroProps) {
  const accentClassName =
    accent === "orange" ? "text-accent" : "text-blue-light";
  const accentBarClassName = accent === "orange" ? "bg-accent" : "bg-primary";

  return (
    <section className="relative overflow-hidden border-b border-navy bg-navy text-white">
      <div className="bid-pattern absolute inset-0" />
      <span
        className={`absolute inset-x-0 bottom-0 h-1 ${accentBarClassName}`}
        aria-hidden="true"
      />
      <Container className="relative py-10 sm:py-12 lg:py-14">
        <div className="grid min-w-0 gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] lg:items-center">
          <div className="min-w-0">
            <p
              className={`bid-kicker w-fit rounded-full border border-white/20 bg-white/10 px-4 py-2 ${accentClassName}`}
            >
              Central {division}
            </p>
            <h1 className="bid-display mt-4 text-wrap break-words text-4xl leading-none text-white sm:text-5xl">
              {title}
            </h1>
            <p className="mt-4 max-w-3xl break-words text-base leading-7 text-white/78">
              {description}
            </p>
          </div>
          {children ? <div className="min-w-0">{children}</div> : null}
        </div>
      </Container>
    </section>
  );
}
