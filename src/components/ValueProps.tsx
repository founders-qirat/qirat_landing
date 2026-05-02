import { Zap, Users, Target, Check } from "lucide-react";

const VALUE_PROPS = [
  {
    title: "Proprietary Live Platform",
    description: "Unlike Zoom or Meet, our platform is built specifically for Quranic education with interactive whiteboard tools.",
    icon: Zap,
  },
  {
    title: "1:10 Teacher Ratio",
    description: "We strictly cap our batches to ensure every child gets multiple opportunities to recite in every single session.",
    icon: Users,
  },
  {
    title: "Gamified Progress",
    description: "Students earn 'Noors' (points) for participation, which they can use to unlock badges and character customisations.",
    icon: Target,
  }
];

export function ValueProps() {
  return (
    <section className="py-24 px-6 bg-white border-y border-[#064E3B]/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5 space-y-6">
            <h2 className="text-4xl font-bold font-headline text-[#064E3B] leading-tight">
              Why Qirat is the <span className="text-[#F59E0B]">Premium</span> Choice
            </h2>
            <p className="text-xl text-muted-foreground font-body">
              Traditional online classes leave kids idle. Qirat is engineered for active engagement and measurable spiritual growth.
            </p>
            
            <div className="pt-8 border-t border-[#064E3B]/10">
              <p className="text-sm font-bold text-[#064E3B]/60 uppercase tracking-widest mb-4">Live Batch Status</p>
              <div className="flex items-center gap-4">
                <div className="h-2 flex-1 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-[#F59E0B] w-[85%]" />
                </div>
                <span className="text-sm font-bold text-[#064E3B]">85% Full</span>
              </div>
              <p className="text-xs text-muted-foreground mt-2 italic">Next cohort starts in 4 days</p>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
            {VALUE_PROPS.map((prop, idx) => (
              <div key={idx} className={idx === 0 ? "md:col-span-2" : ""}>
                <div className="h-full p-8 bg-[#064E3B]/5 rounded-[2.5rem] border border-[#064E3B]/10 hover:border-[#F59E0B]/30 transition-all group">
                  <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                    <prop.icon className="w-6 h-6 text-[#064E3B]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#064E3B] mb-3">{prop.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {prop.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
