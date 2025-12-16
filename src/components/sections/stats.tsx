import { projects } from "@/content/projects";
import { certifications } from "@/content/certifications";
import { experience } from "@/content/experience";

export default function Stats() {
  const stats = [
    { k: "Focus", v: "ML/AI + Full‑Stack", hint: "What you build" },
    { k: "Projects", v: `${projects.length}+`, hint: "Proof of work" },
    { k: "Certifications", v: `${certifications.length}+`, hint: "Verified skills" },
    { k: "Experience", v: `${experience.length}`, hint: "Industry exposure" },
    { k: "CGPA", v: "3.53 / 4.00", hint: "BRAC University" },
    { k: "Location", v: "Dhaka, BD", hint: "Open to remote" },
  ];

  return (
    <section className="rounded-2xl border border-border/60 bg-card/20 p-4 sm:p-5">
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {stats.map((s, i) => (
          <div
            key={s.k}
            className={[
              "group rounded-2xl border border-border/60 bg-card/30 p-4 transition",
              "hover:-translate-y-1 hover:border-border hover:bg-card/40",
              "animate-in fade-in slide-in-from-bottom-2 duration-500",
            ].join(" ")}
            style={{ animationDelay: `${i * 60}ms` }}
          >
            <div className="flex items-center justify-between gap-3">
              <span className="text-xs text-muted-foreground rounded-full border border-border/60 px-2 py-1">
                {s.k}
              </span>
              <span className="text-[11px] text-muted-foreground">{s.hint}</span>
            </div>

            <div className="mt-3 text-lg sm:text-xl font-semibold tracking-tight">
              {s.v}
            </div>

            <div className="mt-1 text-xs text-muted-foreground">
              {s.k === "Projects" ? "ML/AI, Web, Robotics" : s.hint}
            </div>

            <div className="mt-3 h-px w-full bg-border/60 opacity-0 group-hover:opacity-100 transition" />
          </div>
        ))}
      </div>
    </section>
  );
}
