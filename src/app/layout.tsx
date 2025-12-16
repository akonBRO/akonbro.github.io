import type { Metadata } from "next";
import "./globals.css";

import { profile } from "@/content/profile";
import Navbar from "@/components/site/navbar";
import Footer from "@/components/site/footer";
import SmoothScroll from "@/components/ui/smooth-scroll";

import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";

export const metadata: Metadata = {
  title: `${profile.name} — Portfolio`,
  description: profile.about,
  openGraph: {
    title: `${profile.name} — Portfolio`,
    description: profile.about,
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`dark ${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="min-h-dvh bg-background text-foreground antialiased">
        <SmoothScroll>
          
          {/* BACKGROUND: classy vignettes + subtle dots */}
          <div className="pointer-events-none fixed inset-0 -z-10">
            {/* Base */}
            <div className="absolute inset-0 bg-background" />

            {/* Subtle dot pattern (very low opacity) */}
            <div className="absolute inset-0 opacity-[0.08]">
              <div className="h-full w-full bg-[radial-gradient(hsl(0_0%_100%/0.35)_1px,transparent_1px)] [background-size:22px_22px] [background-position:0_0]" />
            </div>

            {/* Soft top spotlight */}
            <div className="absolute inset-0 bg-[radial-gradient(120%_90%_at_50%_0%,rgba(255,255,255,0.07),transparent_55%)]" />

            {/* Bottom vignette for depth */}
            <div className="absolute inset-0 bg-[radial-gradient(140%_100%_at_50%_110%,rgba(0,0,0,0.70),transparent_55%)]" />
          </div>

          <Navbar />

          {/* FIX: Removed 'pt-4 sm:pt-6'. Now it has 0 top padding. */}
          {/* Only 'mt-4' added for a tiny logical gap, remove 'mt-4' if you want them touching. */}
          <main className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 mt-2 pb-14">
            {children}
          </main>

          <Footer />
          
        </SmoothScroll>
      </body>
    </html>
  );
}