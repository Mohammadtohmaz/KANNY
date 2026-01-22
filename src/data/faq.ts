export interface FaqItem {
  question: string;
  answer: string;
}

export const faqItems: FaqItem[] = [
  {
    question: 'What is ArrowBets?',
    answer: 'ArrowBets is an event-based betting platform where users speculate on outcomes of economic news, market events, and price movements.'
  },
  {
    question: 'How does ArrowBets work?',
    answer: 'The platform operates using a pool-based model where bettors select positions and winning bettors receive redistributed funds from losers.'
  },
  {
    question: 'What can I bet on at ArrowBets?',
    answer: 'Users can bet on predictions for inflation reports, interest rates, earnings results, and price movements across forex, stocks, crypto, and commodities.'
  },
  {
    question: 'Is ArrowBets peer-to-peer?',
    answer: 'No. It employs a shared liquidity pool model rather than traditional peer-to-peer betting.'
  },
  {
    question: 'Who am I trading against?',
    answer: 'You bet against the pool of bettors who selected the opposite outcome.'
  },
  {
    question: 'How are payouts calculated?',
    answer: 'Total funds staked by the losing side are proportionally distributed to the winning side after deducting ArrowBets\'s fee.'
  },
  {
    question: 'Is ArrowBets similar to sports betting?',
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
    question: 'Does ArrowBets bet against users?',
    answer: 'No. It functions as a neutral facilitator, never taking sides.'
  },
  {
    question: 'What happens if an event is canceled?',
    answer: 'The market may be voided and stakes refunded.'
  }
];
