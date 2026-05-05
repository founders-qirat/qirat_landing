
"use client"

import { Star } from "lucide-react";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const TESTIMONIALS = [
  {
    name: "Sarah Ahmed",
    location: "Greater Noida, IN",
    quote: "ng a teacher who understands kids' psychology was our biggest hurdle. At Qirat, the Aalims are so patient. My daughter actually looks forward to her Tajweed sessions now!Finding the right teacher for my child wasn’t easy. What stood out at Qirat was how patient and understanding the Aalims are. My daughter genuinely looks forward to her Tajweed classes now.",
    avatar: PlaceHolderImages.find(img => img.id === "parent-1")?.imageUrl,
  },
  {
    name: "Omar Siddiqui",
    location: "Dubai, UAE",
    quote: "I've sat through sessions and my son recites multiple times. The interactive dashboard for parents is also a very helpful.",
    avatar: PlaceHolderImages.find(img => img.id === "parent-2")?.imageUrl,
  },
  {
    name: "Fatima Khan",
    location: "Indore, IN",
    quote: "We've tried few different online platforms before Qirat. This is the first time we're seeing real progress in Tarjuma and character building, not just robotic reading.",
    avatar: PlaceHolderImages.find(img => img.id === "parent-3")?.imageUrl,
  }
];

export function Testimonials() {
  return (
    <section className="py-24 px-6 bg-[#064E3B]/5 border-y border-[#064E3B]/10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold font-headline text-[#064E3B]">
            Trusted by Parents Globally
          </h2>
          <p className="text-xl text-muted-foreground font-body max-w-2xl mx-auto">
            Join 100+ families from the UK, USA, UAE, and India who have chosen Qirat for their child's Islamic excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <div 
              key={idx} 
              className="bg-white p-8 rounded-[2rem] border border-[#064E3B]/5 shadow-xl shadow-[#064E3B]/5 flex flex-col justify-between"
            >
              <div className="space-y-6">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#F59E0B] text-[#F59E0B]" />
                  ))}
                </div>
                <p className="text-lg text-[#064E3B]/90 font-body leading-relaxed italic">
                  "{t.quote}"
                </p>
              </div>
              
              <div className="mt-8 flex items-center gap-4 border-t border-slate-50 pt-6">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-slate-100 relative">
                  {t.avatar && (
                    <Image 
                      src={t.avatar} 
                      alt={t.name}
                      fill
                      className="object-cover"
                    />
                  )}
                </div>
                <div>
                  <h4 className="font-bold text-[#064E3B]">{t.name}</h4>
                  <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">
                    {t.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
