import Link from 'next/link';
import { Instagram, Linkedin, Facebook } from 'lucide-react';

const footerLinks = {
  company: [
    { href: '/about-us', label: 'About Us' },
    { href: '/how-it-works', label: 'How It Works' },
    { href: '/partnerships', label: 'Partnerships' },
  ],
  resources: [
    { href: '/faq', label: 'FAQ' },
    { href: '/plans', label: 'Plans' },
  ],
  legal: [
    { href: '/privacy-policy', label: 'Privacy Policy' },
    { href: '/terms-conditions', label: 'Terms & Conditions' },
    { href: '/risk-disclaimer', label: 'Risk Disclaimer' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#0d1421] text-gray-400 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center">
              <img src="/images/arrowtrade-logo.svg" alt="ArrowTrade" className="h-8" />
            </Link>
            <p className="mt-4 text-sm text-gray-500">
              Trade Everything, Everywhere. Simple & Smart.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="hover:text-[#00d48a] transition-colors duration-200">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-[#00d48a] transition-colors duration-200">
                <Linkedin size={20} />
              </a>
              <a href="#" className="hover:text-[#00d48a] transition-colors duration-200">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-[#00d48a] transition-colors duration-200 text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-[#00d48a] transition-colors duration-200 text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-[#00d48a] transition-colors duration-200 text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 mt-8 pt-8">
          <p className="text-sm text-gray-500 text-center">
            © 2025 ArrowTrade. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
