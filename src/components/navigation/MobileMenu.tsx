"use client";

import Link from "next/link";
import { useState } from "react";
import { navItems } from "@/components/navigation/Navbar";

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        className="inline-flex min-h-11 items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-foreground shadow-sm"
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
        aria-label={isOpen ? "Fechar menu principal" : "Abrir menu principal"}
        onClick={() => setIsOpen((current) => !current)}
      >
        <span className="grid gap-1" aria-hidden="true">
          <span className="h-0.5 w-4 rounded-full bg-foreground" />
          <span className="h-0.5 w-4 rounded-full bg-foreground" />
          <span className="h-0.5 w-4 rounded-full bg-foreground" />
        </span>
        Menu
      </button>

      {isOpen ? (
        <nav
          id="mobile-menu"
          className="absolute left-4 right-4 top-[4.75rem] z-50 rounded-lg border border-slate-200 bg-white p-2 shadow-xl"
          aria-label="Principal mobile"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block min-h-11 rounded-md px-3 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-100 hover:text-primary focus-visible:outline-accent"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      ) : null}
    </div>
  );
}
