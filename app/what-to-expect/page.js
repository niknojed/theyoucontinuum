"use client";

import { useRouter } from "next/navigation";
import Breadcrumb from "../../components/Breadcrumb"; 

export default function WhatToExpect() {
  const router = useRouter();

  const handleNext = () => {
    router.push("/identify-core-values/growth-oriented"); // Navigate to the next step
  };

  return (
    <section 
      className="relative flex flex-col justify-center items-center w-full min-h-screen px-6 pt-[80px] md:pt-[40px] pb-0"
      style={{ background: "radial-gradient(100.09% 99.55% at 63.47% 2.34%, #536367 5.17%, #383E41 86.12%)" }}
    >
      <div className="max-w-4xl w-full p-8 md:p-12 mt-16">

        <Breadcrumb/>
        
        {/* Header */}
        <h1 className="font-andika text-xl md:text-2xl font-bold text-evergreen-200">
          What to Expect
        </h1>
        
        {/* Intro Text */}
        <p className="font-ptSans text-white mt-4">
          The Self-Care Compass will guide you through five values-related questions. The amount of time it takes to complete, from X to X minutes, is different for everyone.
        </p>
        <p className="font-ptSans text-white mt-4">
          Selecting a value does not mean you are perfectly living up to it or even prioritizing it. It just means that in an ideal world, with ample time and energy, these values are the most important to you.
        </p>
        
        {/* Steps List */}

        <div className="text-white mb-10 mt-8">
          <div className="flex gap-4 mb-4">
            <div className="text-center bg-stone-950 rounded-full w-10 h-10 grid place-content-center">1</div>
            <p className="font-ptSans pt-2">Identify your core values within five motivation-based groups.</p>
          </div>
          <div className="flex gap-4 mb-4">
            <div className="text-center bg-stone-950 rounded-full w-10 h-10 grid place-content-center">2</div>
            <p className="pt-2">Review where your values align with the nine life domains.</p>
          </div>
          <div className="flex gap-4 mb-4">
            <div className="text-center bg-stone-950 rounded-full w-10 h-10 grid place-content-center">3</div>
            <p className="pt-2">Identify the negative impact level you are experiencing within each life domain.</p>
          </div>
          <div className="flex gap-4 mb-4">
            <div className="text-center bg-stone-950 rounded-full w-10 h-10 grid place-content-center">4</div>
            <p className="pt-2">Review your results and get started! Results include your top Impact Zones for Prioritizing Self-Care.</p>
          </div>
          
        </div>

        {/* CTA Button */}
        <button
          onClick={handleNext} 
          className="mt-6 px-6 py-3 bg-evergreen-500 hover:bg-evergreen-600 text-white text-sm font-ptSans font-medium rounded-full shadow-lg transition duration-150 ease-in-out"
        >
          Get Started
        </button>

      </div>

      {/* Footer Section */}
      <footer className="text-white py-6 px-6 md:px-12 mt-8">
        <div className="max-w-7xl px-[24px]">
          
          {/* Subtle Divider */}
          <hr className="border-stone-400 mb-4" />

          <p className="text-[12px]">
            The YOU Continuum. {new Date().getFullYear()}. All Rights Reserved
          </p>
        </div>
      </footer>

    </section>
  );
}