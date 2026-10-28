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
  title: "DeployMedia | Full-Stack Web Development, n8n Automation & Performance Paid Ads",
  description: "Senior operators building high-speed Next.js and WordPress applications, automating revenue workflows with n8n, and scaling Google, Meta & LinkedIn Ads for high-growth tech companies and modern brands.",
  keywords: [
    "DeployMedia",
    "Deploy Media",
    "Next.js web development agency",
    "Headless WordPress development",
    "React web apps",
    "n8n automation agency",
    "Performance marketing agency",
    "Google Ads management",
    "Meta Ads scaling",
    "LinkedIn B2B Ads",
    "Server-side tracking GTM",
    "Conversion rate optimization",
  ],
  authors: [{ name: "DeployMedia Team" }],
  openGraph: {
    title: "DeployMedia | High-Speed Code Meets High-ROAS Media",
    description: "Senior full-stack developers and media buyers who build lightning-fast Next.js websites, automate workflows with n8n, and run performance ads engineered for pipeline.",
    url: "https://deploymedia.io",
    siteName: "DeployMedia",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DeployMedia | Full-Stack Web Development & Performance Ads",
    description: "Next.js 15, Headless WordPress, n8n automations and multi-channel performance media scaling.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
