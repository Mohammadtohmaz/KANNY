import Image from 'next/image';
import { Clock, Users } from 'lucide-react';
import { Pool } from '@/data/pools';

interface PoolCardProps {
  pool: Pool;
}

export default function PoolCard({ pool }: PoolCardProps) {
  return (
    <div className="gradient-border card-hover overflow-hidden">
      {/* Pool Image */}
      <div className="relative h-40 overflow-hidden">
        <Image
          src={pool.image}
          alt={pool.title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#141f3c] via-transparent to-transparent" />
        <span className="absolute top-3 left-3 px-3 py-1 text-xs font-medium bg-[#00d48a]/80 text-black rounded-full backdrop-blur-sm">
          {pool.category}
        </span>
      </div>

      <div className="p-5 bg-[#141f3c]">
        <h3 className="text-lg font-semibold text-white mb-2">{pool.title}</h3>
        <p className="text-sm text-gray-500 mb-4 line-clamp-2">{pool.description}</p>

        {/* Progress bars */}
        <div className="space-y-2 mb-4">
          <div className="flex justify-between text-sm">
            <span className="text-[#00d48a] font-medium">Yes {pool.yesPercentage}%</span>
            <span className="text-gray-400 font-medium">No {pool.noPercentage}%</span>
          </div>
          <div className="h-2 bg-[#0d1421] rounded-full overflow-hidden flex">
            <div
              className="bg-gradient-to-r from-[#00d48a] to-[#00ff9d] h-full transition-all duration-500"
              style={{ width: `${pool.yesPercentage}%` }}
            />
            <div
              className="bg-gray-600 h-full transition-all duration-500"
              style={{ width: `${pool.noPercentage}%` }}
            />
          </div>
        </div>

        {/* Meta info */}
        <div className="flex justify-between text-sm text-gray-500">
          <div className="flex items-center gap-1">
            <Users size={16} />
            <span>{pool.poolSize}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock size={16} />
            <span>{pool.deadline}</span>
          </div>
        </div>
      </div>

      {/* Action buttons */}
      <div className="grid grid-cols-2 border-t border-white/5">
        <button className="py-3 text-center font-medium text-[#00d48a] hover:bg-[#00d48a]/10 transition-all duration-200 bg-[#141f3c]">
          Yes
        </button>
        <button className="py-3 text-center font-medium text-gray-400 hover:bg-white/5 transition-all duration-200 border-l border-white/5 bg-[#141f3c]">
          No
        </button>
      </div>
    </div>
  );
}
