import { Clock, Users } from 'lucide-react';
import { Pool } from '@/data/pools';

interface PoolCardProps {
  pool: Pool;
}

export default function PoolCard({ pool }: PoolCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow">
      <div className="p-6">
        <span className="inline-block px-3 py-1 text-xs font-medium bg-emerald-100 text-emerald-700 rounded-full mb-3">
          {pool.category}
        </span>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{pool.title}</h3>
        <p className="text-sm text-gray-500 mb-4">{pool.description}</p>

        {/* Progress bars */}
        <div className="space-y-2 mb-4">
          <div className="flex justify-between text-sm">
            <span className="text-emerald-600 font-medium">Yes {pool.yesPercentage}%</span>
            <span className="text-red-500 font-medium">No {pool.noPercentage}%</span>
          </div>
          <div className="h-2 bg-gray-200 rounded-full overflow-hidden flex">
            <div
              className="bg-emerald-500 h-full"
              style={{ width: `${pool.yesPercentage}%` }}
            />
            <div
              className="bg-red-400 h-full"
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
      <div className="grid grid-cols-2 border-t border-gray-100">
        <button className="py-3 text-center font-medium text-emerald-600 hover:bg-emerald-50 transition-colors">
          Yes
        </button>
        <button className="py-3 text-center font-medium text-red-500 hover:bg-red-50 transition-colors border-l border-gray-100">
          No
        </button>
      </div>
    </div>
  );
}
