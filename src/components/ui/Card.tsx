import Link from "next/link";
import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  href?: string;
  className?: string;
}

const cardClass =
  "block rounded-lg border border-slate-200 bg-white p-5 shadow-sm ring-1 ring-transparent transition hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-lg hover:ring-primary/10 focus-visible:outline-accent";

export function Card({ children, href, className = "" }: CardProps) {
  const classes = `${cardClass} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return <article className={classes}>{children}</article>;
}
