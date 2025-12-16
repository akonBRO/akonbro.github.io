import Link from "next/link";
import { certifications } from "@/content/certifications";

export default function Certifications() {
  const top = certifications.slice(0, 6);
  return (
    <section className="space-y-6">
      <div className="flex items-end justify-between gap-4">
        <h2 className="text-xl sm:text-2xl font-semibold tracking-tight">Certifications</h2>
        <Link className="text-sm text-muted-foreground hover:text-foreground" href="/certifications">
          View all
        </Link>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {top.map((c) => (
          <div key={c.href} className="rounded-xl border border-border p-5">
            <div className="text-xs text-muted-foreground">{c.issuer} • {c.issued}</div>
            <div className="mt-2 font-medium">{c.title}</div>
            <a className="mt-3 inline-block text-sm underline underline-offset-4" href={c.href} target="_blank" rel="noreferrer">
              Credential
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
