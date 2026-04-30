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
            Building disciplined, competitive, and well-rounded athletes in Las Vegas.
          </p>
        </div>

        {/* MIDDLE */}
        <div>
          <p className="text-sm font-black uppercase text-white">Links</p>

          <div className="mt-4 flex flex-col gap-2 text-zinc-400">
            <a href="/programs" className="hover:text-[var(--ville-red-bright)]">
              Programs
            </a>
            <a href="/events" className="hover:text-[var(--ville-red-bright)]">
              Events
            </a>
            <a href="/register" className="hover:text-[var(--ville-red-bright)]">
              Register
            </a>
            <a href="/contact" className="hover:text-[var(--ville-red-bright)]">
              Contact
            </a>
          </div>
        </div>

        {/* RIGHT */}
        <div>
          <p className="text-sm font-black uppercase text-white">Contact</p>

          <div className="mt-4 text-zinc-400">
            <p>Las Vegas, NV</p>
            <p className="mt-2">will.thevillebasketball@gmail.com</p>
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