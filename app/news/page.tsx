type Post = {
  title: string;
  date: string;
  category: string;
  text: string;
};

const posts: Post[] = [
  {
    title: "Summer Kickoff Event",
    date: "May 23",
    category: "Announcement",
    text: "The Ville will host a Summer Kickoff event with signups, program information, athlete interest forms, and community engagement.",
  },
];

export default function NewsPage() {
  return (
    <main className="mx-auto flex max-w-7xl flex-col items-center px-6 py-20 text-center">
      <section className="max-w-5xl">
        <p className="text-sm font-black uppercase tracking-[0.3em] text-[var(--ville-red-bright)]">
          News
        </p>

        <h1 className="mt-4 text-5xl font-black uppercase leading-[0.95] md:text-7xl">
          News & updates
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-zinc-300">
          Stay updated with announcements, registration updates, events, and
          important information from The Ville Athletics.
        </p>
      </section>

      <section className="mt-14 grid w-full gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.length > 0 ? (
          posts.map((post) => (
            <article
              key={post.title}
              className="flex min-h-[260px] flex-col rounded-3xl border border-white/10 bg-zinc-900 p-6 text-left transition duration-300 hover:-translate-y-1 hover:border-[var(--ville-red)] hover:shadow-[0_10px_40px_rgba(122,0,25,0.2)]"
            >
              <p className="text-sm font-bold text-[var(--ville-red-bright)]">
                {post.category}
              </p>

              <h2 className="mt-3 text-2xl font-black uppercase">
                {post.title}
              </h2>

              <p className="mt-2 text-sm font-bold text-zinc-500">
                {post.date}
              </p>

              <p className="mt-4 leading-7 text-zinc-400">{post.text}</p>
            </article>
          ))
        ) : (
          <div className="rounded-3xl border border-dashed border-white/10 bg-zinc-900/50 p-12 text-center md:col-span-2 lg:col-span-3">
            <p className="text-2xl font-black uppercase text-white">
              More updates coming soon
            </p>

            <p className="mx-auto mt-4 max-w-xl text-zinc-400">
              News, announcements, registration updates, and event information
              will be posted here as they become available.
            </p>
          </div>
        )}
      </section>
    </main>
  );
}