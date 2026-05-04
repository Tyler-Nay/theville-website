export default function ContactPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-20">
      <p className="text-sm font-black uppercase tracking-[0.3em] text-[var(--ville-red-bright)]">
        Contact
      </p>

      <h1 className="mt-4 text-5xl font-black uppercase md:text-7xl">
        Get in touch.
      </h1>

      <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
        Have questions about programs, registration, or upcoming events? Reach
        out and we’ll get back to you as soon as possible.
      </p>

      <div className="mt-10 rounded-3xl border border-white/10 bg-zinc-900 p-8">
        <p className="text-sm font-black uppercase text-[var(--ville-red-bright)]">
          Contact Information
        </p>

        <div className="mt-6 space-y-4 text-zinc-300">
          {/* EMAIL */}
          <p>
            <span className="font-bold">Email:</span>{" "}
            <a
              href="mailto:lvtheville@gmail.com"
              className="hover:text-[var(--ville-red-bright)]"
            >
              lvtheville@gmail.com
            </a>
          </p>

          {/* PHONE NUMBERS */}
          <div className="space-y-2">
            <p className="font-bold">Phone:</p>

            <p>
              Coach Will:{" "}
              <a
                href="tel:7022390590"
                className="hover:text-[var(--ville-red-bright)]"
              >
                (702) 239-0590
              </a>
            </p>

            <p>
              Coach Rainey:{" "}
              <a
                href="tel:7024291447"
                className="hover:text-[var(--ville-red-bright)]"
              >
                (702) 429-1447
              </a>
            </p>
          </div>

          {/* LOCATION */}
          <p>
            <span className="font-bold">Location:</span> Las Vegas, NV
          </p>
        </div>
      </div>
    </main>
  );
}