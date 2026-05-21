"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";
import Reveal from "@/components/Reveal";

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
  const [sport, setSport] = useState("");

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

    if (!sport) {
      setMessage("Please select a sport.");
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
      sport,
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

  const inputClass =
    "w-full rounded-2xl border border-white/10 bg-zinc-950 px-4 py-3 text-white outline-none transition placeholder:text-zinc-600 focus:border-[var(--ville-red)]";

  return (
    <main className="mx-auto max-w-5xl px-5 py-16">
      <Reveal>
        <section className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-black uppercase tracking-[0.35em] text-[var(--ville-red-bright)]">
            Event Registration
          </p>

          <h1 className="mt-4 text-4xl font-black uppercase leading-[0.95] md:text-6xl">
            {event ? event.title : "Loading Event..."}
          </h1>

          {event && (
            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-zinc-400">
              {event.event_date} • {event.event_time} • {event.location}
            </p>
          )}
        </section>
      </Reveal>

      <Reveal delay={0.08}>
        <section className="mt-12 grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="h-fit rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.035),rgba(255,255,255,0.015))] p-6">
            <p className="text-xs font-black uppercase tracking-[0.3em] text-[var(--ville-red-bright)]">
              Before You Submit
            </p>

            <h2 className="mt-4 text-3xl font-black uppercase">
              Registration Details
            </h2>

            <p className="mt-5 text-sm leading-7 text-zinc-400">
              Complete the registration form below. After submitting, you will
              be redirected to payment if a payment link is attached to this
              event.
            </p>

            <div className="mt-6 space-y-4 text-sm text-zinc-300">
              <div className="rounded-2xl border border-white/10 bg-black/40 p-4">
                Athlete information
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/40 p-4">
                Guardian contact information
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/40 p-4">
                Waiver and media release confirmation
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/40 p-4">
                Payment status starts as pending
              </div>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-[2rem] border border-white/10 bg-black p-6 shadow-[0_0_60px_rgba(122,0,25,0.12)] md:p-8"
          >
            <p className="text-xs font-black uppercase tracking-[0.3em] text-[var(--ville-red-bright)]">
              Athlete Information
            </p>

            <div className="mt-6 grid gap-5 md:grid-cols-2">
              <input
                value={athleteFirstName}
                onChange={(e) => setAthleteFirstName(e.target.value)}
                placeholder="Athlete first name"
                required
                className={inputClass}
              />

              <input
                value={athleteLastName}
                onChange={(e) => setAthleteLastName(e.target.value)}
                placeholder="Athlete last name"
                required
                className={inputClass}
              />

              <input
                value={athleteGrade}
                onChange={(e) => setAthleteGrade(e.target.value)}
                placeholder="Athlete grade"
                className={inputClass}
              />

              <input
                value={athleteAge}
                onChange={(e) => setAthleteAge(e.target.value)}
                placeholder="Athlete age"
                className={inputClass}
              />

              <select
                value={sport}
                onChange={(e) => setSport(e.target.value)}
                required
                className={`${inputClass} md:col-span-2`}
              >
                <option value="">Select sport</option>
                <option value="Basketball">Basketball</option>
                <option value="Soccer">Soccer</option>
                <option value="Flag Football">Flag Football</option>
                <option value="Cross Country">Cross Country</option>
                <option value="Cheerleading">Cheerleading</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="mt-8">
              <p className="text-xs font-black uppercase tracking-[0.3em] text-[var(--ville-red-bright)]">
                Guardian Information
              </p>

              <div className="mt-6 space-y-5">
                <input
                  value={guardianName}
                  onChange={(e) => setGuardianName(e.target.value)}
                  placeholder="Guardian full name"
                  required
                  className={inputClass}
                />

                <input
                  type="email"
                  value={guardianEmail}
                  onChange={(e) => setGuardianEmail(e.target.value)}
                  placeholder="Guardian email"
                  required
                  className={inputClass}
                />

                <input
                  value={guardianPhone}
                  onChange={(e) => setGuardianPhone(e.target.value)}
                  placeholder="Guardian phone"
                  required
                  className={inputClass}
                />
              </div>
            </div>

            <div className="mt-8">
              <p className="text-xs font-black uppercase tracking-[0.3em] text-[var(--ville-red-bright)]">
                Emergency & Medical
              </p>

              <div className="mt-6 grid gap-5 md:grid-cols-2">
                <input
                  value={emergencyContact}
                  onChange={(e) => setEmergencyContact(e.target.value)}
                  placeholder="Emergency contact"
                  className={inputClass}
                />

                <input
                  value={emergencyPhone}
                  onChange={(e) => setEmergencyPhone(e.target.value)}
                  placeholder="Emergency phone"
                  className={inputClass}
                />
              </div>

              <textarea
                value={medicalNotes}
                onChange={(e) => setMedicalNotes(e.target.value)}
                placeholder="Medical notes, allergies, injuries, or anything coaches should know"
                className={`${inputClass} mt-5 min-h-32`}
              />
            </div>

            <div className="mt-8 space-y-4 rounded-2xl border border-white/10 bg-zinc-950 p-5">
              <label className="flex gap-3 text-sm leading-7 text-zinc-300">
                <input
                  type="checkbox"
                  checked={waiverAgreed}
                  onChange={(e) => setWaiverAgreed(e.target.checked)}
                  className="mt-1 h-4 w-4 accent-[var(--ville-red)]"
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

              <label className="flex gap-3 text-sm leading-7 text-zinc-300">
                <input
                  type="checkbox"
                  checked={mediaReleaseAgreed}
                  onChange={(e) => setMediaReleaseAgreed(e.target.checked)}
                  className="mt-1 h-4 w-4 accent-[var(--ville-red)]"
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
              className="mt-6 w-full rounded-full bg-[var(--ville-red)] px-8 py-4 text-sm font-black uppercase tracking-[0.14em] text-white transition duration-300 hover:bg-[var(--ville-red-bright)] hover:shadow-[0_0_30px_rgba(122,0,25,0.35)]"
            >
              Submit Registration & Continue To Payment
            </button>

            {message && (
              <p className="mt-6 rounded-2xl border border-white/10 bg-zinc-900 p-4 text-sm text-zinc-300">
                {message}
              </p>
            )}
          </form>
        </section>
      </Reveal>
    </main>
  );
}