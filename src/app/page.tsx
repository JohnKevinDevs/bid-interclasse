import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[radial-gradient(circle_at_top,_#ffffff,_#f4f7f5_55%,_#d9e2ec)]">
      <section className="mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center px-6 py-16 sm:px-10 lg:px-12">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
            Portal Publico
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            BID Interclasse CEAP
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-700 sm:text-lg">
            Base inicial do portal do Interclasse CEAP/FAC para consulta de
            atletas, times, modalidades, regulamentos e informacoes
            institucionais.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          <Link
            href="/eci"
            className="rounded-2xl border border-surface-alt bg-surface p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-primary hover:shadow-md"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-primary">
              Divisao
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-foreground">ECI</h2>
            <p className="mt-3 text-sm leading-6 text-slate-700">
              Entrada inicial para a experiencia da ECI.
            </p>
          </Link>

          <Link
            href="/ept"
            className="rounded-2xl border border-surface-alt bg-surface p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-primary hover:shadow-md"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-primary">
              Divisao
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-foreground">EPT</h2>
            <p className="mt-3 text-sm leading-6 text-slate-700">
              Entrada inicial para a experiencia da EPT.
            </p>
          </Link>
        </div>

        <nav className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/regulamentos"
            className="rounded-full border border-surface-alt bg-white px-4 py-2 text-sm font-medium text-foreground transition hover:border-primary hover:text-primary"
          >
            Regulamentos
          </Link>
          <Link
            href="/sobre"
            className="rounded-full border border-surface-alt bg-white px-4 py-2 text-sm font-medium text-foreground transition hover:border-primary hover:text-primary"
          >
            Sobre
          </Link>
        </nav>
      </section>
    </main>
  );
}
