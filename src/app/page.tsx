import { Hero } from "@/components/sections/Hero";
import { MarqueeSection } from "@/components/sections/MarqueeSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { Skills } from "@/components/sections/Skills";
import { Experience } from "@/components/sections/Experience";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/layout/Footer";


export default function Home() {
  return (
    // overflow-x clip prevents marquee horizontal scroll bleed
    <div className="flex flex-col overflow-x-clip">
      {/* 1. Hero — full viewport, Jack style */}
      <Hero />

      {/* 2. Marquee — scroll-driven image rows */}
      <MarqueeSection />

      {/* 3. About — character animated text, 3D decorations */}
      <AboutSection />

      {/* 4. Services — white section, rounded top */}
      <ServicesSection />

      {/* 5. Projects — sticky stacking cards, dark, rounded top, pulled up */}
      <FeaturedProjects />

      {/* 6. Skills — existing component, works fine */}
      <Skills />

      {/* 7. Experience — existing component */}
      <Experience />

      {/* 8. Contact */}
      <Contact />
       <Footer />
    </div>
  );
}