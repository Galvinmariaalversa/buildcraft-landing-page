import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

// Load Google Fonts for premium typography
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const viewport = {
  width: "device-width",
  initialScale: 1.0,
};

export const metadata: Metadata = {
  title: "BuildCraft Constructions | Premium Residential & Commercial Builders",
  description:
    "BuildCraft Constructions specializes in luxury residential builds, state-of-the-art commercial construction, bespoke renovations, and high-end interior design.",
  keywords: [
    "construction",
    "luxury home builders",
    "commercial construction",
    "interior design",
    "renovations",
    "premium builders",
    "architectural construction",
  ],
  authors: [{ name: "BuildCraft Team" }],
  robots: "index, follow",
  openGraph: {
    title: "BuildCraft Constructions | Premium Residential & Commercial Builders",
    description:
      "BuildCraft Constructions specializes in luxury residential builds, state-of-the-art commercial construction, bespoke renovations, and high-end interior design.",
    type: "website",
    locale: "en_US",
    siteName: "BuildCraft Constructions",
  },
  twitter: {
    card: "summary_large_image",
    title: "BuildCraft Constructions | Premium Residential & Commercial Builders",
    description:
      "BuildCraft Constructions specializes in luxury residential builds, state-of-the-art commercial construction, bespoke renovations, and high-end interior design.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${outfit.variable} h-full scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-navy-950 text-slate-100 font-sans">
        <Navbar />
        {/* Main layout container with full bleed layout support */}
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
