"use client";

import { useEffect, useMemo, useState } from "react";
import { supabase } from "@/lib/supabase";

type Event = {
  id: number;
  title: string;
  event_date: string;
  event_time: string;
  location: string;
  description: string;
  sport: string;
  type: string;
  tags: string[];
  image_label: string;
  link: string;
};

const sports = ["All", "Basketball", "Cross Country", "Flag Football"];

const categories = [
  "Basketball",
  "Cross Country",
  "Flag Football",
  "Tournament",
  "Training",
  "Practice",
  "Registration",
  "Fundraiser",
  "Tryouts",
  "Community",
];

export default function EventsPage() {
  const [events, setEvents] = useState<Event[]>([]);
  const [keyword, setKeyword] = useState("");
  const [sport, setSport] = useState("All");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getEvents() {
      const today = new Date().toISOString().split("T")[0];

      const { data, error } = await supabase
        .from("events")
        .select("*")
        .gte("event_date", today)
        .order("event_date", { ascending: true });

      if (!error && data) {
        setEvents(data);
      }

      setLoading(false);
    }

    getEvents();
  }, []);

  const filteredEvents = useMemo(() => {
    return events.filter((event) => {
      const searchText = [
        event.title,
        event.event_date,
        event.event_time,
        event.location,
        event.description,
        event.sport,
        event.type,
        event.image_label,
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
  }, [events, keyword, sport, selectedTags]);

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
          Stay updated with tournaments, training sessions, registrations,
          community days, and program opportunities hosted by The Ville
          Athletics.
        </p>
      </section>

      <section className="mt-14 grid gap-8 lg:grid-cols-[280px_1fr]">
        <aside className="h-fit rounded-3xl border border-white/10 bg-zinc-900 p-6">
          <h2 className="text-2xl font-black uppercase">Find Events</h2>

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
                <label
                  key={tag}
                  className="flex items-center gap-3 text-zinc-300"
                >
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

        <section>
          {loading ? (
            <div className="rounded-3xl border border-white/10 bg-zinc-900/50 p-12 text-center">
              <p className="text-2xl font-black uppercase text-white">
                Loading Events...
              </p>
            </div>
          ) : filteredEvents.length > 0 ? (
            <>
              <div className="mb-5">
                <p className="text-sm font-black uppercase tracking-[0.25em] text-zinc-500">
                  Showing
                </p>

                <h2 className="text-3xl font-black uppercase">
                  {filteredEvents.length}{" "}
                  {filteredEvents.length === 1 ? "Event" : "Events"}
                </h2>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                {filteredEvents.map((event) => (
                  <article
                    key={event.id}
                    className="overflow-hidden rounded-3xl border border-white/10 bg-zinc-900 transition duration-300 hover:-translate-y-1 hover:border-[var(--ville-red)] hover:shadow-[0_10px_40px_rgba(122,0,25,0.2)]"
                  >
                    <div className="flex h-48 items-center justify-center border-b border-white/10 bg-black/60">
                      <p className="text-sm font-black uppercase tracking-[0.3em] text-zinc-600">
                        {event.image_label}
                      </p>
                    </div>

                    <div className="flex min-h-[370px] flex-col p-6">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="rounded-full bg-[var(--ville-red)] px-3 py-1 text-xs font-black uppercase text-white">
                          {event.sport}
                        </span>

                        <span className="rounded-full border border-white/10 px-3 py-1 text-xs font-black uppercase text-zinc-400">
                          {event.type}
                        </span>
                      </div>

                      <p className="mt-5 font-bold text-[var(--ville-red-bright)]">
                        {event.event_date} • {event.event_time}
                      </p>

                      <h2 className="mt-2 text-2xl font-black uppercase">
                        {event.title}
                      </h2>

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
                ))}
              </div>
            </>
          ) : (
            <div className="rounded-3xl border border-dashed border-white/10 bg-zinc-900/50 p-12 text-center">
              <p className="text-3xl font-black uppercase text-white">
                No Events Scheduled
              </p>

              <p className="mx-auto mt-4 max-w-xl text-zinc-400">
                Check back later for upcoming training sessions, tournaments,
                registrations, and community events hosted by The Ville
                Athletics.
              </p>

              {hasActiveFilters && (
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