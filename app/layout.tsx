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
  title: 'CatenaryLabs',
  description: 'CatenaryLabs is a research-driven company building for the decentralised economy.',
  keywords: ['DeFi', 'L2', 'Blockchain', 'Decentralised Economy', 'Research'],
  metadataBase: new URL('https://catenarylabs.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'CatenaryLabs',
    description: 'Research-driven company building for the decentralised economy',
    url: 'https://catenarylabs.com',
    siteName: 'CatenaryLabs',
    images: [
      {
        url: '/logo.svg',
        width: 800,
        height: 600,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CatenaryLabs',
    description: 'Research-driven company building for the decentralised economy',
    creator: '@catenarylabs',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-mono text-xs`}
      >
        {children}
      </body>
    </html>
  );
}
