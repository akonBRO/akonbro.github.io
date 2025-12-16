import { experience } from "@/content/experience";

export default function Experience() {
  return (
    <section id="experience" className="space-y-6">
      <h2 className="text-xl sm:text-2xl font-semibold tracking-tight">Experience</h2>
      <div className="space-y-4">
        {experience.map((e) => (
          <div key={e.company} className="rounded-xl border border-border p-5">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
              <h3 className="font-semibold">{e.company}</h3>
              <div className="text-sm text-muted-foreground">{e.timeline}</div>
            </div>
            <div className="text-sm text-muted-foreground">{e.role}</div>
            <ul className="mt-3 space-y-1 text-sm text-muted-foreground">
              {e.bullets.map((b, i) => <li key={i}>• {b}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
