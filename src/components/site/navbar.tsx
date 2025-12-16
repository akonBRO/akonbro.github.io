"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

const links = [
  { href: "/#projects", label: "Projects" },
  { href: "/#experience", label: "Experience" },
  { href: "/#leadership", label: "Leadership" },
  { href: "/achievements", label: "Achievements" },
  { href: "/certifications", label: "Certifications" },
];

function isActive(pathname: string, href: string) {
  if (href.startsWith("/#")) return false; // hash links are not real routes
  if (href === "/") return pathname === "/";
  return pathname.startsWith(href);
}

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50">
      <div className="border-b border-border/60 bg-background/60 backdrop-blur supports-[backdrop-filter]:bg-background/50">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <Link href="/" className="font-semibold tracking-tight">
            akon.dev
          </Link>

          {/* Desktop pill nav */}
          <nav className="hidden sm:flex items-center gap-1 rounded-full border border-border/60 bg-card/20 p-1 text-sm">
            {links.map((l) => {
              const active = isActive(pathname, l.href);
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className={[
                    "rounded-full px-4 py-2 transition",
                    "text-muted-foreground hover:text-foreground hover:bg-accent/40",
                    active ? "bg-accent/60 text-foreground" : "",
                  ].join(" ")}
                >
                  {l.label}
                </Link>
              );
            })}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-2">
            <Link
              href="/Md. Sabbir Akon_CV.pdf"
              className="hidden sm:inline-flex rounded-full border border-border/60 bg-card/20 px-4 py-2 text-sm font-medium hover:bg-accent/40 transition"
            >
              Resume
            </Link>

            {/* Mobile menu */}
            <div className="sm:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <button className="rounded-full border border-border/60 bg-card/20 px-4 py-2 text-sm font-medium hover:bg-accent/40 transition">
                    Menu
                  </button>
                </SheetTrigger>

                <SheetContent side="right" className="w-[320px]">
                  <SheetHeader>
                    <SheetTitle>Navigation</SheetTitle>
                  </SheetHeader>

                  <div className="mt-6 grid gap-2">
                    {links.map((l) => (
                      <a
                        key={l.href}
                        href={l.href}
                        className="rounded-xl border border-border/60 bg-card/20 px-4 py-3 text-sm hover:bg-accent/40 transition"
                      >
                        {l.label}
                      </a>
                    ))}

                    <a
                      href="/Md. Sabbir Akon_CV.pdf"
                      className="mt-2 rounded-xl bg-foreground text-background px-4 py-3 text-sm font-medium hover:opacity-90 transition"
                    >
                      Download resume
                    </a>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
