"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";
import AdminGuard from "../../../../../components/AdminGuard";

export default function EditSponsorPage() {
  const params = useParams();
  const sponsorId = params.id as string;

  const [name, setName] = useState("");
  const [tier, setTier] = useState("Bronze");
  const [websiteUrl, setWebsiteUrl] = useState("");
  const [logoUrl, setLogoUrl] = useState("");
  const [description, setDescription] = useState("");
  const [published, setPublished] = useState(true);
  const [logoFile, setLogoFile] = useState<File | null>(null);
  const [message, setMessage] = useState("");

  useEffect(() => {
    async function loadSponsor() {
      const { data, error } = await supabase
        .from("sponsors")
        .select("*")
        .eq("id", sponsorId)
        .single();

      if (error) {
        setMessage("Load error: " + error.message);
        return;
      }

      setName(data.name || "");
      setTier(data.tier || "Bronze");
      setWebsiteUrl(data.website_url || "");
      setLogoUrl(data.logo_url || "");
      setDescription(data.description || "");
      setPublished(data.published);
    }

    if (sponsorId) {
      loadSponsor();
    }
  }, [sponsorId]);

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    setMessage("Updating sponsor...");

    let finalLogoUrl = logoUrl;

    if (logoFile) {
      const fileExt = logoFile.name.split(".").pop();
      const fileName = `${Date.now()}.${fileExt}`;
      const filePath = `logos/${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from("sponsors")
        .upload(filePath, logoFile);

      if (uploadError) {
        setMessage("Logo upload error: " + uploadError.message);
        return;
      }

      const { data } = supabase.storage
        .from("sponsors")
        .getPublicUrl(filePath);

      finalLogoUrl = data.publicUrl;
    }

    const { error } = await supabase
      .from("sponsors")
      .update({
        name,
        tier,
        website_url: websiteUrl,
        logo_url: finalLogoUrl,
        description,
        published,
      })
      .eq("id", sponsorId);

    if (error) {
      setMessage("Update error: " + error.message);
      return;
    }

    setLogoUrl(finalLogoUrl);
    setLogoFile(null);
    setMessage("Sponsor updated successfully.");
  }

  return (
    <AdminGuard>
      <main className="mx-auto w-full max-w-7xl px-6 py-20">
        <p className="text-sm font-black uppercase tracking-[0.3em] text-[var(--ville-red-bright)]">
          Admin
        </p>

        <h1 className="mt-4 text-5xl font-black uppercase">
          Edit Sponsor
        </h1>

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

          {logoUrl && (
            <div className="rounded-xl border border-white/10 bg-zinc-900 p-4">
              <p className="mb-3 text-sm font-bold uppercase text-zinc-400">
                Current Logo
              </p>

              <img
                src={logoUrl}
                alt={name}
                className="h-32 w-full rounded-xl bg-white object-contain p-4"
              />
            </div>
          )}

          <input
            type="file"
            accept="image/*"
            onChange={(event) => setLogoFile(event.target.files?.[0] || null)}
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
              Update Sponsor
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