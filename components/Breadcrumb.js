"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { ChevronRightIcon, HomeIcon } from "@heroicons/react/20/solid";

// Define a mapping of paths to breadcrumb labels
const pathMap = {
  "/what-to-expect": "What to Expect",
  "/identify-core-values": "Identify Core Values", // Placeholder (won't be used)
  "/identify-core-values/growth-oriented": "Growth-Oriented",
  "/identify-core-values/relationship-oriented": "Relationship-Oriented",
  "/identify-core-values/achievement-oriented": "Achievement-Oriented",
  "/identify-core-values/well-being-oriented": "Well-Being-Oriented",
  "/identify-core-values/social-impact-oriented": "Social Impact-Oriented",
  "/impact-scoring": "Impact Scoring",
  "/impact-scoring/health-and-wellness": "Health & Wellness",
  "/impact-scoring/career-and-ambitions": "Career & Ambitions",
  "/impact-scoring/family-and-relationships": "Family & Relationships",
  "/impact-scoring/personal-growth-and-education": "Personal Growth & Education",
  "/impact-scoring/finances": "Finances",
  "/impact-scoring/recreation-and-leisure": "Recreation & Leisure",
  "/impact-scoring/spirituality-and-beliefs": "Spirituality & Beliefs",
  "/impact-scoring/community-and-contribution": "Community & Contribution",
  "/impact-scoring/environment-and-home": "Environment & Home",
  "/results": "Results",
  "/final-summary": "Final Summary",
};

export default function Breadcrumb() {
  const pathname = usePathname(); // Get current URL path

  // Split pathname into segments
  let segments = pathname.split("/").filter(Boolean);

  // Check if we are in `identify-core-values` and replace it with `what-to-expect`
  if (segments[0] === "identify-core-values") {
    segments[0] = "what-to-expect";
  }

  // Reconstruct full paths for breadcrumb links
  const pages = segments.map((segment, index) => {
    const fullPath = `/${segments.slice(0, index + 1).join("/")}`;
    return {
      name: pathMap[fullPath] || segment.replace("-", " "), // Use mapped name or default formatting
      href: fullPath,
      current: index === segments.length - 1, // Highlight last breadcrumb as active
    };
  });

  return (
    <nav aria-label="Breadcrumb" className="flex text-stone-500 pb-2">
      <ol className="flex items-center space-x-4">
        {/* Home Link */}
        <li>
          <Link href="/" className="text-stone-400 hover:text-stone-500">
            <HomeIcon className="w-5 h-5" />
            <span className="sr-only">Home</span>
          </Link>
        </li>

        {/* Dynamic Breadcrumbs */}
        {pages.map((page, index) => (
          <li key={page.href} className="flex items-center">
            <ChevronRightIcon className="w-5 h-5 text-stone-400" />
            <Link
              href={page.href}
              className={`ml-4 text-sm font-medium ${
                page.current ? "text-stone-300" : "text-stone-400 hover:text-stone-500"
              }`}
              aria-current={page.current ? "page" : undefined}
            >
              {page.name}
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  );
}