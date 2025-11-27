import React, { useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import TopMenu from "./Components/TopMenu/TopMenu";
import Carousel from "./Components/Carousel/Carousel";
import CompanyStats from './Components/CompanyStats/CompanyStats';
import Partners from './Components/Partners/Partners';
import Footer from './Components/Navbar/Footer/Footer';
import TopProducts from './Components/TopProducts/TopProducts';
import Products from './Components/Products/Products';
import Logo from './Components/logo/Logo';
import Login from "./Components/Login/Login.jsx";
import Discount from "./Components/Discount/Discount.jsx";
import Brand from "./Components/Brand/Brand.jsx";
import ContactPage from "./Components/style/ContactPage.jsx";
import About from "./Components/About/About.jsx";

import { 
  laptopsData, 
  gamingProductsData,
  officeProductsData,
  displayProductsData,
  printersProductsData,
  CiscoProductsData
} from "./Components/Products/productsData.jsx";
import Catalog from './pages/Catalog';

const App = () => {
  // Refs for smooth scrolling
  const laptopsRef = useRef(null);
  const gamingRef = useRef(null);
  const officeRef = useRef(null);
  const displayRef = useRef(null);
  const printersRef = useRef(null);

  const scrollToSection = (category) => {
    switch(category) {
      case "Laptop":
        laptopsRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "Desktop":
        gamingRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "Monitor":
        officeRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "Networking":
        displayRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "Printer":
        printersRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "Display":
        displayRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      default:
        break;
    }
  };

  return (
    <Router>
     <Navbar />
    <TopMenu />
    
      <Routes>
 <Route path="/brand" element={<Brand />} />
 <Route path="/about" element={<About />} />
         <Route path="/contact" element={<ContactPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={
    <div>
     
      {/* Add margin to main content to account for fixed navbar + TopMenu */}
      <div style={{ marginTop: '110px' }}>
        <Carousel />
        <Discount />
        <TopProducts onViewMore={scrollToSection} />

        {/* Products sections with refs */}
        <Products 
          title="Top-Rated Performance Laptops" 
          productsData={laptopsData}
          ref={laptopsRef}
        />
        <Products 
          title="Desktop Products" 
          productsData={gamingProductsData}
          ref={gamingRef}
        />
        <Products 
          title="Monitor Equipment" 
          productsData={officeProductsData}
          ref={officeRef}
        />
        <Products 
          title="Printer Equipment" 
          productsData={printersProductsData}
          ref={printersRef}
        />
        <Products 
          title="Display Equipment" 
          productsData={displayProductsData}
          ref={displayRef}
        />
        
        <CompanyStats />
        <Partners />
        <Logo />
      <Catalog />
       
      </div>
    </div>
      } />
      </Routes>
        <Footer />
    </Router>
    
  );
}

export default App;