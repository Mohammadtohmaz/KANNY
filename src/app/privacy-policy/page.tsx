export default function PrivacyPolicy() {
  return (
    <div className="py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        <p className="text-gray-600 mb-8">Last updated: January 2025</p>

        <div className="prose prose-gray max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>
            <p className="text-gray-600 mb-4">
              We collect several categories of information to provide and improve our services:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li><strong>Personal details:</strong> Name, email address, contact details, and any other information you provide</li>
              <li><strong>Financial information:</strong> Trading activities, transaction history, account balances, and payment data</li>
              <li><strong>Usage data:</strong> Log files, device information, browser type, IP address, and cookies</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. How We Use Your Information</h2>
            <p className="text-gray-600 mb-4">
              Collected information serves these purposes:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Delivering trading services and processing transactions</li>
              <li>Enhancing user experience through personalization and troubleshooting</li>
              <li>Account communications, service updates, and marketing outreach</li>
              <li>Legal compliance and fraud prevention</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. Data Security</h2>
            <p className="text-gray-600">
              We employ industry-standard security measures to protect your information. However,
              no internet transmission method is completely secure. We cannot guarantee absolute
              security of data transmitted to our platform.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Your Rights</h2>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Access, update, or delete personal information stored on the platform</li>
              <li>Manage communication preferences through account settings</li>
              <li>Opt-out capability by contacting support</li>
              <li>We do not sell personal data to third parties for marketing purposes</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Age Restrictions</h2>
            <p className="text-gray-600">
              Our services are restricted to users 18 years of age and older. We do not knowingly
              collect information from individuals under 18.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. Contact Us</h2>
            <p className="text-gray-600">
              Questions regarding privacy practices can be directed to:{' '}
              <a href="mailto:privacy@oddsi.io" className="text-emerald-600 hover:text-emerald-700">
                privacy@oddsi.io
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
