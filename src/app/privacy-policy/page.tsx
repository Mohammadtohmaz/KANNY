export default function PrivacyPolicy() {
  return (
    <div className="py-16 bg-[#0d1421] min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-4 text-white">Privacy Policy</h1>
        <p className="text-gray-500 mb-8">Last updated: January 2025</p>

        <div className="space-y-8">
          <section className="gradient-border p-6">
            <div className="bg-[#141f3c] rounded-[calc(1rem-1px)]">
              <h2 className="text-2xl font-semibold mb-4 text-[#00d48a]">1. Information We Collect</h2>
              <p className="text-gray-400 mb-4">
                We collect several categories of information to provide and improve our services:
              </p>
              <ul className="list-disc pl-6 text-gray-400 space-y-2">
                <li><strong className="text-white">Personal details:</strong> Name, email address, contact details, and any other information you provide</li>
                <li><strong className="text-white">Financial information:</strong> Trading activities, transaction history, account balances, and payment data</li>
                <li><strong className="text-white">Usage data:</strong> Log files, device information, browser type, IP address, and cookies</li>
              </ul>
            </div>
          </section>

          <section className="gradient-border p-6">
            <div className="bg-[#141f3c] rounded-[calc(1rem-1px)]">
              <h2 className="text-2xl font-semibold mb-4 text-[#00d48a]">2. How We Use Your Information</h2>
              <ul className="list-disc pl-6 text-gray-400 space-y-2">
                <li>Delivering trading services and processing transactions</li>
                <li>Enhancing user experience through personalization and troubleshooting</li>
                <li>Account communications, service updates, and marketing outreach</li>
                <li>Legal compliance and fraud prevention</li>
              </ul>
            </div>
          </section>

          <section className="gradient-border p-6">
            <div className="bg-[#141f3c] rounded-[calc(1rem-1px)]">
              <h2 className="text-2xl font-semibold mb-4 text-[#00d48a]">3. Data Security</h2>
              <p className="text-gray-400">
                We employ industry-standard security measures to protect your information. However,
                no internet transmission method is completely secure. We cannot guarantee absolute
                security of data transmitted to our platform.
              </p>
            </div>
          </section>

          <section className="gradient-border p-6">
            <div className="bg-[#141f3c] rounded-[calc(1rem-1px)]">
              <h2 className="text-2xl font-semibold mb-4 text-[#00d48a]">4. Your Rights</h2>
              <ul className="list-disc pl-6 text-gray-400 space-y-2">
                <li>Access, update, or delete personal information stored on the platform</li>
                <li>Manage communication preferences through account settings</li>
                <li>Opt-out capability by contacting support</li>
                <li>We do not sell personal data to third parties for marketing purposes</li>
              </ul>
            </div>
          </section>

          <section className="gradient-border p-6">
            <div className="bg-[#141f3c] rounded-[calc(1rem-1px)]">
              <h2 className="text-2xl font-semibold mb-4 text-[#00d48a]">5. Contact Us</h2>
              <p className="text-gray-400">
                Questions regarding privacy practices can be directed to:{' '}
                <a href="mailto:privacy@arrowbets.com" className="text-[#00d48a] hover:text-[#00ff9d] transition-colors">
                  privacy@arrowbets.com
                </a>
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
