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
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 lg:px-12",
      scrolled ? "bg-background/80 backdrop-blur-md border-b py-3" : "bg-transparent py-6"
    )}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold tracking-tight text-[#064E3B] font-headline">Qirat</span>
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          <Link href="/#curriculum" className="text-sm font-medium hover:text-[#064E3B] transition-colors">Curriculum</Link>
          <Link href="/#aalims" className="text-sm font-medium hover:text-[#064E3B] transition-colors">Our Aalims</Link>
          <Link href="/#parent-portal" className="text-sm font-medium hover:text-[#064E3B] transition-colors">Parent Portal</Link>
        </div>

        <div>
          <Link href="/assessment">
            <Button 
              className="bg-[#F59E0B] hover:bg-[#D97706] text-white font-semibold rounded-md shadow-sm transition-all hover:scale-105"
              size="sm"
            >
              Check Batch Availability
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
