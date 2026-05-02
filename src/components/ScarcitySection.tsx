import { ShieldCheck } from "lucide-react";

export function ScarcitySection() {
  return (
    <section className="py-20 px-6 bg-white/50 border-y">
      <div className="max-w-4xl mx-auto">
        <div className="bg-[#064E3B]/5 rounded-3xl p-8 md:p-12 border border-[#064E3B]/10 relative overflow-hidden group">
          <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start">
            <div className="bg-[#064E3B] p-4 rounded-2xl text-white">
              <ShieldCheck className="w-8 h-8" />
            </div>
            
            <div className="space-y-4">
              <h2 className="text-3xl font-bold font-headline text-[#064E3B]">
                Why our batches fill up so quickly.
              </h2>
              <p className="text-lg text-[#064E3B]/80 font-body leading-relaxed">
                Traditional online classes leave 9 kids idle while 1 recites. Qirat is different. 
                Our proprietary live platform uses peer-review mechanics and interactive exercises 
                to keep all 10 students actively learning simultaneously. To maintain this premium standard, 
                we strictly cap our cohorts.
              </p>
            </div>
          </div>
          
          {/* Subtle texture */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#064E3B]/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-110 transition-transform duration-700" />
        </div>
      </div>
    </section>
  );
}