"use client";

import React, { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

// Life Domain Icons
const domainIcons = {
  "Health & Wellness": "🧘‍♂️",
  "Spirituality & Beliefs": "🛐",
  "Career & Ambition": "💼",
  "Personal Growth & Education": "📚",
  "Finances": "💰",
  "Recreation & Leisure": "🎾",
  "Community & Contribution": "🤝",
  "Family & Relationships": "👨‍👩‍👧",
  "Environment & Home": "🏡",
};

export default function SummaryResultsPage() {
  const [priorityResults, setPriorityResults] = useState([]);
  const [email, setEmail] = useState("");
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const resultsRef = useRef(null); // Ref for PDF generation
  const router = useRouter();

  const impactZones = [
    { name: "Healthy Zone", range: [1, 25], description: "You're in a balanced place. Keep reinforcing positive habits to maintain stability." },
    { name: "Caution Zone", range: [26, 50], description: "Some areas may need attention soon to prevent imbalances. Self-care isn’t one-size-fits-all—it’s about finding what works for YOU." },
    { name: "Action Zone", range: [51, 75], description: "An imbalance is present. Adjustments are needed to realign with your well-being." },
    { name: "Urgent Zone", range: [76, 100], description: "There are significant stressors. Consider taking immediate steps to support yourself." },
    { name: "Crisis Zone", range: [101, Infinity], description: "Your well-being is at risk. It's important to seek support and prioritize care." },
  ];

  useEffect(() => {
    const rankings = JSON.parse(localStorage.getItem("rankings")) || [];
    const impactScores = JSON.parse(localStorage.getItem("impactScores")) || {};

    const calculatePriorityNumbers = () => {
      return rankings.map((ranking) => {
        const { domain: name, percentage } = ranking;
        const domainValue = percentage ? Math.ceil((percentage / 100) * 5) : 1;
        const impactScore = impactScores[name]?.impactScore || 1;
        const detectionScore = impactScores[name]?.detectionScore || 1;
        const priorityNumber = domainValue * impactScore * detectionScore;

        const zone = impactZones.find((z) => priorityNumber >= z.range[0] && priorityNumber <= z.range[1]);

        return {
          name,
          icon: domainIcons[name] || "❓",
          priorityNumber: isNaN(priorityNumber) ? 0 : priorityNumber,
          percentage: percentage || 0,
          impactZone: zone?.name || "Unknown Zone",
          zoneDescription: zone?.description || "No description available.",
        };
      });
    };

    const results = calculatePriorityNumbers()
      .sort((a, b) => b.priorityNumber - a.priorityNumber)
      .slice(0, 3);
    setPriorityResults(results);
  }, []);

  const handleEmailSubmit = async () => {
    if (!email) {
      console.error("Email is required but missing.");
      return;
    }

    const dataToSend = { email, results: priorityResults };

    try {
      const response = await fetch("/api/send-results", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dataToSend),
      });

      if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(`Failed to send email: ${response.status} - ${errorMessage}`);
      }

      console.log("Email sent successfully!");
      setEmailSubmitted(true);
    } catch (error) {
      console.error("Failed to send email:", error);
    }
  };

  // **📄 Function to Generate & Download PDF**
  const handleDownloadPDF = async () => {
    const input = resultsRef.current;
    if (!input) return;

    try {
      const canvas = await html2canvas(input, { scale: 2 });
      const imgData = canvas.toDataURL("image/png");

      const pdf = new jsPDF("p", "mm", "a4");
      const imgWidth = 190; // mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      pdf.addImage(imgData, "PNG", 10, 10, imgWidth, imgHeight);
      pdf.save("Self-Care-Compass-Results.pdf");
    } catch (error) {
      console.error("Error generating PDF:", error);
    }
  };

  return (
    <div className="bg-evergreen-50 pt-[140px] max-w-7xl px-[24px] mx-auto p-6 flex flex-col items-center">
      <h1 className="font-andika text-2xl font-bold text-gray-800 mb-4">Your Self-Care Focus Areas</h1>
      <p className="font-ptSans text-[17px] text-stone-700 text-center max-w-xl mb-8">
        These are the key areas that need your attention right now. Reflect on what they mean for you.
      </p>

      {/* Grid Layout for Top 3 Domains */}
      <div ref={resultsRef} className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
        {priorityResults.map((result, index) => (
          <div 
            key={index}
            className={`p-6 rounded-lg shadow-lg text-center border ${
              index === 0 ? "border-evergreen-600 bg-evergreen-100" : 
              index === 1 ? "border-auburn-500 bg-auburn-50" : 
              "border-rose-500 bg-rose-50"
            }`}
          >
            <div className="text-xl">{result.icon}</div>
            <h2 className="font-andika text-[19px] font-semibold text-gray-900 mt-2">{result.name}</h2>
            <p className="font-ptSans mt-2 text-lg font-bold text-stone-950">Priority Score: {result.priorityNumber}</p>
            <p className="font-ptSans mt-1 text-[15px] text-gray-700">{result.percentage}% of selected values</p>
            <p className="font-ptSans mt-4 text-md font-bold text-stone-950">{result.impactZone}</p>
            <p className="font-ptSans text-sm text-gray-600">{result.zoneDescription}</p>
            <p className="font-ptSans mt-4 text-xs text-gray-700 italic">⭐ Small Step: Reflect on how this domain is affecting your well-being.</p>
          </div>
        ))}
      </div>

      {/* Email Submission & PDF Download Section */}
      <div className="w-full max-w-5xl bg-white shadow-md rounded-lg p-6 mt-8">
        <h3 className="font-ptSans text-[21px] font-semibold text-gray-800 mb-4">Get Your Full Results</h3>
        <p className="font-ptSans text-stone-700 mb-4">Enter your email address to receive a detailed report.</p>
        {emailSubmitted ? (
          <button 
            onClick={handleDownloadPDF} 
            className="font-ptSans mt-4 w-full text-center bg-teal-600 text-white py-2 rounded-md hover:bg-teal-700 transition"
          >
            Download Your PDF
          </button>
        ) : (
          <>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Your email address" className="font-ptSans w-full px-4 py-2 border rounded-md mb-4" />
            <button onClick={handleEmailSubmit} className="font-ptSans px-6 py-3 bg-evergreen-400 text-white text-sm font-medium rounded-[40px] shadow">Send My Results</button>
          </>
        )}
      </div>
    </div>
  );
}