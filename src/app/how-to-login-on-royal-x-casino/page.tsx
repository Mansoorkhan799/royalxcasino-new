import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import DownloadButton from '@/components/DownloadButton';

export const metadata: Metadata = {
  title: 'Login – Sign In to Your Royal X Casino Account 2026',
  description:
    'Login to your Royal X Casino account and continue playing Teen Patti, Rummy, Dragon Tiger. Access your balance, bonuses and withdrawals instantly.',
  keywords: [
    'Royal X Casino login',
    'Royal X Casino sign in',
    'Royal X Casino account login',
    'Royal X Casino Pakistan login',
    'Royal X Casino forgot password',
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
    canonical: 'https://royalxcasinopakistan.pk/how-to-login-on-royal-x-casino',
  },
  openGraph: {
    title: 'Login – Sign In to Your Royal X Casino Account 2026',
    description:
      'Sign in to Royal X Casino and continue playing. Access your games, balance, and cash withdrawals instantly.',
    url: 'https://royalxcasinopakistan.pk/how-to-login-on-royal-x-casino',
    siteName: 'Royal X Casino',
    locale: 'en_US',
    type: 'website',
  },
};

export default function LoginPage() {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Login – Sign In to Your Royal X Casino Account',
    description:
      'Sign in to your Royal X Casino account to play card games and manage your earnings in Pakistan.',
    url: 'https://royalxcasinopakistan.pk/how-to-login-on-royal-x-casino',
    author: {
      '@type': 'Organization',
      name: 'Royal X Casino',
      url: 'https://royalxcasinopakistan.pk',
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
              { '@type': 'ListItem', position: 2, name: 'Login', item: 'https://royalxcasinopakistan.pk/how-to-login-on-royal-x-casino' },
            ],
          }),
        }}
      />

      {/* Hero Section */}
      <section className="py-8 md:py-16 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-white">Login to </span>
            <span className="text-[#FFA500]">Royal X Casino</span>
          </h1>
          <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Welcome back! Sign in to your{' '}
            <Link href="/" className="text-accent hover:underline font-semibold">
              Royal X Casino
            </Link>{' '}
            account to access your games, check your balance, and withdraw your earnings.
          </p>
        </div>

        <div className="flex justify-center mb-10">
          <Image
            src="/royal-x-casino.webp"
            alt="Royal X Casino – Login to Your Account"
            width={200}
            height={200}
            className="object-contain drop-shadow-2xl"
            priority={true}
          />
        </div>

        {/* Login CTA */}
        <div className="flex justify-center my-8">
          <DownloadButton label="LOGIN NOW" />
        </div>
      </section>

      {/* Login Steps */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-8 text-[#FFA500] text-center">
            How to Login to Royal X Casino
          </h2>
          <div className="space-y-4 max-w-3xl mx-auto">
            <div className="bg-[#0A1029] rounded-lg p-6 border-l-4 border-[#FFA500]">
              <h3 className="text-xl font-bold text-[#FFA500] mb-3">Step 1: Open the App or Website</h3>
              <p className="text-gray-300">
                Launch the Royal X Casino app on your device or visit{' '}
                <a
                  href="https://royalxcasinopakistan.pk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0ea5e9] hover:underline"
                >
                  royalxcasinopakistan.pk
                </a>{' '}
                in your browser.
              </p>
            </div>
            <div className="bg-[#0A1029] rounded-lg p-6 border-l-4 border-[#4ade80]">
              <h3 className="text-xl font-bold text-[#4ade80] mb-3">Step 2: Tap &quot;Login&quot;</h3>
              <p className="text-gray-300">
                Tap the Login button on the main screen of the app or website.
              </p>
            </div>
            <div className="bg-[#0A1029] rounded-lg p-6 border-l-4 border-[#60a5fa]">
              <h3 className="text-xl font-bold text-[#60a5fa] mb-3">Step 3: Enter Your Credentials</h3>
              <p className="text-gray-300">
                Enter your registered mobile number and password to sign in to your account.
              </p>
            </div>
            <div className="bg-[#0A1029] rounded-lg p-6 border-l-4 border-[#f97316]">
              <h3 className="text-xl font-bold text-[#f97316] mb-3">Step 4: Start Playing</h3>
              <p className="text-gray-300">
                Once logged in, you&apos;re ready to play. Access all your games, check your balance, and manage your withdrawals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Forgot Password Section */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-6 text-[#FFA500]">Forgot Your Password?</h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            If you&apos;ve forgotten your Royal X Casino password, don&apos;t worry. Follow these steps to recover your account:
          </p>
          <div className="space-y-4">
            <div className="flex items-start gap-4 bg-[#0A1029] rounded-lg p-4">
              <span className="text-[#FFA500] font-bold text-lg min-w-[28px]">1.</span>
              <p className="text-gray-300">Open the Royal X Casino app or website and tap on &quot;Forgot Password&quot; on the login screen.</p>
            </div>
            <div className="flex items-start gap-4 bg-[#0A1029] rounded-lg p-4">
              <span className="text-[#FFA500] font-bold text-lg min-w-[28px]">2.</span>
              <p className="text-gray-300">Enter your registered mobile number and request an OTP (one-time password).</p>
            </div>
            <div className="flex items-start gap-4 bg-[#0A1029] rounded-lg p-4">
              <span className="text-[#FFA500] font-bold text-lg min-w-[28px]">3.</span>
              <p className="text-gray-300">Enter the OTP received on your phone and set a new strong password for your account.</p>
            </div>
            <div className="flex items-start gap-4 bg-[#0A1029] rounded-lg p-4">
              <span className="text-[#FFA500] font-bold text-lg min-w-[28px]">4.</span>
              <p className="text-gray-300">Login with your new password and resume playing.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Login Tips */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-[#FFA500] text-center">
          Tips for a Smooth Login Experience
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-secondary px-8 py-8 rounded-lg">
            <div className="text-3xl mb-3">🔑</div>
            <h3 className="text-xl font-semibold mb-3 text-[#FFA500]">Use a Strong Password</h3>
            <p className="text-gray-300">Create a password with a mix of letters, numbers, and special characters to keep your account secure.</p>
          </div>
          <div className="bg-secondary px-8 py-8 rounded-lg">
            <div className="text-3xl mb-3">📱</div>
            <h3 className="text-xl font-semibold mb-3 text-[#FFA500]">Keep the App Updated</h3>
            <p className="text-gray-300">Always use the latest version of Royal X Casino to avoid login issues and access new features.</p>
          </div>
          <div className="bg-secondary px-8 py-8 rounded-lg">
            <div className="text-3xl mb-3">🌐</div>
            <h3 className="text-xl font-semibold mb-3 text-[#FFA500]">Check Your Connection</h3>
            <p className="text-gray-300">Ensure you have a stable internet connection before logging in for the best experience.</p>
          </div>
          <div className="bg-secondary px-8 py-8 rounded-lg">
            <div className="text-3xl mb-3">🔒</div>
            <h3 className="text-xl font-semibold mb-3 text-[#FFA500]">Never Share Your Password</h3>
            <p className="text-gray-300">Royal X Casino will never ask for your password. Keep it private and never share it with anyone.</p>
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
                I can&apos;t log in — what should I do?
                <span className="transition group-open:rotate-180">
                  <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </span>
              </summary>
              <div className="p-4 pt-0 text-gray-300">
                First, double-check your phone number and password. If you&apos;ve forgotten your password, use the &quot;Forgot Password&quot; option. Make sure your internet connection is stable. If the problem persists, contact Royal X Casino support.
              </div>
            </details>
            <details className="group bg-[#0a1029]/50 rounded-xl">
              <summary className="flex items-center justify-between p-4 cursor-pointer text-white font-medium">
                Is my account secure?
                <span className="transition group-open:rotate-180">
                  <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </span>
              </summary>
              <div className="p-4 pt-0 text-gray-300">
                Yes. Royal X Casino uses encrypted connections and OTP-based verification to keep your account and funds secure. Never share your password with anyone.
              </div>
            </details>
            <details className="group bg-[#0a1029]/50 rounded-xl">
              <summary className="flex items-center justify-between p-4 cursor-pointer text-white font-medium">
                Can I log in on multiple devices?
                <span className="transition group-open:rotate-180">
                  <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </span>
              </summary>
              <div className="p-4 pt-0 text-gray-300">
                Yes, you can log in on multiple devices. However, we recommend logging out from shared or public devices to keep your account safe.
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
