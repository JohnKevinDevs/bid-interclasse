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
    <div className="mb-6 flex flex-col gap-3 border-b border-line pb-5 sm:flex-row sm:items-end sm:justify-between">
      <div className="max-w-3xl">
        <p className="bid-kicker text-primary">{eyebrow}</p>
        <h2 className="bid-display mt-2 text-4xl leading-none text-ink">
          {title}
        </h2>
        <p className="mt-2 text-sm leading-6 text-slate-700">{description}</p>
      </div>
      {meta ? (
        <p className="bid-kicker w-fit rounded-full border border-line bg-white px-3 py-1 text-slate-600 shadow-sm">
          {meta}
        </p>
      ) : null}
    </div>
  );
}
