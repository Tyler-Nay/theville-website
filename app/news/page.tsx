"use client";

import { useEffect, useMemo, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

type Post = {
  id: number;
  title: string;
  post_date: string;
  category: string;
  text: string;
  link: string | null;
};

const categories = [
  "All",
  "Announcement",
  "Registration",
  "Tournament",
  "Training",
  "Community",
  "Program Update",
];

export default function NewsPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getPosts() {
      const { data, error } = await supabase
        .from("announcements")
        .select("*")
        .eq("published", true)
        .gte("expires_at", new Date().toISOString())
        .order("expires_at", { ascending: true });;

      if (!error && data) {
        setPosts(data);
      }

      setLoading(false);
    }

    getPosts();
  }, []);

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const searchText = [
        post.title,
        post.post_date,
        post.category,
        post.text,
      ]
        .join(" ")
        .toLowerCase();

      const matchesSearch =
        search.trim() === "" || searchText.includes(search.toLowerCase());

      const matchesCategory =
        category === "All" || post.category === category;

      return matchesSearch && matchesCategory;
    });
  }, [posts, search, category]);

  const hasFilters = search.trim() !== "" || category !== "All";

  function clearFilters() {
    setSearch("");
    setCategory("All");
  }

  return (
    <main className="mx-auto max-w-7xl px-6 py-20">
      <section className="text-center">
        <p className="text-sm font-black uppercase tracking-[0.3em] text-[var(--ville-red-bright)]">
          News
        </p>

        <h1 className="mt-4 text-5xl font-black uppercase leading-none md:text-7xl">
          News & Updates
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-zinc-300">
          Stay updated with announcements, registrations, tournament updates,
          athlete opportunities, and important information from The Ville
          Athletics.
        </p>
      </section>

      <section className="mt-14 grid gap-8 lg:grid-cols-[280px_1fr]">
        <aside className="h-fit rounded-3xl border border-white/10 bg-zinc-900 p-6">
          <h2 className="text-2xl font-black uppercase">Find Updates</h2>

          <div className="mt-5">
            <label className="text-sm font-bold uppercase text-zinc-400">
              Search
            </label>

            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search updates"
              className="mt-2 w-full rounded-xl border border-white/10 bg-black px-4 py-3 text-white outline-none transition placeholder:text-zinc-600 focus:border-[var(--ville-red)]"
            />
          </div>

          <div className="mt-6">
            <label className="text-sm font-bold uppercase text-zinc-400">
              Category
            </label>

            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="mt-2 w-full rounded-xl border border-white/10 bg-black px-4 py-3 text-white outline-none transition focus:border-[var(--ville-red)]"
            >
              {categories.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>

          {hasFilters && (
            <button
              onClick={clearFilters}
              className="mt-6 w-full rounded-full border border-white/10 px-5 py-2 text-sm font-black uppercase text-white transition hover:border-[var(--ville-red)] hover:text-[var(--ville-red-bright)]"
            >
              Clear Filters
            </button>
          )}
        </aside>

        <section>
          {loading ? (
            <div className="rounded-3xl border border-white/10 bg-zinc-900/50 p-12 text-center">
              <p className="text-2xl font-black uppercase text-white">
                Loading Updates...
              </p>
            </div>
          ) : filteredPosts.length > 0 ? (
            <>
              <div className="mb-5">
                <p className="text-sm font-black uppercase tracking-[0.25em] text-zinc-500">
                  Showing
                </p>

                <h2 className="text-3xl font-black uppercase">
                  {filteredPosts.length}{" "}
                  {filteredPosts.length === 1 ? "Update" : "Updates"}
                </h2>
              </div>

              <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {filteredPosts.map((post) => (
                  <article
                    key={post.id}
                    className="flex min-h-[320px] flex-col rounded-3xl border border-white/10 bg-zinc-900 p-6 transition duration-300 hover:-translate-y-1 hover:border-[var(--ville-red)] hover:shadow-[0_10px_40px_rgba(122,0,25,0.2)]"
                  >
                    <span className="w-fit rounded-full bg-[var(--ville-red)] px-3 py-1 text-xs font-black uppercase text-white">
                      {post.category}
                    </span>

                    <h2 className="mt-5 text-2xl font-black uppercase">
                      {post.title}
                    </h2>

                    <p className="mt-3 text-sm font-bold uppercase text-zinc-500">
                      {post.post_date}
                    </p>

                    <p className="mt-5 leading-7 text-zinc-400">
                      {post.text}
                    </p>

                    {post.link && (
                      <a
                        href={post.link}
                        className="mt-auto inline-flex w-fit rounded-full border border-white/15 px-5 py-2 text-sm font-black uppercase text-white transition hover:border-[var(--ville-red)] hover:text-[var(--ville-red-bright)]"
                      >
                        Learn More
                      </a>
                    )}
                  </article>
                ))}
              </div>
            </>
          ) : (
            <div className="rounded-3xl border border-dashed border-white/10 bg-zinc-900/50 p-12 text-center">
              <p className="text-3xl font-black uppercase text-white">
                No Announcements Posted
              </p>

              <p className="mx-auto mt-4 max-w-2xl text-zinc-400">
                Updates, registration information, tournaments, community
                announcements, and important news from The Ville Athletics will
                appear here when available.
              </p>

              {hasFilters && (
                <button
                  onClick={clearFilters}
                  className="mt-6 rounded-full bg-[var(--ville-red)] px-6 py-3 text-sm font-black uppercase text-white transition hover:bg-[var(--ville-red-bright)]"
                >
                  Clear Filters
                </button>
              )}
            </div>
          )}
        </section>
      </section>
    </main>
  );
}