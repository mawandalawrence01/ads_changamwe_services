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
  title: "CyberAds - Your One-Stop Cyber & Stationery Hub in Changamwe",
  description: "CyberAds in Changamwe, Mombasa offers internet browsing, printing, photocopying, scanning, lamination, typing, stationery sales, computer accessories, and M-Pesa services. Affordable, reliable, and convenient.",
  keywords: "cyber café Changamwe, printing services Changamwe, stationery shop Mombasa, internet café Mombasa, M-Pesa services, photocopying, scanning, lamination",
  other: {
    "google-site-verification": "D9h8qRAfBDA-dhJpE62MgpcCPE4_zqwb3daEgi5VQB0",
  },
  openGraph: {
    title: "CyberAds - Your One-Stop Cyber & Stationery Hub in Changamwe",
    description: "Affordable and reliable cyber café, printing, and stationery services in Changamwe, Mombasa.",
    url: "https://cyberads.co.ke",
    siteName: "CyberAds",
    locale: "en_KE",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <WhatsAppFloat />
      </body>
    </html>
  );
}