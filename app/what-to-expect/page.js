"use client";

import { useRouter } from "next/navigation";

export default function WhatToExpect() {
  const router = useRouter();

  const handleNext = () => {
    router.push("/identify-core-values/growth-oriented"); // Navigate to the next step
  };

  return (
    <div className="w-full">
      <div className="max-w-7xl px-4 mx-auto pt-16">
        <h1 className="text-4xl font-normal text-evergreen-200 mb-4">
          What to Expect
        </h1>
        <p className="text-white text-base font-light mb-10">
        The Self-Care Compass will guide you through five values-related questions.  The amount of time it takes to complete, from X to X minutes, is different for everyone.  Selecting a values does not mean you are perfectly living up to that value or even prioritizing it.  It just means that in an ideal world, with ample time and energy, these values are the most important to you.  We are always evolving, shifting priorities, and improving our lives, and The YOU Continuum reflects that.
        </p>
        
        <div className="text-white mb-10">
          <div className="flex gap-4 mb-4">
            <div className="text-center bg-stone-950 rounded-full w-10 h-10 grid place-content-center">1</div>
            <p className="pt-2"><strong>Identify your core values</strong> within five motivation-based groups.</p>
          </div>
          <div className="flex gap-4 mb-4">
            <div className="text-center bg-stone-950 rounded-full w-10 h-10 grid place-content-center">2</div>
            <p className="pt-2"><strong>Review where your values align</strong> with the nine life domains.</p>
          </div>
          <div className="flex gap-4 mb-4">
            <div className="text-center bg-stone-950 rounded-full w-10 h-10 grid place-content-center">3</div>
            <p className="pt-2"><strong>Identify the negative impact level</strong> you are experiencing within each life domain.</p>
          </div>
          <div className="flex gap-4 mb-4">
            <div className="text-center bg-stone-950 rounded-full w-10 h-10 grid place-content-center">4</div>
            <p className="pt-2"><strong>Identify any detection systems</strong> and preventative measures you have in place within each life domain.</p>
          </div>
          <div className="flex gap-4 mb-4">
            <div className="text-center bg-stone-950 rounded-full w-10 h-10 grid place-content-center">5</div>
            <p className="pt-2"><strong>Review your results</strong> and get started! Results include your top Impact Zones for Prioritizing Self-Care and information to consider when starting your value-based self-care.</p>
          </div>
        </div>
        
        <button
          onClick={handleNext}
          className="px-6 py-3 bg-evergreen-400 hover:bg-evergreen-500 active:bg-evergreen-600 text-white text-sm font-medium rounded-[40px] shadow hover:bg-green-600 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 transition duration-150 ease-in-out">
          Get Started
        </button>
      </div>
    </div>
  );
}