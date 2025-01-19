"use client";

import React from "react";

export default function ResultsSummary({ results, rankedDomains }) {
  return (
    <div className="w-full max-w-2xl bg-white shadow-md rounded-lg p-6">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Top Life Domains</h2>
      <ol className="list-decimal list-inside mb-6">
        {rankedDomains.map((domain, index) => (
          <li key={index} className="text-gray-700">
            <span className="font-semibold">{domain.domain}</span>: {domain.score} points
          </li>
        ))}
      </ol>
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Selected Values</h2>
      <div>
        {Object.keys(results).map((domain) => (
          <div key={domain} className="mb-4">
            <h3 className="font-semibold text-teal-600">{domain}</h3>
            <ul className="list-disc list-inside text-gray-700">
              {results[domain].map((value, index) => (
                <li key={index}>{value}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}