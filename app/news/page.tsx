"use client";

import { useEffect, useMemo, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import Reveal from "@/components/Reveal";

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
        .order("expires_at", { ascending: true });

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

      const matchesCategory = category === "All" || post.category === category;

      return matchesSearch && matchesCategory;
    });
  }, [posts, search, category]);

  const hasFilters = search.trim() !== "" || category !== "All";

  function clearFilters() {
    setSearch("");
    setCategory("All");
  }

  return (
    <main className="mx-auto max-w-6xl px-5 py-16">
      <Reveal>
        <section className="text-center">
          <p className="text-xs font-black uppercase tracking-[0.35em] text-[var(--ville-red-bright)]">
            News
          </p>

          <h1 className="mt-4 text-4xl font-black uppercase leading-none md:text-6xl">
            News & Updates
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-zinc-300">
            Stay updated with announcements, registrations, tournament updates,
            athlete opportunities, and important information from The Ville
            Athletics.
          </p>
        </section>
      </Reveal>

      <Reveal delay={0.08}>
        <section className="mt-12 grid gap-7 lg:grid-cols-[260px_1fr]">
          <aside className="h-fit rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.035),rgba(255,255,255,0.015))] p-5 lg:sticky lg:top-28">
            <h2 className="text-xl font-black uppercase">Find Updates</h2>

            <div className="mt-5">
              <label className="text-xs font-bold uppercase text-zinc-400">
                Search
              </label>

              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search updates"
                className="mt-2 w-full rounded-xl border border-white/10 bg-zinc-950 px-4 py-3 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-[var(--ville-red)]"
              />
            </div>

            <div className="mt-5">
              <label className="text-xs font-bold uppercase text-zinc-400">
                Category
              </label>

              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="mt-2 w-full rounded-xl border border-white/10 bg-zinc-950 px-4 py-3 text-sm text-white outline-none transition focus:border-[var(--ville-red)]"
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
                className="mt-6 w-full rounded-full border border-white/10 px-5 py-2 text-xs font-black uppercase text-white transition hover:border-[var(--ville-red)] hover:text-[var(--ville-red-bright)]"
              >
                Clear Filters
              </button>
            )}
          </aside>

          <section>
            {loading ? (
              <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.035),rgba(255,255,255,0.015))] p-10 text-center">
                <p className="text-xl font-black uppercase text-white">
                  Loading Updates...
                </p>
              </div>
            ) : filteredPosts.length > 0 ? (
              <>
                <div className="mb-5">
                  <p className="text-xs font-black uppercase tracking-[0.25em] text-zinc-500">
                    Showing
                  </p>

                  <h2 className="text-3xl font-black uppercase tracking-tight">
                    {filteredPosts.length}{" "}
                    {filteredPosts.length === 1 ? "Update" : "Updates"}
                  </h2>
                </div>

                <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                  {filteredPosts.map((post) => (
                    <article
                      key={post.id}
                      className="group flex min-h-[320px] flex-col rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.035),rgba(255,255,255,0.015))] p-6 transition duration-500 hover:-translate-y-1 hover:border-[var(--ville-red)] hover:shadow-[0_15px_50px_rgba(122,0,25,0.22)]"
                    >
                      <span className="w-fit rounded-full bg-[var(--ville-red)] px-3 py-1 text-[11px] font-black uppercase text-white">
                        {post.category}
                      </span>

                      <h2 className="mt-5 text-xl font-black uppercase leading-tight">
                        {post.title}
                      </h2>

                      <p className="mt-3 text-xs font-black uppercase tracking-[0.16em] text-zinc-500">
                        {post.post_date}
                      </p>

                      <p className="mt-5 text-sm leading-7 text-zinc-400">
                        {post.text}
                      </p>

                      {post.link && (
                        <a
                          href={post.link}
                          className="mt-auto inline-flex w-fit rounded-full border border-white/15 px-5 py-2 text-xs font-black uppercase tracking-[0.12em] text-white transition hover:border-[var(--ville-red)] hover:text-[var(--ville-red-bright)]"
                        >
                          Learn More
                        </a>
                      )}
                    </article>
                  ))}
                </div>
              </>
            ) : (
              <div className="rounded-[2rem] border border-dashed border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.035),rgba(255,255,255,0.015))] p-10 text-center">
                <p className="text-2xl font-black uppercase text-white">
                  No Announcements Posted
                </p>

                <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-zinc-400">
                  Updates, registration information, tournaments, community
                  announcements, and important news from The Ville Athletics
                  will appear here when available.
                </p>

                {hasFilters && (
                  <button
                    onClick={clearFilters}
                    className="mt-6 rounded-full bg-[var(--ville-red)] px-5 py-2 text-xs font-black uppercase text-white transition hover:bg-[var(--ville-red-bright)]"
                  >
                    Clear Filters
                  </button>
                )}
              </div>
            )}
          </section>
        </section>
      </Reveal>
    </main>
  );
}