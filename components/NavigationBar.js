"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); // Get current page path

  // Define routes that should use the Self-Care Compass Navbar
  const selfCareCompassRoutes = [
    "/what-to-expect",
    "/impact-scoring-intro",
    "/final-summary",
    "/results",
  ];

  // Include dynamic routes for Impact Scoring and Identify Core Values pages
  const isSelfCareCompassPage =
    selfCareCompassRoutes.includes(pathname) ||
    pathname.startsWith("/impact-scoring") ||
    pathname.startsWith("/identify-core-values");

  const DefaultNavbar = () => (
    <nav className="fixed top-[32px] left-0 right-0 z-50 w-[90%] max-w-[1280px] bg-white shadow-lg rounded-[120px] px-8 py-4 mx-auto flex items-center justify-between">
      
      {/* Logo & Brand */}
      <div className="flex items-center">
        <Image 
          src="/yc-logo-temp.png" 
          width={40} 
          height={40} 
          alt="The YOU Continuum"
        />
        <span className="font-andika text-[21px] font-normal text-gray-900 ml-2">
          The YOU Continuum
        </span>
      </div>

      {/* Desktop Navigation (Visible on md+ screens) */}
      <div className="hidden md:flex space-x-4">
        {[
          { name: "Home", href: "/" },
          { name: "Philosophy", href: "/philosophy" },
          { name: "Self-Care Compass", href: "/self-care-compass" },
          { name: "About the Creator", href: "/about-the-creator" },
        ].map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`text-[14px] text-stone-800 hover:font-bold hover:text-evergreen-600 transition-all duration-300 
              ${pathname === link.href ? "text-evergreen-700 font-bold hover:text-evergreen-700" : ""}`}
          >
            {link.name}
          </Link>
        ))}
      </div>

      {/* Mobile Menu Button (Visible on smaller screens) */}
      <button
        className="md:hidden text-stone-900 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Dropdown Menu */}
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
              <Link
                key={link.href}
                href={link.href}
                className={`text-stone-800 hover:text-evergreen-600 transition-all duration-300 
                  ${pathname === link.href ? "text-evergreen-700 font-bold" : ""}`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );

// === SELF-CARE COMPASS NAVIGATION BAR ===
const SelfCareCompassNavbar = () => (
  <nav className="fixed top-0 left-0 right-0 bg-stone-950 text-white py-4 px-6 md:px-12 flex items-center justify-between shadow-lg z-50">
    <div className="flex items-center">
      <Image src="/self-care-compass-logo.svg" width={292} height={50} alt="Self-Care Compass" />
    </div>
  </nav>
);

return isSelfCareCompassPage ? <SelfCareCompassNavbar /> : <DefaultNavbar />;
}