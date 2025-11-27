import { ShoppingCart, Package, ArrowRight } from 'lucide-react';
import type { Product } from '../data/catalogData';

interface ItemCardProps {
  product: Product;
}

const ItemCard = ({ product }: ItemCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group cursor-pointer border border-gray-100 hover:border-blue-300">
      <div className="relative h-48 bg-gray-100 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        <div className="absolute top-3 right-3 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
          {product.count} in stock
        </div>
      </div>

      <div className="p-4">
        <h3 className="font-bold text-gray-900 text-lg mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
          {product.name}
        </h3>

        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
          {product.description}
        </p>

        {product.specs && product.specs.length > 0 && (
          <div className="mb-3 space-y-1">
            {product.specs.slice(0, 2).map((spec, idx) => (
              <div key={idx} className="flex items-center gap-2 text-xs text-gray-600">
                <Package size={14} className="text-blue-600" />
                <span>{spec}</span>
              </div>
            ))}
            {product.specs.length > 2 && (
              <p className="text-xs text-gray-500 mt-2">+ {product.specs.length - 2} more specs</p>
            )}
          </div>
        )}

        <div className="flex items-center justify-between pt-3 border-t border-gray-100">
          {product.price && (
            <div className="flex flex-col">
              <span className="text-lg font-bold text-gray-900">
                ${product.price.toLocaleString()}
              </span>
              <span className="text-xs text-gray-500">Ask for bulk pricing</span>
            </div>
          )}
          <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-lg font-medium transition-colors duration-200 group/btn">
            <ShoppingCart size={16} />
            <span className="hidden sm:inline">Add</span>
            <ArrowRight size={14} className="opacity-0 group-hover/btn:opacity-100 transition-opacity" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
