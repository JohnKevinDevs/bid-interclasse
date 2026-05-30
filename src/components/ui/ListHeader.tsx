interface ListHeaderProps {
  eyebrow: string;
  title: string;
  description: string;
  meta?: string;
}

export function ListHeader({
  eyebrow,
  title,
  description,
  meta,
}: ListHeaderProps) {
  return (
    <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase text-primary">{eyebrow}</p>
        <h2 className="mt-2 text-2xl font-semibold tracking-tight text-foreground">
          {title}
        </h2>
        <p className="mt-2 text-sm leading-6 text-slate-700">{description}</p>
      </div>
      {meta ? (
        <p className="w-fit rounded-full bg-white px-3 py-1 text-xs font-semibold uppercase text-slate-600 shadow-sm">
          {meta}
        </p>
      ) : null}
    </div>
  );
}
