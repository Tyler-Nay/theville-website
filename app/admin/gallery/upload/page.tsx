"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import AdminGuard from "../../../../components/AdminGuard";

export default function UploadGalleryPage() {
  const [file, setFile] = useState<File | null>(null);
  const [caption, setCaption] = useState("");
  const [sport, setSport] = useState("General");
  const [category, setCategory] = useState("Gallery");
  const [published, setPublished] = useState(true);
  const [message, setMessage] = useState("");

  async function handleUpload(event: React.FormEvent) {
    event.preventDefault();

    if (!file) {
      setMessage("Please select an image first.");
      return;
    }

    setMessage("Uploading image...");

    const fileExt = file.name.split(".").pop();
    const fileName = `${Date.now()}.${fileExt}`;
    const filePath = `gallery/${fileName}`;

    const { error: uploadError } = await supabase.storage
      .from("gallery")
      .upload(filePath, file);

    if (uploadError) {
      setMessage("Upload error: " + uploadError.message);
      return;
    }

    const { data } = supabase.storage
      .from("gallery")
      .getPublicUrl(filePath);

    const imageUrl = data.publicUrl;

    const { error: insertError } = await supabase.from("gallery_images").insert({
      image_url: imageUrl,
      caption,
      sport,
      category,
      published,
    });

    if (insertError) {
      setMessage("Database error: " + insertError.message);
      return;
    }

    setMessage("Image uploaded successfully.");
    setFile(null);
    setCaption("");
    setSport("General");
    setCategory("Gallery");
    setPublished(true);
  }

  return (
    <AdminGuard>
      <main className="mx-auto w-full max-w-7xl px-6 py-20">
        <p className="text-sm font-black uppercase tracking-[0.3em] text-[var(--ville-red-bright)]">
          Admin
        </p>

        <h1 className="mt-4 text-5xl font-black uppercase">
          Upload Gallery Photo
        </h1>

        <form onSubmit={handleUpload} className="mt-10 space-y-5">
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setFile(e.target.files?.[0] || null)}
            required
            className="w-full rounded-xl border border-white/10 bg-black px-4 py-3 text-white"
          />

          <input
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
            placeholder="Caption"
            className="w-full rounded-xl border border-white/10 bg-black px-4 py-3 text-white"
          />

          <select
            value={sport}
            onChange={(e) => setSport(e.target.value)}
            className="w-full rounded-xl border border-white/10 bg-black px-4 py-3 text-white"
          >
            <option>General</option>
            <option>Basketball</option>
            <option>Cross Country</option>
            <option>Flag Football</option>
            <option>Soccer</option>
            <option>Community</option>
          </select>

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full rounded-xl border border-white/10 bg-black px-4 py-3 text-white"
          >
            <option>Gallery</option>
            <option>Practice</option>
            <option>Game</option>
            <option>Tournament</option>
            <option>Training</option>
            <option>Community Event</option>
          </select>

          <label className="flex items-center gap-3 text-white">
            <input
              type="checkbox"
              checked={published}
              onChange={(e) => setPublished(e.target.checked)}
            />
            Published
          </label>

          <div className="flex flex-wrap gap-4">
            <button
              type="submit"
              className="rounded-full bg-[var(--ville-red)] px-7 py-3 text-sm font-black uppercase text-white"
            >
              Upload Photo
            </button>

            <a
              href="/admin/gallery"
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