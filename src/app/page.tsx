import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, TrendingUp, Shield, Zap } from 'lucide-react';
import PoolCard from '@/components/PoolCard';
import { pools } from '@/data/pools';

export default function Home() {
  return (
    <div className="bg-[#0d1421]">
      {/* Hero Section */}
      <section className="relative text-white py-24 min-h-[600px] flex items-center overflow-hidden">
        {/* Background Image */}
        <Image
          src="/images/hero/trading-desk.jpg"
          alt="Trading charts background"
          fill
          className="object-cover z-0"
          priority
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 z-10 bg-gradient-to-br from-[#0d1421]/95 via-[#141f3c]/90 to-[#0d1421]/85" />

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Bet on Everything, Everywhere<br />
              <span className="text-gradient">Simple & Smart</span>
            </h1>
            <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
              Access global markets with a powerful, intuitive betting platform.
              Join thousands of bettors worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/register"
                className="bg-[#00d48a] hover:bg-[#00ff9d] text-black px-8 py-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all duration-300 text-lg"
              >
                Get Started <ArrowRight size={22} />
              </Link>
              <Link
                href="/about-us"
                className="border border-white/20 hover:border-[#00d48a]/50 hover:bg-white/5 px-8 py-4 rounded-lg font-semibold transition-all duration-300 text-lg"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-[#141f3c] py-8 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white">12,000+</div>
              <div className="text-gray-400 text-sm">Active Bettors</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white">1,400+</div>
              <div className="text-gray-400 text-sm">Instruments</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white">2-8H</div>
              <div className="text-gray-400 text-sm">Fast Payouts</div>
            </div>
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <Shield size={18} className="text-[#00d48a]" />
              <span>Regulated & Secure</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-[#0d1421]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-white">
            Why Bet with <span className="text-gradient">ArrowBets</span>?
          </h2>
          <p className="text-gray-500 text-center mb-12 max-w-2xl mx-auto">
            A powerful platform built for bettors of all levels
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="gradient-border card-hover p-6">
              <div className="bg-[#141f3c] rounded-[calc(1rem-1px)] p-2">
                <div className="w-14 h-14 bg-[#00d48a]/10 rounded-xl flex items-center justify-center mb-4 border border-[#00d48a]/30">
                  <TrendingUp className="text-[#00d48a]" size={28} />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">Transparent Pools</h3>
                <p className="text-gray-500">
                  See real-time pool sizes, trader distribution, and potential returns
                  before you bet.
                </p>
              </div>
            </div>
            <div className="gradient-border card-hover p-6">
              <div className="bg-[#141f3c] rounded-[calc(1rem-1px)] p-2">
                <div className="w-14 h-14 bg-[#00d48a]/10 rounded-xl flex items-center justify-center mb-4 border border-[#00d48a]/30">
                  <Shield className="text-[#00d48a]" size={28} />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">Fair Trading</h3>
                <p className="text-gray-500">
                  Trade against other participants, not the house. We never take
                  positions against you.
                </p>
              </div>
            </div>
            <div className="gradient-border card-hover p-6">
              <div className="bg-[#141f3c] rounded-[calc(1rem-1px)] p-2">
                <div className="w-14 h-14 bg-[#00d48a]/10 rounded-xl flex items-center justify-center mb-4 border border-[#00d48a]/30">
                  <Zap className="text-[#00d48a]" size={28} />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">Quick Results</h3>
                <p className="text-gray-500">
                  Event-based trading means faster outcomes. Get results within hours,
                  not days.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Active Pools Section */}
      <section className="py-20 bg-[#0d1421]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-10">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white">Active Pools</h2>
              <p className="text-gray-500 mt-2">Bet on upcoming economic events</p>
            </div>
            <Link
              href="/register"
              className="text-[#00d48a] hover:text-[#00ff9d] font-medium flex items-center gap-1 transition-colors"
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
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#00d48a]/10 to-[#141f3c]/50" />
        <div className="absolute inset-0 bg-[#0d1421]/80" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Ready to Start <span className="text-gradient">Betting</span>?
          </h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto text-lg">
            Join thousands of bettors making predictions on global economic events.
            Start with as little as $1.
          </p>
          <Link
            href="/register"
            className="bg-[#00d48a] hover:bg-[#00ff9d] text-black px-10 py-4 rounded-lg font-semibold inline-flex items-center gap-2 transition-all duration-300 btn-glow text-lg"
          >
            Create Account <ArrowRight size={22} />
          </Link>
        </div>
      </section>
    </div>
  );
}
