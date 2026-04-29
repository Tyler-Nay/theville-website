export default function AboutPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-20">
      <p className="text-sm font-black uppercase tracking-[0.3em] text-red-500">About</p>
      <h1 className="mt-4 text-5xl font-black">More than a sports program.</h1>

      <div className="mt-8 space-y-6 text-lg leading-8 text-zinc-300">
        <p>
          The Ville Athletics is a community-driven youth sports organization in
          Las Vegas focused on development, structure, opportunity, and long-term growth.
        </p>
        <p>
          Our mission is to give athletes a competitive and supportive environment
          where they can grow as players and people.
        </p>
      </div>

      <section className="mt-12 grid gap-6 md:grid-cols-3">
        {["Development", "Discipline", "Community"].map((item) => (
          <div key={item} className="rounded-3xl border border-white/10 bg-zinc-900 p-7">
            <h2 className="text-2xl font-black">{item}</h2>
            <p className="mt-3 text-zinc-400">
              A core part of the culture and experience we want every athlete to feel.
            </p>
          </div>
        ))}
      </section>
    </main>
  );
}
