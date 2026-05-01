export default function AboutPage() {
  const values = [
    {
      title: "Community",
      text: "Creating a positive Las Vegas-based program where local families and athletes feel supported.",
    },
    {
      title: "Development",
      text: "Helping athletes build skill, confidence, discipline, teamwork, and competitive growth.",
    },
    {
      title: "Opportunity",
      text: "Providing structured programs, events, and pathways for athletes across multiple sports.",
    },
  ];

  return (
    <main className="mx-auto max-w-7xl px-6 py-20">
      <section className="max-w-4xl">
        <p className="text-sm font-black uppercase tracking-[0.3em] text-[var(--ville-red-bright)]">
          About
        </p>

        <h1 className="mt-4 text-5xl font-black uppercase leading-none md:text-7xl">
          Built for athletes
          <span className="block text-[var(--ville-red-bright)]">
          Built for <span className="block md:inline">Las Vegas.</span>
          </span>
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-300">
          The Ville Athletics is a community-driven youth sports organization
          based in Las Vegas. We serve athletes and families through structured
          programs in basketball, soccer, cross country, and flag football.
        </p>

        <p className="mt-4 max-w-3xl text-lg leading-8 text-zinc-400">
          Our goal is to create a positive environment where athletes can
          develop discipline, confidence, teamwork, and character while building
          lasting connections in the local community.
        </p>
      </section>

      <section className="mt-14 grid gap-6 md:grid-cols-3">
        {values.map((item) => (
          <div
            key={item.title}
            className="rounded-3xl border border-white/10 bg-zinc-900 p-7 transition duration-300 hover:-translate-y-1 hover:border-[var(--ville-red)] hover:shadow-[0_10px_40px_rgba(122,0,25,0.2)]"
          >
            <h2 className="text-xl font-black uppercase text-[var(--ville-red-bright)]">
              {item.title}
            </h2>

            <p className="mt-4 leading-7 text-zinc-400">{item.text}</p>
          </div>
        ))}
      </section>

      <section className="mt-16">
        <div className="mx-auto max-w-4xl rounded-[2rem] border border-white/10 bg-gradient-to-br from-zinc-900 to-black px-6 py-12 text-center md:px-10 md:py-14">
          <p className="text-sm font-black uppercase tracking-[0.3em] text-[var(--ville-red-bright)]">
            The Ville Standard
          </p>

          <h2 className="mt-4 text-3xl font-black uppercase leading-[1.05] tracking-tight md:text-5xl">
            <span className="block">Train with purpose</span>
            <span className="block">Compete with pride</span>
            <span className="block text-[var(--ville-red-bright)]">
              Represent something bigger
            </span>
          </h2>

          <div className="mt-8 flex justify-center">
            <a
              href="/register"
              className="rounded-full bg-[var(--ville-red)] px-6 py-3 text-sm font-black uppercase text-white transition hover:bg-[var(--ville-red-bright)]"
            >
              Register Now
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}