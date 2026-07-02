interface EmptyStateProps {
  title: string;
  description: string;
}

export function EmptyState({ title, description }: EmptyStateProps) {
  return (
    <div className="rounded-xl border border-dashed border-line bg-white p-6 text-center shadow-sm sm:p-8">
      <div className="mx-auto mb-4 h-2 w-16 rounded-full bg-accent" />
      <p className="bid-kicker text-primary">BID em atualizacao</p>
      <h2 className="bid-display mt-2 text-3xl leading-none text-ink">
        {title}
      </h2>
      <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
    </div>
  );
}
