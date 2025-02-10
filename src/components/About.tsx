import React from 'react';
import aboutImage from '../assets/images/el2.jpg';

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <img src={aboutImage} alt="About PACO VENTURES" className="rounded-lg shadow-lg" />
        </div>
        <div className="md:w-1/2 md:pl-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">About Us</h2>
          <p className="text-gray-700 text-lg">
            At PACO VENTURES LTD, we are dedicated to delivering high-quality supplies,
            installation, and maintenance services across electrical, mechanical, and civil
            works. Our expert team and innovative solutions ensure your projects are executed
            with precision and excellence.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
