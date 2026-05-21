"use client";

import { useEffect, useMemo, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import Reveal from "@/components/Reveal";

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
  image_url: string | null;
  link: string;
  featured: boolean;
  registration_type: string;
  button_text: string;
  show_registration_button: boolean;
};

const sports = ["All", "Basketball", "Cross Country", "Flag Football", "Soccer"];

const categories = [
  "Basketball",
  "Cross Country",
  "Flag Football",
  "Soccer",
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
  const [openEventId, setOpenEventId] = useState<number | null>(null);

  useEffect(() => {
    async function getEvents() {
      const { data, error } = await supabase
        .from("events")
        .select("*")
        .eq("published", true)
        .gte("event_date", new Date().toISOString().split("T")[0])
        .order("event_datetime", { ascending: true });

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
        ...(event.tags || []),
      ]
        .join(" ")
        .toLowerCase();

      const matchesKeyword =
        keyword.trim() === "" || searchText.includes(keyword.toLowerCase());

      const matchesSport = sport === "All" || event.sport === sport;

      const matchesTags =
        selectedTags.length === 0 ||
        selectedTags.some((tag) => event.tags?.includes(tag));

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
    <main className="mx-auto max-w-6xl px-5 py-16">
      <Reveal>
        <section className="text-center">
          <p className="text-xs font-black uppercase tracking-[0.35em] text-[var(--ville-red-bright)]">
            Events
          </p>

          <h1 className="mt-4 text-4xl font-black uppercase leading-none md:text-6xl">
            Upcoming Ville Events
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-zinc-300">
            Stay updated with tournaments, training sessions, registrations,
            community days, and opportunities hosted by The Ville Athletics.
          </p>
        </section>
      </Reveal>

      <Reveal delay={0.08}>
        <section className="mt-12 grid gap-7 lg:grid-cols-[260px_1fr]">
          <aside className="h-fit rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.035),rgba(255,255,255,0.015))] p-5 lg:sticky lg:top-28">
            <h2 className="text-xl font-black uppercase">Find Events</h2>

            <div className="mt-5">
              <label className="text-xs font-bold uppercase text-zinc-400">
                Keyword
              </label>

              <input
                type="text"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                placeholder="Search events"
                className="mt-2 w-full rounded-xl border border-white/10 bg-zinc-950 px-4 py-3 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-[var(--ville-red)]"
              />
            </div>

            <div className="mt-5">
              <label className="text-xs font-bold uppercase text-zinc-400">
                Sport
              </label>

              <select
                value={sport}
                onChange={(e) => setSport(e.target.value)}
                className="mt-2 w-full rounded-xl border border-white/10 bg-zinc-950 px-4 py-3 text-sm text-white outline-none transition focus:border-[var(--ville-red)]"
              >
                {sports.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>

            <div className="mt-5">
              <p className="text-xs font-bold uppercase text-zinc-400">
                Event Tags
              </p>

              <div className="mt-3 space-y-2.5">
                {categories.map((tag) => (
                  <label
                    key={tag}
                    className="flex items-center gap-3 text-sm text-zinc-300"
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
                  Loading Events...
                </p>
              </div>
            ) : filteredEvents.length > 0 ? (
              <>
                <div className="mb-5">
                  <p className="text-xs font-black uppercase tracking-[0.25em] text-zinc-500">
                    Showing
                  </p>

                  <h2 className="text-3xl font-black uppercase tracking-tight">
                    {filteredEvents.length}{" "}
                    {filteredEvents.length === 1 ? "Event" : "Events"}
                  </h2>
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                  {filteredEvents.map((event) => (
                    <article
                      key={event.id}
                      className={`group self-start overflow-hidden rounded-[2rem] border bg-[linear-gradient(180deg,rgba(255,255,255,0.035),rgba(255,255,255,0.015))] transition duration-500 hover:-translate-y-1 hover:shadow-[0_15px_50px_rgba(122,0,25,0.22)] ${
                        event.featured
                          ? "border-yellow-500/50 shadow-[0_0_40px_rgba(234,179,8,0.12)]"
                          : "border-white/10 hover:border-[var(--ville-red)]"
                      }`}
                    >
                      <div className="flex items-center justify-center border-b border-white/10 bg-black p-3">
                        {event.image_url ? (
                          <img
                            src={event.image_url}
                            alt={event.title}
                            className="h-auto max-h-[520px] w-full rounded-2xl object-contain transition duration-700 group-hover:scale-[1.02]"
                          />
                        ) : (
                          <div className="flex h-[360px] w-full items-center justify-center rounded-2xl bg-zinc-950">
                            <p className="text-sm font-black uppercase tracking-[0.3em] text-zinc-600">
                              {event.image_label}
                            </p>
                          </div>
                        )}
                      </div>

                      <div className="flex min-h-[340px] flex-col p-5">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="rounded-full bg-[var(--ville-red)] px-3 py-1 text-[11px] font-black uppercase text-white">
                            {event.sport}
                          </span>

                          <span className="rounded-full border border-white/10 px-3 py-1 text-[11px] font-black uppercase text-zinc-400">
                            {event.type}
                          </span>

                          {event.featured && (
                            <span className="rounded-full border border-yellow-500 bg-yellow-500/10 px-3 py-1 text-[11px] font-black uppercase text-yellow-400">
                              Featured
                            </span>
                          )}
                        </div>

                        <p className="mt-4 text-sm font-bold text-[var(--ville-red-bright)]">
                          {event.event_date} • {event.event_time}
                        </p>

                        <h2 className="mt-2 text-xl font-black uppercase leading-tight">
                          {event.title}
                        </h2>

                        <p className="mt-3 text-sm text-zinc-400">
                          {event.location}
                        </p>

                        <div className="mt-4">
                          <button
                            type="button"
                            onClick={() =>
                              setOpenEventId(
                                openEventId === event.id ? null : event.id
                              )
                            }
                            className="text-xs font-black uppercase tracking-[0.15em] text-[var(--ville-red-bright)] transition hover:text-white"
                          >
                            {openEventId === event.id
                              ? "Show Less"
                              : "Read More"}
                          </button>

                          {openEventId === event.id && (
                            <p className="mt-4 text-sm leading-7 text-zinc-400">
                              {event.description}
                            </p>
                          )}
                        </div>

                        {event.tags && event.tags.length > 0 && (
                          <div className="mt-5 flex flex-wrap gap-2">
                            {event.tags.map((tag) => (
                              <span
                                key={tag}
                                className="rounded-full border border-white/10 px-3 py-1 text-[11px] font-bold uppercase text-zinc-400"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}

                        {event.show_registration_button && (
                          <a
                            href={
                              event.registration_type === "custom"
                                ? `/events/${event.id}/register`
                                : event.link
                            }
                            target={
                              event.registration_type === "custom"
                                ? "_self"
                                : "_blank"
                            }
                            rel="noopener noreferrer"
                            className="mt-6 inline-flex w-fit rounded-full bg-[var(--ville-red)] px-4 py-2 text-xs font-black uppercase text-white transition hover:bg-[var(--ville-red-bright)]"
                          >
                            {event.button_text || "Register"}
                          </a>
                        )}
                      </div>
                    </article>
                  ))}
                </div>
              </>
            ) : (
              <div className="rounded-[2rem] border border-dashed border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.035),rgba(255,255,255,0.015))] p-10 text-center">
                <p className="text-2xl font-black uppercase text-white">
                  No Events Scheduled
                </p>

                <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-zinc-400">
                  Check back later for upcoming tournaments, camps,
                  registrations, and community events.
                </p>

                {hasActiveFilters && (
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