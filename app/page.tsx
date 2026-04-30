const programs = [
  {
    name: "Basketball",
    grades: "Grades K–5, 6–8, High School",
    price: "$155/month",
  },
  {
    name: "Soccer",
    grades: "Grades K–5, 6–8",
    price: "$100/month",
  },
  {
    name: "Cross Country",
    grades: "Grades K–12",
    price: "$100/month",
  },
  {
    name: "Flag Football",
    grades: "Grades K–5, 6–8, High School",
    price: "$150/month",
  },
];

export default function Home() {
  return (
    <main>
      {/* HERO */}
      <section className="relative bg-black">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-20 md:grid-cols-2">
          {/* LOGO */}
          <div className="order-1 flex justify-center md:order-2 md:justify-end">
            <img
              src="/logo.png"
              alt="The Ville Logo"
              className="w-[220px] md:w-[400px] lg:w-[450px] drop-shadow-[0_0_40px_rgba(122,0,25,0.5)]"
            />
          </div>

          {/* TEXT */}
          <div className="order-2 text-center md:order-1 md:text-left">
            <p className="text-sm font-black uppercase tracking-[0.3em] text-[var(--ville-red-bright)]">
              Las Vegas Youth Athletics
            </p>

            <h1 className="mt-4 text-5xl font-black uppercase leading-[0.9] md:text-6xl">
              Build the athlete
              <span className="block text-[var(--ville-red-bright)]">
                Build the standard
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-xl text-zinc-300 md:mx-0">
              The Ville Athletics is a Las Vegas-based, community-driven youth
              sports organization serving athletes from grades K–12.
            </p>

            <p className="mx-auto mt-4 max-w-xl text-zinc-400 md:mx-0">
              Built to support local families, develop disciplined athletes, and
              create positive opportunities through basketball, soccer, cross
              country, and flag football.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center md:justify-start">
              <a
                href="/register"
                className="rounded-full bg-[var(--ville-red)] px-6 py-3 font-bold text-white hover:bg-[var(--ville-red-bright)]"
              >
                Register
              </a>

              <a
                href="/programs"
                className="rounded-full border border-white/20 px-6 py-3 font-bold text-white hover:border-[var(--ville-red)]"
              >
                Programs
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* PROGRAMS SECTION */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <p className="text-sm font-black uppercase tracking-[0.3em] text-[var(--ville-red-bright)]">
          Programs
        </p>

        <h2 className="mt-4 text-4xl font-black uppercase">
          Train. Compete. Develop.
        </h2>

        <p className="mt-4 max-w-3xl text-zinc-400">
          Programs are built for different age groups so families can quickly
          find the right fit for their athlete.
        </p>

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {programs.map((program) => (
            <div
              key={program.name}
              className="flex flex-col items-start rounded-2xl border border-white/10 bg-zinc-900 px-5 py-5 transition hover:border-[var(--ville-red)]"
            >
              <p className="text-sm font-bold text-[var(--ville-red-bright)]">
                {program.price}
              </p>

              <h3 className="mt-1 text-xl font-black">{program.name}</h3>

              <p className="mt-1 text-sm font-semibold text-zinc-300">
                {program.grades}
              </p>

              <a
                href="/programs"
                className="mt-4 inline-flex rounded-full border border-white/15 px-4 py-1.5 text-[11px] font-black uppercase text-white transition hover:border-[var(--ville-red)] hover:text-[var(--ville-red-bright)]"
              >
                Learn More
              </a>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}