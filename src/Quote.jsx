import React from 'react';
import './index.css';
import backgroundImage from './assets/5.png';

const Quote = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '60vh',
        position: 'relative',
      }}
      className="flex items-center justify-center text-white p-4" 
    >
      {/* Overlay to increase opacity effect */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adjust opacity here
        }}
      ></div>

      <div className="relative p-10 max-w-3xl text-center">
        <p className="text-lg text-[#0fb8ce] leading-relaxed" style={{ fontSize: '28px' }}>
          At Errands, we provide tailored solutions to elevate your goals with 24/7 expert support and peace of mind.
          Our global reach and cutting-edge technology ensure you stay ahead in a competitive market.
          Choose us to transform your business—your success is our success.
        </p>
      </div>
    </div>
  );
};

export default Quote;
