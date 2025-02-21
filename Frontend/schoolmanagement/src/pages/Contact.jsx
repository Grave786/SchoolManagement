import { useState } from "react";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "General Inquiry",
    message: ""
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const departments = [
    {
      name: "Admissions",
      email: "admissions@school.edu",
      phone: "(555) 123-4567"
    },
    {
      name: "Academic Affairs",
      email: "academic@school.edu",
      phone: "(555) 123-4568"
    },
    {
      name: "Student Support",
      email: "support@school.edu",
      phone: "(555) 123-4569"
    },
    {
      name: "Administrative Office",
      email: "admin@school.edu",
      phone: "(555) 123-4570"
    }
  ];

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (formData.phone && !/^\d{10}$/.test(formData.phone.replace(/\D/g, ""))) {
      newErrors.phone = "Invalid phone number";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      try {
        // Simulated API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        setSubmitStatus("success");
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          subject: "General Inquiry",
          message: ""
        });
      } catch (error) {
        setSubmitStatus("error");
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-lg text-gray-600">We're here to help and answer any questions you might have</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">School Information</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <FaMapMarkerAlt className="text-blue-600 mt-1 mr-3 text-xl" />
                  <div>
                    <p className="font-medium">Address</p>
                    <p className="text-gray-600">123 Education Lane</p>
                    <p className="text-gray-600">Learning City, ST 12345</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <FaPhone className="text-blue-600 mt-1 mr-3 text-xl" />
                  <div>
                    <p className="font-medium">Main Phone</p>
                    <p className="text-gray-600">(555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <FaEnvelope className="text-blue-600 mt-1 mr-3 text-xl" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-gray-600">info@school.edu</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <FaClock className="text-blue-600 mt-1 mr-3 text-xl" />
                  <div>
                    <p className="font-medium">Operating Hours</p>
                    <p className="text-gray-600">Monday - Friday: 8:00 AM - 5:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Department Contacts</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {departments.map((dept) => (
                  <div key={dept.name} className="p-4 bg-gray-50 rounded-lg">
                    <h3 className="font-medium text-gray-900">{dept.name}</h3>
                    <p className="text-gray-600 text-sm mt-2">{dept.phone}</p>
                    <p className="text-gray-600 text-sm">{dept.email}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Connect With Us</h2>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                  <FaFacebook className="text-2xl" />
                </a>
                <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                  <FaTwitter className="text-2xl" />
                </a>
                <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                  <FaInstagram className="text-2xl" />
                </a>
                <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                  <FaLinkedin className="text-2xl" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">Full Name *</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 ${errors.fullName ? 'border-red-500' : ''}`}
                />
                {errors.fullName && <p className="mt-1 text-sm text-red-600">{errors.fullName}</p>}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 ${errors.email ? 'border-red-500' : ''}`}
                />
                {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 ${errors.phone ? 'border-red-500' : ''}`}
                />
                {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                >
                  <option value="General Inquiry">General Inquiry</option>
                  <option value="Admissions">Admissions</option>
                  <option value="Academic Support">Academic Support</option>
                  <option value="Complaint">Complaint</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 ${errors.message ? 'border-red-500' : ''}`}
                ></textarea>
                {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message}</p>}
              </div>

              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </div>

              {submitStatus === "success" && (
                <div className="p-4 bg-green-50 border border-green-200 rounded-md">
                  <p className="text-green-600">Your message has been sent successfully!</p>
                </div>
              )}

              {submitStatus === "error" && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-md">
                  <p className="text-red-600">There was an error sending your message. Please try again.</p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
