"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

export default function BackButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="flex items-center text-stone-50 hover:text-stone-100 transition font-base font-[12px]"
    >
      <ArrowLeft size={16} className="mr-2" />
      Go Back
    </button>
  );
}