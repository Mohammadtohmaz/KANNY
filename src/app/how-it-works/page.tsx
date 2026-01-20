import { MousePointer, Users, CheckCircle, Wallet } from 'lucide-react';

const steps = [
  {
    icon: MousePointer,
    title: 'Choose Your Position',
    description:
      'Select an event and predict the outcome. Will gold reach $3600? Will the Fed cut rates? Simply choose Yes or No.',
  },
  {
    icon: Users,
    title: 'Get Matched',
    description:
      'Your position is matched against traders who predicted the opposite. No algorithms, no house edge—just real traders with real opinions.',
  },
  {
    icon: CheckCircle,
    title: 'Event Settles',
    description:
      'When the event concludes and official data is released, positions are settled based on actual outcomes.',
  },
  {
    icon: Wallet,
    title: 'Collect Winnings',
    description:
      'Winners receive payouts funded directly by losing traders\' stakes. Transparent, fair, and immediate.',
  },
];

export default function HowItWorks() {
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">How Oddsi Works</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Event-driven trading made simple. Predict outcomes, trade against other
            participants, and win when you&apos;re right.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-emerald-200" />
          <div className="space-y-12">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div
                  className={`md:flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  <div className="md:w-1/2 p-6">
                    <div
                      className={`bg-white rounded-xl shadow-lg p-6 ${
                        index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                      }`}
                    >
                      <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                        <step.icon className="text-emerald-600" size={24} />
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                  <div className="hidden md:flex md:w-1/2 justify-center">
                    <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center text-white font-bold">
                      {index + 1}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Example */}
        <div className="mt-16 bg-slate-900 text-white rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-4">Example: Non-Farm Payrolls</h2>
          <p className="text-gray-300 mb-4">
            You predict stronger job growth (&quot;Yes&quot;) while another trader predicts weakness
            (&quot;No&quot;). You each stake $100.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-emerald-600/20 border border-emerald-500/30 rounded-lg p-4">
              <h3 className="font-semibold text-emerald-400 mb-2">If Jobs Beat Expectations</h3>
              <p className="text-gray-300">
                You win! Your $100 stake returns ~$195 (your original stake plus the
                opponent&apos;s, minus fees).
              </p>
            </div>
            <div className="bg-red-600/20 border border-red-500/30 rounded-lg p-4">
              <h3 className="font-semibold text-red-400 mb-2">If Jobs Miss Expectations</h3>
              <p className="text-gray-300">
                The other trader wins. Your $100 stake goes to them (minus fees).
              </p>
            </div>
          </div>
        </div>

        {/* Key Points */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-center mb-8">Key Points</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-4">
              <div className="text-3xl font-bold text-emerald-600 mb-2">$1</div>
              <p className="text-gray-600">Minimum trade amount</p>
            </div>
            <div className="text-center p-4">
              <div className="text-3xl font-bold text-emerald-600 mb-2">1000%</div>
              <p className="text-gray-600">Potential returns</p>
            </div>
            <div className="text-center p-4">
              <div className="text-3xl font-bold text-emerald-600 mb-2">0%</div>
              <p className="text-gray-600">House position</p>
            </div>
            <div className="text-center p-4">
              <div className="text-3xl font-bold text-emerald-600 mb-2">100%</div>
              <p className="text-gray-600">Transparent odds</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
