import React from "react";

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="bg-white p-8 rounded-xl shadow-lg">
      <div className="flex items-center">
        <img className="h-12 w-12 rounded-full object-cover" src={testimonial.image} alt={testimonial.name} />
        <div className="ml-4">
          <h4 className="text-lg font-medium text-gray-900">{testimonial.name}</h4>
          <p className="text-gray-500">{testimonial.role}</p>
        </div>
      </div>
      <p className="mt-6 text-gray-600">"{testimonial.quote}"</p>
    </div>
  );
};

export default TestimonialCard;
