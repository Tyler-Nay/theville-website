"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import Reveal from "@/components/Reveal";

type Sponsor = {
  id: number;
  name: string;
  tier: string;
  website_url: string | null;
  logo_url: string | null;
  description: string | null;
};

const sponsorshipAreas = [
  {
    title: "Athlete Scholarships",
    description:
      "Help reduce financial barriers and create opportunities for local athletes and families.",
  },
  {
    title: "Uniforms & Equipment",
    description:
      "Support jerseys, training gear, basketballs, football equipment, and program essentials.",
  },
  {
    title: "Tournament & Travel",
    description:
      "Assist teams with tournament entry fees, transportation, lodging, and travel expenses.",
  },
  {
    title: "Community Growth",
    description:
      "Invest directly into youth development, mentorship, and long-term community impact.",
  },
];

const sponsorTiers = [
  "Bronze",
  "Silver",
  "Gold",
  "Platinum",
  "Community Partner",
  "Title Sponsor",
];

export default function SponsorsPage() {
  const [sponsors, setSponsors] = useState<Sponsor[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchSponsors() {
      const { data, error } = await supabase
        .from("sponsors")
        .select("*")
        .eq("published", true)
        .order("id", { ascending: false });

      if (error) {
        setError(error.message);
        return;
      }

      setSponsors(data || []);
    }

    fetchSponsors();
  }, []);

  return (
    <main className="mx-auto max-w-6xl px-5 py-16">
      <Reveal>
        <section className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-black uppercase tracking-[0.35em] text-[var(--ville-red-bright)]">
            Sponsors
          </p>

          <h1 className="mt-4 text-4xl font-black uppercase leading-[0.95] md:text-6xl">
            Support The Ville
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-zinc-300">
            The Ville Athletics is committed to creating opportunities for
            youth athletes across Las Vegas through sports, mentorship,
            development, leadership, and community support.
          </p>
        </section>
      </Reveal>

      {error && (
        <div className="mt-10 rounded-3xl border border-red-500/20 bg-red-950/20 p-6 text-center">
          <p className="text-sm font-semibold text-red-300">
            Sponsor error: {error}
          </p>
        </div>
      )}

      <Reveal delay={0.06}>
        <section className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {sponsorshipAreas.map((item) => (
            <div
              key={item.title}
              className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.035),rgba(255,255,255,0.015))] p-6 text-left transition duration-300 hover:-translate-y-1 hover:border-[var(--ville-red)] hover:shadow-[0_10px_40px_rgba(122,0,25,0.16)]"
            >
              <h2 className="text-xl font-black uppercase leading-tight">
                {item.title}
              </h2>

              <p className="mt-4 text-sm leading-7 text-zinc-400">
                {item.description}
              </p>
            </div>
          ))}
        </section>
      </Reveal>

      <Reveal delay={0.1}>
        <section className="mt-20">
          <div className="text-center">
            <p className="text-xs font-black uppercase tracking-[0.35em] text-[var(--ville-red-bright)]">
              Sponsorship Tiers
            </p>

            <h2 className="mt-4 text-3xl font-black uppercase md:text-5xl">
              Partner With Us
            </h2>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3 xl:grid-cols-6">
            {sponsorTiers.map((tier) => (
              <div
                key={tier}
                className="rounded-3xl border border-white/10 bg-black/40 px-5 py-6 text-center transition duration-300 hover:-translate-y-1 hover:border-[var(--ville-red)] hover:shadow-[0_10px_35px_rgba(122,0,25,0.15)]"
              >
                <p className="text-[10px] font-black uppercase tracking-[0.25em] text-zinc-500">
                  The Ville
                </p>

                <h3 className="mt-4 text-lg font-black uppercase">
                  {tier}
                </h3>
              </div>
            ))}
          </div>
        </section>
      </Reveal>

      {sponsors.length > 0 && (
        <Reveal delay={0.14}>
          <section className="mt-20">
            <div className="text-center">
              <p className="text-xs font-black uppercase tracking-[0.35em] text-[var(--ville-red-bright)]">
                Current Sponsors
              </p>

              <h2 className="mt-4 text-3xl font-black uppercase md:text-5xl">
                Community Partners
              </h2>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {sponsors.map((sponsor) => (
                <a
                  key={sponsor.id}
                  href={sponsor.website_url || "#"}
                  target={sponsor.website_url ? "_blank" : undefined}
                  rel={sponsor.website_url ? "noopener noreferrer" : undefined}
                  className="group rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.035),rgba(255,255,255,0.015))] p-6 text-left transition duration-300 hover:-translate-y-1 hover:border-[var(--ville-red)] hover:shadow-[0_12px_45px_rgba(122,0,25,0.18)]"
                >
                  {sponsor.logo_url ? (
                    <div className="mb-6 flex h-32 items-center justify-center rounded-2xl bg-white p-5 transition duration-500 group-hover:scale-[1.02]">
                      <img
                        src={sponsor.logo_url}
                        alt={sponsor.name}
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>
                  ) : (
                    <div className="mb-6 flex h-32 items-center justify-center rounded-2xl bg-black text-zinc-500">
                      Logo
                    </div>
                  )}

                  <p className="text-[10px] font-black uppercase tracking-[0.22em] text-[var(--ville-red-bright)]">
                    {sponsor.tier || "Sponsor"}
                  </p>

                  <h3 className="mt-3 text-2xl font-black uppercase">
                    {sponsor.name}
                  </h3>

                  {sponsor.description && (
                    <p className="mt-4 text-sm leading-7 text-zinc-400">
                      {sponsor.description}
                    </p>
                  )}
                </a>
              ))}
            </div>
          </section>
        </Reveal>
      )}

      <Reveal delay={0.18}>
        <section className="mt-20 overflow-hidden rounded-[2rem] border border-white/10 bg-black p-8 md:p-12">
          <div className="relative">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(122,0,25,0.18),transparent_45%)]" />

            <div className="relative text-center">
              <p className="text-xs font-black uppercase tracking-[0.35em] text-[var(--ville-red-bright)]">
                Community Partnerships
              </p>

              <h2 className="mt-4 text-4xl font-black uppercase md:text-5xl">
                Become A Sponsor
              </h2>

              <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-zinc-300">
                Partner with The Ville Athletics and directly support youth
                development, mentorship, competition, and opportunities for
                athletes throughout Las Vegas.
              </p>

              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <a
                  href="/contact"
                  className="rounded-full bg-[var(--ville-red)] px-7 py-3 text-sm font-black uppercase tracking-[0.14em] text-white transition duration-300 hover:bg-[var(--ville-red-bright)] hover:shadow-[0_0_30px_rgba(122,0,25,0.35)]"
                >
                  Contact Us
                </a>

                <a
                  href="mailto:lvtheville@gmail.com"
                  className="rounded-full border border-white/10 px-7 py-3 text-sm font-black uppercase tracking-[0.14em] text-white transition duration-300 hover:border-[var(--ville-red)] hover:text-[var(--ville-red-bright)]"
                >
                  Email The Ville
                </a>
              </div>
            </div>
          </div>
        </section>
      </Reveal>
    </main>
  );
}