import Link from "next/link";
import { MobileMenu } from "@/components/navigation/MobileMenu";
import { Navbar } from "@/components/navigation/Navbar";
import { Container } from "@/components/layout/Container";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 shadow-sm backdrop-blur">
      <Container className="flex h-18 items-center justify-between py-3">
        <Link href="/" className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-foreground text-sm font-bold text-white shadow-sm">
            BID
          </span>
          <span>
            <span className="block text-sm font-semibold uppercase text-foreground">
              Interclasse CEAP
            </span>
            <span className="block text-xs font-medium uppercase text-primary">
              Portal Oficial
            </span>
          </span>
        </Link>
        <Navbar />
        <MobileMenu />
      </Container>
    </header>
  );
}
