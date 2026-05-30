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
        className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-foreground"
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
        onClick={() => setIsOpen((current) => !current)}
      >
        Menu
      </button>

      {isOpen ? (
        <nav
          id="mobile-menu"
          className="absolute left-4 right-4 top-20 rounded-lg border border-slate-200 bg-white p-3 shadow-lg"
          aria-label="Principal mobile"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block rounded-md px-3 py-3 text-sm font-medium text-slate-700 hover:bg-slate-100 hover:text-primary"
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
