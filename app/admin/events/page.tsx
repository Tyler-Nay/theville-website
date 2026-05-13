"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import AdminGuard from "../../../components/AdminGuard";

type Event = {
  id: number;
  title: string;
  event_date: string;
  sport: string;
  type: string;
  location: string;
  featured: boolean;
  published: boolean;
};

export default function AdminEventsPage() {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);

  async function fetchEvents() {
    const { data, error } = await supabase
      .from("events")
      .select("*")
      .order("created_at", { ascending: false });

    if (!error && data) {
      setEvents(data);
    }

    setLoading(false);
  }

  useEffect(() => {
    fetchEvents();
  }, []);

  return (
    <AdminGuard>
      <main className="mx-auto w-full max-w-7xl px-6 py-20">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.3em] text-[var(--ville-red-bright)]">
              Admin
            </p>

            <h1 className="mt-4 text-5xl font-black uppercase">
              Events
            </h1>

            <p className="mt-4 max-w-2xl text-lg leading-8 text-zinc-300">
              Manage tournaments, camps, tryouts, fundraisers, and featured
              website events.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <a
              href="/admin/events/new"
              className="inline-flex rounded-full bg-[var(--ville-red)] px-6 py-3 text-sm font-black uppercase text-white transition hover:bg-[var(--ville-red-bright)]"
            >
              Add Event
            </a>

            <a
              href="/admin"
              className="inline-flex rounded-full border border-white/10 px-6 py-3 text-sm font-black uppercase text-white transition hover:border-[var(--ville-red)] hover:text-[var(--ville-red-bright)]"
            >
              Dashboard
            </a>
          </div>
        </div>

        <section className="mt-12 grid gap-6">
          {loading ? (
            <div className="rounded-3xl border border-white/10 bg-zinc-900 p-8">
              <p className="text-zinc-400">Loading events...</p>
            </div>
          ) : events.length === 0 ? (
            <div className="rounded-3xl border border-white/10 bg-zinc-900 p-8">
              <p className="text-zinc-400">
                No events have been created yet.
              </p>
            </div>
          ) : (
            events.map((event) => (
              <div
                key={event.id}
                className="rounded-3xl border border-white/10 bg-zinc-900 p-6"
              >
                <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                  <div>
                    <div className="flex flex-wrap gap-2">
                      <span className="rounded-full bg-[var(--ville-red)] px-3 py-1 text-xs font-black uppercase text-white">
                        {event.sport}
                      </span>

                      <span className="rounded-full border border-white/10 px-3 py-1 text-xs font-black uppercase text-zinc-300">
                        {event.type}
                      </span>

                      {event.featured && (
                        <span className="rounded-full border border-yellow-500 px-3 py-1 text-xs font-black uppercase text-yellow-400">
                          Featured
                        </span>
                      )}

                      {!event.published && (
                        <span className="rounded-full border border-red-500 px-3 py-1 text-xs font-black uppercase text-red-400">
                          Draft
                        </span>
                      )}
                    </div>

                    <h2 className="mt-4 text-3xl font-black uppercase">
                      {event.title}
                    </h2>

                    <p className="mt-2 text-zinc-400">
                      {event.event_date} • {event.location}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <button className="rounded-full border border-white/10 px-5 py-2 text-sm font-black uppercase text-white transition hover:border-[var(--ville-red)] hover:text-[var(--ville-red-bright)]">
                      Edit
                    </button>

                    <button className="rounded-full border border-red-500 px-5 py-2 text-sm font-black uppercase text-red-400 transition hover:bg-red-500 hover:text-white">
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </section>
      </main>
    </AdminGuard>
  );
}