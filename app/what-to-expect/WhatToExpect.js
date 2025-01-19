import React from "react";

export default function WhatToExpect({ onStart }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6">
      <div className="max-w-lg p-6 bg-white shadow-md rounded-lg">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          What to Expect
        </h1>
        <p className="text-gray-700 mb-4">
          The LDPN Scoring Tool is designed to help you uncover your core values
          and prioritize the areas of your life that matter most. This process
          will take approximately <span className="font-semibold">8–10 minutes</span>.
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-4">
          <li>
            <span className="font-semibold">Step 1:</span> Identify your core
            values.
          </li>
          <li>
            <span className="font-semibold">Step 2:</span> See where your values
            align with life domains.
          </li>
          <li>
            <span className="font-semibold">Step 3:</span> Rank the severity and
            importance of your values.
          </li>
          <li>
            <span className="font-semibold">Step 4:</span> Get actionable
            results, including your top 3 life domains for self-care.
          </li>
        </ul>
        <p className="text-gray-700 mb-6">
          This tool will provide valuable insights to help you focus on what
          truly matters in your life.
        </p>
        <button
          onClick={onStart}
          className="w-full px-4 py-2 bg-teal-500 text-white text-lg font-medium rounded-md shadow hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2"
        >
          Go
        </button>
      </div>
    </div>
  );
}