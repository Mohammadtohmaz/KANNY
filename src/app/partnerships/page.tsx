import { DollarSign, BarChart3, Users, Gift } from 'lucide-react';
import Link from 'next/link';

const benefits = [
  {
    icon: DollarSign,
    title: '30% Commission',
    description: 'Earn 30% of the revenue we generate from your referrals\' betting activity.',
  },
  {
    icon: BarChart3,
    title: 'Real-Time Tracking',
    description: 'Monitor clicks, signups, active bettors, and commissions in your dashboard.',
  },
  {
    icon: Gift,
    title: 'No Cap on Earnings',
    description: 'Unlimited earning potential. The more your referrals bet, the more you earn.',
  },
  {
    icon: Users,
    title: 'Flexible Payouts',
    description: 'Request your commissions anytime through your affiliate dashboard.',
  },
];

export default function Partnerships() {
  return (
    <div className="py-16 bg-[#0F142D] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Partner With <span className="text-gradient">ArrowBets</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Join one of the most rewarding affiliate programs in the betting space.
            Earn recurring commissions by referring bettors.
          </p>
        </div>

        {/* Benefits */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {benefits.map((benefit, index) => (
            <div key={index} className="gradient-border card-hover p-6 text-center">
              <div className="bg-[#141f3c] rounded-[calc(1rem-1px)]">
                <div className="w-14 h-14 bg-gradient-to-br from-[#70FFEB]/20 to-[#70FFEB]/20 rounded-xl flex items-center justify-center mx-auto mb-4 border border-[#70FFEB]/30">
                  <benefit.icon className="text-[#70FFEB]" size={28} />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-white">{benefit.title}</h3>
                <p className="text-gray-500 text-sm">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Calculator */}
        <div className="gradient-border overflow-hidden mb-16">
          <div className="p-8 bg-[#141f3c]">
            <h2 className="text-2xl font-bold mb-8 text-center text-white">Earnings Example</h2>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-5xl font-bold text-gradient">100</div>
                <p className="text-gray-400 mt-2">Referred Users</p>
              </div>
              <div>
                <div className="text-5xl font-bold text-gradient">$50</div>
                <p className="text-gray-400 mt-2">Avg. Monthly Revenue Each</p>
              </div>
              <div>
                <div className="text-5xl font-bold text-gradient">$1,500</div>
                <p className="text-gray-400 mt-2">Your Monthly Commission</p>
              </div>
            </div>
          </div>
        </div>

        {/* How It Works */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-center mb-8 text-white">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-[#70FFEB] to-[#70FFEB] text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg glow-green">
                1
              </div>
              <h3 className="font-semibold mb-2 text-white">Sign Up</h3>
              <p className="text-gray-400">
                Every ArrowBets user automatically becomes an affiliate with a unique
                referral link.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-[#70FFEB] to-[#70FFEB] text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg glow-green">
                2
              </div>
              <h3 className="font-semibold mb-2 text-white">Share</h3>
              <p className="text-gray-400">
                Share your link on social media, blogs, YouTube, or with your network.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-[#70FFEB] to-[#70FFEB] text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg glow-green">
                3
              </div>
              <h3 className="font-semibold mb-2 text-white">Earn</h3>
              <p className="text-gray-400">
                Earn 30% commission on revenue from your referrals&apos; betting activity.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center gradient-border p-10">
          <div className="bg-[#141f3c] rounded-[calc(1rem-1px)]">
            <h2 className="text-2xl font-bold mb-4 text-white">Ready to Start Earning?</h2>
            <p className="text-gray-400 mb-6">
              Sign up today and get your unique referral link instantly.
            </p>
            <Link
              href="/register"
              className="bg-gradient-to-r from-[#70FFEB] to-[#70FFEB] hover:from-[#70FFEB] hover:to-[#9FFFF4] text-white px-8 py-3 rounded-lg font-semibold inline-block transition-all duration-300 btn-glow"
            >
              Become a Partner
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
