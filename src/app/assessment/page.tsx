import { Navigation } from "@/components/Navigation";
import { AssessmentCard } from "@/components/AssessmentCard";
import { Footer } from "@/components/Footer";

export default function AssessmentPage() {
  return (
    <div className="min-h-screen bg-background selection:bg-[#F59E0B]/30 overflow-x-hidden">
      <Navigation />
      
      <main className="pt-20">
        <AssessmentCard />
      </main>

      <Footer />
    </div>
  );
}
