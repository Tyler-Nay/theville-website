"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/programs", label: "Programs" },
  { href: "/events", label: "Events" },
  { href: "/news", label: "News" },
  { href: "/register", label: "Register" },
  { href: "/gallery", label: "Gallery" },
  { href: "/faq", label: "FAQ" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/90 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-6">
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className="flex items-center gap-3"
        >
          <Image
            src="/logo.png"
            alt="The Ville Athletics Logo"
            width={46}
            height={46}
            priority
          />

          <div className="leading-tight">
            <p className="text-base font-black uppercase tracking-tight text-white">
              The Ville
            </p>
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[var(--ville-red-bright)]">
              Athletics
            </p>
          </div>
        </Link>

        <div className="hidden items-center gap-6 text-sm font-bold uppercase text-zinc-300 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition hover:text-[var(--ville-red-bright)]"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <Link
          href="/register"
          className="hidden rounded-full bg-[var(--ville-red)] px-5 py-2 text-sm font-black uppercase text-white transition hover:bg-[var(--ville-red-bright)] md:inline-flex lg:hidden xl:inline-flex"
        >
          Join
        </Link>

        <button
          onClick={() => setOpen(!open)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-full border border-white/10 bg-white/5 lg:hidden"
          aria-label="Open menu"
          aria-expanded={open}
        >
          <span
            className={`h-0.5 w-5 bg-white transition ${
              open ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`h-0.5 w-5 bg-white transition ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-0.5 w-5 bg-white transition ${
              open ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-black px-5 py-6 lg:hidden">
          <div className="flex flex-col gap-5 text-lg font-black uppercase text-white">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="transition hover:text-[var(--ville-red-bright)]"
              >
                {link.label}
              </Link>
            ))}

            <Link
              href="/register"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-[var(--ville-red)] px-6 py-3 text-center text-sm font-black uppercase text-white transition hover:bg-[var(--ville-red-bright)]"
            >
              Join The Ville
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}