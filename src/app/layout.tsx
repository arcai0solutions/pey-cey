import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import { PreloaderClientWrapper } from "@/components/PreloaderClientWrapper";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const ptSerif = localFont({
  src: [
    {
      path: "../../public/fonts/pt-serif-caption/PTSerifCaption-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/pt-serif-caption/PTSerifCaption-Italic.ttf",
      weight: "400",
      style: "italic",
    },
  ],
  variable: "--font-pt-serif",
});

export const metadata: Metadata = {
  title: "Pey and Cey",
  description: "Your Partner in Global Commodity Trade",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${ptSerif.variable} antialiased`}
      >
        <PreloaderClientWrapper>
          {children}
        </PreloaderClientWrapper>
      </body>
    </html>
  );
}
