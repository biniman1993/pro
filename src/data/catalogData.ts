export interface Product {
  id: string;
  name: string;
  description: string;
  count: number;
  price?: number;
  image: string;
  specs?: string[];
}

export interface Category {
  name: string;
  products: Product[];
  icon?: string;
}

export const catalogData: Record<string, Category> = {
  Desktops: {
    name: 'Desktops',
    products: [
      {
        id: 'desk-1',
        name: 'Business Desktop Pro',
        description: 'Professional desktop for office and corporate use',
        count: 24,
        price: 2499,
        image: 'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=400',
        specs: ['Intel i7', '16GB RAM', '512GB SSD', 'Windows 11']
      },
      {
        id: 'desk-2',
        name: 'Gaming Desktop Elite',
        description: 'High-performance system for gaming and graphics work',
        count: 15,
        price: 4299,
        image: 'https://images.pexels.com/photos/7014329/pexels-photo-7014329.jpeg?auto=compress&cs=tinysrgb&w=400',
        specs: ['Intel i9', '32GB RAM', '1TB SSD', 'RTX 4080']
      },
      {
        id: 'desk-3',
        name: 'Creative Workstation',
        description: 'Optimized for video editing, 3D rendering, and design work',
        count: 8,
        price: 3899,
        image: 'https://images.pexels.com/photos/3926883/pexels-photo-3926883.jpeg?auto=compress&cs=tinysrgb&w=400',
        specs: ['AMD Ryzen 9', '64GB RAM', '2TB SSD', 'RTX 4070']
      },
      {
        id: 'desk-4',
        name: 'Budget Office Desktop',
        description: 'Reliable and affordable desktop for everyday office tasks',
        count: 32,
        price: 899,
        image: 'https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg?auto=compress&cs=tinysrgb&w=400',
        specs: ['Pentium i5', '8GB RAM', '256GB SSD', 'Windows 11']
      },
      {
        id: 'desk-5',
        name: 'Mini PC Compact',
        description: 'Compact desktop solution for space-constrained environments',
        count: 18,
        price: 599,
        image: 'https://images.pexels.com/photos/4348403/pexels-photo-4348403.jpeg?auto=compress&cs=tinysrgb&w=400',
        specs: ['Intel i5', '8GB RAM', '256GB SSD', 'Ultra Compact']
      }
    ]
  },
  Laptops: {
    name: 'Laptops',
    products: [
      {
        id: 'lap-1',
        name: 'Business Laptop Pro',
        description: 'Lightweight laptop for professional business travel',
        count: 20,
        price: 1899,
        image: 'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=400',
        specs: ['Intel i7', '16GB RAM', '512GB SSD', '14" Display']
      },
      {
        id: 'lap-2',
        name: 'Gaming Laptop Beast',
        description: 'Powerhouse laptop for demanding gaming and applications',
        count: 12,
        price: 2899,
        image: 'https://images.pexels.com/photos/7014329/pexels-photo-7014329.jpeg?auto=compress&cs=tinysrgb&w=400',
        specs: ['RTX 4090', '32GB RAM', '1TB SSD', '17" 144Hz']
      },
      {
        id: 'lap-3',
        name: 'Ultrabook Slim',
        description: 'Ultra-thin, lightweight laptop for mobile professionals',
        count: 25,
        price: 1499,
        image: 'https://images.pexels.com/photos/3926883/pexels-photo-3926883.jpeg?auto=compress&cs=tinysrgb&w=400',
        specs: ['Intel i5', '8GB RAM', '512GB SSD', '13.3" Ultra Slim']
      },
      {
        id: 'lap-4',
        name: 'Student Budget Laptop',
        description: 'Affordable laptop perfect for students and basic computing',
        count: 40,
        price: 599,
        image: 'https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg?auto=compress&cs=tinysrgb&w=400',
        specs: ['AMD Ryzen 5', '8GB RAM', '256GB SSD', '15.6"']
      },
      {
        id: 'lap-5',
        name: 'Creator Laptop Max',
        description: 'Premium laptop for content creators and video production',
        count: 10,
        price: 3299,
        image: 'https://images.pexels.com/photos/4348403/pexels-photo-4348403.jpeg?auto=compress&cs=tinysrgb&w=400',
        specs: ['M3 Max', '32GB RAM', '1TB SSD', '16" 120Hz']
      }
    ]
  },
  Printers: {
    name: 'Printers',
    products: [
      {
        id: 'print-1',
        name: 'Office Laser Printer',
        description: 'Fast black & white printing for high-volume office use',
        count: 16,
        price: 499,
        image: 'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=400',
        specs: ['40 PPM', 'Network Ready', 'Duplex Printing', 'High Capacity']
      },
      {
        id: 'print-2',
        name: 'Color Multifunction Printer',
        description: 'All-in-one printer with scanning and copying capabilities',
        count: 9,
        price: 799,
        image: 'https://images.pexels.com/photos/7014329/pexels-photo-7014329.jpeg?auto=compress&cs=tinysrgb&w=400',
        specs: ['35 PPM', 'Print/Scan/Copy', 'Mobile Print', 'AirPrint']
      },
      {
        id: 'print-3',
        name: 'Photo Inkjet Printer',
        description: 'Professional photo printing for creative professionals',
        count: 7,
        price: 599,
        image: 'https://images.pexels.com/photos/3926883/pexels-photo-3926883.jpeg?auto=compress&cs=tinysrgb&w=400',
        specs: ['6-Color', '13" Width', 'Photo Quality', 'USB/WiFi']
      },
      {
        id: 'print-4',
        name: 'Budget Inkjet Printer',
        description: 'Affordable home and small office printer',
        count: 28,
        price: 199,
        image: 'https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg?auto=compress&cs=tinysrgb&w=400',
        specs: ['Print & Scan', 'CMYK Colors', 'USB Connect', 'Compact']
      },
      {
        id: 'print-5',
        name: 'Thermal Label Printer',
        description: 'High-speed label and receipt printing for retail operations',
        count: 11,
        price: 349,
        image: 'https://images.pexels.com/photos/4348403/pexels-photo-4348403.jpeg?auto=compress&cs=tinysrgb&w=400',
        specs: ['4x6 Labels', '150mm/s', 'Thermal Direct', 'USB/Ethernet']
      }
    ]
  },
  Networking: {
    name: 'Networking',
    products: [
      {
        id: 'net-1',
        name: 'WiFi 6 Router',
        description: 'High-speed WiFi 6 router for seamless connectivity',
        count: 22,
        price: 299,
        image: 'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=400',
        specs: ['WiFi 6E', 'Tri-Band', '3.6 Gbps', 'Mesh Ready']
      },
      {
        id: 'net-2',
        name: 'Business Switch 48-Port',
        description: 'Managed network switch for enterprise environments',
        count: 5,
        price: 1299,
        image: 'https://images.pexels.com/photos/7014329/pexels-photo-7014329.jpeg?auto=compress&cs=tinysrgb&w=400',
        specs: ['48 Gigabit', 'Layer 3', 'PoE Support', 'VLAN']
      },
      {
        id: 'net-3',
        name: 'PoE Network Switch',
        description: 'Compact PoE switch for powering IP cameras and devices',
        count: 14,
        price: 399,
        image: 'https://images.pexels.com/photos/3926883/pexels-photo-3926883.jpeg?auto=compress&cs=tinysrgb&w=400',
        specs: ['8 PoE Ports', '30W Per Port', 'Managed', 'Compact']
      },
      {
        id: 'net-4',
        name: 'USB Network Adapter',
        description: 'Fast USB network adapter for laptops and desktops',
        count: 35,
        price: 49,
        image: 'https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg?auto=compress&cs=tinysrgb&w=400',
        specs: ['Gigabit Ethernet', 'USB 3.0', 'Plug & Play', 'Compact']
      },
      {
        id: 'net-5',
        name: 'Fiber Optic Cable Kit',
        description: 'Professional fiber optic cables for high-speed data transfer',
        count: 8,
        price: 149,
        image: 'https://images.pexels.com/photos/4348403/pexels-photo-4348403.jpeg?auto=compress&cs=tinysrgb&w=400',
        specs: ['Singlemode', '1km Range', 'SC Connectors', 'Tested']
      }
    ]
  },
  Monitors: {
    name: 'Monitors',
    products: [
      {
        id: 'mon-1',
        name: '4K UHD Monitor 27"',
        description: 'Crystal clear 4K display for professional work',
        count: 11,
        price: 599,
        image: 'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=400',
        specs: ['4K UHD', '27"', '60Hz', 'USB-C']
      },
      {
        id: 'mon-2',
        name: 'Gaming Monitor 165Hz',
        description: 'High refresh rate monitor for competitive gaming',
        count: 19,
        price: 449,
        image: 'https://images.pexels.com/photos/7014329/pexels-photo-7014329.jpeg?auto=compress&cs=tinysrgb&w=400',
        specs: ['1440p', '27"', '165Hz', 'G-Sync']
      },
      {
        id: 'mon-3',
        name: 'IPS Color Accurate Monitor',
        description: 'Accurate color reproduction for designers and photographers',
        count: 13,
        price: 699,
        image: 'https://images.pexels.com/photos/3926883/pexels-photo-3926883.jpeg?auto=compress&cs=tinysrgb&w=400',
        specs: ['2560x1440', '32"', 'IPS Panel', '99% Adobe RGB']
      },
      {
        id: 'mon-4',
        name: 'Office Monitor 24"',
        description: 'Reliable full HD monitor for office productivity',
        count: 31,
        price: 199,
        image: 'https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg?auto=compress&cs=tinysrgb&w=400',
        specs: ['1920x1080', '24"', '60Hz', 'VESA Mount']
      },
      {
        id: 'mon-5',
        name: 'Portable USB-C Monitor',
        description: 'Lightweight portable monitor for mobile professionals',
        count: 10,
        price: 349,
        image: 'https://images.pexels.com/photos/4348403/pexels-photo-4348403.jpeg?auto=compress&cs=tinysrgb&w=400',
        specs: ['1920x1200', '15.6"', 'USB-C', 'Portable']
      }
    ]
  }
};

export const getAllCategories = () => Object.keys(catalogData);

export const getCategoryProducts = (categoryName: string) => {
  return catalogData[categoryName]?.products || [];
};
