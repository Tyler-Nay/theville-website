"use client";

import { useState } from "react";
import Reveal from "@/components/Reveal";

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
      setSuccess("Something went wrong. Please try again.");
    }
  }

  return (
    <main className="mx-auto max-w-6xl px-5 py-16">
      <Reveal>
        <section className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-black uppercase tracking-[0.35em] text-[var(--ville-red-bright)]">
            Contact
          </p>

          <h1 className="mt-4 text-4xl font-black uppercase md:text-6xl">
            Get in touch
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-zinc-300">
            Have questions about programs, registration, partnerships, or
            events? Send us a message and we’ll get back to you as soon as
            possible.
          </p>
        </section>
      </Reveal>

      <Reveal delay={0.08}>
        <section className="mt-12 grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.035),rgba(255,255,255,0.015))] p-6">
            <p className="text-xs font-black uppercase tracking-[0.3em] text-[var(--ville-red-bright)]">
              The Ville Athletics
            </p>

            <h2 className="mt-4 text-3xl font-black uppercase">
              Las Vegas Youth Sports
            </h2>

            <p className="mt-5 text-sm leading-7 text-zinc-400">
              Reach out for program questions, event registration help,
              sponsorship opportunities, or general information about The Ville.
            </p>

            <div className="mt-6 space-y-4 text-sm text-zinc-300">
              <div>
                <p className="font-black uppercase tracking-[0.14em] text-white">
                  Email
                </p>
                <a
                  href="mailto:lvtheville@gmail.com"
                  className="mt-1 inline-block text-zinc-400 transition hover:text-[var(--ville-red-bright)]"
                >
                  lvtheville@gmail.com
                </a>
              </div>

              <div>
                <p className="font-black uppercase tracking-[0.14em] text-white">
                  Location
                </p>
                <p className="mt-1 text-zinc-400">Las Vegas, Nevada</p>
              </div>

              <div>
                <p className="font-black uppercase tracking-[0.14em] text-white">
                  Programs
                </p>
                <p className="mt-1 text-zinc-400">
                  Basketball • Soccer • Cross Country • Flag Football
                </p>
              </div>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-[2rem] border border-white/10 bg-black p-6 shadow-[0_0_60px_rgba(122,0,25,0.12)] md:p-8"
          >
            <p className="text-xs font-black uppercase tracking-[0.3em] text-[var(--ville-red-bright)]">
              Contact Form
            </p>

            <div className="mt-6 space-y-5">
              <input
                type="text"
                placeholder="Name"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full rounded-2xl border border-white/10 bg-zinc-950 px-4 py-3 text-white outline-none transition placeholder:text-zinc-600 focus:border-[var(--ville-red)]"
              />

              <input
                type="email"
                placeholder="Email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full rounded-2xl border border-white/10 bg-zinc-950 px-4 py-3 text-white outline-none transition placeholder:text-zinc-600 focus:border-[var(--ville-red)]"
              />

              <textarea
                placeholder="Message"
                required
                rows={6}
                value={form.message}
                onChange={(e) =>
                  setForm({ ...form, message: e.target.value })
                }
                className="w-full rounded-2xl border border-white/10 bg-zinc-950 px-4 py-3 text-white outline-none transition placeholder:text-zinc-600 focus:border-[var(--ville-red)]"
              />

              <button
                type="submit"
                disabled={loading}
                className="rounded-full bg-[var(--ville-red)] px-7 py-3 text-sm font-black uppercase tracking-[0.14em] text-white transition duration-300 hover:bg-[var(--ville-red-bright)] hover:shadow-[0_0_30px_rgba(122,0,25,0.35)] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>

              {success && (
                <p className="rounded-2xl border border-white/10 bg-zinc-900 px-4 py-3 text-sm text-zinc-300">
                  {success}
                </p>
              )}
            </div>
          </form>
        </section>
      </Reveal>
    </main>
  );
}