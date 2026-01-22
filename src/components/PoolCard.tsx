'use client';

import Image from 'next/image';
import { Clock, Users, TrendingUp, Flame, Coins, Building2, DollarSign, BarChart3, Bitcoin } from 'lucide-react';
import { Pool } from '@/data/pools';

interface PoolCardProps {
  pool: Pool;
  index?: number;
}

// Category icon mapping
const categoryIcons: Record<string, React.ElementType> = {
  'Commodities': Coins,
  'Interest Rates': Building2,
  'Forex': DollarSign,
  'Economic Data': BarChart3,
  'Crypto': Bitcoin,
};

export default function PoolCard({ pool, index = 0 }: PoolCardProps) {
  const CategoryIcon = categoryIcons[pool.category] || TrendingUp;
  const isHot = parseInt(pool.poolSize.replace(/[$,]/g, '')) > 100000;

  return (
    <div
      className="modern-card glass-card card-enter group"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Pool Image with Zoom Effect */}
      <div className="relative h-44 overflow-hidden">
        <div className="absolute inset-0 image-zoom">
          <Image
            src={pool.image}
            alt={pool.title}
            fill
            className="object-cover"
          />
        </div>

        {/* Overlay gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#141f3c] via-[#141f3c]/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-br from-[#70FFEB]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* LIVE indicator */}
        <div className="absolute top-3 right-3 flex items-center gap-1.5 px-2 py-1 bg-black/40 backdrop-blur-sm rounded-full">
          <span className="w-2 h-2 bg-[#70FFEB] rounded-full live-indicator" />
          <span className="text-[10px] font-semibold text-[#70FFEB] uppercase tracking-wider">Live</span>
        </div>

        {/* Category badge with icon */}
        <div className="absolute top-3 left-3 flex items-center gap-1.5 px-3 py-1.5 bg-[#70FFEB] text-black rounded-full backdrop-blur-sm">
          <CategoryIcon size={12} strokeWidth={2.5} />
          <span className="text-xs font-semibold">{pool.category}</span>
        </div>

        {/* Hot badge for high-value pools */}
        {isHot && (
          <div className="absolute bottom-3 right-3 flex items-center gap-1 px-2 py-1 hot-badge rounded-full">
            <Flame size={12} className="text-white" />
            <span className="text-[10px] font-bold text-white uppercase">Hot</span>
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="p-5 bg-gradient-to-b from-[#141f3c]/80 to-[#141f3c]">
        <h3 className="text-lg font-bold text-white mb-2 leading-tight group-hover:text-[#70FFEB] transition-colors duration-300">
          {pool.title}
        </h3>
        <p className="text-sm text-gray-400 mb-4 line-clamp-2">{pool.description}</p>

        {/* Progress bars with animation */}
        <div className="space-y-2 mb-4">
          <div className="flex justify-between text-sm">
            <span className="text-[#70FFEB] font-semibold flex items-center gap-1">
              <TrendingUp size={14} />
              Yes {pool.yesPercentage}%
            </span>
            <span className="text-gray-400 font-medium">No {pool.noPercentage}%</span>
          </div>
          <div className="h-2.5 bg-[#0F142D]/80 rounded-full overflow-hidden flex backdrop-blur-sm">
            <div
              className="bg-gradient-to-r from-[#70FFEB] to-[#9FFFF4] h-full transition-all duration-700 progress-animated rounded-full"
              style={{ width: `${pool.yesPercentage}%` }}
            />
            <div
              className="bg-gray-600/50 h-full transition-all duration-500"
              style={{ width: `${pool.noPercentage}%` }}
            />
          </div>
        </div>

        {/* Meta info with better styling */}
        <div className="flex justify-between text-sm">
          <div className="flex items-center gap-1.5 text-gray-400">
            <div className="p-1 bg-[#70FFEB]/10 rounded">
              <Users size={14} className="text-[#70FFEB]" />
            </div>
            <span className="font-medium">{pool.poolSize}</span>
          </div>
          <div className="flex items-center gap-1.5 text-gray-400">
            <div className="p-1 bg-[#70FFEB]/10 rounded">
              <Clock size={14} className="text-[#70FFEB]" />
            </div>
            <span className="font-medium">{pool.deadline}</span>
          </div>
        </div>
      </div>

      {/* Action buttons with enhanced styling */}
      <div className="grid grid-cols-2 border-t border-[#70FFEB]/10">
        <button className="py-3.5 text-center font-semibold text-[#70FFEB] hover:bg-[#70FFEB] hover:text-black transition-all duration-300 bg-[#141f3c]/50 backdrop-blur-sm group/btn relative overflow-hidden">
          <span className="relative z-10">Yes</span>
          <div className="absolute inset-0 bg-gradient-to-r from-[#70FFEB] to-[#9FFFF4] opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
          <span className="absolute inset-0 flex items-center justify-center font-semibold text-black opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300">Yes</span>
        </button>
        <button className="py-3.5 text-center font-semibold text-gray-400 hover:bg-white/10 hover:text-white transition-all duration-300 border-l border-[#70FFEB]/10 bg-[#141f3c]/50 backdrop-blur-sm">
          No
        </button>
      </div>
    </div>
  );
}
