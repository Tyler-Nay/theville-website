"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

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
    title: "Tournament & Travel Costs",
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
  {
    tier: "Community Partner",
    accent: "text-zinc-300",
    border: "border-white/10",
  },
  {
    tier: "Program Partner",
    accent: "text-[var(--ville-red-bright)]",
    border: "border-[var(--ville-red)]",
  },
  {
    tier: "Premier Partner",
    accent: "text-white",
    border: "border-white/20",
  },
];

export default function SponsorsPage() {
  const [sponsors, setSponsors] = useState<Sponsor[]>([]);

  useEffect(() => {
    async function fetchSponsors() {
      const { data } = await supabase
        .from("sponsors")
        .select("*")
        .eq("published", true)
        .order("created_at", { ascending: false });

      if (data) {
        setSponsors(data);
      }
    }

    fetchSponsors();
  }, []);

  return (
    <main className="mx-auto flex w-full max-w-7xl flex-col items-center px-6 py-20 text-center">
      <section className="max-w-4xl">
        <p className="text-sm font-black uppercase tracking-[0.3em] text-[var(--ville-red-bright)]">
          Sponsors
        </p>

        <h1 className="mt-4 text-5xl font-black uppercase leading-[0.95] md:text-7xl">
          Support The Ville
        </h1>

        <p className="mt-6 text-lg leading-8 text-zinc-300">
          The Ville Athletics is committed to creating opportunities for youth
          athletes across Las Vegas through sports, mentorship, development, and
          community support.
        </p>
      </section>

      <section className="mt-16 grid w-full gap-6 md:grid-cols-2 xl:grid-cols-4">
        {sponsorshipAreas.map((item) => (
          <div
            key={item.title}
            className="rounded-3xl border border-white/10 bg-zinc-900 p-6 text-left"
          >
            <h2 className="text-2xl font-black uppercase">{item.title}</h2>
            <p className="mt-4 leading-7 text-zinc-400">{item.description}</p>
          </div>
        ))}
      </section>

      <section className="mt-20 w-full">
        <p className="text-sm font-black uppercase tracking-[0.3em] text-[var(--ville-red-bright)]">
          Sponsorship Tiers
        </p>

        <h2 className="mt-4 text-4xl font-black uppercase md:text-5xl">
          Partner With Us
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
        {sponsorTiers.map((tier) => (
          <div
            key={tier.tier}
            className={`rounded-3xl border ${tier.border} bg-zinc-900 p-10 text-center transition duration-300 hover:-translate-y-1 hover:shadow-[0_10px_40px_rgba(122,0,25,0.2)]`}
          >
            <p
              className={`text-sm font-black uppercase tracking-[0.3em] ${tier.accent}`}
            >
              The Ville Athletics
            </p>

            <h3 className="mt-5 text-3xl font-black uppercase">
              {tier.tier}
            </h3>
          </div>
        ))}
      </div>
      </section>

      {sponsors.length > 0 && (
        <section className="mt-20 w-full">
          <p className="text-sm font-black uppercase tracking-[0.3em] text-[var(--ville-red-bright)]">
            Current Sponsors
          </p>

          <h2 className="mt-4 text-4xl font-black uppercase md:text-5xl">
            Community Partners
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {sponsors.map((sponsor) => (
              <a
                key={sponsor.id}
                href={sponsor.website_url || "#"}
                target={sponsor.website_url ? "_blank" : undefined}
                rel={sponsor.website_url ? "noopener noreferrer" : undefined}
                className="rounded-3xl border border-white/10 bg-zinc-900 p-8 text-left transition hover:border-[var(--ville-red)]"
              >
                {sponsor.logo_url ? (
                  <img
                    src={sponsor.logo_url}
                    alt={sponsor.name}
                    className="mb-6 max-h-20 w-auto"
                  />
                ) : (
                  <div className="mb-6 flex h-20 items-center justify-center rounded-2xl bg-black text-zinc-500">
                    Logo
                  </div>
                )}

                <p className="text-sm font-black uppercase tracking-[0.2em] text-[var(--ville-red-bright)]">
                  {sponsor.tier}
                </p>

                <h3 className="mt-3 text-2xl font-black uppercase">
                  {sponsor.name}
                </h3>

                {sponsor.description && (
                  <p className="mt-4 leading-7 text-zinc-400">
                    {sponsor.description}
                  </p>
                )}
              </a>
            ))}
          </div>
        </section>
      )}

      <section className="mt-20 w-full rounded-[2rem] border border-white/10 bg-zinc-900 p-10 md:p-14">
        <h2 className="text-4xl font-black uppercase md:text-5xl">
          Become A Sponsor
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-zinc-300">
          Interested in partnering with The Ville Athletics? Contact us to
          discuss sponsorship opportunities and community partnerships.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="/contact"
            className="inline-flex rounded-full bg-[var(--ville-red)] px-8 py-4 text-sm font-black uppercase text-white"
          >
            Contact Us
          </a>

          <a
            href="mailto:lvtheville@gmail.com"
            className="inline-flex rounded-full border border-white/10 px-8 py-4 text-sm font-black uppercase text-white"
          >
            Email The Ville
          </a>
        </div>
      </section>
    </main>
  );
}