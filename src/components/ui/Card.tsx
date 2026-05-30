import Link from "next/link";
import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  href?: string;
  className?: string;
}

const cardClass =
  "block rounded-lg border border-slate-200 bg-white p-5 shadow-sm transition hover:border-primary hover:shadow-lg";

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
