import React from 'react';
import './LaptopCards.css';

const LaptopCards = () => {
  // Sample laptop data with real image URLs
  const laptops = [
    { 
      id: 1, 
      name: "MacBook Pro 16\"", 
      inStock: true, 
      image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
    },
    { 
      id: 2, 
      name: "Dell XPS 13", 
      inStock: true, 
      image: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
    },
    { 
      id: 3, 
      name: "HP Spectre x360", 
      inStock: false, 
      image: "https://images.unsplash.com/photo-1587614382346-4ec70e388b28?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
    },
    { 
      id: 4, 
      name: "Lenovo ThinkPad X1", 
      inStock: true, 
      image: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
    },
    { 
      id: 5, 
      name: "ASUS ROG Zephyrus", 
      inStock: true, 
      image: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
    },
    { 
      id: 6, 
      name: "Acer Swift 3", 
      inStock: false, 
      image: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
    },
    { 
      id: 7, 
      name: "Microsoft Surface Laptop", 
      inStock: true, 
      image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
    },
    { 
      id: 8, 
      name: "Razer Blade 15", 
      inStock: false, 
      image: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
    },
    { 
      id: 9, 
      name: "Samsung Galaxy Book", 
      inStock: true, 
      image: "https://images.unsplash.com/photo-1587614382346-4ec70e388b28?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
    },
    { 
      id: 10, 
      name: "LG Gram 17", 
      inStock: true, 
      image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">Featured Laptops</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {laptops.map((laptop) => (
          <div 
            key={laptop.id}
            className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl laptop-card"
          >
            <div className="laptop-image-container">
              <img 
                src={laptop.image} 
                alt={laptop.name}
                className="laptop-image w-full h-48 object-cover"
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/300x200/4F46E5/FFFFFF?text=Laptop+Image';
                }}
              />
            </div>
            
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-2 truncate">
                {laptop.name}
              </h3>
              
              <div className="flex items-center justify-between mb-4">
                <span className={`text-sm font-medium ${
                  laptop.inStock ? 'text-green-600' : 'text-red-600'
                }`}>
                  {laptop.inStock ? 'In Stock' : 'Call Us'}
                </span>
              </div>
              
              <button 
                className={`w-full py-2 px-4 rounded-lg font-medium transition-colors duration-200 ${
                  laptop.inStock 
                    ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                    : 'bg-gray-600 hover:bg-gray-700 text-white'
                }`}
              >
                {laptop.inStock ? 'Buy Now' : 'Call Us'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LaptopCards;