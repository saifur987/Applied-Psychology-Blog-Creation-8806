import React from 'react';
import { Link } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiMail, FiPhone, FiMapPin, FiLinkedin } = FiIcons;

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-4">Dr. Saifur Rahman</h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Licensed Counselling Psychologist in the UK, dedicated to providing compassionate, 
              evidence-based therapy with a philosophy of simplicity.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
                <SafeIcon icon={FiLinkedin} className="text-xl" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-600 hover:text-blue-600 transition-colors">About</Link></li>
              <li><Link to="/services" className="text-gray-600 hover:text-blue-600 transition-colors">Services</Link></li>
              <li><Link to="/approach" className="text-gray-600 hover:text-blue-600 transition-colors">My Approach</Link></li>
              <li><Link to="/resources" className="text-gray-600 hover:text-blue-600 transition-colors">Resources</Link></li>
              <li><Link to="/contact" className="text-gray-600 hover:text-blue-600 transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-4">Contact Information</h3>
            <div className="space-y-3">
              <div className="flex items-center text-gray-600">
                <SafeIcon icon={FiMail} className="mr-3 text-gray-400" />
                <span>dr.saifur@example.com</span>
              </div>
              <div className="flex items-center text-gray-600">
                <SafeIcon icon={FiPhone} className="mr-3 text-gray-400" />
                <span>+44 20 7123 4567</span>
              </div>
              <div className="flex items-start text-gray-600">
                <SafeIcon icon={FiMapPin} className="mr-3 text-gray-400 mt-1" />
                <span>London, United Kingdom</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            © 2024 Dr. Saifur Rahman. All rights reserved. | Licensed Counselling Psychologist in the UK
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;