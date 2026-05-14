"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

const programs = [
  {
    name: "Basketball",
    grades: "Grades K–5, 6–8, High School",
    price: "$159/month",
  },
  {
    name: "Soccer",
    grades: "Grades K–5, 6–8",
    price: "$109/month",
  },
  {
    name: "Cross Country",
    grades: "Grades K–12",
    price: "Coming Soon",
  },
  {
    name: "Flag Football",
    grades: "Grades K–5, 6–8, High School",
    price: "Coming Soon",
  },
];

type FeaturedEvent = {
  id: number;
  title: string;
  event_date: string | null;
  event_time: string | null;
  location: string | null;
  description: string | null;
  sport: string | null;
  type: string | null;
  button_text: string | null;
  image_url: string | null;
  featured: boolean;
  published: boolean;
  created_at: string;
};

export default function Home() {
  const [featuredEvent, setFeaturedEvent] = useState<FeaturedEvent | null>(
    null
  );

  useEffect(() => {
    async function getFeaturedEvent() {
      const { data, error } = await supabase
        .from("events")
        .select("*")
        .eq("published", true)
        .eq("featured", true)
        .order("created_at", { ascending: false })
        .limit(1)
        .maybeSingle();

      if (!error && data) {
        setFeaturedEvent(data);
      }
    }

    getFeaturedEvent();
  }, []);

  return (
    <main>
      {/* HERO */}
      <section className="relative flex min-h-[80vh] items-center justify-center bg-black">
        <div className="mx-auto max-w-7xl px-6 py-28 text-center">
          <p className="text-sm font-black uppercase tracking-[0.3em] text-[var(--ville-red-bright)]">
            Las Vegas Youth Athletics
          </p>

          <h1 className="mt-6 text-6xl font-black uppercase leading-[0.9] md:text-8xl">
            <span className="block text-white">Build the</span>
            <span className="block">Athlete</span>
            <span className="mt-2 block text-[var(--ville-red-bright)]">
              Build the
            </span>
            <span className="block text-[var(--ville-red-bright)]">
              Standard
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-zinc-300">
            The Ville Athletics is a Las Vegas-based, community-driven youth
            sports organization serving athletes from grades K–12.
          </p>

          <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-zinc-400">
            Built to support local families, develop disciplined athletes, and
            create positive opportunities through basketball, soccer, cross
            country, and flag football.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="/programs"
              className="rounded-full border border-white/20 px-8 py-4 text-base font-bold text-white transition hover:border-[var(--ville-red)]"
            >
              Programs
            </a>
          </div>
        </div>
      </section>

      {/* FEATURED EVENT */}
      {featuredEvent && (
        <section className="mx-auto max-w-7xl px-6 py-20">
          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-zinc-950 via-zinc-900 to-black p-6 shadow-[0_0_60px_rgba(122,0,25,0.18)] md:p-10">
            <div className="grid gap-10 lg:grid-cols-[1.05fr_1fr] lg:items-center">
              {/* FLYER */}
              <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-black shadow-2xl">
                {featuredEvent.image_url ? (
                  <img
                    src={featuredEvent.image_url}
                    alt={featuredEvent.title}
                    className="h-full max-h-[700px] w-full object-cover"
                  />
                ) : (
                  <div className="flex h-[420px] items-center justify-center bg-zinc-950 text-sm font-black uppercase tracking-[0.3em] text-zinc-600">
                    Featured Event
                  </div>
                )}
              </div>

              {/* INFO */}
              <div className="text-center lg:text-left">
                <div className="flex flex-wrap justify-center gap-2 lg:justify-start">
                  {featuredEvent.sport && (
                    <span className="rounded-full bg-[var(--ville-red-bright)]/20 px-3 py-1 text-xs font-black uppercase tracking-[0.15em] text-[var(--ville-red-bright)]">
                      {featuredEvent.sport}
                    </span>
                  )}

                  {featuredEvent.type && (
                    <span className="rounded-full bg-white/5 px-3 py-1 text-xs font-black uppercase tracking-[0.15em] text-zinc-300">
                      {featuredEvent.type}
                    </span>
                  )}

                  <span className="rounded-full border border-[var(--ville-red-bright)] px-3 py-1 text-xs font-black uppercase tracking-[0.15em] text-[var(--ville-red-bright)]">
                    Featured Event
                  </span>
                </div>

                <p className="mt-6 text-sm font-black uppercase tracking-[0.2em] text-[var(--ville-red-bright)]">
                  {featuredEvent.event_date || "Date TBA"}
                  {featuredEvent.event_time
                    ? ` • ${featuredEvent.event_time}`
                    : ""}
                </p>

                <h2 className="mt-4 text-5xl font-black uppercase leading-[0.95] text-white md:text-6xl">
                  {featuredEvent.title}
                </h2>

                {featuredEvent.location && (
                  <p className="mt-5 text-lg font-semibold text-zinc-400">
                    {featuredEvent.location}
                  </p>
                )}

                {featuredEvent.description && (
                  <div className="mt-7">
                    <p className="line-clamp-5 text-lg leading-8 text-zinc-300">
                      {featuredEvent.description}
                    </p>

                    <details className="mt-4">
                      <summary className="cursor-pointer text-sm font-black uppercase tracking-[0.15em] text-[var(--ville-red-bright)] transition hover:text-white">
                        Read Full Description
                      </summary>

                      <p className="mt-4 text-base leading-8 text-zinc-400">
                        {featuredEvent.description}
                      </p>
                    </details>
                  </div>
                )}

                <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
                  <a
                    href={`/events/${featuredEvent.id}/register`}
                    className="rounded-full bg-[var(--ville-red)] px-8 py-4 text-sm font-black uppercase text-white transition hover:bg-[var(--ville-red-bright)]"
                  >
                    {featuredEvent.button_text || "Register"}
                  </a>

                  <a
                    href="/events"
                    className="rounded-full border border-white/15 px-8 py-4 text-sm font-black uppercase text-white transition hover:border-[var(--ville-red)] hover:text-[var(--ville-red-bright)]"
                  >
                    View All Events
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* PROGRAMS SECTION */}
      <section className="mx-auto flex max-w-7xl flex-col items-center px-6 py-20 text-center">
        <p className="text-sm font-black uppercase tracking-[0.3em] text-[var(--ville-red-bright)]">
          Programs
        </p>

        <h2 className="mt-4 text-4xl font-black uppercase">
          Train. Compete. Develop.
        </h2>

        <p className="mt-4 max-w-3xl text-zinc-400">
          Programs are built for different age groups so families can quickly
          find the right fit for their athlete.
        </p>

        <div className="mt-12 grid w-full gap-4 md:grid-cols-2 lg:grid-cols-4">
          {programs.map((program) => (
            <div
              key={program.name}
              className="flex flex-col items-center rounded-2xl border border-white/10 bg-zinc-900 px-5 py-5 text-center transition hover:border-[var(--ville-red)]"
            >
              <p className="text-sm font-bold text-[var(--ville-red-bright)]">
                {program.price}
              </p>

              <h3 className="mt-1 text-xl font-black">{program.name}</h3>

              <p className="mt-1 text-sm font-semibold text-zinc-300">
                {program.grades}
              </p>

              <a
                href="/programs"
                className="mt-4 inline-flex rounded-full border border-white/15 px-4 py-1.5 text-[11px] font-black uppercase text-white transition hover:border-[var(--ville-red)] hover:text-[var(--ville-red-bright)]"
              >
                Learn More
              </a>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}