// src/pages/AboutPage.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import bannerImage from '/home/fredrick/paco-ventures-website/src/assets/images/HVAC3.jpg'; 
import aboutImage1 from '/home/fredrick/paco-ventures-website/src/assets/images/HVAC-Repair-1.jpg';
import aboutImage2 from '/home/fredrick/paco-ventures-website/src/assets/images/c2.jpeg';
import aboutImage3 from '/home/fredrick/paco-ventures-website/src/assets/images/ci.jpg';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Standalone Heading */}
      <div className="bg-gray-800 py-6">
        <h1 className="text-4xl md:text-5xl font-bold text-white text-center">
          About Us
        </h1>
      </div>

      {/* Banner Image */}
      <div>
        <img
          src={bannerImage}
          alt="Banner"
          className="w-full h-[40rem] object-contain object-center"
        />
      </div>

      {/* Main Content */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          {/* Section 1 */}
          <div className="flex flex-col md:flex-row items-center mb-16">
            <div className="md:w-1/2">
              <img 
                src={aboutImage1} 
                alt="Maintenance & Repairs" 
                className="w-full h-auto rounded-lg shadow-xl"
              />
            </div>
            <div className="md:w-1/2 md:pl-8 mt-6 md:mt-0 text-gray-700">
              <p className="mb-4 text-lg leading-relaxed">
                At <strong>PACO VENTURES LTD</strong>, our comprehensive maintenance and repair services ensure that your infrastructure operates at peak performance. We pride ourselves on <strong>unmatched reliability</strong> and a steadfast commitment to <strong>quality excellence</strong>.
              </p>
              <p className="text-lg leading-relaxed">
                Specializing in <strong>electrical, mechanical, and civil works</strong>, we employ state‑of‑the‑art techniques and rigorous quality controls to deliver results that not only meet but exceed expectations.
              </p>
            </div>
          </div>
          {/* Section 2 */}
          <div className="flex flex-col md:flex-row items-center mb-16">
            <div className="md:w-1/2 md:order-2">
              <img 
                src={aboutImage2} 
                alt="Innovative Solutions" 
                className="w-full h-auto rounded-lg shadow-xl"
              />
            </div>
            <div className="md:w-1/2 md:pr-8 mt-6 md:mt-0 md:order-1 text-gray-700">
              <p className="mb-4 text-lg leading-relaxed">
                Innovation is at the core of our operations. We leverage <strong>cutting‑edge technology</strong> to create sustainable, efficient solutions tailored to your needs.
              </p>
              <p className="text-lg leading-relaxed">
                By integrating modern practices and continuously improving our methodologies, we set new benchmarks for service excellence, ensuring every project is delivered with <strong>precision and efficiency</strong>.
              </p>
            </div>
          </div>
          {/* Section 3 */}
          <div className="flex flex-col md:flex-row items-center mb-16">
            <div className="md:w-1/2">
              <img 
                src={aboutImage3} 
                alt="Dedicated Team" 
                className="w-full h-auto rounded-lg shadow-xl"
              />
            </div>
            <div className="md:w-1/2 md:pl-8 mt-6 md:mt-0 text-gray-700">
              <p className="mb-4 text-lg leading-relaxed">
                Our strength lies in our dedicated team, whose <strong>integrity</strong> and <strong>expertise</strong> drive our success. We believe in a <strong>customer-centric approach</strong> that fosters long‑term partnerships.
              </p>
              <p className="text-lg leading-relaxed">
                With a focus on innovation and personalized service, our professionals ensure that every client receives the highest level of support. This commitment is the cornerstone of our reputation as a trusted partner.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-4">&copy; {new Date().getFullYear()} PACO VENTURES LTD. All rights reserved.</p>
          <Link to="/" className="text-blue-400 hover:underline">Back to Homepage</Link>
        </div>
      </footer>
    </div>
  );
};

export default AboutPage;
