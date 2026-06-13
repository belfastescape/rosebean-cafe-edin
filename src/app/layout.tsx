import type { Metadata } from "next";
import {
  Fraunces,
  Caveat,
  DM_Sans,
  Playfair_Display,
  Figtree,
  Newsreader,
  Hanken_Grotesk,
  Cormorant_Garamond,
  Nunito,
} from "next/font/google";
import "./globals.css";
import { BUSINESS } from "@/content/business";
import { SITE } from "@/content/site";
import { getThemeVars } from "@/lib/theme";

// All font pairs are loaded unconditionally; getThemeVars() activates the
// chosen --font-display / --font-body pair via the <html> style attribute.
const fraunces = Fraunces({ subsets: ["latin"], axes: ["opsz"], variable: "--font-fraunces", display: "swap" });
const caveat = Caveat({ subsets: ["latin"], variable: "--font-caveat", display: "swap" });
const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-dmsans", display: "swap" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair", display: "swap" });
const figtree = Figtree({ subsets: ["latin"], variable: "--font-figtree", display: "swap" });
const newsreader = Newsreader({ subsets: ["latin"], variable: "--font-newsreader", display: "swap" });
const hanken = Hanken_Grotesk({ subsets: ["latin"], variable: "--font-hanken", display: "swap" });
const cormorant = Cormorant_Garamond({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-cormorant", display: "swap" });
const nunito = Nunito({ subsets: ["latin"], variable: "--font-nunito", display: "swap" });

const fontVars = [
  fraunces.variable,
  caveat.variable,
  dmSans.variable,
  playfair.variable,
  figtree.variable,
  newsreader.variable,
  hanken.variable,
  cormorant.variable,
  nunito.variable,
].join(" ");

export const metadata: Metadata = {
  title: SITE.meta.title,
  description: SITE.meta.description,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={fontVars}
      style={getThemeVars(BUSINESS.palette, BUSINESS.fontSet)}
    >
      <body>{children}</body>
    </html>
  );
}
