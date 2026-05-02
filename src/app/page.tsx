import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { AssessmentCard } from "@/components/AssessmentCard";
import { Features } from "@/components/Features";
import { ScarcitySection } from "@/components/ScarcitySection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background selection:bg-[#F59E0B]/30 overflow-x-hidden">
      <Navigation />
      
      <main>
        <Hero />
        
        <AssessmentCard />

        <ScarcitySection />
        
        <Features />
      </main>

      <Footer />
    </div>
  );
}
