export default function TermsConditions() {
  return (
    <div className="py-16 bg-[#0d1421] min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-4 text-white">Terms & Conditions</h1>
        <p className="text-gray-500 mb-8">Last updated: January 2025</p>

        <div className="space-y-8">
          <section className="gradient-border p-6">
            <div className="bg-[#141f3c] rounded-[calc(1rem-1px)]">
              <h2 className="text-2xl font-semibold mb-4 text-[#00d48a]">1. Company Information</h2>
              <p className="text-gray-400">
                <strong className="text-white">Legal Entity:</strong> BAZ Capital Markets Ltd (also &quot;IFunds LTD&quot;)<br />
                <strong className="text-white">Jurisdiction:</strong> Saint Lucia (Registration 2024-00154)<br />
                <strong className="text-white">Address:</strong> Ground Floor, The Sotheby Building, Rodney Bay, Gros-Islet, Saint Lucia
              </p>
            </div>
          </section>

          <section className="gradient-border p-6">
            <div className="bg-[#141f3c] rounded-[calc(1rem-1px)]">
              <h2 className="text-2xl font-semibold mb-4 text-[#00d48a]">2. Nature of Services</h2>
              <p className="text-gray-400">
                The platform offers Over-the-Counter (OTC) derivative trading including Margin FX
                Contracts and Contracts for Difference (CFDs). You should not deal in OTC derivative
                products unless you understand their nature and the extent of your exposure to risk.
              </p>
            </div>
          </section>

          <section className="gradient-border p-6">
            <div className="bg-[#141f3c] rounded-[calc(1rem-1px)]">
              <h2 className="text-2xl font-semibold mb-4 text-[#00d48a]">3. Risk Disclosure</h2>
              <p className="text-gray-400">
                These instruments involve significant leverage that can amplify both gains and losses
                beyond initial deposits. Clients acknowledge that the risk of loss arising from trading
                can be substantial and the Client might lose more than the initial investment.
              </p>
            </div>
          </section>

          <section className="gradient-border p-6">
            <div className="bg-[#141f3c] rounded-[calc(1rem-1px)]">
              <h2 className="text-2xl font-semibold mb-4 text-[#00d48a]">4. User Obligations</h2>
              <ul className="list-disc pl-6 text-gray-400 space-y-2">
                <li>Users bear responsibility for technical failures on their end</li>
                <li>Users must ensure accurate account information</li>
                <li>Users must not engage in fraudulent or manipulative practices</li>
                <li>Users must comply with all applicable laws in their jurisdiction</li>
              </ul>
            </div>
          </section>

          <section className="gradient-border p-6">
            <div className="bg-[#141f3c] rounded-[calc(1rem-1px)]">
              <h2 className="text-2xl font-semibold mb-4 text-[#00d48a]">5. Geographic Restrictions</h2>
              <p className="text-gray-400">
                ArrowBets does not provide services to residents of the United States, Iran, North Korea,
                Syria, or Myanmar.
              </p>
            </div>
          </section>

          <section className="gradient-border p-6">
            <div className="bg-[#141f3c] rounded-[calc(1rem-1px)]">
              <h2 className="text-2xl font-semibold mb-4 text-[#00d48a]">6. Contact</h2>
              <p className="text-gray-400">
                For questions about these terms, contact us at:{' '}
                <a href="mailto:legal@arrowbets.com" className="text-[#00d48a] hover:text-[#00ff9d] transition-colors">
                  legal@arrowbets.com
                </a>
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
