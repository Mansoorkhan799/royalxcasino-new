import Link from 'next/link';
import DownloadButton from './DownloadButton';

export default function Footer() {
  return (
    <footer className="glass text-white pt-8 pb-2 px-4 md:px-8 border-t border-gray-800 relative z-20">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Column */}
          <div>
            <h2 className="text-xl font-bold text-accent mb-4">Royal X Casino</h2>
            <p className="text-sm text-gray-300 mb-4">
              Royal X Casino is Pakistan's premier card gaming platform, offering Teen Patti, Rummy, Dragon vs Tiger and many other exciting games. Earn real cash with JazzCash & EasyPaisa payments.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/share/1at8tjJcje/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <svg className="w-5 h-5 text-gray-400 hover:text-accent transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.77,7.46H14.5v-1.9c0-0.9,0.6-1.1,1-1.1h3V0.13H14.5c-4.1,0-5,2.9-5,4.8v2.5H6v4.5h3.5V22h5V11.96h3.35L18.77,7.46z" />
                </svg>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h2 className="text-lg font-semibold mb-4 text-accent">Quick Links</h2>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-gray-300 hover:text-accent transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/royal-x-casino-for-ios" className="text-gray-300 hover:text-accent transition-colors">
                  For iOS
                </Link>
              </li>
              <li>
                <Link href="/royal-x-casino-for-pc" className="text-gray-300 hover:text-accent transition-colors">
                  PC Version
                </Link>
              </li>
              <li>
                <Link href="/how-to-register-on-royal-x-casino" className="text-gray-300 hover:text-accent transition-colors">
                  Register
                </Link>
              </li>
              <li>
                <Link href="/how-to-login-on-royal-x-casino" className="text-gray-300 hover:text-accent transition-colors">
                  Login
                </Link>
              </li>
              <li>
                <Link href="/about-us-royal-x-casino-pakistan" className="text-gray-300 hover:text-accent transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact-us-royal-x-casino-pakistan" className="text-gray-300 hover:text-accent transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h2 className="text-lg font-semibold mb-4 text-accent">Resources</h2>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/how-to-deposit-money-on-royal-x-casino" className="text-gray-300 hover:text-accent transition-colors">
                  Deposit Guide
                </Link>
              </li>
              <li>
                <Link href="/how-to-withdraw-money-from-royal-x-casino" className="text-gray-300 hover:text-accent transition-colors">
                  Withdraw Guide
                </Link>
              </li>
              <li>
                <Link href="/how-to-register-on-royal-x-casino" className="text-gray-300 hover:text-accent transition-colors">
                  Create Account
                </Link>
              </li>
              <li>
                <Link href="/how-to-login-on-royal-x-casino" className="text-gray-300 hover:text-accent transition-colors">
                  Account Login
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-300 hover:text-accent transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/disclaimer" className="text-gray-300 hover:text-accent transition-colors">
                  Disclaimer
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Download */}
          <div>
            <h2 className="text-lg font-semibold mb-4 text-accent">Download App</h2>
            <p className="text-sm text-gray-300 mb-4">
              Download Royal X Casino to enjoy the best card gaming experience and earn real cash rewards on your mobile device.
            </p>
            <DownloadButton />
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-4 pb-3 text-center text-sm text-gray-400">
          <p className="mb-0">© 2026 Royal X Casino. All rights reserved. | <Link href="/" className="hover:text-accent">royalxcasinopakistan.pk</Link></p>
        </div>
      </div>
    </footer>
  );
} 