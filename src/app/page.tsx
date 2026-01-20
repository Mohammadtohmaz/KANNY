import Link from 'next/link';
import { ArrowRight, TrendingUp, Shield, Zap } from 'lucide-react';
import PoolCard from '@/components/PoolCard';
import { pools } from '@/data/pools';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Small Trades,{' '}
              <span className="text-emerald-400">Unlimited Gains</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Trade on economic events with one-click simplicity. Transparent pools,
              real-time scoring, and potential returns up to 1,000%.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/register"
                className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors"
              >
                Start Trading <ArrowRight size={20} />
              </Link>
              <Link
                href="/how-it-works"
                className="border border-white/30 hover:bg-white/10 px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                How It Works
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Oddsi?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="text-emerald-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Transparent Pools</h3>
              <p className="text-gray-600">
                See real-time pool sizes, trader distribution, and potential returns
                before you trade.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                <Shield className="text-emerald-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Fair Trading</h3>
              <p className="text-gray-600">
                Trade against other participants, not the house. We never take
                positions against you.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                <Zap className="text-emerald-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Quick Results</h3>
              <p className="text-gray-600">
                Event-based trading means faster outcomes. Get results within hours,
                not days.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Active Pools Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Active Pools</h2>
            <Link
              href="/register"
              className="text-emerald-600 hover:text-emerald-700 font-medium flex items-center gap-1"
            >
              View All <ArrowRight size={18} />
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pools.map((pool) => (
              <PoolCard key={pool.id} pool={pool} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-emerald-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Trading?</h2>
          <p className="text-emerald-100 mb-8 max-w-xl mx-auto">
            Join thousands of traders making predictions on global economic events.
            Start with as little as $1.
          </p>
          <Link
            href="/register"
            className="bg-white text-emerald-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold inline-flex items-center gap-2 transition-colors"
          >
            Create Account <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}
