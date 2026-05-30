interface StatCardProps {
  label: string;
  value: string | number;
  description?: string;
  dark?: boolean;
}

export function StatCard({ label, value, description, dark = false }: StatCardProps) {
  return (
    <div
      className={`rounded-lg border p-5 ${
        dark
          ? "border-white/15 bg-white/10 text-white"
          : "border-slate-200 bg-white text-foreground shadow-sm"
      }`}
    >
      <p className={`text-xs font-semibold uppercase ${dark ? "text-white/70" : "text-slate-500"}`}>
        {label}
      </p>
      <p className="mt-2 text-3xl font-semibold tracking-tight">{value}</p>
      {description ? (
        <p className={`mt-2 text-sm leading-5 ${dark ? "text-white/75" : "text-slate-600"}`}>
          {description}
        </p>
      ) : null}
    </div>
  );
}
