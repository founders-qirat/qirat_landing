


// "use client"

// import Link from "next/link";
// import { Button } from "@/components/ui/button";
// import { cn } from "@/lib/utils";
// import { useEffect, useState } from "react";

// export function Navigation() {
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 20);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <nav
//       className={cn(
//         "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 lg:px-12",
//         scrolled
//           ? "bg-background/80 backdrop-blur-md border-b py-3"
//           : "bg-transparent py-6"
//       )}
//     >
//       <div className="max-w-7xl mx-auto flex items-center justify-between">

//         {/* 🔹 LOGO (HOME SCROLL FIXED) */}
//         <Link
//           href="/#home"
//           className="flex items-center space-x-2"
//         >
//           <span className="text-2xl font-bold tracking-tight text-[#064E3B] font-headline hover:opacity-80 transition">
//             Qirat
//           </span>
//         </Link>

//         {/* 🔹 NAV LINKS */}
//         <div className="hidden md:flex items-center space-x-8">
//           <Link
//             href="/#curriculum"
//             className="text-sm font-medium hover:text-[#064E3B] transition-colors"
//           >
//             Curriculum
//           </Link>

//           <Link
//             href="/#aalims"
//             className="text-sm font-medium hover:text-[#064E3B] transition-colors"
//           >
//             Our Aalims
//           </Link>

//           <Link
//             href="/#parent-portal"
//             className="text-sm font-medium hover:text-[#064E3B] transition-colors"
//           >
//             Parent Portal
//           </Link>
//         </div>

//         {/* 🔹 CTA BUTTON */}
//         <div>
//           <Link href="/assessment">
//             <Button
//               className="bg-[#F59E0B] hover:bg-[#D97706] text-white font-semibold rounded-md shadow-sm transition-all hover:scale-105"
//               size="sm"
//             >
//               Check Batch Availability
//             </Button>
//           </Link>
//         </div>

//       </div>
//     </nav>
//   );
// }





"use client"

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 lg:px-12",
        scrolled
          ? "bg-background/80 backdrop-blur-md border-b py-3"
          : "bg-transparent py-6"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">

        {/* 🔹 LOGO */}
        <Link
          href="/#home"
          className="text-2xl font-bold tracking-tight text-[#064E3B] font-headline hover:opacity-80 transition"
        >
          Qirat
        </Link>

        {/* 🔹 NAV LINKS */}
        <div className="hidden md:flex items-center space-x-8">

          <Link
            href="/#home"
            className="text-sm font-medium text-muted-foreground hover:text-[#064E3B] transition-colors"
          >
            Home
          </Link>

          <Link
            href="/#curriculum"
            className="text-sm font-medium text-muted-foreground hover:text-[#064E3B] transition-colors"
          >
            Methodology
          </Link>

          <Link
            href="/#aalims"
            className="text-sm font-medium text-muted-foreground hover:text-[#064E3B] transition-colors"
          >
            Our Aalims
          </Link>

          {/* <Link
            href="/#parent-portal"
            className="text-sm font-medium text-muted-foreground hover:text-[#064E3B] transition-colors"
          >
           
          </Link> */}

        </div>

 {/* 🔹 CTA */}
<a
  href="https://wa.me/+918383054768?text=Assalamu%20Alaikum%2C%20I%20want%20to%20check%20batch%20availability%20for%20Qirat%20classes"
  target="_blank"
  rel="noopener noreferrer"
>
  <Button
    size="sm"
    className="bg-[#F59E0B] hover:bg-[#D97706] text-white font-semibold rounded-md shadow-sm transition-all hover:scale-105"
  >
    Check Batch Availability
  </Button>
</a>

      </div>
    </nav>
  );
}
