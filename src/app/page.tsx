import Image from "next/image";
import Link from 'next/link';
import Script from 'next/script';
import { Metadata } from 'next';
import { imageObjectLicensing } from '@/lib/schemaImageLicensing';
import DownloadButton from '@/components/DownloadButton';

export const metadata: Metadata = {
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
    "online casino game",
    "earn money playing games",
    "Android gaming app 2026",
    "JazzCash gaming",
    "EasyPaisa gaming",
    "mobile casino games",
    "real money games Pakistan",
    "casino earning app",
    "Aviator game",
    "Crash game",
    "Mines game",
    "best earning app Pakistan",
    "royal x casino game download",
    "play casino online Pakistan"
  ],
  openGraph: {
    title: 'Royal X Casino APK Download | Real Earning App Pakistan 2026',
    description: 'Royal X Casino 2026 - Pakistan\'s #1 real money gaming app. Join 1000K+ players. Play Aviator, Teen Patti, Crash & more. Earn real money with JazzCash & EasyPaisa. Download now!',
    images: [
      {
        url: 'https://royalxcasinopakistan.pk/royal-x-casino.webp',
        width: 1024,
        height: 1024,
        alt: 'Royal X Casino - Pakistan\'s #1 real money gaming app. Play Aviator, Teen Patti, Crash, Mines.'
      },
      {
        url: 'https://royalxcasinopakistan.pk/feature/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Royal X Casino - Premier Gaming Platform Pakistan'
      },
      {
        url: 'https://royalxcasinopakistan.pk/feature/og-image-square.webp',
        width: 800,
        height: 800,
        alt: 'Royal X Casino - Premier Gaming Platform Pakistan'
      }
    ],
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Royal X Casino APK Download | Real Earning App Pakistan 2026',
    description: 'Royal X Casino 2026 - Pakistan\'s #1 real money gaming app. Join 1000K+ players. Play Aviator, Teen Patti, Crash & more. Earn real money with JazzCash & EasyPaisa. Download now!',
    images: ['https://royalxcasinopakistan.pk/royal-x-casino.webp', 'https://royalxcasinopakistan.pk/feature/og-image.webp']
  }
};

