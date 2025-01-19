"use client"; // Add this to make the file a Client Component

import React, { useState } from "react";
import { useRouter } from "next/navigation"; // Import useRouter
import ValueGroup from "../../components/ValueGroup";

const valueGroups = [
  {
    title: "Growth Oriented",
    values: [
      "Achievement", "Adventure", "Authenticity", "Balance", "Contribution",
      "Courage", "Creativity", "Curiosity", "Discipline", "Growth",
      "Independence", "Innovation", "Leadership", "Learning", "Vision", "Wealth",
    ],
  },
  {
    title: "Relationship Oriented",
    values: [
      "Compassion", "Community", "Contribution", "Generosity", "Honesty",
      "Empathy", "Family", "Friendship", "Gratitude", "Humor",
      "Humility", "Kindness", "Love", "Loyalty", "Open-mindedness",
      "Patience", "Respect", "Trust",
    ],
  },
  {
    title: "Achievement Oriented",
    values: [
      "Accountability", "Contribution", "Courage", "Dignity", "Honoring Commitments",
      "Integrity", "Justice", "Leadership", "Passion", "Perseverance",
      "Reliability", "Responsibility", "Success", "Vitality", "Wealth",
    ],
  },
  {
    title: "Well Being Oriented",
    values: [
      "Adventure", "Balance", "Freedom", "Gratitude", "Happiness",
      "Humor", "Mindfulness", "Optimism", "Stability", "Spirituality",
      "Security", "Tradition", "Vitality",
    ],
  },
  {
    title: "Social Impact Oriented",
    values: [
      "Community", "Compassion", "Contribution", "Courage", "Environmentalism",
      "Equality", "Generosity", "Justice", "Leadership", "Responsibility",
      "Service", "Teamwork", "Tradition", "Wealth",
    ],
  },
];

export default function IdentifyCoreValues({ onResults }) {
  const [selectedValues, setSelectedValues] = useState({});
  const router = useRouter(); // Initialize router

  const handleSelect = (group, values) => {
    setSelectedValues((prev) => ({ ...prev, [group]: values }));
  };

  const handleSubmit = () => {
    const results = selectedValues;

    // Save results to LocalStorage
    localStorage.setItem("results", JSON.stringify(results));
    localStorage.setItem(
      "rankedDomains",
      JSON.stringify(calculateRankedDomains(results))
    );

    // Navigate to the results page
    router.push("/results"); // Use the router to navigate
  };

  const calculateRankedDomains = (values) => {
    // Example scoring logic for ranked domains
    return Object.keys(values)
      .map((domain) => ({
        domain,
        score: values[domain]?.length || 0, // Score based on selected value count
      }))
      .sort((a, b) => b.score - a.score); // Sort by score in descending order
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">
        Identify Your Core Values
      </h2>
      {valueGroups.map((group) => (
        <ValueGroup
          key={group.title}
          title={group.title}
          description="Select the values that resonate most with you."
          values={group.values}
          onSelect={handleSelect}
        />
      ))}
      <button
        onClick={handleSubmit}
        className="mt-4 w-full px-4 py-2 bg-teal-500 text-white rounded-md shadow hover:bg-teal-600"
      >
        Get Results
      </button>
    </div>
  );
}