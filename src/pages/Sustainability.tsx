// src/pages/Sustainability.tsx
import React from 'react';
import { Link } from 'react-router-dom';

import sustainabilityImage from '/home/fredrick/paco-ventures-website/src/assets/images/hvc1.jpeg';

const Sustainability: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Banner */}
      <div>
        
      </div>
      {/* Content Section */}
      <div className="py-16">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2">
            <img 
              src={sustainabilityImage}
              alt="Sustainability"
              className="w-full h-auto rounded-lg shadow-xl"
            />
          </div>
          <div className="md:w-1/2 md:pl-8 mt-6 md:mt-0 text-gray-700">
            <p className="mb-4 text-lg leading-relaxed">
              Sustainability is at the core of our operations. We prioritize eco‑friendly practices and sustainable resource management in every project.
            </p>
            <p className="mb-4 text-lg leading-relaxed">
              Our commitment to environmental responsibility is demonstrated through the adoption of green technologies and innovative methods.
            </p>
            <p className="text-lg leading-relaxed">
              By integrating sustainability into our business model, we deliver solutions that benefit both our clients and the communities we serve.
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

export default Sustainability;
