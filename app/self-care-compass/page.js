"use client";

import { useRef } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ChevronDown } from "lucide-react"; 

export default function SelfCareCompass() {
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
          style={{ backgroundImage: "linear-gradient(180deg, rgba(242, 247, 244, 0.25) 47.96%, #383E41 95.25%), url('/bg-self-care.png')" }}>
        </div>

        {/* Content Container - Stays in Front */}
        <div className="relative z-10 max-w-7xl px-6 gap-8 mt-40 md:ml-8 md:mr-8">
          
          {/* Content Card */}
          <div className="w-full bg-white px-[24px] md:px-[80px] py-[54px] rounded-[32px] shadow-lg">
            <h1 className="font-andika text-2xl font-bold text-stone-950 leading-tight">
              What is the Self-Care Compass? 
            </h1>
            <p className="font-ptSans text-stone-950 mt-4">
            A risk matrix is a tool commonly used in business quality management principles to assess and prioritize risks by evaluating their likelihood and impact. In the context of personal values, life domains, and current circumstances, the risk matrix can serve as a framework to identify areas in life requiring attention and to prioritize self-care strategies accordingly.</p>

            {/* Buttons */}
            <div className="mt-6 flex flex-row gap-2">
              <button onClick={handleStart} className="font-ptSans flex items-center px-6 py-3 border-2 border-stone-500 bg-stone-500 text-white font-medium rounded-full shadow-md hover:border-stone-800 hover:bg-stone-800">
                  <span className="pr-2">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 12C22 17.5228 17.5228 22 12 22M22 12C22 6.47715 17.5228 2 12 2M22 12H20M12 22C6.47715 22 2 17.5228 2 12M12 22V20M2 12C2 6.47715 6.47715 2 12 2M2 12H4M12 2V4M19.0711 19.0711L17.6569 17.6569M6.34315 6.34315L4.92893 4.92893M17.6569 6.34315L19.0711 4.92893M4.92893 19.0711L6.34315 17.6569M8 12L10.5 10.5L12 8L13.5 10.5L16 12L13.5 13.5L12 16L10.5 13.5L8 12Z" 
                      stroke="#F2F7F4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg> 
                  </span>
                  <span className="block md:hidden">Get Started</span> 
                  <span className="hidden md:block">Get started with the Self-Care Compass</span>
              </button>

              <Link href="/learn-more">
                <button className="font-ptSans px-6 py-3 border-2 border-sand-500 text-sand-700 font-medium rounded-full hover:bg-sand-100">
                  Learn more
                </button>
              </Link>
            </div>
          </div>
        </div>


      </section>

      {/* New Section: Understanding The YOU Continuum */}
      <section ref={nextSectionRef} className="relative bg-stone-900 py-20 px-6 md:px-12">
        <div className="max-w-7xl px-[24px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div>
            <h2 className="font-andika text-xl md:text-2xl font-bold text-white">
              Understanding the Compass
            </h2>
            <p className="font-ptSans text-white mt-4 leading-relaxed">
            <span className="font-bold">The Self-Care Compass</span> is intended to help guide a start place for your value-based self-care journey with clarity and purpose. It’s easy to feel overwhelmed by the many areas of life that demand your attention, but knowing where to begin is often the hardest part. The LDPN tool simplifies this process by providing a focused and actionable starting point within the nine life domains.</p>

            {/* CTA Link */}
            <div className="mt-6">
              <a href="/philosophy" className="inline-flex items-center text-sand-200 font-bold hover:text-sand-100 transition duration-300">
                <span className="mr-2">→</span> Visit Self-Care Compass blog for more info
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="w-full">
            <img 
              src="/ldpn-teamwork.png" 
              alt="Small plant growing in soil" 
              className="w-full rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Beginning with YOU */}
      <section className="bg-white py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">

          {/* Section Header */}
          <h2 className="font-andika text-xl md:text-2xl font-bold text-stone-950 text-center">
            Beginning with YOU
          </h2>
          <p className="font-ptSans text-stone-700 text-center max-w-3xl mx-auto mt-4">
            ...
          </p>

          {/* Clarity Through Focus */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-12">
            <img src="/ldpn-clarity.png" alt="Compass representing values" className="w-full rounded-lg shadow-lg" />
            <div>
              <h3 className="font-andika text-lg md:text-xl font-bold text-sand-900">Clarity Through Focus</h3>
              <p className="font-ptSans text-stone-700 mt-2">
              Life is full of competing priorities, making it difficult to decide where to direct your energy. The Self-Care Compass helps cut through the noise by pinpointing the life domain most in need of attention. This clarity allows you to focus on the area that will have the greatest impact on your overall well-being. </p>
            </div>
          </div>

          {/* Target Starting Point */}
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12 mt-16">

            {/* Text Content Section - Moves Left on Desktop */}
            <div className="order-2 md:order-1 text-left md:text-right md:pl-8">
              <h3 className="font-andika text-lg md:text-xl font-bold text-rose-900">A Target Starting Point</h3>
              <p className="font-ptSans text-stone-700 mt-2">
              Using a structured scoring system, the Self-Care Compass evaluates the alignment between your current values and the domains in your life—such as relationships, career, health, or spirituality. It highlights the life domain at the highest risk or in the most misalignment, offering a clear and actionable starting point for your self-care efforts.</p>
              <p className="font-ptSans text-stone-700 mt-2">
              By identifying where to begin, the Self-Care Compass empowers you to take meaningful steps toward improving balance and well-being in your life. It’s the first step to aligning your self-care practices with your evolving values, ensuring that your efforts are intentional, impactful, and rooted in what matters most to you. The Self-Care Compass is calculated using your Values, Negative Impact, and Detection ratings...</p>
            </div>

            {/* Image Section - Moves Right on Desktop */}
            <div className="order-1 md:order-2 flex justify-center md:justify-end">
              <img 
                src="/ldpn-target.png" 
                alt="Illustration of self-care practice" 
                className="w-full max-w-md md:max-w-lg rounded-lg" 
              />
            </div>

          </div>

      </div>
      </section>

      {/* Self-Care Model Section */}
      <section className="bg-stone-50 py-20 px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center">

          {/* Self-Care Heading */}
          <div className="mb-10">
            <img src="/ldpn-calculation.svg" alt="Self-Care Model Icon" className="mx-auto w-20 h-20" />
            <h2 className="font-andika text-xl md:text-2xl font-bold text-stone-900 mt-4">
              Value × Impact × Detection
            </h2>
            <p className="font-ptSans text-sand-700 text-lg mt-2">
              Here’s a breakdown of how we model your score.
            </p>
            <p className="font-ptSans text-stone-700 mt-2">
            Higher score indicate higher-priority domains that require immediate action, while lower scores suggest less critical domains. The Self-Care Compass helps prioritize efforts to mitigate the most significantly affected domains based on your personal values and their negative impact. It is intended to be used multiple times during The YOU Continuum, as values, beliefs, and needs change over time.

The Self-Care Compass does all the scoring for you and provides immediate results, showing you which zone you are currently in for each life domain!</p>
          </div>

          {/* Three-Column Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Value Box */}
            <div className="border border-sand-300 rounded-lg p-6 text-left shadow-md bg-white">
              <h3 className="font-andika text-lg md:text-xl font-bold text-sand-900">Value</h3>
              <p className="font-ptSans text-stone-800 mt-2">
                Rates the importance of the value you give each life domain, on a scale of 1 to 5, where 1 means 
                the value is not important (little to no significance to your life) and 5 means it is extremely 
                important (central to your life).
              </p>
            </div>

            {/* Negative Impact Box */}
            <div className="border border-sand-300 rounded-lg p-6 text-left shadow-md bg-white">
              <h3 className="font-andika text-lg md:text-xl font-bold text-sand-900">Negative Impact</h3>
              <p className="font-ptSans text-stone-800 mt-2">
                Rates the seriousness of the negative impact on each life domain, on a scale of 1 to 5, with 1 
                representing no impact (little effect or potential for harm or stress) and 5 representing 
                critical impact.
              </p>
            </div>

            {/* Detection Box */}
            <div className="border border-sand-300 rounded-lg p-6 text-left shadow-md bg-white">
              <h3 className="font-andika text-lg md:text-xl font-bold text-sand-900">Detection</h3>
              <p className="font-ptSans text-stone-800 mt-2">
                Rates the likelihood that failure or misalignment of your values and life domains will be detected 
                before it causes harm, on a scale of 1 to 5, where 1 means almost certain (high likelihood of detecting 
                issues before escalation) and 5 means almost impossible (low likelihood of detection, with no monitoring 
                and/or systems in place).
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Start Your Journey Section */}
      <section className="bg-stone-950 text-white py-20 px-6 md:px-12 flex justify-center">
        <div className="px-[24px] max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          
          {/* Left: Compass Image */}
          <div className="flex justify-center">
            <img 
              src="/compass-image.png" 
              alt="Compass representing direction" 
              className="w-full max-w-md md:max-w-lg rounded-2xl shadow-lg"
            />
          </div>

          {/* Right: Text Content */}
          <div>
            <h2 className="font-andika text-xl md:text-2xl font-bold text-white">
              Start your journey
            </h2>
            <p className="font-ptSans mt-4 mb-4 leading-relaxed text-stone-300">
              Which of these domains resonates with you right now? Your path to a balanced, fulfilling life starts by exploring 
              the domains that matter most to you. Dive deeper into your core values to understand which life domain could benefit 
              most from your focus and take the first step toward positive change.
            </p>

            {/* CTA Button */}
            <Link href="/self-care-compass">
              <button className="font-ptSans flex items-center px-6 py-3 border-2 border-stone-500 bg-stone-500 text-white font-medium rounded-full shadow-md hover:border-stone-800 hover:bg-stone-800">
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
      <footer className="bg-stone-950 text-white py-6 px-6 md:px-12">
        <div className="max-w-7xl px-[24px] mx-auto text-center">
          
          {/* Subtle Divider */}
          <hr className="border-stone-400 mb-4" />

          <p className="text-sm">
            The YOU Continuum. {new Date().getFullYear()}. All Rights Reserved
          </p>
        </div>
      </footer>

    </div>
  );
}