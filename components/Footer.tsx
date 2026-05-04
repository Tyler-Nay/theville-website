export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black px-6 py-12">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-3">
        
        {/* LEFT */}
        <div>
          <h3 className="text-xl font-black uppercase text-white">
            The Ville
          </h3>
          <p className="text-sm uppercase tracking-[0.3em] text-[var(--ville-red-bright)]">
            Athletics
          </p>

          <p className="mt-4 max-w-xs text-zinc-400">
            A Las Vegas-based, community-driven youth sports organization
            focused on developing athletes and supporting local families.
          </p>
        </div>

        {/* MIDDLE - LINKS */}
        <div>
          <p className="text-sm font-black uppercase text-white">
            Links
          </p>

          <div className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 text-zinc-400 text-left w-fit">
            <a href="/about" className="hover:text-[var(--ville-red-bright)]">
              About
            </a>
            <a href="/programs" className="hover:text-[var(--ville-red-bright)]">
              Programs
            </a>
            <a href="/events" className="hover:text-[var(--ville-red-bright)]">
              Events
            </a>
            <a href="/faq" className="hover:text-[var(--ville-red-bright)]">
              FAQ
            </a>
            <a href="/gallery" className="hover:text-[var(--ville-red-bright)]">
              Gallery
            </a>
            <a href="/register" className="hover:text-[var(--ville-red-bright)]">
              Register
            </a>
            <a href="/contact" className="hover:text-[var(--ville-red-bright)]">
              Contact
            </a>
          </div>
        </div>

        {/* RIGHT - CONTACT */}
        <div>
          <p className="text-sm font-black uppercase text-white">Contact</p>

          <div className="mt-4 space-y-2 text-zinc-400">
            <p>Las Vegas, NV</p>

            <p>
              Coach Will:{" "}
              <a
                href="tel:7022390590"
                className="hover:text-[var(--ville-red-bright)]"
              >
                (702) 239-0590
              </a>
            </p>

            <p>
              Coach Rainey:{" "}
              <a
                href="tel:7024291447"
                className="hover:text-[var(--ville-red-bright)]"
              >
                (702) 429-1447
              </a>
            </p>

            <p>
              <a
                href="mailto:lvtheville@gmail.com"
                className="hover:text-[var(--ville-red-bright)]"
              >
                lvtheville@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="mt-10 border-t border-white/10 pt-6 text-center text-sm text-zinc-500">
        © {new Date().getFullYear()} The Ville Athletics. All rights reserved.
      </div>
    </footer>
  );
}