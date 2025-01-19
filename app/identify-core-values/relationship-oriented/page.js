"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import ValueChips from "../../../components/ValueChips"; // Chips component

const values = [
  "Compassion",
  "Community",
  "Contribution",
  "Generosity",
  "Honesty",
  "Empathy",
  "Family",
  "Friendship",
  "Gratitude",
  "Humor",
  "Humility",
  "Kindness",
  "Love",
  "Loyalty",
  "Open-mindedness",
  "Patience",
  "Respect",
  "Trust",
];

export default function RelationshipOrientedPage() {
  const [selectedValues, setSelectedValues] = useState([]);
  const router = useRouter();

  const handleSelect = (value) => {
    setSelectedValues((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  };

  const handleNext = () => {
    localStorage.setItem(
      "relationshipOrientedValues",
      JSON.stringify(selectedValues)
    );
    router.push("/identify-core-values/achievement-oriented");
  };

  return (
    <div className="w-full">
      <div className="max-w-7xl px-4 mx-auto pt-8">
        <span className="mb-2 inline-flex items-center rounded-full bg-sand-700 px-2 py-1 text-xs font-medium text-white">
          Identifying Values
        </span>
        <h1 className="text-2xl text-evergreen-200 mb-6">2. Relationship Oriented Values</h1>
        <p className="pb-12 text-base text-white font-light">
          Relationship-oriented values focus on building and maintaining meaningful connections with others. They prioritize love, trust, compassion, and a sense of belonging within personal and professional relationships. These values significantly impact how individuals interact with family, friends, colleagues, and communities, fostering emotional well-being and strong support systems. By valuing relationships, individuals create deeper connections that inspire kindness, empathy, and shared purpose.        
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
            Go to the next value group
          </button>
        </div>
      </div>
    </div>
  );
}