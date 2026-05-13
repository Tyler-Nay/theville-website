import AdminGuard from "../../../components/AdminGuard";

export default function AdminAnnouncementsPage() {
  return (
    <AdminGuard>
      <main className="mx-auto flex w-full max-w-5xl flex-col items-center px-6 py-20 text-center">
        <p className="text-sm font-black uppercase tracking-[0.3em] text-[var(--ville-red-bright)]">
          Admin
        </p>

        <h1 className="mt-4 text-5xl font-black uppercase">
          Announcements
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
          Manage website announcements, updates, reminders, registration news,
          tournament notices, and important information for athletes and parents.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="/admin/announcements/new"
            className="inline-flex rounded-full bg-[var(--ville-red)] px-6 py-3 text-sm font-black uppercase text-white transition hover:bg-[var(--ville-red-bright)]"
          >
            Add Announcement
          </a>

          <a
            href="/admin"
            className="inline-flex rounded-full border border-white/10 px-6 py-3 text-sm font-black uppercase text-white transition hover:border-[var(--ville-red)] hover:text-[var(--ville-red-bright)]"
          >
            Back to Dashboard
          </a>
        </div>

        <section className="mt-12 w-full rounded-3xl border border-white/10 bg-zinc-900 p-8 text-left">
          <p className="text-zinc-400">
            No announcements added yet.
          </p>
        </section>
      </main>
    </AdminGuard>
  );
}