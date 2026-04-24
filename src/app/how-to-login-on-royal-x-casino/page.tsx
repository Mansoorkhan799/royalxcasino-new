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

      <section className="py-8 md:py-16 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-[#FFA500]">
            Royal X Casino Login
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-white">
            An Easy and Simple Guide to Login
          </h2>
        </div>

        <div className="flex justify-center mb-10">
          <Image
            src="/royal-x-casino.webp"
            alt="Royal X Casino Login Guide"
            width={200}
            height={200}
            className="object-contain drop-shadow-2xl"
            priority={true}
          />
        </div>

        <div className="flex justify-center my-8">
          <DownloadButton label="LOGIN NOW" />
        </div>
      </section>

      <section className="py-6 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8 space-y-6 text-gray-300 leading-relaxed">
          <p>
            Royal X Casino login procedure is the only way through which you can get access to all the thrilling
            games, rewards and other real money earning ways. Once you are done with the registration then the next
            step is to log in inside the app and do the navigation without getting into any kind of trouble.
          </p>
          <p>
            Now here we will be knowing all about the Royal X Casino login guide, any kind of issues you may face here
            and then other important tips using which you can get access to your account at the app.
          </p>

          <h3 className="text-2xl font-bold text-[#FFA500]">Why the Royal X Casino Login is Important?</h3>
          <p>
            So, when you are done with the account creation process then next step will be Royal X Casino login which
            is need every time when you have to:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Unlock the casino and betting games</li>
            <li>Do any credit deposit</li>
            <li>Do any kind of account settings</li>
            <li>Claim for the rewards and bonuses</li>
          </ul>
          <p>
            If you will not login at this gaming app then its going to be very difficult even impossible to get inside
            the app.
          </p>

          <h3 className="text-2xl font-bold text-[#FFA500]">Royal X Casino Login - Step by Step Guide</h3>
          <p>
            So now we will be discussing some of the very easy steps following which you guys can login at the app
            easily:
          </p>
          <ul className="list-disc pl-6 space-y-4">
            <li>
              <span className="text-white font-semibold">Open the Official App</span>
              <p className="mt-1">
                You must visit the Royal X Casino website to directly login or just launch the app on your devices.
                Just keep in mind that you must always use the authentic site. Otherwise you may be a victim of online
                scams.
              </p>
            </li>
            <li>
              <span className="text-white font-semibold">Tap on Login Button</span>
              <p className="mt-1">
                There either on the website or app you must find out the Login button and mostly you can find it on
                top-right side on the page.
              </p>
            </li>
            <li>
              <span className="text-white font-semibold">Write Down your Credentials</span>
              <p className="mt-1">Now here in this section on your screens you must enter the details like:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Username or the email/number registered</li>
                <li>Then your password</li>
              </ul>
              <p className="mt-2">Juts double check the credentials and make sure not to type the wrong info.</p>
            </li>
            <li>
              <span className="text-white font-semibold">Complete the Account Verification</span>
              <p className="mt-1">
                In many cases the app asks the users to enter the code which they have received at the time of
                registration or a new one on registered number/email. This is because to make your account more
                secure.
              </p>
            </li>
            <li>
              <span className="text-white font-semibold">Now Get Access to Your Account</span>
              <p className="mt-1">
                Once you are sure about the login credentials then just tap there on the Login button. Then you will
                be taken to the main dashboard where you will find everything about the app.
              </p>
            </li>
          </ul>

          <h3 className="text-2xl font-bold text-[#FFA500]">What are the Common Issues at Royal X Casino Login?</h3>
          <p>There may occur different issues at the time of logging in. Let&apos;s know what they are:</p>
          <ul className="list-disc pl-6 space-y-4">
            <li>
              <span className="text-white font-semibold">Wrong Password</span>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Just make sure you have entered the right password.</li>
                <li>Just checkout the Caps Lock button is not on.</li>
                <li>If not works, then just reset your password again.</li>
              </ul>
            </li>
            <li>
              <span className="text-white font-semibold">Forgot Password</span>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>In case you may not remember your password at Royal X Casino login just tap on the Forgot Password.</li>
                <li>Then enter the email or number that is registered to this site.</li>
                <li>Then just follow the instructions to change the password.</li>
              </ul>
            </li>
            <li>
              <span className="text-white font-semibold">Unverified account</span>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>In case if you haven&apos;t completed the account verification process then go back and complete it.</li>
                <li>Juts checkout your mobile number or email address for OTP</li>
              </ul>
            </li>
            <li>
              <span className="text-white font-semibold">Website May be Down/Not Opening</span>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Make sure that your internet connection is stable.</li>
                <li>Just go and try another browser or many be a device.</li>
                <li>Go to your settings and clear the cache</li>
              </ul>
            </li>
          </ul>

          <h3 className="text-2xl font-bold text-[#FFA500]">What are the Tips for Safe Royal X Casino Login?</h3>
          <p>
            Security measures are very compulsory when it comes to online gaming apps. Its very important to be a
            responsible player when it comes to online casino games. So here we have few tips just go through them and
            it&apos;s going to help you a lot through out your gameplay journey:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Whenever you login just make sure to log out right after you are done with that.</li>
            <li>Do not share your login details with anyone else.</li>
            <li>Your password must contain strong and difficult characters.</li>
            <li>Never login from any public device or in case if you have done it just log out and clear the history.</li>
            <li>Change your password frequently.</li>
          </ul>

          <h3 className="text-2xl font-bold text-[#FFA500]">Royal X Casino Login on Mobile</h3>
          <p>Royal X Casino login on mobiles is even simpler. You are allowed login through:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>iOS Devices</li>
            <li>Mobile Browser/Server</li>
            <li>Android Devices</li>
          </ul>
          <p>
            The steps which are involved in the login at all these devices is same as you do on any other devices.
          </p>

          <h3 className="text-2xl font-bold text-[#FFA500]">What&apos;s Next After Login?</h3>
          <p>So, once you are done with the Royal X Casino login then next is:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Just get inside the app and explore all the games there</li>
            <li>You can just deposit credits to play the casino games</li>
            <li>Able to track your winnings and game history</li>
            <li>Just go and claim your bonuses</li>
          </ul>

          <h3 className="text-2xl font-bold text-[#FFA500]">Conclusion</h3>
          <p>
            Royal X Casino login is a very smooth, seamless and easy method. You can do it yourself even if you are
            just a beginner because its very basic and explained in a very easy way. Once you are logged in you will
            be able to get access to everything there inside ethe gaming app.
          </p>
          <p>
            Here with this easy login guide you are going to kickstart your casino gameplay journey within seconds.
            Just keep in mind that never share them with anyone and recheck them while logging in just to avoid nay
            kind of unimportant issues. With the safest account you will enjoy the Royal X Casino journey.
          </p>
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
