"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import AdminGuard from "../../../../components/AdminGuard";

export default function NewEventPage() {
  const [title, setTitle] = useState("");
  const [eventDatetime, setEventDatetime] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [eventTime, setEventTime] = useState("TBA");
  const [location, setLocation] = useState("Las Vegas, NV");
  const [description, setDescription] = useState("");
  const [sport, setSport] = useState("Basketball");
  const [type, setType] = useState("Tournament");

  const [imageLabel, setImageLabel] = useState("");
  const [eventImage, setEventImage] = useState<File | null>(null);

  const [registrationType, setRegistrationType] = useState("external");

  const [link, setLink] = useState("");
  const [paymentUrl, setPaymentUrl] = useState("");

  const [squarePaymentUrl, setSquarePaymentUrl] = useState("");
  const [waiverUrl, setWaiverUrl] = useState("");
  const [mediaReleaseUrl, setMediaReleaseUrl] = useState("");

  const [buttonText, setButtonText] = useState("Register");

  const [featured, setFeatured] = useState(false);
  const [published, setPublished] = useState(true);

  const [message, setMessage] = useState("");

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    setMessage("Saving event...");

    let uploadedImageUrl = "";

    if (eventImage) {
      const fileExt = eventImage.name.split(".").pop();
      const fileName = `${Date.now()}.${fileExt}`;

      const { error: uploadError } = await supabase.storage
        .from("gallery")
        .upload(fileName, eventImage, {
          upsert: true,
        });

      if (uploadError) {
        setMessage("Image upload error: " + uploadError.message);
        return;
      }

      const { data } = supabase.storage
        .from("gallery")
        .getPublicUrl(fileName);

      uploadedImageUrl = data.publicUrl;
    }


    const { error } = await supabase.from("events").insert({
      title,
      event_date: eventDate,
      event_time: eventTime,
      event_datetime: eventDatetime,
      expires_at: eventDatetime,
      location,
      description,
      sport,
      type,
      tags: [sport, type],
      image_label: imageLabel || title,
      image_url: uploadedImageUrl,

      registration_type: registrationType,

      link:
        registrationType === "custom"
          ? `/events`
          : link || paymentUrl || "https://the-ville.gymdesk.com/signup",

      payment_url: paymentUrl,

      square_payment_url: squarePaymentUrl,
      waiver_url: waiverUrl,
      media_release_url: mediaReleaseUrl,

      button_text: buttonText,

      featured,
      published,
    });

    if (error) {
      setMessage("Error: " + error.message);
      return;
    }

    setMessage(
      featured
        ? "Event saved successfully and set as featured."
        : "Event saved successfully."
    );

    setTitle("");
    setEventDatetime("");
    setEventDate("");
    setEventTime("TBA");
    setLocation("Las Vegas, NV");
    setDescription("");
    setSport("Basketball");
    setType("Tournament");

    setImageLabel("");
    setEventImage(null);

    setRegistrationType("external");

    setLink("");
    setPaymentUrl("");

    setSquarePaymentUrl("");
    setWaiverUrl("");
    setMediaReleaseUrl("");

    setButtonText("Register");

    setFeatured(false);
    setPublished(true);
  }

  return (
    <AdminGuard>
      <main className="mx-auto flex w-full max-w-3xl flex-col items-center px-6 py-20 text-center">
        <p className="text-sm font-black uppercase tracking-[0.3em] text-[var(--ville-red-bright)]">
          Admin
        </p>

        <h1 className="mt-4 text-5xl font-black uppercase">
          Add Event
        </h1>

        <form
          onSubmit={handleSubmit}
          className="mt-10 w-full space-y-5 text-left"
        >
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Event title"
            required
            className="w-full rounded-xl border border-white/10 bg-black px-4 py-3 text-white"
          />

          <input
            type="datetime-local"
            value={eventDatetime}
            onChange={(e) => setEventDatetime(e.target.value)}
            required
            className="w-full rounded-xl border border-white/10 bg-black px-4 py-3 text-white"
          />

          <input
            value={eventDate}
            onChange={(e) => setEventDate(e.target.value)}
            placeholder="Display date"
            required
            className="w-full rounded-xl border border-white/10 bg-black px-4 py-3 text-white"
          />

          <input
            value={eventTime}
            onChange={(e) => setEventTime(e.target.value)}
            placeholder="Display time"
            className="w-full rounded-xl border border-white/10 bg-black px-4 py-3 text-white"
          />

          <input
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Location"
            required
            className="w-full rounded-xl border border-white/10 bg-black px-4 py-3 text-white"
          />

          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Event description"
            required
            className="min-h-32 w-full rounded-xl border border-white/10 bg-black px-4 py-3 text-white"
          />

          <select
            value={sport}
            onChange={(e) => setSport(e.target.value)}
            className="w-full rounded-xl border border-white/10 bg-black px-4 py-3 text-white"
          >
            <option>Basketball</option>
            <option>Cross Country</option>
            <option>Flag Football</option>
            <option>Soccer</option>
            <option>Everyone</option>
          </select>

          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="w-full rounded-xl border border-white/10 bg-black px-4 py-3 text-white"
          >
            <option>Tournament</option>
            <option>Training</option>
            <option>Camp</option>
            <option>Tryout</option>
            <option>Community Event</option>
            <option>Fundraiser</option>
          </select>

          <input
            value={imageLabel}
            onChange={(e) => setImageLabel(e.target.value)}
            placeholder="Image label"
            className="w-full rounded-xl border border-white/10 bg-black px-4 py-3 text-white"
          />

          <input
            type="file"
            accept="image/*"
            onChange={(e) => setEventImage(e.target.files?.[0] || null)}
            className="w-full rounded-xl border border-white/10 bg-black px-4 py-3 text-white"
          />

          <select
            value={registrationType}
            onChange={(e) => setRegistrationType(e.target.value)}
            className="w-full rounded-xl border border-white/10 bg-black px-4 py-3 text-white"
          >
            <option value="external">External Registration</option>
            <option value="custom">Custom Website Registration</option>
          </select>

          <input
            value={link}
            onChange={(e) => setLink(e.target.value)}
            placeholder="External registration link"
            className="w-full rounded-xl border border-white/10 bg-black px-4 py-3 text-white"
          />

          <input
            value={paymentUrl}
            onChange={(e) => setPaymentUrl(e.target.value)}
            placeholder="Optional payment URL"
            className="w-full rounded-xl border border-white/10 bg-black px-4 py-3 text-white"
          />

          <input
            value={squarePaymentUrl}
            onChange={(e) => setSquarePaymentUrl(e.target.value)}
            placeholder="Square payment URL"
            className="w-full rounded-xl border border-white/10 bg-black px-4 py-3 text-white"
          />

          <input
            value={waiverUrl}
            onChange={(e) => setWaiverUrl(e.target.value)}
            placeholder="Waiver URL"
            className="w-full rounded-xl border border-white/10 bg-black px-4 py-3 text-white"
          />

          <input
            value={mediaReleaseUrl}
            onChange={(e) => setMediaReleaseUrl(e.target.value)}
            placeholder="Media release URL"
            className="w-full rounded-xl border border-white/10 bg-black px-4 py-3 text-white"
          />

          <input
            value={buttonText}
            onChange={(e) => setButtonText(e.target.value)}
            placeholder="Button text"
            className="w-full rounded-xl border border-white/10 bg-black px-4 py-3 text-white"
          />

          <label className="flex items-center gap-3 text-white">
            <input
              type="checkbox"
              checked={featured}
              onChange={(e) => setFeatured(e.target.checked)}
            />
            Featured event
          </label>

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
              Save Event
            </button>
            

            <a
              href="/admin/events"
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