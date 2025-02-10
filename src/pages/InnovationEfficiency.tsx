// src/pages/InnovationEfficiency.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import bannerImage from '/home/fredrick/paco-ventures-website/src/assets/images/i6.avif';
import innovationImage1 from '/home/fredrick/paco-ventures-website/src/assets/images/i4.png';
import innovationImage2 from '/home/fredrick/paco-ventures-website/src/assets/images/HVAC-2.jpeg';

const InnovationEfficiency: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Banner */}
      <div>
        <img
          src={bannerImage}
          alt="Innovation & Efficiency Banner"
          className="w-full h-[28rem] object-cover object-center"
        />
      </div>
      {/* Content Section */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-blue-700 mb-12 text-center">Innovation & Efficiency</h1>
          {/* Section 1: Image Left, Text Right */}
          <div className="flex flex-col md:flex-row items-center mb-16">
            <div className="md:w-1/2">
              <img 
                src={innovationImage1}
                alt="Innovative Approach"
                className="w-full h-auto rounded-lg shadow-xl"
              />
            </div>
            <div className="md:w-1/2 md:pl-8 mt-6 md:mt-0 text-gray-700">
              <p className="mb-4 text-lg leading-relaxed">
                Our innovative approach leverages cutting‑edge technology to streamline operations and optimize performance.
              </p>
              <p className="mb-4 text-lg leading-relaxed">
                We invest continuously in research and development, staying ahead of industry trends.
              </p>
              <p className="text-lg leading-relaxed">
                This commitment to innovation enables us to deliver high‑quality, efficient solutions across all projects.
              </p>
            </div>
          </div>
          {/* Section 2: Image Right, Text Left */}
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 md:order-2">
              <img 
                src={innovationImage2}
                alt="Efficiency in Action"
                className="w-full h-auto rounded-lg shadow-xl"
              />
            </div>
            <div className="md:w-1/2 md:pr-8 mt-6 md:mt-0 md:order-1 text-gray-700">
              <p className="mb-4 text-lg leading-relaxed">
                Efficiency is at the heart of our operations, ensuring projects are completed on time and within budget.
              </p>
              <p className="mb-4 text-lg leading-relaxed">
                Our streamlined processes reduce waste and maximize productivity across all tasks.
              </p>
              <p className="text-lg leading-relaxed">
                By combining innovation with efficiency, we achieve remarkable results for our clients.
              </p>
            </div>
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

export default InnovationEfficiency;
