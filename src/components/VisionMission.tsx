import React from 'react';
import { Link } from 'react-router-dom';
import qualityImg from '/home/fredrick/paco-ventures-website/src/assets/images/comp 1.jpeg';
import customerImg from '/home/fredrick/paco-ventures-website/src/assets/images/hvc1.jpeg';
import innovationImg from '/home/fredrick/paco-ventures-website/src/assets/images/HVAC-2.jpeg';
import sustainabilityImg from '/home/fredrick/paco-ventures-website/src/assets/images/p1.webp';

const VisionMission: React.FC = () => {
  return (
    <section id="vision-mission" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-700">
          Our Core Values
        </h2>
        <div className="space-y-8">
          {/* Quality Excellence */}
          <Link 
            to="/quality-excellence" 
            className="block bg-white rounded-lg shadow hover:shadow-xl transition"
          >
            <div className="flex flex-col md:flex-row items-center p-6">
              <div className="flex-shrink-0">
                <img 
                  src={qualityImg} 
                  alt="Quality Excellence" 
                  className="w-48 h-48 object-cover rounded-md"
                />
              </div>
              <div className="mt-4 md:mt-0 md:ml-6 text-left">
                <h3 className="text-2xl font-semibold text-blue-600 mb-4">
                  Quality Excellence
                </h3>
                <p className="text-gray-700 mb-2">
                  Our commitment to quality ensures that every project meets the highest standards.
                </p>
                <p className="text-gray-700">
                  Continuous improvement and attention to detail are at the heart of our work.
                </p>
              </div>
            </div>
          </Link>
          {/* Customer Focus */}
          <Link 
            to="/customer-focus" 
            className="block bg-white rounded-lg shadow hover:shadow-xl transition"
          >
            <div className="flex flex-col md:flex-row items-center p-6">
              <div className="flex-shrink-0">
                <img 
                  src={customerImg} 
                  alt="Customer Focus" 
                  className="w-48 h-48 object-cover rounded-md"
                />
              </div>
              <div className="mt-4 md:mt-0 md:ml-6 text-left">
                <h3 className="text-2xl font-semibold text-blue-600 mb-4">
                  Customer Focus
                </h3>
                <p className="text-gray-700 mb-2">
                  We place our customers at the center of everything we do.
                </p>
                <p className="text-gray-700">
                  Personalized service and lasting relationships drive our success.
                </p>
              </div>
            </div>
          </Link>
          {/* Innovation & Efficiency */}
          <Link 
            to="/innovation-efficiency" 
            className="block bg-white rounded-lg shadow hover:shadow-xl transition"
          >
            <div className="flex flex-col md:flex-row items-center p-6">
              <div className="flex-shrink-0">
                <img 
                  src={innovationImg} 
                  alt="Innovation & Efficiency" 
                  className="w-48 h-48 object-cover rounded-md"
                />
              </div>
              <div className="mt-4 md:mt-0 md:ml-6 text-left">
                <h3 className="text-2xl font-semibold text-blue-600 mb-4">
                  Innovation &amp; Efficiency
                </h3>
                <p className="text-gray-700 mb-2">
                  We leverage creative solutions and advanced technology for optimal results.
                </p>
                <p className="text-gray-700">
                  Efficiency and innovation drive our continuous progress.
                </p>
              </div>
            </div>
          </Link>
          {/* Sustainability */}
          <Link 
            to="/sustainability" 
            className="block bg-white rounded-lg shadow hover:shadow-xl transition"
          >
            <div className="flex flex-col md:flex-row items-center p-6">
              <div className="flex-shrink-0">
                <img 
                  src={sustainabilityImg} 
                  alt="Sustainability" 
                  className="w-48 h-48 object-cover rounded-md"
                />
              </div>
              <div className="mt-4 md:mt-0 md:ml-6 text-left">
                <h3 className="text-2xl font-semibold text-blue-600 mb-4">
                  Sustainability
                </h3>
                <p className="text-gray-700 mb-2">
                  We integrate eco‑friendly practices to protect our environment.
                </p>
                <p className="text-gray-700">
                  Our commitment to sustainability supports long‑term growth.
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
