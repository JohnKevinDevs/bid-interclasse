import Link from "next/link";

interface QuickAccessCardProps {
  href: string;
  eyebrow: string;
  title: string;
  description: string;
  meta?: string;
  tone?: "blue" | "orange";
}

export function QuickAccessCard({
  href,
  eyebrow,
  title,
  description,
  meta,
  tone = "blue",
}: QuickAccessCardProps) {
  const toneClassName =
    tone === "orange"
      ? {
          bar: "bg-accent",
          text: "text-accent",
          hover: "hover:border-accent/40 hover:ring-accent/10",
          meta:
            "group-hover:border-accent/25 group-hover:bg-accent/15 group-hover:text-[#7a4f00]",
        }
      : {
          bar: "bg-primary",
          text: "text-primary",
          hover: "hover:border-primary/40 hover:ring-primary/10",
          meta:
            "group-hover:border-primary/25 group-hover:bg-primary/10 group-hover:text-primary",
        };

  return (
    <Link
      href={href}
      className={`group relative grid overflow-hidden rounded-xl border border-line bg-surface p-5 shadow-sm ring-1 ring-transparent transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-navy/5 focus-visible:outline-blue-light ${toneClassName.hover}`}
    >
      <span className={`absolute inset-y-0 left-0 w-1 ${toneClassName.bar}`} />
      <div>
        <p className={`bid-kicker ${toneClassName.text}`}>{eyebrow}</p>
        <h2 className="bid-display mt-3 text-3xl leading-none text-ink">
          {title}
        </h2>
        <p className="mt-3 text-sm leading-6 text-slate-600">{description}</p>
      </div>
      {meta ? (
        <p
          className={`mt-6 inline-flex w-fit items-center gap-1 self-end rounded-lg border border-line bg-surface-alt px-3 py-1 text-xs font-bold uppercase text-slate-600 transition ${toneClassName.meta}`}
        >
          {meta} <span aria-hidden="true">→</span>
        </p>
      ) : null}
    </Link>
  );
}
