// src/pages/ElectricalMechanical.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import bannerImage from '/home/fredrick/paco-ventures-website/src/assets/images/el2.jpg';
import electricalImage from '/home/fredrick/paco-ventures-website/src/assets/images/cab.jpg';

const ElectricalMechanical: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Banner */}
      <div>
        <img
          src={bannerImage}
          alt="Electrical & Mechanical Banner"
          className="w-full h-[28rem] object-cover object-center"
        />
      </div>
      {/* Content Section */}
      <div className="py-16">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          {/* Image Column */}
          <div className="md:w-1/2 md:order-2">
            <img 
              src={electricalImage}
              alt="Electrical & Mechanical Services"
              className="w-full h-auto rounded-lg shadow-xl"
            />
          </div>
          {/* Text Column */}
          <div className="md:w-1/2 md:pr-8 mt-6 md:mt-0 md:order-1 text-gray-700">
            <p className="mb-4 text-lg leading-relaxed">
              At <strong>PACO VENTURES LTD</strong>, our Electrical &amp; Mechanical services are designed to deliver excellence at every stage of your project. Our highly skilled team employs state‑of‑the‑art technology to ensure flawless installations and reliable repairs, so your systems operate at peak performance.
            </p>
            <p className="mb-4 text-lg leading-relaxed">
              We combine innovative design with rigorous testing protocols to optimize the performance and longevity of your electrical and mechanical systems. By utilizing cutting‑edge tools and high‑quality materials, we minimize downtime and maximize efficiency, ensuring that every installation meets the highest industry standards.
            </p>
            <p className="text-lg leading-relaxed">
              Safety and precision are at the core of our approach, and our commitment to quality is unwavering. Through continuous improvement, expert oversight, and meticulous attention to detail, we deliver solutions that not only meet but exceed expectations, making us a trusted partner for your critical infrastructure needs.
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

export default ElectricalMechanical;
