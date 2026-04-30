const posts = [
  {
    title: "Announcements Coming Soon",
    date: "The Ville Athletics",
    text: "News, updates, events, and important club announcements will be posted here.",
  },
];

export default function NewsPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-20">
      <p className="text-sm font-black uppercase tracking-[0.3em] text-red-500">News</p>
      <h1 className="mt-4 text-5xl font-black uppercase">News & announcements.</h1>

      <div className="mt-12 space-y-6">
        {posts.map((post) => (
          <div key={post.title} className="rounded-3xl border border-white/10 bg-zinc-900 p-7">
            <p className="font-bold text-red-400">{post.date}</p>
            <h2 className="mt-3 text-3xl font-black">{post.title}</h2>
            <p className="mt-4 leading-7 text-zinc-400">{post.text}</p>
          </div>
        ))}
      </div>
    </main>
  );
}