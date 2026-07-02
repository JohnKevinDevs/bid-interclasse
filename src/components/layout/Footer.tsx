import Image from "next/image";
import { Container } from "@/components/layout/Container";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-navy text-white">
      <span
        className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary via-blue-light to-accent"
        aria-hidden="true"
      />
      <div className="bid-pattern absolute inset-0" />
      <Container className="relative grid gap-6 py-10 text-sm sm:grid-cols-[1fr_auto] sm:items-end">
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
              Consulta pública do Interclasse CEAP, organizada pela Federação
              Atlética CEAP.
            </p>
          </div>
        </div>
        <div className="sm:text-right">
          <p className="bid-kicker text-accent">
            Uma escola. Grandes talentos. Um legado.
          </p>
          <p className="mt-2 text-xs font-semibold uppercase text-white/45">
            CEAP além da sala. FAC além do esporte.
          </p>
        </div>
      </Container>
    </footer>
  );
}
