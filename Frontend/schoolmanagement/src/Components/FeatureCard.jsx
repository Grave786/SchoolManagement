import React from "react";

const FeatureCard = ({ feature }) => {
  return (
    <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="text-primary-600 text-3xl">{feature.icon}</div>
      <h3 className="mt-4 text-lg font-medium text-gray-900">{feature.title}</h3>
      <p className="mt-2 text-gray-500">{feature.description}</p>
    </div>
  );
};

export default FeatureCard;
