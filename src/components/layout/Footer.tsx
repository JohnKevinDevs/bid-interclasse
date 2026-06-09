import Image from "next/image";
import { Container } from "@/components/layout/Container";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-navy text-white">
      <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(45,168,255,.10),transparent_38%),linear-gradient(150deg,transparent_0,transparent_62%,rgba(245,157,26,.12)_62%,transparent_78%)]" />
      <Container className="relative grid gap-6 py-8 text-sm sm:grid-cols-[1fr_auto] sm:items-end">
        <div className="flex items-start gap-4">
          <span className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-white/10 ring-1 ring-white/15">
            <Image
              src="/images/brand/fac-logo-oficial.png"
              alt="Logo oficial da FAC"
              width={56}
              height={56}
              className="h-full w-full object-cover opacity-90"
            />
          </span>
          <div>
            <p className="bid-display text-xl leading-none">
              BID Interclasse CEAP/FAC
            </p>
            <p className="mt-3 max-w-2xl text-white/70">
              Consulta publica do Interclasse CEAP, organizada pela Federacao
              Atletica CEAP.
            </p>
          </div>
        </div>
        <div className="sm:text-right">
          <p className="bid-kicker text-accent">
            Uma escola. Grandes talentos. Um legado.
          </p>
          <p className="mt-2 text-xs font-semibold uppercase text-white/45">
            CEAP alem da sala. FAC alem do esporte.
          </p>
        </div>
      </Container>
    </footer>
  );
}
