import React from 'react';

const TestimonialCard = ({ initials, name, memberSince, testimonial }) => {
  return (
    <div className="bg-blue-800 bg-opacity-50 p-8 rounded-xl">
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-xl font-bold mr-4">
          {initials}
        </div>
        <div>
          <h3 className="text-xl font-bold">{name}</h3>
          <p className="text-blue-300">Member since {memberSince}</p>
        </div>
      </div>
      <p className="italic">"{testimonial}"</p>
    </div>
  );
};

export default TestimonialCard;