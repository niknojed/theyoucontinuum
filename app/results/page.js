"use client";

import React, { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { calculateLifeDomainScores, lifeDomains } from "../constants/lifeDomains";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale
} from "chart.js";
import { Pie } from "react-chartjs-2";

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale);

export default function ResultsPage() {
  const [chartData, setChartData] = useState(null);
  const [groupedValues, setGroupedValues] = useState({});
  const [showValues, setShowValues] = useState(false);
  const router = useRouter();
  const chartRef = useRef(null);

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


    // Prepare chart data for the pie chart
    const labels = rankings.map((item) => item.domain);
    const data = rankings.map((item) => item.percentage);
    const backgroundColors = [
      "#6e9980", "#3a614d", "#d6969b", "#ad515f", "#fabe25",
      "#d97607", "#bc580a", "#b5895a", "#20342b"
    ]; // Distinct colors for each domain

    setChartData({
      labels,
      datasets: [
        {
          label: "Percentage of Selected Values",
          data,
          backgroundColor: backgroundColors,
          borderColor: "#ffffff",
          borderWidth: 2,
        },
      ],
    });

    // Find the index of the highest percentage slice
    const maxIndex = data.indexOf(Math.max(...data));

    // Delay setting tooltip to avoid rendering issues
    setTimeout(() => {
      if (chartRef.current) {
        const chartInstance = chartRef.current;
        chartInstance.setActiveElements([{ datasetIndex: 0, index: maxIndex }]);
        chartInstance.tooltip.setActiveElements([{ datasetIndex: 0, index: maxIndex }]);
        chartInstance.update();
      }
    }, 500);

  }, [router]);

  const handleNextStep = () => {
    router.push("/impact-scoring-intro");
  };

  if (!chartData || !Object.keys(groupedValues).length) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-evergreen-50 pt-[140px] max-w-7xl px-[24px] mx-auto p-6 flex flex-col items-center">
      <h1 className="font-andika text-2xl font-bold text-gray-800 mb-6">Your Life Domain Rankings</h1>

      {/* Pie Chart & Legend Side-by-Side (2-Column Layout) */}
      <div className="w-full max-w-4xl p-6 mb-6 flex flex-col md:flex-row items-center md:items-start">
        
        {/* Pie Chart */}
        <div className="w-full md:w-1/2 flex justify-center">
          <Pie
            ref={chartRef}
            data={chartData}
            options={{
              responsive: true,
              plugins: {
                tooltip: {
                  callbacks: {
                    label: (tooltipItem) => 
                      `${tooltipItem.raw}% of values selected`
                  },
                },
                legend: {
                  display: false, // Hide default legend to use a custom one
                },
              },
            }}
          />
        </div>

        {/* Custom Legend - Right of Pie Chart on Desktop, Below on Mobile */}
        <div className="w-full md:w-1/2 mt-6 ml-8 md:mt-10 flex flex-col space-y-2">
          {chartData.labels.map((label, index) => (
            <div key={index} className="flex items-center space-x-2 text-gray-700 text-sm">
              <span 
                className="w-4 h-4 rounded-full inline-block"
                style={{ backgroundColor: chartData.datasets[0].backgroundColor[index] }}
              ></span>
              <span>{label} ({chartData.datasets[0].data[index]}%)</span>
            </div>
          ))}
        </div>
      </div>

      {/* Collapsible Section */}
      <div className="w-full max-w-3xl bg-white shadow-md rounded-lg p-6 mb-6">
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