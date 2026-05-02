"use client"

import { Play } from "lucide-react";

export function PlatformVideo() {
  return (
    <section className="py-24 px-6 bg-white/50 border-y">
      <div className="max-w-5xl mx-auto space-y-12">
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold font-headline text-[#064E3B]">
            See the Qirat Experience in Action
          </h2>
          <p className="text-lg text-muted-foreground font-body">
            Watch how our interactive platform keeps students engaged, focused, and excited about learning the Quran.
          </p>
        </div>

        <div className="relative aspect-video w-full rounded-3xl overflow-hidden shadow-2xl border-8 border-white bg-slate-200 group cursor-pointer">
          {/* Placeholder for actual video embed */}
          <div className="absolute inset-0 flex items-center justify-center bg-[#064E3B]/10 group-hover:bg-[#064E3B]/20 transition-colors">
            <div className="w-20 h-20 bg-[#F59E0B] rounded-full flex items-center justify-center text-white shadow-xl transform group-hover:scale-110 transition-transform duration-300">
              <Play className="w-8 h-8 fill-current ml-1" />
            </div>
          </div>
          
          <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end">
            <div className="bg-black/40 backdrop-blur-md px-4 py-2 rounded-lg text-white text-sm font-medium">
              Live Session: Tajweed Level 2
            </div>
          </div>

          {/* This is where the iframe or video tag would go later */}
          <div className="w-full h-full flex items-center justify-center text-[#064E3B]/40 font-bold text-xl uppercase tracking-widest italic">
            Platform Preview Video Placeholder
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8">
          {[
            { label: "Active Participation", value: "100%" },
            { label: "Student Batch Size", value: "1:10" },
            { label: "Avg. Session Time", value: "45m" },
            { label: "Interactive Tools", value: "15+" }
          ].map((stat, i) => (
            <div key={i} className="text-center space-y-1">
              <div className="text-2xl font-bold text-[#064E3B]">{stat.value}</div>
              <div className="text-xs uppercase tracking-wider font-bold text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
