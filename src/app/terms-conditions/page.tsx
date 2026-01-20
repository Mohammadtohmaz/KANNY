export default function TermsConditions() {
  return (
    <div className="py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8">Terms & Conditions</h1>
        <p className="text-gray-600 mb-8">Last updated: January 2025</p>

        <div className="prose prose-gray max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Company Information</h2>
            <p className="text-gray-600">
              <strong>Legal Entity:</strong> BAZ Capital Markets Ltd (also &quot;IFunds LTD&quot;)<br />
              <strong>Jurisdiction:</strong> Saint Lucia (Registration 2024-00154)<br />
              <strong>Address:</strong> Ground Floor, The Sotheby Building, Rodney Bay, Gros-Islet, Saint Lucia
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Nature of Services</h2>
            <p className="text-gray-600 mb-4">
              The platform offers Over-the-Counter (OTC) derivative trading including Margin FX
              Contracts and Contracts for Difference (CFDs). You should not deal in OTC derivative
              products unless you understand their nature and the extent of your exposure to risk.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. Risk Disclosure</h2>
            <p className="text-gray-600 mb-4">
              These instruments involve significant leverage that can amplify both gains and losses
              beyond initial deposits. Clients acknowledge that the risk of loss arising from trading
              can be substantial and the Client might lose more than the initial investment.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. User Obligations</h2>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Users bear responsibility for technical failures on their end (hardware, internet, software issues)</li>
              <li>Users must ensure accurate account information</li>
              <li>Users must not engage in fraudulent or manipulative practices</li>
              <li>Users must comply with all applicable laws in their jurisdiction</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Liability Limitations</h2>
            <p className="text-gray-600 mb-4">
              The company assumes no responsibility for:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Delayed or undelivered communications</li>
              <li>Unread internal platform messages</li>
              <li>Unauthorized third-party access to accounts</li>
              <li>System disruptions affecting trade execution or settlement</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. Pricing</h2>
            <p className="text-gray-600">
              Prices quoted by the Company are set at our absolute discretion. No standard comparison
              is available for retail customers to assess fairness of pricing.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">7. Geographic Restrictions</h2>
            <p className="text-gray-600">
              Oddsi does not provide services to residents of the United States, Iran, North Korea,
              Syria, or Myanmar.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">8. Contact</h2>
            <p className="text-gray-600">
              For questions about these terms, contact us at:{' '}
              <a href="mailto:legal@oddsi.io" className="text-emerald-600 hover:text-emerald-700">
                legal@oddsi.io
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
