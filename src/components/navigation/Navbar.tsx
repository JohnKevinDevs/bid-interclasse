import Link from "next/link";

export const navItems = [
  { href: "/", label: "Home" },
  { href: "/eci", label: "ECI" },
  { href: "/ept", label: "EPT" },
  { href: "/regulamentos", label: "Regulamentos" },
  { href: "/sobre", label: "Sobre" },
];

export function Navbar() {
  return (
    <nav className="hidden items-center gap-1 md:flex" aria-label="Principal">
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="rounded-full px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 hover:text-primary focus-visible:outline-accent"
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
