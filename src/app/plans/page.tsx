import { Check } from 'lucide-react';
import Link from 'next/link';

const plans = [
  {
    name: 'Starter',
    price: 'Free',
    description: 'Perfect for getting started with event trading',
    features: [
      'Access to all public pools',
      'Up to $100 per trade',
      'Standard withdrawal speed',
      'Email support',
    ],
    cta: 'Get Started',
    highlighted: false,
  },
  {
    name: 'Pro',
    price: '$29/mo',
    description: 'For active bettors who want more',
    features: [
      'Everything in Starter',
      'Up to $1,000 per trade',
      'Priority withdrawals',
      'Advanced analytics',
      'Priority support',
    ],
    cta: 'Upgrade to Pro',
    highlighted: true,
  },
  {
    name: 'Elite',
    price: '$99/mo',
    description: 'Maximum betting power and features',
    features: [
      'Everything in Pro',
      'Unlimited trade size',
      'Instant withdrawals',
      'Exclusive pools',
      'Dedicated account manager',
      'API access',
    ],
    cta: 'Go Elite',
    highlighted: false,
  },
];

export default function Plans() {
  return (
    <div className="py-16 bg-[#0d1421] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Choose Your <span className="text-gradient">Plan</span>
          </h1>
          <p className="text-xl text-gray-400">
            Flexible pricing designed to fit every bettor&apos;s style.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-xl overflow-hidden ${
                plan.highlighted
                  ? 'bg-gradient-to-b from-[#00d48a] to-[#00d48a] p-[1px] scale-105'
                  : 'gradient-border'
              }`}
            >
              <div className={`p-8 h-full ${plan.highlighted ? 'bg-[#141f3c] rounded-xl' : 'bg-[#141f3c]'}`}>
                <h2 className="text-2xl font-bold mb-2 text-white">{plan.name}</h2>
                <div className="text-4xl font-bold mb-2 text-gradient">{plan.price}</div>
                <p className="text-gray-400 mb-6">{plan.description}</p>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Check size={20} className="text-[#00d48a] mt-0.5" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/register"
                  className={`block text-center py-3 rounded-lg font-semibold transition-all duration-300 ${
                    plan.highlighted
                      ? 'bg-gradient-to-r from-[#00d48a] to-[#00d48a] hover:from-[#00d48a] hover:to-[#00ff9d] text-white btn-glow'
                      : 'border border-white/20 hover:border-[#00d48a]/50 text-white hover:bg-white/5'
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center text-gray-500">
          <p>All plans include full access to our betting platform. No hidden fees.</p>
        </div>
      </div>
    </div>
  );
}
