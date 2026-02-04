import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mile High Pickle Academy | Denver's Premier Youth Pickleball Program",
  description:
    "Premium pickleball training for ages 5-18 in the Denver metro area. Expert coaching, competitive development, and a love for the game. Join the waitlist today.",
  keywords: [
    "pickleball",
    "youth pickleball",
    "Denver pickleball",
    "pickleball academy",
    "junior pickleball",
    "kids pickleball",
    "pickleball training",
    "DUPR",
    "pickleball lessons Denver",
  ],
  openGraph: {
    title: "Mile High Pickle Academy",
    description:
      "Denver's premier youth pickleball academy for ages 5-18. Expert coaching, competitive pathways, and lifelong love for the game.",
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
      </body>
    </html>
  );
}
