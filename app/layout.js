import React from "react";
import "./globals.css"; // Import global styles
import { andika, ptSans } from "./fonts"; // Import fonts
import NavigationBar from "../components/NavigationBar"; // Import the navigation component

export default function Layout({ children }) {
  return (
    <html lang="en" className={`${andika.variable} ${ptSans.variable}`}>
      <body className="text-stone-900 font-sans">
        {/* Universal Navigation Bar */}
        <NavigationBar />

        {/* Main Content */}
        <main className="w-full min-h-screen">
          {children}
        </main>
    
      </body>
    </html>
  );
}