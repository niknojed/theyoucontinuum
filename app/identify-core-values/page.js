"use client"; // Ensure this is a Client Component

import React from "react";
import IdentifyCoreValues from "./IdentifyCoreValues";

export default function Page() {
  const handleResults = (selectedValues) => {
    console.log("Selected Values:", selectedValues);
    // Navigate to the next step or handle results
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <IdentifyCoreValues onResults={handleResults} />
    </div>
  );
}