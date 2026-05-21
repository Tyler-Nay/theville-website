import Reveal from "@/components/Reveal";

const faqs = [
  {
    question: "What age groups do you serve?",
    answer:
      "We offer programs for athletes in grades K–5, 6–8, and high school depending on the sport.",
  },
  {
    question: "What sports do you offer?",
    answer:
      "The Ville Athletics currently offers basketball and soccer, with flag football and cross country programs coming in the future.",
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
    <main className="mx-auto max-w-6xl px-5 py-16">
      <Reveal>
        <section className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-black uppercase tracking-[0.35em] text-[var(--ville-red-bright)]">
            FAQ
          </p>

          <h1 className="mt-4 text-4xl font-black uppercase leading-[0.95] md:text-6xl">
            Frequently asked questions
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-zinc-300">
            Find answers to common questions about programs, registration,
            expectations, and communication at The Ville Athletics.
          </p>
        </section>
      </Reveal>

      <Reveal delay={0.08}>
        <section className="mt-12 grid gap-5 md:grid-cols-2">
          {faqs.map((faq) => (
            <div
              key={faq.question}
              className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.035),rgba(255,255,255,0.015))] p-6 text-left transition duration-300 hover:-translate-y-1 hover:border-[var(--ville-red)] hover:shadow-[0_10px_40px_rgba(122,0,25,0.18)]"
            >
              <h2 className="text-lg font-black uppercase leading-tight">
                {faq.question}
              </h2>

              <p className="mt-4 text-sm leading-7 text-zinc-400">
                {faq.answer}
              </p>
            </div>
          ))}
        </section>
      </Reveal>

      <Reveal delay={0.12}>
        <section className="mt-16 overflow-hidden rounded-[2rem] border border-white/10 bg-black p-8 text-center md:p-12">
          <div className="relative">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(122,0,25,0.18),transparent_45%)]" />

            <div className="relative">
              <p className="text-xs font-black uppercase tracking-[0.35em] text-[var(--ville-red-bright)]">
                Join The Ville
              </p>

              <h2 className="mt-4 text-3xl font-black uppercase leading-[1.05] md:text-5xl">
                Ready to get started?
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-zinc-400 md:text-base">
                Register today and become part of a community-focused athletic
                program built around development, discipline, and opportunity.
              </p>

              <div className="mt-8 flex justify-center">
                <a
                  href="https://the-ville.gymdesk.com/signup"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-[var(--ville-red)] px-7 py-3 text-sm font-black uppercase tracking-[0.14em] text-white transition duration-300 hover:bg-[var(--ville-red-bright)] hover:shadow-[0_0_30px_rgba(122,0,25,0.35)]"
                >
                  Register Now
                </a>
              </div>
            </div>
          </div>
        </section>
      </Reveal>
    </main>
  );
}