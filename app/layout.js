import React from "react";
import "./globals.css"; // Import global styles
import Image from 'next/image';
import YClogo from '../public/YC-logo.svg';

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body className="text-gray-900 font-sans">
        {/* Global Header */}
        <header className="w-full text-white py-4">
          <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
            <div>
              <Image src ={YClogo} alt="YC Continuum"/>
            </div>
            <nav>
              <a
                href="/"
                className="text-white hover:underline text-sm"
              >
                Home
              </a>
              <a
                href="/"
                className="text-white hover:underline text-sm ml-9"
              >
                Philosophy
              </a>
              <a
                href="/"
                className="text-white hover:underline text-sm ml-9"
              >
                LDPN Tool
              </a>
              <a
                href="/"
                className="text-white hover:underline text-sm ml-9"
              >
                About the Creator
              </a>
              <a
                href="/"
                className="text-white hover:underline text-sm ml-9"
              >
                Blog
              </a>
            </nav>
          </div>
        </header>

        {/* Main Content */}
        <main className="min-h-screen py-10">
          {children}
        </main>

        {/* Global Footer */}
        <footer className="w-full text-white py-4">
          <div className="max-w-7xl mx-auto px-6 pb-4">
            <p>&copy; {new Date().getFullYear()} LDPN Scoring Tool. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}