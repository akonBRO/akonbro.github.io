import { projects } from "@/content/projects";

const order = ["ML/AI", "Web", "Robotics", "Other"] as const;

export default function ProjectsPage() {
  return (
    <div className="py-10 sm:py-14 space-y-10">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">Projects</h1>
        <p className="text-muted-foreground">ML/AI, web applications, and robotics builds with links and proof.</p>
      </header>

      {order.map((cat) => {
        const items = projects.filter((p) => p.category === cat);
        if (!items.length) return null;

        return (
          <section key={cat} className="space-y-4">
            <h2 className="text-xl font-semibold tracking-tight">{cat}</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {items.map((p) => (
                <div key={p.slug} className="rounded-xl border border-border p-5">
                  <div className="text-xs text-muted-foreground">{p.timeline}</div>
                  <div className="mt-2 font-semibold">{p.title}</div>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {p.stack.slice(0, 4).map((s) => (
                      <span key={s} className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground">
                        {s}
                      </span>
                    ))}
                  </div>
                  <ul className="mt-3 space-y-1 text-sm text-muted-foreground">
                    {p.highlights.slice(0, 2).map((h, i) => <li key={i}>• {h}</li>)}
                  </ul>
                  <div className="mt-4 flex flex-wrap gap-3">
                    {p.links.map((l) => (
                      <a key={l.href} className="text-sm underline underline-offset-4" href={l.href} target="_blank" rel="noreferrer">
                        {l.label}
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
