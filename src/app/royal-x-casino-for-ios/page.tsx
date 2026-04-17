import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import DownloadButton from '@/components/DownloadButton';

export const metadata: Metadata = {
  title: 'Royal X Casino for iOS iPhone Download Latest Version 2026',
  description: 'Download Royal X Casino for iOS on iPhone and iPad. Play Teen Patti, Rummy, Dragon Tiger & more. Earn real cash with JazzCash & EasyPaisa. Install guide for Apple devices.',
  keywords: [
    'Royal X Casino iOS',
    'Royal X Casino iPhone',
    'Royal X Casino iPad',
    'Royal X Casino Apple',
    'Teen Patti iPhone',
    'Card games iOS',
    'Royal X Casino App Store'
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://royalxcasinopakistan.pk/royal-x-casino-for-ios',
  },
  openGraph: {
    title: 'Royal X Casino for iOS iPhone Download Latest Version 2026',
    description: 'Download Royal X Casino for iOS. Play Teen Patti, Rummy & more on iPhone and iPad. Earn real cash with secure payments.',
    url: 'https://royalxcasinopakistan.pk/royal-x-casino-for-ios',
    siteName: 'Royal X Casino',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://royalxcasinopakistan.pk/royal-x-casino-logo.webp',
        width: 1200,
        height: 630,
        alt: 'Royal X Casino for iOS',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Royal X Casino for iOS iPhone Download Latest Version 2026',
    description: 'Download Royal X Casino for iOS. Play Teen Patti, Rummy & more on iPhone and iPad.',
    images: ['https://royalxcasinopakistan.pk/royal-x-casino-logo.webp'],
  },
};

