import { leadership } from "@/content/leadership";

export default function Leadership() {
  return (
    <section id="leadership" className="space-y-6">
      <h2 className="text-xl sm:text-2xl font-semibold tracking-tight">Leadership</h2>
      <div className="space-y-4">
        {leadership.map((l) => (
          <div key={l.org} className="rounded-xl border border-border p-5">
            <h3 className="font-semibold">{l.org}</h3>
            <div className="mt-2 space-y-1 text-sm text-muted-foreground">
              {l.roles.map((r) => (
                <div key={r.title} className="flex flex-col sm:flex-row sm:justify-between gap-1">
                  <div>{r.title}</div>
                  <div>{r.timeline}</div>
                </div>
              ))}
            </div>
            <ul className="mt-3 space-y-1 text-sm text-muted-foreground">
              {l.bullets.map((b, i) => <li key={i}>• {b}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
