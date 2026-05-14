"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

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

function GalleryCard({ image }: { image: GalleryImage }) {
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
    <article className="mb-6 break-inside-avoid overflow-hidden rounded-3xl border border-white/10 bg-zinc-900 text-left shadow-[0_0_35px_rgba(122,0,25,0.08)]">
      {/* IMAGE SLIDESHOW */}
      <div className="relative overflow-hidden bg-black">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {imageList.map((url, index) => (
            <div key={index} className="min-w-full">
              <img
                src={url}
                alt={image.caption || "The Ville Gallery"}
                className="block h-auto max-h-[420px] w-full object-contain"
              />
            </div>
          ))}
        </div>

        {imageList.length > 1 && (
          <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-2 rounded-full bg-black/50 px-3 py-2 backdrop-blur">
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
              <span className="rounded-full bg-[var(--ville-red-bright)]/20 px-3 py-1 text-xs font-black uppercase tracking-[0.15em] text-[var(--ville-red-bright)]">
                {image.sport}
              </span>
            )}

            {image.category && (
              <span className="rounded-full bg-white/5 px-3 py-1 text-xs font-black uppercase tracking-[0.15em] text-zinc-300">
                {image.category}
              </span>
            )}
          </div>

          {image.caption && (
            <h2 className="mt-4 text-xl font-black uppercase text-white">
              {image.caption}
            </h2>
          )}
        </div>
      )}
    </article>
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
        .order("created_at", { ascending: false });

      if (error) {
        setHasError(true);
        setLoading(false);
        return;
      }

      setImages(data || []);
      setLoading(false);
    }

    getGalleryImages();
  }, []);

  return (
    <main className="mx-auto flex max-w-7xl flex-col items-center px-6 py-20 text-center">
      {/* HEADER */}
      <section className="max-w-5xl">
        <p className="text-sm font-black uppercase tracking-[0.3em] text-[var(--ville-red-bright)]">
          Gallery
        </p>

        <h1 className="mt-4 text-5xl font-black uppercase leading-[0.95] md:text-7xl">
          Moments from
          <span className="block text-[var(--ville-red-bright)]">
            The Ville
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-zinc-300">
          Photos and videos from practices, games, tournaments, events, and the
          Las Vegas community.
        </p>
      </section>

      {/* LOADING */}
      {loading && (
        <section className="mt-16 w-full rounded-3xl border border-white/10 bg-zinc-900 p-8">
          <p className="text-lg font-bold text-zinc-300">Loading gallery...</p>
        </section>
      )}

      {/* ERROR */}
      {!loading && hasError && (
        <section className="mt-16 w-full rounded-3xl border border-red-500/20 bg-red-950/20 p-8">
          <h2 className="text-3xl font-black uppercase text-red-400">
            Gallery Failed To Load
          </h2>

          <p className="mt-4 text-zinc-300">
            Please check your Supabase connection and RLS policies.
          </p>
        </section>
      )}

      {/* EMPTY STATE */}
      {!loading && !hasError && images.length === 0 && (
        <section className="mt-16 w-full">
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-900 shadow-[0_0_60px_rgba(122,0,25,0.12)]">
            <div className="relative h-[420px] w-full overflow-hidden bg-gradient-to-br from-zinc-950 via-black to-zinc-900">
              <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
                <p className="text-sm font-black uppercase tracking-[0.35em] text-[var(--ville-red-bright)]">
                  Coming Soon
                </p>

                <h2 className="mt-5 text-5xl font-black uppercase leading-none md:text-7xl">
                  Building the story
                </h2>

                <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-zinc-300">
                  As The Ville grows, this gallery will showcase athletes,
                  tournaments, practices, community events, and the moments that
                  define the organization.
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* MASONRY GALLERY */}
      {!loading && !hasError && images.length > 0 && (
        <section className="mt-16 w-full columns-1 gap-6 sm:columns-2 lg:columns-3">
          {images.map((image) => (
            <GalleryCard key={image.id} image={image} />
          ))}
        </section>
      )}
    </main>
  );
}