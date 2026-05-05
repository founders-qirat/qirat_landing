import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Hero() {
  return (
    <section
      id="home"
      className="relative pt-28 pb-20 md:pt-40 md:pb-28 px-6 overflow-hidden"
    >
      <div className="max-w-5xl mx-auto text-center space-y-6 animate-fade-in">

        {/* 🔹 HEADLINE */}
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] font-headline text-foreground">
          Meaningful Islamic Education,{" "}
          <br className="hidden md:block" />
          <span className="text-[#064E3B]">
            Right From Home.
          </span>
        </h1>

        {/* 🔹 SUBTEXT */}
        <p className="text-lg md:text-2xl text-muted-foreground max-w-3xl mx-auto font-body leading-relaxed">
          Live, interactive sessions led by certified Aalims, designed to help your child recite with confidence, master Tajweed, and understand the Quran and Islamic teachings in a structured, engaging way.
        </p>

        {/* 🔹 CTA */}
        <div className="flex flex-col items-center space-y-4 pt-4">
          <Link href="/assessment">
            <Button
              size="lg"
              className="bg-[#F59E0B] hover:bg-[#D97706] text-white text-lg px-10 py-7 font-bold rounded-xl shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1"
            >
              Start Child Assessment & Enroll
            </Button>
          </Link>

          {/* 🔹 TRUST LINE */}
          <div className="flex items-center space-x-2 text-xs font-semibold tracking-wider text-[#064E3B]/70 uppercase">
            <span>Small Size Batches</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#064E3B]/20" />
            <span>₹2199/month</span>
          </div>
        </div>
      </div>

      {/* 🔹 BACKGROUND BLOBS */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-10 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#064E3B] rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#F59E0B] rounded-full blur-[120px]" />
      </div>
    </section>
  );
}