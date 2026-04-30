const galleryItems = [
  {
    title: "Basketball",
    description: "Team photos, practices, games, and tournament moments.",
  },
  {
    title: "Soccer",
    description: "Training sessions, team events, and match-day highlights.",
  },
  {
    title: "Cross Country",
    description: "Meets, training runs, and athlete progress moments.",
  },
  {
    title: "Flag Football",
    description: "Practices, games, and team highlights.",
  },
  {
    title: "Community Events",
    description: "Sign-up events, family days, and local community moments.",
  },
  {
    title: "The Ville Culture",
    description: "Photos and videos that show the energy, growth, and spirit of the organization.",
  },
];

export default function GalleryPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-20">
      <section className="text-center md:text-left">
        <p className="text-sm font-black uppercase tracking-[0.3em] text-[var(--ville-red-bright)]">
          Gallery
        </p>

        <h1 className="mt-4 text-5xl font-black uppercase leading-none md:text-7xl">
          Moments from
          <span className="block text-[var(--ville-red-bright)]">
            The Ville
          </span>
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-300 md:whitespace-nowrap">
          Photos and videos from practices, games, events, and the Las Vegas community.
        </p>
      </section>

      <section className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {galleryItems.map((item) => (
          <div
            key={item.title}
            className="group overflow-hidden rounded-3xl border border-white/10 bg-zinc-900 transition duration-300 hover:-translate-y-1 hover:border-[var(--ville-red)] hover:shadow-[0_10px_40px_rgba(122,0,25,0.2)]"
          >
            <div className="flex h-56 items-center justify-center bg-black/70">
              <p className="text-sm font-black uppercase tracking-[0.3em] text-zinc-600">
                Photo Coming Soon
              </p>
            </div>

            <div className="p-6">
              <h2 className="text-2xl font-black uppercase">{item.title}</h2>
              <p className="mt-3 leading-7 text-zinc-400">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </section>

      <section className="mt-16">
        <div className="mx-auto max-w-4xl rounded-[2rem] border border-white/10 bg-gradient-to-br from-zinc-900 to-black px-6 py-12 text-center md:px-10 md:py-14">
          <p className="text-sm font-black uppercase tracking-[0.3em] text-[var(--ville-red-bright)]">
            More Coming Soon
          </p>

          <h2 className="mt-4 text-3xl font-black uppercase md:text-5xl">
            Building the story
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-zinc-300">
            As The Ville grows, this page will highlight the athletes, families,
            teams, and community moments that make the organization special.
          </p>
        </div>
      </section>
    </main>
  );
}