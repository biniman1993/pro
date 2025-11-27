import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

export interface FilterOptions {
  priceRange: [number, number];
  inStock: boolean;
}

interface FiltersProps {
  filters: FilterOptions;
  onFiltersChange: (filters: FilterOptions) => void;
  maxPrice: number;
}

const Filters = ({ filters, onFiltersChange, maxPrice }: FiltersProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handlePriceChange = (min: number, max: number) => {
    onFiltersChange({ ...filters, priceRange: [min, max] });
  };

  const handleStockChange = () => {
    onFiltersChange({ ...filters, inStock: !filters.inStock });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 pb-6">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg font-medium text-gray-700 transition-colors duration-200"
      >
        <span>Filters</span>
        <ChevronDown
          size={18}
          className={`transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
        />
      </button>

      {isExpanded && (
        <div className="mt-4 p-4 bg-white border border-gray-200 rounded-lg shadow-sm space-y-6 animate-in fade-in duration-200">
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Price Range</h3>
            <div className="space-y-3">
              <input
                type="range"
                min="0"
                max={maxPrice}
                value={filters.priceRange[1]}
                onChange={(e) => handlePriceChange(filters.priceRange[0], Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
              />
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">Max: ${filters.priceRange[1]}</span>
                <span className="text-gray-600">${maxPrice}</span>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-6">
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={filters.inStock}
                onChange={handleStockChange}
                className="w-4 h-4 text-blue-600 rounded cursor-pointer accent-blue-600"
              />
              <span className="font-medium text-gray-700">In Stock Only</span>
            </label>
          </div>
        </div>
      )}
    </div>
  );
};

export default Filters;
