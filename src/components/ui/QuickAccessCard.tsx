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
      className="group grid rounded-lg border border-slate-200 bg-white p-5 shadow-sm ring-1 ring-transparent transition hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-lg hover:ring-primary/10 focus-visible:outline-accent"
    >
      <div>
        <p className="text-xs font-semibold uppercase text-primary">{eyebrow}</p>
        <h2 className="mt-3 text-2xl font-semibold tracking-tight text-foreground">
          {title}
        </h2>
        <p className="mt-3 text-sm leading-6 text-slate-700">{description}</p>
      </div>
      {meta ? (
        <p className="mt-6 w-fit self-end rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase text-slate-600 group-hover:bg-primary/10 group-hover:text-primary">
          {meta}
        </p>
      ) : null}
    </Link>
  );
}
