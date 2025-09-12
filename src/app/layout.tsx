import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { FloatingDockDemo } from "./components/dock";

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
    description: "Zbavte se starostí o technologie a zaměřte se na své podnikání. ThinkHome nabízí kompletní správu firemního IT – od hardware, přes weby až po moderní bezpečnostní řešení.",
    metadataBase: new URL('https://thinkhome.org'),
    icons: {
        icon: [
            { url: '/favicon.ico', sizes: '32x32', type: 'image/x-icon' },
            { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
            { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
            { url: '/favicon.svg', type: 'image/svg+xml' },
        ],
        apple: [
            { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
        ],
        shortcut: '/favicon.ico',
    },
    manifest: '/site.webmanifest',
    openGraph: {
        title: "ThinkHome - Moderní IT bez starostí",
        description: "Zbavte se starostí o technologie a zaměřte se na své podnikání. ThinkHome nabízí kompletní správu firemního IT – od hardware, přes weby až po moderní bezpečnostní řešení.",
        url: 'https://thinkhome.org',
        siteName: 'ThinkHome',
        locale: 'cs_CZ',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: "ThinkHome - Moderní IT bez starostí",
        description: "Zbavte se starostí o technologie a zaměřte se na své podnikání. ThinkHome nabízí kompletní správu firemního IT – od hardware, přes weby až po moderní bezpečnostní řešení.",
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
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <FloatingDockDemo />
      </body>
    </html>
  );
}
