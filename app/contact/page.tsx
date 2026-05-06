"use client";

import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    setLoading(true);
    setSuccess("");

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    const data = await res.json();

    setLoading(false);

    if (data.success) {
      setSuccess("Message sent successfully.");

      setForm({
        name: "",
        email: "",
        message: "",
      });
    } else {
      setSuccess("Something went wrong.");
    }
  }

  return (
    <main className="mx-auto max-w-4xl px-6 py-20">
      <section className="text-center">
        <p className="text-sm font-black uppercase tracking-[0.3em] text-[var(--ville-red-bright)]">
          Contact
        </p>

        <h1 className="mt-4 text-5xl font-black uppercase md:text-7xl">
          Get in touch
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
          Have questions about programs, registration, partnerships, or events?
          Send us a message and we’ll get back to you as soon as possible.
        </p>
      </section>

      {/* CONTACT FORM */}
      <section className="mt-12">
        <form
          onSubmit={handleSubmit}
          className="mx-auto max-w-3xl rounded-[2rem] border border-white/10 bg-zinc-900 p-8 md:p-10"
        >
          <p className="text-sm font-black uppercase tracking-[0.3em] text-[var(--ville-red-bright)]">
            Contact Form
          </p>

          <div className="mt-6 space-y-5">
            <input
              type="text"
              placeholder="Name"
              required
              value={form.name}
              onChange={(e) =>
                setForm({ ...form, name: e.target.value })
              }
              className="w-full rounded-2xl border border-white/10 bg-black px-4 py-3 text-white outline-none transition focus:border-[var(--ville-red)]"
            />

            <input
              type="email"
              placeholder="Email"
              required
              value={form.email}
              onChange={(e) =>
                setForm({ ...form, email: e.target.value })
              }
              className="w-full rounded-2xl border border-white/10 bg-black px-4 py-3 text-white outline-none transition focus:border-[var(--ville-red)]"
            />

            <textarea
              placeholder="Message"
              required
              rows={6}
              value={form.message}
              onChange={(e) =>
                setForm({ ...form, message: e.target.value })
              }
              className="w-full rounded-2xl border border-white/10 bg-black px-4 py-3 text-white outline-none transition focus:border-[var(--ville-red)]"
            />

            <button
              type="submit"
              disabled={loading}
              className="rounded-full bg-[var(--ville-red)] px-6 py-3 font-black uppercase text-white transition hover:bg-[var(--ville-red-bright)]"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

            {success && (
              <p className="text-sm text-zinc-400">
                {success}
              </p>
            )}
          </div>
        </form>
      </section>
    </main>
  );
}