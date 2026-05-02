import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { ValueProps } from "@/components/ValueProps";
import { Methodology } from "@/components/Methodology";
import { Testimonials } from "@/components/Testimonials";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background selection:bg-[#F59E0B]/30 overflow-x-hidden">
      <Navigation />
      
      <main>
        <Hero />
        
        <ValueProps />
        
        <Methodology />
        
        <Testimonials />
      </main>

      <Footer />
    </div>
  );
}
