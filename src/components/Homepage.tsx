import React from 'react';

import Hero from './Hero';
import WelcomeMessage from './WelcomeMessage';
import About from './About';
import VisionMission from './VisionMission';
import Services from './Services';

import Contact from './Contact';


const Homepage: React.FC = () => {
  return (
    <div className="flex flex-col">
      

       
      <Hero />
      <WelcomeMessage />
      <About />
      
      <VisionMission />
      <Services />
      
      <Contact />
    </div>
  );
};

export default Homepage;
