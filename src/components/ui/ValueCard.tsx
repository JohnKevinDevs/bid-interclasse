interface ValueCardProps {
  title: string;
  description: string;
  index: string;
}

export function ValueCard({ title, description, index }: ValueCardProps) {
  return (
    <article className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
      <p className="text-xs font-semibold uppercase text-accent">{index}</p>
      <h3 className="mt-3 text-lg font-semibold text-foreground">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-700">{description}</p>
    </article>
  );
}
