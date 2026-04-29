import Image from "next/image";
import Link from "next/link";

const programs = [
  {
    title: "Basketball",
    price: "$150/month",
    description: "Training, team play, tournaments, and competitive development.",
  },
  {
    title: "Soccer",
    price: "$100/month",
    description: "Structured training, team development, and organized competition.",
  },
  {
    title: "Cross Country",
    price: "Coming Soon",
    description: "Endurance training, optional races, and fitness-focused development.",
  },
];

const highlights = [
  "Player development",
  "Organized registration",
  "Team communication",
  "Sponsorship opportunities",
];

export default function Home() {
  return (
    <main>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(122,0,31,0.45),transparent_35%),linear-gradient(180deg,#050505,#090909)]" />

        <div className="relative mx-auto grid min-h-[82vh] max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="mb-5 text-sm font-black uppercase tracking-[0.35em] text-red-500">
              Las Vegas Youth Sports
            </p>

            <h1 className="max-w-4xl text-5xl font-black leading-[0.95] tracking-tight text-white md:text-7xl">
              Built for athletes. Driven by development.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-zinc-300">
              The Ville Athletics is a community-driven youth sports organization
              built around training, competition, structure, and opportunity for
              athletes and families in Las Vegas.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/register"
                className="rounded-full bg-red-700 px-7 py-4 font-black text-white shadow-lg shadow-red-950/40 transition hover:bg-red-600"
              >
                Register Through TeamSnap
              </Link>

              <Link
                href="/programs"
                className="rounded-full border border-white/20 px-7 py-4 font-black text-white transition hover:border-red-500 hover:bg-white/5"
              >
                View Programs
              </Link>
            </div>
          </div>

          <div className="relative mx-auto flex w-full max-w-md justify-center">
            <div className="absolute inset-8 rounded-full bg-red-900/30 blur-3xl" />
            <Image
              src="/logo.png"
              alt="The Ville Athletics Logo"
              width={520}
              height={520}
              className="relative drop-shadow-2xl"
              priority
            />
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-zinc-950">
        <div className="mx-auto grid max-w-7xl gap-5 px-6 py-14 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item) => (
            <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <p className="text-sm font-black uppercase tracking-[0.25em] text-red-400">
                The Ville
              </p>
              <h2 className="mt-3 text-2xl font-black">{item}</h2>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.3em] text-red-500">
              Programs
            </p>
            <h2 className="mt-3 text-4xl font-black md:text-5xl">
              Multiple ways to compete and grow.
            </h2>
          </div>
          <Link href="/programs" className="font-bold text-red-400 hover:text-red-300">
            View all programs →
          </Link>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {programs.map((program) => (
            <div
              key={program.title}
              className="rounded-3xl border border-white/10 bg-gradient-to-b from-zinc-900 to-black p-7 shadow-2xl"
            >
              <p className="text-sm font-bold text-red-400">{program.price}</p>
              <h3 className="mt-3 text-3xl font-black">{program.title}</h3>
              <p className="mt-4 leading-7 text-zinc-400">{program.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-zinc-900/50">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.3em] text-red-500">
              Systems
            </p>
            <h2 className="mt-3 text-4xl font-black md:text-5xl">
              Simple for families. Organized for the club.
            </h2>
            <p className="mt-5 leading-8 text-zinc-300">
              Memberships, player registration, waivers, and team communication are
              managed through TeamSnap. Tournament entries, concessions, merchandise,
              and event-day transactions can be handled through Square.
            </p>
          </div>

          <div className="grid gap-4">
            <div className="rounded-3xl border border-white/10 bg-black p-7">
              <h3 className="text-2xl font-black">TeamSnap</h3>
              <p className="mt-3 text-zinc-400">
                Registration, memberships, rosters, waivers, schedules, and communication.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-black p-7">
              <h3 className="text-2xl font-black">Square</h3>
              <p className="mt-3 text-zinc-400">
                Tournament entries, concessions, merchandise, donations, and event payments.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 text-center">
        <h2 className="text-4xl font-black md:text-5xl">Ready to join The Ville?</h2>
        <p className="mx-auto mt-5 max-w-2xl text-zinc-300">
          Start with registration, ask a question, or learn more about upcoming
          programs and tournament opportunities.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link href="/register" className="rounded-full bg-red-700 px-7 py-4 font-black hover:bg-red-600">
            Register Now
          </Link>
          <Link href="/contact" className="rounded-full border border-white/20 px-7 py-4 font-black hover:bg-white/5">
            Contact Us
          </Link>
        </div>
      </section>
    </main>
  );
}
