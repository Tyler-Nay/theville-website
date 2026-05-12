"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaInstagram } from "react-icons/fa";

const instagramUrl = "https://instagram.com/thevillelv";
const registerUrl = "https://the-ville.gymdesk.com/signup";
const parentPortalUrl = "https://the-ville.gymdesk.com/login";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/95 backdrop-blur-xl">
      <nav className="relative mx-auto grid max-w-7xl grid-cols-3 items-center px-4 py-2 lg:grid-cols-[1fr_auto_1fr] lg:px-6 xl:max-w-[calc(100vw-220px)]">

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="flex h-10 w-10 items-center justify-center justify-self-start rounded-full border border-white/10 bg-white/5 lg:hidden"
          aria-label="Open menu"
          aria-expanded={open}
        >
          <div className="flex flex-col gap-1.5">
            <span
              className={`block h-0.5 w-6 bg-white transition ${
                open ? "translate-y-2 rotate-45" : ""
              }`}
            />

            <span
              className={`block h-0.5 w-6 bg-white transition ${
                open ? "opacity-0" : ""
              }`}
            />

            <span
              className={`block h-0.5 w-6 bg-white transition ${
                open ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </div>
        </button>

        {/* MOBILE LOGO */}
        <div className="flex justify-center lg:hidden">
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="flex items-center"
          >
            <Image
              src="/logo.png"
              alt="The Ville Athletics Logo"
              width={105}
              height={105}
              priority
              className="drop-shadow-[0_0_100px_rgba(122,0,25,0.35)]"
            />
          </Link>
        </div>

        {/* MOBILE SPACER */}
        <div className="lg:hidden" />

        {/* LEFT LINKS */}
        <div className="hidden items-center justify-end gap-5 text-sm font-bold uppercase tracking-wide text-zinc-300 lg:flex">
          <Link
            href="/programs"
            className="transition hover:text-[var(--ville-red-bright)]"
          >
            Programs
          </Link>

          <Link
            href="/events"
            className="transition hover:text-[var(--ville-red-bright)]"
          >
            Events
          </Link>

          <Link
            href="/news"
            className="transition hover:text-[var(--ville-red-bright)]"
          >
            News
          </Link>

          <Link
            href="/gallery"
            className="transition hover:text-[var(--ville-red-bright)]"
          >
            Gallery
          </Link>
        </div>

        {/* CENTER LOGO */}
        <Link
          href="/"
          className="hidden items-center justify-center lg:flex"
        >
          <Image
            src="/logo.png"
            alt="The Ville Athletics Logo"
            width={150}
            height={150}
            priority
            className="drop-shadow-[0_0_30px_rgba(122,0,25,0.45)]"
          />
        </Link>

        {/* RIGHT LINKS */}
        <div className="hidden items-center justify-start gap-5 text-sm font-bold uppercase tracking-wide text-zinc-300 lg:flex">
          <Link
            href="/faq"
            className="transition hover:text-[var(--ville-red-bright)]"
          >
            FAQ
          </Link>

          <Link
            href="/about"
            className="transition hover:text-[var(--ville-red-bright)]"
          >
            About
          </Link>

          <Link
            href={parentPortalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-[var(--ville-red-bright)]"
          >
            Portal
          </Link>

          <Link
            href="/contact"
            className="transition hover:text-[var(--ville-red-bright)]"
          >
            Contact
          </Link>

          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 transition hover:text-[var(--ville-red-bright)]"
          >
            <FaInstagram size={20} />
            <span>Follow Us</span>
          </a>
        </div>
      </nav>

      {/* DESKTOP REGISTER BUTTON */}
      <div className="absolute right-8 top-1/2 hidden -translate-y-1/2 xl:block">
        <Link
          href={registerUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-[var(--ville-red)] px-7 py-3 text-base font-black uppercase text-white transition hover:bg-[var(--ville-red-bright)]"
        >
          Register
        </Link>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="border-t border-white/10 bg-black px-6 py-8 lg:hidden">
          <div className="flex flex-col gap-6 text-lg font-black uppercase tracking-wide text-white">
            <Link
              href="/programs"
              onClick={() => setOpen(false)}
              className="transition hover:text-[var(--ville-red-bright)]"
            >
              Programs
            </Link>

            <Link
              href="/events"
              onClick={() => setOpen(false)}
              className="transition hover:text-[var(--ville-red-bright)]"
            >
              Events
            </Link>

            <Link
              href="/news"
              onClick={() => setOpen(false)}
              className="transition hover:text-[var(--ville-red-bright)]"
            >
              News
            </Link>

            <Link
              href="/gallery"
              onClick={() => setOpen(false)}
              className="transition hover:text-[var(--ville-red-bright)]"
            >
              Gallery
            </Link>

            <Link
              href="/faq"
              onClick={() => setOpen(false)}
              className="transition hover:text-[var(--ville-red-bright)]"
            >
              FAQ
            </Link>

            <Link
              href="/about"
              onClick={() => setOpen(false)}
              className="transition hover:text-[var(--ville-red-bright)]"
            >
              About
            </Link>
            <Link
              href={parentPortalUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="transition hover:text-[var(--ville-red-bright)]"
            >
             Portal
            </Link>

            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="transition hover:text-[var(--ville-red-bright)]"
            >
              Contact
            </Link>

            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="flex items-center gap-3 transition hover:text-[var(--ville-red-bright)]"
            >
              <FaInstagram size={22} />
              Follow Us On Instagram
            </a>

            <Link
              href={registerUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-[var(--ville-red)] px-7 py-4 text-center text-base font-black uppercase text-white transition hover:bg-[var(--ville-red-bright)]"
            >
              Register
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}