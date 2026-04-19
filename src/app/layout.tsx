import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-poppins",
  preload: true,
});
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DeferredStyles from "@/components/DeferredStyles";
import ScrollToTopWrapper from "@/components/ScrollToTopWrapper";
import WebVitalsTracker from "@/components/WebVitalsTracker";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#06091F",
  viewportFit: "cover",
  interactiveWidget: "resizes-visual",
};

export const metadata: Metadata = {
  metadataBase: new URL('https://royalxcasinopakistan.pk'),
  title: {
    default: "Royal X Casino APK Download | Real Earning App Pakistan 2026",
    template: "%s | Royal X Casino"
  },
  description: "Royal X Casino 2026 - Pakistan's #1 real money gaming app. Download Royal X Casino APK, play Aviator, Teen Patti, Crash, Mines & win real cash in PKR. Fast withdrawals via JazzCash & EasyPaisa. Join 1000K+ players!",
  keywords: [
    "Royal X Casino",
    "royal x casino apk",
    "royal x casino download",
    "royal x casino app",
    "royal x casino pakistan",
    "royal x casino online",
    "download royal x casino",
    "royal x casino real money",
    "royal x casino 2026",
    "royal x casino earning app",
    "Pakistan casino games",
    "Teen Patti game",
    "Aviator game",
    "Crash game",
    "Mines game",
    "earn money playing games",
    "Android gaming app 2026",
    "JazzCash gaming",
    "EasyPaisa gaming",
    "mobile casino games",
    "real money games Pakistan",
    "casino earning app",
    "Teen Patti online",
    "Dragon vs Tiger",
    "best earning app Pakistan",
    "royal x casino game download",
    "play casino online Pakistan"
  ],
  authors: [{ name: "Royal X Casino Team" }],
  creator: "Royal X Casino",
  publisher: "Royal X Casino",
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
  icons: {
    icon: [
      { url: '/favicon.ico', type: 'image/x-icon', sizes: 'any' },
      { url: '/royal-x-casino-logo.webp', type: 'image/webp', sizes: '192x192' },
      { url: '/royal-x-casino.webp', type: 'image/webp', sizes: '1024x1024' }
    ],
    apple: [
      { url: '/royal-x-casino-logo.webp', sizes: '180x180' }
    ],
    shortcut: [
      { url: '/favicon.ico', type: 'image/x-icon' }
    ]
  },
  verification: {
    google: "8a7c21f6e90a89ef",
  },
  alternates: {
    canonical: "https://royalxcasinopakistan.pk",
  },
  openGraph: {
    title: "Royal X Casino Pakistan v1.230 Free Download Official APK",
    description: "Royal X Casino 2026 - Pakistan's #1 card game platform. Join 1000K+ players. Play Teen Patti, Rummy & more. Earn real money with JazzCash & EasyPaisa. Download now!",
    url: "https://royalxcasinopakistan.pk",
    siteName: "Royal X Casino",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://royalxcasinopakistan.pk/feature/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Royal X Casino - Premier Card Gaming Platform",
      },
      {
        url: "https://royalxcasinopakistan.pk/feature/og-image-square.webp",
        width: 800,
        height: 800,
        alt: "Royal X Casino - Premier Card Gaming Platform",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Royal X Casino Pakistan v1.230 Free Download Official APK",
    description: "Royal X Casino 2026 - Pakistan's #1 card game platform. Join 1000K+ players. Play Teen Patti, Rummy & more. Earn real money with JazzCash & EasyPaisa. Download now!",
    creator: "@royalxcasino",
    images: [
      {
        url: "https://royalxcasinopakistan.pk/feature/twitter-card.webp",
        width: 1200,
        height: 600,
        alt: "Royal X Casino - Premier Card Gaming Platform",
      }
    ],
  },
  applicationName: "Royal X Casino",
  category: "Gaming",
  classification: "Card Gaming Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.variable} suppressHydrationWarning>
      <head>
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" sizes="16x16 32x32" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="icon" href="/royal-x-casino-logo.webp" type="image/webp" sizes="192x192" />
        <link rel="icon" href="/royal-x-casino.webp" type="image/webp" sizes="1024x1024" />
        <link rel="apple-touch-icon" href="/royal-x-casino-logo.webp" sizes="180x180" />
        
        {/* Preconnect to external domains for faster loading */}
        <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        
        {/* Defer manifest to avoid critical path (374ms latency) - load after page interactive */}
        <Script id="deferred-manifest" strategy="lazyOnload">
          {`(function(){var l=document.createElement('link');l.rel='manifest';l.href='/manifest.json';document.head.appendChild(l);})();`}
        </Script>
        {/* Google Analytics - only load if GA ID is set in env (use NEXT_PUBLIC_GA_MEASUREMENT_ID) */}
        {typeof process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID === 'string' &&
         process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID &&
         !/^G-XXXXXXXXXX$/i.test(process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID) && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
              strategy="lazyOnload"
            />
            <Script id="google-analytics" strategy="lazyOnload">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}', {
                  page_path: window.location.pathname,
                  send_page_view: false,
                  transport_type: 'beacon'
                });
              `}
            </Script>
          </>
        )}
      </head>
      <body
        className={`${poppins.className} antialiased text-white min-h-screen flex flex-col`}
        style={{ minHeight: "100vh" }}
        suppressHydrationWarning
      >
        <div className="stars-bg fixed inset-0 z-0 opacity-20"></div>
        <Header />
        <main className="relative z-10 min-w-0 max-w-full overflow-x-hidden">
        {children}
        </main>
        <DeferredStyles />
        <Footer />
        <ScrollToTopWrapper />
        <WebVitalsTracker />
        
        {/* Structured data for Organization */}
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Royal X Casino",
              "url": "https://royalxcasinopakistan.pk",
              "logo": "https://royalxcasinopakistan.pk/royal-x-casino-logo.webp",
              "description": "Royal X Casino is Pakistan's premier card gaming platform, offering Teen Patti, Rummy, and many other card games with real cash rewards.",
              "sameAs": [
                "https://facebook.com/royalxcasino",
                "https://twitter.com/royalxcasino"
              ]
            })
          }}
        />
        
        {/* Structured data for SoftwareApplication */}
        <Script
          id="app-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "Royal X Casino",
              "operatingSystem": "Android",
              "applicationCategory": "GameApplication",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "PKR"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.5",
                "ratingCount": "500000"
              }
            })
          }}
        />
      </body>
    </html>
  );
}
