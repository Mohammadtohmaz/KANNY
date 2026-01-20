import { DollarSign, BarChart3, Users, Gift } from 'lucide-react';
import Link from 'next/link';

const benefits = [
  {
    icon: DollarSign,
    title: '30% Commission',
    description: 'Earn 30% of the revenue we generate from your referrals\' trading activity.',
  },
  {
    icon: BarChart3,
    title: 'Real-Time Tracking',
    description: 'Monitor clicks, signups, active traders, and commissions in your dashboard.',
  },
  {
    icon: Gift,
    title: 'No Cap on Earnings',
    description: 'Unlimited earning potential. The more your referrals trade, the more you earn.',
  },
  {
    icon: Users,
    title: 'Flexible Payouts',
    description: 'Request your commissions anytime through your affiliate dashboard.',
  },
];

export default function Partnerships() {
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Partner With Oddsi</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join one of the most rewarding affiliate programs in the trading space.
            Earn recurring commissions by referring traders.
          </p>
        </div>

        {/* Benefits */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <benefit.icon className="text-emerald-600" size={24} />
              </div>
              <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-600 text-sm">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Calculator */}
        <div className="bg-slate-900 text-white rounded-xl p-8 mb-16">
          <h2 className="text-2xl font-bold mb-6 text-center">Earnings Example</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-emerald-400">100</div>
              <p className="text-gray-400 mt-2">Referred Users</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-emerald-400">$50</div>
              <p className="text-gray-400 mt-2">Avg. Monthly Revenue Each</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-emerald-400">$1,500</div>
              <p className="text-gray-400 mt-2">Your Monthly Commission</p>
            </div>
          </div>
        </div>

        {/* How It Works */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-center mb-8">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-10 h-10 bg-emerald-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                1
              </div>
              <h3 className="font-semibold mb-2">Sign Up</h3>
              <p className="text-gray-600">
                Every Oddsi user automatically becomes an affiliate with a unique
                referral link.
              </p>
            </div>
            <div className="text-center">
              <div className="w-10 h-10 bg-emerald-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                2
              </div>
              <h3 className="font-semibold mb-2">Share</h3>
              <p className="text-gray-600">
                Share your link on social media, blogs, YouTube, or with your network.
              </p>
            </div>
            <div className="text-center">
              <div className="w-10 h-10 bg-emerald-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                3
              </div>
              <h3 className="font-semibold mb-2">Earn</h3>
              <p className="text-gray-600">
                Earn 30% commission on revenue from your referrals&apos; trading activity.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-emerald-50 rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-4">Ready to Start Earning?</h2>
          <p className="text-gray-600 mb-6">
            Sign up today and get your unique referral link instantly.
          </p>
          <Link
            href="/register"
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-lg font-semibold inline-block transition-colors"
          >
            Become a Partner
          </Link>
        </div>
      </div>
    </div>
  );
}
