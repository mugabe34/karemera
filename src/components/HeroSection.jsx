import React, { useState, useEffect } from 'react';

const HeroSection = () => {
  const [currentSentence, setCurrentSentence] = useState(0);
  
  const sentences = [
    "Empowering athletes to rise,",
    "lead, and leave a legacy —",
    "one game, one lesson,",
    "one season at a time."
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSentence((prev) => (prev + 1) % sentences.length);
    }, 3500);
    
    return () => clearInterval(interval);
  }, [sentences.length]);

  return (
    // Style Update: Using a dark background gradient (Indigo/Black) for a premium, sporty look.
    <section 
      className="py-24 md:py-32 text-white relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #0f172a 0%, #1e3a8a 100%)', // Dark Slate/Deep Indigo Gradient
      }}
    >
      {/* Basketball Background (Simulated via inline style for blur effect) */}
      {/* Note: In a real project, this image URL should point to your basketball image and be placed in a separate CSS file with filters/blur. */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "url('/basketball-texture.webp')", // Placeholder image path
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(10px) brightness(0.6)', // Apply blur and darken
          transform: 'scale(1.1)', // Helps hide blur edges
        }}
      ></div>
      
      {/* Purple/Indigo Blur Effect (Simulated 'purple-blur' and 'animate-float') */}
      <div 
        className="absolute w-48 h-48 md:w-96 md:h-96 rounded-full mix-blend-color-dodge"
        style={{
          top: '50%',
          right: '0',
          background: 'radial-gradient(circle, rgba(99, 102, 241, 0.7) 0%, rgba(30, 41, 59, 0) 70%)',
          animation: 'float-up 8s ease-in-out infinite',
        }}
      ></div>
      <div 
        className="absolute w-40 h-40 md:w-80 md:h-80 rounded-full mix-blend-color-dodge"
        style={{
          bottom: '0',
          left: '0',
          background: 'radial-gradient(circle, rgba(129, 140, 248, 0.5) 0%, rgba(30, 41, 59, 0) 70%)',
          animation: 'float-up 8s ease-in-out infinite',
          animationDelay: '3s'
        }}
      ></div>
      
      {/* Keyframes for the animation classes (Must be defined in a real CSS file for best results) */}
      <style>{`
        @keyframes typing { from { width: 0 } }
        @keyframes blink-caret { 50% { border-color: transparent; } }
        @keyframes float-up {
          0%, 100% { transform: translateY(0) translateX(0) rotate(0deg) scale(1); }
          25% { transform: translateY(-20px) translateX(10px) rotate(1deg) scale(1.05); }
          50% { transform: translateY(15px) translateX(-5px) rotate(-1deg) scale(0.95); }
          75% { transform: translateY(-10px) translateX(5px) rotate(0.5deg) scale(1.02); }
        }
        .typing-animation {
          border-right: 2px solid; 
          white-space: nowrap; 
          overflow: hidden; 
          animation: typing 2.5s steps(40, end), blink-caret 0.75s step-end infinite;
        }
        .animate-slide-up {
          animation: slideUp 1s ease-out forwards;
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="animate-slide-up">
          {/* Style Update: Added subtle shadow and tracking for professional look */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold mb-4 md:mb-6 px-4 tracking-tight text-shadow-lg">
            Karemera Jean Claude
          </h1>
          
          {/* Animated Sentences */}
          <div className="text-xl sm:text-2xl md:text-3xl font-light max-w-4xl mx-auto leading-snug h-20 sm:h-24 md:h-28 flex items-center justify-center px-4">
            <div className="min-h-[2.5rem] sm:min-h-[3rem] flex items-center">
              <p 
                key={currentSentence}
                // Updated class to reference the style block above
                className="typing-animation inline-block text-center text-indigo-400 font-medium"
              >
                {sentences[currentSentence]}
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Separator with Blur - Simplified, but kept for structure */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-2 relative">
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-32 opacity-30"></div>
      </div>
    </section>
  );
};

export default HeroSection;