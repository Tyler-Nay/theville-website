"use client";

import { useState } from "react";
import { supabase } from "../../../lib/supabaseClient";

export default function AdminLoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  async function handleLogin(event: React.FormEvent) {
    event.preventDefault();

    setMessage("Logging in...");

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setMessage(error.message);
      return;
    }

    window.location.href = "/admin";
  }

  return (
    <main className="mx-auto flex min-h-screen max-w-md flex-col justify-center px-6">
      <p className="text-sm font-black uppercase tracking-[0.3em] text-[var(--ville-red-bright)]">
        The Ville
      </p>

      <h1 className="mt-4 text-5xl font-black uppercase">
        Admin Login
      </h1>

      <p className="mt-4 text-zinc-400">
        Sign in to manage events, announcements, gallery content, and website updates.
      </p>

      <form onSubmit={handleLogin} className="mt-8 space-y-4">
        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Email"
          required
          className="w-full rounded-xl border border-white/10 bg-black px-4 py-3 text-white"
        />

        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          placeholder="Password"
          required
          className="w-full rounded-xl border border-white/10 bg-black px-4 py-3 text-white"
        />

        <button
          type="submit"
          className="w-full rounded-full bg-[var(--ville-red)] px-7 py-3 text-sm font-black uppercase text-white transition hover:bg-[var(--ville-red-bright)]"
        >
          Login
        </button>
      </form>

      {message && (
        <p className="mt-6 rounded-xl border border-white/10 bg-zinc-900 p-4 text-zinc-300">
          {message}
        </p>
      )}
    </main>
  );
}