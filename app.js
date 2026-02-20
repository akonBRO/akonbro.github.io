(function () {
  const data = window.SITE_DATA;
  if (!data) return;

  const $ = (sel, root = document) => root.querySelector(sel);

  const esc = (s) =>
    String(s ?? "").replace(/[&<>"']/g, (c) => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    }[c]));

  // Simple reveal for dynamically injected elements
  const dynObs = new IntersectionObserver(
    (entries) => entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("up");
        dynObs.unobserve(e.target);
      }
    }),
    { threshold: 0.08 }
  );
  function observeNewReveals(root = document) {
    root.querySelectorAll(".reveal:not(.up)").forEach((el) => dynObs.observe(el));
  }

  // ---------- Skills ----------
  const skillsHost = $("#skillsGrid");
  if (skillsHost && Array.isArray(data.skills)) {
    skillsHost.innerHTML = data.skills.map((s, i) => `
      <div class="skill-card reveal reveal-delay-${Math.min(4, i + 1)}">
        <div class="skill-card-icon">
          <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 2a15.3 15.3 0 010 20M2 12h20"/></svg>
        </div>
        <div class="skill-cat">${esc(s.category)}</div>
        <div class="skill-tags">
          ${(s.tags || []).map(t => `<span class="stag">${esc(t)}</span>`).join("")}
        </div>
      </div>
    `).join("");
  }

  // ---------- Featured projects (homepage) ----------
  const featuredHost = $("#featuredProjectsGrid");
  if (featuredHost && Array.isArray(data.projects)) {
    const featured = data.projects.slice(0, 6);
    const catClass = (c) => ({
      ml: "cat-ml",
      web: "cat-web",
      robotics: "cat-robotics",
      other: "cat-other",
    }[c] || "cat-other");

    featuredHost.innerHTML = featured.map((p, i) => `
      <div class="proj-card reveal reveal-delay-${Math.min(4, i + 1)}">
        <div class="proj-cat-badge ${catClass(p.category)}">${esc(p.categoryLabel || p.category || "Project")}</div>
        <div class="proj-title">${esc(p.title)}</div>
        <div class="proj-desc">${esc((p.bullets && p.bullets[0]) || p.description || "Details on the projects page.")}</div>
        <div class="proj-stack">
          ${(p.stack || []).slice(0, 5).map(t => `<span class="proj-tag">${esc(t)}</span>`).join("")}
        </div>
        <div class="proj-links">
          ${(p.links || []).slice(0, 2).map(l => `
            <a class="proj-link" href="${esc(l.href)}" target="_blank" rel="noopener">
              <svg viewBox="0 0 24 24"><path d="M14 3h7v7"></path><path d="M10 14L21 3"></path><path d="M21 14v7h-7"></path><path d="M3 10V3h7"></path><path d="M3 21h7"></path></svg>
              ${esc(l.label || "Link")}
            </a>
          `).join("")}
        </div>
      </div>
    `).join("");
  }

  // ---------- Experience ----------
  const expHost = $("#experienceTimeline");
  if (expHost && Array.isArray(data.experience)) {
    expHost.innerHTML = data.experience.map((e, i) => `
      <div class="tl-item reveal reveal-delay-${Math.min(4, i + 1)}">
        <div class="tl-period">${esc(e.period)}</div>
        <div class="tl-role">${esc(e.title)}</div>
        <div class="tl-org">${esc(e.org)}</div>
        <ul class="tl-bullets">
          ${(e.bullets || []).map(b => `<li>${esc(b)}</li>`).join("")}
        </ul>
      </div>
    `).join("");
  }

  // ---------- Education ----------
  const eduHost = $("#educationList");
  if (eduHost && Array.isArray(data.education)) {
    eduHost.innerHTML = data.education.map((ed, i) => `
      <div class="edu-card reveal reveal-delay-${Math.min(4, i + 1)}">
        <div class="edu-year">${esc(ed.year)}</div>
        <div class="edu-degree">${esc(ed.degree)}</div>
        <div class="edu-school">${esc(ed.school)}</div>
        ${ed.note ? `<div class="edu-note">${esc(ed.note)}</div>` : ""}
      </div>
    `).join("");
  }

  // ---------- Leadership ----------
  const leadHost = $("#leadershipGrid");
  if (leadHost && Array.isArray(data.leadership)) {
    leadHost.innerHTML = data.leadership.map((l, i) => `
      <div class="lead-card reveal reveal-delay-${Math.min(4, i + 1)}">
        <div class="lead-org">${esc(l.org)}</div>
        ${(l.roles || []).map(r => `
          <div class="lead-role-row">
            <div class="lead-role-title">${esc(r.title)}</div>
            <div class="lead-role-period">${esc(r.period)}</div>
          </div>
        `).join("")}
        ${Array.isArray(l.bullets) && l.bullets.length ? `
          <ul class="lead-bullets">
            ${l.bullets.map(b => `<li>${esc(b)}</li>`).join("")}
          </ul>
        ` : ""}
      </div>
    `).join("");
  }

  // ---------- Achievements ----------
  const achHost = $("#achievementsGrid");
  if (achHost && Array.isArray(data.achievements)) {
    const toCat = (c) => String(c || "").toLowerCase();
    achHost.innerHTML = data.achievements.map((a, i) => `
      <div class="ach-card reveal reveal-delay-${Math.min(4, i + 1)}" data-cat="${esc(toCat(a.category))}">
        <div class="ach-icon ${esc(toCat(a.category) === "sports" ? "sports" : "tech")}">
          <svg viewBox="0 0 24 24"><path d="M8 21h8"></path><path d="M12 17v4"></path><path d="M7 4h10"></path><path d="M17 4v4a5 5 0 01-10 0V4"></path></svg>
        </div>
        <div class="ach-title">${esc(a.title)}</div>
        ${a.issuer ? `<div class="ach-issuer">${esc(a.issuer)}</div>` : ""}
        ${a.date ? `<div class="ach-date">${esc(a.date)}</div>` : ""}
      </div>
    `).join("");

    // Fix: class "data-cat" isn't needed; keep actual .ach-card selector used by filterAch.
    // (We'll ensure the injected cards match existing filterAch function.)
    achHost.querySelectorAll(".ach-card").forEach(card => {
      if (!card.dataset.cat) card.dataset.cat = "tech";
    });
  }

  // ---------- Certifications ----------
  const certHost = $("#certsGrid");
  if (certHost && Array.isArray(data.certifications)) {
    certHost.innerHTML = data.certifications.map((c, i) => `
      <div class="cert-card reveal reveal-delay-${Math.min(4, i + 1)}">
        <div class="cert-issuer">${esc(c.issuer)}</div>
        <div class="cert-title">${esc(c.title)}</div>
        <div class="cert-footer">
          <div class="cert-date">${esc(c.date || "")}</div>
          ${c.link ? `
            <a class="cert-link" href="${esc(c.link)}" target="_blank" rel="noopener">
              View
              <svg viewBox="0 0 24 24"><path d="M14 3h7v7"></path><path d="M10 14L21 3"></path><path d="M21 14v7h-7"></path><path d="M3 10V3h7"></path></svg>
            </a>
          ` : ""}
        </div>
      </div>
    `).join("");
  }

  // ---------- Volunteering ----------
  const volHost = $("#volGrid");
  if (volHost && Array.isArray(data.volunteering)) {
    volHost.innerHTML = data.volunteering.map((v, i) => `
      <div class="vol-card reveal reveal-delay-${Math.min(4, i + 1)}">
        <div class="vol-icon">
          <svg viewBox="0 0 24 24"><path d="M20 12a8 8 0 11-16 0 8 8 0 0116 0z"></path><path d="M12 6v6l4 2"></path></svg>
        </div>
        <div>
          <div class="vol-org">${esc(v.org)}</div>
          <div class="vol-role">${esc(v.role)}</div>
          <div class="vol-period">${esc(v.period)}</div>
        </div>
      </div>
    `).join("");
  }

  // Observe dynamically created reveal nodes
  observeNewReveals(document);
})();
