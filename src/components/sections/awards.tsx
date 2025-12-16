import Link from "next/link";
import { awards } from "@/content/awards";

export default function Awards() {
  const featured = awards
    .map((g) => ({ ...g, items: g.items.filter((i) => i.featuredOnHome) }))
    .filter((g) => g.items.length);

  return (
    <section className="space-y-6">
      <div className="flex items-end justify-between gap-4">
        <h2 className="text-xl sm:text-2xl font-semibold tracking-tight">Achievements</h2>
        <Link className="text-sm text-muted-foreground hover:text-foreground transition-colors" href="/achievements">
          View all
        </Link>
      </div>

      <div className="grid gap-5 lg:grid-cols-2">
        {featured.map((group) => (
          <div key={group.category} className="rounded-2xl border border-border/60 bg-card/20 p-5">
            <div className="text-sm font-semibold tracking-tight">{group.category}</div>
            <div className="mt-4 space-y-3">
              {group.items.map((a) => (
                <div key={a.title} className="rounded-xl border border-border/60 bg-card/30 p-4">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                    <div className="font-medium">{a.title}</div>
                    {a.date ? <div className="text-xs text-muted-foreground">{a.date}</div> : null}
                  </div>
                  <div className="mt-1 text-sm text-muted-foreground">
                    {[a.issuer, a.note].filter(Boolean).join(" • ")}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
