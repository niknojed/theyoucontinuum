"use client";

import React from "react";
import { useRouter } from "next/navigation";

export default function ImpactScoringIntro() {
  const router = useRouter();

  const handleContinue = () => {
    const rankings = JSON.parse(localStorage.getItem("rankings"));

    if (!rankings || rankings.length === 0) {
      console.error("No rankings found. Redirecting to Phase 1 Results.");
      router.push("/results");
      return;
    }

    console.log("Rankings found. Proceeding to Impact Scoring:", rankings);
    router.push("/impact-scoring/health-and-wellness");
  };

  return (
    <section 
      className="relative flex flex-col justify-center items-center w-full min-h-screen px-6 pt-[120px] pb-0"
      style={{ background: "radial-gradient(100.09% 99.55% at 63.47% 2.34%, #536367 5.17%, #383E41 86.12%)" }}
    >
    <div className="w-full">
      <div className="max-w-4xl px-4 mx-auto">
        <h1 className="font-andika text-xl md:text-2xl font-bold text-evergreen-200 mb-4">Impact Scoring</h1>
        <p className="font-ptSans text-white text-[16px] font-light mb-10">
          Now that you have identified your core values and aligned them with the nine life domains, it’s time to identify the negative impact level you are experiencing. You will also identify any detection systems and preventative measures you have in place within each life domain. These scores are intended to:
        </p>

        <div className="text-white mb-10">
          <div className="flex gap-4 mb-4">
            <div className="text-center bg-stone-950 rounded-full w-10 h-10 grid place-content-center">1</div>
            <p className="pt-2">Provide clearer prioritization and categorization of risks associated with each life domain.</p>
          </div>
          <div className="flex gap-4 mb-4">
            <div className="text-center bg-stone-950 rounded-full w-10 h-10 grid place-content-center">2</div>
            <p className="pt-2">Help allocate resources effectively by distinguishing between non-critical and critical issues, requiring self-care.</p>
          </div>
          <div className="flex gap-4 mb-4">
            <div className="text-center bg-stone-950 rounded-full w-10 h-10 grid place-content-center">3</div>
            <p className="pt-2">Ensure manageable risks do not escalate into more significant problems.</p>
          </div>
          <div className="flex gap-4 mb-4">
            <div className="text-center bg-stone-950 rounded-full w-10 h-10 grid place-content-center">4</div>
            <p className="pt-2">Show which life domains are in healthy impact zones, as it relates to self-care.</p>
          </div>
        </div>

        <button
          onClick={handleContinue}
          className="px-6 py-3 bg-evergreen-400 hover:bg-evergreen-500 active:bg-evergreen-600 text-white text-sm font-medium rounded-[40px] shadow hover:bg-evergreen-600 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 transition duration-150 ease-in-out">
          Continue
        </button>
      </div>
    </div>

    {/* Footer Section */}
    <footer className="w-full text-white py-6 px-6 md:px-12 mt-8">
        <div>
          
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