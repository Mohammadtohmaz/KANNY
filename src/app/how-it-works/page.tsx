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
    <div className="py-16 bg-[#01010b] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            How <span className="text-gradient">Oddsi</span> Works
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Event-driven trading made simple. Predict outcomes, trade against other
            participants, and win when you&apos;re right.
          </p>
        </div>

        {/* Steps */}
        <div className="relative mb-20">
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gradient-to-b from-[#802ddf] to-[#00d48a]" />
          <div className="space-y-12">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div
                  className={`md:flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  <div className="md:w-1/2 p-4">
                    <div
                      className={`gradient-border card-hover p-6 ${
                        index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                      }`}
                    >
                      <div className="bg-[#0a0a14] rounded-[calc(1rem-1px)] p-2">
                        <div className="w-12 h-12 bg-gradient-to-br from-[#802ddf]/20 to-[#00d48a]/20 rounded-lg flex items-center justify-center mb-4 border border-[#802ddf]/30">
                          <step.icon className="text-[#00d48a]" size={24} />
                        </div>
                        <h3 className="text-xl font-semibold mb-2 text-white">{step.title}</h3>
                        <p className="text-gray-400">{step.description}</p>
                      </div>
                    </div>
                  </div>
                  <div className="hidden md:flex md:w-1/2 justify-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-[#802ddf] to-[#00d48a] rounded-full flex items-center justify-center text-white font-bold text-lg glow-purple-green">
                      {index + 1}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Example */}
        <div className="gradient-border overflow-hidden mb-16">
          <div className="p-8 bg-[#0a0a14]">
            <h2 className="text-2xl font-bold mb-4 text-white">Example: Non-Farm Payrolls</h2>
            <p className="text-gray-400 mb-6">
              You predict stronger job growth (&quot;Yes&quot;) while another trader predicts weakness
              (&quot;No&quot;). You each stake $100.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-[#00d48a]/10 border border-[#00d48a]/30 rounded-lg p-4">
                <h3 className="font-semibold text-[#00d48a] mb-2">If Jobs Beat Expectations</h3>
                <p className="text-gray-400">
                  You win! Your $100 stake returns ~$195 (your original stake plus the
                  opponent&apos;s, minus fees).
                </p>
              </div>
              <div className="bg-[#802ddf]/10 border border-[#802ddf]/30 rounded-lg p-4">
                <h3 className="font-semibold text-[#9945ff] mb-2">If Jobs Miss Expectations</h3>
                <p className="text-gray-400">
                  The other trader wins. Your $100 stake goes to them (minus fees).
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Key Points */}
        <div>
          <h2 className="text-2xl font-bold text-center mb-8 text-white">Key Points</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center gradient-border p-6">
              <div className="text-4xl font-bold text-gradient mb-2">$1</div>
              <p className="text-gray-400">Minimum trade amount</p>
            </div>
            <div className="text-center gradient-border p-6">
              <div className="text-4xl font-bold text-gradient mb-2">1000%</div>
              <p className="text-gray-400">Potential returns</p>
            </div>
            <div className="text-center gradient-border p-6">
              <div className="text-4xl font-bold text-gradient mb-2">0%</div>
              <p className="text-gray-400">House position</p>
            </div>
            <div className="text-center gradient-border p-6">
              <div className="text-4xl font-bold text-gradient mb-2">100%</div>
              <p className="text-gray-400">Transparent odds</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
