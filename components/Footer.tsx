import Image from "next/image";
import { FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black px-6 py-14">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-4">
        {/* LOGO */}
          <div className="flex flex-col items-center justify-center">
            <Image
              src="/logo.png"
              alt="The Ville Athletics Logo"
              width={180}
              height={180}
              className="drop-shadow-[0_0_25px_rgba(122,0,25,0.35)]"
            />
          </div>

        {/* ABOUT */}
        <div>
          <p className="text-sm font-black uppercase text-white">About Us</p>

          <p className="mt-4 max-w-xs leading-7 text-zinc-400">
            A Las Vegas-based, community-driven youth sports organization
            focused on developing athletes and supporting local families.
          </p>
        </div>

        {/* LINKS */}
        <div>
          <p className="text-sm font-black uppercase text-white">
            Links
          </p>

          <div className="mt-4 grid grid-cols-2 gap-x-0 gap-y-3 text-zinc-400">
            <a
              href="/about"
              className="transition hover:text-[var(--ville-red-bright)]"
            >
              About
            </a>

            <a
              href="/programs"
              className="transition hover:text-[var(--ville-red-bright)]"
            >
              Programs
            </a>

            <a
              href="/events"
              className="transition hover:text-[var(--ville-red-bright)]"
            >
              Events
            </a>

            <a
              href="/gallery"
              className="transition hover:text-[var(--ville-red-bright)]"
            >
              Gallery
            </a>

            <a
              href="/faq"
              className="transition hover:text-[var(--ville-red-bright)]"
            >
              FAQ
            </a>

            <a
              href="https://the-ville.gymdesk.com/signup"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-[var(--ville-red-bright)]"
            >
              Register
            </a>

            <a
              href="https://the-ville.gymdesk.com/login"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-[var(--ville-red-bright)]"
            >
              Portal
            </a>

            <a
              href="/contact"
              className="transition hover:text-[var(--ville-red-bright)]"
            >
              Contact Us
            </a>
          </div>
        </div>

        {/* SOCIAL */}
        <div>
          <p className="text-sm font-black uppercase text-white">Socials</p>

          <div className="mt-4 flex items-center gap-4">
            <a
              href="https://instagram.com/thevillelv"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow The Ville Athletics on Instagram"
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-zinc-900 text-zinc-300 transition hover:border-[var(--ville-red)] hover:text-[var(--ville-red-bright)]"
            >
              <FaInstagram size={22} />
            </a>
          </div>

          <p className="mt-4 max-w-xs text-sm leading-6 text-zinc-500">
            Follow us for updates, events, athlete highlights, and program
            announcements.
          </p>
        </div>
      </div>

      <div className="mt-12 border-t border-white/10 pt-6 text-center text-sm text-zinc-500">
        © {new Date().getFullYear()} The Ville Athletics. All rights reserved.
      </div>
    </footer>
  );
}