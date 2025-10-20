import React from 'react';
import logo from '../assets/ck.png';

const Loader = ({ onFinish }) => {
  React.useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 flex items-center justify-center z-50">
      <div className="text-center">
        {/* Logo with wave animation */}
        <div className="mb-8">
          <img 
            src={logo} 
            alt="Coach Logo" 
            className="w-24 h-24 mx-auto animate-wave"
          />
        </div>
        
        {/* Loading text */}
        <h2 className="text-2xl font-bold text-white mb-8 animate-fade-in">
          Karemera Jean Claude
        </h2>
        
        {/* Three animated dots */}
        <div className="flex justify-center space-x-2">
          <div className="w-4 h-4 bg-white rounded-full animate-bounce-slow"></div>
          <div className="w-4 h-4 bg-white rounded-full animate-bounce-slow" style={{ animationDelay: '0.2s' }}></div>
          <div className="w-4 h-4 bg-white rounded-full animate-bounce-slow" style={{ animationDelay: '0.4s' }}></div>
        </div>
        
        {/* Wave line animation */}
        <div className="mt-8 flex justify-center">
          <div className="flex space-x-1">
            {[...Array(7)].map((_, i) => (
              <div 
                key={i}
                className="w-1 bg-white rounded-full animate-pulse-slow"
                style={{ 
                  height: `${20 + i * 8}px`,
                  animationDelay: `${i * 0.1}s`
                }}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
