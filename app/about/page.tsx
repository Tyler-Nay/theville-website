import Reveal from "@/components/Reveal";

const values = [
  {
    title: "Community",
    text: "Creating a positive Las Vegas-based program where athletes, families, and coaches feel connected and supported.",
  },
  {
    title: "Development",
    text: "Helping athletes build skill, confidence, discipline, teamwork, leadership, and competitive habits.",
  },
  {
    title: "Opportunity",
    text: "Providing structured programs, events, and pathways for athletes across multiple sports.",
  },
];

const standards = ["Discipline", "Teamwork", "Confidence", "Leadership"];

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-6xl px-5 py-16">
      <Reveal>
        <section className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-black uppercase tracking-[0.35em] text-[var(--ville-red-bright)]">
            About
          </p>

          <h1 className="mt-4 text-4xl font-black uppercase leading-[0.95] tracking-tight md:text-6xl">
            <span className="block text-white">Built for</span>

            <span className="block text-[var(--ville-red-bright)]">
              Athletes
            </span>

            <span className="block text-white">Built for</span>

            <span className="block text-[var(--ville-red-bright)]">
              Las Vegas
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-zinc-300">
            The Ville Athletics is a community-driven youth sports organization
            based in Las Vegas, serving athletes and families through structured
            programs in basketball, soccer, cross country, and flag football.
          </p>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-zinc-400">
            Our goal is to create a positive environment where athletes can
            develop discipline, confidence, teamwork, character, and lasting
            connections in the local community.
          </p>
        </section>
      </Reveal>

      <Reveal delay={0.08}>
        <section className="mt-12 grid gap-5 md:grid-cols-3">
          {values.map((item) => (
            <div
              key={item.title}
              className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.035),rgba(255,255,255,0.015))] p-6 text-left transition duration-300 hover:-translate-y-1 hover:border-[var(--ville-red)] hover:shadow-[0_10px_40px_rgba(122,0,25,0.18)]"
            >
              <h2 className="text-xl font-black uppercase text-[var(--ville-red-bright)]">
                {item.title}
              </h2>

              <p className="mt-4 text-sm leading-7 text-zinc-400">
                {item.text}
              </p>
            </div>
          ))}
        </section>
      </Reveal>

      <Reveal delay={0.12}>
        <section className="mt-16 overflow-hidden rounded-[2rem] border border-white/10 bg-black p-6 md:p-10">
          <div className="grid gap-8 md:grid-cols-[1fr_0.75fr] md:items-center">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.35em] text-[var(--ville-red-bright)]">
                The Ville Standard
              </p>

              <h2 className="mt-4 text-3xl font-black uppercase leading-[1.05] tracking-tight md:text-5xl">
                <span className="block">Train with purpose.</span>

                <span className="block">Compete with pride.</span>

                <span className="block text-[var(--ville-red-bright)]">
                  Represent something bigger.
                </span>
              </h2>

              <p className="mt-6 max-w-2xl text-sm leading-7 text-zinc-400 md:text-base md:leading-8">
                The Ville is built around more than wins and losses. We want
                athletes to learn how to work, communicate, lead, respond to
                adversity, and carry themselves with confidence.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="https://the-ville.gymdesk.com/signup"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-[var(--ville-red)] px-7 py-3 text-center text-sm font-black uppercase tracking-[0.14em] text-white transition duration-300 hover:bg-[var(--ville-red-bright)] hover:shadow-[0_0_30px_rgba(122,0,25,0.35)]"
                >
                  Register Now
                </a>

                <a
                  href="/programs"
                  className="rounded-full border border-white/15 px-7 py-3 text-center text-sm font-black uppercase tracking-[0.14em] text-white transition duration-300 hover:border-[var(--ville-red)] hover:text-[var(--ville-red-bright)]"
                >
                  View Programs
                </a>
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-[radial-gradient(circle_at_top,rgba(122,0,25,0.22),rgba(255,255,255,0.03))] p-5">
              <div className="grid gap-4">
                {standards.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-black/45 px-5 py-4 text-sm font-black uppercase tracking-[0.14em] text-white"
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