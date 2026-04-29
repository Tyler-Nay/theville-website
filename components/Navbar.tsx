import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/programs", label: "Programs" },
  { href: "/register", label: "Register" },
  { href: "/tournaments", label: "Tournaments" },
  { href: "/sponsors", label: "Sponsors" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/85 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="The Ville Athletics Logo"
            width={46}
            height={46}
            className="rounded-full"
            priority
          />
          <div className="leading-tight">
            <p className="text-base font-black tracking-wide text-white">THE VILLE</p>
            <p className="text-xs uppercase tracking-[0.25em] text-zinc-400">Athletics</p>
          </div>
        </Link>

        <div className="hidden items-center gap-7 text-sm font-semibold text-zinc-200 md:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="transition hover:text-red-400">
              {link.label}
            </Link>
          ))}
        </div>

        <Link
          href="/register"
          className="hidden rounded-full bg-red-700 px-5 py-2 text-sm font-bold text-white transition hover:bg-red-600 md:inline-flex"
        >
          Join Now
        </Link>
      </nav>
    </header>
  );
}
