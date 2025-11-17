import React from 'react';
import './LaptopCards.css';
import imgA from '../../assets/laptop/a.jpg';
import imgB from '../../assets/laptop/b.jpg';
import imgC from '../../assets/laptop/c.jpg';
import imgD from '../../assets/laptop/d.png';
import imgE from '../../assets/laptop/e.png';
import imgF from '../../assets/laptop/f.png';
import imgG from '../../assets/laptop/g.png';
import imgH from '../../assets/laptop/h.png';
import imgI from '../../assets/laptop/i.png';
import imgR from '../../assets/laptop/r.jpg';

const LaptopCards = () => {
  const laptops = [
    { 
      id: 1, 
      name: "MacBook Pro 16\"", 
      inStock: true,
      image: imgA,
    },
    { 
      id: 2, 
      name: "Dell XPS 13", 
      inStock: true,
      image: imgB,
    },
    { 
      id: 3, 
      name: "HP Spectre x360", 
      inStock: false,
      image: imgC,
    },
    { 
      id: 4, 
      name: "Lenovo ThinkPad X1", 
      inStock: true,
      image: imgD,
    },
    { 
      id: 5, 
      name: "ASUS ROG Zephyrus", 
      inStock: true,
      image: imgE,
    },
    { 
      id: 6, 
      name: "Acer Swift 3", 
      inStock: false,
      image: imgF,
    },
    { 
      id: 7, 
      name: "Microsoft Surface Laptop", 
      inStock: true,
      image: imgG,
    },
    { 
      id: 8, 
      name: "Razer Blade 15", 
      inStock: false,
      image: imgH,
    },
    { 
      id: 9, 
      name: "Samsung Galaxy Book", 
      inStock: true,
      image: imgI,
    },
    { 
      id: 10, 
      name: "LG Gram 17", 
      inStock: true,
      image: imgR,
    }
  ];

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-3xl md:text-4xl font-extrabold text-center mb-10 bg-gradient-to-r from-indigo-600 to-fuchsia-600 bg-clip-text text-transparent">
        Featured Laptops
      </h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7">
        {laptops.map((laptop) => (
          <div 
            key={laptop.id}
            className="bg-white rounded-2xl shadow-sm overflow-hidden transition-all duration-300 hover:shadow-2xl hover:ring-2 hover:ring-indigo-100 hover:ring-offset-2 laptop-card"
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
              <h3 className="text-lg font-semibold text-gray-900 mb-2 truncate">
                {laptop.name}
              </h3>
              
              <div className="flex items-center justify-between mb-4">
                <span className={`text-sm font-semibold ${
                  laptop.inStock ? 'text-emerald-600' : 'text-rose-600'
                }`}>
                  {laptop.inStock ? 'In Stock' : 'Call Us'}
                </span>
              </div>
              
              <button 
                className={`w-full py-2.5 px-4 rounded-lg font-semibold transition-colors duration-200 ${
                  laptop.inStock 
                    ? 'bg-gradient-to-r from-indigo-600 to-fuchsia-600 hover:from-indigo-500 hover:to-fuchsia-500 text-white' 
                    : 'bg-gray-700 hover:bg-gray-800 text-white'
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