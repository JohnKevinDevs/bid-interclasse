import Image from "next/image";
import Link from "next/link";
import { MobileMenu } from "@/components/navigation/MobileMenu";
import { Navbar } from "@/components/navigation/Navbar";
import { Container } from "@/components/layout/Container";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-white/95 shadow-sm backdrop-blur">
      <Container className="flex min-h-16 items-center justify-between gap-3 py-3">
        <Link
          href="/"
          className="flex min-w-0 items-center gap-3 rounded-lg focus-visible:outline-blue-light"
          aria-label="Ir para a home do BID Interclasse CEAP"
        >
          <span className="flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-navy shadow-sm ring-1 ring-navy/10">
            <Image
              src="/images/brand/fac-logo-oficial.png"
              alt=""
              width={44}
              height={44}
              className="h-full w-full object-cover"
              aria-hidden="true"
            />
          </span>
          <span className="min-w-0">
            <span className="bid-display block truncate text-lg leading-none text-ink">
              Interclasse CEAP
            </span>
            <span className="bid-kicker mt-1 block truncate text-primary">
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
