import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
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

const GTM_ID = "GTM-KRNMLW6C";
const GA4_ID = "G-273Q8CJ278";
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
    "active risk underwriting",
    "cyber telemetry",
    "cyber risk assessment",
    "insurance technology",
    "risk intelligence platform",
    "Barbon Intelligent Technologies",
  ],
  authors: [{ name: "Barbon Intelligent Technologies" }],
  creator: "Barbon Intelligent Technologies",
  publisher: "Barbon Intelligent Technologies",
  category: "Cyber Insurance Technology",
  alternates: {
    canonical: baseUrl,
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
        {/* Organization schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Barbon Intelligent Technologies",
              alternateName: "Barbon",
              url: baseUrl,
              logo: `${baseUrl}/logo.png`,
              sameAs: [
                "https://linkedin.com/company/barbon",
              ],
              description:
                "Barbon is a Technology Risk Intelligence company enabling insurers to confidently underwrite cyber and AI risks through continuous technical assessment and real-time risk intelligence.",
              contactPoint: {
                "@type": "ContactPoint",
                email: "hello@barbon.tech",
                telephone: "+25470696363",
                contactType: "customer service",
                availableLanguage: "English",
              },
              areaServed: "Worldwide",
              knowsAbout: [
                "Cyber Insurance",
                "AI Risk Assessment",
                "Technology Risk Intelligence",
                "Cyber Risk Underwriting",
                "Continuous Security Monitoring",
              ],
            }),
          }}
        />
        {/* WebSite schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Barbon",
              url: baseUrl,
              description:
                "Technology Risk Intelligence for the Insurance Industry.",
            }),
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col antialiased">
        {/* GTM noscript fallback — must be immediately after <body> open */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
            title="Google Tag Manager"
          />
        </noscript>

        {/* Skip to main content — accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:px-4 focus:py-2 focus:bg-[#0165FC] focus:text-white focus:rounded-[6px] focus:text-[14px] focus:font-medium focus:outline-none focus:shadow-lg"
        >
          Skip to main content
        </a>

        {children}

        {/* Google Tag Manager — afterInteractive is the documented strategy for tag managers */}
        <Script
          id="gtm-loader"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`,
          }}
        />

        {/* Google Analytics 4 — GA4 measurement ID: G-273Q8CJ278 */}
        <Script
          id="ga4-loader"
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`}
        />
        <Script
          id="ga4-config"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA4_ID}');`,
          }}
        />
      </body>
    </html>
  );
}
