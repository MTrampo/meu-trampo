import { Inter, Outfit } from "next/font/google";

export const outfitSans = Outfit({
  variable: "--font-outfit-sans",
  subsets: ["latin"],
  weight: ["700", "800", "900"],
});

export const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500"],
});