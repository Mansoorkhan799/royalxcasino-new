'use client';

import { useState, useEffect, useTransition } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

function mobileNavClass(pathname: string, href: string) {
  const active = href === '/' ? pathname === '/' : pathname === href;
  return [
    'py-2 text-lg font-medium transition-colors rounded-md pl-3 -ml-3 border-l-4',
    active
      ? 'text-accent border-accent bg-accent/10'
      : 'text-white border-transparent hover:text-accent hover:bg-white/5',
  ].join(' ');
}

export default function MobileNavigation() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [, startTransition] = useTransition();

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleMenu = () => {
    startTransition(() => setIsOpen((prev) => !prev));
  };

  const closeMenu = () => {
    startTransition(() => setIsOpen(false));
  };

  if (!mounted) {
    return (
      <div className="md:hidden">
        <button 
          className="flex items-center text-accent p-1"
          aria-label="Open menu"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor" 
            className="w-8 h-8"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    );
  }

  return (
    <div className="md:hidden">
      {/* Mobile menu button */}
      <button 
        onClick={toggleMenu}
        className="flex items-center text-accent p-1"
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={isOpen}
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor" 
          className="w-8 h-8"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex flex-col bg-primary">
          <div className="flex justify-between items-center p-4 border-b border-gray-800">
            <Link href="/" className="flex items-center gap-3" onClick={closeMenu}>
              <div className="relative w-12 h-12 flex-shrink-0">
                <Image
                  src="/Royal-x-casino-game-pakistan-download.webp"
                  alt="Royal X Casino Logo"
                  fill
                  sizes="48px"
                  className="object-contain"
                  priority={true}
                />
              </div>
            </Link>
            <button 
              onClick={closeMenu}
              className="text-accent p-1"
              aria-label="Close menu"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor" 
                className="w-8 h-8"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <nav className="flex flex-col p-4" aria-label="Main">
            <Link href="/" className={mobileNavClass(pathname, '/')} onClick={closeMenu} aria-current={pathname === '/' ? 'page' : undefined}>Home</Link>
            <Link href="/how-to-register-on-royal-x-casino" className={mobileNavClass(pathname, '/how-to-register-on-royal-x-casino')} onClick={closeMenu} aria-current={pathname === '/how-to-register-on-royal-x-casino' ? 'page' : undefined}>Register</Link>
            <Link href="/how-to-login-on-royal-x-casino" className={mobileNavClass(pathname, '/how-to-login-on-royal-x-casino')} onClick={closeMenu} aria-current={pathname === '/how-to-login-on-royal-x-casino' ? 'page' : undefined}>Login</Link>
            <Link href="/deposit-money-in-royal-x-casino" className={mobileNavClass(pathname, '/deposit-money-in-royal-x-casino')} onClick={closeMenu} aria-current={pathname === '/deposit-money-in-royal-x-casino' ? 'page' : undefined}>Deposit Guide</Link>
            <Link href="/withdraw-money-from-royal-x-casino" className={mobileNavClass(pathname, '/withdraw-money-from-royal-x-casino')} onClick={closeMenu} aria-current={pathname === '/withdraw-money-from-royal-x-casino' ? 'page' : undefined}>Withdraw Guide</Link>
            <Link href="/royal-x-casino-for-pc" className={mobileNavClass(pathname, '/royal-x-casino-for-pc')} onClick={closeMenu} aria-current={pathname === '/royal-x-casino-for-pc' ? 'page' : undefined}>For PC</Link>
            <Link href="/royal-x-casino-for-ios" className={mobileNavClass(pathname, '/royal-x-casino-for-ios')} onClick={closeMenu} aria-current={pathname === '/royal-x-casino-for-ios' ? 'page' : undefined}>For iOS</Link>
            <Link href="/about-us-royal-x-casino-pakistan" className={mobileNavClass(pathname, '/about-us-royal-x-casino-pakistan')} onClick={closeMenu} aria-current={pathname === '/about-us-royal-x-casino-pakistan' ? 'page' : undefined}>About Us</Link>
            <Link href="/contact-us-royal-x-casino-pakistan" className={mobileNavClass(pathname, '/contact-us-royal-x-casino-pakistan')} onClick={closeMenu} aria-current={pathname === '/contact-us-royal-x-casino-pakistan' ? 'page' : undefined}>Contact Us</Link>
          </nav>
        </div>
      )}
    </div>
  );
}