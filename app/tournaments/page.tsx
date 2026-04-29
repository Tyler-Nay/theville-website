const tournaments = [
  {
    name: "Upcoming Tournament",
    date: "Date TBD",
    location: "Las Vegas, NV",
    fee: "Entry Fee TBD",
  },
];

export default function TournamentsPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-20">
      <p className="text-sm font-black uppercase tracking-[0.3em] text-red-500">Tournaments</p>
      <h1 className="mt-4 text-5xl font-black">Tournament Entries.</h1>

      <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-300">
        Tournament entry payments and event-day transactions can be handled through Square.
        Add payment links here when each tournament opens.
      </p>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {tournaments.map((event) => (
          <div key={event.name} className="rounded-3xl border border-white/10 bg-zinc-900 p-8">
            <h2 className="text-3xl font-black">{event.name}</h2>
            <p className="mt-3 text-zinc-300">{event.date}</p>
            <p className="text-zinc-300">{event.location}</p>
            <p className="mt-3 font-bold text-red-400">{event.fee}</p>

            <a
              href="#"
              className="mt-7 inline-flex rounded-full bg-red-700 px-7 py-4 font-black text-white hover:bg-red-600"
            >
              Square Payment Coming Soon
            </a>
          </div>
        ))}
      </div>
    </main>
  );
}
