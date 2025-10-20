import React, { useState, useEffect, useRef } from 'react';

const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skills = [
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
      ),
      title: "Strategic Leadership",
      description: "Transforming teams through visionary coaching and strategic game planning that elevates performance.",
      gradient: "skill-card-gradient"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
        </svg>
      ),
      title: "Player Development",
      description: "Nurturing individual talents and building character through personalized mentorship and skill enhancement.",
      gradient: "skill-card-gradient-secondary"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
        </svg>
      ),
      title: "Tactical Excellence",
      description: "Advanced game analysis and tactical preparation that delivers winning strategies and competitive advantage.",
      gradient: "skill-card-gradient-third"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
        </svg>
      ),
      title: "Team Mentorship",
      description: "Building strong team bonds and fostering a culture of excellence through inspirational leadership.",
      gradient: "skill-card-gradient-fourth"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
        </svg>
      ),
      title: "Communication Excellence",
      description: "Clear, effective communication that motivates players and builds strong coach-athlete relationships.",
      gradient: "skill-card-gradient-fifth"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
        </svg>
      ),
      title: "Performance Analytics",
      description: "Data-driven insights and performance optimization that maximizes team potential and success rates.",
      gradient: "skill-card-gradient-sixth"
    }
  ];

  return (
    <section ref={sectionRef} className="py-16 md:py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-48 h-48 md:w-72 md:h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float"></div>
      <div className="absolute top-0 right-0 w-48 h-48 md:w-72 md:h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute -bottom-8 left-20 w-48 h-48 md:w-72 md:h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float" style={{ animationDelay: '4s' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6 animate-slide-up px-4">
            Coaching <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Excellence</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed animate-fade-in px-4">
            Dynamic basketball coaching skills that transform teams and elevate players to their highest potential
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`skill-card group ${skill.gradient} rounded-2xl p-6 md:p-8 text-white relative overflow-hidden ${
                isVisible ? 'stagger-fade-in' : 'opacity-0'
              }`}
              style={{
                animationDelay: `${index * 0.2}s`,
                animationFillMode: 'forwards'
              }}
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-20 transition-opacity duration-300"></div>
              
              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div className="w-12 h-12 md:w-16 md:h-16 bg-white bg-opacity-20 rounded-xl flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300">
                  {skill.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 group-hover:text-yellow-200 transition-colors duration-300">
                  {skill.title}
                </h3>

                {/* Description */}
                <p className="text-white text-opacity-90 leading-relaxed group-hover:text-opacity-100 transition-all duration-300 text-sm md:text-base">
                  {skill.description}
                </p>

                {/* Hover Effect Indicator */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-white bg-opacity-30 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </div>

              {/* Floating Elements */}
              <div className="absolute top-4 right-4 w-2 h-2 bg-white rounded-full opacity-30 group-hover:opacity-60 transition-opacity duration-300"></div>
              <div className="absolute bottom-4 right-4 w-1 h-1 bg-white rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* Bottom Stats/Impact */}
        <div className="mt-16 md:mt-20 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              { number: "FIBA", label: "Certified Coach" },
              { number: "Level II", label: "Accreditation" },
              { number: "10+", label: "Years Experience" },
              { number: "100%", label: "Team Success" }
            ].map((stat, index) => (
              <div 
                key={index}
                className={`text-center ${isVisible ? 'stagger-fade-in' : 'opacity-0'}`}
                style={{
                  animationDelay: `${(skills.length * 0.2) + (index * 0.1)}s`,
                  animationFillMode: 'forwards'
                }}
              >
                <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-600 mb-1 md:mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium text-sm md:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
