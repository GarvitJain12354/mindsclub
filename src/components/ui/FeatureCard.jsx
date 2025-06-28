import React from 'react';

const FeatureCard = ({ emoji, title, description }) => {
  return (
    <div className="bg-blue-800 bg-opacity-50 p-8 rounded-xl">
      <div className="text-4xl mb-4">{emoji}</div>
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default FeatureCard;