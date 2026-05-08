"use client";

import { useMemo, useState } from "react";

type Event = {
  id: number;
  title: string;
  date: string;
  location: string;
  description: string;
  sport: string;
  type: string;
  tags: string[];
  imageLabel: string;
  link: string;
};

const events: Event[] = [
  {
    id: 1,
    title: "Basketball Training",
    date: "May 9, 2026",
    location: "Anthony Saville Middle School",
    description: "Basketball training session for athletes at The Ville.",
    sport: "Basketball",
    type: "Training",
    tags: ["Basketball", "Training"],
    imageLabel: "Basketball Training",
    link: "#",
  },
];

const sports = ["All", "Basketball", "Soccer", "Cross Country", "Flag Football"];

const categories = [
  "Basketball",
  "Soccer",
  "Cross Country",
  "Flag Football",
  "Tournament",
  "Training",
  "Practice",
  "Registration",
  "Fundraiser",
  "Tryouts",
];

export default function EventsPage() {
  const [keyword, setKeyword] = useState("");
  const [sport, setSport] = useState("All");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const filteredEvents = useMemo(() => {
    return events.filter((event) => {
      const searchText = [
        event.title,
        event.date,
        event.location,
        event.description,
        event.sport,
        event.type,
        event.imageLabel,
        ...event.tags,
      ]
        .join(" ")
        .toLowerCase();

      const matchesKeyword =
        keyword.trim() === "" || searchText.includes(keyword.toLowerCase());

      const matchesSport = sport === "All" || event.sport === sport;

      const matchesTags =
        selectedTags.length === 0 ||
        selectedTags.some((tag) => event.tags.includes(tag));

      return matchesKeyword && matchesSport && matchesTags;
    });
  }, [keyword, sport, selectedTags]);

  function toggleTag(tag: string) {
    setSelectedTags((current) =>
      current.includes(tag)
        ? current.filter((item) => item !== tag)
        : [...current, tag]
    );
  }

  function clearFilters() {
    setKeyword("");
    setSport("All");
    setSelectedTags([]);
  }

  const hasActiveFilters =
    keyword.trim() !== "" || sport !== "All" || selectedTags.length > 0;

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
        <aside className="h-fit rounded-3xl border border-white/10 bg-zinc-900 p-6">
          <h2 className="text-2xl font-black uppercase">Search</h2>

          <div className="mt-5">
            <label className="text-sm font-bold uppercase text-zinc-400">
              Keyword
            </label>

            <input
              type="text"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              placeholder="Search events"
              className="mt-2 w-full rounded-xl border border-white/10 bg-black px-4 py-3 text-white outline-none transition placeholder:text-zinc-600 focus:border-[var(--ville-red)]"
            />
          </div>

          <div className="mt-6">
            <label className="text-sm font-bold uppercase text-zinc-400">
              Sport
            </label>

            <select
              value={sport}
              onChange={(e) => setSport(e.target.value)}
              className="mt-2 w-full rounded-xl border border-white/10 bg-black px-4 py-3 text-white outline-none transition focus:border-[var(--ville-red)]"
            >
              {sports.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>

          <div className="mt-6">
            <p className="text-sm font-bold uppercase text-zinc-400">
              Event Tags
            </p>

            <div className="mt-3 space-y-3">
              {categories.map((tag) => (
                <label key={tag} className="flex items-center gap-3 text-zinc-300">
                  <input
                    type="checkbox"
                    checked={selectedTags.includes(tag)}
                    onChange={() => toggleTag(tag)}
                    className="h-4 w-4 accent-[var(--ville-red)]"
                  />

                  <span>{tag}</span>
                </label>
              ))}
            </div>
          </div>

          {hasActiveFilters && (
            <button
              onClick={clearFilters}
              className="mt-6 w-full rounded-full border border-white/10 px-5 py-2 text-sm font-black uppercase text-white transition hover:border-[var(--ville-red)] hover:text-[var(--ville-red-bright)]"
            >
              Clear Filters
            </button>
          )}
        </aside>

        <div className="grid gap-6 md:grid-cols-2">
          {filteredEvents.length > 0 ? (
            filteredEvents.map((event) => (
              <article
                key={event.id}
                className="overflow-hidden rounded-3xl border border-white/10 bg-zinc-900 transition duration-300 hover:-translate-y-1 hover:border-[var(--ville-red)] hover:shadow-[0_10px_40px_rgba(122,0,25,0.2)]"
              >
                <div className="flex h-48 items-center justify-center border-b border-white/10 bg-black/60">
                  <p className="text-sm font-black uppercase tracking-[0.3em] text-zinc-600">
                    {event.imageLabel}
                  </p>
                </div>

                <div className="flex min-h-[340px] flex-col p-6">
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

                  <div className="mt-5 flex flex-wrap gap-2">
                    {event.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/10 px-3 py-1 text-xs font-bold uppercase text-zinc-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href={event.link}
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
                No events found
              </p>

              <p className="mx-auto mt-4 max-w-xl text-zinc-400">
                Try changing your search, clearing filters, or checking back
                later as more events are added.
              </p>

              <button
                onClick={clearFilters}
                className="mt-6 rounded-full bg-[var(--ville-red)] px-6 py-3 text-sm font-black uppercase text-white transition hover:bg-[var(--ville-red-bright)]"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}