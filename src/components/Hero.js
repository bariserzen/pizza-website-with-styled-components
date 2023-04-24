import React from 'react';
import Navbar from './Navbar';
import {
    HeroContainer,
    HeroContent,
    HeroItems,
  } from './HeroStyles';



const Hero = () => {
  return (
    <HeroContainer>
      <Navbar/>

      <HeroContent>
        <HeroItems>
          <h1>Greatest Pizza Ever</h1>
          <p>Ready in 15 minutes</p>
          <button>Place Order</button>
        </HeroItems>
      </HeroContent>

    </HeroContainer>
  );
}

export default Hero
