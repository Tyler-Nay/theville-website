"use client";

import { useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient";

export default function AdminGuard({ children }: { children: React.ReactNode }) {
  const [allowed, setAllowed] = useState(false);
  const [loading, setLoading] = useState(true);
  const [debugMessage, setDebugMessage] = useState("");

  useEffect(() => {
    async function checkAdmin() {
      const { data: sessionData, error: sessionError } =
        await supabase.auth.getSession();

      if (sessionError) {
        setDebugMessage("Session error: " + sessionError.message);
        setLoading(false);
        return;
      }

      const user = sessionData.session?.user;

      if (!user?.email) {
        setDebugMessage("No logged-in user found.");
        setLoading(false);
        return;
      }

      const { data, error } = await supabase
        .from("admin_users")
        .select("email, role")
        .eq("email", user.email)
        .maybeSingle();

      if (error) {
        setDebugMessage("Admin lookup error: " + error.message);
        setLoading(false);
        return;
      }

      if (!data) {
        setDebugMessage(
          "User is logged in, but not found in admin_users: " + user.email
        );
        setLoading(false);
        return;
      }

      setAllowed(true);
      setLoading(false);
    }

    checkAdmin();
  }, []);

  if (loading) {
    return (
      <main className="mx-auto max-w-5xl px-6 py-20">
        <p className="text-zinc-400">Checking admin access...</p>
      </main>
    );
  }

  if (debugMessage) {
    return (
      <main className="mx-auto max-w-5xl px-6 py-20">
        <h1 className="text-4xl font-black uppercase text-white">
          Admin Access Error
        </h1>

        <p className="mt-6 rounded-xl border border-red-500 bg-zinc-900 p-4 text-red-300">
          {debugMessage}
        </p>

        <a
          href="/admin/login"
          className="mt-6 inline-flex rounded-full bg-[var(--ville-red)] px-6 py-3 text-sm font-black uppercase text-white"
        >
          Back to Login
        </a>
      </main>
    );
  }

  if (!allowed) {
    return null;
  }

  return <>{children}</>;
}