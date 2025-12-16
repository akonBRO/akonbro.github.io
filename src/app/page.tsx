import Hero from "@/components/sections/hero";
import FeaturedProjects from "@/components/sections/featured-projects";
import Skills from "@/components/sections/skills";
import Education from "@/components/sections/education";
import Experience from "@/components/sections/experience";
import Leadership from "@/components/sections/leadership";
import Certifications from "@/components/sections/certifications";
import Awards from "@/components/sections/awards";
import Contact from "@/components/sections/contact";
import Volunteering from "@/components/sections/volunteering";

import Reveal from "@/components/motion/reveal";

export default function HomePage() {
  return (
    <div className="space-y-14 sm:space-y-20">
      {/* Hero block */}
      <section className="pt-6 sm:pt-10">
        <Reveal>
          <div className="animate-in fade-in slide-in-from-bottom-2 duration-500">
            <Hero />
          </div>
        </Reveal>
      </section>

      {/* Content blocks */}
      <Reveal><Education /></Reveal>
      <Reveal><FeaturedProjects /></Reveal>
      <Reveal><Experience /></Reveal>
      <Reveal><Skills /></Reveal>
      <Reveal><Leadership /></Reveal>
      <Reveal><Certifications /></Reveal>
      <Reveal><Awards /></Reveal>
      <Reveal><Volunteering /></Reveal>
      

      <section className="pb-6 sm:pb-10">
        <Reveal><Contact /></Reveal>
      </section>
    </div>
  );
}
