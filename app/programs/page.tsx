const programs = [
  {
    name: "Basketball",
    price: "$150/month",
    details: "Training, team play, player development, tournaments, and competitive opportunities.",
  },
  {
    name: "Soccer",
    price: "$100/month",
    details: "Structured practices, team development, and organized competition.",
  },
  {
    name: "Cross Country",
    price: "Coming Soon",
    details: "Endurance training, progression-based practices, and optional races.",
  },
];

export default function ProgramsPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-20">
      <p className="text-sm font-black uppercase tracking-[0.3em] text-red-500">Programs</p>
      <h1 className="mt-4 text-5xl font-black">Programs built for growth.</h1>
      <p className="mt-5 max-w-3xl text-lg leading-8 text-zinc-300">
        The Ville is expanding into a broader athletics organization with programming
        built around development, participation, and competition.
      </p>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {programs.map((program) => (
          <div key={program.name} className="rounded-3xl border border-white/10 bg-zinc-900 p-7">
            <p className="font-bold text-red-400">{program.price}</p>
            <h2 className="mt-3 text-3xl font-black">{program.name}</h2>
            <p className="mt-4 leading-7 text-zinc-400">{program.details}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
