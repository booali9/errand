import React from 'react';
import './index.css';
import backgroundImage from './assets/About.png';

const About = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '60vh',
      }}
      className="flex items-center justify-center text-white px-8 py-1"  
    >
      <div className="p-10 rounded-lg max-w-3xl text-center">
        <h1 className="text-4xl lg:text-5xl text-[#0fb8ce] mb-8" style={{ fontSize: '36px' }}>
          Who We Are
        </h1>
        <p className="text-[#f8f9f9] text-sm" style={{ fontSize: '16px' }}>
          Welcome to our tech company! We specialize in empowering businesses and individuals
          with innovative digital solutions across a wide range of services. Our team of
          experienced professionals is passionate about bringing your ideas to life and
          enhancing your digital presence.
        </p>
        <p className="mt-4 text-sm" style={{ fontSize: '16px' }}>
          From <strong>web development</strong> that builds engaging, responsive websites to 
          <strong> mobile app development</strong> that brings seamless experiences to users, 
          we are committed to excellence in every project. We also offer <strong>video editing</strong> 
          services that help you tell your story visually, and <strong>creative writing</strong> 
          and <strong>blogging</strong> services to keep your audience engaged. 
          With our broad range of skills and dedication to quality, we’re here to support your digital needs.
        </p>
      </div>
    </div>
  );
};

export default About;
