'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FaqItem } from '@/data/faq';

interface FaqAccordionProps {
  items: FaqItem[];
}

export default function FaqAccordion({ items }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <div
          key={index}
          className="gradient-border overflow-hidden"
        >
          <button
            className="w-full px-6 py-4 text-left flex justify-between items-center bg-[#0a0a14] hover:bg-[#0f0f1a] transition-colors"
            onClick={() => toggleItem(index)}
          >
            <span className="font-medium text-white">{item.question}</span>
            <ChevronDown
              size={20}
              className={`text-[#70FFEB] transition-transform duration-300 ${
                openIndex === index ? 'rotate-180' : ''
              }`}
            />
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              openIndex === index ? 'max-h-96' : 'max-h-0'
            }`}
          >
            <div className="px-6 py-4 bg-[#0a0a14] border-t border-white/5">
              <p className="text-gray-400">{item.answer}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
