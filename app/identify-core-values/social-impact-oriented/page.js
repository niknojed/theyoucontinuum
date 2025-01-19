"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import ValueChips from "../../../components/ValueChips"; // Chips component

const values = [
  "Community",
  "Compassion",
  "Contribution",
  "Courage",
  "Environmentalism",
  "Equality",
  "Generosity",
  "Justice",
  "Leadership",
  "Responsibility",
  "Service",
  "Teamwork",
  "Tradition",
  "Wealth",
];

export default function SocialImpactOrientedPage() {
  const [selectedValues, setSelectedValues] = useState([]);
  const router = useRouter();

  const handleSelect = (value) => {
    setSelectedValues((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  };

  const handleNext = () => {
    // Save selected values for this group
    localStorage.setItem(
      "socialImpactOrientedValues",
      JSON.stringify(selectedValues)
    );

    // Aggregate all selected values and navigate to the Results Page
    const allValues = {
      Growth: JSON.parse(localStorage.getItem("growthOrientedValues") || "[]"),
      Relationship: JSON.parse(
        localStorage.getItem("relationshipOrientedValues") || "[]"
      ),
      Achievement: JSON.parse(
        localStorage.getItem("achievementOrientedValues") || "[]"
      ),
      WellBeing: JSON.parse(
        localStorage.getItem("wellBeingOrientedValues") || "[]"
      ),
      SocialImpact: selectedValues,
    };

    localStorage.setItem("results", JSON.stringify(allValues));
    router.push("/results"); // Navigate to the Results Page
  };

  return (
    <div className="w-full">
      <div className="max-w-7xl px-4 mx-auto pt-8">
        <span className="mb-2 inline-flex items-center rounded-full bg-sand-700 px-2 py-1 text-xs font-medium text-white">
          Identifying Values
        </span>
        <h1 className="text-2xl text-evergreen-200 mb-6">5. Social Impact-Oriented Values</h1>
        <p className="pb-12 text-base text-white font-light">
          Social impact-oriented values reflect a deep commitment to making a positive difference in the world. These values emphasize contribution, service, justice, and environmental stewardship, driving individuals to advocate for meaningful causes and contribute to their communities. By focusing on social impact, individuals connect their personal actions to a greater good, finding purpose and fulfillment through their efforts to leave a lasting, positive legacy.
        </p>        
        <div className="pb-8">
          <p className="pb-6 text-sm text-white font-bold">
            Think about what matters most to you in life. Select which values feel the most essential to who you are and who you want to be.          
          </p>
          <ValueChips values={values} selectedValues={selectedValues} onSelect={handleSelect} />
        </div>
      
        <div className="pt-4">
          <button
            onClick={handleNext}
            className="px-6 py-3 bg-evergreen-400 hover:bg-evergreen-500 active:bg-evergreen-600 text-white text-sm font-medium rounded-[40px] shadow hover:bg-green-600 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-evergreen-400 focus:ring-offset-2 transition duration-150 ease-in-out">
            Review Results
          </button>
        </div>
      </div>
    </div>
  );
}