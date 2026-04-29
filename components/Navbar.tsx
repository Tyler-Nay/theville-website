"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/programs", label: "Programs" },
  { href: "/register", label: "Register" },
  { href: "/tournaments", label: "Events" },
  { href: "/sponsors", label: "Sponsors" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/90 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo.png" alt="The Ville Logo" width={50} height={50} />
          <div>
            <p className="text-lg font-black">THE VILLE</p>
            <p className="text-[10px] uppercase tracking-[0.35em] text-red-500">
              Athletics
            </p>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-8 text-sm font-black uppercase text-zinc-300 md:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-red-500">
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop Button */}
        <Link
          href="/register"
          className="hidden rounded-full bg-white px-5 py-2 text-sm font-black uppercase text-black hover:bg-red-600 hover:text-white md:block"
        >
          Join
        </Link>

        {/* Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="flex flex-col gap-1 md:hidden"
        >
          <span className="h-[2px] w-6 bg-white"></span>
          <span className="h-[2px] w-6 bg-white"></span>
          <span className="h-[2px] w-6 bg-white"></span>
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="border-t border-white/10 bg-black px-6 py-6 md:hidden">
          <div className="flex flex-col gap-6 text-lg font-bold uppercase">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="hover:text-red-500"
              >
                {link.label}
              </Link>
            ))}

            <Link
              href="/register"
              onClick={() => setOpen(false)}
              className="mt-4 rounded-full bg-red-700 px-6 py-3 text-center font-black text-white"
            >
              Join Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}