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
    description: 'For active traders who want more',
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
    description: 'Maximum trading power and features',
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
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Choose Your Plan</h1>
          <p className="text-xl text-gray-600">
            Flexible pricing designed to fit every trader&apos;s style.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-xl p-8 ${
                plan.highlighted
                  ? 'bg-emerald-600 text-white shadow-xl scale-105'
                  : 'bg-white border border-gray-200 shadow-lg'
              }`}
            >
              <h2 className="text-2xl font-bold mb-2">{plan.name}</h2>
              <div className="text-3xl font-bold mb-2">{plan.price}</div>
              <p
                className={`mb-6 ${
                  plan.highlighted ? 'text-emerald-100' : 'text-gray-600'
                }`}
              >
                {plan.description}
              </p>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <Check
                      size={20}
                      className={
                        plan.highlighted ? 'text-emerald-200' : 'text-emerald-500'
                      }
                    />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/register"
                className={`block text-center py-3 rounded-lg font-semibold transition-colors ${
                  plan.highlighted
                    ? 'bg-white text-emerald-600 hover:bg-gray-100'
                    : 'bg-emerald-600 text-white hover:bg-emerald-700'
                }`}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center text-gray-500">
          <p>All plans include full access to our trading platform. No hidden fees.</p>
        </div>
      </div>
    </div>
  );
}
