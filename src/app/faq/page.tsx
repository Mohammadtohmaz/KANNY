import FaqAccordion from '@/components/FaqAccordion';
import { faqItems } from '@/data/faq';

export default function FAQ() {
  return (
    <div className="py-16 bg-[#0d1421] min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h1>
          <p className="text-xl text-gray-400">
            Everything you need to know about trading on ArrowTrade.
          </p>
        </div>

        <FaqAccordion items={faqItems} />

        <div className="mt-12 text-center gradient-border p-8">
          <div className="bg-[#141f3c] rounded-[calc(1rem-1px)]">
            <h2 className="text-xl font-semibold mb-2 text-white">Still have questions?</h2>
            <p className="text-gray-400 mb-4">
              Our support team is here to help you 24/7.
            </p>
            <a
              href="mailto:support@arrowtrade.com"
              className="text-[#00d48a] hover:text-[#00ff9d] font-medium transition-colors"
            >
              Contact Support →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
