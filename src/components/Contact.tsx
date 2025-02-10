import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaGlobe } from 'react-icons/fa';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-16 bg-gradient-to-r from-blue-50 to-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-8 text-blue-900">Get In Touch</h2>
        <p className="max-w-2xl mx-auto text-gray-700 text-xl mb-12">
          At PACO VENTURES LTD, we are dedicated to providing exceptional service and support for all your procurement, maintenance, and repair needs. Whether you require mechanical, electrical, or civil works, our expert team is ready to assist you in achieving operational excellence.
        </p>
        <div className="flex flex-col md:flex-row md:justify-center md:space-x-8 space-y-4 md:space-y-0 mb-12">
          <a
            href="tel:+254724177774"
            className="flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-10 rounded-full transition duration-300"
          >
            <FaPhoneAlt className="mr-2 text-lg" />
            Call Us
          </a>
          <a
            href="mailto:pacc.ventures@gmail.com"
            className="flex items-center justify-center bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-10 rounded-full transition duration-300"
          >
            <FaEnvelope className="mr-2 text-lg" />
            Email Us
          </a>
        </div>
        <div className="flex flex-col md:flex-row md:justify-center md:space-x-12 space-y-4 md:space-y-0">
          <div className="flex items-center justify-center text-gray-700 text-lg">
            <FaMapMarkerAlt className="mr-2" />
            <span>Nyali, Mombasa City, 80100</span>
          </div>
          <div className="flex items-center justify-center text-gray-700 text-lg">
            <FaGlobe className="mr-2" />
            <a
              href="http://www.paccventures.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              www.paccventures.com
            </a>
          </div>
          <div className="flex items-center justify-center text-gray-700 text-lg">
            <FaEnvelope className="mr-2" />
            <span>pacc.ventures@gmail.com</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
