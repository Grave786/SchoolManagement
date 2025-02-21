import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-orange-50 to-orange-100 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Quick Links Column */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {["About Us", "Admission", "Academics", "Contact"].map((link) => (
                <li key={link}>
                  <button
                    className="text-gray-600 hover:text-[#FF8559] transition-colors duration-300"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information Column */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Contact Us</h3>
            <div className="space-y-2">
              <p className="text-gray-600">
                123 Education Street,
                <br />
                Learning District,
                <br />
                Knowledge City - 12345
              </p>
              <p className="text-[#FF8559]">Phone: +1 (555) 123-4567</p>
              <p className="text-[#FF8559]">Email: info@schoolname.edu</p>
            </div>
          </div>

          {/* Social Media Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              {[
                { icon: FaFacebookF, label: "Facebook" },
                { icon: FaTwitter, label: "Twitter" },
                { icon: FaInstagram, label: "Instagram" },
                { icon: FaLinkedinIn, label: "LinkedIn" },
              ].map((social) => (
                <button
                  key={social.label}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-[#FF8559] hover:bg-[#FFB578] text-white flex items-center justify-center transition-colors duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </button>
              ))}
            </div>
          </div>

          {/* Copyright and Legal Column */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Legal</h3>
            <div className="space-y-2 text-sm text-gray-500">
              <p>© {currentYear} School Name. All rights reserved.</p>
              <div className="space-y-1">
                <button className="hover:text-[#FF8559] transition-colors duration-300">
                  Privacy Policy
                </button>
                <br />
                <button className="hover:text-[#FF8559] transition-colors duration-300">
                  Terms of Service
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;