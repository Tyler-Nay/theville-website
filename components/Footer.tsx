import Image from "next/image";
import { FaInstagram } from "react-icons/fa";

const quickLinks = [
  { label: "About", href: "/about" },
  { label: "Programs", href: "/programs" },
  { label: "Events", href: "/events" },
  { label: "Gallery", href: "/gallery" },
  { label: "Sponsors", href: "/sponsors" },
  { label: "FAQ", href: "/faq" },
  {
    label: "Register",
    href: "https://the-ville.gymdesk.com/signup",
    external: true,
  },
  {
    label: "Portal",
    href: "https://the-ville.gymdesk.com/login",
    external: true,
  },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-black">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(122,0,25,0.18),transparent_40%)]" />

      <div className="relative mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* LOGO */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <Image
              src="/logo.png"
              alt="The Ville Athletics Logo"
              width={145}
              height={145}
              className="drop-shadow-[0_0_30px_rgba(122,0,25,0.45)]"
            />

            <p className="mt-5 max-w-xs text-sm leading-7 text-zinc-400">
              Community-driven youth athletics in Las Vegas focused on
              developing athletes, leadership, discipline, and opportunity.
            </p>
          </div>

          {/* ORGANIZATION */}
          <div>
            <p className="text-xs font-black uppercase tracking-[0.25em] text-white">
              Organization
            </p>

            <div className="mt-5 flex flex-col gap-3 text-sm text-zinc-400">
              <p>Las Vegas, Nevada</p>
              <p>Basketball</p>
              <p>Soccer</p>
              <p>Cross Country</p>
              <p>Flag Football</p>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <p className="text-xs font-black uppercase tracking-[0.25em] text-white">
              Quick Links
            </p>

            <div className="mt-5 flex flex-col gap-3 text-sm text-zinc-400">
              {quickLinks.map((item) =>
                item.external ? (
                  <a
                    key={item.href}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition duration-300 hover:text-[var(--ville-red-bright)]"
                  >
                    {item.label}
                  </a>
                ) : (
                  <a
                    key={item.href}
                    href={item.href}
                    className="transition duration-300 hover:text-[var(--ville-red-bright)]"
                  >
                    {item.label}
                  </a>
                )
              )}
            </div>
          </div>

          {/* SOCIAL */}
          <div>
            <p className="text-xs font-black uppercase tracking-[0.25em] text-white">
              Connect
            </p>

            <div className="mt-5 flex items-center gap-4">
              <a
                href="https://instagram.com/thevillelv"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow The Ville Athletics on Instagram"
                className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] text-zinc-300 transition duration-300 hover:border-[var(--ville-red)] hover:bg-[var(--ville-red)]/10 hover:text-[var(--ville-red-bright)]"
              >
                <FaInstagram size={20} />
              </a>
            </div>

            <p className="mt-5 max-w-xs text-sm leading-7 text-zinc-500">
              Follow The Ville Athletics for events, athlete highlights,
              announcements, and community updates.
            </p>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-center md:flex-row md:text-left">
          <p className="text-xs uppercase tracking-[0.18em] text-zinc-500">
            © {new Date().getFullYear()} The Ville Athletics. All rights
            reserved.
          </p>

          <p className="text-xs uppercase tracking-[0.18em] text-zinc-600">
            Built In Las Vegas
          </p>
        </div>
      </div>
    </footer>
  );
}