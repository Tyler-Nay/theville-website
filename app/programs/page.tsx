import Reveal from "@/components/Reveal";

type Program = {
  name: string;
  price: string;
  description: string;
  grades: string;
  status?: string;
};

const programs: Program[] = [
  {
    name: "Basketball",
    price: "$159/month",
    grades: "Grades K–5, 6–8, High School",
    description:
      "Competitive training, skill development, teamwork, and tournament opportunities.",
  },
  {
    name: "Soccer",
    price: "$109/month",
    grades: "Grades K–5, 6–8",
    description:
      "Structured practices, fundamentals, development, and competitive play.",
  },
  {
    name: "Cross Country",
    price: "Coming Soon",
    grades: "Grades K–12",
    description:
      "Endurance, discipline, conditioning, race prep, and fitness development.",
    status: "Coming Soon",
  },
  {
    name: "Flag Football",
    price: "Coming Soon",
    grades: "Grades K–5, 6–8, High School",
    description:
      "Speed, teamwork, fundamentals, confidence, and competitive play.",
    status: "Coming Soon",
  },
];

export default function ProgramsPage() {
  return (
    <main className="mx-auto max-w-6xl px-5 py-16">
      <Reveal>
        <section className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-black uppercase tracking-[0.35em] text-[var(--ville-red-bright)]">
            Programs
          </p>

          <h1 className="mt-4 text-4xl font-black uppercase leading-[0.95] md:text-6xl">
            Built for development
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-zinc-300">
            Structured youth sports programs focused on growth, discipline,
            competition, and long-term athlete development.
          </p>
        </section>
      </Reveal>

      <Reveal delay={0.08}>
        <section className="mt-12 grid w-full gap-5 md:grid-cols-2 lg:grid-cols-4">
          {programs.map((program) => (
            <div
              key={program.name}
              className="group flex min-h-[300px] flex-col rounded-3xl border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.035),rgba(255,255,255,0.015))] p-5 text-left transition duration-300 hover:-translate-y-1 hover:border-[var(--ville-red)] hover:shadow-[0_10px_40px_rgba(122,0,25,0.18)]"
            >
              <div className="flex items-center justify-between gap-3">
                <p className="text-xs font-black uppercase tracking-[0.14em] text-[var(--ville-red-bright)]">
                  {program.price}
                </p>

                {program.status && (
                  <span className="rounded-full border border-white/10 px-3 py-1 text-[10px] font-black uppercase tracking-[0.12em] text-zinc-400">
                    Soon
                  </span>
                )}
              </div>

              <h2 className="mt-4 text-2xl font-black uppercase">
                {program.name}
              </h2>

              <p className="mt-2 text-sm font-semibold text-zinc-300">
                {program.grades}
              </p>

              <p className="mt-4 text-sm leading-7 text-zinc-400">
                {program.description}
              </p>

              <a
                href={
                  program.status
                    ? "/contact"
                    : "https://the-ville.gymdesk.com/signup"
                }
                target={program.status ? "_self" : "_blank"}
                rel={program.status ? undefined : "noopener noreferrer"}
                className={`mt-auto inline-flex w-fit rounded-full px-5 py-2 text-xs font-black uppercase tracking-[0.12em] transition ${
                  program.status
                    ? "border border-white/15 text-white hover:border-[var(--ville-red)] hover:text-[var(--ville-red-bright)]"
                    : "bg-[var(--ville-red)] text-white hover:bg-[var(--ville-red-bright)]"
                }`}
              >
                {program.status ? "Ask About Program" : "Register Now"}
              </a>
            </div>
          ))}
        </section>
      </Reveal>

      <Reveal delay={0.12}>
        <section className="mt-16 overflow-hidden rounded-[2rem] border border-white/10 bg-black p-6 md:p-8">
          <div className="grid gap-8 md:grid-cols-[1fr_0.8fr] md:items-center">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.3em] text-[var(--ville-red-bright)]">
                The Standard
              </p>

              <h2 className="mt-4 text-3xl font-black uppercase md:text-5xl">
                More than sports.
              </h2>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-zinc-400 md:text-base md:leading-8">
                Our programs are built to help young athletes develop
                confidence, discipline, teamwork, leadership, and consistency
                on and off the court, field, and course.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-[radial-gradient(circle_at_top,rgba(122,0,25,0.22),rgba(255,255,255,0.03))] p-6">
              <div className="grid gap-4">
                {[
                  "Development",
                  "Discipline",
                  "Competition",
                  "Community",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-black/40 px-5 py-4 text-sm font-black uppercase tracking-[0.14em] text-white"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </Reveal>
    </main>
  );
}