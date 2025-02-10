// src/pages/CustomerFocus.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import bannerImage from '/home/fredrick/paco-ventures-website/src/assets/images/supplie1.jpeg';
import customerImage from '/home/fredrick/paco-ventures-website/src/assets/images/hvc1.jpeg';

const CustomerFocus: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Banner */}
      <div>
        <img
          src={bannerImage}
          alt="Customer Focus Banner"
          className="w-full h-[30rem] object-cover object-center"
        />
      </div>
      {/* Content Section */}
      <div className="py-16">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2">
            <img 
              src={customerImage}
              alt="Our Customer Focus"
              className="w-full h-auto rounded-lg shadow-xl"
            />
          </div>
          <div className="md:w-1/2 md:pl-8 mt-6 md:mt-0 text-gray-700">
            {/* Paragraph 1 */}
            <p className="mb-4 text-lg leading-relaxed">
              At <strong>PACO VENTURES LTD</strong>, our philosophy is built around a deep commitment to our customers. We believe that our clients are not just customers but essential partners in our growth. By carefully understanding your unique needs, we tailor our services to create value, foster trust, and nurture long-lasting relationships.
            </p>
            {/* Paragraph 2 */}
            <p className="mb-4 text-lg leading-relaxed">
              Our customer-centric approach means we actively listen, engage, and respond to your challenges. We invest in the latest technologies and leverage industry insights to anticipate and address potential issues before they arise. This proactive strategy ensures that every interaction is not only efficient but also contributes to a seamless and supportive experience throughout your journey with us.
            </p>
            {/* Paragraph 3 */}
            <p className="text-lg leading-relaxed">
              Furthermore, we are dedicated to ensuring transparency and reliability in all our communications. Our commitment extends beyond project delivery—we provide continuous support and follow-up to ensure your satisfaction. At PACO VENTURES LTD, we strive to be more than a service provider; we aim to be a trusted extension of your team, consistently driving your success.
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

export default CustomerFocus;
