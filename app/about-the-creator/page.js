"use client";

import { useRef } from "react";
import Link from "next/link";

export default function AboutCreatorPage() {
  // Reference for scrolling to next section
  const nextSectionRef = useRef(null);

  const scrollToNextSection = () => {
    nextSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

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
          style={{ backgroundImage: "linear-gradient(182deg, rgba(47, 77, 63, 0.69) 50.39%, #273E33 66.95%)" }}
        ></div>

        {/* Content Container - Stays in Front */}
        <div className="relative z-10 max-w-7xl px-6 gap-8 mt-40 md:ml-8 md:mr-8">
          
          {/* Content Card */}
          <div className="w-full bg-white px-[24px] md:px-[48px] py-[24px] md:py-[48px] rounded-[32px] shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-4 items-center gap-2">

              {/* Right Column - Image */}
              <div className="flex col-span-2">
                <img 
                  src="/rachel.png" 
                  alt="Illustration of a person aligning values" 
                  className="w-full max-w-full md:max-w-[400px] object-contain rounded-[32px] shadow-lg"
                />
              </div>
              
              {/* Left Column - Text Content */}
              <div className="w-full col-span-2">
                <h1 className="font-andika text-2xl font-bold text-evergreen-950 leading-tight">
                  Hi, I'm Rachel
                </h1>
                <p className="font-ptSans text-[17px] md:text-[19px] text-stone-900 mt-4">
                  For as long as I can remember, I’ve dedicated my life to human services, primarily working with individuals with disabilities. It’s been a rewarding journey filled with purpose, growth, and the drive to make a difference. Along the way, I pursued higher education to sharpen my skills and expanded my business to reach a broader audience. However, balancing work, family, home, and community responsibilities eventually brought me face-to-face with an overwhelming reality: <strong>burnout</strong>.
                </p>
                {/*<p className="font-ptSans text-[19px] text-evergreen-950 mt-4">
                  Here’s the kicker—everything that fueled my success was also quietly draining me. Like most people, I had a mental checklist of what I should do to fix it: scale back work, find the ever-elusive “work-life balance,” prioritize self-care, eat more kale (or maybe less?), and make exercise a regular thing. You know the drill. But when burnout takes over, even the simplest solutions feel insurmountable.
                </p> */}

                {/* Buttons */}
                <div className="mt-6 flex flex-row gap-4">
                  <button 
                    onClick={handleStart} 
                    className="font-ptSans flex items-center px-6 py-3 border-2 border-evergreen-500 bg-evergreen-500 text-white font-medium rounded-full shadow-md hover:border-evergreen-800 hover:bg-evergreen-800"
                  >
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
          </div>
        </div>

      </section>

      {/* What Do I Value? */}
      <section className="relative bg-evergreen-800 py-32 pt-32 px-6 md:px-12">
        <div className="max-w-7xl px-[24px] mx-auto grid grid-cols-1 md:grid-cols-2 mt-8 md:mt-8 gap-12 items-center">
          
          {/* Left Content */}
          <div>
            <h2 className="font-andika text-xl md:text-2xl font-bold md:font-normal text-white">
              "What do I truly value?"
            </h2>
            <p className="font-ptSans text-[17px] font-normal text-white mt-4 leading-relaxed">
            Here’s the kicker—everything that fueled my success was also quietly draining me. Like most people, I had a mental checklist of what I should do to fix it: scale back work, find the ever-elusive “work-life balance,” prioritize self-care, eat more kale (or maybe less?), and make exercise a regular thing. You know the drill. But when burnout takes over, even the simplest solutions feel insurmountable.
            </p>
            <p className="font-ptSans text-[17px] text-white mt-4 leading-relaxed">
            So, I hit pause and asked myself some tough questions: “What do I truly value? Is my life aligned with those values? Have my priorities shifted without me even noticing?” Spoiler alert: they had. Life moves fast, and it’s easy to stick to the same routines, even when they no longer serve us. That realization led me to develop The YOU Continuum—a framework to guide my value-based self-care journey.
            </p>
            <p className="font-ptSans text-[17px] text-white mt-4 leading-relaxed">The YOU Continuum isn’t about achieving perfection; it’s about progress. It’s about making intentional choices, focusing on what truly matters, and sprinkling in some personal grace when things don’t go as planned (because let’s be real—they often don’t). This approach helped me find a balance I thought was impossible—one free from guilt and aligned with my dreams.</p>

          </div>

          {/* Right Image */}
          <div>
            <img 
              src="/meditation.svg" 
              alt="Meditate illustration" 
              className="w-full"
            />
          </div>

        </div>
      </section>

      {/* Self Compass */}
      <section className="relative bg-stone-50 py-32 pt-32 px-6 md:px-12">
        <div className="max-w-7xl px-[24px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Left Image */}
          <div>
            <img 
              src="/solving-challenges.svg" 
              alt="Rocket Ship illustration" 
              className="w-full"
            />
          </div>

          {/* Right Content */}
          <div>
            <h2 className="font-andika text-xl md:text-2xl font-bold md:font-normal text-stone-950">
              Solving my own challenges
            </h2>
            <p className="font-ptSans text-[17px] font-normal text-stone-900 mt-4 leading-relaxed">
              Interestingly, the <strong>Self-Care Compass</strong> was born out of my professional life. In my business work, I often helped companies conduct risk assessments to identify vulnerabilities and prioritize what needed attention. One day, I wondered, “What if I applied this same process to my personal life? Could I create a similar framework to assess and prioritize my self-care needs?” That’s when the idea for the <strong>Self-Care Compass</strong> clicked. It’s essentially a personalized risk matrix for your life.
            </p>
            <p className="font-ptSans text-[17px] text-stone-900 mt-4 leading-relaxed">
              The <strong>Self-Care Compass</strong> doesn’t aim to fix everything at once—because, honestly, who has the energy for that? Instead, it helps you find the right starting point so you can focus on one thing at a time and continue on with other areas of your life. By reducing the stress of trying to tackle everything simultaneously, you can take meaningful steps forward with clarity and confidence.
            </p>
            
          </div>
        </div>
      </section>

      {/* Start Your Journey Section */}
      <section className="text-white py-20 px-6 md:px-12 flex justify-center"
      style={{background: "linear-gradient(180deg, #273E33 0%, #111D18 120.21%" }}>
        <div className="px-[24px] max-w-7xl w-full grid grid-cols-1 gap-10 items-center">
          
          {/* Left: Compass Image */}
          <div>
            <h2 className="font-andika text-xl md:text-2xl font-bold text-white">
              Begin your journey
            </h2>
            <p className="font-ptSans text-[19px] pt-4 pb-6 leading-relaxed text-stone-50">
            I truly wish you the best in finding the right place to begin YOUR self-care journey. Whether it’s big or small, taking that first step is what matters most. Self-care isn’t selfish—it’s essential. And while the journey may be messy and nonlinear, it’s worth every step. My hope is that The YOU Continuum empowers you to redirect your path, regain balance, and rediscover joy in a way that feels authentic to YOU.
            If you’d like to learn more about my consulting work, visit me at <a href="https://www.RCAdvising.com" target="_blank"><strong>www.RCAdvising.com</strong></a>. I look forward to connecting with you and exploring how we can make a positive impact together.
            </p>

            {/* CTA Button */}
            <Link href="/self-care-compass">
              <button className="font-ptSans flex items-center px-6 py-2 border-2 border-evergreen-500 bg-evergreen-500 text-white font-medium rounded-full shadow-md hover:border-evergreen-700 hover:bg-evergreen-700">
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
      <footer className="bg-evergreen-950 text-stone-400 py-6 px-6 md:px-12">
        <div className="max-w-7xl px-[24px] mx-auto">

          <p className="text-[14px] text-white">
            The YOU Continuum. {new Date().getFullYear()}. All Rights Reserved
          </p>
        </div>
      </footer>
    </div>
  );
}