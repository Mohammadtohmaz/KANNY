import { Target, Users, Globe } from 'lucide-react';

export default function AboutUs() {
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">About Oddsi</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Revolutionizing the way people trade through transparent, fair, and engaging
            event-driven markets.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-emerald-50 p-8 rounded-xl">
            <h2 className="text-2xl font-bold mb-4 text-emerald-700">Our Mission</h2>
            <p className="text-gray-700">
              To create a transparent, fair, and engaging platform that bridges traditional
              finance and modern user expectations. We empower traders through gamification
              while rewarding knowledge and strategy over leverage manipulation.
            </p>
          </div>
          <div className="bg-slate-50 p-8 rounded-xl">
            <h2 className="text-2xl font-bold mb-4 text-slate-700">Our Vision</h2>
            <p className="text-gray-700">
              To become the world&apos;s leading platform for event-driven trading, making
              market participation accessible and intuitive for all experience levels
              while promoting transparency and fairness.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="text-emerald-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Transparency</h3>
              <p className="text-gray-600">
                Every pool, every payout, every outcome is visible and verifiable.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-emerald-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Fairness</h3>
              <p className="text-gray-600">
                We never trade against our users. Your success is our success.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="text-emerald-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Accessibility</h3>
              <p className="text-gray-600">
                Trading made simple. Start with as little as $1.
              </p>
            </div>
          </div>
        </div>

        {/* Team */}
        <div className="bg-gray-50 rounded-xl p-8">
          <h2 className="text-3xl font-bold text-center mb-4">Our Team</h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto">
            The founding team comprises traders, risk managers, and fintech innovators
            with decades of combined experience in forex trading, derivatives, risk
            management, quantitative analysis, and platform design. We&apos;ve previously
            built and launched multiple successful financial projects.
          </p>
        </div>
      </div>
    </div>
  );
}
