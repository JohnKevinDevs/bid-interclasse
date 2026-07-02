"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navItems } from "@/components/navigation/Navbar";

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <div className="md:hidden">
      <button
        type="button"
        className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-lg border border-line bg-white px-3 py-2 text-sm font-bold text-ink shadow-sm transition hover:border-primary/40 focus-visible:outline-blue-light"
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
        <>
          <button
            type="button"
            className="fixed inset-0 z-40 bg-navy/60 backdrop-blur-sm"
            aria-label="Fechar menu principal"
            tabIndex={-1}
            onClick={() => setIsOpen(false)}
          />
          <nav
            id="mobile-menu"
            className="fixed inset-x-4 top-4 z-50 overflow-hidden rounded-2xl border border-white/10 bg-navy text-white shadow-2xl"
            aria-label="Principal mobile"
          >
            <div className="bid-pattern relative p-5">
              <span
                className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-primary via-blue-light to-accent"
                aria-hidden="true"
              />
              <div className="mb-6 flex items-center justify-between gap-4">
                <div className="flex min-w-0 items-center gap-3">
                  <Image
                    src="/images/brand/fac-logo-oficial.png"
                    alt=""
                    width={42}
                    height={42}
                    className="h-10 w-10 rounded-lg object-cover ring-1 ring-white/15"
                    aria-hidden="true"
                  />
                  <div className="min-w-0">
                    <p className="bid-display text-lg leading-none">Menu</p>
                    <p className="bid-kicker mt-1 text-blue-light">
                      Portal oficial
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  className="grid h-11 w-11 place-items-center rounded-lg border border-white/15 text-2xl leading-none text-white transition hover:bg-white/10 focus-visible:outline-blue-light"
                  aria-label="Fechar menu principal"
                  onClick={() => setIsOpen(false)}
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>

              <div className="grid gap-1">
                {navItems.map((item) => {
                  const isActive =
                    item.href === "/"
                      ? pathname === "/"
                      : pathname.startsWith(item.href);

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      aria-current={isActive ? "page" : undefined}
                      className={`bid-display flex items-center justify-between border-b border-white/10 py-4 text-3xl leading-none transition hover:text-blue-light focus-visible:outline-blue-light ${
                        isActive ? "text-blue-light" : "text-white"
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                      {isActive ? (
                        <span
                          className="h-2 w-2 rounded-full bg-accent"
                          aria-hidden="true"
                        />
                      ) : null}
                    </Link>
                  );
                })}
              </div>

              <Link
                href="/eci"
                className="mt-6 flex min-h-12 items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-bold uppercase text-white shadow-lg shadow-primary/25 transition hover:bg-blue-light focus-visible:outline-blue-light"
                onClick={() => setIsOpen(false)}
              >
                Consultar o BID <span aria-hidden="true">→</span>
              </Link>
              <p className="bid-kicker mt-5 text-center text-white/45">
                Uma escola. Grandes talentos. Um legado.
              </p>
            </div>
          </nav>
        </>
      ) : null}
    </div>
  );
}
