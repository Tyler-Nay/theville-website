type Event = {
  title: string;
  date: string;
  location: string;
  description: string;
  type: string;
  imageLabel: string;
};

const events: Event[] = [
  {
    title: "Summer Kickoff Event",
    date: "May 23",
    location: "Las Vegas, NV",
    description:
      "Join us for our Summer Kickoff event featuring registration information, athlete interest forms, community engagement, and program details for upcoming sports seasons.",
    type: "Community Event",
    imageLabel: "Summer Kickoff",
  },
];

const categories = [
  "Basketball",
  "Soccer",
  "Cross Country",
  "Flag Football",
  "Community Event",
  "Tournament",
  "Sign-Up Event",
  "Everyone",
];

export default function EventsPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-20">
      <section className="text-center">
        <p className="text-sm font-black uppercase tracking-[0.3em] text-[var(--ville-red-bright)]">
          Events
        </p>

        <h1 className="mt-4 text-5xl font-black uppercase leading-none md:text-7xl">
          Upcoming Ville Events
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-zinc-300">
          Stay updated with sign-up events, tournaments, meets, community days,
          and program opportunities hosted by The Ville Athletics.
        </p>
      </section>

      <section className="mt-14 grid gap-8 lg:grid-cols-[280px_1fr]">
        {/* FILTER SIDEBAR */}
        <aside className="h-fit rounded-3xl border border-white/10 bg-zinc-900 p-6">
          <h2 className="text-2xl font-black uppercase">Search</h2>

          <div className="mt-5">
            <label className="text-sm font-bold uppercase text-zinc-400">
              Keyword
            </label>

            <input
              type="text"
              placeholder="Search events"
              className="mt-2 w-full rounded-xl border border-white/10 bg-black px-4 py-3 text-white outline-none transition placeholder:text-zinc-600 focus:border-[var(--ville-red)]"
            />
          </div>

          <div className="mt-6">
            <label className="text-sm font-bold uppercase text-zinc-400">
              Event Type
            </label>

            <select className="mt-2 w-full rounded-xl border border-white/10 bg-black px-4 py-3 text-white outline-none transition focus:border-[var(--ville-red)]">
              <option>Select Event Type</option>
              <option>Community Event</option>
              <option>Tournament</option>
              <option>Meet</option>
              <option>Camp</option>
              <option>Training</option>
            </select>
          </div>

          <div className="mt-6">
            <p className="text-sm font-bold uppercase text-zinc-400">
              Event Category
            </p>

            <div className="mt-3 space-y-3">
              {categories.map((category) => (
                <label
                  key={category}
                  className="flex items-center gap-3 text-zinc-300"
                >
                  <input
                    type="checkbox"
                    className="h-4 w-4 accent-[var(--ville-red)]"
                  />

                  <span>{category}</span>
                </label>
              ))}
            </div>
          </div>
        </aside>

        {/* EVENT CARDS */}
        <div className="grid gap-6 md:grid-cols-2">
          {events.length > 0 ? (
            events.map((event) => (
              <article
                key={event.title}
                className="overflow-hidden rounded-3xl border border-white/10 bg-zinc-900 transition duration-300 hover:-translate-y-1 hover:border-[var(--ville-red)] hover:shadow-[0_10px_40px_rgba(122,0,25,0.2)]"
              >
                <div className="flex h-48 items-center justify-center border-b border-white/10 bg-black/60">
                  <p className="text-sm font-black uppercase tracking-[0.3em] text-zinc-600">
                    {event.imageLabel}
                  </p>
                </div>

                <div className="flex min-h-[300px] flex-col p-6">
                  <p className="font-bold text-[var(--ville-red-bright)]">
                    {event.date}
                  </p>

                  <h2 className="mt-2 text-2xl font-black uppercase">
                    {event.title}
                  </h2>

                  <p className="mt-3 text-sm font-bold uppercase text-zinc-500">
                    {event.type}
                  </p>

                  <p className="mt-3 text-zinc-400">{event.location}</p>

                  <p className="mt-4 leading-7 text-zinc-400">
                    {event.description}
                  </p>

                  <a
                    href="/register"
                    className="mt-auto inline-flex w-fit rounded-full border border-white/15 px-5 py-2 text-sm font-black uppercase text-white transition hover:border-[var(--ville-red)] hover:text-[var(--ville-red-bright)]"
                  >
                    More Info
                  </a>
                </div>
              </article>
            ))
          ) : (
            <div className="rounded-3xl border border-dashed border-white/10 bg-zinc-900/50 p-12 text-center md:col-span-2">
              <p className="text-2xl font-black uppercase text-white">
                More events coming soon
              </p>

              <p className="mx-auto mt-4 max-w-xl text-zinc-400">
                Tournament schedules, community events, and program information
                will be posted here as they become available.
              </p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}