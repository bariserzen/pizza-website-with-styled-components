import React from 'react'
import { GlobalStyle } from '../globalStyles';
import Hero from '../components/Hero';
import Products from '../components/Product';
import Feature from '../components/Feature';
import Footer from '../components/Footer';
import { productData, productDataTwo } from '../components/Productdata';



const RootLayout = () => {
  return (
    <>
    <GlobalStyle />
      <Hero/>
      <Products heading='Choose your favorite' data={productData} />
      <Feature/>
      <Products heading='Sweet Treats for You' data={productDataTwo} />
      <Footer/>
    </>
  )
}

export default RootLayout;