export default function Home() {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://royalxcasinopakistan.pk/#website",
        "url": "https://royalxcasinopakistan.pk/",
        "name": "Royal X Casino",
        "description": "Pakistan's premier real money gaming platform with Aviator, Teen Patti, Crash, Mines and more",
        "inLanguage": "en-US"
      },
      {
        "@type": "WebPage",
        "@id": "https://royalxcasinopakistan.pk/#webpage",
        "url": "https://royalxcasinopakistan.pk/",
        "name": "Royal X Casino APK Download | Real Earning App Pakistan 2026",
        "description": "Royal X Casino 2026 - Pakistan's #1 real money gaming app. Download Royal X Casino APK, play Aviator, Teen Patti, Crash, Mines & win real cash in PKR.",
        "isPartOf": { "@id": "https://royalxcasinopakistan.pk/#website" },
        "speakable": {
          "@type": "SpeakableSpecification",
          "cssSelector": [
            "#what-is-royal-x-casino",
            "#why-royal-x-casino-popular",
            "#how-to-start",
            "#download",
            "#features",
            "#games",
            "#bonuses",
            "#register-login",
            "#deposit-withdraw",
            "#safety-security",
            "#faq"
          ]
        },
        "primaryImageOfPage": {
          "@type": "ImageObject",
          "url": "https://royalxcasinopakistan.pk/royal-x-casino.webp",
          "width": 1024,
          "height": 1024,
          "name": "Royal X Casino",
          "description": "Royal X Casino - Pakistan's #1 real money gaming app. Official brand image. Play Aviator, Teen Patti, Crash, Mines. Download Royal X Casino APK for Android.",
          ...imageObjectLicensing
        }
      },
      {
        "@type": "ImageObject",
        "@id": "https://royalxcasinopakistan.pk/royal-x-casino.webp#primary",
        "url": "https://royalxcasinopakistan.pk/royal-x-casino.webp",
        "contentUrl": "https://royalxcasinopakistan.pk/royal-x-casino.webp",
        "name": "Royal X Casino",
        "description": "Royal X Casino - Pakistan's premier real money gaming app. Official brand image. Play Aviator, Teen Patti, Crash, Mines and win real cash. Download Royal X Casino APK.",
        "width": 1024,
        "height": 1024,
        ...imageObjectLicensing
      },
      {
        "@type": "Organization",
        "@id": "https://royalxcasinopakistan.pk/#organization",
        "name": "Royal X Casino",
        "url": "https://royalxcasinopakistan.pk/",
        "logo": {
          "@type": "ImageObject",
          "url": "https://royalxcasinopakistan.pk/royal-x-casino-logo.webp",
          "width": 512,
          "height": 512,
          ...imageObjectLicensing,
          "creditText": "Royal X Casino logo"
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "email": "support@royalxcasinopakistan.pk",
          "contactType": "Customer Support",
          "areaServed": "PK"
        }
      },
      {
        "@type": "SoftwareApplication",
        "name": "Royal X Casino",
        "operatingSystem": "Android 4.0+",
        "applicationCategory": "GameApplication",
        "image": "https://royalxcasinopakistan.pk/royal-x-casino.webp",
        "logo": "https://royalxcasinopakistan.pk/royal-x-casino.webp",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.5",
          "ratingCount": "1000000"
        },
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "PKR"
        },
        "downloadUrl": "https://royalxcasinopakistan.pk",
        "softwareVersion": "V2.54.1",
        "fileSize": "9MB",
        "description": "Royal X Casino is Pakistan's most popular online real money gaming app where players earn real cash by playing Aviator, Teen Patti, Crash, Mines, Slots, and more. It supports fast deposits and withdrawals via JazzCash and EasyPaisa, offers unlimited bonuses and VIP rewards, and has over 1000K+ downloads across Pakistan.",
        "screenshot": [
          "https://royalxcasinopakistan.pk/royal-x-casino.webp",
          "https://royalxcasinopakistan.pk/royal-x-casino-logo.webp",
          "https://royalxcasinopakistan.pk/royal-x-casino-game-interface.webp",
          "https://royalxcasinopakistan.pk/royal-x-casino-games.webp",
          "https://royalxcasinopakistan.pk/royal-x-casino-earn-bonus.webp"
        ],
        "author": {
          "@type": "Organization",
          "name": "Royal X Casino"
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is Royal X Casino?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Royal X Casino is a powerful online gaming platform in Pakistan where users can find all kinds of casino-style and sports betting games. Download the app, sign up, and get instant access to slot games, Teen Patti, Ludo Star, fishing games, card games, and many e-games — all available from a single app."
            }
          },
          {
            "@type": "Question",
            "name": "Is Royal X Casino Fake or Real?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Royal X Casino is a real and legitimate gaming platform used by thousands of players in Pakistan. It offers secure transactions, AI-based security tools, and supports local payment methods like JazzCash, EasyPaisa, and USDT for digital wallet users."
            }
          },
          {
            "@type": "Question",
            "name": "Is it safe to invest real money at Royal X Casino?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, Royal X Casino uses the latest AI security tools to protect all user data and earnings. The platform supports secure payment systems including JazzCash, EasyPaisa, and USDT. However, always play responsibly and only invest what you can afford."
            }
          },
          {
            "@type": "Question",
            "name": "What is the minimum deposit at Royal X Casino?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The minimum deposit at Royal X Casino varies depending on the payment method. Generally, you can start with as low as PKR 100 via JazzCash or EasyPaisa. Check the deposit section in the app for current minimum amounts."
            }
          },
          {
            "@type": "Question",
            "name": "How do I withdraw money from Royal X Casino in Pakistan?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "To withdraw money from Royal X Casino, go to the Wallet section, click Withdrawal, choose your payment method (JazzCash, EasyPaisa, or Bank Card), enter the amount and account details, then confirm. Withdrawals are processed quickly within minutes."
            }
          },
          {
            "@type": "Question",
            "name": "How do I contact the customer support team at Royal X Casino?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "You can contact Royal X Casino customer support via 24/7 live chat within the app, email at support@royalxcasinopakistan.pk, or through WhatsApp. The support team responds quickly to all queries."
            }
          },
          {
            "@type": "Question",
            "name": "Are there any screen crash or lagging issues with the app?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Royal X Casino is a lightweight app (only 9MB) designed to run smoothly on any Android device with a minimum of 2GB RAM. The app is optimized for fast performance with no crashes or lagging issues on supported devices."
            }
          },
          {
            "@type": "Question",
            "name": "What is the safest payment method to use?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "All payment methods on Royal X Casino are secure. JazzCash and EasyPaisa are the most popular and trusted options for Pakistani users. USDT is also available for digital wallet users who prefer cryptocurrency-based transactions."
            }
          },
          {
            "@type": "Question",
            "name": "Is there an age limit to play Royal X Casino?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, players must be at least 18 years old to register and play at Royal X Casino. The platform promotes responsible gaming and requires age verification during registration."
            }
          },
          {
            "@type": "Question",
            "name": "What are the highest paying games at Royal X Casino?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The highest paying games at Royal X Casino include Aviator, Crash, and Mines — these offer some of the biggest multipliers. Slot games like Sweet Bonanza and Starlight Princess also offer high payout potential. Teen Patti and Rummy remain popular for consistent earnings."
            }
          }
        ]
      }
    ]
  };

  return (
    <>
      <Script
        id="homepage-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      {/* Hero Section */}
      <section className="py-8 md:py-16 px-4 md:px-8 max-w-7xl mx-auto" style={{ minHeight: '400px' }}>
        <div className="md:flex md:items-start md:justify-between md:space-x-12 lg:space-x-20">
          <div className="md:w-4/5 space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                <span className="text-white">Royal X Casino</span>
              </h1>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                <span className="text-[#FFA500]">APK Download</span>{' '}
                <span className="text-white">| Real Earning App Pakistan 2026</span>
              </h2>
            </div>

            <p className="text-sm text-gray-400 italic">Reviewed by: Mobile Gaming Desk | Last Updated: April 17, 2026</p>

            <p className="text-lg text-gray-300 leading-relaxed">
              <Link href="/" className="text-accent hover:underline">Royal X Casino</Link> is a card gaming app where you can play simple games and earn real money with daily rewards. It offers fast withdrawals, smooth gameplay, and 24/7 support for a secure and enjoyable experience.
            </p>

            {/* Download Button */}
            <div className="flex justify-center my-8">
              <DownloadButton />
            </div>

            <p className="text-gray-400 text-sm italic">*Available for Android devices only</p>
          </div>

          {/* Hero Image with orbital badges */}
          <figure
            className="mt-12 md:mt-0 md:w-1/5 flex items-center justify-center"
            style={{ minHeight: '460px', position: 'relative', width: '100%', overflow: 'visible' }}
            itemScope
            itemType="https://schema.org/ImageObject"
          >
            <meta itemProp="name" content="Royal X Casino" />
            <meta itemProp="description" content="Royal X Casino - Pakistan's #1 real money gaming app. Play Aviator, Teen Patti, Crash, Mines. Download Royal X Casino APK for Android." />
            <meta itemProp="url" content="https://royalxcasinopakistan.pk/royal-x-casino-pakistan.webp" />

            {/* Radial glow behind image */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none" aria-hidden="true">
              <div style={{
                width: '340px', height: '340px', borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(255,193,7,0.2) 0%, rgba(255,193,7,0.06) 50%, transparent 72%)',
              }} />
            </div>

            {/* Circular image — z-index 10, orbit badges z-index 20 so they always show */}
            <Image
              src="/royal-x-casino-pakistan.webp"
              alt="Royal X Casino – Pakistan's #1 Real Money Gaming App"
              title="Royal X Casino – Download & Play Aviator, Teen Patti, Crash, Mines"
              width={320}
              height={320}
              className="object-cover rounded-full"
              style={{ width: '260px', height: '260px', border: '3px solid rgba(255,193,7,0.4)', boxShadow: '0 0 40px rgba(255,193,7,0.2)', position: 'relative', zIndex: 10, flexShrink: 0 }}
              priority={true}
              fetchPriority="high"
              quality={90}
              sizes="(max-width: 768px) 260px, 320px"
              itemProp="image"
            />

            {/*
              Orbit container: fixed 460×460 box centered inside the figure.
              It rotates 360°. Each badge uses pre-calculated x/y offsets from center
              (radius 185px) — no rotation in positioning, so counter-spin keeps text upright.
              z-index 20 ensures badges always render above the image (z-index 10).
            */}
            <div
              style={{
                position: 'absolute',
                top: '50%', left: '50%',
                width: '460px', height: '460px',
                marginTop: '-230px', marginLeft: '-230px',
                zIndex: 20,
                animation: 'orbitSpin 20s linear infinite',
              }}
              aria-hidden="true"
            >
              {/* Badge 1 — 0° right — 1000K+ Downloads  (x=185, y=0) */}
              <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(calc(-50% + 185px), -50%)' }}>
                <div style={{ animation: 'orbitCounter 20s linear infinite' }}>
                  <div className="orbit-badge-card">
                    <svg width="18" height="18" fill="#FFA500" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
                    <div className="orbit-badge-value">1000K+</div>
                    <div className="orbit-badge-label">Downloads</div>
                  </div>
                </div>
              </div>

              {/* Badge 2 — 60° bottom-right — 4.5/5 Ratings  (x=92.5, y=160) */}
              <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(calc(-50% + 92px), calc(-50% + 160px))' }}>
                <div style={{ animation: 'orbitCounter 20s linear infinite' }}>
                  <div className="orbit-badge-card">
                    <svg width="18" height="18" fill="#FFA500" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                    <div className="orbit-badge-value">4.5/5</div>
                    <div className="orbit-badge-label">Ratings</div>
                  </div>
                </div>
              </div>

              {/* Badge 3 — 120° bottom-left — 9MB  (x=-92.5, y=160) */}
              <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(calc(-50% - 92px), calc(-50% + 160px))' }}>
                <div style={{ animation: 'orbitCounter 20s linear infinite' }}>
                  <div className="orbit-badge-card">
                    <svg width="18" height="18" fill="#FFA500" viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/></svg>
                    <div className="orbit-badge-value">9MB</div>
                    <div className="orbit-badge-label">App Size</div>
                  </div>
                </div>
              </div>

              {/* Badge 4 — 180° left — 24/7 Support  (x=-185, y=0) */}
              <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(calc(-50% - 185px), -50%)' }}>
                <div style={{ animation: 'orbitCounter 20s linear infinite' }}>
                  <div className="orbit-badge-card">
                    <svg width="18" height="18" fill="#FFA500" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg>
                    <div className="orbit-badge-value">24/7</div>
                    <div className="orbit-badge-label">Support</div>
                  </div>
                </div>
              </div>

              {/* Badge 5 — 240° top-left — Free APK  (x=-92.5, y=-160) */}
              <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(calc(-50% - 92px), calc(-50% - 160px))' }}>
                <div style={{ animation: 'orbitCounter 20s linear infinite' }}>
                  <div className="orbit-badge-card">
                    <svg width="18" height="18" fill="#FFA500" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" stroke="#FFA500" fill="none"/></svg>
                    <div className="orbit-badge-value">FREE</div>
                    <div className="orbit-badge-label">APK</div>
                  </div>
                </div>
              </div>

              {/* Badge 6 — 300° top-right — 100% Secure  (x=92.5, y=-160) */}
              <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(calc(-50% + 92px), calc(-50% - 160px))' }}>
                <div style={{ animation: 'orbitCounter 20s linear infinite' }}>
                  <div className="orbit-badge-card">
                    <svg width="18" height="18" fill="#FFA500" viewBox="0 0 24 24"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/></svg>
                    <div className="orbit-badge-value">100%</div>
                    <div className="orbit-badge-label">Secure</div>
                  </div>
                </div>
              </div>
            </div>

            <figcaption className="sr-only">Royal X Casino – Pakistan&apos;s #1 real money gaming app. Download the APK and play Aviator, Teen Patti, Crash, Mines. Win real cash via JazzCash &amp; EasyPaisa.</figcaption>
          </figure>
        </div>
      </section>

      {/* App Details Table */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto" id="download">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-[#FFA500]">App Details</h2>
        <div className="overflow-hidden rounded-2xl shadow-2xl border border-gray-800">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-800">
              <tbody className="divide-y divide-gray-800">
                <tr className="bg-black/40">
                  <td className="py-4 px-6 text-left font-medium text-white">App Name</td>
                  <td className="py-4 px-6 text-left text-white">Royal X Casino</td>
                </tr>
                <tr className="bg-white/5">
                  <td className="py-4 px-6 text-left font-medium text-white">App Size</td>
                  <td className="py-4 px-6 text-left text-white">9MB</td>
                </tr>
                <tr className="bg-black/40">
                  <td className="py-4 px-6 text-left font-medium text-white">Category</td>
                  <td className="py-4 px-6 text-left text-white">Card, Game</td>
                </tr>
                <tr className="bg-white/5">
                  <td className="py-4 px-6 text-left font-medium text-white">Requirements</td>
                  <td className="py-4 px-6 text-left text-white">Android 4.0 &amp; up</td>
                </tr>
                <tr className="bg-black/40">
                  <td className="py-4 px-6 text-left font-medium text-white">Ratings</td>
                  <td className="py-4 px-6 text-left text-white">4.5/5</td>
                </tr>
                <tr className="bg-white/5">
                  <td className="py-4 px-6 text-left font-medium text-white">Gaming Language</td>
                  <td className="py-4 px-6 text-left text-white">Urdu, English</td>
                </tr>
                <tr className="bg-black/40">
                  <td className="py-4 px-6 text-left font-medium text-white">Latest Version</td>
                  <td className="py-4 px-6 text-left text-white">V2.54.1</td>
                </tr>
                <tr className="bg-white/5">
                  <td className="py-4 px-6 text-left font-medium text-white">Last Updated</td>
                  <td className="py-4 px-6 text-left text-white">2026</td>
                </tr>
                <tr className="bg-black/40">
                  <td className="py-4 px-6 text-left font-medium text-white">Downloads</td>
                  <td className="py-4 px-6 text-left text-white">1000K+</td>
                </tr>
                <tr className="bg-white/5">
                  <td className="py-4 px-6 text-left font-medium text-white">Available For</td>
                  <td className="py-4 px-6 text-left text-white">Android (APK)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Intro Paragraphs */}
      <section className="px-4 md:px-8 max-w-7xl mx-auto pb-4">
        <p className="text-lg text-gray-300 leading-relaxed mb-4">
          <Link href="/" className="text-accent hover:underline">Royal X Casino</Link> APK is one of the most talked-about real money gaming apps in Pakistan right now. Within just a few days of its launch, it has become a favourite among Pakistani players who are looking for a reliable platform to earn real cash online. Offering the latest casino-style games, unlimited bonuses, a clean user interface, and multiple opportunities to make money in PKR, Royal X Casino is quickly establishing itself as one of the best fast-performing gaming apps available for Android users in Pakistan.
        </p>
        <p className="text-gray-300 leading-relaxed">
          Players can enjoy fast withdrawals, local payment support, and a fair gameplay atmosphere all in one place. In this article, we cover everything important about Royal X Casino Pakistan for 2026 — all the latest games, features, payment methods, bonuses, and the complete download process, explained in the simplest way possible.
        </p>
      </section>

      {/* What is Royal X Casino Section */}
      <section id="what-is-royal-x-casino" className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="section-card rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-8 text-[#FFA500]">What is Royal X Casino?</h2>
          <div className="space-y-6">
            <p className="text-gray-300 leading-relaxed">
              Royal X Casino is a powerful online gaming platform in Pakistan where users can find all kinds of casino-style and sports betting games. Just download the app on your smartphone, sign up, and you will have instant access to a full game gallery. Inside, players can find slot games, Teen Patti, Ludo Star, fishing games, card games, and many e-games — all available to Pakistani users from a single app.
            </p>

            <p className="text-gray-300 leading-relaxed">
              At Royal X Casino, players can win unlimited bonuses and make real cash in their free time. Winning rewards and then withdrawing them to your account is a simple yet very secure process. All user data and earnings are protected by the latest AI security tools. One of the biggest reasons Pakistani users trust this app is that it supports local payment systems like JazzCash and Easypaisa, with USDT also available for digital wallet users.
            </p>

            <p className="text-gray-300 leading-relaxed">
              The app comes in APK format and is lightweight enough to run smoothly on any Android device with a minimum of 2GB RAM. Its simple user interface makes navigation easy for complete beginners as well as experienced players. Whether you are new to online gaming or a seasoned player, this is going to be a smooth journey from day one.
            </p>
          </div>
        </div>
      </section>

      {/* Top-Notch Games Section */}
      <section id="games" className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="section-card rounded-xl p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-accent">Top-Notch Games at Royal X Casino</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="inner-card p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-[#FFA500]">Aviator</h3>
              <p className="text-gray-300">A fast-paced, high-energy game where you place a bet on a plane as it climbs higher. The longer you wait, the bigger your multiplier grows — but cash out before the plane flies away. Timing and nerve are everything in Aviator.</p>
            </div>
            <div className="inner-card p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-[#FFA500]">Hilo</h3>
              <p className="text-gray-300">One of the most popular card-prediction games on the platform. Guess whether the next card will be higher or lower than the current one. Simple to pick up but genuinely thrilling, especially when you go on a streak.</p>
            </div>
            <div className="inner-card p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-[#FFA500]">Crash</h3>
              <p className="text-gray-300">Place your bet and watch a multiplier rise — the trick is knowing when to cash out before the crash. Fast, exciting, and one of the highest-earning games on the platform for confident players.</p>
            </div>
            <div className="inner-card p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-[#FFA500]">Mines</h3>
              <p className="text-gray-300">Uncover tiles on a grid and avoid hidden mines. Each safe tile increases your reward, but one wrong step ends the round. A perfect mix of strategy and nerve that keeps players coming back.</p>
            </div>
          </div>

          {/* Full Game Library */}
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-[#FFA500]">Full Game Library</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                "Fishing", "Toss A Coin", "Mythical Animals", "Cards", "Variation",
                "Sweet Bonanza", "7Up 7Down", "Starlight Princess", "Quick Ludo",
                "Benz BMW", "Cricket Battle", "Dork Unit", "Teen Patti",
                "Slot Machine Games", "Arcade Games", "Blackjack", "Dragon vs Tiger",
                "Golden Frog", "Roulette", "Rummy", "Baccarat", "Fortune Gems",
                "Fortune Rabbit", "Mental Le Bandit", "Gorilla Realm", "Jhandi Munda",
                "5 Dragons", "Bandidos Bang", "Duo Cal", "Classic Slots",
                "Mammoth Diamond", "Moon of RA", "Goal", "Penguin Quest",
                "Sicbo", "Spinanga", "E-Games"
              ].map((game) => (
                <div key={game} className="inner-card p-4 rounded-lg">
                  <p className="text-white font-medium">{game}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Game Screenshots Section */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="section-card rounded-xl p-8">
          <h2 className="text-4xl font-bold mb-12 text-[#FFA500] text-center">Royal X Casino App Screenshots</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="w-full">
              <div className="rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src="/royal-x-casino-game-pakistan.webp"
                  alt="Royal X Casino Game Pakistan"
                  width={400}
                  height={711}
                  className="w-full h-auto"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <p className="text-center text-gray-300 mt-3 font-medium">Game Interface</p>
            </div>

            <div className="w-full">
              <div className="rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src="/royal-x-casino-apk-pakistan.webp"
                  alt="Royal X Casino APK Pakistan"
                  width={400}
                  height={711}
                  className="w-full h-auto"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <p className="text-center text-gray-300 mt-3 font-medium">APK Download</p>
            </div>

            <div className="w-full">
              <div className="rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src="/royal-x-casino-daily-bonus.webp"
                  alt="Royal X Casino Daily Bonus"
                  width={400}
                  height={711}
                  className="w-full h-auto"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <p className="text-center text-gray-300 mt-3 font-medium">Daily Bonus</p>
            </div>

            <div className="w-full">
              <div className="rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src="/royal-x-casino-cashpot.webp"
                  alt="Royal X Casino Cashpot"
                  width={400}
                  height={711}
                  className="w-full h-auto"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <p className="text-center text-gray-300 mt-3 font-medium">Cashpot Rewards</p>
            </div>

            <div className="w-full">
              <div className="rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src="/royal-x-casino-coins.webp"
                  alt="Royal X Casino Coins"
                  width={400}
                  height={711}
                  className="w-full h-auto"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <p className="text-center text-gray-300 mt-3 font-medium">Coins & Chips</p>
            </div>

            <div className="w-full">
              <div className="rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src="/royal-x-casino-leaderboard.webp"
                  alt="Royal X Casino Leaderboard"
                  width={400}
                  height={711}
                  className="w-full h-auto"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <p className="text-center text-gray-300 mt-3 font-medium">Leaderboard</p>
            </div>

            <div className="w-full">
              <div className="rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src="/royal-x-casino-signup-register-account.webp"
                  alt="Royal X Casino Sign Up & Register"
                  width={400}
                  height={711}
                  className="w-full h-auto"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <p className="text-center text-gray-300 mt-3 font-medium">Sign Up & Register</p>
            </div>

            <div className="w-full">
              <div className="rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src="/royal-x-casino-refer-and-earn-money.webp"
                  alt="Royal X Casino Refer and Earn Money"
                  width={400}
                  height={711}
                  className="w-full h-auto"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <p className="text-center text-gray-300 mt-3 font-medium">Refer & Earn</p>
            </div>

            <div className="w-full">
              <div className="rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src="/royal-x-casino-share-and-earn-money.webp"
                  alt="Royal X Casino Share and Earn Money"
                  width={400}
                  height={711}
                  className="w-full h-auto"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <p className="text-center text-gray-300 mt-3 font-medium">Share & Earn</p>
            </div>

            <div className="w-full">
              <div className="rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src="/royal-x-casino-withdraw-money-in-pakistan.webp"
                  alt="Royal X Casino Withdraw Money in Pakistan"
                  width={400}
                  height={711}
                  className="w-full h-auto"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <p className="text-center text-gray-300 mt-3 font-medium">Withdraw Money</p>
            </div>

            <div className="w-full">
              <div className="rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src="/royal-x-casino-download-apk-pakistan.webp"
                  alt="Royal X Casino Download APK Pakistan"
                  width={400}
                  height={711}
                  className="w-full h-auto"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <p className="text-center text-gray-300 mt-3 font-medium">Download APK</p>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Features Section */}
      <section id="features" className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="section-card rounded-xl p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-accent">Premium Features of Royal X Casino</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-secondary px-8 py-8 rounded-lg card-glow">
              <h3 className="text-xl font-semibold mb-3 text-accent">1. Multiple Casino Style Games</h3>
              <p className="text-gray-300">Royal X Casino offers a massive library of casino-style games including Aviator, Crash, Mines, Teen Patti, Slots, Roulette, Baccarat, and many more — all accessible from a single app for Pakistani players.</p>
            </div>
            <div className="bg-secondary px-8 py-8 rounded-lg card-glow">
              <h3 className="text-xl font-semibold mb-3 text-accent">2. Easy and Fast Performing User Interface</h3>
              <p className="text-gray-300">The app is designed with a clean, intuitive interface that loads instantly. Navigation is smooth and every section is just a tap away, making it perfect for beginners and experienced players alike.</p>
            </div>
            <div className="bg-secondary px-8 py-8 rounded-lg card-glow">
              <h3 className="text-xl font-semibold mb-3 text-accent">3. Real Cash Earning Opportunities</h3>
              <p className="text-gray-300">Every game on Royal X Casino gives you the chance to earn real money in PKR. Play games, win rewards, and withdraw directly to your JazzCash, EasyPaisa, or bank account without any hassle.</p>
            </div>
            <div className="bg-secondary px-8 py-8 rounded-lg card-glow">
              <h3 className="text-xl font-semibold mb-3 text-accent">4. Highly Appealing Visual Graphics</h3>
              <p className="text-gray-300">Enjoy stunning graphics and smooth animations that create an immersive casino experience right on your mobile device. Every game is designed with high-quality visuals for maximum enjoyment.</p>
            </div>
            <div className="bg-secondary px-8 py-8 rounded-lg card-glow">
              <h3 className="text-xl font-semibold mb-3 text-accent">5. Easy and Secure Payment Systems</h3>
              <p className="text-gray-300">Deposit and withdraw money safely using JazzCash, EasyPaisa, Bank Card, and USDT. All transactions are encrypted and processed quickly with no hidden fees or delays.</p>
            </div>
            <div className="bg-secondary px-8 py-8 rounded-lg card-glow">
              <h3 className="text-xl font-semibold mb-3 text-accent">6. A Lightweight and Fast App</h3>
              <p className="text-gray-300">At just 9MB, Royal X Casino is one of the most lightweight gaming apps available. It runs smoothly on any Android device with 2GB RAM, without lag, crashes, or excessive storage usage.</p>
            </div>
            <div className="bg-secondary px-8 py-8 rounded-lg card-glow">
              <h3 className="text-xl font-semibold mb-3 text-accent">7. Secure and Safe Gameplay Experience</h3>
              <p className="text-gray-300">Your data and money are protected by the latest AI-powered security tools. SSL encryption, secure login, and privacy-first policies ensure a completely safe gaming environment.</p>
            </div>
            <div className="bg-secondary px-8 py-8 rounded-lg card-glow">
              <h3 className="text-xl font-semibold mb-3 text-accent">8. Customise Setting Menu</h3>
              <p className="text-gray-300">Personalise your experience with the customisable settings menu. Adjust sound, notifications, language, and display preferences to match your playing style and comfort.</p>
            </div>
            <div className="bg-secondary px-8 py-8 rounded-lg card-glow">
              <h3 className="text-xl font-semibold mb-3 text-accent">9. Unlimited Bonuses and Rewards</h3>
              <p className="text-gray-300">From welcome bonuses to daily rewards, referral earnings to VIP promos — Royal X Casino offers unlimited ways to earn extra cash and free chips without spending a single rupee.</p>
            </div>
            <div className="bg-secondary px-8 py-8 rounded-lg card-glow">
              <h3 className="text-xl font-semibold mb-3 text-accent">10. Free Practice Mode</h3>
              <p className="text-gray-300">Not ready to play with real money? Use the free practice mode to learn the rules, develop strategies, and get comfortable with any game before placing real bets.</p>
            </div>
            <div className="bg-secondary px-8 py-8 rounded-lg card-glow">
              <h3 className="text-xl font-semibold mb-3 text-accent">11. Multiple Game Modes</h3>
              <p className="text-gray-300">Choose from solo play, multiplayer battles, and tournament modes. Each game mode offers a unique experience with different reward levels and competitive intensity.</p>
            </div>
            <div className="bg-secondary px-8 py-8 rounded-lg card-glow">
              <h3 className="text-xl font-semibold mb-3 text-accent">12. Real Time Updates</h3>
              <p className="text-gray-300">Stay updated with the latest games, features, and promotions through real-time in-app updates. The app continuously improves with new content and performance enhancements.</p>
            </div>
            <div className="bg-secondary px-8 py-8 rounded-lg card-glow">
              <h3 className="text-xl font-semibold mb-3 text-accent">13. Multiple Language Support</h3>
              <p className="text-gray-300">Royal X Casino supports multiple languages including Urdu and English, making it accessible to all Pakistani users regardless of their language preference.</p>
            </div>
            <div className="bg-secondary px-8 py-8 rounded-lg card-glow">
              <h3 className="text-xl font-semibold mb-3 text-accent">14. 24/7 Customer Support Team</h3>
              <p className="text-gray-300">Get help anytime with the dedicated 24/7 customer support team. Whether you face a deposit issue, game error, or account problem, the team responds quickly via live chat, WhatsApp, or email.</p>
            </div>
            <div className="bg-secondary px-8 py-8 rounded-lg card-glow">
              <h3 className="text-xl font-semibold mb-3 text-accent">15. Referral Program</h3>
              <p className="text-gray-300">Earn money without even playing! Share your referral link with friends, and when they sign up and play, you receive commission automatically. The more friends you invite, the more you earn.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Is Royal X Casino Safe Section */}
      <section id="safety-security" className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="section-card rounded-xl p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-accent">Is Royal X Casino Safe?</h2>
          <div className="space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Royal X Casino takes user safety very seriously. The platform uses the latest AI-powered security tools to protect all user data, personal information, and financial transactions. SSL encryption is implemented across the entire app to ensure that no third party can access your sensitive details.
            </p>
            <p className="text-gray-300 leading-relaxed">
              All payment methods — JazzCash, EasyPaisa, Bank Card, and USDT — are processed through secure channels with full encryption. The app also requires user verification during registration and withdrawal to prevent fraud. Additionally, Royal X Casino has a dedicated security team that monitors the platform 24/7 to identify and resolve any potential threats.
            </p>
            <p className="text-gray-300 leading-relaxed">
              However, as with any APK-based app, always make sure you download Royal X Casino from the official website (royalxcasinopakistan.pk) to avoid fake versions. Never share your password or OTP with anyone, and always keep your account details secure.
            </p>
          </div>
        </div>
      </section>

      {/* How to Download and Install Section */}
      <section id="download-install" className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="section-card rounded-xl p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-accent">How to Download and Install Royal X Casino APK</h2>
          <p className="text-gray-300 mb-4">Follow these simple steps to download and install the Royal X Casino APK on your Android device:</p>
          <div className="mb-8">
            <ol className="list-decimal pl-5 space-y-3 text-gray-300">
              <li>Open the browser on your Android device and visit the official website at <a href="https://royalxcasinopakistan.pk" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline font-semibold">royalxcasinopakistan.pk</a>.</li>
              <li>Click on the Download APK button to start downloading the Royal X Casino APK file.</li>
              <li>Wait a few seconds for the download to complete. The file will be saved in your device&apos;s Download folder.</li>
              <li>Before installing, go to Settings &gt; Security and enable &quot;Install from Unknown Sources&quot; or &quot;Install Unknown Apps&quot;.</li>
              <li>Open the File Manager, navigate to the Download folder, and tap on the downloaded APK file.</li>
              <li>The installation process will begin. Wait until it completes successfully.</li>
              <li>Once installed, the Royal X Casino app icon will appear on your home screen. Tap it to launch the app and start playing!</li>
            </ol>
          </div>

          <div className="flex justify-center">
            <DownloadButton />
          </div>
        </div>
      </section>

      {/* How to Register and Log In Section */}
      <section id="register-login" className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="section-card rounded-xl p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-accent">How to Register & Log In at Royal X Casino</h2>

          <h3 className="text-xl font-semibold mb-4 text-[#FFA500]">Registration</h3>
          <p className="text-gray-300 mb-4">To create your account on Royal X Casino, follow these steps:</p>
          <div className="mb-8">
            <ol className="list-decimal pl-5 space-y-3 text-gray-300">
              <li>Open the Royal X Casino app on your device.</li>
              <li>On the home screen, tap on the Register or Sign Up button.</li>
              <li>Enter your valid mobile number or email address.</li>
              <li>Set a strong password that is hard to guess.</li>
              <li>Enter the OTP (One-Time Password) sent to your phone or email for verification.</li>
              <li>Once verified, your account will be created successfully and you can start playing!</li>
            </ol>
          </div>

          <h3 className="text-xl font-semibold mb-4 text-[#FFA500]">Login</h3>
          <p className="text-gray-300 mb-4">After registration, log in to your account by following these steps:</p>
          <div className="space-y-4">
            <ol className="list-decimal pl-5 space-y-3 text-gray-300">
              <li>Open the Royal X Casino app on your device.</li>
              <li>Tap on the Login button on the home screen.</li>
              <li>Enter your registered mobile number or email and password.</li>
              <li>Make sure all details are entered correctly.</li>
              <li>Tap on Sign In or Login to access your account.</li>
              <li>If you forget your password, use the Forgot Password option to reset it.</li>
              <li>Once logged in, you can start playing games and earning rewards.</li>
            </ol>
          </div>
        </div>
      </section>

      {/* Why Royal X Casino Popular Section */}
      <section id="why-royal-x-casino-popular" className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="section-card rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-8 text-[#FFA500]">Why is Royal X Casino Popular in Pakistan?</h2>
          <div className="space-y-6">
            <p className="text-gray-300 leading-relaxed">
              Royal X Casino has rapidly become one of the most popular gaming apps in Pakistan for several compelling reasons. First and foremost, it offers a genuine opportunity to earn real money in PKR while having fun — something that appeals to millions of Pakistani users looking for a reliable side income from their smartphones.
            </p>

            <p className="text-gray-300 leading-relaxed">
              The app&apos;s support for local payment methods like JazzCash and EasyPaisa is a massive advantage. Players can deposit and withdraw money instantly without dealing with international payment systems or complicated processes. The addition of USDT support also makes it attractive for users who prefer cryptocurrency transactions.
            </p>

            <p className="text-gray-300 leading-relaxed">
              Another key reason for its popularity is the sheer variety of games available — from Aviator and Crash to Teen Patti and Rummy, there is something for every type of player. The app&apos;s lightweight size (just 9MB), fast performance, beautiful graphics, and generous bonus system (including welcome bonuses, referral rewards, and daily free chips) make it an irresistible choice for Pakistani gamers. The 24/7 customer support and AI-powered security add another layer of trust and reliability.
            </p>
          </div>
        </div>
      </section>

      {/* Bonuses Section */}
      <section id="bonuses" className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="section-card rounded-xl p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-accent">Bonuses & Rewards at Royal X Casino</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <div className="inner-card p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-[#FFA500]">Welcome Bonus</h3>
              <p className="text-gray-300">New players receive a generous welcome bonus on their first deposit. This gives you extra funds to explore the full game library and start earning from day one without risking too much of your own money.</p>
            </div>
            <div className="inner-card p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-[#FFA500]">Refer and Earn</h3>
              <p className="text-gray-300">Share your referral link with friends and family. When they sign up and play, you earn commission automatically. The more people you refer, the higher your passive earnings grow.</p>
            </div>
            <div className="inner-card p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-[#FFA500]">VIP Promo</h3>
              <p className="text-gray-300">High-volume players unlock exclusive VIP promotions with higher bonuses, better rebates, and special rewards that are not available to regular users.</p>
            </div>
            <div className="inner-card p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-[#FFA500]">Recharge Rebate</h3>
              <p className="text-gray-300">Every time you deposit money, you receive a percentage back as a rebate bonus. The more you deposit, the higher your rebate percentage becomes.</p>
            </div>
            <div className="inner-card p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-[#FFA500]">Double Bonus</h3>
              <p className="text-gray-300">During special promotional periods, Royal X Casino doubles your deposit bonus, giving you twice the value on every recharge for maximum earnings.</p>
            </div>
            <div className="inner-card p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-[#FFA500]">In-App Purchase Bonus</h3>
              <p className="text-gray-300">Get extra rewards and chips when you make in-app purchases. These bonuses are automatically added to your account and can be used across all games.</p>
            </div>
            <div className="inner-card p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-[#FFA500]">Seasonal Promotions</h3>
              <p className="text-gray-300">During festivals, holidays, and special events, Royal X Casino runs limited-time promotions with massive bonuses, free spins, and exclusive rewards.</p>
            </div>
            <div className="inner-card p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-[#FFA500]">Cashback Bonus</h3>
              <p className="text-gray-300">Even when luck isn&apos;t on your side, the cashback bonus ensures you get a percentage of your losses back. This safety net keeps you in the game and reduces your overall risk.</p>
            </div>
            <div className="inner-card p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-[#FFA500]">Free Chips and Coins</h3>
              <p className="text-gray-300">Log in daily to receive free chips and coins that can be used to play games without spending any real money. Perfect for practicing strategies or just having fun risk-free.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How to Get Started Section */}
      <section id="how-to-start" className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="section-card rounded-xl p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-[#FFA500]">How to Get Started at Royal X Casino</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="inner-card p-6 rounded-lg text-center">
              <div className="text-3xl font-bold text-[#FFA500] mb-3">Step 1</div>
              <h3 className="text-lg font-semibold text-white mb-2">Download the APK</h3>
              <p className="text-gray-300">Visit <a href="https://royalxcasinopakistan.pk" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">royalxcasinopakistan.pk</a> and download the APK file to your Android device.</p>
            </div>
            <div className="inner-card p-6 rounded-lg text-center">
              <div className="text-3xl font-bold text-[#FFA500] mb-3">Step 2</div>
              <h3 className="text-lg font-semibold text-white mb-2">Install the App</h3>
              <p className="text-gray-300">Enable Unknown Sources in your settings, then open the downloaded file and install the app.</p>
            </div>
            <div className="inner-card p-6 rounded-lg text-center">
              <div className="text-3xl font-bold text-[#FFA500] mb-3">Step 3</div>
              <h3 className="text-lg font-semibold text-white mb-2">Register Your Account</h3>
              <p className="text-gray-300">Open the app, tap Sign Up, and register with your mobile number or email. Verify with OTP.</p>
            </div>
            <div className="inner-card p-6 rounded-lg text-center">
              <div className="text-3xl font-bold text-[#FFA500] mb-3">Step 4</div>
              <h3 className="text-lg font-semibold text-white mb-2">Claim Your Welcome Bonus</h3>
              <p className="text-gray-300">After registering, claim your welcome bonus and free chips to start playing without depositing money.</p>
            </div>
            <div className="inner-card p-6 rounded-lg text-center">
              <div className="text-3xl font-bold text-[#FFA500] mb-3">Step 5</div>
              <h3 className="text-lg font-semibold text-white mb-2">Choose Your Game</h3>
              <p className="text-gray-300">Browse the game library and pick your favourite — Aviator, Crash, Mines, Teen Patti, Slots, and more.</p>
            </div>
            <div className="inner-card p-6 rounded-lg text-center">
              <div className="text-3xl font-bold text-[#FFA500] mb-3">Step 6</div>
              <h3 className="text-lg font-semibold text-white mb-2">Play & Win Real Cash</h3>
              <p className="text-gray-300">Start playing, earn real money, and withdraw your winnings directly via JazzCash, EasyPaisa, or Bank Card.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How to Bind an Email Section */}
      <section id="bind-email" className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="section-card rounded-xl p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-accent">How to Bind an Email at Royal X Casino</h2>
          <p className="text-gray-300 mb-4">Binding your email to your Royal X Casino account adds an extra layer of security and helps with account recovery. Follow these steps:</p>
          <ol className="list-decimal pl-5 space-y-3 text-gray-300">
            <li>Open the Royal X Casino app and log in to your account.</li>
            <li>Go to Settings or Profile from the main menu.</li>
            <li>Find the &quot;Bind Email&quot; or &quot;Email Verification&quot; option and tap on it.</li>
            <li>Enter a valid email address that you have access to.</li>
            <li>A verification code (OTP) will be sent to your email.</li>
            <li>Enter the verification code in the app to confirm.</li>
            <li>Once verified, your email is successfully bound to your account. You can now use it for password recovery and important notifications.</li>
          </ol>
        </div>
      </section>

      {/* How to Recover Forgotten Password Section */}
      <section id="forgot-password" className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="section-card rounded-xl p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-accent">How to Recover a Forgotten Password</h2>
          <p className="text-gray-300 mb-4">If you&apos;ve forgotten your Royal X Casino password, don&apos;t worry. Follow these simple steps to reset it:</p>
          <ol className="list-decimal pl-5 space-y-3 text-gray-300">
            <li>Open the Royal X Casino app and tap on the Login button.</li>
            <li>Below the password field, tap on &quot;Forgot Password?&quot;.</li>
            <li>Enter your registered mobile number or bound email address.</li>
            <li>You will receive an OTP or verification link via SMS or email.</li>
            <li>Enter the OTP or click the link to verify your identity.</li>
            <li>Set a new, strong password for your account.</li>
            <li>Confirm the new password and log in with your updated credentials.</li>
          </ol>
          <p className="text-gray-300 mt-4 italic">Tip: Always use a strong password with a mix of letters, numbers, and special characters to keep your account secure.</p>
        </div>
      </section>

      {/* How to Keep Your Account Secure Section */}
      <section id="account-security" className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="section-card rounded-xl p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-accent">How to Keep Your Account Secure</h2>
          <div className="space-y-4">
            <ul className="list-disc pl-5 space-y-3 text-gray-300">
              <li><strong>Use a Strong Password:</strong> Create a unique password with a combination of uppercase letters, lowercase letters, numbers, and symbols. Avoid using obvious passwords like your name or birthdate.</li>
              <li><strong>Bind Your Email:</strong> Link a valid email address to your account for an extra layer of security and easy password recovery.</li>
              <li><strong>Never Share Your OTP:</strong> Your OTP is a one-time verification code meant only for you. Never share it with anyone, including customer support impersonators.</li>
              <li><strong>Download from Official Sources Only:</strong> Always download Royal X Casino from the official website at royalxcasinopakistan.pk. Avoid third-party download sites that may contain malware or fake versions.</li>
              <li><strong>Keep the App Updated:</strong> Regularly update to the latest version of the app to benefit from the newest security patches and features.</li>
              <li><strong>Log Out on Shared Devices:</strong> If you use a shared or public device, always log out of your account after your session.</li>
              <li><strong>Enable Notifications:</strong> Turn on account notifications to receive alerts about login attempts, deposits, and withdrawals so you can spot any unauthorized activity immediately.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Deposit at Royal X Casino Section */}
      <section id="deposit-withdraw" className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="section-card rounded-xl p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-accent">Deposit at Royal X Casino</h2>
          <p className="text-gray-300 mb-4">Depositing money at Royal X Casino is quick and easy. The platform supports multiple local payment methods for Pakistani users:</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="inner-card p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-[#FFA500]">JazzCash</h3>
              <p className="text-gray-300">The most popular mobile payment method in Pakistan. Deposit instantly from your JazzCash wallet with secure, encrypted transactions. No delays, no hidden fees.</p>
            </div>
            <div className="inner-card p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-[#FFA500]">EasyPaisa</h3>
              <p className="text-gray-300">Another trusted and widely-used payment option. Add funds to your game wallet from your EasyPaisa account in just a few taps. Fast, safe, and reliable.</p>
            </div>
            <div className="inner-card p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-[#FFA500]">USDT / Bank Card</h3>
              <p className="text-gray-300">For digital wallet users, USDT is available as a deposit option. Bank card deposits are also supported for those who prefer traditional banking methods.</p>
            </div>
          </div>

          <h3 className="text-xl font-semibold mb-4 text-[#FFA500]">How to Deposit Money</h3>
          <ol className="list-decimal pl-5 space-y-3 text-gray-300">
            <li>Open the Royal X Casino app and log in to your account.</li>
            <li>Tap on the Wallet option from the main screen.</li>
            <li>Select the Deposit option.</li>
            <li>Choose your preferred payment method (JazzCash, EasyPaisa, USDT, or Bank Card).</li>
            <li>Enter the amount you want to deposit.</li>
            <li>Confirm the transaction and wait a few seconds for it to process.</li>
            <li>Once complete, the balance will appear in your game wallet and you can start playing immediately.</li>
          </ol>
        </div>
      </section>

      {/* Withdrawals at Royal X Casino Section */}
      <section id="withdrawals" className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="section-card rounded-xl p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-accent">Withdrawals at Royal X Casino</h2>
          <p className="text-gray-300 mb-4">Withdrawing your winnings from Royal X Casino is just as easy as depositing. The platform processes withdrawals quickly through all supported payment methods:</p>

          <h3 className="text-xl font-semibold mb-4 text-[#FFA500]">How to Withdraw Money</h3>
          <ol className="list-decimal pl-5 space-y-3 text-gray-300 mb-8">
            <li>Open the Royal X Casino app and log in to your account.</li>
            <li>Tap on the Wallet option from the main screen.</li>
            <li>Select the Withdrawal option.</li>
            <li>Choose your payment method — JazzCash, EasyPaisa, or Bank Card.</li>
            <li>Enter the amount you want to withdraw.</li>
            <li>Fill in the required details (account number, name, etc.).</li>
            <li>Double-check all information and tap Confirm.</li>
            <li>Wait a few minutes for the withdrawal to be processed.</li>
            <li>Once complete, the money will be transferred to your chosen payment account.</li>
          </ol>

          <p className="text-gray-300 italic">Note: Withdrawal times may vary depending on the payment method. JazzCash and EasyPaisa withdrawals are typically processed within 5-30 minutes. Always ensure your account details are correct before confirming.</p>
        </div>
      </section>

      {/* Game Winning Strategies Section */}
      <section id="winning-strategies" className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="section-card rounded-xl p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-accent">Game Winning Strategies at Royal X Casino</h2>
          <div className="space-y-4">
            <ul className="list-disc pl-5 space-y-3 text-gray-300">
              <li><strong>Start with Small Bets:</strong> Always begin with small amounts to understand the game mechanics and reduce the risk of losing money. Increase your bets gradually as you gain confidence and experience.</li>
              <li><strong>Use the Practice Mode:</strong> Before playing with real money, take advantage of the free practice mode to learn the rules, develop strategies, and get comfortable with any game.</li>
              <li><strong>Focus on High-Payout Games:</strong> Games like Aviator, Crash, and Mines offer some of the highest multipliers on the platform. Learn their patterns and play strategically for maximum earnings.</li>
              <li><strong>Manage Your Bankroll:</strong> Set a daily budget and stick to it. Never chase losses by betting more than you can afford. Smart bankroll management is the key to long-term profitability.</li>
              <li><strong>Claim Every Bonus:</strong> Take advantage of all available bonuses — welcome bonus, daily rewards, referral commissions, and seasonal promotions. These free funds extend your playing time without extra investment.</li>
              <li><strong>Cash Out Early in Crash/Aviator:</strong> In multiplier games like Crash and Aviator, consistent small wins are better than waiting for a massive payout. Set a target multiplier and cash out when you reach it.</li>
              <li><strong>Play During Off-Peak Hours:</strong> When fewer players are online, competition can be lower in multiplayer games, giving you a slight edge.</li>
              <li><strong>Learn from Other Players:</strong> Observe how experienced players make their moves. You can learn new techniques, timing strategies, and patterns that improve your own gameplay.</li>
              <li><strong>Withdraw Regularly:</strong> When you build up a good balance, withdraw a portion of your winnings. This protects your profits and ensures you always have real money coming in.</li>
              <li><strong>Stay Calm and Play Smart:</strong> Never play out of frustration or greed. Emotional decisions lead to unnecessary losses. Stay focused, think clearly, and play with strategy.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Pros and Cons Section */}
      <section id="pros-cons" className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="section-card rounded-xl p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-accent">Pros & Cons of Royal X Casino</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            <div className="flex flex-col">
              <h3 className="text-xl font-semibold mb-3 text-[#FFA500]">Pros</h3>
              <div className="inner-card px-8 py-8 rounded-lg flex-1">
                <ul className="list-disc pl-5 space-y-3 text-gray-300">
                  <li>Lightweight app — only 9MB in size</li>
                  <li>Earn real cash in PKR</li>
                  <li>Supports JazzCash, EasyPaisa, USDT, and Bank Card</li>
                  <li>Massive game library with 37+ games</li>
                  <li>Fast withdrawals processed within minutes</li>
                  <li>Generous bonuses and referral program</li>
                  <li>Free practice mode available</li>
                  <li>24/7 customer support</li>
                  <li>AI-powered security for data protection</li>
                  <li>Supports Urdu and English languages</li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col">
              <h3 className="text-xl font-semibold mb-3 text-[#FFA500]">Cons</h3>
              <div className="inner-card px-8 py-8 rounded-lg flex-1">
                <ul className="list-disc pl-5 space-y-3 text-gray-300">
                  <li>Only available for Android — no iOS version</li>
                  <li>Not available on Google Play Store (APK only)</li>
                  <li>Risk of losing money in real-money games</li>
                  <li>Gameplay can be addictive</li>
                  <li>Withdrawal limits may apply depending on method</li>
                  <li>Requires stable internet connection</li>
                  <li>New platform — still building track record</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="section-card rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-8 text-[#FFA500]">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <details className="group bg-black/40 rounded-xl border border-gray-700 hover:border-[#FFA500]/50 transition-all duration-300 shadow-md hover:shadow-lg">
              <summary className="flex items-center justify-between p-4 cursor-pointer text-white font-medium hover:text-[#FFA500] transition-colors">
                What is Royal X Casino?
                <span className="transition group-open:rotate-180">
                  <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <div className="p-4 pt-0 text-gray-300 border-t border-gray-700/50">
                Royal X Casino is a powerful online gaming platform in Pakistan where users can find all kinds of casino-style and sports betting games. It offers slot games, Teen Patti, Ludo Star, fishing games, card games, and many e-games — all available from a single app. Players can earn real cash in PKR with fast withdrawals via JazzCash and EasyPaisa.
              </div>
            </details>

            <details className="group bg-black/40 rounded-xl border border-gray-700 hover:border-[#FFA500]/50 transition-all duration-300 shadow-md hover:shadow-lg">
              <summary className="flex items-center justify-between p-4 cursor-pointer text-white font-medium hover:text-[#FFA500] transition-colors">
                Is Royal X Casino Fake or Real?
                <span className="transition group-open:rotate-180">
                  <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <div className="p-4 pt-0 text-gray-300 border-t border-gray-700/50">
                Royal X Casino is a real and legitimate gaming platform trusted by thousands of players in Pakistan. It offers secure transactions protected by AI security tools, supports local payment methods like JazzCash and EasyPaisa, and provides real cash withdrawals. However, always download the app from the official website to avoid fake versions.
              </div>
            </details>

            <details className="group bg-black/40 rounded-xl border border-gray-700 hover:border-[#FFA500]/50 transition-all duration-300 shadow-md hover:shadow-lg">
              <summary className="flex items-center justify-between p-4 cursor-pointer text-white font-medium hover:text-[#FFA500] transition-colors">
                Is it safe to invest real money at Royal X Casino?
                <span className="transition group-open:rotate-180">
                  <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <div className="p-4 pt-0 text-gray-300 border-t border-gray-700/50">
                Royal X Casino uses the latest AI security tools and SSL encryption to protect all user data, earnings, and financial transactions. The platform supports secure payment systems including JazzCash, EasyPaisa, and USDT. However, as with any real-money gaming platform, always play responsibly and only invest what you can afford to lose.
              </div>
            </details>

            <details className="group bg-black/40 rounded-xl border border-gray-700 hover:border-[#FFA500]/50 transition-all duration-300 shadow-md hover:shadow-lg">
              <summary className="flex items-center justify-between p-4 cursor-pointer text-white font-medium hover:text-[#FFA500] transition-colors">
                What is the minimum deposit at Royal X Casino?
                <span className="transition group-open:rotate-180">
                  <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <div className="p-4 pt-0 text-gray-300 border-t border-gray-700/50">
                The minimum deposit at Royal X Casino varies depending on the payment method you choose. Generally, you can start with as low as PKR 100 via JazzCash or EasyPaisa. Check the deposit section in the app for the most current minimum deposit requirements.
              </div>
            </details>

            <details className="group bg-black/40 rounded-xl border border-gray-700 hover:border-[#FFA500]/50 transition-all duration-300 shadow-md hover:shadow-lg">
              <summary className="flex items-center justify-between p-4 cursor-pointer text-white font-medium hover:text-[#FFA500] transition-colors">
                How do I withdraw money from Royal X Casino in Pakistan?
                <span className="transition group-open:rotate-180">
                  <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <div className="p-4 pt-0 text-gray-300 border-t border-gray-700/50">
                To withdraw money, open the app, go to the Wallet section, select Withdrawal, choose your preferred payment method (JazzCash, EasyPaisa, or Bank Card), enter the amount and your account details, then confirm. Withdrawals are typically processed within 5-30 minutes depending on the payment method.
              </div>
            </details>

            <details className="group bg-black/40 rounded-xl border border-gray-700 hover:border-[#FFA500]/50 transition-all duration-300 shadow-md hover:shadow-lg">
              <summary className="flex items-center justify-between p-4 cursor-pointer text-white font-medium hover:text-[#FFA500] transition-colors">
                How do I contact the customer support team at Royal X Casino?
                <span className="transition group-open:rotate-180">
                  <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <div className="p-4 pt-0 text-gray-300 border-t border-gray-700/50">
                You can contact the Royal X Casino customer support team through multiple channels: 24/7 live chat within the app, email at <a href="mailto:support@royalxcasinopakistan.pk" className="text-accent hover:underline">support@royalxcasinopakistan.pk</a>, or via WhatsApp. The support team is available around the clock and responds quickly to all queries.
              </div>
            </details>

            <details className="group bg-black/40 rounded-xl border border-gray-700 hover:border-[#FFA500]/50 transition-all duration-300 shadow-md hover:shadow-lg">
              <summary className="flex items-center justify-between p-4 cursor-pointer text-white font-medium hover:text-[#FFA500] transition-colors">
                Are there any screen crash or lagging issues with the app?
                <span className="transition group-open:rotate-180">
                  <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <div className="p-4 pt-0 text-gray-300 border-t border-gray-700/50">
                Royal X Casino is a lightweight app (only 9MB) specifically optimized for smooth performance on Android devices. It runs without crashes or lag on any device with at least 2GB RAM and Android 4.0 or higher. The app is regularly updated to fix any performance issues and ensure the best gaming experience.
              </div>
            </details>

            <details className="group bg-black/40 rounded-xl border border-gray-700 hover:border-[#FFA500]/50 transition-all duration-300 shadow-md hover:shadow-lg">
              <summary className="flex items-center justify-between p-4 cursor-pointer text-white font-medium hover:text-[#FFA500] transition-colors">
                What is the safest payment method to use?
                <span className="transition group-open:rotate-180">
                  <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <div className="p-4 pt-0 text-gray-300 border-t border-gray-700/50">
                All payment methods on Royal X Casino — JazzCash, EasyPaisa, Bank Card, and USDT — are secured with encryption and processed through safe channels. JazzCash and EasyPaisa are the most popular and trusted options for Pakistani users. Choose whichever method is most convenient for you.
              </div>
            </details>

            <details className="group bg-black/40 rounded-xl border border-gray-700 hover:border-[#FFA500]/50 transition-all duration-300 shadow-md hover:shadow-lg">
              <summary className="flex items-center justify-between p-4 cursor-pointer text-white font-medium hover:text-[#FFA500] transition-colors">
                Is there an age limit to play Royal X Casino?
                <span className="transition group-open:rotate-180">
                  <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <div className="p-4 pt-0 text-gray-300 border-t border-gray-700/50">
                Yes, players must be at least 18 years old to register and play at Royal X Casino. The platform promotes responsible gaming and may require age verification during the registration process. Underage users are not permitted to create accounts or participate in real-money games.
              </div>
            </details>

            <details className="group bg-black/40 rounded-xl border border-gray-700 hover:border-[#FFA500]/50 transition-all duration-300 shadow-md hover:shadow-lg">
              <summary className="flex items-center justify-between p-4 cursor-pointer text-white font-medium hover:text-[#FFA500] transition-colors">
                What are the highest paying games at Royal X Casino?
                <span className="transition group-open:rotate-180">
                  <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <div className="p-4 pt-0 text-gray-300 border-t border-gray-700/50">
                The highest paying games at Royal X Casino include Aviator, Crash, and Mines — these multiplier-based games offer the potential for the biggest payouts. Slot games like Sweet Bonanza, Starlight Princess, and Fortune Gems also feature high payout multipliers. For card game fans, Teen Patti and Rummy remain consistently popular for steady earnings.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* Final Thoughts Section */}
      <section className="pt-12 pb-4 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="section-card rounded-xl p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-accent">Final Thoughts</h2>
          <div className="space-y-4">
            <p className="text-gray-300">
              Royal X Casino has quickly made a name for itself as one of the best real money gaming apps in Pakistan for 2026. With its lightweight APK (just 9MB), massive game library featuring Aviator, Crash, Mines, Teen Patti, and dozens more, plus unlimited bonuses and seamless payment support through JazzCash, EasyPaisa, and USDT — it offers everything a Pakistani gamer could ask for in one app.
            </p>
            <p className="text-gray-300">
              The platform&apos;s commitment to security through AI-powered tools, its 24/7 customer support team, and its simple user interface make it accessible and trustworthy for both new and experienced players. Whether you&apos;re looking to earn extra cash in your free time or seeking a thrilling gaming experience, Royal X Casino delivers on all fronts.
            </p>
            <p className="text-gray-300">
              If you play responsibly, manage your bankroll wisely, and take advantage of the generous bonuses available, Royal X Casino can provide an exciting and rewarding gaming journey. Download the app today from <a href="https://royalxcasinopakistan.pk" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline font-semibold">royalxcasinopakistan.pk</a> and start your winning streak!
            </p>
          </div>

          {/* Final Download Button */}
          <div className="flex justify-center mt-8">
            <DownloadButton label="DOWNLOAD ROYAL X CASINO NOW" />
          </div>
        </div>
      </section>
    </>
  );
}
