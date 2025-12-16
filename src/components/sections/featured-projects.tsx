import Image from "next/image";
import Link from "next/link";
import { projects } from "@/content/projects";

export default function FeaturedProjects() {
  const featured = projects.filter((p) => p.featured);

  return (
    <section id="projects" className="space-y-6">
      <div className="flex items-end justify-between gap-4">
        <h2 className="text-xl sm:text-2xl font-semibold tracking-tight">Featured projects</h2>
        <Link className="text-sm text-muted-foreground hover:text-foreground transition-colors" href="/projects">
          All projects
        </Link>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {featured.map((p) => (
          <div
            key={p.slug}
            className="group rounded-2xl border border-border/60 bg-card/30 overflow-hidden transition
                       hover:-translate-y-1 hover:border-border hover:bg-card/40"
          >
            {/* Thumbnail */}
            <div className="relative aspect-[16/9] w-full overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,hsl(0_0%_100%/0.12),transparent_60%)]" />
              {p.image ? (
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover opacity-90 group-hover:opacity-100 transition"
                />
              ) : (
                <div className="h-full w-full bg-muted/30" />
              )}
            </div>

            <div className="p-5">
              <div className="flex items-center justify-between gap-3 text-xs text-muted-foreground">
                <span className="rounded-full border border-border/60 px-2 py-1">{p.category}</span>
                <span>{p.timeline}</span>
              </div>

              <h3 className="mt-3 text-base font-semibold tracking-tight">{p.title}</h3>

              <ul className="mt-3 space-y-1 text-sm text-muted-foreground">
                {p.highlights.slice(0, 2).map((h, i) => (
                  <li key={i}>• {h}</li>
                ))}
              </ul>

              <div className="mt-4 flex flex-wrap gap-3">
                {p.links.map((l) => (
                  <a
                    key={l.href}
                    className="text-sm font-medium underline underline-offset-4 opacity-90 hover:opacity-100"
                    href={l.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {l.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
