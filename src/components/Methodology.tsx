



import { GraduationCap, BookOpen, LayoutDashboard } from "lucide-react";

const STEPS = [
  {
    title: "Certified Aalims",
    description:
      "Every instructor is rigorously vetted and trained in modern interactive pedagogy.",
    icon: GraduationCap,
  },
  {
    title: "Batch Plans & Pricing",
    description:
      "Moving beyond basic reading to proper Tajweed, Tarjuma, and character building. We provide a 360-degree approach to Islamic excellence that resonates with modern kids.",
    icon: BookOpen,
  },
];

// 👇 Teacher Data
const TEACHERS = [
  {
    name: "Ustadh Ahmed",
    qualification: "Alim, Darul Uloom",
    image: "images/male2_cr.png",
  },
  {
    name: "Ustadh Yusuf",
    qualification: "Hafiz + Tajweed Expert",
    image: "images/afghani_cr.png",
  },
  {
    name: "Ustadha Maryam",
    qualification: "Alima, Islamic Studies",
    image: "images/female_cr.png",
  }
];

export function Methodology() {
  return (
    <section id="curriculum" className="w-full">

      {/* 🔹 HERO SECTION */}
      <div className="min-h-screen flex items-center px-6 bg-[#064E3B]/5">
        <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-6xl font-bold font-headline text-[#064E3B] leading-tight">
              The Qirat Methodology
            </h2>

{/* <p className="text-xl text-muted-foreground font-body">
A complete Quran learning experience designed to help your child improve consistently with guided sessions, active practice, and clear progress you can see and hear.
</p> */}

<div className="space-y-5 text-[#064E3B] mt-6">

  <div>
    <p className="font-semibold">Live Quran Learning with Real-Time Correction</p>
    <p className="text-sm text-muted-foreground">
      Your child is heard, guided, and corrected instantly by a Muallima — ensuring proper pronunciation from day one.
    </p>
  </div>

  <div>
    <p className="font-semibold">Small, Focused Batches — No Child Left Behind</p>
    <p className="text-sm text-muted-foreground">
      Limited group sizes mean every child gets personal attention, not lost in a crowd.
    </p>
  </div>

  <div>
    <p className="font-semibold">Active Practice System (Not Just Listening)</p>
    <p className="text-sm text-muted-foreground">
      From live assignments to listen-and-repeat drills, your child stays actively engaged throughout.
    </p>
  </div>

  <div>
    <p className="font-semibold">Structured Progress You Can See & Hear</p>
    <p className="text-sm text-muted-foreground">
      Track progress with weekly feedback, reports, and recorded recitations.
    </p>
  </div>

  <div>
    <p className="font-semibold">From Qaida to Confidence — A Clear Learning Path</p>
    <p className="text-sm text-muted-foreground">
      A step-by-step system guiding your child from basics to fluent recitation with understanding.
    </p>
  </div>

  <div>
    <p className="font-semibold">Akhlaaq & Islamic Habit Building</p>
    <p className="text-sm text-muted-foreground">
      Beyond reading — we nurture discipline, Sunnah habits, and strong character.
    </p>
  </div>

  <div>
    <p className="font-semibold">Interactive Learning That Kids Enjoy</p>
    <p className="text-sm text-muted-foreground">
      Games, quizzes, and activities make learning engaging and enjoyable.
    </p>
  </div>

  <div>
    <p className="font-semibold">Complete Parent Transparency & Involvement</p>
    <p className="text-sm text-muted-foreground">
      Stay fully involved with clear visibility into performance, feedback, and improvement.
    </p>
  </div>

</div>
          </div>

          {/* RIGHT (VIDEO) */}
          <div className="w-full">
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-xl bg-black flex items-center justify-center">
              {/* <span className="text-white text-lg opacity-70">
                ▶️ Demo Video
              </span> */}
              <video
  src="/videos/Qirat_.mp4"
  controls
  autoPlay
  muted
  loop
  className="w-full h-full object-cover"
/>
            </div>
          </div>

        </div>
      </div>

      {/* 🔹 SECTIONS */}
{STEPS.map((step, idx) => (
 <div
    id={
      step.title === "Parent Portal"
        ? "parent-portal"
        : undefined
    }
    key={idx}
    className={`min-h-screen flex items-start justify-center px-6 pt-12 scroll-mt-24 ${
      idx % 2 === 0 ? "bg-white" : "bg-[#064E3B]/5"
    }`}
  >
    <div className="max-w-6xl w-full text-center space-y-4">

      {/* ICON */}
      <div className="w-20 h-20 mx-auto mb-4 bg-[#064E3B] text-white rounded-3xl flex items-center justify-center shadow-xl">
        <step.icon className="w-10 h-10" />
      </div>

      {/* TITLE */}
   <div className="space-y-2">
  <h2 className="text-4xl md:text-5xl font-bold font-headline text-[#064E3B]">
    {step.title}
  </h2>

  {step.title === "Certified Aalims" && (
    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
      Learn from qualified scholars who combine deep Islamic knowledge with modern teaching methods to guide students effectively.
    </p>
  )}
</div>

{/* 🔥 CONDITIONAL CONTENT */}

{step.title === "Certified Aalims" ? (

  <div
    id="aalims"
    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-20 mb-12 scroll-mt-80"
  >
    {TEACHERS.map((teacher, i) => (
      <div
        key={i}
        className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100 hover:scale-105 transition"
      >
        {/* IMAGE */}
        <div className="w-full h-56 bg-gray-200">
          <img
            src={teacher.image}
            alt={teacher.name}
            className="w-full h-full object-contain bg-gray-100"
          />
        </div>

        {/* CONTENT */}
        <div className="p-5 text-left space-y-2">
          <h4 className="font-semibold text-lg text-[#064E3B]">
            {teacher.name}
          </h4>
          <p className="text-sm text-muted-foreground">
            {teacher.qualification}
          </p>
        </div>
      </div>
    ))}
  </div>

)
 : step.title === "Batch Plans & Pricing" ? (

<div className="mt-16 flex justify-center">

  <div className="max-w-xl w-full">

    <div className="p-8 bg-[#064E3B] text-white rounded-3xl shadow-2xl text-center space-y-6">

      {/* Badge */}
      <span className="inline-block bg-yellow-400 text-black text-sm px-4 py-1 rounded-full font-medium">
        Most Popular
      </span>

      {/* Title */}
      <h3 className="text-2xl font-semibold">
        Complete Quran Learning Program
      </h3>

      {/* Price */}
      <p className="text-4xl font-bold">
        ₹2199 <span className="text-lg opacity-80">/ month</span>
      </p>

      {/* Features */}
      <ul className="space-y-2 text-sm opacity-90 text-left max-w-xs mx-auto">
        <li>✔ 3 classes per week</li>
        <li>✔ 45 min live sessions</li>
        <li>✔ Tajweed + Fluency</li>
        <li>✔ Progress tracking</li>
      <div className="h-px bg-white/20 my-3"></div>
      </ul>

      {/* CTA */}
      <a
        href="https://wa.me/+918383054768?text=Assalamu%20Alaikum%2C%20I%20am%20interested%20in%20your%20Quran%20program"
        target="_blank"
      >
        <button className="w-full bg-yellow-400 text-black py-3 rounded-lg font-semibold hover:scale-105 transition">
          Check Batch Availability
        </button>
      </a>

    </div>

  </div>

</div>

) 
: (

  <p className="text-xl text-muted-foreground leading-relaxed font-body max-w-2xl mx-auto mt-12">
    {step.description}
  </p>

)}

    </div>
  </div>
))}
    </section>
  );
}