export default function RoyalXCasinoForIOSPage() {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: 'Royal X Casino for iOS iPhone Download Latest Version 2026',
    description:
      'Complete guide to download and play Royal X Casino on iOS devices including iPhone and iPad.',
    image: 'https://royalxcasinopakistan.pk/royal-x-casino-logo.webp',
    author: {
      '@type': 'Organization',
      name: 'Royal X Casino',
      url: 'https://royalxcasinopakistan.pk',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Royal X Casino',
      logo: {
        '@type': 'ImageObject',
        url: 'https://royalxcasinopakistan.pk/royal-x-casino-logo.webp',
      },
    },
    datePublished: '2026-01-03',
    dateModified: '2026-04-17',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://royalxcasinopakistan.pk/royal-x-casino-for-ios',
    },
    about: {
      '@type': 'SoftwareApplication',
      name: 'Royal X Casino',
      operatingSystem: 'iOS 13.0+',
      applicationCategory: 'GameApplication',
    },
  };

  return (
    <article>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://royalxcasinopakistan.pk' },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'Royal X Casino for iOS',
                item: 'https://royalxcasinopakistan.pk/royal-x-casino-for-ios',
              },
            ],
          }),
        }}
      />

      {/* Hero Section */}
      <section className="py-8 md:py-16 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-[#FFA500]">Royal X Casino for iOS</span>
            <br />
            <span className="text-white">iPhone & iPad Guide</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-300 mb-6">
            Latest Version 2026
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed max-w-4xl mx-auto">
            <Link href="/" className="text-accent hover:underline font-semibold">
              Royal X Casino
            </Link>{' '}
            is Pakistan&apos;s leading card gaming platform available on iOS devices. Play Teen Patti, Rummy, Dragon vs Tiger and more on your iPhone or iPad. Earn real cash rewards via JazzCash &amp; EasyPaisa.
          </p>
        </div>

        {/* Download Button */}
        <div className="flex justify-center my-12">
          <DownloadButton label="GET IT NOW" />
        </div>

        {/* Logo */}
        <div className="flex justify-center mb-12">
          <Image
            src="/royal-x-casino.webp"
            alt="Royal X Casino for iOS – Play on iPhone and iPad"
            title="Royal X Casino for iOS – Download & Play on iPhone"
            width={320}
            height={320}
            className="object-contain drop-shadow-2xl w-[260px] h-[260px] md:w-[320px] md:h-[320px]"
            priority={true}
            fetchPriority="high"
            quality={90}
            sizes="(max-width: 768px) 260px, 320px"
          />
        </div>
      </section>

      {/* App Info Table */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-[#FFA500] text-center">
          App Information
        </h2>
        <div className="overflow-hidden rounded-2xl shadow-2xl border border-gray-800 max-w-3xl mx-auto">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-800">
              <tbody className="divide-y divide-gray-800">
                <tr className="bg-[#0a1029]/50">
                  <td className="py-4 px-6 text-left font-medium text-white">App Name</td>
                  <td className="py-4 px-6 text-left text-white">Royal X Casino</td>
                </tr>
                <tr className="bg-[#06091F]/50">
                  <td className="py-4 px-6 text-left font-medium text-white">Platform</td>
                  <td className="py-4 px-6 text-left text-white">iOS (iPhone & iPad)</td>
                </tr>
                <tr className="bg-[#0a1029]/50">
                  <td className="py-4 px-6 text-left font-medium text-white">Required OS</td>
                  <td className="py-4 px-6 text-left text-white">iOS 13.0 or later</td>
                </tr>
                <tr className="bg-[#06091F]/50">
                  <td className="py-4 px-6 text-left font-medium text-white">Version</td>
                  <td className="py-4 px-6 text-left text-white">V2.54.1</td>
                </tr>
                <tr className="bg-[#0a1029]/50">
                  <td className="py-4 px-6 text-left font-medium text-white">Size</td>
                  <td className="py-4 px-6 text-left text-white">~12MB</td>
                </tr>
                <tr className="bg-[#06091F]/50">
                  <td className="py-4 px-6 text-left font-medium text-white">Price</td>
                  <td className="py-4 px-6 text-left text-white">Free</td>
                </tr>
                <tr className="bg-[#0a1029]/50">
                  <td className="py-4 px-6 text-left font-medium text-white">Language</td>
                  <td className="py-4 px-6 text-left text-white">English, Urdu</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* What is Royal X Casino */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-6 text-[#FFA500]">
            Royal X Casino on iOS — What You Need to Know
          </h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Royal X Casino is one of Pakistan&apos;s most popular real-money card gaming apps. While it is primarily built as an Android APK, iOS users can still enjoy the full gaming experience through the web-based version optimized for Safari on iPhones and iPads. No App Store download is required — simply visit the official site and play instantly.
          </p>
          <p className="text-gray-300 leading-relaxed">
            The platform offers seamless gameplay on iOS with support for all major games including Classic Teen Patti, Andar Bahar, Dragon Tiger, Rummy, Crash, and many more mini-games. Payments are fully supported via JazzCash and EasyPaisa.
          </p>
        </div>
      </section>

      {/* How to Play on iOS */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-8 text-[#FFA500]">
            How to Play Royal X Casino on iPhone / iPad
          </h2>
          <div className="space-y-4">
            <div className="bg-[#0A1029] rounded-lg p-6 border-l-4 border-[#FFA500]">
              <h3 className="text-lg font-bold text-white mb-2">Step 1: Open Safari</h3>
              <p className="text-gray-300">
                Launch Safari (or any browser) on your iPhone or iPad and navigate to{' '}
                <a
                  href="https://royalxcasinopakistan.pk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0ea5e9] hover:underline"
                >
                  royalxcasinopakistan.pk
                </a>
                .
              </p>
            </div>
            <div className="bg-[#0A1029] rounded-lg p-6 border-l-4 border-[#4ade80]">
              <h3 className="text-lg font-bold text-white mb-2">Step 2: Register or Login</h3>
              <p className="text-gray-300">
                Create a new account or log in with your existing credentials to access all games and features.
              </p>
            </div>
            <div className="bg-[#0A1029] rounded-lg p-6 border-l-4 border-[#60a5fa]">
              <h3 className="text-lg font-bold text-white mb-2">Step 3: Add to Home Screen (Optional)</h3>
              <p className="text-gray-300">
                Tap the Share icon in Safari and select &quot;Add to Home Screen&quot; to create a shortcut on your iPhone for quick access — just like a native app.
              </p>
            </div>
            <div className="bg-[#0A1029] rounded-lg p-6 border-l-4 border-[#a855f7]">
              <h3 className="text-lg font-bold text-white mb-2">Step 4: Deposit & Play</h3>
              <p className="text-gray-300">
                Make your first deposit via JazzCash or EasyPaisa and start playing your favorite card games to earn real cash.
              </p>
            </div>
          </div>

          <div className="flex justify-center mt-10">
            <DownloadButton label="PLAY NOW ON iOS" />
          </div>
        </div>
      </section>

      {/* Features on iOS */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-[#FFA500] text-center">
          Features of Royal X Casino on iOS
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-secondary px-8 py-8 rounded-lg text-center">
            <div className="text-4xl mb-4">📱</div>
            <h3 className="text-xl font-semibold mb-3 text-[#FFA500]">iOS Optimized</h3>
            <p className="text-gray-300">Smooth and responsive experience on all iPhone and iPad models.</p>
          </div>
          <div className="bg-secondary px-8 py-8 rounded-lg text-center">
            <div className="text-4xl mb-4">💰</div>
            <h3 className="text-xl font-semibold mb-3 text-[#FFA500]">Real Cash Rewards</h3>
            <p className="text-gray-300">Win and withdraw real money directly to JazzCash or EasyPaisa.</p>
          </div>
          <div className="bg-secondary px-8 py-8 rounded-lg text-center">
            <div className="text-4xl mb-4">🎮</div>
            <h3 className="text-xl font-semibold mb-3 text-[#FFA500]">All Games Available</h3>
            <p className="text-gray-300">Teen Patti, Rummy, Dragon Tiger, Crash and many more on your iPhone.</p>
          </div>
          <div className="bg-secondary px-8 py-8 rounded-lg text-center">
            <div className="text-4xl mb-4">🔒</div>
            <h3 className="text-xl font-semibold mb-3 text-[#FFA500]">Safe & Secure</h3>
            <p className="text-gray-300">All transactions and data are fully encrypted and protected.</p>
          </div>
          <div className="bg-secondary px-8 py-8 rounded-lg text-center">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-xl font-semibold mb-3 text-[#FFA500]">Fast Withdrawals</h3>
            <p className="text-gray-300">Quick and hassle-free withdrawals processed in minutes.</p>
          </div>
          <div className="bg-secondary px-8 py-8 rounded-lg text-center">
            <div className="text-4xl mb-4">🎁</div>
            <h3 className="text-xl font-semibold mb-3 text-[#FFA500]">Daily Bonuses</h3>
            <p className="text-gray-300">Log in daily to claim bonuses and boost your gaming balance.</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-8 text-[#FFA500]">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <details className="group bg-[#0a1029]/50 rounded-xl">
              <summary className="flex items-center justify-between p-4 cursor-pointer text-white font-medium">
                Is Royal X Casino available on the App Store?
                <span className="transition group-open:rotate-180">
                  <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </span>
              </summary>
              <div className="p-4 pt-0 text-gray-300">
                Royal X Casino is currently not listed on the Apple App Store. However, iOS users can access the full game experience through Safari by visiting the official website. You can also add it to your home screen for a native-app-like feel.
              </div>
            </details>
            <details className="group bg-[#0a1029]/50 rounded-xl">
              <summary className="flex items-center justify-between p-4 cursor-pointer text-white font-medium">
                Can I play on an iPhone without downloading anything?
                <span className="transition group-open:rotate-180">
                  <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </span>
              </summary>
              <div className="p-4 pt-0 text-gray-300">
                Yes! Simply open Safari, go to royalxcasinopakistan.pk, register or log in, and start playing instantly. No download or installation is required on iOS.
              </div>
            </details>
            <details className="group bg-[#0a1029]/50 rounded-xl">
              <summary className="flex items-center justify-between p-4 cursor-pointer text-white font-medium">
                Which iOS version is supported?
                <span className="transition group-open:rotate-180">
                  <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </span>
              </summary>
              <div className="p-4 pt-0 text-gray-300">
                Royal X Casino&apos;s web version works on iOS 13.0 and above. For the best experience, we recommend using iOS 15 or later on an iPhone X or newer model.
              </div>
            </details>
            <details className="group bg-[#0a1029]/50 rounded-xl">
              <summary className="flex items-center justify-between p-4 cursor-pointer text-white font-medium">
                Are payments supported on iOS?
                <span className="transition group-open:rotate-180">
                  <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </span>
              </summary>
              <div className="p-4 pt-0 text-gray-300">
                Yes, all payment methods including JazzCash and EasyPaisa work fully on iOS devices. Deposits and withdrawals function the same as on Android.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* Back to Home */}
      <section className="pt-6 pb-4 px-4 md:px-8 max-w-7xl mx-auto text-center">
        <Link href="/" className="text-[#0ea5e9] hover:text-[#6366f1] font-medium transition-colors">
          ← Back to Home
        </Link>
      </section>
    </article>
  );
}
