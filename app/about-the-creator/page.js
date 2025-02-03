"use client";

import { useRef } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react"; 

export default function AboutCreatorPage() {
  // Reference for scrolling to next section
  const nextSectionRef = useRef(null);

  const scrollToNextSection = () => {
    nextSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative w-full">
      
      {/* New Section: About the Creator */}
      <section ref={nextSectionRef} className="relative bg-evergreen-800 py-20 px-6 md:px-12">
        <div className="max-w-7xl px-[24px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center pt-[80px]">
          
          {/* Left Content */}
          <div>
            <h2 className="font-andika text-xl md:text-2xl font-bold md:font-normal text-white">
              Hi, I'm Rachel
            </h2>
            <p className="font-ptSans text-white mt-4 leading-relaxed">
            For as long as I can remember, I’ve dedicated my life to human services, primarily working with individuals with disabilities. It’s been a rewarding journey filled with purpose, growth, and the drive to make a difference. Along the way, I pursued higher education to sharpen my skills and expanded my business to reach a broader audience. However, balancing work, family, home, and community responsibilities eventually brought me face-to-face with an overwhelming reality: burnout.
            </p>
            
          </div>

          {/* Right Image */}
          <div className="w-full">
            <img 
              src="/rachel.png" 
              alt="Small plant growing in soil" 
              className="w-full rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-evergreen-800 text-stone-400 py-6 px-6 md:px-12">
        <div className="max-w-7xl px-[24px] mx-auto text-center">
          
          {/* Subtle Divider */}
          <hr className="border-evergreen-400 mb-4" />

          <p className="text-sm text-white">
            The YOU Continuum. {new Date().getFullYear()}. All Rights Reserved
          </p>
        </div>
      </footer>
    </div>
  );
}