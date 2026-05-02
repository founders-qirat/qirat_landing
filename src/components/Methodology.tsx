import { GraduationCap, BookOpen, LayoutDashboard } from "lucide-react";

const STEPS = [
  {
    title: "Certified Aalims",
    description: "Every instructor is rigorously vetted and trained in modern interactive pedagogy. We ensure teachers are not just scholars, but mentors who understand the psychology of online learning.",
    icon: GraduationCap,
  },
  {
    title: "Holistic Curriculum",
    description: "Moving beyond basic reading to proper Tajweed, Tarjuma, and character building. We provide a 360-degree approach to Islamic excellence that resonates with modern kids.",
    icon: BookOpen,
  },
  {
    title: "Parent Portal",
    description: "Track daily attendance, recitation recordings, and Tajweed milestones in real-time. Our dashboard provides full transparency into your child's spiritual and academic growth.",
    icon: LayoutDashboard,
  }
];

export function Methodology() {
  return (
    <section id="curriculum" className="py-24 px-6 bg-[#064E3B]/5">
      <div className="max-w-4xl mx-auto space-y-16">
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold font-headline text-[#064E3B]">The Qirat Methodology</h2>
          <p className="text-xl text-muted-foreground font-body max-w-2xl mx-auto">
            Combining centuries of tradition with 21st-century educational technology to create an immersive learning journey.
          </p>
        </div>

        <div className="space-y-8">
          {STEPS.map((step, idx) => (
            <div 
              key={idx} 
              className="p-8 md:p-12 bg-white rounded-[3rem] border border-[#064E3B]/10 shadow-sm hover:shadow-xl transition-all duration-500 group flex flex-col md:flex-row gap-10 items-start md:items-center"
            >
              <div className="w-20 h-20 shrink-0 bg-[#064E3B] text-white rounded-3xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-xl shadow-[#064E3B]/20">
                <step.icon className="w-10 h-10" />
              </div>
              <div className="space-y-4">
                <h3 className="text-3xl font-bold font-headline text-[#064E3B]">{step.title}</h3>
                <p className="text-xl text-muted-foreground leading-relaxed font-body">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
