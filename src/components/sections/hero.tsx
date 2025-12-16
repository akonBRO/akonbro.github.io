"use client";

import Image from "next/image";
import Link from "next/link";
import { profile } from "@/content/profile";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden rounded-[2rem] border border-border/60 bg-background/40 p-8 sm:p-12 backdrop-blur-sm">
      {/* --- GLOW EFFECTS (slightly stronger + layered) --- */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-indigo-500/14 blur-3xl" />
        
        <div className="absolute left-1/2 top-[-140px] h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-sky-500/8 blur-3xl" />
      </div>

      {/* subtle noise overlay (premium texture without images) */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.06] mix-blend-overlay">
        <div className="h-full w-full bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.35)_1px,transparent_0)] [background-size:18px_18px]" />
      </div>

      <div className="relative flex flex-col gap-10">
        {/* --- TOP ROW: PROFILE & INTRO --- */}
        <div className="flex flex-col-reverse lg:flex-row lg:items-start lg:justify-between gap-8">
          {/* LEFT: TEXT CONTENT */}
          <div className="flex-1 flex flex-col items-start gap-6">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/30 px-3 py-1.5 text-xs font-medium text-muted-foreground">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
              </span>
              Dhaka, Bangladesh • Open to opportunities
            </div>

            {/* Headlines */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
                {profile.name}
              </h1>

              <h2 className="text-2xl sm:text-3xl font-medium text-muted-foreground">
                <span className="bg-gradient-to-r from-indigo-300 via-fuchsia-300 to-sky-300 bg-clip-text text-transparent">
                  {profile.headline}
                </span>
              </h2>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              {/* FIX: use /#projects so it works from any route */}
              <Link
                href="/#projects"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background hover:opacity-90 transition-opacity"
              >
                View Projects
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>

              <a
                href="/s"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-border/60 bg-card/30 px-6 py-3 text-sm font-medium hover:bg-accent/50 transition-colors"
              >
                Resume <Download className="h-4 w-4" />
              </a>

              {/* Social Icons Row */}
              <div className="flex items-center gap-4 pl-4 border-l border-border/40 ml-1">
                <a
                  href={profile.links.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub profile"
                  className="text-muted-foreground hover:text-foreground transition-colors transition-transform hover:scale-110"
                >
                  <Github className="h-5 w-5" />
                </a>

                <a
                  href={profile.links.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn profile"
                  className="text-muted-foreground hover:text-foreground transition-colors transition-transform hover:scale-110"
                >
                  <Linkedin className="h-5 w-5" />
                </a>

                <a
                  href={`mailto:${profile.email}`}
                  aria-label="Send email"
                  className="text-muted-foreground hover:text-foreground transition-colors transition-transform hover:scale-110"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Small “proof” line (premium detail, optional) */}
          
          </div>

          {/* RIGHT: IMAGE */}
          <div className="relative shrink-0 w-full sm:max-w-[320px] lg:w-[250px]">
            {/* Glow behind image */}
            <div className="absolute -inset-3 bg-gradient-to-b from-indigo-500/25 via-fuchsia-500/15 to-transparent blur-2xl rounded-[2rem]" />

            <div className="group relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] border border-border/60 bg-muted shadow-2xl">
              {/* subtle ring on hover */}
              <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute inset-0 ring-1 ring-white/15" />
              </div>

              <Image
                src="/me.jpg"
                alt={profile.name}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 360px"
                className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
              />
            </div>
          </div>
        </div>

        {/* --- BOTTOM ROW: ABOUT (still inside hero) --- */}
        <div className="w-full rounded-2xl border border-border/50 bg-card/20 p-6 sm:p-8 backdrop-blur-md transition-colors hover:border-border/70">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">
            About Me
          </h3>

          <div className="space-y-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
            <p>
              I'm a dedicated <strong className="text-foreground font-medium">Computer Science & Engineering student</strong>{" "} with a strong passion for
technology and innovation. I actively explore programming, focusing on Python, and
apply my skills to solve real-world challenges. I have developed strong organizational
and leadership skills through my experience in managing diverse projects and
collaborating with teams. Beyond academics, I'm an avid football enthusiast, embracing
discipline and collaboration on and off the field. I have also earned national recognition
for innovative science projects, showcasing my drive for impactful contributions in the
field of technology
            </p>
            <p>
              Outside tech,football and sports are a big part of my
              life, they’ve taught me consistency, discipline, and staying calm under pressure. I’m currently looking for{" "}
              <span className="text-foreground  decoration-indigo-500/30">
                internship or junior developer opportunities
              </span>{" "}
              (remote or on‑site) where I can contribute fast and grow with strong mentorship.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
