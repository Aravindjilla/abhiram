import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Abhiram Constructions | Luxury Home Builders in Hyderabad",
  description: "Expert Construction in Uppal & Ghatkesar starting at ₹1499/- SFT. Specialists in luxury duplexes, independent houses, and premium apartments. Building trust since 2010.",
  keywords: ["Construction Uppal", "Builders Ghatkesar", "Abhiram Constructions", "Luxury Duplex Hyderabad", "House Construction Cost Hyderabad"],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Abhiram Constructions",
  "image": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
  "url": "https://abhiramconstructions.com",
  "telephone": "+917799954555",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Uppal - Ghatkesar Road",
    "addressLocality": "Hyderabad",
    "addressRegion": "TS",
    "postalCode": "500092",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 17.4399,
    "longitude": 78.5820
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "opens": "09:00",
    "closes": "18:00"
  },
  "priceRange": "₹₹₹"
};

import SmoothScrollProvider from "@/components/SmoothScroll";

import { ThemeProvider } from "@/components/ThemeProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased transition-colors duration-500`}
      >
        <ThemeProvider attribute="data-theme" defaultTheme="light" enableSystem>
          <SmoothScrollProvider>
            <Header />
            <main className="min-h-screen">
              {children}
            </main>
            <Footer />
            <WhatsAppButton />
          </SmoothScrollProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
