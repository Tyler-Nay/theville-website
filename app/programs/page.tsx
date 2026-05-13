type Program = {
  name: string;
  price: string;
  description: string;
};

const programs: Program[] = [
  {
    name: "Basketball",
    price: "$159/month",
    description: "Competitive training, development, and tournaments.",
  },
  {
    name: "Soccer",
    price: "$109/month",
    description: "Structured practices, development, and competitive play.",
  },
  {
    name: "Cross Country",
    price: "Coming Soon",
    description: "Endurance, race prep, and fitness development.",
  },
  {
    name: "Flag Football",
    price: "Coming Soon",
    description: "Speed, teamwork, and competitive play.",
  },
];

export default function ProgramsPage() {
  return (
    <main className="mx-auto flex max-w-7xl flex-col items-center px-6 py-20 text-center">
      {/* HEADER */}
      <section className="max-w-5xl">
        <p className="text-sm font-black uppercase tracking-[0.3em] text-[var(--ville-red-bright)]">
          Programs
        </p>

        <h1 className="mt-4 text-5xl font-black uppercase leading-[0.95] md:text-7xl">
          Built for development
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-zinc-300">
          The Ville Athletics offers structured programs across multiple sports
          focused on growth, discipline, competition, and long-term athlete
          development.
        </p>
      </section>

      {/* PROGRAM CARDS */}
      <section className="mt-14 grid w-full gap-6 md:grid-cols-2 lg:grid-cols-4">
        {programs.map((program) => (
          <div
            key={program.name}
            className="group flex min-h-[260px] flex-col items-center rounded-3xl border border-white/10 bg-zinc-900 p-6 text-center transition duration-300 hover:-translate-y-1 hover:border-[var(--ville-red)] hover:shadow-[0_10px_40px_rgba(122,0,25,0.2)]"
          >
            <p className="font-bold text-[var(--ville-red-bright)]">
              {program.price}
            </p>

            <h2 className="mt-2 text-2xl font-black uppercase">
              {program.name}
            </h2>

            <p className="mt-4 leading-7 text-zinc-400">
              {program.description}
            </p>

            <a
              href="https://the-ville.gymdesk.com/signup"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto inline-flex rounded-full bg-[var(--ville-red)] px-5 py-2 text-sm font-black uppercase tracking-wide text-white transition hover:scale-105 hover:bg-[var(--ville-red-bright)]"
            >
              Register Now
            </a>
          </div>
        ))}
      </section>
    </main>
  );
}