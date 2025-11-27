import { useState, useMemo } from 'react';
import { catalogData, getAllCategories, getCategoryProducts, type Product } from '../data/catalogData';
import CategoryTabs from '../Components/CategoryTabs';
import SearchBar from '../Components/SearchBar';
import Filters, { FilterOptions } from '../Components/Filters';
import ItemCard from '../Components/ItemCard';
import { Package } from 'lucide-react';

const Catalog = () => {
  const [activeCategory, setActiveCategory] = useState('Desktops');
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState<FilterOptions>({
    priceRange: [0, 5000],
    inStock: false
  });

  const categories = getAllCategories();
  const categoryProducts = getCategoryProducts(activeCategory);

  const maxPrice = useMemo(() => {
    return Math.max(
      ...Object.values(catalogData)
        .flatMap(cat => cat.products)
        .map(prod => prod.price || 0)
    );
  }, []);

  const filteredProducts = useMemo(() => {
    return categoryProducts.filter(product => {
      const matchesSearch =
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (product.specs && product.specs.some(spec => spec.toLowerCase().includes(searchQuery.toLowerCase())));

      const priceMatch = !product.price || (product.price >= filters.priceRange[0] && product.price <= filters.priceRange[1]);

      const stockMatch = !filters.inStock || product.count > 0;

      return matchesSearch && priceMatch && stockMatch;
    });
  }, [categoryProducts, searchQuery, filters]);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-2">Electronics Catalog</h1>
          <p className="text-blue-100 text-lg">Discover our complete range of quality products</p>
        </div>
      </div>

      <CategoryTabs
        categories={categories}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />

      <SearchBar searchQuery={searchQuery} onSearchChange={setSearchQuery} />

      <Filters
        filters={filters}
        onFiltersChange={setFilters}
        maxPrice={maxPrice}
      />

      <div className="max-w-7xl mx-auto px-4 pb-12">
        {filteredProducts.length > 0 ? (
          <>
            <div className="mb-6 flex items-center gap-2">
              <Package size={20} className="text-blue-600" />
              <p className="text-gray-700 font-medium">
                Showing {filteredProducts.length} of {categoryProducts.length} products
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map(product => (
                <div
                  key={product.id}
                  className="animate-in fade-in zoom-in duration-300"
                >
                  <ItemCard product={product} />
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className="flex flex-col items-center justify-center py-16 text-gray-500">
            <Package size={48} className="mb-4 opacity-50" />
            <h3 className="text-xl font-semibold mb-2">No products found</h3>
            <p className="text-gray-400">
              Try adjusting your search or filters
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setFilters({ priceRange: [0, maxPrice], inStock: false });
              }}
              className="mt-4 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>

      <div className="bg-white border-t border-gray-200 py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
              <p className="text-gray-600">Products in Stock</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
              <p className="text-gray-600">Customer Support</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">2000+</div>
              <p className="text-gray-600">Trusted Customers</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catalog;
