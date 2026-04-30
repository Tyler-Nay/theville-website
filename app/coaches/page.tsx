type Coach = {
  name: string;
  role: string;
  bio: string;
};

type CoachGroup = {
  sport: string;
  coaches: Coach[];
};

const coachGroups: CoachGroup[] = [
  {
    sport: "Basketball",
    coaches: [
      {
        name: "Coach Name",
        role: "Head Coach",
        bio: "Coach bio coming soon.",
      },
      {
        name: "Coach Name",
        role: "Assistant Coach",
        bio: "Coach bio coming soon.",
      },
    ],
  },
  {
    sport: "Soccer",
    coaches: [
      {
        name: "Coach Name",
        role: "Head Coach",
        bio: "Coach bio coming soon.",
      },
      {
        name: "Coach Name",
        role: "Assistant Coach",
        bio: "Coach bio coming soon.",
      },
    ],
  },
  {
    sport: "Cross Country",
    coaches: [
      {
        name: "Coach Name",
        role: "Coach",
        bio: "Coach bio coming soon.",
      },
    ],
  },
  {
    sport: "Flag Football",
    coaches: [
      {
        name: "Coach Name",
        role: "Head Coach",
        bio: "Coach bio coming soon.",
      },
      {
        name: "Coach Name",
        role: "Assistant Coach",
        bio: "Coach bio coming soon.",
      },
    ],
  },
];

export default function CoachesPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-20">
      <section className="text-center md:text-left">
        <p className="text-sm font-black uppercase tracking-[0.3em] text-[var(--ville-red-bright)]">
          Coaches
        </p>

        <h1 className="mt-4 text-5xl font-black uppercase leading-none md:text-7xl">
          Meet the staff
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-zinc-300 md:mx-0">
          The Ville is built by coaches who create structure, development,
          accountability, and a competitive environment for every athlete.
        </p>
      </section>

      <section className="mt-14 space-y-14">
        {coachGroups.map((group) => (
          <div key={group.sport}>
            <div className="mb-6 flex items-center gap-4">
              <h2 className="text-3xl font-black uppercase">
                {group.sport}
              </h2>
              <div className="h-px flex-1 bg-white/10" />
            </div>

            <div className="grid items-stretch gap-6 md:grid-cols-2 lg:grid-cols-3">
              {group.coaches.map((coach, index) => (
                <div
                  key={`${group.sport}-${coach.role}-${index}`}
                  className="flex h-full flex-col rounded-3xl border border-white/10 bg-zinc-900 p-6 transition duration-300 hover:-translate-y-1 hover:border-[var(--ville-red)] hover:shadow-[0_10px_40px_rgba(122,0,25,0.2)]"
                >
                  <div className="mb-6 flex h-44 items-center justify-center rounded-2xl border border-white/10 bg-black/60 text-sm font-black uppercase tracking-[0.25em] text-zinc-600">
                    Photo
                  </div>

                  <p className="font-bold text-[var(--ville-red-bright)]">
                    {coach.role}
                  </p>

                  <h3 className="mt-2 text-2xl font-black uppercase">
                    {coach.name}
                  </h3>

                  <p className="mt-3 text-zinc-400">
                    {coach.bio}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}