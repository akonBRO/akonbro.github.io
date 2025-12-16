import { profile } from "@/content/profile";

export default function Contact() {
  return (
    <section className="rounded-2xl border border-border p-6 sm:p-8">
      <h2 className="text-xl sm:text-2xl font-semibold tracking-tight">Contact</h2>
      <p className="mt-2 text-sm text-muted-foreground">
        For internships, junior roles, research collaboration, or project work.
      </p>
      <div className="mt-5 flex flex-wrap gap-3">
        <a className="rounded-md bg-foreground text-background px-4 py-2 text-sm hover:opacity-90 transition"
           href={`mailto:${profile.email}`}>
          Email
        </a>
        <a className="rounded-md border border-border px-4 py-2 text-sm hover:bg-accent transition"
           href={profile.links.linkedin} target="_blank" rel="noreferrer">
          LinkedIn
        </a>
        <a className="rounded-md border border-border px-4 py-2 text-sm hover:bg-accent transition"
           href={profile.links.github} target="_blank" rel="noreferrer">
          GitHub
        </a>
      </div>
    </section>
  );
}
