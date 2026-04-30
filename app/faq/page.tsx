const faqs = [
  {
    question: "What age groups do you serve?",
    answer:
      "We offer programs for athletes in grades K–5, 6–8, and high school depending on the sport.",
  },
  {
    question: "What sports do you offer?",
    answer:
      "The Ville Athletics currently offers basketball, soccer, cross country, and flag football programs.",
  },
  {
    question: "How do I register?",
    answer:
      "All registrations are completed online through TeamSnap. Visit the Register page to get started.",
  },
  {
    question: "What does registration include?",
    answer:
      "Registration includes access to practices, team placement, communication, and participation in program activities.",
  },
  {
    question: "Are there payment plans available?",
    answer:
      "Payment options may vary by program. More details will be provided during registration.",
  },
  {
    question: "Where are practices and events held?",
    answer:
      "Practices and events are held at various locations throughout Las Vegas. Specific details will be shared after registration.",
  },
  {
    question: "How will I receive updates and communication?",
    answer:
      "All communication, schedules, and updates will be managed through TeamSnap.",
  },
  {
    question: "What is expected from athletes?",
    answer:
      "Athletes are expected to show effort, discipline, respect, and consistency at every practice, game, and event.",
  },
];

export default function FAQPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-20">
      <section className="text-center md:text-left">
        <p className="text-sm font-black uppercase tracking-[0.3em] text-[var(--ville-red-bright)]">
          FAQ
        </p>

        <h1 className="mt-4 text-5xl font-black uppercase leading-none md:text-7xl">
          Frequently asked questions
        </h1>

        <p className="mt-6 text-lg text-zinc-300 whitespace-nowrap">
          Find answers to common questions about programs, registration, and
          expectations at The Ville Athletics.
        </p>
      </section>

      <section className="mt-12 grid gap-6 md:grid-cols-2">
        {faqs.map((faq) => (
          <div
            key={faq.question}
            className="rounded-3xl border border-white/10 bg-zinc-900 p-6 transition duration-300 hover:border-[var(--ville-red)] hover:shadow-[0_10px_40px_rgba(122,0,25,0.2)]"
          >
            <h2 className="text-lg font-black uppercase">
              {faq.question}
            </h2>

            <p className="mt-3 text-zinc-400 leading-7">
              {faq.answer}
            </p>
          </div>
        ))}
      </section>

      {/* CTA SECTION */}
      <section className="mt-16">
        <div className="mx-auto max-w-3xl text-center rounded-[2rem] border border-white/10 bg-gradient-to-br from-zinc-900 to-black px-6 py-12 md:px-10 md:py-14">
          <h2 className="text-2xl font-black uppercase md:text-4xl">
            Ready to get started?
          </h2>

          <div className="mt-6 flex justify-center">
            <a
              href="/register"
              className="rounded-full bg-[var(--ville-red)] px-6 py-3 text-sm font-black uppercase text-white transition hover:bg-[var(--ville-red-bright)]"
            >
              Register Now
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}