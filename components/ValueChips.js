"use client";

import React from "react";

export default function ValueChips({ values, selectedValues, onSelect }) {
  return (
    <div className="flex flex-wrap gap-x-5 gap-y-5">
      {values.map((value) => (
        <button
          key={value}
          onClick={() => onSelect(value)}
          className={`px-4 py-2 rounded-full text-sm font-medium ${
            selectedValues.includes(value)
              ? "border-solid border-stone-200 bg-stone-500 border-4 text-evergreen-50"
              : "border-solid border-stone-200 border-2 text-evergreen-50 hover:bg-stone-600"
          }`}
        >
          {value}
        </button>
      ))}
    </div>
  );
}