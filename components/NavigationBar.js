"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { HomeIcon } from "@heroicons/react/24/outline";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); // ✅ Get current pathname immediately

  // 🔹 Normalize Pathname (Remove Trailing Slash)
  const normalizedPath = pathname.replace(/\/$/, "");

  console.log("Current Pathname:", normalizedPath);
  console.log(
    "Is SelfCareCompassPage:",
    normalizedPath.startsWith("/impact-scoring") ||
      normalizedPath.startsWith("/identify-core-values") ||
      normalizedPath === "/what-to-expect"
  );

  // 🔹 Define routes for Self-Care Compass Navbar
  const selfCareCompassRoutes = [
    "/what-to-expect",
    "/impact-scoring-intro",
    "/final-summary",
    "/results",
  ];

  const isSelfCareCompassPage =
    selfCareCompassRoutes.includes(normalizedPath) ||
    normalizedPath.startsWith("/impact-scoring") ||
    normalizedPath.startsWith("/identify-core-values");

  // 🔹 Default Navbar
  const DefaultNavbar = () => (
    <nav className="fixed top-[32px] left-0 right-0 z-50 w-[90%] max-w-[1280px] bg-white shadow-lg rounded-[120px] px-8 py-4 mx-auto flex items-center justify-between">
      <div className="flex items-center">
        <Image src="/yc-logo-full.png" width={225} height={90} alt="The YOU Continuum" />
      </div>
      <div className="hidden md:flex space-x-5">
        {[
          { name: "Home", href: "/" },
          { name: "Philosophy", href: "/philosophy" },
          { name: "Self-Care Compass", href: "/self-care-compass" },
          { name: "About the Creator", href: "/about-the-creator" },
          { name: "Blog", href: "/blog" },
        ].map((link) => (
          <Link key={link.href} href={link.href} prefetch={false}>
            <span
              className={`text-[16px] transition-all duration-300 ${
                normalizedPath === link.href
                  ? "text-evergreen-700 font-bold"
                  : "text-stone-800 hover:font-bold hover:text-evergreen-600"
              }`}
            >
              {link.name}
            </span>
          </Link>
        ))}
      </div>
      <button className="md:hidden text-stone-900 focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>
      {isOpen && (
        <div className="absolute top-16 right-6 w-[90%] max-w-[280px] sm:w-[90%] bg-white shadow-lg rounded-b-2xl md:hidden">
          <div className="flex flex-col space-y-4 py-4 px-6">
            {[
              { name: "Home", href: "/" },
              { name: "Philosophy", href: "/philosophy" },
              { name: "Self-Care Compass", href: "/self-care-compass" },
              { name: "About the Creator", href: "/about-the-creator" },
              { name: "Blog", href: "/blog" },
            ].map((link) => (
              <Link key={link.href} href={link.href} prefetch={false}>
                <span
                  className={`text-[16px] transition-all duration-300 ${
                    normalizedPath === link.href
                      ? "text-evergreen-700 font-bold"
                      : "text-stone-800 hover:font-bold hover:text-evergreen-600"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );

  // 🔹 Self-Care Compass Navigation Bar
  const SelfCareCompassNavbar = () => (
    <nav className="fixed top-0 left-0 right-0 bg-stone-950 text-white py-4 px-6 md:px-12 flex items-center justify-between shadow-lg z-50">
      <div className="flex items-center">
        <Image src="/self-care-compass-logo.svg" width={292} height={50} alt="Self-Care Compass" />
      </div>
      <a href="/" className="text-white text-[17px] md:text-[17px] font-medium hover:underline ml-auto pl-4">
        <HomeIcon className="w-7 h-7 text-white hover:text-stone-400" />
      </a>
    </nav>
  );

  return isSelfCareCompassPage ? <SelfCareCompassNavbar /> : <DefaultNavbar />;
}