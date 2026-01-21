export interface Pool {
  id: string;
  title: string;
  description: string;
  yesPercentage: number;
  noPercentage: number;
  poolSize: string;
  deadline: string;
  category: string;
  image: string;
}

export const pools: Pool[] = [
  {
    id: '1',
    title: 'Will Gold reach $3600 by August 15th?',
    description: 'Predict if gold prices will hit the $3600 mark',
    yesPercentage: 62,
    noPercentage: 38,
    poolSize: '$45,230',
    deadline: 'Aug 15, 2025',
    category: 'Commodities',
    image: '/images/pools/confident-trader.jpg'
  },
  {
    id: '2',
    title: 'Fed Interest Rate Cut in September?',
    description: 'Will the Federal Reserve cut interest rates at the September meeting?',
    yesPercentage: 45,
    noPercentage: 55,
    poolSize: '$128,500',
    deadline: 'Sep 18, 2025',
    category: 'Interest Rates',
    image: '/images/pools/sleeping-trader.jpg'
  },
  {
    id: '3',
    title: 'EUR/USD above 1.12 by end of Q3?',
    description: 'Predict EUR/USD exchange rate movement',
    yesPercentage: 51,
    noPercentage: 49,
    poolSize: '$67,890',
    deadline: 'Sep 30, 2025',
    category: 'Forex',
    image: '/images/pools/female-trader.jpg'
  },
  {
    id: '4',
    title: 'US Inflation below 3% in August?',
    description: 'Will the CPI reading come in below 3%?',
    yesPercentage: 38,
    noPercentage: 62,
    poolSize: '$234,100',
    deadline: 'Aug 13, 2025',
    category: 'Economic Data',
    image: '/images/pools/stressed-trader.jpg'
  },
  {
    id: '5',
    title: 'Bitcoin above $100k by December?',
    description: 'Predict if BTC will break the $100,000 barrier',
    yesPercentage: 72,
    noPercentage: 28,
    poolSize: '$567,000',
    deadline: 'Dec 31, 2025',
    category: 'Crypto',
    image: '/images/pools/crypto-trader.jpg'
  },
  {
    id: '6',
    title: 'Non-Farm Payrolls above 200k?',
    description: 'Will the next NFP report exceed 200,000 jobs?',
    yesPercentage: 55,
    noPercentage: 45,
    poolSize: '$89,340',
    deadline: 'Aug 2, 2025',
    category: 'Economic Data',
    image: '/images/pools/happy-trader.jpg'
  }
];
