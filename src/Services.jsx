import React from 'react';
import './index.css';
import service1 from './assets/Services1.png'; // Replace with your actual image path
import service2 from './assets/Services2.png';
import service3 from './assets/Services3.png';

const Services = () => {
  return (
    <div className="min-h-screen bg-[#0c2b40] text-white px-8 py-8 lg:px-20 lg:py-32 flex flex-col items-center">
      <h2 className="text-[#0ea0b5] mb-6 text-center" style={{ fontSize: '36px' }}>Our Services</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl">
        {/* Service 1 */}
        <div className="flex flex-col items-center p-6 text-center">
          <img 
            src={service1} 
            alt="Website Development" 
            className="w-full h-64 object-cover mb-6 max-w-[300px] mx-auto"
          />
          <h3 className="font-medium text-[#0ea0b5] mb-2" style={{ fontSize: '21px' }}>Website Development</h3>
          <p className="text-sm text-[#f2f3f5]" style={{ fontSize: '18px' }}>We create stunning, user-friendly designs powered by seamless functionality. Our advanced technology ensures smooth navigation, responsiveness, and high performance for business growth.</p>
        </div>

        {/* Service 2 */}
        <div className="flex flex-col items-center p-6 rounded-lg text-center">
          <img 
            src={service2} 
            alt="Search Engine Marketing" 
            className="w-full h-64 object-cover mb-6 max-w-[300px] mx-auto"
          />
          <h3 className="font-medium text-[#0ea0b5] mb-2" style={{ fontSize: '21px' }}>Search Engine Marketing</h3>
          <p className="text-sm text-[#f2f3f5]" style={{ fontSize: '18px' }}>Dominate search engine platforms like Google with tailored marketing solutions. Boost and optimize performance with proven strategies designed to maximize online visibility and drive targeted traffic.</p>
        </div>

        {/* Service 3 */}
        <div className="flex flex-col items-center p-6 rounded-lg text-center">
          <img 
            src={service3} 
            alt="Social Media" 
            className="w-full h-64 object-cover mb-6 max-w-[300px] mx-auto"
          />
          <h3 className="font-medium text-[#0ea0b5] mb-2" style={{ fontSize: '21px' }}>Social Media</h3>
          <p className="text-sm text-[#f2f3f5]" style={{ fontSize: '18px' }}>From content creation to management, we craft compelling social media strategies that captivate your audience and build brand loyalty.</p>
        </div>
         {/* Service 4 */}
        <div className="flex flex-col items-center p-6 rounded-lg text-center">
          <img 
            src={service3} 
            alt="Social Media" 
            className="w-full h-64 object-cover mb-6 max-w-[300px] mx-auto"
          />
          <h3 className="font-medium text-[#0ea0b5] mb-2" style={{ fontSize: '21px' }}>Social Media</h3>
          <p className="text-sm text-[#f2f3f5]" style={{ fontSize: '18px' }}>From content creation to management, we craft compelling social media strategies that captivate your audience and build brand loyalty.</p>
        </div>
      </div>
    </div>
  );
};

export default Services;