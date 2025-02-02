import { Andika, PT_Sans } from "next/font/google";

// Load Andika (Bold & Regular)
export const andika = Andika({
  weight: ["400", "700"], // 400 = Regular, 700 = Bold
  subsets: ["latin"],
  variable: "--font-andika",
  display: "swap",
});

// Load PT Sans (All Weights)
export const ptSans = PT_Sans({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-pt-sans",
  display: "swap",
});