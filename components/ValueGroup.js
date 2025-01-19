"use client"; // Mark this as a Client Component

import React, { useState } from "react";

export default function ValueGroup({ title, description, values, onSelect }) {
  const [selectedValues, setSelectedValues] = useState([]);

  const toggleValue = (value) => {
    const updatedValues = selectedValues.includes(value)
      ? selectedValues.filter((v) => v !== value)
      : [...selectedValues, value];

    setSelectedValues(updatedValues);
    onSelect(title, updatedValues); // Notify parent component of changes
  };

  return (
    <div className="p-4 border border-gray-300 rounded-lg shadow-sm bg-white">
      <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-sm text-gray-600 mb-4">{description}</p>
      <div className="grid grid-cols-2 gap-2">
        {values.map((value) => (
          <label
            key={value}
            className="flex items-center p-2 bg-gray-100 rounded-md hover:bg-gray-200 cursor-pointer"
          >
            <input
              type="checkbox"
              value={value}
              checked={selectedValues.includes(value)}
              onChange={() => toggleValue(value)}
              className="w-4 h-4 text-teal-500 border-gray-300 focus:ring-teal-400"
            />
            <span className="ml-2 text-gray-700">{value}</span>
          </label>
        ))}
      </div>
    </div>
  );
}