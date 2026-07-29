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

const baseUrl = "https://barbon.tech";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Barbon - Technology Risk Intelligence for Insurance",
    template: "%s | Barbon",
  },
  description:
    "Barbon is a Technology Risk Intelligence company. We enable insurers to confidently underwrite cyber and AI risks through continuous technical assessment, real-time risk intelligence, and independent validation.",
  keywords: [
    "technology risk intelligence",
    "cyber insurance",
    "AI risk assurance",
    "cyber risk monitoring",
    "underwriting intelligence",
    "cyber risk scoring",
    "insurtech",
    "cybersecurity insurance",
    "AI governance",
    "vendor assurance",
    "Barbon",
    "insurer",
    "cyber underwriting",
  ],
  authors: [{ name: "Barbon Insurance Technologies" }],
  creator: "Barbon Insurance Technologies",
  publisher: "Barbon Insurance Technologies",
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
    siteName: "Barbon",
    title: "Barbon - Technology Risk Intelligence for Insurance",
    description:
      "Barbon continuously measures cyber and AI risk - providing insurers with the real-time intelligence needed to underwrite modern technology with confidence.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Barbon - Technology Risk Intelligence",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Barbon - Technology Risk Intelligence for Insurance",
    description:
      "Barbon continuously measures cyber and AI risk - providing insurers with the real-time intelligence needed to underwrite modern technology with confidence.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
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
              name: "Barbon Insurance Technologies",
              url: baseUrl,
              logo: `${baseUrl}/logo.png`,
              sameAs: [
                "https://linkedin.com/company/barbon",
              ],
              description:
                "Barbon is a Technology Risk Intelligence company enabling insurers to confidently underwrite cyber and AI risks through continuous technical assessment and real-time risk intelligence.",
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
