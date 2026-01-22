'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { href: '/how-it-works', label: 'Products' },
  { href: '/plans', label: 'Account Types' },
  { href: '/about-us', label: 'About Us' },
  { href: '/partnerships', label: 'Partners' },
  { href: '/faq', label: 'Support' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-[#0F142D]/95 backdrop-blur-md text-white sticky top-0 z-50 border-b border-white/5">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center">
            <img src="/images/arrowbets-logo.svg" alt="ArrowBets" className="h-12" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-400 hover:text-[#70FFEB] transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/login"
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              Login
            </Link>
            <Link
              href="/register"
              className="bg-[#70FFEB] hover:bg-[#9FFFF4] text-black px-5 py-2 rounded-lg transition-all duration-300 font-medium"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-gray-400 hover:text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4 border-t border-white/10 mt-2 pt-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block py-2 text-gray-400 hover:text-[#70FFEB] transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex space-x-4 mt-4">
              <Link href="/login" className="text-gray-400 hover:text-white">
                Login
              </Link>
              <Link
                href="/register"
                className="bg-[#70FFEB] text-black px-4 py-2 rounded-lg"
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
