import React from 'react';
import { Avatar } from '@mui/material';

const testimonials = [
  {
    name: 'Esha Dharohar',
    company: 'Wright Co.',
    image: '/esha.png',
    quote: "Testimonials are short quotes from people who love your brand. It's a great way to convince customers to try your services."
  },
  {
    name: 'Vihaan Kumar',
    company: 'Planwell Financial',
    image: '/vihaan.png',
    quote: "Testimonials are short quotes from people who love your brand. It's a great way to convince customers to try your services."
  },
  {
    name: 'Raju Singh',
    company: 'Harmeet Express',
    image: '/raju.png',
    quote: "Testimonials are short quotes from people who love your brand. It's a great way to convince customers to try your services."
  }
];

const Review = () => {
  return (
    <section className="bg-[#253947] py-4 text-center">  {/* Adjusted padding for balanced space */}
      <h2 className="text-3xl mt-8 mb-8 text-[#0fb8ce]" style={{ fontSize: '36px' }}>
        Client Testimonials
      </h2>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4 md:px-0">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-[#253947] p-6 rounded-lg text-teal-200 flex flex-col items-center md:items-start text-center md:text-left"
          >       
            <div className="flex flex-col items-center md:flex-row md:items-start mb-4">
              {/* Avatar */}
              <Avatar
                src={testimonial.image}
                alt={testimonial.name}
                className="w-16 h-16 mb-4 md:mb-0 md:mr-4"
                style={{ fontSize: '36px' }}
              />
              {/* Name and Company */}
              <div className="text-center md:text-left text-[#11afc4]" style={{ fontSize: '16px' }}>
                <h3 className="text-lg" style={{ fontSize: '16px' }}>
                  {testimonial.name}
                </h3>
                <p className="text-sm text-[#11afc4]" style={{ fontSize: '16px' }}>
                  {testimonial.company}
                </p>
              </div>
              
            </div>
            {/* Quote */}
            <p className="mt-4 text-[#dbdee1]" style={{ fontSize: '16px' }}>
              {testimonial.quote}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Review;
