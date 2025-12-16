import { awards } from "@/content/awards";

export const metadata = {
  title: "Achievements",
  description: "Awards, honors, and recognitions.",
};

export default function AchievementsPage() {
  return (
    <div className="space-y-10">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">Achievements</h1>
        <p className="text-muted-foreground">Tech recognitions and sports achievements.</p>
      </header>

      <div className="grid gap-6 lg:grid-cols-2">
        {awards.map((group) => (
          <section key={group.category} className="rounded-2xl border border-border/60 bg-card/20 p-6">
            <h2 className="text-lg font-semibold tracking-tight">{group.category}</h2>
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
          </section>
        ))}
      </div>
    </div>
  );
}
