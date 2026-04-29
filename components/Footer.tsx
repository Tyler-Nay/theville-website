import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-10 md:grid-cols-3">
        <div>
          <h3 className="text-xl font-black">THE VILLE ATHLETICS</h3>
          <p className="mt-3 max-w-sm text-sm leading-6 text-zinc-400">
            A Las Vegas youth sports organization built around development,
            competition, community, and opportunity.
          </p>
        </div>

        <div>
          <h4 className="font-bold">Quick Links</h4>
          <div className="mt-3 grid gap-2 text-sm text-zinc-400">
            <Link href="/programs" className="hover:text-white">Programs</Link>
            <Link href="/register" className="hover:text-white">Register</Link>
            <Link href="/tournaments" className="hover:text-white">Tournaments</Link>
            <Link href="/sponsors" className="hover:text-white">Sponsors</Link>
          </div>
        </div>

        <div>
          <h4 className="font-bold">Contact</h4>
          <p className="mt-3 text-sm text-zinc-400">Las Vegas, Nevada</p>
          <p className="mt-2 text-sm text-zinc-400">Email and social links coming soon.</p>
        </div>
      </div>

      <div className="border-t border-white/10 px-6 py-5 text-center text-xs text-zinc-500">
        © {new Date().getFullYear()} The Ville Athletics. All rights reserved.
      </div>
    </footer>
  );
}
