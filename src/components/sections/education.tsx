import { education } from "@/content/education";

export default function Education() {
  return (
    <section id="education" className="space-y-6">
      <h2 className="text-xl sm:text-2xl font-semibold tracking-tight">Education</h2>
      <div className="space-y-4">
        {education.map((e) => (
          <div key={e.school} className="rounded-xl border border-border/60 bg-card/30 p-5">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
              <h3 className="font-semibold">{e.school}</h3>
              <div className="text-sm text-muted-foreground">{e.timeline}</div>
            </div>
            <div className="text-sm text-muted-foreground">{e.degree}</div>
            <div className="mt-2 text-sm text-muted-foreground">{e.note} • {e.location}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
