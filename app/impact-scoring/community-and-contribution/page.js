"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Drawer from "../../../components/Drawer";
import Breadcrumb from "../../../components/Breadcrumb"; 
import { EyeIcon } from "@heroicons/react/24/outline";

export default function CommunityAndContributionScoring() {
  const [impactScore, setImpactScore] = useState(1);
  const [detectionScore, setDetectionScore] = useState(1);
  const router = useRouter();

    // State for opening drawers
    const [isNegativeImpactOpen, setNegativeImpactOpen] = useState(false);
    const [isDetectionOpen, setDetectionOpen] = useState(false); 

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
    scores["Community & Contribution"] = { impactScore, detectionScore };
    localStorage.setItem("impactScores", JSON.stringify(scores));
    router.push("/impact-scoring/environment-and-home");
  };

  return (
    <section 
      className="relative flex flex-col justify-center items-center w-full min-h-screen px-6 pt-[80px] md:pt-[40px] pb-0"
      style={{ background: "radial-gradient(100.09% 99.55% at 63.47% 2.34%, #536367 5.17%, #383E41 86.12%)" }}
    >
    <div className="w-full">
      <div className="max-w-4xl px-4 mx-auto pt-8">
         <div className="mb-4 mt-4">
            <Breadcrumb />
        </div>
        <span className="mb-2 inline-flex items-center rounded-full bg-sand-700 px-2 py-1 text-xs font-medium text-white">
          Impact Scoring
        </span>
        <h1 className="font-andika text-2xl text-evergreen-200 mb-6">Community & Contribution</h1>

        {/* Impact Slider */}
        <div className="pb-6 mb-6 max-w-2xl">
          <h2 className="font-ptSans text-[21px] font-semibold text-white mb-4">Negative Impact</h2>
          <p className="font-ptSans text-white mb-1">
            Consider the negative impact you are experiencing in this domain. Use the sliding scale to identify the severity of the impact.
          </p>

          {/* "See Example" link for Negative Impact */}
          <button
            onClick={() => setNegativeImpactOpen(true)}
            className="flex items-center text-[15px] text-sand-300 pb-8 hover:text-sand-500"
          >
            <EyeIcon className="w-4 h-4 mr-1" /> See an example
          </button>

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
          <p className="font-ptSans text-white mb-1">
            Consider the detection systems and preventative measures you have implemented in this domain. Use the sliding scale to identify the likelihood of detection.
          </p>

          {/* "See Example" link for Detection */}
                    <button
                      onClick={() => setDetectionOpen(true)}
                      className="flex items-center text-[15px] text-sand-300 pb-8 hover:text-sand-500"
                    >
                      <EyeIcon className="w-4 h-4 mr-1" /> See an example
                    </button>

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
          Next: Environment & Home
      </button>
      </div>
    </div>

    {/* Drawer Components */}
          <Drawer
            title="Negative Impact Example"
            content={["You feel detached from your community or struggle to find meaningful ways to contribute, leading to feelings of isolation or a lack of purpose. You notice a reluctance to engage in volunteer work, civic duties, or social events, leaving you feeling disconnected from those around you and your ability to make a difference.",
            "• Minor impact could be if you occasionally feel less involved in your community but still find small ways to volunteer at your local Food Pantry, perhaps just less frequently. While you may feel a temporary lapse in connection, it does not affect your overall sense of belonging or purpose.",
            "• Critical impact could be if you completely withdraw from your volunteerism and feel apathetic toward contributing to others' well-being, and this is atypical for you. This could lead to feelings of loneliness, insignificance, and a lack of fulfillment, potentially impacting other life domains like relationships, environment, recreation, or overall well-being."
    ]}
            imageUrl="/disconnected.svg" // Optional: Include an image if needed
            open={isNegativeImpactOpen}
            setOpen={setNegativeImpactOpen}
          />
    
          <Drawer
            title="Detection Example"
            content={["You feel detached from your community or struggle to find meaningful ways to contribute, leading to feelings of isolation or a lack of purpose. You notice a reluctance to engage in volunteer work, civic duties, or social events, leaving you feeling disconnected from those around you and your ability to make a difference.",
              "• Low likelihood of detection could be if you are someone who does not reflect on your level of community involvement or dismisses opportunities to engage with others. You might not monitor your sense of belonging or contribution, making it harder to recognize disconnection before it becomes a significant issue.",
              "• Very high likelihood of detection could be if you are someone who regularly assesses your engagement in the community, participates in activities that align with your values, and seeks out opportunities to contribute meaningfully. You might also maintain connections with local organizations, neighbors, attend events, or volunteer regularly, ensuring you quickly notice when your level of involvement is waning and take action to reconnect."
      ]}  
            imageUrl="/alone-comm.svg" // Optional: Include an image if needed
            open={isDetectionOpen}
            setOpen={setDetectionOpen}
          />
    </section>
  );
}