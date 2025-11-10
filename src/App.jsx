import React from 'react'
import Navbar from './Componets/Navbar/Navbar';
import TopMenu from "./Componets/TopMenu/TopMenu";
import Carousel from "./Componets/Carousel/Carousel";
import OurMajorProducts from "./Componets/OurMajorProducts/OurMajorProducts";
import CompanyStats from './Componets/CompanyStats/CompanyStats';
import Partners from './Componets/Partners/Partners';
import Footer from './Componets/Navbar/Footer/Footer';


const App = () => {
  return (
    <div>
      <Navbar />
      <TopMenu />
      <Carousel />
      <OurMajorProducts />
      <OurMajorProducts />
      <OurMajorProducts />
      <CompanyStats />
      <Partners />
      <Footer />
    
    </div>
  )
}

export default App
