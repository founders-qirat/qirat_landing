import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-[#064E3B] text-white py-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div className="lg:col-span-2 space-y-6">
          <h2 className="text-3xl font-bold font-headline tracking-tight">Qirat Academy</h2>
          <p className="text-xl text-white/70 max-w-md font-body italic">
            "Assalamu Alaikum. Qirat was built to bridge the gap between traditional Islamic values and modern education. Premium learning, accessible from anywhere."
          </p>
        </div>
        
        <div className="space-y-4">
          <h4 className="font-bold uppercase tracking-wider text-xs text-white/50">Company</h4>
          <ul className="space-y-2">
            <li><Link href="#" className="hover:text-[#F59E0B] transition-colors">About Us</Link></li>
            <li><Link href="#" className="hover:text-[#F59E0B] transition-colors">Our Methodology</Link></li>
            <li><Link href="#" className="hover:text-[#F59E0B] transition-colors">Careers</Link></li>
          </ul>
        </div>
        
        <div className="space-y-4">
          <h4 className="font-bold uppercase tracking-wider text-xs text-white/50">Support</h4>
          <ul className="space-y-2">
            <li><Link href="#" className="hover:text-[#F59E0B] transition-colors">Contact Us: founders@qirat.in</Link></li>
            <li><Link href="#" className="hover:text-[#F59E0B] transition-colors">Privacy Policy</Link></li>
            <li><Link href="#" className="hover:text-[#F59E0B] transition-colors">Terms of Service</Link></li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-white/50 text-sm">
        <p>© {new Date().getFullYear()} Qirat Academy. All rights reserved.</p>
        <div className="flex space-x-6">
          <span>Built for the Ummah.</span>
        </div>
      </div>
    </footer>
  );
}