import React from 'react'
import Navbar from './Componets/Navbar/Navbar';
import TopMenu from "./Componets/TopMenu/TopMenu";
import Carousel from "./Componets/Carousel/Carousel";
import OurMajorProducts from "./Componets/OurMajorProducts/OurMajorProducts";
import LaptopCards from './Componets/LaptopCards/LaptopCards';
import Partners from './Componets/Partners/Partners';

const App = () => {
  return (
    <div>
      <Navbar />
      <TopMenu />
      <Carousel />
      <OurMajorProducts />
        <LaptopCards />
      <Partners />
    
    </div>
  )
}

export default App
