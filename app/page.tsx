"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import Reveal from "@/components/Reveal";

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
  registration_type: string | null;
  link: string | null;
  show_registration_button: boolean;
  created_at: string;
};

export default function Home() {
  const [featuredEvent, setFeaturedEvent] = useState<FeaturedEvent | null>(null);
  const [eventDescriptionOpen, setEventDescriptionOpen] = useState(false);

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
      <section className="relative flex min-h-[82vh] items-center justify-center overflow-hidden bg-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(122,0,25,0.35),transparent_40%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.35),rgba(0,0,0,0.92))]" />
        <div className="absolute inset-0 opacity-[0.03] [background-image:linear-gradient(rgba(255,255,255,0.15)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.15)_1px,transparent_1px)] [background-size:80px_80px]" />

        <Reveal>
          <div className="relative mx-auto max-w-6xl px-6 py-24 text-center">
            <p className="text-xs font-black uppercase tracking-[0.35em] text-[var(--ville-red-bright)]">
              Las Vegas Youth Athletics
            </p>

            <h1 className="mt-6 text-5xl font-black uppercase leading-[0.9] md:text-7xl">
              <span className="block text-white">Build the</span>
              <span className="block text-white">Athlete</span>
              <span className="mt-2 block text-[var(--ville-red-bright)]">
                Build the
              </span>
              <span className="block text-[var(--ville-red-bright)]">
                Standard
              </span>
            </h1>

            <p className="mx-auto mt-7 max-w-2xl text-base leading-7 text-zinc-300 md:text-lg md:leading-8">
              The Ville Athletics is a Las Vegas-based, community-driven youth
              sports organization serving athletes from grades K–12.
            </p>

            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-zinc-400">
              Built to support local families, develop disciplined athletes, and
              create positive opportunities through basketball, soccer, cross
              country, and flag football.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="/programs"
                className="rounded-full bg-[var(--ville-red)] px-7 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-white transition duration-300 hover:bg-[var(--ville-red-bright)] hover:shadow-[0_0_30px_rgba(122,0,25,0.35)]"
              >
                Explore Programs
              </a>

              <a
                href="/events"
                className="rounded-full border border-white/15 px-7 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-white transition duration-300 hover:border-[var(--ville-red)] hover:text-[var(--ville-red-bright)]"
              >
                View Events
              </a>
            </div>
          </div>
        </Reveal>
      </section>

      {/* FEATURED EVENT */}
      {featuredEvent && (
        <Reveal delay={0.1}>
          <section className="mx-auto max-w-6xl px-5 py-16">
            <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-zinc-950 via-zinc-900 to-black p-5 shadow-[0_0_60px_rgba(122,0,25,0.16)] md:p-8">
              <div className="grid gap-8 lg:grid-cols-[1fr_0.95fr] lg:items-center">
                <div className="flex items-center justify-center rounded-[1.5rem] border border-white/10 bg-black p-4 shadow-2xl">
                  {featuredEvent.image_url ? (
                    <img
                      src={featuredEvent.image_url}
                      alt={featuredEvent.title}
                      className="h-auto max-h-[820px] w-full rounded-2xl object-contain"
                    />
                  ) : (
                    <div className="flex h-[380px] w-full items-center justify-center rounded-2xl bg-zinc-950 text-sm font-black uppercase tracking-[0.3em] text-zinc-600">
                      Featured Event
                    </div>
                  )}
                </div>

                <div className="text-center lg:text-left">
                  <div className="flex flex-wrap justify-center gap-2 lg:justify-start">
                    {featuredEvent.sport && (
                      <span className="rounded-full bg-[var(--ville-red-bright)]/20 px-3 py-1 text-[11px] font-black uppercase tracking-[0.15em] text-[var(--ville-red-bright)]">
                        {featuredEvent.sport}
                      </span>
                    )}

                    {featuredEvent.type && (
                      <span className="rounded-full bg-white/5 px-3 py-1 text-[11px] font-black uppercase tracking-[0.15em] text-zinc-300">
                        {featuredEvent.type}
                      </span>
                    )}

                    <span className="rounded-full border border-[var(--ville-red-bright)] px-3 py-1 text-[11px] font-black uppercase tracking-[0.15em] text-[var(--ville-red-bright)]">
                      Featured Event
                    </span>
                  </div>

                  <p className="mt-6 text-xs font-black uppercase tracking-[0.2em] text-[var(--ville-red-bright)]">
                    {featuredEvent.event_date || "Date TBA"}
                    {featuredEvent.event_time
                      ? ` • ${featuredEvent.event_time}`
                      : ""}
                  </p>

                  <h2 className="mt-4 text-4xl font-black uppercase leading-[0.95] text-white md:text-5xl">
                    {featuredEvent.title}
                  </h2>

                  {featuredEvent.location && (
                    <p className="mt-5 text-base font-semibold text-zinc-400">
                      {featuredEvent.location}
                    </p>
                  )}

                  {featuredEvent.description && (
                    <div className="mt-6">
                      <p className="line-clamp-5 text-base leading-7 text-zinc-300">
                        {featuredEvent.description}
                      </p>

                      <button
                        type="button"
                        onClick={() =>
                          setEventDescriptionOpen(!eventDescriptionOpen)
                        }
                        className="mt-4 text-xs font-black uppercase tracking-[0.15em] text-[var(--ville-red-bright)] transition hover:text-white"
                      >
                        {eventDescriptionOpen
                          ? "Show Less"
                          : "Read Full Description"}
                      </button>

                      {eventDescriptionOpen && (
                        <p className="mt-4 text-sm leading-7 text-zinc-400">
                          {featuredEvent.description}
                        </p>
                      )}
                    </div>
                  )}

                  <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
                    {featuredEvent.show_registration_button && (
                      <a
                        href={
                          featuredEvent.registration_type === "custom"
                            ? `/events/${featuredEvent.id}/register`
                            : featuredEvent.link || "#"
                        }
                        className="rounded-full bg-[var(--ville-red)] px-6 py-3 text-xs font-black uppercase tracking-[0.12em] text-white transition hover:bg-[var(--ville-red-bright)]"
                      >
                        {featuredEvent.button_text || "Register"}
                      </a>
                    )}

                    <a
                      href="/events"
                      className="rounded-full border border-white/15 px-6 py-3 text-xs font-black uppercase tracking-[0.12em] text-white transition hover:border-[var(--ville-red)] hover:text-[var(--ville-red-bright)]"
                    >
                      View All Events
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Reveal>
      )}

      {/* PROGRAMS SECTION */}
      <Reveal delay={0.15}>
        <section className="mx-auto flex max-w-6xl flex-col items-center px-5 py-16 text-center">
          <p className="text-xs font-black uppercase tracking-[0.35em] text-[var(--ville-red-bright)]">
            Programs
          </p>

          <h2 className="mt-4 text-3xl font-black uppercase md:text-4xl">
            Train. Compete. Develop.
          </h2>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-zinc-400 md:text-base">
            Programs are built for different age groups so families can quickly
            find the right fit for their athlete.
          </p>

          <div className="mt-10 grid w-full gap-4 md:grid-cols-2 lg:grid-cols-4">
            {programs.map((program) => (
              <div
                key={program.name}
                className="flex flex-col items-center rounded-2xl border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.015))] px-5 py-5 text-center transition duration-300 hover:-translate-y-1 hover:border-[var(--ville-red)] hover:shadow-[0_10px_40px_rgba(122,0,25,0.15)]"
              >
                <p className="text-xs font-bold uppercase tracking-[0.12em] text-[var(--ville-red-bright)]">
                  {program.price}
                </p>

                <h3 className="mt-2 text-xl font-black uppercase">
                  {program.name}
                </h3>

                <p className="mt-2 text-sm font-semibold text-zinc-300">
                  {program.grades}
                </p>

                <a
                  href="/programs"
                  className="mt-5 inline-flex rounded-full border border-white/15 px-4 py-2 text-[11px] font-black uppercase tracking-[0.12em] text-white transition hover:border-[var(--ville-red)] hover:text-[var(--ville-red-bright)]"
                >
                  Learn More
                </a>
              </div>
            ))}
          </div>
        </section>
      </Reveal>
    </main>
  );
}