import React, { useState, useEffect } from "react";
import { FaGraduationCap, FaTrophy, FaUsers, FaChalkboardTeacher } from "react-icons/fa";
import { motion } from "framer-motion";

const AboutUs = () => {
  const [counts, setCounts] = useState({
    students: 0,
    years: 0,
    awards: 0,
    faculty: 0
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCounts(prev => ({
        students: prev.students >= 5000 ? 5000 : prev.students + 50,
        years: prev.years >= 25 ? 25 : prev.years + 1,
        awards: prev.awards >= 100 ? 100 : prev.awards + 2,
        faculty: prev.faculty >= 200 ? 200 : prev.faculty + 5
      }));
    }, 50);

    return () => clearInterval(interval);
  }, []);

  const leaders = [
    {
      name: "Dr. Sarah Johnson",
      position: "Principal",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2",
      bio: "With over 20 years of experience in education leadership"
    },
    {
      name: "Prof. Michael Chen",
      position: "Vice Principal",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
      bio: "Specialized in curriculum development and student success"
    },
    {
      name: "Dr. Emily Williams",
      position: "Head of Academics",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956",
      bio: "Leading academic excellence initiatives"
    }
  ];

  const achievements = [
    { year: "2023", title: "National Excellence Award in STEM Education" },
    { year: "2022", title: "Best School for Innovation" },
    { year: "2021", title: "Outstanding Sports Achievement" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div
        className="relative h-screen bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1')`
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50">
          <div className="container mx-auto px-6 h-full flex items-center">
            <div className="text-white">
              <h1 className="text-5xl md:text-6xl font-bold mb-4">Excellence Academy</h1>
              <p className="text-xl md:text-2xl mb-8">Nurturing Minds, Shaping Futures</p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition duration-300"
              >
                Learn More
              </motion.button>
            </div>
          </div>
        </div>
      </div>

      {/* Mission and Vision */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Our Mission & Vision</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-gray-50 p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Mission</h3>
              <p className="text-gray-600">To provide exceptional education that empowers students to become innovative leaders and responsible global citizens.</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Vision</h3>
              <p className="text-gray-600">To be recognized globally as a center of academic excellence, fostering creativity, critical thinking, and character development.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 bg-blue-600">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-white text-center">
            <div>
              <FaUsers className="text-4xl mx-auto mb-4" />
              <div className="text-4xl font-bold mb-2">{counts.students}+</div>
              <div>Students</div>
            </div>
            <div>
              <FaGraduationCap className="text-4xl mx-auto mb-4" />
              <div className="text-4xl font-bold mb-2">{counts.years}</div>
              <div>Years of Excellence</div>
            </div>
            <div>
              <FaTrophy className="text-4xl mx-auto mb-4" />
              <div className="text-4xl font-bold mb-2">{counts.awards}</div>
              <div>Awards Won</div>
            </div>
            <div>
              <FaChalkboardTeacher className="text-4xl mx-auto mb-4" />
              <div className="text-4xl font-bold mb-2">{counts.faculty}</div>
              <div>Faculty Members</div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Our Leadership Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {leaders.map((leader, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="bg-white rounded-lg overflow-hidden shadow-lg"
              >
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{leader.name}</h3>
                  <p className="text-blue-600 mb-2">{leader.position}</p>
                  <p className="text-gray-600">{leader.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Our Achievements</h2>
          <div className="space-y-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-center bg-gray-50 p-6 rounded-lg shadow-md"
              >
                <div className="text-3xl font-bold text-blue-600 mr-8">{achievement.year}</div>
                <div className="text-xl">{achievement.title}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-8">Join Our Academic Community</h2>
          <p className="text-white text-xl mb-8">Take the first step towards academic excellence</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="bg-white text-blue-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition duration-300"
          >
            Apply Now
          </motion.button>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;