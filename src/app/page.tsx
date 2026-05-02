import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { PlatformVideo } from "@/components/PlatformVideo";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background selection:bg-[#F59E0B]/30 overflow-x-hidden">
      <Navigation />
      
      <main>
        <Hero />
        
        <PlatformVideo />
        
        <Features />
      </main>

      <Footer />
    </div>
  );
}
