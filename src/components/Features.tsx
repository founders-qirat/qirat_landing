import { GraduationCap, BookOpen, LayoutDashboard } from "lucide-react";

const FEATURES = [
  {
    title: "Certified Aalims",
    description: "Every instructor is rigorously vetted and trained in modern interactive pedagogy. We ensure teachers are not just scholars, but mentors.",
    icon: GraduationCap,
  },
  {
    title: "Holistic Curriculum",
    description: "Moving beyond basic reading to proper Tajweed, Tarjuma, and character building. A 360-degree approach to Islamic excellence.",
    icon: BookOpen,
  },
  {
    title: "Parent Portal",
    description: "Track daily attendance, recitation recordings, and Tajweed milestones in real-time. Full transparency into your child's spiritual growth.",
    icon: LayoutDashboard,
  }
];

export function Features() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {FEATURES.map((feature, idx) => (
          <div key={idx} className="space-y-6 group">
            <div className="w-14 h-14 bg-[#064E3B] text-white rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
              <feature.icon className="w-7 h-7" />
            </div>
            <div className="space-y-3">
              <h3 className="text-2xl font-bold font-headline">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed font-body">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}