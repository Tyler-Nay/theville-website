"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";
import AdminGuard from "@/components/AdminGuard";

export default function EditEventPage() {
  const params = useParams();
  const eventId = Number(params.id);

  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");

  const [title, setTitle] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [eventTime, setEventTime] = useState("");
  const [eventDatetime, setEventDatetime] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");

  const [sport, setSport] = useState("Basketball");
  const [type, setType] = useState("Tournament");

  const [imageLabel, setImageLabel] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [eventImage, setEventImage] = useState<File | null>(null);

  const [showRegistrationButton, setShowRegistrationButton] = useState(true);
  const [registrationType, setRegistrationType] = useState("external");

  const [link, setLink] = useState("");
  const [paymentUrl, setPaymentUrl] = useState("");

  const [squarePaymentUrl, setSquarePaymentUrl] = useState("");
  const [waiverUrl, setWaiverUrl] = useState("");
  const [mediaReleaseUrl, setMediaReleaseUrl] = useState("");

  const [buttonText, setButtonText] = useState("Register");

  const [featured, setFeatured] = useState(false);
  const [published, setPublished] = useState(true);

  useEffect(() => {
    async function getEvent() {
      const { data, error } = await supabase
        .from("events")
        .select("*")
        .eq("id", eventId)
        .maybeSingle();

      if (error || !data) {
        setMessage("Failed to load event.");
        setLoading(false);
        return;
      }

      setTitle(data.title || "");
      setEventDate(data.event_date || "");
      setEventTime(data.event_time || "");
      setEventDatetime(data.event_datetime || "");
      setLocation(data.location || "");
      setDescription(data.description || "");

      setSport(data.sport || "Basketball");
      setType(data.type || "Tournament");

      setImageLabel(data.image_label || "");
      setImageUrl(data.image_url || "");

      setShowRegistrationButton(data.show_registration_button ?? true);
      setRegistrationType(data.registration_type || "external");

      setLink(data.link || "");
      setPaymentUrl(data.payment_url || "");

      setSquarePaymentUrl(data.square_payment_url || "");
      setWaiverUrl(data.waiver_url || "");
      setMediaReleaseUrl(data.media_release_url || "");

      setButtonText(data.button_text || "Register");

      setFeatured(data.featured || false);
      setPublished(data.published ?? true);

      setLoading(false);
    }

    if (eventId) {
      getEvent();
    }
  }, [eventId]);

  async function handleSave(e: React.FormEvent) {
    e.preventDefault();

    setMessage("Saving changes...");

    let finalImageUrl = imageUrl;

    if (eventImage) {
      const fileExt = eventImage.name.split(".").pop();
      const fileName = `events/${Date.now()}.${fileExt}`;

      const { error: uploadError } = await supabase.storage
        .from("gallery")
        .upload(fileName, eventImage, {
          upsert: true,
        });

      if (uploadError) {
        setMessage("Image upload failed: " + uploadError.message);
        return;
      }

      const { data } = supabase.storage.from("gallery").getPublicUrl(fileName);

      finalImageUrl = data.publicUrl;
    }

    const { error } = await supabase
      .from("events")
      .update({
        title,
        event_date: eventDate,
        event_time: eventTime,
        event_datetime: eventDatetime,
        expires_at: eventDatetime,

        location,
        description,

        sport,
        type,

        image_label: imageLabel,
        image_url: finalImageUrl,

        show_registration_button: showRegistrationButton,
        registration_type: registrationType,

        link: showRegistrationButton && registrationType === "external" ? link : "",
        payment_url: paymentUrl,

        square_payment_url: squarePaymentUrl,
        waiver_url: waiverUrl,
        media_release_url: mediaReleaseUrl,

        button_text: buttonText || "Register",

        featured,
        published,
      })
      .eq("id", eventId);

    if (error) {
      setMessage("Error: " + error.message);
      return;
    }

    setImageUrl(finalImageUrl);
    setEventImage(null);
    setMessage("Event updated successfully.");
  }

  if (loading) {
    return (
      <main className="px-6 py-20 text-center text-white">
        Loading event...
      </main>
    );
  }

  return (
    <AdminGuard>
      <main className="mx-auto max-w-3xl px-6 py-20">
        <p className="text-sm font-black uppercase tracking-[0.3em] text-[var(--ville-red-bright)]">
          Admin
        </p>

        <h1 className="mt-4 text-5xl font-black uppercase">Edit Event</h1>

        <form onSubmit={handleSave} className="mt-10 space-y-5">
          <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Event title" className="w-full rounded-xl border border-white/10 bg-black px-4 py-3 text-white" />

          <input value={eventDate} onChange={(e) => setEventDate(e.target.value)} placeholder="Display date" className="w-full rounded-xl border border-white/10 bg-black px-4 py-3 text-white" />

          <input value={eventTime} onChange={(e) => setEventTime(e.target.value)} placeholder="Display time" className="w-full rounded-xl border border-white/10 bg-black px-4 py-3 text-white" />

          <input type="datetime-local" value={eventDatetime} onChange={(e) => setEventDatetime(e.target.value)} className="w-full rounded-xl border border-white/10 bg-black px-4 py-3 text-white" />

          <input value={location} onChange={(e) => setLocation(e.target.value)} placeholder="Location" className="w-full rounded-xl border border-white/10 bg-black px-4 py-3 text-white" />

          <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" className="min-h-32 w-full rounded-xl border border-white/10 bg-black px-4 py-3 text-white" />

          <select value={sport} onChange={(e) => setSport(e.target.value)} className="w-full rounded-xl border border-white/10 bg-black px-4 py-3 text-white">
            <option>Basketball</option>
            <option>Cross Country</option>
            <option>Flag Football</option>
            <option>Soccer</option>
            <option>Everyone</option>
          </select>

          <select value={type} onChange={(e) => setType(e.target.value)} className="w-full rounded-xl border border-white/10 bg-black px-4 py-3 text-white">
            <option>Tournament</option>
            <option>Training</option>
            <option>Camp</option>
            <option>Tryout</option>
            <option>Community Event</option>
            <option>Fundraiser</option>
          </select>

          <input value={imageLabel} onChange={(e) => setImageLabel(e.target.value)} placeholder="Image label" className="w-full rounded-xl border border-white/10 bg-black px-4 py-3 text-white" />

          <div className="space-y-4">
            {imageUrl && (
              <div className="overflow-hidden rounded-2xl border border-white/10 bg-black">
                <img src={imageUrl} alt="Current event" className="h-64 w-full object-cover" />
              </div>
            )}

            <input type="file" accept="image/*" onChange={(e) => setEventImage(e.target.files?.[0] || null)} className="w-full rounded-xl border border-white/10 bg-black px-4 py-3 text-white file:mr-4 file:rounded-full file:border-0 file:bg-[var(--ville-red)] file:px-4 file:py-2 file:text-sm file:font-bold file:text-white" />

            <input value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} placeholder="Image URL" className="w-full rounded-xl border border-white/10 bg-black px-4 py-3 text-white" />
          </div>

          <label className="flex items-center gap-3 text-white">
            <input type="checkbox" checked={showRegistrationButton} onChange={(e) => setShowRegistrationButton(e.target.checked)} />
            Show registration button
          </label>

          {showRegistrationButton && (
            <>
              <select value={registrationType} onChange={(e) => setRegistrationType(e.target.value)} className="w-full rounded-xl border border-white/10 bg-black px-4 py-3 text-white">
                <option value="external">Use external registration link</option>
                <option value="custom">Use website registration page</option>
              </select>

              {registrationType === "external" && (
                <input value={link} onChange={(e) => setLink(e.target.value)} placeholder="External registration link" className="w-full rounded-xl border border-white/10 bg-black px-4 py-3 text-white" />
              )}

              <input value={buttonText} onChange={(e) => setButtonText(e.target.value)} placeholder="Button text" className="w-full rounded-xl border border-white/10 bg-black px-4 py-3 text-white" />
            </>
          )}

          <input value={paymentUrl} onChange={(e) => setPaymentUrl(e.target.value)} placeholder="Payment URL" className="w-full rounded-xl border border-white/10 bg-black px-4 py-3 text-white" />

          <input value={squarePaymentUrl} onChange={(e) => setSquarePaymentUrl(e.target.value)} placeholder="Square payment URL" className="w-full rounded-xl border border-white/10 bg-black px-4 py-3 text-white" />

          <input value={waiverUrl} onChange={(e) => setWaiverUrl(e.target.value)} placeholder="Waiver URL" className="w-full rounded-xl border border-white/10 bg-black px-4 py-3 text-white" />

          <input value={mediaReleaseUrl} onChange={(e) => setMediaReleaseUrl(e.target.value)} placeholder="Media release URL" className="w-full rounded-xl border border-white/10 bg-black px-4 py-3 text-white" />

          <label className="flex items-center gap-3 text-white">
            <input type="checkbox" checked={featured} onChange={(e) => setFeatured(e.target.checked)} />
            Featured Event
          </label>

          <label className="flex items-center gap-3 text-white">
            <input type="checkbox" checked={published} onChange={(e) => setPublished(e.target.checked)} />
            Published
          </label>

          <button type="submit" className="rounded-full bg-[var(--ville-red)] px-7 py-3 text-sm font-black uppercase text-white">
            Save Changes
          </button>
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