import React from 'react';
import './index.css'; // Adjust if your CSS file is named differently
import home from './assets/2.png';

const Mainfile = () => {
  return (
    <div className="relative flex flex-col lg:flex-row items-center min-h-screen bg-[#0c2b40] text-white px-4 sm:px-8 lg:px-20 py-32 sm:py-16 lg:py-32">
      {/* Left Text Section */}
      <div className="flex flex-col space-y-6 lg:w-1/2 text-left md:pl-8 lg:pr-8">
        <h1 className="text-6xl sm:text-6xl md:text-7xl lg:text-7xl font-light leading-tight text-[#0facc2] font-[YAFdJi-0PQg 0]">
          IT Solutions<br /> that transform<br /> your business
        </h1>
        <button className="mt-6 sm:mt-8 px-4 sm:px-6 py-2 sm:py-4 w-36 sm:w-40 border border-[#0e95ab] text-[#0e859a] font-[YAFdJi-0PQg 0] rounded-full hover:bg-[#6EE3F5] hover:text-[#0D3B66] transition-colors duration-300 text-xs sm:text-sm">
          Learn More
        </button>
      </div>

      {/* Right Image Section */}
      <div className="lg:absolute lg:-right-36 lg:top-8 lg:bottom-8 hidden lg:block lg:w-1/2">
        <img
          src={home}
          alt="Cornered"
          className="h-full object-cover rounded-lg"
        />
      </div>
    </div>
  );
};

export default Mainfile;