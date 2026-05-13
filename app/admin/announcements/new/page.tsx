"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import AdminGuard from "../../../../components/AdminGuard";

export default function NewAnnouncementPage() {
  const [title, setTitle] = useState("");
  const [postDate, setPostDate] = useState("");
  const [expiresAt, setExpiresAt] = useState("");
  const [category, setCategory] = useState("General");
  const [text, setText] = useState("");
  const [link, setLink] = useState("");
  const [published, setPublished] = useState(true);
  const [message, setMessage] = useState("");

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    setMessage("Saving announcement...");

    const { error } = await supabase.from("announcements").insert({
      title,
      post_date: postDate,
      expires_at: expiresAt,
      category,
      text,
      link,
      published,
    });

    if (error) {
      setMessage("Error: " + error.message);
      return;
    }

    setMessage("Announcement saved successfully.");

    setTitle("");
    setPostDate("");
    setExpiresAt("");
    setCategory("General");
    setText("");
    setLink("");
    setPublished(true);
  }

  return (
    <AdminGuard>
      <main className="mx-auto flex w-full max-w-3xl flex-col items-center px-6 py-20 text-center">
        <p className="text-sm font-black uppercase tracking-[0.3em] text-[var(--ville-red-bright)]">
          Admin
        </p>

        <h1 className="mt-4 text-5xl font-black uppercase">
          Add Announcement
        </h1>

        <form onSubmit={handleSubmit} className="mt-10 w-full space-y-5 text-left">
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Announcement title"
            required
            className="w-full rounded-xl border border-white/10 bg-black px-4 py-3 text-white"
          />

          <input
            value={postDate}
            onChange={(e) => setPostDate(e.target.value)}
            placeholder="Display date, example: May 23, 2026"
            required
            className="w-full rounded-xl border border-white/10 bg-black px-4 py-3 text-white"
          />

          <input
            type="datetime-local"
            value={expiresAt}
            onChange={(e) => setExpiresAt(e.target.value)}
            required
            className="w-full rounded-xl border border-white/10 bg-black px-4 py-3 text-white"
          />

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full rounded-xl border border-white/10 bg-black px-4 py-3 text-white"
          >
            <option>General</option>
            <option>Registration</option>
            <option>Basketball</option>
            <option>Cross Country</option>
            <option>Flag Football</option>
            <option>Tournament</option>
            <option>Schedule</option>
            <option>Community</option>
          </select>

          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Announcement text"
            required
            className="min-h-40 w-full rounded-xl border border-white/10 bg-black px-4 py-3 text-white"
          />

          <input
            value={link}
            onChange={(e) => setLink(e.target.value)}
            placeholder="Optional link"
            className="w-full rounded-xl border border-white/10 bg-black px-4 py-3 text-white"
          />

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
              Save Announcement
            </button>

            <a
              href="/admin/announcements"
              className="rounded-full border border-white/10 px-7 py-3 text-sm font-black uppercase text-white"
            >
              Back
            </a>
          </div>
        </form>

        {message && (
          <p className="mt-6 w-full rounded-xl border border-white/10 bg-zinc-900 p-4 text-left text-zinc-300">
            {message}
          </p>
        )}
      </main>
    </AdminGuard>
  );
}