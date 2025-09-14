import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";
import { FloatingDockDemo } from "@/components/layout/dock";
import { Footer } from "@/components/layout/footer";
import "@/lib/polyfills";
import CookieBanner from "@/components/cookie-banner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ThinkHome - Moderní IT bez starostí",
  description:
    "Zbavte se starostí o technologie a zaměřte se na své podnikání. ThinkHome nabízí kompletní správu firemního IT – od hardware, přes weby až po moderní bezpečnostní řešení.",
  metadataBase: new URL("https://thinkhome.org"),
  openGraph: {
    title: "ThinkHome - Moderní IT bez starostí",
    description:
      "Zbavte se starostí o technologie a zaměřte se na své podnikání. ThinkHome nabízí kompletní správu firemního IT – od hardware, přes weby až po moderní bezpečnostní řešení.",
    url: "https://thinkhome.org",
    siteName: "ThinkHome",
    locale: "cs_CZ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ThinkHome - Moderní IT bez starostí",
    description:
      "Zbavte se starostí o technologie a zaměřte se na své podnikání. ThinkHome nabízí kompletní správu firemního IT – od hardware, přes weby až po moderní bezpečnostní řešení.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <Providers>
          <div className="flex-1 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            {children}
          </div>
          <CookieBanner />
          <Footer />
        </Providers>
        <FloatingDockDemo />
      </body>
    </html>
  );
}
