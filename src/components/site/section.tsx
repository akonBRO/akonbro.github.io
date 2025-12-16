export default function Section({
  title,
  id,
  children,
}: {
  title: string;
  id?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24">
      <div className="mb-5 flex items-end justify-between gap-4">
        <h2 className="text-xl sm:text-2xl font-semibold tracking-tight">{title}</h2>
        <div className="h-px flex-1 bg-border/40" />
      </div>
      {children}
    </section>
  );
}
