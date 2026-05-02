import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { PlatformVideo } from "@/components/PlatformVideo";
import { AssessmentCard } from "@/components/AssessmentCard";
import { Features } from "@/components/Features";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background selection:bg-[#F59E0B]/30 overflow-x-hidden">
      <Navigation />
      
      <main>
        <Hero />
        
        <AssessmentCard />

        <PlatformVideo />
        
        <Features />
        
        {/* Additional minimal section to increase whitespace and quality feel */}
        <section className="py-32 px-6 text-center max-w-4xl mx-auto space-y-12">
          <div className="inline-block px-4 py-1.5 bg-[#064E3B]/5 rounded-full text-[#064E3B] text-sm font-bold tracking-tight mb-4">
            LIVE ADMISSIONS OPEN
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-headline text-[#064E3B]">
            Your child deserves more than just reading.
          </h2>
          <p className="text-xl text-muted-foreground font-body leading-relaxed">
            We don't just teach the text. We cultivate a deep, lasting connection to the message of Allah through modern, interactive pedagogy that actually works.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
}
