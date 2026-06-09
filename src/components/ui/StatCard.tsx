interface StatCardProps {
  label: string;
  value: string | number;
  description?: string;
  dark?: boolean;
}

export function StatCard({ label, value, description, dark = false }: StatCardProps) {
  return (
    <div
      className={`rounded-lg border p-4 shadow-sm sm:p-5 ${
        dark
          ? "border-white/15 bg-white/10 text-white"
          : "border-line bg-surface text-ink"
      }`}
    >
      <p className={`bid-kicker ${dark ? "text-white/65" : "text-slate-500"}`}>
        {label}
      </p>
      <p className="bid-display mt-2 text-5xl leading-none">{value}</p>
      {description ? (
        <p className={`mt-2 text-sm leading-5 ${dark ? "text-white/75" : "text-slate-600"}`}>
          {description}
        </p>
      ) : null}
    </div>
  );
}
