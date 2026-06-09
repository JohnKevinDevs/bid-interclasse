"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { navItems } from "@/components/navigation/Navbar";

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        className="inline-flex min-h-11 items-center justify-center rounded-lg border border-line bg-white px-3 py-2 text-sm font-bold text-ink shadow-sm"
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
        aria-label={isOpen ? "Fechar menu principal" : "Abrir menu principal"}
        onClick={() => setIsOpen((current) => !current)}
      >
        <span className="grid gap-1" aria-hidden="true">
          <span className="h-0.5 w-5 rounded-full bg-ink" />
          <span className="h-0.5 w-5 rounded-full bg-ink" />
          <span className="h-0.5 w-5 rounded-full bg-ink" />
        </span>
      </button>

      {isOpen ? (
        <nav
          id="mobile-menu"
          className="fixed inset-x-4 top-4 z-50 rounded-[1.35rem] border border-white/10 bg-navy p-5 text-white shadow-2xl"
          aria-label="Principal mobile"
        >
          <div className="mb-8 flex items-center justify-between gap-4">
            <div className="flex min-w-0 items-center gap-3">
              <Image
                src="/images/brand/fac-logo-oficial.png"
                alt=""
                width={42}
                height={42}
                className="h-10 w-10 rounded-lg object-cover"
                aria-hidden="true"
              />
              <div className="min-w-0">
                <p className="bid-display text-lg leading-none">Menu</p>
                <p className="bid-kicker mt-1 text-blue-light">Portal oficial</p>
              </div>
            </div>
            <button
              type="button"
              className="grid h-11 w-11 place-items-center rounded-lg border border-white/15 text-3xl leading-none text-white"
              aria-label="Fechar menu principal"
              onClick={() => setIsOpen(false)}
            >
              X
            </button>
          </div>

          <div className="grid gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="bid-display block border-b border-white/10 py-4 text-3xl leading-none text-white transition hover:text-blue-light focus-visible:outline-blue-light"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <Link
            href="/"
            className="mt-8 flex min-h-12 items-center justify-center rounded-lg bg-primary px-5 py-3 text-sm font-bold uppercase text-white shadow-lg shadow-primary/20 transition hover:bg-blue-light focus-visible:outline-blue-light"
            onClick={() => setIsOpen(false)}
          >
            Consultar o BID -&gt;
          </Link>
          <p className="bid-kicker mt-5 text-center text-white/45">
            Uma escola. Grandes talentos. Um legado.
          </p>
        </nav>
      ) : null}
    </div>
  );
}
