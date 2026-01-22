export interface FaqItem {
  question: string;
  answer: string;
}

export const faqItems: FaqItem[] = [
  {
    question: 'What is ArrowTrade?',
    answer: 'ArrowTrade is an event-based trading platform where users speculate on outcomes of economic news, market events, and price movements.'
  },
  {
    question: 'How does ArrowTrade work?',
    answer: 'The platform operates using a pool-based model where traders select positions and winning traders receive redistributed funds from losers.'
  },
  {
    question: 'What can I trade on ArrowTrade?',
    answer: 'Users can trade predictions on inflation reports, interest rates, earnings results, and price movements across forex, stocks, crypto, and commodities.'
  },
  {
    question: 'Is ArrowTrade peer-to-peer?',
    answer: 'No. It employs a shared liquidity pool model rather than traditional peer-to-peer trading.'
  },
  {
    question: 'Who am I trading against?',
    answer: 'You trade against the pool of traders who selected the opposite outcome.'
  },
  {
    question: 'How are payouts calculated?',
    answer: 'Total funds staked by the losing side are proportionally distributed to the winning side after deducting ArrowTrade\'s fee.'
  },
  {
    question: 'Is ArrowTrade similar to sports betting?',
    answer: 'Structurally similar but focuses on financial and economic markets instead.'
  },
  {
    question: 'How is event outcome verified?',
    answer: 'The platform uses reliable data feeds and economic oracles based on official sources.'
  },
  {
    question: 'Can I cancel or change a position?',
    answer: 'No. Positions lock upon submission until event conclusion.'
  },
  {
    question: 'What\'s the minimum investment?',
    answer: 'You can start with as little as $1.'
  },
  {
    question: 'Does ArrowTrade trade against users?',
    answer: 'No. It functions as a neutral facilitator, never taking sides.'
  },
  {
    question: 'What happens if an event is canceled?',
    answer: 'The market may be voided and stakes refunded.'
  }
];
