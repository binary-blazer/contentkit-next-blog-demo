import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Gradient from "@/components/gradient";
import MotionProvider from "@/providers/motion";
import "@/styles/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ContentKit Blog Demo",
  description: "This is a demo blog website built with the ContentKit SDK.",
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
        <MotionProvider>
          <Gradient />
          {children}
        </MotionProvider>
      </body>
    </html>
  );
}
