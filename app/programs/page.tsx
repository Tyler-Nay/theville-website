type Program = {
  name: string;
  price: string;
  description: string;
};

const programs: Program[] = [
  {
    name: "Basketball",
    price: "$155/month",
    description: "Competitive training, development, and tournaments.",
  },
  {
    name: "Soccer",
    price: "$100/month",
    description: "Structured practices, development, and competitive play.",
  },
  {
    name: "Cross Country",
    price: "$100/month",
    description: "Endurance, race prep, and fitness development.",
  },
  {
    name: "Flag Football",
    price: "$150/month",
    description: "Speed, teamwork, and competitive play.",
  },
];

export default function ProgramsPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-20">
      <div className="text-center md:text-left">
        <p className="text-sm font-black uppercase tracking-[0.3em] text-[var(--ville-red-bright)]">
          Programs
        </p>

        <h1 className="mt-4 text-5xl font-black uppercase">
          Built for development
        </h1>

        <p className="mx-auto mt-4 max-w-2xl text-zinc-400 md:mx-0">
          The Ville Athletics offers structured programs across multiple sports
          focused on growth, discipline, competition, and long-term development.
        </p>
      </div>

      <div className="mt-12 grid items-stretch gap-6 md:grid-cols-2 lg:grid-cols-4">
        {programs.map((program) => (
          <div
            key={program.name}
            className="group flex h-full min-h-[260px] flex-col rounded-3xl border border-white/10 bg-zinc-900 p-6 transition duration-300 hover:-translate-y-1 hover:border-[var(--ville-red)] hover:shadow-[0_10px_40px_rgba(122,0,25,0.2)]"
          >
            <p className="font-bold text-[var(--ville-red-bright)]">
              {program.price}
            </p>

            <h2 className="mt-2 text-2xl font-black uppercase">
              {program.name}
            </h2>

            <p className="mt-3 text-zinc-400">
              {program.description}
            </p>

            <a
              href="/register"
              className="mt-auto inline-flex w-fit rounded-full bg-[var(--ville-red)] px-5 py-2 text-sm font-black uppercase text-white transition hover:bg-[var(--ville-red-bright)]"
            >
              Register
            </a>
          </div>
        ))}
      </div>
    </main>
  );
}