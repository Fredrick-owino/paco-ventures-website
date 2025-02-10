import React from 'react';
import { Link } from 'react-router-dom';
import suppliesImg from '/home/fredrick/paco-ventures-website/src/assets/images/cab.jpg';
import installationImg from '/home/fredrick/paco-ventures-website/src/assets/images/p3.jpg';
import electricalImg from '/home/fredrick/paco-ventures-website/src/assets/images/supplie1.jpeg';
import civilImg from '/home/fredrick/paco-ventures-website/src/assets/images/ci.jpg';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-16 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-12 text-gray-800">Our Services</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* General Supplies */}
          <Link 
            to="/general-supplies" 
            className="block bg-gray-50 p-6 rounded-lg shadow hover:shadow-xl transition text-center"
          >
            <img src={suppliesImg} alt="General Supplies" className="mx-auto h-16 mb-4" />
            <h3 className="text-xl font-semibold mb-2">General Supplies</h3>
            <p className="text-gray-700 mb-2">
              Reliable procurement services ensuring timely delivery.
            </p>
            <p className="text-gray-700">
              Comprehensive vendor management and global sourcing.
            </p>
          </Link>

          {/* Installation & Maintenance */}
          <Link 
            to="/installation-maintenance" 
            className="block bg-gray-50 p-6 rounded-lg shadow hover:shadow-xl transition text-center"
          >
            <img src={installationImg} alt="Installation & Maintenance" className="mx-auto h-16 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Installation &amp; Maintenance</h3>
            <p className="text-gray-700 mb-2">
              Expert installation and scheduled maintenance services.
            </p>
            <p className="text-gray-700">
              Ensuring seamless operations with minimal downtime.
            </p>
          </Link>

          {/* Electrical & Mechanical */}
          <Link 
            to="/electrical-mechanical" 
            className="block bg-gray-50 p-6 rounded-lg shadow hover:shadow-xl transition text-center"
          >
            <img src={electricalImg} alt="Electrical & Mechanical" className="mx-auto h-16 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Electrical &amp; Mechanical</h3>
            <p className="text-gray-700 mb-2">
              Skilled services for electrical and mechanical systems.
            </p>
            <p className="text-gray-700">
              Innovative solutions for modern infrastructure.
            </p>
          </Link>

          {/* Civil Works */}
          <Link 
            to="/civil-works" 
            className="block bg-gray-50 p-6 rounded-lg shadow hover:shadow-xl transition text-center"
          >
            <img src={civilImg} alt="Civil Works" className="mx-auto h-16 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Civil Works</h3>
            <p className="text-gray-700 mb-2">
              Superior construction, renovation, and repair services.
            </p>
            <p className="text-gray-700">
              Comprehensive solutions for sustainable development.
            </p>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
