"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Drawer from "../../../components/Drawer";
import Breadcrumb from "../../../components/Breadcrumb"; 
import { EyeIcon } from "@heroicons/react/24/outline";

export default function SpiritualityAndBeliefsScoring() {
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
    scores["Spirituality & Beliefs"] = { impactScore, detectionScore };
    localStorage.setItem("impactScores", JSON.stringify(scores));
    router.push("/impact-scoring/community-and-contribution");
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
        <h1 className="font-andika text-2xl text-evergreen-200 mb-6">Spirituality & Beliefs</h1>

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
          Next: Community & Contribution
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
    
          {/* Drawer Components */}
          <Drawer
            title="Negative Impact Example"
            content={["You feel disconnected from your spiritual or belief practices, leading to a sense of emptiness, confusion, or lack of purpose. You struggle with questions about meaning or direction in life but avoid exploring them, leaving you feeling unanchored or adrift.",
            "• Minor impact could be if you occasionally skip the religious service you’ve regularly attended for years, but still engage in practices that help you connect or reconnect, such as meditation or prayer. These temporary challenges do not disrupt your overall sense of purpose or alignment and can easily be redirected back on the right path.",
            "• Critical impact could be if you completely disengage from your spiritual community, avoiding questions of purpose and feeling disillusionment with your beliefs, which is atypical for you. Internal conflicts arise, while feeling a profound sense of loss, existential distress, or difficulty finding motivation, potentially affecting other domains like mental well-being, community engagement or relationships."
    ]}
            imageUrl="/meditation-beliefs.svg" // Optional: Include an image if needed
            open={isNegativeImpactOpen}
            setOpen={setNegativeImpactOpen}
          />
    
          <Drawer
            title="Detection Example"
            content={["You feel disconnected from your spiritual or belief practices, leading to a sense of emptiness, confusion, or lack of purpose. You struggle with questions about meaning or direction in life but avoid exploring them, leaving you feeling unanchored or adrift.",
              "• Low likelihood of detection could be if you are someone who rarely reflects on your spirituality, avoids engaging in practices that foster connection, and isolates yourself from communities or resources that could provide guidance. Without these checks, it may be challenging to notice when disconnection is taking a toll on your sense of purpose and other life domains.",
              "• Very high likelihood of detection could be if you are someone who regularly engages in spiritual practices, such as meditation, worship, or reflection, and participates in a supportive community or seeks guidance when needed. You might also routinely evaluate your sense of alignment with your beliefs, making it easier to identify and address periods of disconnection before they escalate."
      ]}  
            imageUrl="/meditation-beliefs-1.svg" // Optional: Include an image if needed
            open={isDetectionOpen}
            setOpen={setDetectionOpen}
          />
        </section>
      );
    }