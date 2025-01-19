"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import ValueChips from "../../../components/ValueChips"; // Chips component

const values = [
  "Adventure",
  "Balance",
  "Freedom",
  "Gratitude",
  "Happiness",
  "Humor",
  "Mindfulness",
  "Optimism",
  "Stability",
  "Spirituality",
  "Security",
  "Tradition",
  "Vitality",
];

export default function WellBeingOrientedPage() {
  const [selectedValues, setSelectedValues] = useState([]);
  const router = useRouter();

  const handleSelect = (value) => {
    setSelectedValues((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  };

  const handleNext = () => {
    localStorage.setItem(
      "wellBeingOrientedValues",
      JSON.stringify(selectedValues)
    );
    router.push("/identify-core-values/social-impact-oriented");
  };

  return (
    <div className="w-full">
          <div className="max-w-7xl px-4 mx-auto pt-8">
            <span className="mb-2 inline-flex items-center rounded-full bg-sand-700 px-2 py-1 text-xs font-medium text-white">
              Identifying Values
            </span>
            <h1 className="text-2xl text-evergreen-200 mb-6">4. Well-Being-Oriented Values</h1>
            <p className="pb-12 text-base text-white font-light">
              Well-being-oriented values center on maintaining balance, health, and personal happiness. These values emphasize the importance of self-care, mindfulness, and creating harmony across various aspects of life. By focusing on well-being, individuals prioritize their physical, mental, and emotional health, leading to reduced stress and an improved quality of life. These values create a strong foundation for sustainable personal and professional growth while enhancing overall life satisfaction.            </p>        
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
                Go to the next value group
            </button>
            </div>
          </div>
        </div>
  );
}