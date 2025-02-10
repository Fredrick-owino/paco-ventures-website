// src/pages/InstallationMaintenance.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import bannerImage from '/home/fredrick/paco-ventures-website/src/assets/images/p4.jpg';
import installationImage from '/home/fredrick/paco-ventures-website/src/assets/images/p2.avif';

const InstallationMaintenance: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Banner Section */}
      <div>
        <img 
          src={bannerImage} 
          alt="Installation & Maintenance Banner"
          className="w-full h-[28rem] object-cover object-center"
        />
      </div>
      {/* Content Section */}
      <div className="py-16">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          {/* Left Column: Image */}
          <div className="md:w-1/2">
            <img 
              src={installationImage}
              alt="Installation & Maintenance"
              className="w-full h-auto rounded-lg shadow-xl"
            />
          </div>
          {/* Right Column: Text */}
          <div className="md:w-1/2 md:pl-8 mt-6 md:mt-0 text-gray-700">
            <p className="mb-4 text-lg leading-relaxed">
              Our expert team ensures flawless installations using state‑of‑the‑art techniques. We pride ourselves on meticulous planning, rigorous quality controls, and a steadfast commitment to safety that guarantees every project meets international standards.
            </p>
            <p className="mb-4 text-lg leading-relaxed">
              In addition to our installation expertise, we offer comprehensive maintenance services designed to keep your systems operating at peak performance. Through regular inspections and proactive servicing, we minimize downtime and extend the lifespan of your critical equipment.
            </p>
            <p className="text-lg leading-relaxed">
              We continuously invest in the latest technologies and training to stay ahead of industry trends, ensuring that every project is executed with unmatched precision. This unwavering commitment to excellence safeguards your investments and enhances overall operational efficiency.
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

export default InstallationMaintenance;

