import React from 'react';
import photo1 from '../assets/photo1.jpg';
import photo2 from '../assets/photo2.jpg';

const ProfileSection = () => {
  return (
    <section id="about" className="py-16 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Profile Text - Always First */}
          <div className="animate-slide-left">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 md:mb-8">Professional Profile</h2>
            <div className="bg-white p-6 md:p-8 rounded-xl card-shadow">
              <p className="text-base md:text-lg leading-relaxed text-gray-700 space-y-4">
                <span className="block">
                  <strong>Karemera Jean Claude</strong> is a recognised Rwandan basketball coach with formal training and international accreditation. 
                </span>
                <span className="block">
                  He participated in the <strong>2018 Level II coaching course</strong> organised by the Rwanda National Olympic & Sports Committee, underlining his commitment to advanced coaching skills.
                </span>
                <span className="block">
                  He has been affiliated with clubs such as <strong>Rusizi BBC</strong> and <strong>Espoir</strong> in Rwanda, showing active involvement at the national level.
                </span>
                <span className="block">
                  His name appears on <strong>FIBA LiveStats match sheets</strong> — indicating official recognition by FIBA in game accreditation — and his profile is acknowledged on Afrobasket and Rwandan sports media.
                </span>
                <span className="block">
                  Leveraging a <strong>licence/serial number (202100055)</strong> — presumably from FIBA's WABC coach registry — he is positioned among the globally-registered coaching professionals, further demonstrating his credentials on both national and international stages.
                </span>
              </p>
            </div>
          </div>
          
          {/* Photos - Always Second */}
          <div className="animate-fade-in mt-8 lg:mt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 md:gap-6">
              <div className="relative">
                <img 
                  src={photo1} 
                  alt="Karemera Jean Claude" 
                  className="w-full h-64 sm:h-72 md:h-80 object-cover rounded-xl card-shadow hover-scale"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 rounded-xl"></div>
              </div>
              <div className="relative">
                <img 
                  src={photo2} 
                  alt="Karemera Jean Claude" 
                  className="w-full h-64 sm:h-72 md:h-80 object-cover rounded-xl card-shadow hover-scale"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 rounded-xl"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;
