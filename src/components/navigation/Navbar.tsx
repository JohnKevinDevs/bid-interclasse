"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export const navItems = [
  { href: "/", label: "Home" },
  { href: "/eci", label: "ECI" },
  { href: "/ept", label: "EPT" },
  { href: "/regulamentos", label: "Regulamentos" },
  { href: "/sobre", label: "Sobre" },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="hidden items-center gap-1 md:flex" aria-label="Principal">
      {navItems.map((item) => {
        const isActive =
          item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

        return (
          <Link
            key={item.href}
            href={item.href}
            aria-current={isActive ? "page" : undefined}
            className={`inline-flex min-h-11 items-center rounded-lg px-4 py-2 text-sm font-bold transition focus-visible:outline-blue-light ${
              isActive
                ? "bg-primary text-white shadow-sm"
                : "text-ink hover:bg-surface-alt hover:text-primary"
            }`}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
