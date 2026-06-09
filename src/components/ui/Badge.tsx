import type { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  tone?: "primary" | "accent" | "muted" | "dark";
  className?: string;
}

const toneClasses = {
  primary: "border-primary/15 bg-primary/10 text-primary",
  accent: "border-accent/25 bg-accent/15 text-[#7a4f00]",
  muted: "border-line bg-surface-alt text-slate-700",
  dark: "border-navy bg-navy text-white",
};

export function Badge({
  children,
  tone = "muted",
  className = "",
}: BadgeProps) {
  return (
    <span
      className={`bid-kicker inline-flex w-fit items-center rounded-full border px-3 py-1 ${toneClasses[tone]} ${className}`}
    >
      {children}
    </span>
  );
}
