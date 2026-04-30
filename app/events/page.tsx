type Event = {
  title: string;
  date: string;
  location: string;
  description: string;
  type: string;
};

const events: Event[] = [
  {
    title: "Summer Kickoff Event",
    date: "May 23",
    location: "Las Vegas, NV",
    description:
      "Join us for our Summer Kickoff. Sign-ups, program information, athlete evaluations, and community engagement.",
    type: "Sign-Up Event",
  },
  {
    title: "Basketball Tournament",
    date: "Coming Soon",
    location: "Las Vegas, NV",
    description:
      "Competitive basketball tournament for multiple divisions and teams.",
    type: "Tournament",
  },
  {
    title: "Soccer Tournament",
    date: "Coming Soon",
    location: "Las Vegas, NV",
    description:
      "Team-based soccer competition with structured divisions.",
    type: "Tournament",
  },
  {
    title: "Cross Country Meet",
    date: "Coming Soon",
    location: "Las Vegas, NV",
    description:
      "Race event focused on endurance, competition, and progression.",
    type: "Meet",
  },
];

export default function TournamentsPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-20">
      
      {/* HEADER */}
      <div className="text-center md:text-left">
        <p className="text-sm font-black uppercase tracking-[0.3em] text-[var(--ville-red-bright)]">
          Events
        </p>

        <h1 className="mt-4 text-5xl font-black uppercase">
          Upcoming events 
        </h1>

        <p className="mt-4 max-w-2xl text-zinc-400 mx-auto md:mx-0">
          Stay updated with all upcoming events including tournaments, sign-ups,
          meets, and community activities hosted by The Ville Athletics.
        </p>
      </div>

      {/* EVENTS GRID */}
      <div className="mt-12 grid items-stretch gap-6 md:grid-cols-2 lg:grid-cols-3">
        {events.map((event) => (
          <div
            key={event.title}
            className="flex h-full flex-col rounded-3xl border border-white/10 bg-zinc-900 p-6 transition duration-300 hover:-translate-y-1 hover:border-[var(--ville-red)] hover:shadow-[0_10px_40px_rgba(122,0,25,0.2)]"
          >
            {/* TYPE */}
            <p className="font-bold text-[var(--ville-red-bright)]">
              {event.type}
            </p>

            {/* TITLE */}
            <h2 className="mt-2 text-2xl font-black uppercase">
              {event.title}
            </h2>

            {/* DATE + LOCATION */}
            <p className="mt-2 text-zinc-400">
              {event.date} • {event.location}
            </p>

            {/* DESCRIPTION */}
            <p className="mt-3 text-zinc-400">
              {event.description}
            </p>

            {/* BUTTON */}
            <a
              href="/register"
              className="mt-auto inline-flex w-fit rounded-full bg-[var(--ville-red)] px-5 py-2 text-sm font-black uppercase text-white transition hover:bg-[var(--ville-red-bright)]"
            >
              Learn More
            </a>
          </div>
        ))}
      </div>
    </main>
  );
}