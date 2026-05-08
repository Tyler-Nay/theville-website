const registrations = [
  {
    sport: "Basketball",
    price: "$155/month",
    description:
      "Player registration, membership, waivers, roster placement, and team communication.",
    link: "#",
  },
  {
    sport: "Soccer",
    price: "$100/month",
    description:
      "Player registration, membership, waivers, roster placement, and team communication.",
    link: "#",
  },
  {
    sport: "Cross Country",
    price: "$100/month",
    description:
      "Runner registration, waivers, schedule updates, and team communication.",
    link: "#",
  },
  {
    sport: "Flag Football",
    price: "$150/month",
    description:
      "Player registration, membership, waivers, roster placement, and team communication.",
    link: "#",
  },
];

export default function RegisterPage() {
  return (
    <main className="mx-auto flex max-w-7xl flex-col items-center px-6 py-20 text-center">
      {/* HEADER */}
      <section className="max-w-5xl">
        <p className="text-sm font-black uppercase tracking-[0.3em] text-[var(--ville-red-bright)]">
          Register
        </p>

        <h1 className="mt-4 text-5xl font-black uppercase leading-[0.95] md:text-7xl">
          Join The Ville
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-zinc-300">
          Program registration, memberships, waivers, rosters, schedules, and
          communication are managed through GymDesk.
        </p>
      </section>

      {/* REGISTRATION CARDS */}
      <section className="mt-14 grid w-full items-stretch gap-6 md:grid-cols-2 lg:grid-cols-4">
        {registrations.map((item) => (
          <div
            key={item.sport}
            className="flex min-h-[285px] flex-col items-center rounded-3xl border border-white/10 bg-zinc-900 p-6 text-center transition duration-300 hover:-translate-y-1 hover:border-[var(--ville-red)] hover:shadow-[0_10px_40px_rgba(122,0,25,0.2)]"
          >
            <p className="font-bold text-[var(--ville-red-bright)]">
              {item.price}
            </p>

            <h2 className="mt-2 text-2xl font-black uppercase">
              {item.sport}
            </h2>

            <p className="mt-4 leading-7 text-zinc-400">
              {item.description}
            </p>

            <a
              href={item.link}
              className="mt-auto inline-flex rounded-full bg-[var(--ville-red)] px-5 py-2 text-sm font-black uppercase text-white transition hover:bg-[var(--ville-red-bright)]"
            >
              Registration Coming Soon
            </a>
          </div>
        ))}
      </section>

      {/* EVENTS + EXTRAS */}
      <section className="mt-16 w-full">
        <div className="mx-auto max-w-4xl rounded-[2rem] border border-white/10 bg-gradient-to-br from-zinc-900 to-black px-6 py-12 text-center md:px-10 md:py-14">
          <p className="text-sm font-black uppercase tracking-[0.3em] text-[var(--ville-red-bright)]">
            Events & Extras
          </p>

          <h2 className="mt-4 text-3xl font-black uppercase leading-[1.05] md:text-5xl">
            Tournament and event payments
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-7 text-zinc-300">
            Tournament entries, event fees, merchandise, concessions, and extra
            payments will be handled through Square.
          </p>

          <div className="mt-8 flex justify-center">
            <a
              href="/events"
              className="rounded-full border border-white/20 px-6 py-3 text-sm font-black uppercase text-white transition hover:border-[var(--ville-red)] hover:text-[var(--ville-red-bright)]"
            >
              View Events
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}