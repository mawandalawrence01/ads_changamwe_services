import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import WhatsAppFloat from "@/components/whatsapp-float";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CyberAds Changamwe - Premium Cyber Café & Software Development Services in Mombasa",
  description: "CyberAds Changamwe: Your trusted cyber café in Mombasa offering internet browsing, printing, photocopying, scanning, web design, mobile apps, and software development. Affordable prices, professional services.",
  keywords: [
    "cyber ads",
    "ads cyber",
    "cyber café changamwe",
    "cyber in changamwe",
    "mombasa cyber",
    "changamwe cyber café",
    "printing services mombasa",
    "internet browsing changamwe",
    "web design mombasa",
    "mobile app development mombasa",
    "software development kenya",
    "stationery shop changamwe",
    "M-Pesa services changamwe",
    "photocopying services",
    "scanning services",
    "lamination changamwe",
    "typing services mombasa",
    "computer accessories mombasa"
  ].join(", "),
  authors: [{ name: "CyberAds Team" }],
  creator: "CyberAds Development Team",
  publisher: "CyberAds Changamwe",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://ads-changamwe-services.vercel.app'),
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'D9h8qRAfBDA-dhJpE62MgpcCPE4_zqwb3daEgi5VQB0',
  },
  openGraph: {
    title: "CyberAds Changamwe - Premium Cyber Café & Software Development in Mombasa",
    description: "Your trusted cyber café in Changamwe, Mombasa offering internet browsing, printing, photocopying, scanning, web design, mobile apps, and software development services.",
    url: "https://ads-changamwe-services.vercel.app",
    siteName: "CyberAds Changamwe",
    locale: "en_KE",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "CyberAds Changamwe - Cyber Café and Software Development Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CyberAds Changamwe - Cyber Café & Software Development",
    description: "Premium cyber services and software development in Changamwe, Mombasa",
    images: ["/og-image.jpg"],
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="D9h8qRAfBDA-dhJpE62MgpcCPE4_zqwb3daEgi5VQB0" />
        <link rel="canonical" href="https://ads-changamwe-services.vercel.app" />
        <meta name="geo.region" content="KE-MBA" />
        <meta name="geo.placename" content="Mombasa, Changamwe" />
        <meta name="geo.position" content="-4.050000;39.666668" />
        <meta name="ICBM" content="-4.050000, 39.666668" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "CyberAds Changamwe",
              "description": "Premium cyber café and software development services in Changamwe, Mombasa",
              "url": "https://ads-changamwe-services.vercel.app",
              "telephone": "+254-123-456-789",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Changamwe",
                "addressLocality": "Mombasa",
                "addressCountry": "Kenya"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "-4.050000",
                "longitude": "39.666668"
              },
              "openingHours": [
                "Mo-Sa 07:00-21:00",
                "Su 08:00-18:00"
              ],
              "areaServed": "Changamwe, Mombasa, Kenya",
              "serviceType": [
                "Internet Browsing",
                "Printing Services",
                "Photocopying",
                "Scanning",
                "Web Design",
                "Mobile App Development",
                "Software Development",
                "Stationery Sales",
                "M-Pesa Services"
              ],
              "priceRange": "$$",
              "sameAs": []
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <WhatsAppFloat />
      </body>
    </html>
  );
}