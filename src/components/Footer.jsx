import React from 'react';
import logo from '../assets/ck.png';

const Footer = () => {
  const organizations = [
    'FERWABA',
    'Rusizi BBC', 
    'Espoire BBC',
    'IPRC Musanze',
    'Saint Kizito Save'
  ];

  return (
    // Styled: Changed background to a dark, deep blue-gray for a premium feel. Added a large top padding.
    <footer className="bg-gray-900 text-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Content Grid */}
        <div className="grid md:grid-cols-3 gap-12 items-start">
          
          {/* Logo and About Section (Expanded to take 1 column) */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-4 mb-6">
              {/* Styled: Made logo circular with a strong border for visual punch */}
              <img 
                src={logo} 
                alt="Coach Logo" 
                className="h-14 w-14 sm:h-16 sm:w-16 object-cover bg-white rounded-full p-1 ring-2 ring-indigo-500 shadow-xl"
              />
              <div>
                {/* Styled: Bolder and slightly larger name text */}
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">Karemera J. Claude</h3>
                <p className="text-indigo-400 text-sm font-medium">Professional Basketball Coach</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <p className="text-gray-300 leading-relaxed">
                Ready to elevate your game through **expert coaching** and proven **leadership**? Connect with me today!
              </p>
              {/* Styled: Made badges more vibrant and sporty */}
              <div className="flex flex-wrap gap-3 mt-4">
                <span className="px-3 py-1 bg-indigo-600 rounded-full text-xs font-semibold uppercase tracking-wider shadow-md">FIBA Certified</span>
                <span className="px-3 py-1 bg-green-500 rounded-full text-xs font-semibold uppercase tracking-wider shadow-md">Level II Coach</span>
                <span className="px-3 py-1 bg-purple-600 rounded-full text-xs font-semibold uppercase tracking-wider shadow-md hidden sm:inline-block">National Recognition</span>
              </div>
            </div>
          </div>
          
          {/* Quick Links / Contact Info (New Section) */}
          <div className="md:col-span-1">
            <h4 className="text-xl font-semibold mb-6 border-b-2 border-indigo-500 pb-2 inline-block">Connect</h4>
            <ul className="space-y-3">
                <li><a href="#home" className="text-gray-400 hover:text-indigo-400 transition-colors">Home</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-indigo-400 transition-colors">About Me</a></li>
                <li><a href="#testimonials" className="text-gray-400 hover:text-indigo-400 transition-colors">Testimonials</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-indigo-400 transition-colors">Book a Session</a></li>
            </ul>
          </div>
          
          {/* Organizations (Expanded to take 1 column) */}
          <div className="md:col-span-1">
            {/* Styled: Added a separator underline to the heading */}
            <h4 className="text-xl font-semibold mb-6 border-b-2 border-indigo-500 pb-2 inline-block">Affiliated Organizations</h4>
            {/* Styled: Used a 2-column list, giving each item a distinct background and strong hover effect */}
            <div className="grid grid-cols-2 gap-3">
              {organizations.map((org, index) => (
                <div 
                  key={index}
                  className="p-3 bg-gray-800 rounded-lg shadow-lg hover:bg-indigo-700 transform hover:-translate-y-0.5 transition duration-300 ease-in-out cursor-pointer"
                >
                  <p className="font-medium text-sm sm:text-base">{org}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Bottom section */}
        {/* Styled: Added more padding, a solid separator line, and centered text */}
        <div className="border-t border-gray-800 mt-16 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            Designed and Powered by <span className="font-bold text-indigo-400 hover:text-indigo-300 transition-colors">Mugabe Herve</span>
          </p>
          <p className="text-xs text-gray-600 mt-2">
            &copy; 2025 Karemera Jean Claude. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;