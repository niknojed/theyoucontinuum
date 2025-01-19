"use client";

import React from "react";

export default function SummaryCard({ domain, score }) {
  return (
    <div className="p-4 border border-gray-300 rounded-lg shadow-sm bg-gray-100">
      <h2 className="text-xl font-semibold text-teal-600">{domain}</h2>
      <p className="text-gray-700">Final Score: {score}</p>
      <p className="text-sm text-gray-600">This is one of your top priorities for self-care and growth.</p>
    </div>
  );
}