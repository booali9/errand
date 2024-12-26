import React from 'react';
import { GlobeAltIcon, ClipboardCheckIcon, DesktopComputerIcon } from '@heroicons/react/outline';

const Choose = () => {
  return (
    <div className="bg-[#253947] py-12 flex flex-col items-center text-center text-[#0fb7cd]">  {/* Reduced padding from py-20 to py-4 */}
      <h2 className="mb-12 text-4xl md:text-5xl" style={{ fontSize: '36px' }}>Why Choose Us</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16 max-w-6xl w-full px-4 justify-items-center">
        
        {/* Card 1 */}
        <div className="flex flex-col items-center bg-[#253947] border border-[#1c6e7f] rounded-[105px] h-[350px] w-[280px] p-8">
          <h3 className="text-lg mt-9 mb-8" style={{ fontSize: '20px' }}>We are<br /> global</h3>
          <GlobeAltIcon className="w-16 h-16 mb-8 text-[#0fb8ce]" />
          <p className="text-[#f9fafa] text-base" style={{ fontSize: '15px' }}>No matter where you are, we've got you covered.</p>
        </div>
        
        {/* Card 2 */}
        <div className="flex flex-col items-center bg-[#253947] border border-[#1c6e7f] rounded-[105px] h-[350px] w-[280px] p-8">
          <h3 className="text-lg mt-9 mb-8" style={{ fontSize: '20px' }}>We value <br /> our clients.</h3>
          <ClipboardCheckIcon className="w-16 h-16 mb-8 text-[#0fb8ce]" />
          <p className="text-[#f9fafa] text-base" style={{ fontSize: '15px' }}>Virtual assistance. Talk to us about any concerns, 24/7.</p>
        </div>
        
        {/* Card 3 */}
        <div className="flex flex-col items-center bg-[#253947] border border-[#1c6e7f] rounded-[105px] h-[350px] w-[280px] p-8">
          <h3 className="text-lg mt-9 mb-8" style={{ fontSize: '20px' }}>We use top-<br />rate systems.</h3>
          <DesktopComputerIcon className="w-16 h-16 mb-8 text-[#0fb8ce]" />
          <p className="text-[#f9fafa] text-base" style={{ fontSize: '15px' }}>Easy peasy UI. Our interface is simple and easy to use.</p>
        </div>
        
      </div>
    </div>
  );
};

export default Choose;
