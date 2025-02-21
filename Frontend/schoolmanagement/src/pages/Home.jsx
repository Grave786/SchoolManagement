// import React, { useState, useEffect } from "react";
// import { FiMenu, FiX } from "react-icons/fi";
// import { FaGraduationCap, FaChalkboardTeacher, FaUserGraduate, FaBook, FaChartLine, FaCalendarAlt } from "react-icons/fa";

// const Home = () => {
//   const [currentTestimonial, setCurrentTestimonial] = useState(0);

//   const testimonials = [
//     {
//       id: 1,
//       name: "Sarah Johnson",
//       role: "School Principal",
//       quote: "This platform has revolutionized how we manage our school operations. Highly recommended!",
//       image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330"
//     },
//     {
//       id: 2,
//       name: "Michael Chen",
//       role: "Teacher",
//       quote: "The interface is intuitive and makes daily tasks much more efficient.",
//       image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
//     },
//     {
//       id: 3,
//       name: "Emily Roberts",
//       role: "Administrator",
//       quote: "Outstanding support and features that truly understand educational needs.",
//       image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80"
//     }
//   ];

//   const features = [
//     { icon: <FaGraduationCap />, title: "Student Management", description: "Track student progress and attendance effortlessly" },
//     { icon: <FaChalkboardTeacher />, title: "Teacher Portal", description: "Streamline classroom management and grading" },
//     { icon: <FaUserGraduate />, title: "Parent Dashboard", description: "Keep parents informed and engaged" },
//     { icon: <FaBook />, title: "Curriculum Planning", description: "Organize and plan curriculum efficiently" },
//     { icon: <FaChartLine />, title: "Performance Analytics", description: "Generate insightful reports and analytics" },
//     { icon: <FaCalendarAlt />, title: "Schedule Management", description: "Manage timetables and events seamlessly" }
//   ];

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
//     }, 5000);
//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <div className="min-h-screen bg-gray-50">

//       {/* Hero Section */}
//       <div className="relative bg-gray-900">
//         <div className="absolute inset-0">
//           <img
//             className="w-full h-full object-cover"
//             src="https://images.unsplash.com/photo-1509062522246-3755977927d7"
//             alt="Education Background"
//           />
//           <div className="absolute inset-0 bg-gray-900 opacity-75"></div>
//         </div>
//         <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
//           <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">Transform Your School Management</h1>
//           <p className="mt-6 text-xl text-gray-300 max-w-3xl">Streamline administrative tasks, enhance communication, and improve learning outcomes with our comprehensive school management solution.</p>
//           <div className="mt-10">
//             <button className="bg-primary-600 hover:bg-primary-700 text-white font-bold py-3 px-8 rounded-xl transition duration-300">Get Started Today</button>
//           </div>
//         </div>
//       </div>

//       {/* Features Section */}
//       <div id="features" className="py-24 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center">
//             <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Powerful Features for Modern Education</h2>
//             <p className="mt-4 text-lg text-gray-500">Everything you need to manage your educational institution effectively.</p>
//           </div>
//           <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
//             {features.map((feature, index) => (
//               <div key={index} className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
//                 <div className="text-primary-600 text-3xl">{feature.icon}</div>
//                 <h3 className="mt-4 text-lg font-medium text-gray-900">{feature.title}</h3>
//                 <p className="mt-2 text-gray-500">{feature.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Testimonials Section */}
//       <div id="testimonials" className="py-24 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <h2 className="text-3xl font-extrabold text-center text-gray-900 sm:text-4xl">What Our Users Say</h2>
//           <div className="mt-20">
//             <div className="relative">
//               {testimonials.map((testimonial, index) => (
//                 <div
//                   key={testimonial.id}
//                   className={`transition-opacity duration-500 ${index === currentTestimonial ? "opacity-100" : "opacity-0 absolute top-0 left-0"}`}
//                 >
//                   <div className="bg-white p-8 rounded-xl shadow-lg">
//                     <div className="flex items-center">
//                       <img
//                         className="h-12 w-12 rounded-full object-cover"
//                         src={testimonial.image}
//                         alt={testimonial.name}
//                       />
//                       <div className="ml-4">
//                         <h4 className="text-lg font-medium text-gray-900">{testimonial.name}</h4>
//                         <p className="text-gray-500">{testimonial.role}</p>
//                       </div>
//                     </div>
//                     <p className="mt-6 text-gray-600">"{testimonial.quote}"</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>

      // {/* Pricing Section */}
      // <div id="pricing" className="py-24 bg-white">
      //   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      //     <h2 className="text-3xl font-extrabold text-center text-gray-900 sm:text-4xl">Simple, Transparent Pricing</h2>
      //     <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
      //       {/* Basic Plan */}
      //       <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
      //         <h3 className="text-2xl font-bold text-gray-900">Basic</h3>
      //         <p className="mt-4 text-gray-500">Perfect for small schools</p>
      //         <p className="mt-8">
      //           <span className="text-4xl font-extrabold text-gray-900">$99</span>
      //           <span className="text-gray-500">/month</span>
      //         </p>
      //         <ul className="mt-8 space-y-4">
      //           <li className="flex items-center">
      //             <span className="text-green-500">✓</span>
      //             <span className="ml-2">Up to 500 students</span>
      //           </li>
      //           <li className="flex items-center">
      //             <span className="text-green-500">✓</span>
      //             <span className="ml-2">Basic reporting</span>
      //           </li>
      //           <li className="flex items-center">
      //             <span className="text-green-500">✓</span>
      //             <span className="ml-2">Email support</span>
      //           </li>
      //         </ul>
      //         <button className="mt-8 w-full bg-primary-600 hover:bg-primary-700 text-white font-bold py-2 px-4 rounded-xl transition duration-300">Get Started</button>
      //       </div>

      //       {/* Pro Plan */}
      //       <div className="bg-primary-600 p-8 rounded-xl shadow-lg transform scale-105">
      //         <h3 className="text-2xl font-bold text-white">Pro</h3>
      //         <p className="mt-4 text-primary-100">Best for growing institutions</p>
      //         <p className="mt-8">
      //           <span className="text-4xl font-extrabold text-white">$199</span>
      //           <span className="text-primary-100">/month</span>
      //         </p>
      //         <ul className="mt-8 space-y-4 text-white">
      //           <li className="flex items-center">
      //             <span>✓</span>
      //             <span className="ml-2">Up to 2000 students</span>
      //           </li>
      //           <li className="flex items-center">
      //             <span>✓</span>
      //             <span className="ml-2">Advanced analytics</span>
      //           </li>
      //           <li className="flex items-center">
      //             <span>✓</span>
      //             <span className="ml-2">24/7 support</span>
      //           </li>
      //         </ul>
      //         <button className="mt-8 w-full bg-white text-primary-600 hover:bg-gray-50 font-bold py-2 px-4 rounded-xl transition duration-300">Get Started</button>
      //       </div>

      //       {/* Enterprise Plan */}
      //       <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
      //         <h3 className="text-2xl font-bold text-gray-900">Enterprise</h3>
      //         <p className="mt-4 text-gray-500">Custom solutions for large institutions</p>
      //         <p className="mt-8">
      //           <span className="text-4xl font-extrabold text-gray-900">Custom</span>
      //         </p>
      //         <ul className="mt-8 space-y-4">
      //           <li className="flex items-center">
      //             <span className="text-green-500">✓</span>
      //             <span className="ml-2">Unlimited students</span>
      //           </li>
      //           <li className="flex items-center">
      //             <span className="text-green-500">✓</span>
      //             <span className="ml-2">Custom features</span>
      //           </li>
      //           <li className="flex items-center">
      //             <span className="text-green-500">✓</span>
      //             <span className="ml-2">Dedicated support</span>
      //           </li>
      //         </ul>
      //         <button className="mt-8 w-full bg-primary-600 hover:bg-primary-700 text-white font-bold py-2 px-4 rounded-xl transition duration-300">Contact Sales</button>
      //       </div>
      //     </div>
      //   </div>
      // </div>
