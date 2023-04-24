import React, { useState } from 'react';
import Navbar from './Navbar';
import {
    HeroContainer,
    HeroContent,
    HeroItems,
  } from './HeroStyles';
import Sidebar from './Sidebar';



const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <HeroContainer>
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <HeroContent>
        <HeroItems>
          <h1>Greatest Pizza Ever</h1>
          <p>Ready in 15 minutes</p>
          <button>Place Order</button>
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
