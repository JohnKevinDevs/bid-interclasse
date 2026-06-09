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
      className="group relative grid overflow-hidden rounded-lg border border-line bg-surface p-5 shadow-sm ring-1 ring-transparent transition hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-lg hover:shadow-navy/5 hover:ring-primary/10 focus-visible:outline-blue-light"
    >
      <span className="absolute inset-y-0 left-0 w-1 bg-primary transition group-hover:bg-accent" />
      <div>
        <p className="bid-kicker text-primary">{eyebrow}</p>
        <h2 className="bid-display mt-3 text-3xl leading-none text-ink">
          {title}
        </h2>
        <p className="mt-3 text-sm leading-6 text-slate-600">{description}</p>
      </div>
      {meta ? (
        <p className="mt-6 w-fit self-end rounded-lg border border-line bg-surface-alt px-3 py-1 text-xs font-bold uppercase text-slate-600 group-hover:border-primary/25 group-hover:bg-primary/10 group-hover:text-primary">
          {meta}
        </p>
      ) : null}
    </Link>
  );
}
