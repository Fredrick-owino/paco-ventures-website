import React from 'react';
import welcomeImage from '/home/fredrick/paco-ventures-website/src/assets/images/HVAC3.jpg';

const WelcomeMessage: React.FC = () => {
  return (
    <section id="welcome" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <img src={welcomeImage} alt="Welcome" className="rounded-lg shadow-lg w-full" />
        </div>
        <div className="md:w-1/2 md:pl-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">Welcome Message</h2>
          
          <p className="text-gray-700 text-lg">
            We are delighted to welcome you to PACO VENTURES LTD, where excellence meets reliability in supplies, maintenance and repair services.
            Specializing in Computers, Mechanical, Electrical, and Civil works, our dedicated team is here to ensure that all your infrastructure needs are met
            with the highest standards of quality and care.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WelcomeMessage;
