"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import ValueChips from "../../../components/ValueChips"; // Chips component
import Breadcrumb from "../../../components/Breadcrumb"; 

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
    <section 
      className="relative flex flex-col justify-center items-center w-full min-h-screen px-6 pt-[140px] md:pt-[40px] pb-0"
      style={{ background: "radial-gradient(100.09% 99.55% at 63.47% 2.34%, #536367 5.17%, #383E41 86.12%)" }}
    >
    <div className="w-full">
      <div className="max-w-4xl px-4 mx-auto pt-8">
        <Breadcrumb/>
        <span className="font-ptSans mb-2 inline-flex items-center rounded-full bg-sand-700 px-2 py-1 text-xs font-medium text-white">
          Identifying Values
        </span>
        <h1 className="font-andika text-2xl text-evergreen-200 mb-6">2. Relationship Oriented Values</h1>
        <p className="font-ptSans pb-4 text-[17px] text-white font-light">
          Relationship-oriented values focus on building and maintaining meaningful connections with others. They prioritize love, trust, compassion, and a sense of belonging within personal and professional relationships. These values significantly impact how individuals interact with family, friends, colleagues, and communities, fostering emotional well-being and strong support systems. By valuing relationships, individuals create deeper connections that inspire kindness, empathy, and shared purpose.        
        </p>        
        
        <div className="pb-8">
          <p className="font-ptSans text-[15px] pb-6 text-sm text-white font-bold">
            Think about what matters most to you in life. Select which values feel the most essential to who you are and who you want to be.          
          </p>
          <ValueChips values={values} selectedValues={selectedValues} onSelect={handleSelect} />
        </div>

        <div className="pt-4">
          <button
            onClick={handleNext}
            className="px-6 py-3 bg-evergreen-400 hover:bg-evergreen-500 active:bg-evergreen-600 font-ptSans text-white text-sm font-medium rounded-[40px] shadow hover:bg-evergreen-600 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-evergreen-400 focus:ring-offset-2 transition duration-150 ease-in-out">
            Go to the next value group
          </button>
        </div>
      </div>
    </div>
    </section>
  );
}