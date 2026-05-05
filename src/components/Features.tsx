import { GraduationCap, BookOpen, LayoutDashboard, Check, Zap, Users, Target } from "lucide-react";

const FEATURES = [
  {
    title: "Certified Aalims",
    description: "Every instructor is rigorously vetted and trained in modern interactive pedagogy. We ensure teachers are not just scholars, but mentors who understand the psychology of online learning.",
    icon: GraduationCap,
  },
  {
    title: "Batch Plans & Pricing",
    description: "Moving beyond basic reading to proper Tajweed, Tarjuma, and character building. We provide a 360-degree approach to Islamic excellence that resonates with modern kids.",
    icon: BookOpen,
  },
  {
    title: "Parent Portal",
    description: "Track daily attendance, recitation recordings, and Tajweed milestones in real-time. Our dashboard provides full transparency into your child's spiritual and academic growth.",
    icon: LayoutDashboard,
  }
];

const VALUE_PROPS = [
  {
    title: "Proprietary Live Platform",
    description: "Our proprietary platform is built specifically for Quranic education with interactive whiteboard tools.",
    icon: Zap,
  },
  {
    title: "Small Batches",
    description: "We strictly cap our batches to ensure every child gets multiple opportunities to recite in every single session.",
    icon: Users,
  },
  {
    title: "Gamified Progress",
    description: "Students earn 'Noors' (points) for participation, which they can use to unlock badges and character customisations.",
    icon: Target,
  }
];

export function Features() {
  return (
    <section id="curriculum" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        {/* Left Column: Primary Features Stacked */}
        <div className="lg:col-span-7 space-y-8">
          <div className="space-y-4 mb-12">
            <h2 className="text-4xl font-bold font-headline text-[#064E3B]">The Qirat Methodology</h2>
            <p className="text-xl text-muted-foreground font-body max-w-xl">
              We've combined centuries of tradition with 21st-century educational technology.
            </p>
          </div>

          <div className="space-y-6">
            {FEATURES.map((feature, idx) => (
              <div 
                key={idx} 
                className="p-8 md:p-10 bg-white rounded-[2.5rem] border border-[#064E3B]/10 shadow-sm hover:shadow-md transition-all duration-300 group flex flex-col md:flex-row gap-8 items-start"
              >
                <div className="w-16 h-16 shrink-0 bg-[#064E3B] text-white rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-lg shadow-[#064E3B]/20">
                  <feature.icon className="w-8 h-8" />
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold font-headline text-[#064E3B]">{feature.title}</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed font-body">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Core Value Propositions */}
        <div className="lg:col-span-5 space-y-12 lg:sticky lg:top-32 pt-12 lg:pt-24">
          <div className="bg-[#064E3B]/5 rounded-[2.5rem] p-10 border border-[#064E3B]/10">
            <h3 className="text-2xl font-bold font-headline text-[#064E3B] mb-8 flex items-center gap-3">
              <Check className="w-6 h-6 text-[#F59E0B]" />
              Core Value Propositions
            </h3>
            
            <div className="space-y-10">
              {VALUE_PROPS.map((prop, idx) => (
                <div key={idx} className="flex gap-6">
                  <div className="w-12 h-12 rounded-xl bg-white border border-[#064E3B]/10 flex items-center justify-center shrink-0 shadow-sm">
                    <prop.icon className="w-6 h-6 text-[#064E3B]" />
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-bold text-lg text-[#064E3B]">{prop.title}</h4>
                    <p className="text-muted-foreground leading-snug">
                      {prop.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 pt-8 border-t border-[#064E3B]/10">
              <p className="text-sm font-bold text-[#064E3B]/60 uppercase tracking-widest mb-4">Batch Status</p>
              <div className="flex items-center gap-4">
                <div className="h-2 flex-1 bg-slate-200 rounded-full overflow-hidden">
                  <div className="h-full bg-[#F59E0B] w-[85%]" />
                </div>
                <span className="text-sm font-bold text-[#064E3B]">85% Full</span>
              </div>
              <p className="text-xs text-muted-foreground mt-2 italic">Next cohort starts in 4 days</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
