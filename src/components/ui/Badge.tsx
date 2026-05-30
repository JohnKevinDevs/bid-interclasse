import type { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  tone?: "primary" | "accent" | "muted" | "dark";
  className?: string;
}

const toneClasses = {
  primary: "bg-primary/10 text-primary",
  accent: "bg-accent/15 text-[#7a4f00]",
  muted: "bg-slate-100 text-slate-700",
  dark: "bg-foreground text-white",
};

export function Badge({
  children,
  tone = "muted",
  className = "",
}: BadgeProps) {
  return (
    <span
      className={`inline-flex w-fit items-center rounded-full px-3 py-1 text-xs font-semibold uppercase ${toneClasses[tone]} ${className}`}
    >
      {children}
    </span>
  );
}
