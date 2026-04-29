import Image from "next/image";
import Link from "next/link";

const programs = [
  {
    title: "Basketball",
    price: "$150/month",
    text: "Competitive training, team play, tournaments, and athlete development.",
  },
  {
    title: "Soccer",
    price: "$100/month",
    text: "Structured training and team development for growing athletes.",
  },
  {
    title: "Cross Country",
    price: "Coming Soon",
    text: "Endurance, discipline, and fitness-based development.",
  },
];

export default function Home() {
  return (
    <main>

      {/* HERO */}
      <section className="relative overflow-hidden bg-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(190,18,60,0.4),transparent_40%),linear-gradient(180deg,#000,#050505,#111)]" />

        <div className="relative mx-auto flex max-w-7xl flex-col items-center px-5 py-16 text-center md:grid md:grid-cols-2 md:items-center md:gap-12 md:px-6 md:py-24 md:text-left">

          {/* TEXT */}
          <div>
            <p className="mb-4 text-xs font-black uppercase tracking-[0.3em] text-red-500 md:text-sm">
              Las Vegas Youth Athletics
            </p>

            <h1 className="text-4xl font-black uppercase leading-[0.9] tracking-tight md:text-6xl lg:text-7xl">
              Build the athlete.
              <span className="block text-red-600">Build the standard.</span>
            </h1>

            <p className="mx-auto mt-5 max-w-md text-sm leading-6 text-zinc-300 md:mx-0 md:text-base md:leading-7">
              The Ville Athletics is built for development, competition, discipline,
              and real growth.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center md:justify-start">
              <Link
                href="/register"
                className="rounded-full bg-red-700 px-6 py-3 text-sm font-black uppercase tracking-wide text-white hover:bg-red-600"
              >
                Register
              </Link>

              <Link
                href="/programs"
                className="rounded-full border border-white/20 px-6 py-3 text-sm font-black uppercase tracking-wide text-white hover:border-red-500"
              >
                Programs
              </Link>
            </div>
          </div>

          {/* LOGO */}
          <div className="mt-10 flex justify-center md:mt-0">
            <Image
              src="/logo.png"
              alt="The Ville Logo"
              width={400}
              height={400}
              className="w-[220px] md:w-[400px]"
              priority
            />
          </div>

        </div>
      </section>

      {/* QUICK STRIP */}
      <section className="border-y border-white/10 bg-zinc-950">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-3 px-5 py-8 md:grid-cols-4 md:gap-4 md:px-6">
          {["Train", "Compete", "Develop", "Represent"].map((word) => (
            <div
              key={word}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-center"
            >
              <h2 className="text-xl font-black uppercase md:text-2xl">
                {word}
              </h2>
            </div>
          ))}
        </div>
      </section>

      {/* PROGRAMS */}
      <section className="mx-auto max-w-7xl px-5 py-16 md:px-6 md:py-24">
        <div className="max-w-2xl">
          <p className="text-xs font-black uppercase tracking-[0.3em] text-red-500 md:text-sm">
            Programs
          </p>

          <h2 className="mt-3 text-3xl font-black uppercase leading-tight md:text-5xl">
            Choose your path.
          </h2>
        </div>

        <div className="mt-8 grid gap-5 md:mt-12 md:grid-cols-3">
          {programs.map((program) => (
            <div
              key={program.title}
              className="rounded-2xl border border-white/10 bg-zinc-900 p-6 transition hover:border-red-700 md:rounded-3xl md:p-8"
            >
              <p className="text-xs font-black uppercase tracking-[0.3em] text-red-500 md:text-sm">
                {program.price}
              </p>

              <h3 className="mt-3 text-2xl font-black uppercase md:text-3xl">
                {program.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-zinc-400 md:mt-4 md:text-base md:leading-7">
                {program.text}
              </p>

              <Link
                href="/programs"
                className="mt-5 inline-block text-xs font-black uppercase tracking-wide text-white hover:text-red-500 md:mt-6 md:text-sm"
              >
                Learn More →
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-zinc-900/50">
        <div className="mx-auto max-w-7xl px-5 py-16 text-center md:px-6 md:py-24">
          <p className="text-xs font-black uppercase tracking-[0.3em] text-red-500 md:text-sm">
            Join The Ville
          </p>

          <h2 className="mt-3 text-3xl font-black uppercase md:text-5xl">
            Ready to work?
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm text-zinc-300 md:text-base">
            Start with registration or contact us to learn more about programs,
            training, and tournament opportunities.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center md:mt-8">
            <Link
              href="/register"
              className="rounded-full bg-red-700 px-6 py-3 text-sm font-black uppercase hover:bg-red-600"
            >
              Register
            </Link>

            <Link
              href="/contact"
              className="rounded-full border border-white/20 px-6 py-3 text-sm font-black uppercase hover:bg-white/10"
            >
              Contact
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}