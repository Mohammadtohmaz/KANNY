import Image from 'next/image';
import { Target, Users, Globe } from 'lucide-react';

export default function AboutUs() {
  return (
    <div className="py-16 bg-[#0d1421]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            About <span className="text-gradient">ArrowTrade</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Revolutionizing the way people trade through transparent, fair, and engaging
            event-driven markets.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="gradient-border overflow-hidden">
            <div className="relative h-48">
              <Image
                src="/images/about/mission.jpg"
                alt="Our Mission"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a14] to-transparent" />
            </div>
            <div className="p-8 bg-[#141f3c]">
              <h2 className="text-2xl font-bold mb-4 text-[#00d48a]">Our Mission</h2>
              <p className="text-gray-400">
                To create a transparent, fair, and engaging platform that bridges traditional
                finance and modern user expectations. We empower traders through gamification
                while rewarding knowledge and strategy over leverage manipulation.
              </p>
            </div>
          </div>
          <div className="gradient-border overflow-hidden">
            <div className="relative h-48">
              <Image
                src="/images/about/vision.jpg"
                alt="Our Vision"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a14] to-transparent" />
            </div>
            <div className="p-8 bg-[#141f3c]">
              <h2 className="text-2xl font-bold mb-4 text-[#00d48a]">Our Vision</h2>
              <p className="text-gray-400">
                To become the world&apos;s leading platform for event-driven trading, making
                market participation accessible and intuitive for all experience levels
                while promoting transparency and fairness.
              </p>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-white">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center gradient-border card-hover p-8">
              <div className="w-16 h-16 bg-gradient-to-br from-[#00d48a]/20 to-[#00d48a]/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-[#00d48a]/30">
                <Target className="text-[#00d48a]" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Transparency</h3>
              <p className="text-gray-500">
                Every pool, every payout, every outcome is visible and verifiable.
              </p>
            </div>
            <div className="text-center gradient-border card-hover p-8">
              <div className="w-16 h-16 bg-gradient-to-br from-[#00d48a]/20 to-[#00d48a]/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-[#00d48a]/30">
                <Users className="text-[#00d48a]" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Fairness</h3>
              <p className="text-gray-500">
                We never trade against our users. Your success is our success.
              </p>
            </div>
            <div className="text-center gradient-border card-hover p-8">
              <div className="w-16 h-16 bg-gradient-to-br from-[#00d48a]/20 to-[#00d48a]/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-[#00d48a]/30">
                <Globe className="text-[#00d48a]" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Accessibility</h3>
              <p className="text-gray-500">
                Trading made simple. Start with as little as $1.
              </p>
            </div>
          </div>
        </div>

        {/* Team */}
        <div className="gradient-border overflow-hidden">
          <div className="relative h-64">
            <Image
              src="/images/about/team.jpg"
              alt="Our Team"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a14] via-[#0a0a14]/50 to-transparent" />
          </div>
          <div className="p-8 -mt-20 relative bg-[#141f3c]">
            <h2 className="text-3xl font-bold text-center mb-4 text-white">Our Team</h2>
            <p className="text-center text-gray-400 max-w-2xl mx-auto">
              The founding team comprises traders, risk managers, and fintech innovators
              with decades of combined experience in forex trading, derivatives, risk
              management, quantitative analysis, and platform design. We&apos;ve previously
              built and launched multiple successful financial projects.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
