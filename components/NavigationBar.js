"use client"; // Add this at the top

import { useState } from "react";
import { usePathname } from "next/navigation"; // Import usePathname
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // Install Lucide Icons if needed

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); // Get current page path

  return (
    <nav className="w-[90%] max-w-[1280px] sm:w-[90%] max-w-7xl mx-auto bg-white shadow-lg rounded-[120px] fixed top-[32px] left-0 right-0 z-50 pl-8 pr-8">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center">
          <span className="pr-2">
              <Image src="/yc-logo-temp.png" width={40} height={40} alt="The YOU Continuum" />
          </span>
          <span className="font-andika text-[21px] font-normal text-gray-900">The YOU Continuum</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
        {[
            { name: "Home", href: "/" },
            { name: "Philosophy", href: "/philosophy" },
            { name: "Self-Care Compass", href: "/self-care-compass" },
            { name: "About the Creator", href: "/about" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-stone-800 hover:text-evergreen-600 transition-all duration-300 
                ${pathname === link.href ? "text-evergreen-700 font-bold" : ""}`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Icon */}
        <button 
          className="md:hidden text-stone-900 focus:outline-none" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-16 right-6 w-[90%] max-w-[280px] sm:w-[90%] bg-white shadow-lg rounded-b-2xl md:hidden">
          <div className="flex flex-col space-y-4 py-4 px-6">
            {[
                { name: "Home", href: "/" },
                { name: "Philosophy", href: "/philosophy" },
                { name: "Self-Care Compass", href: "/self-care-compass" },
                { name: "About the Creator", href: "/about" },
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
}
