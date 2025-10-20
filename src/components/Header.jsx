import React, { useState } from 'react';
import logo from '../assets/ck.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Helper class for navigation links - Text changed to white/light gray
  const navLinkClasses = "flex items-center space-x-2 text-gray-300 hover:text-indigo-400 font-semibold text-lg transition duration-300 ease-in-out py-1";
  
  // Helper class for mobile navigation links - Text adjusted for dark header
  const mobileNavLinkClasses = "flex items-center space-x-3 block px-4 py-2 text-base text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition duration-300 ease-in-out rounded-lg";

  // Icon Components - Stroke color will be inherited or explicitly set by navLinkClasses
  const Icon = ({ path }) => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={path} />
    </svg>
  );

  return (
    // STYLE CHANGE: Header background set to dark indigo/gray for high contrast. Removed bottom border.
    <header className="bg-gray-900 shadow-2xl sticky top-0 z-40">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 sm:py-5">
          {/* Logo and Name Section */}
          <div className="flex items-center space-x-3 sm:space-x-4">
            {/* STYLE CHANGE: Removed bg-black and ring-white. Using a clear white background p-1 to define the logo area. */}
            <img 
              src={logo} 
              alt="Coach Logo" 
              className="h-12 w-12 sm:h-14 sm:w-14 object-cover bg-white rounded-full p-1 shadow-lg transform hover:scale-105 transition-transform duration-300"
            />
            <div>
              {/* STYLE CHANGE: Name text color changed to white */}
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white truncate tracking-tight">
                Karemera Jean Claude
              </h1>
              {/* STYLE CHANGE: Title text color changed to light indigo for accent */}
              <p className="text-sm sm:text-base text-indigo-400 hidden sm:block font-medium">Professional Basketball Coach</p>
            </div>
          </div>
          
          {/* Desktop Navigation - Text color updated via navLinkClasses */}
          <div className="hidden md:flex space-x-10">
            <a href="#about" className={navLinkClasses}>
              <Icon path="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-5m-4 6h4m-4 4h4m-8-8v-3m0 3a2 2 0 100-4 2 2 0 000 4zm16 0a2 2 0 100-4 2 2 0 000 4z" />
              <span>About</span>
            </a>
            <a href="#testimonials" className={navLinkClasses}>
              <Icon path="M7 8h10M7 12h10M7 16h4m1-12h9a2 2 0 012 2v10a2 2 0 01-2 2H3a2 2 0 01-2-2V6a2 2 0 012-2h9z" />
              <span>Testimonials</span>
            </a>
            <a href="#contact" className={navLinkClasses}>
              <Icon path="M3 8l7.842 5.228A2 2 0 0012 13a2 2 0 001.158-.228L21 8M3 8a2 2 0 012-2h14a2 2 0 012 2v12a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" />
              <span>Contact</span>
            </a>
          </div>

          {/* Mobile Menu Button - Icon color adjusted */}
          <button
            className="md:hidden p-2 rounded-full text-indigo-400 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-150"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation - Background is light for contrast when menu opens */}
        {isMenuOpen && (
          <div id="mobile-menu" className="md:hidden border-t border-gray-700 bg-white rounded-b-xl px-2 pt-2 pb-4 shadow-2xl">
            <div className="flex flex-col space-y-2">
              <a href="#about" className={mobileNavLinkClasses} onClick={() => setIsMenuOpen(false)}>
                <Icon path="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-5m-4 6h4m-4 4h4m-8-8v-3m0 3a2 2 0 100-4 2 2 0 000 4zm16 0a2 2 0 100-4 2 2 0 000 4z" />
                <span>About</span>
              </a>
              <a href="#testimonials" className={mobileNavLinkClasses} onClick={() => setIsMenuOpen(false)}>
                <Icon path="M7 8h10M7 12h10M7 16h4m1-12h9a2 2 0 012 2v10a2 2 0 01-2 2H3a2 2 0 01-2-2V6a2 2 0 012-2h9z" />
                <span>Testimonials</span>
              </a>
              {/* Highlight contact link inside the light mobile menu */}
              <a href="#contact" className={`${mobileNavLinkClasses} bg-indigo-50 text-indigo-700 hover:bg-indigo-100 font-medium`} onClick={() => setIsMenuOpen(false)}>
                <Icon path="M3 8l7.842 5.228A2 2 0 0012 13a2 2 0 001.158-.228L21 8M3 8a2 2 0 012-2h14a2 2 0 012 2v12a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" />
                <span>Contact</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;