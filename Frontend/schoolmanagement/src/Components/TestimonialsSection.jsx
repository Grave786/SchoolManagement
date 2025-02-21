import React, { useState, useEffect } from "react";
import TestimonialCard from "./TestimonialCard";

const testimonials = [
  { id: 1, name: "Sarah Johnson", role: "School Principal", quote: "This platform has revolutionized how we manage our school operations. Highly recommended!", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330" },
  { id: 2, name: "Michael Chen", role: "Teacher", quote: "The interface is intuitive and makes daily tasks much more efficient.", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e" },
  { id: 3, name: "Emily Roberts", role: "Administrator", quote: "Outstanding support and features that truly understand educational needs.", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80" }
];

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div id="testimonials" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-center text-gray-900 sm:text-4xl">What Our Users Say</h2>
        <div className="mt-20">
          <TestimonialCard testimonial={testimonials[currentTestimonial]} />
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
