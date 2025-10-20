import React, { useState, useEffect, useRef } from 'react';

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const sliderRef = useRef(null);
  const mobileSliderRef = useRef(null);

  const testimonials = [
    {
      name: "FERWABA",
      quote: "Coach Karemera brings discipline and structure to every team he touches."
    },
    {
      name: "Rusizi BBC",
      quote: "His leadership helped us reach new competitive levels."
    },
    {
      name: "Espoire BBC",
      quote: "A mentor who understands both strategy and player development."
    },
    {
      name: "IPRC Musanze",
      quote: "He's a coach who builds character as much as skill."
    },
    {
      name: "Saint Kizito Save",
      quote: "Coach Karemera inspires youth with passion and professionalism."
    },
    {
      name: "Izere Zeby",
      quote: "He taught me how to believe in my game."
    },
    {
      name: "Mugisha Kevin",
      quote: "Coach Karemera helped me grow mentally and tactically."
    },
    {
      name: "Byiringiro Danny",
      quote: "His training sessions are intense and transformative."
    },
    {
      name: "Mugabe Herve",
      quote: "He's more than a coach — he's a visionary."
    }
  ];

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused) {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      }
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, [isPaused, testimonials.length]);

  // Smooth scroll to current testimonial for both desktop and mobile
  useEffect(() => {
    const scrollToTestimonial = (container, cardSelector) => {
      if (container) {
        const cards = container.querySelectorAll(cardSelector);
        
        if (cards[currentIndex]) {
          const card = cards[currentIndex];
          const containerWidth = container.clientWidth;
          const cardWidth = card.offsetWidth + 24; // width + gap (space-x-6 = 24px)
          const cardLeft = card.offsetLeft;
          const scrollPosition = Math.max(0, cardLeft - (containerWidth / 2) + (cardWidth / 2));
          
          container.scrollTo({
            left: scrollPosition,
            behavior: 'smooth'
          });
        }
      }
    };

    // Scroll desktop slider
    scrollToTestimonial(sliderRef.current, '.testimonial-card');
    // Scroll mobile slider
    scrollToTestimonial(mobileSliderRef.current, '.mobile-testimonial-card');
  }, [currentIndex]);

  return (
    <section id="testimonials" className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What They Say</h2>
          <p className="text-lg md:text-xl text-gray-600 px-4">Testimonials from players and organizations</p>
        </div>
        
        {/* Mobile Horizontal Sliding Layout */}
        <div className="block md:hidden relative">
          <div 
            ref={mobileSliderRef}
            className="overflow-x-hidden scrollbar-hide"
            onTouchStart={() => setIsPaused(true)}
            onTouchEnd={() => setIsPaused(false)}
          >
            <div className="flex space-x-4 pb-4" style={{ width: 'max-content' }}>
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index}
                  className={`mobile-testimonial-card flex-shrink-0 w-72 bg-gray-50 p-6 rounded-xl card-shadow hover-scale transition-all duration-500 ${
                    index === currentIndex ? 'transform scale-105 shadow-xl' : 'opacity-80'
                  }`}
                >
                  <div className="mb-4">
                    <div className="flex items-center mb-4">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold transition-all duration-500 ${
                        index === currentIndex ? 'bg-blue-700 scale-110' : 'bg-blue-600'
                      }`}>
                        {testimonial.name.charAt(0)}
                      </div>
                      <div className="ml-3">
                        <h4 className={`font-semibold transition-all duration-500 ${
                          index === currentIndex ? 'text-gray-900 text-base' : 'text-gray-700 text-sm'
                        }`}>
                          {testimonial.name}
                        </h4>
                      </div>
                    </div>
                    <p className={`italic leading-relaxed transition-all duration-500 ${
                      index === currentIndex ? 'text-gray-800 text-base' : 'text-gray-600 text-sm'
                    }`}>
                      "{testimonial.quote}"
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Mobile Navigation Dots */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-blue-600 w-6' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Auto-sliding Horizontal Testimonials for Desktop */}
        <div className="hidden md:block relative">
          <div 
            ref={sliderRef}
            className="overflow-x-hidden scrollbar-hide"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="flex space-x-6 pb-4" style={{ width: 'max-content' }}>
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index}
                  className={`testimonial-card flex-shrink-0 w-80 bg-gray-50 p-8 rounded-xl card-shadow hover-scale transition-all duration-500 ${
                    index === currentIndex ? 'transform scale-105 shadow-xl' : 'opacity-80'
                  }`}
                >
                  <div className="mb-6">
                    <div className="flex items-center mb-4">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold transition-all duration-500 ${
                        index === currentIndex ? 'bg-blue-700 scale-110' : 'bg-blue-600'
                      }`}>
                        {testimonial.name.charAt(0)}
                      </div>
                      <div className="ml-4">
                        <h4 className={`font-semibold transition-all duration-500 ${
                          index === currentIndex ? 'text-gray-900 text-lg' : 'text-gray-700'
                        }`}>
                          {testimonial.name}
                        </h4>
                      </div>
                    </div>
                    <p className={`italic leading-relaxed transition-all duration-500 ${
                      index === currentIndex ? 'text-gray-800 text-lg' : 'text-gray-600'
                    }`}>
                      "{testimonial.quote}"
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation Dots */}
          <div className="flex justify-center mt-8 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-blue-600 w-8' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          {/* Auto-slide indicator */}
          <div className="flex justify-center mt-4">
            <div className="flex items-center space-x-2 text-sm text-gray-500">
              <div className={`w-2 h-2 rounded-full ${isPaused ? 'bg-red-400' : 'bg-green-400 animate-pulse'}`}></div>
              <span>{isPaused ? 'Paused' : 'Auto-sliding'}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
