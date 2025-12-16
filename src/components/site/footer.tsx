import { profile } from "@/content/profile";

export default function Footer() {
  return (
    <footer className="border-t border-border/60">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8 text-sm text-muted-foreground">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div>© {new Date().getFullYear()} {profile.name}</div>
          <div className="flex gap-4">
            <a className="hover:text-foreground" href={profile.links.github} target="_blank" rel="noreferrer">GitHub</a>
            <a className="hover:text-foreground" href={profile.links.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            <a className="hover:text-foreground" href={`mailto:${profile.email}`}>Email</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
