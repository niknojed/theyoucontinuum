"use client";

import { useRef } from "react";
import { useRouter } from "next/navigation";
import CircularCarousel from "../components/CircularCarousel";

export default function HomePage() {
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
    <div>
      
      {/* Hero Section */}
      <section 
        className="relative w-full flex flex-col items-center px-6"
      >
        {/* Background Image - Absolute to Fill Entire Section */}
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{ backgroundImage: "linear-gradient(180deg, rgba(242, 247, 244, 0.25) 47.96%, #273E33 95.25%), url('/bg-continuum-home.png')" }}
        ></div>

        {/* Content Container - Stays in Front */}
        <div className="relative z-10 max-w-7xl px-6 gap-8 mt-40 md:ml-8 md:mr-8">
          
          {/* Content Card */}
          <div className="w-full bg-white px-[24px] md:px-[64px] py-[54px] rounded-[32px] shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-4 items-center gap-8">
              
              {/* Left Column - Text Content */}
              <div className="max-w-7xl col-span-3">
                <h1 className="font-andika text-2xl font-bold text-evergreen-950 leading-tight">
                  Self-Care Starts Here
                </h1>
                <p className="font-ptSans text-[19px] text-evergreen-950 mt-4">
                  With so many strategies and resources available to improve different areas of life, or life domains—like health, relationships, career, and more—it can be hard to know where to start. Often, people feel stuck because they aren’t sure which area carries the highest risk to their well-being or which is most important to focus on right now.
                </p>

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

                  {/*<button onClick={scrollToNextSection}  className="font-ptSans px-6 py-3 border-2 border-sand-500 text-sand-700 font-medium rounded-full hover:bg-sand-100">
                      Learn more
                    </button>*/}
                </div>
              </div>

              {/* Right Column - Image */}
              <div className="hidden md:block flex col-span-1 justify-end">
                <img 
                  src="/alignment.svg" 
                  alt="Illustration of a person aligning values" 
                  className="w-full max-w-[220px] md:max-w-[220px] object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Down Section with Label 
        <div className="hidden md:flex flex-col items-center absolute bottom-24 z-10">
          {/* Read More Text 
          <p className="text-white text-[14px] mb-1">Learn More</p>

          {/* Scroll Down Arrow 
          <button 
            onClick={scrollToNextSection} 
            className="flex items-center justify-center w-12 h-12 border-2 rounded-full shadow-md transition"
          >
            <ChevronDown size={28} className="text-white" />
          </button>
        </div> */}

      </section>

      {/* New Section: Understanding The YOU Continuum */}
      <section ref={nextSectionRef} className="relative bg-evergreen-800 py-32 md:pt-32 px-6 md:px-12">
        <div className="max-w-7xl px-[24px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Left Image */}
          <div className="w-full">
            <img 
              src="/plant.png" 
              alt="Small plant growing in soil" 
              className="w-full rounded-[32px] shadow-lg"
            />
          </div>

          {/* Right Content */}
          <div>
            <h2 className="font-andika text-[34px] font-bold md:font-bold text-white">
              Welcome to The YOU Continuum
            </h2>
            <h4 className="font-andika text-[24px] font-normal md:font-base text-white">
              Aligning self-care with your evolving values
            </h4>
            <p className="font-ptSans text-[19px] font-normal text-white mt-4 leading-relaxed">
              A continuum represents small, incremental changes, a seamless flow where one point transitions 
              smoothly into the next, creating a cohesive and unified whole. There are no abrupt gaps, only 
              gradual shifts—a concept that mirrors the ever-evolving journey of your personal values and self-care needs. 
              The YOU Continuum uses data to provide a clear path to improvement, specifically helping you to 
              better identify and prioritize the different areas of life.
            </p>
            <p className="font-ptSans text-[19px] text-white mt-4 leading-relaxed">
              By addressing the life domain most in need of attention, and aligning your actions with your 
              current values, The YOU Continuum provides a clear, actionable starting point for meaningful self-care.
            </p>

            {/* CTA Link */}
            <div className="mt-6">
              <a href="/philosophy" className="inline-flex items-center text-sand-300 underline underline-offset-4 hover:text-sand-100 transition duration-300">
                Learn about the YOU Continuum philosophy
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* Circular Carousel Section */}
      <section className="bg-evergreen-50 py-24 px-6 md:px-12 flex justify-center">
        <div className="max-w-7xl w-full">
          <CircularCarousel />
        </div>
      </section>

      {/* Start Your Journey Section */}
      <section className="text-white py-20 px-6 md:px-12 flex justify-center"
      style={{background: "linear-gradient(180deg, #273E33 0%, #111D18 120.21%" }}>
        <div className="px-[24px] max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          
          {/* Left: Compass Image */}
          <div className="flex justify-center">
            <img 
              src="/compass-image.png" 
              alt="Compass representing direction" 
              className="w-full max-w-sm md:max-w-sm rounded-2xl shadow-lg"
            />
          </div>

          {/* Right: Text Content */}
          <div>
            <h2 className="font-andika text-xl md:text-2xl font-bold text-white">
              Begin your journey
            </h2>
            <p className="font-ptSans text-[19px] pt-4 pb-6 leading-relaxed text-stone-50">
              Which of these domains resonates with you right now? Your path to a balanced, fulfilling life starts by exploring 
              the domains that matter most to you. Dive deeper into your core values to understand which life domain could benefit 
              most from your focus and take the first step toward positive change.
            </p>

            {/* CTA Button */}
              <button onClick={handleStart} className="font-ptSans flex items-center px-6 py-2 border-2 border-evergreen-500 bg-evergreen-500 text-white font-medium rounded-full shadow-md hover:border-evergreen-700 hover:bg-evergreen-700">
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