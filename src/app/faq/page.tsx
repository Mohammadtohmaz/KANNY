import FaqAccordion from '@/components/FaqAccordion';
import { faqItems } from '@/data/faq';

export default function FAQ() {
  return (
    <div className="py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-xl text-gray-600">
            Everything you need to know about trading on Oddsi.
          </p>
        </div>

        <FaqAccordion items={faqItems} />

        <div className="mt-12 text-center bg-gray-50 rounded-xl p-8">
          <h2 className="text-xl font-semibold mb-2">Still have questions?</h2>
          <p className="text-gray-600 mb-4">
            Our support team is here to help you 24/7.
          </p>
          <a
            href="mailto:support@oddsi.io"
            className="text-emerald-600 hover:text-emerald-700 font-medium"
          >
            Contact Support →
          </a>
        </div>
      </div>
    </div>
  );
}
