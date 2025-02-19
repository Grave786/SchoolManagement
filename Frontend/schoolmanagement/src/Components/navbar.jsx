import { useState } from "react";
import { FaBars, FaTimes, FaUser, FaBell, FaSun, FaMoon } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(3);
  const { isAuthenticated, userRole, logout } = useAuth();

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  const links = [
    { title: "Home", href: "#" },
    { title: "About Us", href: "#" },
    { title: "Contact", href: "#" }
  ];

  const roleLinks = {
    admin: [
      { title: "User Management", href: "#" },
      { title: "School Configuration", href: "#" },
      { title: "Reports", href: "#" },
      { title: "Analytics", href: "#" }
    ],
    teacher: [
      { title: "Class Management", href: "#" },
      { title: "Student Grades", href: "#" },
      { title: "Attendance Tracking", href: "#" },
      { title: "Schedule", href: "#" }
    ],
    student: [
      { title: "My Courses", href: "#" },
      { title: "Grades", href: "#" },
      { title: "Attendance", href: "#" },
      { title: "Profile", href: "#" }
    ]
  };

  const getRoleSpecificLinks = () => {
    return isAuthenticated ? roleLinks[userRole] || [] : [];
  };

  return (
    <nav className={`fixed w-full z-50 top-0 left-0 ${isDarkMode ? "bg-gray-900 text-white" : "bg-white text-gray-800"} shadow-lg`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img
              className="h-8 w-8"
              src="https://images.unsplash.com/photo-1546410531-bb4caa6b424d"
              alt="School Logo"
            />
          </div>

          {/* Navigation Links - Right Aligned */}
          <div className="hidden md:flex flex-1 justify-end space-x-6">
            {links.map((link, index) => (
              <a key={index} href={link.href} className="px-3 py-2 rounded-md text-sm font-medium hover:bg-[#FF8559] hover:text-white">
                {link.title}
              </a>
            ))}

            {isAuthenticated &&
              getRoleSpecificLinks().map((link, index) => (
                <a key={index} href={link.href} className="px-3 py-2 rounded-md text-sm font-medium hover:bg-[#FF8559] hover:text-white">
                  {link.title}
                </a>
              ))}

            {/* Icons & Buttons */}
            {isAuthenticated ? (
              <>
                <button className="relative p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700" aria-label="Notifications">
                  <FaBell className="h-5 w-5" />
                  {notifications > 0 && (
                    <span className="absolute top-0 right-0 block h-4 w-4 rounded-full bg-[#E65447] text-xs text-white text-center">
                      {notifications}
                    </span>
                  )}
                </button>
                <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700" onClick={toggleDarkMode} aria-label="Toggle dark mode">
                  {isDarkMode ? <FaSun className="h-5 w-5" /> : <FaMoon className="h-5 w-5" />}
                </button>
                <button onClick={logout} className="bg-[#E65447] text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-red-700">
                  <FiLogOut className="inline mr-2" /> Logout
                </button>
              </>
            ) : (
              <button className="bg-[#FF8559] text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-[#FFB578]">Login/Register</button>
            )}
          </div>

          {/* Mobile Menu Toggle */}
          <div className="-mr-2 flex md:hidden">
            <button onClick={toggleMenu} className="inline-flex items-center justify-center p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700">
              {isOpen ? <FaTimes className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className={`px-2 pt-2 pb-3 space-y-1 sm:px-3 ${isDarkMode ? "bg-gray-900" : "bg-white"}`}>
            {links.map((link, index) => (
              <a key={index} href={link.href} className="block px-3 py-2 rounded-md text-base font-medium hover:bg-[#FF8559] hover:text-white">
                {link.title}
              </a>
            ))}

            {isAuthenticated &&
              getRoleSpecificLinks().map((link, index) => (
                <a key={index} href={link.href} className="block px-3 py-2 rounded-md text-base font-medium hover:bg-[#FF8559] hover:text-white">
                  {link.title}
                </a>
              ))}

            {isAuthenticated ? (
              <button onClick={logout} className="w-full text-left block px-3 py-2 rounded-md text-base font-medium bg-[#E65447] text-white hover:bg-red-700">
                <FiLogOut className="inline mr-2" /> Logout
              </button>
            ) : (
              <button className="w-full text-left block px-3 py-2 rounded-md text-base font-medium bg-[#FF8559] text-white hover:bg-[#FFB578]">Login/Register</button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
