// src/pages/CivilWorks.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import bannerImage from '/home/fredrick/paco-ventures-website/src/assets/images/rep.jpg'; 
import civilImage1 from '/home/fredrick/paco-ventures-website/src/assets/images/p3.jpg'; 
import civilImage2 from '/home/fredrick/paco-ventures-website/src/assets/images/c2.jpeg'; 
import civilImage3 from '/home/fredrick/paco-ventures-website/src/assets/images/p1.webp'; 

const CivilWorks: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Banner Section */}
      <div>
        <img 
          src={bannerImage} 
          alt="Civil Works Banner" 
          className="w-full h-[30rem] object-cover object-center"
        />
      </div>

      {/* Main Content */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-blue-700 mb-12 text-center">Civil Works</h1>

          {/* Section 1: Image Left, Text Right */}
          <div className="flex flex-col md:flex-row items-center mb-16">
            <div className="md:w-1/2">
              <img 
                src={civilImage1} 
                alt="Construction Projects" 
                className="w-full h-auto rounded-lg shadow-xl"
              />
            </div>
            <div className="md:w-1/2 md:pl-8 mt-6 md:mt-0 text-gray-700">
              <p className="mb-4 text-lg leading-relaxed">
                Our <strong>construction projects</strong> showcase our commitment to innovation and precision. We design and build structures that not only stand the test of time but also meet modern safety and sustainability standards.
              </p>
              <p className="mb-4 text-lg leading-relaxed">
                By integrating advanced engineering techniques with high-quality materials, we ensure that every project is executed to perfection. Our dedicated team works relentlessly to maintain excellence in every phase of construction.
              </p>
              <p className="text-lg leading-relaxed">
                With a focus on efficiency and durability, our construction services are tailored to meet the evolving demands of the industry, ensuring robust and resilient infrastructure.
              </p>
            </div>
          </div>

          {/* Section 2: Image Right, Text Left */}
          <div className="flex flex-col md:flex-row items-center mb-16">
            <div className="md:w-1/2 md:order-2">
              <img 
                src={civilImage2} 
                alt="Renovation Projects" 
                className="w-full h-auto rounded-lg shadow-xl"
              />
            </div>
            <div className="md:w-1/2 md:pr-8 mt-6 md:mt-0 md:order-1 text-gray-700">
              <p className="mb-4 text-lg leading-relaxed">
                Our <strong>renovation projects</strong> breathe new life into existing structures, enhancing functionality and aesthetics. We focus on preserving the essence of the original design while upgrading to contemporary standards.
              </p>
              <p className="mb-4 text-lg leading-relaxed">
                Leveraging our expertise in modern construction techniques, we carefully plan and execute renovations that maximize value and performance. Every detail is meticulously addressed to ensure seamless integration.
              </p>
              <p className="text-lg leading-relaxed">
                Our renovation services combine creativity with technical precision to deliver environments that are both beautiful and practical.
              </p>
            </div>
          </div>

          {/* Section 3: Image Left, Text Right */}
          <div className="flex flex-col md:flex-row items-center mb-16">
            <div className="md:w-1/2">
              <img 
                src={civilImage3} 
                alt="Repair Services" 
                className="w-full h-auto rounded-lg shadow-xl"
              />
            </div>
            <div className="md:w-1/2 md:pl-8 mt-6 md:mt-0 text-gray-700">
              <p className="mb-4 text-lg leading-relaxed">
                Our <strong>repair services</strong> are designed to restore and enhance the functionality of critical infrastructure. We understand that timely repairs are essential to maintain safety and continuity.
              </p>
              <p className="mb-4 text-lg leading-relaxed">
                Combining industry-leading techniques with modern technology, we diagnose issues quickly and implement effective solutions. Our repair team is dedicated to ensuring minimal disruption.
              </p>
              <p className="text-lg leading-relaxed">
                With an emphasis on quality and reliability, our repair services extend the lifespan of your assets while ensuring optimal performance and safety.
              </p>
            </div>
          </div>

          {/* Back to Home Link */}
         
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

export default CivilWorks;
