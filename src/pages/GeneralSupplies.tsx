// src/pages/GeneralSupplies.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import bannerImage from '/home/fredrick/paco-ventures-website/src/assets/images/s.webp'; // Banner image
import suppliesContentImage from '/home/fredrick/paco-ventures-website/src/assets/images/sup.jpg'; // Content image

const GeneralSupplies: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Banner */}
      <div>
        <img
          src={bannerImage}
          alt="General Supplies Banner"
          className="w-full h-[26rem] object-cover object-center"
        />
      </div>
      {/* Content Section */}
      <div className="py-16">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          
          {/* Left Column: Image */}
          <div className="md:w-1/2">
          <p className="mb-4 text-lg leading-relaxed">
              Our <strong>General Supplies</strong> service is designed to offer a comprehensive range of products that cater to every aspect of your project requirements. We collaborate with a network of trusted global vendors to source high‑quality products at competitive prices.
            </p>
            <p className="mb-4 text-lg leading-relaxed">
              With an extensive portfolio that includes office equipment, industrial machinery, and specialized tools, we ensure that every client finds the ideal solution for their unique needs. Our streamlined procurement process guarantees timely delivery and exceptional service every time.
            </p>
            <img 
              src={suppliesContentImage}
              alt="General Supplies Products"
              className="w-full h-auto rounded-lg shadow-xl"
            />
          </div>
          {/* Right Column: Text */}
          <div className="md:w-1/2 md:pl-8 mt-6 md:mt-0 text-gray-700">
            <p className="mb-4 text-lg leading-relaxed">
              Our <strong>General Supplies</strong> service is designed to offer a comprehensive range of products that cater to every aspect of your project requirements. We collaborate with a network of trusted global vendors to source high‑quality products at competitive prices.
            </p>
            <p className="mb-4 text-lg leading-relaxed">
              With an extensive portfolio that includes office equipment, industrial machinery, and specialized tools, we ensure that every client finds the ideal solution for their unique needs. Our streamlined procurement process guarantees timely delivery and exceptional service every time.
            </p>
            <p className="text-lg leading-relaxed">
              Committed to excellence, we continually optimize our supply chain operations to deliver reliable, cost‑effective solutions. At <strong>PACO VENTURES LTD</strong>, our focus is on providing unmatched value and performance, ensuring your complete satisfaction with every product we supply.
            </p>
          </div>
        </div>
      </div>
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-4">&copy; {new Date().getFullYear()} PACO VENTURES LTD.</p>
          <Link to="/" className="text-blue-400 hover:underline">Back to Home</Link>
        </div>
      </footer>
    </div>
  );
};

export default GeneralSupplies;
