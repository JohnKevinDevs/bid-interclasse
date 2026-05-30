import Link from "next/link";
import { MobileMenu } from "@/components/navigation/MobileMenu";
import { Navbar } from "@/components/navigation/Navbar";
import { Container } from "@/components/layout/Container";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-sm font-bold text-white">
            BID
          </span>
          <span className="text-sm font-semibold uppercase text-foreground">
            Interclasse CEAP
          </span>
        </Link>
        <Navbar />
        <MobileMenu />
      </Container>
    </header>
  );
}
