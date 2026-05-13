import AdminGuard from "../../components/AdminGuard";

const adminSections = [
  {
    title: "Events",
    description: "Add tournaments, camps, tryouts, and special events.",
    href: "/admin/events",
  },
  {
    title: "Announcements",
    description: "Post updates, reminders, registration news, and team info.",
    href: "/admin/announcements",
  },
  {
    title: "Gallery",
    description: "Upload photos for the website gallery.",
    href: "/admin/gallery",
  },
  {
    title: "Sponsors",
    description: "Manage sponsor logos, links, and sponsor tiers.",
    href: "/admin/sponsors",
  },
];

export default function AdminDashboard() {
  return (
    <AdminGuard>
      <main className="mx-auto flex w-full max-w-7xl flex-col items-center px-6 py-20 text-center">
        <p className="text-sm font-black uppercase tracking-[0.3em] text-[var(--ville-red-bright)]">
          Admin Dashboard
        </p>

        <h1 className="mt-4 text-5xl font-black uppercase leading-none md:text-7xl">
          The Ville Admin
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-300">
          Manage website content for The Ville Athletics. Add public events,
          announcements, gallery images, sponsor content, and website updates.
        </p>

        <section className="mt-12 grid w-full gap-6 md:grid-cols-2 xl:grid-cols-4">
          {adminSections.map((section) => (
            <a
              key={section.title}
              href={section.href}
              className="group rounded-3xl border border-white/10 bg-zinc-900 p-6 text-left transition duration-300 hover:-translate-y-1 hover:border-[var(--ville-red)] hover:shadow-[0_10px_40px_rgba(122,0,25,0.2)]"
            >
              <h2 className="text-2xl font-black uppercase">
                {section.title}
              </h2>

              <p className="mt-4 leading-7 text-zinc-400">
                {section.description}
              </p>

              <span className="mt-6 inline-flex rounded-full border border-white/10 px-4 py-2 text-sm font-black uppercase text-white transition group-hover:border-[var(--ville-red)] group-hover:text-[var(--ville-red-bright)]">
                Open
              </span>
            </a>
          ))}
        </section>
      </main>
    </AdminGuard>
  );
}