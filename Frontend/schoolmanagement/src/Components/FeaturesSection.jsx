import React from "react";
import FeatureCard from "./FeatureCard";
import { FaGraduationCap, FaChalkboardTeacher, FaUserGraduate, FaBook, FaChartLine, FaCalendarAlt } from "react-icons/fa";

const features = [
  { icon: <FaGraduationCap />, title: "Student Management", description: "Track student progress and attendance effortlessly" },
  { icon: <FaChalkboardTeacher />, title: "Teacher Portal", description: "Streamline classroom management and grading" },
  { icon: <FaUserGraduate />, title: "Parent Dashboard", description: "Keep parents informed and engaged" },
  { icon: <FaBook />, title: "Curriculum Planning", description: "Organize and plan curriculum efficiently" },
  { icon: <FaChartLine />, title: "Performance Analytics", description: "Generate insightful reports and analytics" },
  { icon: <FaCalendarAlt />, title: "Schedule Management", description: "Manage timetables and events seamlessly" }
];

const FeaturesSection = () => {
  return (
    <div id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Powerful Features for Modern Education
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Everything you need to manage your educational institution effectively.
          </p>
        </div>
        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