//     </div>
//   );
// };

// export default Home;



import React from "react";
import HeroSection from "../Components/HeroSection";
import FeaturesSection from "../Components/FeaturesSection";
import TestimonialsSection from "../Components/TestimonialsSection";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <HeroSection />
      <FeaturesSection />
      <TestimonialsSection />
        {/* Pricing Section */}
        <div id="pricing" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-center text-gray-900 sm:text-4xl">Simple, Transparent Pricing</h2>
          <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Basic Plan */}
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900">Basic</h3>
              <p className="mt-4 text-gray-500">Perfect for small schools</p>
              <p className="mt-8">
                <span className="text-4xl font-extrabold text-gray-900">$99</span>
                <span className="text-gray-500">/month</span>
              </p>
              <ul className="mt-8 space-y-4">
                <li className="flex items-center">
                  <span className="text-green-500">✓</span>
                  <span className="ml-2">Up to 500 students</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-500">✓</span>
                  <span className="ml-2">Basic reporting</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-500">✓</span>
                  <span className="ml-2">Email support</span>
                </li>
              </ul>
              <button className="mt-8 w-full bg-primary-600 hover:bg-primary-700 text-white font-bold py-2 px-4 rounded-xl transition duration-300">Get Started</button>
            </div>

            {/* Pro Plan */}
            <div className="bg-primary-600 p-8 rounded-xl shadow-lg transform scale-105">
              <h3 className="text-2xl font-bold text-white">Pro</h3>
              <p className="mt-4 text-primary-100">Best for growing institutions</p>
              <p className="mt-8">
                <span className="text-4xl font-extrabold text-white">$199</span>
                <span className="text-primary-100">/month</span>
              </p>
              <ul className="mt-8 space-y-4 text-white">
                <li className="flex items-center">
                  <span>✓</span>
                  <span className="ml-2">Up to 2000 students</span>
                </li>
                <li className="flex items-center">
                  <span>✓</span>
                  <span className="ml-2">Advanced analytics</span>
                </li>
                <li className="flex items-center">
                  <span>✓</span>
                  <span className="ml-2">24/7 support</span>
                </li>
              </ul>
              <button className="mt-8 w-full bg-white text-primary-600 hover:bg-gray-50 font-bold py-2 px-4 rounded-xl transition duration-300">Get Started</button>
            </div>

            {/* Enterprise Plan */}
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900">Enterprise</h3>
              <p className="mt-4 text-gray-500">Custom solutions for large institutions</p>
              <p className="mt-8">
                <span className="text-4xl font-extrabold text-gray-900">Custom</span>
              </p>
              <ul className="mt-8 space-y-4">
                <li className="flex items-center">
                  <span className="text-green-500">✓</span>
                  <span className="ml-2">Unlimited students</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-500">✓</span>
                  <span className="ml-2">Custom features</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-500">✓</span>
                  <span className="ml-2">Dedicated support</span>
                </li>
              </ul>
              <button className="mt-8 w-full bg-primary-600 hover:bg-primary-700 text-white font-bold py-2 px-4 rounded-xl transition duration-300">Contact Sales</button>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Home;
