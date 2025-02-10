// src/components/Header.tsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/pv (2).png';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <header className="bg-gray-900 text-white shadow-md w-full relative z-50">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <div className="flex items-center space-x-2">
          <img src={logo} alt="PACO VENTURES LTD Logo" className="h-10 w-auto" />
          <span className="text-2xl font-bold">PACO VENTURES LTD</span>
        </div>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-gray-300">Home</Link>
          <Link to="/about" className="hover:text-gray-300">About Us</Link>
          {/* Vision & Mission Dropdown */}
          <div className="relative group">
            <button className="hover:text-gray-300 focus:outline-none">
              Vision &amp; Mission
            </button>
            <div
              className="absolute left-0 top-full w-56 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:visible group-hover:opacity-100 transition duration-300 delay-150"
              style={{ zIndex: 100 }}
            >
              <Link to="/quality-excellence" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                Quality Excellence
              </Link>
              <Link to="/customer-focus" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                Customer Focus
              </Link>
              <Link to="/innovation-efficiency" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                Innovation &amp; Efficiency
              </Link>
              <Link to="/sustainability" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                Sustainability
              </Link>
            </div>
          </div>
          {/* Services Dropdown */}
          <div className="relative group">
            <button className="hover:text-gray-300 focus:outline-none">
              Our Services
            </button>
            <div
              className="absolute left-0 top-full w-56 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:visible group-hover:opacity-100 transition duration-300 delay-150"
              style={{ zIndex: 100 }}
            >
              <Link to="/general-supplies" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                General Supplies
              </Link>
              <Link to="/installation-maintenance" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                Installation &amp; Maintenance
              </Link>
              <Link to="/electrical-mechanical" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                Electrical &amp; Mechanical
              </Link>
              <Link to="/civil-works" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                Civil Works
              </Link>
            </div>
          </div>
          <Link to="/contact" className="hover:text-gray-300">Contact Us</Link>
        </nav>
        {/* Mobile Menu Toggle */}
        <button className="md:hidden focus:outline-none" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? (
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>
      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <nav className="md:hidden bg-gray-800">
          <ul className="flex flex-col space-y-4 px-4 py-4">
            <li>
              <Link to="/" className="hover:text-gray-300" onClick={() => setIsMobileMenuOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-gray-300" onClick={() => setIsMobileMenuOpen(false)}>
                About Us
              </Link>
            </li>
            <li>
              <div className="pl-2">
                <span className="block text-sm text-gray-300">Vision &amp; Mission</span>
                <Link to="/quality-excellence" className="block hover:text-gray-300" onClick={() => setIsMobileMenuOpen(false)}>
                  Quality Excellence
                </Link>
                <Link to="/customer-focus" className="block hover:text-gray-300" onClick={() => setIsMobileMenuOpen(false)}>
                  Customer Focus
                </Link>
                <Link to="/innovation-efficiency" className="block hover:text-gray-300" onClick={() => setIsMobileMenuOpen(false)}>
                  Innovation &amp; Efficiency
                </Link>
                <Link to="/sustainability" className="block hover:text-gray-300" onClick={() => setIsMobileMenuOpen(false)}>
                  Sustainability
                </Link>
              </div>
            </li>
            <li>
              <div className="pl-2">
                <span className="block text-sm text-gray-300">Services</span>
                <Link to="/general-supplies" className="block hover:text-gray-300" onClick={() => setIsMobileMenuOpen(false)}>
                  General Supplies
                </Link>
                <Link to="/installation-maintenance" className="block hover:text-gray-300" onClick={() => setIsMobileMenuOpen(false)}>
                  Installation &amp; Maintenance
                </Link>
                <Link to="/electrical-mechanical" className="block hover:text-gray-300" onClick={() => setIsMobileMenuOpen(false)}>
                  Electrical &amp; Mechanical
                </Link>
                <Link to="/civil-works" className="block hover:text-gray-300" onClick={() => setIsMobileMenuOpen(false)}>
                  Civil Works
                </Link>
              </div>
            </li>
            <li>
              <Link to="/contact" className="hover:text-gray-300" onClick={() => setIsMobileMenuOpen(false)}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
