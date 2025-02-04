"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Breadcrumb from "../../../components/Breadcrumb"; 

export default function EnvironmentAndHomeScoring() {
  const [impactScore, setImpactScore] = useState(1);
  const [detectionScore, setDetectionScore] = useState(1);
  const router = useRouter();

  const impactDescriptions = {
    1: "Low impact; little effect or potential for harm or stress",
    2: "Minor impact; can cause a distraction with limited effect on day-to-day activities",
    3: "Moderate impact; can cause harm or stress, varies across the domains and day-to-day activities",
    4: "High impact; can cause loss of self, negative effect on other domains, acute or chronic",
    5: "Critical impact; major effect on overall functioning, heightened vulnerability to stress, illness, and burnout",
  };

  const detectionDescriptions = {
    1: "Almost certain/Very high likelihood of detecting the issue before it escalates",
    2: "High likelihood of detection; robust systems or monitoring in place",
    3: "Moderate likelihood of detection; some monitoring exists but not comprehensive",
    4: "Low likelihood of detection; limited systems or oversight available",
    5: "Almost impossible/Very low likelihood of detection; no monitoring or systems in place to catch the issue",
  };

  const handleNext = () => {
    const scores = JSON.parse(localStorage.getItem("impactScores")) || {};
    scores["Environment & Home"] = { impactScore, detectionScore };
    localStorage.setItem("impactScores", JSON.stringify(scores));
    router.push("/final-summary"); // Navigate to the final summary page
  };

  return (
    <section 
      className="relative flex flex-col justify-center items-center w-full min-h-screen px-6 pt-[80px] md:pt-[40px] pb-0"
      style={{ background: "radial-gradient(100.09% 99.55% at 63.47% 2.34%, #536367 5.17%, #383E41 86.12%)" }}
    >
    <div className="w-full">
      <div className="max-w-4xl px-4 mx-auto pt-8">
        <Breadcrumb />
        <span className="mb-2 inline-flex items-center rounded-full bg-sand-700 px-2 py-1 text-xs font-medium text-white">
          Impact Scoring
        </span>
        <h1 className="font-andika text-2xl text-evergreen-200 mb-6">Environment & Home</h1>

        {/* Impact Slider */}
        <div className="pb-6 mb-6 max-w-2xl">
          <h2 className="font-ptSans text-[21px] font-semibold text-white mb-4">Negative Impact</h2>
          <p className="font-ptSans text-white mb-4">
            Consider the negative impact you are experiencing in this domain. Use the sliding scale to identify the severity of the impact.
          </p>
          <input
            type="range"
            min="1"
            max="5"
            value={impactScore}
            onChange={(e) => setImpactScore(Number(e.target.value))}
            className="w-full"
          />
          <p className="font-ptSans text-white mt-2">
            <span className="text-evergreen-200"><strong>Impact Level {impactScore}:</strong></span> {impactDescriptions[impactScore]}
          </p>
        </div>

        <div className="relative">
          <div aria-hidden="true" className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300" />
          </div>
        </div>

        {/* Detection Slider */}
        <div className="pb-8 pt-8 max-w-2xl">
          <h2 className="font-ptSans text-[21px] font-semibold text-white mb-4">Detection</h2>
          <p className="font-ptSans text-white mb-4">
            Consider the detection systems and preventative measures you have implemented in this domain. Use the sliding scale to identify the likelihood of detection.
          </p>
          <input
            type="range"
            min="1"
            max="5"
            value={detectionScore}
            onChange={(e) => setDetectionScore(Number(e.target.value))}
            className="w-full"
          />
          <p className="font-ptSans text-white mt-2">
            <span className="text-evergreen-200"><strong>Detection Level {detectionScore}:</strong></span> {detectionDescriptions[detectionScore]}
          </p>
        </div>

        <button
          onClick={handleNext}
          className="font-ptSans px-6 py-3 bg-evergreen-400 hover:bg-evergreen-500 active:bg-evergreen-600 text-white text-sm font-medium rounded-[40px] shadow hover:bg-evergreen-600 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-evergreen-400 focus:ring-offset-2 transition duration-150 ease-in-out">
          Finish
        </button>
      </div>
    </div>
    </section>
  );
}