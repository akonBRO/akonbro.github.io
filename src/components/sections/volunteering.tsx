import { volunteering } from "@/content/volunteering";

export default function Volunteering() {
  return (
    <section id="volunteering" className="space-y-6">
      <div className="flex items-end justify-between gap-4">
        <h2 className="text-xl sm:text-2xl font-semibold tracking-tight">Volunteering</h2>
        <a
          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          href="https://www.linkedin.com/in/akon-sabbir/details/volunteering-experiences/"
          target="_blank"
          rel="noreferrer"
        >
          View on LinkedIn
        </a>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        {volunteering.map((v) => (
          <div key={v.org + v.role} className="rounded-2xl border border-border/60 bg-card/30 p-5">
            <div className="flex items-start justify-between gap-3">
              <div>
                <div className="font-semibold">{v.org}</div>
                <div className="text-sm text-muted-foreground">{v.role}</div>
              </div>
              <div className="text-xs text-muted-foreground">{v.timeline}</div>
            </div>

            <ul className="mt-3 space-y-1 text-sm text-muted-foreground">
              {v.bullets.map((b, i) => (
                <li key={i}>• {b}</li>
              ))}
            </ul>

            {v.href ? (
              <a className="mt-3 inline-block text-sm underline underline-offset-4" href={v.href} target="_blank" rel="noreferrer">
                Proof
              </a>
            ) : null}
          </div>
        ))}
      </div>
    </section>
  );
}
