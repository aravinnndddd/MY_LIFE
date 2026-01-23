import type { Metadata } from "next";
import { Geist, Geist_Mono, Urbanist } from "next/font/google";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { portfolioConfig } from "./config/portfolio";
import "./globals.css";

gsap.registerPlugin(ScrollTrigger)

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const urbanist = Urbanist({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-heading', // <-- sets a CSS variable
});

export const metadata: Metadata = {
  title: portfolioConfig.seo.title,
  description: portfolioConfig.seo.description,
  keywords: portfolioConfig.seo.keywords,
  authors: [{ name: portfolioConfig.seo.author }],
  creator: portfolioConfig.seo.author,
  openGraph: {
    title: portfolioConfig.seo.title,
    description: portfolioConfig.seo.description,
    url: portfolioConfig.seo.siteUrl,
    siteName: portfolioConfig.personal.name,
    images: portfolioConfig.seo.image ? [
      {
        url: portfolioConfig.seo.image,
        width: 1200,
        height: 630,
        alt: portfolioConfig.seo.title,
      }
    ] : [],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: portfolioConfig.seo.title,
    description: portfolioConfig.seo.description,
    creator: portfolioConfig.personal.socialLinks.find(link => link.platform === 'twitter')?.username,
    images: portfolioConfig.seo.image ? [portfolioConfig.seo.image] : [],
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <style dangerouslySetInnerHTML={{
          __html: `
            :root {
              --color-primary: ${portfolioConfig.branding.primaryColor};
              --color-secondary: ${portfolioConfig.branding.secondaryColor};
              --color-accent: ${portfolioConfig.branding.accentColor};
              --background: ${portfolioConfig.branding.backgroundColor};
              --foreground: ${portfolioConfig.branding.textColor};
              --color-customBlue: ${portfolioConfig.branding.primaryColor};
              --color-neon-green: ${portfolioConfig.branding.primaryColor};
            }
          `
        }} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${urbanist.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
