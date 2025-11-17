import React from 'react'
import Navbar from './Components/Navbar/Navbar';
import TopMenu from "./Components/TopMenu/TopMenu";
import Carousel from "./Components/Carousel/Carousel";
import CompanyStats from './Components/CompanyStats/CompanyStats';
import Partners from './Components/Partners/Partners';
import Footer from './Components/Navbar/Footer/Footer';
import TopProducts from './Components/TopProducts/TopProducts';
import Products from './Components/Products/Products';
import Logo from './Components/logo/Logo';

const App = () => {
  return (
    <div>
      <Navbar />
      <TopMenu />
      <Carousel />
      <TopProducts />
      <Products />
       <Products />
      <CompanyStats />
      <Partners />
      <Logo />
      <Footer />
    
    </div>
  )
}

export default App
