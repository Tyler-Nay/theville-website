export default function GalleryPage() {
  return (
    <main className="mx-auto flex max-w-7xl flex-col items-center px-6 py-20 text-center">
      {/* HEADER */}
      <section className="max-w-5xl">
        <p className="text-sm font-black uppercase tracking-[0.3em] text-[var(--ville-red-bright)]">
          Gallery
        </p>

        <h1 className="mt-4 text-5xl font-black uppercase leading-[0.95] md:text-7xl">
          Moments from
          <span className="block text-[var(--ville-red-bright)]">
            The Ville
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-zinc-300">
          Photos and videos from practices, games, tournaments, events, and the
          Las Vegas community.
        </p>
      </section>

      {/* GALLERY FEATURE */}
      <section className="mt-16 w-full">
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-900 shadow-[0_0_60px_rgba(122,0,25,0.12)]">
          <div className="relative h-[420px] w-full overflow-hidden bg-gradient-to-br from-zinc-950 via-black to-zinc-900">
            {/* BACKGROUND GLOWS */}
            <div className="absolute left-0 top-0 h-full w-1/3 bg-[radial-gradient(circle_at_center,rgba(122,0,25,0.25),transparent_70%)]" />
            <div className="absolute right-0 top-0 h-full w-1/3 bg-[radial-gradient(circle_at_center,rgba(122,0,25,0.18),transparent_70%)]" />

            {/* SUBTLE GRID LINES */}
            <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] [background-size:80px_80px]" />

            {/* CENTER CONTENT */}
            <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
              <p className="text-sm font-black uppercase tracking-[0.35em] text-[var(--ville-red-bright)]">
                Coming Soon
              </p>

              <h2 className="mt-5 text-5xl font-black uppercase leading-none md:text-7xl">
                Building the story
              </h2>

              <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-zinc-300">
                As The Ville grows, this gallery will showcase athletes,
                tournaments, practices, community events, and the moments that
                define the organization.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FUTURE MEDIA TYPES */}
      <section className="mt-12 grid w-full gap-6 md:grid-cols-3">
        <div className="rounded-3xl border border-white/10 bg-zinc-900 p-7">
          <p className="text-sm font-black uppercase tracking-[0.25em] text-[var(--ville-red-bright)]">
            Photos
          </p>

          <h3 className="mt-4 text-2xl font-black uppercase">
            Events & games
          </h3>

          <p className="mt-4 leading-7 text-zinc-400">
            Event photography, team moments, game-day photos, and community
            highlights will be posted here.
          </p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-zinc-900 p-7">
          <p className="text-sm font-black uppercase tracking-[0.25em] text-[var(--ville-red-bright)]">
            Videos
          </p>

          <h3 className="mt-4 text-2xl font-black uppercase">
            Highlights
          </h3>

          <p className="mt-4 leading-7 text-zinc-400">
            Training clips, athlete highlights, tournament recaps, and program
            videos will be added as content becomes available.
          </p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-zinc-900 p-7">
          <p className="text-sm font-black uppercase tracking-[0.25em] text-[var(--ville-red-bright)]">
            Culture
          </p>

          <h3 className="mt-4 text-2xl font-black uppercase">
            The Ville
          </h3>

          <p className="mt-4 leading-7 text-zinc-400">
            This page will capture the families, athletes, coaches, and
            community moments that represent The Ville.
          </p>
        </div>
      </section>
    </main>
  );
}