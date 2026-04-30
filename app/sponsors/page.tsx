const sponsorItems = [
  "Player memberships",
  "Uniforms",
  "Tournament fees",
  "Program operations",
];

export default function SponsorsPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-20">
      <p className="text-sm font-black uppercase tracking-[0.3em] text-red-500">Sponsors</p>
      <h1 className="mt-4 text-5xl font-black">Support The Ville</h1>

      <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-300">
        Sponsorships help reduce financial barriers for families while increasing
        community and business involvement around The Ville.
      </p>

      <div className="mt-12 grid gap-6 md:grid-cols-4">
        {sponsorItems.map((item) => (
          <div key={item} className="rounded-3xl border border-white/10 bg-zinc-900 p-6">
            <h2 className="text-xl font-black">{item}</h2>
          </div>
        ))}
      </div>

      <div className="mt-10 rounded-3xl border border-white/10 bg-black p-8">
        <h2 className="text-3xl font-black">Become a Sponsor</h2>
        <p className="mt-4 text-zinc-400">
          Add sponsor package details, donation links, and contact information here.
        </p>
        <a href="/contact" className="mt-7 inline-flex rounded-full bg-red-700 px-7 py-4 font-black hover:bg-red-600">
          Contact Us
        </a>
      </div>
    </main>
  );
}
