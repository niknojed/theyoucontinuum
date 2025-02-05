"use client";

import { useRef } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ChevronDown } from "lucide-react"; 

export default function PhilosophyPage() {
  // Reference for scrolling to next section
  const nextSectionRef = useRef(null);

  const scrollToNextSection = () => {
    nextSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const router = useRouter();

  const handleStart = () => {
    router.push("/what-to-expect");
  };

  return (
    <div className="relative w-full">
      
      {/* Hero Section */}
      <section 
        className="relative w-full flex flex-col items-center px-6"
      >
        {/* Background Image - Absolute to Fill Entire Section */}
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{ backgroundImage: "linear-gradient(177deg, rgba(167, 119, 76, 0.55) 2.49%, #69323F 93.21%), url('/bg-philosophy-2.png')"
 }}>
        </div>

        {/* Content Container - Stays in Front */}
        <div className="relative z-10 max-w-7xl px-6 gap-8 mt-40 md:ml-8 md:mr-8">
          
          {/* Content Card */}
          <div className="w-full bg-white px-[24px] md:px-[80px] py-[54px] rounded-[32px] shadow-lg">
            <h1 className="font-andika text-2xl font-bold text-stone-950 leading-tight">
              A Philosophy of Change
            </h1>
            <p className="font-ptSans text-[19px] text-stone-950 mt-4">
            Life is dynamic, and so are your values. The YOU Continuum embraces this fluidity, helping you understand how shifts in your values influence your self-care needs. By adapting to these changes, you can align your actions with what matters most to you right now.            
            </p>
            <p className="font-ptSans text-[19px] text-stone-950 mt-4">
            <span className="font-bold">Value-Based Self-Care</span> is the actionable core of The YOU Continuum, providing practical steps to–<br/>
              • Identify and align your self-care practices with your current values; and<br/>
              • Address imbalances in the life domains that need the most attention.            
            </p>

            {/* Buttons */}
            <div className="mt-6 flex flex-row gap-2">
                <button onClick={handleStart} className="font-ptSans flex items-center px-6 py-3 border-2 border-rose-700 bg-rose-700 text-white font-medium rounded-full shadow-md hover:border-rose-900 hover:bg-rose-900">
                  <span className="pr-2">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 12C22 17.5228 17.5228 22 12 22M22 12C22 6.47715 17.5228 2 12 2M22 12H20M12 22C6.47715 22 2 17.5228 2 12M12 22V20M2 12C2 6.47715 6.47715 2 12 2M2 12H4M12 2V4M19.0711 19.0711L17.6569 17.6569M6.34315 6.34315L4.92893 4.92893M17.6569 6.34315L19.0711 4.92893M4.92893 19.0711L6.34315 17.6569M8 12L10.5 10.5L12 8L13.5 10.5L16 12L13.5 13.5L12 16L10.5 13.5L8 12Z" 
                      stroke="#F2F7F4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg> 
                  </span>
                  <span className="block md:hidden">Get Started</span> 
                  <span className="hidden md:block">Get started with the Self-Care Compass</span>
                </button>
            </div>
          </div>
        </div>

        {/* Scroll Down Section with Label
        <div className="hidden md:flex flex-col items-center absolute bottom-24 z-10">
          
          <p className="text-white text-[14px] mb-1">Learn More</p>

          {/* Scroll Down Arrow
          <button 
            onClick={scrollToNextSection} 
            className="flex items-center justify-center w-12 h-12 border-2 rounded-full shadow-md transition"
          >
            <ChevronDown size={28} className="text-white" />
          </button>
        </div>*/}

      </section>

      {/* New Section: Understanding The YOU Continuum */}
      <section ref={nextSectionRef} className="relative bg-rose-900 py-20 px-6 md:px-12">
        <div className="max-w-7xl px-[24px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div>
            <h2 className="font-andika text-xl md:text-2xl font-bold text-white">
              A Framework for Growth
            </h2>
            <p className="font-ptSans text-[19px] text-white mt-4 leading-relaxed">
            <span className="font-semibold">The YOU Continuum (Philosophy)</span> : Recognizing that values evolve over time, this approach emphasizes the importance of adapting self-care to match these shifts.
            </p>
            <p className="font-ptSans text-[19px] text-white mt-4 leading-relaxed">
              <span className="font-semibold">Value-Based Self-Care (Action)</span> : A structured method to assess, prioritize, and take meaningful steps toward aligning your self-care with your evolving needs.
            </p>

            {/* CTA Link 
            <div className="mt-6">
              <a href="/philosophy" className="inline-flex items-center text-evergreen-200 font-bold hover:text-evergreen-100 transition duration-300">
                <span className="mr-2">→</span> Visit Self-Care Compass blog for more info
              </a>
            </div> */}
          </div>

          {/* Right Image */}
          <div className="w-full">
            <img 
              src="/rose-growth.png" 
              alt="Small plant growing in soil" 
              className="w-full rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Core Principles of Value-Based Self-Care */}
      <section className="bg-white py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">

          {/* Section Header */}
          <h2 className="font-andika text-xl md:text-2xl font-bold text-stone-950 text-center">
            Core Principles of Value-Based Self-Care
          </h2>
          <p className="font-ptSans text-[19px] text-stone-700 text-center max-w-3xl mx-auto mt-4">
            Life is constantly changing, and understanding the evolving aspects of your personal well-being can help you lead a more fulfilled life. The YOU Continuum breaks down your journey into nine life domains that affect your everyday experiences and growth. Explore how each domain impacts you and how you can find balance in all aspects of life.
          </p>

          {/* Dynamic Nature of Values */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-12">
            <img src="/dynamic-nature.png" alt="Compass representing values" className="w-full rounded-lg shadow-lg" />
            <div>
              <h3 className="font-andika text-lg md:text-xl font-bold text-rose-900">Dynamic Nature of Values</h3>
              <p className="font-ptSans text-[17px] text-stone-700 mt-2">
                <strong>1. Values as a Compass:</strong> Your values are like a compass, guiding you through life’s changes. Value-based self-care adapts to these shifts, ensuring your actions align with what matters most right now.
              </p>
              <p className="font-ptSans text-[17px] text-stone-700 mt-2">
                <strong>2. The Evolving Self:</strong> Just as you grow and evolve, so do your priorities. Value-based self-care honors this evolution, keeping your practices meaningful and relevant.
              </p>
            </div>
          </div>

          {/* Self-Care Compass */}
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12 mt-16">

            {/* Text Content Section - Moves Left on Desktop */}
            <div className="order-2 md:order-1 text-left md:text-right md:pl-8">
              <h3 className="font-andika text-lg md:text-xl font-bold text-rose-900">Self-Care Compass</h3>
              <p className="font-ptSans text-[17px] text-stone-700 mt-2">
                <strong>1. Clarity Through Focus:</strong> The Self-Care Compass helps you cut through the noise by pinpointing the life domain most in need of attention, allowing you to focus your energy where it will make the biggest impact.
              </p>
              <p className="font-ptSans text-[17px] text-stone-700 mt-2">
                <strong>2. A Targeted Starting Point:</strong> The Self-Care Compass identifies your most at-risk or misaligned life domain, offering a clear starting point for actionable self-care.
              </p>
            </div>

            {/* Image Section - Moves Right on Desktop */}
            <div className="order-1 md:order-2 flex justify-center md:justify-end">
              <img 
                src="/self-care-101.png" 
                alt="Illustration of self-care practice" 
                className="w-full max-w-md md:max-w-lg rounded-lg" 
              />
            </div>

          </div>

          {/* Intentionality */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-16">
            <img src="/purpose.jpg" alt="Person reflecting" className="w-full rounded-lg shadow-lg" />
            <div>
              <h3 className="font-andika text-lg md:text-xl font-bold text-rose-900">Intentionality</h3>
              <p className="font-ptSans text-[17px] text-stone-700 mt-2">
                <strong>1. Purposeful Actions:</strong> Every self-care practice should reflect a deliberate choice, fostering balance, well-being, and growth in areas that align with your deepest values.
              </p>
              <p className="font-ptSans text-[17px] text-stone-700 mt-2">
                <strong>2. Living with Purpose:</strong> Self-care isn’t just about what you do—it’s about why you do it. Intentional actions ensure your efforts create meaningful and lasting change in your life.
              </p>
              <a href="/blog" className="inline-flex items-center text-rose-600 font-bold hover:text-rose-800 transition duration-300 mt-4">
                → Visit Self-Care Compass blog for more info
              </a>
            </div>
          </div>

          {/* Holistic Integration */}
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12 mt-16">

          {/* Text Content Section - Moves Left on Desktop */}
          <div className="order-2 md:order-1 text-left md:text-right md:pl-8">
            <h3 className="font-andika text-lg md:text-xl font-bold text-rose-900">Holistic Integration</h3>
            <p className="font-ptSans text-[17px] text-stone-700 mt-2">
              <strong>1. Interconnected Well-Being:</strong> Self-care isn’t isolated to one area of life. By integrating strategies across emotional, physical, mental, and social domains, you create a unified approach to well-being that reflects your values.
            </p>
            <p className="font-ptSans text-[17px] text-stone-700 mt-2">
              <strong>2. The Big Picture:</strong> Life domains are deeply interconnected, and so should your self-care practices be. A holistic approach ensures that addressing one domain positively influences others, leading to greater overall balance and harmony.
            </p>
            <p className="font-ptSans text-[17px] text-stone-700 mt-2">
              <strong>3. Seamless Alignment:</strong> True self-care weaves together all life domains, creating an intentional and cohesive plan that reflects the intersection of your values and needs.
            </p>
          </div>

          {/* Image Section - Moves Right on Desktop */}
          <div className="order-1 md:order-2 flex justify-center md:justify-end">
            <img 
              src="/well-being.png" 
              alt="Illustration of holistic self-care" 
              className="w-full max-w-md md:max-w-lg rounded-lg shadow-lg" 
            />
          </div>
        </div>
      </div>
      </section>

      {/* Start Your Journey Section */}
      <section className="text-white py-20 px-6 md:px-12 flex justify-center" style={{ background: "linear-gradient(180deg, #69323F 0%, #39181F 100%)" }}>
        <div className="px-[24px] max-w-7xl w-full grid grid-cols-1 gap-10 items-center">

          {/* Right: Text Content */}
          <div>
            <h2 className="font-andika text-xl md:text-2xl font-bold text-white">
              Begin your journey
            </h2>
            <p className="font-ptSans text-[19px] mt-4 mb-4 leading-relaxed text-white">
              Which of these domains resonates with you right now? Your path to a balanced, fulfilling life starts by exploring 
              the domains that matter most to you. Dive deeper into your core values to understand which life domain could benefit 
              most from your focus and take the first step toward positive change.
            </p>

            {/* CTA Button */}
            <Link href="/self-care-compass">
              <button className="font-ptSans flex items-center px-6 py-3 border-2 border-rose-700 bg-rose-700 text-white font-medium rounded-full shadow-md hover:border-rose-800 hover:bg-rose-800">
                  <span className="pr-2">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 12C22 17.5228 17.5228 22 12 22M22 12C22 6.47715 17.5228 2 12 2M22 12H20M12 22C6.47715 22 2 17.5228 2 12M12 22V20M2 12C2 6.47715 6.47715 2 12 2M2 12H4M12 2V4M19.0711 19.0711L17.6569 17.6569M6.34315 6.34315L4.92893 4.92893M17.6569 6.34315L19.0711 4.92893M4.92893 19.0711L6.34315 17.6569M8 12L10.5 10.5L12 8L13.5 10.5L16 12L13.5 13.5L12 16L10.5 13.5L8 12Z" 
                      stroke="#F2F7F4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg> 
                  </span>
                  <span className="block md:hidden">Get Started</span> 
                  <span className="hidden md:block">Get started with the Self-Care Compass</span>
                </button>
            </Link>
          </div>
          
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-rose-950 text-white py-6 px-6 md:px-12">
        <div className="max-w-7xl px-[24px] mx-auto">

          <p className="text-[14px] text-white">
            The YOU Continuum. {new Date().getFullYear()}. All Rights Reserved
          </p>
        </div>
      </footer>

    </div>
  );
}