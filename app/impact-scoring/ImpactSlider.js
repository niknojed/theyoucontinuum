"use client";

import React from "react";

export default function ImpactSlider({ domain, value, onChange }) {
  return (
    <div className="space-y-2">
      <h3 className="text-lg font-semibold text-gray-800">{domain}</h3>
      <input
        type="range"
        min="1"
        max="25"
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full"
      />
      <div className="flex justify-between text-sm text-gray-600">
        <span>Low Impact</span>
        <span>Critical Impact</span>
      </div>
      <p className="text-sm text-gray-800">Impact Score: {value}</p>
    </div>
  );
}