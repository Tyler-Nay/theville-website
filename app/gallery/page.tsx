"use client";

export const dynamic = "force-dynamic";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import Reveal from "@/components/Reveal";

type GalleryImage = {
  id: number;
  image_url: string;
  image_urls?: string[] | null;
  caption: string | null;
  sport: string | null;
  category: string | null;
  published: boolean;
  created_at: string;
};

function GalleryCard({
  image,
  index,
}: {
  image: GalleryImage;
  index: number;
}) {
  const imageList =
    image.image_urls && image.image_urls.length > 0
      ? image.image_urls
      : [image.image_url];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (imageList.length <= 1) {
      return;
    }

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % imageList.length);
    }, 3500);

    return () => clearInterval(interval);
  }, [imageList.length]);

  return (
    <Reveal delay={index * 0.03}>
      <article className="group mb-5 break-inside-avoid overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.035),rgba(255,255,255,0.015))] text-left shadow-[0_0_35px_rgba(122,0,25,0.08)] transition duration-500 hover:-translate-y-1 hover:border-[var(--ville-red)] hover:shadow-[0_15px_50px_rgba(122,0,25,0.22)]">
        {/* IMAGE */}
        <div className="relative overflow-hidden bg-black">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {imageList.map((url, index) => (
              <div key={index} className="min-w-full overflow-hidden">
                <img
                  src={url}
                  alt={image.caption || "The Ville Gallery"}
                  className="block h-auto max-h-[520px] w-full object-contain transition duration-700 group-hover:scale-[1.02]"
                />
              </div>
            ))}
          </div>

          {/* OVERLAY */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

          {/* DOTS */}
          {imageList.length > 1 && (
            <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-2 rounded-full bg-black/50 px-3 py-2 backdrop-blur-xl">
              {imageList.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setCurrentIndex(index)}
                  aria-label={`View image ${index + 1}`}
                  className={`h-2 w-2 rounded-full transition-all ${
                    currentIndex === index
                      ? "bg-white"
                      : "bg-white/40 hover:bg-white/70"
                  }`}
                />
              ))}
            </div>
          )}
        </div>

        {(image.sport || image.category || image.caption) && (
          <div className="p-5">
            <div className="flex flex-wrap gap-2">
              {image.sport && (
                <span className="rounded-full bg-[var(--ville-red-bright)]/15 px-3 py-1 text-[10px] font-black uppercase tracking-[0.15em] text-[var(--ville-red-bright)]">
                  {image.sport}
                </span>
              )}

              {image.category && (
                <span className="rounded-full border border-white/10 px-3 py-1 text-[10px] font-black uppercase tracking-[0.15em] text-zinc-400">
                  {image.category}
                </span>
              )}
            </div>

            {image.caption && (
              <h2 className="mt-4 text-lg font-black uppercase leading-tight text-white">
                {image.caption}
              </h2>
            )}
          </div>
        )}
      </article>
    </Reveal>
  );
}

export default function GalleryPage() {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    async function getGalleryImages() {
      const { data, error } = await supabase
        .from("gallery_images")
        .select("*")
        .eq("published", true)
        .not("image_url", "is", null)
        .neq("image_url", "")
        .order("created_at", { ascending: false });

      if (error) {
        setHasError(true);
        setLoading(false);
        return;
      }

      setImages((data || []) as GalleryImage[]);
      setLoading(false);
    }

    getGalleryImages();
  }, []);

  return (
    <main className="mx-auto max-w-6xl px-5 py-16">
      {/* HEADER */}
      <Reveal>
        <section className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-black uppercase tracking-[0.35em] text-[var(--ville-red-bright)]">
            Gallery
          </p>

          <h1 className="mt-4 text-4xl font-black uppercase leading-[0.95] md:text-6xl">
            Moments from
            <span className="block text-[var(--ville-red-bright)]">
              The Ville
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-zinc-300">
            Practices, tournaments, community events, athlete development, and
            the moments that define The Ville Athletics.
          </p>
        </section>
      </Reveal>

      {/* LOADING */}
      {loading && (
        <Reveal delay={0.06}>
          <section className="mt-14 rounded-3xl border border-white/10 bg-zinc-900/60 p-8 text-center">
            <p className="text-lg font-bold text-zinc-300">
              Loading gallery...
            </p>
          </section>
        </Reveal>
      )}

      {/* ERROR */}
      {!loading && hasError && (
        <Reveal delay={0.06}>
          <section className="mt-14 rounded-3xl border border-red-500/20 bg-red-950/20 p-8 text-center">
            <h2 className="text-3xl font-black uppercase text-red-400">
              Gallery Failed To Load
            </h2>

            <p className="mt-4 text-zinc-300">
              Please check your Supabase connection and policies.
            </p>
          </section>
        </Reveal>
      )}

      {/* EMPTY */}
      {!loading && !hasError && images.length === 0 && (
        <Reveal delay={0.08}>
          <section className="mt-14">
            <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-900 shadow-[0_0_60px_rgba(122,0,25,0.12)]">
              <div className="relative flex min-h-[420px] flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-zinc-950 via-black to-zinc-900 px-6 text-center">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(122,0,25,0.2),transparent_40%)]" />

                <div className="relative">
                  <p className="text-xs font-black uppercase tracking-[0.35em] text-[var(--ville-red-bright)]">
                    Coming Soon
                  </p>

                  <h2 className="mt-5 text-4xl font-black uppercase leading-none md:text-6xl">
                    Building the story
                  </h2>

                  <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-zinc-300">
                    As The Ville grows, this gallery will showcase athletes,
                    tournaments, practices, community events, and the culture
                    behind the organization.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </Reveal>
      )}

      {/* GALLERY */}
      {!loading && !hasError && images.length > 0 && (
        <section className="mt-14 columns-1 gap-5 sm:columns-2 lg:columns-3">
          {images.map((image, index) => (
            <GalleryCard
              key={image.id}
              image={image}
              index={index}
            />
          ))}
        </section>
      )}
    </main>
  );
}