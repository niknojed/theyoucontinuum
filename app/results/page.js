"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { calculateLifeDomainScores, lifeDomains } from "../constants/lifeDomains";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

// Register Chart.js components
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

export default function ResultsPage() {
  const [chartData, setChartData] = useState(null);
  const [groupedValues, setGroupedValues] = useState({});
  const [showValues, setShowValues] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Retrieve the user's selected values from localStorage
    const storedResults = JSON.parse(localStorage.getItem("results"));
    console.log("Selected values from Phase 1:", storedResults);

    if (!storedResults) {
      router.push("/identify-core-values"); // Redirect if no data is found
      return;
    }

    // Flatten the selected values into an array and remove duplicates
    const flatValues = [...new Set(Object.values(storedResults).flat())];
    console.log("Flattened selected values:", flatValues);

    // Group selected values by Life Domain
    const grouped = Object.entries(lifeDomains).reduce((acc, [domain, values]) => {
      const matchingValues = flatValues.filter((value) => values.includes(value));
      if (matchingValues.length > 0) {
        acc[domain] = matchingValues;
      }
      return acc;
    }, {});
    setGroupedValues(grouped);
    console.log("Grouped values by Life Domain:", grouped);

    // Calculate percentages for Life Domains
    const rankings = calculateLifeDomainScores(flatValues);
    console.log("Calculated ranked domains:", rankings);

    // Save rankings to localStorage for later use
    localStorage.setItem("rankings", JSON.stringify(rankings));

    // Prepare chart data
    const labels = rankings.map((item) => item.domain);
    const data = rankings.map((item) => item.percentage);

    setChartData({
      labels,
      datasets: [
        {
          label: "Percentage of Selected Values",
          data,
          backgroundColor: "rgba(54, 162, 235, 0.5)",
          borderColor: "rgba(54, 162, 235, 1)",
          borderWidth: 1,
        },
      ],
    });
  }, [router]);

  const handleNextStep = () => {
    router.push("/impact-scoring-intro");
  };

  if (!chartData || !Object.keys(groupedValues).length) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6 flex flex-col items-center">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Your Life Domain Rankings</h1>
      <div className="w-full max-w-4xl bg-white shadow-md rounded-lg p-6 mb-6">
        <Bar
          data={chartData}
          options={{
            responsive: true,
            plugins: {
              legend: {
                display: false,
              },
              tooltip: {
                callbacks: {
                  label: (tooltipItem) =>
                    `${tooltipItem.raw}% of values selected`,
                },
              },
            },
            scales: {
              y: {
                beginAtZero: true,
                max: 100,
                ticks: {
                  callback: (value) => `${value}%`,
                },
              },
            },
          }}
        />
      </div>

      {/* Collapsible Section */}
      <div className="w-full max-w-4xl bg-white shadow-md rounded-lg p-6 mb-6">
        <button
          onClick={() => setShowValues(!showValues)}
          className="w-full text-left text-lg font-semibold text-teal-600 focus:outline-none"
        >
          {showValues ? "Hide the values I selected" : "Show the values I selected"}
        </button>
        {showValues && (
          <div className="mt-4 space-y-4">
            {Object.entries(groupedValues).map(([domain, values]) => (
              <div key={domain}>
                <h3 className="text-md font-semibold text-teal-600">{domain}</h3>
                <ul className="list-disc list-inside">
                  {values.map((value, index) => (
                    <li key={index} className="text-gray-700">{value}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Next Step Button */}
      <button
        className="px-4 py-2 bg-teal-500 text-white rounded-md shadow hover:bg-teal-600"
        onClick={handleNextStep}
      >
        Proceed to Impact Scoring
      </button>
    </div>
  );
}