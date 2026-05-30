import { Container } from "@/components/layout/Container";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <Container className="flex flex-col gap-2 py-6 text-sm text-slate-600 sm:flex-row sm:items-center sm:justify-between">
        <p>BID Interclasse CEAP/FAC</p>
        <p>Portal publico da competicao Interclasse.</p>
      </Container>
    </footer>
  );
}
