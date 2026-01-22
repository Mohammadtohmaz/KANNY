import { AlertTriangle } from 'lucide-react';

export default function RiskDisclaimer() {
  return (
    <div className="py-16 bg-[#0F142D] min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-4">
          <AlertTriangle className="text-[#ff6b6b]" size={40} />
          <h1 className="text-4xl font-bold text-white">Risk Disclaimer</h1>
        </div>
        <p className="text-gray-500 mb-8">Last updated: January 2025</p>

        <div className="bg-[#ff6b6b]/10 border border-[#ff6b6b]/30 rounded-xl p-6 mb-8">
          <p className="text-[#ff6b6b] font-medium">
            Trading involves significant risk. You could lose your entire initial investment.
            Only trade with funds you can afford to lose.
          </p>
        </div>

        <div className="space-y-8">
          <section className="gradient-border p-6">
            <div className="bg-[#141f3c] rounded-[calc(1rem-1px)]">
              <h2 className="text-2xl font-semibold mb-4 text-[#ff6b6b]">Leverage Risk</h2>
              <p className="text-gray-400">
                Even a slight fluctuation in the market could lead to a proportionately much larger
                movement in the value of your investment. These instruments involve significant leverage
                that can amplify both gains and losses beyond your initial deposit.
              </p>
            </div>
          </section>

          <section className="gradient-border p-6">
            <div className="bg-[#141f3c] rounded-[calc(1rem-1px)]">
              <h2 className="text-2xl font-semibold mb-4 text-[#70FFEB]">Total Loss Potential</h2>
              <p className="text-gray-400">
                Clients acknowledge that the risk of loss arising from trading can be substantial and
                may exceed initial investments plus margin requirements. You should not trade unless
                you are prepared to sustain total loss of deposited funds.
              </p>
            </div>
          </section>

          <section className="gradient-border p-6">
            <div className="bg-[#141f3c] rounded-[calc(1rem-1px)]">
              <h2 className="text-2xl font-semibold mb-4 text-[#70FFEB]">OTC Market Risks</h2>
              <p className="text-gray-400">
                Over-the-counter derivatives involve greater risk than exchange-traded products because
                there is no exchange market on which to close out an open position. You may be unable
                to exit positions at desired prices.
              </p>
            </div>
          </section>

          <section className="gradient-border p-6">
            <div className="bg-[#141f3c] rounded-[calc(1rem-1px)]">
              <h2 className="text-2xl font-semibold mb-4 text-[#70FFEB]">Volatility</h2>
              <p className="text-gray-400">
                Price movements in underlying markets are volatile and unpredictable and are outside
                of our control. Past performance is not indicative of future results.
              </p>
            </div>
          </section>

          <section className="gradient-border p-6">
            <div className="bg-[#141f3c] rounded-[calc(1rem-1px)]">
              <h2 className="text-2xl font-semibold mb-4 text-[#70FFEB]">Technical Risks</h2>
              <ul className="list-disc pl-6 text-gray-400 space-y-2">
                <li>The company accepts no responsibility for trading platform disruptions</li>
                <li>Communications failures or network issues may affect trading</li>
                <li>Clients bear all risk for hardware, software, and internet failures</li>
                <li>Force majeure events may result in financial losses</li>
              </ul>
            </div>
          </section>

          <section className="bg-[#141f3c] border border-white/10 rounded-xl p-6">
            <h2 className="text-xl font-semibold mb-4 text-white">Acknowledgment</h2>
            <p className="text-gray-400">
              By using our platform, you acknowledge that you have read, understood, and accept
              all risks associated with trading. You confirm that you are trading with risk
              capital—funds you can afford to lose—and that any losses will not impact your
              financial wellbeing.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
