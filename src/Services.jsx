import React from 'react';
import './index.css';
import service1 from './assets/Services1.png'; // Replace with your actual image path
import service2 from './assets/Services2.png';
import service3 from './assets/Services3.png';

const Services = () => {
  return (
    <div className="bg-[#0c2b40] text-white px-8 py-6 lg:px-16 lg:py-8 flex flex-col items-center">
      <h2 className="text-[#0ea0b5] text-center" style={{ fontSize: '32px', marginTop: '10px', marginBottom: '15px' }}>
        Our Services
      </h2>
      
      <div className="grid grid-cols-1  md:grid-cols-3 gap-6 max-w-5xl">
        {/* Service 1 */}
        <div className="flex flex-col items-center p-4 text-center">
          <img 
            src={service1} 
            alt="Managed IT Services" 
            className="w-full h-64 object-cover mb-3 max-w-[300px] mx-auto"
          />
          <h3 className="font-medium text-[#0ea0b5] mb-2" style={{ fontSize: '18px' }}>Managed IT Services</h3>
          <p className="text-sm text-[#f2f3f5]" style={{ fontSize: '14px' }}>
            Give a detailed description of the service being provided here.
          </p>
        </div>

        {/* Service 2 */}
        <div className="flex flex-col items-center p-4 rounded-lg text-center">
          <img 
            src={service2} 
            alt="IT Security" 
            className="w-full h-64 object-cover mb-3 max-w-[300px] mx-auto"
          />
          <h3 className="font-medium text-[#0ea0b5] mb-2" style={{ fontSize: '18px' }}>IT Security</h3>
          <p className="text-sm text-[#f2f3f5]" style={{ fontSize: '14px' }}>
            Give a detailed description of the service being provided here.
          </p>
        </div>

        {/* Service 3 */}
        <div className="flex flex-col items-center p-4 rounded-lg text-center">
          <img 
            src={service3} 
            alt="IT Consulting" 
            className="w-full h-64 object-cover mb-3 max-w-[300px] mx-auto"
          />
          <h3 className="font-medium text-[#0ea0b5] mb-2" style={{ fontSize: '18px' }}>IT Consulting</h3>
          <p className="text-sm text-[#f2f3f5]" style={{ fontSize: '14px' }}>
            Give a detailed description of the service being provided here.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
