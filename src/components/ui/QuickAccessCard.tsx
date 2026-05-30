import Link from "next/link";

interface QuickAccessCardProps {
  href: string;
  eyebrow: string;
  title: string;
  description: string;
  meta?: string;
}

export function QuickAccessCard({
  href,
  eyebrow,
  title,
  description,
  meta,
}: QuickAccessCardProps) {
  return (
    <Link
      href={href}
      className="group grid min-h-48 rounded-lg border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-primary hover:shadow-lg"
    >
      <div>
        <p className="text-xs font-semibold uppercase text-primary">{eyebrow}</p>
        <h2 className="mt-3 text-2xl font-semibold tracking-tight text-foreground">
          {title}
        </h2>
        <p className="mt-3 text-sm leading-6 text-slate-700">{description}</p>
      </div>
      {meta ? (
        <p className="mt-6 self-end text-xs font-semibold uppercase text-slate-500 group-hover:text-primary">
          {meta}
        </p>
      ) : null}
    </Link>
  );
}
