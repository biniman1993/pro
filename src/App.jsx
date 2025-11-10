import React from 'react'
import Navbar from './Components/Navbar/Navbar';
import TopMenu from "./Components/TopMenu/TopMenu";
import Carousel from "./Components/Carousel/Carousel";
import OurMajorProducts from "./Components/OurMajorProducts/OurMajorProducts";
import CompanyStats from './Components/CompanyStats/CompanyStats';
import Partners from './Components/Partners/Partners';
import Footer from './Components/Navbar/Footer/Footer';
import TopProducts from './Components/TopProducts/TopProducts';

const App = () => {
  return (
    <div>
      <Navbar />
      <TopMenu />
      <Carousel />
      <TopProducts />
      <OurMajorProducts />
      <CompanyStats />
      <Partners />
      <Footer />
    
    </div>
  )
}

export default App
