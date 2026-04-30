const posts = [
  {
    title: "Summer Kickoff Event",
    date: "May 23",
    category: "Announcement",
    text: "The Ville will host a Summer Kickoff event with signups, program information, athlete interest forms, and community engagement.",
  },
  {
    title: "Program Registration Coming Soon",
    date: "Coming Soon",
    category: "Registration",
    text: "Registration links for Basketball, Soccer, Cross Country, and Flag Football will be added through TeamSnap.",
  },
  {
    title: "Tournament Updates",
    date: "Coming Soon",
    category: "Events",
    text: "Tournament and event payment links will be added through Square as events are scheduled.",
  },
];

export default function NewsPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-20">
      <section className="text-center md:text-left">
        <p className="text-sm font-black uppercase tracking-[0.3em] text-[var(--ville-red-bright)]">
          News
        </p>

        <h1 className="mt-4 text-5xl font-black uppercase leading-none md:text-7xl">
          News & updates
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-zinc-300 md:mx-0">
          Stay updated with announcements, registration updates, events, and
          important information from The Ville Athletics.
        </p>
      </section>

      <section className="mt-12 grid gap-6 md:grid-cols-3">
        {posts.map((post) => (
          <article
            key={post.title}
            className="flex h-full flex-col rounded-3xl border border-white/10 bg-zinc-900 p-6 transition duration-300 hover:-translate-y-1 hover:border-[var(--ville-red)] hover:shadow-[0_10px_40px_rgba(122,0,25,0.2)]"
          >
            <p className="text-sm font-bold text-[var(--ville-red-bright)]">
              {post.category}
            </p>

            <h2 className="mt-3 text-2xl font-black uppercase">
              {post.title}
            </h2>

            <p className="mt-2 text-sm font-bold text-zinc-500">{post.date}</p>

            <p className="mt-4 text-zinc-400">{post.text}</p>
          </article>
        ))}
      </section>
    </main>
  );
}