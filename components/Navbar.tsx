"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { FaInstagram } from "react-icons/fa";

const instagramUrl = "https://instagram.com/thevillelv";
const registerUrl = "https://the-ville.gymdesk.com/signup";
const parentPortalUrl = "https://the-ville.gymdesk.com/login";

const leftLinks = [
  {
    label: "Programs",
    href: "/programs",
    external: false,
  },
  {
    label: "Events",
    href: "/events",
    external: false,
  },
  {
    label: "News",
    href: "/news",
    external: false,
  },
  {
    label: "Gallery",
    href: "/gallery",
    external: false,
  },
  {
    label: "Sponsors",
    href: "/sponsors",
    external: false,
  },
];

const rightLinks = [
  {
    label: "FAQ",
    href: "/faq",
    external: false,
  },
  {
    label: "About",
    href: "/about",
    external: false,
  },
  {
    label: "Portal",
    href: parentPortalUrl,
    external: true,
  },
  {
    label: "Contact",
    href: "/contact",
    external: false,
  },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 10);
    }

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function linkClasses(href: string) {
    const active = pathname === href;

    return `
      relative transition duration-300 hover:text-white
      ${
        active
          ? "text-white"
          : "text-zinc-300"
      }
    `;
  }

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-all duration-500 ${
        scrolled
          ? "border-white/10 bg-black/80 backdrop-blur-2xl shadow-[0_8px_40px_rgba(0,0,0,0.45)]"
          : "border-transparent bg-black/40 backdrop-blur-xl"
      }`}
    >
      <nav className="relative mx-auto grid max-w-7xl grid-cols-3 items-center px-4 py-1.5 lg:grid-cols-[1fr_auto_1fr] lg:px-6 xl:max-w-[1400px]">
        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="flex h-10 w-10 items-center justify-center justify-self-start rounded-full border border-white/10 bg-white/5 transition duration-300 hover:bg-white/10 lg:hidden"
          aria-label="Open menu"
          aria-expanded={open}
        >
          <div className="flex flex-col gap-1.5">
            <span
              className={`block h-0.5 w-6 bg-white transition duration-300 ${
                open ? "translate-y-2 rotate-45" : ""
              }`}
            />

            <span
              className={`block h-0.5 w-6 bg-white transition duration-300 ${
                open ? "opacity-0" : ""
              }`}
            />

            <span
              className={`block h-0.5 w-6 bg-white transition duration-300 ${
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
              width={92}
              height={92}
              priority
              className="drop-shadow-[0_0_45px_rgba(122,0,25,0.4)] transition duration-500 hover:scale-[1.02]"
            />
          </Link>
        </div>

        <div className="lg:hidden" />

        {/* LEFT LINKS */}
        <div className="hidden items-center justify-end gap-5 text-xs font-semibold uppercase tracking-[0.14em] lg:flex">
          {leftLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={linkClasses(item.href)}
            >
              {item.label}

              {pathname === item.href && (
                <span className="absolute -bottom-2 left-1/2 h-[2px] w-6 -translate-x-1/2 rounded-full bg-[var(--ville-red-bright)]" />
              )}
            </Link>
          ))}
        </div>

        {/* DESKTOP LOGO */}
        <Link
          href="/"
          className="hidden items-center justify-center lg:flex"
        >
          <Image
            src="/logo.png"
            alt="The Ville Athletics Logo"
            width={128}
            height={128}
            priority
            className="drop-shadow-[0_0_28px_rgba(122,0,25,0.45)] transition duration-500 hover:scale-[1.02]"
          />
        </Link>

        {/* RIGHT LINKS */}
        <div className="hidden items-center justify-start gap-5 text-xs font-semibold uppercase tracking-[0.14em] lg:flex">
          {rightLinks.map((item) =>
            item.external ? (
              <Link
                key={item.href}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-300 transition duration-300 hover:text-white"
              >
                {item.label}
              </Link>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className={linkClasses(item.href)}
              >
                {item.label}

                {pathname === item.href && (
                  <span className="absolute -bottom-2 left-1/2 h-[2px] w-6 -translate-x-1/2 rounded-full bg-[var(--ville-red-bright)]" />
                )}
              </Link>
            )
          )}

          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-zinc-300 transition duration-300 hover:text-white"
          >
            <FaInstagram size={18} />
            <span>Follow</span>
          </a>
        </div>
      </nav>

      {/* DESKTOP REGISTER BUTTON */}
      <div className="absolute right-8 top-1/2 hidden -translate-y-1/2 xl:block">
        <Link
          href={registerUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-[var(--ville-red)] px-6 py-2.5 text-sm font-semibold uppercase tracking-[0.15em] text-white transition duration-300 hover:scale-[1.03] hover:bg-[var(--ville-red-bright)] hover:shadow-[0_0_25px_rgba(122,0,25,0.45)]"
        >
          Register
        </Link>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`overflow-hidden border-t border-white/10 bg-black/95 backdrop-blur-2xl transition-all duration-500 lg:hidden ${
          open
            ? "max-h-[700px] opacity-100"
            : "max-h-0 border-transparent opacity-0"
        }`}
      >
        <div className="px-6 py-7">
          <div className="flex flex-col gap-5 text-base font-black uppercase tracking-[0.12em] text-white">
            {[...leftLinks, ...rightLinks].map((item) =>
              item.external ? (
                <Link
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="transition duration-300 hover:text-[var(--ville-red-bright)]"
                >
                  {item.label}
                </Link>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`transition duration-300 hover:text-[var(--ville-red-bright)] ${
                    pathname === item.href
                      ? "text-[var(--ville-red-bright)]"
                      : ""
                  }`}
                >
                  {item.label}
                </Link>
              )
            )}

            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="flex items-center gap-3 transition duration-300 hover:text-[var(--ville-red-bright)]"
            >
              <FaInstagram size={22} />
              Follow Us
            </a>

            <Link
              href={registerUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-[var(--ville-red)] px-7 py-3.5 text-center text-sm font-black uppercase text-white transition duration-300 hover:bg-[var(--ville-red-bright)]"
            >
              Register
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}