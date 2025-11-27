import { Monitor, Laptop, Printer, Wifi, Grid3x3 } from 'lucide-react';

interface CategoryTabsProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

const getCategoryIcon = (category: string) => {
  const iconProps = { size: 20 };
  switch (category) {
    case 'Desktops':
      return <Monitor {...iconProps} />;
    case 'Laptops':
      return <Laptop {...iconProps} />;
    case 'Printers':
      return <Printer {...iconProps} />;
    case 'Networking':
      return <Wifi {...iconProps} />;
    default:
      return <Grid3x3 {...iconProps} />;
  }
};

const CategoryTabs = ({ categories, activeCategory, onCategoryChange }: CategoryTabsProps) => {
  return (
    <div className="bg-white border-b border-gray-200 sticky top-0 z-40 shadow-sm">
      <div className="max-w-7xl mx-auto">
        <div className="flex overflow-x-auto scrollbar-hide">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => onCategoryChange(category)}
              className={`flex items-center gap-2 px-6 py-4 whitespace-nowrap font-medium text-sm transition-all duration-300 border-b-2 ${
                activeCategory === category
                  ? 'border-blue-600 text-blue-600 bg-blue-50'
                  : 'border-transparent text-gray-600 hover:text-gray-900 hover:bg-gray-50'
              }`}
            >
              {getCategoryIcon(category)}
              {category}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryTabs;
