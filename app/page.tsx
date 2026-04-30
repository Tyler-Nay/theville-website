import Image from "next/image";
import Link from "next/link";

const programs = [
  {
    name: "Basketball",
    price: "$155/month",
    description: "Competitive training, team play, tournaments, and athlete development.",
  },
  {
    name: "Soccer",
    price: "$100/month",
    description: "Structured training, team development, and competitive play.",
  },
  {
    name: "Cross Country",
    price: "$100/month",
    description: "Endurance training, race preparation, and fitness development.",
  },
  {
    name: "Flag Football",
    price: "$150/month",
    description: "Speed, skill development, teamwork, and competition.",
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
              BUILD THE ATHLETE.
              <span className="block text-[var(--ville-red-bright)]">
                BUILD THE STANDARD.
              </span>
            </h1>

            <p className="mt-6 max-w-md text-zinc-300 mx-auto md:mx-0">
              The Ville Athletics is built for development, competition,
              discipline, and real growth.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center md:justify-start">
              <a
                href="/register"
                className="rounded-full bg-[var(--ville-red)] px-6 py-3 font-bold text-white hover:bg-[var(--ville-red-bright)]"
              >
                REGISTER
              </a>

              <a
                href="/programs"
                className="rounded-full border border-white/20 px-6 py-3 font-bold text-white hover:border-[var(--ville-red)]"
              >
                PROGRAMS
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

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              name: "Basketball",
              price: "$155/month",
              description: "Competitive training, team play, and tournaments.",
            },
            {
              name: "Soccer",
              price: "$100/month",
              description: "Structured training and competitive development.",
            },
            {
              name: "Cross Country",
              price: "$100/month",
              description: "Endurance, racing, and fitness progression.",
            },
            {
              name: "Flag Football",
              price: "$150/month",
              description: "Speed, teamwork, and competition.",
            },
          ].map((program) => (
            <div
              key={program.name}
              className="rounded-3xl border border-white/10 bg-zinc-900 p-6 transition hover:border-[var(--ville-red)]"
            >
              <p className="font-bold text-[var(--ville-red-bright)]">
                {program.price}
              </p>

              <h3 className="mt-2 text-2xl font-black">
                {program.name}
              </h3>

              <p className="mt-3 text-zinc-400">
                {program.description}
              </p>
            </div>
          ))}
        </div>
      </section>

    </main>
  );
}