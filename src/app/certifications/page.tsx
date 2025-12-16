import { certifications } from "@/content/certifications";

export default function CertificationsPage() {
  return (
    <div className="py-10 sm:py-14 space-y-8">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">Certifications</h1>
        <p className="text-muted-foreground">Verified credentials with direct links.</p>
      </header>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((c) => (
          <div key={c.href} className="rounded-xl border border-border p-5">
            <div className="text-xs text-muted-foreground">{c.issuer} • {c.issued}</div>
            <div className="mt-2 font-semibold">{c.title}</div>
            <a className="mt-3 inline-block text-sm underline underline-offset-4" href={c.href} target="_blank" rel="noreferrer">
              View credential
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
