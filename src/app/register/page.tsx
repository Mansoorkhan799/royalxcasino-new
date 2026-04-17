import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import DownloadButton from '@/components/DownloadButton';

export const metadata: Metadata = {
  title: 'Register – Create Your Royal X Casino Account 2026',
  description:
    'Create a free Royal X Casino account in minutes. Register now to play Teen Patti, Rummy, Dragon Tiger and earn real cash with JazzCash & EasyPaisa.',
  keywords: [
    'Royal X Casino register',
    'Royal X Casino sign up',
    'Royal X Casino create account',
    'Royal X Casino new account',
    'Royal X Casino Pakistan register',
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
    canonical: 'https://royalxcasinopakistan.pk/register',
  },
  openGraph: {
    title: 'Register – Create Your Royal X Casino Account 2026',
    description:
      'Create a free Royal X Casino account and start playing today. Earn real cash with Teen Patti, Rummy & more.',
    url: 'https://royalxcasinopakistan.pk/register',
    siteName: 'Royal X Casino',
    locale: 'en_US',
    type: 'website',
  },
};

export default function RegisterPage() {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Register – Create Your Royal X Casino Account',
    description:
      'Create a free Royal X Casino account to play card games and earn real cash in Pakistan.',
    url: 'https://royalxcasinopakistan.pk/register',
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
              { '@type': 'ListItem', position: 2, name: 'Register', item: 'https://royalxcasinopakistan.pk/register' },
            ],
          }),
        }}
      />

      {/* Hero Section */}
      <section className="py-8 md:py-16 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-white">Create Your </span>
            <span className="text-[#FFA500]">Royal X Casino</span>
            <br />
            <span className="text-white">Account</span>
          </h1>
          <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Join millions of players on{' '}
            <Link href="/" className="text-accent hover:underline font-semibold">
              Royal X Casino
            </Link>{' '}
            — Pakistan&apos;s #1 card gaming platform. Register in minutes and start earning real cash today.
          </p>
        </div>

        <div className="flex justify-center mb-10">
          <Image
            src="/royal-x-casino.webp"
            alt="Royal X Casino – Register and Start Playing"
            width={200}
            height={200}
            className="object-contain drop-shadow-2xl"
            priority={true}
          />
        </div>
      </section>

      {/* Registration Steps */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-8 text-[#FFA500] text-center">
            How to Register on Royal X Casino
          </h2>
          <div className="space-y-4 max-w-3xl mx-auto">
            <div className="bg-[#0A1029] rounded-lg p-6 border-l-4 border-[#FFA500]">
              <h3 className="text-xl font-bold text-[#FFA500] mb-3">Step 1: Visit the Official Website</h3>
              <p className="text-gray-300">
                Open your browser and go to{' '}
                <a
                  href="https://royalxcasinopakistan.pk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0ea5e9] hover:underline"
                >
                  royalxcasinopakistan.pk
                </a>{' '}
                or open the Royal X Casino app on your device.
              </p>
            </div>
            <div className="bg-[#0A1029] rounded-lg p-6 border-l-4 border-[#4ade80]">
              <h3 className="text-xl font-bold text-[#4ade80] mb-3">Step 2: Tap &quot;Register&quot;</h3>
              <p className="text-gray-300">
                Click the Register or Sign Up button on the home screen of the app or website.
              </p>
            </div>
            <div className="bg-[#0A1029] rounded-lg p-6 border-l-4 border-[#60a5fa]">
              <h3 className="text-xl font-bold text-[#60a5fa] mb-3">Step 3: Enter Your Details</h3>
              <p className="text-gray-300">
                Provide your mobile number, create a username, and set a strong password to secure your account.
              </p>
            </div>
            <div className="bg-[#0A1029] rounded-lg p-6 border-l-4 border-[#a855f7]">
              <h3 className="text-xl font-bold text-[#a855f7] mb-3">Step 4: Verify Your Number</h3>
              <p className="text-gray-300">
                Enter the OTP (one-time password) sent to your phone number to verify your account.
              </p>
            </div>
            <div className="bg-[#0A1029] rounded-lg p-6 border-l-4 border-[#f97316]">
              <h3 className="text-xl font-bold text-[#f97316] mb-3">Step 5: Make Your First Deposit</h3>
              <p className="text-gray-300">
                Add funds via JazzCash or EasyPaisa to activate your account and claim your welcome bonus.
              </p>
            </div>
          </div>

          <div className="flex justify-center mt-10">
            <DownloadButton label="REGISTER NOW" />
          </div>
        </div>
      </section>

      {/* Benefits of Registering */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-[#FFA500] text-center">
          Benefits of Creating an Account
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-secondary px-8 py-8 rounded-lg text-center">
            <div className="text-4xl mb-4">🎁</div>
            <h3 className="text-xl font-semibold mb-3 text-[#FFA500]">Welcome Bonus</h3>
            <p className="text-gray-300">Get an exclusive welcome bonus on your first deposit when you register.</p>
          </div>
          <div className="bg-secondary px-8 py-8 rounded-lg text-center">
            <div className="text-4xl mb-4">💰</div>
            <h3 className="text-xl font-semibold mb-3 text-[#FFA500]">Real Cash Earnings</h3>
            <p className="text-gray-300">Withdraw your winnings directly to JazzCash or EasyPaisa.</p>
          </div>
          <div className="bg-secondary px-8 py-8 rounded-lg text-center">
            <div className="text-4xl mb-4">🎮</div>
            <h3 className="text-xl font-semibold mb-3 text-[#FFA500]">Access All Games</h3>
            <p className="text-gray-300">Unlock all games including Teen Patti, Rummy, Dragon Tiger and more.</p>
          </div>
          <div className="bg-secondary px-8 py-8 rounded-lg text-center">
            <div className="text-4xl mb-4">🏆</div>
            <h3 className="text-xl font-semibold mb-3 text-[#FFA500]">VIP Rewards</h3>
            <p className="text-gray-300">Climb the VIP ladder to unlock exclusive rewards and higher withdrawal limits.</p>
          </div>
          <div className="bg-secondary px-8 py-8 rounded-lg text-center">
            <div className="text-4xl mb-4">👥</div>
            <h3 className="text-xl font-semibold mb-3 text-[#FFA500]">Referral Bonuses</h3>
            <p className="text-gray-300">Invite friends and earn bonus cash for every successful referral.</p>
          </div>
          <div className="bg-secondary px-8 py-8 rounded-lg text-center">
            <div className="text-4xl mb-4">📅</div>
            <h3 className="text-xl font-semibold mb-3 text-[#FFA500]">Daily Login Rewards</h3>
            <p className="text-gray-300">Log in daily to collect free chips and bonus rewards automatically.</p>
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
                Is registration free on Royal X Casino?
                <span className="transition group-open:rotate-180">
                  <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </span>
              </summary>
              <div className="p-4 pt-0 text-gray-300">
                Yes, creating a Royal X Casino account is completely free. You only need a valid phone number to get started.
              </div>
            </details>
            <details className="group bg-[#0a1029]/50 rounded-xl">
              <summary className="flex items-center justify-between p-4 cursor-pointer text-white font-medium">
                What is the minimum age to register?
                <span className="transition group-open:rotate-180">
                  <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </span>
              </summary>
              <div className="p-4 pt-0 text-gray-300">
                You must be at least 18 years old to create an account and play on Royal X Casino.
              </div>
            </details>
            <details className="group bg-[#0a1029]/50 rounded-xl">
              <summary className="flex items-center justify-between p-4 cursor-pointer text-white font-medium">
                Can I have multiple accounts?
                <span className="transition group-open:rotate-180">
                  <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </span>
              </summary>
              <div className="p-4 pt-0 text-gray-300">
                No. Each user is allowed only one account per phone number. Multiple accounts may result in a permanent ban.
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
