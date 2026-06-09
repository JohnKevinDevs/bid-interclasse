import Link from "next/link";
import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  href?: string;
  className?: string;
}

const cardClass =
  "block rounded-lg border border-line bg-surface p-5 shadow-sm ring-1 ring-transparent transition hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-lg hover:shadow-navy/5 hover:ring-primary/10 focus-visible:outline-blue-light";

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
