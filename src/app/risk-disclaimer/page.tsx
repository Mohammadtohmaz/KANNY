import { AlertTriangle } from 'lucide-react';

export default function RiskDisclaimer() {
  return (
    <div className="py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-8">
          <AlertTriangle className="text-amber-500" size={40} />
          <h1 className="text-4xl font-bold">Risk Disclaimer</h1>
        </div>
        <p className="text-gray-600 mb-8">Last updated: January 2025</p>

        <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-8">
          <p className="text-amber-800 font-medium">
            Trading involves significant risk. You could lose your entire initial investment.
            Only trade with funds you can afford to lose.
          </p>
        </div>

        <div className="prose prose-gray max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Leverage Risk</h2>
            <p className="text-gray-600">
              Even a slight fluctuation in the market could lead to a proportionately much larger
              movement in the value of your investment. These instruments involve significant leverage
              that can amplify both gains and losses beyond your initial deposit.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Total Loss Potential</h2>
            <p className="text-gray-600">
              Clients acknowledge that the risk of loss arising from trading can be substantial and
              may exceed initial investments plus margin requirements. You should not trade unless
              you are prepared to sustain total loss of deposited funds.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">OTC Market Risks</h2>
            <p className="text-gray-600">
              Over-the-counter derivatives involve greater risk than exchange-traded products because
              there is no exchange market on which to close out an open position. You may be unable
              to exit positions at desired prices.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Volatility</h2>
            <p className="text-gray-600">
              Price movements in underlying markets are volatile and unpredictable and are outside
              of our control. Past performance is not indicative of future results.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">No Physical Delivery</h2>
            <p className="text-gray-600">
              Margin FX contracts provide no physical currency delivery—traders only exchange price
              differences. You will never own the underlying asset.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Technical & Operational Risks</h2>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>The company accepts no responsibility for trading platform disruptions</li>
              <li>Communications failures or network issues may affect trading</li>
              <li>Clients bear all risk for hardware, software, and internet failures</li>
              <li>Force majeure events may result in financial losses</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Geographic Restrictions</h2>
            <p className="text-gray-600">
              Oddsi does not serve residents of the United States, Iran, North Korea, Syria,
              or Myanmar.
            </p>
          </section>

          <section className="bg-gray-100 rounded-xl p-6">
            <h2 className="text-xl font-semibold mb-4">Acknowledgment</h2>
            <p className="text-gray-600">
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
