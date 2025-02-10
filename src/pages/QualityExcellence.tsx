// src/pages/QualityExcellence.tsx
import React from 'react';
import { Link } from 'react-router-dom';

import qualityImage from '/home/fredrick/paco-ventures-website/src/assets/images/p4.jpg';

const QualityExcellence: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Banner with Overlay */}
      <div className="relative">
        
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-5xl font-bold text-white drop-shadow-lg">Quality Excellence</h1>
        </div>
      </div>
      {/* Content Section */}
      <div className="py-16">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2">
            <img 
              src={qualityImage}
              alt="Quality Excellence"
              className="w-full h-auto rounded-lg shadow-xl"
            />
          </div>
          <div className="md:w-1/2 md:pl-8 mt-6 md:mt-0 text-gray-700">
            <p className="mb-4 text-lg leading-relaxed">
              At PACO VENTURES LTD, quality excellence is a commitment that drives every project we undertake.
            </p>
            <p className="mb-4 text-lg leading-relaxed">
              We adhere to stringent quality control processes to ensure every project meets international standards.
            </p>
            <p className="text-lg leading-relaxed">
              Our investment in cutting‑edge technology and continuous staff training empowers us to deliver superior, world‑class solutions.
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

export default QualityExcellence;
