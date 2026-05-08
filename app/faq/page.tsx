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
      "All registrations are completed online through our registration platform. Visit the Register page to get started.",
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
      "Communication, schedules, and updates will be managed through our team platform.",
  },
  {
    question: "What is expected from athletes?",
    answer:
      "Athletes are expected to show effort, discipline, respect, and consistency at every practice, game, and event.",
  },
];

export default function FAQPage() {
  return (
    <main className="mx-auto flex max-w-7xl flex-col items-center px-6 py-20 text-center">
      {/* HEADER */}
      <section className="max-w-5xl">
        <p className="text-sm font-black uppercase tracking-[0.3em] text-[var(--ville-red-bright)]">
          FAQ
        </p>

        <h1 className="mt-4 text-5xl font-black uppercase leading-[0.95] md:text-7xl">
          Frequently asked questions
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-zinc-300">
          Find answers to common questions about programs, registration,
          expectations, and communication at The Ville Athletics.
        </p>
      </section>

      {/* FAQ GRID */}
      <section className="mt-14 grid w-full gap-6 md:grid-cols-2">
        {faqs.map((faq) => (
          <div
            key={faq.question}
            className="rounded-3xl border border-white/10 bg-zinc-900 p-6 text-left transition duration-300 hover:border-[var(--ville-red)] hover:shadow-[0_10px_40px_rgba(122,0,25,0.2)]"
          >
            <h2 className="text-lg font-black uppercase">
              {faq.question}
            </h2>

            <p className="mt-4 leading-7 text-zinc-400">
              {faq.answer}
            </p>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section className="mt-16 w-full">
        <div className="mx-auto max-w-4xl rounded-[2rem] border border-white/10 bg-gradient-to-br from-zinc-900 to-black px-6 py-12 text-center md:px-10 md:py-14">
          <p className="text-sm font-black uppercase tracking-[0.3em] text-[var(--ville-red-bright)]">
            Join The Ville
          </p>

          <h2 className="mt-4 text-3xl font-black uppercase leading-[1.05] md:text-5xl">
            Ready to get started?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-zinc-400">
            Register today and become part of a community-focused athletic
            program built around development, discipline, and opportunity.
          </p>

          <div className="mt-8 flex justify-center">
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