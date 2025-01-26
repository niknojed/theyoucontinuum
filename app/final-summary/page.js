"use client";

import React, { useEffect, useState } from "react";

export default function SummaryResultsPage() {
  const [priorityResults, setPriorityResults] = useState([]);
  const [email, setEmail] = useState("");
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const impactZones = [
    { name: "Healthy Zone", range: [1, 25], description: "All systems functioning well, requiring only basic maintenance and occasional reflection.", explanation: "You are thriving. Focus on reinforcing routines that support your health and well-being. Continue to honor your values and monitor those routines, remaining flexible when new needs arise." },
    { name: "Caution Zone", range: [26, 50], description: "Early signs of strain or slight imbalance, which may require monitoring and minor adjustments.", explanation: "This zone suggests emerging concerns in your self-care routine. This is an opportunity to preemptively address areas of stress and/or reflect on what might feel atypical. Check to see if certain habits, such as screen time, nutrition, sleep, or personal time need small adjustments to prevent future strain." },
    { name: "Action Zone", range: [51, 75], description: "Noticeable negative effects present, creating an imbalance that needs attention to avoid a decline in well-being.", explanation: "Take intentional action to recalibrate and prioritize yourself. Focus on addressing neglected life domains, such as building stronger relationships, managing financial stress, seeking social support, exercising, and/or reorganizing commitments." },
    { name: "Urgent Zone", range: [76, 100], description: "Major areas of neglect significantly impacting your well-being, requiring immediate steps for correction.", explanation: "This indicates you are nearing burnout or major stress and need to address self-care deficits. Pause and reassess to redirect energy to prioritize self-care, perhaps by taking time away from stressors, consulting a professional, taking a break, or reprioritizing life domains to regain control." },
    { name: "Crisis Zone", range: [101, Infinity], description: "Well-being is critically compromised; intervention and deliberate action is non-negotiable.", explanation: "This is a wake-up call for transformative action, and it is likely you are experiencing burn-out and causing harm to multiple life domains. Seek professional or external supports to restore balance and health. Act urgently by reassessing priorities and implementing robust self-care interventions. A full reassessment of priorities and lifestyle choices is critical to recovery." },
  ];

  useEffect(() => {
    // Fetch rankings and impact scores from localStorage
    const rankings = JSON.parse(localStorage.getItem("rankings")) || [];
    console.log("Rankings from LocalStorage:", rankings);

    const impactScores = JSON.parse(localStorage.getItem("impactScores")) || {};
    console.log("Impact Scores from LocalStorage:", impactScores);

    const calculatePriorityNumbers = () => {
      return rankings.map((ranking) => {
        const { domain: name, percentage } = ranking;

        // Ensure percentage is valid
        const domainValue = percentage ? Math.ceil((percentage / 100) * 5) : 1;

        // Fetch Negative Impact and Detection Level (default values if undefined)
        const impactScore = impactScores[name]?.impactScore || 1;
        const detectionScore = impactScores[name]?.detectionScore || 1;

        // Calculate Priority Number
        const priorityNumber = domainValue * impactScore * detectionScore;

        // Log values for debugging
        console.log(`Domain: ${name}`);
        console.log(`Percentage: ${percentage}%`);
        console.log(`Domain Value: ${domainValue}`);
        console.log(`Negative Impact: ${impactScore}`);
        console.log(`Detection Level: ${detectionScore}`);
        console.log(`Priority Number: ${priorityNumber}`);

        // Determine Impact Zone
        const zone = impactZones.find((z) => priorityNumber >= z.range[0] && priorityNumber <= z.range[1]);

        return {
          name,
          percentage: percentage || 0,
          domainValue,
          priorityNumber: isNaN(priorityNumber) ? 0 : priorityNumber,
          impactZone: zone?.name || "Unknown Zone",
          zoneDescription: zone?.description || "No description available.",
          zoneExplanation: zone?.explanation || "No explanation available.",
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
  
    const dataToSend = {
      email,
      results: priorityResults,
    };
  
    try {
      const response = await fetch("/api/send-results", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dataToSend),
      });
  
      if (!response.ok) {
        // Log response status and error
        const errorMessage = await response.text();
        throw new Error(`Failed to send email: ${response.status} - ${errorMessage}`);
      }
  
      console.log("Email sent successfully!");
      setEmailSubmitted(true);
    } catch (error) {
      console.error("Failed to send email:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6 flex flex-col items-center">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Summary Results</h1>

      <div className="w-full max-w-4xl bg-white shadow-md rounded-lg p-6 mb-6">
        {priorityResults.map((result, index) => (
          <div key={index} className="mb-6">
            <h2 className="text-lg font-semibold text-teal-600">{index + 1}. {result.name}</h2>
            <p className="text-gray-700">Percentage: {result.percentage}%</p>
            <p className="text-gray-700">Priority Number: {result.priorityNumber}</p>
            <p className="text-gray-700">
              <strong>Impact Zone:</strong> {result.impactZone}
            </p>
            <p className="text-gray-600">{result.zoneDescription}</p>
            <p className="text-gray-600">{result.zoneExplanation}</p>
          </div>
        ))}
      </div>

      <div className="w-full max-w-md bg-white shadow-md rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Get Your Full Results</h3>
        <p className="text-gray-700 mb-4">
          Enter your email address to receive a detailed report with all priority information.
        </p>
        {emailSubmitted ? (
          <p className="text-green-600">Thank you! Your results have been sent to {email}.</p>
        ) : (
          <>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="w-full px-4 py-2 border rounded-md mb-4"
            />
            <button
              onClick={handleEmailSubmit}
              className="w-full px-4 py-2 bg-teal-500 text-white rounded-md shadow hover:bg-teal-600"
            >
              Send My Results
            </button>
          </>
        )}
      </div>
    </div>
  );
}