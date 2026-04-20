import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";

import { GlobalFrame } from "@/components/layout/global-frame";
import { PageTransition } from "@/components/motion/page-transition";
import { GrainOverlay } from "@/components/ui/GrainOverlay";

export const metadata: Metadata = {
  title: "Darling MarTech v2 Playground",
  description:
    "Interactive template lab for Darling MarTech v2 page systems and motion components.",
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="min-h-screen bg-zinc-950 text-zinc-50 antialiased">
        <GrainOverlay />
        <GlobalFrame>
          <PageTransition>{children}</PageTransition>
        </GlobalFrame>
      </body>
    </html>
  );
}
