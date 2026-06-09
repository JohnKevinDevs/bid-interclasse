import { Container } from "@/components/layout/Container";

export function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-foreground text-white">
      <Container className="grid gap-6 py-8 text-sm sm:grid-cols-[1fr_auto] sm:items-end">
        <div>
          <p className="text-base font-semibold">BID Interclasse CEAP/FAC</p>
          <p className="mt-2 max-w-2xl text-white/70">
            Portal publico do Interclasse CEAP, organizado por ECI e EPT.
          </p>
        </div>
        <p className="text-xs font-semibold uppercase text-accent">
          Uma escola. Grandes talentos. Um legado.
        </p>
      </Container>
    </footer>
  );
}
