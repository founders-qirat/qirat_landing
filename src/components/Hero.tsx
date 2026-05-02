import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">
      <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground leading-[1.1] font-headline">
          Meaningful Islamic Education, <br className="hidden md:block" />
          <span className="text-[#064E3B]">Right From Home.</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto font-body leading-relaxed">
          Live, interactive 45-minute sessions led by certified Aalims. We teach Quran, Tajweed, and Tarjuma in a collaborative, gamified environment.
        </p>

        <div className="flex flex-col items-center space-y-4">
          <Button 
            size="lg" 
            className="bg-[#F59E0B] hover:bg-[#D97706] text-white text-lg px-10 py-7 font-bold rounded-xl shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1"
          >
            Start Child Assessment & Enroll
          </Button>
          
          <div className="flex items-center space-x-2 text-xs font-semibold tracking-wider text-[#064E3B]/70 uppercase">
            <span>Strict 1:10 Teacher-to-Student Ratio</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#064E3B]/20" />
            <span>₹1599/month</span>
          </div>
        </div>
      </div>
      
      {/* Decorative subtle background element */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-10 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#064E3B] rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#F59E0B] rounded-full blur-[120px]" />
      </div>
    </section>
  );
}