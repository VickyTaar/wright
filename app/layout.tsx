import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const baseUrl = "https://wrightinsurance.io";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Wright — Modern Insurance Infrastructure",
    template: "%s | Wright",
  },
  description:
    "Barbon OS is an AI-powered operating system for insurance companies. Built for insurers, brokers, bancassurance providers, agencies, and embedded insurance businesses.",
  keywords: [
    "insurance technology",
    "insurtech",
    "insurance operating system",
    "policy administration",
    "claims management",
    "AI insurance",
    "Barbon OS",
    "Wright",
    "insurance platform",
    "insurance software",
  ],
  authors: [{ name: "Wright" }],
  creator: "Wright",
  publisher: "Wright",
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseUrl,
    siteName: "Wright",
    title: "Wright — Modern Insurance Infrastructure",
    description:
      "Barbon OS is an AI-powered operating system for insurance companies. Built for insurers, brokers, bancassurance providers, and agencies.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Wright — Barbon OS",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wright — Modern Insurance Infrastructure",
    description:
      "Barbon OS is an AI-powered operating system for insurance companies.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Wright",
              url: baseUrl,
              logo: `${baseUrl}/logo.svg`,
              sameAs: [
                "https://linkedin.com/company/wright",
                "https://github.com/wright",
              ],
              description:
                "Wright builds Barbon OS — an AI-powered operating system for insurance companies.",
            }),
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col antialiased">
        {children}
      </body>
    </html>
  );
}
