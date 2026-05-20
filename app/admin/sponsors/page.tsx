"use client";

import { useEffect, useState } from "react";
import AdminGuard from "../../../components/AdminGuard";
import { supabase } from "@/lib/supabaseClient";

type Sponsor = {
  id: number;
  name: string;
  tier: string | null;
  website_url: string | null;
  logo_url: string | null;
  description: string | null;
  published: boolean;
};

export default function AdminSponsorsPage() {
  const [sponsors, setSponsors] = useState<Sponsor[]>([]);
  const [message, setMessage] = useState("");

  async function loadSponsors() {
    const { data, error } = await supabase
      .from("sponsors")
      .select("*")
      .order("id", { ascending: false });

    if (error) {
      setMessage("Load error: " + error.message);
      return;
    }

    setSponsors(data || []);
  }

  useEffect(() => {
    loadSponsors();
  }, []);

  async function togglePublished(sponsor: Sponsor) {
    const { error } = await supabase
      .from("sponsors")
      .update({ published: !sponsor.published })
      .eq("id", sponsor.id);

    if (error) {
      setMessage("Update error: " + error.message);
      return;
    }

    loadSponsors();
  }

  async function deleteSponsor(id: number) {
    const confirmed = confirm("Delete this sponsor?");
    if (!confirmed) return;

    const { error } = await supabase.from("sponsors").delete().eq("id", id);

    if (error) {
      setMessage("Delete error: " + error.message);
      return;
    }

    setMessage("Sponsor deleted.");
    loadSponsors();
  }

  return (
    <AdminGuard>
      <main className="mx-auto flex w-full max-w-6xl flex-col items-center px-6 py-20 text-center">
        <p className="text-sm font-black uppercase tracking-[0.3em] text-[var(--ville-red-bright)]">
          Admin
        </p>

        <h1 className="mt-4 text-5xl font-black uppercase">Sponsors</h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
          Manage sponsor logos, links, tiers, and featured partnerships.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="/admin/sponsors/new"
            className="inline-flex rounded-full bg-[var(--ville-red)] px-6 py-3 text-sm font-black uppercase text-white transition hover:bg-[var(--ville-red-bright)]"
          >
            Add Sponsor
          </a>

          <a
            href="/admin"
            className="inline-flex rounded-full border border-white/10 px-6 py-3 text-sm font-black uppercase text-white transition hover:border-[var(--ville-red)] hover:text-[var(--ville-red-bright)]"
          >
            Back to Dashboard
          </a>
        </div>

        {message && (
          <p className="mt-6 w-full rounded-xl border border-white/10 bg-zinc-900 p-4 text-zinc-300">
            {message}
          </p>
        )}

        <section className="mt-12 grid w-full gap-6 md:grid-cols-2">
          {sponsors.length === 0 && (
            <div className="rounded-3xl border border-white/10 bg-zinc-900 p-8 text-left">
              <p className="text-zinc-400">No sponsors added yet.</p>
            </div>
          )}

          {sponsors.map((sponsor) => (
            <div
              key={sponsor.id}
              className="rounded-3xl border border-white/10 bg-zinc-900 p-6 text-left"
            >
              {sponsor.logo_url && (
                <img
                  src={sponsor.logo_url}
                  alt={sponsor.name}
                  className="mb-5 h-32 w-full rounded-2xl bg-white object-contain p-4"
                />
              )}

              <p className="text-sm font-black uppercase tracking-[0.25em] text-[var(--ville-red-bright)]">
                {sponsor.tier || "Sponsor"}
              </p>

              <h2 className="mt-3 text-2xl font-black uppercase">
                {sponsor.name}
              </h2>

              {sponsor.description && (
                <p className="mt-3 leading-7 text-zinc-400">
                  {sponsor.description}
                </p>
              )}

              <p className="mt-3 text-sm text-zinc-500">
                {sponsor.published ? "Published" : "Hidden"}
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={`/admin/sponsors/${sponsor.id}/edit`}
                  className="rounded-full border border-white/10 px-5 py-2 text-sm font-black uppercase"
                >
                  Edit
                </a>

                <button
                  onClick={() => togglePublished(sponsor)}
                  className="rounded-full border border-white/10 px-5 py-2 text-sm font-black uppercase"
                >
                  {sponsor.published ? "Hide" : "Publish"}
                </button>

                <button
                  onClick={() => deleteSponsor(sponsor.id)}
                  className="rounded-full bg-red-700 px-5 py-2 text-sm font-black uppercase"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </section>
      </main>
    </AdminGuard>
  );
}