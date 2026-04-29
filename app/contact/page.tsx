export default function ContactPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-20">
      <p className="text-sm font-black uppercase tracking-[0.3em] text-red-500">Contact</p>
      <h1 className="mt-4 text-5xl font-black">Contact The Ville.</h1>

      <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-300">
        Interested in joining, sponsoring, coaching, volunteering, or learning more?
        Send us a message.
      </p>

      <form className="mt-10 grid gap-4 rounded-3xl border border-white/10 bg-zinc-900 p-8">
        <input className="rounded-2xl border border-white/10 bg-black px-5 py-4 text-white outline-none focus:border-red-500" placeholder="Name" />
        <input className="rounded-2xl border border-white/10 bg-black px-5 py-4 text-white outline-none focus:border-red-500" placeholder="Email" />
        <input className="rounded-2xl border border-white/10 bg-black px-5 py-4 text-white outline-none focus:border-red-500" placeholder="Phone" />
        <input className="rounded-2xl border border-white/10 bg-black px-5 py-4 text-white outline-none focus:border-red-500" placeholder="Athlete grade or program interest" />
        <textarea className="min-h-40 rounded-2xl border border-white/10 bg-black px-5 py-4 text-white outline-none focus:border-red-500" placeholder="Message" />

        <button type="button" className="rounded-full bg-red-700 px-7 py-4 font-black hover:bg-red-600">
          Form Setup Coming Soon
        </button>
      </form>
    </main>
  );
}
