"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import ImpactSlider from "./ImpactSlider";

export default function ImpactScoringPage() {
  const [rankedDomains, setRankedDomains] = useState([]);
  const [impactScores, setImpactScores] = useState({});
  const router = useRouter();

  useEffect(() => {
    // Retrieve the ranked domains from localStorage
    const storedRankedDomains = JSON.parse(localStorage.getItem("rankedDomains"));

    if (!storedRankedDomains) {
      router.push("/results"); // Redirect back if no data is found
      return;
    }

    setRankedDomains(storedRankedDomains);

    // Initialize the impactScores state with default values
    const initialScores = storedRankedDomains.reduce((acc, domain) => {
      acc[domain.domain] = 0;
      return acc;
    }, {});
    setImpactScores(initialScores);
  }, [router]);

  const handleSliderChange = (domain, score) => {
    setImpactScores((prevScores) => ({
      ...prevScores,
      [domain]: score,
    }));
  };

  const handleSubmit = () => {
    console.log("Impact Scores:", impactScores);
    // Save scores and navigate to the next step
    localStorage.setItem("impactScores", JSON.stringify(impactScores));
    router.push("/final-summary");
  };

  if (!rankedDomains.length) {
    return <div>Loading...</div>; // Loading state
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6 flex flex-col items-center">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Impact Scoring</h1>
      <div className="w-full max-w-2xl bg-white shadow-md rounded-lg p-6 space-y-6">
        {rankedDomains.map((domain) => (
          <ImpactSlider
            key={domain.domain}
            domain={domain.domain}
            value={impactScores[domain.domain]}
            onChange={(value) => handleSliderChange(domain.domain, value)}
          />
        ))}
      </div>
      <button
        className="mt-6 px-4 py-2 bg-teal-500 text-white rounded-md shadow hover:bg-teal-600"
        onClick={handleSubmit}
      >
        Submit Impact Scores
      </button>
    </div>
  );
}