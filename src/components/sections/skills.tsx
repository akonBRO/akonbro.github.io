export default function Skills() {
  const groups = [
    { title: "Core", items: ["Python", "C/C++", "JavaScript", "SQL", "PHP"] },
    { title: "Web", items: ["React.js", "Tailwind CSS", "MERN", "HTML", "WordPress"] },
    { title: "ML/AI", items: ["Machine Learning", "Deep Learning", "PyTorch", "Feature Engineering"] },
    { title: "Tools/Hardware", items: ["Git", "GitHub", "Arduino IDE", "STM32", "Raspberry Pi"] },
    { title: "Soft skills", items: ["Leadership", "Teamwork", "Public Speaking", "Event Management"] },
  ];

  return (
    <section className="space-y-6">
      <h2 className="text-xl sm:text-2xl font-semibold tracking-tight">Skills</h2>
      <div className="grid gap-4 sm:grid-cols-2">
        {groups.map((g) => (
          <div key={g.title} className="rounded-xl border border-border p-5">
            <h3 className="font-medium">{g.title}</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {g.items.map((it) => (
                <span key={it} className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground">
                  {it}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
