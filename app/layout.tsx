import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import SessionProvider from "@/components/SessionProvider";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.jiframe.com"),
  title: {
    default: "JiFrame | Wedding Photographer & Video Production in Dhaka",
    template: "%s | JiFrame",
  },
  description:
    "JiFrame captures cinematic wedding photography and professional video production in Dhaka, Bangladesh. Explore services for weddings, portraits, and brand storytelling.",
  keywords: [
    "JiFrame",
    "photographer in Dhaka",
    "videographer in Dhaka",
    "wedding photographer Bangladesh",
    "video production Dhaka",
    "cinematic wedding photography",
    "commercial videography",
    "Video and Reels maker",
    "DOP & camera man"
  ],
  openGraph: {
    title: "JiFrame | Wedding Photographer & Video Production in Dhaka",
    description:
      "Cinematic wedding photography and professional video production services in Dhaka, Bangladesh.",
    url: "https://www.jiframe.com",
    siteName: "JiFrame",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "JiFrame | Wedding Photographer & Video Production in Dhaka",
    description:
      "Cinematic wedding photography and professional video production services in Dhaka, Bangladesh.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <SessionProvider>
          <Navbar />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer/>
        </SessionProvider>
      </body>
    </html>
  );
}
