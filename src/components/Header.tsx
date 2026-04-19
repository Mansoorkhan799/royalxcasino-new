'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import MobileNavigation from './MobileNavigation';

function navLinkClass(pathname: string, href: string) {
  const active = href === '/' ? pathname === '/' : pathname === href;
  return [
    'font-medium transition-colors pb-0.5 border-b-2',
    active
      ? 'text-accent border-accent'
      : 'text-white border-transparent hover:text-accent hover:border-accent/40',
  ].join(' ');
}

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="glass py-3 px-4 md:px-8 sticky top-0 z-30 border-b border-gray-800">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <div className="relative h-14 w-14">
            <Image
              src="/Royal-x-casino-game-pakistan-download.webp"
              alt="Royal X Casino Logo"
              width={56}
              height={56}
              className="object-contain"
              priority={true}
              fetchPriority="high"
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex flex-wrap gap-x-8 gap-y-2 items-end">
          <Link href="/" className={navLinkClass(pathname, '/')} aria-current={pathname === '/' ? 'page' : undefined}>
            Home
          </Link>
          <Link href="/how-to-register-on-royal-x-casino" className={navLinkClass(pathname, '/how-to-register-on-royal-x-casino')} aria-current={pathname === '/how-to-register-on-royal-x-casino' ? 'page' : undefined}>
            Register
          </Link>
          <Link href="/how-to-login-on-royal-x-casino" className={navLinkClass(pathname, '/how-to-login-on-royal-x-casino')} aria-current={pathname === '/how-to-login-on-royal-x-casino' ? 'page' : undefined}>
            Login
          </Link>
          <Link href="/how-to-deposit-money-on-royal-x-casino" className={navLinkClass(pathname, '/how-to-deposit-money-on-royal-x-casino')} aria-current={pathname === '/how-to-deposit-money-on-royal-x-casino' ? 'page' : undefined}>
            Deposit
          </Link>
          <Link href="/how-to-withdraw-money-from-royal-x-casino" className={navLinkClass(pathname, '/how-to-withdraw-money-from-royal-x-casino')} aria-current={pathname === '/how-to-withdraw-money-from-royal-x-casino' ? 'page' : undefined}>
            Withdraw
          </Link>
          <Link href="/royal-x-casino-for-pc" className={navLinkClass(pathname, '/royal-x-casino-for-pc')} aria-current={pathname === '/royal-x-casino-for-pc' ? 'page' : undefined}>
            For PC
          </Link>
          <Link href="/royal-x-casino-for-ios" className={navLinkClass(pathname, '/royal-x-casino-for-ios')} aria-current={pathname === '/royal-x-casino-for-ios' ? 'page' : undefined}>
            For iOS
          </Link>
          <Link href="/about-us-royal-x-casino-pakistan" className={navLinkClass(pathname, '/about-us-royal-x-casino-pakistan')} aria-current={pathname === '/about-us-royal-x-casino-pakistan' ? 'page' : undefined}>
            About Us
          </Link>
          <Link href="/contact-us-royal-x-casino-pakistan" className={navLinkClass(pathname, '/contact-us-royal-x-casino-pakistan')} aria-current={pathname === '/contact-us-royal-x-casino-pakistan' ? 'page' : undefined}>
            Contact Us
          </Link>
        </nav>

        {/* Mobile Navigation */}
        <MobileNavigation />
      </div>
    </header>
  );
} 