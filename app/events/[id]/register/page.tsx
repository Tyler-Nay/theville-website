"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";

type Event = {
  id: number;
  title: string;
  event_date: string;
  event_time: string;
  location: string;
  square_payment_url: string | null;
  waiver_url: string | null;
  media_release_url: string | null;
};

export default function EventRegisterPage() {
  const params = useParams();
  const eventId = Number(params.id);

  const [event, setEvent] = useState<Event | null>(null);
  const [message, setMessage] = useState("");

  const [athleteFirstName, setAthleteFirstName] = useState("");
  const [athleteLastName, setAthleteLastName] = useState("");
  const [athleteGrade, setAthleteGrade] = useState("");
  const [athleteAge, setAthleteAge] = useState("");
  const [guardianName, setGuardianName] = useState("");
  const [guardianEmail, setGuardianEmail] = useState("");
  const [guardianPhone, setGuardianPhone] = useState("");
  const [emergencyContact, setEmergencyContact] = useState("");
  const [emergencyPhone, setEmergencyPhone] = useState("");
  const [medicalNotes, setMedicalNotes] = useState("");
  const [waiverAgreed, setWaiverAgreed] = useState(false);
  const [mediaReleaseAgreed, setMediaReleaseAgreed] = useState(false);

  useEffect(() => {
    async function getEvent() {
      const { data, error } = await supabase
        .from("events")
        .select("*")
        .eq("id", eventId)
        .eq("published", true)
        .maybeSingle();

      if (error || !data) {
        setMessage("Event could not be found.");
        return;
      }

      setEvent(data);
    }

    if (eventId) {
      getEvent();
    }
  }, [eventId]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!event) {
      setMessage("Event could not be found.");
      return;
    }

    if (!waiverAgreed || !mediaReleaseAgreed) {
      setMessage("Please agree to the waiver and media release before continuing.");
      return;
    }

    setMessage("Saving registration...");

    const { error } = await supabase.from("event_registrations").insert({
      event_id: event.id,
      athlete_first_name: athleteFirstName,
      athlete_last_name: athleteLastName,
      athlete_grade: athleteGrade,
      athlete_age: athleteAge,
      guardian_name: guardianName,
      guardian_email: guardianEmail,
      guardian_phone: guardianPhone,
      emergency_contact: emergencyContact,
      emergency_phone: emergencyPhone,
      medical_notes: medicalNotes,
      waiver_agreed: waiverAgreed,
      media_release_agreed: mediaReleaseAgreed,
      payment_status: "pending",
      square_payment_url: event.square_payment_url,
    });

    if (error) {
      setMessage("Registration error: " + error.message);
      return;
    }

    if (event.square_payment_url) {
      window.location.href = event.square_payment_url;
      return;
    }

    setMessage("Registration saved. Payment link is not available yet.");
  }

  return (
    <main className="mx-auto max-w-3xl px-6 py-20">
      <p className="text-sm font-black uppercase tracking-[0.3em] text-[var(--ville-red-bright)]">
        Event Registration
      </p>

      <h1 className="mt-4 text-5xl font-black uppercase">
        {event ? event.title : "Loading Event..."}
      </h1>

      {event && (
        <p className="mt-4 text-zinc-400">
          {event.event_date} • {event.event_time} • {event.location}
        </p>
      )}

      <form onSubmit={handleSubmit} className="mt-10 space-y-5">
        <div className="grid gap-5 md:grid-cols-2">
          <input
            value={athleteFirstName}
            onChange={(e) => setAthleteFirstName(e.target.value)}
            placeholder="Athlete first name"
            required
            className="rounded-xl border border-white/10 bg-black px-4 py-3 text-white"
          />

          <input
            value={athleteLastName}
            onChange={(e) => setAthleteLastName(e.target.value)}
            placeholder="Athlete last name"
            required
            className="rounded-xl border border-white/10 bg-black px-4 py-3 text-white"
          />

          <input
            value={athleteGrade}
            onChange={(e) => setAthleteGrade(e.target.value)}
            placeholder="Athlete grade"
            className="rounded-xl border border-white/10 bg-black px-4 py-3 text-white"
          />

          <input
            value={athleteAge}
            onChange={(e) => setAthleteAge(e.target.value)}
            placeholder="Athlete age"
            className="rounded-xl border border-white/10 bg-black px-4 py-3 text-white"
          />
        </div>

        <input
          value={guardianName}
          onChange={(e) => setGuardianName(e.target.value)}
          placeholder="Guardian full name"
          required
          className="w-full rounded-xl border border-white/10 bg-black px-4 py-3 text-white"
        />

        <input
          type="email"
          value={guardianEmail}
          onChange={(e) => setGuardianEmail(e.target.value)}
          placeholder="Guardian email"
          required
          className="w-full rounded-xl border border-white/10 bg-black px-4 py-3 text-white"
        />

        <input
          value={guardianPhone}
          onChange={(e) => setGuardianPhone(e.target.value)}
          placeholder="Guardian phone"
          required
          className="w-full rounded-xl border border-white/10 bg-black px-4 py-3 text-white"
        />

        <div className="grid gap-5 md:grid-cols-2">
          <input
            value={emergencyContact}
            onChange={(e) => setEmergencyContact(e.target.value)}
            placeholder="Emergency contact"
            className="rounded-xl border border-white/10 bg-black px-4 py-3 text-white"
          />

          <input
            value={emergencyPhone}
            onChange={(e) => setEmergencyPhone(e.target.value)}
            placeholder="Emergency phone"
            className="rounded-xl border border-white/10 bg-black px-4 py-3 text-white"
          />
        </div>

        <textarea
          value={medicalNotes}
          onChange={(e) => setMedicalNotes(e.target.value)}
          placeholder="Medical notes, allergies, injuries, or anything coaches should know"
          className="min-h-32 w-full rounded-xl border border-white/10 bg-black px-4 py-3 text-white"
        />

        <div className="space-y-4 rounded-2xl border border-white/10 bg-zinc-900 p-5">
          <label className="flex gap-3 text-zinc-300">
            <input
              type="checkbox"
              checked={waiverAgreed}
              onChange={(e) => setWaiverAgreed(e.target.checked)}
              className="mt-1"
            />

            <span>
              I agree to the event waiver.
              {event?.waiver_url && (
                <a
                  href={event.waiver_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-2 text-[var(--ville-red-bright)] underline"
                >
                  View waiver
                </a>
              )}
            </span>
          </label>

          <label className="flex gap-3 text-zinc-300">
            <input
              type="checkbox"
              checked={mediaReleaseAgreed}
              onChange={(e) => setMediaReleaseAgreed(e.target.checked)}
              className="mt-1"
            />

            <span>
              I agree to the media release.
              {event?.media_release_url && (
                <a
                  href={event.media_release_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-2 text-[var(--ville-red-bright)] underline"
                >
                  View media release
                </a>
              )}
            </span>
          </label>
        </div>

        <button
          type="submit"
          className="w-full rounded-full bg-[var(--ville-red)] px-8 py-4 text-sm font-black uppercase text-white transition hover:bg-[var(--ville-red-bright)]"
        >
          Submit Registration & Continue To Payment
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