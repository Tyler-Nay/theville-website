"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import AdminGuard from "../../../../components/AdminGuard";

export default function NewSponsorPage() {
  const [name, setName] = useState("");
  const [tier, setTier] = useState("Bronze");
  const [websiteUrl, setWebsiteUrl] = useState("");
  const [logoUrl, setLogoUrl] = useState("");
  const [description, setDescription] = useState("");
  const [published, setPublished] = useState(true);
  const [message, setMessage] = useState("");

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    setMessage("Saving sponsor...");

    const { error } = await supabase.from("sponsors").insert({
      name: name,
      tier: tier,
      website_url: websiteUrl,
      logo_url: logoUrl,
      description: description,
      published: published,
    });

    if (error) {
      setMessage("Error: " + error.message);
      return;
    }

    setMessage("Sponsor saved successfully.");

    setName("");
    setTier("Bronze");
    setWebsiteUrl("");
    setLogoUrl("");
    setDescription("");
    setPublished(true);
  }

  return (
    <AdminGuard>
      <main className="mx-auto w-full max-w-7xl px-6 py-20">
        <p className="text-sm font-black uppercase tracking-[0.3em] text-[var(--ville-red-bright)]">
          Admin
        </p>

        <h1 className="mt-4 text-5xl font-black uppercase">
          Add Sponsor
        </h1>

        <p className="mt-6 text-zinc-400">
          Add sponsor information for the website. Logo uploads can be added
          later; for now, paste a logo URL if available.
        </p>

        <form onSubmit={handleSubmit} className="mt-10 space-y-5">
          <input
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Sponsor name"
            required
            className="w-full rounded-xl border border-white/10 bg-black px-4 py-3 text-white"
          />

          <select
            value={tier}
            onChange={(event) => setTier(event.target.value)}
            className="w-full rounded-xl border border-white/10 bg-black px-4 py-3 text-white"
          >
            <option>Bronze</option>
            <option>Silver</option>
            <option>Gold</option>
            <option>Platinum</option>
            <option>Community Partner</option>
            <option>Title Sponsor</option>
          </select>

          <input
            value={websiteUrl}
            onChange={(event) => setWebsiteUrl(event.target.value)}
            placeholder="Sponsor website URL"
            className="w-full rounded-xl border border-white/10 bg-black px-4 py-3 text-white"
          />

          <input
            value={logoUrl}
            onChange={(event) => setLogoUrl(event.target.value)}
            placeholder="Logo image URL"
            className="w-full rounded-xl border border-white/10 bg-black px-4 py-3 text-white"
          />

          <textarea
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            placeholder="Sponsor description"
            className="min-h-32 w-full rounded-xl border border-white/10 bg-black px-4 py-3 text-white"
          />

          <label className="flex items-center gap-3 text-white">
            <input
              type="checkbox"
              checked={published}
              onChange={(event) => setPublished(event.target.checked)}
            />
            Published
          </label>

          <div className="flex flex-wrap gap-4">
            <button
              type="submit"
              className="rounded-full bg-[var(--ville-red)] px-7 py-3 text-sm font-black uppercase text-white"
            >
              Save Sponsor
            </button>

            <a
              href="/admin/sponsors"
              className="rounded-full border border-white/10 px-7 py-3 text-sm font-black uppercase text-white"
            >
              Back
            </a>
          </div>
        </form>

        {message && (
          <p className="mt-6 rounded-xl border border-white/10 bg-zinc-900 p-4 text-zinc-300">
            {message}
          </p>
        )}
      </main>
    </AdminGuard>
  );
}